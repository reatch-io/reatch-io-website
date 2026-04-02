# IndexNow Integration for Reachfy.io

## What is IndexNow?

IndexNow is a protocol that allows website owners to instantly notify search engines (Bing, Yandex, Naver, Seznam.cz) when content is created, updated, or deleted. This helps search engines discover your content faster.

## Setup

### 1. Key File (Already Done ✅)

Your IndexNow API key file is already in place:
- File: `/public/144fc473b47344079fee0356e1e54c68.txt`
- Key: `144fc473b47344079fee0356e1e54c68`
- URL: `https://reachfy.io/144fc473b47344079fee0356e1e54c68.txt`

This file will be deployed with your site and must be accessible for verification.

### 2. Submission Scripts

Two scripts are provided to submit your URLs to IndexNow:

#### Option A: Node.js Script (Recommended)

```bash
# Run the Node.js script
node indexnow-submit.js
```

#### Option B: Bash Script

```bash
# Make it executable
chmod +x indexnow-submit.sh

# Run it
./indexnow-submit.sh
```

## When to Submit URLs

Submit your URLs to IndexNow when:
- ✅ You deploy new content or pages
- ✅ You update existing pages (like pricing changes)
- ✅ You fix SEO issues (like the favicon update)
- ✅ You add new blog posts or case studies

**Best Practice**: Submit URLs after each deployment to production.

## How to Use

### After Deployment

1. Deploy your site to production
2. Run the submission script:
   ```bash
   node indexnow-submit.js
   ```
3. Check the response - you should see a 200 or 202 status code
4. Search engines will be notified within minutes

### Automate with CI/CD

You can add this to your deployment pipeline (e.g., Vercel, Netlify, GitHub Actions):

```yaml
# Example GitHub Actions step
- name: Submit to IndexNow
  run: node indexnow-submit.js
```

## Current URLs Being Submitted

The scripts submit these 7 pages:
1. `https://reachfy.io/` (Homepage)
2. `https://reachfy.io/pricing` (Pricing)
3. `https://reachfy.io/about` (About)
4. `https://reachfy.io/contact` (Contact)
5. `https://reachfy.io/privacy` (Privacy Policy)
6. `https://reachfy.io/terms` (Terms of Service)
7. `https://reachfy.io/refund` (Refund Policy)

## Response Codes

- **200**: ✅ Success - URLs submitted and accepted
- **202**: ✅ Accepted - URLs received and will be processed
- **400**: ❌ Bad Request - Invalid JSON format
- **403**: ❌ Forbidden - Key validation failed (check key file is accessible)
- **422**: ⚠️ Unprocessable - Some URLs may be invalid
- **429**: ⚠️ Rate Limited - Too many requests (wait before retrying)

## Supported Search Engines

IndexNow is supported by:
- **Bing** (Microsoft)
- **Yandex** (Russia's largest search engine)
- **Naver** (South Korea)
- **Seznam.cz** (Czech Republic)

**Note**: Google does NOT support IndexNow. For Google, use:
- Google Search Console
- Submit sitemap: `https://reachfy.io/sitemap.xml`
- Request indexing via URL Inspection tool

## Adding New URLs

To submit new URLs, edit the `indexnow-submit.js` or `indexnow-submit.sh` file and add URLs to the `urlList` array:

```javascript
urlList: [
  'https://reachfy.io/',
  'https://reachfy.io/pricing',
  // Add new URLs here
  'https://reachfy.io/blog/new-post'
]
```

## Verification

After running the script, you can verify submission by:
1. Checking the response status (200 or 202 is good)
2. Monitoring search engine traffic in analytics
3. Using Bing Webmaster Tools to see crawl activity

## Troubleshooting

### 403 Forbidden Error
- Make sure `https://reachfy.io/144fc473b47344079fee0356e1e54c68.txt` is accessible
- The file should contain only the key: `144fc473b47344079fee0356e1e54c68`
- Check there are no authentication/firewall blocks

### 429 Rate Limited
- IndexNow has rate limits to prevent abuse
- Wait a few minutes before retrying
- Only submit URLs when content actually changes

### Invalid URLs (422 Error)
- Ensure all URLs are fully qualified (include https://)
- All URLs must be on the same domain
- Remove any malformed URLs from the list

## Next Steps

1. **Deploy your site** with the key file in place
2. **Run the submission script** after deployment
3. **Monitor results** in Bing Webmaster Tools
4. **Set up automation** to submit URLs on each deployment

## Resources

- [IndexNow Official Documentation](https://www.indexnow.org/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [IndexNow GitHub](https://github.com/microsoft/IndexNow)

---

**Status**: ✅ Ready to use  
**Last Updated**: February 25, 2026

