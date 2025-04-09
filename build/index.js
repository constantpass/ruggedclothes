var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
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
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe: pipe2, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe2(body);
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
    let shellRendered = !1, { pipe: pipe2, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe2(body);
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
  links: () => links,
  loader: () => loader
});
var import_react36 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/components/Header.tsx
var import_react28 = require("react"), import_react29 = require("@remix-run/react");

// node_modules/framer-motion/dist/es/motion/index.mjs
var React = __toESM(require("react"), 1), import_react12 = require("react");

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react2 = require("react"), MotionConfigContext = (0, import_react2.createContext)({
  transformPagePoint: (p) => p,
  isStatic: !1,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react3 = require("react"), MotionContext = (0, import_react3.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react7 = require("react");

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react4 = require("react"), PresenceContext = (0, import_react4.createContext)(null);

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react5 = require("react");

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document < "u";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? import_react5.useLayoutEffect : import_react5.useEffect;

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react6 = require("react"), LazyContext = (0, import_react6.createContext)({ strict: !1 });

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId", optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement) {
  let { visualElement: parent } = (0, import_react7.useContext)(MotionContext), lazyContext = (0, import_react7.useContext)(LazyContext), presenceContext = (0, import_react7.useContext)(PresenceContext), reducedMotionConfig = (0, import_react7.useContext)(MotionConfigContext).reducedMotion, visualElementRef = (0, import_react7.useRef)();
  createVisualElement = createVisualElement || lazyContext.renderer, !visualElementRef.current && createVisualElement && (visualElementRef.current = createVisualElement(Component2, {
    visualState,
    parent,
    props,
    presenceContext,
    blockInitialAnimation: presenceContext ? presenceContext.initial === !1 : !1,
    reducedMotionConfig
  }));
  let visualElement = visualElementRef.current;
  (0, import_react7.useInsertionEffect)(() => {
    visualElement && visualElement.update(props, presenceContext);
  });
  let wantsHandoff = (0, import_react7.useRef)(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
  return useIsomorphicLayoutEffect(() => {
    visualElement && (visualElement.render(), wantsHandoff.current && visualElement.animationState && visualElement.animationState.animateChanges());
  }), (0, import_react7.useEffect)(() => {
    visualElement && (visualElement.updateFeatures(), !wantsHandoff.current && visualElement.animationState && visualElement.animationState.animateChanges(), wantsHandoff.current && (wantsHandoff.current = !1, window.HandoffComplete = !0));
  }), visualElement;
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react8 = require("react");

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref == "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react8.useCallback)(
    (instance) => {
      instance && visualState.mount && visualState.mount(instance), visualElement && (instance ? visualElement.mount(instance) : visualElement.unmount()), externalRef && (typeof externalRef == "function" ? externalRef(instance) : isRefObject(externalRef) && (externalRef.current = instance));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]
  );
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react9 = require("react");

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v == "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v == "object" && typeof v.start == "function";
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    let { initial, animate } = props;
    return {
      initial: initial === !1 || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== !1 ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  let { initial, animate } = getCurrentTreeVariants(props, (0, import_react9.useContext)(MotionContext));
  return (0, import_react9.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, featureDefinitions = {};
for (let key in featureProps)
  featureDefinitions[key] = {
    isEnabled: (props) => featureProps[key].some((name) => !!props[name])
  };

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (let key in features)
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react10 = require("react"), LayoutGroupContext = (0, import_react10.createContext)({});

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react11 = require("react"), SwitchLayoutGroupContext = (0, import_react11.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent({ preloadedFeatures: preloadedFeatures2, createVisualElement, useRender, useVisualState, Component: Component2 }) {
  preloadedFeatures2 && loadFeatures(preloadedFeatures2);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2, configAndProps = {
      ...(0, import_react12.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    }, { isStatic } = configAndProps, context = useCreateMotionContext(props), visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement);
      let initialLayoutGroupConfig = (0, import_react12.useContext)(SwitchLayoutGroupContext), isStrict = (0, import_react12.useContext)(LazyContext).strict;
      context.visualElement && (MeasureLayout2 = context.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        configAndProps,
        isStrict,
        preloadedFeatures2,
        initialLayoutGroupConfig
      ));
    }
    return React.createElement(
      MotionContext.Provider,
      { value: context },
      MeasureLayout2 && context.visualElement ? React.createElement(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null,
      useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)
    );
  }
  let ForwardRefComponent = (0, import_react12.forwardRef)(MotionComponent);
  return ForwardRefComponent[motionComponentSymbol] = Component2, ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
  let layoutGroupId = (0, import_react12.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy > "u")
    return custom;
  let componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => (componentCache.has(key) || componentCache.set(key, custom(key)), componentCache.get(key))
  });
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(lowercaseSVGElements.indexOf(Component2) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(Component2))
    )
  );
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react15 = require("react");

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react13 = require("react");

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], transformProps = new Set(transformPropOrder);

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(transform, { enableHardwareAcceleration = !0, allowTransformNone = !0 }, transformIsDefault, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    let key = transformPropOrder[i];
    if (transform[key] !== void 0) {
      let transformName = translateAlias[key] || key;
      transformString += `${transformName}(${transform[key]}) `;
    }
  }
  return enableHardwareAcceleration && !transform.z && (transformString += "translateZ(0)"), transformString = transformString.trim(), transformTemplate ? transformString = transformTemplate(transform, transformIsDefault ? "" : transformString) : allowTransformNone && transformIsDefault && (transformString = "none"), transformString;
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key == "string" && key.startsWith(token), isCSSVariableName = checkStringStartsWith("--"), isCSSVariableToken = checkStringStartsWith("var(--"), cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => type && typeof value == "number" ? type.transform(value) : value;

// node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v == "number",
  parse: parseFloat,
  transform: (v) => v
}, alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
}, scale = {
  ...number,
  default: 1
};

// node_modules/framer-motion/dist/es/value/types/utils.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5, floatRegex = /(-)?([\d]*\.?[\d])+/g, colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v == "string";
}

// node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
}), degrees = createUnitType("deg"), percent = createUnitType("%"), px = createUnitType("px"), vh = createUnitType("vh"), vw = createUnitType("vw"), progressPercentage = {
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  let { style, vars, transform, transformOrigin } = state, hasTransform2 = !1, hasTransformOrigin = !1, transformIsNone = !0;
  for (let key in latestValues) {
    let value = latestValues[key];
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    let valueType = numberValueTypes[key], valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      if (hasTransform2 = !0, transform[key] = valueAsType, !transformIsNone)
        continue;
      value !== (valueType.default || 0) && (transformIsNone = !1);
    } else
      key.startsWith("origin") ? (hasTransformOrigin = !0, transformOrigin[key] = valueAsType) : style[key] = valueAsType;
  }
  if (latestValues.transform || (hasTransform2 || transformTemplate ? style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate) : style.transform && (style.transform = "none")), hasTransformOrigin) {
    let { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (let key in source)
    !isMotionValue(source[key]) && !isForcedMotionValue(key, props) && (target[key] = source[key]);
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
  return (0, import_react13.useMemo)(() => {
    let state = createHtmlRenderState();
    return buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate), Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  let styleProp = props.style || {}, style = {};
  return copyRawValuesOnly(style, styleProp, props), Object.assign(style, useInitialMotionValues(props, visualState, isStatic)), props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  let htmlProps = {}, style = useStyle(props, visualState, isStatic);
  return props.drag && props.dragListener !== !1 && (htmlProps.draggable = !1, style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none", style.touchAction = props.drag === !0 ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`), props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap) && (htmlProps.tabIndex = 0), htmlProps.style = style, htmlProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  isValidProp && (shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key));
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch {
}
function filterProps(props, isDom, forwardMotionProps) {
  let filteredProps = {};
  for (let key in props)
    key === "values" && typeof props.values == "object" || (shouldForward(key) || forwardMotionProps === !0 && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props.draggable && key.startsWith("onDrag")) && (filteredProps[key] = props[key]);
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react14 = require("react");

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin == "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  let pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width), pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = !0) {
  attrs.pathLength = 1;
  let keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset);
  let pathLength = px.transform(length), pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, options, isSVGTag2, transformTemplate) {
  if (buildHTMLStyles(state, latest, options, transformTemplate), isSVGTag2) {
    state.style.viewBox && (state.attrs.viewBox = state.style.viewBox);
    return;
  }
  state.attrs = state.style, state.style = {};
  let { attrs, style, dimensions } = state;
  attrs.transform && (dimensions && (style.transform = attrs.transform), delete attrs.transform), dimensions && (originX !== void 0 || originY !== void 0 || style.transform) && (style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5)), attrX !== void 0 && (attrs.x = attrX), attrY !== void 0 && (attrs.y = attrY), attrScale !== void 0 && (attrs.scale = attrScale), pathLength !== void 0 && buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, !1);
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag == "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component2) {
  let visualProps = (0, import_react14.useMemo)(() => {
    let state = createSvgRenderState();
    return buildSVGAttrs(state, visualState, { enableHardwareAcceleration: !1 }, isSVGTag(Component2), props.transformTemplate), {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    let rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props), visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps = !1) {
  return (Component2, props, ref, { latestValues }, isStatic) => {
    let visualProps = (isSVGComponent(Component2) ? useSVGProps : useHTMLProps)(props, latestValues, isStatic, Component2), elementProps = {
      ...filterProps(props, typeof Component2 == "string", forwardMotionProps),
      ...visualProps,
      ref
    }, { children } = props, renderedChildren = (0, import_react15.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react15.createElement)(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  };
}

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (let key in vars)
    element.style.setProperty(key, vars[key]);
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (let key in renderState.attrs)
    element.setAttribute(camelCaseAttributes.has(key) ? key : camelToDash(key), renderState.attrs[key]);
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps) {
  let { style } = props, newValues = {};
  for (let key in style)
    (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) && (newValues[key] = style[key]);
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps) {
  let newValues = scrapeMotionValuesFromProps(props, prevProps);
  for (let key in props)
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      let targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  return newValues;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react17 = require("react");

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  return typeof definition == "function" && (definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity)), typeof definition == "string" && (definition = props.variants && props.variants[definition]), typeof definition == "function" && (definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity)), definition;
}

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react16 = require("react");
function useConstant(init) {
  let ref = (0, import_react16.useRef)(null);
  return ref.current === null && (ref.current = init()), ref.current;
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => Array.isArray(v);

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = (v) => Boolean(v && typeof v == "object" && v.mix && v.toValue), resolveFinalValueInKeyframes = (v) => isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  let unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onMount }, props, context, presenceContext) {
  let state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  return onMount && (state.mount = (instance) => onMount(props, instance, state)), state;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  let context = (0, import_react17.useContext)(MotionContext), presenceContext = (0, import_react17.useContext)(PresenceContext), make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  let values = {}, motionValues = scrapeMotionValues(props, {});
  for (let key in motionValues)
    values[key] = resolveMotionValue(motionValues[key]);
  let { initial, animate } = props, isControllingVariants$1 = isControllingVariants(props), isVariantNode$1 = isVariantNode(props);
  context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== !1 && (initial === void 0 && (initial = context.initial), animate === void 0 && (animate = context.animate));
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === !1 : !1;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === !1;
  let variantToSet = isInitialAnimationBlocked ? animate : initial;
  return variantToSet && typeof variantToSet != "boolean" && !isAnimationControls(variantToSet) && (Array.isArray(variantToSet) ? variantToSet : [variantToSet]).forEach((definition) => {
    let resolved = resolveVariantFromProps(props, definition);
    if (!resolved)
      return;
    let { transitionEnd, transition, ...target } = resolved;
    for (let key in target) {
      let valueTarget = target[key];
      if (Array.isArray(valueTarget)) {
        let index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
        valueTarget = valueTarget[index];
      }
      valueTarget !== null && (values[key] = valueTarget);
    }
    for (let key in transitionEnd)
      values[key] = transitionEnd[key];
  }), values;
}

// node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = (any) => any;

// node_modules/framer-motion/dist/es/frameloop/render-step.mjs
var Queue = class {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(process2) {
    if (!this.scheduled.has(process2))
      return this.scheduled.add(process2), this.order.push(process2), !0;
  }
  remove(process2) {
    let index = this.order.indexOf(process2);
    index !== -1 && (this.order.splice(index, 1), this.scheduled.delete(process2));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
};
function createRenderStep(runNextFrame) {
  let thisFrame = new Queue(), nextFrame = new Queue(), numToRun = 0, isProcessing = !1, flushNextFrame = !1, toKeepAlive = /* @__PURE__ */ new WeakSet(), step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = !1, immediate = !1) => {
      let addToCurrentFrame = immediate && isProcessing, queue = addToCurrentFrame ? thisFrame : nextFrame;
      return keepAlive && toKeepAlive.add(callback), queue.add(callback) && addToCurrentFrame && isProcessing && (numToRun = thisFrame.order.length), callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.remove(callback), toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      if (isProcessing) {
        flushNextFrame = !0;
        return;
      }
      if (isProcessing = !0, [thisFrame, nextFrame] = [nextFrame, thisFrame], nextFrame.clear(), numToRun = thisFrame.order.length, numToRun)
        for (let i = 0; i < numToRun; i++) {
          let callback = thisFrame.order[i];
          callback(frameData2), toKeepAlive.has(callback) && (step.schedule(callback), runNextFrame());
        }
      isProcessing = !1, flushNextFrame && (flushNextFrame = !1, step.process(frameData2));
    }
  };
  return step;
}

// node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = !1, useDefaultElapsed = !0, state = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, steps2 = stepsOrder.reduce((acc, key) => (acc[key] = createRenderStep(() => runNextFrame = !0), acc), {}), processStep = (stepId) => steps2[stepId].process(state), processBatch = () => {
    let timestamp = performance.now();
    runNextFrame = !1, state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1), state.timestamp = timestamp, state.isProcessing = !0, stepsOrder.forEach(processStep), state.isProcessing = !1, runNextFrame && allowKeepAlive && (useDefaultElapsed = !1, scheduleNextBatch(processBatch));
  }, wake = () => {
    runNextFrame = !0, useDefaultElapsed = !0, state.isProcessing || scheduleNextBatch(processBatch);
  };
  return { schedule: stepsOrder.reduce((acc, key) => {
    let step = steps2[key];
    return acc[key] = (process2, keepAlive = !1, immediate = !1) => (runNextFrame || wake(), step.schedule(process2, keepAlive, immediate)), acc;
  }, {}), cancel: (process2) => stepsOrder.forEach((key) => steps2[key].cancel(process2)), state, steps: steps2 };
}

// node_modules/framer-motion/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps } = createRenderBatcher(typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop, !0);

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, { renderState, latestValues }) => {
      frame.read(() => {
        try {
          renderState.dimensions = typeof instance.getBBox == "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), frame.render(() => {
        buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: !1 }, isSVGTag(instance.tagName), props.transformTemplate), renderSVG(instance, renderState);
      });
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component2, { forwardMotionProps = !1 }, preloadedFeatures2, createVisualElement) {
  return {
    ...isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig,
    preloadedFeatures: preloadedFeatures2,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement,
    Component: Component2
  };
}

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: !0 }) {
  return target.addEventListener(eventName, handler, options), () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => event.pointerType === "mouse" ? typeof event.button != "number" || event.button <= 0 : event.isPrimary !== !1;

// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v)), pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    let openLock = () => {
      lock = null;
    };
    return lock === null ? (lock = name, openLock) : !1;
  };
}
var globalHorizontalLock = createLock("dragHorizontal"), globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = !1;
  if (drag2 === "y")
    lock = globalVerticalLock();
  else if (drag2 === "x")
    lock = globalHorizontalLock();
  else {
    let openHorizontal = globalHorizontalLock(), openVertical = globalVerticalLock();
    openHorizontal && openVertical ? lock = () => {
      openHorizontal(), openVertical();
    } : (openHorizontal && openHorizontal(), openVertical && openVertical());
  }
  return lock;
}
function isDragActive() {
  let openGestureLock = getGlobalLock(!0);
  return openGestureLock ? (openGestureLock(), !1) : !0;
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = !1, this.node = node;
  }
  update() {
  }
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function addHoverEvent(node, isActive) {
  let eventName = "pointer" + (isActive ? "enter" : "leave"), callbackName = "onHover" + (isActive ? "Start" : "End"), handleEvent = (event, info) => {
    if (event.pointerType === "touch" || isDragActive())
      return;
    let props = node.getProps();
    node.animationState && props.whileHover && node.animationState.setActive("whileHover", isActive), props[callbackName] && frame.update(() => props[callbackName](event, info));
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
var HoverGesture = class extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, !0), addHoverEvent(this.node, !1));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let isFocusVisible = !1;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch {
      isFocusVisible = !0;
    }
    !isFocusVisible || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => child ? parent === child ? !0 : isNodeOrChild(parent, child.parentElement) : !1;

// node_modules/framer-motion/dist/es/gestures/press.mjs
function fireSyntheticPointerEvent(name, handler) {
  if (!handler)
    return;
  let syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments), this.removeStartListeners = noop, this.removeEndListeners = noop, this.removeAccessibleListeners = noop, this.startPointerPress = (startEvent, startInfo) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      let props = this.node.getProps(), removePointerUpListener = addPointerEvent(window, "pointerup", (endEvent, endInfo) => {
        if (!this.checkPressEnd())
          return;
        let { onTap, onTapCancel, globalTapTarget } = this.node.getProps();
        frame.update(() => {
          !globalTapTarget && !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
        });
      }, { passive: !(props.onTap || props.onPointerUp) }), removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props.onPointerCancel) });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener), this.startPress(startEvent, startInfo);
    }, this.startAccessiblePress = () => {
      let handleKeydown = (keydownEvent) => {
        if (keydownEvent.key !== "Enter" || this.isPressing)
          return;
        let handleKeyup = (keyupEvent) => {
          keyupEvent.key !== "Enter" || !this.checkPressEnd() || fireSyntheticPointerEvent("up", (event, info) => {
            let { onTap } = this.node.getProps();
            onTap && frame.update(() => onTap(event, info));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup), fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      }, removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown), handleBlur = () => {
        this.isPressing && fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      }, removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = !0;
    let { onTapStart, whileTap } = this.node.getProps();
    whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !0), onTapStart && frame.update(() => onTapStart(event, info));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd())
      return;
    let { onTapCancel } = this.node.getProps();
    onTapCancel && frame.update(() => onTapCancel(event, info));
  }
  mount() {
    let props = this.node.getProps(), removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props.onPointerStart) }), removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (entry2) => {
  let callback = observerCallbacks.get(entry2.target);
  callback && callback(entry2);
}, fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  let lookupRoot = root || document;
  observers.has(lookupRoot) || observers.set(lookupRoot, {});
  let rootObservers = observers.get(lookupRoot), key = JSON.stringify(options);
  return rootObservers[key] || (rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options })), rootObservers[key];
}
function observeIntersection(element, options, callback) {
  let rootInteresectionObserver = initIntersectionObserver(options);
  return observerCallbacks.set(element, callback), rootInteresectionObserver.observe(element), () => {
    observerCallbacks.delete(element), rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
}, InViewFeature = class extends Feature {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    let { viewport = {} } = this.node.getProps(), { root, margin: rootMargin, amount = "some", once } = viewport, options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount == "number" ? amount : thresholdNames[amount]
    }, onIntersectionUpdate = (entry2) => {
      let { isIntersecting } = entry2;
      if (this.isInView === isIntersecting || (this.isInView = isIntersecting, once && !isIntersecting && this.hasEnteredView))
        return;
      isIntersecting && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", isIntersecting);
      let { onViewportEnter, onViewportLeave } = this.node.getProps(), callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry2);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    let { props, prevProps } = this.node;
    ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps)) && this.startObserver();
  }
  unmount() {
  }
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return !1;
  let prevLength = prev.length;
  if (prevLength !== next.length)
    return !1;
  for (let i = 0; i < prevLength; i++)
    if (prev[i] !== next[i])
      return !1;
  return !0;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function getCurrent(visualElement) {
  let current = {};
  return visualElement.values.forEach((value, key) => current[key] = value.get()), current;
}
function getVelocity(visualElement) {
  let velocity = {};
  return visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity()), velocity;
}
function resolveVariant(visualElement, definition, custom) {
  let props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

// node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop, invariant = noop;

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = (seconds) => seconds * 1e3, millisecondsToSeconds = (milliseconds) => milliseconds / 1e3;

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: !1
};

// node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] == "number";

// node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing == "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`, supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (easing)
    return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function animateStyle(element, valueName, keyframes2, { delay: delay2 = 0, duration, repeat = 0, repeatType = "loop", ease: ease2, times } = {}) {
  let keyframeOptions = { [valueName]: keyframes2 };
  times && (keyframeOptions.offset = times);
  let easing = mapEasingToNativeEasing(ease2);
  return Array.isArray(easing) && (keyframeOptions.easing = easing), element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: Array.isArray(easing) ? "linear" : easing,
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }) {
  let index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes2.length - 1;
  return keyframes2[index];
}

// node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX, currentT, i = 0;
  do
    currentT = lowerBound + (upperBound - lowerBound) / 2, currentX = calcBezier(currentT, mX1, mX2) - x, currentX > 0 ? upperBound = currentT : lowerBound = currentT;
  while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  let getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = cubicBezier(0.42, 0, 1, 1), easeOut = cubicBezier(0, 0, 0.58, 1), easeInOut = cubicBezier(0.42, 0, 0.58, 1);

// node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = (ease2) => Array.isArray(ease2) && typeof ease2[0] != "number";

// node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

// node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn);

// node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99), backIn = reverseEasing(backOut), backInOut = mirrorEasing(backIn);

// node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
}, easingDefinitionToFunction = (definition) => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
    let [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition == "string")
    return invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`), easingLookup[definition];
  return definition;
};

// node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp)), splitColor = (aName, bName, cName) => (v) => {
  if (!isString(v))
    return v;
  let [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v), rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
}, rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "", g = "", b = "", a = "";
  return v.length > 5 ? (r = v.substring(1, 3), g = v.substring(3, 5), b = v.substring(5, 7), a = v.substring(7, 9)) : (r = v.substring(1, 2), g = v.substring(2, 3), b = v.substring(3, 4), a = v.substring(4, 5), r += r, g += g, b += b, a += a), {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => rgba.test(v) ? rgba.parse(v) : hsla.test(v) ? hsla.parse(v) : hex.parse(v),
  transform: (v) => isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v)
};

// node_modules/framer-motion/dist/es/utils/mix.mjs
var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;

// node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360, saturation /= 100, lightness /= 100;
  let red = 0, green = 0, blue = 0;
  if (!saturation)
    red = green = blue = lightness;
  else {
    let q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation, p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3), green = hueToRgb(p, q, hue), blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/framer-motion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  let fromExpo = from * from;
  return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
}, colorTypes = [hex, rgba, hsla], getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  let type = getColorType(color2);
  invariant(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  let model = type.parse(color2);
  return type === hsla && (model = hslaToRgba(model)), model;
}
var mixColor = (from, to) => {
  let fromRGBA = asRGBA(from), toRGBA = asRGBA(to), blended = { ...fromRGBA };
  return (v) => (blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v), blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v), blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v), blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v), rgba.transform(blended));
};

// node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var cssVarTokeniser = {
  regex: cssVariableRegex,
  countKey: "Vars",
  token: "${v}",
  parse: noop
}, colorTokeniser = {
  regex: colorRegex,
  countKey: "Colors",
  token: "${c}",
  parse: color.parse
}, numberTokeniser = {
  regex: floatRegex,
  countKey: "Numbers",
  token: "${n}",
  parse: number.parse
};
function tokenise(info, { regex, countKey, token, parse }) {
  let matches = info.tokenised.match(regex);
  matches && (info["num" + countKey] = matches.length, info.tokenised = info.tokenised.replace(regex, token), info.values.push(...matches.map(parse)));
}
function analyseComplexValue(value) {
  let originalValue = value.toString(), info = {
    value: originalValue,
    tokenised: originalValue,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return info.value.includes("var(--") && tokenise(info, cssVarTokeniser), tokenise(info, colorTokeniser), tokenise(info, numberTokeniser), info;
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  let { values, numColors, numVars, tokenised } = analyseComplexValue(source), numValues = values.length;
  return (v) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++)
      i < numVars ? output = output.replace(cssVarTokeniser.token, v[i]) : i < numVars + numColors ? output = output.replace(colorTokeniser.token, color.transform(v[i])) : output = output.replace(numberTokeniser.token, sanitize(v[i]));
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v == "number" ? 0 : v;
function getAnimatableNone(v) {
  let parsed = parseComplexValue(v);
  return createTransformer(v)(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/framer-motion/dist/es/utils/mix-complex.mjs
var mixImmediate = (origin, target) => (p) => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
  return typeof origin == "number" ? (v) => mix(origin, target, v) : color.test(origin) ? mixColor(origin, target) : origin.startsWith("var(") ? mixImmediate(origin, target) : mixComplex(origin, target);
}
var mixArray = (from, to) => {
  let output = [...from], numValues = output.length, blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++)
      output[i] = blendValue[i](v);
    return output;
  };
}, mixObject = (origin, target) => {
  let output = { ...origin, ...target }, blendValue = {};
  for (let key in output)
    origin[key] !== void 0 && target[key] !== void 0 && (blendValue[key] = getMixer(origin[key], target[key]));
  return (v) => {
    for (let key in blendValue)
      output[key] = blendValue[key](v);
    return output;
  };
}, mixComplex = (origin, target) => {
  let template = complex.createTransformer(target), originStats = analyseComplexValue(origin), targetStats = analyseComplexValue(target);
  return originStats.numVars === targetStats.numVars && originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers ? pipe(mixArray(originStats.values, targetStats.values), template) : (warning(!0, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), mixImmediate(origin, target));
};

// node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  let toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/framer-motion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
  return typeof v == "number" ? mixNumber : typeof v == "string" ? color.test(v) ? mixColor : mixComplex : Array.isArray(v) ? mixArray : typeof v == "object" ? mixObject : mixNumber;
}
function createMixers(output, ease2, customMixer) {
  let mixers = [], mixerFactory = customMixer || detectMixerFactory(output[0]), numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      let easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = !0, ease: ease2, mixer } = {}) {
  let inputLength = input.length;
  if (invariant(inputLength === output.length, "Both input and output ranges must be the same length"), inputLength === 1)
    return () => output[0];
  input[0] > input[inputLength - 1] && (input = [...input].reverse(), output = [...output].reverse());
  let mixers = createMixers(output, ease2, mixer), numMixers = mixers.length, interpolator = (v) => {
    let i = 0;
    if (numMixers > 1)
      for (; i < input.length - 2 && !(v < input[i + 1]); i++)
        ;
    let progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset, remaining) {
  let min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    let offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}

// node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  let offset = [0];
  return fillOffset(offset, arr.length - 1), offset;
}

// node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}

// node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
  let easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2), state = {
    done: !1,
    value: keyframeValues[0]
  }, absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  ), mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t) => (state.value = mapTimeToKeyframe(t), state.done = t >= duration, state)
  };
}

// node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  let prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3, minDuration = 0.01, maxDuration = 10, minDamping = 0.05, maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope, derivative;
  warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio), duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration)), dampingRatio < 1 ? (envelope = (undampedFreq2) => {
    let exponentialDecay = undampedFreq2 * dampingRatio, delta = exponentialDecay * duration, a = exponentialDecay - velocity, b = calcAngularFreq(undampedFreq2, dampingRatio), c = Math.exp(-delta);
    return safeMin - a / b * c;
  }, derivative = (undampedFreq2) => {
    let delta = undampedFreq2 * dampingRatio * duration, d = delta * velocity + velocity, e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration, f = Math.exp(-delta), g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
    return (-envelope(undampedFreq2) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
  }) : (envelope = (undampedFreq2) => {
    let a = Math.exp(-undampedFreq2 * duration), b = (undampedFreq2 - velocity) * duration + 1;
    return -safeMin + a * b;
  }, derivative = (undampedFreq2) => {
    let a = Math.exp(-undampedFreq2 * duration), b = (velocity - undampedFreq2) * (duration * duration);
    return a * b;
  });
  let initialGuess = 5 / duration, undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  if (duration = secondsToMilliseconds(duration), isNaN(undampedFreq))
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  {
    let stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++)
    result = result - envelope(result) / derivative(result);
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"], physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    let derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      mass: 1
    }, springOptions.isResolvedFromDuration = !0;
  }
  return springOptions;
}
function spring({ keyframes: keyframes2, restDelta, restSpeed, ...options }) {
  let origin = keyframes2[0], target = keyframes2[keyframes2.length - 1], state = { done: !1, value: origin }, { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  }), initialVelocity = velocity || 0, dampingRatio = damping / (2 * Math.sqrt(stiffness * mass)), initialDelta = target - origin, undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass)), isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2), restDelta || (restDelta = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    let angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = (t) => {
      let envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1)
    resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  else {
    let dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t) => {
      let envelope = Math.exp(-dampingRatio * undampedAngularFreq * t), freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration && duration || null,
    next: (t) => {
      let current = resolveSpring(t);
      if (isResolvedFromDuration)
        state.done = t >= duration;
      else {
        let currentVelocity = initialVelocity;
        t !== 0 && (dampingRatio < 1 ? currentVelocity = calcGeneratorVelocity(resolveSpring, t, current) : currentVelocity = 0);
        let isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed, isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      }
      return state.value = state.done ? target : current, state;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  let origin = keyframes2[0], state = {
    done: !1,
    value: origin
  }, isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max, nearestBoundary = (v) => min === void 0 ? max : max === void 0 || Math.abs(min - v) < Math.abs(max - v) ? min : max, amplitude = power * velocity, ideal = origin + amplitude, target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  target !== ideal && (amplitude = target - origin);
  let calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant), calcLatest = (t) => target + calcDelta(t), applyFriction = (t) => {
    let delta = calcDelta(t), latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta, state.value = state.done ? target : latest;
  }, timeReachedBoundary, spring$1, checkCatchBoundary = (t) => {
    isOutOfBounds(state.value) && (timeReachedBoundary = t, spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    }));
  };
  return checkCatchBoundary(0), {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = !1;
      return !spring$1 && timeReachedBoundary === void 0 && (hasUpdatedFrame = !0, applyFriction(t), checkCatchBoundary(t)), timeReachedBoundary !== void 0 && t > timeReachedBoundary ? spring$1.next(t - timeReachedBoundary) : (!hasUpdatedFrame && applyFriction(t), state);
    }
  };
}

// node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs
var frameloopDriver = (update) => {
  let passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, !0),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : performance.now()
  };
};

// node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
function calcGeneratorDuration(generator) {
  let duration = 0, timeStep = 50, state = generator.next(duration);
  for (; !state.done && duration < 2e4; )
    duration += timeStep, state = generator.next(duration);
  return duration >= 2e4 ? 1 / 0 : duration;
}

// node_modules/framer-motion/dist/es/animation/animators/js/index.mjs
var types = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function animateValue({ autoplay = !0, delay: delay2 = 0, driver = frameloopDriver, keyframes: keyframes$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
  let speed = 1, hasStopped = !1, resolveFinishedPromise, currentFinishedPromise, updateFinishedPromise = () => {
    currentFinishedPromise = new Promise((resolve) => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let animationDriver, generatorFactory = types[type] || keyframes, mapNumbersToKeyframes;
  generatorFactory !== keyframes && typeof keyframes$1[0] != "number" && (mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
    clamp: !1
  }), keyframes$1 = [0, 100]);
  let generator = generatorFactory({ ...options, keyframes: keyframes$1 }), mirroredGenerator;
  repeatType === "mirror" && (mirroredGenerator = generatorFactory({
    ...options,
    keyframes: [...keyframes$1].reverse(),
    velocity: -(options.velocity || 0)
  }));
  let playState = "idle", holdTime = null, startTime = null, cancelTime = null;
  generator.calculatedDuration === null && repeat && (generator.calculatedDuration = calcGeneratorDuration(generator));
  let { calculatedDuration } = generator, resolvedDuration = 1 / 0, totalDuration = 1 / 0;
  calculatedDuration !== null && (resolvedDuration = calculatedDuration + repeatDelay, totalDuration = resolvedDuration * (repeat + 1) - repeatDelay);
  let currentTime = 0, tick = (timestamp) => {
    if (startTime === null)
      return;
    speed > 0 && (startTime = Math.min(startTime, timestamp)), speed < 0 && (startTime = Math.min(timestamp - totalDuration / speed, startTime)), holdTime !== null ? currentTime = holdTime : currentTime = Math.round(timestamp - startTime) * speed;
    let timeWithoutDelay = currentTime - delay2 * (speed >= 0 ? 1 : -1), isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    currentTime = Math.max(timeWithoutDelay, 0), playState === "finished" && holdTime === null && (currentTime = totalDuration);
    let elapsed = currentTime, frameGenerator = generator;
    if (repeat) {
      let progress2 = Math.min(currentTime, totalDuration) / resolvedDuration, currentIteration = Math.floor(progress2), iterationProgress = progress2 % 1;
      !iterationProgress && progress2 >= 1 && (iterationProgress = 1), iterationProgress === 1 && currentIteration--, currentIteration = Math.min(currentIteration, repeat + 1), Boolean(currentIteration % 2) && (repeatType === "reverse" ? (iterationProgress = 1 - iterationProgress, repeatDelay && (iterationProgress -= repeatDelay / resolvedDuration)) : repeatType === "mirror" && (frameGenerator = mirroredGenerator)), elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    let state = isInDelayPhase ? { done: !1, value: keyframes$1[0] } : frameGenerator.next(elapsed);
    mapNumbersToKeyframes && (state.value = mapNumbersToKeyframes(state.value));
    let { done } = state;
    !isInDelayPhase && calculatedDuration !== null && (done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0);
    let isAnimationFinished = holdTime === null && (playState === "finished" || playState === "running" && done);
    return onUpdate && onUpdate(state.value), isAnimationFinished && finish(), state;
  }, stopAnimationDriver = () => {
    animationDriver && animationDriver.stop(), animationDriver = void 0;
  }, cancel = () => {
    playState = "idle", stopAnimationDriver(), resolveFinishedPromise(), updateFinishedPromise(), startTime = cancelTime = null;
  }, finish = () => {
    playState = "finished", onComplete && onComplete(), stopAnimationDriver(), resolveFinishedPromise();
  }, play = () => {
    if (hasStopped)
      return;
    animationDriver || (animationDriver = driver(tick));
    let now = animationDriver.now();
    onPlay && onPlay(), holdTime !== null ? startTime = now - holdTime : (!startTime || playState === "finished") && (startTime = now), playState === "finished" && updateFinishedPromise(), cancelTime = startTime, holdTime = null, playState = "running", animationDriver.start();
  };
  autoplay && play();
  let controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(currentTime);
    },
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime), currentTime = newTime, holdTime !== null || !animationDriver || speed === 0 ? holdTime = newTime : startTime = animationDriver.now() - newTime / speed;
    },
    get duration() {
      let duration = generator.calculatedDuration === null ? calcGeneratorDuration(generator) : generator.calculatedDuration;
      return millisecondsToSeconds(duration);
    },
    get speed() {
      return speed;
    },
    set speed(newSpeed) {
      newSpeed === speed || !animationDriver || (speed = newSpeed, controls.time = millisecondsToSeconds(currentTime));
    },
    get state() {
      return playState;
    },
    play,
    pause: () => {
      playState = "paused", holdTime = currentTime;
    },
    stop: () => {
      hasStopped = !0, playState !== "idle" && (playState = "idle", onStop && onStop(), cancel());
    },
    cancel: () => {
      cancelTime !== null && tick(cancelTime), cancel();
    },
    complete: () => {
      playState = "finished";
    },
    sample: (elapsed) => (startTime = 0, tick(elapsed))
  };
  return controls;
}

// node_modules/framer-motion/dist/es/utils/memo.mjs
function memo(callback) {
  let result;
  return () => (result === void 0 && (result = callback()), result);
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs
var supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), sampleDelta = 10, maxDuration2 = 2e4, requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" || valueName === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
  if (!(supportsWaapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0 && options.type !== "inertia"))
    return !1;
  let hasStopped = !1, resolveFinishedPromise, currentFinishedPromise, pendingCancel = !1, updateFinishedPromise = () => {
    currentFinishedPromise = new Promise((resolve) => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let { keyframes: keyframes2, duration = 300, ease: ease2, times } = options;
  if (requiresPregeneratedKeyframes(valueName, options)) {
    let sampleAnimation = animateValue({
      ...options,
      repeat: 0,
      delay: 0
    }), state = { done: !1, value: keyframes2[0] }, pregeneratedKeyframes = [], t = 0;
    for (; !state.done && t < maxDuration2; )
      state = sampleAnimation.sample(t), pregeneratedKeyframes.push(state.value), t += sampleDelta;
    times = void 0, keyframes2 = pregeneratedKeyframes, duration = t - sampleDelta, ease2 = "linear";
  }
  let animation = animateStyle(value.owner.current, valueName, keyframes2, {
    ...options,
    duration,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: ease2,
    times
  }), cancelAnimation = () => {
    pendingCancel = !1, animation.cancel();
  }, safeCancel = () => {
    pendingCancel = !0, frame.update(cancelAnimation), resolveFinishedPromise(), updateFinishedPromise();
  };
  return animation.onfinish = () => {
    pendingCancel || (value.set(getFinalKeyframe(keyframes2, options)), onComplete && onComplete(), safeCancel());
  }, {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    attachTimeline(timeline) {
      return animation.timeline = timeline, animation.onfinish = null, noop;
    },
    get time() {
      return millisecondsToSeconds(animation.currentTime || 0);
    },
    set time(newTime) {
      animation.currentTime = secondsToMilliseconds(newTime);
    },
    get speed() {
      return animation.playbackRate;
    },
    set speed(newSpeed) {
      animation.playbackRate = newSpeed;
    },
    get duration() {
      return millisecondsToSeconds(duration);
    },
    play: () => {
      hasStopped || (animation.play(), cancelFrame(cancelAnimation));
    },
    pause: () => animation.pause(),
    stop: () => {
      if (hasStopped = !0, animation.playState === "idle")
        return;
      let { currentTime } = animation;
      if (currentTime) {
        let sampleAnimation = animateValue({
          ...options,
          autoplay: !1
        });
        value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
      }
      safeCancel();
    },
    complete: () => {
      pendingCancel || animation.finish();
    },
    cancel: safeCancel
  };
}

// node_modules/framer-motion/dist/es/animation/animators/instant.mjs
function createInstantAnimation({ keyframes: keyframes2, delay: delay2, onUpdate, onComplete }) {
  let setValue = () => (onUpdate && onUpdate(keyframes2[keyframes2.length - 1]), onComplete && onComplete(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: noop,
    pause: noop,
    stop: noop,
    then: (resolve) => (resolve(), Promise.resolve()),
    cancel: noop,
    complete: noop
  });
  return delay2 ? animateValue({
    keyframes: [0, 1],
    duration: 0,
    delay: delay2,
    onComplete: setValue
  }) : setValue();
}

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), keyframesTransition = {
  type: "keyframes",
  duration: 0.8
}, ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => keyframes2.length > 2 ? keyframesTransition : transformProps.has(valueKey) ? valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring : ease;

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (key, value) => key === "zIndex" ? !1 : !!(typeof value == "number" || Array.isArray(value) || typeof value == "string" && // It's animatable if we have a string
(complex.test(value) || value === "0") && // And it contains numbers and/or colors
!value.startsWith("url("));

// node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  let [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  let unit = value.replace(number2, ""), defaultValue = maxDefaults.has(name) ? 1 : 0;
  return number2 !== value && (defaultValue *= 100), name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g, filter = {
  ...complex,
  getAnimatableNone: (v) => {
    let functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
}, getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  return defaultValueType !== filter && (defaultValueType = complex), defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/.test(v);

// node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
  if (typeof value == "number")
    return value === 0;
  if (value !== null)
    return value === "none" || value === "0" || isZeroValueString(value);
}

// node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs
function getKeyframes(value, valueName, target, transition) {
  let isTargetAnimatable = isAnimatable(valueName, target), keyframes2;
  Array.isArray(target) ? keyframes2 = [...target] : keyframes2 = [null, target];
  let defaultOrigin = transition.from !== void 0 ? transition.from : value.get(), animatableTemplateValue, noneKeyframeIndexes = [];
  for (let i = 0; i < keyframes2.length; i++)
    keyframes2[i] === null && (keyframes2[i] = i === 0 ? defaultOrigin : keyframes2[i - 1]), isNone(keyframes2[i]) && noneKeyframeIndexes.push(i), typeof keyframes2[i] == "string" && keyframes2[i] !== "none" && keyframes2[i] !== "0" && (animatableTemplateValue = keyframes2[i]);
  if (isTargetAnimatable && noneKeyframeIndexes.length && animatableTemplateValue)
    for (let i = 0; i < noneKeyframeIndexes.length; i++) {
      let index = noneKeyframeIndexes[i];
      keyframes2[index] = getAnimatableNone2(valueName, animatableTemplateValue);
    }
  return keyframes2;
}

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
  return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
  return transition[key] || transition.default || transition;
}

// node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: !1
};

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (valueName, value, target, transition = {}) => (onComplete) => {
  let valueTransition = getValueTransition(transition, valueName) || {}, delay2 = valueTransition.delay || transition.delay || 0, { elapsed = 0 } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay2);
  let keyframes2 = getKeyframes(value, valueName, target, valueTransition), originKeyframe = keyframes2[0], targetKeyframe = keyframes2[keyframes2.length - 1], isOriginAnimatable = isAnimatable(valueName, originKeyframe), isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
  warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
  let options = {
    keyframes: keyframes2,
    velocity: value.getVelocity(),
    ease: "easeOut",
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v) => {
      value.set(v), valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete(), valueTransition.onComplete && valueTransition.onComplete();
    }
  };
  if (isTransitionDefined(valueTransition) || (options = {
    ...options,
    ...getDefaultTransition(valueName, options)
  }), options.duration && (options.duration = secondsToMilliseconds(options.duration)), options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay)), !isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === !1 || MotionGlobalConfig.skipAnimations)
    return createInstantAnimation(instantAnimationState.current ? { ...options, delay: 0 } : options);
  if (
    /**
     * If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    !transition.isHandoff && value.owner && value.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !value.owner.getProps().onUpdate
  ) {
    let acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
    if (acceleratedAnimation)
      return acceleratedAnimation;
  }
  return animateValue(options);
};

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
  let index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    return addUniqueItem(this.subscriptions, handler), () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    let numSubscriptions = this.subscriptions.length;
    if (numSubscriptions)
      if (numSubscriptions === 1)
        this.subscriptions[0](a, b, c);
      else
        for (let i = 0; i < numSubscriptions; i++) {
          let handler = this.subscriptions[i];
          handler && handler(a, b, c);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = (value) => !isNaN(parseFloat(value)), collectMotionValues = {
  current: void 0
}, MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(init, options = {}) {
    this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (v, render = !0) => {
      this.prev = this.current, this.current = v;
      let { delta, timestamp } = frameData;
      this.lastUpdated !== timestamp && (this.timeDelta = delta, this.lastUpdated = timestamp, frame.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), render && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => frame.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp }) => {
      timestamp !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = init, this.canTrackVelocity = isFloat(this.current), this.owner = options.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    this.events[eventName] || (this.events[eventName] = new SubscriptionManager());
    let unsubscribe = this.events[eventName].add(callback);
    return eventName === "change" ? () => {
      unsubscribe(), frame.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : unsubscribe;
  }
  clearListeners() {
    for (let eventManagers in this.events)
      this.events[eventManagers].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect, this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v, render = !0) {
    !render || !this.passiveEffect ? this.updateAndNotify(v, render) : this.passiveEffect(v, this.updateAndNotify);
  }
  setWithVelocity(prev, current, delta) {
    this.set(current), this.prev = prev, this.timeDelta = delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v) {
    this.updateAndNotify(v), this.prev = v, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return collectMotionValues.current && collectMotionValues.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(startAnimation) {
    return this.stop(), new Promise((resolve) => {
      this.hasAnimated = !0, this.animation = startAnimation(resolve), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto], findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex], findValueType = (v) => valueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  visualElement.hasValue(key) ? visualElement.getValue(key).set(value) : visualElement.addValue(key, motionValue(value));
}
function setTarget(visualElement, definition) {
  let resolved = resolveVariant(visualElement, definition), { transitionEnd = {}, transition = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, !1) : {};
  target = { ...target, ...transitionEnd };
  for (let key in target) {
    let value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b;
  let newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key)), numNewValues = newValueKeys.length;
  if (numNewValues)
    for (let i = 0; i < numNewValues; i++) {
      let key = newValueKeys[i], targetValue = target[key], value = null;
      Array.isArray(targetValue) && (value = targetValue[0]), value === null && (value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key]), value != null && (typeof value == "string" && (isNumericalString(value) || isZeroValueString(value)) ? value = parseFloat(value) : !findValueType(value) && complex.test(targetValue) && (value = getAnimatableNone2(key, targetValue)), visualElement.addValue(key, motionValue(value, { owner: visualElement })), origin[key] === void 0 && (origin[key] = value), value !== null && visualElement.setBaseTarget(key, value));
    }
}
function getOriginFromTransition(key, transition) {
  return transition ? (transition[key] || transition.default || transition).from : void 0;
}
function getOrigin(target, transition, visualElement) {
  let origin = {};
  for (let key in target) {
    let transitionOrigin = getOriginFromTransition(key, transition);
    if (transitionOrigin !== void 0)
      origin[key] = transitionOrigin;
    else {
      let value = visualElement.getValue(key);
      value && (origin[key] = value.get());
    }
  }
  return origin;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  let shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== !0;
  return needsAnimating[key] = !1, shouldBlock;
}
function hasKeyframesChanged(value, target) {
  let current = value.get();
  if (Array.isArray(target)) {
    for (let i = 0; i < target.length; i++)
      if (target[i] !== current)
        return !0;
  } else
    return current !== target;
}
function animateTarget(visualElement, definition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition), willChange = visualElement.getValue("willChange");
  transitionOverride && (transition = transitionOverride);
  let animations2 = [], animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (let key in target) {
    let value = visualElement.getValue(key), valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key))
      continue;
    let valueTransition = {
      delay: delay2,
      elapsed: 0,
      ...getValueTransition(transition || {}, key)
    };
    if (window.HandoffAppearAnimations) {
      let appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        let elapsed = window.HandoffAppearAnimations(appearId, key, value, frame);
        elapsed !== null && (valueTransition.elapsed = elapsed, valueTransition.isHandoff = !0);
      }
    }
    let canSkip = !valueTransition.isHandoff && !hasKeyframesChanged(value, valueTarget);
    if (valueTransition.type === "spring" && (value.getVelocity() || valueTransition.velocity) && (canSkip = !1), value.animation && (canSkip = !1), canSkip)
      continue;
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? { type: !1 } : valueTransition));
    let animation = value.animation;
    isWillChangeMotionValue(willChange) && (willChange.add(key), animation.then(() => willChange.remove(key))), animations2.push(animation);
  }
  return transitionEnd && Promise.all(animations2).then(() => {
    transitionEnd && setTarget(visualElement, transitionEnd);
  }), animations2;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  let resolved = resolveVariant(visualElement, variant, options.custom), { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  options.transitionOverride && (transition = options.transitionOverride);
  let getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve(), getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    let { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve(), { when } = transition;
  if (when) {
    let [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  let animations2 = [], maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren, generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  return Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant), animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  }), Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    let animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition == "string")
    animation = animateVariant(visualElement, definition, options);
  else {
    let resolvedDefinition = typeof definition == "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate = animateList(visualElement), state = createState(), isInitialRender = !0, buildResolvedTypeValues = (acc, definition) => {
    let resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      let { transition, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  function animateChanges(options, changedActiveType) {
    let props = visualElement.getProps(), context = visualElement.getVariantContext(!0) || {}, animations2 = [], removedKeys = /* @__PURE__ */ new Set(), encounteredKeys = {}, removedVariantIndex = 1 / 0;
    for (let i = 0; i < numAnimationTypes; i++) {
      let type = reversePriorityOrder[i], typeState = state[type], prop = props[type] !== void 0 ? props[type] : context[type], propIsVariant = isVariantLabel(prop), activeDelta = type === changedActiveType ? typeState.isActive : null;
      activeDelta === !1 && (removedVariantIndex = i);
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount && (isInherited = !1), typeState.protectedKeys = { ...encounteredKeys }, // If it isn't active and hasn't *just* been set as inactive
      !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
      !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
      isAnimationControls(prop) || typeof prop == "boolean")
        continue;
      let shouldAnimateType = checkVariantsDidChange(typeState.prevProp, prop) || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant, handledRemovedValues = !1, definitionList = Array.isArray(prop) ? prop : [prop], resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      activeDelta === !1 && (resolvedValues = {});
      let { prevResolvedValues = {} } = typeState, allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      }, markToAnimate = (key) => {
        shouldAnimateType = !0, removedKeys.has(key) && (handledRemovedValues = !0, removedKeys.delete(key)), typeState.needsAnimating[key] = !0;
      };
      for (let key in allKeys) {
        let next = resolvedValues[key], prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        let valueHasChanged = !1;
        isKeyframesTarget(next) && isKeyframesTarget(prev) ? valueHasChanged = !shallowCompare(next, prev) : valueHasChanged = next !== prev, valueHasChanged ? next !== void 0 ? markToAnimate(key) : removedKeys.add(key) : next !== void 0 && removedKeys.has(key) ? markToAnimate(key) : typeState.protectedKeys[key] = !0;
      }
      typeState.prevProp = prop, typeState.prevResolvedValues = resolvedValues, typeState.isActive && (encounteredKeys = { ...encounteredKeys, ...resolvedValues }), isInitialRender && visualElement.blockInitialAnimation && (shouldAnimateType = !1), shouldAnimateType && (!isInherited || handledRemovedValues) && animations2.push(...definitionList.map((animation) => ({
        animation,
        options: { type, ...options }
      })));
    }
    if (removedKeys.size) {
      let fallbackAnimation = {};
      removedKeys.forEach((key) => {
        let fallbackTarget = visualElement.getBaseTarget(key);
        fallbackTarget !== void 0 && (fallbackAnimation[key] = fallbackTarget);
      }), animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    return isInitialRender && (props.initial === !1 || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount && (shouldAnimate = !1), isInitialRender = !1, shouldAnimate ? animate(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 || _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    }), state[type].isActive = isActive;
    let animations2 = animateChanges(options, type);
    for (let key in state)
      state[key].protectedKeys = {};
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  return typeof next == "string" ? next !== prev : Array.isArray(next) ? !shallowCompare(next, prev) : !1;
}
function createTypeState(isActive = !1) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(!0),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node), node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    let { animate } = this.node.getProps();
    this.unmount(), isAnimationControls(animate) && (this.unmount = animate.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    let { animate } = this.node.getProps(), { animate: prevAnimate } = this.node.prevProps || {};
    animate !== prevAnimate && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0, ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments), this.id = id++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    let { isPresent, onExitComplete, custom } = this.node.presenceContext, { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent)
      return;
    let exitAnimation = this.node.animationState.setActive("exit", !isPresent, { custom: custom ?? this.node.getProps().custom });
    onExitComplete && !isPresent && exitAnimation.then(() => onExitComplete(this.id));
  }
  mount() {
    let { register } = this.node.presenceContext || {};
    register && (this.unmount = register(this.id));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  let xDelta = distance(a.x, b.x), yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      let info2 = getPanInfo(this.lastMoveEventInfo, this.history), isPanStarted = this.startEvent !== null, isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      let { point: point2 } = info2, { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      let { onStart, onMove } = this.handlers;
      isPanStarted || (onStart && onStart(this.lastMoveEvent, info2), this.startEvent = this.lastMoveEvent), onMove && onMove(this.lastMoveEvent, info2);
    }, this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2, this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint), frame.update(this.updatePoint, !0);
    }, this.handlePointerUp = (event2, info2) => {
      this.end();
      let { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin && resumeAnimation && resumeAnimation(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      let panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      this.startEvent && onEnd && onEnd(event2, panInfo), onSessionEnd && onSessionEnd(event2, panInfo);
    }, !isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin, this.handlers = handlers, this.transformPagePoint = transformPagePoint, this.contextWindow = contextWindow || window;
    let info = extractEventInfo(event), initialInfo = transformPoint(info, this.transformPagePoint), { point } = initialInfo, { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    let { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners(), cancelFrame(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2)
    return { x: 0, y: 0 };
  let i = history.length - 1, timestampedPoint = null, lastPoint = lastDevicePoint(history);
  for (; i >= 0 && (timestampedPoint = history[i], !(lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta))); )
    i--;
  if (!timestampedPoint)
    return { x: 0, y: 0 };
  let time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0)
    return { x: 0, y: 0 };
  let currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  return currentVelocity.x === 1 / 0 && (currentVelocity.x = 0), currentVelocity.y === 1 / 0 && (currentVelocity.y = 0), currentVelocity;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin, delta.originPoint = mix(source.min, source.max, delta.origin), delta.scale = calcLength(target) / calcLength(source), (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale)) && (delta.scale = 1), delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint, (isNear(delta.translate) || isNaN(delta.translate)) && (delta.translate = 0);
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0), calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min, target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x), calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min, target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x), calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min, max }, elastic) {
  return min !== void 0 && point < min ? point = elastic ? mix(min, point, elastic.min) : Math.max(point, min) : max !== void 0 && point > max && (point = elastic ? mix(max, point, elastic.max) : Math.min(point, max)), point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min, max = constraintsAxis.max - layoutAxis.max;
  return constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min && ([min, max] = [max, min]), { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5, sourceLength = calcLength(source), targetLength = calcLength(target);
  return targetLength > sourceLength ? origin = progress(target.min, target.max - sourceLength, source.min) : sourceLength > targetLength && (origin = progress(source.min, source.max - targetLength, target.min)), clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  let relativeConstraints = {};
  return constraints.min !== void 0 && (relativeConstraints.min = constraints.min - layout2.min), constraints.max !== void 0 && (relativeConstraints.max = constraints.max - layout2.min), relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  return dragElastic === !1 ? dragElastic = 0 : dragElastic === !0 && (dragElastic = defaultElastic), {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic == "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
}), createAxis = () => ({ min: 0, max: 0 }), createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  let topLeft = transformPoint2({ x: point.left, y: point.top }), bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX, scaleY }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  let distanceFromOrigin = point - originPoint, scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  return boxScale !== void 0 && (point = scalePoint(point, boxScale, originPoint)), scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale), axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint), applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = !1) {
  let treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node, delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i], delta = node.projectionDelta;
    let instance = node.instance;
    instance && instance.style && instance.style.display === "contents" || (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root && transformBox(box, {
      x: -node.scroll.offset.x,
      y: -node.scroll.offset.y
    }), delta && (treeScale.x *= delta.x.scale, treeScale.y *= delta.y.scale, applyBoxDelta(box, delta)), isSharedTransition && hasTransform(node.latestValues) && transformBox(box, node.latestValues));
  }
  treeScale.x = snapToDefault(treeScale.x), treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale2) {
  return Number.isInteger(scale2) || scale2 > 1.0000000000001 || scale2 < 0.999999999999 ? scale2 : 1;
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2, axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
  let axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5, originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"], yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys), transformAxis(box.y, transform, yKeys);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  let viewportBox = measureViewportBox(element, transformPagePoint), { scroll } = rootProjectionNode2;
  return scroll && (translateAxis(viewportBox.x, scroll.offset.x), translateAxis(viewportBox.y, scroll.offset.y)), viewportBox;
}

// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => current ? current.ownerDocument.defaultView : null;

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap(), VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = !1 } = {}) {
    let { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === !1)
      return;
    let onSessionStart = (event) => {
      let { dragSnapToOrigin: dragSnapToOrigin2 } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation(), snapToCursor && this.snapToCursor(extractEventInfo(event, "page").point);
    }, onStart = (event, info) => {
      let { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = getGlobalLock(drag2), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          let { projection } = this.visualElement;
          if (projection && projection.layout) {
            let measuredAxis = projection.layout.layoutBox[axis];
            measuredAxis && (current = calcLength(measuredAxis) * (parseFloat(current) / 100));
          }
        }
        this.originPoint[axis] = current;
      }), onDragStart && frame.update(() => onDragStart(event, info), !1, !0);
      let { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", !0);
    }, onMove = (event, info) => {
      let { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock)
        return;
      let { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset), this.currentDirection !== null && onDirectionLock && onDirectionLock(this.currentDirection);
        return;
      }
      this.updateAxis("x", info.point, offset), this.updateAxis("y", info.point, offset), this.visualElement.render(), onDrag && onDrag(event, info);
    }, onSessionEnd = (event, info) => this.stop(event, info), resumeAnimation = () => eachAxis((axis) => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    }), { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    let isDragging = this.isDragging;
    if (this.cancel(), !isDragging)
      return;
    let { velocity } = info;
    this.startAnimation(velocity);
    let { onDragEnd } = this.getProps();
    onDragEnd && frame.update(() => onDragEnd(event, info));
  }
  cancel() {
    this.isDragging = !1;
    let { projection, animationState } = this.visualElement;
    projection && (projection.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    let { dragPropagation } = this.getProps();
    !dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), animationState && animationState.setActive("whileDrag", !1);
  }
  updateAxis(axis, _point, offset) {
    let { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    let axisValue = this.getAxisMotionValue(axis), next = this.originPoint[axis] + offset[axis];
    this.constraints && this.constraints[axis] && (next = applyConstraints(next, this.constraints[axis], this.elastic[axis])), axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    let { dragConstraints, dragElastic } = this.getProps(), layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout, prevConstraints = this.constraints;
    dragConstraints && isRefObject(dragConstraints) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : dragConstraints && layout2 ? this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints) : this.constraints = !1, this.elastic = resolveDragElastic(dragElastic), prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints && eachAxis((axis) => {
      this.getAxisMotionValue(axis) && (this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]));
    });
  }
  resolveRefConstraints() {
    let { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return !1;
    let constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    let { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return !1;
    let constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint()), measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      let userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints, userConstraints && (measuredConstraints = convertBoundingBoxToBox(userConstraints));
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    let { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps(), constraints = this.constraints || {}, momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      let transition = constraints && constraints[axis] || {};
      dragSnapToOrigin && (transition = { min: 0, max: 0 });
      let bounceStiffness = dragElastic ? 200 : 1e6, bounceDamping = dragElastic ? 40 : 1e7, inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    let axisValue = this.getAxisMotionValue(axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis((axis) => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    let dragKey = "_drag" + axis.toUpperCase(), props = this.visualElement.getProps(), externalMotionValue = props[dragKey];
    return externalMotionValue || this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      let { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      let { projection } = this.visualElement, axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        let { min, max } = projection.layout.layoutBox[axis];
        axisValue.set(point[axis] - mix(min, max, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    let { drag: drag2, dragConstraints } = this.getProps(), { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    let boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      let axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        let latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    let { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none", projection.root && projection.root.updateScroll(), projection.updateLayout(), this.resolveConstraints(), eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      let axisValue = this.getAxisMotionValue(axis), { min, max } = this.constraints[axis];
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    let element = this.visualElement.current, stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      let { drag: drag2, dragListener = !0 } = this.getProps();
      drag2 && dragListener && this.start(event);
    }), measureDragConstraints = () => {
      let { dragConstraints } = this.getProps();
      isRefObject(dragConstraints) && (this.constraints = this.resolveRefConstraints());
    }, { projection } = this.visualElement, stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    projection && !projection.layout && (projection.root && projection.root.updateScroll(), projection.updateLayout()), measureDragConstraints();
    let stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      this.isDragging && hasLayoutChanged && (eachAxis((axis) => {
        let motionValue2 = this.getAxisMotionValue(axis);
        motionValue2 && (this.originPoint[axis] += delta[axis].translate, motionValue2.set(motionValue2.get() + delta[axis].translate));
      }), this.visualElement.render());
    });
    return () => {
      stopResizeListener(), stopPointerListener(), stopMeasureLayoutListener(), stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    let props = this.visualElement.getProps(), { drag: drag2 = !1, dragDirectionLock = !1, dragPropagation = !1, dragConstraints = !1, dragElastic = defaultElastic, dragMomentum = !0 } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === !0 || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  return Math.abs(offset.y) > lockThreshold ? direction = "y" : Math.abs(offset.x) > lockThreshold && (direction = "x"), direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node), this.removeGroupControls = noop, this.removeListeners = noop, this.controls = new VisualElementDragControls(node);
  }
  mount() {
    let { dragControls } = this.node.getProps();
    dragControls && (this.removeGroupControls = dragControls.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  handler && frame.update(() => handler(event, info));
}, PanGesture = class extends Feature {
  constructor() {
    super(...arguments), this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    let { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session, onPanEnd && frame.update(() => onPanEnd(event, info));
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_react19 = __toESM(require("react"), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react18 = require("react");
function usePresence() {
  let context = (0, import_react18.useContext)(PresenceContext);
  if (context === null)
    return [!0, null];
  let { isPresent, onExitComplete, register } = context, id3 = (0, import_react18.useId)();
  return (0, import_react18.useEffect)(() => register(id3), []), !isPresent && onExitComplete ? [!1, () => onExitComplete && onExitComplete(id3)] : [!0];
}

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  return axis.max === axis.min ? 0 : pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest == "string")
      if (px.test(latest))
        latest = parseFloat(latest);
      else
        return latest;
    let x = pixelsToPercent(latest, node.target.x), y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    let original = latest, shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    let template = complex.createTransformer(latest), offset = typeof shadow[0] != "number" ? 1 : 0, xScale = projectionDelta.x.scale * treeScale.x, yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale, shadow[1 + offset] /= yScale;
    let averageScale = mix(xScale, yScale, 0.5);
    return typeof shadow[2 + offset] == "number" && (shadow[2 + offset] /= averageScale), typeof shadow[3 + offset] == "number" && (shadow[3 + offset] /= averageScale), template(shadow);
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = class extends import_react19.default.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    let { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props, { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors), projection && (layoutGroup.group && layoutGroup.group.add(projection), switchLayoutGroup && switchLayoutGroup.register && layoutId && switchLayoutGroup.register(projection), projection.root.didUpdate(), projection.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), projection.setOptions({
      ...projection.options,
      onExitComplete: () => this.safeToRemove()
    })), globalProjectionState.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(prevProps) {
    let { layoutDependency, visualElement, drag: drag2, isPresent } = this.props, projection = visualElement.projection;
    return projection && (projection.isPresent = isPresent, drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 ? projection.willUpdate() : this.safeToRemove(), prevProps.isPresent !== isPresent && (isPresent ? projection.promote() : projection.relegate() || frame.postRender(() => {
      let stack = projection.getStack();
      (!stack || !stack.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    let { projection } = this.props.visualElement;
    projection && (projection.root.didUpdate(), queueMicrotask(() => {
      !projection.currentAnimation && projection.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    let { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props, { projection } = visualElement;
    projection && (projection.scheduleCheckAfterUnmount(), layoutGroup && layoutGroup.group && layoutGroup.group.remove(projection), promoteContext && promoteContext.deregister && promoteContext.deregister(projection));
  }
  safeToRemove() {
    let { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  let [isPresent, safeToRemove] = usePresence(), layoutGroup = (0, import_react19.useContext)(LayoutGroupContext);
  return import_react19.default.createElement(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: (0, import_react19.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], numBorders = borders.length, asNumber = (value) => typeof value == "string" ? parseFloat(value) : value, isPx = (value) => typeof value == "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  shouldCrossfadeOpacity ? (target.opacity = mix(
    0,
    // TODO Reinstate this if only child
    lead.opacity !== void 0 ? lead.opacity : 1,
    easeCrossfadeIn(progress2)
  ), target.opacityExit = mix(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2))) : isOnlyMember && (target.opacity = mix(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2));
  for (let i = 0; i < numBorders; i++) {
    let borderLabel = `border${borders[i]}Radius`, followRadius = getRadius(follow, borderLabel), leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0), leadRadius || (leadRadius = 0), followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius) ? (target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0), (percent.test(leadRadius) || percent.test(followRadius)) && (target[borderLabel] += "%")) : target[borderLabel] = leadRadius;
  }
  (follow.rotate || lead.rotate) && (target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2));
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut), easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p) => p < min ? 0 : p > max ? 1 : easing(progress(min, max, p));
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min, axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x), copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  return point -= translate, point = scalePoint(point, 1 / scale2, originPoint), boxScale !== void 0 && (point = scalePoint(point, 1 / boxScale, originPoint)), point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate) && (translate = parseFloat(translate), translate = mix(sourceAxis.min, sourceAxis.max, translate / 100) - sourceAxis.min), typeof translate != "number")
    return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  axis === originAxis && (originPoint -= translate), axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale), axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"], yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0), removeAxisTransforms(box.y, transforms, yKeys2, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function boxEqualsRounded(a, b) {
  return Math.round(a.x.min) === Math.round(b.x.min) && Math.round(a.x.max) === Math.round(b.x.max) && Math.round(a.y.min) === Math.round(b.y.min) && Math.round(a.y.max) === Math.round(b.y.max);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node), node.scheduleRender();
  }
  remove(node) {
    if (removeItem(this.members, node), node === this.prevLead && (this.prevLead = void 0), node === this.lead) {
      let prevLead = this.members[this.members.length - 1];
      prevLead && this.promote(prevLead);
    }
  }
  relegate(node) {
    let indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return !1;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      let member = this.members[i];
      if (member.isPresent !== !1) {
        prevLead = member;
        break;
      }
    }
    return prevLead ? (this.promote(prevLead), !0) : !1;
  }
  promote(node, preserveFollowOpacity) {
    let prevLead = this.lead;
    if (node !== prevLead && (this.prevLead = prevLead, this.lead = node, node.show(), prevLead)) {
      prevLead.instance && prevLead.scheduleRender(), node.scheduleRender(), node.resumeFrom = prevLead, preserveFollowOpacity && (node.resumeFrom.preserveOpacity = !0), prevLead.snapshot && (node.snapshot = prevLead.snapshot, node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues), node.root && node.root.isUpdating && (node.isLayoutDirty = !0);
      let { crossfade } = node.options;
      crossfade === !1 && prevLead.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      let { options, resumingFrom } = node;
      options.onExitComplete && options.onExitComplete(), resumingFrom && resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "", xTranslate = delta.x.translate / treeScale.x, yTranslate = delta.y.translate / treeScale.y;
  if ((xTranslate || yTranslate) && (transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `), (treeScale.x !== 1 || treeScale.y !== 1) && (transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `), latestTransform) {
    let { rotate, rotateX, rotateY } = latestTransform;
    rotate && (transform += `rotate(${rotate}deg) `), rotateX && (transform += `rotateX(${rotateX}deg) `), rotateY && (transform += `rotateY(${rotateY}deg) `);
  }
  let elementScaleX = delta.x.scale * treeScale.x, elementScaleY = delta.y.scale * treeScale.y;
  return (elementScaleX !== 1 || elementScaleY !== 1) && (transform += `scale(${elementScaleX}, ${elementScaleY})`), transform || "none";
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(child) {
    addUniqueItem(this.children, child), this.isDirty = !0;
  }
  remove(child) {
    removeItem(this.children, child), this.isDirty = !0;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(callback);
  }
};

// node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  let start = performance.now(), checkElapsed = ({ timestamp }) => {
    let elapsed = timestamp - start;
    elapsed >= timeout && (cancelFrame(checkElapsed), callback(elapsed - timeout));
  };
  return frame.read(checkElapsed, !0), () => cancelFrame(checkElapsed);
}

// node_modules/framer-motion/dist/es/debug/record.mjs
function record(data) {
  window.MotionDebug && window.MotionDebug.record(data);
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  let motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  return motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options)), motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"], hiddenVisibility = { visibility: "hidden" }, animationTarget = 1e3, id2 = 0, projectionFrameData = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class {
    constructor(latestValues = {}, parent = defaultParent == null ? void 0 : defaultParent()) {
      this.id = id2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0, this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), record(projectionFrameData);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = latestValues, this.root = parent ? parent.root || parent : this, this.path = parent ? [...parent.path, parent] : [], this.parent = parent, this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++)
        this.path[i].shouldResetTransform = !0;
      this.root === this && (this.nodes = new FlatTree());
    }
    addEventListener(name, handler) {
      return this.eventHandlers.has(name) || this.eventHandlers.set(name, new SubscriptionManager()), this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      let subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance), this.instance = instance;
      let { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current && visualElement.mount(instance), this.root.nodes.add(this), this.parent && this.parent.children.add(this), isLayoutDirty && (layout2 || layoutId) && (this.isLayoutDirty = !0), attachResizeListener) {
        let cancelDelay, resizeUnblockUpdate = () => this.root.updateBlockedByResize = !1;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = !0, cancelDelay && cancelDelay(), cancelDelay = delay(resizeUnblockUpdate, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation));
        });
      }
      layoutId && this.root.registerSharedNode(layoutId, this), this.options.animate !== !1 && visualElement && (layoutId || layout2) && this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        let layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps(), targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged, hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
          let animationOptions = {
            ...getValueTransition(layoutTransition, "layout"),
            onPlay: onLayoutAnimationStart,
            onComplete: onLayoutAnimationComplete
          };
          (visualElement.shouldReduceMotion || this.options.layoutRoot) && (animationOptions.delay = 0, animationOptions.type = !1), this.startAnimation(animationOptions);
        } else
          hasLayoutChanged || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = newLayout;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let stack = this.getStack();
      stack && stack.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(resetRotation), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let i = 0; i < this.path.length; i++) {
        let node = this.path[i];
        node.shouldResetTransform = !0, node.updateScroll("snapshot"), node.options.layoutRoot && node.willUpdate(!1);
      }
      let { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      let transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0, this.updateSnapshot(), shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
        return;
      }
      this.isUpdating || this.nodes.forEach(clearIsLayoutDirty), this.isUpdating = !1, this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate), this.clearAllSnapshots();
      let now = performance.now();
      frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp), frameData.timestamp = now, frameData.isProcessing = !0, steps.update.process(frameData), steps.preRender.process(frameData), steps.render.process(frameData), frameData.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, frame.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let i = 0; i < this.path.length; i++)
          this.path[i].updateScroll();
      let prevLayout = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase && (needsMeasurement = !1), needsMeasurement && (this.scroll = {
        animationId: this.root.animationId,
        phase,
        isRoot: checkIsScrollRoot(this.instance),
        offset: measureScroll(this.instance)
      });
    }
    resetTransform() {
      if (!resetTransform)
        return;
      let isResetRequested = this.isLayoutDirty || this.shouldResetTransform, hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta), transformTemplate = this.getTransformTemplate(), transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0, transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged) && (resetTransform(this.instance, transformTemplateValue), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(removeTransform = !0) {
      let pageBox = this.measurePageBox(), layoutBox = this.removeElementScroll(pageBox);
      return removeTransform && (layoutBox = this.removeTransform(layoutBox)), roundBox(layoutBox), {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      let { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      let box = visualElement.measureViewportBox(), { scroll } = this.root;
      return scroll && (translateAxis(box.x, scroll.offset.x), translateAxis(box.y, scroll.offset.y)), box;
    }
    removeElementScroll(box) {
      let boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i = 0; i < this.path.length; i++) {
        let node = this.path[i], { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.isRoot) {
            copyBoxInto(boxWithoutScroll, box);
            let { scroll: rootScroll } = this.root;
            rootScroll && (translateAxis(boxWithoutScroll.x, -rootScroll.offset.x), translateAxis(boxWithoutScroll.y, -rootScroll.offset.y));
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x), translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = !1) {
      let withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        let node = this.path[i];
        !transformOnly && node.options.layoutScroll && node.scroll && node !== node.root && transformBox(withTransforms, {
          x: -node.scroll.offset.x,
          y: -node.scroll.offset.y
        }), hasTransform(node.latestValues) && transformBox(withTransforms, node.latestValues);
      }
      return hasTransform(this.latestValues) && transformBox(withTransforms, this.latestValues), withTransforms;
    }
    removeTransform(box) {
      let boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        let node = this.path[i];
        if (!node.instance || !hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        let sourceBox = createBox(), nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox), removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      return hasTransform(this.latestValues) && removeBoxTransforms(boxWithoutTransform, this.latestValues), boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(forceRecalculation = !1) {
      var _a;
      let lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      let isShared = Boolean(this.resumingFrom) || this !== lead;
      if (!(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || !((_a = this.parent) === null || _a === void 0) && _a.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      let { layout: layout2, layoutId } = this.options;
      if (!(!this.layout || !(layout2 || layoutId))) {
        if (this.resolvedRelativeTargetAt = frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
          let relativeParent = this.getClosestProjectingParent();
          relativeParent && relativeParent.layout && this.animationProgress !== 1 ? (this.relativeParent = relativeParent, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            let relativeParent = this.getClosestProjectingParent();
            relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1 ? (this.relativeParent = relativeParent, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          projectionFrameData.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      let lead = this.getLead(), isShared = Boolean(this.resumingFrom) || this !== lead, canSkip = !0;
      if ((this.isProjectionDirty || !((_a = this.parent) === null || _a === void 0) && _a.isProjectionDirty) && (canSkip = !1), isShared && (this.isSharedProjectionDirty || this.isTransformDirty) && (canSkip = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (canSkip = !1), canSkip)
        return;
      let { layout: layout2, layoutId } = this.options;
      if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      let prevTreeScaleX = this.treeScale.x, prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared), lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (lead.target = lead.layout.layoutBox);
      let { target } = lead;
      if (!target) {
        this.projectionTransform && (this.projectionDelta = createDelta(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta());
      let prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues), this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale), (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", target)), projectionFrameData.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(notifyAll = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), notifyAll) {
        let stack = this.getStack();
        stack && stack.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = !1) {
      let snapshot = this.snapshot, snapshotLatestValues = snapshot ? snapshot.latestValues : {}, mixedValues = { ...this.latestValues }, targetDelta = createDelta();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      let relativeLayout = createBox(), snapshotSource = snapshot ? snapshot.source : void 0, layoutSource = this.layout ? this.layout.source : void 0, isSharedLayoutAnimation = snapshotSource !== layoutSource, stack = this.getStack(), isOnlyMember = !stack || stack.members.length <= 1, shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = (latest) => {
        let progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2), mixAxisDelta(targetDelta.y, delta.y, progress2), this.setTargetDelta(targetDelta), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2), prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget) && (this.isProjectionDirty = !1), prevRelativeTarget || (prevRelativeTarget = createBox()), copyBoxInto(prevRelativeTarget, this.relativeTarget)), isSharedLayoutAnimation && (this.animationValues = mixedValues, mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = progress2;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (cancelFrame(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = !0, this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest), options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      let stack = this.getStack();
      stack && stack.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(animationTarget), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      let lead = this.getLead(), { targetWithTransforms, target, layout: layout2, latestValues } = lead;
      if (!(!targetWithTransforms || !target || !layout2)) {
        if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
          target = this.target || createBox();
          let xLength = calcLength(this.layout.layoutBox.x);
          target.x.min = lead.target.x.min, target.x.max = target.x.min + xLength;
          let yLength = calcLength(this.layout.layoutBox.y);
          target.y.min = lead.target.y.min, target.y.max = target.y.min + yLength;
        }
        copyBoxInto(targetWithTransforms, target), transformBox(targetWithTransforms, latestValues), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      }
    }
    registerSharedNode(layoutId, node) {
      this.sharedNodes.has(layoutId) || this.sharedNodes.set(layoutId, new NodeStack()), this.sharedNodes.get(layoutId).add(node);
      let config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      let stack = this.getStack();
      return stack ? stack.lead === this : !0;
    }
    getLead() {
      var _a;
      let { layoutId } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      let { layoutId } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      let { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      let stack = this.getStack();
      stack && stack.promote(this, preserveFollowOpacity), needsReset && (this.projectionDelta = void 0, this.needsReset = !0), transition && this.setOptions({ transition });
    }
    relegate() {
      let stack = this.getStack();
      return stack ? stack.relegate(this) : !1;
    }
    resetRotation() {
      let { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasRotate = !1, { latestValues } = visualElement;
      if ((latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) && (hasRotate = !0), !hasRotate)
        return;
      let resetValues = {};
      for (let i = 0; i < transformAxes.length; i++) {
        let key = "rotate" + transformAxes[i];
        latestValues[key] && (resetValues[key] = latestValues[key], visualElement.setStaticValue(key, 0));
      }
      visualElement.render();
      for (let key in resetValues)
        visualElement.setStaticValue(key, resetValues[key]);
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return hiddenVisibility;
      let styles = {
        visibility: ""
      }, transformTemplate = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, styles.opacity = "", styles.pointerEvents = resolveMotionValue(styleProp == null ? void 0 : styleProp.pointerEvents) || "", styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none", styles;
      let lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        let emptyStyles = {};
        return this.options.layoutId && (emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, emptyStyles.pointerEvents = resolveMotionValue(styleProp == null ? void 0 : styleProp.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none", this.hasProjected = !1), emptyStyles;
      }
      let valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget(), styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender), transformTemplate && (styles.transform = transformTemplate(valuesToRender, styles.transform));
      let { x, y } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`, lead.animationValues ? styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit : styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      for (let key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        let { correct, applyTo } = scaleCorrectors[key], corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          let num = applyTo.length;
          for (let i = 0; i < num; i++)
            styles[applyTo[i]] = corrected;
        } else
          styles[key] = corrected;
      }
      return this.options.layoutId && (styles.pointerEvents = lead === this ? resolveMotionValue(styleProp == null ? void 0 : styleProp.pointerEvents) || "" : "none"), styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      }), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  let snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    let { layoutBox: layout2, measuredBox: measuredLayout } = node.layout, { animationType } = node.options, isShared = snapshot.source !== node.layout.source;
    animationType === "size" ? eachAxis((axis) => {
      let axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis], length = calcLength(axisSnapshot);
      axisSnapshot.min = layout2[axis].min, axisSnapshot.max = axisSnapshot.min + length;
    }) : shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2) && eachAxis((axis) => {
      let axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis], length = calcLength(layout2[axis]);
      axisSnapshot.max = axisSnapshot.min + length, node.relativeTarget && !node.currentAnimation && (node.isProjectionDirty = !0, node.relativeTarget[axis].max = node.relativeTarget[axis].min + length);
    });
    let layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    let visualDelta = createDelta();
    isShared ? calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, !0), snapshot.measuredBox) : calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    let hasLayoutChanged = !isDeltaZero(layoutDelta), hasRelativeTargetChanged = !1;
    if (!node.resumeFrom) {
      let relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        let { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          let relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          let relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox), boxEqualsRounded(relativeSnapshot, relativeLayout) || (hasRelativeTargetChanged = !0), relativeParent.options.layoutRoot && (node.relativeTarget = relativeLayout, node.relativeTargetOrigin = relativeSnapshot, node.relativeParent = relativeParent);
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    let { onExitComplete } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  projectionFrameData.totalNodes++, node.parent && (node.isProjecting() || (node.isProjectionDirty = node.parent.isProjectionDirty), node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty)), node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty));
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = !1;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = !1;
}
function resetTransformStyle(node) {
  let { visualElement } = node.options;
  visualElement && visualElement.getProps().onBeforeLayoutMeasure && visualElement.notify("BeforeLayoutMeasure"), node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation(), node.targetDelta = node.relativeTarget = node.target = void 0, node.isProjectionDirty = !0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p), output.scale = mix(delta.scale, 1, p), output.origin = delta.origin, output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p), output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p), mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, userAgentContains = (string) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(string), roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min), axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x), roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
}, HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      let documentNode = new DocumentProjectionNode({});
      documentNode.mount(window), documentNode.setOptions({ layoutScroll: !0 }), rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  let match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  let [, token, fallback] = match;
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  let [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  let resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    let trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  } else
    return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
  let element = visualElement.current;
  if (!(element instanceof Element))
    return { target, transitionEnd };
  transitionEnd && (transitionEnd = { ...transitionEnd }), visualElement.values.forEach((value) => {
    let current = value.get();
    if (!isCSSVariableToken(current))
      return;
    let resolved = getVariableValue(current, element);
    resolved && value.set(resolved);
  });
  for (let key in target) {
    let current = target[key];
    if (!isCSSVariableToken(current))
      continue;
    let resolved = getVariableValue(current, element);
    resolved && (target[key] = resolved, transitionEnd || (transitionEnd = {}), transitionEnd[key] === void 0 && (transitionEnd[key] = current));
  }
  return { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), isPositionalKey = (key) => positionalKeys.has(key), hasPositionalKey = (target) => Object.keys(target).some(isPositionalKey), isNumOrPxType = (v) => v === number || v === px, getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]), getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
  if (transform === "none" || !transform)
    return 0;
  let matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d)
    return getPosFromMatrix(matrix3d[1], pos3);
  {
    let matrix = transform.match(/^matrix\((.+)\)$/);
    return matrix ? getPosFromMatrix(matrix[1], pos2) : 0;
  }
}, transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]), nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  let removedTransforms = [];
  return nonTranslationalTransformKeys.forEach((key) => {
    let value = visualElement.getValue(key);
    value !== void 0 && (removedTransforms.push([key, value.get()]), value.set(key.startsWith("scale") ? 1 : 0));
  }), removedTransforms.length && visualElement.render(), removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
  let originBbox = visualElement.measureViewportBox(), element = visualElement.current, elementComputedStyle = getComputedStyle(element), { display } = elementComputedStyle, origin = {};
  display === "none" && visualElement.setStaticValue("display", target.display || "block"), changedKeys.forEach((key) => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  }), visualElement.render();
  let targetBbox = visualElement.measureViewportBox();
  return changedKeys.forEach((key) => {
    let value = visualElement.getValue(key);
    value && value.jump(origin[key]), target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  }), target;
}, checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = { ...target }, transitionEnd = { ...transitionEnd };
  let targetPositionalKeys = Object.keys(target).filter(isPositionalKey), removedTransformValues = [], hasAttemptedToRemoveTransformValues = !1, changedValueTypeKeys = [];
  if (targetPositionalKeys.forEach((key) => {
    let value = visualElement.getValue(key);
    if (!visualElement.hasValue(key))
      return;
    let from = origin[key], fromType = findDimensionValueType(from), to = target[key], toType;
    if (isKeyframesTarget(to)) {
      let numKeyframes = to.length, fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex], fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes && to[i] !== null; i++)
        toType ? invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type") : (toType = findDimensionValueType(to[i]), invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value"));
    } else
      toType = findDimensionValueType(to);
    if (fromType !== toType)
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        let current = value.get();
        typeof current == "string" && value.set(parseFloat(current)), typeof to == "string" ? target[key] = parseFloat(to) : Array.isArray(to) && toType === px && (target[key] = to.map(parseFloat));
      } else
        fromType != null && fromType.transform && (toType != null && toType.transform) && (from === 0 || to === 0) ? from === 0 ? value.set(toType.transform(from)) : target[key] = fromType.transform(to) : (hasAttemptedToRemoveTransformValues || (removedTransformValues = removeNonTranslationalTransform(visualElement), hasAttemptedToRemoveTransformValues = !0), changedValueTypeKeys.push(key), transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key], value.jump(to));
  }), changedValueTypeKeys.length) {
    let scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null, convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    return removedTransformValues.length && removedTransformValues.forEach(([key, value]) => {
      visualElement.getValue(key).set(value);
    }), visualElement.render(), isBrowser && scrollY !== null && window.scrollTo({ top: scrollY }), { target: convertedTarget, transitionEnd };
  } else
    return { target, transitionEnd };
};
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  let resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  return target = resolved.target, transitionEnd = resolved.transitionEnd, unitConversion(visualElement, target, origin, transitionEnd);
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null }, hasReducedMotionListener = { current: !1 };

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  if (hasReducedMotionListener.current = !0, !!isBrowser)
    if (window.matchMedia) {
      let motionMediaQuery = window.matchMedia("(prefers-reduced-motion)"), setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
      motionMediaQuery.addListener(setReducedMotionPreferences), setReducedMotionPreferences();
    } else
      prefersReducedMotion.current = !1;
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  let { willChange } = next;
  for (let key in next) {
    let nextValue = next[key], prevValue = prev[key];
    if (isMotionValue(nextValue))
      element.addValue(key, nextValue), isWillChangeMotionValue(willChange) && willChange.add(key);
    else if (isMotionValue(prevValue))
      element.addValue(key, motionValue(nextValue, { owner: element })), isWillChangeMotionValue(willChange) && willChange.remove(key);
    else if (prevValue !== nextValue)
      if (element.hasValue(key)) {
        let existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        let latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
  }
  for (let key in prev)
    next[key] === void 0 && element.removeValue(key);
  return next;
}

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var featureNames = Object.keys(featureDefinitions), numFeatures = featureNames.length, propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], numVariantProps = variantProps.length, VisualElement = class {
  constructor({ parent, props, presenceContext, reducedMotionConfig, visualState }, options = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => frame.render(this.render, !1, !0);
    let { latestValues, renderState } = visualState;
    this.latestValues = latestValues, this.baseTarget = { ...latestValues }, this.initialValues = props.initial ? { ...latestValues } : {}, this.renderState = renderState, this.parent = parent, this.props = props, this.presenceContext = presenceContext, this.depth = parent ? parent.depth + 1 : 0, this.reducedMotionConfig = reducedMotionConfig, this.options = options, this.isControllingVariants = isControllingVariants(props), this.isVariantNode = isVariantNode(props), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    let { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
    for (let key in initialMotionValues) {
      let value = initialMotionValues[key];
      latestValues[key] !== void 0 && isMotionValue(value) && (value.set(latestValues[key], !1), isWillChangeMotionValue(willChange) && willChange.add(key));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps) {
    return {};
  }
  mount(instance) {
    this.current = instance, visualElementStore.set(instance, this), this.projection && !this.projection.instance && this.projection.mount(instance), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((value, key) => this.bindToMotionValue(key, value)), hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : prefersReducedMotion.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current), this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((remove) => remove()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (let key in this.events)
      this.events[key].clear();
    for (let key in this.features)
      this.features[key].unmount();
    this.current = null;
  }
  bindToMotionValue(key, value) {
    let valueIsTransform = transformProps.has(key), removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue, this.props.onUpdate && frame.update(this.notifyUpdate, !1, !0), valueIsTransform && this.projection && (this.projection.isTransformDirty = !0);
    }), removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange(), removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== other.type ? 0 : this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures2, initialLayoutGroupConfig) {
    let ProjectionNodeConstructor, MeasureLayout2;
    for (let i = 0; i < numFeatures; i++) {
      let name = featureNames[i], { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent } = featureDefinitions[name];
      ProjectionNode && (ProjectionNodeConstructor = ProjectionNode), isEnabled(renderedProps) && (!this.features[name] && FeatureConstructor && (this.features[name] = new FeatureConstructor(this)), MeasureLayoutComponent && (MeasureLayout2 = MeasureLayoutComponent));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
      let { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout2 == "string" ? layout2 : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return MeasureLayout2;
  }
  updateFeatures() {
    for (let key in this.features) {
      let feature = this.features[key];
      feature.isMounted ? feature.update() : (feature.mount(), feature.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(target, canMutate = !0) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    (props.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = props, this.prevPresenceContext = this.presenceContext, this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      let key = propEventHandlers[i];
      this.propEventSubscriptions[key] && (this.propEventSubscriptions[key](), delete this.propEventSubscriptions[key]);
      let listener = props["on" + key];
      listener && (this.propEventSubscriptions[key] = this.on(key, listener));
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(startAtParent = !1) {
    if (startAtParent)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      let context2 = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (context2.initial = this.props.initial), context2;
    }
    let context = {};
    for (let i = 0; i < numVariantProps; i++) {
      let name = variantProps[i], prop = this.props[name];
      (isVariantLabel(prop) || prop === !1) && (context[name] = prop);
    }
    return context;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    let closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode)
      return closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child), () => closestVariantNode.variantChildren.delete(child);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    value !== this.values.get(key) && (this.removeValue(key), this.bindToMotionValue(key, value)), this.values.set(key, value), this.latestValues[key] = value.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    let unsubscribe = this.valueSubscriptions.get(key);
    unsubscribe && (unsubscribe(), this.valueSubscriptions.delete(key)), delete this.latestValues[key], this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key])
      return this.props.values[key];
    let value = this.values.get(key);
    return value === void 0 && defaultValue !== void 0 && (value = motionValue(defaultValue, { owner: this }), this.addValue(key, value)), value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key) {
    var _a;
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    var _a;
    let { initial } = this.props, valueFromInitial = typeof initial == "string" || typeof initial == "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : void 0;
    if (initial && valueFromInitial !== void 0)
      return valueFromInitial;
    let target = this.getBaseTargetFromProps(this.props, key);
    return target !== void 0 && !isMotionValue(target) ? target : this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    return this.events[eventName] || (this.events[eventName] = new SubscriptionManager()), this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    this.events[eventName] && this.events[eventName].notify(...args);
  }
};

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key], delete style[key];
  }
  makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }, { transformValues }, isMounted) {
    let origin = getOrigin(target, transition || {}, this);
    if (transformValues && (transitionEnd && (transitionEnd = transformValues(transitionEnd)), target && (target = transformValues(target)), origin && (origin = transformValues(origin))), isMounted) {
      checkTargetForNewValues(this, target, origin);
      let parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd, target = parsed.target;
    }
    return {
      transition,
      transitionEnd,
      ...target
    };
  }
};

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      let defaultType = getDefaultValueType(key);
      return defaultType && defaultType.default || 0;
    } else {
      let computedStyle = getComputedStyle2(instance), value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value == "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps(props, prevProps);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let { children } = this.props;
    isMotionValue(children) && (this.childSubscription = children.on("change", (latest) => {
      this.current && (this.current.textContent = `${latest}`);
    }));
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      let defaultType = getDefaultValueType(key);
      return defaultType && defaultType.default || 0;
    }
    return key = camelCaseAttributes.has(key) ? key : camelToDash(key), instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps2(props, prevProps);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName), super.mount(instance);
  }
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component2, options) => isSVGComponent(Component2) ? new SVGVisualElement(options, { enableHardwareAcceleration: !1 }) : new HTMLVisualElement(options, { enableHardwareAcceleration: !0 });

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var preloadedFeatures = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
}, motion = /* @__PURE__ */ createMotionProxy((Component2, config) => createDomMotionConfig(Component2, config, preloadedFeatures, createDomVisualElement));

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var React4 = __toESM(require("react"), 1), import_react25 = require("react");

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react21 = require("react");

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react20 = require("react");
function useIsMounted() {
  let isMounted = (0, import_react20.useRef)(!1);
  return useIsomorphicLayoutEffect(() => (isMounted.current = !0, () => {
    isMounted.current = !1;
  }), []), isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate() {
  let isMounted = useIsMounted(), [forcedRenderCount, setForcedRenderCount] = (0, import_react21.useState)(0), forceRender = (0, import_react21.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  return [(0, import_react21.useCallback)(() => frame.postRender(forceRender), [forceRender]), forcedRenderCount];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var React3 = __toESM(require("react"), 1), import_react23 = require("react");

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var React2 = __toESM(require("react"), 1), import_react22 = require("react"), PopChildMeasure = class extends React2.Component {
  getSnapshotBeforeUpdate(prevProps) {
    let element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      let size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0, size.width = element.offsetWidth || 0, size.top = element.offsetTop, size.left = element.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent }) {
  let id3 = (0, import_react22.useId)(), ref = (0, import_react22.useRef)(null), size = (0, import_react22.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return (0, import_react22.useInsertionEffect)(() => {
    let { width, height, top, left } = size.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id3;
    let style = document.createElement("style");
    return document.head.appendChild(style), style.sheet && style.sheet.insertRule(`
          [data-motion-pop-id="${id3}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `), () => {
      document.head.removeChild(style);
    };
  }, [isPresent]), React2.createElement(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size }, React2.cloneElement(children, { ref }));
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  let presenceChildren = useConstant(newChildrenMap), id3 = (0, import_react23.useId)(), context = (0, import_react23.useMemo)(
    () => ({
      id: id3,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, !0);
        for (let isComplete of presenceChildren.values())
          if (!isComplete)
            return;
        onExitComplete && onExitComplete();
      },
      register: (childId) => (presenceChildren.set(childId, !1), () => presenceChildren.delete(childId))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? void 0 : [isPresent]
  );
  return (0, import_react23.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, !1));
  }, [isPresent]), React3.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]), mode === "popLayout" && (children = React3.createElement(PopChild, { isPresent }, children)), React3.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react24 = require("react");
function useUnmountEffect(callback) {
  return (0, import_react24.useEffect)(() => () => callback(), []);
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach((child) => {
    let key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  let filtered = [];
  return import_react25.Children.forEach(children, (child) => {
    (0, import_react25.isValidElement)(child) && filtered.push(child);
  }), filtered;
}
var AnimatePresence = ({ children, custom, initial = !0, onExitComplete, exitBeforeEnter, presenceAffectsLayout = !0, mode = "sync" }) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  let forceRender = (0, import_react25.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0], isMounted = useIsMounted(), filteredChildren = onlyElements(children), childrenToRender = filteredChildren, exitingChildren = (0, import_react25.useRef)(/* @__PURE__ */ new Map()).current, presentChildren = (0, import_react25.useRef)(childrenToRender), allChildren = (0, import_react25.useRef)(/* @__PURE__ */ new Map()).current, isInitialRender = (0, import_react25.useRef)(!0);
  if (useIsomorphicLayoutEffect(() => {
    isInitialRender.current = !1, updateChildLookup(filteredChildren, allChildren), presentChildren.current = childrenToRender;
  }), useUnmountEffect(() => {
    isInitialRender.current = !0, allChildren.clear(), exitingChildren.clear();
  }), isInitialRender.current)
    return React4.createElement(React4.Fragment, null, childrenToRender.map((child) => React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: !0, initial: initial ? void 0 : !1, presenceAffectsLayout, mode }, child)));
  childrenToRender = [...childrenToRender];
  let presentKeys = presentChildren.current.map(getChildKey), targetKeys = filteredChildren.map(getChildKey), numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    let key = presentKeys[i];
    targetKeys.indexOf(key) === -1 && !exitingChildren.has(key) && exitingChildren.set(key, void 0);
  }
  return mode === "wait" && exitingChildren.size && (childrenToRender = []), exitingChildren.forEach((component, key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    let child = allChildren.get(key);
    if (!child)
      return;
    let insertionIndex = presentKeys.indexOf(key), exitingComponent = component;
    if (!exitingComponent) {
      let onExit = () => {
        exitingChildren.delete(key);
        let leftOverKeys = Array.from(allChildren.keys()).filter((childKey) => !targetKeys.includes(childKey));
        if (leftOverKeys.forEach((leftOverKey) => allChildren.delete(leftOverKey)), presentChildren.current = filteredChildren.filter((presentChild) => {
          let presentChildKey = getChildKey(presentChild);
          return (
            // filter out the node exiting
            presentChildKey === key || // filter out the leftover children
            leftOverKeys.includes(presentChildKey)
          );
        }), !exitingChildren.size) {
          if (isMounted.current === !1)
            return;
          forceRender(), onExitComplete && onExitComplete();
        }
      };
      exitingComponent = React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: !1, onExitComplete: onExit, custom, presenceAffectsLayout, mode }, child), exitingChildren.set(key, exitingComponent);
    }
    childrenToRender.splice(insertionIndex, 0, exitingComponent);
  }), childrenToRender = childrenToRender.map((child) => {
    let key = child.key;
    return exitingChildren.has(key) ? child : React4.createElement(PresenceChild, { key: getChildKey(child), isPresent: !0, presenceAffectsLayout, mode }, child);
  }), React4.createElement(React4.Fragment, null, exitingChildren.size ? childrenToRender : childrenToRender.map((child) => (0, import_react25.cloneElement)(child)));
};

// app/components/SalesTicker.tsx
var import_react26 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime"), mockSales = [
  { txId: "tx_572829", username: "Crypto_Maxx", product: "PEPE PUMP Tee", amount: 29.99, timeAgo: "2 mins ago", growth: "+120%" },
  { txId: "tx_572828", username: "MoonGirl", product: "DEGEN SZN Tee", amount: 32.99, timeAgo: "5 mins ago", growth: "+85%" },
  { txId: "tx_572825", username: "HodlKing", product: "WAGMI Tee", amount: 27.99, timeAgo: "12 mins ago", growth: "+43%" },
  { txId: "tx_572821", username: "DiamondHands", product: "MOON SOON Tee", amount: 29.99, timeAgo: "18 mins ago", growth: "+178%" },
  { txId: "tx_572819", username: "SatoshiWannabe", product: "BULLISH AF Tee", amount: 35.99, timeAgo: "24 mins ago", growth: "+32%" },
  { txId: "tx_572814", username: "CryptoQueen", product: "NGMI Tee", amount: 28.99, timeAgo: "35 mins ago", growth: "+95%" }
];
function SalesTicker() {
  let [sales] = (0, import_react26.useState)(mockSales), [currentIndex, setCurrentIndex] = (0, import_react26.useState)(0), currentSale = sales[currentIndex];
  return (0, import_react26.useEffect)(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sales.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [sales.length]), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bg-[#151522] py-2 overflow-hidden border-y border-[#2c2c44]", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.5 },
      className: "flex items-center justify-center text-sm text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          motion.div,
          {
            className: "text-green-400 mr-2 h-2 w-2 rounded-full bg-green-400",
            animate: {
              scale: [1, 1.5, 1],
              boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 4px rgba(34, 197, 94, 0.2)", "0 0 0 0 rgba(34, 197, 94, 0)"]
            },
            transition: { duration: 2, repeat: 1 / 0 }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          motion.span,
          {
            className: "font-mono text-xs text-pink-400 mr-2 hidden sm:inline-block",
            animate: { opacity: [0.7, 1, 0.7] },
            transition: { duration: 1.5, repeat: 1 / 0 },
            children: currentSale.txId
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "text-gray-300", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            motion.span,
            {
              className: "font-medium text-pink-300",
              animate: { textShadow: ["0 0 0px rgba(236, 72, 153, 0)", "0 0 4px rgba(236, 72, 153, 0.7)", "0 0 0px rgba(236, 72, 153, 0)"] },
              transition: { duration: 2, repeat: 1 / 0 },
              children: currentSale.username
            }
          ),
          " ",
          "just purchased",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            motion.span,
            {
              className: "font-medium text-purple-400",
              whileInView: { scale: [1, 1.05, 1] },
              transition: { duration: 1, times: [0, 0.5, 1] },
              children: currentSale.product
            }
          ),
          " ",
          "for",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            motion.span,
            {
              className: "font-medium text-green-400",
              animate: { y: [0, -2, 0] },
              transition: { duration: 1.5, repeat: 1 / 0 },
              children: [
                "$",
                currentSale.amount
              ]
            }
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            motion.span,
            {
              className: "font-bold text-green-500 bg-green-900/20 px-1.5 py-0.5 rounded-md ml-1",
              animate: {
                boxShadow: ["0 0 0px rgba(34, 197, 94, 0)", "0 0 5px rgba(34, 197, 94, 0.5)", "0 0 0px rgba(34, 197, 94, 0)"],
                scale: [1, 1.03, 1]
              },
              transition: { duration: 2, repeat: 1 / 0 },
              children: currentSale.growth
            }
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-gray-500", children: currentSale.timeAgo })
        ] })
      ]
    },
    currentSale.txId
  ) }) }) });
}

// app/components/TopTicker.tsx
var import_react27 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime"), mockStats = [
  { label: "24h Volume", value: "$158,923", change: "+15.2%", positive: !0, color: "text-green-400" },
  { label: "Active Sellers", value: "843", change: "+12", positive: !0, color: "text-purple-400" },
  { label: "Total T-Shirts", value: "2,547", change: "+83", positive: !0, color: "text-blue-400" },
  { label: "Avg. Price", value: "$32.42", change: "-1.2%", positive: !1, color: "text-red-400" },
  { label: "Recent Sales", value: "432", change: "+53", positive: !0, color: "text-pink-400" }
];
function TopTicker() {
  let [hoveredStat, setHoveredStat] = (0, import_react27.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bg-[#0a0a10] border-b border-[#2c2c44]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "container mx-auto py-2 px-4 overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    motion.div,
    {
      className: "flex space-x-6 md:space-x-12 justify-start md:justify-center min-w-max",
      initial: { x: 0 },
      animate: { x: [-10, 10, -10] },
      transition: {
        duration: 10,
        repeat: 1 / 0,
        repeatType: "mirror",
        ease: "linear"
      },
      children: mockStats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        motion.div,
        {
          className: "flex items-center cursor-pointer",
          whileHover: { scale: 1.05 },
          onMouseEnter: () => setHoveredStat(stat.label),
          onMouseLeave: () => setHoveredStat(null),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              motion.div,
              {
                className: `w-2 h-2 rounded-full ${stat.positive ? "bg-green-400" : "bg-red-400"} mr-2 flex-shrink-0`,
                animate: {
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.8, 1],
                  boxShadow: hoveredStat === stat.label ? ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"] : "0 0 0px rgba(255,255,255,0)"
                },
                transition: {
                  duration: 2,
                  repeat: 1 / 0,
                  delay: index * 0.3
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mr-1 text-xs text-gray-400 font-medium", children: [
              stat.label,
              ":"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              motion.div,
              {
                className: `text-xs font-bold ${hoveredStat === stat.label ? stat.color : "text-white"}`,
                animate: {
                  textShadow: hoveredStat === stat.label ? ["0 0 0px rgba(255,255,255,0)", "0 0 5px rgba(255,255,255,0.7)", "0 0 0px rgba(255,255,255,0)"] : "0 0 0px rgba(255,255,255,0)"
                },
                transition: {
                  duration: 1.5,
                  repeat: 1 / 0
                },
                children: stat.value
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              motion.div,
              {
                className: `ml-1.5 text-xs ${stat.positive ? "text-green-400" : "text-red-400"}`,
                animate: {
                  y: [0, -2, 0],
                  opacity: hoveredStat === stat.label ? [0.7, 1, 0.7] : 1
                },
                transition: {
                  y: {
                    duration: 1.5,
                    repeat: 1 / 0
                  },
                  opacity: {
                    duration: 1,
                    repeat: 1 / 0
                  }
                },
                children: stat.change
              }
            )
          ]
        },
        stat.label
      ))
    }
  ) }) });
}

// app/components/Header.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Header() {
  let [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react28.useState)(!1), { pathname } = (0, import_react29.useLocation)(), params = (0, import_react29.useParams)(), isHome = pathname === "/", isProductPage = pathname.includes("/products/");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "sticky top-0 z-50 bg-[#0a0a10]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "border-b border-[#2c2c44]", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "container mx-auto px-4 py-3 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react29.Link, { to: "/", className: "text-2xl font-bold", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Rugged" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("nav", { className: "hidden md:flex space-x-6 mx-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react29.Link, { to: "/", className: `text-gray-300 hover:text-purple-400 transition-colors ${isHome ? "text-purple-400" : ""}`, children: "Home" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react29.Link, { to: "/collections/trending", className: "text-gray-300 hover:text-purple-400 transition-colors", children: "Trending" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react29.Link, { to: "/collections", className: "text-gray-300 hover:text-purple-400 transition-colors", children: "Categories" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react29.Link, { to: "/account", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          motion.button,
          {
            className: `bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm
                        relative overflow-hidden shadow-[0_0_10px_rgba(168,85,247,0.3)]`,
            whileHover: { scale: 1.05, boxShadow: "0 0 15px rgba(168,85,247,0.5)" },
            whileTap: { scale: 0.95 },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "relative z-10", children: "My Account" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                motion.div,
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            className: "text-white p-2",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
          }
        ) })
      ] })
    ] }) }),
    !isProductPage && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "pt-3 pb-2 border-b border-[#2c2c44] bg-[#0a0a10]/90 backdrop-blur-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SalesTicker, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-3 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react29.Link, { to: "/products/create-your-own", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 transition-all cursor-pointer neon-text", children: "Create a Shirt" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "max-w-md mx-auto mt-3 px-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          motion.div,
          {
            className: "relative",
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                motion.input,
                {
                  type: "text",
                  placeholder: "Search trending shirts...",
                  className: `w-full bg-[#1c1c2e] text-white rounded-full px-4 py-2 pl-10
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       border border-blue-500/30 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]`,
                  whileFocus: {
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                    borderColor: "rgba(59, 130, 246, 0.8)"
                  },
                  transition: { duration: 0.2 }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                motion.div,
                {
                  className: "absolute left-3 top-2.5 text-blue-400",
                  animate: {
                    rotate: [0, 0, 0, -15, 15, 0, 0],
                    scale: [1, 1, 1, 1.1, 1.1, 1, 1]
                  },
                  transition: {
                    duration: 5,
                    repeat: 1 / 0,
                    times: [0, 0.8, 0.83, 0.86, 0.89, 0.92, 1]
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute right-1 top-1", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                motion.button,
                {
                  className: "bg-blue-600 hover:bg-blue-700 text-white rounded-full h-7 w-7 flex items-center justify-center",
                  whileHover: { scale: 1.1, boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)" },
                  whileTap: { scale: 0.9 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex mt-2 overflow-x-auto pb-2 justify-center space-x-2 text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            motion.span,
            {
              className: "px-2 py-1 rounded-full text-purple-300 bg-purple-900/20 border border-purple-500/20 whitespace-nowrap cursor-pointer",
              whileHover: { scale: 1.05, boxShadow: "0 0 5px rgba(168, 85, 247, 0.5)" },
              whileTap: { scale: 0.95 },
              children: "#PEPE"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            motion.span,
            {
              className: "px-2 py-1 rounded-full text-green-300 bg-green-900/20 border border-green-500/20 whitespace-nowrap cursor-pointer",
              whileHover: { scale: 1.05, boxShadow: "0 0 5px rgba(34, 197, 94, 0.5)" },
              whileTap: { scale: 0.95 },
              children: "#PUMP"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            motion.span,
            {
              className: "px-2 py-1 rounded-full text-blue-300 bg-blue-900/20 border border-blue-500/20 whitespace-nowrap cursor-pointer",
              whileHover: { scale: 1.05, boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
              whileTap: { scale: 0.95 },
              children: "#WAGMI"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            motion.span,
            {
              className: "px-2 py-1 rounded-full text-pink-300 bg-pink-900/20 border border-pink-500/20 whitespace-nowrap cursor-pointer",
              whileHover: { scale: 1.05, boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)" },
              whileTap: { scale: 0.95 },
              children: "#MOON"
            }
          )
        ] })
      ] })
    ] }),
    !isProductPage && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TopTicker, {}),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      motion.div,
      {
        className: "md:hidden bg-[#151522] border-b border-[#2c2c44]",
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "px-4 py-3 space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react29.Link,
            {
              to: "/",
              className: "block text-gray-300 hover:text-purple-400 transition-colors py-2",
              onClick: () => setIsMobileMenuOpen(!1),
              children: "Home"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react29.Link,
            {
              to: "/collections/trending",
              className: "block text-gray-300 hover:text-purple-400 transition-colors py-2",
              onClick: () => setIsMobileMenuOpen(!1),
              children: "Trending"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react29.Link,
            {
              to: "/collections",
              className: "block text-gray-300 hover:text-purple-400 transition-colors py-2",
              onClick: () => setIsMobileMenuOpen(!1),
              children: "Categories"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react29.Link,
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
var import_react30 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
function Footer() {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("footer", { className: "bg-[#0a0a10] text-white py-8 mt-12 border-t border-[#2c2c44]", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mb-4 md:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-xl font-bold neon-text", children: "Rugged" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-purple-300 mt-1", children: "The #1 T-Shirt Marketplace" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex space-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "https://twitter.com/rugged", className: "hover:text-purple-400 transition-colors", children: "Twitter" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "https://discord.gg/rugged", className: "hover:text-purple-400 transition-colors", children: "Discord" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "https://instagram.com/rugged", className: "hover:text-purple-400 transition-colors", children: "Instagram" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react30.Link, { to: "/policies/faq", className: "hover:text-purple-400 transition-colors", children: "FAQ" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 pt-8 border-t border-[#2c2c44] text-center text-gray-400 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
        "\xA9 ",
        currentYear,
        " Rugged. All rights reserved."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-2 space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react30.Link, { to: "/policies/privacy-policy", className: "hover:text-purple-400 transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react30.Link, { to: "/policies/terms-of-service", className: "hover:text-purple-400 transition-colors", children: "Terms of Service" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react30.Link, { to: "/policies/shipping-policy", className: "hover:text-purple-400 transition-colors", children: "Shipping Policy" })
      ] })
    ] })
  ] }) });
}

// app/components/Cart.tsx
var import_react31 = require("react"), import_react32 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), mockCart = {
  linesCount: 0,
  isEmpty: !0,
  totalAmount: "0.00",
  lines: []
};
function Cart() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CartContent, {});
}
function CartContent() {
  let [cart] = (0, import_react31.useState)(mockCart), [isCartOpen, setIsCartOpen] = (0, import_react31.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "fixed right-4 top-4 z-50", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        className: "bg-[#151522] p-3 rounded-full border border-[#2c2c44] shadow-lg",
        onClick: () => setIsCartOpen(!0),
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AnimatePresence, { children: isCartOpen && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      motion.div,
      {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsCartOpen(!1),
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          motion.div,
          {
            className: "absolute right-0 top-0 h-full w-full max-w-md bg-[#0f0f13] shadow-xl overflow-auto",
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "p-4 border-b border-[#2c2c44]", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "text-2xl font-bold", children: "Your Cart" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "button",
                  {
                    className: "p-2 text-gray-400 hover:text-white",
                    onClick: () => setIsCartOpen(!1),
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                  }
                )
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "p-4 text-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mb-3", children: "Your cart is empty" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  import_react32.Link,
                  {
                    to: "/collections/all",
                    className: "bg-purple-600 text-white px-4 py-2 rounded-full inline-block",
                    children: "Continue shopping"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}

// app/components/Sidebar.tsx
var import_react33 = require("react"), import_react34 = require("@remix-run/react");
var import_jsx_runtime7 = require("react/jsx-runtime"), categories = [
  { name: "Pumping", handle: "pumping", color: "from-red-500 to-red-600" },
  { name: "Rugged", handle: "rugged", color: "from-orange-500 to-orange-600" },
  { name: "Resurrected", handle: "resurrected", color: "from-yellow-500 to-yellow-600" },
  { name: "Trending", handle: "trending", color: "from-green-500 to-green-600" },
  { name: "Popular", handle: "popular", color: "from-blue-500 to-blue-600" },
  { name: "Meme", handle: "meme", color: "from-indigo-500 to-indigo-600" },
  { name: "Living", handle: "living", color: "from-violet-500 to-violet-600" }
];
function Sidebar() {
  let location = (0, import_react34.useLocation)(), [hoveredIndex, setHoveredIndex] = (0, import_react33.useState)(null), getItemSize = (index) => {
    let middle = Math.floor(categories.length / 2), distanceFromMiddle = Math.abs(index - middle), maxDistance = Math.max(middle, categories.length - middle - 1);
    return `${100 - distanceFromMiddle / maxDistance * 30}%`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "fixed left-0 top-0 bottom-0 w-48 bg-[#0f0f13] border-r border-[#2c2c44] pt-20 hidden lg:block z-40", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex flex-col items-center justify-center h-full space-y-2 py-6", children: categories.map((category, index) => {
    let isActive = location.pathname === `/collections/${category.handle}`, size = getItemSize(index);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      motion.div,
      {
        className: "w-full px-4",
        style: { width: size },
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react34.Link, { to: `/collections/${category.handle}`, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          motion.div,
          {
            className: `bg-gradient-to-r ${category.color} py-3 px-4 rounded-lg text-white text-center
                           border border-white/10 relative overflow-hidden`,
            whileHover: {
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255,255,255,0.3)"
            },
            animate: {
              boxShadow: hoveredIndex === index ? ["0 0 5px rgba(255,255,255,0.3)", "0 0 20px rgba(255,255,255,0.5)", "0 0 5px rgba(255,255,255,0.3)"] : "0 0 0px rgba(255,255,255,0)"
            },
            transition: {
              boxShadow: {
                duration: 1.5,
                repeat: 1 / 0,
                repeatType: "loop"
              }
            },
            children: [
              hoveredIndex === index && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                motion.div,
                {
                  className: "absolute inset-0 bg-white/10",
                  initial: { opacity: 0 },
                  animate: { opacity: [0.1, 0.3, 0.1] },
                  transition: { duration: 1.5, repeat: 1 / 0 }
                }
              ),
              isActive && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                motion.div,
                {
                  className: "absolute right-1 top-1 w-2 h-2 rounded-full bg-white",
                  animate: {
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.6, 1]
                  },
                  transition: { duration: 1.5, repeat: 1 / 0 }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "relative z-10 font-medium", children: category.name })
            ]
          }
        ) })
      },
      category.handle
    );
  }) }) });
}

// app/components/Layout.tsx
var import_react35 = require("react"), import_jsx_runtime8 = require("react/jsx-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: "#mainContent", className: "sr-only", children: "Skip to content" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Sidebar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("main", { role: "main", id: "mainContent", className: "flex-grow lg:ml-48 transition-all duration-300", children }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react35.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Cart, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Footer, {})
  ] }) });
}

// app/styles/app.css
var app_default = "/build/_assets/app-UI7E6XDX.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MXBY6LM4.css";

// app/root.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: app_default }
  ];
}
var loader = async () => (0, import_node2.json)({
  publicStoreDomain: "mockshop.myshopify.com"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { name: "theme-color", content: "#0f0f13" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("body", { className: "min-h-screen bg-gradient-to-b from-[#0f0f13] to-[#1a1a27] text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.Outlet, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.Scripts, {})
    ] })
  ] });
}
function ErrorBoundary() {
  var _a;
  let error = (0, import_react36.useRouteError)(), errorMessage = "Unknown error", errorStatus = 500;
  return (0, import_react36.isRouteErrorResponse)(error) ? (errorMessage = ((_a = error.data) == null ? void 0 : _a.message) || error.data.toString(), errorStatus = error.status) : error instanceof Error && (errorMessage = error.message), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { name: "theme-color", content: "#0f0f13" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("body", { className: "min-h-screen bg-gradient-to-b from-[#0f0f13] to-[#1a1a27] text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "container mx-auto py-16 px-4 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: errorStatus }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-3xl font-bold mb-4", children: "Something went wrong" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-gray-400 mb-8 text-lg", children: errorMessage }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "a",
          {
            href: "/",
            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg",
            children: "Back to Homepage"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react36.Scripts, {})
    ] })
  ] });
}

// app/routes/collections.$handle.tsx
var collections_handle_exports = {};
__export(collections_handle_exports, {
  default: () => CollectionPage,
  loader: () => loader2
});
var import_react37 = require("@remix-run/react"), import_node3 = require("@remix-run/node"), import_react38 = require("@remix-run/react");
var import_jsx_runtime10 = require("react/jsx-runtime"), mockCollections = {
  pumping: {
    id: "col1",
    title: "Pumping",
    handle: "pumping",
    description: "T-shirts featuring coins and tokens that are on the rise. Get in early with these trending designs!",
    products: {
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
        }
      ]
    }
  },
  rugged: {
    id: "col2",
    title: "Rugged",
    handle: "rugged",
    description: "For the true degens. T-shirts featuring the most notorious rug pulls and failed projects in crypto history.",
    products: {
      nodes: [
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
        }
      ]
    }
  },
  trending: {
    id: "col5",
    title: "Trending",
    handle: "trending",
    description: "Our hottest sellers right now. These shirts are pumping in sales and popularity!",
    products: {
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
      ]
    }
  }
};
async function loader2({ params }) {
  let { handle } = params;
  if (!handle)
    throw new Response("No collection handle provided", { status: 404 });
  let collection = mockCollections[handle];
  if (!collection)
    throw new Response("Collection not found", { status: 404 });
  return (0, import_node3.json)({
    collection
  });
}
function CollectionPage() {
  let { collection } = (0, import_react37.useLoaderData)(), colorClass = {
    pumping: "from-green-500 to-green-700",
    rugged: "from-red-500 to-red-700",
    "new-drops": "from-blue-500 to-blue-700",
    classics: "from-yellow-500 to-yellow-700",
    trending: "from-purple-500 to-purple-700"
  }[collection.handle] || "from-purple-500 to-purple-700";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    motion.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: `bg-gradient-to-br ${colorClass} rounded-xl p-8 mb-10 relative overflow-hidden`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            motion.div,
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
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative z-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { className: "text-3xl font-bold text-white mb-3", children: collection.title }),
            collection.description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "div",
              {
                dangerouslySetInnerHTML: { __html: collection.description },
                className: "text-white/80 max-w-3xl"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex items-center mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "bg-white/20 px-3 py-1 rounded-full text-sm text-white", children: [
              collection.products.nodes.length,
              " shirts"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: collection.products.nodes.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          motion.div,
          {
            className: "bg-[#151522] rounded-xl overflow-hidden border border-[#2c2c44] card-glow",
            whileHover: { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" },
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: index * 0.05 },
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react38.Link, { to: `/products/${product.handle}`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative", children: [
                product.images.nodes[0] && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "img",
                  {
                    src: product.images.nodes[0].url,
                    className: "w-full h-56 object-cover",
                    alt: product.title,
                    width: product.images.nodes[0].width,
                    height: product.images.nodes[0].height
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold", children: "+120%" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "p-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "font-bold", children: product.title }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex justify-between items-center mt-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-purple-400 font-medium", children: [
                    "$",
                    product.priceRange.minVariantPrice.amount
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-xs text-gray-400", children: "897 sales" })
                ] })
              ] })
            ] })
          },
          product.id
        )) }),
        collection.products.nodes.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-2xl font-bold mb-4", children: "No products found" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-gray-400 mb-6", children: "We couldn't find any products in this collection." }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_react38.Link,
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

// app/routes/collections._index.tsx
var collections_index_exports = {};
__export(collections_index_exports, {
  default: () => CollectionsPage,
  loader: () => loader3
});
var import_react39 = require("@remix-run/react"), import_node4 = require("@remix-run/node"), import_react40 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime"), mockCollections2 = {
  nodes: [
    {
      id: "col1",
      title: "Pumping",
      handle: "pumping",
      description: "T-shirts featuring coins and tokens that are on the rise. Get in early with these trending designs!",
      products: {
        totalCount: 32
      }
    },
    {
      id: "col2",
      title: "Rugged",
      handle: "rugged",
      description: "For the true degens. T-shirts featuring the most notorious rug pulls and failed projects in crypto history.",
      products: {
        totalCount: 14
      }
    },
    {
      id: "col3",
      title: "New Drops",
      handle: "new-drops",
      description: "Fresh designs just dropped. Be the first to rock these brand new crypto and meme-inspired t-shirts.",
      products: {
        totalCount: 26
      }
    },
    {
      id: "col4",
      title: "Classics",
      handle: "classics",
      description: "Timeless crypto memes and references that never go out of style. The OG designs everyone recognizes.",
      products: {
        totalCount: 41
      }
    },
    {
      id: "col5",
      title: "Trending",
      handle: "trending",
      description: "Our hottest sellers right now. These shirts are pumping in sales and popularity!",
      products: {
        totalCount: 28
      }
    }
  ]
};
async function loader3() {
  return (0, import_node4.json)({
    collections: mockCollections2
  });
}
function CollectionsPage() {
  let { collections } = (0, import_react39.useLoaderData)(), categoryColors = {
    pumping: "from-green-500 to-green-700",
    rugged: "from-red-500 to-red-700",
    "new-drops": "from-blue-500 to-blue-700",
    classics: "from-yellow-500 to-yellow-700",
    trending: "from-purple-500 to-purple-700"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "container mx-auto py-8 px-4", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    motion.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "text-3xl font-bold mb-8 neon-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500", children: "T-Shirt Categories" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: collections.nodes.map((collection, index) => {
          let colorClass = categoryColors[collection.handle] || "from-purple-500 to-purple-700";
          return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            motion.div,
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
              transition: { duration: 0.3, delay: index * 0.1 },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react40.Link, { to: `/collections/${collection.handle}`, className: "absolute inset-0 z-10", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sr-only", children: collection.title }) }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  motion.div,
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
                Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  motion.div,
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
                      delay: i * (Math.random() * 0.5)
                    }
                  },
                  i
                )),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-2xl font-bold relative z-2", children: collection.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-white/80 mt-2 relative z-2", children: collection.description ? collection.description.substring(0, 120) + "..." : "Explore our collection of trending t-shirts" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between relative z-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-sm bg-white/20 px-3 py-1 rounded-full", children: [
                    collection.products.totalCount,
                    " shirts"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "text-sm font-medium flex items-center", children: [
                    "Explore",
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })
                  ] })
                ] })
              ]
            },
            collection.id
          );
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mt-16", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Popular Tags" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "bg-[#151522] p-6 rounded-xl border border-[#2c2c44]", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex flex-wrap gap-3", children: ["TRENDING", "POPULAR", "NEW", "LIMITED", "SALE", "EXCLUSIVE", "BEST SELLER", "CRYPTO", "PEPE", "MOON", "DEGEN", "WAGMI", "HODL", "APE", "BULL", "PUMP"].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            motion.a,
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

// app/routes/products.$handle.tsx
var products_handle_exports = {};
__export(products_handle_exports, {
  default: () => ProductPage,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react41 = require("@remix-run/react");
var import_jsx_runtime12 = require("react/jsx-runtime"), mockProducts = {
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
  for (let id3 in mockProducts)
    if (mockProducts[id3].handle === handle) {
      product = mockProducts[id3];
      break;
    }
  if (!product)
    throw new Response("Product not found", { status: 404 });
  let relatedProducts = {
    nodes: Object.values(mockProducts).filter((p) => p.id !== product.id)
  };
  return (0, import_node5.json)({
    product,
    relatedProducts
  });
};
function ProductPage() {
  var _a, _b, _c, _d, _e, _f;
  let { product, relatedProducts } = (0, import_react41.useLoaderData)(), selectedVariant = product.variants.nodes[0], stats = {
    totalSales: ((_a = product.metafields.find((m) => m.key === "total_sales")) == null ? void 0 : _a.value) || "897",
    lastPurchase: "2 minutes ago",
    holders: ((_b = product.metafields.find((m) => m.key === "holders")) == null ? void 0 : _b.value) || "854"
  }, growth = ((_c = product.metafields.find((m) => m.key === "growth")) == null ? void 0 : _c.value) || "120", creator = {
    name: ((_d = product.metafields.find((m) => m.key === "creator_name")) == null ? void 0 : _d.value) || "TShirtDesigner",
    address: ((_e = product.metafields.find((m) => m.key === "creator_address")) == null ? void 0 : _e.value) || "designer...x723",
    share: ((_f = product.metafields.find((m) => m.key === "creator_share")) == null ? void 0 : _f.value) || "10"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl shadow-lg", children: product.images.nodes[0] && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "img",
              {
                src: product.images.nodes[0].url,
                alt: product.title,
                className: "w-full h-auto rounded-lg"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-8 bg-white p-6 rounded-xl shadow-md", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "text-xl font-bold mb-4", children: "Creator Info" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-gray-500", children: "Created by" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-medium", children: creator.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs text-gray-400", children: creator.address })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-gray-500", children: "Royalty" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "font-medium text-purple-600", children: [
                    creator.share,
                    "%"
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "text-3xl font-bold", children: product.title }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  "div",
                  {
                    dangerouslySetInnerHTML: { __html: product.descriptionHtml },
                    className: "text-gray-600 mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-green-500 text-white px-4 py-2 rounded-lg text-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-xl font-bold", children: [
                  "+",
                  growth,
                  "%"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs", children: "24h" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex items-baseline", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "text-3xl font-bold", children: [
                "$",
                selectedVariant.price.amount,
                " ",
                selectedVariant.price.currencyCode
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-10 space-y-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                  "button",
                  {
                    className: "flex items-center justify-center bg-[#5A31F4] text-white w-full py-3 rounded-full",
                    onClick: () => {
                    },
                    children: "Check out with Shop Pay"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-10 grid grid-cols-3 gap-4 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-gray-500 text-sm", children: "Total Sales" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-bold text-xl", children: stats.totalSales })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-gray-500 text-sm", children: "Last Purchase" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-bold text-lg", children: stats.lastPurchase })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-gray-500 text-sm", children: "Holders" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-bold text-xl", children: stats.holders })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      motion.div,
      {
        className: "mt-16",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.4 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-2xl font-bold mb-6", children: "Similar T-Shirts" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: relatedProducts.nodes.map((similar) => {
            var _a2;
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
              motion.div,
              {
                className: "bg-white rounded-xl shadow-md overflow-hidden",
                whileHover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
                children: [
                  similar.images.nodes[0] && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    "img",
                    {
                      src: similar.images.nodes[0].url,
                      alt: similar.title,
                      className: "w-full h-48 object-cover"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "p-4", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex justify-between items-start", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "font-bold", children: similar.title }),
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full", children: [
                        "+",
                        ((_a2 = similar.metafields.find((m) => m.key === "growth")) == null ? void 0 : _a2.value) || "120",
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "mt-2 text-purple-600 font-medium", children: [
                      "$",
                      similar.variants.nodes[0].price.amount,
                      " ",
                      similar.variants.nodes[0].price.currencyCode
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      import_react41.Link,
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
            );
          }) })
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
var import_node6 = require("@remix-run/node"), import_react44 = require("@remix-run/react"), import_react45 = require("@remix-run/react");

// app/components/ShirtCarousel.tsx
var import_react42 = require("react");
var import_react43 = require("@remix-run/react"), import_jsx_runtime13 = require("react/jsx-runtime"), featuredShirts = [
  {
    id: "1",
    title: "PEPE PUMP",
    handle: "pepe-pump",
    image: "https://placehold.co/800x400/22c55e/ffffff?text=PEPE+PUMP",
    growth: "+240%",
    price: "$35.99",
    creator: "PepeLord"
  },
  {
    id: "2",
    title: "MOON SOON",
    handle: "moon-soon",
    image: "https://placehold.co/800x400/8b5cf6/ffffff?text=MOON+SOON",
    growth: "+178%",
    price: "$29.99",
    creator: "MoonMan"
  },
  {
    id: "3",
    title: "DEGEN SZN",
    handle: "degen-szn",
    image: "https://placehold.co/800x400/ec4899/ffffff?text=DEGEN+SZN",
    growth: "+120%",
    price: "$32.99",
    creator: "DegenKing"
  },
  {
    id: "4",
    title: "WAGMI",
    handle: "wagmi",
    image: "https://placehold.co/800x400/3b82f6/ffffff?text=WAGMI",
    growth: "+95%",
    price: "$27.99",
    creator: "DiamondHands"
  }
];
function ShirtCarousel() {
  let [currentIndex, setCurrentIndex] = (0, import_react42.useState)(0), [direction, setDirection] = (0, import_react42.useState)(0), currentShirt = featuredShirts[currentIndex];
  (0, import_react42.useEffect)(() => {
    let interval = setInterval(() => {
      setDirection(1), setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredShirts.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  let handlePrev = () => {
    setDirection(-1), setCurrentIndex(
      (prevIndex) => prevIndex === 0 ? featuredShirts.length - 1 : prevIndex - 1
    );
  }, handleNext = () => {
    setDirection(1), setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % featuredShirts.length
    );
  }, variants = {
    enter: (direction2) => ({
      x: direction2 > 0 ? 1e3 : -1e3,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction2) => ({
      x: direction2 < 0 ? 1e3 : -1e3,
      opacity: 0
    })
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative overflow-hidden rounded-xl w-full h-[400px] bg-[#151522] border border-[#2c2c44]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AnimatePresence, { initial: !1, custom: direction, mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      motion.div,
      {
        custom: direction,
        variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        },
        className: "absolute inset-0 flex items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative w-full h-full flex flex-col md:flex-row overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "md:w-7/12 h-48 md:h-full relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react43.Link, { to: `/products/${currentShirt.handle}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "img",
              {
                src: currentShirt.image,
                alt: currentShirt.title,
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: `absolute top-4 right-4 bg-green-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-lg
                              border border-green-400 flex items-center`, children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                motion.div,
                {
                  animate: { scale: [1, 1.2, 1] },
                  transition: { duration: 1.5, repeat: 1 / 0 },
                  className: "mr-1",
                  children: "\u2191"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                motion.span,
                {
                  animate: { opacity: [0.8, 1, 0.8] },
                  transition: { duration: 2, repeat: 1 / 0 },
                  children: currentShirt.growth
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "md:w-5/12 p-6 flex flex-col justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              motion.h2,
              {
                className: "text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300",
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.2, duration: 0.5 },
                children: currentShirt.title
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              motion.div,
              {
                className: "text-sm text-gray-400 mb-4",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.3, duration: 0.5 },
                children: [
                  "Created by ",
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-purple-400", children: currentShirt.creator })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              motion.div,
              {
                className: "text-2xl font-bold mb-6 text-white",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.5 },
                children: currentShirt.price
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5, duration: 0.5 },
                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react43.Link, { to: `/products/${currentShirt.handle}`, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  motion.button,
                  {
                    className: `bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold
                              shadow-[0_0_15px_rgba(168,85,247,0.5)] w-full md:w-auto`,
                    whileHover: {
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(168, 85, 247, 0.8)"
                    },
                    whileTap: { scale: 0.98 },
                    children: "View Details"
                  }
                ) })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
              motion.div,
              {
                className: "mt-6 grid grid-cols-2 gap-3",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.6, duration: 0.5 },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bg-[#1c1c2e]/50 p-3 rounded-lg", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-xs text-gray-400", children: "Trending" }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "text-sm font-semibold text-green-400", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                        motion.span,
                        {
                          animate: { y: [0, -3, 0] },
                          transition: { duration: 2, repeat: 1 / 0 },
                          className: "inline-block",
                          children: "#1"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: " this week" })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bg-[#1c1c2e]/50 p-3 rounded-lg", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-xs text-gray-400", children: "Sales" }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-sm font-semibold text-white", children: "2,458 sold" })
                  ] })
                ]
              }
            )
          ] })
        ] })
      },
      currentShirt.id
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        className: `absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 
                  rounded-full flex items-center justify-center z-10 backdrop-blur-sm border border-white/10`,
        onClick: handlePrev,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        className: `absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10
                  rounded-full flex items-center justify-center z-10 backdrop-blur-sm border border-white/10`,
        onClick: handleNext,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10", children: featuredShirts.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        className: `w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"}`,
        onClick: () => {
          setDirection(index > currentIndex ? 1 : -1), setCurrentIndex(index);
        }
      },
      index
    )) })
  ] });
}

// app/routes/_index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime"), mockProducts2 = {
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
}, mockCollections3 = {
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
}, loader5 = async () => (0, import_node6.json)({
  products: mockProducts2,
  collections: mockCollections3
});
function Index() {
  let { products, collections } = (0, import_react44.useLoaderData)(), categoryColors = {
    pumping: "from-green-500 to-green-700",
    rugged: "from-red-500 to-red-700",
    "new-drops": "from-blue-500 to-blue-700",
    classics: "from-yellow-500 to-yellow-700"
  }, categories2 = collections.nodes.map((collection) => ({
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    motion.div,
    {
      className: "container mx-auto py-6 px-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "mb-12", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-gradient-to-br from-[#151522] to-[#1c1c2e] p-4 md:p-6 rounded-xl border border-[#2c2c44] relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Featured Shirts" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react45.Link, { to: "/collections/trending", className: "text-pink-400 hover:text-pink-300 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
              motion.div,
              {
                className: "flex items-center",
                whileHover: { x: 3 },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "View All" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 ml-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ShirtCarousel, {})
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between items-center mb-6", children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Trending T-Shirts" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react45.Link, { to: "/collections/trending", className: "text-purple-400 hover:text-purple-300 transition-colors", children: "View All" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: products.nodes.slice(0, 4).map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                motion.div,
                {
                  className: "bg-[#151522] rounded-xl overflow-hidden border border-pink-500/20 card-glow",
                  whileHover: {
                    y: -5,
                    boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)",
                    borderColor: "rgba(236, 72, 153, 0.5)"
                  },
                  initial: { opacity: 0, scale: 0.9, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  transition: { duration: 0.4, delay: index * 0.1 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react45.Link, { to: `/products/${product.handle}`, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "relative", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        "img",
                        {
                          src: product.images.nodes[0].url,
                          alt: product.title,
                          className: "w-full h-48 object-cover",
                          width: "300",
                          height: "200"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                        motion.div,
                        {
                          className: `absolute top-2 right-2 bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold
                                  shadow-lg border border-green-400 flex items-center`,
                          animate: {
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              "0 0 0px rgba(34, 197, 94, 0.3)",
                              "0 0 8px rgba(34, 197, 94, 0.6)",
                              "0 0 0px rgba(34, 197, 94, 0.3)"
                            ]
                          },
                          transition: { duration: 2, repeat: 1 / 0 },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "mr-1", children: "\u2191" }),
                            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { children: [
                              "+",
                              120 + index * 40,
                              "%"
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm", children: [
                        "by ",
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-purple-300", children: [
                          "Creator",
                          product.id
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-4", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        motion.h3,
                        {
                          className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300",
                          whileHover: {
                            textShadow: "0 0 8px rgba(255,255,255,0.5)"
                          },
                          children: product.title
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between items-center mt-2", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                          motion.p,
                          {
                            className: "text-purple-400 font-bold",
                            animate: { y: [0, -2, 0] },
                            transition: { duration: 2, repeat: 1 / 0, delay: index * 0.2 },
                            children: [
                              "$",
                              product.priceRange.minVariantPrice.amount
                            ]
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-xs text-gray-400", children: [
                          800 + index * 123,
                          " sold"
                        ] })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        motion.button,
                        {
                          className: `w-full mt-3 bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white py-1.5 rounded-lg
                                 text-sm font-medium`,
                          whileHover: {
                            scale: 1.03,
                            boxShadow: "0 0 12px rgba(168, 85, 247, 0.5)"
                          },
                          whileTap: { scale: 0.97 },
                          children: "Buy Now"
                        }
                      )
                    ] })
                  ] })
                },
                product.id
              )) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mt-12", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between items-center mb-6", children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Categories" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react45.Link, { to: "/collections", className: "text-purple-400 hover:text-purple-300 transition-colors", children: "View All" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: categories2.map((category) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                motion.div,
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
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react45.Link, { to: `/collections/${category.handle}`, className: "block absolute inset-0 z-10", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "sr-only", children: category.title }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      motion.div,
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
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-xl font-bold relative z-2", children: category.title }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-sm mt-1 text-white/80 relative z-2", children: [
                      category.count,
                      "+ shirts"
                    ] })
                  ]
                },
                category.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "lg:col-span-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mt-8 bg-[#151522] p-4 rounded-xl border border-purple-500/20 card-glow", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Trending Keywords" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mb-4 relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search keywords...",
                    className: `w-full bg-[#1c1c2e] text-white rounded-lg px-4 py-2 pl-10
                      border border-purple-500/20 focus:border-purple-500/50 focus:outline-none
                      focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all`
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "absolute left-3 top-2.5 text-purple-400", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex flex-wrap gap-2", children: [
                { keyword: "PEPE", intensity: 95, color: "green" },
                { keyword: "MOON", intensity: 82, color: "blue" },
                { keyword: "DEGEN", intensity: 75, color: "pink" },
                { keyword: "WAGMI", intensity: 65, color: "purple" },
                { keyword: "HODL", intensity: 60, color: "orange" },
                { keyword: "APE", intensity: 55, color: "yellow" },
                { keyword: "BULL", intensity: 50, color: "red" },
                { keyword: "PUMP", intensity: 48, color: "green" },
                { keyword: "LAMBO", intensity: 45, color: "blue" },
                { keyword: "GEM", intensity: 40, color: "indigo" }
              ].map((item) => {
                let colorClass = {
                  green: "text-green-400 bg-green-900/20 border-green-500/20 hover:bg-green-900/40 hover:border-green-500/40",
                  blue: "text-blue-400 bg-blue-900/20 border-blue-500/20 hover:bg-blue-900/40 hover:border-blue-500/40",
                  pink: "text-pink-400 bg-pink-900/20 border-pink-500/20 hover:bg-pink-900/40 hover:border-pink-500/40",
                  purple: "text-purple-400 bg-purple-900/20 border-purple-500/20 hover:bg-purple-900/40 hover:border-purple-500/40",
                  orange: "text-orange-400 bg-orange-900/20 border-orange-500/20 hover:bg-orange-900/40 hover:border-orange-500/40",
                  yellow: "text-yellow-400 bg-yellow-900/20 border-yellow-500/20 hover:bg-yellow-900/40 hover:border-yellow-500/40",
                  red: "text-red-400 bg-red-900/20 border-red-500/20 hover:bg-red-900/40 hover:border-red-500/40",
                  indigo: "text-indigo-400 bg-indigo-900/20 border-indigo-500/20 hover:bg-indigo-900/40 hover:border-indigo-500/40"
                }[item.color], fontSize = 12 + item.intensity / 20;
                return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                  motion.div,
                  {
                    className: `px-3 py-1 rounded-full cursor-pointer
                             border ${colorClass} transition-all duration-300`,
                    style: { fontSize: `${fontSize}px` },
                    whileHover: {
                      scale: 1.05,
                      boxShadow: "0 0 12px rgba(168,85,247,0.5)",
                      y: -2
                    },
                    whileTap: { scale: 0.95 },
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: Math.random() * 0.3 },
                    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "mr-1", children: "#" }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: item.keyword }),
                      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                        motion.span,
                        {
                          className: "ml-1.5 text-xs",
                          animate: {
                            opacity: [0.7, 1, 0.7],
                            y: [0, -1, 0]
                          },
                          transition: {
                            duration: 1.5,
                            repeat: 1 / 0,
                            delay: Math.random() * 2
                          },
                          children: [
                            "+",
                            item.intensity,
                            "%"
                          ]
                        }
                      )
                    ] })
                  },
                  item.keyword
                );
              }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
              motion.div,
              {
                className: "mt-8 bg-gradient-to-r from-indigo-600 to-purple-700 p-6 rounded-xl border border-indigo-400/30 relative overflow-hidden card-glow",
                whileHover: { scale: 1.02 },
                children: [
                  Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    motion.div,
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
                        delay: i * (Math.random() * 0.5)
                      }
                    },
                    i
                  )),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-xl font-bold mb-2 text-white relative z-10 neon-text", children: "Create Your Own T-Shirt" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-indigo-200 mb-4 relative z-10", children: "Design, sell, and earn profit share from your own shirt designs!" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react45.Link, { to: "/pages/custom-shirt", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    motion.button,
                    {
                      className: "bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-indigo-50 transition-colors relative overflow-hidden",
                      whileHover: {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255,255,255,0.5)"
                      },
                      whileTap: { scale: 0.98 },
                      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "relative z-10", children: "Learn More" })
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mt-8 bg-[#151522] p-5 rounded-xl border border-[#2c2c44] card-glow", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text", children: "Platform Stats" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm text-gray-400", children: "Total Shirts" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-xl font-bold text-white mt-1", children: stats.totalShirts })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm text-gray-400", children: "Sales (24h)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-xl font-bold text-green-400 mt-1", children: stats.dailySales })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm text-gray-400", children: "Creators" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-xl font-bold text-white mt-1", children: stats.creators })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-[#1c1c2e] p-3 rounded-lg border border-[#2c2c44]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm text-gray-400", children: "Top ROI" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-xl font-bold text-purple-400 mt-1", children: stats.topROI })
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
var assets_manifest_default = { entry: { module: "/build/entry.client-HLJTKMNB.js", imports: ["/build/_shared/chunk-ACDKLXZH.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GZ26TJVZ.js", imports: ["/build/_shared/chunk-AA45TRBJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JEUAPV57.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections.$handle": { id: "routes/collections.$handle", parentId: "root", path: "collections/:handle", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$handle-Q2Z6OTRA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/collections._index": { id: "routes/collections._index", parentId: "root", path: "collections", index: !0, caseSensitive: void 0, module: "/build/routes/collections._index-H6L3MTCQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.$handle": { id: "routes/products.$handle", parentId: "root", path: "products/:handle", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$handle-TF6FN43O.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "7dd4b890", hmr: void 0, url: "/build/manifest-7DD4B890.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
