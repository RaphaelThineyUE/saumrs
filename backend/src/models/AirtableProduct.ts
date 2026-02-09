import type { Attachment } from "airtable";

export type AirtableProductFields = {
  "Product ID"?: number;
  "Name"?: string;
  "Quantity"?: number;
  "Price"?: number;
  "Description"?: string;
  "Image"?: Attachment[];
  "Orders"?: string[];
};

export type AirtableProductRecord = {
  id: string;
  createdTime?: string;
  fields: AirtableProductFields;
};
