import sgMail from "@sendgrid/mail";

export class EmailService {
  constructor() {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      throw new Error("SENDGRID_API_KEY environment variable is not set");
    }
    sgMail.setApiKey(apiKey);
  }

  async sendContactFormEmail(
    name: string,
    email: string,
    message: string,
  ): Promise<void> {
    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "raphael.thiney@gmail.com";
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@saumrs.com";

    const msg = {
      to: recipientEmail,
      from: fromEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await sgMail.send(msg);
  }

  async sendOrderConfirmationEmail(
    customerName: string,
    customerEmail: string,
    customerPhone: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    notes: string | undefined,
    orderId: string,
    totalAmount: number,
    products: Array<{ name: string; quantity: number; price: number }>,
  ): Promise<void> {
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@saumrs.com";

    const productList = products
      .map(
        (p) =>
          `<tr>
            <td style="padding: 8px;">${p.name}</td>
            <td style="padding: 8px;">x${p.quantity}</td>
            <td style="padding: 8px;">$${(p.price * p.quantity).toFixed(2)}</td>
          </tr>`,
      )
      .join("");

    const msg = {
      to: customerEmail,
      from: fromEmail,
      subject: `Order Confirmation - S.A.U.M.R.S`,
      html: `
        <h2>Order Confirmed</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City, State, ZIP:</strong> ${city}, ${state} ${zipCode}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
        <h3>Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 6px 8px; text-align: left;">Product</th>
              <th style="padding: 6px 8px; text-align: left;">Quantity</th>
              <th style="padding: 6px 8px; text-align: left;">Line Total</th>
            </tr>
          </thead>
          <tbody>
            ${productList || '<tr><td colspan="3" style="padding: 6px 8px;">No items</td></tr>'}
          </tbody>
        </table>
        <p><strong>Total Amount:</strong> $${totalAmount.toFixed(2)}</p>
        <p>We will notify you when your order ships.</p>
      `,
    };

    await sgMail.send(msg);
  }

  async sendOrderNotificationEmail(
    recipientEmail: string,
    orderData: Record<string, unknown>,
  ): Promise<void> {
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@saumrs.com";
    const products = Array.isArray(orderData.products)
      ? (orderData.products as Array<{
          name: string;
          quantity: number;
          price: number;
        }>)
      : [];
    const productList = products
      .map(
        (product) =>
          `<tr>
            <td style="padding: 6px 8px; border-bottom: 1px solid #eee;">${product.name}</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid #eee;">x${product.quantity}</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid #eee;">$${(product.price * product.quantity).toFixed(2)}</td>
          </tr>`,
      )
      .join("");

    const msg = {
      to: recipientEmail,
      from: fromEmail,
      subject: `New Order Received - ${orderData.customerName}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Customer Name:</strong> ${orderData.customerName}</p>
        <p><strong>Customer Email:</strong> ${orderData.customerEmail}</p>
        <p><strong>Customer Phone:</strong> ${orderData.customerPhone}</p>
        <p><strong>Address:</strong> ${orderData.address}</p>
        <p><strong>City, State, ZIP:</strong> ${orderData.city}, ${orderData.state} ${orderData.zipCode}</p>
        <p><strong>Total Amount:</strong> $${(orderData.totalAmount as number).toFixed(2)}</p>
        <p><strong>Notes:</strong> ${orderData.notes || "None"}</p>
        <h3>Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 6px 8px; text-align: left;">Product</th>
              <th style="padding: 6px 8px; text-align: left;">Quantity</th>
              <th style="padding: 6px 8px; text-align: left;">Line Total</th>
            </tr>
          </thead>
          <tbody>
            ${productList || '<tr><td colspan="3" style="padding: 6px 8px;">No items</td></tr>'}
          </tbody>
        </table>
      `,
    };

    await sgMail.send(msg);
  }
}

export const emailService = new EmailService();
