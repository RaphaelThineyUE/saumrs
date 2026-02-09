import "./airtableMock";

import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { createTableMock, resetTableMocks, setTableMock } from "./airtableMock";
import { emailService } from "../services/EmailService.js";

const CLIENTS_TABLE = "Clients";
const ORDERS_TABLE = "Orders";
const PRODUCTS_TABLE = "Products";
let app: import("express").Express;

async function loadApp() {
  if (!app) {
    process.env.NODE_ENV = "test";
    process.env.AIRTABLE_CONTACTS_TABLE = "Clients";
    process.env.AIRTABLE_CLIENTS_TABLE = "Clients";
    process.env.AIRTABLE_ORDERS_TABLE = "Orders";
    process.env.AIRTABLE_PRODUCTS_TABLE = "Products";
    const mod = await import("../server.js");
    app = mod.default;
  }
  return app;
}

describe("Order routes", () => {
  beforeEach(() => {
    resetTableMocks();
  });

  it("creates an order", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-client",
          fields: { "Contact Name": "Casey" },
        },
      }),
    );
    setTableMock(
      ORDERS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-order",
          fields: {
            "Order ID": 1001,
            Client: ["rec-client"],
            Products: ["rec-product"],
            "Total Amount": 40,
            "Delivery Address": "123 Main St",
            City: "Denver",
            State: "CO",
            "Zip Code": 80202,
            Status: "Pending",
          },
        },
        updateRecord: {
          id: "rec-order",
          fields: {
            "Order ID": 1001,
            Client: ["rec-client"],
            Products: ["rec-product"],
            "Total Amount": 40,
            "Delivery Address": "123 Main St",
            City: "Denver",
            State: "CO",
            "Zip Code": 80202,
            Status: "Pending",
          },
        },
      }),
    );
    setTableMock(
      PRODUCTS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-product",
          fields: {
            "Product ID": 1,
            Name: "Starter",
            Quantity: 1,
            Price: 40,
          },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api)
      .post("/api/orders")
      .send({
        customerName: "Casey",
        customerEmail: "casey@example.com",
        customerPhone: "123",
        address: "123 Main St",
        city: "Denver",
        state: "CO",
        zipCode: "80202",
        products: [{ id: "prod-1", name: "Starter", quantity: 1, price: 40 }],
        totalAmount: 40,
      });

    expect(response.status).toBe(201);
    expect(response.body.data.id).toBe("rec-order");
    expect(response.body.progress).toBeInstanceOf(Array);
  });

  it("returns 400 on missing required fields", async () => {
    setTableMock(CLIENTS_TABLE, createTableMock());

    const api = await loadApp();
    const response = await request(api).post("/api/orders").send({
      customerName: "Casey",
      customerEmail: "casey@example.com",
      customerPhone: "123",
    });

    expect(response.status).toBe(400);
  });

  it("returns 500 on Airtable error", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        createError: new Error("Airtable down"),
      }),
    );

    const api = await loadApp();
    const response = await request(api)
      .post("/api/orders")
      .send({
        customerName: "Casey",
        customerEmail: "casey@example.com",
        customerPhone: "123",
        address: "123 Main St",
        city: "Denver",
        state: "CO",
        zipCode: "80202",
        products: [{ id: "prod-1", name: "Starter", quantity: 1, price: 40 }],
        totalAmount: 40,
      });

    expect(response.status).toBe(500);
  });

  it("creates order even if email fails", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-client-email",
          fields: { "Contact Name": "Casey" },
        },
      }),
    );
    setTableMock(
      ORDERS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-order-email",
          fields: {
            "Order ID": 2001,
            Client: ["rec-client-email"],
            Products: ["rec-product-email"],
            "Total Amount": 40,
            "Delivery Address": "123 Main St",
            City: "Denver",
            State: "CO",
            "Zip Code": 80202,
            Status: "Pending",
          },
        },
        updateRecord: {
          id: "rec-order-email",
          fields: {
            "Order ID": 2001,
            Client: ["rec-client-email"],
            Products: ["rec-product-email"],
            "Total Amount": 40,
            "Delivery Address": "123 Main St",
            City: "Denver",
            State: "CO",
            "Zip Code": 80202,
            Status: "Pending",
          },
        },
      }),
    );
    setTableMock(
      PRODUCTS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-product-email",
          fields: {
            "Product ID": 1,
            Name: "Starter",
            Quantity: 1,
            Price: 40,
          },
        },
      }),
    );

    vi.mocked(emailService.sendOrderConfirmationEmail).mockRejectedValueOnce(
      new Error("Email down"),
    );

    const api = await loadApp();
    const response = await request(api)
      .post("/api/orders")
      .send({
        customerName: "Casey",
        customerEmail: "casey@example.com",
        customerPhone: "123",
        address: "123 Main St",
        city: "Denver",
        state: "CO",
        zipCode: "80202",
        products: [{ id: "prod-1", name: "Starter", quantity: 1, price: 40 }],
        totalAmount: 40,
      });

    expect(response.status).toBe(201);
    expect(response.body.data.id).toBe("rec-order-email");
    expect(response.body.warnings).toContain("Confirmation email failed");
  });

  it("lists orders", async () => {
    setTableMock(
      ORDERS_TABLE,
      createTableMock({
        selectRecords: [
          {
            id: "rec-order-2",
            fields: {
              "Order ID": 1002,
              Client: ["rec-client"],
              Products: ["rec-product"],
              "Total Amount": 25,
              "Delivery Address": "25 Pine",
              City: "Austin",
              State: "TX",
              "Zip Code": 78701,
              Status: "Pending",
            },
          },
        ],
      }),
    );
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-client",
          fields: {
            "Contact Name": "Alex",
            "Contact Email": "alex@example.com",
            "Contact Phone": "555",
          },
        },
      }),
    );
    setTableMock(
      PRODUCTS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-product",
          fields: {
            "Product ID": 2,
            Name: "Starter",
            Quantity: 1,
            Price: 25,
          },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api).get("/api/orders");

    expect(response.status).toBe(200);
    expect(response.body[0].customerName).toBe("Alex");
  });

  it("fetches an order", async () => {
    setTableMock(
      ORDERS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-order-3",
          fields: {
            "Order ID": 1003,
            Client: ["rec-client"],
            Products: ["rec-product"],
            "Total Amount": 50,
            "Delivery Address": "99 Lake",
            City: "Miami",
            State: "FL",
            "Zip Code": 33131,
            Status: "Pending",
          },
        },
      }),
    );
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-client",
          fields: {
            "Contact Name": "Morgan",
            "Contact Email": "morgan@example.com",
            "Contact Phone": "222",
          },
        },
      }),
    );
    setTableMock(
      PRODUCTS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-product",
          fields: {
            "Product ID": 3,
            Name: "Starter",
            Quantity: 1,
            Price: 50,
          },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api).get("/api/orders/rec-order-3");

    expect(response.status).toBe(200);
    expect(response.body.customerEmail).toBe("morgan@example.com");
  });

  it("updates an order", async () => {
    setTableMock(
      ORDERS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-order-4",
          fields: {
            "Order ID": 1004,
            Client: ["rec-client"],
            Products: [],
            "Total Amount": 15,
            "Delivery Address": "1 Hill",
            City: "Dallas",
            State: "TX",
            "Zip Code": 75001,
            Status: "Pending",
          },
        },
        updateRecord: {
          id: "rec-order-4",
          fields: {
            "Order ID": 1004,
            Client: ["rec-client"],
            Products: ["rec-product"],
            "Total Amount": 15,
            "Delivery Address": "1 Hill",
            City: "Dallas",
            State: "TX",
            "Zip Code": 75001,
            Status: "Pending",
          },
        },
      }),
    );
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        updateRecord: {
          id: "rec-client",
          fields: { "Contact Name": "Riley" },
        },
        findRecord: {
          id: "rec-client",
          fields: {
            "Contact Name": "Riley",
            "Contact Email": "riley@example.com",
            "Contact Phone": "111",
          },
        },
      }),
    );
    setTableMock(
      PRODUCTS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-product",
          fields: {
            "Product ID": 4,
            Name: "Starter",
            Quantity: 1,
            Price: 15,
          },
        },
        findRecord: {
          id: "rec-product",
          fields: {
            "Product ID": 4,
            Name: "Starter",
            Quantity: 1,
            Price: 15,
          },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api)
      .patch("/api/orders/rec-order-4")
      .send({
        products: [{ id: "prod-4", name: "Starter", quantity: 1, price: 15 }],
      });

    expect(response.status).toBe(200);
    expect(response.body.id).toBe("rec-order-4");
  });

  it("deletes an order", async () => {
    setTableMock(ORDERS_TABLE, createTableMock());

    const api = await loadApp();
    const response = await request(api).delete("/api/orders/rec-order-5");

    expect(response.status).toBe(200);
    expect(response.body.deleted).toBe(true);
  });
});
