import express, { Request, Response } from "express";
import { Contact } from "../models/Contact.js";
import { emailService } from "../services/EmailService.js";

const router = express.Router();

interface ContactRequest extends Request {
  body: {
    name: string;
    email: string;
    message: string;
  };
}

router.post("/", async (req: ContactRequest, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    // Send email
    await emailService.sendContactFormEmail(name, email, message);

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Failed to submit contact form" });
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
router.get("/", async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
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
