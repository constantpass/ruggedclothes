// api/index.js - Vercel serverless function entry point
const { createRequestHandler } = require("@remix-run/vercel");
const { installGlobals } = require("@remix-run/node");

// Install Remix globals
installGlobals();

// Export a Vercel-compatible request handler
try {
  // Log the build directory structure for debugging
  console.log('Starting Vercel handler');
  
  const build = require("../build");
  console.log('Build loaded successfully');
  
  module.exports = createRequestHandler({
    build,
    mode: process.env.NODE_ENV || "production",
    getLoadContext(req, res) {
      return {
        env: process.env,
      };
    },
  });
} catch (error) {
  console.error('Error in Vercel handler setup:', error);
  
  // Fallback express handler that returns a simple diagnostic page
  module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(500).send(`
      <html>
        <head>
          <title>Server Diagnostic</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 2rem; line-height: 1.5; }
            pre { background: #f1f1f1; padding: 1rem; border-radius: 0.5rem; overflow: auto; }
          </style>
        </head>
        <body>
          <h1>Server Diagnostic</h1>
          <h2>Error Details</h2>
          <pre>${error.stack || error.message || 'Unknown error'}</pre>
          <h2>Environment</h2>
          <pre>NODE_ENV: ${process.env.NODE_ENV || 'undefined'}</pre>
        </body>
      </html>
    `);
  };
}