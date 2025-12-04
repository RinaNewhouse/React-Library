# Using Vercel CLI for Development

## Why Vercel CLI?

✅ **One command** - Runs both React app AND API routes  
✅ **No port conflicts** - Vercel handles everything  
✅ **Matches production** - Same environment as deployment  
✅ **Faster** - No need for separate Express server  

## How to Use

### First Time Setup
```bash
vercel dev
```

If it asks you to login or link a project:
- Login with your Vercel account (or create one - it's free)
- Link to your existing project or create new one
- It will detect your React app automatically

### Daily Use
Just run:
```bash
vercel dev
```

That's it! It will:
- Start React app (usually on port 3000)
- Handle `/api/*` routes automatically
- Load environment variables from `.env.local`

## What Changed

- **Removed:** Express server (`server.js`) - not needed anymore
- **Updated:** Cart.jsx now uses `/api/create-checkout-session` (works everywhere)
- **Kept:** `/api/create-checkout-session.js` - this is your backend now

## Troubleshooting

- **"Not logged in"**: Run `vercel login`
- **Port conflicts**: Vercel will ask to use a different port
- **Environment variables**: Make sure `.env.local` has `STRIPE_SECRET_KEY`

## For Production

When you deploy to Vercel:
- The `/api/` routes work automatically
- No Express server needed
- Environment variables from Vercel dashboard

