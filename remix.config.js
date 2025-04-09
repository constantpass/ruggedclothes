/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [
    "react-server-dom-webpack",
    "@shopify/hydrogen",
    "@shopify/hydrogen-react",
    /@shopify\/hydrogen\/.*/,
  ],
  watchPaths: ["./public"],
};