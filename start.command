#!/bin/bash
# ==============================================================================
# Jayraji Group - 1-Click macOS Web Platform Launcher
# ==============================================================================

# Change to the script's directory
cd "$(dirname "$0")" || exit 1

# Configure project embedded Node.js toolchain
export PATH="$(pwd)/.toolchain/bin:$PATH"

echo ""
echo "=================================================================="
echo "   ✨ JAYRAJI GROUP - ROYAL COLD-PRESSED EDIBLE OILS ✨"
echo "   Starting 3D Interactive Luxury Platform..."
echo "=================================================================="
echo ""
echo "  ➜ Local Web URL:    http://localhost:3000"
echo "  ➜ Launching your default browser in 2 seconds..."
echo "  ➜ Press Ctrl+C in this terminal window to stop the server anytime."
echo ""

# Open browser automatically after 2 seconds
(sleep 2 && open "http://localhost:3000") &

# Start Vite dev server with host enabled
exec npx vite --port 3000 --host
