#!/usr/bin/env bash
set -e
cd /app
if [ -f package.json ]; then
  corepack enable || true
  if command -v pnpm >/dev/null 2>&1; then pm=pnpm
  elif command -v yarn >/dev/null 2>&1; then pm=yarn
  else pm=npm
  fi
  $pm install
fi
echo "✅ setup done"
