import express, { Request, Response } from "express";
import { Order } from "../models/Order.js";
import { emailService } from "../services/EmailService.js";

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

router.post("/", async (req: OrderRequest, res: Response) => {
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
      res.status(400).json({ error: "All fields are required" });
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
      orderStatus: "pending",
    });

    await order.save();

    // Send confirmation email to customer
    await emailService.sendOrderConfirmationEmail(
      customerName,
      customerEmail,
      order._id.toString(),
      totalAmount,
      products,
    );

    // Send notification email to admin
    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "raphael.thiney@gmail.com";
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
      message: "Order placed successfully",
      data: order,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

/**
 * @openapi
 * /api/orders:
 *   post:
 *     summary: Place an order
 *     description: Creates a new order and sends confirmation and notification emails.
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *           examples:
 *             default:
 *               value:
 *                 customerName: Alex Parker
 *                 customerEmail: alex@example.com
 *                 customerPhone: +1-555-012-3456
 *                 address: 123 Main St
 *                 city: Denver
 *                 state: CO
 *                 zipCode: 80202
 *                 products:
 *                   - id: combo-01
 *                     name: Original Saumrs Pack
 *                     quantity: 2
 *                     price: 19.99
 *                 totalAmount: 39.98
 *                 notes: Leave at front desk.
 *     responses:
 *       '201':
 *         description: Order created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Order'
 *       '400':
 *         description: Missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Failed to place order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

/**
 * @openapi
 * /api/orders:
 *   get:
 *     summary: List orders
 *     description: Returns orders in descending creation order.
 *     tags:
 *       - Orders
 *     responses:
 *       '200':
 *         description: List of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       '500':
 *         description: Failed to fetch orders.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return;
    }
    res.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ error: "Failed to fetch order" });
  }
});

/**
 * @openapi
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     description: Returns a single order by its identifier.
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order identifier.
 *     responses:
 *       '200':
 *         description: Order details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       '404':
 *         description: Order not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Failed to fetch order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
export default router;
