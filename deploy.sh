#!/bin/bash
# Deployment script with cache busting
echo "Building project..."
npm run build

echo "Adding timestamp to index.html for cache busting..."
TIMESTAMP=$(date +%s)
sed -i "s|</head>|  <meta name=\"build-timestamp\" content=\"$TIMESTAMP\">\n</head>|" dist/index.html

echo "Build complete! Files ready for deployment."
echo "Current JS file: $(ls dist/assets/*.js | head -1)"

