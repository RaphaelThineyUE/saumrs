import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";

// Load environment variables
dotenv.config();

import contactRoutes from "./routes/contactRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import airtableClientsRoutes from "./routes/airtableClientsRoutes.js";
import { swaggerSpec } from "./swagger.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health check
 *     description: Confirms the backend is reachable.
 *     tags:
 *       - System
 *     responses:
 *       '200':
 *         description: Backend status message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Backend is running
 */
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

// Swagger UI
if (process.env.NODE_ENV !== "production") {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/clients", airtableClientsRoutes);

// Start server
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log("Env check:", {
      sendgridApiKey: Boolean(process.env.SENDGRID_API_KEY),
      airtableBaseId: Boolean(process.env.AIRTABLE_BASE_ID),
      airtableApiToken: Boolean(process.env.AIRTABLE_API_TOKEN),
      nodeEnv: process.env.NODE_ENV || "development",
    });
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
