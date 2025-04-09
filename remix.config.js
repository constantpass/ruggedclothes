/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  // Bundle all Shopify related packages
  serverDependenciesToBundle: [
    "framer-motion",
    "@shopify/hydrogen-react",
  ],
  // Make sure to watch CSS files for changes
  watchPaths: ["./public", "./app/styles"],
};