const { createRequestHandler } = require("@remix-run/express");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

// Check if we're in Vercel or local
const isVercel = process.env.VERCEL === '1';
const BUILD_DIR = isVercel ? './' : path.join(process.cwd(), "build");

const app = express();

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

app.use(
  express.static("public", {
    maxAge: "1h",
    setHeaders(res, path) {
      const relativePath = path.replace(/^public\//, "");
      
      // If the file is from the build directory
      if (relativePath.startsWith("build/")) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  })
);

app.use(express.static("build", { immutable: true, maxAge: "1y" }));

app.use(morgan("tiny"));

app.all(
  "*",
  (req, res, next) => {
    try {
      // For Vercel, we need to include the full path to the build file
      let buildPath;
      if (isVercel) {
        buildPath = './index.js';
        if (!fs.existsSync(buildPath)) {
          console.log('Looking for build file...');
          const files = fs.readdirSync('.');
          console.log('Files in root directory:', files);
          
          if (fs.existsSync('./server/index.js')) {
            buildPath = './server/index.js';
          } else if (fs.existsSync('./build/index.js')) {
            buildPath = './build/index.js';
          }
        }
      } else {
        buildPath = BUILD_DIR;
      }
      
      console.log(`Using build path: ${buildPath}`);
      
      if (process.env.NODE_ENV === "development") {
        purgeRequireCache();
      }
      
      return createRequestHandler({
        build: require(buildPath),
        mode: process.env.NODE_ENV || 'production',
      })(req, res, next);
    } catch (error) {
      console.error('Error in request handler:', error);
      res.status(500).send('Server error: ' + error.message);
    }
  }
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, but then you'll have to reconnect to databases/etc on each
  // restart. We prefer the DX of this, so we've included it for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}