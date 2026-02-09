import "./airtableMock";

import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";

import { createTableMock, resetTableMocks, setTableMock } from "./airtableMock";

const CLIENTS_TABLE = "Clients";
let app: import("express").Express;

async function loadApp() {
  if (!app) {
    process.env.NODE_ENV = "test";
    process.env.AIRTABLE_CLIENTS_TABLE = "Clients";
    const mod = await import("../server.js");
    app = mod.default;
  }
  return app;
}

describe("Airtable clients routes", () => {
  beforeEach(() => {
    resetTableMocks();
  });

  it("lists clients", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        selectRecords: [
          {
            id: "rec-client",
            fields: { "Contact Name": "Sam" },
          },
        ],
      }),
    );

    const api = await loadApp();
    const response = await request(api).get("/api/clients");

    expect(response.status).toBe(200);
    expect(response.body.records[0].id).toBe("rec-client");
  });

  it("returns 500 on Airtable error", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        selectError: new Error("Airtable down"),
      }),
    );

    const api = await loadApp();
    const response = await request(api).get("/api/clients");

    expect(response.status).toBe(500);
  });

  it("creates a client", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        createRecord: {
          id: "rec-new-client",
          fields: { Name: "Taylor" },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api)
      .post("/api/clients")
      .send({ Name: "Taylor" });

    expect(response.status).toBe(201);
    expect(response.body.id).toBe("rec-new-client");
  });

  it("fetches a client", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        findRecord: {
          id: "rec-client-2",
          fields: { Name: "Pat" },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api).get("/api/clients/rec-client-2");

    expect(response.status).toBe(200);
    expect(response.body.fields.Name).toBe("Pat");
  });

  it("updates a client", async () => {
    setTableMock(
      CLIENTS_TABLE,
      createTableMock({
        updateRecord: {
          id: "rec-client-3",
          fields: { Name: "Jordan" },
        },
      }),
    );

    const api = await loadApp();
    const response = await request(api)
      .patch("/api/clients/rec-client-3")
      .send({ Name: "Jordan" });

    expect(response.status).toBe(200);
    expect(response.body.fields.Name).toBe("Jordan");
  });

  it("deletes a client", async () => {
    setTableMock(CLIENTS_TABLE, createTableMock());

    const api = await loadApp();
    const response = await request(api).delete("/api/clients/rec-client-4");

    expect(response.status).toBe(200);
    expect(response.body.deleted).toBe(true);
  });
});
