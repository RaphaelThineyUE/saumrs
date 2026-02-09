import "./airtableMock";

import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";

import { createTableMock, resetTableMocks, setTableMock } from "./airtableMock";

const CONTACTS_TABLE = "Clients";
let app: import("express").Express;

async function loadApp() {
  if (!app) {
    process.env.NODE_ENV = "test";
    process.env.AIRTABLE_CONTACTS_TABLE = "Clients";
    process.env.AIRTABLE_CLIENTS_TABLE = "Clients";
    const mod = await import("../server.js");
    app = mod.default;
  }
  return app;
}

describe("Contact routes", () => {
  beforeEach(() => {
    resetTableMocks();
  });

  it("creates a contact", async () => {
    setTableMock(
      CONTACTS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-contact",
          fields: {
            "Contact Name": "Jane Doe",
            "Contact Email": "jane@example.com",
            Notes: "Hello",
          },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api).post("/api/contacts").send({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello",
    });

    expect(response.status).toBe(201);
    expect(response.body.data.name).toBe("Jane Doe");
  });

  it("returns 400 on missing fields", async () => {
    setTableMock(CONTACTS_TABLE, createTableMock());

    const api = await loadApp();
    const response = await request(api).post("/api/contacts").send({
      name: "Jane Doe",
      email: "jane@example.com",
    });

    expect(response.status).toBe(400);
  });

  it("returns 500 on Airtable error", async () => {
    setTableMock(
      CONTACTS_TABLE,
      createTableMock({
        createError: new Error("Airtable down"),
      }),
    );

    const api = await loadApp();
    const response = await request(api).post("/api/contacts").send({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello",
    });

    expect(response.status).toBe(500);
  });

  it("lists contacts", async () => {
    setTableMock(
      CONTACTS_TABLE,
      createTableMock({
        selectRecords: [
          {
            id: "rec-1",
            fields: {
              "Contact Name": "Alex",
              "Contact Email": "alex@example.com",
              Notes: "Hi",
            },
          },
        ],
      }),
    );

    const api = await loadApp();
    const response = await request(api).get("/api/contacts");

    expect(response.status).toBe(200);
    expect(response.body[0].name).toBe("Alex");
  });

  it("fetches a contact by id", async () => {
    setTableMock(
      CONTACTS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-2",
          fields: {
            "Contact Name": "Morgan",
            "Contact Email": "morgan@example.com",
            Notes: "Note",
          },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api).get("/api/contacts/rec-2");

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Morgan");
  });

  it("updates a contact", async () => {
    setTableMock(
      CONTACTS_TABLE,
      createTableMock({
        updateRecord: {
          id: "rec-3",
          fields: {
            "Contact Name": "Jamie",
            "Contact Email": "jamie@example.com",
            Notes: "Updated",
          },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api).patch("/api/contacts/rec-3").send({
      name: "Jamie",
      email: "jamie@example.com",
      message: "Updated",
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Jamie");
  });

  it("deletes a contact", async () => {
    setTableMock(CONTACTS_TABLE, createTableMock());

    const api = await loadApp();
    const response = await request(api).delete("/api/contacts/rec-4");

    expect(response.status).toBe(200);
    expect(response.body.deleted).toBe(true);
  });
});
