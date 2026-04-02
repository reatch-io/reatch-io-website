#!/usr/bin/env node

/**
 * IndexNow Submission Script for Reachfy.io
 *
 * This script submits URLs to IndexNow API to notify search engines
 * (Bing, Yandex, etc.) about new or updated content on your website.
 *
 * Usage:
 *   node indexnow-submit.js
 *
 * Or make it executable and run:
 *   chmod +x indexnow-submit.js
 *   ./indexnow-submit.js
 */

const https = require('https');

// Configuration
const config = {
  host: 'reachfy.io',
  key: '144fc473b47344079fee0356e1e54c68',
  keyLocation: 'https://reachfy.io/144fc473b47344079fee0356e1e54c68.txt',
  urlList: [
    'https://reachfy.io/',
    'https://reachfy.io/pricing',
    'https://reachfy.io/about',
    'https://reachfy.io/contact',
    'https://reachfy.io/privacy',
    'https://reachfy.io/terms',
    'https://reachfy.io/refund',
  ]
};

// IndexNow API endpoint
const apiEndpoint = 'api.indexnow.org';
const apiPath = '/IndexNow';

// Prepare the payload
const payload = JSON.stringify({
  host: config.host,
  key: config.key,
  keyLocation: config.keyLocation,
  urlList: config.urlList
});

// Request options
const options = {
  hostname: apiEndpoint,
  path: apiPath,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

console.log('🚀 Submitting URLs to IndexNow API...\n');
console.log(`Host: ${config.host}`);
console.log(`URLs to submit: ${config.urlList.length}\n`);

// Make the request
const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`\n📊 Response Status: ${res.statusCode}`);

    if (res.statusCode === 200) {
      console.log('✅ Success! URLs submitted to IndexNow API');
      console.log('🔍 Search engines will be notified about your content updates');
    } else if (res.statusCode === 202) {
      console.log('✅ Accepted! URLs received and will be processed');
    } else if (res.statusCode === 400) {
      console.log('❌ Bad Request - Invalid format');
      console.log('Response:', data);
    } else if (res.statusCode === 403) {
      console.log('❌ Forbidden - Key validation failed');
      console.log('Make sure the key file is accessible at:', config.keyLocation);
    } else if (res.statusCode === 422) {
      console.log('⚠️  Unprocessable Entity - URL list may contain invalid URLs');
      console.log('Response:', data);
    } else if (res.statusCode === 429) {
      console.log('⚠️  Too Many Requests - Rate limit exceeded');
      console.log('Wait before submitting again');
    } else {
      console.log('⚠️  Unexpected response:', res.statusCode);
      console.log('Response:', data);
    }

    console.log('\n📝 Submitted URLs:');
    config.urlList.forEach((url, index) => {
      console.log(`   ${index + 1}. ${url}`);
    });
  });
});

req.on('error', (error) => {
  console.error('❌ Error submitting to IndexNow API:', error.message);
  process.exit(1);
});

// Send the request
req.write(payload);
req.end();

