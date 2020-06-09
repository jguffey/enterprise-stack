// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const logs = require('./utils/logs.js');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const listContains = (needle, haystack) => {
  // If needle appears in any of haystack, returns true;
  const result = haystack.filter((item) => {
    if (needle.startsWith(item)) {
      return true;
    }
  });
  return result.length > 0;
}

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if(!listContains(pathname, logs.excludeUrls)) {
      console.log(`Request: ${pathname}`);
    }

    handle(req, res, parsedUrl);

  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  })
});
