# SAUMRS - React + TypeScript + Vite + Node.js/Express + Airtable

A modern full-stack web application for S.A.U.M.R.S (Superfoods make Superhumans) with React frontend, Node.js/Express backend, Airtable database, and SendGrid email integration.

## 📋 Project Structure

```
saumrs-app/
├── frontend/               # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/     # Reusable React components (Header, Footer)
│   │   ├── pages/          # Page components (Home, Contact, Order, etc.)
│   │   ├── hooks/          # Custom React hooks (scroll animations, parallax)
│   │   ├── api/            # API client (axios)
│   │   ├── styles/         # Global CSS
│   │   ├── App.tsx         # Main app with routing
│   │   └── main.tsx        # Entry point
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── Dockerfile
│
├── backend/                # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── routes/         # API routes (contacts, orders)
│   │   ├── models/         # Airtable-backed types (Contact, Order)
│   │   ├── services/       # Business logic (EmailService)
│   │   └── server.ts       # Express server setup
│   ├── tsconfig.json
│   ├── package.json
│   ├── .env.example
│   ├── Dockerfile
│   └── .eslintrc.cjs
│
├── docker-compose.yml      # Multi-container orchestration
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)
- SendGrid API key (for email functionality)

### Local Development (without Docker)

1. **Clone and install dependencies:**

   ```bash
   cd saumrs-app
   bash setup.sh
   ```

2. **Setup backend environment:**

   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env and add your SendGrid API key
   ```

3. **Configure Airtable credentials:**

   ```bash
   # Ensure AIRTABLE_BASE_ID and AIRTABLE_API_TOKEN are set in backend/.env
   # Optionally set AIRTABLE_CONTACTS_TABLE and AIRTABLE_ORDERS_TABLE
   ```

4. **Start backend (Terminal 1):**

   ```bash
   cd backend
   npm run dev
   ```

   Backend runs on `http://localhost:3000`

5. **Start frontend (Terminal 2):**

   ```bash
   cd frontend
   npm run dev
   ```

   Frontend runs on `http://localhost:5173`

### Docker Compose Development

1. **Setup environment:**

   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your SendGrid API key
   ```

2. **Start all services:**

   ```bash
   docker-compose up
   ```

   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

3. **Stop services:**

   ```bash
   docker-compose down
   ```

4. **View logs:**
   ```bash
   docker-compose logs -f backend
   docker-compose logs -f frontend
   ```

## 🔧 Configuration

### Environment Variables

**Backend (.env)**

```
PORT=3000
AIRTABLE_BASE_ID=appxxxxxxxxxxxxxx
AIRTABLE_API_TOKEN=your_airtable_api_token
AIRTABLE_CONTACTS_TABLE=Clients
AIRTABLE_ORDERS_TABLE=Orders
AIRTABLE_PRODUCTS_TABLE=Products
AIRTABLE_CLIENTS_TABLE=Clients
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@saumrs.com
RECIPIENT_EMAIL=raphael.thiney@gmail.com
NODE_ENV=development
```

**Frontend (Vite)**

- `VITE_API_URL=http://localhost:3000` (automatically used in docker-compose)

### Airtable Tables

Create these tables in your Airtable base (field names are case-sensitive):

- **Clients**: `Client Id` (autonumber), `Contact Name`, `Contact Email`, `Address`, `City`, `State`, `Zip Code`, `Notes` (long text), `Orders` (linked records)
- **Orders**: `Order ID` (autonumber), `Client` (linked records), `Products` (linked records), `Delivery Address`, `Delivery City`, `Delivery State`, `Delivery Zip Code`, `Order Total` (number), `Status` (single select), `Notes` (long text)
- **Products**: `Product ID` (autonumber), `Name`, `Quantity` (number), `Price` (currency/number), `Description`, `Image`, `Orders` (linked records)

Card metadata is appended to the `Notes` field on Clients and Orders.

## 📦 Features

### Frontend (React + TypeScript + Vite)

- ✅ Responsive design with CSS Grid/Flexbox
- ✅ Scroll animations using Intersection Observer
- ✅ Parallax effects on images
- ✅ React Router for multi-page navigation
- ✅ Contact form with validation
- ✅ Shopping cart with order management
- ✅ TypeScript for type safety
- ✅ Vite for fast development and optimized builds

### Backend (Node.js + Express + TypeScript)

- ✅ RESTful API with Express.js
- ✅ Airtable integration for data storage
- ✅ Contact form submission
- ✅ Order processing
- ✅ SendGrid email notifications
- ✅ Error handling and validation
- ✅ CORS enabled for frontend integration
- ✅ TypeScript for type safety

### Database (Airtable)

- Contacts table (name, email, message)
- Orders table (customer info, products, total, status)

### Email (SendGrid)

- Contact form notifications sent to raphael.thiney@gmail.com
- Order confirmation emails to customers
- Order notification emails to admin

## 🔌 API Endpoints

### Contacts

- `POST /api/contacts` - Submit contact form
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string"
  }
  ```
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/contacts/:id` - Get specific contact
- `PATCH /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

### Orders

- `POST /api/orders` - Submit order
  ```json
  {
    "customerName": "string",
    "customerEmail": "string",
    "customerPhone": "string",
    "address": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "products": [
      {
        "id": "string",
        "name": "string",
        "quantity": "number",
        "price": "number"
      }
    ],
    "totalAmount": "number",
    "notes": "string (optional)"
  }
  ```
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/:id` - Get specific order
- `PATCH /api/orders/:id` - Update order
- `DELETE /api/orders/:id` - Delete order

## 🛠️ Development

### VS Code Debugging

The project includes configurations for debugging Node.js. To debug:

1. Add breakpoints in VS Code
2. Run backend: `npm run dev` in backend directory
3. Or press F5 to start debugging session

### Code Quality

**Linting:**

```bash
cd backend && npm run lint
cd frontend && npm run lint
```

**Building:**

```bash
cd backend && npm run build
cd frontend && npm run build
```

## 🌐 Production Deployment

### Build images:

```bash
docker-compose up --build
```

### Production considerations:

- Update `.env` with production SendGrid API key
- Use a production Airtable base and scoped API token
- Set `NODE_ENV=production`
- Configure proper CORS origins
- Use environment-specific configurations
- Add SSL/TLS certificates
- Set up reverse proxy (nginx)

## 📝 Content

All HTML content from the original static pages has been converted to React components:

- **Home** - Main landing page with FAQs, testimonials, nutrition info
- **Contact** - Contact form with location and hours
- **Order** - Shopping cart and checkout
- **Five Pillars** - (Placeholder - add content from five-pillars-page.html)
- **Ingredients** - (Placeholder - add content from ingredients-page.html)
- **Subscriptions** - (Placeholder - add content from subscriptions-styled.html)

## 🎨 Styling

- Global styles in `frontend/src/styles/global.css`
- Component-specific CSS co-located with components
- CSS Grid and Flexbox for responsive layouts
- Mobile-first responsive design
- Animation keyframes for scroll effects

## 📄 License

© 2026 SAUMRS. All rights reserved.

## 🤝 Support

For issues or questions, contact: raphael@SAUMRS.COM

---

**Created:** February 2, 2026  
**Stack:** React 18 + TypeScript + Vite + Node.js + Express + Airtable + SendGrid
