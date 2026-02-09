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
          address: { type: "string" },
          city: { type: "string" },
          state: { type: "string" },
          zipCode: { type: "string" },
          cardName: { type: "string" },
          cardLast4: { type: "string", example: "4242" },
          cardExpiry: { type: "string", example: "02/30" },
        },
      },
      Contact: {
        type: "object",
        properties: {
          id: { type: "string", example: "rec0b1234a6b42d1f0" },
          clientId: { type: "number", example: 1024 },
          name: { type: "string" },
          email: { type: "string", format: "email" },
          message: { type: "string" },
          address: { type: "string" },
          city: { type: "string" },
          state: { type: "string" },
          zipCode: { type: "string" },
          cardName: { type: "string" },
          cardLast4: { type: "string" },
          cardExpiry: { type: "string" },
          createdTime: { type: "string", format: "date-time" },
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
          cardName: { type: "string" },
          cardLast4: { type: "string", example: "4242" },
          cardExpiry: { type: "string", example: "02/30" },
        },
      },
      Order: {
        type: "object",
        properties: {
          id: { type: "string", example: "rec0b5678a6b42d1f0" },
          orderId: { type: "number", example: 2048 },
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
          cardName: { type: "string" },
          cardLast4: { type: "string" },
          cardExpiry: { type: "string" },
          orderStatus: { type: "string", example: "pending" },
          createdTime: { type: "string", format: "date-time" },
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
