import swaggerJSDoc, { type Options } from "swagger-jsdoc";

const swaggerDefinition: Options["definition"] = {
  openapi: "3.0.0",
  info: {
    title: "Saumrs API",
    version: "1.0.0",
    description: "API documentation for the Saumrs backend.",
  },
  servers: [
    {
      url: process.env.API_BASE_URL || "http://localhost:3000",
      description: "Local server",
    },
  ],
  components: {
    schemas: {
      ContactInput: {
        type: "object",
        required: ["name", "email", "message"],
        properties: {
          name: { type: "string", example: "Jane Doe" },
          email: {
            type: "string",
            format: "email",
            example: "jane@example.com",
          },
          message: {
            type: "string",
            example: "Interested in catering options.",
          },
        },
      },
      Contact: {
        type: "object",
        properties: {
          _id: { type: "string", example: "65f1a6b8c4a6b42d1f0b1234" },
          name: { type: "string" },
          email: { type: "string", format: "email" },
          message: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      OrderProduct: {
        type: "object",
        required: ["id", "name", "quantity", "price"],
        properties: {
          id: { type: "string", example: "combo-01" },
          name: { type: "string", example: "Original Saumrs Pack" },
          quantity: { type: "integer", minimum: 1, example: 2 },
          price: { type: "number", format: "float", example: 19.99 },
        },
      },
      OrderInput: {
        type: "object",
        required: [
          "customerName",
          "customerEmail",
          "customerPhone",
          "address",
          "city",
          "state",
          "zipCode",
          "products",
          "totalAmount",
        ],
        properties: {
          customerName: { type: "string", example: "Alex Parker" },
          customerEmail: {
            type: "string",
            format: "email",
            example: "alex@example.com",
          },
          customerPhone: { type: "string", example: "+1-555-012-3456" },
          address: { type: "string", example: "123 Main St" },
          city: { type: "string", example: "Denver" },
          state: { type: "string", example: "CO" },
          zipCode: { type: "string", example: "80202" },
          products: {
            type: "array",
            items: { $ref: "#/components/schemas/OrderProduct" },
          },
          totalAmount: { type: "number", format: "float", example: 39.98 },
          notes: { type: "string", example: "Leave at front desk." },
        },
      },
      Order: {
        type: "object",
        properties: {
          _id: { type: "string", example: "65f1a6b8c4a6b42d1f0b5678" },
          customerName: { type: "string" },
          customerEmail: { type: "string", format: "email" },
          customerPhone: { type: "string" },
          address: { type: "string" },
          city: { type: "string" },
          state: { type: "string" },
          zipCode: { type: "string" },
          products: {
            type: "array",
            items: { $ref: "#/components/schemas/OrderProduct" },
          },
          totalAmount: { type: "number", format: "float" },
          notes: { type: "string" },
          orderStatus: { type: "string", example: "pending" },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      SuccessResponse: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          message: { type: "string" },
          data: { type: "object" },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          error: { type: "string" },
        },
      },
    },
  },
};

const options: Options = {
  definition: swaggerDefinition,
  apis: ["./src/routes/*.ts", "./src/server.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
