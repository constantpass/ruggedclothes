// api/index.js - Vercel serverless function entry point
const { createRequestHandler } = require("@remix-run/vercel");
const { installGlobals } = require("@remix-run/node");

// Install Remix globals
installGlobals();

// Export a Vercel-compatible request handler
module.exports = createRequestHandler({
  // Make sure build directory is included in serverless function
  build: require("../build"),
  mode: process.env.NODE_ENV || "production",
  getLoadContext(req, res) {
    // Pass any context data needed by your loaders
    return {
      env: process.env,
    };
  },
});