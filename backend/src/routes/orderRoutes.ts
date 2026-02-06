import express, { Request, Response } from 'express';
import { Order } from '../models/Order.js';
import { emailService } from '../services/EmailService.js';

const router = express.Router();

interface OrderRequest extends Request {
  body: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    products: Array<{
      id: string;
      name: string;
      quantity: number;
      price: number;
    }>;
    totalAmount: number;
    notes?: string;
  };
}

router.post('/', async (req: OrderRequest, res: Response) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      address,
      city,
      state,
      zipCode,
      products,
      totalAmount,
      notes,
    } = req.body;

    // Validate required fields
    if (
      !customerName ||
      !customerEmail ||
      !customerPhone ||
      !address ||
      !city ||
      !state ||
      !zipCode ||
      !products ||
      products.length === 0 ||
      !totalAmount
    ) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    // Create order
    const order = new Order({
      customerName,
      customerEmail,
      customerPhone,
      address,
      city,
      state,
      zipCode,
      products,
      totalAmount,
      notes,
      orderStatus: 'pending',
    });

    await order.save();

    // Send confirmation email to customer
    await emailService.sendOrderConfirmationEmail(
      customerName,
      customerEmail,
      order._id.toString(),
      totalAmount,
      products
    );

    // Send notification email to admin
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'raphael.thiney@gmail.com';
    await emailService.sendOrderNotificationEmail(recipientEmail, {
      customerName,
      customerEmail,
      customerPhone,
      address,
      city,
      state,
      zipCode,
      totalAmount,
      notes,
    });

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: order,
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

export default router;
