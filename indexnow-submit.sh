#!/bin/bash

###############################################################################
# IndexNow Submission Script (Bash version)
#
# This script submits URLs to IndexNow API using curl
#
# Usage:
#   chmod +x indexnow-submit.sh
#   ./indexnow-submit.sh
###############################################################################

# Configuration
HOST="reachfy.io"
KEY="144fc473b47344079fee0356e1e54c68"
KEY_LOCATION="https://reachfy.io/144fc473b47344079fee0356e1e54c68.txt"

# Build JSON payload
PAYLOAD=$(cat <<EOF
{
  "host": "$HOST",
  "key": "$KEY",
  "keyLocation": "$KEY_LOCATION",
  "urlList": [
    "https://reachfy.io/",
    "https://reachfy.io/pricing",
    "https://reachfy.io/about",
    "https://reachfy.io/contact",
    "https://reachfy.io/privacy",
    "https://reachfy.io/terms",
    "https://reachfy.io/refund"
  ]
}
EOF
)

echo "🚀 Submitting URLs to IndexNow API..."
echo ""
echo "Host: $HOST"
echo "URLs: 7 pages"
echo ""

# Submit to IndexNow API
RESPONSE=$(curl -s -w "\n%{http_code}" \
  -X POST \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$PAYLOAD" \
  https://api.indexnow.org/IndexNow)

# Extract HTTP status code
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

echo "📊 Response Status: $HTTP_CODE"
echo ""

case $HTTP_CODE in
  200)
    echo "✅ Success! URLs submitted to IndexNow API"
    echo "🔍 Search engines will be notified about your content updates"
    ;;
  202)
    echo "✅ Accepted! URLs received and will be processed"
    ;;
  400)
    echo "❌ Bad Request - Invalid format"
    echo "Response: $BODY"
    ;;
  403)
    echo "❌ Forbidden - Key validation failed"
    echo "Make sure the key file is accessible at: $KEY_LOCATION"
    ;;
  422)
    echo "⚠️  Unprocessable Entity - URL list may contain invalid URLs"
    echo "Response: $BODY"
    ;;
  429)
    echo "⚠️  Too Many Requests - Rate limit exceeded"
    echo "Wait before submitting again"
    ;;
  *)
    echo "⚠️  Unexpected response: $HTTP_CODE"
    echo "Response: $BODY"
    ;;
esac

echo ""
echo "📝 Submitted URLs:"
echo "   1. https://reachfy.io/"
echo "   2. https://reachfy.io/pricing"
echo "   3. https://reachfy.io/about"
echo "   4. https://reachfy.io/contact"
echo "   5. https://reachfy.io/privacy"
echo "   6. https://reachfy.io/terms"
echo "   7. https://reachfy.io/refund"

