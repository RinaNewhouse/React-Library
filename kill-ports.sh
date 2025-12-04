#!/bin/bash
# Quick script to kill processes on common dev ports

echo "🔪 Killing processes on ports 3000, 3001, and 5001..."

lsof -ti:3000 | xargs kill -9 2>/dev/null && echo "✅ Killed port 3000" || echo "   Port 3000 was free"
lsof -ti:3001 | xargs kill -9 2>/dev/null && echo "✅ Killed port 3001" || echo "   Port 3001 was free"
lsof -ti:5001 | xargs kill -9 2>/dev/null && echo "✅ Killed port 5001" || echo "   Port 5001 was free"

echo ""
echo "✨ All clear! You can now start your servers."

