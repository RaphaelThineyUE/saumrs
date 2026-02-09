import Airtable from "airtable";

type AirtableErrorPayload = {
  error?: {
    message?: string;
    type?: string;
  };
  statusCode?: number;
  message?: string;
};

export type AirtableRecord<TFields> = {
  id: string;
  createdTime?: string;
  fields: TFields;
};

export type AirtableConfig = {
  baseId: string;
  apiToken: string;
};

export class AirtableConfigError extends Error {
  constructor() {
    super("Airtable is not configured");
    this.name = "AirtableConfigError";
  }
}

export class AirtableRequestError extends Error {
  status: number;
  type?: string;

  constructor(status: number, message: string, type?: string) {
    super(message);
    this.name = "AirtableRequestError";
    this.status = status;
    this.type = type;
  }
}

function getAirtableConfig(): AirtableConfig {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiToken = process.env.AIRTABLE_API_TOKEN;

  if (!baseId || !apiToken) {
    throw new AirtableConfigError();
  }

  return { baseId, apiToken };
}

export function getAirtableBase(): Airtable.Base {
  const { baseId, apiToken } = getAirtableConfig();
  const client = new Airtable({ apiKey: apiToken });

  return client.base(baseId);
}

export function toAirtableRecord<TFields extends Airtable.FieldSet>(
  record: Airtable.Record<TFields>,
): AirtableRecord<TFields> {
  return {
    id: record.id,
    createdTime: record._rawJson?.createdTime,
    fields: record.fields,
  };
}

export function isAirtableConfigError(
  error: unknown,
): error is AirtableConfigError {
  return error instanceof AirtableConfigError;
}

export function isAirtableRequestError(
  error: unknown,
): error is AirtableRequestError {
  return error instanceof AirtableRequestError;
}

export function toAirtableRequestError(error: unknown): AirtableRequestError {
  if (isAirtableRequestError(error)) {
    return error;
  }

  const payload = error as AirtableErrorPayload;
  const status = payload.statusCode || 500;
  const message =
    payload.error?.message || payload.message || "Airtable request failed";
  const type = payload.error?.type;

  return new AirtableRequestError(status, message, type);
}
