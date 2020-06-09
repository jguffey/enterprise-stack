module.exports = {
  excludeUrls: [
    // each should try to complete, since will be searched from left to right.
    // I.E. if you put "/app" then "/application" is ignored,
    // better to put "/app/", so "/application" would be logged.
    '/_next',
    '/vercel.svg',
    '/favicon.ico',
  ]
}
