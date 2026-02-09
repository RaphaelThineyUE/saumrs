import express, { Request, Response } from "express";
import type { AirtableClientFields } from "../models/AirtableClient.js";
import type { AirtableOrderFields } from "../models/AirtableOrder.js";
import type { AirtableProductFields } from "../models/AirtableProduct.js";
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
const ORDERS_TABLE = process.env.AIRTABLE_ORDERS_TABLE || "Orders";
const CLIENTS_TABLE = process.env.AIRTABLE_CONTACTS_TABLE || "Clients";
const PRODUCTS_TABLE = process.env.AIRTABLE_PRODUCTS_TABLE || "Products";

interface OrderRequest extends Request {
  body: OrderInput;
}

type OrderProduct = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type OrderInput = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  products: OrderProduct[];
  totalAmount: number;
  notes?: string;
  cardName?: string;
  cardLast4?: string;
  cardExpiry?: string;
  orderStatus?: "pending" | "confirmed" | "shipped" | "delivered";
};

type OrderRecord = OrderInput & {
  id: string;
  orderId?: number;
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

function parseProducts(value: unknown): OrderProduct[] {
  if (Array.isArray(value)) {
    return value.filter(
      (item) => typeof item === "object" && item !== null,
    ) as OrderProduct[];
  }

  if (typeof value === "string" && value.trim().length > 0) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? (parsed as OrderProduct[]) : [];
    } catch {
      return [];
    }
  }

  return [];
}

function buildOrderFields(
  input: Partial<OrderInput>,
): OrderInput | Partial<OrderInput> {
  const fields: Partial<OrderInput> = {};

  if (typeof input.customerName === "string") {
    fields.customerName = input.customerName;
  }
  if (typeof input.customerEmail === "string") {
    fields.customerEmail = input.customerEmail;
  }
  if (typeof input.customerPhone === "string") {
    fields.customerPhone = input.customerPhone;
  }
  if (typeof input.address === "string") {
    fields.address = input.address;
  }
  if (typeof input.city === "string") {
    fields.city = input.city;
  }
  if (typeof input.state === "string") {
    fields.state = input.state;
  }
  if (typeof input.zipCode === "string") {
    fields.zipCode = input.zipCode;
  }
  if (Array.isArray(input.products)) {
    fields.products = input.products;
  }
  if (typeof input.totalAmount === "number") {
    fields.totalAmount = input.totalAmount;
  }
  if (typeof input.notes === "string") {
    fields.notes = input.notes;
  }
  if (typeof input.cardName === "string") {
    fields.cardName = input.cardName;
  }
  if (typeof input.cardLast4 === "string") {
    fields.cardLast4 = input.cardLast4;
  }
  if (typeof input.cardExpiry === "string") {
    fields.cardExpiry = input.cardExpiry;
  }
  if (typeof input.orderStatus === "string") {
    fields.orderStatus = input.orderStatus;
  }

  return fields as OrderInput | Partial<OrderInput>;
}
function formatCardDetails(input: Partial<OrderInput>): string | undefined {
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

function parseZipNumber(zipCode: string): number | undefined {
  const value = Number.parseInt(zipCode, 10);
  return Number.isNaN(value) ? undefined : value;
}

function mapStatusToAirtable(status?: string): string {
  switch (status) {
    case "confirmed":
    case "shipped":
      return "Processing";
    case "delivered":
      return "Delivered";
    case "pending":
    default:
      return "Pending";
  }
}

function mapStatusFromAirtable(status?: string): OrderRecord["orderStatus"] {
  switch (status) {
    case "Processing":
      return "confirmed";
    case "Delivered":
      return "delivered";
    case "Pending":
    case "Cancelled":
    default:
      return "pending";
  }
}

function buildClientFieldsFromOrder(
  order: OrderInput,
): Record<string, unknown> {
  const fields: Record<string, unknown> = {
    "Contact Name": order.customerName,
    Name: order.customerName,
    "Contact Email": order.customerEmail,
    "Contact Phone": order.customerPhone,
    Address: order.address,
    City: order.city,
    State: order.state,
  };
  const zipValue = parseZipNumber(order.zipCode);
  if (zipValue !== undefined) {
    fields["Zip Code"] = zipValue;
  }

  const notes: string[] = [];
  if (order.notes) {
    notes.push(order.notes);
  }
  const cardDetails = formatCardDetails(order);
  if (cardDetails) {
    notes.push(cardDetails);
  }
  if (notes.length) {
    fields["Notes"] = notes.join("\n");
  }

  return fields;
}

function buildClientFieldsFromPartialOrder(
  order: Partial<OrderInput>,
): Record<string, unknown> {
  const fields: Record<string, unknown> = {};

  if (order.customerName) {
    fields["Contact Name"] = order.customerName;
    fields["Name"] = order.customerName;
  }
  if (order.customerEmail) {
    fields["Contact Email"] = order.customerEmail;
  }
  if (order.customerPhone) {
    fields["Contact Phone"] = order.customerPhone;
  }
  if (order.address) {
    fields["Address"] = order.address;
  }
  if (order.city) {
    fields["City"] = order.city;
  }
  if (order.state) {
    fields["State"] = order.state;
  }
  if (order.zipCode) {
    const zipValue = parseZipNumber(order.zipCode);
    if (zipValue !== undefined) {
      fields["Zip Code"] = zipValue;
    }
  }

  const notes: string[] = [];
  if (order.notes) {
    notes.push(order.notes);
  }
  const cardDetails = formatCardDetails(order);
  if (cardDetails) {
    notes.push(cardDetails);
  }
  if (notes.length) {
    fields["Notes"] = notes.join("\n");
  }

  return fields;
}

function buildOrderFieldsForAirtable(
  order: OrderInput,
  clientRecordId: string,
): Record<string, unknown> {
  const fields: Record<string, unknown> = {
    Client: [clientRecordId],
    "Order Date": new Date().toISOString(),
    "Total Amount": order.totalAmount,
    "Delivery Address": order.address,
    City: order.city,
    State: order.state,
    Status: mapStatusToAirtable(order.orderStatus),
    "Order Source": "Online",
    Priority: "Medium",
    "Product Quantities": order.products.reduce(
      (sum, item) => sum + item.quantity,
      0,
    ),
  };

  const zipValue = parseZipNumber(order.zipCode);
  if (zipValue !== undefined) {
    fields["Zip Code"] = zipValue;
  }

  if (order.notes) {
    fields["Delivery Instructions"] = order.notes;
  }

  const cardDetails = formatCardDetails(order);
  if (cardDetails) {
    fields["Notes"] = cardDetails;
  }

  return fields;
}

function buildOrderUpdateFields(
  order: Partial<OrderInput>,
  clientRecordId?: string,
): Record<string, unknown> {
  const fields: Record<string, unknown> = {};

  if (clientRecordId) {
    fields["Client"] = [clientRecordId];
  }
  if (typeof order.totalAmount === "number") {
    fields["Total Amount"] = order.totalAmount;
  }
  if (order.address) {
    fields["Delivery Address"] = order.address;
  }
  if (order.city) {
    fields["City"] = order.city;
  }
  if (order.state) {
    fields["State"] = order.state;
  }
  if (order.zipCode) {
    const zipValue = parseZipNumber(order.zipCode);
    if (zipValue !== undefined) {
      fields["Zip Code"] = zipValue;
    }
  }
  if (order.notes) {
    fields["Delivery Instructions"] = order.notes;
  }
  if (order.orderStatus) {
    fields["Status"] = mapStatusToAirtable(order.orderStatus);
  }
  if (order.products) {
    fields["Product Quantities"] = order.products.reduce(
      (sum, item) => sum + item.quantity,
      0,
    );
  }

  const cardDetails = formatCardDetails(order);
  if (cardDetails) {
    fields["Notes"] = cardDetails;
  }

  return fields;
}

function mapClientToOrderFields(
  client?: AirtableRecord<Record<string, unknown>>,
): Pick<OrderRecord, "customerName" | "customerEmail" | "customerPhone"> {
  const fields = client?.fields || {};
  const nameField =
    typeof fields["Contact Name"] === "string"
      ? fields["Contact Name"]
      : typeof fields["Name"] === "string"
        ? fields["Name"]
        : "";

  return {
    customerName: nameField,
    customerEmail:
      typeof fields["Contact Email"] === "string"
        ? fields["Contact Email"]
        : "",
    customerPhone:
      typeof fields["Contact Phone"] === "string"
        ? fields["Contact Phone"]
        : "",
  };
}

function mapProductsFromRecords(
  productRecords: Array<AirtableRecord<AirtableProductFields>>,
): OrderProduct[] {
  return productRecords.map((record) => {
    const fields = record.fields || {};
    const productId =
      typeof fields["Product ID"] === "number"
        ? String(fields["Product ID"])
        : record.id;
    const quantity =
      typeof fields["Quantity"] === "number" ? fields["Quantity"] : 1;
    const price = typeof fields["Price"] === "number" ? fields["Price"] : 0;

    return {
      id: productId,
      name: typeof fields["Name"] === "string" ? fields["Name"] : "",
      quantity,
      price,
    };
  });
}

function mapOrderRecord(
  record: AirtableRecord<AirtableOrderFields>,
  client?: AirtableRecord<Record<string, unknown>>,
  products?: Array<AirtableRecord<AirtableProductFields>>,
): OrderRecord {
  const fields = record.fields || {};
  const zipField =
    typeof fields["Zip Code"] === "number" ? String(fields["Zip Code"]) : "";
  const clientFields = mapClientToOrderFields(client);

  return {
    id: record.id,
    orderId:
      typeof fields["Order ID"] === "number" ? fields["Order ID"] : undefined,
    customerName: clientFields.customerName,
    customerEmail: clientFields.customerEmail,
    customerPhone: clientFields.customerPhone,
    address:
      typeof fields["Delivery Address"] === "string"
        ? fields["Delivery Address"]
        : "",
    city: typeof fields["City"] === "string" ? fields["City"] : "",
    state: typeof fields["State"] === "string" ? fields["State"] : "",
    zipCode: zipField,
    products: products ? mapProductsFromRecords(products) : [],
    totalAmount:
      typeof fields["Total Amount"] === "number" ? fields["Total Amount"] : 0,
    notes:
      typeof fields["Delivery Instructions"] === "string"
        ? fields["Delivery Instructions"]
        : undefined,
    orderStatus: mapStatusFromAirtable(
      typeof fields["Status"] === "string" ? fields["Status"] : undefined,
    ),
    createdTime: record.createdTime,
  };
}

router.post("/", async (req: OrderRequest, res: Response) => {
  try {
    const fields = buildOrderFields(req.body) as OrderInput;
    const progress: Array<{ label: string; status: "success" | "warning" }> = [];
    const warnings: string[] = [];

    // Validate required fields
    if (
      !fields.customerName ||
      !fields.customerEmail ||
      !fields.customerPhone ||
      !fields.address ||
      !fields.city ||
      !fields.state ||
      !fields.zipCode ||
      !fields.products ||
      fields.products.length === 0 ||
      typeof fields.totalAmount !== "number"
    ) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const base = getAirtableBase();
    const createdClients = await base(CLIENTS_TABLE).create(
      [
        {
          fields: buildClientFieldsFromOrder({
            ...fields,
            orderStatus: fields.orderStatus || "pending",
          }),
        } as Airtable.RecordData<AirtableClientFields>,
      ],
      { typecast: true },
    );
    const clientRecord = Array.isArray(createdClients)
      ? createdClients[0]
      : createdClients;
    progress.push({ label: "Account created", status: "success" });

    const createdOrders = await base(ORDERS_TABLE).create(
      [
        {
          fields: buildOrderFieldsForAirtable(
            {
              ...fields,
              orderStatus: fields.orderStatus || "pending",
            },
            clientRecord.id,
          ),
        } as Airtable.RecordData<AirtableOrderFields>,
      ],
      { typecast: true },
    );
    const orderRecord = Array.isArray(createdOrders)
      ? createdOrders[0]
      : createdOrders;
    progress.push({ label: "Order created", status: "success" });

    const productRecords = await Promise.all(
      fields.products.map(async (product) => {
        const createdProducts = await base(PRODUCTS_TABLE).create(
          [
            {
              fields: {
                "Name": product.name,
                "Quantity": product.quantity,
                "Price": product.price,
                "Description": `Product ID: ${product.id}`,
                "Orders": [orderRecord.id],
              },
            } as Airtable.RecordData<AirtableProductFields>,
          ],
          { typecast: true },
        );
        const record = Array.isArray(createdProducts)
          ? createdProducts[0]
          : createdProducts;
        progress.push({
          label: `Product created: ${product.name}`,
          status: "success",
        });
        return record;
      }),
    );

    const productIds = productRecords.map((record) => record.id);
    const updatedOrderRecord = await base(ORDERS_TABLE).update(
      orderRecord.id,
      { "Products": productIds } as AirtableOrderFields,
      { typecast: true },
    );

    const order = mapOrderRecord(
      toAirtableRecord(
        updatedOrderRecord as Airtable.Record<AirtableOrderFields>,
      ),
      toAirtableRecord(
        clientRecord as Airtable.Record<AirtableClientFields>,
      ),
      productRecords.map((record) =>
        toAirtableRecord(record as Airtable.Record<AirtableProductFields>),
      ),
    );

    // Send confirmation email to customer
    try {
      await emailService.sendOrderConfirmationEmail(
        fields.customerName,
        fields.customerEmail,
        fields.customerPhone,
        fields.address,
        fields.city,
        fields.state,
        fields.zipCode,
        fields.notes,
        order.id,
        fields.totalAmount,
        fields.products,
      );
      progress.push({
        label: "Confirmation email sent",
        status: "success",
      });
    } catch (error) {
      console.error("Order confirmation email failed:", error);
      warnings.push("Confirmation email failed");
      progress.push({
        label: "Confirmation email failed",
        status: "warning",
      });
    }

    // Send notification email to admin
    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "raphael.thiney@gmail.com";
    try {
      await emailService.sendOrderNotificationEmail(recipientEmail, {
        customerName: fields.customerName,
        customerEmail: fields.customerEmail,
        customerPhone: fields.customerPhone,
        address: fields.address,
        city: fields.city,
        state: fields.state,
        zipCode: fields.zipCode,
        products: fields.products,
        totalAmount: fields.totalAmount,
        notes: fields.notes,
      });
      progress.push({
        label: "Admin notification sent",
        status: "success",
      });
    } catch (error) {
      console.error("Order notification email failed:", error);
      warnings.push("Admin notification email failed");
      progress.push({
        label: "Admin notification failed",
        status: "warning",
      });
    }

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: order,
      progress,
      warnings,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    handleAirtableError(res, error, "Failed to place order");
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
router.get("/", async (_req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const orderRecords: Array<AirtableRecord<AirtableOrderFields>> = [];

    await new Promise<void>((resolve, reject) => {
      base(ORDERS_TABLE)
        .select({ pageSize: 100 })
        .eachPage(
          (pageRecords, fetchNextPage) => {
            orderRecords.push(
              ...pageRecords.map((record) =>
                toAirtableRecord(
                  record as Airtable.Record<AirtableOrderFields>,
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

    const orders = await Promise.all(
      orderRecords.map(async (record) => {
        const fields = record.fields || {};
        const clientIds = Array.isArray(fields["Client"])
          ? (fields["Client"] as string[])
          : [];
        const productIds = Array.isArray(fields["Products"])
          ? (fields["Products"] as string[])
          : [];

        const clientRecord = clientIds.length
            ? toAirtableRecord(
              (await base(CLIENTS_TABLE).find(clientIds[0])) as Airtable.Record<
                AirtableClientFields
              >,
            )
          : undefined;
        const productRecords = await Promise.all(
          productIds.map(async (productId) =>
            toAirtableRecord(
              (await base(PRODUCTS_TABLE).find(productId)) as Airtable.Record<
                AirtableProductFields
              >,
            ),
          ),
        );

        return mapOrderRecord(record, clientRecord, productRecords);
      }),
    );
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    handleAirtableError(res, error, "Failed to fetch orders");
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
    const base = getAirtableBase();
    const record = toAirtableRecord(
      (await base(ORDERS_TABLE).find(req.params.id)) as Airtable.Record<
        AirtableOrderFields
      >,
    );
    const fields = record.fields || {};
    const clientIds = Array.isArray(fields["Client"])
      ? (fields["Client"] as string[])
      : [];
    const productIds = Array.isArray(fields["Products"])
      ? (fields["Products"] as string[])
      : [];

    const clientRecord = clientIds.length
      ? toAirtableRecord(
          (await base(CLIENTS_TABLE).find(clientIds[0])) as Airtable.Record<
            AirtableClientFields
          >,
        )
      : undefined;
    const productRecords = await Promise.all(
      productIds.map(async (productId) =>
        toAirtableRecord(
          (await base(PRODUCTS_TABLE).find(productId)) as Airtable.Record<
            AirtableProductFields
          >,
        ),
      ),
    );

    res.json(mapOrderRecord(record, clientRecord, productRecords));
  } catch (error) {
    console.error("Error fetching order:", error);
    handleAirtableError(res, error, "Failed to fetch order");
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const fields = buildOrderFields(req.body);
    if (Object.keys(fields).length === 0) {
      res.status(400).json({ error: "No fields provided" });
      return;
    }

    const base = getAirtableBase();
    const existingOrder = toAirtableRecord(
      (await base(ORDERS_TABLE).find(req.params.id)) as Airtable.Record<
        AirtableOrderFields
      >,
    );
    const orderFields = existingOrder.fields || {};
    const clientIds = Array.isArray(orderFields["Client"])
      ? (orderFields["Client"] as string[])
      : [];
    const clientId = clientIds[0];

    if (clientId) {
      const clientUpdateFields = buildClientFieldsFromPartialOrder(fields);
      if (Object.keys(clientUpdateFields).length > 0) {
        await base(CLIENTS_TABLE).update(
          clientId,
          clientUpdateFields as AirtableClientFields,
          { typecast: true },
        );
      }
    }

    const orderUpdateFields = buildOrderUpdateFields(fields, clientId);

    let productRecords: Array<AirtableRecord<AirtableProductFields>> = [];
    if (fields.products && fields.products.length > 0) {
      productRecords = await Promise.all(
        fields.products.map((product) =>
          base(PRODUCTS_TABLE)
            .create(
              [
                {
                  fields: {
                    "Name": product.name,
                    "Quantity": product.quantity,
                    "Price": product.price,
                    "Description": `Product ID: ${product.id}`,
                    "Orders": [req.params.id],
                  },
                } as Airtable.RecordData<AirtableProductFields>,
              ],
              { typecast: true },
            )
            .then((created) =>
              Array.isArray(created) ? created[0] : created,
            )
            .then((record) =>
              toAirtableRecord(
                record as Airtable.Record<AirtableProductFields>,
              ),
            ),
        ),
      );
      orderUpdateFields["Products"] = productRecords.map((record) => record.id);
    }

    const record = toAirtableRecord(
      (await base(ORDERS_TABLE).update(
        req.params.id,
        orderUpdateFields as AirtableOrderFields,
        { typecast: true },
      )) as Airtable.Record<AirtableOrderFields>,
    );

    const clientRecord = clientId
      ? toAirtableRecord(
          (await base(CLIENTS_TABLE).find(clientId)) as Airtable.Record<
            AirtableClientFields
          >,
        )
      : undefined;
    const productsToMap = productRecords.length
      ? productRecords
      : Array.isArray(record.fields?.["Products"])
        ? await Promise.all(
            (record.fields["Products"] as string[]).map(async (productId) =>
              toAirtableRecord(
                (await base(PRODUCTS_TABLE).find(productId)) as Airtable.Record<
                  AirtableProductFields
                >,
              ),
            ),
          )
        : [];

    res.json(mapOrderRecord(record, clientRecord, productsToMap));
  } catch (error) {
    console.error("Error updating order:", error);
    handleAirtableError(res, error, "Failed to update order");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const base = getAirtableBase();
    const record = await base(ORDERS_TABLE).destroy(req.params.id);
    res.json({ id: record.id, deleted: true });
  } catch (error) {
    console.error("Error deleting order:", error);
    handleAirtableError(res, error, "Failed to delete order");
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
