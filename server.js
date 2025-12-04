// Load environment variables
require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');

// Check if Stripe key is loaded
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ ERROR: STRIPE_SECRET_KEY not found in .env.local');
  console.error('Please make sure .env.local exists with your Stripe secret key');
  console.error('Current working directory:', process.cwd());
  process.exit(1);
}

console.log('✅ Stripe key loaded successfully');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Create line items for Stripe Checkout
    const lineItems = cart.map((item) => {
      const price = item.salePrice || item.originalPrice;
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: [item.url],
          },
          unit_amount: Math.round(price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`,
      metadata: {
        // Store cart info in metadata for reference
        cartItems: JSON.stringify(cart.map(item => ({ id: item.id, title: item.title, quantity: item.quantity }))),
      },
    });

    return res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
  console.log(`📦 API endpoint: http://localhost:${PORT}/api/create-checkout-session`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use!`);
    console.error(`💡 Try: lsof -ti:${PORT} | xargs kill -9`);
    console.error(`   Or change PORT in server.js`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

