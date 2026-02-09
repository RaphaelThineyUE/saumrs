import express, { Request, Response } from "express";
import type { AirtableClientFields } from "../models/AirtableClient.js";
import { emailService } from "../services/EmailService.js";
import Airtable from "airtable";
import {
  getAirtableBase,
  isAirtableConfigError,
  toAirtableRecord,
  toAirtableRequestError,
  type AirtableRecord,
} from "../services/airtableService.js";

const router = express.Router();
const CONTACTS_TABLE = process.env.AIRTABLE_CONTACTS_TABLE || "Clients";

interface ContactRequest extends Request {
  body: ContactInput;
}

type ContactInput = {
  name: string;
  email: string;
  message: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  cardName?: string;
  cardLast4?: string;
  cardExpiry?: string;
};

type ContactRecord = {
  id: string;
  clientId?: number;
  name: string;
  email: string;
  message: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdTime?: string;
};

function handleAirtableError(
  res: Response,
  error: unknown,
  fallbackMessage: string,
): void {
  if (isAirtableConfigError(error)) {
    res.status(500).json({
      error: "Airtable is not configured",
      details: "Set AIRTABLE_BASE_ID and AIRTABLE_API_TOKEN",
    });
    return;
  }

  const requestError = toAirtableRequestError(error);
  res.status(requestError.status).json({
    error: requestError.message,
    type: requestError.type,
  });
}

function formatCardDetails(input: Partial<ContactInput>): string | undefined {
  const parts: string[] = [];

  if (input.cardName) {
    parts.push(`Card Name: ${input.cardName}`);
  }
  if (input.cardLast4) {
    parts.push(`Card Last4: ${input.cardLast4}`);
  }
  if (input.cardExpiry) {
    parts.push(`Card Expiry: ${input.cardExpiry}`);
  }

  return parts.length ? parts.join(" | ") : undefined;
}

function buildContactFields(
  input: Partial<ContactInput>,
): Partial<AirtableClientFields> {
  const fields: Partial<AirtableClientFields> = {};
  const notes: string[] = [];

  if (typeof input.name === "string" && input.name.trim()) {
    fields["Contact Name"] = input.name.trim();
    fields["Name"] = input.name.trim();
  }
  if (typeof input.email === "string" && input.email.trim()) {
    fields["Contact Email"] = input.email.trim();
  }
  if (typeof input.message === "string" && input.message.trim()) {
    notes.push(input.message.trim());
  }
  if (typeof input.address === "string" && input.address.trim()) {
    fields["Address"] = input.address.trim();
  }
  if (typeof input.city === "string" && input.city.trim()) {
    fields["City"] = input.city.trim();
  }
  if (typeof input.state === "string" && input.state.trim()) {
    fields["State"] = input.state.trim();
  }
  if (typeof input.zipCode === "string" && input.zipCode.trim()) {
    const zipValue = Number.parseInt(input.zipCode, 10);
    if (!Number.isNaN(zipValue)) {
      fields["Zip Code"] = zipValue;
    }
  }

  const cardDetails = formatCardDetails(input);
  if (cardDetails) {
    notes.push(cardDetails);
  }

  if (notes.length) {
    fields["Notes"] = notes.join("\n");
  }

  return fields;
}

function mapContactRecord(
  record: AirtableRecord<AirtableClientFields>,
): ContactRecord {
  const fields = record.fields || {};

  const nameField =
    typeof fields["Contact Name"] === "string"
      ? fields["Contact Name"]
      : typeof fields["Name"] === "string"
        ? fields["Name"]
        : "";
  const emailField =
    typeof fields["Contact Email"] === "string" ? fields["Contact Email"] : "";
  const notesField = typeof fields["Notes"] === "string" ? fields["Notes"] : "";
  const zipField =
    typeof fields["Zip Code"] === "number"
      ? String(fields["Zip Code"])
      : undefined;

  return {
    id: record.id,
    clientId:
      typeof fields["Client Id"] === "number" ? fields["Client Id"] : undefined,
    name: nameField,
    email: emailField,
    message: notesField,
    address:
      typeof fields["Address"] === "string" ? fields["Address"] : undefined,
    city: typeof fields["City"] === "string" ? fields["City"] : undefined,
    state: typeof fields["State"] === "string" ? fields["State"] : undefined,
    zipCode: zipField,
    createdTime: record.createdTime,
  };
}

router.post("/", async (req: ContactRequest, res: Response) => {
  try {
    const fields = buildContactFields(req.body);

    // Validate input
    if (
      typeof fields["Contact Name"] !== "string" ||
      typeof fields["Contact Email"] !== "string" ||
      !fields["Notes"]
    ) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const base = getAirtableBase();
    const created = await base(CONTACTS_TABLE).create(
      [{ fields }],
      { typecast: true },
    );
    const record = Array.isArray(created) ? created[0] : created;
    const contact = mapContactRecord(
      toAirtableRecord(record as Airtable.Record<AirtableClientFields>),
    );

    // Send email
    await emailService.sendContactFormEmail(
      contact.name,
      contact.email,
      contact.message,
    );

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    handleAirtableError(res, error, "Failed to submit contact form");
  }
});

/**
 * @openapi
 * /api/contacts:
 *   post:
 *     summary: Submit contact form
 *     description: Stores a contact submission and sends a notification email.
 *     tags:
 *       - Contacts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactInput'
 *           examples:
 *             default:
 *               value:
 *                 name: Jane Doe
 *                 email: jane@example.com
 *                 message: Interested in catering options.
 *     responses:
 *       '201':
 *         description: Contact submission accepted.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Contact'
 *       '400':
 *         description: Missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Failed to submit contact form.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const records: Array<AirtableRecord<AirtableClientFields>> = [];

    await new Promise<void>((resolve, reject) => {
      base(CONTACTS_TABLE)
        .select({ pageSize: 100 })
        .eachPage(
          (pageRecords, fetchNextPage) => {
            records.push(
              ...pageRecords.map((record) =>
                toAirtableRecord(
                  record as Airtable.Record<AirtableClientFields>,
                ),
              ),
            );
            fetchNextPage();
          },
          (error) => {
            if (error) {
              reject(error);
              return;
            }
            resolve();
          },
        );
    });

    res.json(records.map(mapContactRecord));
  } catch (error) {
    console.error("Error fetching contacts:", error);
    handleAirtableError(res, error, "Failed to fetch contacts");
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const record = await base(CONTACTS_TABLE).find(req.params.id);
    res.json(
      mapContactRecord(
        toAirtableRecord(record as Airtable.Record<AirtableClientFields>),
      ),
    );
  } catch (error) {
    console.error("Error fetching contact:", error);
    handleAirtableError(res, error, "Failed to fetch contact");
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const fields = buildContactFields(req.body);
    if (Object.keys(fields).length === 0) {
      res.status(400).json({ error: "No fields provided" });
      return;
    }

    const base = getAirtableBase();
    const record = await base(CONTACTS_TABLE).update(
      req.params.id,
      fields,
      { typecast: true },
    );
    res.json(
      mapContactRecord(
        toAirtableRecord(record as Airtable.Record<AirtableClientFields>),
      ),
    );
  } catch (error) {
    console.error("Error updating contact:", error);
    handleAirtableError(res, error, "Failed to update contact");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const record = await base(CONTACTS_TABLE).destroy(req.params.id);
    res.json({ id: record.id, deleted: true });
  } catch (error) {
    console.error("Error deleting contact:", error);
    handleAirtableError(res, error, "Failed to delete contact");
  }
});

/**
 * @openapi
 * /api/contacts:
 *   get:
 *     summary: List contact submissions
 *     description: Returns contact submissions in descending creation order.
 *     tags:
 *       - Contacts
 *     responses:
 *       '200':
 *         description: List of contact submissions.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *       '500':
 *         description: Failed to fetch contacts.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
export default router;
