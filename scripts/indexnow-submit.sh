#!/bin/sh
set -eu

SITE_URL="${SITE_URL:-https://adult-addons.click}"
KEY="${INDEXNOW_KEY:-adultaddonsindexnowkey2026}"
HOST="${SITE_URL#https://}"
HOST="${HOST#http://}"
HOST="${HOST%/}"

if [ "$#" -gt 0 ]; then
  URLS="$*"
else
  set -- "$SITE_URL/" "$SITE_URL/guide"
  URLS="$*"
fi

payload=$(
  URLS="$URLS" SITE_URL="$SITE_URL" KEY="$KEY" HOST="$HOST" node <<'NODE'
const urls = process.env.URLS.split(/\s+/).filter(Boolean);
const payload = {
  host: process.env.HOST,
  key: process.env.KEY,
  keyLocation: `${process.env.SITE_URL}/${process.env.KEY}.txt`,
  urlList: urls,
};
process.stdout.write(JSON.stringify(payload));
NODE
)

echo "Submitting to IndexNow:"
for url in $URLS; do
  echo "  $url"
done

response=$(curl -sS -w "\nHTTP_STATUS:%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$payload")

status=$(printf '%s' "$response" | sed -n 's/^HTTP_STATUS://p')
body=$(printf '%s' "$response" | sed '/^HTTP_STATUS:/d')

if [ "$status" = "200" ] || [ "$status" = "202" ]; then
  echo "IndexNow accepted ($status)."
else
  echo "IndexNow returned $status" >&2
  [ -n "$body" ] && printf '%s\n' "$body" >&2
  exit 1
fi

echo
echo "Next: Google Search Console"
echo "1. Open https://search.google.com/search-console"
echo "2. Add property: $SITE_URL"
echo "3. Verify with HTML tag -> set GOOGLE_SITE_VERIFICATION in deploy env and redeploy"
echo "4. Submit sitemap: $SITE_URL/sitemap.xml"
echo
echo "Optional: Bing Webmaster Tools"
echo "1. Open https://www.bing.com/webmasters"
echo "2. Add site and set BING_SITE_VERIFICATION in deploy env"
