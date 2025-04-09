var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@shopify/hydrogen/dist/production/log-seo-tags-TY72EQWZ.js
var log_seo_tags_TY72EQWZ_exports = {};
__export(log_seo_tags_TY72EQWZ_exports, {
  default: () => s2,
  logSeoTags: () => a2
});
function s2({ headTags: n2 }) {
  return a2(n2), null;
}
function a2(n2) {
  console.log(" "), console.log("%cSEO Meta Tags", `${l2}`), console.log(" "), n2.forEach((e2) => {
    if (e2.tag === "script") {
      if (console.log("%c\u2022 JSON LD ", c2), e2.children)
        try {
          console.table(JSON.parse(e2.children), ["name", "content"]);
        } catch {
          console.log(e2.children);
        }
    } else {
      if (console.log(`%c\u2022 ${e2.tag} `, c2), e2.children)
        if (typeof e2.children == "string")
          console.log(`\u21B3 ${e2.children}`);
        else
          try {
            Object.entries(JSON.parse(e2.children)).map(([t2, o2]) => console.log(`\u21B3 ${o2}`));
          } catch {
            console.log(e2.children);
          }
      if (e2.props.property === "og:image:url") {
        let t2 = e2.props.content;
        i2(t2).then((o2) => {
          let r2 = `font-size: 400px; padding: 10px; background: white url(${o2}) no-repeat center; background-size: contain;`;
          console.log("%c\u2022 Share image preview", c2), console.log("%c  ", r2), console.log(`\u21B3 ${t2}`);
        }).catch((o2) => {
          console.error(o2);
        });
      }
      Object.entries(e2.props).map(([t2, o2]) => {
        console.log(`\u21B3 ${t2} \u2192 ${o2}`);
      });
    }
    console.log(" ");
  });
}
async function i2(n2) {
  let o2 = await (await (await fetch(n2)).blob()).arrayBuffer();
  return `data:image/png;base64,${g(o2)}`;
}
function g(n2) {
  let e2 = "", t2 = new Uint8Array(n2), o2 = t2.byteLength;
  for (let r2 = 0; r2 < o2; r2++)
    e2 += String.fromCharCode(t2[r2]);
  return btoa(e2);
}
var c2, l2, init_log_seo_tags_TY72EQWZ = __esm({
  "node_modules/@shopify/hydrogen/dist/production/log-seo-tags-TY72EQWZ.js"() {
    c2 = "text-transform: uppercase;", l2 = "text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold";
  }
});

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  loader: () => loader
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react";

// node_modules/@shopify/hydrogen-react/dist/node-prod/CartProvider.mjs
import { jsx as jsx3 } from "react/jsx-runtime";
import { createContext as createContext2, useContext as useContext2, useState as useState2, useRef as useRef3, useEffect as useEffect3, useCallback as useCallback4, useMemo as useMemo4, useTransition } from "react";

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/@xstate/fsm/es/index.mjs
function t(t2, n2) {
  var e2 = typeof Symbol == "function" && t2[Symbol.iterator];
  if (!e2)
    return t2;
  var r2, i22, o2 = e2.call(t2), a22 = [];
  try {
    for (; (n2 === void 0 || n2-- > 0) && !(r2 = o2.next()).done; )
      a22.push(r2.value);
  } catch (t3) {
    i22 = { error: t3 };
  } finally {
    try {
      r2 && !r2.done && (e2 = o2.return) && e2.call(o2);
    } finally {
      if (i22)
        throw i22.error;
    }
  }
  return a22;
}
var n;
(function(t2) {
  t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
})(n || (n = {}));
var e = { type: "xstate.init" };
function r(t2) {
  return t2 === void 0 ? [] : [].concat(t2);
}
function i(t2) {
  return { type: "xstate.assign", assignment: t2 };
}
function o(t2, n2) {
  return typeof (t2 = typeof t2 == "string" && n2 && n2[t2] ? n2[t2] : t2) == "string" ? { type: t2 } : typeof t2 == "function" ? { type: t2.name, exec: t2 } : t2;
}
function a(t2) {
  return function(n2) {
    return t2 === n2;
  };
}
function u(t2) {
  return typeof t2 == "string" ? { type: t2 } : t2;
}
function c(t2, n2) {
  return { value: t2, context: n2, actions: [], changed: !1, matches: a(t2) };
}
function f(t2, n2, e2) {
  var r2 = n2, i22 = !1;
  return [t2.filter(function(t3) {
    if (t3.type === "xstate.assign") {
      i22 = !0;
      var n3 = Object.assign({}, r2);
      return typeof t3.assignment == "function" ? n3 = t3.assignment(r2, e2) : Object.keys(t3.assignment).forEach(function(i3) {
        n3[i3] = typeof t3.assignment[i3] == "function" ? t3.assignment[i3](r2, e2) : t3.assignment[i3];
      }), r2 = n3, !1;
    }
    return !0;
  }), r2, i22];
}
function s(n2, i22) {
  i22 === void 0 && (i22 = {});
  var s22 = t(f(r(n2.states[n2.initial].entry).map(function(t2) {
    return o(t2, i22.actions);
  }), n2.context, e), 2), l22 = s22[0], v2 = s22[1], y = { config: n2, _options: i22, initialState: { value: n2.initial, actions: l22, context: v2, matches: a(n2.initial) }, transition: function(e2, i3) {
    var s3, l3, v3 = typeof e2 == "string" ? { value: e2, context: n2.context } : e2, p = v3.value, g2 = v3.context, d = u(i3), x = n2.states[p];
    if (x.on) {
      var m = r(x.on[d.type]);
      try {
        for (var h = function(t2) {
          var n3 = typeof Symbol == "function" && Symbol.iterator, e3 = n3 && t2[n3], r2 = 0;
          if (e3)
            return e3.call(t2);
          if (t2 && typeof t2.length == "number")
            return { next: function() {
              return t2 && r2 >= t2.length && (t2 = void 0), { value: t2 && t2[r2++], done: !t2 };
            } };
          throw new TypeError(n3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }(m), b = h.next(); !b.done; b = h.next()) {
          var S = b.value;
          if (S === void 0)
            return c(p, g2);
          var w = typeof S == "string" ? { target: S } : S, j = w.target, E = w.actions, R = E === void 0 ? [] : E, N2 = w.cond, O = N2 === void 0 ? function() {
            return !0;
          } : N2, _ = j === void 0, k = j ?? p, T = n2.states[k];
          if (O(g2, d)) {
            var q = t(f((_ ? r(R) : [].concat(x.exit, R, T.entry).filter(function(t2) {
              return t2;
            })).map(function(t2) {
              return o(t2, y._options.actions);
            }), g2, d), 3), z = q[0], A = q[1], B = q[2], C = j ?? p;
            return { value: C, context: A, actions: z, changed: j !== p || z.length > 0 || B, matches: a(C) };
          }
        }
      } catch (t2) {
        s3 = { error: t2 };
      } finally {
        try {
          b && !b.done && (l3 = h.return) && l3.call(h);
        } finally {
          if (s3)
            throw s3.error;
        }
      }
    }
    return c(p, g2);
  } };
  return y;
}
var l = function(t2, n2) {
  return t2.actions.forEach(function(e2) {
    var r2 = e2.exec;
    return r2 && r2(t2.context, n2);
  });
};
function v(t2) {
  var r2 = t2.initialState, i22 = n.NotStarted, o2 = /* @__PURE__ */ new Set(), c22 = { _machine: t2, send: function(e2) {
    i22 === n.Running && (r2 = t2.transition(r2, e2), l(r2, u(e2)), o2.forEach(function(t3) {
      return t3(r2);
    }));
  }, subscribe: function(t3) {
    return o2.add(t3), t3(r2), { unsubscribe: function() {
      return o2.delete(t3);
    } };
  }, start: function(o3) {
    if (o3) {
      var u2 = typeof o3 == "object" ? o3 : { context: t2.config.context, value: o3 };
      r2 = { value: u2.value, actions: [], context: u2.context, matches: a(u2.value) };
    } else
      r2 = t2.initialState;
    return i22 = n.Running, l(r2, e), c22;
  }, stop: function() {
    return i22 = n.Stopped, o2.clear(), c22;
  }, get state() {
    return r2;
  }, get status() {
    return i22;
  } };
  return c22;
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/@xstate/react/es/fsm.mjs
import { useRef as useRef2, useEffect as useEffect2, useCallback } from "react";

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.esm.mjs
import { useLayoutEffect, useEffect } from "react";
var index = typeof document < "u" ? useLayoutEffect : useEffect;

// node_modules/@shopify/hydrogen-react/dist/node-prod/_virtual/with-selector.mjs
var withSelector = { exports: {} };

// node_modules/@shopify/hydrogen-react/dist/node-prod/_virtual/with-selector.production.min.mjs
var withSelector_production_min = {};

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.mjs
import React__default2 from "react";

// node_modules/@shopify/hydrogen-react/dist/node-prod/_virtual/index.mjs
var shim = { exports: {} };

// node_modules/@shopify/hydrogen-react/dist/node-prod/_virtual/use-sync-external-store-shim.production.min.mjs
var useSyncExternalStoreShim_production_min = {};

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.mjs
import React__default from "react";
var hasRequiredUseSyncExternalStoreShim_production_min;
function requireUseSyncExternalStoreShim_production_min() {
  if (hasRequiredUseSyncExternalStoreShim_production_min)
    return useSyncExternalStoreShim_production_min;
  hasRequiredUseSyncExternalStoreShim_production_min = 1;
  var e2 = React__default;
  function h(a3, b) {
    return a3 === b && (a3 !== 0 || 1 / a3 === 1 / b) || a3 !== a3 && b !== b;
  }
  var k = typeof Object.is == "function" ? Object.is : h, l3 = e2.useState, m = e2.useEffect, n2 = e2.useLayoutEffect, p = e2.useDebugValue;
  function q(a3, b) {
    var d = b(), f2 = l3({ inst: { value: d, getSnapshot: b } }), c3 = f2[0].inst, g2 = f2[1];
    return n2(function() {
      c3.value = d, c3.getSnapshot = b, r2(c3) && g2({ inst: c3 });
    }, [a3, d, b]), m(function() {
      return r2(c3) && g2({ inst: c3 }), a3(function() {
        r2(c3) && g2({ inst: c3 });
      });
    }, [a3]), p(d), d;
  }
  function r2(a3) {
    var b = a3.getSnapshot;
    a3 = a3.value;
    try {
      var d = b();
      return !k(a3, d);
    } catch {
      return !0;
    }
  }
  function t2(a3, b) {
    return b();
  }
  var u2 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? t2 : q;
  return useSyncExternalStoreShim_production_min.useSyncExternalStore = e2.useSyncExternalStore !== void 0 ? e2.useSyncExternalStore : u2, useSyncExternalStoreShim_production_min;
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/use-sync-external-store/shim/index.mjs
var hasRequiredShim;
function requireShim() {
  return hasRequiredShim ? shim.exports : (hasRequiredShim = 1, shim.exports = requireUseSyncExternalStoreShim_production_min(), shim.exports);
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.mjs
var hasRequiredWithSelector_production_min;
function requireWithSelector_production_min() {
  if (hasRequiredWithSelector_production_min)
    return withSelector_production_min;
  hasRequiredWithSelector_production_min = 1;
  var h = React__default2, n2 = requireShim();
  function p(a3, b) {
    return a3 === b && (a3 !== 0 || 1 / a3 === 1 / b) || a3 !== a3 && b !== b;
  }
  var q = typeof Object.is == "function" ? Object.is : p, r2 = n2.useSyncExternalStore, t2 = h.useRef, u2 = h.useEffect, v2 = h.useMemo, w = h.useDebugValue;
  return withSelector_production_min.useSyncExternalStoreWithSelector = function(a3, b, e2, l3, g2) {
    var c3 = t2(null);
    if (c3.current === null) {
      var f2 = { hasValue: !1, value: null };
      c3.current = f2;
    } else
      f2 = c3.current;
    c3 = v2(function() {
      function a22(a32) {
        if (!c22) {
          if (c22 = !0, d2 = a32, a32 = l3(a32), g2 !== void 0 && f2.hasValue) {
            var b2 = f2.value;
            if (g2(b2, a32))
              return k = b2;
          }
          return k = a32;
        }
        if (b2 = k, q(d2, a32))
          return b2;
        var e22 = l3(a32);
        return g2 !== void 0 && g2(b2, e22) ? b2 : (d2 = a32, k = e22);
      }
      var c22 = !1, d2, k, m = e2 === void 0 ? null : e2;
      return [function() {
        return a22(b());
      }, m === null ? void 0 : function() {
        return a22(m());
      }];
    }, [b, e2, l3, g2]);
    var d = r2(a3, c3[0], c3[1]);
    return u2(function() {
      f2.hasValue = !0, f2.value = d;
    }, [d]), w(d), d;
  }, withSelector_production_min;
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/use-sync-external-store/shim/with-selector.mjs
withSelector.exports = requireWithSelector_production_min();
var withSelectorExports = withSelector.exports;

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/@xstate/react/es/useConstant.mjs
import * as React from "react";
function useConstant(fn) {
  var ref = React.useRef();
  return ref.current || (ref.current = { v: fn() }), ref.current.v;
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/node_modules/@xstate/react/es/fsm.mjs
var __read = globalThis && globalThis.__read || function(o2, n2) {
  var m = typeof Symbol == "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i3 = m.call(o2), r2, ar = [], e2;
  try {
    for (; (n2 === void 0 || n2-- > 0) && !(r2 = i3.next()).done; )
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      r2 && !r2.done && (m = i3.return) && m.call(i3);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
function identity(a3) {
  return a3;
}
var getServiceState = function(service) {
  var currentValue;
  return service.subscribe(function(state) {
    currentValue = state;
  }).unsubscribe(), currentValue;
};
function useMachine(stateMachine, options) {
  var persistedStateRef = useRef2();
  if (!1)
    var _a, initialMachine;
  var _b = __read(useConstant(function() {
    var queue2 = [], service2 = v(s(stateMachine.config, options || stateMachine._options)), send = service2.send;
    return service2.send = function(event) {
      if (service2.status === n.NotStarted) {
        queue2.push(event);
        return;
      }
      send(event), persistedStateRef.current = service2.state;
    }, [service2, queue2];
  }), 2), service = _b[0], queue = _b[1];
  index(function() {
    options && (service._machine._options = options);
  });
  var useServiceResult = useService(service);
  return useEffect2(function() {
    return service.start(persistedStateRef.current), queue.forEach(service.send), persistedStateRef.current = service.state, function() {
      service.stop();
    };
  }, []), useServiceResult;
}
var isEqual = function(_prevState, nextState) {
  return nextState.changed === !1;
};
function useService(service) {
  var getSnapshot = useCallback(function() {
    return getServiceState(service);
  }, [service]), subscribe = useCallback(function(handleStoreChange) {
    var unsubscribe = service.subscribe(handleStoreChange).unsubscribe;
    return unsubscribe;
  }, [service]), storeSnapshot = withSelectorExports.useSyncExternalStoreWithSelector(subscribe, getSnapshot, getSnapshot, identity, isEqual);
  return [storeSnapshot, service.send, service];
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/flatten-connection.mjs
function flattenConnection(connection) {
  if (!connection) {
    let noConnectionErr = `flattenConnection(): needs a 'connection' to flatten, but received '${connection ?? ""}' instead.`;
    return console.error(noConnectionErr + " Returning an empty array"), [];
  }
  return "nodes" in connection ? connection.nodes : "edges" in connection && Array.isArray(connection.edges) ? connection.edges.map((edge) => {
    if (!edge?.node)
      throw new Error(
        "flattenConnection(): Connection edges must contain nodes"
      );
    return edge.node;
  }) : [];
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/useCartActions.mjs
import { useCallback as useCallback3, useMemo as useMemo2 } from "react";

// node_modules/@shopify/hydrogen-react/dist/node-prod/cart-queries.mjs
var CartLineAdd = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartLineAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartCreate = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartCreate(
    $input: CartInput!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartLineRemove = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartLineRemove(
    $cartId: ID!
    $lines: [ID!]!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lines) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartLineUpdate = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartLineUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartNoteUpdate = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartNoteUpdate(
    $cartId: ID!
    $note: String
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartBuyerIdentityUpdate = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartAttributesUpdate = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartAttributesUpdate(
    $attributes: [AttributeInput!]!
    $cartId: ID!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartDiscountCodesUpdate = (cartFragment) => (
  /* GraphQL */
  `
  mutation CartDiscountCodesUpdate(
    $cartId: ID!
    $discountCodes: [String!]
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartFragment
      }
    }
  }

  ${cartFragment}
`
), CartQuery = (cartFragment) => (
  /* GraphQL */
  `
  query CartQuery(
    $id: ID!
    $numCartLines: Int = 250
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $id) {
      ...CartFragment
    }
  }

  ${cartFragment}
`
), defaultCartFragment = (
  /* GraphQL */
  `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...MoneyFragment
              }
              price {
                ...MoneyFragment
              }
              requiresShipping
              title
              image {
                ...ImageFragment
              }
              product {
                handle
                title
                id
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...MoneyFragment
      }
      totalAmount {
        ...MoneyFragment
      }
      totalDutyAmount {
        ...MoneyFragment
      }
      totalTaxAmount {
        ...MoneyFragment
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }

  fragment MoneyFragment on MoneyV2 {
    currencyCode
    amount
  }
  fragment ImageFragment on Image {
    id
    url
    altText
    width
    height
  }
`
);

// node_modules/@shopify/hydrogen-react/dist/node-prod/cart-hooks.mjs
import { useCallback as useCallback2 } from "react";

// node_modules/@shopify/hydrogen-react/dist/node-prod/ShopifyProvider.mjs
import { jsx as jsx2 } from "react/jsx-runtime";
import { createContext, useMemo, useContext } from "react";

// node_modules/@shopify/hydrogen-react/dist/node-prod/storefront-api-constants.mjs
var SFAPI_VERSION = "2023-10";

// node_modules/@shopify/hydrogen-react/dist/node-prod/storefront-client.mjs
function getPublicTokenHeadersRaw(contentType, storefrontApiVersion, accessToken) {
  return {
    // default to json
    "content-type": contentType === "graphql" ? "application/graphql" : "application/json",
    "X-SDK-Variant": "hydrogen-react",
    "X-SDK-Variant-Source": "react",
    "X-SDK-Version": storefrontApiVersion,
    "X-Shopify-Storefront-Access-Token": accessToken
  };
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/ShopifyProvider.mjs
var defaultShopifyContext = {
  storeDomain: "test",
  storefrontToken: "abc123",
  storefrontApiVersion: SFAPI_VERSION,
  countryIsoCode: "US",
  languageIsoCode: "EN",
  getStorefrontApiUrl() {
    return "";
  },
  getPublicTokenHeaders() {
    return {};
  },
  getShopifyDomain() {
    return "";
  }
}, ShopifyContext = createContext(
  defaultShopifyContext
);
function ShopifyProvider({
  children,
  ...shopifyConfig
}) {
  if (!shopifyConfig.countryIsoCode || !shopifyConfig.languageIsoCode || !shopifyConfig.storeDomain || !shopifyConfig.storefrontToken || !shopifyConfig.storefrontApiVersion)
    throw new Error(
      "Please provide the necessary props to '<ShopifyProvider/>'"
    );
  shopifyConfig.storefrontApiVersion !== SFAPI_VERSION && console.warn(
    `<ShopifyProvider/>: This version of Hydrogen React is built for Shopify's Storefront API version ${SFAPI_VERSION}, but it looks like you're using version ${shopifyConfig.storefrontApiVersion}. There may be issues or bugs if you use a mismatched version of Hydrogen React and the Storefront API.`
  );
  let finalConfig = useMemo(() => {
    function getShopifyDomain(overrideProps) {
      return overrideProps?.storeDomain ?? shopifyConfig.storeDomain;
    }
    return {
      ...shopifyConfig,
      getPublicTokenHeaders(overrideProps) {
        return getPublicTokenHeadersRaw(
          overrideProps.contentType,
          shopifyConfig.storefrontApiVersion,
          overrideProps.storefrontToken ?? shopifyConfig.storefrontToken
        );
      },
      getShopifyDomain,
      getStorefrontApiUrl(overrideProps) {
        let finalDomainUrl = getShopifyDomain({
          storeDomain: overrideProps?.storeDomain ?? shopifyConfig.storeDomain
        });
        return `${finalDomainUrl}${finalDomainUrl.endsWith("/") ? "" : "/"}api/${overrideProps?.storefrontApiVersion ?? shopifyConfig.storefrontApiVersion}/graphql.json`;
      }
    };
  }, [shopifyConfig]);
  return /* @__PURE__ */ jsx2(ShopifyContext.Provider, { value: finalConfig, children });
}
function useShop() {
  let shopContext = useContext(ShopifyContext);
  if (!shopContext)
    throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");
  return shopContext;
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/cart-constants.mjs
var CART_ID_STORAGE_KEY = "shopifyCartId", SHOPIFY_STOREFRONT_ID_HEADER = "Shopify-Storefront-Id", SHOPIFY_STOREFRONT_Y_HEADER = "Shopify-Storefront-Y", SHOPIFY_STOREFRONT_S_HEADER = "Shopify-Storefront-S", SHOPIFY_Y = "_shopify_y", SHOPIFY_S = "_shopify_s";

// node_modules/@shopify/hydrogen-react/dist/node-prod/cookies-utils.mjs
import { parse } from "worktop/cookie";
function getShopifyCookies(cookies) {
  let cookieData = parse(cookies);
  return {
    [SHOPIFY_Y]: cookieData[SHOPIFY_Y] || "",
    [SHOPIFY_S]: cookieData[SHOPIFY_S] || ""
  };
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/cart-hooks.mjs
function useCartFetch() {
  let { storefrontId, getPublicTokenHeaders, getStorefrontApiUrl } = useShop();
  return useCallback2(
    ({
      query,
      variables
    }) => {
      let headers = getPublicTokenHeaders({ contentType: "json" });
      storefrontId && (headers[SHOPIFY_STOREFRONT_ID_HEADER] = storefrontId);
      let cookieData = getShopifyCookies(document.cookie);
      return headers[SHOPIFY_STOREFRONT_Y_HEADER] = cookieData[SHOPIFY_Y], headers[SHOPIFY_STOREFRONT_S_HEADER] = cookieData[SHOPIFY_S], fetch(getStorefrontApiUrl(), {
        method: "POST",
        headers,
        body: JSON.stringify({
          query: query.toString(),
          variables
        })
      }).then(
        (res) => res.json()
      ).catch((error) => ({
        data: void 0,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        errors: error?.toString()
      }));
    },
    [getPublicTokenHeaders, storefrontId, getStorefrontApiUrl]
  );
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/useCartActions.mjs
function useCartActions({
  numCartLines,
  cartFragment,
  countryCode = "US",
  languageCode = "EN"
}) {
  let fetchCart = useCartFetch(), cartFetch = useCallback3(
    (cartId) => fetchCart({
      query: CartQuery(cartFragment),
      variables: {
        id: cartId,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [fetchCart, cartFragment, numCartLines, countryCode, languageCode]
  ), cartCreate = useCallback3(
    (cart) => fetchCart({
      query: CartCreate(cartFragment),
      variables: {
        input: cart,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [cartFragment, countryCode, fetchCart, numCartLines, languageCode]
  ), cartLineAdd = useCallback3(
    (cartId, lines) => fetchCart({
      query: CartLineAdd(cartFragment),
      variables: {
        cartId,
        lines,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [cartFragment, countryCode, fetchCart, numCartLines, languageCode]
  ), cartLineUpdate = useCallback3(
    (cartId, lines) => fetchCart({
      query: CartLineUpdate(cartFragment),
      variables: {
        cartId,
        lines,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [cartFragment, countryCode, fetchCart, numCartLines, languageCode]
  ), cartLineRemove = useCallback3(
    (cartId, lines) => fetchCart({
      query: CartLineRemove(cartFragment),
      variables: {
        cartId,
        lines,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [cartFragment, countryCode, fetchCart, numCartLines, languageCode]
  ), noteUpdate = useCallback3(
    (cartId, note) => fetchCart({
      query: CartNoteUpdate(cartFragment),
      variables: {
        cartId,
        note,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [fetchCart, cartFragment, numCartLines, countryCode, languageCode]
  ), buyerIdentityUpdate = useCallback3(
    (cartId, buyerIdentity) => fetchCart({
      query: CartBuyerIdentityUpdate(cartFragment),
      variables: {
        cartId,
        buyerIdentity,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [cartFragment, countryCode, fetchCart, numCartLines, languageCode]
  ), cartAttributesUpdate = useCallback3(
    (cartId, attributes) => fetchCart({
      query: CartAttributesUpdate(cartFragment),
      variables: {
        cartId,
        attributes,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [cartFragment, countryCode, fetchCart, numCartLines, languageCode]
  ), discountCodesUpdate = useCallback3(
    (cartId, discountCodes) => fetchCart({
      query: CartDiscountCodesUpdate(cartFragment),
      variables: {
        cartId,
        discountCodes,
        numCartLines,
        country: countryCode,
        language: languageCode
      }
    }),
    [cartFragment, countryCode, fetchCart, numCartLines, languageCode]
  );
  return useMemo2(
    () => ({
      cartFetch,
      cartCreate,
      cartLineAdd,
      cartLineUpdate,
      cartLineRemove,
      noteUpdate,
      buyerIdentityUpdate,
      cartAttributesUpdate,
      discountCodesUpdate,
      cartFragment
    }),
    [
      cartFetch,
      cartCreate,
      cartLineAdd,
      cartLineUpdate,
      cartLineRemove,
      noteUpdate,
      buyerIdentityUpdate,
      cartAttributesUpdate,
      discountCodesUpdate,
      cartFragment
    ]
  );
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/useCartAPIStateMachine.mjs
import { useMemo as useMemo3 } from "react";
function invokeCart(action, options) {
  return {
    entry: [
      ...options?.entryActions || [],
      i({
        lastValidCart: (context) => context?.cart
      }),
      "onCartActionEntry",
      "onCartActionOptimisticUI",
      action
    ],
    on: {
      RESOLVE: {
        target: options?.resolveTarget || "idle",
        actions: [
          i({
            prevCart: (context) => context?.lastValidCart,
            cart: (_, event) => {
              var _a;
              return (_a = event?.payload) == null ? void 0 : _a.cart;
            },
            rawCartResult: (_, event) => {
              var _a;
              return (_a = event?.payload) == null ? void 0 : _a.rawCartResult;
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            errors: (_) => {
            }
          })
        ]
      },
      ERROR: {
        target: options?.errorTarget || "error",
        actions: [
          i({
            prevCart: (context) => context?.lastValidCart,
            cart: (context) => context?.lastValidCart,
            errors: (_, event) => {
              var _a;
              return (_a = event?.payload) == null ? void 0 : _a.errors;
            }
          })
        ]
      },
      CART_COMPLETED: {
        target: "cartCompleted",
        actions: i({
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          prevCart: (_) => {
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          cart: (_) => {
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          lastValidCart: (_) => {
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          rawCartResult: (_) => {
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          errors: (_) => {
          }
        })
      }
    },
    exit: ["onCartActionComplete", ...options?.exitActions || []]
  };
}
var INITIALIZING_CART_EVENTS = {
  CART_FETCH: {
    target: "cartFetching"
  },
  CART_CREATE: {
    target: "cartCreating"
  },
  CART_SET: {
    target: "idle",
    actions: [
      i({
        rawCartResult: (_, event) => event.payload.cart,
        cart: (_, event) => cartFromGraphQL(event.payload.cart)
      })
    ]
  }
}, UPDATING_CART_EVENTS = {
  CARTLINE_ADD: {
    target: "cartLineAdding"
  },
  CARTLINE_UPDATE: {
    target: "cartLineUpdating"
  },
  CARTLINE_REMOVE: {
    target: "cartLineRemoving"
  },
  NOTE_UPDATE: {
    target: "noteUpdating"
  },
  BUYER_IDENTITY_UPDATE: {
    target: "buyerIdentityUpdating"
  },
  CART_ATTRIBUTES_UPDATE: {
    target: "cartAttributesUpdating"
  },
  DISCOUNT_CODES_UPDATE: {
    target: "discountCodesUpdating"
  }
};
function createCartMachine(initialCart) {
  return s({
    id: "Cart",
    initial: initialCart ? "idle" : "uninitialized",
    context: {
      cart: initialCart && cartFromGraphQL(initialCart)
    },
    states: {
      uninitialized: {
        on: INITIALIZING_CART_EVENTS
      },
      cartCompleted: {
        on: INITIALIZING_CART_EVENTS
      },
      initializationError: {
        on: INITIALIZING_CART_EVENTS
      },
      idle: {
        on: { ...INITIALIZING_CART_EVENTS, ...UPDATING_CART_EVENTS }
      },
      error: {
        on: { ...INITIALIZING_CART_EVENTS, ...UPDATING_CART_EVENTS }
      },
      cartFetching: invokeCart("cartFetchAction", {
        errorTarget: "initializationError"
      }),
      cartCreating: invokeCart("cartCreateAction", {
        errorTarget: "initializationError"
      }),
      cartLineRemoving: invokeCart("cartLineRemoveAction"),
      cartLineUpdating: invokeCart("cartLineUpdateAction"),
      cartLineAdding: invokeCart("cartLineAddAction"),
      noteUpdating: invokeCart("noteUpdateAction"),
      buyerIdentityUpdating: invokeCart("buyerIdentityUpdateAction"),
      cartAttributesUpdating: invokeCart("cartAttributesUpdateAction"),
      discountCodesUpdating: invokeCart("discountCodesUpdateAction")
    }
  });
}
function useCartAPIStateMachine({
  numCartLines,
  onCartActionEntry,
  onCartActionOptimisticUI,
  onCartActionComplete,
  data: cart,
  cartFragment,
  countryCode,
  languageCode
}) {
  let {
    cartFetch,
    cartCreate,
    cartLineAdd,
    cartLineUpdate,
    cartLineRemove,
    noteUpdate,
    buyerIdentityUpdate,
    cartAttributesUpdate,
    discountCodesUpdate
  } = useCartActions({
    numCartLines,
    cartFragment,
    countryCode,
    languageCode
  }), cartMachine = useMemo3(() => createCartMachine(cart), [cart]), [state, send, service] = useMachine(cartMachine, {
    actions: {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      cartFetchAction: async (_, event) => {
        var _a;
        if (event.type !== "CART_FETCH")
          return;
        let { data, errors } = await cartFetch((_a = event?.payload) == null ? void 0 : _a.cartId), resultEvent = eventFromFetchResult(event, data?.cart, errors);
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      cartCreateAction: async (_, event) => {
        var _a;
        if (event.type !== "CART_CREATE")
          return;
        let { data, errors } = await cartCreate(event?.payload), resultEvent = eventFromFetchResult(
          event,
          (_a = data?.cartCreate) == null ? void 0 : _a.cart,
          errors
        );
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      cartLineAddAction: async (context, event) => {
        var _a, _b;
        if (event.type !== "CARTLINE_ADD" || !((_a = context?.cart) != null && _a.id))
          return;
        let { data, errors } = await cartLineAdd(
          context.cart.id,
          event.payload.lines
        ), resultEvent = eventFromFetchResult(
          event,
          (_b = data?.cartLinesAdd) == null ? void 0 : _b.cart,
          errors
        );
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      cartLineUpdateAction: async (context, event) => {
        var _a, _b;
        if (event.type !== "CARTLINE_UPDATE" || !((_a = context?.cart) != null && _a.id))
          return;
        let { data, errors } = await cartLineUpdate(
          context.cart.id,
          event.payload.lines
        ), resultEvent = eventFromFetchResult(
          event,
          (_b = data?.cartLinesUpdate) == null ? void 0 : _b.cart,
          errors
        );
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      cartLineRemoveAction: async (context, event) => {
        var _a, _b;
        if (event.type !== "CARTLINE_REMOVE" || !((_a = context?.cart) != null && _a.id))
          return;
        let { data, errors } = await cartLineRemove(
          context.cart.id,
          event.payload.lines
        ), resultEvent = eventFromFetchResult(
          event,
          (_b = data?.cartLinesRemove) == null ? void 0 : _b.cart,
          errors
        );
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      noteUpdateAction: async (context, event) => {
        var _a, _b;
        if (event.type !== "NOTE_UPDATE" || !((_a = context?.cart) != null && _a.id))
          return;
        let { data, errors } = await noteUpdate(
          context.cart.id,
          event.payload.note
        ), resultEvent = eventFromFetchResult(
          event,
          (_b = data?.cartNoteUpdate) == null ? void 0 : _b.cart,
          errors
        );
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      buyerIdentityUpdateAction: async (context, event) => {
        var _a, _b;
        if (event.type !== "BUYER_IDENTITY_UPDATE" || !((_a = context?.cart) != null && _a.id))
          return;
        let { data, errors } = await buyerIdentityUpdate(
          context.cart.id,
          event.payload.buyerIdentity
        ), resultEvent = eventFromFetchResult(
          event,
          (_b = data?.cartBuyerIdentityUpdate) == null ? void 0 : _b.cart,
          errors
        );
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      cartAttributesUpdateAction: async (context, event) => {
        var _a, _b;
        if (event.type !== "CART_ATTRIBUTES_UPDATE" || !((_a = context?.cart) != null && _a.id))
          return;
        let { data, errors } = await cartAttributesUpdate(
          context.cart.id,
          event.payload.attributes
        ), resultEvent = eventFromFetchResult(
          event,
          (_b = data?.cartAttributesUpdate) == null ? void 0 : _b.cart,
          errors
        );
        send(resultEvent);
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      discountCodesUpdateAction: async (context, event) => {
        var _a, _b;
        if (event.type !== "DISCOUNT_CODES_UPDATE" || !((_a = context?.cart) != null && _a.id))
          return;
        let { data, errors } = await discountCodesUpdate(
          context.cart.id,
          event.payload.discountCodes
        ), resultEvent = eventFromFetchResult(
          event,
          (_b = data?.cartDiscountCodesUpdate) == null ? void 0 : _b.cart,
          errors
        );
        send(resultEvent);
      },
      ...onCartActionEntry && {
        onCartActionEntry: (context, event) => {
          isCartActionEvent(event) && onCartActionEntry(context, event);
        }
      },
      ...onCartActionOptimisticUI && {
        onCartActionOptimisticUI: i((context, event) => onCartActionOptimisticUI(context, event))
      },
      ...onCartActionComplete && {
        onCartActionComplete: (context, event) => {
          isCartFetchResultEvent(event) && onCartActionComplete(context, event);
        }
      }
    }
  });
  return useMemo3(() => [state, send, service], [state, send, service]);
}
function cartFromGraphQL(cart) {
  return {
    ...cart,
    lines: flattenConnection(cart?.lines),
    note: cart.note ?? void 0
  };
}
function eventFromFetchResult(cartActionEvent, cart, errors) {
  return errors ? { type: "ERROR", payload: { errors, cartActionEvent } } : cart ? {
    type: "RESOLVE",
    payload: {
      cart: cartFromGraphQL(cart),
      rawCartResult: cart,
      cartActionEvent
    }
  } : {
    type: "CART_COMPLETED",
    payload: {
      cartActionEvent
    }
  };
}
function isCartActionEvent(event) {
  return event.type === "CART_CREATE" || event.type === "CARTLINE_ADD" || event.type === "CARTLINE_UPDATE" || event.type === "CARTLINE_REMOVE" || event.type === "NOTE_UPDATE" || event.type === "BUYER_IDENTITY_UPDATE" || event.type === "CART_ATTRIBUTES_UPDATE" || event.type === "DISCOUNT_CODES_UPDATE";
}
function isCartFetchResultEvent(event) {
  return event.type === "RESOLVE" || event.type === "ERROR" || event.type === "CART_COMPLETED";
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/CartProvider.mjs
var CartContext = createContext2(null);
function useCart() {
  let context = useContext2(CartContext);
  if (!context)
    throw new Error("Expected a Cart Context, but no Cart Context was found");
  return context;
}
function CartProvider({
  children,
  numCartLines,
  onCreate,
  onLineAdd,
  onLineRemove,
  onLineUpdate,
  onNoteUpdate,
  onBuyerIdentityUpdate,
  onAttributesUpdate,
  onDiscountCodesUpdate,
  onCreateComplete,
  onLineAddComplete,
  onLineRemoveComplete,
  onLineUpdateComplete,
  onNoteUpdateComplete,
  onBuyerIdentityUpdateComplete,
  onAttributesUpdateComplete,
  onDiscountCodesUpdateComplete,
  data: cart,
  cartFragment = defaultCartFragment,
  customerAccessToken,
  countryCode,
  languageCode
}) {
  var _a, _b, _c, _d, _e, _f, _g;
  let shop = useShop();
  if (!shop)
    throw new Error(
      "<CartProvider> needs to be a descendant of <ShopifyProvider>"
    );
  countryCode = (countryCode ?? shop.countryIsoCode ?? "US").toUpperCase(), languageCode = (languageCode ?? shop.languageIsoCode ?? "EN").toUpperCase(), countryCode && (countryCode = countryCode.toUpperCase());
  let [prevCountryCode, setPrevCountryCode] = useState2(countryCode), [prevCustomerAccessToken, setPrevCustomerAccessToken] = useState2(customerAccessToken), customerOverridesCountryCode = useRef3(!1);
  (prevCountryCode !== countryCode || prevCustomerAccessToken !== customerAccessToken) && (setPrevCountryCode(countryCode), setPrevCustomerAccessToken(customerAccessToken), customerOverridesCountryCode.current = !1);
  let [cartState, cartSend] = useCartAPIStateMachine({
    numCartLines,
    data: cart,
    cartFragment,
    countryCode,
    languageCode,
    onCartActionEntry(_, event) {
      try {
        switch (event.type) {
          case "CART_CREATE":
            return onCreate?.();
          case "CARTLINE_ADD":
            return onLineAdd?.();
          case "CARTLINE_REMOVE":
            return onLineRemove?.();
          case "CARTLINE_UPDATE":
            return onLineUpdate?.();
          case "NOTE_UPDATE":
            return onNoteUpdate?.();
          case "BUYER_IDENTITY_UPDATE":
            return onBuyerIdentityUpdate?.();
          case "CART_ATTRIBUTES_UPDATE":
            return onAttributesUpdate?.();
          case "DISCOUNT_CODES_UPDATE":
            return onDiscountCodesUpdate?.();
        }
      } catch (error) {
        console.error("Cart entry action failed", error);
      }
    },
    onCartActionOptimisticUI(context, event) {
      var _a2, _b2, _c2, _d2;
      if (!context.cart)
        return { ...context };
      switch (event.type) {
        case "CARTLINE_REMOVE":
          return {
            ...context,
            cart: {
              ...context.cart,
              lines: (_b2 = (_a2 = context?.cart) == null ? void 0 : _a2.lines) == null ? void 0 : _b2.filter(
                (line) => line?.id && !event.payload.lines.includes(line?.id)
              )
            }
          };
        case "CARTLINE_UPDATE":
          return {
            ...context,
            cart: {
              ...context.cart,
              lines: (_d2 = (_c2 = context?.cart) == null ? void 0 : _c2.lines) == null ? void 0 : _d2.map((line) => {
                let updatedLine = event.payload.lines.find(
                  ({ id }) => id === line?.id
                );
                return updatedLine && updatedLine.quantity ? {
                  ...line,
                  quantity: updatedLine.quantity
                } : line;
              })
            }
          };
      }
      return { ...context };
    },
    onCartActionComplete(context, event) {
      let cartActionEvent = event.payload.cartActionEvent;
      try {
        switch (event.type) {
          case "RESOLVE":
            switch (cartActionEvent.type) {
              case "CART_CREATE":
                return onCreateComplete?.();
              case "CARTLINE_ADD":
                return onLineAddComplete?.();
              case "CARTLINE_REMOVE":
                return onLineRemoveComplete?.();
              case "CARTLINE_UPDATE":
                return onLineUpdateComplete?.();
              case "NOTE_UPDATE":
                return onNoteUpdateComplete?.();
              case "BUYER_IDENTITY_UPDATE":
                return countryCodeNotUpdated(context, cartActionEvent) && (customerOverridesCountryCode.current = !0), onBuyerIdentityUpdateComplete?.();
              case "CART_ATTRIBUTES_UPDATE":
                return onAttributesUpdateComplete?.();
              case "DISCOUNT_CODES_UPDATE":
                return onDiscountCodesUpdateComplete?.();
            }
        }
      } catch (error) {
        console.error("onCartActionComplete failed", error);
      }
    }
  }), cartReady = useRef3(!1), cartCompleted = cartState.matches("cartCompleted"), countryChanged = (cartState.value === "idle" || cartState.value === "error" || cartState.value === "cartCompleted") && countryCode !== ((_c = (_b = (_a = cartState?.context) == null ? void 0 : _a.cart) == null ? void 0 : _b.buyerIdentity) == null ? void 0 : _c.countryCode) && !cartState.context.errors, fetchingFromStorage = useRef3(!1);
  useEffect3(() => {
    if (!cartReady.current && !fetchingFromStorage.current) {
      if (!cart && storageAvailable("localStorage")) {
        fetchingFromStorage.current = !0;
        try {
          let cartId = window.localStorage.getItem(CART_ID_STORAGE_KEY);
          cartId && cartSend({ type: "CART_FETCH", payload: { cartId } });
        } catch (error) {
          console.warn("error fetching cartId"), console.warn(error);
        }
      }
      cartReady.current = !0;
    }
  }, [cart, cartReady, cartSend]), useEffect3(() => {
    !countryChanged || customerOverridesCountryCode.current || cartSend({
      type: "BUYER_IDENTITY_UPDATE",
      payload: { buyerIdentity: { countryCode, customerAccessToken } }
    });
  }, [
    countryCode,
    customerAccessToken,
    countryChanged,
    customerOverridesCountryCode,
    cartSend
  ]);
  let onCartReadySend = useCallback4(
    (cartEvent) => {
      if (!cartReady.current)
        return console.warn("Cart isn't ready yet");
      cartSend(cartEvent);
    },
    [cartSend]
  );
  useEffect3(() => {
    var _a2, _b2, _c2;
    if ((_b2 = (_a2 = cartState?.context) == null ? void 0 : _a2.cart) != null && _b2.id && storageAvailable("localStorage"))
      try {
        window.localStorage.setItem(
          CART_ID_STORAGE_KEY,
          (_c2 = cartState.context.cart) == null ? void 0 : _c2.id
        );
      } catch (error) {
        console.warn("Failed to save cartId to localStorage", error);
      }
  }, [(_e = (_d = cartState?.context) == null ? void 0 : _d.cart) == null ? void 0 : _e.id]), useEffect3(() => {
    if (cartCompleted && storageAvailable("localStorage"))
      try {
        window.localStorage.removeItem(CART_ID_STORAGE_KEY);
      } catch (error) {
        console.warn("Failed to delete cartId from localStorage", error);
      }
  }, [cartCompleted]);
  let cartCreate = useCallback4(
    (cartInput) => {
      var _a2, _b2;
      countryCode && !((_a2 = cartInput.buyerIdentity) != null && _a2.countryCode) && (cartInput.buyerIdentity == null && (cartInput.buyerIdentity = {}), cartInput.buyerIdentity.countryCode = countryCode), customerAccessToken && !((_b2 = cartInput.buyerIdentity) != null && _b2.customerAccessToken) && (cartInput.buyerIdentity == null && (cartInput.buyerIdentity = {}), cartInput.buyerIdentity.customerAccessToken = customerAccessToken), onCartReadySend({
        type: "CART_CREATE",
        payload: cartInput
      });
    },
    [countryCode, customerAccessToken, onCartReadySend]
  ), cartDisplayState = useDelayedStateUntilHydration(cartState), cartContextValue = useMemo4(() => {
    var _a2, _b2, _c2, _d2;
    return {
      ...((_a2 = cartDisplayState?.context) == null ? void 0 : _a2.cart) ?? { lines: [], attributes: [] },
      status: transposeStatus(cartDisplayState.value),
      error: (_b2 = cartDisplayState?.context) == null ? void 0 : _b2.errors,
      totalQuantity: ((_d2 = (_c2 = cartDisplayState?.context) == null ? void 0 : _c2.cart) == null ? void 0 : _d2.totalQuantity) ?? 0,
      cartCreate,
      linesAdd(lines) {
        var _a3, _b3;
        (_b3 = (_a3 = cartDisplayState?.context) == null ? void 0 : _a3.cart) != null && _b3.id ? onCartReadySend({
          type: "CARTLINE_ADD",
          payload: { lines }
        }) : cartCreate({ lines });
      },
      linesRemove(lines) {
        onCartReadySend({
          type: "CARTLINE_REMOVE",
          payload: {
            lines
          }
        });
      },
      linesUpdate(lines) {
        onCartReadySend({
          type: "CARTLINE_UPDATE",
          payload: {
            lines
          }
        });
      },
      noteUpdate(note) {
        onCartReadySend({
          type: "NOTE_UPDATE",
          payload: {
            note
          }
        });
      },
      buyerIdentityUpdate(buyerIdentity) {
        onCartReadySend({
          type: "BUYER_IDENTITY_UPDATE",
          payload: {
            buyerIdentity
          }
        });
      },
      cartAttributesUpdate(attributes) {
        onCartReadySend({
          type: "CART_ATTRIBUTES_UPDATE",
          payload: {
            attributes
          }
        });
      },
      discountCodesUpdate(discountCodes) {
        onCartReadySend({
          type: "DISCOUNT_CODES_UPDATE",
          payload: {
            discountCodes
          }
        });
      },
      cartFragment
    };
  }, [
    cartCreate,
    (_f = cartDisplayState?.context) == null ? void 0 : _f.cart,
    (_g = cartDisplayState?.context) == null ? void 0 : _g.errors,
    cartDisplayState.value,
    cartFragment,
    onCartReadySend
  ]);
  return /* @__PURE__ */ jsx3(CartContext.Provider, { value: cartContextValue, children });
}
function transposeStatus(status) {
  switch (status) {
    case "uninitialized":
    case "initializationError":
      return "uninitialized";
    case "idle":
    case "cartCompleted":
    case "error":
      return "idle";
    case "cartFetching":
      return "fetching";
    case "cartCreating":
      return "creating";
    case "cartLineAdding":
    case "cartLineRemoving":
    case "cartLineUpdating":
    case "noteUpdating":
    case "buyerIdentityUpdating":
    case "cartAttributesUpdating":
    case "discountCodesUpdating":
      return "updating";
  }
}
function useDelayedStateUntilHydration(state) {
  let [isPending, startTransition] = useTransition(), [delayedState, setDelayedState] = useState2(state), firstTimePending = useRef3(!1);
  isPending && (firstTimePending.current = !0);
  let firstTimePendingFinished = useRef3(!1);
  return !isPending && firstTimePending.current && (firstTimePendingFinished.current = !0), useEffect3(() => {
    startTransition(() => {
      firstTimePendingFinished.current || setDelayedState(state);
    });
  }, [state]), firstTimePendingFinished.current ? state : delayedState;
}
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    let x = "__storage_test__";
    return storage.setItem(x, x), storage.removeItem(x), !0;
  } catch (e2) {
    return !!(e2 instanceof DOMException && // everything except Firefox
    (e2.code === 22 || // Firefox
    e2.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    e2.name === "QuotaExceededError" || // Firefox
    e2.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0);
  }
}
function countryCodeNotUpdated(context, event) {
  var _a, _b;
  return !!(event.payload.buyerIdentity.countryCode && ((_b = (_a = context.cart) == null ? void 0 : _a.buyerIdentity) == null ? void 0 : _b.countryCode) !== event.payload.buyerIdentity.countryCode);
}

// node_modules/@shopify/hydrogen-react/dist/node-prod/Image.mjs
import { jsx as jsx4 } from "react/jsx-runtime";
import * as React2 from "react";
var Image = React2.forwardRef(
  ({
    alt,
    aspectRatio,
    crop = "center",
    data,
    decoding = "async",
    height = "auto",
    loader: loader6 = shopifyLoader,
    loading = "lazy",
    sizes,
    src,
    srcSetOptions = {
      intervals: 15,
      startingWidth: 200,
      incrementSize: 200,
      placeholderWidth: 100
    },
    width = "100%",
    ...passthroughProps
  }, ref) => {
    let normalizedData = React2.useMemo(() => {
      let dataWidth = data?.width && data?.height ? data?.width : void 0, dataHeight = data?.width && data?.height ? data?.height : void 0;
      return {
        width: dataWidth,
        height: dataHeight,
        unitsMatch: Boolean(unitsMatch(dataWidth, dataHeight))
      };
    }, [data]), normalizedProps = React2.useMemo(() => {
      let widthParts = getUnitValueParts((width || "100%").toString()), nWidth = `${widthParts.number}${widthParts.unit}`, autoHeight = height == null, heightParts = autoHeight ? null : getUnitValueParts(height.toString()), fixedHeight = heightParts ? `${heightParts.number}${heightParts.unit}` : "", nHeight = autoHeight ? "auto" : fixedHeight, nSrc = src || data?.url, nAlt = data?.altText && !alt ? data?.altText : alt || "", nAspectRatio = aspectRatio || (normalizedData.unitsMatch ? [
        getNormalizedFixedUnit(normalizedData.width),
        getNormalizedFixedUnit(normalizedData.height)
      ].join("/") : void 0);
      return {
        width: nWidth,
        height: nHeight,
        src: nSrc,
        alt: nAlt,
        aspectRatio: nAspectRatio
      };
    }, [
      width,
      height,
      src,
      data,
      alt,
      aspectRatio,
      normalizedData,
      passthroughProps?.key
    ]), { intervals, startingWidth, incrementSize, placeholderWidth } = srcSetOptions, imageWidths = React2.useMemo(() => generateImageWidths(
      width,
      intervals,
      startingWidth,
      incrementSize
    ), [width, intervals, startingWidth, incrementSize]);
    return isFixedWidth(normalizedProps.width) ? /* @__PURE__ */ jsx4(
      FixedWidthImage,
      {
        aspectRatio,
        crop,
        decoding,
        height,
        imageWidths,
        loader: loader6,
        loading,
        normalizedProps,
        passthroughProps,
        ref,
        width
      }
    ) : /* @__PURE__ */ jsx4(
      FluidImage,
      {
        aspectRatio,
        crop,
        decoding,
        imageWidths,
        loader: loader6,
        loading,
        normalizedProps,
        passthroughProps,
        placeholderWidth,
        ref,
        sizes
      }
    );
  }
), FixedWidthImage = React2.forwardRef(
  ({
    aspectRatio,
    crop,
    decoding,
    height,
    imageWidths,
    loader: loader6 = shopifyLoader,
    loading,
    normalizedProps,
    passthroughProps,
    width
  }, ref) => {
    let fixed = React2.useMemo(() => {
      let intWidth = getNormalizedFixedUnit(width), intHeight = getNormalizedFixedUnit(height), fixedAspectRatio = aspectRatio || (unitsMatch(normalizedProps.width, normalizedProps.height) ? [intWidth, intHeight].join("/") : normalizedProps.aspectRatio ? normalizedProps.aspectRatio : void 0), sizesArray = imageWidths === void 0 ? void 0 : generateSizes(imageWidths, fixedAspectRatio, crop), fixedHeight = intHeight || (fixedAspectRatio && intWidth ? intWidth * (parseAspectRatio(fixedAspectRatio) ?? 1) : void 0), srcSet = generateSrcSet(normalizedProps.src, sizesArray, loader6), src = loader6({
        src: normalizedProps.src,
        width: intWidth,
        height: fixedHeight,
        crop: normalizedProps.height === "auto" ? void 0 : crop
      });
      return {
        width: intWidth,
        aspectRatio: fixedAspectRatio,
        height: fixedHeight,
        srcSet,
        src
      };
    }, [
      aspectRatio,
      crop,
      height,
      imageWidths,
      loader6,
      normalizedProps,
      width
    ]);
    return /* @__PURE__ */ jsx4(
      "img",
      {
        ref,
        alt: normalizedProps.alt,
        decoding,
        height: fixed.height,
        loading,
        src: fixed.src,
        srcSet: fixed.srcSet,
        width: fixed.width,
        style: {
          aspectRatio: fixed.aspectRatio,
          ...passthroughProps.style
        },
        ...passthroughProps
      }
    );
  }
), FluidImage = React2.forwardRef(
  ({
    crop,
    decoding,
    imageWidths,
    loader: loader6 = shopifyLoader,
    loading,
    normalizedProps,
    passthroughProps,
    placeholderWidth,
    sizes
  }, ref) => {
    let fluid = React2.useMemo(() => {
      let sizesArray = imageWidths === void 0 ? void 0 : generateSizes(imageWidths, normalizedProps.aspectRatio, crop), placeholderHeight = normalizedProps.aspectRatio && placeholderWidth ? placeholderWidth * (parseAspectRatio(normalizedProps.aspectRatio) ?? 1) : void 0, srcSet = generateSrcSet(normalizedProps.src, sizesArray, loader6), src = loader6({
        src: normalizedProps.src,
        width: placeholderWidth,
        height: placeholderHeight,
        crop
      });
      return {
        placeholderHeight,
        srcSet,
        src
      };
    }, [crop, imageWidths, loader6, normalizedProps, placeholderWidth]);
    return /* @__PURE__ */ jsx4(
      "img",
      {
        ref,
        alt: normalizedProps.alt,
        decoding,
        height: fluid.placeholderHeight,
        loading,
        sizes,
        src: fluid.src,
        srcSet: fluid.srcSet,
        width: placeholderWidth,
        ...passthroughProps,
        style: {
          width: normalizedProps.width,
          aspectRatio: normalizedProps.aspectRatio,
          ...passthroughProps.style
        }
      }
    );
  }
);
function shopifyLoader({ src, width, height, crop }) {
  if (!src)
    return "";
  let url = new URL(src);
  return width && url.searchParams.append("width", Math.round(width).toString()), height && url.searchParams.append("height", Math.round(height).toString()), crop && url.searchParams.append("crop", crop), url.href;
}
function unitsMatch(width = "100%", height = "auto") {
  return getUnitValueParts(width.toString()).unit === getUnitValueParts(height.toString()).unit;
}
function getUnitValueParts(value) {
  let unit = value.replace(/[0-9.]/g, ""), number = parseFloat(value.replace(unit, ""));
  return {
    unit: unit === "" ? number === void 0 ? "auto" : "px" : unit,
    number
  };
}
function getNormalizedFixedUnit(value) {
  if (value === void 0)
    return;
  let { unit, number } = getUnitValueParts(value.toString());
  switch (unit) {
    case "em":
      return number * 16;
    case "rem":
      return number * 16;
    case "px":
      return number;
    case "":
      return number;
    default:
      return;
  }
}
function isFixedWidth(width) {
  return typeof width == "number" || typeof width == "string" && /\d(px|em|rem)$/.test(width);
}
function generateSrcSet(src, sizesArray, loader6 = shopifyLoader) {
  return src ? sizesArray?.length === 0 || !sizesArray ? src : sizesArray.map(
    (size, i3) => `${loader6({
      src,
      width: size.width,
      height: size.height,
      crop: size.crop
    })} ${sizesArray.length === 3 ? `${i3 + 1}x` : `${size.width ?? 0}w`}`
  ).join(", ") : "";
}
function generateImageWidths(width = "100%", intervals, startingWidth, incrementSize) {
  let responsive = Array.from(
    { length: intervals },
    (_, i3) => i3 * incrementSize + startingWidth
  ), fixed = Array.from(
    { length: 3 },
    (_, i3) => (i3 + 1) * (getNormalizedFixedUnit(width) ?? 0)
  );
  return isFixedWidth(width) ? fixed : responsive;
}
function parseAspectRatio(aspectRatio) {
  if (!aspectRatio)
    return;
  let [width, height] = aspectRatio.split("/");
  return 1 / (Number(width) / Number(height));
}
function generateSizes(imageWidths, aspectRatio, crop = "center") {
  return imageWidths ? imageWidths.map((width) => ({
    width,
    height: aspectRatio ? width * (parseAspectRatio(aspectRatio) ?? 1) : void 0,
    crop
  })) : void 0;
}

// app/root.tsx
import { defer } from "@shopify/remix-oxygen";

// app/components/Header.tsx
import { useState as useState4 } from "react";
import { Link, useParams, useLocation } from "@remix-run/react";
import { motion as motion3 } from "framer-motion";

// app/components/SalesTicker.tsx
import { motion } from "framer-motion";
import { useEffect as useEffect4, useState as useState3 } from "react";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var mockSales = [
  { username: "Crypto_Maxx", product: "PEPE PUMP Tee", amount: 29.99, timeAgo: "2 mins ago" },
  { username: "MoonGirl", product: "DEGEN SZN Tee", amount: 32.99, timeAgo: "5 mins ago" },
  { username: "HodlKing", product: "WAGMI Tee", amount: 27.99, timeAgo: "12 mins ago" },
  { username: "DiamondHands", product: "MOON SOON Tee", amount: 29.99, timeAgo: "18 mins ago" },
  { username: "SatoshiWannabe", product: "BULLISH AF Tee", amount: 35.99, timeAgo: "24 mins ago" },
  { username: "CryptoQueen", product: "NGMI Tee", amount: 28.99, timeAgo: "35 mins ago" }
];
function SalesTicker() {
  let [sales] = useState3(mockSales), [currentIndex, setCurrentIndex] = useState3(0), currentSale = sales[currentIndex];
  return useEffect4(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sales.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [sales.length]), /* @__PURE__ */ jsx5("div", { className: "bg-[#151522] py-1 overflow-hidden border-y border-[#2c2c44]", children: /* @__PURE__ */ jsx5("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.5 },
      className: "flex items-center justify-center text-sm text-center",
      children: [
        /* @__PURE__ */ jsx5("div", { className: "text-green-400 animate-pulse mr-2", children: "\u2022" }),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-300", children: [
          /* @__PURE__ */ jsx5("span", { className: "font-medium", children: currentSale.username }),
          " just purchased",
          " ",
          /* @__PURE__ */ jsx5("span", { className: "font-medium text-purple-400", children: currentSale.product }),
          " for",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "font-medium text-green-400", children: [
            "$",
            currentSale.amount
          ] }),
          " ",
          /* @__PURE__ */ jsx5("span", { className: "text-gray-500", children: currentSale.timeAgo })
        ] })
      ]
    },
    currentIndex
  ) }) });
}

// app/components/TopTicker.tsx
import { motion as motion2 } from "framer-motion";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var mockStats = [
  { label: "24h Volume", value: "$158,923", change: "+15.2%", positive: !0 },
  { label: "Active Sellers", value: "843", change: "+12", positive: !0 },
  { label: "Total T-Shirts", value: "2,547", change: "+83", positive: !0 },
  { label: "Avg. Price", value: "$32.42", change: "-1.2%", positive: !1 },
  { label: "Recent Sales", value: "432", change: "+53", positive: !0 }
];
function TopTicker() {
  return /* @__PURE__ */ jsx6("div", { className: "bg-[#0a0a10] border-b border-[#2c2c44]", children: /* @__PURE__ */ jsx6("div", { className: "container mx-auto py-2 px-4 overflow-x-auto", children: /* @__PURE__ */ jsx6("div", { className: "flex space-x-6 md:space-x-12 justify-start md:justify-center min-w-max", children: mockStats.map((stat, index2) => /* @__PURE__ */ jsxs2("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx6(
      motion2.div,
      {
        className: `w-2 h-2 rounded-full ${stat.positive ? "bg-green-400" : "bg-red-400"} mr-2 flex-shrink-0`,
        animate: {
          scale: [1, 1.5, 1],
          opacity: [1, 0.8, 1]
        },
        transition: {
          duration: 2,
          repeat: 1 / 0,
          delay: index2 * 0.3
        }
      }
    ),
    /* @__PURE__ */ jsxs2("div", { className: "mr-1 text-xs text-gray-400 font-medium", children: [
      stat.label,
      ":"
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "text-xs font-bold", children: stat.value }),
    /* @__PURE__ */ jsx6("div", { className: `ml-1.5 text-xs ${stat.positive ? "text-green-400" : "text-red-400"}`, children: stat.change })
  ] }, stat.label)) }) }) });
}

// app/components/Header.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function Header() {
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState4(!1), { pathname } = useLocation(), params = useParams(), isHome = pathname === "/", isProductPage = pathname.includes("/products/");
  return /* @__PURE__ */ jsxs3("div", { className: "sticky top-0 z-50 bg-[#0a0a10]", children: [
    /* @__PURE__ */ jsx7("div", { className: "border-b border-[#2c2c44]", children: /* @__PURE__ */ jsxs3("div", { className: "container mx-auto px-4 py-3 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx7("div", { className: "flex items-center", children: /* @__PURE__ */ jsx7(Link, { to: "/", className: "text-2xl font-bold", children: /* @__PURE__ */ jsx7("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Rugged" }) }) }),
      /* @__PURE__ */ jsxs3("nav", { className: "hidden md:flex space-x-6 mx-4", children: [
        /* @__PURE__ */ jsx7(Link, { to: "/", className: `text-gray-300 hover:text-purple-400 transition-colors ${isHome ? "text-purple-400" : ""}`, children: "Home" }),
        /* @__PURE__ */ jsx7(Link, { to: "/collections/trending", className: "text-gray-300 hover:text-purple-400 transition-colors", children: "Trending" }),
        /* @__PURE__ */ jsx7(Link, { to: "/collections", className: "text-gray-300 hover:text-purple-400 transition-colors", children: "Categories" })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx7(Link, { to: "/account", children: /* @__PURE__ */ jsxs3(
          motion3.button,
          {
            className: `bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm
                        relative overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.3)]`,
            whileHover: { scale: 1.05, boxShadow: "0 0 15px rgba(168,85,247,0.5)" },
            whileTap: { scale: 0.95 },
            children: [
              /* @__PURE__ */ jsx7("span", { className: "relative z-10", children: "My Account" }),
              /* @__PURE__ */ jsx7(
                motion3.div,
                {
                  className: "absolute inset-0 opacity-50",
                  style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
                  },
                  animate: { x: ["-100%", "100%"] },
                  transition: { duration: 1.5, repeat: 1 / 0, repeatDelay: 0.5 }
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx7("div", { className: "md:hidden", children: /* @__PURE__ */ jsx7(
          "button",
          {
            className: "text-white p-2",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            children: /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
          }
        ) })
      ] })
    ] }) }),
    !isProductPage && /* @__PURE__ */ jsxs3("div", { className: "pt-3 pb-2 border-b border-[#2c2c44] bg-[#0a0a10]/90 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx7(SalesTicker, {}),
      /* @__PURE__ */ jsx7("div", { className: "mt-3 text-center", children: /* @__PURE__ */ jsx7(Link, { to: "/products/create-your-own", children: /* @__PURE__ */ jsx7("span", { className: "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 transition-all cursor-pointer neon-text", children: "Create a Shirt" }) }) }),
      /* @__PURE__ */ jsx7("div", { className: "max-w-md mx-auto mt-3 px-4", children: /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
        /* @__PURE__ */ jsx7(
          "input",
          {
            type: "text",
            placeholder: "Search shirts...",
            className: `w-full bg-[#1c1c2e] text-white rounded-full px-4 py-2 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                      border border-[#2c2c44] transition-all`
          }
        ),
        /* @__PURE__ */ jsx7("div", { className: "absolute right-3 top-2.5 text-gray-400", children: /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx7("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) }) })
      ] }) })
    ] }),
    !isProductPage && /* @__PURE__ */ jsx7(TopTicker, {}),
    isMobileMenuOpen && /* @__PURE__ */ jsx7(
      motion3.div,
      {
        className: "md:hidden bg-[#151522] border-b border-[#2c2c44]",
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ jsxs3("div", { className: "px-4 py-3 space-y-2", children: [
          /* @__PURE__ */ jsx7(
            Link,
            {
              to: "/",
              className: "block text-gray-300 hover:text-purple-400 transition-colors py-2",
              onClick: () => setIsMobileMenuOpen(!1),
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx7(
            Link,
            {
              to: "/collections/trending",
              className: "block text-gray-300 hover:text-purple-400 transition-colors py-2",
              onClick: () => setIsMobileMenuOpen(!1),
              children: "Trending"
            }
          ),
          /* @__PURE__ */ jsx7(
            Link,
            {
              to: "/collections",
              className: "block text-gray-300 hover:text-purple-400 transition-colors py-2",
              onClick: () => setIsMobileMenuOpen(!1),
              children: "Categories"
            }
          ),
          /* @__PURE__ */ jsx7(
            Link,
            {
              to: "/account",
              className: "block text-gray-300 hover:text-purple-400 transition-colors py-2",
              onClick: () => setIsMobileMenuOpen(!1),
              children: "My Account"
            }
          )
        ] })
      }
    )
  ] });
}

// app/components/Footer.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function Footer() {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx8("footer", { className: "bg-[#0a0a10] text-white py-8 mt-12 border-t border-[#2c2c44]", children: /* @__PURE__ */ jsxs4("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsxs4("div", { className: "mb-4 md:mb-0", children: [
        /* @__PURE__ */ jsx8("h3", { className: "text-xl font-bold neon-text", children: "T-Shirt Pump" }),
        /* @__PURE__ */ jsx8("p", { className: "text-purple-300 mt-1", children: "The #1 T-Shirt Marketplace" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "flex space-x-6", children: [
        /* @__PURE__ */ jsx8("a", { href: "https://twitter.com/rugged", className: "hover:text-purple-400 transition-colors", children: "Twitter" }),
        /* @__PURE__ */ jsx8("a", { href: "https://discord.gg/rugged", className: "hover:text-purple-400 transition-colors", children: "Discord" }),
        /* @__PURE__ */ jsx8("a", { href: "https://instagram.com/rugged", className: "hover:text-purple-400 transition-colors", children: "Instagram" }),
        /* @__PURE__ */ jsx8(Link2, { to: "/policies/faq", className: "hover:text-purple-400 transition-colors", children: "FAQ" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "mt-8 pt-8 border-t border-[#2c2c44] text-center text-gray-400 text-sm", children: [
      /* @__PURE__ */ jsxs4("p", { children: [
        "\xA9 ",
        currentYear,
        " T-Shirt Pump. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "mt-2 space-x-4", children: [
        /* @__PURE__ */ jsx8(Link2, { to: "/policies/privacy-policy", className: "hover:text-purple-400 transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx8(Link2, { to: "/policies/terms-of-service", className: "hover:text-purple-400 transition-colors", children: "Terms of Service" }),
        /* @__PURE__ */ jsx8(Link2, { to: "/policies/shipping-policy", className: "hover:text-purple-400 transition-colors", children: "Shipping Policy" })
      ] })
    ] })
  ] }) });
}

// app/components/Cart.tsx
import { motion as motion4, AnimatePresence } from "framer-motion";
import { useState as useState5, Suspense } from "react";
import { Link as Link3 } from "@remix-run/react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function Cart() {
  return /* @__PURE__ */ jsx9(CartProvider, { children: /* @__PURE__ */ jsx9(CartContent, {}) });
}
function CartContent() {
  let { status, linesCount, cost, lines } = useCart(), [isCartOpen, setIsCartOpen] = useState5(!1);
  return status === "uninitialized" || linesCount === 0 ? /* @__PURE__ */ jsx9("div", { className: "fixed right-4 top-4 z-50", children: /* @__PURE__ */ jsx9(
    "button",
    {
      className: "bg-[#151522] p-3 rounded-full border border-[#2c2c44] shadow-lg",
      onClick: () => setIsCartOpen(!0),
      children: /* @__PURE__ */ jsx9("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx9("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" }) })
    }
  ) }) : /* @__PURE__ */ jsxs5("div", { className: "fixed right-4 top-4 z-50", children: [
    /* @__PURE__ */ jsxs5(
      "button",
      {
        className: "relative bg-[#151522] p-3 rounded-full border border-[#2c2c44] shadow-lg",
        onClick: () => setIsCartOpen(!0),
        children: [
          /* @__PURE__ */ jsx9("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx9("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" }) }),
          /* @__PURE__ */ jsx9("span", { className: "absolute -top-2 -right-2 bg-purple-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs", children: linesCount })
        ]
      }
    ),
    /* @__PURE__ */ jsx9(AnimatePresence, { children: isCartOpen && /* @__PURE__ */ jsx9(
      motion4.div,
      {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsCartOpen(!1),
        children: /* @__PURE__ */ jsxs5(
          motion4.div,
          {
            className: "absolute right-0 top-0 h-full w-full max-w-md bg-[#0f0f13] shadow-xl overflow-auto",
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
            onClick: (e2) => e2.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx9("div", { className: "p-4 border-b border-[#2c2c44]", children: /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsx9("h2", { className: "text-2xl font-bold", children: "Your Cart" }),
                /* @__PURE__ */ jsx9(
                  "button",
                  {
                    className: "p-2 text-gray-400 hover:text-white",
                    onClick: () => setIsCartOpen(!1),
                    children: /* @__PURE__ */ jsx9("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx9("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx9(Suspense, { fallback: /* @__PURE__ */ jsx9("div", { className: "p-4 text-center", children: "Loading cart..." }), children: lines?.length > 0 ? /* @__PURE__ */ jsx9("div", { className: "px-4", children: lines.map((line) => /* @__PURE__ */ jsxs5(
                motion4.div,
                {
                  className: "py-4 border-b border-[#2c2c44] flex",
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  children: [
                    /* @__PURE__ */ jsx9("div", { className: "flex-shrink-0 mr-4", children: line.merchandise.image && /* @__PURE__ */ jsx9(
                      "img",
                      {
                        src: line.merchandise.image.url,
                        alt: line.merchandise.title,
                        className: "w-20 h-20 object-cover rounded-lg"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs5("div", { className: "flex-grow", children: [
                      /* @__PURE__ */ jsx9(
                        Link3,
                        {
                          to: `/products/${line.merchandise.product.handle}`,
                          className: "font-medium hover:text-purple-400 transition-colors",
                          children: line.merchandise.product.title
                        }
                      ),
                      /* @__PURE__ */ jsx9("div", { className: "text-sm text-gray-400 mt-1", children: line.merchandise.title !== "Default Title" ? line.merchandise.title : "" }),
                      /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center mt-2", children: [
                        /* @__PURE__ */ jsxs5("p", { className: "font-medium", children: [
                          "$",
                          parseFloat(line.cost.totalAmount.amount).toFixed(2)
                        ] }),
                        /* @__PURE__ */ jsxs5("div", { className: "flex items-center border border-[#2c2c44] rounded-full", children: [
                          /* @__PURE__ */ jsx9(
                            "button",
                            {
                              className: "w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white",
                              onClick: () => {
                              },
                              children: /* @__PURE__ */ jsx9(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-4 w-4",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: /* @__PURE__ */ jsx9(
                                    "path",
                                    {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M20 12H4"
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsx9("span", { className: "mx-2", children: line.quantity }),
                          /* @__PURE__ */ jsx9(
                            "button",
                            {
                              className: "w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white",
                              onClick: () => {
                              },
                              children: /* @__PURE__ */ jsx9(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-4 w-4",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: /* @__PURE__ */ jsx9(
                                    "path",
                                    {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M12 4v16m8-8H4"
                                    }
                                  )
                                }
                              )
                            }
                          )
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx9("div", { className: "ml-2", children: /* @__PURE__ */ jsx9(
                      "button",
                      {
                        className: "text-gray-400 hover:text-white",
                        onClick: () => {
                        },
                        children: /* @__PURE__ */ jsx9(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /* @__PURE__ */ jsx9(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                              }
                            )
                          }
                        )
                      }
                    ) })
                  ]
                },
                line.id
              )) }) : /* @__PURE__ */ jsxs5("div", { className: "p-4 text-center", children: [
                /* @__PURE__ */ jsx9("p", { className: "mb-3", children: "Your cart is empty" }),
                /* @__PURE__ */ jsx9(
                  Link3,
                  {
                    to: "/collections/all",
                    className: "bg-purple-600 text-white px-4 py-2 rounded-full inline-block",
                    children: "Continue shopping"
                  }
                )
              ] }) }),
              lines?.length > 0 && /* @__PURE__ */ jsxs5("div", { className: "p-4 mt-4 border-t border-[#2c2c44]", children: [
                /* @__PURE__ */ jsxs5("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsx9("span", { className: "text-gray-400", children: "Subtotal" }),
                    /* @__PURE__ */ jsxs5("span", { className: "font-medium", children: [
                      "$",
                      parseFloat(cost?.subtotalAmount?.amount || "0").toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsx9("span", { className: "text-gray-400", children: "Shipping" }),
                    /* @__PURE__ */ jsx9("span", { className: "text-gray-200", children: "Calculated at checkout" })
                  ] }),
                  /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center font-bold text-lg pt-2 border-t border-[#2c2c44]", children: [
                    /* @__PURE__ */ jsx9("span", { children: "Total" }),
                    /* @__PURE__ */ jsxs5("span", { className: "font-bold", children: [
                      "$",
                      parseFloat(cost?.totalAmount?.amount || "0").toFixed(2)
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx9(
                    "button",
                    {
                      className: "w-full bg-[#5A31F4] text-white py-3 rounded-full",
                      onClick: () => {
                      },
                      children: "Check out with Shop Pay"
                    }
                  ),
                  /* @__PURE__ */ jsx9(
                    "button",
                    {
                      className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-full",
                      onClick: () => {
                      },
                      children: "Checkout"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}

// app/components/Layout.tsx
import { Suspense as Suspense2 } from "react";
import { Fragment, jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsx10(Fragment, { children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx10("div", { children: /* @__PURE__ */ jsx10("a", { href: "#mainContent", className: "sr-only", children: "Skip to content" }) }),
    /* @__PURE__ */ jsx10(Header, {}),
    /* @__PURE__ */ jsx10("main", { role: "main", id: "mainContent", className: "flex-grow", children }),
    /* @__PURE__ */ jsx10(Suspense2, { fallback: null, children: /* @__PURE__ */ jsx10(Cart, {}) }),
    /* @__PURE__ */ jsx10(Footer, {})
  ] }) });
}

// app/root.tsx
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var loader = async ({ context }) => {
  let { storefront } = context, publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;
  return defer({
    publicStoreDomain
  });
};
function App() {
  let { publicStoreDomain } = useLoaderData();
  return /* @__PURE__ */ jsx11(ShopifyProvider, { storeDomain: `https://${publicStoreDomain}`, children: /* @__PURE__ */ jsxs7("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs7("head", { children: [
      /* @__PURE__ */ jsx11("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx11("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ jsx11("meta", { name: "theme-color", content: "#0f0f13" }),
      /* @__PURE__ */ jsx11("link", { rel: "icon", href: "/favicon.ico" }),
      /* @__PURE__ */ jsx11(Meta, {}),
      /* @__PURE__ */ jsx11(Links, {})
    ] }),
    /* @__PURE__ */ jsxs7("body", { className: "min-h-screen bg-gradient-to-b from-[#0f0f13] to-[#1a1a27] text-white", children: [
      /* @__PURE__ */ jsx11(Layout, { children: /* @__PURE__ */ jsx11(Outlet, {}) }),
      /* @__PURE__ */ jsx11(ScrollRestoration, {}),
      /* @__PURE__ */ jsx11(Scripts, {})
    ] })
  ] }) });
}
function ErrorBoundary() {
  let error = useRouteError(), errorMessage = "Unknown error", errorStatus = 500;
  return isRouteErrorResponse(error) ? (errorMessage = error.data?.message || error.data.toString(), errorStatus = error.status) : error instanceof Error && (errorMessage = error.message), /* @__PURE__ */ jsxs7("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs7("head", { children: [
      /* @__PURE__ */ jsx11("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx11("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ jsx11("meta", { name: "theme-color", content: "#0f0f13" }),
      /* @__PURE__ */ jsx11(Meta, {}),
      /* @__PURE__ */ jsx11(Links, {})
    ] }),
    /* @__PURE__ */ jsxs7("body", { className: "min-h-screen bg-gradient-to-b from-[#0f0f13] to-[#1a1a27] text-white", children: [
      /* @__PURE__ */ jsxs7("div", { className: "container mx-auto py-16 px-4 text-center", children: [
        /* @__PURE__ */ jsx11("h1", { className: "text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: errorStatus }),
        /* @__PURE__ */ jsx11("h2", { className: "text-3xl font-bold mb-4", children: "Something went wrong" }),
        /* @__PURE__ */ jsx11("p", { className: "text-gray-400 mb-8 text-lg", children: errorMessage }),
        /* @__PURE__ */ jsx11(
          "a",
          {
            href: "/",
            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg",
            children: "Back to Homepage"
          }
        )
      ] }),
      /* @__PURE__ */ jsx11(Scripts, {})
    ] })
  ] });
}

// app/routes/collections.$handle.tsx
var collections_handle_exports = {};
__export(collections_handle_exports, {
  default: () => CollectionPage,
  loader: () => loader2
});
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { json } from "@shopify/remix-oxygen";
import { Link as Link5 } from "@remix-run/react";

// node_modules/@shopify/hydrogen/dist/production/index.js
import { redirect } from "@remix-run/server-runtime";
import { lazy, createContext as createContext3, forwardRef as forwardRef2, useMemo as useMemo6, createElement, Suspense as Suspense3, Fragment as Fragment2, useRef as useRef4, useEffect as useEffect5, useContext as useContext3 } from "react";
import { useMatches, useLocation as useLocation2, useNavigation, Link as Link4, useNavigate, useFetcher, useFetchers } from "@remix-run/react";
import { jsx as jsx12, jsxs as jsxs8, Fragment as Fragment$1 } from "react/jsx-runtime";
import zr from "content-security-policy-builder";
var N = "2023.10.6";
var Zt = lazy(() => Promise.resolve().then(() => (init_log_seo_tags_TY72EQWZ(), log_seo_tags_TY72EQWZ_exports)));
var F = `Shopify Hydrogen ${N}`;
var yt = "cartFormInput";
function ee({ children: e2, action: t2, inputs: r2, route: n2 }) {
  let a3 = useFetcher();
  return jsxs8(a3.Form, { action: n2 || "", method: "post", children: [(t2 || r2) && jsx12("input", { type: "hidden", name: yt, value: JSON.stringify({ action: t2, inputs: r2 }) }), typeof e2 == "function" ? e2(a3) : e2] });
}
ee.INPUT_NAME = yt;
ee.ACTIONS = { AttributesUpdateInput: "AttributesUpdateInput", BuyerIdentityUpdate: "BuyerIdentityUpdate", Create: "Create", DiscountCodesUpdate: "DiscountCodesUpdate", LinesAdd: "LinesAdd", LinesRemove: "LinesRemove", LinesUpdate: "LinesUpdate", NoteUpdate: "NoteUpdate", SelectedDeliveryOptionsUpdate: "SelectedDeliveryOptionsUpdate", MetafieldsSet: "MetafieldsSet", MetafieldDelete: "MetafieldDelete" };
function Sr(e2) {
  let t2 = {};
  for (let o2 of e2.entries()) {
    let i3 = o2[0], u2 = e2.getAll(i3);
    t2[i3] = u2.length > 1 ? u2 : o2[1];
  }
  let { cartFormInput: r2, ...n2 } = t2, { action: a3, inputs: s3 } = r2 ? JSON.parse(String(r2)) : {};
  return { action: a3, inputs: { ...s3, ...n2 } };
}
ee.getFormInput = Sr;
var Ct = createContext3(void 0), Jr = Ct.Provider, qe = () => useContext3(Ct);
var en = forwardRef2((e2, t2) => {
  let r2 = qe();
  return jsx12("script", { suppressHydrationWarning: !0, ...e2, nonce: r2, ref: t2 });
});

// app/routes/collections.$handle.tsx
import { motion as motion5 } from "framer-motion";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
async function loader2({ params, context }) {
  let { handle } = params, { storefront } = context;
  if (!handle)
    throw new Response("No collection handle provided", { status: 404 });
  let { collection } = await storefront.query(COLLECTION_QUERY, {
    variables: { handle }
  });
  if (!collection)
    throw new Response("Collection not found", { status: 404 });
  return json({
    collection
  });
}
function CollectionPage() {
  let { collection } = useLoaderData2(), colorClass = {
    pumping: "from-green-500 to-green-700",
    rugged: "from-red-500 to-red-700",
    "new-drops": "from-blue-500 to-blue-700",
    classics: "from-yellow-500 to-yellow-700",
    trending: "from-purple-500 to-purple-700"
  }[collection.handle] || "from-purple-500 to-purple-700";
  return /* @__PURE__ */ jsx13("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxs9(
    motion5.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsxs9("div", { className: `bg-gradient-to-br ${colorClass} rounded-xl p-8 mb-10 relative overflow-hidden`, children: [
          /* @__PURE__ */ jsx13(
            motion5.div,
            {
              className: "absolute inset-0 bg-white/5",
              animate: {
                backgroundPosition: ["0% 0%", "100% 100%"]
              },
              transition: {
                duration: 3,
                repeat: 1 / 0,
                repeatType: "reverse"
              },
              style: {
                backgroundSize: "200% 200%",
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxs9("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx13("h1", { className: "text-3xl font-bold text-white mb-3", children: collection.title }),
            collection.description && /* @__PURE__ */ jsx13(
              "div",
              {
                dangerouslySetInnerHTML: { __html: collection.description },
                className: "text-white/80 max-w-3xl"
              }
            ),
            /* @__PURE__ */ jsx13("div", { className: "flex items-center mt-4", children: /* @__PURE__ */ jsxs9("span", { className: "bg-white/20 px-3 py-1 rounded-full text-sm text-white", children: [
              collection.products.nodes.length,
              " shirts"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx13("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: collection.products.nodes.map((product, index2) => /* @__PURE__ */ jsx13(
          motion5.div,
          {
            className: "bg-[#151522] rounded-xl overflow-hidden border border-[#2c2c44] card-glow",
            whileHover: { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" },
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: index2 * 0.05 },
            children: /* @__PURE__ */ jsxs9(Link5, { to: `/products/${product.handle}`, children: [
              /* @__PURE__ */ jsxs9("div", { className: "relative", children: [
                product.images.nodes[0] && /* @__PURE__ */ jsx13(
                  Image,
                  {
                    data: product.images.nodes[0],
                    className: "w-full h-56 object-cover",
                    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw",
                    alt: product.title
                  }
                ),
                /* @__PURE__ */ jsx13("div", { className: "absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold", children: "+120%" })
              ] }),
              /* @__PURE__ */ jsxs9("div", { className: "p-4", children: [
                /* @__PURE__ */ jsx13("h3", { className: "font-bold", children: product.title }),
                /* @__PURE__ */ jsxs9("div", { className: "flex justify-between items-center mt-2", children: [
                  /* @__PURE__ */ jsxs9("p", { className: "text-purple-400 font-medium", children: [
                    "$",
                    product.priceRange.minVariantPrice.amount
                  ] }),
                  /* @__PURE__ */ jsx13("div", { className: "text-xs text-gray-400", children: "897 sales" })
                ] })
              ] })
            ] })
          },
          product.id
        )) }),
        collection.products.nodes.length === 0 && /* @__PURE__ */ jsxs9("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsx13("h2", { className: "text-2xl font-bold mb-4", children: "No products found" }),
          /* @__PURE__ */ jsx13("p", { className: "text-gray-400 mb-6", children: "We couldn't find any products in this collection." }),
          /* @__PURE__ */ jsx13(
            Link5,
            {
              to: "/collections",
              className: "bg-purple-600 text-white px-6 py-3 rounded-full inline-block",
              children: "View all collections"
            }
          )
        ] })
      ]
    }
  ) });
}
var COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      products(first: 20) {
        nodes {
          id
          title
          handle
          images(first: 1) {
            nodes {
              id
              url
              altText
              width
              height
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

// app/routes/collections._index.tsx
var collections_index_exports = {};
__export(collections_index_exports, {
  default: () => CollectionsPage,
  loader: () => loader3
});
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { json as json2 } from "@shopify/remix-oxygen";
import { Link as Link6 } from "@remix-run/react";
import { motion as motion6 } from "framer-motion";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
async function loader3({ context }) {
  let { storefront } = context, { collections } = await storefront.query(COLLECTIONS_QUERY);
  return json2({
    collections
  });
}
function CollectionsPage() {
  let { collections } = useLoaderData3(), categoryColors = {
    pumping: "from-green-500 to-green-700",
    rugged: "from-red-500 to-red-700",
    "new-drops": "from-blue-500 to-blue-700",
    classics: "from-yellow-500 to-yellow-700",
    trending: "from-purple-500 to-purple-700"
  };
  return /* @__PURE__ */ jsx14("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ jsxs10(
    motion6.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsx14("h1", { className: "text-3xl font-bold mb-8 neon-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500", children: "T-Shirt Categories" }),
        /* @__PURE__ */ jsx14("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: collections.nodes.map((collection, index2) => {
          let colorClass = categoryColors[collection.handle] || "from-purple-500 to-purple-700";
          return /* @__PURE__ */ jsxs10(
            motion6.div,
            {
              className: `bg-gradient-to-br ${colorClass} p-8 rounded-xl text-white relative overflow-hidden
                         border border-white/10 h-64 flex flex-col justify-between`,
              whileHover: {
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                scale: 1.02
              },
              whileTap: { scale: 0.98 },
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: index2 * 0.1 },
              children: [
                /* @__PURE__ */ jsx14(Link6, { to: `/collections/${collection.handle}`, className: "absolute inset-0 z-10", children: /* @__PURE__ */ jsx14("span", { className: "sr-only", children: collection.title }) }),
                /* @__PURE__ */ jsx14(
                  motion6.div,
                  {
                    className: "absolute inset-0 bg-white/5",
                    animate: {
                      backgroundPosition: ["0% 0%", "100% 100%"]
                    },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      repeatType: "reverse"
                    },
                    style: {
                      backgroundSize: "200% 200%",
                      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
                    }
                  }
                ),
                Array.from({ length: 6 }).map((_, i3) => /* @__PURE__ */ jsx14(
                  motion6.div,
                  {
                    className: "absolute w-1 h-1 rounded-full bg-white/70",
                    style: {
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      scale: Math.random() * 0.5 + 0.5
                    },
                    animate: {
                      y: [0, Math.random() * -30 - 10],
                      opacity: [0, 1, 0],
                      scale: [0, Math.random() * 1 + 1, 0]
                    },
                    transition: {
                      duration: Math.random() * 2 + 1,
                      repeat: 1 / 0,
                      delay: i3 * (Math.random() * 0.5)
                    }
                  },
                  i3
                )),
                /* @__PURE__ */ jsxs10("div", { children: [
                  /* @__PURE__ */ jsx14("h2", { className: "text-2xl font-bold relative z-2", children: collection.title }),
                  /* @__PURE__ */ jsx14("p", { className: "text-white/80 mt-2 relative z-2", children: collection.description ? collection.description.substring(0, 120) + "..." : "Explore our collection of trending t-shirts" })
                ] }),
                /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between relative z-2", children: [
                  /* @__PURE__ */ jsxs10("span", { className: "text-sm bg-white/20 px-3 py-1 rounded-full", children: [
                    collection.products.totalCount,
                    " shirts"
                  ] }),
                  /* @__PURE__ */ jsxs10("span", { className: "text-sm font-medium flex items-center", children: [
                    "Explore",
                    /* @__PURE__ */ jsx14("svg", { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx14("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })
                  ] })
                ] })
              ]
            },
            collection.id
          );
        }) }),
        /* @__PURE__ */ jsxs10("div", { className: "mt-16", children: [
          /* @__PURE__ */ jsx14("h2", { className: "text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Popular Tags" }),
          /* @__PURE__ */ jsx14("div", { className: "bg-[#151522] p-6 rounded-xl border border-[#2c2c44]", children: /* @__PURE__ */ jsx14("div", { className: "flex flex-wrap gap-3", children: ["TRENDING", "POPULAR", "NEW", "LIMITED", "SALE", "EXCLUSIVE", "BEST SELLER", "CRYPTO", "PEPE", "MOON", "DEGEN", "WAGMI", "HODL", "APE", "BULL", "PUMP"].map((tag) => /* @__PURE__ */ jsxs10(
            motion6.a,
            {
              href: `/search?q=${tag}`,
              className: "bg-[#1c1c2e] px-4 py-2 rounded-full text-sm cursor-pointer border border-[#2c2c44]",
              whileHover: {
                scale: 1.05,
                backgroundColor: "#2a2a44",
                boxShadow: "0 0 12px rgba(168,85,247,0.5)"
              },
              children: [
                "#",
                tag
              ]
            },
            tag
          )) }) })
        ] })
      ]
    }
  ) });
}
var COLLECTIONS_QUERY = `#graphql
  query Collections {
    collections(first: 10) {
      nodes {
        id
        title
        handle
        description
        products(first: 0) {
          totalCount
        }
      }
    }
  }
`;

// app/routes/products.$handle.tsx
var products_handle_exports = {};
__export(products_handle_exports, {
  default: () => ProductPage,
  loader: () => loader4
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData4, Link as Link7 } from "@remix-run/react";
import { motion as motion7 } from "framer-motion";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var mockProducts = {
  1: {
    id: "1",
    title: "PEPE PUMP",
    handle: "pepe-pump",
    descriptionHtml: "<p>The iconic PEPE PUMP t-shirt, perfect for crypto enthusiasts and meme lovers!</p>",
    images: {
      nodes: [
        {
          id: "img1",
          url: "https://placehold.co/600x400/22c55e/ffffff?text=PEPE+PUMP",
          altText: "PEPE PUMP T-shirt",
          width: 600,
          height: 400
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: "variant1",
          price: {
            amount: "35.99",
            currencyCode: "USD"
          },
          availableForSale: !0,
          selectedOptions: [
            {
              name: "Size",
              value: "M"
            },
            {
              name: "Color",
              value: "Green"
            }
          ]
        }
      ]
    },
    metafields: [
      {
        key: "growth",
        value: "240"
      },
      {
        key: "creator_name",
        value: "PepeLord"
      },
      {
        key: "creator_address",
        value: "pepe...x829"
      },
      {
        key: "creator_share",
        value: "10"
      },
      {
        key: "total_sales",
        value: "1289"
      },
      {
        key: "holders",
        value: "1254"
      }
    ]
  },
  2: {
    id: "2",
    title: "MOON SOON",
    handle: "moon-soon",
    descriptionHtml: "<p>Show off your optimism with this MOON SOON t-shirt. To the moon!</p>",
    images: {
      nodes: [
        {
          id: "img2",
          url: "https://placehold.co/600x400/8b5cf6/ffffff?text=MOON+SOON",
          altText: "MOON SOON T-shirt",
          width: 600,
          height: 400
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: "variant2",
          price: {
            amount: "29.99",
            currencyCode: "USD"
          },
          availableForSale: !0,
          selectedOptions: [
            {
              name: "Size",
              value: "M"
            },
            {
              name: "Color",
              value: "Purple"
            }
          ]
        }
      ]
    },
    metafields: [
      {
        key: "growth",
        value: "120"
      },
      {
        key: "creator_name",
        value: "MoonMan"
      },
      {
        key: "creator_address",
        value: "moon...p741"
      },
      {
        key: "creator_share",
        value: "12"
      },
      {
        key: "total_sales",
        value: "895"
      },
      {
        key: "holders",
        value: "872"
      }
    ]
  },
  3: {
    id: "3",
    title: "DEGEN SZN",
    handle: "degen-szn",
    descriptionHtml: "<p>Embrace the degen life with our limited edition DEGEN SZN t-shirt.</p>",
    images: {
      nodes: [
        {
          id: "img3",
          url: "https://placehold.co/600x400/ec4899/ffffff?text=DEGEN+SZN",
          altText: "DEGEN SZN T-shirt",
          width: 600,
          height: 400
        }
      ]
    },
    variants: {
      nodes: [
        {
          id: "variant3",
          price: {
            amount: "32.99",
            currencyCode: "USD"
          },
          availableForSale: !0,
          selectedOptions: [
            {
              name: "Size",
              value: "L"
            },
            {
              name: "Color",
              value: "Pink"
            }
          ]
        }
      ]
    },
    metafields: [
      {
        key: "growth",
        value: "180"
      },
      {
        key: "creator_name",
        value: "DegenKing"
      },
      {
        key: "creator_address",
        value: "degen...q462"
      },
      {
        key: "creator_share",
        value: "15"
      },
      {
        key: "total_sales",
        value: "1045"
      },
      {
        key: "holders",
        value: "985"
      }
    ]
  }
}, loader4 = async ({ params }) => {
  let { handle } = params, product = null;
  for (let id in mockProducts)
    if (mockProducts[id].handle === handle) {
      product = mockProducts[id];
      break;
    }
  if (!product)
    throw new Response("Product not found", { status: 404 });
  let relatedProducts = {
    nodes: Object.values(mockProducts).filter((p) => p.id !== product.id)
  };
  return json3({
    product,
    relatedProducts
  });
};
function ProductPage() {
  let { product, relatedProducts } = useLoaderData4(), selectedVariant = product.variants.nodes[0], stats = {
    totalSales: product.metafields.find((m) => m.key === "total_sales")?.value || "897",
    lastPurchase: "2 minutes ago",
    holders: product.metafields.find((m) => m.key === "holders")?.value || "854"
  }, growth = product.metafields.find((m) => m.key === "growth")?.value || "120", creator = {
    name: product.metafields.find((m) => m.key === "creator_name")?.value || "TShirtDesigner",
    address: product.metafields.find((m) => m.key === "creator_address")?.value || "designer...x723",
    share: product.metafields.find((m) => m.key === "creator_share")?.value || "10"
  };
  return /* @__PURE__ */ jsxs11("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxs11("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs11(
        motion7.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsx15("div", { className: "bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl shadow-lg", children: product.images.nodes[0] && /* @__PURE__ */ jsx15(
              "img",
              {
                src: product.images.nodes[0].url,
                alt: product.title,
                className: "w-full h-auto rounded-lg"
              }
            ) }),
            /* @__PURE__ */ jsxs11("div", { className: "mt-8 bg-white p-6 rounded-xl shadow-md", children: [
              /* @__PURE__ */ jsx15("h3", { className: "text-xl font-bold mb-4", children: "Creator Info" }),
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs11("div", { children: [
                  /* @__PURE__ */ jsx15("p", { className: "text-sm text-gray-500", children: "Created by" }),
                  /* @__PURE__ */ jsx15("p", { className: "font-medium", children: creator.name }),
                  /* @__PURE__ */ jsx15("p", { className: "text-xs text-gray-400", children: creator.address })
                ] }),
                /* @__PURE__ */ jsxs11("div", { children: [
                  /* @__PURE__ */ jsx15("p", { className: "text-sm text-gray-500", children: "Royalty" }),
                  /* @__PURE__ */ jsxs11("p", { className: "font-medium text-purple-600", children: [
                    creator.share,
                    "%"
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs11(
        motion7.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          children: [
            /* @__PURE__ */ jsxs11("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxs11("div", { children: [
                /* @__PURE__ */ jsx15("h1", { className: "text-3xl font-bold", children: product.title }),
                /* @__PURE__ */ jsx15(
                  "div",
                  {
                    dangerouslySetInnerHTML: { __html: product.descriptionHtml },
                    className: "text-gray-600 mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "bg-green-500 text-white px-4 py-2 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxs11("p", { className: "text-xl font-bold", children: [
                  "+",
                  growth,
                  "%"
                ] }),
                /* @__PURE__ */ jsx15("p", { className: "text-xs", children: "24h" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs11("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsx15("div", { className: "flex items-baseline", children: /* @__PURE__ */ jsxs11("span", { className: "text-3xl font-bold", children: [
                "$",
                selectedVariant.price.amount,
                " ",
                selectedVariant.price.currencyCode
              ] }) }),
              /* @__PURE__ */ jsxs11("div", { className: "mt-10 space-y-4", children: [
                /* @__PURE__ */ jsx15(
                  "button",
                  {
                    className: "flex items-center justify-center bg-[#5A31F4] text-white w-full py-3 rounded-full",
                    onClick: () => {
                    },
                    children: "Check out with Shop Pay"
                  }
                ),
                /* @__PURE__ */ jsx15(
                  "button",
                  {
                    className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg",
                    onClick: () => {
                    },
                    children: "Add to Cart"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs11("div", { className: "mt-10 grid grid-cols-3 gap-4 text-center", children: [
              /* @__PURE__ */ jsxs11("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsx15("p", { className: "text-gray-500 text-sm", children: "Total Sales" }),
                /* @__PURE__ */ jsx15("p", { className: "font-bold text-xl", children: stats.totalSales })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsx15("p", { className: "text-gray-500 text-sm", children: "Last Purchase" }),
                /* @__PURE__ */ jsx15("p", { className: "font-bold text-lg", children: stats.lastPurchase })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsx15("p", { className: "text-gray-500 text-sm", children: "Holders" }),
                /* @__PURE__ */ jsx15("p", { className: "font-bold text-xl", children: stats.holders })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs11(
      motion7.div,
      {
        className: "mt-16",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.4 },
        children: [
          /* @__PURE__ */ jsx15("h2", { className: "text-2xl font-bold mb-6", children: "Similar T-Shirts" }),
          /* @__PURE__ */ jsx15("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: relatedProducts.nodes.map((similar) => /* @__PURE__ */ jsxs11(
            motion7.div,
            {
              className: "bg-white rounded-xl shadow-md overflow-hidden",
              whileHover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
              children: [
                similar.images.nodes[0] && /* @__PURE__ */ jsx15(
                  "img",
                  {
                    src: similar.images.nodes[0].url,
                    alt: similar.title,
                    className: "w-full h-48 object-cover"
                  }
                ),
                /* @__PURE__ */ jsxs11("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxs11("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ jsx15("h3", { className: "font-bold", children: similar.title }),
                    /* @__PURE__ */ jsxs11("span", { className: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full", children: [
                      "+",
                      similar.metafields.find((m) => m.key === "growth")?.value || "120",
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs11("p", { className: "mt-2 text-purple-600 font-medium", children: [
                    "$",
                    similar.variants.nodes[0].price.amount,
                    " ",
                    similar.variants.nodes[0].price.currencyCode
                  ] }),
                  /* @__PURE__ */ jsx15(
                    Link7,
                    {
                      to: `/products/${similar.handle}`,
                      className: "mt-3 w-full bg-purple-100 text-purple-600 py-2 px-4 rounded-lg font-medium hover:bg-purple-200 transition-colors inline-block text-center",
                      children: "View Details"
                    }
                  )
                ] })
              ]
            },
            similar.id
          )) })
        ]
      }
    )
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader5
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";
import { Link as Link8 } from "@remix-run/react";
import { motion as motion8 } from "framer-motion";
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
var mockProducts2 = {
  nodes: [
    {
      id: "1",
      title: "PEPE PUMP",
      handle: "pepe-pump",
      images: {
        nodes: [
          {
            id: "img1",
            url: "https://placehold.co/600x400/22c55e/ffffff?text=PEPE+PUMP",
            altText: "PEPE PUMP T-Shirt",
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: "35.99",
          currencyCode: "USD"
        }
      }
    },
    {
      id: "2",
      title: "MOON SOON",
      handle: "moon-soon",
      images: {
        nodes: [
          {
            id: "img2",
            url: "https://placehold.co/600x400/8b5cf6/ffffff?text=MOON+SOON",
            altText: "MOON SOON T-Shirt",
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: "29.99",
          currencyCode: "USD"
        }
      }
    },
    {
      id: "3",
      title: "DEGEN SZN",
      handle: "degen-szn",
      images: {
        nodes: [
          {
            id: "img3",
            url: "https://placehold.co/600x400/ec4899/ffffff?text=DEGEN+SZN",
            altText: "DEGEN SZN T-Shirt",
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: "32.99",
          currencyCode: "USD"
        }
      }
    },
    {
      id: "4",
      title: "WAGMI",
      handle: "wagmi",
      images: {
        nodes: [
          {
            id: "img4",
            url: "https://placehold.co/600x400/3b82f6/ffffff?text=WAGMI",
            altText: "WAGMI T-Shirt",
            width: 600,
            height: 400
          }
        ]
      },
      priceRange: {
        minVariantPrice: {
          amount: "27.99",
          currencyCode: "USD"
        }
      }
    }
  ],
  totalCount: 2547
}, mockCollections = {
  nodes: [
    {
      id: "col1",
      title: "Pumping",
      handle: "pumping",
      products: {
        totalCount: 32
      }
    },
    {
      id: "col2",
      title: "Rugged",
      handle: "rugged",
      products: {
        totalCount: 14
      }
    },
    {
      id: "col3",
      title: "New Drops",
      handle: "new-drops",
      products: {
        totalCount: 26
      }
    },
    {
      id: "col4",
      title: "Classics",
      handle: "classics",
      products: {
        totalCount: 41
      }
    }
  ]
}, loader5 = async () => json4({
  products: mockProducts2,
  collections: mockCollections
});
function Index() {
  let { products, collections } = useLoaderData5(), categoryColors = {
    pumping: "from-green-500 to-green-700",
    rugged: "from-red-500 to-red-700",
    "new-drops": "from-blue-500 to-blue-700",
    classics: "from-yellow-500 to-yellow-700"
  }, categories = collections.nodes.map((collection) => ({
    id: collection.id,
    handle: collection.handle,
    title: collection.title,
    color: categoryColors[collection.handle] || "from-purple-500 to-purple-700",
    count: collection.products.totalCount
  })), stats = {
    totalShirts: products.totalCount,
    dailySales: "$45,892",
    creators: 843,
    topROI: "312%"
  };
  return /* @__PURE__ */ jsxs12(
    motion8.div,
    {
      className: "container mx-auto py-6 px-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsx16("section", { className: "mb-12", children: /* @__PURE__ */ jsx16("div", { className: "bg-gradient-to-br from-[#151522] to-[#1c1c2e] p-8 rounded-xl border border-[#2c2c44] relative overflow-hidden", children: /* @__PURE__ */ jsxs12("div", { className: "flex flex-col md:flex-row items-center", children: [
          /* @__PURE__ */ jsxs12("div", { className: "md:w-1/2 mb-6 md:mb-0", children: [
            /* @__PURE__ */ jsx16("h2", { className: "text-3xl font-bold text-white mb-4 neon-text", children: "T-Shirt Pump" }),
            /* @__PURE__ */ jsx16("p", { className: "text-gray-300 mb-6", children: "The #1 marketplace for trending t-shirts with casino-like dynamics!" }),
            /* @__PURE__ */ jsx16(Link8, { to: "/collections/trending", children: /* @__PURE__ */ jsx16(
              motion8.button,
              {
                className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg",
                whileHover: { scale: 1.05, boxShadow: "0 0 15px rgba(168,85,247,0.5)" },
                whileTap: { scale: 0.98 },
                children: "Explore Trending Shirts"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx16("div", { className: "md:w-1/2 flex justify-center", children: /* @__PURE__ */ jsx16("div", { className: "w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold", children: "Featured Shirt" }) })
        ] }) }) }),
        /* @__PURE__ */ jsxs12("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs12("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxs12("div", { children: [
              /* @__PURE__ */ jsxs12("div", { className: "flex justify-between items-center mb-6", children: [
                /* @__PURE__ */ jsx16("h2", { className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Trending T-Shirts" }),
                /* @__PURE__ */ jsx16(Link8, { to: "/collections/trending", className: "text-purple-400 hover:text-purple-300 transition-colors", children: "View All" })
              ] }),
              /* @__PURE__ */ jsx16("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: products.nodes.slice(0, 4).map((product) => /* @__PURE__ */ jsx16(
                motion8.div,
                {
                  className: "bg-[#151522] rounded-xl overflow-hidden border border-[#2c2c44] card-glow",
                  whileHover: { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" },
                  children: /* @__PURE__ */ jsxs12(Link8, { to: `/products/${product.handle}`, children: [
                    /* @__PURE__ */ jsxs12("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx16(
                        "img",
                        {
                          src: product.images.nodes[0].url,
                          alt: product.title,
                          className: "w-full h-48 object-cover",
                          width: "300",
                          height: "200"
                        }
                      ),
                      /* @__PURE__ */ jsx16("div", { className: "absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold", children: "+120%" })
                    ] }),
                    /* @__PURE__ */ jsxs12("div", { className: "p-4", children: [
                      /* @__PURE__ */ jsx16("h3", { className: "font-bold", children: product.title }),
                      /* @__PURE__ */ jsxs12("p", { className: "text-purple-400 mt-1", children: [
                        "$",
                        product.priceRange.minVariantPrice.amount
                      ] })
                    ] })
                  ] })
                },
                product.id
              )) })
            ] }),
            /* @__PURE__ */ jsxs12("div", { className: "mt-12", children: [
              /* @__PURE__ */ jsxs12("div", { className: "flex justify-between items-center mb-6", children: [
                /* @__PURE__ */ jsx16("h2", { className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Categories" }),
                /* @__PURE__ */ jsx16(Link8, { to: "/collections", className: "text-purple-400 hover:text-purple-300 transition-colors", children: "View All" })
              ] }),
              /* @__PURE__ */ jsx16("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: categories.map((category) => /* @__PURE__ */ jsxs12(
                motion8.div,
                {
                  className: `bg-gradient-to-br ${category.color} p-6 rounded-lg text-white text-center cursor-pointer
                             border border-white/10 relative overflow-hidden`,
                  whileHover: {
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    scale: 1.03
                  },
                  whileTap: { y: 0, boxShadow: "0 5px 10px rgba(0,0,0,0.2)" },
                  children: [
                    /* @__PURE__ */ jsx16(Link8, { to: `/collections/${category.handle}`, className: "block absolute inset-0 z-10", children: /* @__PURE__ */ jsx16("span", { className: "sr-only", children: category.title }) }),
                    /* @__PURE__ */ jsx16(
                      motion8.div,
                      {
                        className: "absolute inset-0 bg-white/5",
                        animate: {
                          backgroundPosition: ["0% 0%", "100% 100%"]
                        },
                        transition: {
                          duration: 3,
                          repeat: 1 / 0,
                          repeatType: "reverse"
                        },
                        style: {
                          backgroundSize: "200% 200%",
                          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx16("h3", { className: "text-xl font-bold relative z-2", children: category.title }),
                    /* @__PURE__ */ jsxs12("p", { className: "text-sm mt-1 text-white/80 relative z-2", children: [
                      category.count,
                      "+ shirts"
                    ] })
                  ]
                },
                category.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs12("div", { className: "lg:col-span-1", children: [
            /* @__PURE__ */ jsxs12("div", { className: "mt-8 bg-[#151522] p-4 rounded-xl border border-[#2c2c44] card-glow", children: [
              /* @__PURE__ */ jsx16("h2", { className: "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Trending Keywords" }),
              /* @__PURE__ */ jsx16("div", { className: "flex flex-wrap gap-2", children: ["PEPE", "MOON", "DEGEN", "WAGMI", "HODL", "APE", "BULL", "PUMP", "LAMBO", "GEM"].map((keyword) => /* @__PURE__ */ jsxs12(
                motion8.span,
                {
                  className: "bg-[#1c1c2e] px-3 py-1 rounded-full text-sm cursor-pointer border border-[#2c2c44]",
                  whileHover: {
                    scale: 1.05,
                    backgroundColor: "#2a2a44",
                    boxShadow: "0 0 12px rgba(168,85,247,0.5)"
                  },
                  children: [
                    "#",
                    keyword
                  ]
                },
                keyword
              )) })
            ] }),
            /* @__PURE__ */ jsxs12(
              motion8.div,
              {
                className: "mt-8 bg-gradient-to-r from-indigo-600 to-purple-700 p-6 rounded-xl border border-indigo-400/30 relative overflow-hidden card-glow",
                whileHover: { scale: 1.02 },
                children: [
                  Array.from({ length: 8 }).map((_, i3) => /* @__PURE__ */ jsx16(
                    motion8.div,
                    {
                      className: "absolute w-1 h-1 rounded-full bg-white/70",
                      style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.5 + 0.5
                      },
                      animate: {
                        y: [0, Math.random() * -30 - 10],
                        opacity: [0, 1, 0],
                        scale: [0, Math.random() * 1 + 1, 0]
                      },
                      transition: {
                        duration: Math.random() * 2 + 1,
                        repeat: 1 / 0,
                        delay: i3 * (Math.random() * 0.5)
                      }
                    },
                    i3
                  )),
                  /* @__PURE__ */ jsx16("h2", { className: "text-xl font-bold mb-2 text-white relative z-10 neon-text", children: "Create Your Own T-Shirt" }),
                  /* @__PURE__ */ jsx16("p", { className: "text-indigo-200 mb-4 relative z-10", children: "Design, sell, and earn profit share from your own shirt designs!" }),
                  /* @__PURE__ */ jsx16(Link8, { to: "/pages/custom-shirt", children: /* @__PURE__ */ jsx16(
                    motion8.button,
                    {
                      className: "bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-indigo-50 transition-colors relative overflow-hidden",
                      whileHover: {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255,255,255,0.5)"
                      },
                      whileTap: { scale: 0.98 },
                      children: /* @__PURE__ */ jsx16("span", { className: "relative z-10", children: "Learn More" })
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs12("div", { className: "mt-8 bg-[#151522] p-5 rounded-xl border border-[#2c2c44] card-glow", children: [
              /* @__PURE__ */ jsx16("h2", { className: "text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Platform Stats" }),
              /* @__PURE__ */ jsxs12("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs12("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ jsx16("div", { className: "text-sm text-gray-400", children: "Total Shirts" }),
                  /* @__PURE__ */ jsx16("div", { className: "text-xl font-bold text-white mt-1", children: stats.totalShirts })
                ] }),
                /* @__PURE__ */ jsxs12("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ jsx16("div", { className: "text-sm text-gray-400", children: "Sales (24h)" }),
                  /* @__PURE__ */ jsx16("div", { className: "text-xl font-bold text-green-400 mt-1", children: stats.dailySales })
                ] }),
                /* @__PURE__ */ jsxs12("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ jsx16("div", { className: "text-sm text-gray-400", children: "Creators" }),
                  /* @__PURE__ */ jsx16("div", { className: "text-xl font-bold text-white mt-1", children: stats.creators })
                ] }),
                /* @__PURE__ */ jsxs12("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ jsx16("div", { className: "text-sm text-gray-400", children: "Top ROI" }),
                  /* @__PURE__ */ jsx16("div", { className: "text-xl font-bold text-purple-400 mt-1", children: stats.topROI })
                ] })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-4L73XIQV.js", imports: ["/build/_shared/chunk-QX2APJAW.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CWKAXBV5.js", imports: ["/build/_shared/chunk-Y6CZJEGM.js", "/build/_shared/chunk-CWCG5U7G.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UQDLCIFF.js", imports: ["/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/collections.$handle": { id: "routes/collections.$handle", parentId: "root", path: "collections/:handle", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$handle-4LRWYHA7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/collections._index": { id: "routes/collections._index", parentId: "root", path: "collections", index: !0, caseSensitive: void 0, module: "/build/routes/collections._index-PTBJFCMZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products.$handle": { id: "routes/products.$handle", parentId: "root", path: "products/:handle", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$handle-7RYQAXBN.js", imports: ["/build/_shared/chunk-5TRFQBKG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "c01fb143", hmr: void 0, url: "/build/manifest-C01FB143.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/collections.$handle": {
    id: "routes/collections.$handle",
    parentId: "root",
    path: "collections/:handle",
    index: void 0,
    caseSensitive: void 0,
    module: collections_handle_exports
  },
  "routes/collections._index": {
    id: "routes/collections._index",
    parentId: "root",
    path: "collections",
    index: !0,
    caseSensitive: void 0,
    module: collections_index_exports
  },
  "routes/products.$handle": {
    id: "routes/products.$handle",
    parentId: "root",
    path: "products/:handle",
    index: void 0,
    caseSensitive: void 0,
    module: products_handle_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
/*! Bundled license information:

@xstate/fsm/es/index.mjs:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.mjs:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.mjs:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@shopify/hydrogen/dist/production/index.js:
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/queries/cart *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate *)
  (*! @see: https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate *)
  (*! @see https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet *)
  (*! @see https://shopify.dev/docs/api/storefront/2023-10/mutations/cartMetafieldDelete *)
*/
