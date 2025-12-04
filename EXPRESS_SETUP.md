# Express Server Setup Guide

## Quick Start

### 1. Fix npm permissions (if needed)

If you get permission errors, run this in your terminal:
```bash
sudo chown -R 501:20 "/Users/rinanewhouse/.npm"
```

### 2. Install dependencies

```bash
npm install express cors dotenv
```

### 3. Run both servers

You need to run **two terminals**:

**Terminal 1 - Express Server (Backend):**
```bash
npm run server
```
You should see: `🚀 Express server running on http://localhost:5000`

**Terminal 2 - React App (Frontend):**
```bash
npm start
```
This will start React on `http://localhost:3000`

### 4. Test the checkout

1. Open `http://localhost:3000` in your browser
2. Add books to cart
3. Click "Proceed to Checkout"
4. You should be redirected to Stripe checkout

## How It Works

- **Development (Local):**
  - Express server runs on port 5000
  - React app runs on port 3000
  - Cart.jsx automatically detects localhost and uses Express server

- **Production (Vercel):**
  - Vercel uses the `/api/create-checkout-session.js` serverless function
  - Cart.jsx automatically uses the relative path for production
  - No Express server needed (Vercel handles it)

## Troubleshooting

- **Port 5000 already in use?** Change `PORT` in `server.js` or kill the process
- **CORS errors?** Make sure Express server is running
- **Can't connect?** Check that both servers are running in separate terminals

