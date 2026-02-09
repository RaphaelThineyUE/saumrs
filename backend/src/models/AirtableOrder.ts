export type AirtableOrderStatus =
  | "Pending"
  | "Processing"
  | "Delivered"
  | "Cancelled";

export type AirtableOrderSource = "Online" | "Phone" | "Email" | "In-person";

export type AirtableOrderPriority = "Low" | "Medium" | "High";

export type AirtableOrderFields = {
  "Order ID"?: number;
  "Client"?: string[];
  "Order Date"?: string;
  "Products"?: string[];
  "Total Amount"?: number;
  "Notes"?: string;
  "Delivery Address"?: string;
  "City"?: string;
  "State"?: string;
  "Zip Code"?: number;
  "Status"?: AirtableOrderStatus;
  "Order Source"?: AirtableOrderSource;
  "Priority"?: AirtableOrderPriority;
  "Delivery Instructions"?: string;
  "Product Quantities"?: number;
};

export type AirtableOrderRecord = {
  id: string;
  createdTime?: string;
  fields: AirtableOrderFields;
};
