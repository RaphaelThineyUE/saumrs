export type AirtableClientFields = {
  "Client Id"?: number;
  "Contact Name"?: string;
  Name?: string;
  "Contact Phone"?: string;
  "Contact Email"?: string;
  Address?: string;
  City?: string;
  State?: string;
  "Zip Code"?: number;
  Notes?: string;
  Orders?: string[];
};

export type AirtableClientRecord = {
  id: string;
  createdTime?: string;
  fields: AirtableClientFields;
};
