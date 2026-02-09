import express, { Request, Response } from "express";
import Airtable from "airtable";
import {
  getAirtableBase,
  isAirtableConfigError,
  toAirtableRecord,
  toAirtableRequestError,
  type AirtableRecord,
} from "../services/airtableService.js";

const router = express.Router();
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_CLIENTS_TABLE || "Clients";

function normalizeFields(payload: unknown): Airtable.FieldSet | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const body = payload as Record<string, unknown>;
  if (body.fields && typeof body.fields === "object") {
    return body.fields as Airtable.FieldSet;
  }

  return body as Airtable.FieldSet;
}

function handleAirtableError(res: Response, error: unknown): void {
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

/**
 * @openapi
 * /api/clients:
 *   get:
 *     summary: List Airtable Clients
 *     description: Returns all records from the Clients table in Airtable.
 *     tags:
 *       - Airtable
 *     responses:
 *       '200':
 *         description: List of Airtable records.
 *       '500':
 *         description: Airtable not configured or request failed.
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const records: Array<AirtableRecord<Airtable.FieldSet>> = [];

    await new Promise<void>((resolve, reject) => {
      base(AIRTABLE_TABLE_NAME)
        .select({ pageSize: 100 })
        .eachPage(
          (pageRecords, fetchNextPage) => {
            records.push(
              ...pageRecords.map((record) =>
                toAirtableRecord(
                  record as Airtable.Record<Airtable.FieldSet>,
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

    res.json({ records });
  } catch (error) {
    console.error("Error fetching Airtable clients:", error);
    handleAirtableError(res, error);
  }
});

/**
 * @openapi
 * /api/clients/{id}:
 *   get:
 *     summary: Get Airtable client by ID
 *     tags:
 *       - Airtable
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Airtable record.
 *       '500':
 *         description: Airtable not configured or request failed.
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const record = await base(AIRTABLE_TABLE_NAME).find(req.params.id);
    res.json(toAirtableRecord(record as Airtable.Record<Airtable.FieldSet>));
  } catch (error) {
    console.error("Error fetching Airtable client:", error);
    handleAirtableError(res, error);
  }
});

/**
 * @openapi
 * /api/clients:
 *   post:
 *     summary: Create Airtable client
 *     tags:
 *       - Airtable
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fields:
 *                 type: object
 *     responses:
 *       '201':
 *         description: Airtable record created.
 *       '500':
 *         description: Airtable not configured or request failed.
 */
router.post("/", async (req: Request, res: Response) => {
  const fields = normalizeFields(req.body);
  if (!fields) {
    res.status(400).json({ error: "Request body must include fields" });
    return;
  }

  try {
    const base = getAirtableBase();
    const created = await base(AIRTABLE_TABLE_NAME).create(
      [{ fields } as Airtable.RecordData<Airtable.FieldSet>],
      { typecast: true },
    );
    const record = Array.isArray(created) ? created[0] : created;
    res.status(201).json(
      toAirtableRecord(record as Airtable.Record<Airtable.FieldSet>),
    );
  } catch (error) {
    console.error("Error creating Airtable client:", error);
    handleAirtableError(res, error);
  }
});

/**
 * @openapi
 * /api/clients/{id}:
 *   patch:
 *     summary: Update Airtable client
 *     tags:
 *       - Airtable
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fields:
 *                 type: object
 *     responses:
 *       '200':
 *         description: Airtable record updated.
 *       '500':
 *         description: Airtable not configured or request failed.
 */
router.patch("/:id", async (req: Request, res: Response) => {
  const fields = normalizeFields(req.body);
  if (!fields) {
    res.status(400).json({ error: "Request body must include fields" });
    return;
  }

  try {
    const base = getAirtableBase();
    const record = await base(AIRTABLE_TABLE_NAME).update(
      req.params.id,
      fields as Airtable.FieldSet,
      { typecast: true },
    );
    res.json(
      toAirtableRecord(record as Airtable.Record<Airtable.FieldSet>),
    );
  } catch (error) {
    console.error("Error updating Airtable client:", error);
    handleAirtableError(res, error);
  }
});

/**
 * @openapi
 * /api/clients/{id}:
 *   delete:
 *     summary: Delete Airtable client
 *     tags:
 *       - Airtable
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Airtable record deleted.
 *       '500':
 *         description: Airtable not configured or request failed.
 */
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const record = await base(AIRTABLE_TABLE_NAME).destroy(req.params.id);
    res.json({ id: record.id, deleted: true });
  } catch (error) {
    console.error("Error deleting Airtable client:", error);
    handleAirtableError(res, error);
  }
});

export default router;
