# Stripe Integration Setup Guide

## Prerequisites
1. Create a free Stripe account at https://stripe.com
2. Get your test API keys from the Stripe Dashboard

## Environment Variables Setup

### Local Development

1. Create a `.env.local` file in the root of your project (same level as `package.json`)

2. Add your Stripe test keys:
```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

**Important:** 
- Never commit `.env.local` to git (it's already in `.gitignore`)
- Use test keys (starting with `sk_test_`) for development
- Get your keys from: https://dashboard.stripe.com/test/apikeys

### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name:** `STRIPE_SECRET_KEY`
   - **Value:** Your Stripe secret key (use test key: `sk_test_...`)
   - **Environment:** Select all (Production, Preview, Development)

## Testing the Integration

### Test Credit Cards (Stripe Test Mode)

Use these test cards to simulate payments:

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Requires Authentication:** `4000 0025 0000 3155`

**For all test cards:**
- Use any future expiration date (e.g., 12/34)
- Use any 3-digit CVC
- Use any ZIP code

### Testing Flow

1. Add books to cart
2. Click "Proceed to Checkout"
3. You'll be redirected to Stripe's checkout page
4. Enter test card details
5. Complete payment
6. You'll be redirected back to the success page

## Notes

- All payments are in **test mode** - no real charges will be made
- The cart will automatically clear after successful checkout
- Check your Stripe Dashboard to see test transactions

