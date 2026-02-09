import { vi } from "vitest";

type AirtableRecord = {
  id: string;
  fields: Record<string, unknown>;
  createdTime?: string;
};

type TableMock = {
  select: () => {
    eachPage: (
      page: (records: AirtableRecord[], next: () => void) => void,
      done: (error?: Error | null) => void,
    ) => void;
  };
  find: (id: string) => Promise<AirtableRecord>;
  create: (
    records: Array<{ fields: Record<string, unknown> }>,
  ) => Promise<AirtableRecord[] | AirtableRecord>;
  update: (
    id: string,
    fields: Record<string, unknown>,
  ) => Promise<AirtableRecord>;
  destroy: (id: string) => Promise<{ id: string }>;
};

const tableMocks = new Map<string, TableMock>();

const base = (tableName: string) => {
  const table = tableMocks.get(tableName);
  if (!table) {
    throw new Error(`Missing mock for table ${tableName}`);
  }
  return table;
};

export function setTableMock(tableName: string, table: TableMock) {
  tableMocks.set(tableName, table);
}

export function resetTableMocks() {
  tableMocks.clear();
}

export function createTableMock(config?: {
  selectRecords?: AirtableRecord[];
  findRecord?: AirtableRecord;
  createRecord?: AirtableRecord;
  updateRecord?: AirtableRecord;
  selectError?: Error;
  findError?: Error;
  createError?: Error;
  updateError?: Error;
  destroyError?: Error;
}) {
  const selectRecords = config?.selectRecords ?? [];
  const findRecord = config?.findRecord ?? {
    id: "rec-find",
    fields: {},
  };
  const createRecord = config?.createRecord ?? {
    id: "rec-create",
    fields: {},
  };
  const updateRecord = config?.updateRecord ?? {
    id: "rec-update",
    fields: {},
  };

  return {
    select: () => ({
      eachPage: (page, done) => {
        if (config?.selectError) {
          done(config.selectError);
          return;
        }
        page(selectRecords, () => undefined);
        done();
      },
    }),
    find: async () => {
      if (config?.findError) {
        throw config.findError;
      }
      return findRecord;
    },
    create: async () => {
      if (config?.createError) {
        throw config.createError;
      }
      return [createRecord];
    },
    update: async () => {
      if (config?.updateError) {
        throw config.updateError;
      }
      return updateRecord;
    },
    destroy: async (id: string) => {
      if (config?.destroyError) {
        throw config.destroyError;
      }
      return { id };
    },
  } satisfies TableMock;
}

vi.mock("airtable", () => {
  class AirtableMock {
    base() {
      return base;
    }
  }

  return { default: AirtableMock };
});

vi.mock("../services/airtableService.js", () => {
  return {
    getAirtableBase: () => base,
    isAirtableConfigError: () => false,
    toAirtableRecord: (record: AirtableRecord) => record,
    toAirtableRequestError: (error: {
      status?: number;
      message?: string;
      type?: string;
    }) => ({
      status: error.status || 500,
      message: error.message || "Airtable request failed",
      type: error.type,
    }),
  };
});

vi.mock("../services/EmailService.js", () => {
  return {
    emailService: {
      sendContactFormEmail: () => Promise.resolve(),
      sendOrderConfirmationEmail: () => Promise.resolve(),
      sendOrderNotificationEmail: () => Promise.resolve(),
    },
  };
});
