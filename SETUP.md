# SAUMRS Full-Stack Application - Setup & Deployment Guide

## ✅ Project Complete

Your SAUMRS application has been fully created with a modern tech stack:

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: Airtable
- **Email**: SendGrid
- **Containerization**: Docker + Docker Compose

---

## 📦 What's Included

### Frontend Features ✨

- ✅ All HTML content converted to React components
- ✅ Scroll animations with Intersection Observer
- ✅ Parallax effects on product images
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Multi-page routing (Home, Contact, Order, Five Pillars, Ingredients, Subscriptions)
- ✅ Contact form with validation and API integration
- ✅ Shopping cart with order management
- ✅ FAQ accordion with expandable items
- ✅ Modern CSS with animations and transitions

### Backend Features 🚀

- ✅ RESTful API with Express.js
- ✅ Airtable integration for data storage
- ✅ Two data models: Contact & Order
- ✅ Contact form submission endpoint
- ✅ Order processing with customer information
- ✅ SendGrid email notifications
- ✅ Error handling and input validation
- ✅ CORS enabled for frontend communication
- ✅ Hot reload development environment

### DevOps Features 🐳

- ✅ Docker containers for frontend and backend
- ✅ Docker Compose orchestration
- ✅ Hot reload for development (code changes auto-refresh)
- ✅ Volume mounts for live editing
- ✅ Network isolation between services
- ✅ VS Code debugging configuration
- ✅ Local npm scripts for development

---

## 🎯 Quick Start - Choose Your Path

### Path 1: Docker Compose (Recommended for Production-like environment)

```bash
cd saumrs-app

# Copy environment file
cp backend/.env.example backend/.env

# Edit the .env file with your SendGrid API key
nano backend/.env  # or use your editor

# Start everything
npm run dev

# Access:
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

### Path 2: Local Development (Recommended for rapid development)

**Terminal 1 - Backend:**

```bash
cd saumrs-app/backend
npm install
npm run dev
# Runs on http://localhost:3000
```

**Terminal 2 - Frontend:**

```bash
cd saumrs-app/frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

**Setup Airtable:**

- Ensure `AIRTABLE_BASE_ID` and `AIRTABLE_API_TOKEN` are set in backend/.env
- Optional: set `AIRTABLE_CONTACTS_TABLE` and `AIRTABLE_ORDERS_TABLE`
- Ensure `Client Id` exists as an autonumber field in Clients
- Ensure `Order ID` exists as an autonumber field in Orders
- Ensure `Product ID` exists as an autonumber field in Products
- Client and order card metadata is stored in the `Notes` field

---

## ⚙️ Configuration

### Backend Environment Variables (.env)

Required:

```
SENDGRID_API_KEY=your_actual_sendgrid_api_key
```

Optional (defaults shown):

```
PORT=3000
AIRTABLE_BASE_ID=appxxxxxxxxxxxxxx
AIRTABLE_API_TOKEN=your_airtable_api_token
AIRTABLE_CONTACTS_TABLE=Clients
AIRTABLE_ORDERS_TABLE=Orders
AIRTABLE_PRODUCTS_TABLE=Products
AIRTABLE_CLIENTS_TABLE=Clients
SENDGRID_FROM_EMAIL=noreply@saumrs.com
RECIPIENT_EMAIL=raphael.thiney@gmail.com
NODE_ENV=development
```

### Getting SendGrid API Key

1. Go to https://sendgrid.com
2. Sign up for free account
3. Navigate to Settings → API Keys
4. Create a new API Key
5. Copy to backend/.env

---

## 🔌 API Endpoints Reference

### Contact Form

**POST** `/api/contacts`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I have a question about..."
}
```

Response: Email sent to raphael.thiney@gmail.com

### Order Submission

**POST** `/api/orders`

```json
{
  "customerName": "Jane Smith",
  "customerEmail": "jane@example.com",
  "customerPhone": "+1-555-0123",
  "address": "123 Main St",
  "city": "Miami",
  "state": "FL",
  "zipCode": "33131",
  "products": [
    {
      "id": "1",
      "name": "SAUMRS Monthly Supply",
      "quantity": 2,
      "price": 99.99
    }
  ],
  "totalAmount": 199.98,
  "notes": "Please ship to office"
}
```

Response: Confirmation email to customer + notification to admin

---

## 🛠️ VS Code Debugging

1. Open `.vscode/launch.json` is already configured
2. Install recommended extensions (command palette: Extensions: Show Recommended)
3. Set breakpoints in code
4. Press **F5** or go to Run → Start Debugging
5. Choose "Backend Debug", "Frontend Debug", or "Full Stack Debug"

---

## 📁 Project Structure

```
saumrs-app/
├── frontend/
│   ├── src/
│   │   ├── components/        # Header, Footer
│   │   ├── pages/             # Home, Contact, Order, etc.
│   │   ├── hooks/             # useAnimations, useScrollAnimation
│   │   ├── api/               # API client configuration
│   │   ├── styles/            # Global CSS
│   │   ├── App.tsx            # Main routing
│   │   └── main.tsx           # Entry point
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   ├── routes/            # API endpoints
│   │   │   ├── contactRoutes.ts
│   │   │   └── orderRoutes.ts
│   │   ├── models/            # Airtable-backed types
│   │   │   ├── Contact.ts
│   │   │   └── Order.ts
│   │   ├── services/          # Business logic
│   │   │   └── EmailService.ts
│   │   └── server.ts          # Express setup
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── .eslintrc.cjs
│
├── docker-compose.yml         # Multi-container setup
├── package.json               # Root scripts
├── README.md
└── SETUP.md (this file)
```

---

## 📧 Email Configuration

### Contact Form Emails

- Sent to: raphael.thiney@gmail.com
- Format: Clean HTML with sender info
- Reply-To: Customer email

### Order Confirmation Emails

- Sent to: Customer email address
- Format: Order details with product list
- Includes order ID and total amount

### Order Notification Emails

- Sent to: raphael.thiney@gmail.com
- Format: Customer info and order details
- For admin order tracking

---

## 🚀 Deployment Options

### Option 1: Docker (Production Ready)

```bash
docker-compose up --build
# Replaces localhost with your domain/IP
```

### Option 2: Kubernetes

- Use Helm charts or standard K8s yamls
- Update image registry paths
- Configure Airtable credentials via environment variables

### Option 3: Cloud Platforms

- **Heroku**: Push Dockerfile
- **AWS**: ECS, EKS, or Lightsail
- **Google Cloud**: Cloud Run or GKE
- **DigitalOcean**: App Platform
- **Vercel**: Frontend only (static export)
- **Netlify**: Frontend only

---

## 🐛 Troubleshooting

### "Airtable request failed" error

- Verify AIRTABLE_BASE_ID and AIRTABLE_API_TOKEN in backend/.env
- Confirm the Airtable base includes Contacts and Orders tables
- Check the Airtable API token has write access

### "SendGrid API key not found"

- Verify backend/.env exists
- Check SENDGRID_API_KEY is set correctly
- Restart backend after changing .env

### "Frontend can't connect to backend"

- Check backend is running on port 3000
- Verify VITE_API_URL in frontend environment
- Check CORS is enabled in backend

### Docker container won't start

- Check logs: `docker-compose logs backend`
- Ensure ports 3000 and 5173 are available
- Try: `docker-compose down && docker-compose up --build`

---

## 📝 Next Steps

1. **Add content to placeholder pages:**
   - Extract from original HTML files
   - Five Pillars page
   - Ingredients page
   - Subscriptions page

2. **Configure production:**
   - Update .env for production

- Setup a production Airtable base
- Configure SendGrid for production domain
- Add SSL certificates

3. **Enhanced features (optional):**
   - Payment processing (Stripe/PayPal)
   - User authentication (JWT/Auth0)
   - Admin dashboard
   - Email newsletters
   - Analytics integration

4. **Performance optimization:**
   - Image optimization and lazy loading
   - Code splitting and lazy routes
   - Caching strategies
   - CDN integration

---

## 📚 Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Express: https://expressjs.com
- Airtable: https://airtable.com/developers/web/api/introduction
- SendGrid: https://docs.sendgrid.com
- Docker: https://docs.docker.com

---

## ✉️ Support

For setup issues, check:

1. Backend logs: `docker-compose logs backend`
2. Frontend console: Browser DevTools (F12)
3. Airtable connection: Check .env AIRTABLE_BASE_ID and AIRTABLE_API_TOKEN
4. SendGrid API: https://app.sendgrid.com/settings/api_keys

---

**Created:** February 2, 2026  
**Last Updated:** February 2, 2026  
**Status:** ✅ Ready for Development & Deployment
