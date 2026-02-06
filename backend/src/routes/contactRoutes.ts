import express, { Request, Response } from 'express';
import { Contact } from '../models/Contact.js';
import { emailService } from '../services/EmailService.js';

const router = express.Router();

interface ContactRequest extends Request {
  body: {
    name: string;
    email: string;
    message: string;
  };
}

router.post('/', async (req: ContactRequest, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      res.status(400).json({ error: 'All fields are required' });
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
      message: 'Contact form submitted successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;
