webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Drawer.js":
/*!*************************************!*\
  !*** ./components/layout/Drawer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/global.context */ "./context/global.context.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\layout\\Drawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Drawer = function Drawer() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]),
      links = _useContext.links,
      isOpened = _useContext.isOpened;

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].ul, {
    className: "uppercase tracking-wide font-menu text-gray-700 text-xl h-full z-10 bg-white w-full absolute left-0 flex flex-col justify-center items-center lg:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, links);
};

_s(Drawer, "2ANYZdX+DRIycb9IKxTwR3j11K4=");

_c = Drawer;
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

var _c;

$RefreshReg$(_c, "Drawer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/framer-motion.es.js ***!
  \*************************************************************/
/*! exports provided: AnimateLayoutFeature, AnimatePresence, AnimateSharedLayout, AnimationControls, AnimationFeature, DragControls, DragFeature, ExitFeature, GesturesFeature, HTMLVisualElement, MotionConfig, MotionConfigContext, MotionContext, MotionValue, PresenceContext, ReducedMotion, SharedLayoutContext, VisibilityAction, VisualElementAnimationControls, addScaleCorrection, animationControls, createBatcher, createMotionComponent, isValidMotionProp, m, motion, motionValue, resolveMotionValue, startAnimation, transform, useAnimatedState, useAnimation, useCycle, useDomEvent, useDragControls, useElementScroll, useExternalRef, useGestures, useInvertedScale, useIsPresent, useMotionTemplate, useMotionValue, usePanGesture, usePresence, useReducedMotion, useSpring, useTapGesture, useTransform, useViewportScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateLayoutFeature", function() { return AnimateLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePresence", function() { return AnimatePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateSharedLayout", function() { return AnimateSharedLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationControls", function() { return AnimationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFeature", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragFeature", function() { return Drag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitFeature", function() { return Exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GesturesFeature", function() { return Gestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLVisualElement", function() { return HTMLVisualElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfig", function() { return MotionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfigContext", function() { return MotionConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionContext", function() { return MotionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceContext", function() { return PresenceContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducedMotion", function() { return ReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLayoutContext", function() { return SharedLayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityAction", function() { return VisibilityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualElementAnimationControls", function() { return VisualElementAnimationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScaleCorrection", function() { return addScaleCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationControls", function() { return animationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBatcher", function() { return createBatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionComponent", function() { return createMotionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMotionProp", function() { return isValidMotionProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motion", function() { return motion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motionValue", function() { return motionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMotionValue", function() { return resolveMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAnimation", function() { return startAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimatedState", function() { return useAnimatedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCycle", function() { return useCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDomEvent", function() { return useDomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragControls", function() { return useDragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementScroll", function() { return useElementScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useExternalRef", function() { return useExternalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGestures", function() { return useGestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvertedScale", function() { return useInvertedScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsPresent", function() { return useIsPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionTemplate", function() { return useMotionTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionValue", function() { return useMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanGesture", function() { return usePanGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePresence", function() { return usePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return useReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTapGesture", function() { return useTapGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransform", function() { return useTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewportScroll", function() { return useViewportScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);








var isRefObject = function (ref) {
    return typeof ref === "object" && ref.hasOwnProperty("current");
};

/**
 * A generic subscription manager.
 */
var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = new Set();
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        this.subscriptions.add(handler);
        return function () { return void _this.subscriptions.delete(handler); };
    };
    SubscriptionManager.prototype.notify = function (
    /**
     * Using ...args would be preferable but it's array creation and this
     * might be fired every frame.
     */
    a, b, c) {
        var e_1, _a;
        if (!this.subscriptions.size)
            return;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                handler(a, b, c);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.clear();
    };
    return SubscriptionManager;
}());

var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
            // Update timestamp
            var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].postRender(_this.scheduleVelocityCheck);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        this.set(init, false);
        this.canTrackVelocity = isFloat(this.current);
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
     * @library
     *
     * ```jsx
     * function MyComponent() {
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
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
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
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
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
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
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
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["velocityPerSecond"])(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
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
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init) {
    return new MotionValue(init);
}

/**
 * VisualElement is an abstract class that provides a generic animation-optimised interface to the
 * underlying renderer.
 *
 * Currently many features interact directly with HTMLVisualElement/SVGVisualElement
 * but the idea is we can create, for instance, a ThreeVisualElement that extends
 * VisualElement and we can quickly offer all the same features.
 */
var VisualElement = /** @class */ (function () {
    function VisualElement(parent, ref) {
        var _this = this;
        // An iterable list of current children
        this.children = new Set();
        // The latest resolved MotionValues
        this.latest = {};
        // A map of MotionValues used to animate this element
        this.values = new Map();
        // Unsubscription callbacks for MotionValue subscriptions
        this.valueSubscriptions = new Map();
        // A configuration for this VisualElement, each derived class can extend this.
        this.config = {};
        // A pre-bound call to the user-provided `onUpdate` callback. This won't
        // be called more than once per frame.
        this.update = function () { return _this.config.onUpdate(_this.latest); };
        // Pre-bound version of render
        this.triggerRender = function () { return _this.render(); };
        // This function gets passed to the rendered component's `ref` prop
        // and is used to mount/unmount the VisualElement
        this.ref = function (element) {
            element ? _this.mount(element) : _this.unmount();
            if (!_this.externalRef)
                return;
            if (typeof _this.externalRef === "function") {
                _this.externalRef(element);
            }
            else if (isRefObject(_this.externalRef)) {
                _this.externalRef.current = element;
            }
        };
        // Create a relationship with the provided parent.
        this.parent = parent;
        this.rootParent = parent ? parent.rootParent : this;
        this.treePath = parent ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parent.treePath, [parent]) : [];
        // Calculate the depth of this node in the VisualElement graph
        this.depth = parent ? parent.depth + 1 : 0;
        // A reference to any externally-defined React ref. This might live better
        // outside the VisualElement and be handled in a hook.
        this.externalRef = ref;
    }
    VisualElement.prototype.subscribe = function (child) {
        var _this = this;
        this.children.add(child);
        return function () { return _this.children.delete(child); };
    };
    // Check whether this element has a MotionValue of the provided key
    VisualElement.prototype.hasValue = function (key) {
        return this.values.has(key);
    };
    // Add a MotionValue
    VisualElement.prototype.addValue = function (key, value) {
        if (this.hasValue(key))
            this.removeValue(key);
        this.values.set(key, value);
        this.setSingleStaticValue(key, value.get());
        this.subscribeToValue(key, value);
    };
    // Remove a MotionValue
    VisualElement.prototype.removeValue = function (key) {
        var _a;
        (_a = this.valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
        this.valueSubscriptions.delete(key);
        this.values.delete(key);
        delete this.latest[key];
    };
    VisualElement.prototype.getValue = function (key, defaultValue) {
        var value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = new MotionValue(defaultValue);
            this.addValue(key, value);
        }
        return value;
    };
    // Iterate over all MotionValues
    VisualElement.prototype.forEachValue = function (callback) {
        this.values.forEach(callback);
    };
    // Get the underlying rendered instance of this VisualElement. For instance in
    // HTMLVisualElement this will be a HTMLElement.
    VisualElement.prototype.getInstance = function () {
        return this.element;
    };
    VisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config);
    };
    // Set a single `latest` value
    VisualElement.prototype.setSingleStaticValue = function (key, value) {
        this.latest[key] = value;
    };
    // Statically set values to `latest` without needing a MotionValue
    VisualElement.prototype.setStaticValues = function (values, value) {
        if (typeof values === "string") {
            this.setSingleStaticValue(values, value);
        }
        else {
            for (var key in values) {
                this.setSingleStaticValue(key, values[key]);
            }
        }
    };
    VisualElement.prototype.scheduleRender = function () {
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.triggerRender, false, true);
    };
    VisualElement.prototype.scheduleUpdateLayoutDelta = function () {
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].preRender(this.rootParent.updateLayoutDelta, false, true);
    };
    VisualElement.prototype.subscribeToValue = function (key, value) {
        var _this = this;
        var onChange = function (latest) {
            _this.setSingleStaticValue(key, latest);
            // Schedule onUpdate if we have an onUpdate listener and the component has mounted
            _this.element &&
                _this.config.onUpdate &&
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this.update, false, true);
        };
        var onRender = function () {
            _this.element && _this.scheduleRender();
        };
        var unsubscribeOnChange = value.onChange(onChange);
        var unsubscribeOnRender = value.onRenderRequest(onRender);
        this.valueSubscriptions.set(key, function () {
            unsubscribeOnChange();
            unsubscribeOnRender();
        });
    };
    // Mount the VisualElement with the actual DOM element
    VisualElement.prototype.mount = function (element) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!element, "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef");
        if (this.parent) {
            this.removeFromParent = this.parent.subscribe(this);
        }
        /**
         * Save the element to this.element as a semantic API, this.current to the VisualElement
         * is compatible with existing RefObject APIs.
         */
        this.element = this.current = element;
    };
    // Unmount the VisualElement and cancel any scheduled updates
    VisualElement.prototype.unmount = function () {
        var _this = this;
        this.forEachValue(function (_, key) { return _this.removeValue(key); });
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].update(this.update);
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].render(this.render);
        this.removeFromParent && this.removeFromParent();
    };
    return VisualElement;
}());

function noop(any) {
    return any;
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToAxisBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertAxisBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return {
        top: y.min,
        bottom: y.max,
        left: x.min,
        right: x.max,
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoundingBox(_a, transformPoint) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    if (transformPoint === void 0) { transformPoint = noop; }
    var topLeft = transformPoint({ x: left, y: top });
    var bottomRight = transformPoint({ x: right, y: bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}
/**
 * Create an empty axis box of zero size
 */
function axisBox() {
    return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.x),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.y),
    };
}
/**
 * Create an empty box delta
 */
var zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
};
function delta() {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta),
    };
}

/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};
/**
 * ValueType for ints
 */
var int = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"]), { transform: Math.round });
/**
 * A map of default value types for common values
 */
var defaultValueTypes = {
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["progressPercentage"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["progressPercentage"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Misc
    zIndex: int,
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    numOctaves: int,
};
/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["vh"], auto];
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find(testValueType(v));
};
/**
 * A list of all ValueTypes
 */
var valueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(dimensionValueTypes, [style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"]]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find(testValueType(v)); };
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};

/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["perspective", "translate", "scale", "rotate", "skew"];
/**
 * Used to store the keys of all transforms that will distorted a measured bounding box.
 */
var boxDistortingKeys = new Set();
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    var isDistorting = new Set(["rotate", "skew"]).has(operationKey);
    transformAxes.forEach(function (axesKey) {
        var key = operationKey + axesKey;
        transformProps.push(key);
        isDistorting && boxDistortingKeys.add(key);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}

var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, transformKeys, transformTemplate, transformIsDefault, enableHardwareAcceleration, allowTransformNone) {
    if (enableHardwareAcceleration === void 0) { enableHardwareAcceleration = true; }
    if (allowTransformNone === void 0) { allowTransformNone = true; }
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
}
/**
 * Build a transform style that takes a calculated delta between the element's current
 * space on screen and projects it into the desired space.
 */
function buildLayoutProjectionTransform(_a, treeScale) {
    var x = _a.x, y = _a.y;
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = x.translate / treeScale.x;
    var yTranslate = y.translate / treeScale.y;
    return "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) scale(" + x.scale + ", " + y.scale + ")";
}
var identityProjection = buildLayoutProjectionTransform(delta(), {
    x: 1,
    y: 1,
});
/**
 * Take the calculated delta origin and apply it as a transform string.
 */
function buildLayoutProjectionTransformOrigin(_a) {
    var x = _a.x, y = _a.y;
    return x.origin * 100 + "% " + y.origin * 100 + "% 0";
}
/**
 * Build a transform string only from the properties that distort bounding box measurements
 * (rotate and skew)
 */
function buildBoxDistortingTransforms(transform, transformKeys) {
    var transformString = "";
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        if (boxDistortingKeys.has(key)) {
            transformString += key + "(" + transform[key] + ") ";
        }
    }
    return transformString;
}

/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}

function isCSSVariable$1(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved;
    }
    else if (isCSSVariable$1(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable$1(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable$1(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}

function pixelsToPercent(pixels, axis) {
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
function correctBorderRadius(latest, viewportBox) {
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */
    if (typeof latest === "string") {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].test(latest)) {
            latest = parseFloat(latest);
        }
        else {
            return latest;
        }
    }
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    var x = pixelsToPercent(latest, viewportBox.x);
    var y = pixelsToPercent(latest, viewportBox.y);
    return x + "% " + y + "%";
}
var varToken = "_$css";
function correctBoxShadow(latest, _viewportBox, delta, treeScale) {
    var original = latest;
    /**
     * We need to first strip and store CSS variables from the string.
     */
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
        latest = latest.replace(cssVariableRegex, function (match) {
            cssVariables.push(match);
            return varToken;
        });
    }
    var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].parse(latest);
    // TODO: Doesn't support multiple shadows
    if (shadow.length > 5)
        return original;
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    // Calculate the overall context scale
    var xScale = delta.x.scale * treeScale.x;
    var yScale = delta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    var averageScale = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
    // Spread
    if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function () {
            var cssVariable = cssVariables[i_1];
            i_1++;
            return cssVariable;
        });
    }
    return output;
}
var borderCorrectionDefinition = {
    process: correctBorderRadius,
};
var valueScaleCorrection = {
    borderRadius: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, borderCorrectionDefinition), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: borderCorrectionDefinition,
    borderTopRightRadius: borderCorrectionDefinition,
    borderBottomLeftRadius: borderCorrectionDefinition,
    borderBottomRightRadius: borderCorrectionDefinition,
    boxShadow: {
        process: correctBoxShadow,
    },
};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
    for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
    }
}

/**
 * Build style and CSS variables
 *
 * This function converts a Motion style prop:
 *
 * { x: 100, width: 100, originX: 0.5 }
 *
 * Into an object with default value types applied and default
 * transform order set:
 *
 * {
 *   transform: 'translateX(100px) translateZ(0)`,
 *   width: '100px',
 *   transformOrigin: '50% 50%'
 * }
 *
 * Styles are saved to `style` and CSS vars to `vars`.
 *
 * This function works with mutative data structures.
 */
function buildHTMLStyles(latest, style, vars, transform, transformOrigin, transformKeys, _a, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
    var enableHardwareAcceleration = _a.enableHardwareAcceleration, transformTemplate = _a.transformTemplate, allowTransformNone = _a.allowTransformNone;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable. Transforms and transform origins are kept seperately
     * for further processing
     */
    for (var key in latest) {
        var value = latest[key];
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = getDefaultValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            // If this is a transform, flag and enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (!transformIsNone)
                continue;
            // If all the transform keys we've so far encountered are their default value
            // then check to see if this one isn't
            var defaultValue = valueType.default !== undefined ? valueType.default : 0;
            if (value !== defaultValue)
                transformIsNone = false;
        }
        else if (isTransformOriginProp(key)) {
            // If this is a transform origin, flag and enable further transform-origin processing
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        }
        else if (key !== "transform" || typeof value !== "function") {
            // Handle all remaining values. Decide which map to save to depending
            // on whether this is a CSS variable
            var bucket = isCSSVariable(key) ? vars : style;
            // If we need to perform scale correction, and we have a handler for this
            // value type (ie borderRadius), perform it
            if (isLayoutProjectionEnabled && valueScaleCorrection[key]) {
                var corrected = valueScaleCorrection[key].process(value, targetBox, delta, treeScale);
                /**
                 * Scale-correctable values can define a number of other values to break
                 * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                 */
                var applyTo = valueScaleCorrection[key].applyTo;
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        bucket[applyTo[i]] = corrected;
                    }
                }
                else {
                    bucket[key] = corrected;
                }
            }
            else {
                bucket[key] = valueAsType;
            }
        }
    }
    /**
     * Build transform and transformOrigin. If we're performing layout projection these need
     * to be based off the deltaFinal data. Any user-set origins will have been pre-baked
     * into the deltaFinal.
     */
    if (isLayoutProjectionEnabled) {
        style.transform = buildLayoutProjectionTransform(deltaFinal, treeScale);
        if (style.transform === identityProjection)
            style.transform = "";
        /**
         * If we have transform styles, build only those that distort bounding boxes (rotate/skew)
         * as translations and scales will already have been used to calculate deltaFinal.
         */
        if (hasTransform) {
            style.transform +=
                " " + buildBoxDistortingTransforms(transform, transformKeys);
            style.transform = style.transform.trim();
        }
        if (transformTemplate) {
            style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildLayoutProjectionTransformOrigin(deltaFinal);
    }
    else {
        if (hasTransform) {
            style.transform = buildTransform(transform, transformKeys, transformTemplate, transformIsNone, enableHardwareAcceleration, allowTransformNone);
        }
        if (hasTransformOrigin) {
            style.transformOrigin = buildTransformOrigin(transformOrigin);
        }
    }
}

/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetAxis(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetBox(box, originBox) {
    resetAxis(box.x, originBox.x);
    resetAxis(box.y, originBox.y);
}
/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function applyAxisTransforms(final, axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    // Copy the current axis to the final axis before mutation
    final.min = axis.min;
    final.max = axis.max;
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function applyBoxTransforms(finalBox, box, transforms) {
    applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
    applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(axis.min, axis.max, origin) - translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms) {
    removeAxisTransforms(box.x, transforms, xKeys);
    removeAxisTransforms(box.y, transforms, yKeys);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within HTMLVisualElement.updateLayoutDelta
 */
function applyTreeDeltas(box, treePath) {
    var treeLength = treePath.length;
    for (var i = 0; i < treeLength; i++) {
        applyBoxDelta(box, treePath[i].delta);
    }
}

var clampProgress = function (v) { return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["clamp"])(0, 1, v); };
/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["distance"])(value, target) < maxDistance;
}
/**
 * Calculate the translate needed to be applied to source to get target
 */
function calcTranslate(source, target, origin) {
    var sourcePoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(source.min, source.max, origin);
    var targetPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(target.min, target.max, origin);
    return targetPoint - sourcePoint;
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = source.max - source.min;
    var targetLength = target.max - target.min;
    if (targetLength > sourceLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(source.min, source.max - targetLength, target.min);
    }
    return clampProgress(origin);
}
/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateAxisDelta(delta, source, target, origin) {
    var sourceLength = source.max - source.min;
    var targetLength = target.max - target.min;
    delta.origin = origin === undefined ? calcOrigin(source, target) : origin;
    delta.originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(source.min, source.max, delta.origin);
    delta.scale = targetLength / sourceLength;
    if (isNear(delta.scale, 1, 0.0001))
        delta.scale = 1;
    delta.translate = calcTranslate(source, target, delta.origin);
    if (isNear(delta.translate))
        delta.translate = 0;
}
/**
 * Update the BoxDelta with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateBoxDelta(delta, source, target, origin) {
    updateAxisDelta(delta.x, source.x, target.x, origin);
    updateAxisDelta(delta.y, source.y, target.y, origin);
}
/**
 * Update the treeScale by incorporating the parent's latest scale into its treeScale.
 */
function updateTreeScale(treeScale, parentTreeScale, parentDelta) {
    treeScale.x = parentTreeScale.x * parentDelta.x.scale;
    treeScale.y = parentTreeScale.y * parentDelta.y.scale;
}

// Call a handler once for each axis
function eachAxis(handler) {
    return [handler("x"), handler("y")];
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };

var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["cubicBezier"])(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(popmotion__WEBPACK_IMPORTED_MODULE_2__[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return popmotion__WEBPACK_IMPORTED_MODULE_2__[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};

var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var overDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 100 : 30,
    restDelta: 0.01,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: overDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ to: to }, transitionFactory(to));
};

/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    var when = _a.when, delay = _a.delay, delayChildren = _a.delayChildren, staggerChildren = _a.staggerChildren, staggerDirection = _a.staggerDirection, repeat = _a.repeat, repeatType = _a.repeatType, repeatDelay = _a.repeatDelay, from = _a.from, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var yoyo = _a.yoyo, loop = _a.loop, flip = _a.flip, ease = _a.ease, times = _a.times, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["yoyo", "loop", "flip", "ease", "times"]);
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition);
    if (times) {
        options.offset = times;
    }
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = secondsToMilliseconds(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = isEasingArray(ease)
            ? ease.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    if (yoyo) {
        options.repeatType = "reverse";
    }
    else if (loop) {
        options.repeatType = "loop";
    }
    else if (flip) {
        options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a, _b, _c, _d, _e;
    return ((_e = (_d = (_b = (_a = transition[key]) === null || _a === void 0 ? void 0 : _a.delay) !== null && _b !== void 0 ? _b : (_c = transition["default"]) === null || _c === void 0 ? void 0 : _c.delay) !== null && _d !== void 0 ? _d : transition.delay) !== null && _e !== void 0 ? _e : 0);
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(options.to);
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), getDefaultTransition(key, options.to));
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var valueTransition = transition[key] || transition["default"] || transition;
    var origin = value.get();
    var isTargetAnimatable = isAnimatable(key, target);
    /**
     * If we're trying to animate from "none", try and get an animatable version
     * of the target. This could be improved to work both ways.
     */
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        origin = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].getAnimatableNone(target);
    }
    var isOriginAnimatable = isAnimatable(key, origin);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["inertia"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), valueTransition))
            : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["animate"])(getPopmotionAnimationOptions(valueTransition, options, key));
    }
    function set() {
        value.set(target);
        onComplete();
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = setTimeout(start, secondsToMilliseconds(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}

/**
 * Measure and return the element bounding box.
 *
 * We convert the box into an AxisBox2D to make it easier to work with each axis
 * individually and programmatically.
 *
 * This function optionally accepts a transformPagePoint function which allows us to compensate
 * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
 */
function getBoundingBox(element, transformPagePoint) {
    var box = element.getBoundingClientRect();
    return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
}

/**
 * A VisualElement for HTMLElements
 */
var HTMLVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTMLVisualElement, _super);
    function HTMLVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         *
         */
        _this.defaultConfig = {
            enableHardwareAcceleration: true,
            allowTransformNone: true,
        };
        /**
         * A mutable record of styles we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.style = {};
        /**
         * A record of styles we only want to apply via React. This gets set in useMotionValues
         * and applied in the render function. I'd prefer this to live somewhere else to decouple
         * VisualElement from React but works for now.
         */
        _this.reactStyle = {};
        /**
         * A mutable record of CSS variables we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.vars = {};
        /**
         * A mutable record of transforms we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transform = {};
        /**
         * A mutable record of transform origins we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformOrigin = {};
        /**
         * A mutable record of transform keys we want to apply to the rendered Element. We order
         * this to order transforms in the desired order. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformKeys = [];
        _this.config = _this.defaultConfig;
        /**
         * ========================================
         * Layout
         * ========================================
         */
        _this.isLayoutProjectionEnabled = false;
        /**
         * A set of layout update event handlers. These are only called once all layouts have been read,
         * making it safe to perform DOM write operations.
         */
        _this.layoutUpdateListeners = new SubscriptionManager();
        _this.layoutMeasureListeners = new SubscriptionManager();
        _this.viewportBoxUpdateListeners = new SubscriptionManager();
        /**
         * Keep track of whether the viewport box has been updated since the last render.
         * If it has, we want to fire the onViewportBoxUpdate listener.
         */
        _this.hasViewportBoxUpdated = false;
        /**
         * The visual target we want to project our component into on a given frame
         * before applying transforms defined in `animate` or `style`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.targetBoxFinal = axisBox();
        /**
         * The overall scale of the local coordinate system as transformed by all parents
         * of this component. We use this for scale correction on our calculated layouts
         * and scale-affected values like `boxShadow`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.treeScale = { x: 1, y: 1 };
        _this.prevTreeScale = { x: 1, y: 1 };
        /**
         * The delta between the boxCorrected and the desired
         * targetBox (before user-set transforms are applied). The calculated output will be
         * handed to the renderer and used as part of the style correction calculations, for
         * instance calculating how to display the desired border-radius correctly.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.delta = delta();
        /**
         * The delta between the boxCorrected and the desired targetBoxFinal. The calculated
         * output will be handed to the renderer and used to project the boxCorrected into
         * the targetBoxFinal.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.deltaFinal = delta();
        /**
         * The computed transform string to apply deltaFinal to the element. Currently this is only
         * being used to diff and decide whether to render on the current frame, but a minor optimisation
         * could be to provide this to the buildHTMLStyle function.
         */
        _this.deltaTransform = identityProjection;
        /**
         *
         */
        _this.stopLayoutAxisAnimation = {
            x: function () { },
            y: function () { },
        };
        _this.isTargetBoxLocked = false;
        /**
         *
         */
        _this.axisProgress = {
            x: motionValue(0),
            y: motionValue(0),
        };
        _this.updateLayoutDelta = function () {
            _this.isLayoutProjectionEnabled && _this.box && _this.updateLayoutDeltas();
            /**
             * Ensure all children layouts are also updated.
             *
             * This uses a pre-bound function executor rather than a lamda to avoid creating a new function
             * multiple times per frame (source of mid-animation GC)
             */
            _this.children.forEach(fireUpdateLayoutDelta);
        };
        return _this;
    }
    /**
     * When a value is removed, we want to make sure it's removed from all rendered data structures.
     */
    HTMLVisualElement.prototype.removeValue = function (key) {
        _super.prototype.removeValue.call(this, key);
        delete this.vars[key];
        delete this.style[key];
    };
    /**
     * Empty the mutable data structures by re-creating them. We can do this every React render
     * as the comparative workload to the rest of the render is very low and this is also when
     * we want to reflect values that might have been removed by the render.
     */
    HTMLVisualElement.prototype.clean = function () {
        this.style = {};
        this.vars = {};
        this.transform = {};
    };
    HTMLVisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultConfig), config);
    };
    /**
     * Read a value directly from the HTMLElement style.
     */
    HTMLVisualElement.prototype.read = function (key) {
        return this.getComputedStyle()[key] || 0;
    };
    HTMLVisualElement.prototype.addValue = function (key, value) {
        _super.prototype.addValue.call(this, key, value);
        // If we have rotate values we want to foce the layoutOrigin used in layout projection
        // to the center of the element.
        if (key.startsWith("rotate"))
            this.layoutOrigin = 0.5;
    };
    /**
     * Read a value directly from the HTMLElement in case it's not defined by a Motion
     * prop. If it's a transform, we just return a pre-defined default value as reading these
     * out of a matrix is either error-prone or can incur a big payload for little benefit.
     */
    HTMLVisualElement.prototype.readNativeValue = function (key) {
        if (isTransformProp(key)) {
            var defaultValueType = getDefaultValueType(key);
            return defaultValueType ? defaultValueType.default || 0 : 0;
        }
        else {
            return this.read(key);
        }
    };
    HTMLVisualElement.prototype.enableLayoutProjection = function () {
        this.isLayoutProjectionEnabled = true;
    };
    HTMLVisualElement.prototype.hide = function () {
        if (this.isVisible === false)
            return;
        this.isVisible = false;
        this.scheduleRender();
    };
    HTMLVisualElement.prototype.show = function () {
        if (this.isVisible === true)
            return;
        this.isVisible = true;
        this.scheduleRender();
    };
    /**
     * Register an event listener to fire when the layout is updated. We might want to expose support
     * for this via a `motion` prop.
     */
    HTMLVisualElement.prototype.onLayoutUpdate = function (callback) {
        return this.layoutUpdateListeners.add(callback);
    };
    HTMLVisualElement.prototype.onLayoutMeasure = function (callback) {
        return this.layoutMeasureListeners.add(callback);
    };
    HTMLVisualElement.prototype.onViewportBoxUpdate = function (callback) {
        return this.viewportBoxUpdateListeners.add(callback);
    };
    /**
     * To be called when all layouts are successfully updated. In turn we can notify layoutUpdate
     * subscribers.
     */
    HTMLVisualElement.prototype.layoutReady = function (config) {
        this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, config);
    };
    /**
     * Measure and return the Element's bounding box. We convert it to a AxisBox2D
     * structure to make it easier to work on each individual axis generically.
     */
    HTMLVisualElement.prototype.getBoundingBox = function () {
        var transformPagePoint = this.config.transformPagePoint;
        return getBoundingBox(this.element, transformPagePoint);
    };
    HTMLVisualElement.prototype.getBoundingBoxWithoutTransforms = function () {
        var bbox = this.getBoundingBox();
        removeBoxTransforms(bbox, this.latest);
        return bbox;
    };
    /**
     * Return the computed style after a render.
     */
    HTMLVisualElement.prototype.getComputedStyle = function () {
        return window.getComputedStyle(this.element);
    };
    /**
     * Record the bounding box as it exists before a re-render.
     */
    HTMLVisualElement.prototype.snapshotBoundingBox = function () {
        this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
        /**
         * Update targetBox to match the prevViewportBox. This is just to ensure
         * that targetBox is affected by scroll in the same way as the measured box
         */
        this.rebaseTargetBox(false, this.prevViewportBox);
    };
    HTMLVisualElement.prototype.rebaseTargetBox = function (force, box) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (box === void 0) { box = this.box; }
        var _a = this.axisProgress, x = _a.x, y = _a.y;
        var shouldRebase = this.box &&
            !this.isTargetBoxLocked &&
            !x.isAnimating() &&
            !y.isAnimating();
        if (force || shouldRebase) {
            eachAxis(function (axis) {
                var _a = box[axis], min = _a.min, max = _a.max;
                _this.setAxisTarget(axis, min, max);
            });
        }
    };
    HTMLVisualElement.prototype.measureLayout = function () {
        var _this = this;
        this.box = this.getBoundingBox();
        this.boxCorrected = copyAxisBox(this.box);
        if (!this.targetBox)
            this.targetBox = copyAxisBox(this.box);
        this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box);
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(function () { return _this.rebaseTargetBox(); });
    };
    HTMLVisualElement.prototype.lockTargetBox = function () {
        this.isTargetBoxLocked = true;
    };
    HTMLVisualElement.prototype.unlockTargetBox = function () {
        this.stopLayoutAnimation();
        this.isTargetBoxLocked = false;
    };
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    HTMLVisualElement.prototype.resetTransform = function () {
        var transformTemplate = this.config.transformTemplate;
        this.element.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform
        this.scheduleRender();
    };
    /**
     * Set new min/max boundaries to project an axis into
     */
    HTMLVisualElement.prototype.setAxisTarget = function (axis, min, max) {
        var targetAxis = this.targetBox[axis];
        targetAxis.min = min;
        targetAxis.max = max;
        // Flag that we want to fire the onViewportBoxUpdate event handler
        this.hasViewportBoxUpdated = true;
        this.rootParent.scheduleUpdateLayoutDelta();
    };
    /**
     *
     */
    HTMLVisualElement.prototype.startLayoutAxisAnimation = function (axis, transition) {
        var _this = this;
        var progress = this.axisProgress[axis];
        var _a = this.targetBox[axis], min = _a.min, max = _a.max;
        var length = max - min;
        progress.clearListeners();
        progress.set(min);
        progress.set(min); // Set twice to hard-reset velocity
        progress.onChange(function (v) { return _this.setAxisTarget(axis, v, v + length); });
        return startAnimation(axis, progress, 0, transition);
    };
    HTMLVisualElement.prototype.stopLayoutAnimation = function () {
        var _this = this;
        eachAxis(function (axis) { return _this.axisProgress[axis].stop(); });
    };
    /**
     * Update the layout deltas to reflect the relative positions of the layout
     * and the desired target box
     */
    HTMLVisualElement.prototype.updateLayoutDeltas = function () {
        /**
         * Reset the corrected box with the latest values from box, as we're then going
         * to perform mutative operations on it.
         */
        resetBox(this.boxCorrected, this.box);
        /**
         * If this component has a parent, update this treeScale by incorporating the parent's
         * delta into its treeScale.
         */
        if (this.parent) {
            this.prevTreeScale.x = this.treeScale.x;
            this.prevTreeScale.y = this.treeScale.y;
            updateTreeScale(this.treeScale, this.parent.treeScale, this.parent.delta);
        }
        /**
         * Apply all the parent deltas to this box to produce the corrected box. This
         * is the layout box, as it will appear on screen as a result of the transforms of its parents.
         */
        applyTreeDeltas(this.boxCorrected, this.treePath);
        /**
         * Update the delta between the corrected box and the target box before user-set transforms were applied.
         * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
         * for our layout reprojection, but still allow them to be scaled correctly by the user.
         * It might be that to simplify this we may want to accept that user-set scale is also corrected
         * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
         * to allow people to choose whether these styles are corrected based on just the
         * layout reprojection or the final bounding box.
         */
        updateBoxDelta(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin);
        /**
         * If we have a listener for the viewport box, fire it.
         */
        this.hasViewportBoxUpdated &&
            this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta);
        this.hasViewportBoxUpdated = false;
        /**
         * Ensure this element renders on the next frame if the projection transform has changed.
         */
        var deltaTransform = buildLayoutProjectionTransform(this.delta, this.treeScale);
        if (deltaTransform !== this.deltaTransform ||
            // Also compare calculated treeScale, for values that rely on only this for scale correction.
            this.prevTreeScale.x !== this.treeScale.x ||
            this.prevTreeScale.y !== this.treeScale.y) {
            this.scheduleRender();
        }
        this.deltaTransform = deltaTransform;
    };
    HTMLVisualElement.prototype.updateTransformDeltas = function () {
        if (!this.isLayoutProjectionEnabled || !this.box)
            return;
        /**
         * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
         * This is the final box that we will then project into by calculating a transform delta and
         * applying it to the corrected box.
         */
        applyBoxTransforms(this.targetBoxFinal, this.targetBox, this.latest);
        /**
         * Update the delta between the corrected box and the final target box, after
         * user-set transforms are applied to it. This will be used by the renderer to
         * create a transform style that will reproject the element from its actual layout
         * into the desired bounding box.
         */
        updateBoxDelta(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin);
    };
    /**
     * ========================================
     * Build & render
     * ========================================
     */
    /**
     * Build a style prop using the latest resolved MotionValues
     */
    HTMLVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        if (this.isVisible !== undefined) {
            this.style.visibility = this.isVisible ? "visible" : "hidden";
        }
        buildHTMLStyles(this.latest, this.style, this.vars, this.transform, this.transformOrigin, this.transformKeys, this.config, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
    };
    /**
     * Render the Element by rebuilding and applying the latest styles and vars.
     */
    HTMLVisualElement.prototype.render = function () {
        // Rebuild the latest animated values into style and vars caches.
        this.build();
        // Directly assign style into the Element's style prop. In tests Object.assign is the
        // fastest way to assign styles.
        Object.assign(this.element.style, this.style);
        // Loop over any CSS variables and assign those.
        for (var key in this.vars) {
            this.element.style.setProperty(key, this.vars[key]);
        }
    };
    return HTMLVisualElement;
}(VisualElement));
/**
 * Pre-bound version of updateLayoutDelta so we're not creating a new function multiple
 * times per frame.
 */
var fireUpdateLayoutDelta = function (child) {
    return child.updateLayoutDelta();
};

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

function calcOrigin$1(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
}

// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].transform(progress * length);
};
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    // Build the dash array
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
}

var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(_a, style, vars, attrs, transform, transformOrigin, transformKeys, config, dimensions, totalPathLength, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    /**
     * With SVG we treat all animated values as attributes rather than CSS, so we build into attrs
     */
    buildHTMLStyles(latest, attrs, vars, transform, transformOrigin, transformKeys, config, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox);
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (originX !== undefined || originY !== undefined || style.transform) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions || unmeasured, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been measured
    if (totalPathLength !== undefined && pathLength !== undefined) {
        buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
    return attrs;
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
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
]);

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

/**
 * A VisualElement for SVGElements. Inherits from and extends HTMLVisualElement as the two
 * share data structures.
 */
var SVGVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SVGVisualElement, _super);
    function SVGVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A mutable record of attributes we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.attrs = {};
        /**
         * We disable hardware acceleration for SVG transforms as they're not currently able to be accelerated.
         */
        _this.defaultConfig = {
            enableHardwareAcceleration: false,
        };
        /**
         * Without duplicating this call from HTMLVisualElement we end up with HTMLVisualElement.defaultConfig
         * being assigned to config
         */
        _this.config = _this.defaultConfig;
        return _this;
    }
    /**
     * Measure the SVG element on mount. This can affect page rendering so there might be a
     * better time to perform this - for instance dynamically only if there's a transform-origin dependent
     * transform being set (like rotate)
     */
    SVGVisualElement.prototype.mount = function (element) {
        _super.prototype.mount.call(this, element);
        this.measure();
    };
    /**
     * Update the SVG dimensions and path length
     */
    SVGVisualElement.prototype.measure = function () {
        try {
            this.dimensions =
                typeof this.element.getBBox ===
                    "function"
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect();
        }
        catch (e) {
            // Most likely trying to measure an unrendered element under Firefox
            this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        if (isPath(this.element)) {
            this.totalPathLength = this.element.getTotalLength();
        }
    };
    /**
     * Empty the mutable data structures in case attrs have been removed between renders.
     */
    SVGVisualElement.prototype.clean = function () {
        _super.prototype.clean.call(this);
        this.attrs = {};
    };
    /**
     * Read an attribute directly from the SVGElement
     */
    SVGVisualElement.prototype.read = function (key) {
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return this.element.getAttribute(key);
    };
    SVGVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        buildSVGAttrs(this.latest, this.style, this.vars, this.attrs, this.transform, this.transformOrigin, this.transformKeys, this.config, this.dimensions, this.totalPathLength, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
    };
    SVGVisualElement.prototype.render = function () {
        // Update HTML styles and CSS variables
        _super.prototype.render.call(this);
        // Loop through attributes and apply them to the SVGElement
        for (var key in this.attrs) {
            this.element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, this.attrs[key]);
        }
    };
    return SVGVisualElement;
}(HTMLVisualElement));
function isPath(element) {
    return element.tagName === "path";
}

/**
 * @internal
 */
/**
 * @internal
 */
var svgElements = [
    "animate",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use",
    "view",
];

var svgTagNames = new Set(svgElements);
/**
 * Determine whether this is a HTML or SVG component based on if the provided
 * Component is a string and a recognised SVG tag. A potentially better way to
 * do this would be to offer a `motion.customSVG` function and determine this
 * when we generate the `motion.circle` etc components.
 */
function isSVGComponent(Component) {
    return typeof Component === "string" && svgTagNames.has(Component);
}

/**
 * @public
 */
var PresenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(null);

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return useConstant(incrementId); };

/**
 * DOM-flavoured variation of the useVisualElement hook. Used to create either a HTMLVisualElement
 * or SVGVisualElement for the component.
 */
var useDomVisualElement = function (Component, props, parent, isStatic, ref) {
    var visualElement = useConstant(function () {
        var DOMVisualElement = isSVGComponent(Component)
            ? SVGVisualElement
            : HTMLVisualElement;
        return new DOMVisualElement(parent, ref);
    });
    visualElement.updateConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ enableHardwareAcceleration: !isStatic }, props));
    visualElement.layoutId = props.layoutId;
    var isPresent = useIsPresent();
    visualElement.isPresent =
        props.isPresent !== undefined ? props.isPresent : isPresent;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (props.onViewportBoxUpdate) {
            return visualElement.onViewportBoxUpdate(props.onViewportBoxUpdate);
        }
    }, [props.onViewportBoxUpdate]);
    return visualElement;
};

/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "static",
    "layout",
    "layoutId",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileHover",
    "whileTap",
    "onHoverEnd",
    "onHoverStart",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}

var isPropValid = function (key) { return !isValidMotionProp(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js").default;
    isPropValid = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !isValidMotionProp(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props) {
    var domProps = {};
    for (var key in props) {
        if (isPropValid(key))
            domProps[key] = props[key];
    }
    return domProps;
}

function buildHTMLProps(visualElement, _a) {
    var drag = _a.drag;
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.reactStyle), visualElement.style), visualElement.vars),
    };
    if (!!drag) {
        // Disable text selection
        htmlProps.style.userSelect = "none";
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
    }
    return htmlProps;
}

/**
 * Build React props for SVG elements
 */
function buildSVGProps(visualElement) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.attrs), { style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.reactStyle) });
}

function render(Component, props, visualElement) {
    // Only filter props from components we control, ie `motion.div`. If this
    // is a custom component pass along everything provided to it.
    var forwardedProps = typeof Component === "string" ? filterProps(props) : props;
    /**
     * Every render, empty and rebuild the animated values to be applied to our Element.
     * During animation these data structures are used in a mutable fashion to reduce
     * garbage collection, but between renders we can flush them to remove values
     * that might have been taken out of the provided props.
     */
    visualElement.clean();
    visualElement.build();
    // Generate props to visually render this component
    var visualProps = isSVGComponent(Component)
        ? buildSVGProps(visualElement)
        : buildHTMLProps(visualElement, props);
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, forwardedProps), { ref: visualElement.ref }), visualProps));
}

var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"] || v === style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"];
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.render();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var x = _a.x;
        return x.max - x.min;
    },
    height: function (_a) {
        var y = _a.y;
        return y.max - y.min;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.getBoundingBox();
    var elementComputedStyle = visualElement.getComputedStyle();
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValues("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.render();
    var targetBbox = visualElement.getBoundingBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target);
    transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var to = target[key];
        var fromType = findDimensionValueType(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = findDimensionValueType(to[i]);
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"]) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.render();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}

/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement, target, origin, transitionEnd);
};

/**
 * Use callback either only on the initial render or on all renders. In concurrent mode
 * the "initial" render might run multiple times
 *
 * @param callback - Callback to run
 * @param isInitialOnly - Set to `true` to only run on initial render, or `false` for all renders. Defaults to `false`.
 *
 * @public
 */
function useInitialOrEveryRender(callback, isInitialOnly) {
    if (isInitialOnly === void 0) { isInitialOnly = false; }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    if (!isInitialOnly || (isInitialOnly && isInitialRender.current)) {
        callback();
    }
    isInitialRender.current = false;
}

/**
 * Control animations on one or more components.
 *
 * @public
 */
var AnimationControls = /** @class */ (function () {
    function AnimationControls() {
        /**
         * Track whether the host component has mounted.
         *
         * @internal
         */
        this.hasMounted = false;
        /**
         * Pending animations that are started before a component is mounted.
         *
         * @internal
         */
        this.pendingAnimations = [];
        /**
         * A collection of linked component animation controls.
         *
         * @internal
         */
        this.componentControls = new Set();
    }
    /**
     * Set variants on this and all child components.
     *
     * @param variants - The variants to set
     *
     * @internal
     */
    AnimationControls.prototype.setVariants = function (variants) {
        this.variants = variants;
        this.componentControls.forEach(function (controls) {
            return controls.setVariants(variants);
        });
    };
    /**
     * Set a default transition on this and all child components
     *
     * @param transition - The default transition to set
     *
     * @internal
     */
    AnimationControls.prototype.setDefaultTransition = function (transition) {
        this.defaultTransition = transition;
        this.componentControls.forEach(function (controls) {
            return controls.setDefaultTransition(transition);
        });
    };
    /**
     * Subscribes a component's animation controls to this.
     *
     * @param controls - The controls to subscribe
     * @returns An unsubscribe function.
     *
     * @internal
     */
    AnimationControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        if (this.variants)
            controls.setVariants(this.variants);
        if (this.defaultTransition)
            controls.setDefaultTransition(this.defaultTransition);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Starts an animation on all linked components.
     *
     * @remarks
     *
     * ```jsx
     * controls.start("variantLabel")
     * controls.start({
     *   x: 0,
     *   transition: { duration: 1 }
     * })
     * ```
     *
     * @param definition - Properties or variant label to animate to
     * @param transition - Optional `transtion` to apply to a variant
     * @returns - A `Promise` that resolves when all animations have completed.
     *
     * @public
     */
    AnimationControls.prototype.start = function (definition, transitionOverride) {
        var _this = this;
        if (this.hasMounted) {
            var animations_1 = [];
            this.componentControls.forEach(function (controls) {
                var animation = controls.start(definition, {
                    transitionOverride: transitionOverride,
                });
                animations_1.push(animation);
            });
            return Promise.all(animations_1);
        }
        else {
            return new Promise(function (resolve) {
                _this.pendingAnimations.push({
                    animation: [definition, transitionOverride],
                    resolve: resolve,
                });
            });
        }
    };
    /**
     * Instantly set to a set of properties or a variant.
     *
     * ```jsx
     * // With properties
     * controls.set({ opacity: 0 })
     *
     * // With variants
     * controls.set("hidden")
     * ```
     *
     * @internalremarks
     * We could perform a similar trick to `.start` where this can be called before mount
     * and we maintain a list of of pending actions that get applied on mount. But the
     * expectation of `set` is that it happens synchronously and this would be difficult
     * to do before any children have even attached themselves. It's also poor practise
     * and we should discourage render-synchronous `.start` calls rather than lean into this.
     *
     * @public
     */
    AnimationControls.prototype.set = function (definition) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return this.componentControls.forEach(function (controls) {
            return controls.apply(definition);
        });
    };
    /**
     * Stops animations on all linked components.
     *
     * ```jsx
     * controls.stop()
     * ```
     *
     * @public
     */
    AnimationControls.prototype.stop = function () {
        this.componentControls.forEach(function (controls) { return controls.stop(); });
    };
    /**
     * Initialises the animation controls.
     *
     * @internal
     */
    AnimationControls.prototype.mount = function () {
        var _this = this;
        this.hasMounted = true;
        this.pendingAnimations.forEach(function (_a) {
            var animation = _a.animation, resolve = _a.resolve;
            return _this.start.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(animation)).then(resolve);
        });
    };
    /**
     * Stops all child animations when the host component unmounts.
     *
     * @internal
     */
    AnimationControls.prototype.unmount = function () {
        this.hasMounted = false;
        this.stop();
    };
    return AnimationControls;
}());
/**
 * @internal
 */
var animationControls = function () { return new AnimationControls(); };

/**
 * @internal
 */
var MotionContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
    static: false,
});
var isVariantLabel = function (v) {
    return typeof v === "string" || Array.isArray(v);
};
var isAnimationControls = function (v) {
    return v instanceof AnimationControls;
};
/**
 * Set up the context for children motion components.
 *
 * We also use this opportunity to apply `initial` values
 */
var useMotionContext = function (parentContext, controls, visualElement, isStatic, _a) {
    if (isStatic === void 0) { isStatic = false; }
    var initial = _a.initial, animate = _a.animate, variants = _a.variants, whileTap = _a.whileTap, whileHover = _a.whileHover, layoutId = _a.layoutId;
    // Determine whether this is a root element of an AnimatePresence component
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    var presenceId = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id;
    visualElement.isPresenceRoot = parentContext.presenceId !== presenceId;
    // Override initial with that from a parent context, if defined
    if ((presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) !== undefined) {
        initial = presenceContext.initial;
    }
    var initialState;
    if (initial === false && !isAnimationControls(animate)) {
        initialState = animate;
    }
    else if (typeof initial !== "boolean") {
        initialState = initial;
    }
    // Track mounted status so children can detect whether they were present during their
    // parent's first render
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    // We propagate this component's VisualElementAnimationControls *if* we're being provided variants,
    // if we're being used to control variants, or if we're being passed animation controls.
    // Otherwise this component should be "invisible" to variant propagation. This is a slight concession
    // to Framer X where every `Frame` is a `motion` component and it might be if we change that in the future
    // that this restriction is removed.
    var shouldPropagateControls = variants ||
        isVariantLabel(animate) ||
        isVariantLabel(whileTap) ||
        isVariantLabel(whileHover) ||
        isAnimationControls(animate);
    // If this component's `initial` prop is a variant label, propagate it. Otherwise pass the parent's.
    var targetInitial = isVariantLabel(initialState)
        ? initialState
        : parentContext.initial;
    // If this is a variant tree we need to propagate the `animate` prop in case new children are added after
    // the tree initially animates.
    var targetAnimate = isVariantLabel(animate)
        ? animate
        : parentContext.animate;
    // Only allow `initial` to trigger context re-renders if this is a `static` component (ie we're on the Framer canvas)
    // or in another non-animation/interaction environment.
    var initialDependency = isStatic ? targetInitial : null;
    // Only allow `animate` to trigger context re-renders if it's a variant label. If this is an array of
    // variant labels there's probably an optimisation to deep-compare but it might be an over-optimisation.
    // We want to do this as we rely on React's component rendering order each render cycle to determine
    // the new order of any child components for the `staggerChildren` functionality.
    var animateDependency = shouldPropagateControls && isVariantLabel(targetAnimate)
        ? targetAnimate
        : null;
    // The context to provide to the child. We `useMemo` because although `controls` and `initial` are
    // unlikely to change, by making the context an object it'll be considered a new value every render.
    // So all child motion components will re-render as a result.
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return ({
        controls: shouldPropagateControls
            ? controls
            : parentContext.controls,
        initial: targetInitial,
        animate: targetAnimate,
        visualElement: visualElement,
        hasMounted: hasMounted,
        isReducedMotion: parentContext.isReducedMotion,
        presenceId: presenceId,
    }); }, [
        initialDependency,
        animateDependency,
        parentContext.isReducedMotion,
        animate,
        layoutId,
        presenceId,
    ]);
    // Update the `static` property every render. This is unlikely to change but also essentially free.
    context.static = isStatic;
    // Set initial state. If this is a static component (ie in Framer canvas), respond to updates
    // in `initial`.
    useInitialOrEveryRender(function () {
        var initialToApply = initialState || parentContext.initial;
        initialToApply && controls.apply(initialToApply);
    }, !isStatic);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        hasMounted.current = true;
    }, []);
    return context;
};

var checkShouldInheritVariant = function (_a) {
    var animate = _a.animate, variants = _a.variants, _b = _a.inherit, inherit = _b === void 0 ? true : _b;
    return (inherit &&
        !!variants &&
        (!animate || animate instanceof AnimationControls));
};

var isMotionValue = function (value) {
    return value instanceof MotionValue;
};

function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return (isTransformProp(key) ||
        isTransformOriginProp(key) ||
        ((layout || layoutId !== undefined) && !!valueScaleCorrection[key]));
}
/**
 * Scrape props for MotionValues and add/remove them to this component's
 * VisualElement
 */
function useMotionValues(visualElement, props) {
    var prev = useConstant(empty);
    /**
     * Remove MotionValues that are no longer present
     */
    for (var key in prev) {
        var isForced = isForcedMotionValue(key, props);
        var existsAsProp = props[key];
        var existsAsStyle = props.style && props.style[key];
        var propIsMotionValue = existsAsProp && isMotionValue(props[key]);
        var styleIsMotionValue = existsAsStyle && isMotionValue(props.style[key]);
        var transformRemoved = isForced && !existsAsProp && !existsAsStyle;
        var motionValueRemoved = !isForced && !propIsMotionValue && !styleIsMotionValue;
        if (transformRemoved || motionValueRemoved) {
            visualElement.removeValue(key);
            delete prev[key];
        }
    }
    /**
     * Add incoming MotionValues
     */
    addMotionValues(visualElement, prev, props, false, props);
    if (props.style)
        addMotionValues(visualElement, prev, props.style, true, props);
    /**
     * Transform custom values if provided a handler, ie size -> width/height
     * Ideally we'd ditch this by removing support for size and other custom values from Framer.
     */
    if (props.transformValues) {
        visualElement.reactStyle = props.transformValues(visualElement.reactStyle);
    }
}
/**
 * Add incoming MotionValues
 *
 * TODO: Type the VisualElements properly
 */
function addMotionValues(visualElement, prev, source, isStyle, props) {
    if (isStyle === void 0) { isStyle = false; }
    if (isStyle)
        visualElement.reactStyle = {};
    for (var key in source) {
        var value = source[key];
        var foundMotionValue = false;
        if (isMotionValue(value)) {
            // If this is a MotionValue, add it if it isn't a reserved key
            if (!reservedNames.has(key)) {
                visualElement.addValue(key, value);
                foundMotionValue = true;
            }
        }
        else if (isForcedMotionValue(key, props)) {
            // If this is a transform prop, always create a MotionValue
            // to ensure we can reconcile them all together.
            if (!visualElement.hasValue(key)) {
                visualElement.addValue(key, motionValue(value));
            }
            else if (value !== prev[key]) {
                // If the MotionValue already exists, update it with the
                // latest incoming value
                var motion = visualElement.getValue(key);
                motion.set(value);
            }
            foundMotionValue = true;
        }
        else if (isStyle) {
            visualElement.reactStyle[key] = value;
        }
        if (foundMotionValue)
            prev[key] = value;
    }
}
/**
 * These are props we accept as MotionValues but don't want to add
 * to the VisualElement
 */
var reservedNames = new Set([]);
var empty = function () { return ({}); };

var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };

/**
 * Get the current value of every `MotionValue` in a `VisualElement`
 */
var getCurrent = function (visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
};
/**
 * Get the current velocity of every `MotionValue` in a `VisualElement`
 */
var getVelocity = function (visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
};
/**
 * Check if value is a function that returns a `Target`. A generic typeof === 'function'
 * check, just helps with typing.
 */
var isTargetResolver = function (p) {
    return typeof p === "function";
};
/**
 * Check if value is a list of variant labels
 */
var isVariantLabels = function (v) { return Array.isArray(v); };
/**
 * Control animations for a single component
 *
 * @internal
 */
var VisualElementAnimationControls = /** @class */ (function () {
    function VisualElementAnimationControls(visualElement, _a) {
        var _this = this;
        var makeTargetAnimatable = _a.makeTargetAnimatable;
        /**
         * A reference to the component's latest props. We could probably ditch this in
         * favour to a reference to the `custom` prop now we don't send all props through
         * to target resolvers.
         */
        this.props = {};
        /**
         * The component's variants, as provided by `variants`
         */
        this.variants = {};
        /**
         * A set of values that we animate back to when a value is cleared of all overrides.
         */
        this.baseTarget = {};
        /**
         * A series of target overrides that we can animate to/from when overrides are set/cleared.
         */
        this.overrides = [];
        /**
         * A series of target overrides as they were originally resolved.
         */
        this.resolvedOverrides = [];
        /**
         * A Set of currently active override indexes
         */
        this.activeOverrides = new Set();
        /**
         * A Set of value keys that are currently animating.
         */
        this.isAnimating = new Set();
        /**
         * Check if the associated `VisualElement` has a key with the provided string.
         * Pre-bound to the class so we can provide directly to the `filter` in `checkForNewValues`.
         */
        this.hasValue = function (key) { return !_this.visualElement.hasValue(key); };
        this.visualElement = visualElement;
        this.makeTargetAnimatable = makeTargetAnimatable;
        this.visualElement.forEachValue(function (value, key) { return (_this.baseTarget[key] = value.get()); });
    }
    /**
     * Set the reference to the component's props.
     * @param props -
     */
    VisualElementAnimationControls.prototype.setProps = function (props) {
        this.props = props;
    };
    /**
     * Set the reference to the component's variants
     * @param variants -
     */
    VisualElementAnimationControls.prototype.setVariants = function (variants) {
        if (variants)
            this.variants = variants;
    };
    /**
     * Set the component's default transition
     * @param transition -
     */
    VisualElementAnimationControls.prototype.setDefaultTransition = function (transition) {
        if (transition)
            this.defaultTransition = transition;
    };
    /**
     * Set motion values without animation.
     *
     * @param definition -
     * @param isActive -
     */
    VisualElementAnimationControls.prototype.setValues = function (definition, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.isActive, isActive = _c === void 0 ? new Set() : _c, priority = _b.priority;
        var _d = this.resolveVariant(definition), target = _d.target, transitionEnd = _d.transitionEnd;
        target = this.transformValues(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd));
        for (var key in target) {
            if (isActive.has(key))
                return;
            isActive.add(key);
            if (target) {
                var targetValue = resolveFinalValueInKeyframes(target[key]);
                if (this.visualElement.hasValue(key)) {
                    var value = this.visualElement.getValue(key);
                    value && value.set(targetValue);
                }
                else {
                    this.visualElement.addValue(key, motionValue(targetValue));
                }
                if (!priority)
                    this.baseTarget[key] = targetValue;
            }
        }
    };
    /**
     * Allows `transformValues` to be set by a component that allows us to
     * transform the values in a given `Target`. This allows Framer Library
     * to extend Framer Motion to animate `Color` variables etc. Currently we have
     * to manually support these extended types here in Framer Motion.
     *
     * @param values -
     */
    VisualElementAnimationControls.prototype.transformValues = function (values) {
        var transformValues = this.props.transformValues;
        return transformValues ? transformValues(values) : values;
    };
    /**
     * Check a `Target` for new values we haven't animated yet, and add them
     * to the `MotionValueMap`.
     *
     * Currently there's functionality here that is DOM-specific, we should allow
     * this functionality to be injected by the factory that creates DOM-specific
     * components.
     *
     * @param target -
     */
    VisualElementAnimationControls.prototype.checkForNewValues = function (target) {
        var newValueKeys = Object.keys(target).filter(this.hasValue);
        var numNewValues = newValueKeys.length;
        if (!numNewValues)
            return;
        for (var i = 0; i < numNewValues; i++) {
            var key = newValueKeys[i];
            var targetValue = target[key];
            var value = null;
            // If this is a keyframes value, we can attempt to use the first value in the
            // array as that's going to be the first value of the animation anyway
            if (Array.isArray(targetValue)) {
                value = targetValue[0];
            }
            // If it isn't a keyframes or the first keyframes value was set as `null`, read the
            // value from the DOM. It might be worth investigating whether to check props (for SVG)
            // or props.style (for HTML) if the value exists there before attempting to read.
            if (value === null) {
                var readValue = this.visualElement.readNativeValue(key);
                value = readValue !== undefined ? readValue : target[key];
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(value !== null, "No initial value for \"" + key + "\" can be inferred. Ensure an initial value for \"" + key + "\" is defined on the component.");
            }
            if (typeof value === "string" && isNumericalString(value)) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!findValueType(value) && style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].test(targetValue)) {
                // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
                value = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].getAnimatableNone(targetValue);
            }
            this.visualElement.addValue(key, motionValue(value));
            this.baseTarget[key] = value;
        }
    };
    /**
     * Resolve a variant from its label or resolver into an actual `Target` we can animate to.
     * @param variant -
     */
    VisualElementAnimationControls.prototype.resolveVariant = function (variant, _a) {
        var custom = (_a === void 0 ? {} : _a).custom;
        if (!variant) {
            return {
                target: undefined,
                transition: undefined,
                transitionEnd: undefined,
            };
        }
        if (isTargetResolver(variant)) {
            // resolve current and velocity
            variant = variant(custom !== null && custom !== void 0 ? custom : this.props.custom, getCurrent(this.visualElement), getVelocity(this.visualElement));
        }
        var _b = variant.transition, transition = _b === void 0 ? this.defaultTransition : _b, transitionEnd = variant.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(variant, ["transition", "transitionEnd"]);
        return { transition: transition, transitionEnd: transitionEnd, target: target };
    };
    /**
     * Get the highest active override priority index
     */
    VisualElementAnimationControls.prototype.getHighestPriority = function () {
        if (!this.activeOverrides.size)
            return 0;
        return Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Array.from(this.activeOverrides)));
    };
    /**
     * Set an override. We add this layer of indirection so if, for instance, a tap gesture
     * starts and overrides a hover gesture, when we clear the tap gesture and fallback to the
     * hover gesture, if that hover gesture has changed in the meantime we can go to that rather
     * than the one that was resolved when the hover gesture animation started.
     *
     * @param definition -
     * @param overrideIndex -
     */
    VisualElementAnimationControls.prototype.setOverride = function (definition, overrideIndex) {
        this.overrides[overrideIndex] = definition;
        if (this.children) {
            this.children.forEach(function (child) {
                return child.setOverride(definition, overrideIndex);
            });
        }
    };
    /**
     * Start an override animation.
     * @param overrideIndex -
     */
    VisualElementAnimationControls.prototype.startOverride = function (overrideIndex) {
        var override = this.overrides[overrideIndex];
        if (override) {
            return this.start(override, { priority: overrideIndex });
        }
    };
    /**
     * Clear an override. We check every value we animated to in this override to see if
     * its present on any lower-priority overrides. If not, we animate it back to its base target.
     * @param overrideIndex -
     */
    VisualElementAnimationControls.prototype.clearOverride = function (overrideIndex) {
        var _this = this;
        if (this.children) {
            this.children.forEach(function (child) { return child.clearOverride(overrideIndex); });
        }
        var override = this.overrides[overrideIndex];
        if (!override)
            return;
        this.activeOverrides.delete(overrideIndex);
        var highest = this.getHighestPriority();
        this.resetIsAnimating();
        if (highest) {
            var highestOverride = this.overrides[highest];
            highestOverride && this.startOverride(highest);
        }
        // Figure out which remaining values were affected by the override and animate those
        var overrideTarget = this.resolvedOverrides[overrideIndex];
        if (!overrideTarget)
            return;
        var remainingValues = {};
        for (var key in this.baseTarget) {
            if (overrideTarget[key] !== undefined) {
                remainingValues[key] = this.baseTarget[key];
            }
        }
        this.onStart();
        this.animate(remainingValues).then(function () { return _this.onComplete(); });
    };
    /**
     * Apply a target/variant without any animation
     */
    VisualElementAnimationControls.prototype.apply = function (definition) {
        if (Array.isArray(definition)) {
            return this.applyVariantLabels(definition);
        }
        else if (typeof definition === "string") {
            return this.applyVariantLabels([definition]);
        }
        else {
            this.setValues(definition);
        }
    };
    /**
     * Apply variant labels without animation
     */
    VisualElementAnimationControls.prototype.applyVariantLabels = function (variantLabelList) {
        var _this = this;
        var isActive = new Set();
        var reversedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(variantLabelList).reverse();
        reversedList.forEach(function (key) {
            var _a = _this.resolveVariant(_this.variants[key]), target = _a.target, transitionEnd = _a.transitionEnd;
            target && _this.setValues(target, { isActive: isActive });
            transitionEnd && _this.setValues(transitionEnd, { isActive: isActive });
            if (_this.children && _this.children.size) {
                _this.children.forEach(function (child) {
                    return child.applyVariantLabels(variantLabelList);
                });
            }
        });
    };
    VisualElementAnimationControls.prototype.start = function (definition, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (opts.priority) {
            this.activeOverrides.add(opts.priority);
        }
        this.resetIsAnimating(opts.priority);
        var animation;
        if (isVariantLabels(definition)) {
            animation = this.animateVariantLabels(definition, opts);
        }
        else if (typeof definition === "string") {
            animation = this.animateVariant(definition, opts);
        }
        else {
            animation = this.animate(definition, opts);
        }
        this.onStart();
        return animation.then(function () { return _this.onComplete(); });
    };
    VisualElementAnimationControls.prototype.animate = function (animationDefinition, _a) {
        var _this = this;
        if (_a === void 0) { _a = {}; }
        var _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.priority, priority = _c === void 0 ? 0 : _c, transitionOverride = _a.transitionOverride, opts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["delay", "priority", "transitionOverride"]);
        var _d = this.resolveVariant(animationDefinition, opts), target = _d.target, transition = _d.transition, transitionEnd = _d.transitionEnd;
        if (transitionOverride) {
            transition = transitionOverride;
        }
        if (!target)
            return Promise.resolve();
        target = this.transformValues(target);
        if (transitionEnd) {
            transitionEnd = this.transformValues(transitionEnd);
        }
        this.checkForNewValues(target);
        var origin = this.transformValues(getOrigin(target, transition, this.visualElement));
        if (this.makeTargetAnimatable) {
            var animatable = this.makeTargetAnimatable(this.visualElement, target, origin, transitionEnd);
            target = animatable.target;
            transitionEnd = animatable.transitionEnd;
        }
        if (priority) {
            this.resolvedOverrides[priority] = target;
        }
        this.checkForNewValues(target);
        var animations = [];
        for (var key in target) {
            var value = this.visualElement.getValue(key);
            if (!value || !target || target[key] === undefined)
                continue;
            var valueTarget = target[key];
            if (!priority) {
                this.baseTarget[key] = resolveFinalValueInKeyframes(valueTarget);
            }
            if (this.isAnimating.has(key))
                continue;
            this.isAnimating.add(key);
            animations.push(startAnimation(key, value, valueTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delay: delay }, transition)));
        }
        var allAnimations = Promise.all(animations);
        return transitionEnd
            ? allAnimations.then(function () {
                _this.setValues(transitionEnd, { priority: priority });
            })
            : allAnimations;
    };
    VisualElementAnimationControls.prototype.animateVariantLabels = function (variantLabels, opts) {
        var _this = this;
        var animations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(variantLabels).reverse()
            .map(function (label) { return _this.animateVariant(label, opts); });
        return Promise.all(animations);
    };
    VisualElementAnimationControls.prototype.animateVariant = function (variantLabel, opts) {
        var _this = this;
        var priority = (opts && opts.priority) || 0;
        var variant = this.variants[variantLabel];
        var transition = variant
            ? this.resolveVariant(variant, opts).transition || {}
            : {};
        /**
         * If we have a variant, create a callback that runs it as an animation.
         * Otherwise, we resolve a Promise immediately for a composable no-op.
         */
        var getAnimation = variant
            ? function () { return _this.animate(variant, opts); }
            : function () { return Promise.resolve(); };
        /**
         * If we have children, create a callback that runs all their animations.
         * Otherwise, we resolve a Promise immediately for a composable no-op.
         */
        var getChildrenAnimations = this.children
            ? function (forwardDelay) {
                if (forwardDelay === void 0) { forwardDelay = 0; }
                var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a;
                return _this.animateChildren(variantLabel, delayChildren + forwardDelay, transition.staggerChildren, transition.staggerDirection, priority, opts === null || opts === void 0 ? void 0 : opts.custom);
            }
            : function () { return Promise.resolve(); };
        /**
         * If the transition explicitly defines a "when" option, we need to resolve either
         * this animation or all children animations before playing the other.
         */
        var when = transition.when;
        if (when) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(when === "beforeChildren"
                ? [getAnimation, getChildrenAnimations]
                : [getChildrenAnimations, getAnimation], 2), first = _a[0], last = _a[1];
            return first().then(last);
        }
        else {
            return Promise.all([
                getAnimation(),
                getChildrenAnimations(opts === null || opts === void 0 ? void 0 : opts.delay),
            ]);
        }
    };
    VisualElementAnimationControls.prototype.animateChildren = function (variantLabel, delayChildren, staggerChildren, staggerDirection, priority, custom) {
        if (delayChildren === void 0) { delayChildren = 0; }
        if (staggerChildren === void 0) { staggerChildren = 0; }
        if (staggerDirection === void 0) { staggerDirection = 1; }
        if (priority === void 0) { priority = 0; }
        if (!this.children) {
            return Promise.resolve();
        }
        var animations = [];
        var maxStaggerDuration = (this.children.size - 1) * staggerChildren;
        var generateStaggerDuration = staggerDirection === 1
            ? function (i) { return i * staggerChildren; }
            : function (i) { return maxStaggerDuration - i * staggerChildren; };
        Array.from(this.children).forEach(function (childControls, i) {
            var animation = childControls.animateVariant(variantLabel, {
                priority: priority,
                delay: delayChildren + generateStaggerDuration(i),
                custom: custom,
            });
            animations.push(animation);
        });
        return Promise.all(animations);
    };
    VisualElementAnimationControls.prototype.onStart = function () {
        var onAnimationStart = this.props.onAnimationStart;
        onAnimationStart && onAnimationStart();
    };
    VisualElementAnimationControls.prototype.onComplete = function () {
        var onAnimationComplete = this.props.onAnimationComplete;
        onAnimationComplete && onAnimationComplete();
    };
    VisualElementAnimationControls.prototype.checkOverrideIsAnimating = function (priority) {
        var numOverrides = this.overrides.length;
        for (var i = priority + 1; i < numOverrides; i++) {
            var resolvedOverride = this.resolvedOverrides[i];
            if (resolvedOverride) {
                for (var key in resolvedOverride) {
                    this.isAnimating.add(key);
                }
            }
        }
    };
    VisualElementAnimationControls.prototype.resetIsAnimating = function (priority) {
        if (priority === void 0) { priority = 0; }
        this.isAnimating.clear();
        // If this isn't the highest priority gesture, block the animation
        // of anything that's currently being animated
        if (priority < this.getHighestPriority()) {
            this.checkOverrideIsAnimating(priority);
        }
        if (this.children) {
            this.children.forEach(function (child) { return child.resetIsAnimating(priority); });
        }
    };
    VisualElementAnimationControls.prototype.stop = function () {
        this.visualElement.forEachValue(function (value) { return value.stop(); });
    };
    /**
     * Add the controls of a child component.
     * @param controls -
     */
    VisualElementAnimationControls.prototype.addChild = function (controls) {
        if (!this.children) {
            this.children = new Set();
        }
        this.children.add(controls);
        // We set child overrides when `setOverride` is called, but also have to do it here
        // as the first time `setOverride` is called all the children might not have been added yet.
        this.overrides.forEach(function (override, i) {
            override && controls.setOverride(override, i);
        });
    };
    VisualElementAnimationControls.prototype.removeChild = function (controls) {
        if (!this.children) {
            return;
        }
        this.children.delete(controls);
    };
    VisualElementAnimationControls.prototype.resetChildren = function () {
        if (this.children)
            this.children.clear();
    };
    return VisualElementAnimationControls;
}());
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}

/**
 * Creates an imperative set of controls to trigger animations.
 *
 * This allows a consolidated, uniform API for animations, to be triggered by other APIs like the `animate` prop, or the gesture handlers.
 *
 * @internal
 */
function useVisualElementAnimation(visualElement, props, config) {
    var subscribeToParentControls = checkShouldInheritVariant(props);
    var variants = props.variants, transition = props.transition;
    var parentControls = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).controls;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    var controls = useConstant(function () { return new VisualElementAnimationControls(visualElement, config); });
    // Reset and resubscribe children every render to ensure stagger order is correct
    if (!presenceContext || presenceContext.isPresent) {
        controls.resetChildren();
        controls.setProps(props);
        controls.setVariants(variants);
        controls.setDefaultTransition(transition);
    }
    // We have to subscribe to the parent controls within a useEffect rather than during render,
    // as
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (subscribeToParentControls && parentControls) {
            parentControls.addChild(controls);
        }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        return function () {
            // Remove reference to onAnimationComplete from controls. All the MotionValues
            // are unsubscribed from this component separately. We let animations run out
            // as they might be animating other components.
            var onAnimationComplete = props.onAnimationComplete, unmountProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["onAnimationComplete"]);
            controls.setProps(unmountProps);
            parentControls && parentControls.removeChild(controls);
        };
    }, []);
    return controls;
}

/**
 * @public
 */
var MotionConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
    transformPagePoint: function (p) { return p; },
    features: [],
});
/**
 * MotionConfig can be used in combination with the `m` component to cut bundle size
 * and dynamically load only the features you use.
 *
 * ```jsx
 * import {
 *   m as motion,
 *   AnimationFeature,
 *   MotionConfig
 * } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig features={[AnimationFeature]}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */
function MotionConfig(_a) {
    var children = _a.children, _b = _a.features, features = _b === void 0 ? [] : _b, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "features"]);
    var pluginContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext);
    var loadedFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(pluginContext.features, features);
    // We do want to rerender children when the number of loaded features changes
    var value = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return ({ features: loadedFeatures }); }, [
        loadedFeatures.length,
    ]);
    // Mutative to prevent triggering rerenders in all listening
    // components every time this component renders
    for (var key in props) {
        value[key] = props[key];
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionConfigContext.Provider, { value: value }, children));
}

/**
 * Load features via renderless components based on the provided MotionProps
 */
function useFeatures(defaultFeatures, isStatic, visualElement, controls, props, context, parentContext, shouldInheritVariant) {
    var plugins = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext);
    // If this is a static component, or we're rendering on the server, we don't load
    // any feature components
    if (isStatic || typeof window === "undefined")
        return null;
    var allFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(defaultFeatures, plugins.features);
    var numFeatures = allFeatures.length;
    var features = [];
    // Decide which features we should render and add them to the returned array
    for (var i = 0; i < numFeatures; i++) {
        var _a = allFeatures[i], shouldRender = _a.shouldRender, key = _a.key, getComponent = _a.getComponent;
        if (shouldRender(props, parentContext)) {
            var Component = getComponent(props);
            Component &&
                features.push(Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: key }, props, { localContext: context, parentContext: parentContext, visualElement: visualElement, controls: controls, inherit: shouldInheritVariant })));
        }
    }
    return features;
}

var Presence;
(function (Presence) {
    Presence[Presence["Entering"] = 0] = "Entering";
    Presence[Presence["Present"] = 1] = "Present";
    Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
var VisibilityAction;
(function (VisibilityAction) {
    VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
    VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));

/**
 * Default handlers for batching VisualElements
 */
var defaultHandler = {
    measureLayout: function (child) { return child.measureLayout(); },
    layoutReady: function (child) { return child.layoutReady(); },
};
/**
 * Sort VisualElements by tree depth, so we process the highest elements first.
 */
var sortByDepth = function (a, b) {
    return a.depth - b.depth;
};
/**
 * Create a batcher to process VisualElements
 */
function createBatcher() {
    var queue = new Set();
    var add = function (child) { return queue.add(child); };
    var flush = function (_a) {
        var _b = _a === void 0 ? defaultHandler : _a, measureLayout = _b.measureLayout, layoutReady = _b.layoutReady;
        var order = Array.from(queue).sort(sortByDepth);
        /**
         * Write: Reset any transforms on children elements so we can read their actual layout
         */
        order.forEach(function (child) { return child.resetTransform(); });
        /**
         * Read: Measure the actual layout
         */
        order.forEach(measureLayout);
        /**
         * Write: Notify the VisualElements they're ready for further write operations.
         */
        order.forEach(layoutReady);
        /**
         * After all children have started animating, ensure any Entering components are set to Present.
         * If we add deferred animations (set up all animations and then start them in two loops) this
         * could be moved to the start loop. But it needs to happen after all the animations configs
         * are generated in AnimateSharedLayout as this relies on presence data
         */
        order.forEach(function (child) {
            if (child.isPresent)
                child.presence = Presence.Present;
        });
        queue.clear();
    };
    return { add: add, flush: flush };
}
function isSharedLayout(context) {
    return !!context.forceUpdate;
}
var SharedLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(createBatcher());

var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? react__WEBPACK_IMPORTED_MODULE_5__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_5__["useEffect"];

function useSnapshotOnUnmount(visualElement) {
    var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    useIsomorphicLayoutEffect(function () { return function () {
        if (isSharedLayout(syncLayout)) {
            syncLayout.remove(visualElement);
        }
    }; }, []);
}

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(Component, _a) {
    var defaultFeatures = _a.defaultFeatures, useVisualElement = _a.useVisualElement, render = _a.render, animationControlsConfig = _a.animationControlsConfig;
    function MotionComponent(props, externalRef) {
        var parentContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext);
        var shouldInheritVariant = checkShouldInheritVariant(props);
        /**
         * If a component isStatic, we only visually update it as a
         * result of a React re-render, rather than any interactions or animations.
         * If this component or any ancestor isStatic, we disable hardware acceleration
         * and don't load any additional functionality.
         */
        var isStatic = parentContext.static || props.static || false;
        /**
         * Create a VisualElement for this component. A VisualElement provides a common
         * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
         * providing a way of rendering to these APIs outside of the React render loop
         * for more performant animations and interactions
         */
        var visualElement = useVisualElement(Component, props, parentContext.visualElement, isStatic, externalRef);
        /**
         * Scrape MotionValues from props and add/remove them to/from
         * the VisualElement as necessary.
         */
        useMotionValues(visualElement, props);
        /**
         * Create animation controls for the VisualElement. It might be
         * interesting to try and combine this with VisualElement itself in a further refactor.
         */
        var controls = useVisualElementAnimation(visualElement, props, animationControlsConfig);
        /**
         * Build the MotionContext to pass on to the next `motion` component.
         */
        var context = useMotionContext(parentContext, controls, visualElement, isStatic, props);
        /**
         * Load features as renderless components unless the component isStatic
         */
        var features = useFeatures(defaultFeatures, isStatic, visualElement, controls, props, context, parentContext, shouldInheritVariant);
        var component = render(Component, props, visualElement);
        /**
         * If this component is a child of AnimateSharedLayout, we need to snapshot the component
         * before it's unmounted. This lives here rather than in features/layout/Measure because
         * as a child component its unmount effect runs after this component has been unmounted.
         */
        useSnapshotOnUnmount(visualElement);
        // The mount order and hierarchy is specific to ensure our element ref is hydrated by the time
        // all plugins and features has to execute.
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionContext.Provider, { value: context }, component),
            features));
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(MotionComponent);
}

function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}

var isViewportScrollBlocked = false;
var isBrowser$1 = typeof window !== "undefined";
if (isBrowser$1) {
    document.addEventListener("touchmove", function (event) {
        if (isViewportScrollBlocked) {
            event.preventDefault();
        }
    }, { passive: false });
}
var blockViewportScroll = function () { return (isViewportScrollBlocked = true); };
var unblockViewportScroll = function () { return (isViewportScrollBlocked = false); };

function addDomEvent(target, eventName, handler, options) {
    if (!handler)
        return;
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}

function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    if (!eventHandler)
        return undefined;
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: isTouchEvent(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
function getViewportPointFromEvent(event) {
    return extractEventInfo(event, "client");
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    if (!handler)
        return;
    var listener = function (event) { return handler(event, extractEventInfo(event)); };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};

var isBrowser$2 = typeof window !== "undefined";
// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return isBrowser$2 && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return isBrowser$2 && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return isBrowser$2 && window.onmousedown === null;
};

var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if (supportsPointerEvents()) {
        return name;
    }
    else if (supportsTouchEvents()) {
        return touchEventNames[name];
    }
    else if (supportsMouseEvents()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}

/** @public */
var Point;
(function (Point) {
    /** @beta */
    Point.subtract = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    };
    /** @beta */
    Point.relativeTo = function (idOrElem) {
        var elem;
        var getElem = function () {
            // Caching element here could be leaky because of React lifecycle
            if (elem !== undefined)
                return elem;
            if (typeof idOrElem === "string") {
                elem = document.getElementById(idOrElem);
            }
            else {
                elem = idOrElem;
            }
            return elem;
        };
        return function (_a) {
            var x = _a.x, y = _a.y;
            var localElem = getElem();
            if (!localElem)
                return undefined;
            var rect = localElem.getBoundingClientRect();
            return {
                x: x - rect.left - window.scrollX,
                y: y - rect.top - window.scrollY,
            };
        };
    };
})(Point || (Point = {}));

/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["distance"])(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
            _this.history.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (isTouchEvent(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
        this.history = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        var removeOnPointerMove = addPointerEvent(window, "pointermove", function (event, info) { return _this.handlePointerMove(event, info); });
        var removeOnPointerUp = addPointerEvent(window, "pointerup", function (event, info) { return _this.handlePointerUp(event, info); });
        this.removeListeners = function () {
            removeOnPointerMove && removeOnPointerMove();
            removeOnPointerUp && removeOnPointerUp();
        };
    }
    PanSession.prototype.handlePointerMove = function (event, info) {
        this.lastMoveEvent = event;
        this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
        // Because Safari doesn't trigger mouseup events when it's above a `<select>`
        if (isMouseEvent(event) && event.buttons === 0) {
            this.handlePointerUp(event, info);
            return;
        }
        // Throttle mouse move event to once per frame
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.updatePoint, true);
    };
    PanSession.prototype.handlePointerUp = function (event, info) {
        this.end();
        var onEnd = this.handlers.onEnd;
        if (!onEnd)
            return;
        var panInfo = getPanInfo(transformPoint(info, this.transformPagePoint), this.history);
        onEnd && onEnd(event, panInfo);
    };
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].update(this.updatePoint);
        unblockViewportScroll();
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: Point.subtract(point, lastDevicePoint(history)),
        offset: Point.subtract(point, startDevicePoint(history)),
        velocity: getVelocity$1(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity$1(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}

/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(min, point, elastic) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(max, point, elastic) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculates a min projection point based on a pointer, pointer progress
 * within the drag target, and constraints.
 *
 * For instance if an element was 100px width, we were dragging from 0.25
 * along this axis, the pointer is at 200px, and there were no constraints,
 * we would calculate a min projection point of 175px.
 */
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
    // Calculate a min point for this axis and apply it to the current pointer
    var min = point - length * progress;
    return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])([max, min], 2), min = _a[0], max = _a[1];
    }
    return {
        min: layoutAxis.min + min,
        max: layoutAxis.min + max,
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate the an axis position based on two axes and a progress value.
 */
function calcPositionFromProgress(axis, constraints, progress) {
    var axisLength = axis.max - axis.min;
    var min = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(constraints.min, constraints.max - axisLength, progress);
    return { min: min, max: min + axisLength };
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}

var elementDragControls = new WeakMap();
/**
 *
 */
var lastPointerEvent;
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(_a) {
        var visualElement = _a.visualElement;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {};
        /**
         * @internal
         */
        this.hasMutatedConstraints = false;
        /**
         * Track the initial position of the cursor relative to the dragging element
         * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
         * an ideal bounding box for the VisualElement renderer to project into every frame.
         *
         * @internal
         */
        this.cursorProgress = {
            x: 0.5,
            y: 0.5,
        };
        // When updating _dragX, or _dragY instead of the VisualElement,
        // persist their values between drag gestures.
        this.originPoint = {};
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        this.visualElement = visualElement;
        this.visualElement.enableLayoutProjection();
        elementDragControls.set(visualElement, this);
    }
    /**
     * Instantiate a PanSession for the drag gesture
     *
     * @public
     */
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
        /**
         * If this drag session has been manually triggered by the user, it might be from an event
         * outside the draggable element. If snapToCursor is set to true, we need to measure the position
         * of the element and snap it to the cursor.
         */
        snapToCursor && this.snapToCursor(originEvent);
        var onSessionStart = function () {
            // Initiate viewport scroll blocking on touch start. This is a very aggressive approach
            // which has come out of the difficulty in us being able to do this once a scroll gesture
            // has initiated in mobile browsers. This means if there's a horizontally-scrolling carousel
            // on a page we can't let a user scroll the page itself from it. Ideally what we'd do is
            // trigger this once we've got a scroll direction determined. This approach sort-of worked
            // but if the component was dragged too far in a single frame page scrolling would initiate.
            blockViewportScroll();
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopMotion();
        };
        var onStart = function (event, info) {
            var _a, _b;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _c = _this.props, drag = _c.drag, dragPropagation = _c.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = getGlobalLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            /**
             * Record the progress of the mouse within the draggable element on each axis.
             * onPan, we're going to use this to calculate a new bounding box for the element to
             * project into. This will ensure that even if the DOM element moves via a relayout, it'll
             * stick to the correct place under the pointer.
             */
            _this.prepareBoundingBox();
            _this.visualElement.lockTargetBox();
            /**
             * Resolve the drag constraints. These are either set as top/right/bottom/left constraints
             * relative to the element's layout, or a ref to another element. Both need converting to
             * viewport coordinates.
             */
            _this.resolveDragConstraints();
            /**
             * When dragging starts, we want to find where the cursor is relative to the bounding box
             * of the element. Every frame, we calculate a new bounding box using this relative position
             * and let the visualElement renderer figure out how to reproject the element into this bounding
             * box.
             *
             * By doing it this way, rather than applying an x/y transform directly to the element,
             * we can ensure the component always visually sticks to the cursor as we'd expect, even
             * if the DOM element itself changes layout as a result of React updates the user might
             * make based on the drag position.
             */
            var point = getViewportPointFromEvent(event).point;
            eachAxis(function (axis) {
                var _a = _this.visualElement.targetBox[axis], min = _a.min, max = _a.max;
                _this.cursorProgress[axis] = cursorProgress
                    ? cursorProgress[axis]
                    : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(min, max, point[axis]);
                /**
                 * If we have external drag MotionValues, record their origin point. On pointermove
                 * we'll apply the pan gesture offset directly to this value.
                 */
                var axisValue = _this.getAxisMotionValue(axis);
                if (axisValue) {
                    _this.originPoint[axis] = axisValue.get();
                }
            });
            // Set current drag status
            _this.isDragging = true;
            _this.currentDirection = null;
            // Fire onDragStart event
            (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
        };
        var onMove = function (event, info) {
            var _a, _b, _c, _d;
            var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", event, offset);
            _this.updateAxis("y", event, offset);
            // Fire onDrag event
            (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
            // Update the last pointer event
            lastPointerEvent = event;
        };
        var onEnd = function (event, info) { return _this.stop(event, info); };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    /**
     * Ensure the component's layout and target bounding boxes are up-to-date.
     */
    VisualElementDragControls.prototype.prepareBoundingBox = function () {
        var element = this.visualElement.getInstance();
        var transform = element.style.transform;
        this.visualElement.resetTransform();
        this.visualElement.measureLayout();
        element.style.transform = transform;
        this.visualElement.rebaseTargetBox(true);
    };
    VisualElementDragControls.prototype.resolveDragConstraints = function () {
        var _this = this;
        var dragConstraints = this.props.dragConstraints;
        if (dragConstraints) {
            this.constraints = isRefObject(dragConstraints)
                ? this.resolveRefConstraints(this.visualElement.box, dragConstraints)
                : calcRelativeConstraints(this.visualElement.box, dragConstraints);
        }
        else {
            this.constraints = false;
        }
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (this.constraints && !this.hasMutatedConstraints) {
            eachAxis(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = rebaseAxisConstraints(_this.visualElement.box[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
        var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
        var constraintsElement = constraints.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
        var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.cancelDrag = function () {
        unblockViewportScroll();
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var _a;
        this.visualElement.unlockTargetBox();
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var _b = this.props, dragMomentum = _b.dragMomentum, dragElastic = _b.dragElastic, onDragEnd = _b.onDragEnd;
        if (dragMomentum || dragElastic) {
            var velocity = info.velocity;
            this.animateDragEnd(velocity);
        }
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
    };
    VisualElementDragControls.prototype.snapToCursor = function (event) {
        var _this = this;
        this.prepareBoundingBox();
        eachAxis(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var point = getViewportPointFromEvent(event).point;
                var box = _this.visualElement.box;
                var length_1 = box[axis].max - box[axis].min;
                var center = box[axis].min + length_1 / 2;
                var offset = point[axis] - center;
                _this.originPoint[axis] = point[axis];
                axisValue.set(offset);
            }
            else {
                _this.cursorProgress[axis] = 0.5;
                _this.updateVisualElementAxis(axis, event);
            }
        });
    };
    /**
     * Update the specified axis with the latest pointer information.
     */
    VisualElementDragControls.prototype.updateAxis = function (axis, event, offset) {
        var drag = this.props.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection))
            return;
        return this.getAxisMotionValue(axis)
            ? this.updateAxisMotionValue(axis, offset)
            : this.updateVisualElementAxis(axis, event);
    };
    VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!offset || !axisValue)
            return;
        var dragElastic = this.props.dragElastic;
        var nextValue = this.originPoint[axis] + offset[axis];
        var update = this.constraints
            ? applyConstraints(nextValue, this.constraints[axis], dragElastic)
            : nextValue;
        axisValue.set(update);
    };
    VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, event) {
        var _a;
        var dragElastic = this.props.dragElastic;
        // Get the actual layout bounding box of the element
        var axisLayout = this.visualElement.box[axis];
        // Calculate its current length. In the future we might want to lerp this to animate
        // between lengths if the layout changes as we change the DOM
        var axisLength = axisLayout.max - axisLayout.min;
        // Get the initial progress that the pointer sat on this axis on gesture start.
        var axisProgress = this.cursorProgress[axis];
        var point = getViewportPointFromEvent(event).point;
        // Calculate a new min point based on the latest pointer position, constraints and elastic
        var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], dragElastic);
        // Update the axis viewport target with this new min and the length
        this.visualElement.setAxisTarget(axis, min, min + axisLength);
    };
    VisualElementDragControls.prototype.updateProps = function (_a) {
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? 0.35 : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - If the component will perform layout animations, we output the gesture to the component's
     *      visual bounding box
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
        var dragKey = "_drag" + axis.toUpperCase();
        if (this.props[dragKey]) {
            return this.props[dragKey];
        }
        else if (!layout && layoutId === undefined) {
            return this.visualElement.getValue(axis, 0);
        }
    };
    VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
        var momentumAnimations = eachAxis(function (axis) {
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = _this.constraints ? _this.constraints[axis] : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.getAxisMotionValue(axis)
                ? _this.startAxisValueAnimation(axis, inertia)
                : _this.visualElement.startLayoutAxisAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            var _a, _b;
            (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    };
    VisualElementDragControls.prototype.stopMotion = function () {
        var _this = this;
        eachAxis(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            axisValue
                ? axisValue.stop()
                : _this.visualElement.stopLayoutAnimation();
        });
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!axisValue)
            return;
        var currentValue = axisValue.get();
        axisValue.set(currentValue);
        axisValue.set(currentValue); // Set twice to hard-reset velocity
        return startAnimation(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
        if (!isRefObject(dragConstraints) || !this.constraintsBox)
            return;
        // Stop any current animations as there can be some visual glitching if we resize mid animation
        this.stopMotion();
        // Record the relative progress of the targetBox relative to the constraintsBox
        var boxProgress = { x: 0, y: 0 };
        eachAxis(function (axis) {
            boxProgress[axis] = calcOrigin(_this.visualElement.targetBox[axis], _this.constraintsBox[axis]);
        });
        /**
         * For each axis, calculate the current progress of the layout axis within the constraints.
         * Then, using the latest layout and constraints measurements, reposition the new layout axis
         * proportionally within the constraints.
         */
        this.prepareBoundingBox();
        this.resolveDragConstraints();
        eachAxis(function (axis) {
            if (!shouldDrag(axis, drag, null))
                return;
            // Calculate the position of the targetBox relative to the constraintsBox using the
            // previously calculated progress
            var _a = calcPositionFromProgress(_this.visualElement.targetBox[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
            _this.visualElement.setAxisTarget(axis, min, max);
        });
    };
    VisualElementDragControls.prototype.mount = function (visualElement) {
        var _this = this;
        var element = visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = addDomEvent(window, "resize", function () {
            _this.scalePoint();
        });
        /**
         * Ensure drag constraints are resolved correctly relative to the dragging element
         * whenever its layout changes.
         */
        var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
            if (_this.isDragging)
                _this.resolveDragConstraints();
        });
        /**
         * If the previous component with this same layoutId was dragging at the time
         * it was unmounted, we want to continue the same gesture on this component.
         */
        var prevSnapshot = visualElement.prevSnapshot;
        (prevSnapshot === null || prevSnapshot === void 0 ? void 0 : prevSnapshot.isDragging) &&
            this.start(lastPointerEvent, {
                cursorProgress: prevSnapshot.cursorProgress,
            });
        /**
         * Return a function that will teardown the drag gesture
         */
        return function () {
            stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
            stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
            stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
            _this.cancelDrag();
        };
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}

/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props, visualElement) {
    var groupDragControls = props.dragControls;
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext).transformPagePoint;
    var dragControls = useConstant(function () {
        return new VisualElementDragControls({
            visualElement: visualElement,
        });
    });
    dragControls.updateProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { transformPagePoint: transformPagePoint }));
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    // Mount the drag controls with the visualElement
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return dragControls.mount(visualElement); }, []);
}

var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };

var Component = makeRenderlessComponent(function (_a) {
    var visualElement = _a.visualElement, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["visualElement"]);
    return useDrag(props, visualElement);
});
/**
 * @public
 */
var Drag = {
    key: "drag",
    shouldRender: function (props) { return !!props.drag; },
    getComponent: function () { return Component; },
};

function useUnmountEffect(callback) {
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return function () { return callback(); }; }, []);
}

/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a, ref) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    usePointerEvent(ref, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function () { return panSession.current && panSession.current.end(); });
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

var order$1 = ["whileHover", "whileTap", "whileDrag"];
var getGesturePriority = function (gesture) {
    return order$1.indexOf(gesture) + 1;
};

var tapGesturePriority = getGesturePriority("whileTap");
/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a, ref) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, controls = _a.controls;
    var hasTapListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isTapping = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    var cancelPointerEventListener = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    function removePointerUp() {
        cancelPointerEventListener.current &&
            cancelPointerEventListener.current();
        cancelPointerEventListener.current = null;
    }
    if (whileTap && controls) {
        controls.setOverride(whileTap, tapGesturePriority);
    }
    // We load this event handler into a ref so we can later refer to
    // onPointerUp.current which will always have reference to the latest props
    var onPointerUp = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    onPointerUp.current = function (event, info) {
        var element = ref.current;
        removePointerUp();
        if (!isTapping.current || !element)
            return;
        isTapping.current = false;
        if (controls && whileTap) {
            controls.clearOverride(tapGesturePriority);
        }
        // Check the gesture lock - if we get it, it means no drag gesture is active
        // and we can safely fire the tap gesture.
        var openGestureLock = getGlobalLock(true);
        if (!openGestureLock)
            return;
        openGestureLock();
        if (!isNodeOrChild(element, event.target)) {
            onTapCancel && onTapCancel(event, info);
        }
        else {
            onTap && onTap(event, info);
        }
    };
    function onPointerDown(event, info) {
        removePointerUp();
        cancelPointerEventListener.current = addPointerEvent(window, "pointerup", function (event, info) { return onPointerUp.current(event, info); });
        var element = ref.current;
        if (!element || isTapping.current)
            return;
        isTapping.current = true;
        onTapStart && onTapStart(event, info);
        if (controls && whileTap) {
            controls.startOverride(tapGesturePriority);
        }
    }
    usePointerEvent(ref, "pointerdown", hasTapListeners ? onPointerDown : undefined);
    useUnmountEffect(removePointerUp);
}

var hoverPriority = getGesturePriority("whileHover");
var filterTouch = function (listener) { return function (event, info) {
    if (isMouseEvent(event))
        listener(event, info);
}; };
/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useHoverGesture(_a, ref) {
    var whileHover = _a.whileHover, onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, controls = _a.controls;
    if (whileHover && controls) {
        controls.setOverride(whileHover, hoverPriority);
    }
    usePointerEvent(ref, "pointerenter", filterTouch(function (event, info) {
        if (onHoverStart)
            onHoverStart(event, info);
        if (whileHover && controls) {
            controls.startOverride(hoverPriority);
        }
    }));
    usePointerEvent(ref, "pointerleave", filterTouch(function (event, info) {
        if (onHoverEnd)
            onHoverEnd(event, info);
        if (whileHover && controls) {
            controls.clearOverride(hoverPriority);
        }
    }));
}

/**
 * Add pan and tap gesture recognition to an element.
 *
 * @param props - Gesture event handlers
 * @param ref - React `ref` containing a DOM `Element`
 * @public
 */
function useGestures(props, ref) {
    usePanGesture(props, ref);
    useTapGesture(props, ref);
    useHoverGesture(props, ref);
}

var gestureProps = [
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileTap",
    "whileHover",
    "onHoverStart",
    "onHoverEnd",
];
var GestureComponent = makeRenderlessComponent(function (_a) {
    var visualElement = _a.visualElement, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["visualElement"]);
    useGestures(props, visualElement);
});
/**
 * @public
 */
var Gestures = {
    key: "gestures",
    shouldRender: function (props) {
        return gestureProps.some(function (key) { return props.hasOwnProperty(key); });
    },
    getComponent: function () { return GestureComponent; },
};

var ExitComponent = makeRenderlessComponent(function (props) {
    var animate = props.animate, controls = props.controls, exit = props.exit;
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(usePresence(), 2), isPresent = _a[0], onExitComplete = _a[1];
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    var isPlayingExitAnimation = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    var custom = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== undefined
        ? presenceContext.custom
        : props.custom;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (!isPresent) {
            if (!isPlayingExitAnimation.current && exit) {
                controls.start(exit, { custom: custom }).then(onExitComplete);
            }
            isPlayingExitAnimation.current = true;
        }
        else if (isPlayingExitAnimation.current &&
            animate &&
            typeof animate !== "boolean" &&
            !(animate instanceof AnimationControls)) {
            controls.start(animate);
        }
        if (isPresent) {
            isPlayingExitAnimation.current = false;
        }
    }, [animate, controls, custom, exit, isPresent, onExitComplete, props]);
});
/**
 * @public
 */
var Exit = {
    key: "exit",
    shouldRender: function (props) { return !!props.exit && !checkShouldInheritVariant(props); },
    getComponent: function () { return ExitComponent; },
};

var AnimatePropType;
(function (AnimatePropType) {
    AnimatePropType["Target"] = "Target";
    AnimatePropType["VariantLabel"] = "VariantLabel";
    AnimatePropType["AnimationSubscription"] = "AnimationSubscription";
})(AnimatePropType || (AnimatePropType = {}));

function shallowCompare(next, prev) {
    if (prev === null)
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

var hasUpdated = function (prev, next) {
    return (next !== undefined &&
        (Array.isArray(prev) && Array.isArray(next)
            ? !shallowCompare(next, prev)
            : prev !== next));
};
function targetWithoutTransition(_a, mergeTransitionEnd) {
    if (mergeTransitionEnd === void 0) { mergeTransitionEnd = false; }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
    return mergeTransitionEnd
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd)
        : target;
}
/**
 * Handle the `animate` prop when its an object of values, ie:
 *
 * ```jsx
 * <motion.div animate={{ opacity: 1 }} />
 * ```
 *
 * @internalremarks
 * It might be worth consolidating this with `use-variants`
 *
 * ```jsx
 * <motion.div animate="visible" />
 * ```
 *
 * @param target
 * @param controls
 * @param values
 * @param transition
 *
 * @internal
 */
function useAnimateProp(targetAndTransition, controls, visualElement, defaultTransition) {
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    var prevValues = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    if (!prevValues.current) {
        prevValues.current = targetWithoutTransition(targetAndTransition, true);
    }
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var targetToAnimate = {};
        // These are the values we're actually animating
        var animatingTarget = targetWithoutTransition(targetAndTransition);
        // This is the target as it'll be once transitionEnd values are applied
        var finalTarget = targetWithoutTransition(targetAndTransition, true);
        // Detect which values have changed between renders
        for (var key in animatingTarget) {
            // This value should animate on mount if this value doesn't already exist (wasn't
            // defined in `style` or `initial`) or if it does exist and it's already changed.
            var shouldAnimateOnMount = isInitialRender.current &&
                (!visualElement.hasValue(key) ||
                    visualElement.getValue(key).get() !== finalTarget[key]);
            // If this value has updated between renders or it's we're animating this value on mount,
            // add it to the animate target.
            var isValidValue = finalTarget[key] !== null;
            var valueHasUpdated = hasUpdated(prevValues.current[key], finalTarget[key]);
            if (isValidValue && (valueHasUpdated || shouldAnimateOnMount)) {
                targetToAnimate[key] = animatingTarget[key];
            }
        }
        isInitialRender.current = false;
        prevValues.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevValues.current), finalTarget);
        if (Object.keys(targetToAnimate).length) {
            controls.start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, targetToAnimate), { transition: targetAndTransition.transition || defaultTransition, transitionEnd: targetAndTransition.transitionEnd }));
        }
    }, [targetAndTransition]);
}

var labelsToArray = function (label) {
    if (!label) {
        return [];
    }
    if (Array.isArray(label)) {
        return label;
    }
    return [label];
};
var resolveVariantLabels = function (variant) {
    var unresolvedVariant = variant instanceof MotionValue ? variant.get() : variant;
    return Array.from(new Set(labelsToArray(unresolvedVariant)));
};
/**
 * Hooks in React sometimes accept a dependency array as their final argument. (ie useEffect/useMemo)
 * When values in this array change, React re-runs the dependency. However if the array
 * contains a variable number of items, React throws an error.
 */
var asDependencyList = function (list) { return [
    list.join(","),
]; };

var hasVariantChanged = function (oldVariant, newVariant) {
    return oldVariant.join(",") !== newVariant.join(",");
};
/**
 * Handle variants and the `animate` prop when its set as variant labels.
 *
 * @param initial - Initial variant(s)
 * @param animate - Variant(s) to animate to
 * @param inherit - `true` is inheriting animations from parent
 * @param controls - Animation controls
 *
 * @internal
 */
function useVariants(initial, animate, inherit, controls) {
    var targetVariants = resolveVariantLabels(animate);
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext);
    var parentAlreadyMounted = context.hasMounted && context.hasMounted.current;
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var shouldAnimate = false;
        if (inherit) {
            // If we're inheriting variant changes and the parent has already
            // mounted when this component loads, we need to manually trigger
            // this animation.
            shouldAnimate = !!parentAlreadyMounted;
            targetVariants = resolveVariantLabels(context.animate);
        }
        else {
            shouldAnimate =
                hasMounted.current ||
                    hasVariantChanged(resolveVariantLabels(initial), targetVariants);
        }
        shouldAnimate && controls.start(targetVariants);
        hasMounted.current = true;
    }, asDependencyList(targetVariants));
}

/**
 * `useAnimationGroupSubscription` allows a component to subscribe to an
 * externally-created `AnimationControls`, created by the `useAnimation` hook.
 *
 * @param animation
 * @param controls
 *
 * @internal
 */
function useAnimationGroupSubscription(animation, controls) {
    var unsubscribe = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return animation.subscribe(controls); }, [
        animation,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return function () {
        unsubscribe && unsubscribe();
    }; }, [unsubscribe]);
}

var _a, _b;
var AnimatePropComponents = (_a = {},
    _a[AnimatePropType.Target] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls, visualElement = _a.visualElement, transition = _a.transition;
        return useAnimateProp(animate, controls, visualElement, transition);
    }),
    _a[AnimatePropType.VariantLabel] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, _b = _a.inherit, inherit = _b === void 0 ? true : _b, controls = _a.controls, initial = _a.initial;
        return useVariants(initial, animate, inherit, controls);
    }),
    _a[AnimatePropType.AnimationSubscription] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls;
        return useAnimationGroupSubscription(animate, controls);
    }),
    _a);
var isVariantLabel$1 = function (prop) {
    return Array.isArray(prop) || typeof prop === "string";
};
var isAnimationSubscription = function (_a) {
    var animate = _a.animate;
    return animate instanceof AnimationControls;
};
var animationProps = ["initial", "animate", "whileTap", "whileHover"];
var animatePropTypeTests = (_b = {},
    _b[AnimatePropType.Target] = function (props) {
        return (props.animate !== undefined &&
            !isVariantLabel$1(props.animate) &&
            !isAnimationSubscription(props));
    },
    _b[AnimatePropType.VariantLabel] = function (props) {
        return (props.variants !== undefined ||
            animationProps.some(function (key) { return typeof props[key] === "string"; }));
    },
    _b[AnimatePropType.AnimationSubscription] = isAnimationSubscription,
    _b);
var getAnimationComponent = function (props) {
    var animatePropType = undefined;
    for (var key in AnimatePropType) {
        if (animatePropTypeTests[key](props)) {
            animatePropType = key;
        }
    }
    return animatePropType ? AnimatePropComponents[animatePropType] : undefined;
};
/**
 * @public
 */
var Animation = {
    key: "animation",
    shouldRender: function () { return true; },
    getComponent: getAnimationComponent,
};

function tweenAxis(target, prev, next, p) {
    target.min = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(prev.min, next.min, p);
    target.max = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(prev.max, next.max, p);
}

var progressTarget = 1000;
var Animate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Animate, _super);
    function Animate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameTarget = {
            x: { min: 0, max: 0 },
            y: { min: 0, max: 0 },
        };
        _this.stopAxisAnimation = {
            x: undefined,
            y: undefined,
        };
        _this.animate = function (target, origin, _a) {
            if (_a === void 0) { _a = {}; }
            var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, shouldStackAnimate = _a.shouldStackAnimate, config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate"]);
            var _b = _this.props, visualElement = _b.visualElement, layout = _b.layout;
            /**
             * Early return if we've been instructed not to animate this render.
             */
            if (shouldStackAnimate === false)
                return _this.safeToRemove();
            /**
             * Allow the measured origin (prev bounding box) and target (actual layout) to be
             * overridden by the provided config.
             */
            origin = originBox || origin;
            target = targetBox || target;
            var boxHasMoved = hasMoved(origin, target);
            var animations = eachAxis(function (axis) {
                /**
                 * If layout is set to "position", we can resize the origin box based on the target
                 * box and only animate its position.
                 */
                if (layout === "position") {
                    var targetLength = target[axis].max - target[axis].min;
                    origin[axis].max = origin[axis].min + targetLength;
                }
                if (visualElement.isTargetBoxLocked) {
                    return;
                }
                else if (visibilityAction !== undefined) {
                    // If we're meant to show/hide the visualElement, do so
                    visibilityAction === VisibilityAction.Hide
                        ? visualElement.hide()
                        : visualElement.show();
                }
                else if (boxHasMoved) {
                    // If the box has moved, animate between it's current visual state and its
                    // final state
                    return _this.animateAxis(axis, target[axis], origin[axis], config);
                }
                else {
                    // If the box has remained in the same place, immediately set the axis target
                    // to the final desired state
                    return visualElement.setAxisTarget(axis, target[axis].min, target[axis].max);
                }
            });
            // Force a render to ensure there's no flash of uncorrected bounding box.
            visualElement.render();
            /**
             * If this visualElement isn't present (ie it's been removed from the tree by the user but
             * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
             * have successfully finished.
             */
            return Promise.all(animations).then(function () {
                var _a, _b;
                (_b = (_a = _this.props).onLayoutAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
                if (visualElement.isPresent) {
                    visualElement.presence = Presence.Present;
                }
                else {
                    _this.safeToRemove();
                }
            });
        };
        return _this;
    }
    Animate.prototype.componentDidMount = function () {
        var visualElement = this.props.visualElement;
        visualElement.enableLayoutProjection();
        this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
    };
    Animate.prototype.componentWillUnmount = function () {
        var _this = this;
        this.unsubLayoutReady();
        eachAxis(function (axis) { var _a, _b; return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a); });
    };
    /**
     * TODO: This manually performs animations on the visualElement's layout progress
     * values. It'd be preferable to amend the HTMLVisualElement.startLayoutAxisAnimation
     * API to accept more custom animations like this.
     */
    Animate.prototype.animateAxis = function (axis, target, origin, _a) {
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, transition = _d.transition, crossfadeOpacity = _d.crossfadeOpacity;
        (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
        var visualElement = this.props.visualElement;
        var frameTarget = this.frameTarget[axis];
        var layoutProgress = visualElement.axisProgress[axis];
        /**
         * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
         * be re-incoporated into a subsequent spring animation.
         */
        layoutProgress.clearListeners();
        layoutProgress.set(0);
        layoutProgress.set(0);
        /**
         * If this is a crossfade animation, create a function that updates both the opacity of this component
         * and the one being crossfaded out.
         */
        var crossfade;
        if (crossfadeOpacity) {
            crossfade = this.createCrossfadeAnimation(crossfadeOpacity);
            visualElement.show();
        }
        /**
         * Create an animation function to run once per frame. This will tween the visual bounding box from
         * origin to target using the latest progress value.
         */
        var frame = function () {
            // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
            var p = layoutProgress.get() / progressTarget;
            // Tween the axis and update the visualElement with the latest values
            tweenAxis(frameTarget, origin, target, p);
            visualElement.setAxisTarget(axis, frameTarget.min, frameTarget.max);
            // If this is a crossfade animation, update both elements.
            crossfade === null || crossfade === void 0 ? void 0 : crossfade(p);
        };
        // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
        frame();
        // Ensure that the layout delta is updated for this frame.
        visualElement.updateLayoutDelta();
        // Create a function to stop animation on this specific axis
        var unsubscribeProgress = layoutProgress.onChange(frame);
        // Start the animation on this axis
        var animation = startAnimation(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, transition || this.props.transition || defaultTransition).then(unsubscribeProgress);
        this.stopAxisAnimation[axis] = function () {
            layoutProgress.stop();
            unsubscribeProgress();
        };
        return animation;
    };
    Animate.prototype.createCrossfadeAnimation = function (crossfadeOpacity) {
        var visualElement = this.props.visualElement;
        var opacity = visualElement.getValue("opacity", 0);
        return function (p) {
            opacity.set(easeCrossfadeIn(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(0, 1, p)));
            crossfadeOpacity.set(easeCrossfadeOut(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(1, 0, p)));
        };
    };
    Animate.prototype.safeToRemove = function () {
        var _a, _b;
        (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Animate.prototype.render = function () {
        return null;
    };
    return Animate;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));
function AnimateLayoutContextProvider(props) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(usePresence(), 2), safeToRemove = _a[1];
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Animate, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { safeToRemove: safeToRemove }));
}
function hasMoved(a, b) {
    return hasAxisMoved(a.x, b.x) || hasAxisMoved(a.y, b.y);
}
function hasAxisMoved(a, b) {
    return a.min !== b.min || a.max !== b.max;
}
var defaultTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function compress(min, max, easing) {
    return function (p) {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(min, max, p));
    };
}
var easeCrossfadeIn = compress(0, 0.5, popmotion__WEBPACK_IMPORTED_MODULE_2__["circOut"]);
var easeCrossfadeOut = compress(0.5, 0.95, popmotion__WEBPACK_IMPORTED_MODULE_2__["linear"]);
/**
 * @public
 */
var AnimateLayout = {
    key: "animate-layout",
    shouldRender: function (props) { return !!props.layout || !!props.layoutId; },
    getComponent: function () { return AnimateLayoutContextProvider; },
};

/**
 * This component is responsible for scheduling the measuring of the motion component
 */
var Measure = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Measure, _super);
    function Measure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * If this is a child of a SyncContext, register the VisualElement with it on mount.
     */
    Measure.prototype.componentDidMount = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        isSharedLayout(syncLayout) && syncLayout.register(visualElement);
    };
    /**
     * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
     * handle the snapshotting.
     *
     * If it is stand-alone component, add it to the batcher.
     */
    Measure.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (isSharedLayout(syncLayout)) {
            syncLayout.syncUpdate();
        }
        else {
            visualElement.snapshotBoundingBox();
            syncLayout.add(visualElement);
        }
        return null;
    };
    Measure.prototype.componentDidUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (!isSharedLayout(syncLayout))
            syncLayout.flush();
        /**
         * If this axis isn't animating as a result of this render we want to reset the targetBox
         * to the measured box
         */
        visualElement.rebaseTargetBox();
    };
    Measure.prototype.render = function () {
        return null;
    };
    return Measure;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component));
function MeasureContextProvider(props) {
    var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Measure, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { syncLayout: syncLayout }));
}
var MeasureLayout = {
    key: "measure-layout",
    shouldRender: function (props) {
        return !!props.drag || !!props.layout || !!props.layoutId;
    },
    getComponent: function () { return MeasureContextProvider; },
};

/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion.custom(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(defaultFeatures) {
    var config = {
        defaultFeatures: defaultFeatures,
        useVisualElement: useDomVisualElement,
        render: render,
        animationControlsConfig: {
            makeTargetAnimatable: parseDomVariant,
        },
    };
    function custom(Component) {
        return createMotionComponent(Component, config);
    }
    var componentCache = new Map();
    function get(target, key) {
        if (key === "custom")
            return target.custom;
        if (!componentCache.has(key)) {
            componentCache.set(key, createMotionComponent(key, config));
        }
        return componentCache.get(key);
    }
    return new Proxy({ custom: custom }, { get: get });
}
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ createMotionProxy([
    MeasureLayout,
    Animation,
    Drag,
    Gestures,
    Exit,
    AnimateLayout,
]);
/**
 * @public
 */
var m = /*@__PURE__*/ createMotionProxy([MeasureLayout]);

function useForceUpdate() {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () { return setForcedRenderCount(forcedRenderCount + 1); }, [
        forcedRenderCount,
    ]);
}

var presenceId = 0;
function getPresenceId() {
    var id = presenceId;
    presenceId++;
    return id;
}
var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
    var presenceChildren = useConstant(newChildrenMap);
    var id = useConstant(getPresenceId);
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        return {
            id: id,
            initial: initial,
            isPresent: isPresent,
            custom: custom,
            onExitComplete: function (childId) {
                presenceChildren.set(childId, true);
                var allComplete = true;
                presenceChildren.forEach(function (isComplete) {
                    if (!isComplete)
                        allComplete = false;
                });
                allComplete && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
            },
            register: function (childId) {
                presenceChildren.set(childId, false);
                return function () { return presenceChildren.delete(childId); };
            },
        };
    }, 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        presenceChildren.forEach(function (_, key) { return presenceChildren.set(key, false); });
    }, [isPresent]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}

function getChildKey(child) {
    return child.key || "";
}
function updateChildLookup(children, allChildren) {
    var seenChildren =  true ? new Set() : undefined;
    children.forEach(function (child) {
        var key = getChildKey(child);
        if ( true && seenChildren) {
            if (seenChildren.has(key)) {
                console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
            }
            seenChildren.add(key);
        }
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_5__["Children"].forEach(children, function (child) {
        if (Object(react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"])(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * @library
 *
 * Any `Frame` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { Frame, AnimatePresence } from 'framer'
 *
 * // As items are added and removed from `items`
 * export function Items({ items }) {
 *   return (
 *     <AnimatePresence>
 *       {items.map(item => (
 *         <Frame
 *           key={item.id}
 *           initial={{ opacity: 0 }}
 *           animate={{ opacity: 1 }}
 *           exit={{ opacity: 0 }}
 *         />
 *       ))}
 *     </AnimatePresence>
 *   )
 * }
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * @motion
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    var forceRender = useForceUpdate();
    var layoutContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    if (isSharedLayout(layoutContext)) {
        forceRender = layoutContext.forceUpdate;
    }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(filteredChildren);
    // A lookup table to quickly reference components by key
    var allChildren = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(new Map())
        .current;
    // A living record of all currently exiting components.
    var exiting = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(new Set()).current;
    updateChildLookup(filteredChildren, allChildren);
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    if (isInitialRender.current) {
        isInitialRender.current = false;
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, filteredChildren.map(function (child) { return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    var childrenToRender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(filteredChildren);
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
        else {
            // In case this key has re-entered, remove from the exiting list
            exiting.delete(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (presentChild) { return presentChild.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    presentChildren.current = childrenToRender;
    if ( true &&
        exitBeforeEnter &&
        childrenToRender.length > 1) {
        console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(child); })));
};

function createSwitchAnimation(child, stack) {
    if (stack && child !== stack.lead) {
        return { visibilityAction: VisibilityAction.Hide };
    }
    else if (stack &&
        child.presence !== Presence.Entering &&
        child === stack.lead &&
        stack.lead !== stack.prevLead) {
        return { visibilityAction: VisibilityAction.Show };
    }
    var originBox;
    var targetBox;
    if (child.presence === Presence.Entering) {
        originBox = stack === null || stack === void 0 ? void 0 : stack.getFollowOrigin();
    }
    else if (child.presence === Presence.Exiting) {
        targetBox = stack === null || stack === void 0 ? void 0 : stack.getFollowTarget();
    }
    return { originBox: originBox, targetBox: targetBox };
}
function createCrossfadeAnimation(child, stack) {
    var _a, _b, _c;
    var config = {};
    var stackLead = stack && stack.lead;
    var stackLeadPresence = stackLead === null || stackLead === void 0 ? void 0 : stackLead.presence;
    if (stack && child === stackLead) {
        if (child.presence === Presence.Entering) {
            config.originBox = stack.getFollowOrigin();
        }
        else if (child.presence === Presence.Exiting) {
            config.targetBox = stack.getFollowTarget();
        }
    }
    else if (stack && child === stack.follow) {
        config.transition = stack.getLeadTransition();
        if (stackLeadPresence === Presence.Entering) {
            config.targetBox = stack.getLeadTarget();
        }
        else if (stackLeadPresence === Presence.Exiting) {
            config.originBox = stack.getLeadOrigin();
        }
    }
    // If neither the lead or follow component is the root child of AnimatePresence,
    // don't handle crossfade animations
    if (!((_a = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _a === void 0 ? void 0 : _a.isPresenceRoot) && !(stackLead === null || stackLead === void 0 ? void 0 : stackLead.isPresenceRoot)) {
        return config;
    }
    if (!stack || child === stackLead) {
        if (child.presence === Presence.Entering) {
            config.crossfadeOpacity = (_b = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _b === void 0 ? void 0 : _b.getValue("opacity", 0);
        }
    }
    else if (stack && child === stack.follow) {
        if (!stackLead || stackLeadPresence === Presence.Entering) ;
        else if (stackLeadPresence === Presence.Exiting) {
            config.crossfadeOpacity = (_c = stack === null || stack === void 0 ? void 0 : stack.lead) === null || _c === void 0 ? void 0 : _c.getValue("opacity", 1);
        }
    }
    else {
        config.visibilityAction = VisibilityAction.Hide;
    }
    return config;
}

/**
 * For each layout animation, we want to identify two components
 * within a stack that will serve as the "lead" and "follow" components.
 *
 * In the switch animation, the lead component performs the entire animation.
 * It uses the follow bounding box to animate out from and back to. The follow
 * component is hidden.
 *
 * In the crossfade animation, both the lead and follow components perform
 * the entire animation, animating from the follow origin bounding box to the lead
 * target bounding box.
 *
 * Generalising a stack as First In Last Out, *searching from the end* we can
 * generally consider the lead component to be:
 *  - If the last child is present, the last child
 *  - If the last child is exiting, the last *encountered* exiting component
 */
function findLeadAndFollow(stack, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), prevLead = _b[0], prevFollow = _b[1];
    var lead = undefined;
    var leadIndex = 0;
    var follow = undefined;
    // Find the lead child first
    var numInStack = stack.length;
    var lastIsPresent = false;
    for (var i = numInStack - 1; i >= 0; i--) {
        var child = stack[i];
        var isLastInStack = i === numInStack - 1;
        if (isLastInStack)
            lastIsPresent = child.isPresent;
        if (lastIsPresent) {
            lead = child;
        }
        else {
            // If the child before this will be present, make this the
            // lead.
            var prev = stack[i - 1];
            if (prev && prev.isPresent)
                lead = child;
        }
        if (lead) {
            leadIndex = i;
            break;
        }
    }
    if (!lead)
        lead = stack[0];
    // Find the follow child
    follow = stack[leadIndex - 1];
    // If the lead component is exiting, find the closest follow
    // present component
    if (lead) {
        for (var i = leadIndex - 1; i >= 0; i--) {
            var child = stack[i];
            if (child.isPresent) {
                follow = child;
                break;
            }
        }
    }
    // If the lead has changed and the previous lead still exists in the
    // stack, set it to the previous lead. This allows us to differentiate between
    // a, b, c(exit) -> a, b(exit), c(exit)
    // and
    // a, b(exit), c -> a, b(exit), c(exit)
    if (lead !== prevLead &&
        !lastIsPresent &&
        follow === prevFollow &&
        stack.find(function (stackChild) { return stackChild === prevLead; })) {
        lead = prevLead;
    }
    return [lead, follow];
}
var LayoutStack = /** @class */ (function () {
    function LayoutStack() {
        this.order = [];
        // Track whether we've ever had a child
        this.hasChildren = false;
    }
    LayoutStack.prototype.add = function (child) {
        var _a;
        this.order.push(child);
        // Load previous values from snapshot into this child
        // TODO Neaten up
        // TODO Double check when reimplementing move
        // TODO Add isDragging status and
        if (this.snapshot) {
            child.prevSnapshot = this.snapshot;
            // TODO Remove in favour of above
            child.prevViewportBox = this.snapshot.boundingBox;
            var latest = this.snapshot.latestMotionValues;
            for (var key in latest) {
                if (!child.hasValue(key)) {
                    child.addValue(key, motionValue(latest[key]));
                }
                else {
                    (_a = child.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(latest[key]);
                }
            }
        }
        this.hasChildren = true;
    };
    LayoutStack.prototype.remove = function (child) {
        var index = this.order.findIndex(function (stackChild) { return child === stackChild; });
        if (index !== -1)
            this.order.splice(index, 1);
    };
    LayoutStack.prototype.updateLeadAndFollow = function () {
        this.prevLead = this.lead;
        this.prevFollow = this.follow;
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(findLeadAndFollow(this.order, [
            this.lead,
            this.follow,
        ]), 2), lead = _a[0], follow = _a[1];
        this.lead = lead;
        this.follow = follow;
    };
    LayoutStack.prototype.updateSnapshot = function () {
        if (!this.lead)
            return;
        var snapshot = {
            boundingBox: this.lead.prevViewportBox,
            latestMotionValues: {},
        };
        this.lead.forEachValue(function (value, key) {
            var latest = value.get();
            if (!isTransformProp(latest)) {
                snapshot.latestMotionValues[key] = latest;
            }
        });
        var dragControls = elementDragControls.get(this.lead);
        if (dragControls && dragControls.isDragging) {
            snapshot.isDragging = true;
            snapshot.cursorProgress = dragControls.cursorProgress;
        }
        this.snapshot = snapshot;
    };
    LayoutStack.prototype.isLeadPresent = function () {
        var _a;
        return this.lead && ((_a = this.lead) === null || _a === void 0 ? void 0 : _a.presence) !== Presence.Exiting;
    };
    LayoutStack.prototype.getFollowOrigin = function () {
        var _a;
        return this.follow
            ? this.follow.prevViewportBox
            : (_a = this.snapshot) === null || _a === void 0 ? void 0 : _a.boundingBox;
    };
    LayoutStack.prototype.getFollowTarget = function () {
        var _a;
        return (_a = this.follow) === null || _a === void 0 ? void 0 : _a.box;
    };
    LayoutStack.prototype.getLeadOrigin = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.prevViewportBox;
    };
    LayoutStack.prototype.getLeadTarget = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.box;
    };
    LayoutStack.prototype.getLeadTransition = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.config.transition;
    };
    return LayoutStack;
}());

/**
 * @public
 */
var AnimateSharedLayout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnimateSharedLayout, _super);
    function AnimateSharedLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A list of all the children in the shared layout
         */
        _this.children = new Set();
        /**
         * As animate components with a defined `layoutId` are added/removed to the tree,
         * we store them in order. When one is added, it will animate out from the
         * previous one, and when it's removed, it'll animate to the previous one.
         */
        _this.stacks = new Map();
        /**
         * Track whether the component has mounted. If it hasn't, the presence of added children
         * are set to Present, whereas if it has they're considered Entering
         */
        _this.hasMounted = false;
        /**
         * Track whether we already have an update scheduled. If we don't, we'll run snapshots
         * and schedule one.
         */
        _this.updateScheduled = false;
        /**
         * Tracks whether we already have a render scheduled. If we don't, we'll force one with this.forceRender
         */
        _this.renderScheduled = false;
        /**
         * The methods provided to all children in the shared layout tree.
         */
        _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, createBatcher()), { syncUpdate: function (force) { return _this.scheduleUpdate(force); }, forceUpdate: function () {
                // By copying syncContext to itself, when this component re-renders it'll also re-render
                // all children subscribed to the SharedLayout context.
                _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.syncContext);
                _this.scheduleUpdate(true);
            }, register: function (child) { return _this.addChild(child); }, remove: function (child) { return _this.removeChild(child); } });
        return _this;
    }
    AnimateSharedLayout.prototype.componentDidMount = function () {
        this.hasMounted = true;
        this.updateStacks();
    };
    AnimateSharedLayout.prototype.componentDidUpdate = function () {
        this.startLayoutAnimation();
    };
    AnimateSharedLayout.prototype.shouldComponentUpdate = function () {
        this.renderScheduled = true;
        return true;
    };
    AnimateSharedLayout.prototype.startLayoutAnimation = function () {
        var _this = this;
        /**
         * Reset update and render scheduled status
         */
        this.renderScheduled = this.updateScheduled = false;
        var type = this.props.type;
        /**
         * Update presence metadata based on the latest AnimatePresence status.
         * This is a kind of goofy way of dealing with this, perhaps there's a better model to find.
         */
        this.children.forEach(function (child) {
            if (!child.isPresent) {
                child.presence = Presence.Exiting;
            }
            else if (child.presence !== Presence.Entering) {
                child.presence =
                    child.presence === Presence.Exiting
                        ? Presence.Entering
                        : Presence.Present;
            }
        });
        /**
         * In every layoutId stack, nominate a component to lead the animation and another
         * to follow
         */
        this.updateStacks();
        /**
         * Decide which animation to use between shared layoutId components
         */
        var createAnimation = type === "crossfade"
            ? createCrossfadeAnimation
            : createSwitchAnimation;
        /**
         * Create a handler which we can use to flush the children animations
         */
        var handler = {
            measureLayout: function (child) { return child.measureLayout(); },
            layoutReady: function (child) {
                var layoutId = child.layoutId;
                child.layoutReady(createAnimation(child, _this.getStack(layoutId)));
            },
        };
        /**
         * Shared layout animations can be used without the AnimateSharedLayout wrapping component.
         * This requires some co-ordination across components to stop layout thrashing
         * and ensure measurements are taken at the correct time.
         *
         * Here we use that same mechanism of schedule/flush.
         */
        this.children.forEach(function (child) { return _this.syncContext.add(child); });
        this.syncContext.flush(handler);
        /**
         * Clear snapshots so subsequent rerenders don't retain memory of outgoing components
         */
        this.stacks.forEach(function (stack) { return (stack.snapshot = undefined); });
    };
    AnimateSharedLayout.prototype.updateStacks = function () {
        this.stacks.forEach(function (stack) { return stack.updateLeadAndFollow(); });
    };
    AnimateSharedLayout.prototype.scheduleUpdate = function (force) {
        if (force === void 0) { force = false; }
        if (!(force || !this.updateScheduled))
            return;
        /**
         * Flag we've scheduled an update
         */
        this.updateScheduled = true;
        /**
         * Read: Snapshot children
         */
        this.children.forEach(function (child) { return child.snapshotBoundingBox(); });
        /**
         * Every child keeps a local snapshot, but we also want to record
         * snapshots of the visible children as, if they're are being removed
         * in this render, we can still access them.
         */
        this.stacks.forEach(function (stack) { return stack.updateSnapshot(); });
        /**
         * Force a rerender by setting state if we aren't already going to render.
         */
        if (force || !this.renderScheduled) {
            this.renderScheduled = true;
            this.forceUpdate();
        }
    };
    AnimateSharedLayout.prototype.addChild = function (child) {
        this.children.add(child);
        this.addToStack(child);
        child.presence = this.hasMounted ? Presence.Entering : Presence.Present;
    };
    AnimateSharedLayout.prototype.removeChild = function (child) {
        this.scheduleUpdate();
        this.children.delete(child);
        this.removeFromStack(child);
    };
    AnimateSharedLayout.prototype.addToStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.add(child);
    };
    AnimateSharedLayout.prototype.removeFromStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.remove(child);
    };
    /**
     * Return a stack of animate children based on the provided layoutId.
     * Will create a stack if none currently exists with that layoutId.
     */
    AnimateSharedLayout.prototype.getStack = function (id) {
        if (id === undefined)
            return;
        // Create stack if it doesn't already exist
        !this.stacks.has(id) && this.stacks.set(id, new LayoutStack());
        return this.stacks.get(id);
    };
    AnimateSharedLayout.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SharedLayoutContext.Provider, { value: this.syncContext }, this.props.children));
    };
    return AnimateSharedLayout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));

/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * @library
 *
 * ```jsx
 * export function MyComponent() {
 *   const scale = useMotionValue(1)
 *
 *   return <Frame scale={scale} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    return useConstant(function () { return motionValue(initial); });
}

function useOnChange(value, callback) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        return isMotionValue(value) ? value.onChange(callback) : undefined;
    });
}
function useMultiOnChange(values, handler) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var subscriptions = values.map(function (value) { return value.onChange(handler); });
        return function () { return subscriptions.forEach(function (unsubscribe) { return unsubscribe(); }); };
    });
}

function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    var value = useMotionValue(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    var updateValue = function () { return value.set(combineValues()); };
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    useMultiOnChange(values, function () { return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(updateValue, false, true); });
    return value;
}

/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */
function useMotionTemplate(fragments) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    /**
     * Create a function that will build a string from the latest motion values.
     */
    var numFragments = fragments.length;
    function buildValue() {
        var output = "";
        for (var i = 0; i < numFragments; i++) {
            output += fragments[i];
            var value = values[i];
            if (value)
                output += values[i].get();
        }
        return output;
    }
    return useCombineMotionValues(values, buildValue);
}

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
    var unwrappedValue = value instanceof MotionValue ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}

var isCustomValueType = function (v) {
    return typeof v === "object" && v.mix;
};
var getMixer = function (v) { return (isCustomValueType(v) ? v.mix : undefined); };
function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var useImmediate = !Array.isArray(args[0]);
    var argOffset = useImmediate ? 0 : -1;
    var inputValue = args[0 + argOffset];
    var inputRange = args[1 + argOffset];
    var outputRange = args[2 + argOffset];
    var options = args[3 + argOffset];
    var interpolator = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(inputRange, outputRange, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ mixer: getMixer(outputRange[0]) }, options));
    return useImmediate ? interpolator(inputValue) : interpolator;
}

function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    var transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), latest = _b[0];
            return transformer(latest);
        });
}
function useListTransform(values, transformer) {
    var latest = useConstant(function () { return []; });
    return useCombineMotionValues(values, function () {
        latest.length = 0;
        var numValues = values.length;
        for (var i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}

// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
var maxScale = 100000;
var invertScale = function (scale) {
    return scale > 0.001 ? 1 / scale : maxScale;
};
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @library
 *
 * ```jsx
 * function MyComponent() {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <Frame scaleX={scaleX} scaleY={scaleY} />
 * }
 * ```
 *
 * @deprecated
 */
var hasWarned = false;
function useInvertedScale(scale) {
    var parentScaleX = useMotionValue(1);
    var parentScaleY = useMotionValue(1);
    var visualElement = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).visualElement;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!(scale || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
    hasWarned = true;
    if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
    }
    else if (visualElement) {
        parentScaleX = visualElement.getValue("scaleX", 1);
        parentScaleY = visualElement.getValue("scaleY", 1);
    }
    var scaleX = useTransform(parentScaleX, invertScale);
    var scaleY = useTransform(parentScaleY, invertScale);
    return { scaleX: scaleX, scaleY: scaleY };
}

/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config) {
    if (config === void 0) { config = {}; }
    var activeSpringAnimation = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var value = useMotionValue(isMotionValue(source) ? source.get() : source);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        return value.attach(function (v, set) {
            if (activeSpringAnimation.current) {
                activeSpringAnimation.current.stop();
            }
            activeSpringAnimation.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["animate"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ from: value.get(), to: v, velocity: value.getVelocity() }, config), { onUpdate: set }));
            return value.get();
        });
    }, Object.values(config));
    useOnChange(source, function (v) { return value.set(parseFloat(v)); });
    return value;
}

function createScrollMotionValues() {
    return {
        scrollX: motionValue(0),
        scrollY: motionValue(0),
        scrollXProgress: motionValue(0),
        scrollYProgress: motionValue(0),
    };
}
function setProgress(offset, maxOffset, value) {
    value.set(!offset || !maxOffset ? 0 : offset / maxOffset);
}
function createScrollUpdater(values, getOffsets) {
    var update = function () {
        var _a = getOffsets(), xOffset = _a.xOffset, yOffset = _a.yOffset, xMaxOffset = _a.xMaxOffset, yMaxOffset = _a.yMaxOffset;
        // Set absolute positions
        values.scrollX.set(xOffset);
        values.scrollY.set(yOffset);
        // Set 0-1 progress
        setProgress(xOffset, xMaxOffset, values.scrollXProgress);
        setProgress(yOffset, yMaxOffset, values.scrollYProgress);
    };
    update();
    return update;
}

var getElementScrollOffsets = function (element) { return function () {
    return {
        xOffset: element.scrollLeft,
        yOffset: element.scrollTop,
        xMaxOffset: element.scrollWidth - element.offsetWidth,
        yMaxOffset: element.scrollHeight - element.offsetHeight,
    };
}; };
/**
 * Returns MotionValues that update when the provided element scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * This element must be set to `overflow: scroll` on either or both axes to report scroll offset.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useElementScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const ref = React.useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <Frame ref={ref}>
 *       <Frame scaleX={scrollYProgress} />
 *     </Frame>
 *   )
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const ref = useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <div ref={ref}>
 *       <motion.div style={{ scaleX: scrollYProgress }} />
 *     </div>
 *   )
 * }
 * ```
 *
 * @public
 */
function useElementScroll(ref) {
    var values = useConstant(createScrollMotionValues);
    useIsomorphicLayoutEffect(function () {
        var element = ref.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!element, "ref provided to useScroll must be passed into a HTML element.");
        if (!element)
            return;
        var updateScrollValues = createScrollUpdater(values, getElementScrollOffsets(element));
        var scrollListener = addDomEvent(element, "scroll", updateScrollValues, { passive: true });
        var resizeListener = addDomEvent(element, "resize", updateScrollValues);
        return function () {
            scrollListener && scrollListener();
            resizeListener && resizeListener();
        };
    }, []);
    return values;
}

var viewportScrollValues = createScrollMotionValues();
function getViewportScrollOffsets() {
    return {
        xOffset: window.pageXOffset,
        yOffset: window.pageYOffset,
        xMaxOffset: document.body.clientWidth - window.innerWidth,
        yMaxOffset: document.body.clientHeight - window.innerHeight,
    };
}
var hasListeners = false;
function addEventListeners() {
    hasListeners = true;
    if (typeof window === "undefined")
        return;
    var updateScrollValues = createScrollUpdater(viewportScrollValues, getViewportScrollOffsets);
    addDomEvent(window, "scroll", updateScrollValues, { passive: true });
    addDomEvent(window, "resize", updateScrollValues);
}
/**
 * Returns MotionValues that update when the viewport scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useViewportScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <Frame scaleX={scrollYProgress} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <motion.div style={{ scaleX: scrollYProgress }} />
 * }
 * ```
 *
 * @public
 */
function useViewportScroll() {
    useIsomorphicLayoutEffect(function () {
        !hasListeners && addEventListeners();
    }, []);
    return viewportScrollValues;
}

// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = motionValue(null);
if (typeof window !== "undefined") {
    if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function () {
            return prefersReducedMotion.set(motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.set(false);
    }
}
function determineShouldReduceMotion(prefersReduced, isReducedMotion) {
    return typeof isReducedMotion === "boolean"
        ? isReducedMotion
        : Boolean(prefersReduced);
}
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
    var isReducedMotion = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).isReducedMotion;
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(determineShouldReduceMotion(prefersReducedMotion.get(), isReducedMotion)), 2), shouldReduceMotion = _a[0], setShouldReduceMotion = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        return prefersReducedMotion.onChange(function (v) {
            setShouldReduceMotion(determineShouldReduceMotion(v, isReducedMotion));
        });
    }, [setShouldReduceMotion, isReducedMotion]);
    return shouldReduceMotion;
}

/**
 * Define accessibility options for a tree. Can be used to force the tree into Reduced Motion mode,
 * or disable device detection.
 *
 * @internal
 */
function ReducedMotion(_a) {
    var children = _a.children, enabled = _a.enabled;
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext);
    context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { isReducedMotion: enabled })); }, [enabled]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionContext.Provider, { value: context }, children));
}

/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * @library
 *
 * ```jsx
 * import * as React from 'react'
 * import { Frame, useAnimation } from 'framer'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <Frame animate={controls} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimation() {
    var animationControls = useConstant(function () { return new AnimationControls(); });
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        animationControls.mount();
        return function () { return animationControls.unmount(); };
    }, []);
    return animationControls;
}

/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import { Frame, useCycle } from "framer"
 *
 * export function MyComponent() {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <Frame
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @motion
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */
function useCycle() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // TODO: After Framer X beta, remove this warning
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(items.length > 1, "useCycle syntax has changed. `useCycle([0, 1, 2])` becomes `useCycle(0, 1, 2)`");
    var index = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(0);
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(items[index.current]), 2), item = _a[0], setItem = _a[1];
    return [
        item,
        function (next) {
            index.current =
                typeof next !== "number"
                    ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["wrap"])(0, items.length, index.current + 1)
                    : next;
            setItem(items[index.current]);
        },
    ];
}

/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
var DragControls = /** @class */ (function () {
    function DragControls() {
        this.componentControls = new Set();
    }
    /**
     * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
     *
     * @internal
     */
    DragControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Start a drag gesture on every `motion` component that has this set of drag controls
     * passed into it via the `dragControls` prop.
     *
     * ```jsx
     * dragControls.start(e, {
     *   snapToCursor: true
     * })
     * ```
     *
     * @param event - A mouse/touch/pointer event.
     * @param options - Options
     *
     * @public
     */
    DragControls.prototype.start = function (event, options) {
        this.componentControls.forEach(function (controls) {
            controls.start(event.nativeEvent || event, options);
        });
    };
    return DragControls;
}());
var createDragControls = function () { return new DragControls(); };
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
function useDragControls() {
    return useConstant(createDragControls);
}

/**
 * Uses the ref that is passed in, or creates a new one
 * @param external - External ref
 * @internal
 */
function useExternalRef(externalRef) {
    // We're conditionally calling `useRef` here which is sort of naughty as hooks
    // shouldn't be called conditionally. However, Framer Motion will break if this
    // condition changes anyway. It might be possible to use an invariant here to
    // make it explicit, but I expect changing `ref` is not normal behaviour.
    var ref = !externalRef || typeof externalRef === "function"
        ? Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null)
        : externalRef;
    // Handle `ref` functions. Again, calling the hook conditionally is kind of naughty
    // but `ref` types changing between renders would break Motion anyway. If we receive
    // bug reports about this, we should track the provided ref and throw an invariant
    // rather than move the conditional to inside the useEffect as this will be fired
    // for every Frame component within Framer.
    if (externalRef && typeof externalRef === "function") {
        Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
            externalRef(ref.current);
            return function () { return externalRef(null); };
        }, []);
    }
    return ref;
}

/**
 * This is just a very basic VisualElement, more of a hack to keep supporting useAnimatedState with
 * the latest APIs.
 */
var StateVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateVisualElement, _super);
    function StateVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialState = {};
        return _this;
    }
    StateVisualElement.prototype.updateLayoutDelta = function () { };
    StateVisualElement.prototype.build = function () { };
    StateVisualElement.prototype.clean = function () { };
    StateVisualElement.prototype.getBoundingBox = function () {
        return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    };
    StateVisualElement.prototype.readNativeValue = function (key) {
        return this.initialState[key] || 0;
    };
    StateVisualElement.prototype.render = function () {
        this.build();
    };
    return StateVisualElement;
}(VisualElement));
/**
 * This is not an officially supported API and may be removed
 * on any version.
 * @internal
 */
function useAnimatedState(initialState) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState), 2), animationState = _a[0], setAnimationState = _a[1];
    var visualElement = useConstant(function () { return new StateVisualElement(); });
    visualElement.updateConfig({
        onUpdate: function (v) { return setAnimationState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v)); },
    });
    visualElement.initialState = initialState;
    var controls = useVisualElementAnimation(visualElement, {}, {});
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        visualElement.mount({});
        return function () { return visualElement.unmount(); };
    }, []);
    var startAnimation = useConstant(function () { return function (animationDefinition) {
        return controls.start(animationDefinition);
    }; });
    return [animationState, startAnimation];
}




/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined ? function (callback) {
    return window.requestAnimationFrame(callback);
} : function (callback) {
    var timestamp = Date.now();
    var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
    prevTime = timestamp + timeToCall;
    setTimeout(function () {
        return callback(prevTime);
    }, timeToCall);
};

var createStep = function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [processToRunNextFrame, processToRun], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) {
                keepAlive = false;
            }
            if (immediate === void 0) {
                immediate = false;
            }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === "function", "Argument must be a function");
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive) toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer) numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
};

var maxElapsed = 40;
var defaultElapsed = 1 / 60 * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var setWillRunNextFrame = function (willRun) {
    return willRunNextFrame = willRun;
};
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = createStep(setWillRunNextFrame);
    return acc;
}, {});
var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    var step = steps[key];
    acc[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) {
            keepAlive = false;
        }
        if (immediate === void 0) {
            immediate = false;
        }
        if (!willRunNextFrame) startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    return acc;
}, {});
var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
var processStep = function (stepId) {
    return steps[stepId].process(frame);
};
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed) defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) onNextFrame(processFrame);
};
var getFrameData = function () {
    return frame;
};

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: angle, animate, anticipate, applyOffset, attract, attractExpo, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, clamp, createAnticipate, createAttractor, createBackIn, createExpoIn, cubicBezier, decay, degreesToRadians, distance, easeIn, easeInOut, easeOut, inertia, interpolate, isPoint, isPoint3D, keyframes, linear, mirrorEasing, mix, mixColor, mixComplex, pipe, pointFromVector, progress, radiansToDegrees, reverseEasing, smooth, smoothFrame, snap, spring, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attract", function() { return attract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attractExpo", function() { return attractExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipate", function() { return createAnticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttractor", function() { return createAttractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return decay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return inertia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorEasing", function() { return mirrorEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseEasing", function() { return reverseEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");





function spring(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0.0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 0.0 : _c,
        _d = _a.velocity,
        velocity = _d === void 0 ? 0.0 : _d,
        _e = _a.stiffness,
        stiffness = _e === void 0 ? 100 : _e,
        _f = _a.damping,
        damping = _f === void 0 ? 10 : _f,
        _g = _a.mass,
        mass = _g === void 0 ? 1.0 : _g,
        _h = _a.restSpeed,
        restSpeed = _h === void 0 ? 2 : _h,
        restDelta = _a.restDelta;
    var state = { done: false, value: from };
    var resolveSpring = zero;
    var resolveVelocity = zero;
    function createSpring() {
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var initialDelta = to - from;
        var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        var angularFreq = Math.sqrt(stiffness / mass) / 1000;
        restDelta !== null && restDelta !== void 0 ? restDelta : restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;
        if (dampingRatio < 1) {
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                return to - envelope * ((initialVelocity + dampingRatio * angularFreq * initialDelta) / expoDecay * Math.sin(expoDecay * t) + initialDelta * Math.cos(expoDecay * t));
            };
            resolveVelocity = function (t) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                return dampingRatio * angularFreq * envelope * (Math.sin(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * initialDelta) / expoDecay + initialDelta * Math.cos(expoDecay * t)) - envelope * (Math.cos(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * initialDelta) - expoDecay * initialDelta * Math.sin(expoDecay * t));
            };
        } else if (dampingRatio === 1) {
            resolveSpring = function (t) {
                var envelope = Math.exp(-angularFreq * t);
                return to - envelope * (initialDelta + (initialVelocity + angularFreq * initialDelta) * t);
            };
        } else {
            var dampedAngularFreq_1 = angularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
                return to - envelope * ((initialVelocity + dampingRatio * angularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq_1 * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq_1;
            };
        }
    }
    createSpring();
    return {
        next: function (t) {
            var current = resolveSpring(t);
            var velocity = resolveVelocity(t) * 1000;
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
            state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: function () {
            var _a;
            velocity = -velocity;
            _a = [to, from], from = _a[0], to = _a[1];
            createSpring();
        }
    };
}
spring.needsInterpolation = function (a, b) {
    return typeof a === "string" || typeof b === "string";
};
var zero = function (_t) {
    return 0;
};

var progress = function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

var mix = function (from, to, progress) {
    return -progress * from + progress * to + from;
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_1__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_1__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_1__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) {
        return type.test(v);
    });
};
var notAnimatable = function (color) {
    return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!!fromColorType, notAnimatable(from));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!!toColorType, notAnimatable(to));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_1__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};

var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) {
    return typeof v === 'number';
};

var combineFunctions = function (a, b) {
    return function (v) {
        return b(a(v));
    };
};
var pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function (v) {
            return mix(origin, target, v);
        };
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"].test(origin)) {
        return mixColor(origin, target);
    } else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(from);
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) {
        return getMixer(fromThis, to[i]);
    });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origin), target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
            numNumbers++;
        } else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            } else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};

var mixNumber = function (from, to) {
    return function (p) {
        return mix(from, to, p);
    };
};
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    } else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"].test(v)) {
            return mixColor;
        } else {
            return mixComplex;
        }
    } else if (Array.isArray(v)) {
        return mixArray;
    } else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0],
        to = _a[1];
    var mixer = _b[0];
    return function (v) {
        return mixer(progress(from, to, v));
    };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        } else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.clamp,
        isClamp = _c === void 0 ? true : _c,
        ease = _b.ease,
        mixer = _b.mixer;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
    return isClamp ? function (v) {
        return interpolator(clamp(input[0], input[inputLength - 1], v));
    } : interpolator;
}

var reverseEasing = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrorEasing = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipate = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reverseEasing(easeIn);
var easeInOut = /*#__PURE__*/mirrorEasing(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reverseEasing(circIn);
var circInOut = /*#__PURE__*/mirrorEasing(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reverseEasing(backIn);
var backInOut = /*#__PURE__*/mirrorEasing(backIn);
var anticipate = /*#__PURE__*/createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    if (p === 1 || p === 0) return p;
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = /*#__PURE__*/reverseEasing(bounceOut);
var bounceInOut = function (p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};

function defaultEasing(values, easing) {
    return values.map(function () {
        return easing || easeInOut;
    }).splice(0, values.length - 1);
}
function defaultOffset(values) {
    var numValues = values.length;
    return values.map(function (_value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
}
function convertOffsetToTimes(offset, duration) {
    return offset.map(function (o) {
        return o * duration;
    });
}
function keyframes(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        ease = _a.ease,
        offset = _a.offset,
        _d = _a.duration,
        duration = _d === void 0 ? 300 : _d;
    var state = { done: false, value: from };
    var values = Array.isArray(to) ? to : [from, to];
    var times = convertOffsetToTimes(offset !== null && offset !== void 0 ? offset : defaultOffset(values), duration);
    function createInterpolator() {
        return interpolate(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
        });
    }
    var interpolator = createInterpolator();
    return {
        next: function (t) {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: function () {
            values.reverse();
            interpolator = createInterpolator();
        }
    };
}

function decay(_a) {
    var _b = _a.velocity,
        velocity = _b === void 0 ? 0 : _b,
        _c = _a.from,
        from = _c === void 0 ? 0 : _c,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 350 : _e,
        _f = _a.restDelta,
        restDelta = _f === void 0 ? 0.5 : _f,
        modifyTarget = _a.modifyTarget;
    var state = { done: false, value: from };
    var amplitude = power * velocity;
    var ideal = from + amplitude;
    var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal) amplitude = target - from;
    return {
        next: function (t) {
            var delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: function () {}
    };
}

var types = { keyframes: keyframes, spring: spring, decay: decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return keyframes;
    } else if (types[config.type]) {
        return types[config.type];
    }
    var keys = new Set(Object.keys(config));
    if (keys.has("ease") || keys.has("duration")) {
        return keyframes;
    } else if (keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
        return spring;
    }
    return keyframes;
}

function loopElapsed(elapsed, duration, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
    if (delay === void 0) {
        delay = 0;
    }
    if (isForwardPlayback === void 0) {
        isForwardPlayback = true;
    }
    return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

var framesync = function (update) {
    var passTimestamp = function (_a) {
        var delta = _a.delta;
        return update(delta);
    };
    return {
        start: function () {
            return framesync__WEBPACK_IMPORTED_MODULE_3__["default"].update(passTimestamp, true, true);
        },
        stop: function () {
            return framesync__WEBPACK_IMPORTED_MODULE_3__["cancelSync"].update(passTimestamp);
        }
    };
};
function animate(_a) {
    var _b, _c;
    var from = _a.from,
        _d = _a.autoplay,
        autoplay = _d === void 0 ? true : _d,
        _e = _a.driver,
        driver = _e === void 0 ? framesync : _e,
        _f = _a.elapsed,
        elapsed = _f === void 0 ? 0 : _f,
        _g = _a.repeat,
        repeatMax = _g === void 0 ? 0 : _g,
        _h = _a.repeatType,
        repeatType = _h === void 0 ? "loop" : _h,
        _j = _a.repeatDelay,
        repeatDelay = _j === void 0 ? 0 : _j,
        onPlay = _a.onPlay,
        onStop = _a.onStop,
        onComplete = _a.onComplete,
        onRepeat = _a.onRepeat,
        onUpdate = _a.onUpdate,
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    var to = options.to;
    var driverControls;
    var repeatCount = 0;
    var computedDuration = options.duration;
    var latest;
    var isComplete = false;
    var isForwardPlayback = true;
    var interpolateFromNumber;
    var animator = detectAnimationFromOptions(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false
        });
        from = 0;
        to = 100;
    }
    var animation = animator(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { from: from, to: to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        } else {
            elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror") animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback) delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            var state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber) latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
            if (repeatCount < repeatMax) {
                hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            } else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: function () {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        }
    };
}

function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

function inertia(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 750 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget,
        driver = _a.driver,
        onUpdate = _a.onUpdate,
        onComplete = _a.onComplete;
    var currentAnimation;
    function isOutOfBounds(v) {
        return min !== undefined && v < min || max !== undefined && v > max;
    }
    function boundaryNearest(v) {
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = animate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { driver: driver, onUpdate: function (v) {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete: onComplete }));
    }
    function startSpring(options) {
        startAnimation(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
    } else {
        var target = power * velocity + from;
        if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
        var boundary_1 = boundaryNearest(target);
        var heading_1 = boundary_1 === min ? -1 : 1;
        var prev_1;
        var current_1;
        var checkBoundary = function (v) {
            prev_1 = current_1;
            current_1 = v;
            velocity = velocityPerSecond(v - prev_1, Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().delta);
            if (heading_1 === 1 && v > boundary_1 || heading_1 === -1 && v < boundary_1) {
                startSpring({ from: v, to: boundary_1, velocity: velocity });
            }
        };
        startAnimation({
            type: "decay",
            from: from,
            velocity: velocity,
            timeConstant: timeConstant,
            power: power,
            restDelta: restDelta,
            modifyTarget: modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
        });
    }
    return {
        stop: function () {
            return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        }
    };
}

var radiansToDegrees = function (radians) {
    return radians * 180 / Math.PI;
};

var angle = function (a, b) {
    if (b === void 0) {
        b = zeroPoint;
    }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};

var applyOffset = function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        } else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};

var identity = function (v) {
    return v;
};
var createAttractor = function (alterDisplacement) {
    if (alterDisplacement === void 0) {
        alterDisplacement = identity;
    }
    return function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
    };
};
var attract = /*#__PURE__*/createAttractor();
var attractExpo = /*#__PURE__*/createAttractor(Math.sqrt);

var degreesToRadians = function (degrees) {
    return degrees * Math.PI / 180;
};

var isPoint = function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};

var isPoint3D = function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
};

var distance1D = function (a, b) {
    return Math.abs(a - b);
};
function distance(a, b) {
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    } else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}

var pointFromVector = function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};

var toDecimal = function (num, precision) {
    if (precision === void 0) {
        precision = 2;
    }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};

var smoothFrame = function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) {
        smoothing = 0;
    }
    return toDecimal(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
};

var smooth = function (strength) {
    if (strength === void 0) {
        strength = 50;
    }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};

var snap = function (points) {
    if (typeof points === 'number') {
        return function (v) {
            return Math.round(v / points) * points;
        };
    } else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0) return point;
                if (distance > lastDistance) return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1) return point;
                lastDistance = distance;
            }
        };
    }
};

function velocityPerFrame(xps, frameDuration) {
    return xps / (1000 / frameDuration);
}

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX;
    var currentT;
    var i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        } else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < newtonIterations; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2) return linear;
    var sampleValues = new Float32Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function (t) {
        return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
    };
}

var steps = function (steps, direction) {
    if (direction === void 0) {
        direction = 'end';
    }
    return function (progress) {
        progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clamp(0, 1, rounded / steps);
    };
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: alpha, color, complex, degrees, hex, hsla, number, percent, progressPercentage, px, rgbUnit, rgba, scale, vh, vw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: clamp(0, 1) });
var scale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
function getValuesAsArray(value) {
    return getValueFromFunctionString(value)
        .replace(/(,|\/)/g, ' ')
        .split(/ \s*/);
}
var splitColorValues = function (terms) {
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = getValuesAsArray(v);
        for (var i = 0; i < 4; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
var rgbUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hsla = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hex = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rgba), { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && singleColorRegex.test(v)) ||
            isRgba(v) ||
            isHsla(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    },
    getAnimatableNone: function (target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};




/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
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
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRHJhd2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9mcmFtZXItbW90aW9uLmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGV5LWxpc3Rlbi9kaXN0L2hleS1saXN0ZW4uZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wb3Btb3Rpb24vZGlzdC9wb3Btb3Rpb24uZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZS12YWx1ZS10eXBlcy9kaXN0L3N0eWxlLXZhbHVlLXR5cGVzLmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIl0sIm5hbWVzIjpbIkRyYXdlciIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwibGlua3MiLCJpc09wZW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNTQyx3REFBVSxDQUFDQyxxRUFBRCxDQURuQjtBQUFBLE1BQ1hDLEtBRFcsZUFDWEEsS0FEVztBQUFBLE1BQ0pDLFFBREksZUFDSkEsUUFESTs7QUFHbkIsU0FDRSxNQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLGFBQVMsRUFBQyx5SkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQURILENBREY7QUFLRCxDQVJEOztHQUFNSCxNOztLQUFBQSxNO0FBVVNBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUF1Qzs7QUFFdkMsazdIQUFrN0g7O0FBRWw3SCxZQUFZLGdFQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ2RyQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdGO0FBQ3JCO0FBQ2pCO0FBQ3VHO0FBQ2pHO0FBQzJFO0FBQ3lHOztBQUVwTztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQWlEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVEscUNBQXFDLFVBQVU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUSxnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZUFBZTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVEsaURBQUksaUNBQWlDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9EQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUIsNEJBQTRCLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QyxzQkFBc0Isc0RBQVEsQ0FBQyxzREFBUSxHQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5Qyw2QkFBNkIsZ0JBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFJLHFCQUFxQixnQ0FBZ0MsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0NBQXdDLGlEQUFpRCxFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdDQUF3QyxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvREFBRTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLG9EQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDLDRCQUE0QixZQUFZO0FBQ3hDLGlDQUFpQyxvQkFBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFhOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUyxjQUFjLHFCQUFxQixFQUFFO0FBQ2xELG9DQUFvQywyRkFBMkY7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRCwrQkFBK0IsaUNBQWlDOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwrQkFBK0Isc0RBQVEsRUFBRSx3Q0FBd0M7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsZ0NBQWdDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQU8sQ0FBQyx1R0FBd0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBUSxDQUFDLHNEQUFRLENBQUMsc0RBQVEsR0FBRztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFRLENBQUMsc0RBQVEsR0FBRyx5QkFBeUIsUUFBUSxzREFBUSxHQUFHLDZCQUE2QjtBQUN4Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQWEsWUFBWSxzREFBUSxDQUFDLHNEQUFRLENBQUMsc0RBQVEsR0FBRyxvQkFBb0IseUJBQXlCO0FBQzlHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdDQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3REFBTSxVQUFVLG9EQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0RBQW9EO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDBFQUEwRSxnQ0FBZ0MsRUFBRTtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QyxtQ0FBbUMsb0JBQW9CO0FBQ3ZELGFBQWEsc0RBQVEsR0FBRztBQUN4QixvQkFBb0Isc0RBQVEsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGtCQUFrQjtBQUNsRTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG9EQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBTTtBQUMvQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELDBCQUEwQixvREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBaUQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCx3QkFBd0IsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNEQUFRO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQ0FBZ0M7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBYTtBQUNqQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEIsd0RBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQU8sY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUUsRUFBRTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSx1REFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVyxFQUFFOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUNBQWlDOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFDQUFxQyxFQUFFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDhDQUE4QyxFQUFFO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMkNBQTJDO0FBQ25GO0FBQ0E7QUFDQSwrREFBK0QsOENBQThDLEVBQUU7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxzQ0FBc0Msc0RBQVEsQ0FBQyxzREFBUSxHQUFHO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHlEQUFPO0FBQ3JEO0FBQ0Esd0JBQXdCLHlEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrSUFBK0ksb0RBQU07QUFDckosZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNEQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELDJDQUEyQyxFQUFFO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDJCQUEyQixFQUFFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzREFBUTtBQUNuQztBQUNBO0FBQ0EsK0NBQStDLHFCQUFxQjtBQUNwRSw2REFBNkQscUJBQXFCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMkJBQTJCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckMsbUtBQW1LLG9EQUFNO0FBQ3pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxzREFBUSxFQUFFLGVBQWU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUJBQXFCO0FBQ3JFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBUTtBQUNqQyxtQ0FBbUMsMENBQTBDLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQ0FBcUM7QUFDaEUsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQkFBbUI7QUFDMUQseUNBQXlDLHFCQUFxQjtBQUM5RCwwQ0FBMEMsc0JBQXNCO0FBQ2hFLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQsNEJBQTRCLGlEQUFpRDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseUNBQXlDLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHFCQUFxQixFQUFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQVU7QUFDbkMsMEJBQTBCLHdEQUFVO0FBQ3BDLDRDQUE0QyxrRUFBa0UsRUFBRTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixvREFBTTtBQUN0RjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQWE7QUFDdkMsc0NBQXNDLFVBQVUsRUFBRTtBQUNsRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQjtBQUNsRCwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLG9EQUFNO0FBQ3BHLHdCQUF3Qix3REFBVTtBQUNsQyx5QkFBeUIsc0RBQVE7QUFDakM7QUFDQSxnQkFBZ0IscURBQU8sY0FBYyxVQUFVLDJCQUEyQixFQUFFLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFhLGdDQUFnQyxlQUFlO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQWEsWUFBWSxzREFBUSxFQUFFLFdBQVcsVUFBVSx1SUFBdUk7QUFDN047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDhCQUE4QixFQUFFO0FBQ3JFLG1DQUFtQyw0QkFBNEIsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywrQkFBK0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQWE7O0FBRXZDO0FBQ0EsNENBQTRDLHFEQUFlLEdBQUcsK0NBQVM7O0FBRXZFO0FBQ0EscUJBQXFCLHdEQUFVO0FBQy9CLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxNQUFNLEVBQUU7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBYSxDQUFDLDhDQUFRO0FBQ3RDLFlBQVksMkRBQWEsMEJBQTBCLGlCQUFpQjtBQUNwRTtBQUNBO0FBQ0EsV0FBVyx3REFBVTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUcsaUJBQWlCO0FBQ3pCO0FBQ0EsdUNBQXVDLHlDQUF5QztBQUNoRix5Q0FBeUMsMENBQTBDOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZ0U7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaUJBQWlCO0FBQ3hEO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQ0FBb0M7QUFDcEY7QUFDQTtBQUNBLHFDQUFxQyxnREFBZ0Q7QUFDckY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMERBQVEsZUFBZSxhQUFhO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4REFBWTtBQUN4QywrQkFBK0Isc0RBQVEsQ0FBQyxzREFBUSxHQUFHLFdBQVcsdUJBQXVCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBWTtBQUNwQyx3QkFBd0Isc0RBQVEsQ0FBQyxzREFBUSxHQUFHLFdBQVcsdUJBQXVCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLGlHQUFpRyw2Q0FBNkMsRUFBRTtBQUNoSiw2RkFBNkYsMkNBQTJDLEVBQUU7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQ0FBaUMsd0NBQXdDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9EQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFEQUFHO0FBQ2pCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0NBQWdDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRyx5Q0FBeUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDO0FBQ2dCOzs7Ozs7Ozs7Ozs7O0FDcElwQztBQUFBO0FBQUE7QUFBQSwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7QUNmOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUNXO0FBQzdCO0FBQ29COztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFJO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBLG1CQUFtQixvREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEscUJBQXFCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWE7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBLHVCQUF1QixzREFBUSxFQUFFLDJGQUEyRjtBQUM1SDtBQUNBO0FBQ0EscUJBQXFCLDREQUE0RDtBQUNqRixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDhEQUFZO0FBQ2pFO0FBQ0EsNkJBQTZCLDhDQUE4QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOERBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Y2QzMDE2MGM0ODllMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgRHJhd2VyID0gKCkgPT4ge1xuICBjb25zdCB7IGxpbmtzLCBpc09wZW5lZCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24udWwgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZm9udC1tZW51IHRleHQtZ3JheS03MDAgdGV4dC14bCBoLWZ1bGwgei0xMCBiZy13aGl0ZSB3LWZ1bGwgYWJzb2x1dGUgbGVmdC0wIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxnOmhpZGRlblwiPlxuICAgICAge2xpbmtzfVxuICAgIDwvbW90aW9uLnVsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xuIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGluZGV4ID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgeyBfX3ZhbHVlcywgX19hc3NpZ24sIF9fc3ByZWFkLCBfX3Jlc3QsIF9fcmVhZCwgX19leHRlbmRzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHN5bmMsIHsgZ2V0RnJhbWVEYXRhLCBjYW5jZWxTeW5jIH0gZnJvbSAnZnJhbWVzeW5jJztcbmltcG9ydCAqIGFzIGVhc2luZ0xvb2t1cCBmcm9tICdwb3Btb3Rpb24nO1xuaW1wb3J0IHsgdmVsb2NpdHlQZXJTZWNvbmQsIG1peCwgY2xhbXAsIGRpc3RhbmNlLCBwcm9ncmVzcywgY3ViaWNCZXppZXIsIGluZXJ0aWEsIGFuaW1hdGUsIGxpbmVhciwgY2lyY091dCwgaW50ZXJwb2xhdGUsIHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nO1xuaW1wb3J0IHsgaW52YXJpYW50LCB3YXJuaW5nIH0gZnJvbSAnaGV5LWxpc3Rlbic7XG5pbXBvcnQgeyBudW1iZXIsIGNvbG9yLCBjb21wbGV4LCBweCwgcGVyY2VudCwgZGVncmVlcywgdncsIHZoLCBzY2FsZSwgYWxwaGEsIHByb2dyZXNzUGVyY2VudGFnZSB9IGZyb20gJ3N0eWxlLXZhbHVlLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgY3JlYXRlRWxlbWVudCwgdXNlTWVtbywgdXNlTGF5b3V0RWZmZWN0LCBmb3J3YXJkUmVmLCBGcmFnbWVudCwgQ29tcG9uZW50IGFzIENvbXBvbmVudCQxLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIGNsb25lRWxlbWVudCwgQ2hpbGRyZW4sIGlzVmFsaWRFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgaXNSZWZPYmplY3QgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgcmV0dXJuIHR5cGVvZiByZWYgPT09IFwib2JqZWN0XCIgJiYgcmVmLmhhc093blByb3BlcnR5KFwiY3VycmVudFwiKTtcbn07XG5cbi8qKlxuICogQSBnZW5lcmljIHN1YnNjcmlwdGlvbiBtYW5hZ2VyLlxuICovXG52YXIgU3Vic2NyaXB0aW9uTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb25NYW5hZ2VyKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbk1hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB2b2lkIF90aGlzLnN1YnNjcmlwdGlvbnMuZGVsZXRlKGhhbmRsZXIpOyB9O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKFxuICAgIC8qKlxuICAgICAqIFVzaW5nIC4uLmFyZ3Mgd291bGQgYmUgcHJlZmVyYWJsZSBidXQgaXQncyBhcnJheSBjcmVhdGlvbiBhbmQgdGhpc1xuICAgICAqIG1pZ2h0IGJlIGZpcmVkIGV2ZXJ5IGZyYW1lLlxuICAgICAqL1xuICAgIGEsIGIsIGMpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb25zLnNpemUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuc3Vic2NyaXB0aW9ucyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoYSwgYiwgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5jbGVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXI7XG59KCkpO1xuXG52YXIgaXNGbG9hdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xufTtcbi8qKlxuICogYE1vdGlvblZhbHVlYCBpcyB1c2VkIHRvIHRyYWNrIHRoZSBzdGF0ZSBhbmQgdmVsb2NpdHkgb2YgbW90aW9uIHZhbHVlcy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBNb3Rpb25WYWx1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaW5pdCAtIFRoZSBpbml0aWF0aW5nIHZhbHVlXG4gICAgICogQHBhcmFtIGNvbmZpZyAtIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgICAqXG4gICAgICogLSAgYHRyYW5zZm9ybWVyYDogQSBmdW5jdGlvbiB0byB0cmFuc2Zvcm0gaW5jb21pbmcgdmFsdWVzIHdpdGguXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNb3Rpb25WYWx1ZShpbml0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEdXJhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLCBzaW5jZSBsYXN0IHVwZGF0aW5nIGZyYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGltZURlbHRhID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWVzdGFtcCBvZiB0aGUgbGFzdCB0aW1lIHRoaXMgYE1vdGlvblZhbHVlYCB3YXMgdXBkYXRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9ucyB0byBub3RpZnkgd2hlbiB0aGUgYE1vdGlvblZhbHVlYCB1cGRhdGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXBkYXRlU3Vic2NyaWJlcnMgPSBuZXcgU3Vic2NyaXB0aW9uTWFuYWdlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb25zIHRvIG5vdGlmeSB3aGVuIHRoZSBgTW90aW9uVmFsdWVgIHVwZGF0ZXMgYW5kIGByZW5kZXJgIGlzIHNldCB0byBgdHJ1ZWAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJTdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFja3Mgd2hldGhlciB0aGlzIHZhbHVlIGNhbiBvdXRwdXQgYSB2ZWxvY2l0eS4gQ3VycmVudGx5IHRoaXMgaXMgb25seSB0cnVlXG4gICAgICAgICAqIGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljYWwsIGJ1dCB3ZSBtaWdodCBiZSBhYmxlIHRvIHdpZGVuIHRoZSBzY29wZSBoZXJlIGFuZCBzdXBwb3J0XG4gICAgICAgICAqIG90aGVyIHZhbHVlIHR5cGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FuVHJhY2tWZWxvY2l0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZUFuZE5vdGlmeSA9IGZ1bmN0aW9uICh2LCByZW5kZXIpIHtcbiAgICAgICAgICAgIGlmIChyZW5kZXIgPT09IHZvaWQgMCkgeyByZW5kZXIgPSB0cnVlOyB9XG4gICAgICAgICAgICBfdGhpcy5wcmV2ID0gX3RoaXMuY3VycmVudDtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnQgPSB2O1xuICAgICAgICAgICAgaWYgKF90aGlzLnByZXYgIT09IF90aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdWJzY3JpYmVycy5ub3RpZnkoX3RoaXMuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyU3Vic2NyaWJlcnMubm90aWZ5KF90aGlzLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcFxuICAgICAgICAgICAgdmFyIF9hID0gZ2V0RnJhbWVEYXRhKCksIGRlbHRhID0gX2EuZGVsdGEsIHRpbWVzdGFtcCA9IF9hLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0VXBkYXRlZCAhPT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZURlbHRhID0gZGVsdGE7XG4gICAgICAgICAgICAgICAgX3RoaXMubGFzdFVwZGF0ZWQgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgc3luYy5wb3N0UmVuZGVyKF90aGlzLnNjaGVkdWxlVmVsb2NpdHlDaGVjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTY2hlZHVsZSBhIHZlbG9jaXR5IGNoZWNrIGZvciB0aGUgbmV4dCBmcmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyBhbiBpbnN0YW5jZWQgYW5kIGJvdW5kIGZ1bmN0aW9uIHRvIHByZXZlbnQgZ2VuZXJhdGluZyBhIG5ld1xuICAgICAgICAgKiBmdW5jdGlvbiBvbmNlIHBlciBmcmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjaGVkdWxlVmVsb2NpdHlDaGVjayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN5bmMucG9zdFJlbmRlcihfdGhpcy52ZWxvY2l0eUNoZWNrKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgYHByZXZgIHdpdGggYGN1cnJlbnRgIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgYmVlbiB1cGRhdGVkIHRoaXMgZnJhbWUuXG4gICAgICAgICAqIFRoaXMgZW5zdXJlcyB2ZWxvY2l0eSBjYWxjdWxhdGlvbnMgcmV0dXJuIGAwYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyBhbiBpbnN0YW5jZWQgYW5kIGJvdW5kIGZ1bmN0aW9uIHRvIHByZXZlbnQgZ2VuZXJhdGluZyBhIG5ld1xuICAgICAgICAgKiBmdW5jdGlvbiBvbmNlIHBlciBmcmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZlbG9jaXR5Q2hlY2sgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0aW1lc3RhbXAgPSBfYS50aW1lc3RhbXA7XG4gICAgICAgICAgICBpZiAodGltZXN0YW1wICE9PSBfdGhpcy5sYXN0VXBkYXRlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnByZXYgPSBfdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldChpbml0LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY2FuVHJhY2tWZWxvY2l0eSA9IGlzRmxvYXQodGhpcy5jdXJyZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCB3aGVuIHRoZSBgTW90aW9uVmFsdWVgIGlzIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBJdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHdpbGwgY2FuY2VsIHRoZSBzdWJzY3JpcHRpb24uXG4gICAgICpcbiAgICAgKiBXaGVuIGNhbGxpbmcgYG9uQ2hhbmdlYCBpbnNpZGUgYSBSZWFjdCBjb21wb25lbnQsIGl0IHNob3VsZCBiZSB3cmFwcGVkIHdpdGggdGhlXG4gICAgICogYHVzZUVmZmVjdGAgaG9vay4gQXMgaXQgcmV0dXJucyBhbiB1bnN1YnNjcmliZSBmdW5jdGlvbiwgdGhpcyBzaG91bGQgYmUgcmV0dXJuZWRcbiAgICAgKiBmcm9tIHRoZSBgdXNlRWZmZWN0YCBmdW5jdGlvbiB0byBlbnN1cmUgeW91IGRvbid0IGFkZCBkdXBsaWNhdGUgc3Vic2NyaWJlcnMuLlxuICAgICAqXG4gICAgICogQGxpYnJhcnlcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqIGZ1bmN0aW9uIE15Q29tcG9uZW50KCkge1xuICAgICAqICAgY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApXG4gICAgICogICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMClcbiAgICAgKiAgIGNvbnN0IG9wYWNpdHkgPSB1c2VNb3Rpb25WYWx1ZSgxKVxuICAgICAqXG4gICAgICogICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAqICAgICBmdW5jdGlvbiB1cGRhdGVPcGFjaXR5KCkge1xuICAgICAqICAgICAgIGNvbnN0IG1heFhZID0gTWF0aC5tYXgoeC5nZXQoKSwgeS5nZXQoKSlcbiAgICAgKiAgICAgICBjb25zdCBuZXdPcGFjaXR5ID0gdHJhbnNmb3JtKG1heFhZLCBbMCwgMTAwXSwgWzEsIDBdKVxuICAgICAqICAgICAgIG9wYWNpdHkuc2V0KG5ld09wYWNpdHkpXG4gICAgICogICAgIH1cbiAgICAgKlxuICAgICAqICAgICBjb25zdCB1bnN1YnNjcmliZVggPSB4Lm9uQ2hhbmdlKHVwZGF0ZU9wYWNpdHkpXG4gICAgICogICAgIGNvbnN0IHVuc3Vic2NyaWJlWSA9IHkub25DaGFuZ2UodXBkYXRlT3BhY2l0eSlcbiAgICAgKlxuICAgICAqICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAqICAgICAgIHVuc3Vic2NyaWJlWCgpXG4gICAgICogICAgICAgdW5zdWJzY3JpYmVZKClcbiAgICAgKiAgICAgfVxuICAgICAqICAgfSwgW10pXG4gICAgICpcbiAgICAgKiAgIHJldHVybiA8RnJhbWUgeD17eH0gLz5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbW90aW9uXG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiBleHBvcnQgY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICogICBjb25zdCB4ID0gdXNlTW90aW9uVmFsdWUoMClcbiAgICAgKiAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICAgICAqICAgY29uc3Qgb3BhY2l0eSA9IHVzZU1vdGlvblZhbHVlKDEpXG4gICAgICpcbiAgICAgKiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICogICAgIGZ1bmN0aW9uIHVwZGF0ZU9wYWNpdHkoKSB7XG4gICAgICogICAgICAgY29uc3QgbWF4WFkgPSBNYXRoLm1heCh4LmdldCgpLCB5LmdldCgpKVxuICAgICAqICAgICAgIGNvbnN0IG5ld09wYWNpdHkgPSB0cmFuc2Zvcm0obWF4WFksIFswLCAxMDBdLCBbMSwgMF0pXG4gICAgICogICAgICAgb3BhY2l0eS5zZXQobmV3T3BhY2l0eSlcbiAgICAgKiAgICAgfVxuICAgICAqXG4gICAgICogICAgIGNvbnN0IHVuc3Vic2NyaWJlWCA9IHgub25DaGFuZ2UodXBkYXRlT3BhY2l0eSlcbiAgICAgKiAgICAgY29uc3QgdW5zdWJzY3JpYmVZID0geS5vbkNoYW5nZSh1cGRhdGVPcGFjaXR5KVxuICAgICAqXG4gICAgICogICAgIHJldHVybiAoKSA9PiB7XG4gICAgICogICAgICAgdW5zdWJzY3JpYmVYKClcbiAgICAgKiAgICAgICB1bnN1YnNjcmliZVkoKVxuICAgICAqICAgICB9XG4gICAgICogICB9LCBbXSlcbiAgICAgKlxuICAgICAqICAgcmV0dXJuIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHggfX0gLz5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxyZW1hcmtzXG4gICAgICpcbiAgICAgKiBXZSBjb3VsZCBsb29rIGludG8gYSBgdXNlT25DaGFuZ2VgIGhvb2sgaWYgdGhlIGFib3ZlIGxpZmVjeWNsZSBtYW5hZ2VtZW50IHByb3ZlcyBjb25mdXNpbmcuXG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiB1c2VPbkNoYW5nZSh4LCAoKSA9PiB7fSlcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdWJzY3JpYmVyIC0gQSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBsYXRlc3QgdmFsdWUuXG4gICAgICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgd2lsbCBjYW5jZWwgdGhpcyBzdWJzY3JpcHRpb24uXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVTdWJzY3JpYmVycy5hZGQoc3Vic2NyaXB0aW9uKTtcbiAgICB9O1xuICAgIE1vdGlvblZhbHVlLnByb3RvdHlwZS5jbGVhckxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdWJzY3JpYmVycy5jbGVhcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBub3RpZmllZCB3aGVuIHRoZSBgTW90aW9uVmFsdWVgIHJlcXVlc3RzIGEgcmVuZGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmliZXIgLSBBIGZ1bmN0aW9uIHRoYXQncyBwcm92aWRlZCB0aGUgbGF0ZXN0IHZhbHVlLlxuICAgICAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHdpbGwgY2FuY2VsIHRoaXMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLm9uUmVuZGVyUmVxdWVzdCA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgLy8gUmVuZGVyIGltbWVkaWF0ZWx5XG4gICAgICAgIHN1YnNjcmlwdGlvbih0aGlzLmdldCgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU3Vic2NyaWJlcnMuYWRkKHN1YnNjcmlwdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhIHBhc3NpdmUgZWZmZWN0IHRvIHRoZSBgTW90aW9uVmFsdWVgLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChwYXNzaXZlRWZmZWN0KSB7XG4gICAgICAgIHRoaXMucGFzc2l2ZUVmZmVjdCA9IHBhc3NpdmVFZmZlY3Q7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzdGF0ZSBvZiB0aGUgYE1vdGlvblZhbHVlYC5cbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiBjb25zdCB4ID0gdXNlTW90aW9uVmFsdWUoMClcbiAgICAgKiB4LnNldCgxMClcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsYXRlc3QgLSBMYXRlc3QgdmFsdWUgdG8gc2V0LlxuICAgICAqIEBwYXJhbSByZW5kZXIgLSBXaGV0aGVyIHRvIG5vdGlmeSByZW5kZXIgc3Vic2NyaWJlcnMuIERlZmF1bHRzIHRvIGB0cnVlYFxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIE1vdGlvblZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgcmVuZGVyKSB7XG4gICAgICAgIGlmIChyZW5kZXIgPT09IHZvaWQgMCkgeyByZW5kZXIgPSB0cnVlOyB9XG4gICAgICAgIGlmICghcmVuZGVyIHx8ICF0aGlzLnBhc3NpdmVFZmZlY3QpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQW5kTm90aWZ5KHYsIHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhc3NpdmVFZmZlY3QodiwgdGhpcy51cGRhdGVBbmROb3RpZnkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3Qgc3RhdGUgb2YgYE1vdGlvblZhbHVlYFxuICAgICAqXG4gICAgICogQHJldHVybnMgLSBUaGUgbGF0ZXN0IHN0YXRlIG9mIGBNb3Rpb25WYWx1ZWBcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIE1vdGlvblZhbHVlLnByb3RvdHlwZS5nZXRQcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZWxvY2l0eSBvZiBgTW90aW9uVmFsdWVgXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyAtIFRoZSBsYXRlc3QgdmVsb2NpdHkgb2YgYE1vdGlvblZhbHVlYC4gUmV0dXJucyBgMGAgaWYgdGhlIHN0YXRlIGlzIG5vbi1udW1lcmljYWwuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGlzIGNvdWxkIGJlIGlzRmxvYXQodGhpcy5wcmV2KSAmJiBpc0Zsb2F0KHRoaXMuY3VycmVudCksIGJ1dCB0aGF0IHdvdWxkIGJlIHdhc3RlZnVsXG4gICAgICAgIHJldHVybiB0aGlzLmNhblRyYWNrVmVsb2NpdHlcbiAgICAgICAgICAgID8gLy8gVGhlc2UgY2FzdHMgY291bGQgYmUgYXZvaWRlZCBpZiBwYXJzZUZsb2F0IHdvdWxkIGJlIHR5cGVkIGJldHRlclxuICAgICAgICAgICAgICAgIHZlbG9jaXR5UGVyU2Vjb25kKHBhcnNlRmxvYXQodGhpcy5jdXJyZW50KSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5wcmV2KSwgdGhpcy50aW1lRGVsdGEpXG4gICAgICAgICAgICA6IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBuZXcgYW5pbWF0aW9uIHRvIGNvbnRyb2wgdGhpcyBgTW90aW9uVmFsdWVgLiBPbmx5IG9uZVxuICAgICAqIGFuaW1hdGlvbiBjYW4gZHJpdmUgYSBgTW90aW9uVmFsdWVgIGF0IG9uZSB0aW1lLlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogdmFsdWUuc3RhcnQoKVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiAtIEEgZnVuY3Rpb24gdGhhdCBzdGFydHMgdGhlIHByb3ZpZGVkIGFuaW1hdGlvblxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGFuaW1hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wQW5pbWF0aW9uID0gYW5pbWF0aW9uKHJlc29sdmUpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNsZWFyQW5pbWF0aW9uKCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RvcCB0aGUgY3VycmVudGx5IGFjdGl2ZSBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3BBbmltYXRpb24pXG4gICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5jbGVhckFuaW1hdGlvbigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhpcyB2YWx1ZSBpcyBjdXJyZW50bHkgYW5pbWF0aW5nLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIE1vdGlvblZhbHVlLnByb3RvdHlwZS5pc0FuaW1hdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdG9wQW5pbWF0aW9uO1xuICAgIH07XG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLmNsZWFyQW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzdHJveSBhbmQgY2xlYW4gdXAgc3Vic2NyaWJlcnMgdG8gdGhpcyBgTW90aW9uVmFsdWVgLlxuICAgICAqXG4gICAgICogVGhlIGBNb3Rpb25WYWx1ZWAgaG9va3MgbGlrZSBgdXNlTW90aW9uVmFsdWVgIGFuZCBgdXNlVHJhbnNmb3JtYCBhdXRvbWF0aWNhbGx5XG4gICAgICogaGFuZGxlIHRoZSBsaWZlY3ljbGUgb2YgdGhlIHJldHVybmVkIGBNb3Rpb25WYWx1ZWAsIHNvIHRoaXMgbWV0aG9kIGlzIG9ubHkgbmVjZXNzYXJ5IGlmIHlvdSd2ZSBtYW51YWxseVxuICAgICAqIGNyZWF0ZWQgYSBgTW90aW9uVmFsdWVgIHZpYSB0aGUgYG1vdGlvblZhbHVlYCBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdWJzY3JpYmVycy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlbmRlclN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1vdGlvblZhbHVlO1xufSgpKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIG1vdGlvblZhbHVlKGluaXQpIHtcbiAgICByZXR1cm4gbmV3IE1vdGlvblZhbHVlKGluaXQpO1xufVxuXG4vKipcbiAqIFZpc3VhbEVsZW1lbnQgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBwcm92aWRlcyBhIGdlbmVyaWMgYW5pbWF0aW9uLW9wdGltaXNlZCBpbnRlcmZhY2UgdG8gdGhlXG4gKiB1bmRlcmx5aW5nIHJlbmRlcmVyLlxuICpcbiAqIEN1cnJlbnRseSBtYW55IGZlYXR1cmVzIGludGVyYWN0IGRpcmVjdGx5IHdpdGggSFRNTFZpc3VhbEVsZW1lbnQvU1ZHVmlzdWFsRWxlbWVudFxuICogYnV0IHRoZSBpZGVhIGlzIHdlIGNhbiBjcmVhdGUsIGZvciBpbnN0YW5jZSwgYSBUaHJlZVZpc3VhbEVsZW1lbnQgdGhhdCBleHRlbmRzXG4gKiBWaXN1YWxFbGVtZW50IGFuZCB3ZSBjYW4gcXVpY2tseSBvZmZlciBhbGwgdGhlIHNhbWUgZmVhdHVyZXMuXG4gKi9cbnZhciBWaXN1YWxFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZpc3VhbEVsZW1lbnQocGFyZW50LCByZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gQW4gaXRlcmFibGUgbGlzdCBvZiBjdXJyZW50IGNoaWxkcmVuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgU2V0KCk7XG4gICAgICAgIC8vIFRoZSBsYXRlc3QgcmVzb2x2ZWQgTW90aW9uVmFsdWVzXG4gICAgICAgIHRoaXMubGF0ZXN0ID0ge307XG4gICAgICAgIC8vIEEgbWFwIG9mIE1vdGlvblZhbHVlcyB1c2VkIHRvIGFuaW1hdGUgdGhpcyBlbGVtZW50XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBVbnN1YnNjcmlwdGlvbiBjYWxsYmFja3MgZm9yIE1vdGlvblZhbHVlIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgdGhpcy52YWx1ZVN1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIEEgY29uZmlndXJhdGlvbiBmb3IgdGhpcyBWaXN1YWxFbGVtZW50LCBlYWNoIGRlcml2ZWQgY2xhc3MgY2FuIGV4dGVuZCB0aGlzLlxuICAgICAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgICAgICAvLyBBIHByZS1ib3VuZCBjYWxsIHRvIHRoZSB1c2VyLXByb3ZpZGVkIGBvblVwZGF0ZWAgY2FsbGJhY2suIFRoaXMgd29uJ3RcbiAgICAgICAgLy8gYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlIHBlciBmcmFtZS5cbiAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb25maWcub25VcGRhdGUoX3RoaXMubGF0ZXN0KTsgfTtcbiAgICAgICAgLy8gUHJlLWJvdW5kIHZlcnNpb24gb2YgcmVuZGVyXG4gICAgICAgIHRoaXMudHJpZ2dlclJlbmRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlbmRlcigpOyB9O1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGdldHMgcGFzc2VkIHRvIHRoZSByZW5kZXJlZCBjb21wb25lbnQncyBgcmVmYCBwcm9wXG4gICAgICAgIC8vIGFuZCBpcyB1c2VkIHRvIG1vdW50L3VubW91bnQgdGhlIFZpc3VhbEVsZW1lbnRcbiAgICAgICAgdGhpcy5yZWYgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudCA/IF90aGlzLm1vdW50KGVsZW1lbnQpIDogX3RoaXMudW5tb3VudCgpO1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5leHRlcm5hbFJlZilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLmV4dGVybmFsUmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5leHRlcm5hbFJlZihlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzUmVmT2JqZWN0KF90aGlzLmV4dGVybmFsUmVmKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmV4dGVybmFsUmVmLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBDcmVhdGUgYSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgcHJvdmlkZWQgcGFyZW50LlxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5yb290UGFyZW50ID0gcGFyZW50ID8gcGFyZW50LnJvb3RQYXJlbnQgOiB0aGlzO1xuICAgICAgICB0aGlzLnRyZWVQYXRoID0gcGFyZW50ID8gX19zcHJlYWQocGFyZW50LnRyZWVQYXRoLCBbcGFyZW50XSkgOiBbXTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXB0aCBvZiB0aGlzIG5vZGUgaW4gdGhlIFZpc3VhbEVsZW1lbnQgZ3JhcGhcbiAgICAgICAgdGhpcy5kZXB0aCA9IHBhcmVudCA/IHBhcmVudC5kZXB0aCArIDEgOiAwO1xuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byBhbnkgZXh0ZXJuYWxseS1kZWZpbmVkIFJlYWN0IHJlZi4gVGhpcyBtaWdodCBsaXZlIGJldHRlclxuICAgICAgICAvLyBvdXRzaWRlIHRoZSBWaXN1YWxFbGVtZW50IGFuZCBiZSBoYW5kbGVkIGluIGEgaG9vay5cbiAgICAgICAgdGhpcy5leHRlcm5hbFJlZiA9IHJlZjtcbiAgICB9XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uYWRkKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNoaWxkcmVuLmRlbGV0ZShjaGlsZCk7IH07XG4gICAgfTtcbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoaXMgZWxlbWVudCBoYXMgYSBNb3Rpb25WYWx1ZSBvZiB0aGUgcHJvdmlkZWQga2V5XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5oYXMoa2V5KTtcbiAgICB9O1xuICAgIC8vIEFkZCBhIE1vdGlvblZhbHVlXG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuYWRkVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZShrZXkpKVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShrZXkpO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U2luZ2xlU3RhdGljVmFsdWUoa2V5LCB2YWx1ZS5nZXQoKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9WYWx1ZShrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIFJlbW92ZSBhIE1vdGlvblZhbHVlXG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlVmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy52YWx1ZVN1YnNjcmlwdGlvbnMuZ2V0KGtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYSgpO1xuICAgICAgICB0aGlzLnZhbHVlU3Vic2NyaXB0aW9ucy5kZWxldGUoa2V5KTtcbiAgICAgICAgdGhpcy52YWx1ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxhdGVzdFtrZXldO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBNb3Rpb25WYWx1ZShkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIE1vdGlvblZhbHVlc1xuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmZvckVhY2hWYWx1ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8vIEdldCB0aGUgdW5kZXJseWluZyByZW5kZXJlZCBpbnN0YW5jZSBvZiB0aGlzIFZpc3VhbEVsZW1lbnQuIEZvciBpbnN0YW5jZSBpblxuICAgIC8vIEhUTUxWaXN1YWxFbGVtZW50IHRoaXMgd2lsbCBiZSBhIEhUTUxFbGVtZW50LlxuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUudXBkYXRlQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdGhpcy5jb25maWcgPSBfX2Fzc2lnbih7fSwgY29uZmlnKTtcbiAgICB9O1xuICAgIC8vIFNldCBhIHNpbmdsZSBgbGF0ZXN0YCB2YWx1ZVxuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnNldFNpbmdsZVN0YXRpY1ZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5sYXRlc3Rba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gICAgLy8gU3RhdGljYWxseSBzZXQgdmFsdWVzIHRvIGBsYXRlc3RgIHdpdGhvdXQgbmVlZGluZyBhIE1vdGlvblZhbHVlXG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2V0U3RhdGljVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcywgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2luZ2xlU3RhdGljVmFsdWUodmFsdWVzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaW5nbGVTdGF0aWNWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2NoZWR1bGVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN5bmMucmVuZGVyKHRoaXMudHJpZ2dlclJlbmRlciwgZmFsc2UsIHRydWUpO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2NoZWR1bGVVcGRhdGVMYXlvdXREZWx0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3luYy5wcmVSZW5kZXIodGhpcy5yb290UGFyZW50LnVwZGF0ZUxheW91dERlbHRhLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5zdWJzY3JpYmVUb1ZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKGxhdGVzdCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U2luZ2xlU3RhdGljVmFsdWUoa2V5LCBsYXRlc3QpO1xuICAgICAgICAgICAgLy8gU2NoZWR1bGUgb25VcGRhdGUgaWYgd2UgaGF2ZSBhbiBvblVwZGF0ZSBsaXN0ZW5lciBhbmQgdGhlIGNvbXBvbmVudCBoYXMgbW91bnRlZFxuICAgICAgICAgICAgX3RoaXMuZWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZy5vblVwZGF0ZSAmJlxuICAgICAgICAgICAgICAgIHN5bmMudXBkYXRlKF90aGlzLnVwZGF0ZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25SZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50ICYmIF90aGlzLnNjaGVkdWxlUmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bnN1YnNjcmliZU9uQ2hhbmdlID0gdmFsdWUub25DaGFuZ2Uob25DaGFuZ2UpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmVPblJlbmRlciA9IHZhbHVlLm9uUmVuZGVyUmVxdWVzdChvblJlbmRlcik7XG4gICAgICAgIHRoaXMudmFsdWVTdWJzY3JpcHRpb25zLnNldChrZXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlT25DaGFuZ2UoKTtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlT25SZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBNb3VudCB0aGUgVmlzdWFsRWxlbWVudCB3aXRoIHRoZSBhY3R1YWwgRE9NIGVsZW1lbnRcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGludmFyaWFudCghIWVsZW1lbnQsIFwiTm8gcmVmIGZvdW5kLiBFbnN1cmUgY29tcG9uZW50cyBjcmVhdGVkIHdpdGggbW90aW9uLmN1c3RvbSBmb3J3YXJkIHJlZnMgdXNpbmcgUmVhY3QuZm9yd2FyZFJlZlwiKTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21QYXJlbnQgPSB0aGlzLnBhcmVudC5zdWJzY3JpYmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNhdmUgdGhlIGVsZW1lbnQgdG8gdGhpcy5lbGVtZW50IGFzIGEgc2VtYW50aWMgQVBJLCB0aGlzLmN1cnJlbnQgdG8gdGhlIFZpc3VhbEVsZW1lbnRcbiAgICAgICAgICogaXMgY29tcGF0aWJsZSB3aXRoIGV4aXN0aW5nIFJlZk9iamVjdCBBUElzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jdXJyZW50ID0gZWxlbWVudDtcbiAgICB9O1xuICAgIC8vIFVubW91bnQgdGhlIFZpc3VhbEVsZW1lbnQgYW5kIGNhbmNlbCBhbnkgc2NoZWR1bGVkIHVwZGF0ZXNcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZvckVhY2hWYWx1ZShmdW5jdGlvbiAoXywga2V5KSB7IHJldHVybiBfdGhpcy5yZW1vdmVWYWx1ZShrZXkpOyB9KTtcbiAgICAgICAgY2FuY2VsU3luYy51cGRhdGUodGhpcy51cGRhdGUpO1xuICAgICAgICBjYW5jZWxTeW5jLnJlbmRlcih0aGlzLnJlbmRlcik7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCAmJiB0aGlzLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICB9O1xuICAgIHJldHVybiBWaXN1YWxFbGVtZW50O1xufSgpKTtcblxuZnVuY3Rpb24gbm9vcChhbnkpIHtcbiAgICByZXR1cm4gYW55O1xufVxuXG4vKipcbiAqIEJvdW5kaW5nIGJveGVzIHRlbmQgdG8gYmUgZGVmaW5lZCBhcyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20uIEZvciB2YXJpb3VzIG9wZXJhdGlvbnNcbiAqIGl0J3MgZWFzaWVyIHRvIGNvbnNpZGVyIGVhY2ggYXhpcyBpbmRpdmlkdWFsbHkuIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGJvdW5kaW5nIGJveFxuICogYXMgYSBtYXAgb2Ygc2luZ2xlLWF4aXMgbWluL21heCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRCb3VuZGluZ0JveFRvQXhpc0JveChfYSkge1xuICAgIHZhciB0b3AgPSBfYS50b3AsIGxlZnQgPSBfYS5sZWZ0LCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b207XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogeyBtaW46IGxlZnQsIG1heDogcmlnaHQgfSxcbiAgICAgICAgeTogeyBtaW46IHRvcCwgbWF4OiBib3R0b20gfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gY29udmVydEF4aXNCb3hUb0JvdW5kaW5nQm94KF9hKSB7XG4gICAgdmFyIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHkubWluLFxuICAgICAgICBib3R0b206IHkubWF4LFxuICAgICAgICBsZWZ0OiB4Lm1pbixcbiAgICAgICAgcmlnaHQ6IHgubWF4LFxuICAgIH07XG59XG4vKipcbiAqIEFwcGxpZXMgYSBUcmFuc2Zvcm1Qb2ludCBmdW5jdGlvbiB0byBhIGJvdW5kaW5nIGJveC4gVHJhbnNmb3JtUG9pbnQgaXMgdXN1YWxseSBhIGZ1bmN0aW9uXG4gKiBwcm92aWRlZCBieSBGcmFtZXIgdG8gYWxsb3cgbWVhc3VyZWQgcG9pbnRzIHRvIGJlIGNvcnJlY3RlZCBmb3IgZGV2aWNlIHNjYWxpbmcuIFRoaXMgaXMgdXNlZFxuICogd2hlbiBtZWFzdXJpbmcgRE9NIGVsZW1lbnRzIGFuZCBET00gZXZlbnQgcG9pbnRzLlxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZGluZ0JveChfYSwgdHJhbnNmb3JtUG9pbnQpIHtcbiAgICB2YXIgdG9wID0gX2EudG9wLCBsZWZ0ID0gX2EubGVmdCwgYm90dG9tID0gX2EuYm90dG9tLCByaWdodCA9IF9hLnJpZ2h0O1xuICAgIGlmICh0cmFuc2Zvcm1Qb2ludCA9PT0gdm9pZCAwKSB7IHRyYW5zZm9ybVBvaW50ID0gbm9vcDsgfVxuICAgIHZhciB0b3BMZWZ0ID0gdHJhbnNmb3JtUG9pbnQoeyB4OiBsZWZ0LCB5OiB0b3AgfSk7XG4gICAgdmFyIGJvdHRvbVJpZ2h0ID0gdHJhbnNmb3JtUG9pbnQoeyB4OiByaWdodCwgeTogYm90dG9tIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdG9wTGVmdC55LFxuICAgICAgICBsZWZ0OiB0b3BMZWZ0LngsXG4gICAgICAgIGJvdHRvbTogYm90dG9tUmlnaHQueSxcbiAgICAgICAgcmlnaHQ6IGJvdHRvbVJpZ2h0LngsXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIGVtcHR5IGF4aXMgYm94IG9mIHplcm8gc2l6ZVxuICovXG5mdW5jdGlvbiBheGlzQm94KCkge1xuICAgIHJldHVybiB7IHg6IHsgbWluOiAwLCBtYXg6IDEgfSwgeTogeyBtaW46IDAsIG1heDogMSB9IH07XG59XG5mdW5jdGlvbiBjb3B5QXhpc0JveChib3gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBfX2Fzc2lnbih7fSwgYm94LngpLFxuICAgICAgICB5OiBfX2Fzc2lnbih7fSwgYm94LnkpLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlbXB0eSBib3ggZGVsdGFcbiAqL1xudmFyIHplcm9EZWx0YSA9IHtcbiAgICB0cmFuc2xhdGU6IDAsXG4gICAgc2NhbGU6IDEsXG4gICAgb3JpZ2luOiAwLFxuICAgIG9yaWdpblBvaW50OiAwLFxufTtcbmZ1bmN0aW9uIGRlbHRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IF9fYXNzaWduKHt9LCB6ZXJvRGVsdGEpLFxuICAgICAgICB5OiBfX2Fzc2lnbih7fSwgemVyb0RlbHRhKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFZhbHVlVHlwZSBmb3IgXCJhdXRvXCJcbiAqL1xudmFyIGF1dG8gPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYgPT09IFwiYXV0b1wiOyB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiAodikgeyByZXR1cm4gdjsgfSxcbn07XG4vKipcbiAqIFZhbHVlVHlwZSBmb3IgaW50c1xuICovXG52YXIgaW50ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG51bWJlciksIHsgdHJhbnNmb3JtOiBNYXRoLnJvdW5kIH0pO1xuLyoqXG4gKiBBIG1hcCBvZiBkZWZhdWx0IHZhbHVlIHR5cGVzIGZvciBjb21tb24gdmFsdWVzXG4gKi9cbnZhciBkZWZhdWx0VmFsdWVUeXBlcyA9IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBjb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgIG91dGxpbmVDb2xvcjogY29sb3IsXG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlcldpZHRoOiBweCxcbiAgICBib3JkZXJUb3BXaWR0aDogcHgsXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogcHgsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IHB4LFxuICAgIGJvcmRlckxlZnRXaWR0aDogcHgsXG4gICAgYm9yZGVyUmFkaXVzOiBweCxcbiAgICByYWRpdXM6IHB4LFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHB4LFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBweCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogcHgsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogcHgsXG4gICAgLy8gUG9zaXRpb25pbmcgcHJvcHNcbiAgICB3aWR0aDogcHgsXG4gICAgbWF4V2lkdGg6IHB4LFxuICAgIGhlaWdodDogcHgsXG4gICAgbWF4SGVpZ2h0OiBweCxcbiAgICBzaXplOiBweCxcbiAgICB0b3A6IHB4LFxuICAgIHJpZ2h0OiBweCxcbiAgICBib3R0b206IHB4LFxuICAgIGxlZnQ6IHB4LFxuICAgIC8vIFNwYWNpbmcgcHJvcHNcbiAgICBwYWRkaW5nOiBweCxcbiAgICBwYWRkaW5nVG9wOiBweCxcbiAgICBwYWRkaW5nUmlnaHQ6IHB4LFxuICAgIHBhZGRpbmdCb3R0b206IHB4LFxuICAgIHBhZGRpbmdMZWZ0OiBweCxcbiAgICBtYXJnaW46IHB4LFxuICAgIG1hcmdpblRvcDogcHgsXG4gICAgbWFyZ2luUmlnaHQ6IHB4LFxuICAgIG1hcmdpbkJvdHRvbTogcHgsXG4gICAgbWFyZ2luTGVmdDogcHgsXG4gICAgLy8gVHJhbnNmb3JtIHByb3BzXG4gICAgcm90YXRlOiBkZWdyZWVzLFxuICAgIHJvdGF0ZVg6IGRlZ3JlZXMsXG4gICAgcm90YXRlWTogZGVncmVlcyxcbiAgICByb3RhdGVaOiBkZWdyZWVzLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgc2NhbGVaOiBzY2FsZSxcbiAgICBza2V3OiBkZWdyZWVzLFxuICAgIHNrZXdYOiBkZWdyZWVzLFxuICAgIHNrZXdZOiBkZWdyZWVzLFxuICAgIGRpc3RhbmNlOiBweCxcbiAgICB0cmFuc2xhdGVYOiBweCxcbiAgICB0cmFuc2xhdGVZOiBweCxcbiAgICB0cmFuc2xhdGVaOiBweCxcbiAgICB4OiBweCxcbiAgICB5OiBweCxcbiAgICB6OiBweCxcbiAgICBwZXJzcGVjdGl2ZTogcHgsXG4gICAgdHJhbnNmb3JtUGVyc3BlY3RpdmU6IHB4LFxuICAgIG9wYWNpdHk6IGFscGhhLFxuICAgIG9yaWdpblg6IHByb2dyZXNzUGVyY2VudGFnZSxcbiAgICBvcmlnaW5ZOiBwcm9ncmVzc1BlcmNlbnRhZ2UsXG4gICAgb3JpZ2luWjogcHgsXG4gICAgLy8gTWlzY1xuICAgIHpJbmRleDogaW50LFxuICAgIC8vIFNWR1xuICAgIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgICBzdHJva2VPcGFjaXR5OiBhbHBoYSxcbiAgICBudW1PY3RhdmVzOiBpbnQsXG59O1xuLyoqXG4gKiBBIGxpc3Qgb2YgdmFsdWUgdHlwZXMgY29tbW9ubHkgdXNlZCBmb3IgZGltZW5zaW9uc1xuICovXG52YXIgZGltZW5zaW9uVmFsdWVUeXBlcyA9IFtudW1iZXIsIHB4LCBwZXJjZW50LCBkZWdyZWVzLCB2dywgdmgsIGF1dG9dO1xuLyoqXG4gKiBUZXN0cyBhIHByb3ZpZGVkIHZhbHVlIGFnYWluc3QgYSBWYWx1ZVR5cGVcbiAqL1xudmFyIHRlc3RWYWx1ZVR5cGUgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIHR5cGUudGVzdCh2KTsgfTsgfTtcbi8qKlxuICogVGVzdHMgYSBkaW1lbnNpb25hbCB2YWx1ZSBhZ2FpbnN0IHRoZSBsaXN0IG9mIGRpbWVuc2lvbiBWYWx1ZVR5cGVzXG4gKi9cbnZhciBmaW5kRGltZW5zaW9uVmFsdWVUeXBlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gZGltZW5zaW9uVmFsdWVUeXBlcy5maW5kKHRlc3RWYWx1ZVR5cGUodikpO1xufTtcbi8qKlxuICogQSBsaXN0IG9mIGFsbCBWYWx1ZVR5cGVzXG4gKi9cbnZhciB2YWx1ZVR5cGVzID0gX19zcHJlYWQoZGltZW5zaW9uVmFsdWVUeXBlcywgW2NvbG9yLCBjb21wbGV4XSk7XG4vKipcbiAqIFRlc3RzIGEgdmFsdWUgYWdhaW5zdCB0aGUgbGlzdCBvZiBWYWx1ZVR5cGVzXG4gKi9cbnZhciBmaW5kVmFsdWVUeXBlID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHZhbHVlVHlwZXMuZmluZCh0ZXN0VmFsdWVUeXBlKHYpKTsgfTtcbi8qKlxuICogR2V0cyB0aGUgZGVmYXVsdCBWYWx1ZVR5cGUgZm9yIHRoZSBwcm92aWRlZCB2YWx1ZSBrZXlcbiAqL1xudmFyIGdldERlZmF1bHRWYWx1ZVR5cGUgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBkZWZhdWx0VmFsdWVUeXBlc1trZXldOyB9O1xuLyoqXG4gKiBQcm92aWRlZCBhIHZhbHVlIGFuZCBhIFZhbHVlVHlwZSwgcmV0dXJucyB0aGUgdmFsdWUgYXMgdGhhdCB2YWx1ZSB0eXBlLlxuICovXG52YXIgZ2V0VmFsdWVBc1R5cGUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgPyB0eXBlLnRyYW5zZm9ybSh2YWx1ZSlcbiAgICAgICAgOiB2YWx1ZTtcbn07XG5cbi8qKlxuICogQSBsaXN0IG9mIGFsbCB0cmFuc2Zvcm1hYmxlIGF4ZXMuIFdlJ2xsIHVzZSB0aGlzIGxpc3QgdG8gZ2VuZXJhdGVkIGEgdmVyc2lvblxuICogb2YgZWFjaCBheGVzIGZvciBlYWNoIHRyYW5zZm9ybS5cbiAqL1xudmFyIHRyYW5zZm9ybUF4ZXMgPSBbXCJcIiwgXCJYXCIsIFwiWVwiLCBcIlpcIl07XG4vKipcbiAqIEFuIG9yZGVyZWQgYXJyYXkgb2YgZWFjaCB0cmFuc2Zvcm1hYmxlIHZhbHVlLiBCeSBkZWZhdWx0LCB0cmFuc2Zvcm0gdmFsdWVzXG4gKiB3aWxsIGJlIHNvcnRlZCB0byB0aGlzIG9yZGVyLlxuICovXG52YXIgb3JkZXIgPSBbXCJwZXJzcGVjdGl2ZVwiLCBcInRyYW5zbGF0ZVwiLCBcInNjYWxlXCIsIFwicm90YXRlXCIsIFwic2tld1wiXTtcbi8qKlxuICogVXNlZCB0byBzdG9yZSB0aGUga2V5cyBvZiBhbGwgdHJhbnNmb3JtcyB0aGF0IHdpbGwgZGlzdG9ydGVkIGEgbWVhc3VyZWQgYm91bmRpbmcgYm94LlxuICovXG52YXIgYm94RGlzdG9ydGluZ0tleXMgPSBuZXcgU2V0KCk7XG4vKipcbiAqIEdlbmVyYXRlIGEgbGlzdCBvZiBldmVyeSBwb3NzaWJsZSB0cmFuc2Zvcm0ga2V5LlxuICovXG52YXIgdHJhbnNmb3JtUHJvcHMgPSBbXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLCBcInhcIiwgXCJ5XCIsIFwielwiXTtcbm9yZGVyLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdGlvbktleSkge1xuICAgIHZhciBpc0Rpc3RvcnRpbmcgPSBuZXcgU2V0KFtcInJvdGF0ZVwiLCBcInNrZXdcIl0pLmhhcyhvcGVyYXRpb25LZXkpO1xuICAgIHRyYW5zZm9ybUF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhlc0tleSkge1xuICAgICAgICB2YXIga2V5ID0gb3BlcmF0aW9uS2V5ICsgYXhlc0tleTtcbiAgICAgICAgdHJhbnNmb3JtUHJvcHMucHVzaChrZXkpO1xuICAgICAgICBpc0Rpc3RvcnRpbmcgJiYgYm94RGlzdG9ydGluZ0tleXMuYWRkKGtleSk7XG4gICAgfSk7XG59KTtcbi8qKlxuICogQSBmdW5jdGlvbiB0byB1c2Ugd2l0aCBBcnJheS5zb3J0IHRvIHNvcnQgdHJhbnNmb3JtIGtleXMgYnkgdGhlaXIgZGVmYXVsdCBvcmRlci5cbiAqL1xuZnVuY3Rpb24gc29ydFRyYW5zZm9ybVByb3BzKGEsIGIpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHMuaW5kZXhPZihhKSAtIHRyYW5zZm9ybVByb3BzLmluZGV4T2YoYik7XG59XG4vKipcbiAqIEEgcXVpY2sgbG9va3VwIGZvciB0cmFuc2Zvcm0gcHJvcHMuXG4gKi9cbnZhciB0cmFuc2Zvcm1Qcm9wU2V0ID0gbmV3IFNldCh0cmFuc2Zvcm1Qcm9wcyk7XG5mdW5jdGlvbiBpc1RyYW5zZm9ybVByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BTZXQuaGFzKGtleSk7XG59XG4vKipcbiAqIEEgcXVpY2sgbG9va3VwIGZvciB0cmFuc2Zvcm0gb3JpZ2luIHByb3BzXG4gKi9cbnZhciB0cmFuc2Zvcm1PcmlnaW5Qcm9wcyA9IG5ldyBTZXQoW1wib3JpZ2luWFwiLCBcIm9yaWdpbllcIiwgXCJvcmlnaW5aXCJdKTtcbmZ1bmN0aW9uIGlzVHJhbnNmb3JtT3JpZ2luUHJvcChrZXkpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtT3JpZ2luUHJvcHMuaGFzKGtleSk7XG59XG5cbnZhciB0cmFuc2xhdGVBbGlhcyA9IHtcbiAgICB4OiBcInRyYW5zbGF0ZVhcIixcbiAgICB5OiBcInRyYW5zbGF0ZVlcIixcbiAgICB6OiBcInRyYW5zbGF0ZVpcIixcbiAgICB0cmFuc2Zvcm1QZXJzcGVjdGl2ZTogXCJwZXJzcGVjdGl2ZVwiLFxufTtcbi8qKlxuICogQnVpbGQgYSBDU1MgdHJhbnNmb3JtIHN0eWxlIGZyb20gaW5kaXZpZHVhbCB4L3kvc2NhbGUgZXRjIHByb3BlcnRpZXMuXG4gKlxuICogVGhpcyBvdXRwdXRzIHdpdGggYSBkZWZhdWx0IG9yZGVyIG9mIHRyYW5zZm9ybXMvc2NhbGVzL3JvdGF0aW9ucywgdGhpcyBjYW4gYmUgY3VzdG9taXNlZCBieVxuICogcHJvdmlkaW5nIGEgdHJhbnNmb3JtVGVtcGxhdGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkVHJhbnNmb3JtKHRyYW5zZm9ybSwgdHJhbnNmb3JtS2V5cywgdHJhbnNmb3JtVGVtcGxhdGUsIHRyYW5zZm9ybUlzRGVmYXVsdCwgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24sIGFsbG93VHJhbnNmb3JtTm9uZSkge1xuICAgIGlmIChlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiA9PT0gdm9pZCAwKSB7IGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gdHJ1ZTsgfVxuICAgIGlmIChhbGxvd1RyYW5zZm9ybU5vbmUgPT09IHZvaWQgMCkgeyBhbGxvd1RyYW5zZm9ybU5vbmUgPSB0cnVlOyB9XG4gICAgLy8gVGhlIHRyYW5zZm9ybSBzdHJpbmcgd2UncmUgZ29pbmcgdG8gYnVpbGQgaW50by5cbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gXCJcIjtcbiAgICAvLyBUcmFuc2Zvcm0ga2V5cyBpbnRvIHRoZWlyIGRlZmF1bHQgb3JkZXIgLSB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBvdXRwdXQgb3JkZXIuXG4gICAgdHJhbnNmb3JtS2V5cy5zb3J0KHNvcnRUcmFuc2Zvcm1Qcm9wcyk7XG4gICAgLy8gVHJhY2sgd2hldGhlciB0aGUgZGVmaW5lZCB0cmFuc2Zvcm0gaGFzIGEgZGVmaW5lZCB6IHNvIHdlIGRvbid0IGFkZCBhXG4gICAgLy8gc2Vjb25kIHRvIGVuYWJsZSBoYXJkd2FyZSBhY2NlbGVyYXRpb25cbiAgICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuICAgIC8vIExvb3Agb3ZlciBlYWNoIHRyYW5zZm9ybSBhbmQgYnVpbGQgdGhlbSBpbnRvIHRyYW5zZm9ybVN0cmluZ1xuICAgIHZhciBudW1UcmFuc2Zvcm1LZXlzID0gdHJhbnNmb3JtS2V5cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1LZXlzOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHRyYW5zZm9ybUtleXNbaV07XG4gICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSAodHJhbnNsYXRlQWxpYXNba2V5XSB8fCBrZXkpICsgXCIoXCIgKyB0cmFuc2Zvcm1ba2V5XSArIFwiKSBcIjtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJ6XCIpXG4gICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBcInRyYW5zbGF0ZVooMClcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybVN0cmluZyA9IHRyYW5zZm9ybVN0cmluZy50cmltKCk7XG4gICAgfVxuICAgIC8vIElmIHdlIGhhdmUgYSBjdXN0b20gYHRyYW5zZm9ybWAgdGVtcGxhdGUsIHBhc3Mgb3VyIHRyYW5zZm9ybSB2YWx1ZXMgYW5kXG4gICAgLy8gZ2VuZXJhdGVkIHRyYW5zZm9ybVN0cmluZyB0byB0aGF0IGJlZm9yZSByZXR1cm5pbmdcbiAgICBpZiAodHJhbnNmb3JtVGVtcGxhdGUpIHtcbiAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gdHJhbnNmb3JtVGVtcGxhdGUodHJhbnNmb3JtLCB0cmFuc2Zvcm1Jc0RlZmF1bHQgPyBcIlwiIDogdHJhbnNmb3JtU3RyaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYWxsb3dUcmFuc2Zvcm1Ob25lICYmIHRyYW5zZm9ybUlzRGVmYXVsdCkge1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybVN0cmluZztcbn1cbi8qKlxuICogQnVpbGQgYSB0cmFuc2Zvcm1PcmlnaW4gc3R5bGUuIFVzZXMgdGhlIHNhbWUgZGVmYXVsdHMgYXMgdGhlIGJyb3dzZXIgZm9yXG4gKiB1bmRlZmluZWQgb3JpZ2lucy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRUcmFuc2Zvcm1PcmlnaW4oX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5vcmlnaW5YLCBvcmlnaW5YID0gX2IgPT09IHZvaWQgMCA/IFwiNTAlXCIgOiBfYiwgX2MgPSBfYS5vcmlnaW5ZLCBvcmlnaW5ZID0gX2MgPT09IHZvaWQgMCA/IFwiNTAlXCIgOiBfYywgX2QgPSBfYS5vcmlnaW5aLCBvcmlnaW5aID0gX2QgPT09IHZvaWQgMCA/IDAgOiBfZDtcbiAgICByZXR1cm4gb3JpZ2luWCArIFwiIFwiICsgb3JpZ2luWSArIFwiIFwiICsgb3JpZ2luWjtcbn1cbi8qKlxuICogQnVpbGQgYSB0cmFuc2Zvcm0gc3R5bGUgdGhhdCB0YWtlcyBhIGNhbGN1bGF0ZWQgZGVsdGEgYmV0d2VlbiB0aGUgZWxlbWVudCdzIGN1cnJlbnRcbiAqIHNwYWNlIG9uIHNjcmVlbiBhbmQgcHJvamVjdHMgaXQgaW50byB0aGUgZGVzaXJlZCBzcGFjZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRMYXlvdXRQcm9qZWN0aW9uVHJhbnNmb3JtKF9hLCB0cmVlU2NhbGUpIHtcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgIC8qKlxuICAgICAqIFRoZSB0cmFuc2xhdGlvbnMgd2UgdXNlIHRvIGNhbGN1bGF0ZSBhcmUgYWx3YXlzIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHNwYWNlLlxuICAgICAqIEJ1dCB3aGVuIHdlIGFwcGx5IHNjYWxlcywgd2UgYWxzbyBzY2FsZSB0aGUgY29vcmRpbmF0ZSBzcGFjZSBvZiBhbiBlbGVtZW50IGFuZCBpdHMgY2hpbGRyZW4uXG4gICAgICogRm9yIGluc3RhbmNlIGlmIHdlIGhhdmUgYSB0cmVlU2NhbGUgKHRoZSBjdWxtaW5hdGlvbiBvZiBhbGwgcGFyZW50IHNjYWxlcykgb2YgMC41IGFuZCB3ZSBuZWVkXG4gICAgICogdG8gbW92ZSBhbiBlbGVtZW50IDEwMCBwaXhlbHMsIHdlIGFjdHVhbGx5IG5lZWQgdG8gbW92ZSBpdCAyMDAgaW4gd2l0aGluIHRoYXQgc2NhbGVkIHNwYWNlLlxuICAgICAqL1xuICAgIHZhciB4VHJhbnNsYXRlID0geC50cmFuc2xhdGUgLyB0cmVlU2NhbGUueDtcbiAgICB2YXIgeVRyYW5zbGF0ZSA9IHkudHJhbnNsYXRlIC8gdHJlZVNjYWxlLnk7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlM2QoXCIgKyB4VHJhbnNsYXRlICsgXCJweCwgXCIgKyB5VHJhbnNsYXRlICsgXCJweCwgMCkgc2NhbGUoXCIgKyB4LnNjYWxlICsgXCIsIFwiICsgeS5zY2FsZSArIFwiKVwiO1xufVxudmFyIGlkZW50aXR5UHJvamVjdGlvbiA9IGJ1aWxkTGF5b3V0UHJvamVjdGlvblRyYW5zZm9ybShkZWx0YSgpLCB7XG4gICAgeDogMSxcbiAgICB5OiAxLFxufSk7XG4vKipcbiAqIFRha2UgdGhlIGNhbGN1bGF0ZWQgZGVsdGEgb3JpZ2luIGFuZCBhcHBseSBpdCBhcyBhIHRyYW5zZm9ybSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTGF5b3V0UHJvamVjdGlvblRyYW5zZm9ybU9yaWdpbihfYSkge1xuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnk7XG4gICAgcmV0dXJuIHgub3JpZ2luICogMTAwICsgXCIlIFwiICsgeS5vcmlnaW4gKiAxMDAgKyBcIiUgMFwiO1xufVxuLyoqXG4gKiBCdWlsZCBhIHRyYW5zZm9ybSBzdHJpbmcgb25seSBmcm9tIHRoZSBwcm9wZXJ0aWVzIHRoYXQgZGlzdG9ydCBib3VuZGluZyBib3ggbWVhc3VyZW1lbnRzXG4gKiAocm90YXRlIGFuZCBza2V3KVxuICovXG5mdW5jdGlvbiBidWlsZEJveERpc3RvcnRpbmdUcmFuc2Zvcm1zKHRyYW5zZm9ybSwgdHJhbnNmb3JtS2V5cykge1xuICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSBcIlwiO1xuICAgIHRyYW5zZm9ybUtleXMuc29ydChzb3J0VHJhbnNmb3JtUHJvcHMpO1xuICAgIHZhciBudW1UcmFuc2Zvcm1LZXlzID0gdHJhbnNmb3JtS2V5cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1LZXlzOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHRyYW5zZm9ybUtleXNbaV07XG4gICAgICAgIGlmIChib3hEaXN0b3J0aW5nS2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArIFwiKFwiICsgdHJhbnNmb3JtW2tleV0gKyBcIikgXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybVN0cmluZztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGtleSBpcyBhIENTUyB2YXJpYWJsZVxuICovXG5mdW5jdGlvbiBpc0NTU1ZhcmlhYmxlKGtleSkge1xuICAgIHJldHVybiBrZXkuc3RhcnRzV2l0aChcIi0tXCIpO1xufVxuXG5mdW5jdGlvbiBpc0NTU1ZhcmlhYmxlJDEodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLnN0YXJ0c1dpdGgoXCJ2YXIoLS1cIik7XG59XG4vKipcbiAqIFBhcnNlIEZyYW1lcidzIHNwZWNpYWwgQ1NTIHZhcmlhYmxlIGZvcm1hdCBpbnRvIGEgQ1NTIHRva2VuIGFuZCBhIGZhbGxiYWNrLlxuICpcbiAqIGBgYFxuICogYHZhcigtLWZvbywgI2ZmZilgID0+IFtgLS1mb29gLCAnI2ZmZiddXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY3VycmVudFxuICovXG52YXIgY3NzVmFyaWFibGVSZWdleCA9IC92YXJcXCgoLS1bYS16QS1aMC05LV9dKyksPyA/KFthLXpBLVowLTkgKCklIy4sLV0rKT9cXCkvO1xuZnVuY3Rpb24gcGFyc2VDU1NWYXJpYWJsZShjdXJyZW50KSB7XG4gICAgdmFyIG1hdGNoID0gY3NzVmFyaWFibGVSZWdleC5leGVjKGN1cnJlbnQpO1xuICAgIGlmICghbWF0Y2gpXG4gICAgICAgIHJldHVybiBbLF07XG4gICAgdmFyIF9hID0gX19yZWFkKG1hdGNoLCAzKSwgdG9rZW4gPSBfYVsxXSwgZmFsbGJhY2sgPSBfYVsyXTtcbiAgICByZXR1cm4gW3Rva2VuLCBmYWxsYmFja107XG59XG52YXIgbWF4RGVwdGggPSA0O1xuZnVuY3Rpb24gZ2V0VmFyaWFibGVWYWx1ZShjdXJyZW50LCBlbGVtZW50LCBkZXB0aCkge1xuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7IGRlcHRoID0gMTsgfVxuICAgIGludmFyaWFudChkZXB0aCA8PSBtYXhEZXB0aCwgXCJNYXggQ1NTIHZhcmlhYmxlIGZhbGxiYWNrIGRlcHRoIGRldGVjdGVkIGluIHByb3BlcnR5IFxcXCJcIiArIGN1cnJlbnQgKyBcIlxcXCIuIFRoaXMgbWF5IGluZGljYXRlIGEgY2lyY3VsYXIgZmFsbGJhY2sgZGVwZW5kZW5jeS5cIik7XG4gICAgdmFyIF9hID0gX19yZWFkKHBhcnNlQ1NTVmFyaWFibGUoY3VycmVudCksIDIpLCB0b2tlbiA9IF9hWzBdLCBmYWxsYmFjayA9IF9hWzFdO1xuICAgIC8vIE5vIENTUyB2YXJpYWJsZSBkZXRlY3RlZFxuICAgIGlmICghdG9rZW4pXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBBdHRlbXB0IHRvIHJlYWQgdGhpcyBDU1MgdmFyaWFibGUgb2ZmIHRoZSBlbGVtZW50XG4gICAgdmFyIHJlc29sdmVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSh0b2tlbik7XG4gICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNDU1NWYXJpYWJsZSQxKGZhbGxiYWNrKSkge1xuICAgICAgICAvLyBUaGUgZmFsbGJhY2sgbWlnaHQgaXRzZWxmIGJlIGEgQ1NTIHZhcmlhYmxlLCBpbiB3aGljaCBjYXNlIHdlIGF0dGVtcHQgdG8gcmVzb2x2ZSBpdCB0b28uXG4gICAgICAgIHJldHVybiBnZXRWYXJpYWJsZVZhbHVlKGZhbGxiYWNrLCBlbGVtZW50LCBkZXB0aCArIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrO1xuICAgIH1cbn1cbi8qKlxuICogUmVzb2x2ZSBDU1MgdmFyaWFibGVzIGZyb21cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUNTU1ZhcmlhYmxlcyh2aXN1YWxFbGVtZW50LCBfYSwgdHJhbnNpdGlvbkVuZCkge1xuICAgIHZhciBfYjtcbiAgICB2YXIgdGFyZ2V0ID0gX19yZXN0KF9hLCBbXSk7XG4gICAgdmFyIGVsZW1lbnQgPSB2aXN1YWxFbGVtZW50LmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgcmV0dXJuIHsgdGFyZ2V0OiB0YXJnZXQsIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQgfTtcbiAgICAvLyBJZiBgdHJhbnNpdGlvbkVuZGAgaXNuJ3QgYHVuZGVmaW5lZGAsIGNsb25lIGl0LiBXZSBjb3VsZCBjbG9uZSBgdGFyZ2V0YCBhbmQgYHRyYW5zaXRpb25FbmRgXG4gICAgLy8gb25seSBpZiB0aGV5IGNoYW5nZSBidXQgSSB0aGluayB0aGlzIHJlYWRzIGNsZWFyZXIgYW5kIHRoaXMgaXNuJ3QgYSBwZXJmb3JtYW5jZS1jcml0aWNhbCBwYXRoLlxuICAgIGlmICh0cmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHRyYW5zaXRpb25FbmQgPSBfX2Fzc2lnbih7fSwgdHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICAgIC8vIEdvIHRocm91Z2ggZXhpc3RpbmcgYE1vdGlvblZhbHVlYHMgYW5kIGVuc3VyZSBhbnkgZXhpc3RpbmcgQ1NTIHZhcmlhYmxlcyBhcmUgcmVzb2x2ZWRcbiAgICB2aXN1YWxFbGVtZW50LmZvckVhY2hWYWx1ZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSB2YWx1ZS5nZXQoKTtcbiAgICAgICAgaWYgKCFpc0NTU1ZhcmlhYmxlJDEoY3VycmVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciByZXNvbHZlZCA9IGdldFZhcmlhYmxlVmFsdWUoY3VycmVudCwgZWxlbWVudCk7XG4gICAgICAgIGlmIChyZXNvbHZlZClcbiAgICAgICAgICAgIHZhbHVlLnNldChyZXNvbHZlZCk7XG4gICAgfSk7XG4gICAgLy8gQ3ljbGUgdGhyb3VnaCBldmVyeSB0YXJnZXQgcHJvcGVydHkgYW5kIHJlc29sdmUgQ1NTIHZhcmlhYmxlcy4gQ3VycmVudGx5XG4gICAgLy8gd2Ugb25seSByZWFkIHNpbmdsZS12YXIgcHJvcGVydGllcyBsaWtlIGB2YXIoLS1mb28pYCwgbm90IGBjYWxjKHZhcigtLWZvbykgKyAyMHB4KWBcbiAgICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmICghaXNDU1NWYXJpYWJsZSQxKGN1cnJlbnQpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IGdldFZhcmlhYmxlVmFsdWUoY3VycmVudCwgZWxlbWVudCk7XG4gICAgICAgIGlmICghcmVzb2x2ZWQpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgLy8gQ2xvbmUgdGFyZ2V0IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSByZXNvbHZlZDtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGFscmVhZHkgc2V0IHRoaXMga2V5IG9uIGB0cmFuc2l0aW9uRW5kYCwgc2V0IGl0IHRvIHRoZSB1bnJlc29sdmVkXG4gICAgICAgIC8vIENTUyB2YXJpYWJsZS4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGFmdGVyIHRoZSBhbmltYXRpb24gdGhlIGNvbXBvbmVudCB3aWxsIHJlZmxlY3RcbiAgICAgICAgLy8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIENTUyB2YXJpYWJsZS5cbiAgICAgICAgaWYgKHRyYW5zaXRpb25FbmQpXG4gICAgICAgICAgICAoX2IgPSB0cmFuc2l0aW9uRW5kW2tleV0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICh0cmFuc2l0aW9uRW5kW2tleV0gPSBjdXJyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdGFyZ2V0OiB0YXJnZXQsIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQgfTtcbn1cblxuZnVuY3Rpb24gcGl4ZWxzVG9QZXJjZW50KHBpeGVscywgYXhpcykge1xuICAgIHJldHVybiAocGl4ZWxzIC8gKGF4aXMubWF4IC0gYXhpcy5taW4pKSAqIDEwMDtcbn1cbi8qKlxuICogV2UgYWx3YXlzIGNvcnJlY3QgYm9yZGVyUmFkaXVzIGFzIGEgcGVyY2VudGFnZSByYXRoZXIgdGhhbiBwaXhlbHMgdG8gcmVkdWNlIHBhaW50cy5cbiAqIEZvciBleGFtcGxlLCBpZiB5b3UgYXJlIHByb2plY3RpbmcgYSBib3ggdGhhdCBpcyAxMDBweCB3aWRlIHdpdGggYSAxMHB4IGJvcmRlclJhZGl1c1xuICogaW50byBhIGJveCB0aGF0IGlzIDIwMHB4IHdpZGUgd2l0aCBhIDIwcHggYm9yZGVyUmFkaXVzLCB0aGF0IGlzIGFjdHVhbGx5IGEgMTAlXG4gKiBib3JkZXJSYWRpdXMgaW4gYm90aCBzdGF0ZXMuIElmIHdlIGFuaW1hdGUgYmV0d2VlbiB0aGUgdHdvIGluIHBpeGVscyB0aGF0IHdpbGwgdHJpZ2dlclxuICogYSBwYWludCBlYWNoIHRpbWUuIElmIHdlIGFuaW1hdGUgYmV0d2VlbiB0aGUgdHdvIGluIHBlcmNlbnRhZ2Ugd2UnbGwgYXZvaWQgYSBwYWludC5cbiAqL1xuZnVuY3Rpb24gY29ycmVjdEJvcmRlclJhZGl1cyhsYXRlc3QsIHZpZXdwb3J0Qm94KSB7XG4gICAgLyoqXG4gICAgICogSWYgbGF0ZXN0IGlzIGEgc3RyaW5nLCBpZiBpdCdzIGEgcGVyY2VudGFnZSB3ZSBjYW4gcmV0dXJuIGltbWVkaWF0ZWx5IGFzIGl0J3NcbiAgICAgKiBnb2luZyB0byBiZSBzdHJldGNoZWQgYXBwcm9wcmlhdGVseS4gT3RoZXJ3aXNlLCBpZiBpdCdzIGEgcGl4ZWwsIGNvbnZlcnQgaXQgdG8gYSBudW1iZXIuXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBsYXRlc3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKHB4LnRlc3QobGF0ZXN0KSkge1xuICAgICAgICAgICAgbGF0ZXN0ID0gcGFyc2VGbG9hdChsYXRlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGxhdGVzdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBsYXRlc3QgaXMgYSBudW1iZXIsIGl0J3MgYSBwaXhlbCB2YWx1ZS4gV2UgdXNlIHRoZSBjdXJyZW50IHZpZXdwb3J0Qm94IHRvIGNhbGN1bGF0ZSB0aGF0XG4gICAgICogcGl4ZWwgdmFsdWUgYXMgYSBwZXJjZW50YWdlIG9mIGVhY2ggYXhpc1xuICAgICAqL1xuICAgIHZhciB4ID0gcGl4ZWxzVG9QZXJjZW50KGxhdGVzdCwgdmlld3BvcnRCb3gueCk7XG4gICAgdmFyIHkgPSBwaXhlbHNUb1BlcmNlbnQobGF0ZXN0LCB2aWV3cG9ydEJveC55KTtcbiAgICByZXR1cm4geCArIFwiJSBcIiArIHkgKyBcIiVcIjtcbn1cbnZhciB2YXJUb2tlbiA9IFwiXyRjc3NcIjtcbmZ1bmN0aW9uIGNvcnJlY3RCb3hTaGFkb3cobGF0ZXN0LCBfdmlld3BvcnRCb3gsIGRlbHRhLCB0cmVlU2NhbGUpIHtcbiAgICB2YXIgb3JpZ2luYWwgPSBsYXRlc3Q7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byBmaXJzdCBzdHJpcCBhbmQgc3RvcmUgQ1NTIHZhcmlhYmxlcyBmcm9tIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgdmFyIGNvbnRhaW5zQ1NTVmFyaWFibGVzID0gbGF0ZXN0LmluY2x1ZGVzKFwidmFyKFwiKTtcbiAgICB2YXIgY3NzVmFyaWFibGVzID0gW107XG4gICAgaWYgKGNvbnRhaW5zQ1NTVmFyaWFibGVzKSB7XG4gICAgICAgIGxhdGVzdCA9IGxhdGVzdC5yZXBsYWNlKGNzc1ZhcmlhYmxlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgY3NzVmFyaWFibGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgICAgcmV0dXJuIHZhclRva2VuO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHNoYWRvdyA9IGNvbXBsZXgucGFyc2UobGF0ZXN0KTtcbiAgICAvLyBUT0RPOiBEb2Vzbid0IHN1cHBvcnQgbXVsdGlwbGUgc2hhZG93c1xuICAgIGlmIChzaGFkb3cubGVuZ3RoID4gNSlcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgIHZhciB0ZW1wbGF0ZSA9IGNvbXBsZXguY3JlYXRlVHJhbnNmb3JtZXIobGF0ZXN0KTtcbiAgICB2YXIgb2Zmc2V0ID0gdHlwZW9mIHNoYWRvd1swXSAhPT0gXCJudW1iZXJcIiA/IDEgOiAwO1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgb3ZlcmFsbCBjb250ZXh0IHNjYWxlXG4gICAgdmFyIHhTY2FsZSA9IGRlbHRhLnguc2NhbGUgKiB0cmVlU2NhbGUueDtcbiAgICB2YXIgeVNjYWxlID0gZGVsdGEueS5zY2FsZSAqIHRyZWVTY2FsZS55O1xuICAgIHNoYWRvd1swICsgb2Zmc2V0XSAvPSB4U2NhbGU7XG4gICAgc2hhZG93WzEgKyBvZmZzZXRdIC89IHlTY2FsZTtcbiAgICAvKipcbiAgICAgKiBJZGVhbGx5IHdlJ2QgY29ycmVjdCB4IGFuZCB5IHNjYWxlcyBpbmRpdmlkdWFsbHksIGJ1dCBiZWNhdXNlIGJsdXIgYW5kXG4gICAgICogc3ByZWFkIGFwcGx5IHRvIGJvdGggd2UgaGF2ZSB0byB0YWtlIGEgc2NhbGUgYXZlcmFnZSBhbmQgYXBwbHkgdGhhdCBpbnN0ZWFkLlxuICAgICAqIFdlIGNvdWxkIHBvdGVudGlhbGx5IGltcHJvdmUgdGhlIG91dGNvbWUgb2YgdGhpcyBieSBpbmNvcnBvcmF0aW5nIHRoZSByYXRpbyBiZXR3ZWVuXG4gICAgICogdGhlIHR3byBzY2FsZXMuXG4gICAgICovXG4gICAgdmFyIGF2ZXJhZ2VTY2FsZSA9IG1peCh4U2NhbGUsIHlTY2FsZSwgMC41KTtcbiAgICAvLyBCbHVyXG4gICAgaWYgKHR5cGVvZiBzaGFkb3dbMiArIG9mZnNldF0gPT09IFwibnVtYmVyXCIpXG4gICAgICAgIHNoYWRvd1syICsgb2Zmc2V0XSAvPSBhdmVyYWdlU2NhbGU7XG4gICAgLy8gU3ByZWFkXG4gICAgaWYgKHR5cGVvZiBzaGFkb3dbMyArIG9mZnNldF0gPT09IFwibnVtYmVyXCIpXG4gICAgICAgIHNoYWRvd1szICsgb2Zmc2V0XSAvPSBhdmVyYWdlU2NhbGU7XG4gICAgdmFyIG91dHB1dCA9IHRlbXBsYXRlKHNoYWRvdyk7XG4gICAgaWYgKGNvbnRhaW5zQ1NTVmFyaWFibGVzKSB7XG4gICAgICAgIHZhciBpXzEgPSAwO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSh2YXJUb2tlbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNzc1ZhcmlhYmxlID0gY3NzVmFyaWFibGVzW2lfMV07XG4gICAgICAgICAgICBpXzErKztcbiAgICAgICAgICAgIHJldHVybiBjc3NWYXJpYWJsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG52YXIgYm9yZGVyQ29ycmVjdGlvbkRlZmluaXRpb24gPSB7XG4gICAgcHJvY2VzczogY29ycmVjdEJvcmRlclJhZGl1cyxcbn07XG52YXIgdmFsdWVTY2FsZUNvcnJlY3Rpb24gPSB7XG4gICAgYm9yZGVyUmFkaXVzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYm9yZGVyQ29ycmVjdGlvbkRlZmluaXRpb24pLCB7IGFwcGx5VG86IFtcbiAgICAgICAgICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiLFxuICAgICAgICAgICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiLFxuICAgICAgICAgICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCIsXG4gICAgICAgICAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsXG4gICAgICAgIF0gfSksXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyQ29ycmVjdGlvbkRlZmluaXRpb24sXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IGJvcmRlckNvcnJlY3Rpb25EZWZpbml0aW9uLFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlckNvcnJlY3Rpb25EZWZpbml0aW9uLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBib3JkZXJDb3JyZWN0aW9uRGVmaW5pdGlvbixcbiAgICBib3hTaGFkb3c6IHtcbiAgICAgICAgcHJvY2VzczogY29ycmVjdEJveFNoYWRvdyxcbiAgICB9LFxufTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGFkZFNjYWxlQ29ycmVjdGlvbihjb3JyZWN0b3JzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGNvcnJlY3RvcnMpIHtcbiAgICAgICAgdmFsdWVTY2FsZUNvcnJlY3Rpb25ba2V5XSA9IGNvcnJlY3RvcnNba2V5XTtcbiAgICB9XG59XG5cbi8qKlxuICogQnVpbGQgc3R5bGUgYW5kIENTUyB2YXJpYWJsZXNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbnZlcnRzIGEgTW90aW9uIHN0eWxlIHByb3A6XG4gKlxuICogeyB4OiAxMDAsIHdpZHRoOiAxMDAsIG9yaWdpblg6IDAuNSB9XG4gKlxuICogSW50byBhbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHZhbHVlIHR5cGVzIGFwcGxpZWQgYW5kIGRlZmF1bHRcbiAqIHRyYW5zZm9ybSBvcmRlciBzZXQ6XG4gKlxuICoge1xuICogICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMHB4KSB0cmFuc2xhdGVaKDApYCxcbiAqICAgd2lkdGg6ICcxMDBweCcsXG4gKiAgIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnXG4gKiB9XG4gKlxuICogU3R5bGVzIGFyZSBzYXZlZCB0byBgc3R5bGVgIGFuZCBDU1MgdmFycyB0byBgdmFyc2AuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3b3JrcyB3aXRoIG11dGF0aXZlIGRhdGEgc3RydWN0dXJlcy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRIVE1MU3R5bGVzKGxhdGVzdCwgc3R5bGUsIHZhcnMsIHRyYW5zZm9ybSwgdHJhbnNmb3JtT3JpZ2luLCB0cmFuc2Zvcm1LZXlzLCBfYSwgaXNMYXlvdXRQcm9qZWN0aW9uRW5hYmxlZCwgZGVsdGEsIGRlbHRhRmluYWwsIHRyZWVTY2FsZSwgdGFyZ2V0Qm94KSB7XG4gICAgdmFyIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX2EuZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24sIHRyYW5zZm9ybVRlbXBsYXRlID0gX2EudHJhbnNmb3JtVGVtcGxhdGUsIGFsbG93VHJhbnNmb3JtTm9uZSA9IF9hLmFsbG93VHJhbnNmb3JtTm9uZTtcbiAgICAvLyBFbXB0eSB0aGUgdHJhbnNmb3JtS2V5cyBhcnJheS4gQXMgd2UncmUgdGhyb3dpbmcgb3V0IHJlZnMgdG8gaXRzIGl0ZW1zXG4gICAgLy8gdGhpcyBtaWdodCBub3QgYmUgYXMgY2hlYXAgYXMgc3VzcGVjdGVkLiBNYXliZSB1c2luZyB0aGUgYXJyYXkgYXMgYSBidWZmZXJcbiAgICAvLyB3aXRoIGEgbWFudWFsIGluY3JlbWVudGF0aW9uIHdvdWxkIGJlIGJldHRlci5cbiAgICB0cmFuc2Zvcm1LZXlzLmxlbmd0aCA9IDA7XG4gICAgLy8gVHJhY2sgd2hldGhlciB3ZSBlbmNvdW50ZXIgYW55IHRyYW5zZm9ybSBvciB0cmFuc2Zvcm1PcmlnaW4gdmFsdWVzLlxuICAgIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgICB2YXIgaGFzVHJhbnNmb3JtT3JpZ2luID0gZmFsc2U7XG4gICAgLy8gRG9lcyB0aGUgY2FsY3VsYXRlZCB0cmFuc2Zvcm0gZXNzZW50aWFsbHkgZXF1YWwgXCJub25lXCI/XG4gICAgdmFyIHRyYW5zZm9ybUlzTm9uZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogTG9vcCBvdmVyIGFsbCBvdXIgbGF0ZXN0IGFuaW1hdGVkIHZhbHVlcyBhbmQgZGVjaWRlIHdoZXRoZXIgdG8gaGFuZGxlIHRoZW1cbiAgICAgKiBhcyBhIHN0eWxlIG9yIENTUyB2YXJpYWJsZS4gVHJhbnNmb3JtcyBhbmQgdHJhbnNmb3JtIG9yaWdpbnMgYXJlIGtlcHQgc2VwZXJhdGVseVxuICAgICAqIGZvciBmdXJ0aGVyIHByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGxhdGVzdFtrZXldO1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byBpdHMgZGVmYXVsdCB2YWx1ZSB0eXBlLCBpZSAwIC0+IFwiMHB4XCJcbiAgICAgICAgdmFyIHZhbHVlVHlwZSA9IGdldERlZmF1bHRWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgdmFyIHZhbHVlQXNUeXBlID0gZ2V0VmFsdWVBc1R5cGUodmFsdWUsIHZhbHVlVHlwZSk7XG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVByb3Aoa2V5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSwgZmxhZyBhbmQgZW5hYmxlIGZ1cnRoZXIgdHJhbnNmb3JtIHByb2Nlc3NpbmdcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB0cmFuc2Zvcm1ba2V5XSA9IHZhbHVlQXNUeXBlO1xuICAgICAgICAgICAgdHJhbnNmb3JtS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICBpZiAoIXRyYW5zZm9ybUlzTm9uZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIElmIGFsbCB0aGUgdHJhbnNmb3JtIGtleXMgd2UndmUgc28gZmFyIGVuY291bnRlcmVkIGFyZSB0aGVpciBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyB0aGVuIGNoZWNrIHRvIHNlZSBpZiB0aGlzIG9uZSBpc24ndFxuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHZhbHVlVHlwZS5kZWZhdWx0ICE9PSB1bmRlZmluZWQgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IGRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Jc05vbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1RyYW5zZm9ybU9yaWdpblByb3Aoa2V5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBvcmlnaW4sIGZsYWcgYW5kIGVuYWJsZSBmdXJ0aGVyIHRyYW5zZm9ybS1vcmlnaW4gcHJvY2Vzc2luZ1xuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luW2tleV0gPSB2YWx1ZUFzVHlwZTtcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybU9yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ICE9PSBcInRyYW5zZm9ybVwiIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgYWxsIHJlbWFpbmluZyB2YWx1ZXMuIERlY2lkZSB3aGljaCBtYXAgdG8gc2F2ZSB0byBkZXBlbmRpbmdcbiAgICAgICAgICAgIC8vIG9uIHdoZXRoZXIgdGhpcyBpcyBhIENTUyB2YXJpYWJsZVxuICAgICAgICAgICAgdmFyIGJ1Y2tldCA9IGlzQ1NTVmFyaWFibGUoa2V5KSA/IHZhcnMgOiBzdHlsZTtcbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcGVyZm9ybSBzY2FsZSBjb3JyZWN0aW9uLCBhbmQgd2UgaGF2ZSBhIGhhbmRsZXIgZm9yIHRoaXNcbiAgICAgICAgICAgIC8vIHZhbHVlIHR5cGUgKGllIGJvcmRlclJhZGl1cyksIHBlcmZvcm0gaXRcbiAgICAgICAgICAgIGlmIChpc0xheW91dFByb2plY3Rpb25FbmFibGVkICYmIHZhbHVlU2NhbGVDb3JyZWN0aW9uW2tleV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29ycmVjdGVkID0gdmFsdWVTY2FsZUNvcnJlY3Rpb25ba2V5XS5wcm9jZXNzKHZhbHVlLCB0YXJnZXRCb3gsIGRlbHRhLCB0cmVlU2NhbGUpO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFNjYWxlLWNvcnJlY3RhYmxlIHZhbHVlcyBjYW4gZGVmaW5lIGEgbnVtYmVyIG9mIG90aGVyIHZhbHVlcyB0byBicmVha1xuICAgICAgICAgICAgICAgICAqIGRvd24gaW50by4gRm9yIGluc3RhbmNlIGJvcmRlclJhZGl1cyBuZWVkcyBhcHBseWluZyB0byBib3JkZXJCb3R0b21MZWZ0UmFkaXVzIGV0Y1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBhcHBseVRvID0gdmFsdWVTY2FsZUNvcnJlY3Rpb25ba2V5XS5hcHBseVRvO1xuICAgICAgICAgICAgICAgIGlmIChhcHBseVRvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSBhcHBseVRvLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0W2FwcGx5VG9baV1dID0gY29ycmVjdGVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidWNrZXRba2V5XSA9IGNvcnJlY3RlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWNrZXRba2V5XSA9IHZhbHVlQXNUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRyYW5zZm9ybSBhbmQgdHJhbnNmb3JtT3JpZ2luLiBJZiB3ZSdyZSBwZXJmb3JtaW5nIGxheW91dCBwcm9qZWN0aW9uIHRoZXNlIG5lZWRcbiAgICAgKiB0byBiZSBiYXNlZCBvZmYgdGhlIGRlbHRhRmluYWwgZGF0YS4gQW55IHVzZXItc2V0IG9yaWdpbnMgd2lsbCBoYXZlIGJlZW4gcHJlLWJha2VkXG4gICAgICogaW50byB0aGUgZGVsdGFGaW5hbC5cbiAgICAgKi9cbiAgICBpZiAoaXNMYXlvdXRQcm9qZWN0aW9uRW5hYmxlZCkge1xuICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBidWlsZExheW91dFByb2plY3Rpb25UcmFuc2Zvcm0oZGVsdGFGaW5hbCwgdHJlZVNjYWxlKTtcbiAgICAgICAgaWYgKHN0eWxlLnRyYW5zZm9ybSA9PT0gaWRlbnRpdHlQcm9qZWN0aW9uKVxuICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIGhhdmUgdHJhbnNmb3JtIHN0eWxlcywgYnVpbGQgb25seSB0aG9zZSB0aGF0IGRpc3RvcnQgYm91bmRpbmcgYm94ZXMgKHJvdGF0ZS9za2V3KVxuICAgICAgICAgKiBhcyB0cmFuc2xhdGlvbnMgYW5kIHNjYWxlcyB3aWxsIGFscmVhZHkgaGF2ZSBiZWVuIHVzZWQgdG8gY2FsY3VsYXRlIGRlbHRhRmluYWwuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gKz1cbiAgICAgICAgICAgICAgICBcIiBcIiArIGJ1aWxkQm94RGlzdG9ydGluZ1RyYW5zZm9ybXModHJhbnNmb3JtLCB0cmFuc2Zvcm1LZXlzKTtcbiAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zZm9ybVRlbXBsYXRlKSB7XG4gICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1UZW1wbGF0ZSh0cmFuc2Zvcm0sIHN0eWxlLnRyYW5zZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYnVpbGRMYXlvdXRQcm9qZWN0aW9uVHJhbnNmb3JtT3JpZ2luKGRlbHRhRmluYWwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gYnVpbGRUcmFuc2Zvcm0odHJhbnNmb3JtLCB0cmFuc2Zvcm1LZXlzLCB0cmFuc2Zvcm1UZW1wbGF0ZSwgdHJhbnNmb3JtSXNOb25lLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiwgYWxsb3dUcmFuc2Zvcm1Ob25lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzVHJhbnNmb3JtT3JpZ2luKSB7XG4gICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBidWlsZFRyYW5zZm9ybU9yaWdpbih0cmFuc2Zvcm1PcmlnaW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFJlc2V0IGFuIGF4aXMgdG8gdGhlIHByb3ZpZGVkIG9yaWdpbiBib3guXG4gKlxuICogVGhpcyBpcyBhIG11dGF0aXZlIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gcmVzZXRBeGlzKGF4aXMsIG9yaWdpbkF4aXMpIHtcbiAgICBheGlzLm1pbiA9IG9yaWdpbkF4aXMubWluO1xuICAgIGF4aXMubWF4ID0gb3JpZ2luQXhpcy5tYXg7XG59XG4vKipcbiAqIFJlc2V0IGEgYm94IHRvIHRoZSBwcm92aWRlZCBvcmlnaW4gYm94LlxuICpcbiAqIFRoaXMgaXMgYSBtdXRhdGl2ZSBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHJlc2V0Qm94KGJveCwgb3JpZ2luQm94KSB7XG4gICAgcmVzZXRBeGlzKGJveC54LCBvcmlnaW5Cb3gueCk7XG4gICAgcmVzZXRBeGlzKGJveC55LCBvcmlnaW5Cb3gueSk7XG59XG4vKipcbiAqIFNjYWxlcyBhIHBvaW50IGJhc2VkIG9uIGEgZmFjdG9yIGFuZCBhbiBvcmlnaW5Qb2ludFxuICovXG5mdW5jdGlvbiBzY2FsZVBvaW50KHBvaW50LCBzY2FsZSwgb3JpZ2luUG9pbnQpIHtcbiAgICB2YXIgZGlzdGFuY2VGcm9tT3JpZ2luID0gcG9pbnQgLSBvcmlnaW5Qb2ludDtcbiAgICB2YXIgc2NhbGVkID0gc2NhbGUgKiBkaXN0YW5jZUZyb21PcmlnaW47XG4gICAgcmV0dXJuIG9yaWdpblBvaW50ICsgc2NhbGVkO1xufVxuLyoqXG4gKiBBcHBsaWVzIGEgdHJhbnNsYXRlL3NjYWxlIGRlbHRhIHRvIGEgcG9pbnRcbiAqL1xuZnVuY3Rpb24gYXBwbHlQb2ludERlbHRhKHBvaW50LCB0cmFuc2xhdGUsIHNjYWxlLCBvcmlnaW5Qb2ludCwgYm94U2NhbGUpIHtcbiAgICBpZiAoYm94U2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb2ludCA9IHNjYWxlUG9pbnQocG9pbnQsIGJveFNjYWxlLCBvcmlnaW5Qb2ludCk7XG4gICAgfVxuICAgIHJldHVybiBzY2FsZVBvaW50KHBvaW50LCBzY2FsZSwgb3JpZ2luUG9pbnQpICsgdHJhbnNsYXRlO1xufVxuLyoqXG4gKiBBcHBsaWVzIGEgdHJhbnNsYXRlL3NjYWxlIGRlbHRhIHRvIGFuIGF4aXNcbiAqL1xuZnVuY3Rpb24gYXBwbHlBeGlzRGVsdGEoYXhpcywgdHJhbnNsYXRlLCBzY2FsZSwgb3JpZ2luUG9pbnQsIGJveFNjYWxlKSB7XG4gICAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7IHRyYW5zbGF0ZSA9IDA7IH1cbiAgICBpZiAoc2NhbGUgPT09IHZvaWQgMCkgeyBzY2FsZSA9IDE7IH1cbiAgICBheGlzLm1pbiA9IGFwcGx5UG9pbnREZWx0YShheGlzLm1pbiwgdHJhbnNsYXRlLCBzY2FsZSwgb3JpZ2luUG9pbnQsIGJveFNjYWxlKTtcbiAgICBheGlzLm1heCA9IGFwcGx5UG9pbnREZWx0YShheGlzLm1heCwgdHJhbnNsYXRlLCBzY2FsZSwgb3JpZ2luUG9pbnQsIGJveFNjYWxlKTtcbn1cbi8qKlxuICogQXBwbGllcyBhIHRyYW5zbGF0ZS9zY2FsZSBkZWx0YSB0byBhIGJveFxuICovXG5mdW5jdGlvbiBhcHBseUJveERlbHRhKGJveCwgX2EpIHtcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgIGFwcGx5QXhpc0RlbHRhKGJveC54LCB4LnRyYW5zbGF0ZSwgeC5zY2FsZSwgeC5vcmlnaW5Qb2ludCk7XG4gICAgYXBwbHlBeGlzRGVsdGEoYm94LnksIHkudHJhbnNsYXRlLCB5LnNjYWxlLCB5Lm9yaWdpblBvaW50KTtcbn1cbi8qKlxuICogQXBwbHkgYSB0cmFuc2Zvcm0gdG8gYW4gYXhpcyBmcm9tIHRoZSBsYXRlc3QgcmVzb2x2ZWQgbW90aW9uIHZhbHVlcy5cbiAqIFRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IGFjdHMgYXMgYSBicmlkZ2UgYmV0d2VlbiBhIGZsYXQgbW90aW9uIHZhbHVlIG1hcFxuICogYW5kIGFwcGx5QXhpc0RlbHRhXG4gKi9cbmZ1bmN0aW9uIGFwcGx5QXhpc1RyYW5zZm9ybXMoZmluYWwsIGF4aXMsIHRyYW5zZm9ybXMsIF9hKSB7XG4gICAgdmFyIF9iID0gX19yZWFkKF9hLCAzKSwga2V5ID0gX2JbMF0sIHNjYWxlS2V5ID0gX2JbMV0sIG9yaWdpbktleSA9IF9iWzJdO1xuICAgIC8vIENvcHkgdGhlIGN1cnJlbnQgYXhpcyB0byB0aGUgZmluYWwgYXhpcyBiZWZvcmUgbXV0YXRpb25cbiAgICBmaW5hbC5taW4gPSBheGlzLm1pbjtcbiAgICBmaW5hbC5tYXggPSBheGlzLm1heDtcbiAgICB2YXIgYXhpc09yaWdpbiA9IHRyYW5zZm9ybXNbb3JpZ2luS2V5XSAhPT0gdW5kZWZpbmVkID8gdHJhbnNmb3Jtc1tvcmlnaW5LZXldIDogMC41O1xuICAgIHZhciBvcmlnaW5Qb2ludCA9IG1peChheGlzLm1pbiwgYXhpcy5tYXgsIGF4aXNPcmlnaW4pO1xuICAgIC8vIEFwcGx5IHRoZSBheGlzIGRlbHRhIHRvIHRoZSBmaW5hbCBheGlzXG4gICAgYXBwbHlBeGlzRGVsdGEoZmluYWwsIHRyYW5zZm9ybXNba2V5XSwgdHJhbnNmb3Jtc1tzY2FsZUtleV0sIG9yaWdpblBvaW50LCB0cmFuc2Zvcm1zLnNjYWxlKTtcbn1cbi8qKlxuICogVGhlIG5hbWVzIG9mIHRoZSBtb3Rpb24gdmFsdWVzIHdlIHdhbnQgdG8gYXBwbHkgYXMgdHJhbnNsYXRpb24sIHNjYWxlIGFuZCBvcmlnaW4uXG4gKi9cbnZhciB4S2V5cyA9IFtcInhcIiwgXCJzY2FsZVhcIiwgXCJvcmlnaW5YXCJdO1xudmFyIHlLZXlzID0gW1wieVwiLCBcInNjYWxlWVwiLCBcIm9yaWdpbllcIl07XG4vKipcbiAqIEFwcGx5IGEgdHJhbnNmb3JtIHRvIGEgYm94IGZyb20gdGhlIGxhdGVzdCByZXNvbHZlZCBtb3Rpb24gdmFsdWVzLlxuICovXG5mdW5jdGlvbiBhcHBseUJveFRyYW5zZm9ybXMoZmluYWxCb3gsIGJveCwgdHJhbnNmb3Jtcykge1xuICAgIGFwcGx5QXhpc1RyYW5zZm9ybXMoZmluYWxCb3gueCwgYm94LngsIHRyYW5zZm9ybXMsIHhLZXlzKTtcbiAgICBhcHBseUF4aXNUcmFuc2Zvcm1zKGZpbmFsQm94LnksIGJveC55LCB0cmFuc2Zvcm1zLCB5S2V5cyk7XG59XG4vKipcbiAqIFJlbW92ZSBhIGRlbHRhIGZyb20gYSBwb2ludC4gVGhpcyBpcyBlc3NlbnRpYWxseSB0aGUgc3RlcHMgb2YgYXBwbHlQb2ludERlbHRhIGluIHJldmVyc2VcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlUG9pbnREZWx0YShwb2ludCwgdHJhbnNsYXRlLCBzY2FsZSwgb3JpZ2luUG9pbnQsIGJveFNjYWxlKSB7XG4gICAgcG9pbnQgLT0gdHJhbnNsYXRlO1xuICAgIHBvaW50ID0gc2NhbGVQb2ludChwb2ludCwgMSAvIHNjYWxlLCBvcmlnaW5Qb2ludCk7XG4gICAgaWYgKGJveFNjYWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcG9pbnQgPSBzY2FsZVBvaW50KHBvaW50LCAxIC8gYm94U2NhbGUsIG9yaWdpblBvaW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50O1xufVxuLyoqXG4gKiBSZW1vdmUgYSBkZWx0YSBmcm9tIGFuIGF4aXMuIFRoaXMgaXMgZXNzZW50aWFsbHkgdGhlIHN0ZXBzIG9mIGFwcGx5QXhpc0RlbHRhIGluIHJldmVyc2VcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQXhpc0RlbHRhKGF4aXMsIHRyYW5zbGF0ZSwgc2NhbGUsIG9yaWdpbiwgYm94U2NhbGUpIHtcbiAgICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHsgdHJhbnNsYXRlID0gMDsgfVxuICAgIGlmIChzY2FsZSA9PT0gdm9pZCAwKSB7IHNjYWxlID0gMTsgfVxuICAgIGlmIChvcmlnaW4gPT09IHZvaWQgMCkgeyBvcmlnaW4gPSAwLjU7IH1cbiAgICB2YXIgb3JpZ2luUG9pbnQgPSBtaXgoYXhpcy5taW4sIGF4aXMubWF4LCBvcmlnaW4pIC0gdHJhbnNsYXRlO1xuICAgIGF4aXMubWluID0gcmVtb3ZlUG9pbnREZWx0YShheGlzLm1pbiwgdHJhbnNsYXRlLCBzY2FsZSwgb3JpZ2luUG9pbnQsIGJveFNjYWxlKTtcbiAgICBheGlzLm1heCA9IHJlbW92ZVBvaW50RGVsdGEoYXhpcy5tYXgsIHRyYW5zbGF0ZSwgc2NhbGUsIG9yaWdpblBvaW50LCBib3hTY2FsZSk7XG59XG4vKipcbiAqIFJlbW92ZSBhIHRyYW5zZm9ybXMgZnJvbSBhbiBheGlzLiBUaGlzIGlzIGVzc2VudGlhbGx5IHRoZSBzdGVwcyBvZiBhcHBseUF4aXNUcmFuc2Zvcm1zIGluIHJldmVyc2VcbiAqIGFuZCBhY3RzIGFzIGEgYnJpZGdlIGJldHdlZW4gbW90aW9uIHZhbHVlcyBhbmQgcmVtb3ZlQXhpc0RlbHRhXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUF4aXNUcmFuc2Zvcm1zKGF4aXMsIHRyYW5zZm9ybXMsIF9hKSB7XG4gICAgdmFyIF9iID0gX19yZWFkKF9hLCAzKSwga2V5ID0gX2JbMF0sIHNjYWxlS2V5ID0gX2JbMV0sIG9yaWdpbktleSA9IF9iWzJdO1xuICAgIHJlbW92ZUF4aXNEZWx0YShheGlzLCB0cmFuc2Zvcm1zW2tleV0sIHRyYW5zZm9ybXNbc2NhbGVLZXldLCB0cmFuc2Zvcm1zW29yaWdpbktleV0sIHRyYW5zZm9ybXMuc2NhbGUpO1xufVxuLyoqXG4gKiBSZW1vdmUgYSB0cmFuc2Zvcm1zIGZyb20gYW4gYm94LiBUaGlzIGlzIGVzc2VudGlhbGx5IHRoZSBzdGVwcyBvZiBhcHBseUF4aXNCb3ggaW4gcmV2ZXJzZVxuICogYW5kIGFjdHMgYXMgYSBicmlkZ2UgYmV0d2VlbiBtb3Rpb24gdmFsdWVzIGFuZCByZW1vdmVBeGlzRGVsdGFcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQm94VHJhbnNmb3Jtcyhib3gsIHRyYW5zZm9ybXMpIHtcbiAgICByZW1vdmVBeGlzVHJhbnNmb3Jtcyhib3gueCwgdHJhbnNmb3JtcywgeEtleXMpO1xuICAgIHJlbW92ZUF4aXNUcmFuc2Zvcm1zKGJveC55LCB0cmFuc2Zvcm1zLCB5S2V5cyk7XG59XG4vKipcbiAqIEFwcGx5IGEgdHJlZSBvZiBkZWx0YXMgdG8gYSBib3guIFdlIGRvIHRoaXMgdG8gY2FsY3VsYXRlIHRoZSBlZmZlY3Qgb2YgYWxsIHRoZSB0cmFuc2Zvcm1zXG4gKiBpbiBhIHRyZWUgdXBvbiBvdXIgYm94IGJlZm9yZSB0aGVuIGNhbGN1bGF0aW5nIGhvdyB0byBwcm9qZWN0IGl0IGludG8gb3VyIGRlc2lyZWQgdmlld3BvcnQtcmVsYXRpdmUgYm94XG4gKlxuICogVGhpcyBpcyB0aGUgZmluYWwgbmVzdGVkIGxvb3Agd2l0aGluIEhUTUxWaXN1YWxFbGVtZW50LnVwZGF0ZUxheW91dERlbHRhXG4gKi9cbmZ1bmN0aW9uIGFwcGx5VHJlZURlbHRhcyhib3gsIHRyZWVQYXRoKSB7XG4gICAgdmFyIHRyZWVMZW5ndGggPSB0cmVlUGF0aC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXBwbHlCb3hEZWx0YShib3gsIHRyZWVQYXRoW2ldLmRlbHRhKTtcbiAgICB9XG59XG5cbnZhciBjbGFtcFByb2dyZXNzID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGNsYW1wKDAsIDEsIHYpOyB9O1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIHdpdGhpbiBtYXhEaXN0YW5jZSBvZiB0aGUgcHJvdmlkZWQgdGFyZ2V0XG4gKi9cbmZ1bmN0aW9uIGlzTmVhcih2YWx1ZSwgdGFyZ2V0LCBtYXhEaXN0YW5jZSkge1xuICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSAwOyB9XG4gICAgaWYgKG1heERpc3RhbmNlID09PSB2b2lkIDApIHsgbWF4RGlzdGFuY2UgPSAwLjAxOyB9XG4gICAgcmV0dXJuIGRpc3RhbmNlKHZhbHVlLCB0YXJnZXQpIDwgbWF4RGlzdGFuY2U7XG59XG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgdHJhbnNsYXRlIG5lZWRlZCB0byBiZSBhcHBsaWVkIHRvIHNvdXJjZSB0byBnZXQgdGFyZ2V0XG4gKi9cbmZ1bmN0aW9uIGNhbGNUcmFuc2xhdGUoc291cmNlLCB0YXJnZXQsIG9yaWdpbikge1xuICAgIHZhciBzb3VyY2VQb2ludCA9IG1peChzb3VyY2UubWluLCBzb3VyY2UubWF4LCBvcmlnaW4pO1xuICAgIHZhciB0YXJnZXRQb2ludCA9IG1peCh0YXJnZXQubWluLCB0YXJnZXQubWF4LCBvcmlnaW4pO1xuICAgIHJldHVybiB0YXJnZXRQb2ludCAtIHNvdXJjZVBvaW50O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgYSB0cmFuc2Zvcm0gb3JpZ2luIHJlbGF0aXZlIHRvIHRoZSBzb3VyY2UgYXhpcywgYmV0d2VlbiAwLTEsIHRoYXQgcmVzdWx0c1xuICogaW4gYW4gYXN0aGV0aWNhbGx5IHBsZWFzaW5nIHNjYWxlL3RyYW5zZm9ybSBuZWVkZWQgdG8gcHJvamVjdCBmcm9tIHNvdXJjZSB0byB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNhbGNPcmlnaW4oc291cmNlLCB0YXJnZXQpIHtcbiAgICB2YXIgb3JpZ2luID0gMC41O1xuICAgIHZhciBzb3VyY2VMZW5ndGggPSBzb3VyY2UubWF4IC0gc291cmNlLm1pbjtcbiAgICB2YXIgdGFyZ2V0TGVuZ3RoID0gdGFyZ2V0Lm1heCAtIHRhcmdldC5taW47XG4gICAgaWYgKHRhcmdldExlbmd0aCA+IHNvdXJjZUxlbmd0aCkge1xuICAgICAgICBvcmlnaW4gPSBwcm9ncmVzcyh0YXJnZXQubWluLCB0YXJnZXQubWF4IC0gc291cmNlTGVuZ3RoLCBzb3VyY2UubWluKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc291cmNlTGVuZ3RoID4gdGFyZ2V0TGVuZ3RoKSB7XG4gICAgICAgIG9yaWdpbiA9IHByb2dyZXNzKHNvdXJjZS5taW4sIHNvdXJjZS5tYXggLSB0YXJnZXRMZW5ndGgsIHRhcmdldC5taW4pO1xuICAgIH1cbiAgICByZXR1cm4gY2xhbXBQcm9ncmVzcyhvcmlnaW4pO1xufVxuLyoqXG4gKiBVcGRhdGUgdGhlIEF4aXNEZWx0YSB3aXRoIGEgdHJhbnNmb3JtIHRoYXQgcHJvamVjdHMgc291cmNlIGludG8gdGFyZ2V0LlxuICpcbiAqIFRoZSB0cmFuc2Zvcm0gYG9yaWdpbmAgaXMgb3B0aW9uYWwuIElmIG5vdCBwcm92aWRlZCwgaXQnbGwgYmUgYXV0b21hdGljYWxseVxuICogY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgcmVsYXRpdmUgcG9zaXRpb25zIG9mIHRoZSB0d28gYm91bmRpbmcgYm94ZXMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUF4aXNEZWx0YShkZWx0YSwgc291cmNlLCB0YXJnZXQsIG9yaWdpbikge1xuICAgIHZhciBzb3VyY2VMZW5ndGggPSBzb3VyY2UubWF4IC0gc291cmNlLm1pbjtcbiAgICB2YXIgdGFyZ2V0TGVuZ3RoID0gdGFyZ2V0Lm1heCAtIHRhcmdldC5taW47XG4gICAgZGVsdGEub3JpZ2luID0gb3JpZ2luID09PSB1bmRlZmluZWQgPyBjYWxjT3JpZ2luKHNvdXJjZSwgdGFyZ2V0KSA6IG9yaWdpbjtcbiAgICBkZWx0YS5vcmlnaW5Qb2ludCA9IG1peChzb3VyY2UubWluLCBzb3VyY2UubWF4LCBkZWx0YS5vcmlnaW4pO1xuICAgIGRlbHRhLnNjYWxlID0gdGFyZ2V0TGVuZ3RoIC8gc291cmNlTGVuZ3RoO1xuICAgIGlmIChpc05lYXIoZGVsdGEuc2NhbGUsIDEsIDAuMDAwMSkpXG4gICAgICAgIGRlbHRhLnNjYWxlID0gMTtcbiAgICBkZWx0YS50cmFuc2xhdGUgPSBjYWxjVHJhbnNsYXRlKHNvdXJjZSwgdGFyZ2V0LCBkZWx0YS5vcmlnaW4pO1xuICAgIGlmIChpc05lYXIoZGVsdGEudHJhbnNsYXRlKSlcbiAgICAgICAgZGVsdGEudHJhbnNsYXRlID0gMDtcbn1cbi8qKlxuICogVXBkYXRlIHRoZSBCb3hEZWx0YSB3aXRoIGEgdHJhbnNmb3JtIHRoYXQgcHJvamVjdHMgdGhlIHNvdXJjZSBpbnRvIHRoZSB0YXJnZXQuXG4gKlxuICogVGhlIHRyYW5zZm9ybSBgb3JpZ2luYCBpcyBvcHRpb25hbC4gSWYgbm90IHByb3ZpZGVkLCBpdCdsbCBiZSBhdXRvbWF0aWNhbGx5XG4gKiBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSByZWxhdGl2ZSBwb3NpdGlvbnMgb2YgdGhlIHR3byBib3VuZGluZyBib3hlcy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQm94RGVsdGEoZGVsdGEsIHNvdXJjZSwgdGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB1cGRhdGVBeGlzRGVsdGEoZGVsdGEueCwgc291cmNlLngsIHRhcmdldC54LCBvcmlnaW4pO1xuICAgIHVwZGF0ZUF4aXNEZWx0YShkZWx0YS55LCBzb3VyY2UueSwgdGFyZ2V0LnksIG9yaWdpbik7XG59XG4vKipcbiAqIFVwZGF0ZSB0aGUgdHJlZVNjYWxlIGJ5IGluY29ycG9yYXRpbmcgdGhlIHBhcmVudCdzIGxhdGVzdCBzY2FsZSBpbnRvIGl0cyB0cmVlU2NhbGUuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVRyZWVTY2FsZSh0cmVlU2NhbGUsIHBhcmVudFRyZWVTY2FsZSwgcGFyZW50RGVsdGEpIHtcbiAgICB0cmVlU2NhbGUueCA9IHBhcmVudFRyZWVTY2FsZS54ICogcGFyZW50RGVsdGEueC5zY2FsZTtcbiAgICB0cmVlU2NhbGUueSA9IHBhcmVudFRyZWVTY2FsZS55ICogcGFyZW50RGVsdGEueS5zY2FsZTtcbn1cblxuLy8gQ2FsbCBhIGhhbmRsZXIgb25jZSBmb3IgZWFjaCBheGlzXG5mdW5jdGlvbiBlYWNoQXhpcyhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIFtoYW5kbGVyKFwieFwiKSwgaGFuZGxlcihcInlcIildO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHNlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gKlxuICogQHBhcmFtIHNlY29uZHMgLSBUaW1lIGluIHNlY29uZHMuXG4gKiBAcmV0dXJuIG1pbGxpc2Vjb25kcyAtIENvbnZlcnRlZCB0aW1lIGluIG1pbGxpc2Vjb25kcy5cbiAqL1xudmFyIHNlY29uZHNUb01pbGxpc2Vjb25kcyA9IGZ1bmN0aW9uIChzZWNvbmRzKSB7IHJldHVybiBzZWNvbmRzICogMTAwMDsgfTtcblxudmFyIGVhc2luZ0RlZmluaXRpb25Ub0Z1bmN0aW9uID0gZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuICAgICAgICAvLyBJZiBjdWJpYyBiZXppZXIgZGVmaW5pdGlvbiwgY3JlYXRlIGJlemllciBjdXJ2ZVxuICAgICAgICBpbnZhcmlhbnQoZGVmaW5pdGlvbi5sZW5ndGggPT09IDQsIFwiQ3ViaWMgYmV6aWVyIGFycmF5cyBtdXN0IGNvbnRhaW4gZm91ciBudW1lcmljYWwgdmFsdWVzLlwiKTtcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKGRlZmluaXRpb24sIDQpLCB4MSA9IF9hWzBdLCB5MSA9IF9hWzFdLCB4MiA9IF9hWzJdLCB5MiA9IF9hWzNdO1xuICAgICAgICByZXR1cm4gY3ViaWNCZXppZXIoeDEsIHkxLCB4MiwgeTIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAvLyBFbHNlIGxvb2t1cCBmcm9tIHRhYmxlXG4gICAgICAgIGludmFyaWFudChlYXNpbmdMb29rdXBbZGVmaW5pdGlvbl0gIT09IHVuZGVmaW5lZCwgXCJJbnZhbGlkIGVhc2luZyB0eXBlICdcIiArIGRlZmluaXRpb24gKyBcIidcIik7XG4gICAgICAgIHJldHVybiBlYXNpbmdMb29rdXBbZGVmaW5pdGlvbl07XG4gICAgfVxuICAgIHJldHVybiBkZWZpbml0aW9uO1xufTtcbnZhciBpc0Vhc2luZ0FycmF5ID0gZnVuY3Rpb24gKGVhc2UpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShlYXNlKSAmJiB0eXBlb2YgZWFzZVswXSAhPT0gXCJudW1iZXJcIjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbmltYXRhYmxlLiBFeGFtcGxlczpcbiAqXG4gKiDinIU6IDEwMCwgXCIxMDBweFwiLCBcIiNmZmZcIlxuICog4p2MOiBcImJsb2NrXCIsIFwidXJsKDIuanBnKVwiXG4gKiBAcGFyYW0gdmFsdWVcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIGlzQW5pbWF0YWJsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgLy8gSWYgdGhlIGxpc3Qgb2Yga2V5cyB0YXQgbWlnaHQgYmUgbm9uLWFuaW1hdGFibGUgZ3Jvd3MsIHJlcGxhY2Ugd2l0aCBTZXRcbiAgICBpZiAoa2V5ID09PSBcInpJbmRleFwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gSWYgaXQncyBhIG51bWJlciBvciBhIGtleWZyYW1lcyBhcnJheSwgd2UgY2FuIGFuaW1hdGUgaXQuIFdlIG1pZ2h0IGF0IHNvbWUgcG9pbnRcbiAgICAvLyBuZWVkIHRvIGRvIGEgZGVlcCBpc0FuaW1hdGFibGUgY2hlY2sgb2Yga2V5ZnJhbWVzLCBvciBsZXQgUG9wbW90aW9uIGhhbmRsZSB0aGlzLFxuICAgIC8vIGJ1dCBmb3Igbm93IGxldHMgbGVhdmUgaXQgbGlrZSB0aGlzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAvLyBJdCdzIGFuaW1hdGFibGUgaWYgd2UgaGF2ZSBhIHN0cmluZ1xuICAgICAgICBjb21wbGV4LnRlc3QodmFsdWUpICYmIC8vIEFuZCBpdCBjb250YWlucyBudW1iZXJzIGFuZC9vciBjb2xvcnNcbiAgICAgICAgIXZhbHVlLnN0YXJ0c1dpdGgoXCJ1cmwoXCIpIC8vIFVubGVzcyBpdCBzdGFydHMgd2l0aCBcInVybChcIlxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzS2V5ZnJhbWVzVGFyZ2V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2KTtcbn07XG5cbnZhciB1bmRlckRhbXBlZFNwcmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICBzdGlmZm5lc3M6IDUwMCxcbiAgICBkYW1waW5nOiAyNSxcbiAgICByZXN0RGVsdGE6IDAuNSxcbiAgICByZXN0U3BlZWQ6IDEwLFxufSk7IH07XG52YXIgb3ZlckRhbXBlZFNwcmluZyA9IGZ1bmN0aW9uICh0bykgeyByZXR1cm4gKHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogNTUwLFxuICAgIGRhbXBpbmc6IHRvID09PSAwID8gMTAwIDogMzAsXG4gICAgcmVzdERlbHRhOiAwLjAxLFxuICAgIHJlc3RTcGVlZDogMTAsXG59KTsgfTtcbnZhciBsaW5lYXJUd2VlbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgdHlwZTogXCJrZXlmcmFtZXNcIixcbiAgICBlYXNlOiBcImxpbmVhclwiLFxuICAgIGR1cmF0aW9uOiAwLjMsXG59KTsgfTtcbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7IHJldHVybiAoe1xuICAgIHR5cGU6IFwia2V5ZnJhbWVzXCIsXG4gICAgZHVyYXRpb246IDAuOCxcbiAgICB2YWx1ZXM6IHZhbHVlcyxcbn0pOyB9O1xudmFyIGRlZmF1bHRUcmFuc2l0aW9ucyA9IHtcbiAgICB4OiB1bmRlckRhbXBlZFNwcmluZyxcbiAgICB5OiB1bmRlckRhbXBlZFNwcmluZyxcbiAgICB6OiB1bmRlckRhbXBlZFNwcmluZyxcbiAgICByb3RhdGU6IHVuZGVyRGFtcGVkU3ByaW5nLFxuICAgIHJvdGF0ZVg6IHVuZGVyRGFtcGVkU3ByaW5nLFxuICAgIHJvdGF0ZVk6IHVuZGVyRGFtcGVkU3ByaW5nLFxuICAgIHJvdGF0ZVo6IHVuZGVyRGFtcGVkU3ByaW5nLFxuICAgIHNjYWxlWDogb3ZlckRhbXBlZFNwcmluZyxcbiAgICBzY2FsZVk6IG92ZXJEYW1wZWRTcHJpbmcsXG4gICAgc2NhbGU6IG92ZXJEYW1wZWRTcHJpbmcsXG4gICAgb3BhY2l0eTogbGluZWFyVHdlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBsaW5lYXJUd2VlbixcbiAgICBjb2xvcjogbGluZWFyVHdlZW4sXG4gICAgZGVmYXVsdDogb3ZlckRhbXBlZFNwcmluZyxcbn07XG52YXIgZ2V0RGVmYXVsdFRyYW5zaXRpb24gPSBmdW5jdGlvbiAodmFsdWVLZXksIHRvKSB7XG4gICAgdmFyIHRyYW5zaXRpb25GYWN0b3J5O1xuICAgIGlmIChpc0tleWZyYW1lc1RhcmdldCh0bykpIHtcbiAgICAgICAgdHJhbnNpdGlvbkZhY3RvcnkgPSBrZXlmcmFtZXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uRmFjdG9yeSA9XG4gICAgICAgICAgICBkZWZhdWx0VHJhbnNpdGlvbnNbdmFsdWVLZXldIHx8IGRlZmF1bHRUcmFuc2l0aW9ucy5kZWZhdWx0O1xuICAgIH1cbiAgICByZXR1cm4gX19hc3NpZ24oeyB0bzogdG8gfSwgdHJhbnNpdGlvbkZhY3RvcnkodG8pKTtcbn07XG5cbi8qKlxuICogRGVjaWRlIHdoZXRoZXIgYSB0cmFuc2l0aW9uIGlzIGRlZmluZWQgb24gYSBnaXZlbiBUcmFuc2l0aW9uLlxuICogVGhpcyBmaWx0ZXJzIG91dCBvcmNoZXN0cmF0aW9uIG9wdGlvbnMgYW5kIHJldHVybnMgdHJ1ZVxuICogaWYgYW55IG9wdGlvbnMgYXJlIGxlZnQuXG4gKi9cbmZ1bmN0aW9uIGlzVHJhbnNpdGlvbkRlZmluZWQoX2EpIHtcbiAgICB2YXIgd2hlbiA9IF9hLndoZW4sIGRlbGF5ID0gX2EuZGVsYXksIGRlbGF5Q2hpbGRyZW4gPSBfYS5kZWxheUNoaWxkcmVuLCBzdGFnZ2VyQ2hpbGRyZW4gPSBfYS5zdGFnZ2VyQ2hpbGRyZW4sIHN0YWdnZXJEaXJlY3Rpb24gPSBfYS5zdGFnZ2VyRGlyZWN0aW9uLCByZXBlYXQgPSBfYS5yZXBlYXQsIHJlcGVhdFR5cGUgPSBfYS5yZXBlYXRUeXBlLCByZXBlYXREZWxheSA9IF9hLnJlcGVhdERlbGF5LCBmcm9tID0gX2EuZnJvbSwgdHJhbnNpdGlvbiA9IF9fcmVzdChfYSwgW1wid2hlblwiLCBcImRlbGF5XCIsIFwiZGVsYXlDaGlsZHJlblwiLCBcInN0YWdnZXJDaGlsZHJlblwiLCBcInN0YWdnZXJEaXJlY3Rpb25cIiwgXCJyZXBlYXRcIiwgXCJyZXBlYXRUeXBlXCIsIFwicmVwZWF0RGVsYXlcIiwgXCJmcm9tXCJdKTtcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyh0cmFuc2l0aW9uKS5sZW5ndGg7XG59XG4vKipcbiAqIENvbnZlcnQgRnJhbWVyIE1vdGlvbidzIFRyYW5zaXRpb24gdHlwZSBpbnRvIFBvcG1vdGlvbi1jb21wYXRpYmxlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRUcmFuc2l0aW9uVG9BbmltYXRpb25PcHRpb25zKF9hKSB7XG4gICAgdmFyIHlveW8gPSBfYS55b3lvLCBsb29wID0gX2EubG9vcCwgZmxpcCA9IF9hLmZsaXAsIGVhc2UgPSBfYS5lYXNlLCB0aW1lcyA9IF9hLnRpbWVzLCB0cmFuc2l0aW9uID0gX19yZXN0KF9hLCBbXCJ5b3lvXCIsIFwibG9vcFwiLCBcImZsaXBcIiwgXCJlYXNlXCIsIFwidGltZXNcIl0pO1xuICAgIHZhciBvcHRpb25zID0gX19hc3NpZ24oe30sIHRyYW5zaXRpb24pO1xuICAgIGlmICh0aW1lcykge1xuICAgICAgICBvcHRpb25zLm9mZnNldCA9IHRpbWVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGFueSBleGlzdGluZyBkdXJhdGlvbnMgZnJvbSBzZWNvbmRzIHRvIG1pbGxpc2Vjb25kc1xuICAgICAqL1xuICAgIGlmICh0cmFuc2l0aW9uLmR1cmF0aW9uKVxuICAgICAgICBvcHRpb25zW1wiZHVyYXRpb25cIl0gPSBzZWNvbmRzVG9NaWxsaXNlY29uZHModHJhbnNpdGlvbi5kdXJhdGlvbik7XG4gICAgaWYgKHRyYW5zaXRpb24ucmVwZWF0RGVsYXkpXG4gICAgICAgIG9wdGlvbnMucmVwZWF0RGVsYXkgPSBzZWNvbmRzVG9NaWxsaXNlY29uZHModHJhbnNpdGlvbi5yZXBlYXREZWxheSk7XG4gICAgLyoqXG4gICAgICogTWFwIGVhc2luZyBuYW1lcyB0byBQb3Btb3Rpb24ncyBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICovXG4gICAgaWYgKGVhc2UpIHtcbiAgICAgICAgb3B0aW9uc1tcImVhc2VcIl0gPSBpc0Vhc2luZ0FycmF5KGVhc2UpXG4gICAgICAgICAgICA/IGVhc2UubWFwKGVhc2luZ0RlZmluaXRpb25Ub0Z1bmN0aW9uKVxuICAgICAgICAgICAgOiBlYXNpbmdEZWZpbml0aW9uVG9GdW5jdGlvbihlYXNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VwcG9ydCBsZWdhY3kgdHJhbnNpdGlvbiBBUElcbiAgICAgKi9cbiAgICBpZiAodHJhbnNpdGlvbi50eXBlID09PSBcInR3ZWVuXCIpXG4gICAgICAgIG9wdGlvbnMudHlwZSA9IFwia2V5ZnJhbWVzXCI7XG4gICAgaWYgKHlveW8pIHtcbiAgICAgICAgb3B0aW9ucy5yZXBlYXRUeXBlID0gXCJyZXZlcnNlXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxvb3ApIHtcbiAgICAgICAgb3B0aW9ucy5yZXBlYXRUeXBlID0gXCJsb29wXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsaXApIHtcbiAgICAgICAgb3B0aW9ucy5yZXBlYXRUeXBlID0gXCJtaXJyb3JcIjtcbiAgICB9XG4gICAgb3B0aW9ucy5yZXBlYXQgPSBsb29wIHx8IHlveW8gfHwgZmxpcCB8fCB0cmFuc2l0aW9uLnJlcGVhdDtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBQb3Btb3Rpb24gOSBoYXMgdGhlIGFiaWxpdHkgdG8gYXV0b21hdGljYWxseSBkZXRlY3Qgd2hldGhlciB0byB1c2VcbiAgICAgKiBhIGtleWZyYW1lcyBvciBzcHJpbmcgYW5pbWF0aW9uLCBidXQgZG9lcyBzbyBieSBkZXRlY3RpbmcgdmVsb2NpdHkgYW5kIG90aGVyIHNwcmluZyBvcHRpb25zLlxuICAgICAqIEl0J2QgYmUgZ29vZCB0byBpbnRyb2R1Y2UgYSBzaW1pbGFyIHRoaW5nIGhlcmUuXG4gICAgICovXG4gICAgaWYgKHRyYW5zaXRpb24udHlwZSAhPT0gXCJzcHJpbmdcIilcbiAgICAgICAgb3B0aW9ucy50eXBlID0gXCJrZXlmcmFtZXNcIjtcbiAgICByZXR1cm4gb3B0aW9ucztcbn1cbi8qKlxuICogR2V0IHRoZSBkZWxheSBmb3IgYSB2YWx1ZSBieSBjaGVja2luZyBUcmFuc2l0aW9uIHdpdGggZGVjcmVhc2luZyBzcGVjaWZpY2l0eS5cbiAqL1xuZnVuY3Rpb24gZ2V0RGVsYXlGcm9tVHJhbnNpdGlvbih0cmFuc2l0aW9uLCBrZXkpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgIHJldHVybiAoKF9lID0gKF9kID0gKF9iID0gKF9hID0gdHJhbnNpdGlvbltrZXldKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGVsYXkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChfYyA9IHRyYW5zaXRpb25bXCJkZWZhdWx0XCJdKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZGVsYXkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHRyYW5zaXRpb24uZGVsYXkpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IDApO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUtleWZyYW1lcyhvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50bykgJiYgb3B0aW9ucy50b1swXSA9PT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLnRvID0gX19zcHJlYWQob3B0aW9ucy50byk7XG4gICAgICAgIG9wdGlvbnMudG9bMF0gPSBvcHRpb25zLmZyb207XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xufVxuZnVuY3Rpb24gZ2V0UG9wbW90aW9uQW5pbWF0aW9uT3B0aW9ucyh0cmFuc2l0aW9uLCBvcHRpb25zLCBrZXkpIHtcbiAgICBoeWRyYXRlS2V5ZnJhbWVzKG9wdGlvbnMpO1xuICAgIC8qKlxuICAgICAqIEdldCBhIGRlZmF1bHQgdHJhbnNpdGlvbiBpZiBub25lIGlzIGRldGVybWluZWQgdG8gYmUgZGVmaW5lZC5cbiAgICAgKi9cbiAgICBpZiAoIWlzVHJhbnNpdGlvbkRlZmluZWQodHJhbnNpdGlvbikpIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0cmFuc2l0aW9uKSwgZ2V0RGVmYXVsdFRyYW5zaXRpb24oa2V5LCBvcHRpb25zLnRvKSk7XG4gICAgfVxuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIGNvbnZlcnRUcmFuc2l0aW9uVG9BbmltYXRpb25PcHRpb25zKHRyYW5zaXRpb24pKTtcbn1cbi8qKlxuICpcbiAqL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uKGtleSwgdmFsdWUsIHRhcmdldCwgdHJhbnNpdGlvbiwgb25Db21wbGV0ZSkge1xuICAgIHZhciB2YWx1ZVRyYW5zaXRpb24gPSB0cmFuc2l0aW9uW2tleV0gfHwgdHJhbnNpdGlvbltcImRlZmF1bHRcIl0gfHwgdHJhbnNpdGlvbjtcbiAgICB2YXIgb3JpZ2luID0gdmFsdWUuZ2V0KCk7XG4gICAgdmFyIGlzVGFyZ2V0QW5pbWF0YWJsZSA9IGlzQW5pbWF0YWJsZShrZXksIHRhcmdldCk7XG4gICAgLyoqXG4gICAgICogSWYgd2UncmUgdHJ5aW5nIHRvIGFuaW1hdGUgZnJvbSBcIm5vbmVcIiwgdHJ5IGFuZCBnZXQgYW4gYW5pbWF0YWJsZSB2ZXJzaW9uXG4gICAgICogb2YgdGhlIHRhcmdldC4gVGhpcyBjb3VsZCBiZSBpbXByb3ZlZCB0byB3b3JrIGJvdGggd2F5cy5cbiAgICAgKi9cbiAgICBpZiAob3JpZ2luID09PSBcIm5vbmVcIiAmJiBpc1RhcmdldEFuaW1hdGFibGUgJiYgdHlwZW9mIHRhcmdldCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBvcmlnaW4gPSBjb21wbGV4LmdldEFuaW1hdGFibGVOb25lKHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBpc09yaWdpbkFuaW1hdGFibGUgPSBpc0FuaW1hdGFibGUoa2V5LCBvcmlnaW4pO1xuICAgIHdhcm5pbmcoaXNPcmlnaW5BbmltYXRhYmxlID09PSBpc1RhcmdldEFuaW1hdGFibGUsIFwiWW91IGFyZSB0cnlpbmcgdG8gYW5pbWF0ZSBcIiArIGtleSArIFwiIGZyb20gXFxcIlwiICsgb3JpZ2luICsgXCJcXFwiIHRvIFxcXCJcIiArIHRhcmdldCArIFwiXFxcIi4gXCIgKyBvcmlnaW4gKyBcIiBpcyBub3QgYW4gYW5pbWF0YWJsZSB2YWx1ZSAtIHRvIGVuYWJsZSB0aGlzIGFuaW1hdGlvbiBzZXQgXCIgKyBvcmlnaW4gKyBcIiB0byBhIHZhbHVlIGFuaW1hdGFibGUgdG8gXCIgKyB0YXJnZXQgKyBcIiB2aWEgdGhlIGBzdHlsZWAgcHJvcGVydHkuXCIpO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZyb206IG9yaWdpbixcbiAgICAgICAgICAgIHRvOiB0YXJnZXQsXG4gICAgICAgICAgICB2ZWxvY2l0eTogdmFsdWUuZ2V0VmVsb2NpdHkoKSxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6IG9uQ29tcGxldGUsXG4gICAgICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHZhbHVlLnNldCh2KTsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHJhbnNpdGlvbi50eXBlID09PSBcImluZXJ0aWFcIiB8fFxuICAgICAgICAgICAgdmFsdWVUcmFuc2l0aW9uLnR5cGUgPT09IFwiZGVjYXlcIlxuICAgICAgICAgICAgPyBpbmVydGlhKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgdmFsdWVUcmFuc2l0aW9uKSlcbiAgICAgICAgICAgIDogYW5pbWF0ZShnZXRQb3Btb3Rpb25BbmltYXRpb25PcHRpb25zKHZhbHVlVHJhbnNpdGlvbiwgb3B0aW9ucywga2V5KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgdmFsdWUuc2V0KHRhcmdldCk7XG4gICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuIHsgc3RvcDogZnVuY3Rpb24gKCkgeyB9IH07XG4gICAgfVxuICAgIHJldHVybiAhaXNPcmlnaW5BbmltYXRhYmxlIHx8XG4gICAgICAgICFpc1RhcmdldEFuaW1hdGFibGUgfHxcbiAgICAgICAgdmFsdWVUcmFuc2l0aW9uLnR5cGUgPT09IGZhbHNlXG4gICAgICAgID8gc2V0XG4gICAgICAgIDogc3RhcnQ7XG59XG4vKipcbiAqIFN0YXJ0IGFuaW1hdGlvbiBvbiBhIE1vdGlvblZhbHVlLiBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSBiZXR3ZWVuXG4gKiBGcmFtZXIgTW90aW9uIGFuZCBQb3Btb3Rpb25cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oa2V5LCB2YWx1ZSwgdGFyZ2V0LCB0cmFuc2l0aW9uKSB7XG4gICAgaWYgKHRyYW5zaXRpb24gPT09IHZvaWQgMCkgeyB0cmFuc2l0aW9uID0ge307IH1cbiAgICByZXR1cm4gdmFsdWUuc3RhcnQoZnVuY3Rpb24gKG9uQ29tcGxldGUpIHtcbiAgICAgICAgdmFyIGRlbGF5VGltZXI7XG4gICAgICAgIHZhciBjb250cm9scztcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IGdldEFuaW1hdGlvbihrZXksIHZhbHVlLCB0YXJnZXQsIHRyYW5zaXRpb24sIG9uQ29tcGxldGUpO1xuICAgICAgICB2YXIgZGVsYXkgPSBnZXREZWxheUZyb21UcmFuc2l0aW9uKHRyYW5zaXRpb24sIGtleSk7XG4gICAgICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChjb250cm9scyA9IGFuaW1hdGlvbigpKTsgfTtcbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dChzdGFydCwgc2Vjb25kc1RvTWlsbGlzZWNvbmRzKGRlbGF5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVsYXlUaW1lcik7XG4gICAgICAgICAgICBjb250cm9scyA9PT0gbnVsbCB8fCBjb250cm9scyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udHJvbHMuc3RvcCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG4vKipcbiAqIE1lYXN1cmUgYW5kIHJldHVybiB0aGUgZWxlbWVudCBib3VuZGluZyBib3guXG4gKlxuICogV2UgY29udmVydCB0aGUgYm94IGludG8gYW4gQXhpc0JveDJEIHRvIG1ha2UgaXQgZWFzaWVyIHRvIHdvcmsgd2l0aCBlYWNoIGF4aXNcbiAqIGluZGl2aWR1YWxseSBhbmQgcHJvZ3JhbW1hdGljYWxseS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG9wdGlvbmFsbHkgYWNjZXB0cyBhIHRyYW5zZm9ybVBhZ2VQb2ludCBmdW5jdGlvbiB3aGljaCBhbGxvd3MgdXMgdG8gY29tcGVuc2F0ZVxuICogZm9yLCBmb3IgaW5zdGFuY2UsIG1lYXN1cmluZyB0aGUgZWxlbWVudCB3aXRoaW4gYSBzY2FsZWQgcGxhbmUgbGlrZSBhIEZyYW1lciBkZXZpdmNlIHByZXZpZXcgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0JveChlbGVtZW50LCB0cmFuc2Zvcm1QYWdlUG9pbnQpIHtcbiAgICB2YXIgYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gY29udmVydEJvdW5kaW5nQm94VG9BeGlzQm94KHRyYW5zZm9ybUJvdW5kaW5nQm94KGJveCwgdHJhbnNmb3JtUGFnZVBvaW50KSk7XG59XG5cbi8qKlxuICogQSBWaXN1YWxFbGVtZW50IGZvciBIVE1MRWxlbWVudHNcbiAqL1xudmFyIEhUTUxWaXN1YWxFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIVE1MVmlzdWFsRWxlbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVE1MVmlzdWFsRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgYWxsb3dUcmFuc2Zvcm1Ob25lOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBtdXRhYmxlIHJlY29yZCBvZiBzdHlsZXMgd2Ugd2FudCB0byBhcHBseSBkaXJlY3RseSB0byB0aGUgcmVuZGVyZWQgRWxlbWVudFxuICAgICAgICAgKiBldmVyeSBmcmFtZS4gV2UgdXNlIGEgbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSB0byByZWR1Y2UgR0MgZHVyaW5nIGFuaW1hdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5zdHlsZSA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWNvcmQgb2Ygc3R5bGVzIHdlIG9ubHkgd2FudCB0byBhcHBseSB2aWEgUmVhY3QuIFRoaXMgZ2V0cyBzZXQgaW4gdXNlTW90aW9uVmFsdWVzXG4gICAgICAgICAqIGFuZCBhcHBsaWVkIGluIHRoZSByZW5kZXIgZnVuY3Rpb24uIEknZCBwcmVmZXIgdGhpcyB0byBsaXZlIHNvbWV3aGVyZSBlbHNlIHRvIGRlY291cGxlXG4gICAgICAgICAqIFZpc3VhbEVsZW1lbnQgZnJvbSBSZWFjdCBidXQgd29ya3MgZm9yIG5vdy5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnJlYWN0U3R5bGUgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgbXV0YWJsZSByZWNvcmQgb2YgQ1NTIHZhcmlhYmxlcyB3ZSB3YW50IHRvIGFwcGx5IGRpcmVjdGx5IHRvIHRoZSByZW5kZXJlZCBFbGVtZW50XG4gICAgICAgICAqIGV2ZXJ5IGZyYW1lLiBXZSB1c2UgYSBtdXRhYmxlIGRhdGEgc3RydWN0dXJlIHRvIHJlZHVjZSBHQyBkdXJpbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnZhcnMgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgbXV0YWJsZSByZWNvcmQgb2YgdHJhbnNmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGRpcmVjdGx5IHRvIHRoZSByZW5kZXJlZCBFbGVtZW50XG4gICAgICAgICAqIGV2ZXJ5IGZyYW1lLiBXZSB1c2UgYSBtdXRhYmxlIGRhdGEgc3RydWN0dXJlIHRvIHJlZHVjZSBHQyBkdXJpbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybSA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBtdXRhYmxlIHJlY29yZCBvZiB0cmFuc2Zvcm0gb3JpZ2lucyB3ZSB3YW50IHRvIGFwcGx5IGRpcmVjdGx5IHRvIHRoZSByZW5kZXJlZCBFbGVtZW50XG4gICAgICAgICAqIGV2ZXJ5IGZyYW1lLiBXZSB1c2UgYSBtdXRhYmxlIGRhdGEgc3RydWN0dXJlIHRvIHJlZHVjZSBHQyBkdXJpbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybU9yaWdpbiA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBtdXRhYmxlIHJlY29yZCBvZiB0cmFuc2Zvcm0ga2V5cyB3ZSB3YW50IHRvIGFwcGx5IHRvIHRoZSByZW5kZXJlZCBFbGVtZW50LiBXZSBvcmRlclxuICAgICAgICAgKiB0aGlzIHRvIG9yZGVyIHRyYW5zZm9ybXMgaW4gdGhlIGRlc2lyZWQgb3JkZXIuIFdlIHVzZSBhIG11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgdG8gcmVkdWNlIEdDIGR1cmluZyBhbmltYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudHJhbnNmb3JtS2V5cyA9IFtdO1xuICAgICAgICBfdGhpcy5jb25maWcgPSBfdGhpcy5kZWZhdWx0Q29uZmlnO1xuICAgICAgICAvKipcbiAgICAgICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgKiBMYXlvdXRcbiAgICAgICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaXNMYXlvdXRQcm9qZWN0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBzZXQgb2YgbGF5b3V0IHVwZGF0ZSBldmVudCBoYW5kbGVycy4gVGhlc2UgYXJlIG9ubHkgY2FsbGVkIG9uY2UgYWxsIGxheW91dHMgaGF2ZSBiZWVuIHJlYWQsXG4gICAgICAgICAqIG1ha2luZyBpdCBzYWZlIHRvIHBlcmZvcm0gRE9NIHdyaXRlIG9wZXJhdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5sYXlvdXRVcGRhdGVMaXN0ZW5lcnMgPSBuZXcgU3Vic2NyaXB0aW9uTWFuYWdlcigpO1xuICAgICAgICBfdGhpcy5sYXlvdXRNZWFzdXJlTGlzdGVuZXJzID0gbmV3IFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcbiAgICAgICAgX3RoaXMudmlld3BvcnRCb3hVcGRhdGVMaXN0ZW5lcnMgPSBuZXcgU3Vic2NyaXB0aW9uTWFuYWdlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogS2VlcCB0cmFjayBvZiB3aGV0aGVyIHRoZSB2aWV3cG9ydCBib3ggaGFzIGJlZW4gdXBkYXRlZCBzaW5jZSB0aGUgbGFzdCByZW5kZXIuXG4gICAgICAgICAqIElmIGl0IGhhcywgd2Ugd2FudCB0byBmaXJlIHRoZSBvblZpZXdwb3J0Qm94VXBkYXRlIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaGFzVmlld3BvcnRCb3hVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmlzdWFsIHRhcmdldCB3ZSB3YW50IHRvIHByb2plY3Qgb3VyIGNvbXBvbmVudCBpbnRvIG9uIGEgZ2l2ZW4gZnJhbWVcbiAgICAgICAgICogYmVmb3JlIGFwcGx5aW5nIHRyYW5zZm9ybXMgZGVmaW5lZCBpbiBgYW5pbWF0ZWAgb3IgYHN0eWxlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyBjb25zaWRlcmVkIG11dGFibGUgdG8gYXZvaWQgb2JqZWN0IGNyZWF0aW9uIG9uIGVhY2ggZnJhbWUuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy50YXJnZXRCb3hGaW5hbCA9IGF4aXNCb3goKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvdmVyYWxsIHNjYWxlIG9mIHRoZSBsb2NhbCBjb29yZGluYXRlIHN5c3RlbSBhcyB0cmFuc2Zvcm1lZCBieSBhbGwgcGFyZW50c1xuICAgICAgICAgKiBvZiB0aGlzIGNvbXBvbmVudC4gV2UgdXNlIHRoaXMgZm9yIHNjYWxlIGNvcnJlY3Rpb24gb24gb3VyIGNhbGN1bGF0ZWQgbGF5b3V0c1xuICAgICAgICAgKiBhbmQgc2NhbGUtYWZmZWN0ZWQgdmFsdWVzIGxpa2UgYGJveFNoYWRvd2AuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgY29uc2lkZXJlZCBtdXRhYmxlIHRvIGF2b2lkIG9iamVjdCBjcmVhdGlvbiBvbiBlYWNoIGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudHJlZVNjYWxlID0geyB4OiAxLCB5OiAxIH07XG4gICAgICAgIF90aGlzLnByZXZUcmVlU2NhbGUgPSB7IHg6IDEsIHk6IDEgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBib3hDb3JyZWN0ZWQgYW5kIHRoZSBkZXNpcmVkXG4gICAgICAgICAqIHRhcmdldEJveCAoYmVmb3JlIHVzZXItc2V0IHRyYW5zZm9ybXMgYXJlIGFwcGxpZWQpLiBUaGUgY2FsY3VsYXRlZCBvdXRwdXQgd2lsbCBiZVxuICAgICAgICAgKiBoYW5kZWQgdG8gdGhlIHJlbmRlcmVyIGFuZCB1c2VkIGFzIHBhcnQgb2YgdGhlIHN0eWxlIGNvcnJlY3Rpb24gY2FsY3VsYXRpb25zLCBmb3JcbiAgICAgICAgICogaW5zdGFuY2UgY2FsY3VsYXRpbmcgaG93IHRvIGRpc3BsYXkgdGhlIGRlc2lyZWQgYm9yZGVyLXJhZGl1cyBjb3JyZWN0bHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgY29uc2lkZXJlZCBtdXRhYmxlIHRvIGF2b2lkIG9iamVjdCBjcmVhdGlvbiBvbiBlYWNoIGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuZGVsdGEgPSBkZWx0YSgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlbHRhIGJldHdlZW4gdGhlIGJveENvcnJlY3RlZCBhbmQgdGhlIGRlc2lyZWQgdGFyZ2V0Qm94RmluYWwuIFRoZSBjYWxjdWxhdGVkXG4gICAgICAgICAqIG91dHB1dCB3aWxsIGJlIGhhbmRlZCB0byB0aGUgcmVuZGVyZXIgYW5kIHVzZWQgdG8gcHJvamVjdCB0aGUgYm94Q29ycmVjdGVkIGludG9cbiAgICAgICAgICogdGhlIHRhcmdldEJveEZpbmFsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIGNvbnNpZGVyZWQgbXV0YWJsZSB0byBhdm9pZCBvYmplY3QgY3JlYXRpb24gb24gZWFjaCBmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmRlbHRhRmluYWwgPSBkZWx0YSgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbXB1dGVkIHRyYW5zZm9ybSBzdHJpbmcgdG8gYXBwbHkgZGVsdGFGaW5hbCB0byB0aGUgZWxlbWVudC4gQ3VycmVudGx5IHRoaXMgaXMgb25seVxuICAgICAgICAgKiBiZWluZyB1c2VkIHRvIGRpZmYgYW5kIGRlY2lkZSB3aGV0aGVyIHRvIHJlbmRlciBvbiB0aGUgY3VycmVudCBmcmFtZSwgYnV0IGEgbWlub3Igb3B0aW1pc2F0aW9uXG4gICAgICAgICAqIGNvdWxkIGJlIHRvIHByb3ZpZGUgdGhpcyB0byB0aGUgYnVpbGRIVE1MU3R5bGUgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5kZWx0YVRyYW5zZm9ybSA9IGlkZW50aXR5UHJvamVjdGlvbjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5zdG9wTGF5b3V0QXhpc0FuaW1hdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIHk6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaXNUYXJnZXRCb3hMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5heGlzUHJvZ3Jlc3MgPSB7XG4gICAgICAgICAgICB4OiBtb3Rpb25WYWx1ZSgwKSxcbiAgICAgICAgICAgIHk6IG1vdGlvblZhbHVlKDApLFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy51cGRhdGVMYXlvdXREZWx0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQgJiYgX3RoaXMuYm94ICYmIF90aGlzLnVwZGF0ZUxheW91dERlbHRhcygpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbnN1cmUgYWxsIGNoaWxkcmVuIGxheW91dHMgYXJlIGFsc28gdXBkYXRlZC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBUaGlzIHVzZXMgYSBwcmUtYm91bmQgZnVuY3Rpb24gZXhlY3V0b3IgcmF0aGVyIHRoYW4gYSBsYW1kYSB0byBhdm9pZCBjcmVhdGluZyBhIG5ldyBmdW5jdGlvblxuICAgICAgICAgICAgICogbXVsdGlwbGUgdGltZXMgcGVyIGZyYW1lIChzb3VyY2Ugb2YgbWlkLWFuaW1hdGlvbiBHQylcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgX3RoaXMuY2hpbGRyZW4uZm9yRWFjaChmaXJlVXBkYXRlTGF5b3V0RGVsdGEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYSB2YWx1ZSBpcyByZW1vdmVkLCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSBpdCdzIHJlbW92ZWQgZnJvbSBhbGwgcmVuZGVyZWQgZGF0YSBzdHJ1Y3R1cmVzLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmVWYWx1ZS5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZhcnNba2V5XTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc3R5bGVba2V5XTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVtcHR5IHRoZSBtdXRhYmxlIGRhdGEgc3RydWN0dXJlcyBieSByZS1jcmVhdGluZyB0aGVtLiBXZSBjYW4gZG8gdGhpcyBldmVyeSBSZWFjdCByZW5kZXJcbiAgICAgKiBhcyB0aGUgY29tcGFyYXRpdmUgd29ya2xvYWQgdG8gdGhlIHJlc3Qgb2YgdGhlIHJlbmRlciBpcyB2ZXJ5IGxvdyBhbmQgdGhpcyBpcyBhbHNvIHdoZW5cbiAgICAgKiB3ZSB3YW50IHRvIHJlZmxlY3QgdmFsdWVzIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWQgYnkgdGhlIHJlbmRlci5cbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fTtcbiAgICAgICAgdGhpcy52YXJzID0ge307XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0ge307XG4gICAgfTtcbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUudXBkYXRlQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdGhpcy5jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5kZWZhdWx0Q29uZmlnKSwgY29uZmlnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlYWQgYSB2YWx1ZSBkaXJlY3RseSBmcm9tIHRoZSBIVE1MRWxlbWVudCBzdHlsZS5cbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZSgpW2tleV0gfHwgMDtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5hZGRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuYWRkVmFsdWUuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSByb3RhdGUgdmFsdWVzIHdlIHdhbnQgdG8gZm9jZSB0aGUgbGF5b3V0T3JpZ2luIHVzZWQgaW4gbGF5b3V0IHByb2plY3Rpb25cbiAgICAgICAgLy8gdG8gdGhlIGNlbnRlciBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwicm90YXRlXCIpKVxuICAgICAgICAgICAgdGhpcy5sYXlvdXRPcmlnaW4gPSAwLjU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWFkIGEgdmFsdWUgZGlyZWN0bHkgZnJvbSB0aGUgSFRNTEVsZW1lbnQgaW4gY2FzZSBpdCdzIG5vdCBkZWZpbmVkIGJ5IGEgTW90aW9uXG4gICAgICogcHJvcC4gSWYgaXQncyBhIHRyYW5zZm9ybSwgd2UganVzdCByZXR1cm4gYSBwcmUtZGVmaW5lZCBkZWZhdWx0IHZhbHVlIGFzIHJlYWRpbmcgdGhlc2VcbiAgICAgKiBvdXQgb2YgYSBtYXRyaXggaXMgZWl0aGVyIGVycm9yLXByb25lIG9yIGNhbiBpbmN1ciBhIGJpZyBwYXlsb2FkIGZvciBsaXR0bGUgYmVuZWZpdC5cbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUucmVhZE5hdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1Qcm9wKGtleSkpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWVUeXBlID0gZ2V0RGVmYXVsdFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVR5cGUgPyBkZWZhdWx0VmFsdWVUeXBlLmRlZmF1bHQgfHwgMCA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkKGtleSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5lbmFibGVMYXlvdXRQcm9qZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSA9PT0gZmFsc2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZW5kZXIoKTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgPT09IHRydWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlbmRlcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZmlyZSB3aGVuIHRoZSBsYXlvdXQgaXMgdXBkYXRlZC4gV2UgbWlnaHQgd2FudCB0byBleHBvc2Ugc3VwcG9ydFxuICAgICAqIGZvciB0aGlzIHZpYSBhIGBtb3Rpb25gIHByb3AuXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLm9uTGF5b3V0VXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dFVwZGF0ZUxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLm9uTGF5b3V0TWVhc3VyZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRNZWFzdXJlTGlzdGVuZXJzLmFkZChjYWxsYmFjayk7XG4gICAgfTtcbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUub25WaWV3cG9ydEJveFVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydEJveFVwZGF0ZUxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVG8gYmUgY2FsbGVkIHdoZW4gYWxsIGxheW91dHMgYXJlIHN1Y2Nlc3NmdWxseSB1cGRhdGVkLiBJbiB0dXJuIHdlIGNhbiBub3RpZnkgbGF5b3V0VXBkYXRlXG4gICAgICogc3Vic2NyaWJlcnMuXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmxheW91dFJlYWR5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB0aGlzLmxheW91dFVwZGF0ZUxpc3RlbmVycy5ub3RpZnkodGhpcy5ib3gsIHRoaXMucHJldlZpZXdwb3J0Qm94IHx8IHRoaXMuYm94LCBjb25maWcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWVhc3VyZSBhbmQgcmV0dXJuIHRoZSBFbGVtZW50J3MgYm91bmRpbmcgYm94LiBXZSBjb252ZXJ0IGl0IHRvIGEgQXhpc0JveDJEXG4gICAgICogc3RydWN0dXJlIHRvIG1ha2UgaXQgZWFzaWVyIHRvIHdvcmsgb24gZWFjaCBpbmRpdmlkdWFsIGF4aXMgZ2VuZXJpY2FsbHkuXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmdldEJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtUGFnZVBvaW50ID0gdGhpcy5jb25maWcudHJhbnNmb3JtUGFnZVBvaW50O1xuICAgICAgICByZXR1cm4gZ2V0Qm91bmRpbmdCb3godGhpcy5lbGVtZW50LCB0cmFuc2Zvcm1QYWdlUG9pbnQpO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmdldEJvdW5kaW5nQm94V2l0aG91dFRyYW5zZm9ybXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBiYm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICByZW1vdmVCb3hUcmFuc2Zvcm1zKGJib3gsIHRoaXMubGF0ZXN0KTtcbiAgICAgICAgcmV0dXJuIGJib3g7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGNvbXB1dGVkIHN0eWxlIGFmdGVyIGEgcmVuZGVyLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlY29yZCB0aGUgYm91bmRpbmcgYm94IGFzIGl0IGV4aXN0cyBiZWZvcmUgYSByZS1yZW5kZXIuXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnNuYXBzaG90Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldlZpZXdwb3J0Qm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveFdpdGhvdXRUcmFuc2Zvcm1zKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGFyZ2V0Qm94IHRvIG1hdGNoIHRoZSBwcmV2Vmlld3BvcnRCb3guIFRoaXMgaXMganVzdCB0byBlbnN1cmVcbiAgICAgICAgICogdGhhdCB0YXJnZXRCb3ggaXMgYWZmZWN0ZWQgYnkgc2Nyb2xsIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgbWVhc3VyZWQgYm94XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYmFzZVRhcmdldEJveChmYWxzZSwgdGhpcy5wcmV2Vmlld3BvcnRCb3gpO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnJlYmFzZVRhcmdldEJveCA9IGZ1bmN0aW9uIChmb3JjZSwgYm94KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7IGZvcmNlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKGJveCA9PT0gdm9pZCAwKSB7IGJveCA9IHRoaXMuYm94OyB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYXhpc1Byb2dyZXNzLCB4ID0gX2EueCwgeSA9IF9hLnk7XG4gICAgICAgIHZhciBzaG91bGRSZWJhc2UgPSB0aGlzLmJveCAmJlxuICAgICAgICAgICAgIXRoaXMuaXNUYXJnZXRCb3hMb2NrZWQgJiZcbiAgICAgICAgICAgICF4LmlzQW5pbWF0aW5nKCkgJiZcbiAgICAgICAgICAgICF5LmlzQW5pbWF0aW5nKCk7XG4gICAgICAgIGlmIChmb3JjZSB8fCBzaG91bGRSZWJhc2UpIHtcbiAgICAgICAgICAgIGVhY2hBeGlzKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gYm94W2F4aXNdLCBtaW4gPSBfYS5taW4sIG1heCA9IF9hLm1heDtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRBeGlzVGFyZ2V0KGF4aXMsIG1pbiwgbWF4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUubWVhc3VyZUxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5ib3ggPSB0aGlzLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgIHRoaXMuYm94Q29ycmVjdGVkID0gY29weUF4aXNCb3godGhpcy5ib3gpO1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0Qm94KVxuICAgICAgICAgICAgdGhpcy50YXJnZXRCb3ggPSBjb3B5QXhpc0JveCh0aGlzLmJveCk7XG4gICAgICAgIHRoaXMubGF5b3V0TWVhc3VyZUxpc3RlbmVycy5ub3RpZnkodGhpcy5ib3gsIHRoaXMucHJldlZpZXdwb3J0Qm94IHx8IHRoaXMuYm94KTtcbiAgICAgICAgc3luYy51cGRhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmViYXNlVGFyZ2V0Qm94KCk7IH0pO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmxvY2tUYXJnZXRCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNUYXJnZXRCb3hMb2NrZWQgPSB0cnVlO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnVubG9ja1RhcmdldEJveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wTGF5b3V0QW5pbWF0aW9uKCk7XG4gICAgICAgIHRoaXMuaXNUYXJnZXRCb3hMb2NrZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSB0cmFuc2Zvcm0gb24gdGhlIGN1cnJlbnQgRWxlbWVudC4gVGhpcyBpcyBjYWxsZWQgYXMgcGFydFxuICAgICAqIG9mIGEgYmF0Y2hlZCBwcm9jZXNzIGFjcm9zcyB0aGUgZW50aXJlIGxheW91dCB0cmVlLiBUbyByZW1vdmUgdGhpcyB3cml0ZVxuICAgICAqIGN5Y2xlIGl0J2QgYmUgaW50ZXJlc3RpbmcgdG8gc2VlIGlmIGl0J3MgcG9zc2libGUgdG8gXCJ1bmRvXCIgYWxsIHRoZSBjdXJyZW50XG4gICAgICogbGF5b3V0IHRyYW5zZm9ybXMgdXAgdGhlIHRyZWUgaW4gdGhlIHNhbWUgd2F5IHRoaXMuZ2V0Qm91bmRpbmdCb3hXaXRob3V0VHJhbnNmb3Jtc1xuICAgICAqIHdvcmtzXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnJlc2V0VHJhbnNmb3JtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtVGVtcGxhdGUgPSB0aGlzLmNvbmZpZy50cmFuc2Zvcm1UZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVRlbXBsYXRlXG4gICAgICAgICAgICA/IHRyYW5zZm9ybVRlbXBsYXRlKHt9LCBcIlwiKVxuICAgICAgICAgICAgOiBcIm5vbmVcIjtcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgd2hhdGV2ZXIgaGFwcGVucyBuZXh0LCB3ZSByZXN0b3JlIG91ciB0cmFuc2Zvcm1cbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlbmRlcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBtaW4vbWF4IGJvdW5kYXJpZXMgdG8gcHJvamVjdCBhbiBheGlzIGludG9cbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2V0QXhpc1RhcmdldCA9IGZ1bmN0aW9uIChheGlzLCBtaW4sIG1heCkge1xuICAgICAgICB2YXIgdGFyZ2V0QXhpcyA9IHRoaXMudGFyZ2V0Qm94W2F4aXNdO1xuICAgICAgICB0YXJnZXRBeGlzLm1pbiA9IG1pbjtcbiAgICAgICAgdGFyZ2V0QXhpcy5tYXggPSBtYXg7XG4gICAgICAgIC8vIEZsYWcgdGhhdCB3ZSB3YW50IHRvIGZpcmUgdGhlIG9uVmlld3BvcnRCb3hVcGRhdGUgZXZlbnQgaGFuZGxlclxuICAgICAgICB0aGlzLmhhc1ZpZXdwb3J0Qm94VXBkYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucm9vdFBhcmVudC5zY2hlZHVsZVVwZGF0ZUxheW91dERlbHRhKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5zdGFydExheW91dEF4aXNBbmltYXRpb24gPSBmdW5jdGlvbiAoYXhpcywgdHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLmF4aXNQcm9ncmVzc1theGlzXTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy50YXJnZXRCb3hbYXhpc10sIG1pbiA9IF9hLm1pbiwgbWF4ID0gX2EubWF4O1xuICAgICAgICB2YXIgbGVuZ3RoID0gbWF4IC0gbWluO1xuICAgICAgICBwcm9ncmVzcy5jbGVhckxpc3RlbmVycygpO1xuICAgICAgICBwcm9ncmVzcy5zZXQobWluKTtcbiAgICAgICAgcHJvZ3Jlc3Muc2V0KG1pbik7IC8vIFNldCB0d2ljZSB0byBoYXJkLXJlc2V0IHZlbG9jaXR5XG4gICAgICAgIHByb2dyZXNzLm9uQ2hhbmdlKGZ1bmN0aW9uICh2KSB7IHJldHVybiBfdGhpcy5zZXRBeGlzVGFyZ2V0KGF4aXMsIHYsIHYgKyBsZW5ndGgpOyB9KTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0QW5pbWF0aW9uKGF4aXMsIHByb2dyZXNzLCAwLCB0cmFuc2l0aW9uKTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5zdG9wTGF5b3V0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykgeyByZXR1cm4gX3RoaXMuYXhpc1Byb2dyZXNzW2F4aXNdLnN0b3AoKTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGxheW91dCBkZWx0YXMgdG8gcmVmbGVjdCB0aGUgcmVsYXRpdmUgcG9zaXRpb25zIG9mIHRoZSBsYXlvdXRcbiAgICAgKiBhbmQgdGhlIGRlc2lyZWQgdGFyZ2V0IGJveFxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS51cGRhdGVMYXlvdXREZWx0YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNldCB0aGUgY29ycmVjdGVkIGJveCB3aXRoIHRoZSBsYXRlc3QgdmFsdWVzIGZyb20gYm94LCBhcyB3ZSdyZSB0aGVuIGdvaW5nXG4gICAgICAgICAqIHRvIHBlcmZvcm0gbXV0YXRpdmUgb3BlcmF0aW9ucyBvbiBpdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlc2V0Qm94KHRoaXMuYm94Q29ycmVjdGVkLCB0aGlzLmJveCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGlzIGNvbXBvbmVudCBoYXMgYSBwYXJlbnQsIHVwZGF0ZSB0aGlzIHRyZWVTY2FsZSBieSBpbmNvcnBvcmF0aW5nIHRoZSBwYXJlbnQnc1xuICAgICAgICAgKiBkZWx0YSBpbnRvIGl0cyB0cmVlU2NhbGUuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJldlRyZWVTY2FsZS54ID0gdGhpcy50cmVlU2NhbGUueDtcbiAgICAgICAgICAgIHRoaXMucHJldlRyZWVTY2FsZS55ID0gdGhpcy50cmVlU2NhbGUueTtcbiAgICAgICAgICAgIHVwZGF0ZVRyZWVTY2FsZSh0aGlzLnRyZWVTY2FsZSwgdGhpcy5wYXJlbnQudHJlZVNjYWxlLCB0aGlzLnBhcmVudC5kZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGx5IGFsbCB0aGUgcGFyZW50IGRlbHRhcyB0byB0aGlzIGJveCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0ZWQgYm94LiBUaGlzXG4gICAgICAgICAqIGlzIHRoZSBsYXlvdXQgYm94LCBhcyBpdCB3aWxsIGFwcGVhciBvbiBzY3JlZW4gYXMgYSByZXN1bHQgb2YgdGhlIHRyYW5zZm9ybXMgb2YgaXRzIHBhcmVudHMuXG4gICAgICAgICAqL1xuICAgICAgICBhcHBseVRyZWVEZWx0YXModGhpcy5ib3hDb3JyZWN0ZWQsIHRoaXMudHJlZVBhdGgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBjb3JyZWN0ZWQgYm94IGFuZCB0aGUgdGFyZ2V0IGJveCBiZWZvcmUgdXNlci1zZXQgdHJhbnNmb3JtcyB3ZXJlIGFwcGxpZWQuXG4gICAgICAgICAqIFRoaXMgd2lsbCBhbGxvdyB1cyB0byBjYWxjdWxhdGUgdGhlIGNvcnJlY3RlZCBib3JkZXJSYWRpdXMgYW5kIGJveFNoYWRvdyB0byBjb21wZW5zYXRlXG4gICAgICAgICAqIGZvciBvdXIgbGF5b3V0IHJlcHJvamVjdGlvbiwgYnV0IHN0aWxsIGFsbG93IHRoZW0gdG8gYmUgc2NhbGVkIGNvcnJlY3RseSBieSB0aGUgdXNlci5cbiAgICAgICAgICogSXQgbWlnaHQgYmUgdGhhdCB0byBzaW1wbGlmeSB0aGlzIHdlIG1heSB3YW50IHRvIGFjY2VwdCB0aGF0IHVzZXItc2V0IHNjYWxlIGlzIGFsc28gY29ycmVjdGVkXG4gICAgICAgICAqIGFuZCB3ZSB3b3VsZG4ndCBoYXZlIHRvIGtlZXAgYW5kIGNhbGMgYm90aCBkZWx0YXMsIE9SIHdlIGNvdWxkIHN1cHBvcnQgYSB1c2VyIHNldHRpbmdcbiAgICAgICAgICogdG8gYWxsb3cgcGVvcGxlIHRvIGNob29zZSB3aGV0aGVyIHRoZXNlIHN0eWxlcyBhcmUgY29ycmVjdGVkIGJhc2VkIG9uIGp1c3QgdGhlXG4gICAgICAgICAqIGxheW91dCByZXByb2plY3Rpb24gb3IgdGhlIGZpbmFsIGJvdW5kaW5nIGJveC5cbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZUJveERlbHRhKHRoaXMuZGVsdGEsIHRoaXMuYm94Q29ycmVjdGVkLCB0aGlzLnRhcmdldEJveCwgdGhpcy5sYXlvdXRPcmlnaW4pO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgd2UgaGF2ZSBhIGxpc3RlbmVyIGZvciB0aGUgdmlld3BvcnQgYm94LCBmaXJlIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYXNWaWV3cG9ydEJveFVwZGF0ZWQgJiZcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRCb3hVcGRhdGVMaXN0ZW5lcnMubm90aWZ5KHRoaXMudGFyZ2V0Qm94LCB0aGlzLmRlbHRhKTtcbiAgICAgICAgdGhpcy5oYXNWaWV3cG9ydEJveFVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuc3VyZSB0aGlzIGVsZW1lbnQgcmVuZGVycyBvbiB0aGUgbmV4dCBmcmFtZSBpZiB0aGUgcHJvamVjdGlvbiB0cmFuc2Zvcm0gaGFzIGNoYW5nZWQuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZGVsdGFUcmFuc2Zvcm0gPSBidWlsZExheW91dFByb2plY3Rpb25UcmFuc2Zvcm0odGhpcy5kZWx0YSwgdGhpcy50cmVlU2NhbGUpO1xuICAgICAgICBpZiAoZGVsdGFUcmFuc2Zvcm0gIT09IHRoaXMuZGVsdGFUcmFuc2Zvcm0gfHxcbiAgICAgICAgICAgIC8vIEFsc28gY29tcGFyZSBjYWxjdWxhdGVkIHRyZWVTY2FsZSwgZm9yIHZhbHVlcyB0aGF0IHJlbHkgb24gb25seSB0aGlzIGZvciBzY2FsZSBjb3JyZWN0aW9uLlxuICAgICAgICAgICAgdGhpcy5wcmV2VHJlZVNjYWxlLnggIT09IHRoaXMudHJlZVNjYWxlLnggfHxcbiAgICAgICAgICAgIHRoaXMucHJldlRyZWVTY2FsZS55ICE9PSB0aGlzLnRyZWVTY2FsZS55KSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWx0YVRyYW5zZm9ybSA9IGRlbHRhVHJhbnNmb3JtO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnVwZGF0ZVRyYW5zZm9ybURlbHRhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQgfHwgIXRoaXMuYm94KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbHkgdGhlIGxhdGVzdCB1c2VyLXNldCB0cmFuc2Zvcm1zIHRvIHRoZSB0YXJnZXRCb3ggdG8gcHJvZHVjZSB0aGUgdGFyZ2V0Qm94RmluYWwuXG4gICAgICAgICAqIFRoaXMgaXMgdGhlIGZpbmFsIGJveCB0aGF0IHdlIHdpbGwgdGhlbiBwcm9qZWN0IGludG8gYnkgY2FsY3VsYXRpbmcgYSB0cmFuc2Zvcm0gZGVsdGEgYW5kXG4gICAgICAgICAqIGFwcGx5aW5nIGl0IHRvIHRoZSBjb3JyZWN0ZWQgYm94LlxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHlCb3hUcmFuc2Zvcm1zKHRoaXMudGFyZ2V0Qm94RmluYWwsIHRoaXMudGFyZ2V0Qm94LCB0aGlzLmxhdGVzdCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGhlIGRlbHRhIGJldHdlZW4gdGhlIGNvcnJlY3RlZCBib3ggYW5kIHRoZSBmaW5hbCB0YXJnZXQgYm94LCBhZnRlclxuICAgICAgICAgKiB1c2VyLXNldCB0cmFuc2Zvcm1zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGlzIHdpbGwgYmUgdXNlZCBieSB0aGUgcmVuZGVyZXIgdG9cbiAgICAgICAgICogY3JlYXRlIGEgdHJhbnNmb3JtIHN0eWxlIHRoYXQgd2lsbCByZXByb2plY3QgdGhlIGVsZW1lbnQgZnJvbSBpdHMgYWN0dWFsIGxheW91dFxuICAgICAgICAgKiBpbnRvIHRoZSBkZXNpcmVkIGJvdW5kaW5nIGJveC5cbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZUJveERlbHRhKHRoaXMuZGVsdGFGaW5hbCwgdGhpcy5ib3hDb3JyZWN0ZWQsIHRoaXMudGFyZ2V0Qm94RmluYWwsIHRoaXMubGF5b3V0T3JpZ2luKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKiBCdWlsZCAmIHJlbmRlclxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhIHN0eWxlIHByb3AgdXNpbmcgdGhlIGxhdGVzdCByZXNvbHZlZCBNb3Rpb25WYWx1ZXNcbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNmb3JtRGVsdGFzKCk7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLmlzVmlzaWJsZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBidWlsZEhUTUxTdHlsZXModGhpcy5sYXRlc3QsIHRoaXMuc3R5bGUsIHRoaXMudmFycywgdGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtT3JpZ2luLCB0aGlzLnRyYW5zZm9ybUtleXMsIHRoaXMuY29uZmlnLCB0aGlzLmlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQgJiYgISF0aGlzLmJveCwgdGhpcy5kZWx0YSwgdGhpcy5kZWx0YUZpbmFsLCB0aGlzLnRyZWVTY2FsZSwgdGhpcy50YXJnZXRCb3hGaW5hbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIEVsZW1lbnQgYnkgcmVidWlsZGluZyBhbmQgYXBwbHlpbmcgdGhlIGxhdGVzdCBzdHlsZXMgYW5kIHZhcnMuXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmVidWlsZCB0aGUgbGF0ZXN0IGFuaW1hdGVkIHZhbHVlcyBpbnRvIHN0eWxlIGFuZCB2YXJzIGNhY2hlcy5cbiAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgICAgICAvLyBEaXJlY3RseSBhc3NpZ24gc3R5bGUgaW50byB0aGUgRWxlbWVudCdzIHN0eWxlIHByb3AuIEluIHRlc3RzIE9iamVjdC5hc3NpZ24gaXMgdGhlXG4gICAgICAgIC8vIGZhc3Rlc3Qgd2F5IHRvIGFzc2lnbiBzdHlsZXMuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5lbGVtZW50LnN0eWxlLCB0aGlzLnN0eWxlKTtcbiAgICAgICAgLy8gTG9vcCBvdmVyIGFueSBDU1MgdmFyaWFibGVzIGFuZCBhc3NpZ24gdGhvc2UuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnZhcnMpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHRoaXMudmFyc1trZXldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEhUTUxWaXN1YWxFbGVtZW50O1xufShWaXN1YWxFbGVtZW50KSk7XG4vKipcbiAqIFByZS1ib3VuZCB2ZXJzaW9uIG9mIHVwZGF0ZUxheW91dERlbHRhIHNvIHdlJ3JlIG5vdCBjcmVhdGluZyBhIG5ldyBmdW5jdGlvbiBtdWx0aXBsZVxuICogdGltZXMgcGVyIGZyYW1lLlxuICovXG52YXIgZmlyZVVwZGF0ZUxheW91dERlbHRhID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLnVwZGF0ZUxheW91dERlbHRhKCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjb25zdGFudCB2YWx1ZSBvdmVyIHRoZSBsaWZlY3ljbGUgb2YgYSBjb21wb25lbnQuXG4gKlxuICogRXZlbiBpZiBgdXNlTWVtb2AgaXMgcHJvdmlkZWQgYW4gZW1wdHkgYXJyYXkgYXMgaXRzIGZpbmFsIGFyZ3VtZW50LCBpdCBkb2Vzbid0IG9mZmVyXG4gKiBhIGd1YXJhbnRlZSB0aGF0IGl0IHdvbid0IHJlLXJ1biBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBsYXRlciBvbi4gQnkgdXNpbmcgYHVzZUNvbnN0YW50YFxuICogeW91IGNhbiBlbnN1cmUgdGhhdCBpbml0aWFsaXNlcnMgZG9uJ3QgZXhlY3V0ZSB0d2ljZSBvciBtb3JlLlxuICovXG5mdW5jdGlvbiB1c2VDb25zdGFudChpbml0KSB7XG4gICAgdmFyIHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBpZiAocmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KCk7XG4gICAgfVxuICAgIHJldHVybiByZWYuY3VycmVudDtcbn1cblxuZnVuY3Rpb24gY2FsY09yaWdpbiQxKG9yaWdpbiwgb2Zmc2V0LCBzaXplKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvcmlnaW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyBvcmlnaW5cbiAgICAgICAgOiBweC50cmFuc2Zvcm0ob2Zmc2V0ICsgc2l6ZSAqIG9yaWdpbik7XG59XG4vKipcbiAqIFRoZSBTVkcgdHJhbnNmb3JtIG9yaWdpbiBkZWZhdWx0cyBhcmUgZGlmZmVyZW50IHRvIENTUyBhbmQgaXMgbGVzcyBpbnR1aXRpdmUsXG4gKiBzbyB3ZSB1c2UgdGhlIG1lYXN1cmVkIGRpbWVuc2lvbnMgb2YgdGhlIFNWRyB0byByZWNvbmNpbGUgdGhlc2UuXG4gKi9cbmZ1bmN0aW9uIGNhbGNTVkdUcmFuc2Zvcm1PcmlnaW4oZGltZW5zaW9ucywgb3JpZ2luWCwgb3JpZ2luWSkge1xuICAgIHZhciBweE9yaWdpblggPSBjYWxjT3JpZ2luJDEob3JpZ2luWCwgZGltZW5zaW9ucy54LCBkaW1lbnNpb25zLndpZHRoKTtcbiAgICB2YXIgcHhPcmlnaW5ZID0gY2FsY09yaWdpbiQxKG9yaWdpblksIGRpbWVuc2lvbnMueSwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIHJldHVybiBweE9yaWdpblggKyBcIiBcIiArIHB4T3JpZ2luWTtcbn1cblxuLy8gQ29udmVydCBhIHByb2dyZXNzIDAtMSB0byBhIHBpeGVscyB2YWx1ZSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgbGVuZ3RoXG52YXIgcHJvZ3Jlc3NUb1BpeGVscyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHB4LnRyYW5zZm9ybShwcm9ncmVzcyAqIGxlbmd0aCk7XG59O1xudmFyIGRhc2hLZXlzID0ge1xuICAgIG9mZnNldDogXCJzdHJva2UtZGFzaG9mZnNldFwiLFxuICAgIGFycmF5OiBcInN0cm9rZS1kYXNoYXJyYXlcIixcbn07XG52YXIgY2FtZWxLZXlzID0ge1xuICAgIG9mZnNldDogXCJzdHJva2VEYXNob2Zmc2V0XCIsXG4gICAgYXJyYXk6IFwic3Ryb2tlRGFzaGFycmF5XCIsXG59O1xuLyoqXG4gKiBCdWlsZCBTVkcgcGF0aCBwcm9wZXJ0aWVzLiBVc2VzIHRoZSBwYXRoJ3MgbWVhc3VyZWQgbGVuZ3RoIHRvIGNvbnZlcnRcbiAqIG91ciBjdXN0b20gcGF0aExlbmd0aCwgcGF0aFNwYWNpbmcgYW5kIHBhdGhPZmZzZXQgaW50byBzdHJva2UtZGFzaG9mZnNldFxuICogYW5kIHN0cm9rZS1kYXNoYXJyYXkgYXR0cmlidXRlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIG11dGF0aXZlIHRvIHJlZHVjZSBwZXItZnJhbWUgR0MuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkU1ZHUGF0aChhdHRycywgdG90YWxMZW5ndGgsIGxlbmd0aCwgc3BhY2luZywgb2Zmc2V0LCB1c2VEYXNoQ2FzZSkge1xuICAgIGlmIChzcGFjaW5nID09PSB2b2lkIDApIHsgc3BhY2luZyA9IDE7IH1cbiAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHsgb2Zmc2V0ID0gMDsgfVxuICAgIGlmICh1c2VEYXNoQ2FzZSA9PT0gdm9pZCAwKSB7IHVzZURhc2hDYXNlID0gdHJ1ZTsgfVxuICAgIC8vIFdlIHVzZSBkYXNoIGNhc2Ugd2hlbiBzZXR0aW5nIGF0dHJpYnV0ZXMgZGlyZWN0bHkgdG8gdGhlIERPTSBub2RlIGFuZCBjYW1lbCBjYXNlXG4gICAgLy8gd2hlbiBkZWZpbmluZyBwcm9wcyBvbiBhIFJlYWN0IGNvbXBvbmVudC5cbiAgICB2YXIga2V5cyA9IHVzZURhc2hDYXNlID8gZGFzaEtleXMgOiBjYW1lbEtleXM7XG4gICAgLy8gQnVpbGQgdGhlIGRhc2ggb2Zmc2V0XG4gICAgYXR0cnNba2V5cy5vZmZzZXRdID0gcHJvZ3Jlc3NUb1BpeGVscygtb2Zmc2V0LCB0b3RhbExlbmd0aCk7XG4gICAgLy8gQnVpbGQgdGhlIGRhc2ggYXJyYXlcbiAgICB2YXIgcGF0aExlbmd0aCA9IHByb2dyZXNzVG9QaXhlbHMobGVuZ3RoLCB0b3RhbExlbmd0aCk7XG4gICAgdmFyIHBhdGhTcGFjaW5nID0gcHJvZ3Jlc3NUb1BpeGVscyhzcGFjaW5nLCB0b3RhbExlbmd0aCk7XG4gICAgYXR0cnNba2V5cy5hcnJheV0gPSBwYXRoTGVuZ3RoICsgXCIgXCIgKyBwYXRoU3BhY2luZztcbn1cblxudmFyIHVubWVhc3VyZWQgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbi8qKlxuICogQnVpbGQgU1ZHIHZpc3VhbCBhdHRyYnV0ZXMsIGxpa2UgY3ggYW5kIHN0eWxlLnRyYW5zZm9ybVxuICovXG5mdW5jdGlvbiBidWlsZFNWR0F0dHJzKF9hLCBzdHlsZSwgdmFycywgYXR0cnMsIHRyYW5zZm9ybSwgdHJhbnNmb3JtT3JpZ2luLCB0cmFuc2Zvcm1LZXlzLCBjb25maWcsIGRpbWVuc2lvbnMsIHRvdGFsUGF0aExlbmd0aCwgaXNMYXlvdXRQcm9qZWN0aW9uRW5hYmxlZCwgZGVsdGEsIGRlbHRhRmluYWwsIHRyZWVTY2FsZSwgdGFyZ2V0Qm94KSB7XG4gICAgdmFyIGF0dHJYID0gX2EuYXR0clgsIGF0dHJZID0gX2EuYXR0clksIG9yaWdpblggPSBfYS5vcmlnaW5YLCBvcmlnaW5ZID0gX2Eub3JpZ2luWSwgcGF0aExlbmd0aCA9IF9hLnBhdGhMZW5ndGgsIF9iID0gX2EucGF0aFNwYWNpbmcsIHBhdGhTcGFjaW5nID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYiwgX2MgPSBfYS5wYXRoT2Zmc2V0LCBwYXRoT2Zmc2V0ID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYywgXG4gICAgLy8gVGhpcyBpcyBvYmplY3QgY3JlYXRpb24sIHdoaWNoIHdlIHRyeSB0byBhdm9pZCBwZXItZnJhbWUuXG4gICAgbGF0ZXN0ID0gX19yZXN0KF9hLCBbXCJhdHRyWFwiLCBcImF0dHJZXCIsIFwib3JpZ2luWFwiLCBcIm9yaWdpbllcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0aFNwYWNpbmdcIiwgXCJwYXRoT2Zmc2V0XCJdKTtcbiAgICAvKipcbiAgICAgKiBXaXRoIFNWRyB3ZSB0cmVhdCBhbGwgYW5pbWF0ZWQgdmFsdWVzIGFzIGF0dHJpYnV0ZXMgcmF0aGVyIHRoYW4gQ1NTLCBzbyB3ZSBidWlsZCBpbnRvIGF0dHJzXG4gICAgICovXG4gICAgYnVpbGRIVE1MU3R5bGVzKGxhdGVzdCwgYXR0cnMsIHZhcnMsIHRyYW5zZm9ybSwgdHJhbnNmb3JtT3JpZ2luLCB0cmFuc2Zvcm1LZXlzLCBjb25maWcsIGlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQsIGRlbHRhLCBkZWx0YUZpbmFsLCB0cmVlU2NhbGUsIHRhcmdldEJveCk7XG4gICAgLyoqXG4gICAgICogSG93ZXZlciwgd2UgYXBwbHkgdHJhbnNmb3JtcyBhcyBDU1MgdHJhbnNmb3Jtcy4gU28gaWYgd2UgZGV0ZWN0IGEgdHJhbnNmb3JtIHdlIHRha2UgaXQgZnJvbSBhdHRyc1xuICAgICAqIGFuZCBjb3B5IGl0IGludG8gc3R5bGUuXG4gICAgICovXG4gICAgaWYgKGF0dHJzLnRyYW5zZm9ybSkge1xuICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBhdHRycy50cmFuc2Zvcm07XG4gICAgICAgIGRlbGV0ZSBhdHRycy50cmFuc2Zvcm07XG4gICAgfVxuICAgIC8vIFBhcnNlIHRyYW5zZm9ybU9yaWdpblxuICAgIGlmIChvcmlnaW5YICE9PSB1bmRlZmluZWQgfHwgb3JpZ2luWSAhPT0gdW5kZWZpbmVkIHx8IHN0eWxlLnRyYW5zZm9ybSkge1xuICAgICAgICBzdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBjYWxjU1ZHVHJhbnNmb3JtT3JpZ2luKGRpbWVuc2lvbnMgfHwgdW5tZWFzdXJlZCwgb3JpZ2luWCAhPT0gdW5kZWZpbmVkID8gb3JpZ2luWCA6IDAuNSwgb3JpZ2luWSAhPT0gdW5kZWZpbmVkID8gb3JpZ2luWSA6IDAuNSk7XG4gICAgfVxuICAgIC8vIFRyZWF0IHgveSBub3QgYXMgc2hvcnRjdXRzIGJ1dCBhcyBhY3R1YWwgYXR0cmlidXRlc1xuICAgIGlmIChhdHRyWCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBhdHRycy54ID0gYXR0clg7XG4gICAgaWYgKGF0dHJZICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGF0dHJzLnkgPSBhdHRyWTtcbiAgICAvLyBCdWlsZCBTVkcgcGF0aCBpZiBvbmUgaGFzIGJlZW4gbWVhc3VyZWRcbiAgICBpZiAodG90YWxQYXRoTGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgcGF0aExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJ1aWxkU1ZHUGF0aChhdHRycywgdG90YWxQYXRoTGVuZ3RoLCBwYXRoTGVuZ3RoLCBwYXRoU3BhY2luZywgcGF0aE9mZnNldCwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG59XG5cbi8qKlxuICogQSBzZXQgb2YgYXR0cmlidXRlIG5hbWVzIHRoYXQgYXJlIGFsd2F5cyByZWFkL3dyaXR0ZW4gYXMgY2FtZWwgY2FzZS5cbiAqL1xudmFyIGNhbWVsQ2FzZUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICBcImJhc2VGcmVxdWVuY3lcIixcbiAgICBcImRpZmZ1c2VDb25zdGFudFwiLFxuICAgIFwia2VybmVsTWF0cml4XCIsXG4gICAgXCJrZXJuZWxVbml0TGVuZ3RoXCIsXG4gICAgXCJrZXlTcGxpbmVzXCIsXG4gICAgXCJrZXlUaW1lc1wiLFxuICAgIFwibGltaXRpbmdDb25lQW5nbGVcIixcbiAgICBcIm1hcmtlckhlaWdodFwiLFxuICAgIFwibWFya2VyV2lkdGhcIixcbiAgICBcIm51bU9jdGF2ZXNcIixcbiAgICBcInRhcmdldFhcIixcbiAgICBcInRhcmdldFlcIixcbiAgICBcInN1cmZhY2VTY2FsZVwiLFxuICAgIFwic3BlY3VsYXJDb25zdGFudFwiLFxuICAgIFwic3BlY3VsYXJFeHBvbmVudFwiLFxuICAgIFwic3RkRGV2aWF0aW9uXCIsXG4gICAgXCJ0YWJsZVZhbHVlc1wiLFxuICAgIFwidmlld0JveFwiLFxuXSk7XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gXCIkMS0kMlwiO1xuLyoqXG4gKiBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UgcHJvcGVydGllcy5cbiAqL1xudmFyIGNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKipcbiAqIEEgVmlzdWFsRWxlbWVudCBmb3IgU1ZHRWxlbWVudHMuIEluaGVyaXRzIGZyb20gYW5kIGV4dGVuZHMgSFRNTFZpc3VhbEVsZW1lbnQgYXMgdGhlIHR3b1xuICogc2hhcmUgZGF0YSBzdHJ1Y3R1cmVzLlxuICovXG52YXIgU1ZHVmlzdWFsRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU1ZHVmlzdWFsRWxlbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTVkdWaXN1YWxFbGVtZW50KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgbXV0YWJsZSByZWNvcmQgb2YgYXR0cmlidXRlcyB3ZSB3YW50IHRvIGFwcGx5IGRpcmVjdGx5IHRvIHRoZSByZW5kZXJlZCBFbGVtZW50XG4gICAgICAgICAqIGV2ZXJ5IGZyYW1lLiBXZSB1c2UgYSBtdXRhYmxlIGRhdGEgc3RydWN0dXJlIHRvIHJlZHVjZSBHQyBkdXJpbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmF0dHJzID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBkaXNhYmxlIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiBmb3IgU1ZHIHRyYW5zZm9ybXMgYXMgdGhleSdyZSBub3QgY3VycmVudGx5IGFibGUgdG8gYmUgYWNjZWxlcmF0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5kZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogV2l0aG91dCBkdXBsaWNhdGluZyB0aGlzIGNhbGwgZnJvbSBIVE1MVmlzdWFsRWxlbWVudCB3ZSBlbmQgdXAgd2l0aCBIVE1MVmlzdWFsRWxlbWVudC5kZWZhdWx0Q29uZmlnXG4gICAgICAgICAqIGJlaW5nIGFzc2lnbmVkIHRvIGNvbmZpZ1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuY29uZmlnID0gX3RoaXMuZGVmYXVsdENvbmZpZztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlIHRoZSBTVkcgZWxlbWVudCBvbiBtb3VudC4gVGhpcyBjYW4gYWZmZWN0IHBhZ2UgcmVuZGVyaW5nIHNvIHRoZXJlIG1pZ2h0IGJlIGFcbiAgICAgKiBiZXR0ZXIgdGltZSB0byBwZXJmb3JtIHRoaXMgLSBmb3IgaW5zdGFuY2UgZHluYW1pY2FsbHkgb25seSBpZiB0aGVyZSdzIGEgdHJhbnNmb3JtLW9yaWdpbiBkZXBlbmRlbnRcbiAgICAgKiB0cmFuc2Zvcm0gYmVpbmcgc2V0IChsaWtlIHJvdGF0ZSlcbiAgICAgKi9cbiAgICBTVkdWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUubW91bnQuY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICAgICAgdGhpcy5tZWFzdXJlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIFNWRyBkaW1lbnNpb25zIGFuZCBwYXRoIGxlbmd0aFxuICAgICAqL1xuICAgIFNWR1Zpc3VhbEVsZW1lbnQucHJvdG90eXBlLm1lYXN1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmVsZW1lbnQuZ2V0QkJveCA9PT1cbiAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbGVtZW50LmdldEJCb3goKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gTW9zdCBsaWtlbHkgdHJ5aW5nIHRvIG1lYXN1cmUgYW4gdW5yZW5kZXJlZCBlbGVtZW50IHVuZGVyIEZpcmVmb3hcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1BhdGgodGhpcy5lbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy50b3RhbFBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRW1wdHkgdGhlIG11dGFibGUgZGF0YSBzdHJ1Y3R1cmVzIGluIGNhc2UgYXR0cnMgaGF2ZSBiZWVuIHJlbW92ZWQgYmV0d2VlbiByZW5kZXJzLlxuICAgICAqL1xuICAgIFNWR1Zpc3VhbEVsZW1lbnQucHJvdG90eXBlLmNsZWFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmNsZWFuLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuYXR0cnMgPSB7fTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlYWQgYW4gYXR0cmlidXRlIGRpcmVjdGx5IGZyb20gdGhlIFNWR0VsZW1lbnRcbiAgICAgKi9cbiAgICBTVkdWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBrZXkgPSAhY2FtZWxDYXNlQXR0cmlidXRlcy5oYXMoa2V5KSA/IGNhbWVsVG9EYXNoKGtleSkgOiBrZXk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfTtcbiAgICBTVkdWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUcmFuc2Zvcm1EZWx0YXMoKTtcbiAgICAgICAgYnVpbGRTVkdBdHRycyh0aGlzLmxhdGVzdCwgdGhpcy5zdHlsZSwgdGhpcy52YXJzLCB0aGlzLmF0dHJzLCB0aGlzLnRyYW5zZm9ybSwgdGhpcy50cmFuc2Zvcm1PcmlnaW4sIHRoaXMudHJhbnNmb3JtS2V5cywgdGhpcy5jb25maWcsIHRoaXMuZGltZW5zaW9ucywgdGhpcy50b3RhbFBhdGhMZW5ndGgsIHRoaXMuaXNMYXlvdXRQcm9qZWN0aW9uRW5hYmxlZCAmJiAhIXRoaXMuYm94LCB0aGlzLmRlbHRhLCB0aGlzLmRlbHRhRmluYWwsIHRoaXMudHJlZVNjYWxlLCB0aGlzLnRhcmdldEJveEZpbmFsKTtcbiAgICB9O1xuICAgIFNWR1Zpc3VhbEVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXBkYXRlIEhUTUwgc3R5bGVzIGFuZCBDU1MgdmFyaWFibGVzXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhdHRyaWJ1dGVzIGFuZCBhcHBseSB0aGVtIHRvIHRoZSBTVkdFbGVtZW50XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmF0dHJzKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCFjYW1lbENhc2VBdHRyaWJ1dGVzLmhhcyhrZXkpID8gY2FtZWxUb0Rhc2goa2V5KSA6IGtleSwgdGhpcy5hdHRyc1trZXldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNWR1Zpc3VhbEVsZW1lbnQ7XG59KEhUTUxWaXN1YWxFbGVtZW50KSk7XG5mdW5jdGlvbiBpc1BhdGgoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUgPT09IFwicGF0aFwiO1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgc3ZnRWxlbWVudHMgPSBbXG4gICAgXCJhbmltYXRlXCIsXG4gICAgXCJjaXJjbGVcIixcbiAgICBcImNsaXBQYXRoXCIsXG4gICAgXCJkZWZzXCIsXG4gICAgXCJkZXNjXCIsXG4gICAgXCJlbGxpcHNlXCIsXG4gICAgXCJmZUJsZW5kXCIsXG4gICAgXCJmZUNvbG9yTWF0cml4XCIsXG4gICAgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsXG4gICAgXCJmZUNvbXBvc2l0ZVwiLFxuICAgIFwiZmVDb252b2x2ZU1hdHJpeFwiLFxuICAgIFwiZmVEaWZmdXNlTGlnaHRpbmdcIixcbiAgICBcImZlRGlzcGxhY2VtZW50TWFwXCIsXG4gICAgXCJmZURpc3RhbnRMaWdodFwiLFxuICAgIFwiZmVEcm9wU2hhZG93XCIsXG4gICAgXCJmZUZsb29kXCIsXG4gICAgXCJmZUZ1bmNBXCIsXG4gICAgXCJmZUZ1bmNCXCIsXG4gICAgXCJmZUZ1bmNHXCIsXG4gICAgXCJmZUZ1bmNSXCIsXG4gICAgXCJmZUdhdXNzaWFuQmx1clwiLFxuICAgIFwiZmVJbWFnZVwiLFxuICAgIFwiZmVNZXJnZVwiLFxuICAgIFwiZmVNZXJnZU5vZGVcIixcbiAgICBcImZlTW9ycGhvbG9neVwiLFxuICAgIFwiZmVPZmZzZXRcIixcbiAgICBcImZlUG9pbnRMaWdodFwiLFxuICAgIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsXG4gICAgXCJmZVNwb3RMaWdodFwiLFxuICAgIFwiZmVUaWxlXCIsXG4gICAgXCJmZVR1cmJ1bGVuY2VcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgIFwiZ1wiLFxuICAgIFwiaW1hZ2VcIixcbiAgICBcImxpbmVcIixcbiAgICBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgXCJtYXJrZXJcIixcbiAgICBcIm1hc2tcIixcbiAgICBcIm1ldGFkYXRhXCIsXG4gICAgXCJwYXRoXCIsXG4gICAgXCJwYXR0ZXJuXCIsXG4gICAgXCJwb2x5Z29uXCIsXG4gICAgXCJwb2x5bGluZVwiLFxuICAgIFwicmFkaWFsR3JhZGllbnRcIixcbiAgICBcInJlY3RcIixcbiAgICBcInN0b3BcIixcbiAgICBcInN2Z1wiLFxuICAgIFwic3dpdGNoXCIsXG4gICAgXCJzeW1ib2xcIixcbiAgICBcInRleHRcIixcbiAgICBcInRleHRQYXRoXCIsXG4gICAgXCJ0c3BhblwiLFxuICAgIFwidXNlXCIsXG4gICAgXCJ2aWV3XCIsXG5dO1xuXG52YXIgc3ZnVGFnTmFtZXMgPSBuZXcgU2V0KHN2Z0VsZW1lbnRzKTtcbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIEhUTUwgb3IgU1ZHIGNvbXBvbmVudCBiYXNlZCBvbiBpZiB0aGUgcHJvdmlkZWRcbiAqIENvbXBvbmVudCBpcyBhIHN0cmluZyBhbmQgYSByZWNvZ25pc2VkIFNWRyB0YWcuIEEgcG90ZW50aWFsbHkgYmV0dGVyIHdheSB0b1xuICogZG8gdGhpcyB3b3VsZCBiZSB0byBvZmZlciBhIGBtb3Rpb24uY3VzdG9tU1ZHYCBmdW5jdGlvbiBhbmQgZGV0ZXJtaW5lIHRoaXNcbiAqIHdoZW4gd2UgZ2VuZXJhdGUgdGhlIGBtb3Rpb24uY2lyY2xlYCBldGMgY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gaXNTVkdDb21wb25lbnQoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09IFwic3RyaW5nXCIgJiYgc3ZnVGFnTmFtZXMuaGFzKENvbXBvbmVudCk7XG59XG5cbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgUHJlc2VuY2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuLyoqXG4gKiBXaGVuIGEgY29tcG9uZW50IGlzIHRoZSBjaGlsZCBvZiBgQW5pbWF0ZVByZXNlbmNlYCwgaXQgY2FuIHVzZSBgdXNlUHJlc2VuY2VgXG4gKiB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgd2hldGhlciBpdCdzIHN0aWxsIHByZXNlbnQgaW4gdGhlIFJlYWN0IHRyZWUuXG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgeyB1c2VQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbiAqXG4gKiBleHBvcnQgY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBbaXNQcmVzZW50LCBzYWZlVG9SZW1vdmVdID0gdXNlUHJlc2VuY2UoKVxuICpcbiAqICAgdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgICAhaXNQcmVzZW50ICYmIHNldFRpbWVvdXQoc2FmZVRvUmVtb3ZlLCAxMDAwKVxuICogICB9LCBbaXNQcmVzZW50XSlcbiAqXG4gKiAgIHJldHVybiA8ZGl2IC8+XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBJZiBgaXNQcmVzZW50YCBpcyBgZmFsc2VgLCBpdCBtZWFucyB0aGF0IGEgY29tcG9uZW50IGhhcyBiZWVuIHJlbW92ZWQgdGhlIHRyZWUsIGJ1dFxuICogYEFuaW1hdGVQcmVzZW5jZWAgd29uJ3QgcmVhbGx5IHJlbW92ZSBpdCB1bnRpbCBgc2FmZVRvUmVtb3ZlYCBoYXMgYmVlbiBjYWxsZWQuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VQcmVzZW5jZSgpIHtcbiAgICB2YXIgY29udGV4dCA9IHVzZUNvbnRleHQoUHJlc2VuY2VDb250ZXh0KTtcbiAgICBpZiAoY29udGV4dCA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIFt0cnVlLCBudWxsXTtcbiAgICB2YXIgaXNQcmVzZW50ID0gY29udGV4dC5pc1ByZXNlbnQsIG9uRXhpdENvbXBsZXRlID0gY29udGV4dC5vbkV4aXRDb21wbGV0ZSwgcmVnaXN0ZXIgPSBjb250ZXh0LnJlZ2lzdGVyO1xuICAgIC8vIEl0J3Mgc2FmZSB0byBjYWxsIHRoZSBmb2xsb3dpbmcgaG9va3MgY29uZGl0aW9uYWxseSAoYWZ0ZXIgYW4gZWFybHkgcmV0dXJuKSBiZWNhdXNlIHRoZSBjb250ZXh0IHdpbGwgYWx3YXlzXG4gICAgLy8gZWl0aGVyIGJlIG51bGwgb3Igbm9uLW51bGwgZm9yIHRoZSBsaWZlc3BhbiBvZiB0aGUgY29tcG9uZW50LlxuICAgIC8vIFJlcGxhY2Ugd2l0aCB1c2VPcGFxdWVJZCB3aGVuIHJlbGVhc2VkIGluIFJlYWN0XG4gICAgdmFyIGlkID0gdXNlVW5pcXVlSWQoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVnaXN0ZXIoaWQpOyB9LCBbXSk7XG4gICAgdmFyIHNhZmVUb1JlbW92ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9uRXhpdENvbXBsZXRlID09PSBudWxsIHx8IG9uRXhpdENvbXBsZXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkV4aXRDb21wbGV0ZShpZCk7IH07XG4gICAgcmV0dXJuICFpc1ByZXNlbnQgJiYgb25FeGl0Q29tcGxldGUgPyBbZmFsc2UsIHNhZmVUb1JlbW92ZV0gOiBbdHJ1ZV07XG59XG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVByZXNlbmNlYCwgZXhjZXB0IGB1c2VJc1ByZXNlbnRgIHNpbXBseSByZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaXMgcHJlc2VudC5cbiAqIFRoZXJlIGlzIG5vIGBzYWZlVG9SZW1vdmVgIGZ1bmN0aW9uLlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHsgdXNlSXNQcmVzZW50IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuICpcbiAqIGV4cG9ydCBjb25zdCBDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IGlzUHJlc2VudCA9IHVzZUlzUHJlc2VudCgpXG4gKlxuICogICB1c2VFZmZlY3QoKCkgPT4ge1xuICogICAgICFpc1ByZXNlbnQgJiYgY29uc29sZS5sb2coXCJJJ3ZlIGJlZW4gcmVtb3ZlZCFcIilcbiAqICAgfSwgW2lzUHJlc2VudF0pXG4gKlxuICogICByZXR1cm4gPGRpdiAvPlxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VJc1ByZXNlbnQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KFByZXNlbmNlQ29udGV4dCk7XG4gICAgcmV0dXJuIGNvbnRleHQgPT09IG51bGwgPyB0cnVlIDogY29udGV4dC5pc1ByZXNlbnQ7XG59XG52YXIgY291bnRlciA9IDA7XG52YXIgaW5jcmVtZW50SWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb3VudGVyKys7IH07XG52YXIgdXNlVW5pcXVlSWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VDb25zdGFudChpbmNyZW1lbnRJZCk7IH07XG5cbi8qKlxuICogRE9NLWZsYXZvdXJlZCB2YXJpYXRpb24gb2YgdGhlIHVzZVZpc3VhbEVsZW1lbnQgaG9vay4gVXNlZCB0byBjcmVhdGUgZWl0aGVyIGEgSFRNTFZpc3VhbEVsZW1lbnRcbiAqIG9yIFNWR1Zpc3VhbEVsZW1lbnQgZm9yIHRoZSBjb21wb25lbnQuXG4gKi9cbnZhciB1c2VEb21WaXN1YWxFbGVtZW50ID0gZnVuY3Rpb24gKENvbXBvbmVudCwgcHJvcHMsIHBhcmVudCwgaXNTdGF0aWMsIHJlZikge1xuICAgIHZhciB2aXN1YWxFbGVtZW50ID0gdXNlQ29uc3RhbnQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRE9NVmlzdWFsRWxlbWVudCA9IGlzU1ZHQ29tcG9uZW50KENvbXBvbmVudClcbiAgICAgICAgICAgID8gU1ZHVmlzdWFsRWxlbWVudFxuICAgICAgICAgICAgOiBIVE1MVmlzdWFsRWxlbWVudDtcbiAgICAgICAgcmV0dXJuIG5ldyBET01WaXN1YWxFbGVtZW50KHBhcmVudCwgcmVmKTtcbiAgICB9KTtcbiAgICB2aXN1YWxFbGVtZW50LnVwZGF0ZUNvbmZpZyhfX2Fzc2lnbih7IGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uOiAhaXNTdGF0aWMgfSwgcHJvcHMpKTtcbiAgICB2aXN1YWxFbGVtZW50LmxheW91dElkID0gcHJvcHMubGF5b3V0SWQ7XG4gICAgdmFyIGlzUHJlc2VudCA9IHVzZUlzUHJlc2VudCgpO1xuICAgIHZpc3VhbEVsZW1lbnQuaXNQcmVzZW50ID1cbiAgICAgICAgcHJvcHMuaXNQcmVzZW50ICE9PSB1bmRlZmluZWQgPyBwcm9wcy5pc1ByZXNlbnQgOiBpc1ByZXNlbnQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb3BzLm9uVmlld3BvcnRCb3hVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2aXN1YWxFbGVtZW50Lm9uVmlld3BvcnRCb3hVcGRhdGUocHJvcHMub25WaWV3cG9ydEJveFVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMub25WaWV3cG9ydEJveFVwZGF0ZV0pO1xuICAgIHJldHVybiB2aXN1YWxFbGVtZW50O1xufTtcblxuLyoqXG4gKiBBIGxpc3Qgb2YgYWxsIHZhbGlkIE1vdGlvblByb3BzLlxuICpcbiAqIEBpbnRlcm5hbHJlbWFya3NcbiAqIFRoaXMgZG9lc24ndCB0aHJvdyBpZiBhIGBNb3Rpb25Qcm9wYCBuYW1lIGlzIG1pc3NpbmcgLSBpdCBzaG91bGQuXG4gKi9cbnZhciB2YWxpZE1vdGlvblByb3BzID0gbmV3IFNldChbXG4gICAgXCJpbml0aWFsXCIsXG4gICAgXCJhbmltYXRlXCIsXG4gICAgXCJleGl0XCIsXG4gICAgXCJzdHlsZVwiLFxuICAgIFwidmFyaWFudHNcIixcbiAgICBcInRyYW5zaXRpb25cIixcbiAgICBcInRyYW5zZm9ybVRlbXBsYXRlXCIsXG4gICAgXCJ0cmFuc2Zvcm1WYWx1ZXNcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiaW5oZXJpdFwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxheW91dElkXCIsXG4gICAgXCJvbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlXCIsXG4gICAgXCJvblZpZXdwb3J0Qm94VXBkYXRlXCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNvbXBsZXRlXCIsXG4gICAgXCJvblVwZGF0ZVwiLFxuICAgIFwib25EcmFnU3RhcnRcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib25EcmFnRW5kXCIsXG4gICAgXCJvbk1lYXN1cmVEcmFnQ29uc3RyYWludHNcIixcbiAgICBcIm9uRGlyZWN0aW9uTG9ja1wiLFxuICAgIFwib25EcmFnVHJhbnNpdGlvbkVuZFwiLFxuICAgIFwiZHJhZ1wiLFxuICAgIFwiZHJhZ0NvbnRyb2xzXCIsXG4gICAgXCJkcmFnTGlzdGVuZXJcIixcbiAgICBcImRyYWdDb25zdHJhaW50c1wiLFxuICAgIFwiZHJhZ0RpcmVjdGlvbkxvY2tcIixcbiAgICBcIl9kcmFnWFwiLFxuICAgIFwiX2RyYWdZXCIsXG4gICAgXCJkcmFnRWxhc3RpY1wiLFxuICAgIFwiZHJhZ01vbWVudHVtXCIsXG4gICAgXCJkcmFnUHJvcGFnYXRpb25cIixcbiAgICBcImRyYWdUcmFuc2l0aW9uXCIsXG4gICAgXCJvblBhblwiLFxuICAgIFwib25QYW5TdGFydFwiLFxuICAgIFwib25QYW5FbmRcIixcbiAgICBcIm9uUGFuU2Vzc2lvblN0YXJ0XCIsXG4gICAgXCJvblRhcFwiLFxuICAgIFwib25UYXBTdGFydFwiLFxuICAgIFwib25UYXBDYW5jZWxcIixcbiAgICBcIndoaWxlSG92ZXJcIixcbiAgICBcIndoaWxlVGFwXCIsXG4gICAgXCJvbkhvdmVyRW5kXCIsXG4gICAgXCJvbkhvdmVyU3RhcnRcIixcbl0pO1xuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgcHJvcCBuYW1lIGlzIGEgdmFsaWQgYE1vdGlvblByb3BgIGtleS5cbiAqXG4gKiBAcGFyYW0ga2V5IC0gTmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gY2hlY2tcbiAqIEByZXR1cm5zIGB0cnVlYCBpcyBrZXkgaXMgYSB2YWxpZCBgTW90aW9uUHJvcGAuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBpc1ZhbGlkTW90aW9uUHJvcChrZXkpIHtcbiAgICByZXR1cm4gdmFsaWRNb3Rpb25Qcm9wcy5oYXMoa2V5KTtcbn1cblxudmFyIGlzUHJvcFZhbGlkID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gIWlzVmFsaWRNb3Rpb25Qcm9wKGtleSk7IH07XG4vKipcbiAqIEVtb3Rpb24gYW5kIFN0eWxlZCBDb21wb25lbnRzIGJvdGggYWxsb3cgdXNlcnMgdG8gcGFzcyB0aHJvdWdoIGFyYml0cmFyeSBwcm9wcyB0byB0aGVpciBjb21wb25lbnRzXG4gKiB0byBkeW5hbWljYWxseSBnZW5lcmF0ZSBDU1MuIFRoZXkgYm90aCB1c2UgdGhlIGBAZW1vdGlvbi9pcy1wcm9wLXZhbGlkYCBwYWNrYWdlIHRvIGRldGVybWluZSB3aGljaFxuICogb2YgdGhlc2Ugc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgdW5kZXJseWluZyBET00gbm9kZS5cbiAqXG4gKiBIb3dldmVyLCB3aGVuIHN0eWxpbmcgYSBNb3Rpb24gY29tcG9uZW50IGBzdHlsZWQobW90aW9uLmRpdilgLCBib3RoIHBhY2thZ2VzIHBhc3MgdGhyb3VnaCAqYWxsKiBwcm9wc1xuICogYXMgaXQncyBzZWVuIGFzIGFuIGFyYml0cmFyeSBjb21wb25lbnQgcmF0aGVyIHRoYW4gYSBET00gbm9kZS4gTW90aW9uIG9ubHkgYWxsb3dzIGFyYml0cmFyeSBwcm9wc1xuICogcGFzc2VkIHRocm91Z2ggdGhlIGBjdXN0b21gIHByb3Agc28gaXQgZG9lc24ndCAqbmVlZCogdGhlIHBheWxvYWQgb3IgY29tcHV0YXRpb25hbCBvdmVyaGVhZCBvZlxuICogYEBlbW90aW9uL2lzLXByb3AtdmFsaWRgLCBob3dldmVyIHRvIGZpeCB0aGlzIHByb2JsZW0gd2UgbmVlZCB0byB1c2UgaXQuXG4gKlxuICogQnkgbWFraW5nIGl0IGFuIG9wdGlvbmFsRGVwZW5kZW5jeSB3ZSBjYW4gb2ZmZXIgdGhpcyBmdW5jdGlvbmFsaXR5IG9ubHkgaW4gdGhlIHNpdHVhdGlvbnMgd2hlcmUgaXQnc1xuICogYWN0dWFsbHkgcmVxdWlyZWQuXG4gKi9cbnRyeSB7XG4gICAgdmFyIGVtb3Rpb25Jc1Byb3BWYWxpZF8xID0gcmVxdWlyZShcIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIikuZGVmYXVsdDtcbiAgICBpc1Byb3BWYWxpZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLy8gSGFuZGxlIGV2ZW50cyBleHBsaWNpdGx5IGFzIEVtb3Rpb24gdmFsaWRhdGVzIHRoZW0gYWxsIGFzIHRydWVcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwib25cIikpIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNWYWxpZE1vdGlvblByb3Aoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlbW90aW9uSXNQcm9wVmFsaWRfMShrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNhdGNoIChfYSkge1xuICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gYWN0dWFsbHkgZG8gYW55dGhpbmcgaGVyZSAtIHRoZSBmYWxsYmFjayBpcyB0aGUgZXhpc3RpbmcgYGlzUHJvcFZhbGlkYC5cbn1cbmZ1bmN0aW9uIGZpbHRlclByb3BzKHByb3BzKSB7XG4gICAgdmFyIGRvbVByb3BzID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChpc1Byb3BWYWxpZChrZXkpKVxuICAgICAgICAgICAgZG9tUHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICAgIHJldHVybiBkb21Qcm9wcztcbn1cblxuZnVuY3Rpb24gYnVpbGRIVE1MUHJvcHModmlzdWFsRWxlbWVudCwgX2EpIHtcbiAgICB2YXIgZHJhZyA9IF9hLmRyYWc7XG4gICAgLy8gVGhlIGBhbnlgIGlzbid0IGlkZWFsIGJ1dCBpdCBpcyB0aGUgdHlwZSBvZiBjcmVhdGVFbGVtZW50IHByb3BzIGFyZ3VtZW50XG4gICAgdmFyIGh0bWxQcm9wcyA9IHtcbiAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCB2aXN1YWxFbGVtZW50LnJlYWN0U3R5bGUpLCB2aXN1YWxFbGVtZW50LnN0eWxlKSwgdmlzdWFsRWxlbWVudC52YXJzKSxcbiAgICB9O1xuICAgIGlmICghIWRyYWcpIHtcbiAgICAgICAgLy8gRGlzYWJsZSB0ZXh0IHNlbGVjdGlvblxuICAgICAgICBodG1sUHJvcHMuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgICAgICAvLyBEaXNhYmxlIHRoZSBnaG9zdCBlbGVtZW50IHdoZW4gYSB1c2VyIGRyYWdzXG4gICAgICAgIGh0bWxQcm9wcy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxQcm9wcztcbn1cblxuLyoqXG4gKiBCdWlsZCBSZWFjdCBwcm9wcyBmb3IgU1ZHIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkU1ZHUHJvcHModmlzdWFsRWxlbWVudCkge1xuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdmlzdWFsRWxlbWVudC5hdHRycyksIHsgc3R5bGU6IF9fYXNzaWduKHt9LCB2aXN1YWxFbGVtZW50LnJlYWN0U3R5bGUpIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoQ29tcG9uZW50LCBwcm9wcywgdmlzdWFsRWxlbWVudCkge1xuICAgIC8vIE9ubHkgZmlsdGVyIHByb3BzIGZyb20gY29tcG9uZW50cyB3ZSBjb250cm9sLCBpZSBgbW90aW9uLmRpdmAuIElmIHRoaXNcbiAgICAvLyBpcyBhIGN1c3RvbSBjb21wb25lbnQgcGFzcyBhbG9uZyBldmVyeXRoaW5nIHByb3ZpZGVkIHRvIGl0LlxuICAgIHZhciBmb3J3YXJkZWRQcm9wcyA9IHR5cGVvZiBDb21wb25lbnQgPT09IFwic3RyaW5nXCIgPyBmaWx0ZXJQcm9wcyhwcm9wcykgOiBwcm9wcztcbiAgICAvKipcbiAgICAgKiBFdmVyeSByZW5kZXIsIGVtcHR5IGFuZCByZWJ1aWxkIHRoZSBhbmltYXRlZCB2YWx1ZXMgdG8gYmUgYXBwbGllZCB0byBvdXIgRWxlbWVudC5cbiAgICAgKiBEdXJpbmcgYW5pbWF0aW9uIHRoZXNlIGRhdGEgc3RydWN0dXJlcyBhcmUgdXNlZCBpbiBhIG11dGFibGUgZmFzaGlvbiB0byByZWR1Y2VcbiAgICAgKiBnYXJiYWdlIGNvbGxlY3Rpb24sIGJ1dCBiZXR3ZWVuIHJlbmRlcnMgd2UgY2FuIGZsdXNoIHRoZW0gdG8gcmVtb3ZlIHZhbHVlc1xuICAgICAqIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIHRha2VuIG91dCBvZiB0aGUgcHJvdmlkZWQgcHJvcHMuXG4gICAgICovXG4gICAgdmlzdWFsRWxlbWVudC5jbGVhbigpO1xuICAgIHZpc3VhbEVsZW1lbnQuYnVpbGQoKTtcbiAgICAvLyBHZW5lcmF0ZSBwcm9wcyB0byB2aXN1YWxseSByZW5kZXIgdGhpcyBjb21wb25lbnRcbiAgICB2YXIgdmlzdWFsUHJvcHMgPSBpc1NWR0NvbXBvbmVudChDb21wb25lbnQpXG4gICAgICAgID8gYnVpbGRTVkdQcm9wcyh2aXN1YWxFbGVtZW50KVxuICAgICAgICA6IGJ1aWxkSFRNTFByb3BzKHZpc3VhbEVsZW1lbnQsIHByb3BzKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBmb3J3YXJkZWRQcm9wcyksIHsgcmVmOiB2aXN1YWxFbGVtZW50LnJlZiB9KSwgdmlzdWFsUHJvcHMpKTtcbn1cblxudmFyIHBvc2l0aW9uYWxLZXlzID0gbmV3IFNldChbXG4gICAgXCJ3aWR0aFwiLFxuICAgIFwiaGVpZ2h0XCIsXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInhcIixcbiAgICBcInlcIixcbl0pO1xudmFyIGlzUG9zaXRpb25hbEtleSA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHBvc2l0aW9uYWxLZXlzLmhhcyhrZXkpOyB9O1xudmFyIGhhc1Bvc2l0aW9uYWxLZXkgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuc29tZShpc1Bvc2l0aW9uYWxLZXkpO1xufTtcbnZhciBzZXRBbmRSZXNldFZlbG9jaXR5ID0gZnVuY3Rpb24gKHZhbHVlLCB0bykge1xuICAgIC8vIExvb2tzIG9kZCBidXQgc2V0dGluZyBpdCB0d2ljZSBkb2Vzbid0IHJlbmRlciwgaXQnbGwganVzdFxuICAgIC8vIHNldCBib3RoIHByZXYgYW5kIGN1cnJlbnQgdG8gdGhlIGxhdGVzdCB2YWx1ZVxuICAgIHZhbHVlLnNldCh0bywgZmFsc2UpO1xuICAgIHZhbHVlLnNldCh0byk7XG59O1xudmFyIGlzTnVtT3JQeFR5cGUgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2ID09PSBudW1iZXIgfHwgdiA9PT0gcHg7XG59O1xudmFyIEJvdW5kaW5nQm94RGltZW5zaW9uO1xuKGZ1bmN0aW9uIChCb3VuZGluZ0JveERpbWVuc2lvbikge1xuICAgIEJvdW5kaW5nQm94RGltZW5zaW9uW1wid2lkdGhcIl0gPSBcIndpZHRoXCI7XG4gICAgQm91bmRpbmdCb3hEaW1lbnNpb25bXCJoZWlnaHRcIl0gPSBcImhlaWdodFwiO1xuICAgIEJvdW5kaW5nQm94RGltZW5zaW9uW1wibGVmdFwiXSA9IFwibGVmdFwiO1xuICAgIEJvdW5kaW5nQm94RGltZW5zaW9uW1wicmlnaHRcIl0gPSBcInJpZ2h0XCI7XG4gICAgQm91bmRpbmdCb3hEaW1lbnNpb25bXCJ0b3BcIl0gPSBcInRvcFwiO1xuICAgIEJvdW5kaW5nQm94RGltZW5zaW9uW1wiYm90dG9tXCJdID0gXCJib3R0b21cIjtcbn0pKEJvdW5kaW5nQm94RGltZW5zaW9uIHx8IChCb3VuZGluZ0JveERpbWVuc2lvbiA9IHt9KSk7XG52YXIgZ2V0UG9zRnJvbU1hdHJpeCA9IGZ1bmN0aW9uIChtYXRyaXgsIHBvcykge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdHJpeC5zcGxpdChcIiwgXCIpW3Bvc10pO1xufTtcbnZhciBnZXRUcmFuc2xhdGVGcm9tTWF0cml4ID0gZnVuY3Rpb24gKHBvczIsIHBvczMpIHsgcmV0dXJuIGZ1bmN0aW9uIChfYmJveCwgX2EpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gX2EudHJhbnNmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gPT09IFwibm9uZVwiIHx8ICF0cmFuc2Zvcm0pXG4gICAgICAgIHJldHVybiAwO1xuICAgIHZhciBtYXRyaXgzZCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcbiAgICBpZiAobWF0cml4M2QpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvc0Zyb21NYXRyaXgobWF0cml4M2RbMV0sIHBvczMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgICAgIGlmIChtYXRyaXgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRQb3NGcm9tTWF0cml4KG1hdHJpeFsxXSwgcG9zMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbn07IH07XG52YXIgdHJhbnNmb3JtS2V5cyA9IG5ldyBTZXQoW1wieFwiLCBcInlcIiwgXCJ6XCJdKTtcbnZhciBub25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtS2V5cyA9IHRyYW5zZm9ybVByb3BzLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAhdHJhbnNmb3JtS2V5cy5oYXMoa2V5KTsgfSk7XG5mdW5jdGlvbiByZW1vdmVOb25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtKHZpc3VhbEVsZW1lbnQpIHtcbiAgICB2YXIgcmVtb3ZlZFRyYW5zZm9ybXMgPSBbXTtcbiAgICBub25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdmlzdWFsRWxlbWVudC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVtb3ZlZFRyYW5zZm9ybXMucHVzaChba2V5LCB2YWx1ZS5nZXQoKV0pO1xuICAgICAgICAgICAgdmFsdWUuc2V0KGtleS5zdGFydHNXaXRoKFwic2NhbGVcIikgPyAxIDogMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBBcHBseSBjaGFuZ2VzIHRvIGVsZW1lbnQgYmVmb3JlIG1lYXN1cmVtZW50XG4gICAgaWYgKHJlbW92ZWRUcmFuc2Zvcm1zLmxlbmd0aClcbiAgICAgICAgdmlzdWFsRWxlbWVudC5yZW5kZXIoKTtcbiAgICByZXR1cm4gcmVtb3ZlZFRyYW5zZm9ybXM7XG59XG52YXIgcG9zaXRpb25hbFZhbHVlcyA9IHtcbiAgICAvLyBEaW1lbnNpb25zXG4gICAgd2lkdGg6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgeCA9IF9hLng7XG4gICAgICAgIHJldHVybiB4Lm1heCAtIHgubWluO1xuICAgIH0sXG4gICAgaGVpZ2h0OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHkgPSBfYS55O1xuICAgICAgICByZXR1cm4geS5tYXggLSB5Lm1pbjtcbiAgICB9LFxuICAgIHRvcDogZnVuY3Rpb24gKF9iYm94LCBfYSkge1xuICAgICAgICB2YXIgdG9wID0gX2EudG9wO1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0b3ApO1xuICAgIH0sXG4gICAgbGVmdDogZnVuY3Rpb24gKF9iYm94LCBfYSkge1xuICAgICAgICB2YXIgbGVmdCA9IF9hLmxlZnQ7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGxlZnQpO1xuICAgIH0sXG4gICAgYm90dG9tOiBmdW5jdGlvbiAoX2EsIF9iKSB7XG4gICAgICAgIHZhciB5ID0gX2EueTtcbiAgICAgICAgdmFyIHRvcCA9IF9iLnRvcDtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodG9wKSArICh5Lm1heCAtIHkubWluKTtcbiAgICB9LFxuICAgIHJpZ2h0OiBmdW5jdGlvbiAoX2EsIF9iKSB7XG4gICAgICAgIHZhciB4ID0gX2EueDtcbiAgICAgICAgdmFyIGxlZnQgPSBfYi5sZWZ0O1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChsZWZ0KSArICh4Lm1heCAtIHgubWluKTtcbiAgICB9LFxuICAgIC8vIFRyYW5zZm9ybVxuICAgIHg6IGdldFRyYW5zbGF0ZUZyb21NYXRyaXgoNCwgMTMpLFxuICAgIHk6IGdldFRyYW5zbGF0ZUZyb21NYXRyaXgoNSwgMTQpLFxufTtcbnZhciBjb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCB2aXN1YWxFbGVtZW50LCBjaGFuZ2VkS2V5cykge1xuICAgIHZhciBvcmlnaW5CYm94ID0gdmlzdWFsRWxlbWVudC5nZXRCb3VuZGluZ0JveCgpO1xuICAgIHZhciBlbGVtZW50Q29tcHV0ZWRTdHlsZSA9IHZpc3VhbEVsZW1lbnQuZ2V0Q29tcHV0ZWRTdHlsZSgpO1xuICAgIHZhciBkaXNwbGF5ID0gZWxlbWVudENvbXB1dGVkU3R5bGUuZGlzcGxheSwgdG9wID0gZWxlbWVudENvbXB1dGVkU3R5bGUudG9wLCBsZWZ0ID0gZWxlbWVudENvbXB1dGVkU3R5bGUubGVmdCwgYm90dG9tID0gZWxlbWVudENvbXB1dGVkU3R5bGUuYm90dG9tLCByaWdodCA9IGVsZW1lbnRDb21wdXRlZFN0eWxlLnJpZ2h0LCB0cmFuc2Zvcm0gPSBlbGVtZW50Q29tcHV0ZWRTdHlsZS50cmFuc2Zvcm07XG4gICAgdmFyIG9yaWdpbkNvbXB1dGVkU3R5bGUgPSB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0LCBib3R0b206IGJvdHRvbSwgcmlnaHQ6IHJpZ2h0LCB0cmFuc2Zvcm06IHRyYW5zZm9ybSB9O1xuICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBzZXQgdG8gZGlzcGxheTogXCJub25lXCIsIG1ha2UgaXQgdmlzaWJsZSBiZWZvcmVcbiAgICAvLyBtZWFzdXJpbmcgdGhlIHRhcmdldCBib3VuZGluZyBib3hcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgdmlzdWFsRWxlbWVudC5zZXRTdGF0aWNWYWx1ZXMoXCJkaXNwbGF5XCIsIHRhcmdldC5kaXNwbGF5IHx8IFwiYmxvY2tcIik7XG4gICAgfVxuICAgIC8vIEFwcGx5IHRoZSBsYXRlc3QgdmFsdWVzIChhcyBzZXQgaW4gY2hlY2tBbmRDb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMpXG4gICAgdmlzdWFsRWxlbWVudC5yZW5kZXIoKTtcbiAgICB2YXIgdGFyZ2V0QmJveCA9IHZpc3VhbEVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICBjaGFuZ2VkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLy8gUmVzdG9yZSBzdHlsZXMgdG8gdGhlaXIgKipjYWxjdWxhdGVkIGNvbXB1dGVkIHN0eWxlKiosIG5vdCB0aGVpciBhY3R1YWxcbiAgICAgICAgLy8gb3JpZ2luYWxseSBzZXQgc3R5bGUuIFRoaXMgYWxsb3dzIHVzIHRvIGFuaW1hdGUgYmV0d2VlbiBlcXVpdmFsZW50IHBpeGVsIHVuaXRzLlxuICAgICAgICB2YXIgdmFsdWUgPSB2aXN1YWxFbGVtZW50LmdldFZhbHVlKGtleSk7XG4gICAgICAgIHNldEFuZFJlc2V0VmVsb2NpdHkodmFsdWUsIHBvc2l0aW9uYWxWYWx1ZXNba2V5XShvcmlnaW5CYm94LCBvcmlnaW5Db21wdXRlZFN0eWxlKSk7XG4gICAgICAgIHRhcmdldFtrZXldID0gcG9zaXRpb25hbFZhbHVlc1trZXldKHRhcmdldEJib3gsIGVsZW1lbnRDb21wdXRlZFN0eWxlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBjaGVja0FuZENvbnZlcnRDaGFuZ2VkVmFsdWVUeXBlcyA9IGZ1bmN0aW9uICh2aXN1YWxFbGVtZW50LCB0YXJnZXQsIG9yaWdpbiwgdHJhbnNpdGlvbkVuZCkge1xuICAgIGlmIChvcmlnaW4gPT09IHZvaWQgMCkgeyBvcmlnaW4gPSB7fTsgfVxuICAgIGlmICh0cmFuc2l0aW9uRW5kID09PSB2b2lkIDApIHsgdHJhbnNpdGlvbkVuZCA9IHt9OyB9XG4gICAgdGFyZ2V0ID0gX19hc3NpZ24oe30sIHRhcmdldCk7XG4gICAgdHJhbnNpdGlvbkVuZCA9IF9fYXNzaWduKHt9LCB0cmFuc2l0aW9uRW5kKTtcbiAgICB2YXIgdGFyZ2V0UG9zaXRpb25hbEtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpLmZpbHRlcihpc1Bvc2l0aW9uYWxLZXkpO1xuICAgIC8vIFdlIHdhbnQgdG8gcmVtb3ZlIGFueSB0cmFuc2Zvcm0gdmFsdWVzIHRoYXQgY291bGQgYWZmZWN0IHRoZSBlbGVtZW50J3MgYm91bmRpbmcgYm94IGJlZm9yZVxuICAgIC8vIGl0J3MgbWVhc3VyZWQuIFdlJ2xsIHJlYXBwbHkgdGhlc2UgbGF0ZXIuXG4gICAgdmFyIHJlbW92ZWRUcmFuc2Zvcm1WYWx1ZXMgPSBbXTtcbiAgICB2YXIgaGFzQXR0ZW1wdGVkVG9SZW1vdmVUcmFuc2Zvcm1WYWx1ZXMgPSBmYWxzZTtcbiAgICB2YXIgY2hhbmdlZFZhbHVlVHlwZUtleXMgPSBbXTtcbiAgICB0YXJnZXRQb3NpdGlvbmFsS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdmlzdWFsRWxlbWVudC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICBpZiAoIXZpc3VhbEVsZW1lbnQuaGFzVmFsdWUoa2V5KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGZyb20gPSBvcmlnaW5ba2V5XTtcbiAgICAgICAgdmFyIHRvID0gdGFyZ2V0W2tleV07XG4gICAgICAgIHZhciBmcm9tVHlwZSA9IGZpbmREaW1lbnNpb25WYWx1ZVR5cGUoZnJvbSk7XG4gICAgICAgIHZhciB0b1R5cGU7XG4gICAgICAgIC8vIFRPRE86IFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgYmFzaWNhbGx5IHRocm93cyBhbiBlcnJvclxuICAgICAgICAvLyBpZiB5b3UgdHJ5IGFuZCBkbyB2YWx1ZSBjb252ZXJzaW9uIHZpYSBrZXlmcmFtZXMuIFRoZXJlJ3MgcHJvYmFibHlcbiAgICAgICAgLy8gYSB3YXkgb2YgZG9pbmcgdGhpcyBidXQgdGhlIHBlcmZvcm1hbmNlIGltcGxpY2F0aW9ucyB3b3VsZCBuZWVkIGdyZWF0ZXIgc2NydXRpbnksXG4gICAgICAgIC8vIGFzIGl0J2QgYmUgZG9pbmcgbXVsdGlwbGUgcmVzaXplLXJlbWVhc3VyZSBvcGVyYXRpb25zLlxuICAgICAgICBpZiAoaXNLZXlmcmFtZXNUYXJnZXQodG8pKSB7XG4gICAgICAgICAgICB2YXIgbnVtS2V5ZnJhbWVzID0gdG8ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRvWzBdID09PSBudWxsID8gMSA6IDA7IGkgPCBudW1LZXlmcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdG9UeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvVHlwZSA9IGZpbmREaW1lbnNpb25WYWx1ZVR5cGUodG9baV0pO1xuICAgICAgICAgICAgICAgICAgICBpbnZhcmlhbnQodG9UeXBlID09PSBmcm9tVHlwZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGlzTnVtT3JQeFR5cGUoZnJvbVR5cGUpICYmIGlzTnVtT3JQeFR5cGUodG9UeXBlKSksIFwiS2V5ZnJhbWVzIG11c3QgYmUgb2YgdGhlIHNhbWUgZGltZW5zaW9uIGFzIHRoZSBjdXJyZW50IHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW52YXJpYW50KGZpbmREaW1lbnNpb25WYWx1ZVR5cGUodG9baV0pID09PSB0b1R5cGUsIFwiQWxsIGtleWZyYW1lcyBtdXN0IGJlIG9mIHRoZSBzYW1lIHR5cGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9UeXBlID0gZmluZERpbWVuc2lvblZhbHVlVHlwZSh0byk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21UeXBlICE9PSB0b1R5cGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXkncmUgYm90aCBqdXN0IG51bWJlciBvciBweCwgY29udmVydCB0aGVtIGJvdGggdG8gbnVtYmVycyByYXRoZXIgdGhhblxuICAgICAgICAgICAgLy8gcmVseWluZyBvbiByZXNpemUvcmVtZWFzdXJlIHRvIGNvbnZlcnQgKHdoaWNoIGlzIHdhc3RlZnVsIGluIHRoaXMgc2l0dWF0aW9uKVxuICAgICAgICAgICAgaWYgKGlzTnVtT3JQeFR5cGUoZnJvbVR5cGUpICYmIGlzTnVtT3JQeFR5cGUodG9UeXBlKSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdmFsdWUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnNldChwYXJzZUZsb2F0KGN1cnJlbnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHBhcnNlRmxvYXQodG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRvKSAmJiB0b1R5cGUgPT09IHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdG8ubWFwKHBhcnNlRmxvYXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChmcm9tVHlwZSA9PT0gbnVsbCB8fCBmcm9tVHlwZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZnJvbVR5cGUudHJhbnNmb3JtKSAmJiAodG9UeXBlID09PSBudWxsIHx8IHRvVHlwZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9UeXBlLnRyYW5zZm9ybSkgJiZcbiAgICAgICAgICAgICAgICAoZnJvbSA9PT0gMCB8fCB0byA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBvbmUgb3IgdGhlIG90aGVyIHZhbHVlIGlzIDAsIGl0J3Mgc2FmZSB0byBjb2VyY2UgaXQgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gdHlwZSBvZiB0aGUgb3RoZXIgd2l0aG91dCBtZWFzdXJlbWVudFxuICAgICAgICAgICAgICAgIGlmIChmcm9tID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnNldCh0b1R5cGUudHJhbnNmb3JtKGZyb20pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gZnJvbVR5cGUudHJhbnNmb3JtKHRvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBnb2luZyB0byBkbyB2YWx1ZSBjb252ZXJzaW9uIHZpYSBET00gbWVhc3VyZW1lbnRzLCB3ZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gcmVtb3ZlIG5vbi1wb3NpdGlvbmFsIHRyYW5zZm9ybSB2YWx1ZXMgdGhhdCBjb3VsZCBhZmZlY3QgdGhlIGJib3ggbWVhc3VyZW1lbnRzLlxuICAgICAgICAgICAgICAgIGlmICghaGFzQXR0ZW1wdGVkVG9SZW1vdmVUcmFuc2Zvcm1WYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFRyYW5zZm9ybVZhbHVlcyA9IHJlbW92ZU5vblRyYW5zbGF0aW9uYWxUcmFuc2Zvcm0odmlzdWFsRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGhhc0F0dGVtcHRlZFRvUmVtb3ZlVHJhbnNmb3JtVmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlZFZhbHVlVHlwZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbmRba2V5XSA9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbmRba2V5XSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRyYW5zaXRpb25FbmRba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgICBzZXRBbmRSZXNldFZlbG9jaXR5KHZhbHVlLCB0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlZFZhbHVlVHlwZUtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjb252ZXJ0ZWRUYXJnZXQgPSBjb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXModGFyZ2V0LCB2aXN1YWxFbGVtZW50LCBjaGFuZ2VkVmFsdWVUeXBlS2V5cyk7XG4gICAgICAgIC8vIElmIHdlIHJlbW92ZWQgdHJhbnNmb3JtIHZhbHVlcywgcmVhcHBseSB0aGVtIGJlZm9yZSB0aGUgbmV4dCByZW5kZXJcbiAgICAgICAgaWYgKHJlbW92ZWRUcmFuc2Zvcm1WYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZW1vdmVkVHJhbnNmb3JtVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAyKSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XG4gICAgICAgICAgICAgICAgdmlzdWFsRWxlbWVudC5nZXRWYWx1ZShrZXkpLnNldCh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWFwcGx5IG9yaWdpbmFsIHZhbHVlc1xuICAgICAgICB2aXN1YWxFbGVtZW50LnJlbmRlcigpO1xuICAgICAgICByZXR1cm4geyB0YXJnZXQ6IGNvbnZlcnRlZFRhcmdldCwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdGFyZ2V0OiB0YXJnZXQsIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQgfTtcbiAgICB9XG59O1xuLyoqXG4gKiBDb252ZXJ0IHZhbHVlIHR5cGVzIGZvciB4L3kvd2lkdGgvaGVpZ2h0L3RvcC9sZWZ0L2JvdHRvbS9yaWdodFxuICpcbiAqIEFsbG93cyBhbmltYXRpb24gYmV0d2VlbiBgJ2F1dG8nYCAtPiBgJzEwMCUnYCBvciBgMGAgLT4gYCdjYWxjKDUwJSAtIDEwdncpJ2BcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdW5pdENvbnZlcnNpb24odmlzdWFsRWxlbWVudCwgdGFyZ2V0LCBvcmlnaW4sIHRyYW5zaXRpb25FbmQpIHtcbiAgICByZXR1cm4gaGFzUG9zaXRpb25hbEtleSh0YXJnZXQpXG4gICAgICAgID8gY2hlY2tBbmRDb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXModmlzdWFsRWxlbWVudCwgdGFyZ2V0LCBvcmlnaW4sIHRyYW5zaXRpb25FbmQpXG4gICAgICAgIDogeyB0YXJnZXQ6IHRhcmdldCwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCB9O1xufVxuXG4vKipcbiAqIFBhcnNlIGEgRE9NIHZhcmlhbnQgdG8gbWFrZSBpdCBhbmltYXRhYmxlLiBUaGlzIGludm9sdmVzIHJlc29sdmluZyBDU1MgdmFyaWFibGVzXG4gKiBhbmQgZW5zdXJpbmcgYW5pbWF0aW9ucyBsaWtlIFwiMjAlXCIgPT4gXCJjYWxjKDUwdncpXCIgYXJlIHBlcmZvcm1lZCBpbiBwaXhlbHMuXG4gKi9cbnZhciBwYXJzZURvbVZhcmlhbnQgPSBmdW5jdGlvbiAodmlzdWFsRWxlbWVudCwgdGFyZ2V0LCBvcmlnaW4sIHRyYW5zaXRpb25FbmQpIHtcbiAgICB2YXIgcmVzb2x2ZWQgPSByZXNvbHZlQ1NTVmFyaWFibGVzKHZpc3VhbEVsZW1lbnQsIHRhcmdldCwgdHJhbnNpdGlvbkVuZCk7XG4gICAgdGFyZ2V0ID0gcmVzb2x2ZWQudGFyZ2V0O1xuICAgIHRyYW5zaXRpb25FbmQgPSByZXNvbHZlZC50cmFuc2l0aW9uRW5kO1xuICAgIHJldHVybiB1bml0Q29udmVyc2lvbih2aXN1YWxFbGVtZW50LCB0YXJnZXQsIG9yaWdpbiwgdHJhbnNpdGlvbkVuZCk7XG59O1xuXG4vKipcbiAqIFVzZSBjYWxsYmFjayBlaXRoZXIgb25seSBvbiB0aGUgaW5pdGlhbCByZW5kZXIgb3Igb24gYWxsIHJlbmRlcnMuIEluIGNvbmN1cnJlbnQgbW9kZVxuICogdGhlIFwiaW5pdGlhbFwiIHJlbmRlciBtaWdodCBydW4gbXVsdGlwbGUgdGltZXNcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBDYWxsYmFjayB0byBydW5cbiAqIEBwYXJhbSBpc0luaXRpYWxPbmx5IC0gU2V0IHRvIGB0cnVlYCB0byBvbmx5IHJ1biBvbiBpbml0aWFsIHJlbmRlciwgb3IgYGZhbHNlYCBmb3IgYWxsIHJlbmRlcnMuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VJbml0aWFsT3JFdmVyeVJlbmRlcihjYWxsYmFjaywgaXNJbml0aWFsT25seSkge1xuICAgIGlmIChpc0luaXRpYWxPbmx5ID09PSB2b2lkIDApIHsgaXNJbml0aWFsT25seSA9IGZhbHNlOyB9XG4gICAgdmFyIGlzSW5pdGlhbFJlbmRlciA9IHVzZVJlZih0cnVlKTtcbiAgICBpZiAoIWlzSW5pdGlhbE9ubHkgfHwgKGlzSW5pdGlhbE9ubHkgJiYgaXNJbml0aWFsUmVuZGVyLmN1cnJlbnQpKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIGlzSW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG59XG5cbi8qKlxuICogQ29udHJvbCBhbmltYXRpb25zIG9uIG9uZSBvciBtb3JlIGNvbXBvbmVudHMuXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgQW5pbWF0aW9uQ29udHJvbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uQ29udHJvbHMoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFjayB3aGV0aGVyIHRoZSBob3N0IGNvbXBvbmVudCBoYXMgbW91bnRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBlbmRpbmcgYW5pbWF0aW9ucyB0aGF0IGFyZSBzdGFydGVkIGJlZm9yZSBhIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuZGluZ0FuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY29sbGVjdGlvbiBvZiBsaW5rZWQgY29tcG9uZW50IGFuaW1hdGlvbiBjb250cm9scy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudENvbnRyb2xzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdmFyaWFudHMgb24gdGhpcyBhbmQgYWxsIGNoaWxkIGNvbXBvbmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFyaWFudHMgLSBUaGUgdmFyaWFudHMgdG8gc2V0XG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuc2V0VmFyaWFudHMgPSBmdW5jdGlvbiAodmFyaWFudHMpIHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuICAgICAgICB0aGlzLmNvbXBvbmVudENvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHMuc2V0VmFyaWFudHModmFyaWFudHMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBhIGRlZmF1bHQgdHJhbnNpdGlvbiBvbiB0aGlzIGFuZCBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHRyYW5zaXRpb24gLSBUaGUgZGVmYXVsdCB0cmFuc2l0aW9uIHRvIHNldFxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLnNldERlZmF1bHRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuY29tcG9uZW50Q29udHJvbHMuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9scy5zZXREZWZhdWx0VHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIGEgY29tcG9uZW50J3MgYW5pbWF0aW9uIGNvbnRyb2xzIHRvIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udHJvbHMgLSBUaGUgY29udHJvbHMgdG8gc3Vic2NyaWJlXG4gICAgICogQHJldHVybnMgQW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNvbnRyb2xzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Q29udHJvbHMuYWRkKGNvbnRyb2xzKTtcbiAgICAgICAgaWYgKHRoaXMudmFyaWFudHMpXG4gICAgICAgICAgICBjb250cm9scy5zZXRWYXJpYW50cyh0aGlzLnZhcmlhbnRzKTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFRyYW5zaXRpb24pXG4gICAgICAgICAgICBjb250cm9scy5zZXREZWZhdWx0VHJhbnNpdGlvbih0aGlzLmRlZmF1bHRUcmFuc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNvbXBvbmVudENvbnRyb2xzLmRlbGV0ZShjb250cm9scyk7IH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdGFydHMgYW4gYW5pbWF0aW9uIG9uIGFsbCBsaW5rZWQgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiBjb250cm9scy5zdGFydChcInZhcmlhbnRMYWJlbFwiKVxuICAgICAqIGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgKiAgIHg6IDAsXG4gICAgICogICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxIH1cbiAgICAgKiB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGRlZmluaXRpb24gLSBQcm9wZXJ0aWVzIG9yIHZhcmlhbnQgbGFiZWwgdG8gYW5pbWF0ZSB0b1xuICAgICAqIEBwYXJhbSB0cmFuc2l0aW9uIC0gT3B0aW9uYWwgYHRyYW5zdGlvbmAgdG8gYXBwbHkgdG8gYSB2YXJpYW50XG4gICAgICogQHJldHVybnMgLSBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIGFuaW1hdGlvbnMgaGF2ZSBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgQW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGRlZmluaXRpb24sIHRyYW5zaXRpb25PdmVycmlkZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5oYXNNb3VudGVkKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uc18xID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudENvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IGNvbnRyb2xzLnN0YXJ0KGRlZmluaXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk92ZXJyaWRlOiB0cmFuc2l0aW9uT3ZlcnJpZGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uc18xLnB1c2goYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFuaW1hdGlvbnNfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wZW5kaW5nQW5pbWF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBbZGVmaW5pdGlvbiwgdHJhbnNpdGlvbk92ZXJyaWRlXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50bHkgc2V0IHRvIGEgc2V0IG9mIHByb3BlcnRpZXMgb3IgYSB2YXJpYW50LlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogLy8gV2l0aCBwcm9wZXJ0aWVzXG4gICAgICogY29udHJvbHMuc2V0KHsgb3BhY2l0eTogMCB9KVxuICAgICAqXG4gICAgICogLy8gV2l0aCB2YXJpYW50c1xuICAgICAqIGNvbnRyb2xzLnNldChcImhpZGRlblwiKVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQGludGVybmFscmVtYXJrc1xuICAgICAqIFdlIGNvdWxkIHBlcmZvcm0gYSBzaW1pbGFyIHRyaWNrIHRvIGAuc3RhcnRgIHdoZXJlIHRoaXMgY2FuIGJlIGNhbGxlZCBiZWZvcmUgbW91bnRcbiAgICAgKiBhbmQgd2UgbWFpbnRhaW4gYSBsaXN0IG9mIG9mIHBlbmRpbmcgYWN0aW9ucyB0aGF0IGdldCBhcHBsaWVkIG9uIG1vdW50LiBCdXQgdGhlXG4gICAgICogZXhwZWN0YXRpb24gb2YgYHNldGAgaXMgdGhhdCBpdCBoYXBwZW5zIHN5bmNocm9ub3VzbHkgYW5kIHRoaXMgd291bGQgYmUgZGlmZmljdWx0XG4gICAgICogdG8gZG8gYmVmb3JlIGFueSBjaGlsZHJlbiBoYXZlIGV2ZW4gYXR0YWNoZWQgdGhlbXNlbHZlcy4gSXQncyBhbHNvIHBvb3IgcHJhY3Rpc2VcbiAgICAgKiBhbmQgd2Ugc2hvdWxkIGRpc2NvdXJhZ2UgcmVuZGVyLXN5bmNocm9ub3VzIGAuc3RhcnRgIGNhbGxzIHJhdGhlciB0aGFuIGxlYW4gaW50byB0aGlzLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpbnZhcmlhbnQodGhpcy5oYXNNb3VudGVkLCBcImNvbnRyb2xzLnNldCgpIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhZnRlciBhIGNvbXBvbmVudCBoYXMgbW91bnRlZC4gQ29uc2lkZXIgY2FsbGluZyB3aXRoaW4gYSB1c2VFZmZlY3QgaG9vay5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudENvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHMuYXBwbHkoZGVmaW5pdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RvcHMgYW5pbWF0aW9ucyBvbiBhbGwgbGlua2VkIGNvbXBvbmVudHMuXG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiBjb250cm9scy5zdG9wKClcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRDb250cm9scy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9scykgeyByZXR1cm4gY29udHJvbHMuc3RvcCgpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBhbmltYXRpb24gY29udHJvbHMuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGVuZGluZ0FuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBfYS5hbmltYXRpb24sIHJlc29sdmUgPSBfYS5yZXNvbHZlO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnN0YXJ0LmFwcGx5KF90aGlzLCBfX3NwcmVhZChhbmltYXRpb24pKS50aGVuKHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0b3BzIGFsbCBjaGlsZCBhbmltYXRpb25zIHdoZW4gdGhlIGhvc3QgY29tcG9uZW50IHVubW91bnRzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFzTW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRpb25Db250cm9scztcbn0oKSk7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgYW5pbWF0aW9uQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgQW5pbWF0aW9uQ29udHJvbHMoKTsgfTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIE1vdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBzdGF0aWM6IGZhbHNlLFxufSk7XG52YXIgaXNWYXJpYW50TGFiZWwgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KHYpO1xufTtcbnZhciBpc0FuaW1hdGlvbkNvbnRyb2xzID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiBpbnN0YW5jZW9mIEFuaW1hdGlvbkNvbnRyb2xzO1xufTtcbi8qKlxuICogU2V0IHVwIHRoZSBjb250ZXh0IGZvciBjaGlsZHJlbiBtb3Rpb24gY29tcG9uZW50cy5cbiAqXG4gKiBXZSBhbHNvIHVzZSB0aGlzIG9wcG9ydHVuaXR5IHRvIGFwcGx5IGBpbml0aWFsYCB2YWx1ZXNcbiAqL1xudmFyIHVzZU1vdGlvbkNvbnRleHQgPSBmdW5jdGlvbiAocGFyZW50Q29udGV4dCwgY29udHJvbHMsIHZpc3VhbEVsZW1lbnQsIGlzU3RhdGljLCBfYSkge1xuICAgIGlmIChpc1N0YXRpYyA9PT0gdm9pZCAwKSB7IGlzU3RhdGljID0gZmFsc2U7IH1cbiAgICB2YXIgaW5pdGlhbCA9IF9hLmluaXRpYWwsIGFuaW1hdGUgPSBfYS5hbmltYXRlLCB2YXJpYW50cyA9IF9hLnZhcmlhbnRzLCB3aGlsZVRhcCA9IF9hLndoaWxlVGFwLCB3aGlsZUhvdmVyID0gX2Eud2hpbGVIb3ZlciwgbGF5b3V0SWQgPSBfYS5sYXlvdXRJZDtcbiAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGEgcm9vdCBlbGVtZW50IG9mIGFuIEFuaW1hdGVQcmVzZW5jZSBjb21wb25lbnRcbiAgICB2YXIgcHJlc2VuY2VDb250ZXh0ID0gdXNlQ29udGV4dChQcmVzZW5jZUNvbnRleHQpO1xuICAgIHZhciBwcmVzZW5jZUlkID0gcHJlc2VuY2VDb250ZXh0ID09PSBudWxsIHx8IHByZXNlbmNlQ29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJlc2VuY2VDb250ZXh0LmlkO1xuICAgIHZpc3VhbEVsZW1lbnQuaXNQcmVzZW5jZVJvb3QgPSBwYXJlbnRDb250ZXh0LnByZXNlbmNlSWQgIT09IHByZXNlbmNlSWQ7XG4gICAgLy8gT3ZlcnJpZGUgaW5pdGlhbCB3aXRoIHRoYXQgZnJvbSBhIHBhcmVudCBjb250ZXh0LCBpZiBkZWZpbmVkXG4gICAgaWYgKChwcmVzZW5jZUNvbnRleHQgPT09IG51bGwgfHwgcHJlc2VuY2VDb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmVzZW5jZUNvbnRleHQuaW5pdGlhbCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbml0aWFsID0gcHJlc2VuY2VDb250ZXh0LmluaXRpYWw7XG4gICAgfVxuICAgIHZhciBpbml0aWFsU3RhdGU7XG4gICAgaWYgKGluaXRpYWwgPT09IGZhbHNlICYmICFpc0FuaW1hdGlvbkNvbnRyb2xzKGFuaW1hdGUpKSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IGFuaW1hdGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBpbml0aWFsICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICBpbml0aWFsU3RhdGUgPSBpbml0aWFsO1xuICAgIH1cbiAgICAvLyBUcmFjayBtb3VudGVkIHN0YXR1cyBzbyBjaGlsZHJlbiBjYW4gZGV0ZWN0IHdoZXRoZXIgdGhleSB3ZXJlIHByZXNlbnQgZHVyaW5nIHRoZWlyXG4gICAgLy8gcGFyZW50J3MgZmlyc3QgcmVuZGVyXG4gICAgdmFyIGhhc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIFdlIHByb3BhZ2F0ZSB0aGlzIGNvbXBvbmVudCdzIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scyAqaWYqIHdlJ3JlIGJlaW5nIHByb3ZpZGVkIHZhcmlhbnRzLFxuICAgIC8vIGlmIHdlJ3JlIGJlaW5nIHVzZWQgdG8gY29udHJvbCB2YXJpYW50cywgb3IgaWYgd2UncmUgYmVpbmcgcGFzc2VkIGFuaW1hdGlvbiBjb250cm9scy5cbiAgICAvLyBPdGhlcndpc2UgdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIFwiaW52aXNpYmxlXCIgdG8gdmFyaWFudCBwcm9wYWdhdGlvbi4gVGhpcyBpcyBhIHNsaWdodCBjb25jZXNzaW9uXG4gICAgLy8gdG8gRnJhbWVyIFggd2hlcmUgZXZlcnkgYEZyYW1lYCBpcyBhIGBtb3Rpb25gIGNvbXBvbmVudCBhbmQgaXQgbWlnaHQgYmUgaWYgd2UgY2hhbmdlIHRoYXQgaW4gdGhlIGZ1dHVyZVxuICAgIC8vIHRoYXQgdGhpcyByZXN0cmljdGlvbiBpcyByZW1vdmVkLlxuICAgIHZhciBzaG91bGRQcm9wYWdhdGVDb250cm9scyA9IHZhcmlhbnRzIHx8XG4gICAgICAgIGlzVmFyaWFudExhYmVsKGFuaW1hdGUpIHx8XG4gICAgICAgIGlzVmFyaWFudExhYmVsKHdoaWxlVGFwKSB8fFxuICAgICAgICBpc1ZhcmlhbnRMYWJlbCh3aGlsZUhvdmVyKSB8fFxuICAgICAgICBpc0FuaW1hdGlvbkNvbnRyb2xzKGFuaW1hdGUpO1xuICAgIC8vIElmIHRoaXMgY29tcG9uZW50J3MgYGluaXRpYWxgIHByb3AgaXMgYSB2YXJpYW50IGxhYmVsLCBwcm9wYWdhdGUgaXQuIE90aGVyd2lzZSBwYXNzIHRoZSBwYXJlbnQncy5cbiAgICB2YXIgdGFyZ2V0SW5pdGlhbCA9IGlzVmFyaWFudExhYmVsKGluaXRpYWxTdGF0ZSlcbiAgICAgICAgPyBpbml0aWFsU3RhdGVcbiAgICAgICAgOiBwYXJlbnRDb250ZXh0LmluaXRpYWw7XG4gICAgLy8gSWYgdGhpcyBpcyBhIHZhcmlhbnQgdHJlZSB3ZSBuZWVkIHRvIHByb3BhZ2F0ZSB0aGUgYGFuaW1hdGVgIHByb3AgaW4gY2FzZSBuZXcgY2hpbGRyZW4gYXJlIGFkZGVkIGFmdGVyXG4gICAgLy8gdGhlIHRyZWUgaW5pdGlhbGx5IGFuaW1hdGVzLlxuICAgIHZhciB0YXJnZXRBbmltYXRlID0gaXNWYXJpYW50TGFiZWwoYW5pbWF0ZSlcbiAgICAgICAgPyBhbmltYXRlXG4gICAgICAgIDogcGFyZW50Q29udGV4dC5hbmltYXRlO1xuICAgIC8vIE9ubHkgYWxsb3cgYGluaXRpYWxgIHRvIHRyaWdnZXIgY29udGV4dCByZS1yZW5kZXJzIGlmIHRoaXMgaXMgYSBgc3RhdGljYCBjb21wb25lbnQgKGllIHdlJ3JlIG9uIHRoZSBGcmFtZXIgY2FudmFzKVxuICAgIC8vIG9yIGluIGFub3RoZXIgbm9uLWFuaW1hdGlvbi9pbnRlcmFjdGlvbiBlbnZpcm9ubWVudC5cbiAgICB2YXIgaW5pdGlhbERlcGVuZGVuY3kgPSBpc1N0YXRpYyA/IHRhcmdldEluaXRpYWwgOiBudWxsO1xuICAgIC8vIE9ubHkgYWxsb3cgYGFuaW1hdGVgIHRvIHRyaWdnZXIgY29udGV4dCByZS1yZW5kZXJzIGlmIGl0J3MgYSB2YXJpYW50IGxhYmVsLiBJZiB0aGlzIGlzIGFuIGFycmF5IG9mXG4gICAgLy8gdmFyaWFudCBsYWJlbHMgdGhlcmUncyBwcm9iYWJseSBhbiBvcHRpbWlzYXRpb24gdG8gZGVlcC1jb21wYXJlIGJ1dCBpdCBtaWdodCBiZSBhbiBvdmVyLW9wdGltaXNhdGlvbi5cbiAgICAvLyBXZSB3YW50IHRvIGRvIHRoaXMgYXMgd2UgcmVseSBvbiBSZWFjdCdzIGNvbXBvbmVudCByZW5kZXJpbmcgb3JkZXIgZWFjaCByZW5kZXIgY3ljbGUgdG8gZGV0ZXJtaW5lXG4gICAgLy8gdGhlIG5ldyBvcmRlciBvZiBhbnkgY2hpbGQgY29tcG9uZW50cyBmb3IgdGhlIGBzdGFnZ2VyQ2hpbGRyZW5gIGZ1bmN0aW9uYWxpdHkuXG4gICAgdmFyIGFuaW1hdGVEZXBlbmRlbmN5ID0gc2hvdWxkUHJvcGFnYXRlQ29udHJvbHMgJiYgaXNWYXJpYW50TGFiZWwodGFyZ2V0QW5pbWF0ZSlcbiAgICAgICAgPyB0YXJnZXRBbmltYXRlXG4gICAgICAgIDogbnVsbDtcbiAgICAvLyBUaGUgY29udGV4dCB0byBwcm92aWRlIHRvIHRoZSBjaGlsZC4gV2UgYHVzZU1lbW9gIGJlY2F1c2UgYWx0aG91Z2ggYGNvbnRyb2xzYCBhbmQgYGluaXRpYWxgIGFyZVxuICAgIC8vIHVubGlrZWx5IHRvIGNoYW5nZSwgYnkgbWFraW5nIHRoZSBjb250ZXh0IGFuIG9iamVjdCBpdCdsbCBiZSBjb25zaWRlcmVkIGEgbmV3IHZhbHVlIGV2ZXJ5IHJlbmRlci5cbiAgICAvLyBTbyBhbGwgY2hpbGQgbW90aW9uIGNvbXBvbmVudHMgd2lsbCByZS1yZW5kZXIgYXMgYSByZXN1bHQuXG4gICAgdmFyIGNvbnRleHQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgIGNvbnRyb2xzOiBzaG91bGRQcm9wYWdhdGVDb250cm9sc1xuICAgICAgICAgICAgPyBjb250cm9sc1xuICAgICAgICAgICAgOiBwYXJlbnRDb250ZXh0LmNvbnRyb2xzLFxuICAgICAgICBpbml0aWFsOiB0YXJnZXRJbml0aWFsLFxuICAgICAgICBhbmltYXRlOiB0YXJnZXRBbmltYXRlLFxuICAgICAgICB2aXN1YWxFbGVtZW50OiB2aXN1YWxFbGVtZW50LFxuICAgICAgICBoYXNNb3VudGVkOiBoYXNNb3VudGVkLFxuICAgICAgICBpc1JlZHVjZWRNb3Rpb246IHBhcmVudENvbnRleHQuaXNSZWR1Y2VkTW90aW9uLFxuICAgICAgICBwcmVzZW5jZUlkOiBwcmVzZW5jZUlkLFxuICAgIH0pOyB9LCBbXG4gICAgICAgIGluaXRpYWxEZXBlbmRlbmN5LFxuICAgICAgICBhbmltYXRlRGVwZW5kZW5jeSxcbiAgICAgICAgcGFyZW50Q29udGV4dC5pc1JlZHVjZWRNb3Rpb24sXG4gICAgICAgIGFuaW1hdGUsXG4gICAgICAgIGxheW91dElkLFxuICAgICAgICBwcmVzZW5jZUlkLFxuICAgIF0pO1xuICAgIC8vIFVwZGF0ZSB0aGUgYHN0YXRpY2AgcHJvcGVydHkgZXZlcnkgcmVuZGVyLiBUaGlzIGlzIHVubGlrZWx5IHRvIGNoYW5nZSBidXQgYWxzbyBlc3NlbnRpYWxseSBmcmVlLlxuICAgIGNvbnRleHQuc3RhdGljID0gaXNTdGF0aWM7XG4gICAgLy8gU2V0IGluaXRpYWwgc3RhdGUuIElmIHRoaXMgaXMgYSBzdGF0aWMgY29tcG9uZW50IChpZSBpbiBGcmFtZXIgY2FudmFzKSwgcmVzcG9uZCB0byB1cGRhdGVzXG4gICAgLy8gaW4gYGluaXRpYWxgLlxuICAgIHVzZUluaXRpYWxPckV2ZXJ5UmVuZGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluaXRpYWxUb0FwcGx5ID0gaW5pdGlhbFN0YXRlIHx8IHBhcmVudENvbnRleHQuaW5pdGlhbDtcbiAgICAgICAgaW5pdGlhbFRvQXBwbHkgJiYgY29udHJvbHMuYXBwbHkoaW5pdGlhbFRvQXBwbHkpO1xuICAgIH0sICFpc1N0YXRpYyk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG52YXIgY2hlY2tTaG91bGRJbmhlcml0VmFyaWFudCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBhbmltYXRlID0gX2EuYW5pbWF0ZSwgdmFyaWFudHMgPSBfYS52YXJpYW50cywgX2IgPSBfYS5pbmhlcml0LCBpbmhlcml0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICByZXR1cm4gKGluaGVyaXQgJiZcbiAgICAgICAgISF2YXJpYW50cyAmJlxuICAgICAgICAoIWFuaW1hdGUgfHwgYW5pbWF0ZSBpbnN0YW5jZW9mIEFuaW1hdGlvbkNvbnRyb2xzKSk7XG59O1xuXG52YXIgaXNNb3Rpb25WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE1vdGlvblZhbHVlO1xufTtcblxuZnVuY3Rpb24gaXNGb3JjZWRNb3Rpb25WYWx1ZShrZXksIF9hKSB7XG4gICAgdmFyIGxheW91dCA9IF9hLmxheW91dCwgbGF5b3V0SWQgPSBfYS5sYXlvdXRJZDtcbiAgICByZXR1cm4gKGlzVHJhbnNmb3JtUHJvcChrZXkpIHx8XG4gICAgICAgIGlzVHJhbnNmb3JtT3JpZ2luUHJvcChrZXkpIHx8XG4gICAgICAgICgobGF5b3V0IHx8IGxheW91dElkICE9PSB1bmRlZmluZWQpICYmICEhdmFsdWVTY2FsZUNvcnJlY3Rpb25ba2V5XSkpO1xufVxuLyoqXG4gKiBTY3JhcGUgcHJvcHMgZm9yIE1vdGlvblZhbHVlcyBhbmQgYWRkL3JlbW92ZSB0aGVtIHRvIHRoaXMgY29tcG9uZW50J3NcbiAqIFZpc3VhbEVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gdXNlTW90aW9uVmFsdWVzKHZpc3VhbEVsZW1lbnQsIHByb3BzKSB7XG4gICAgdmFyIHByZXYgPSB1c2VDb25zdGFudChlbXB0eSk7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIE1vdGlvblZhbHVlcyB0aGF0IGFyZSBubyBsb25nZXIgcHJlc2VudFxuICAgICAqL1xuICAgIGZvciAodmFyIGtleSBpbiBwcmV2KSB7XG4gICAgICAgIHZhciBpc0ZvcmNlZCA9IGlzRm9yY2VkTW90aW9uVmFsdWUoa2V5LCBwcm9wcyk7XG4gICAgICAgIHZhciBleGlzdHNBc1Byb3AgPSBwcm9wc1trZXldO1xuICAgICAgICB2YXIgZXhpc3RzQXNTdHlsZSA9IHByb3BzLnN0eWxlICYmIHByb3BzLnN0eWxlW2tleV07XG4gICAgICAgIHZhciBwcm9wSXNNb3Rpb25WYWx1ZSA9IGV4aXN0c0FzUHJvcCAmJiBpc01vdGlvblZhbHVlKHByb3BzW2tleV0pO1xuICAgICAgICB2YXIgc3R5bGVJc01vdGlvblZhbHVlID0gZXhpc3RzQXNTdHlsZSAmJiBpc01vdGlvblZhbHVlKHByb3BzLnN0eWxlW2tleV0pO1xuICAgICAgICB2YXIgdHJhbnNmb3JtUmVtb3ZlZCA9IGlzRm9yY2VkICYmICFleGlzdHNBc1Byb3AgJiYgIWV4aXN0c0FzU3R5bGU7XG4gICAgICAgIHZhciBtb3Rpb25WYWx1ZVJlbW92ZWQgPSAhaXNGb3JjZWQgJiYgIXByb3BJc01vdGlvblZhbHVlICYmICFzdHlsZUlzTW90aW9uVmFsdWU7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1SZW1vdmVkIHx8IG1vdGlvblZhbHVlUmVtb3ZlZCkge1xuICAgICAgICAgICAgdmlzdWFsRWxlbWVudC5yZW1vdmVWYWx1ZShrZXkpO1xuICAgICAgICAgICAgZGVsZXRlIHByZXZba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgaW5jb21pbmcgTW90aW9uVmFsdWVzXG4gICAgICovXG4gICAgYWRkTW90aW9uVmFsdWVzKHZpc3VhbEVsZW1lbnQsIHByZXYsIHByb3BzLCBmYWxzZSwgcHJvcHMpO1xuICAgIGlmIChwcm9wcy5zdHlsZSlcbiAgICAgICAgYWRkTW90aW9uVmFsdWVzKHZpc3VhbEVsZW1lbnQsIHByZXYsIHByb3BzLnN0eWxlLCB0cnVlLCBwcm9wcyk7XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIGN1c3RvbSB2YWx1ZXMgaWYgcHJvdmlkZWQgYSBoYW5kbGVyLCBpZSBzaXplIC0+IHdpZHRoL2hlaWdodFxuICAgICAqIElkZWFsbHkgd2UnZCBkaXRjaCB0aGlzIGJ5IHJlbW92aW5nIHN1cHBvcnQgZm9yIHNpemUgYW5kIG90aGVyIGN1c3RvbSB2YWx1ZXMgZnJvbSBGcmFtZXIuXG4gICAgICovXG4gICAgaWYgKHByb3BzLnRyYW5zZm9ybVZhbHVlcykge1xuICAgICAgICB2aXN1YWxFbGVtZW50LnJlYWN0U3R5bGUgPSBwcm9wcy50cmFuc2Zvcm1WYWx1ZXModmlzdWFsRWxlbWVudC5yZWFjdFN0eWxlKTtcbiAgICB9XG59XG4vKipcbiAqIEFkZCBpbmNvbWluZyBNb3Rpb25WYWx1ZXNcbiAqXG4gKiBUT0RPOiBUeXBlIHRoZSBWaXN1YWxFbGVtZW50cyBwcm9wZXJseVxuICovXG5mdW5jdGlvbiBhZGRNb3Rpb25WYWx1ZXModmlzdWFsRWxlbWVudCwgcHJldiwgc291cmNlLCBpc1N0eWxlLCBwcm9wcykge1xuICAgIGlmIChpc1N0eWxlID09PSB2b2lkIDApIHsgaXNTdHlsZSA9IGZhbHNlOyB9XG4gICAgaWYgKGlzU3R5bGUpXG4gICAgICAgIHZpc3VhbEVsZW1lbnQucmVhY3RTdHlsZSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG4gICAgICAgIHZhciBmb3VuZE1vdGlvblZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmIChpc01vdGlvblZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIE1vdGlvblZhbHVlLCBhZGQgaXQgaWYgaXQgaXNuJ3QgYSByZXNlcnZlZCBrZXlcbiAgICAgICAgICAgIGlmICghcmVzZXJ2ZWROYW1lcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQuYWRkVmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZm91bmRNb3Rpb25WYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGb3JjZWRNb3Rpb25WYWx1ZShrZXksIHByb3BzKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wLCBhbHdheXMgY3JlYXRlIGEgTW90aW9uVmFsdWVcbiAgICAgICAgICAgIC8vIHRvIGVuc3VyZSB3ZSBjYW4gcmVjb25jaWxlIHRoZW0gYWxsIHRvZ2V0aGVyLlxuICAgICAgICAgICAgaWYgKCF2aXN1YWxFbGVtZW50Lmhhc1ZhbHVlKGtleSkpIHtcbiAgICAgICAgICAgICAgICB2aXN1YWxFbGVtZW50LmFkZFZhbHVlKGtleSwgbW90aW9uVmFsdWUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBwcmV2W2tleV0pIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgTW90aW9uVmFsdWUgYWxyZWFkeSBleGlzdHMsIHVwZGF0ZSBpdCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vIGxhdGVzdCBpbmNvbWluZyB2YWx1ZVxuICAgICAgICAgICAgICAgIHZhciBtb3Rpb24gPSB2aXN1YWxFbGVtZW50LmdldFZhbHVlKGtleSk7XG4gICAgICAgICAgICAgICAgbW90aW9uLnNldCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZE1vdGlvblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0eWxlKSB7XG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50LnJlYWN0U3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3VuZE1vdGlvblZhbHVlKVxuICAgICAgICAgICAgcHJldltrZXldID0gdmFsdWU7XG4gICAgfVxufVxuLyoqXG4gKiBUaGVzZSBhcmUgcHJvcHMgd2UgYWNjZXB0IGFzIE1vdGlvblZhbHVlcyBidXQgZG9uJ3Qgd2FudCB0byBhZGRcbiAqIHRvIHRoZSBWaXN1YWxFbGVtZW50XG4gKi9cbnZhciByZXNlcnZlZE5hbWVzID0gbmV3IFNldChbXSk7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe30pOyB9O1xuXG52YXIgaXNDdXN0b21WYWx1ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odiAmJiB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB2Lm1peCAmJiB2LnRvVmFsdWUpO1xufTtcbnZhciByZXNvbHZlRmluYWxWYWx1ZUluS2V5ZnJhbWVzID0gZnVuY3Rpb24gKHYpIHtcbiAgICAvLyBUT0RPIG1heWJlIHRocm93IGlmIHYubGVuZ3RoIC0gMSBpcyBwbGFjZWhvbGRlciB0b2tlbj9cbiAgICByZXR1cm4gaXNLZXlmcmFtZXNUYXJnZXQodikgPyB2W3YubGVuZ3RoIC0gMV0gfHwgMCA6IHY7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIGEgbnVtZXJpY2FsIHN0cmluZywgaWUgYSBzdHJpbmcgdGhhdCBpcyBwdXJlbHkgYSBudW1iZXIgZWcgXCIxMDBcIiBvciBcIi0xMDAuMVwiXG4gKi9cbnZhciBpc051bWVyaWNhbFN0cmluZyA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiAvXlxcLT9cXGQqXFwuP1xcZCskLy50ZXN0KHYpOyB9O1xuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCB2YWx1ZSBvZiBldmVyeSBgTW90aW9uVmFsdWVgIGluIGEgYFZpc3VhbEVsZW1lbnRgXG4gKi9cbnZhciBnZXRDdXJyZW50ID0gZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQpIHtcbiAgICB2YXIgY3VycmVudCA9IHt9O1xuICAgIHZpc3VhbEVsZW1lbnQuZm9yRWFjaFZhbHVlKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7IHJldHVybiAoY3VycmVudFtrZXldID0gdmFsdWUuZ2V0KCkpOyB9KTtcbiAgICByZXR1cm4gY3VycmVudDtcbn07XG4vKipcbiAqIEdldCB0aGUgY3VycmVudCB2ZWxvY2l0eSBvZiBldmVyeSBgTW90aW9uVmFsdWVgIGluIGEgYFZpc3VhbEVsZW1lbnRgXG4gKi9cbnZhciBnZXRWZWxvY2l0eSA9IGZ1bmN0aW9uICh2aXN1YWxFbGVtZW50KSB7XG4gICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgdmlzdWFsRWxlbWVudC5mb3JFYWNoVmFsdWUoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHsgcmV0dXJuICh2ZWxvY2l0eVtrZXldID0gdmFsdWUuZ2V0VmVsb2NpdHkoKSk7IH0pO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbn07XG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgYFRhcmdldGAuIEEgZ2VuZXJpYyB0eXBlb2YgPT09ICdmdW5jdGlvbidcbiAqIGNoZWNrLCBqdXN0IGhlbHBzIHdpdGggdHlwaW5nLlxuICovXG52YXIgaXNUYXJnZXRSZXNvbHZlciA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSBcImZ1bmN0aW9uXCI7XG59O1xuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBhIGxpc3Qgb2YgdmFyaWFudCBsYWJlbHNcbiAqL1xudmFyIGlzVmFyaWFudExhYmVscyA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBBcnJheS5pc0FycmF5KHYpOyB9O1xuLyoqXG4gKiBDb250cm9sIGFuaW1hdGlvbnMgZm9yIGEgc2luZ2xlIGNvbXBvbmVudFxuICpcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scyh2aXN1YWxFbGVtZW50LCBfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbWFrZVRhcmdldEFuaW1hdGFibGUgPSBfYS5tYWtlVGFyZ2V0QW5pbWF0YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQncyBsYXRlc3QgcHJvcHMuIFdlIGNvdWxkIHByb2JhYmx5IGRpdGNoIHRoaXMgaW5cbiAgICAgICAgICogZmF2b3VyIHRvIGEgcmVmZXJlbmNlIHRvIHRoZSBgY3VzdG9tYCBwcm9wIG5vdyB3ZSBkb24ndCBzZW5kIGFsbCBwcm9wcyB0aHJvdWdoXG4gICAgICAgICAqIHRvIHRhcmdldCByZXNvbHZlcnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29tcG9uZW50J3MgdmFyaWFudHMsIGFzIHByb3ZpZGVkIGJ5IGB2YXJpYW50c2BcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2V0IG9mIHZhbHVlcyB0aGF0IHdlIGFuaW1hdGUgYmFjayB0byB3aGVuIGEgdmFsdWUgaXMgY2xlYXJlZCBvZiBhbGwgb3ZlcnJpZGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYXNlVGFyZ2V0ID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNlcmllcyBvZiB0YXJnZXQgb3ZlcnJpZGVzIHRoYXQgd2UgY2FuIGFuaW1hdGUgdG8vZnJvbSB3aGVuIG92ZXJyaWRlcyBhcmUgc2V0L2NsZWFyZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm92ZXJyaWRlcyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBzZXJpZXMgb2YgdGFyZ2V0IG92ZXJyaWRlcyBhcyB0aGV5IHdlcmUgb3JpZ2luYWxseSByZXNvbHZlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVzb2x2ZWRPdmVycmlkZXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgU2V0IG9mIGN1cnJlbnRseSBhY3RpdmUgb3ZlcnJpZGUgaW5kZXhlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hY3RpdmVPdmVycmlkZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFNldCBvZiB2YWx1ZSBrZXlzIHRoYXQgYXJlIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gbmV3IFNldCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgdGhlIGFzc29jaWF0ZWQgYFZpc3VhbEVsZW1lbnRgIGhhcyBhIGtleSB3aXRoIHRoZSBwcm92aWRlZCBzdHJpbmcuXG4gICAgICAgICAqIFByZS1ib3VuZCB0byB0aGUgY2xhc3Mgc28gd2UgY2FuIHByb3ZpZGUgZGlyZWN0bHkgdG8gdGhlIGBmaWx0ZXJgIGluIGBjaGVja0Zvck5ld1ZhbHVlc2AuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gIV90aGlzLnZpc3VhbEVsZW1lbnQuaGFzVmFsdWUoa2V5KTsgfTtcbiAgICAgICAgdGhpcy52aXN1YWxFbGVtZW50ID0gdmlzdWFsRWxlbWVudDtcbiAgICAgICAgdGhpcy5tYWtlVGFyZ2V0QW5pbWF0YWJsZSA9IG1ha2VUYXJnZXRBbmltYXRhYmxlO1xuICAgICAgICB0aGlzLnZpc3VhbEVsZW1lbnQuZm9yRWFjaFZhbHVlKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7IHJldHVybiAoX3RoaXMuYmFzZVRhcmdldFtrZXldID0gdmFsdWUuZ2V0KCkpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCdzIHByb3BzLlxuICAgICAqIEBwYXJhbSBwcm9wcyAtXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50J3MgdmFyaWFudHNcbiAgICAgKiBAcGFyYW0gdmFyaWFudHMgLVxuICAgICAqL1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuc2V0VmFyaWFudHMgPSBmdW5jdGlvbiAodmFyaWFudHMpIHtcbiAgICAgICAgaWYgKHZhcmlhbnRzKVxuICAgICAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjb21wb25lbnQncyBkZWZhdWx0IHRyYW5zaXRpb25cbiAgICAgKiBAcGFyYW0gdHJhbnNpdGlvbiAtXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zZXREZWZhdWx0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgbW90aW9uIHZhbHVlcyB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWZpbml0aW9uIC1cbiAgICAgKiBAcGFyYW0gaXNBY3RpdmUgLVxuICAgICAqL1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKGRlZmluaXRpb24sIF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLmlzQWN0aXZlLCBpc0FjdGl2ZSA9IF9jID09PSB2b2lkIDAgPyBuZXcgU2V0KCkgOiBfYywgcHJpb3JpdHkgPSBfYi5wcmlvcml0eTtcbiAgICAgICAgdmFyIF9kID0gdGhpcy5yZXNvbHZlVmFyaWFudChkZWZpbml0aW9uKSwgdGFyZ2V0ID0gX2QudGFyZ2V0LCB0cmFuc2l0aW9uRW5kID0gX2QudHJhbnNpdGlvbkVuZDtcbiAgICAgICAgdGFyZ2V0ID0gdGhpcy50cmFuc2Zvcm1WYWx1ZXMoX19hc3NpZ24oX19hc3NpZ24oe30sIHRhcmdldCksIHRyYW5zaXRpb25FbmQpKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKGlzQWN0aXZlLmhhcyhrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlzQWN0aXZlLmFkZChrZXkpO1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHJlc29sdmVGaW5hbFZhbHVlSW5LZXlmcmFtZXModGFyZ2V0W2tleV0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpc3VhbEVsZW1lbnQuaGFzVmFsdWUoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgJiYgdmFsdWUuc2V0KHRhcmdldFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC5hZGRWYWx1ZShrZXksIG1vdGlvblZhbHVlKHRhcmdldFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcHJpb3JpdHkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZVRhcmdldFtrZXldID0gdGFyZ2V0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsbG93cyBgdHJhbnNmb3JtVmFsdWVzYCB0byBiZSBzZXQgYnkgYSBjb21wb25lbnQgdGhhdCBhbGxvd3MgdXMgdG9cbiAgICAgKiB0cmFuc2Zvcm0gdGhlIHZhbHVlcyBpbiBhIGdpdmVuIGBUYXJnZXRgLiBUaGlzIGFsbG93cyBGcmFtZXIgTGlicmFyeVxuICAgICAqIHRvIGV4dGVuZCBGcmFtZXIgTW90aW9uIHRvIGFuaW1hdGUgYENvbG9yYCB2YXJpYWJsZXMgZXRjLiBDdXJyZW50bHkgd2UgaGF2ZVxuICAgICAqIHRvIG1hbnVhbGx5IHN1cHBvcnQgdGhlc2UgZXh0ZW5kZWQgdHlwZXMgaGVyZSBpbiBGcmFtZXIgTW90aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlcyAtXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS50cmFuc2Zvcm1WYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1WYWx1ZXMgPSB0aGlzLnByb3BzLnRyYW5zZm9ybVZhbHVlcztcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVZhbHVlcyA/IHRyYW5zZm9ybVZhbHVlcyh2YWx1ZXMpIDogdmFsdWVzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgYSBgVGFyZ2V0YCBmb3IgbmV3IHZhbHVlcyB3ZSBoYXZlbid0IGFuaW1hdGVkIHlldCwgYW5kIGFkZCB0aGVtXG4gICAgICogdG8gdGhlIGBNb3Rpb25WYWx1ZU1hcGAuXG4gICAgICpcbiAgICAgKiBDdXJyZW50bHkgdGhlcmUncyBmdW5jdGlvbmFsaXR5IGhlcmUgdGhhdCBpcyBET00tc3BlY2lmaWMsIHdlIHNob3VsZCBhbGxvd1xuICAgICAqIHRoaXMgZnVuY3Rpb25hbGl0eSB0byBiZSBpbmplY3RlZCBieSB0aGUgZmFjdG9yeSB0aGF0IGNyZWF0ZXMgRE9NLXNwZWNpZmljXG4gICAgICogY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLVxuICAgICAqL1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuY2hlY2tGb3JOZXdWYWx1ZXMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZUtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpLmZpbHRlcih0aGlzLmhhc1ZhbHVlKTtcbiAgICAgICAgdmFyIG51bU5ld1ZhbHVlcyA9IG5ld1ZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgIGlmICghbnVtTmV3VmFsdWVzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bU5ld1ZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3VmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGtleWZyYW1lcyB2YWx1ZSwgd2UgY2FuIGF0dGVtcHQgdG8gdXNlIHRoZSBmaXJzdCB2YWx1ZSBpbiB0aGVcbiAgICAgICAgICAgIC8vIGFycmF5IGFzIHRoYXQncyBnb2luZyB0byBiZSB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIGFuaW1hdGlvbiBhbnl3YXlcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0VmFsdWVbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBpdCBpc24ndCBhIGtleWZyYW1lcyBvciB0aGUgZmlyc3Qga2V5ZnJhbWVzIHZhbHVlIHdhcyBzZXQgYXMgYG51bGxgLCByZWFkIHRoZVxuICAgICAgICAgICAgLy8gdmFsdWUgZnJvbSB0aGUgRE9NLiBJdCBtaWdodCBiZSB3b3J0aCBpbnZlc3RpZ2F0aW5nIHdoZXRoZXIgdG8gY2hlY2sgcHJvcHMgKGZvciBTVkcpXG4gICAgICAgICAgICAvLyBvciBwcm9wcy5zdHlsZSAoZm9yIEhUTUwpIGlmIHRoZSB2YWx1ZSBleGlzdHMgdGhlcmUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcmVhZC5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciByZWFkVmFsdWUgPSB0aGlzLnZpc3VhbEVsZW1lbnQucmVhZE5hdGl2ZVZhbHVlKGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSByZWFkVmFsdWUgIT09IHVuZGVmaW5lZCA/IHJlYWRWYWx1ZSA6IHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCh2YWx1ZSAhPT0gbnVsbCwgXCJObyBpbml0aWFsIHZhbHVlIGZvciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIGJlIGluZmVycmVkLiBFbnN1cmUgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGRlZmluZWQgb24gdGhlIGNvbXBvbmVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIGlzTnVtZXJpY2FsU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgcmVhZCBhcyBhIHN0cmluZywgaWUgXCIwXCIgb3IgXCIyMDBcIiwgY29udmVydCBpdCB0byBhIG51bWJlclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZmluZFZhbHVlVHlwZSh2YWx1ZSkgJiYgY29tcGxleC50ZXN0KHRhcmdldFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlIGlzIG5vdCByZWNvZ25pc2VkIGFzIGFuaW1hdGFibGUsIGllIFwibm9uZVwiLCBjcmVhdGUgYW4gYW5pbWF0YWJsZSB2ZXJzaW9uIG9yaWdpbiBiYXNlZCBvbiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjb21wbGV4LmdldEFuaW1hdGFibGVOb25lKHRhcmdldFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC5hZGRWYWx1ZShrZXksIG1vdGlvblZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgICB0aGlzLmJhc2VUYXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlIGEgdmFyaWFudCBmcm9tIGl0cyBsYWJlbCBvciByZXNvbHZlciBpbnRvIGFuIGFjdHVhbCBgVGFyZ2V0YCB3ZSBjYW4gYW5pbWF0ZSB0by5cbiAgICAgKiBAcGFyYW0gdmFyaWFudCAtXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5yZXNvbHZlVmFyaWFudCA9IGZ1bmN0aW9uICh2YXJpYW50LCBfYSkge1xuICAgICAgICB2YXIgY3VzdG9tID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5jdXN0b207XG4gICAgICAgIGlmICghdmFyaWFudCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVuZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNUYXJnZXRSZXNvbHZlcih2YXJpYW50KSkge1xuICAgICAgICAgICAgLy8gcmVzb2x2ZSBjdXJyZW50IGFuZCB2ZWxvY2l0eVxuICAgICAgICAgICAgdmFyaWFudCA9IHZhcmlhbnQoY3VzdG9tICE9PSBudWxsICYmIGN1c3RvbSAhPT0gdm9pZCAwID8gY3VzdG9tIDogdGhpcy5wcm9wcy5jdXN0b20sIGdldEN1cnJlbnQodGhpcy52aXN1YWxFbGVtZW50KSwgZ2V0VmVsb2NpdHkodGhpcy52aXN1YWxFbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9iID0gdmFyaWFudC50cmFuc2l0aW9uLCB0cmFuc2l0aW9uID0gX2IgPT09IHZvaWQgMCA/IHRoaXMuZGVmYXVsdFRyYW5zaXRpb24gOiBfYiwgdHJhbnNpdGlvbkVuZCA9IHZhcmlhbnQudHJhbnNpdGlvbkVuZCwgdGFyZ2V0ID0gX19yZXN0KHZhcmlhbnQsIFtcInRyYW5zaXRpb25cIiwgXCJ0cmFuc2l0aW9uRW5kXCJdKTtcbiAgICAgICAgcmV0dXJuIHsgdHJhbnNpdGlvbjogdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCwgdGFyZ2V0OiB0YXJnZXQgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaGlnaGVzdCBhY3RpdmUgb3ZlcnJpZGUgcHJpb3JpdHkgaW5kZXhcbiAgICAgKi9cbiAgICBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLmdldEhpZ2hlc3RQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZU92ZXJyaWRlcy5zaXplKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBfX3NwcmVhZChBcnJheS5mcm9tKHRoaXMuYWN0aXZlT3ZlcnJpZGVzKSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IGFuIG92ZXJyaWRlLiBXZSBhZGQgdGhpcyBsYXllciBvZiBpbmRpcmVjdGlvbiBzbyBpZiwgZm9yIGluc3RhbmNlLCBhIHRhcCBnZXN0dXJlXG4gICAgICogc3RhcnRzIGFuZCBvdmVycmlkZXMgYSBob3ZlciBnZXN0dXJlLCB3aGVuIHdlIGNsZWFyIHRoZSB0YXAgZ2VzdHVyZSBhbmQgZmFsbGJhY2sgdG8gdGhlXG4gICAgICogaG92ZXIgZ2VzdHVyZSwgaWYgdGhhdCBob3ZlciBnZXN0dXJlIGhhcyBjaGFuZ2VkIGluIHRoZSBtZWFudGltZSB3ZSBjYW4gZ28gdG8gdGhhdCByYXRoZXJcbiAgICAgKiB0aGFuIHRoZSBvbmUgdGhhdCB3YXMgcmVzb2x2ZWQgd2hlbiB0aGUgaG92ZXIgZ2VzdHVyZSBhbmltYXRpb24gc3RhcnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWZpbml0aW9uIC1cbiAgICAgKiBAcGFyYW0gb3ZlcnJpZGVJbmRleCAtXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zZXRPdmVycmlkZSA9IGZ1bmN0aW9uIChkZWZpbml0aW9uLCBvdmVycmlkZUluZGV4KSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVzW292ZXJyaWRlSW5kZXhdID0gZGVmaW5pdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuc2V0T3ZlcnJpZGUoZGVmaW5pdGlvbiwgb3ZlcnJpZGVJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RhcnQgYW4gb3ZlcnJpZGUgYW5pbWF0aW9uLlxuICAgICAqIEBwYXJhbSBvdmVycmlkZUluZGV4IC1cbiAgICAgKi9cbiAgICBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0T3ZlcnJpZGUgPSBmdW5jdGlvbiAob3ZlcnJpZGVJbmRleCkge1xuICAgICAgICB2YXIgb3ZlcnJpZGUgPSB0aGlzLm92ZXJyaWRlc1tvdmVycmlkZUluZGV4XTtcbiAgICAgICAgaWYgKG92ZXJyaWRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydChvdmVycmlkZSwgeyBwcmlvcml0eTogb3ZlcnJpZGVJbmRleCB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xlYXIgYW4gb3ZlcnJpZGUuIFdlIGNoZWNrIGV2ZXJ5IHZhbHVlIHdlIGFuaW1hdGVkIHRvIGluIHRoaXMgb3ZlcnJpZGUgdG8gc2VlIGlmXG4gICAgICogaXRzIHByZXNlbnQgb24gYW55IGxvd2VyLXByaW9yaXR5IG92ZXJyaWRlcy4gSWYgbm90LCB3ZSBhbmltYXRlIGl0IGJhY2sgdG8gaXRzIGJhc2UgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSBvdmVycmlkZUluZGV4IC1cbiAgICAgKi9cbiAgICBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLmNsZWFyT3ZlcnJpZGUgPSBmdW5jdGlvbiAob3ZlcnJpZGVJbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQuY2xlYXJPdmVycmlkZShvdmVycmlkZUluZGV4KTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG92ZXJyaWRlID0gdGhpcy5vdmVycmlkZXNbb3ZlcnJpZGVJbmRleF07XG4gICAgICAgIGlmICghb3ZlcnJpZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuYWN0aXZlT3ZlcnJpZGVzLmRlbGV0ZShvdmVycmlkZUluZGV4KTtcbiAgICAgICAgdmFyIGhpZ2hlc3QgPSB0aGlzLmdldEhpZ2hlc3RQcmlvcml0eSgpO1xuICAgICAgICB0aGlzLnJlc2V0SXNBbmltYXRpbmcoKTtcbiAgICAgICAgaWYgKGhpZ2hlc3QpIHtcbiAgICAgICAgICAgIHZhciBoaWdoZXN0T3ZlcnJpZGUgPSB0aGlzLm92ZXJyaWRlc1toaWdoZXN0XTtcbiAgICAgICAgICAgIGhpZ2hlc3RPdmVycmlkZSAmJiB0aGlzLnN0YXJ0T3ZlcnJpZGUoaGlnaGVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlndXJlIG91dCB3aGljaCByZW1haW5pbmcgdmFsdWVzIHdlcmUgYWZmZWN0ZWQgYnkgdGhlIG92ZXJyaWRlIGFuZCBhbmltYXRlIHRob3NlXG4gICAgICAgIHZhciBvdmVycmlkZVRhcmdldCA9IHRoaXMucmVzb2x2ZWRPdmVycmlkZXNbb3ZlcnJpZGVJbmRleF07XG4gICAgICAgIGlmICghb3ZlcnJpZGVUYXJnZXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciByZW1haW5pbmdWYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYmFzZVRhcmdldCkge1xuICAgICAgICAgICAgaWYgKG92ZXJyaWRlVGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1ZhbHVlc1trZXldID0gdGhpcy5iYXNlVGFyZ2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZShyZW1haW5pbmdWYWx1ZXMpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25Db21wbGV0ZSgpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgdGFyZ2V0L3ZhcmlhbnQgd2l0aG91dCBhbnkgYW5pbWF0aW9uXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBseVZhcmlhbnRMYWJlbHMoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRlZmluaXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGx5VmFyaWFudExhYmVscyhbZGVmaW5pdGlvbl0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGx5IHZhcmlhbnQgbGFiZWxzIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5hcHBseVZhcmlhbnRMYWJlbHMgPSBmdW5jdGlvbiAodmFyaWFudExhYmVsTGlzdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaXNBY3RpdmUgPSBuZXcgU2V0KCk7XG4gICAgICAgIHZhciByZXZlcnNlZExpc3QgPSBfX3NwcmVhZCh2YXJpYW50TGFiZWxMaXN0KS5yZXZlcnNlKCk7XG4gICAgICAgIHJldmVyc2VkTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnJlc29sdmVWYXJpYW50KF90aGlzLnZhcmlhbnRzW2tleV0pLCB0YXJnZXQgPSBfYS50YXJnZXQsIHRyYW5zaXRpb25FbmQgPSBfYS50cmFuc2l0aW9uRW5kO1xuICAgICAgICAgICAgdGFyZ2V0ICYmIF90aGlzLnNldFZhbHVlcyh0YXJnZXQsIHsgaXNBY3RpdmU6IGlzQWN0aXZlIH0pO1xuICAgICAgICAgICAgdHJhbnNpdGlvbkVuZCAmJiBfdGhpcy5zZXRWYWx1ZXModHJhbnNpdGlvbkVuZCwgeyBpc0FjdGl2ZTogaXNBY3RpdmUgfSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY2hpbGRyZW4gJiYgX3RoaXMuY2hpbGRyZW4uc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5hcHBseVZhcmlhbnRMYWJlbHModmFyaWFudExhYmVsTGlzdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChkZWZpbml0aW9uLCBvcHRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIGlmIChvcHRzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU92ZXJyaWRlcy5hZGQob3B0cy5wcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldElzQW5pbWF0aW5nKG9wdHMucHJpb3JpdHkpO1xuICAgICAgICB2YXIgYW5pbWF0aW9uO1xuICAgICAgICBpZiAoaXNWYXJpYW50TGFiZWxzKGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgICBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGVWYXJpYW50TGFiZWxzKGRlZmluaXRpb24sIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGVWYXJpYW50KGRlZmluaXRpb24sIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRlKGRlZmluaXRpb24sIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TdGFydCgpO1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25Db21wbGV0ZSgpOyB9KTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIChhbmltYXRpb25EZWZpbml0aW9uLCBfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoX2EgPT09IHZvaWQgMCkgeyBfYSA9IHt9OyB9XG4gICAgICAgIHZhciBfYiA9IF9hLmRlbGF5LCBkZWxheSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIF9jID0gX2EucHJpb3JpdHksIHByaW9yaXR5ID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYywgdHJhbnNpdGlvbk92ZXJyaWRlID0gX2EudHJhbnNpdGlvbk92ZXJyaWRlLCBvcHRzID0gX19yZXN0KF9hLCBbXCJkZWxheVwiLCBcInByaW9yaXR5XCIsIFwidHJhbnNpdGlvbk92ZXJyaWRlXCJdKTtcbiAgICAgICAgdmFyIF9kID0gdGhpcy5yZXNvbHZlVmFyaWFudChhbmltYXRpb25EZWZpbml0aW9uLCBvcHRzKSwgdGFyZ2V0ID0gX2QudGFyZ2V0LCB0cmFuc2l0aW9uID0gX2QudHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCA9IF9kLnRyYW5zaXRpb25FbmQ7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uT3ZlcnJpZGUpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uT3ZlcnJpZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRhcmdldCA9IHRoaXMudHJhbnNmb3JtVmFsdWVzKHRhcmdldCk7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uRW5kKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uRW5kID0gdGhpcy50cmFuc2Zvcm1WYWx1ZXModHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja0Zvck5ld1ZhbHVlcyh0YXJnZXQpO1xuICAgICAgICB2YXIgb3JpZ2luID0gdGhpcy50cmFuc2Zvcm1WYWx1ZXMoZ2V0T3JpZ2luKHRhcmdldCwgdHJhbnNpdGlvbiwgdGhpcy52aXN1YWxFbGVtZW50KSk7XG4gICAgICAgIGlmICh0aGlzLm1ha2VUYXJnZXRBbmltYXRhYmxlKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0YWJsZSA9IHRoaXMubWFrZVRhcmdldEFuaW1hdGFibGUodGhpcy52aXN1YWxFbGVtZW50LCB0YXJnZXQsIG9yaWdpbiwgdHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbmQgPSBhbmltYXRhYmxlLnRyYW5zaXRpb25FbmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVkT3ZlcnJpZGVzW3ByaW9yaXR5XSA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrRm9yTmV3VmFsdWVzKHRhcmdldCk7XG4gICAgICAgIHZhciBhbmltYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmlzdWFsRWxlbWVudC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdGFyZ2V0IHx8IHRhcmdldFtrZXldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdmFsdWVUYXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgIGlmICghcHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VUYXJnZXRba2V5XSA9IHJlc29sdmVGaW5hbFZhbHVlSW5LZXlmcmFtZXModmFsdWVUYXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpbmcuaGFzKGtleSkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nLmFkZChrZXkpO1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKHN0YXJ0QW5pbWF0aW9uKGtleSwgdmFsdWUsIHZhbHVlVGFyZ2V0LCBfX2Fzc2lnbih7IGRlbGF5OiBkZWxheSB9LCB0cmFuc2l0aW9uKSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbGxBbmltYXRpb25zID0gUHJvbWlzZS5hbGwoYW5pbWF0aW9ucyk7XG4gICAgICAgIHJldHVybiB0cmFuc2l0aW9uRW5kXG4gICAgICAgICAgICA/IGFsbEFuaW1hdGlvbnMudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0VmFsdWVzKHRyYW5zaXRpb25FbmQsIHsgcHJpb3JpdHk6IHByaW9yaXR5IH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogYWxsQW5pbWF0aW9ucztcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuYW5pbWF0ZVZhcmlhbnRMYWJlbHMgPSBmdW5jdGlvbiAodmFyaWFudExhYmVscywgb3B0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IF9fc3ByZWFkKHZhcmlhbnRMYWJlbHMpLnJldmVyc2UoKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGFiZWwpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVWYXJpYW50KGxhYmVsLCBvcHRzKTsgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChhbmltYXRpb25zKTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuYW5pbWF0ZVZhcmlhbnQgPSBmdW5jdGlvbiAodmFyaWFudExhYmVsLCBvcHRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcmlvcml0eSA9IChvcHRzICYmIG9wdHMucHJpb3JpdHkpIHx8IDA7XG4gICAgICAgIHZhciB2YXJpYW50ID0gdGhpcy52YXJpYW50c1t2YXJpYW50TGFiZWxdO1xuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHZhcmlhbnRcbiAgICAgICAgICAgID8gdGhpcy5yZXNvbHZlVmFyaWFudCh2YXJpYW50LCBvcHRzKS50cmFuc2l0aW9uIHx8IHt9XG4gICAgICAgICAgICA6IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgd2UgaGF2ZSBhIHZhcmlhbnQsIGNyZWF0ZSBhIGNhbGxiYWNrIHRoYXQgcnVucyBpdCBhcyBhbiBhbmltYXRpb24uXG4gICAgICAgICAqIE90aGVyd2lzZSwgd2UgcmVzb2x2ZSBhIFByb21pc2UgaW1tZWRpYXRlbHkgZm9yIGEgY29tcG9zYWJsZSBuby1vcC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBnZXRBbmltYXRpb24gPSB2YXJpYW50XG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGUodmFyaWFudCwgb3B0cyk7IH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB3ZSBoYXZlIGNoaWxkcmVuLCBjcmVhdGUgYSBjYWxsYmFjayB0aGF0IHJ1bnMgYWxsIHRoZWlyIGFuaW1hdGlvbnMuXG4gICAgICAgICAqIE90aGVyd2lzZSwgd2UgcmVzb2x2ZSBhIFByb21pc2UgaW1tZWRpYXRlbHkgZm9yIGEgY29tcG9zYWJsZSBuby1vcC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBnZXRDaGlsZHJlbkFuaW1hdGlvbnMgPSB0aGlzLmNoaWxkcmVuXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChmb3J3YXJkRGVsYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9yd2FyZERlbGF5ID09PSB2b2lkIDApIHsgZm9yd2FyZERlbGF5ID0gMDsgfVxuICAgICAgICAgICAgICAgIHZhciBfYSA9IHRyYW5zaXRpb24uZGVsYXlDaGlsZHJlbiwgZGVsYXlDaGlsZHJlbiA9IF9hID09PSB2b2lkIDAgPyAwIDogX2E7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFuaW1hdGVDaGlsZHJlbih2YXJpYW50TGFiZWwsIGRlbGF5Q2hpbGRyZW4gKyBmb3J3YXJkRGVsYXksIHRyYW5zaXRpb24uc3RhZ2dlckNoaWxkcmVuLCB0cmFuc2l0aW9uLnN0YWdnZXJEaXJlY3Rpb24sIHByaW9yaXR5LCBvcHRzID09PSBudWxsIHx8IG9wdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdHMuY3VzdG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgdHJhbnNpdGlvbiBleHBsaWNpdGx5IGRlZmluZXMgYSBcIndoZW5cIiBvcHRpb24sIHdlIG5lZWQgdG8gcmVzb2x2ZSBlaXRoZXJcbiAgICAgICAgICogdGhpcyBhbmltYXRpb24gb3IgYWxsIGNoaWxkcmVuIGFuaW1hdGlvbnMgYmVmb3JlIHBsYXlpbmcgdGhlIG90aGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHdoZW4gPSB0cmFuc2l0aW9uLndoZW47XG4gICAgICAgIGlmICh3aGVuKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQod2hlbiA9PT0gXCJiZWZvcmVDaGlsZHJlblwiXG4gICAgICAgICAgICAgICAgPyBbZ2V0QW5pbWF0aW9uLCBnZXRDaGlsZHJlbkFuaW1hdGlvbnNdXG4gICAgICAgICAgICAgICAgOiBbZ2V0Q2hpbGRyZW5BbmltYXRpb25zLCBnZXRBbmltYXRpb25dLCAyKSwgZmlyc3QgPSBfYVswXSwgbGFzdCA9IF9hWzFdO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0KCkudGhlbihsYXN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZ2V0QW5pbWF0aW9uKCksXG4gICAgICAgICAgICAgICAgZ2V0Q2hpbGRyZW5BbmltYXRpb25zKG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy5kZWxheSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5hbmltYXRlQ2hpbGRyZW4gPSBmdW5jdGlvbiAodmFyaWFudExhYmVsLCBkZWxheUNoaWxkcmVuLCBzdGFnZ2VyQ2hpbGRyZW4sIHN0YWdnZXJEaXJlY3Rpb24sIHByaW9yaXR5LCBjdXN0b20pIHtcbiAgICAgICAgaWYgKGRlbGF5Q2hpbGRyZW4gPT09IHZvaWQgMCkgeyBkZWxheUNoaWxkcmVuID0gMDsgfVxuICAgICAgICBpZiAoc3RhZ2dlckNoaWxkcmVuID09PSB2b2lkIDApIHsgc3RhZ2dlckNoaWxkcmVuID0gMDsgfVxuICAgICAgICBpZiAoc3RhZ2dlckRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7IHN0YWdnZXJEaXJlY3Rpb24gPSAxOyB9XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gdm9pZCAwKSB7IHByaW9yaXR5ID0gMDsgfVxuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgbWF4U3RhZ2dlckR1cmF0aW9uID0gKHRoaXMuY2hpbGRyZW4uc2l6ZSAtIDEpICogc3RhZ2dlckNoaWxkcmVuO1xuICAgICAgICB2YXIgZ2VuZXJhdGVTdGFnZ2VyRHVyYXRpb24gPSBzdGFnZ2VyRGlyZWN0aW9uID09PSAxXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpICogc3RhZ2dlckNoaWxkcmVuOyB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBtYXhTdGFnZ2VyRHVyYXRpb24gLSBpICogc3RhZ2dlckNoaWxkcmVuOyB9O1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkQ29udHJvbHMsIGkpIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBjaGlsZENvbnRyb2xzLmFuaW1hdGVWYXJpYW50KHZhcmlhbnRMYWJlbCwge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgICAgICBkZWxheTogZGVsYXlDaGlsZHJlbiArIGdlbmVyYXRlU3RhZ2dlckR1cmF0aW9uKGkpLFxuICAgICAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChhbmltYXRpb25zKTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9uQW5pbWF0aW9uU3RhcnQgPSB0aGlzLnByb3BzLm9uQW5pbWF0aW9uU3RhcnQ7XG4gICAgICAgIG9uQW5pbWF0aW9uU3RhcnQgJiYgb25BbmltYXRpb25TdGFydCgpO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25BbmltYXRpb25Db21wbGV0ZSA9IHRoaXMucHJvcHMub25BbmltYXRpb25Db21wbGV0ZTtcbiAgICAgICAgb25BbmltYXRpb25Db21wbGV0ZSAmJiBvbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLmNoZWNrT3ZlcnJpZGVJc0FuaW1hdGluZyA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgICAgICB2YXIgbnVtT3ZlcnJpZGVzID0gdGhpcy5vdmVycmlkZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gcHJpb3JpdHkgKyAxOyBpIDwgbnVtT3ZlcnJpZGVzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlZE92ZXJyaWRlID0gdGhpcy5yZXNvbHZlZE92ZXJyaWRlc1tpXTtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZE92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHJlc29sdmVkT3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGluZy5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUucmVzZXRJc0FuaW1hdGluZyA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IHZvaWQgMCkgeyBwcmlvcml0eSA9IDA7IH1cbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZy5jbGVhcigpO1xuICAgICAgICAvLyBJZiB0aGlzIGlzbid0IHRoZSBoaWdoZXN0IHByaW9yaXR5IGdlc3R1cmUsIGJsb2NrIHRoZSBhbmltYXRpb25cbiAgICAgICAgLy8gb2YgYW55dGhpbmcgdGhhdCdzIGN1cnJlbnRseSBiZWluZyBhbmltYXRlZFxuICAgICAgICBpZiAocHJpb3JpdHkgPCB0aGlzLmdldEhpZ2hlc3RQcmlvcml0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrT3ZlcnJpZGVJc0FuaW1hdGluZyhwcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJlc2V0SXNBbmltYXRpbmcocHJpb3JpdHkpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpc3VhbEVsZW1lbnQuZm9yRWFjaFZhbHVlKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUuc3RvcCgpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgY29udHJvbHMgb2YgYSBjaGlsZCBjb21wb25lbnQuXG4gICAgICogQHBhcmFtIGNvbnRyb2xzIC1cbiAgICAgKi9cbiAgICBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNvbnRyb2xzKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLmFkZChjb250cm9scyk7XG4gICAgICAgIC8vIFdlIHNldCBjaGlsZCBvdmVycmlkZXMgd2hlbiBgc2V0T3ZlcnJpZGVgIGlzIGNhbGxlZCwgYnV0IGFsc28gaGF2ZSB0byBkbyBpdCBoZXJlXG4gICAgICAgIC8vIGFzIHRoZSBmaXJzdCB0aW1lIGBzZXRPdmVycmlkZWAgaXMgY2FsbGVkIGFsbCB0aGUgY2hpbGRyZW4gbWlnaHQgbm90IGhhdmUgYmVlbiBhZGRlZCB5ZXQuXG4gICAgICAgIHRoaXMub3ZlcnJpZGVzLmZvckVhY2goZnVuY3Rpb24gKG92ZXJyaWRlLCBpKSB7XG4gICAgICAgICAgICBvdmVycmlkZSAmJiBjb250cm9scy5zZXRPdmVycmlkZShvdmVycmlkZSwgaSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjb250cm9scykge1xuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZShjb250cm9scyk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLnJlc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuKVxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5jbGVhcigpO1xuICAgIH07XG4gICAgcmV0dXJuIFZpc3VhbEVsZW1lbnRBbmltYXRpb25Db250cm9scztcbn0oKSk7XG5mdW5jdGlvbiBnZXRPcmlnaW5Gcm9tVHJhbnNpdGlvbihrZXksIHRyYW5zaXRpb24pIHtcbiAgICBpZiAoIXRyYW5zaXRpb24pXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgdmFsdWVUcmFuc2l0aW9uID0gdHJhbnNpdGlvbltrZXldIHx8IHRyYW5zaXRpb25bXCJkZWZhdWx0XCJdIHx8IHRyYW5zaXRpb247XG4gICAgcmV0dXJuIHZhbHVlVHJhbnNpdGlvbi5mcm9tO1xufVxuZnVuY3Rpb24gZ2V0T3JpZ2luKHRhcmdldCwgdHJhbnNpdGlvbiwgdmlzdWFsRWxlbWVudCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIG9yaWdpbiA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgb3JpZ2luW2tleV0gPSAoX2EgPSBnZXRPcmlnaW5Gcm9tVHJhbnNpdGlvbihrZXksIHRyYW5zaXRpb24pKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IgPSB2aXN1YWxFbGVtZW50LmdldFZhbHVlKGtleSkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yaWdpbjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGltcGVyYXRpdmUgc2V0IG9mIGNvbnRyb2xzIHRvIHRyaWdnZXIgYW5pbWF0aW9ucy5cbiAqXG4gKiBUaGlzIGFsbG93cyBhIGNvbnNvbGlkYXRlZCwgdW5pZm9ybSBBUEkgZm9yIGFuaW1hdGlvbnMsIHRvIGJlIHRyaWdnZXJlZCBieSBvdGhlciBBUElzIGxpa2UgdGhlIGBhbmltYXRlYCBwcm9wLCBvciB0aGUgZ2VzdHVyZSBoYW5kbGVycy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdXNlVmlzdWFsRWxlbWVudEFuaW1hdGlvbih2aXN1YWxFbGVtZW50LCBwcm9wcywgY29uZmlnKSB7XG4gICAgdmFyIHN1YnNjcmliZVRvUGFyZW50Q29udHJvbHMgPSBjaGVja1Nob3VsZEluaGVyaXRWYXJpYW50KHByb3BzKTtcbiAgICB2YXIgdmFyaWFudHMgPSBwcm9wcy52YXJpYW50cywgdHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb247XG4gICAgdmFyIHBhcmVudENvbnRyb2xzID0gdXNlQ29udGV4dChNb3Rpb25Db250ZXh0KS5jb250cm9scztcbiAgICB2YXIgcHJlc2VuY2VDb250ZXh0ID0gdXNlQ29udGV4dChQcmVzZW5jZUNvbnRleHQpO1xuICAgIHZhciBjb250cm9scyA9IHVzZUNvbnN0YW50KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHModmlzdWFsRWxlbWVudCwgY29uZmlnKTsgfSk7XG4gICAgLy8gUmVzZXQgYW5kIHJlc3Vic2NyaWJlIGNoaWxkcmVuIGV2ZXJ5IHJlbmRlciB0byBlbnN1cmUgc3RhZ2dlciBvcmRlciBpcyBjb3JyZWN0XG4gICAgaWYgKCFwcmVzZW5jZUNvbnRleHQgfHwgcHJlc2VuY2VDb250ZXh0LmlzUHJlc2VudCkge1xuICAgICAgICBjb250cm9scy5yZXNldENoaWxkcmVuKCk7XG4gICAgICAgIGNvbnRyb2xzLnNldFByb3BzKHByb3BzKTtcbiAgICAgICAgY29udHJvbHMuc2V0VmFyaWFudHModmFyaWFudHMpO1xuICAgICAgICBjb250cm9scy5zZXREZWZhdWx0VHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICB9XG4gICAgLy8gV2UgaGF2ZSB0byBzdWJzY3JpYmUgdG8gdGhlIHBhcmVudCBjb250cm9scyB3aXRoaW4gYSB1c2VFZmZlY3QgcmF0aGVyIHRoYW4gZHVyaW5nIHJlbmRlcixcbiAgICAvLyBhc1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmVUb1BhcmVudENvbnRyb2xzICYmIHBhcmVudENvbnRyb2xzKSB7XG4gICAgICAgICAgICBwYXJlbnRDb250cm9scy5hZGRDaGlsZChjb250cm9scyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHJlZmVyZW5jZSB0byBvbkFuaW1hdGlvbkNvbXBsZXRlIGZyb20gY29udHJvbHMuIEFsbCB0aGUgTW90aW9uVmFsdWVzXG4gICAgICAgICAgICAvLyBhcmUgdW5zdWJzY3JpYmVkIGZyb20gdGhpcyBjb21wb25lbnQgc2VwYXJhdGVseS4gV2UgbGV0IGFuaW1hdGlvbnMgcnVuIG91dFxuICAgICAgICAgICAgLy8gYXMgdGhleSBtaWdodCBiZSBhbmltYXRpbmcgb3RoZXIgY29tcG9uZW50cy5cbiAgICAgICAgICAgIHZhciBvbkFuaW1hdGlvbkNvbXBsZXRlID0gcHJvcHMub25BbmltYXRpb25Db21wbGV0ZSwgdW5tb3VudFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJvbkFuaW1hdGlvbkNvbXBsZXRlXCJdKTtcbiAgICAgICAgICAgIGNvbnRyb2xzLnNldFByb3BzKHVubW91bnRQcm9wcyk7XG4gICAgICAgICAgICBwYXJlbnRDb250cm9scyAmJiBwYXJlbnRDb250cm9scy5yZW1vdmVDaGlsZChjb250cm9scyk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBjb250cm9scztcbn1cblxuLyoqXG4gKiBAcHVibGljXG4gKi9cbnZhciBNb3Rpb25Db25maWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgdHJhbnNmb3JtUGFnZVBvaW50OiBmdW5jdGlvbiAocCkgeyByZXR1cm4gcDsgfSxcbiAgICBmZWF0dXJlczogW10sXG59KTtcbi8qKlxuICogTW90aW9uQ29uZmlnIGNhbiBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIGBtYCBjb21wb25lbnQgdG8gY3V0IGJ1bmRsZSBzaXplXG4gKiBhbmQgZHluYW1pY2FsbHkgbG9hZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgdXNlLlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHtcbiAqICAgbSBhcyBtb3Rpb24sXG4gKiAgIEFuaW1hdGlvbkZlYXR1cmUsXG4gKiAgIE1vdGlvbkNvbmZpZ1xuICogfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG4gKlxuICogZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8TW90aW9uQ29uZmlnIGZlYXR1cmVzPXtbQW5pbWF0aW9uRmVhdHVyZV19PlxuICogICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17eyB4OiAxMDAgfX0gLz5cbiAqICAgICA8L01vdGlvbkNvbmZpZz5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBNb3Rpb25Db25maWcoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgX2IgPSBfYS5mZWF0dXJlcywgZmVhdHVyZXMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiZmVhdHVyZXNcIl0pO1xuICAgIHZhciBwbHVnaW5Db250ZXh0ID0gdXNlQ29udGV4dChNb3Rpb25Db25maWdDb250ZXh0KTtcbiAgICB2YXIgbG9hZGVkRmVhdHVyZXMgPSBfX3NwcmVhZChwbHVnaW5Db250ZXh0LmZlYXR1cmVzLCBmZWF0dXJlcyk7XG4gICAgLy8gV2UgZG8gd2FudCB0byByZXJlbmRlciBjaGlsZHJlbiB3aGVuIHRoZSBudW1iZXIgb2YgbG9hZGVkIGZlYXR1cmVzIGNoYW5nZXNcbiAgICB2YXIgdmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGZlYXR1cmVzOiBsb2FkZWRGZWF0dXJlcyB9KTsgfSwgW1xuICAgICAgICBsb2FkZWRGZWF0dXJlcy5sZW5ndGgsXG4gICAgXSk7XG4gICAgLy8gTXV0YXRpdmUgdG8gcHJldmVudCB0cmlnZ2VyaW5nIHJlcmVuZGVycyBpbiBhbGwgbGlzdGVuaW5nXG4gICAgLy8gY29tcG9uZW50cyBldmVyeSB0aW1lIHRoaXMgY29tcG9uZW50IHJlbmRlcnNcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgdmFsdWVba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChNb3Rpb25Db25maWdDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB2YWx1ZSB9LCBjaGlsZHJlbikpO1xufVxuXG4vKipcbiAqIExvYWQgZmVhdHVyZXMgdmlhIHJlbmRlcmxlc3MgY29tcG9uZW50cyBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgTW90aW9uUHJvcHNcbiAqL1xuZnVuY3Rpb24gdXNlRmVhdHVyZXMoZGVmYXVsdEZlYXR1cmVzLCBpc1N0YXRpYywgdmlzdWFsRWxlbWVudCwgY29udHJvbHMsIHByb3BzLCBjb250ZXh0LCBwYXJlbnRDb250ZXh0LCBzaG91bGRJbmhlcml0VmFyaWFudCkge1xuICAgIHZhciBwbHVnaW5zID0gdXNlQ29udGV4dChNb3Rpb25Db25maWdDb250ZXh0KTtcbiAgICAvLyBJZiB0aGlzIGlzIGEgc3RhdGljIGNvbXBvbmVudCwgb3Igd2UncmUgcmVuZGVyaW5nIG9uIHRoZSBzZXJ2ZXIsIHdlIGRvbid0IGxvYWRcbiAgICAvLyBhbnkgZmVhdHVyZSBjb21wb25lbnRzXG4gICAgaWYgKGlzU3RhdGljIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHZhciBhbGxGZWF0dXJlcyA9IF9fc3ByZWFkKGRlZmF1bHRGZWF0dXJlcywgcGx1Z2lucy5mZWF0dXJlcyk7XG4gICAgdmFyIG51bUZlYXR1cmVzID0gYWxsRmVhdHVyZXMubGVuZ3RoO1xuICAgIHZhciBmZWF0dXJlcyA9IFtdO1xuICAgIC8vIERlY2lkZSB3aGljaCBmZWF0dXJlcyB3ZSBzaG91bGQgcmVuZGVyIGFuZCBhZGQgdGhlbSB0byB0aGUgcmV0dXJuZWQgYXJyYXlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUZlYXR1cmVzOyBpKyspIHtcbiAgICAgICAgdmFyIF9hID0gYWxsRmVhdHVyZXNbaV0sIHNob3VsZFJlbmRlciA9IF9hLnNob3VsZFJlbmRlciwga2V5ID0gX2Eua2V5LCBnZXRDb21wb25lbnQgPSBfYS5nZXRDb21wb25lbnQ7XG4gICAgICAgIGlmIChzaG91bGRSZW5kZXIocHJvcHMsIHBhcmVudENvbnRleHQpKSB7XG4gICAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHByb3BzKTtcbiAgICAgICAgICAgIENvbXBvbmVudCAmJlxuICAgICAgICAgICAgICAgIGZlYXR1cmVzLnB1c2goY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9fYXNzaWduKHsga2V5OiBrZXkgfSwgcHJvcHMsIHsgbG9jYWxDb250ZXh0OiBjb250ZXh0LCBwYXJlbnRDb250ZXh0OiBwYXJlbnRDb250ZXh0LCB2aXN1YWxFbGVtZW50OiB2aXN1YWxFbGVtZW50LCBjb250cm9sczogY29udHJvbHMsIGluaGVyaXQ6IHNob3VsZEluaGVyaXRWYXJpYW50IH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVzO1xufVxuXG52YXIgUHJlc2VuY2U7XG4oZnVuY3Rpb24gKFByZXNlbmNlKSB7XG4gICAgUHJlc2VuY2VbUHJlc2VuY2VbXCJFbnRlcmluZ1wiXSA9IDBdID0gXCJFbnRlcmluZ1wiO1xuICAgIFByZXNlbmNlW1ByZXNlbmNlW1wiUHJlc2VudFwiXSA9IDFdID0gXCJQcmVzZW50XCI7XG4gICAgUHJlc2VuY2VbUHJlc2VuY2VbXCJFeGl0aW5nXCJdID0gMl0gPSBcIkV4aXRpbmdcIjtcbn0pKFByZXNlbmNlIHx8IChQcmVzZW5jZSA9IHt9KSk7XG52YXIgVmlzaWJpbGl0eUFjdGlvbjtcbihmdW5jdGlvbiAoVmlzaWJpbGl0eUFjdGlvbikge1xuICAgIFZpc2liaWxpdHlBY3Rpb25bVmlzaWJpbGl0eUFjdGlvbltcIkhpZGVcIl0gPSAwXSA9IFwiSGlkZVwiO1xuICAgIFZpc2liaWxpdHlBY3Rpb25bVmlzaWJpbGl0eUFjdGlvbltcIlNob3dcIl0gPSAxXSA9IFwiU2hvd1wiO1xufSkoVmlzaWJpbGl0eUFjdGlvbiB8fCAoVmlzaWJpbGl0eUFjdGlvbiA9IHt9KSk7XG5cbi8qKlxuICogRGVmYXVsdCBoYW5kbGVycyBmb3IgYmF0Y2hpbmcgVmlzdWFsRWxlbWVudHNcbiAqL1xudmFyIGRlZmF1bHRIYW5kbGVyID0ge1xuICAgIG1lYXN1cmVMYXlvdXQ6IGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQubWVhc3VyZUxheW91dCgpOyB9LFxuICAgIGxheW91dFJlYWR5OiBmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmxheW91dFJlYWR5KCk7IH0sXG59O1xuLyoqXG4gKiBTb3J0IFZpc3VhbEVsZW1lbnRzIGJ5IHRyZWUgZGVwdGgsIHNvIHdlIHByb2Nlc3MgdGhlIGhpZ2hlc3QgZWxlbWVudHMgZmlyc3QuXG4gKi9cbnZhciBzb3J0QnlEZXB0aCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEuZGVwdGggLSBiLmRlcHRoO1xufTtcbi8qKlxuICogQ3JlYXRlIGEgYmF0Y2hlciB0byBwcm9jZXNzIFZpc3VhbEVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhdGNoZXIoKSB7XG4gICAgdmFyIHF1ZXVlID0gbmV3IFNldCgpO1xuICAgIHZhciBhZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHF1ZXVlLmFkZChjaGlsZCk7IH07XG4gICAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyBkZWZhdWx0SGFuZGxlciA6IF9hLCBtZWFzdXJlTGF5b3V0ID0gX2IubWVhc3VyZUxheW91dCwgbGF5b3V0UmVhZHkgPSBfYi5sYXlvdXRSZWFkeTtcbiAgICAgICAgdmFyIG9yZGVyID0gQXJyYXkuZnJvbShxdWV1ZSkuc29ydChzb3J0QnlEZXB0aCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcml0ZTogUmVzZXQgYW55IHRyYW5zZm9ybXMgb24gY2hpbGRyZW4gZWxlbWVudHMgc28gd2UgY2FuIHJlYWQgdGhlaXIgYWN0dWFsIGxheW91dFxuICAgICAgICAgKi9cbiAgICAgICAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJlc2V0VHJhbnNmb3JtKCk7IH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZDogTWVhc3VyZSB0aGUgYWN0dWFsIGxheW91dFxuICAgICAgICAgKi9cbiAgICAgICAgb3JkZXIuZm9yRWFjaChtZWFzdXJlTGF5b3V0KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlOiBOb3RpZnkgdGhlIFZpc3VhbEVsZW1lbnRzIHRoZXkncmUgcmVhZHkgZm9yIGZ1cnRoZXIgd3JpdGUgb3BlcmF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIG9yZGVyLmZvckVhY2gobGF5b3V0UmVhZHkpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWZ0ZXIgYWxsIGNoaWxkcmVuIGhhdmUgc3RhcnRlZCBhbmltYXRpbmcsIGVuc3VyZSBhbnkgRW50ZXJpbmcgY29tcG9uZW50cyBhcmUgc2V0IHRvIFByZXNlbnQuXG4gICAgICAgICAqIElmIHdlIGFkZCBkZWZlcnJlZCBhbmltYXRpb25zIChzZXQgdXAgYWxsIGFuaW1hdGlvbnMgYW5kIHRoZW4gc3RhcnQgdGhlbSBpbiB0d28gbG9vcHMpIHRoaXNcbiAgICAgICAgICogY291bGQgYmUgbW92ZWQgdG8gdGhlIHN0YXJ0IGxvb3AuIEJ1dCBpdCBuZWVkcyB0byBoYXBwZW4gYWZ0ZXIgYWxsIHRoZSBhbmltYXRpb25zIGNvbmZpZ3NcbiAgICAgICAgICogYXJlIGdlbmVyYXRlZCBpbiBBbmltYXRlU2hhcmVkTGF5b3V0IGFzIHRoaXMgcmVsaWVzIG9uIHByZXNlbmNlIGRhdGFcbiAgICAgICAgICovXG4gICAgICAgIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuaXNQcmVzZW50KVxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXNlbmNlID0gUHJlc2VuY2UuUHJlc2VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHF1ZXVlLmNsZWFyKCk7XG4gICAgfTtcbiAgICByZXR1cm4geyBhZGQ6IGFkZCwgZmx1c2g6IGZsdXNoIH07XG59XG5mdW5jdGlvbiBpc1NoYXJlZExheW91dChjb250ZXh0KSB7XG4gICAgcmV0dXJuICEhY29udGV4dC5mb3JjZVVwZGF0ZTtcbn1cbnZhciBTaGFyZWRMYXlvdXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjcmVhdGVCYXRjaGVyKCkpO1xuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gaXNCcm93c2VyID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG5mdW5jdGlvbiB1c2VTbmFwc2hvdE9uVW5tb3VudCh2aXN1YWxFbGVtZW50KSB7XG4gICAgdmFyIHN5bmNMYXlvdXQgPSB1c2VDb250ZXh0KFNoYXJlZExheW91dENvbnRleHQpO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNTaGFyZWRMYXlvdXQoc3luY0xheW91dCkpIHtcbiAgICAgICAgICAgIHN5bmNMYXlvdXQucmVtb3ZlKHZpc3VhbEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTsgfSwgW10pO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBtb3Rpb25gIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBDb21wb25lbnQgYXJndW1lbnQsIHdoaWNoIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgKGllIFwiZGl2XCJcbiAqIGZvciBgbW90aW9uLmRpdmApLCBvciBhbiBhY3R1YWwgUmVhY3QgY29tcG9uZW50LlxuICpcbiAqIEFsb25nc2lkZSB0aGlzIGlzIGEgY29uZmlnIG9wdGlvbiB3aGljaCBwcm92aWRlcyBhIHdheSBvZiByZW5kZXJpbmcgdGhlIHByb3ZpZGVkXG4gKiBjb21wb25lbnQgXCJvZmZsaW5lXCIsIG9yIG91dHNpZGUgdGhlIFJlYWN0IHJlbmRlciBjeWNsZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTW90aW9uQ29tcG9uZW50KENvbXBvbmVudCwgX2EpIHtcbiAgICB2YXIgZGVmYXVsdEZlYXR1cmVzID0gX2EuZGVmYXVsdEZlYXR1cmVzLCB1c2VWaXN1YWxFbGVtZW50ID0gX2EudXNlVmlzdWFsRWxlbWVudCwgcmVuZGVyID0gX2EucmVuZGVyLCBhbmltYXRpb25Db250cm9sc0NvbmZpZyA9IF9hLmFuaW1hdGlvbkNvbnRyb2xzQ29uZmlnO1xuICAgIGZ1bmN0aW9uIE1vdGlvbkNvbXBvbmVudChwcm9wcywgZXh0ZXJuYWxSZWYpIHtcbiAgICAgICAgdmFyIHBhcmVudENvbnRleHQgPSB1c2VDb250ZXh0KE1vdGlvbkNvbnRleHQpO1xuICAgICAgICB2YXIgc2hvdWxkSW5oZXJpdFZhcmlhbnQgPSBjaGVja1Nob3VsZEluaGVyaXRWYXJpYW50KHByb3BzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgY29tcG9uZW50IGlzU3RhdGljLCB3ZSBvbmx5IHZpc3VhbGx5IHVwZGF0ZSBpdCBhcyBhXG4gICAgICAgICAqIHJlc3VsdCBvZiBhIFJlYWN0IHJlLXJlbmRlciwgcmF0aGVyIHRoYW4gYW55IGludGVyYWN0aW9ucyBvciBhbmltYXRpb25zLlxuICAgICAgICAgKiBJZiB0aGlzIGNvbXBvbmVudCBvciBhbnkgYW5jZXN0b3IgaXNTdGF0aWMsIHdlIGRpc2FibGUgaGFyZHdhcmUgYWNjZWxlcmF0aW9uXG4gICAgICAgICAqIGFuZCBkb24ndCBsb2FkIGFueSBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaXNTdGF0aWMgPSBwYXJlbnRDb250ZXh0LnN0YXRpYyB8fCBwcm9wcy5zdGF0aWMgfHwgZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBWaXN1YWxFbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudC4gQSBWaXN1YWxFbGVtZW50IHByb3ZpZGVzIGEgY29tbW9uXG4gICAgICAgICAqIGludGVyZmFjZSB0byByZW5kZXJlci1zcGVjaWZpYyBBUElzIChpZSBET00vVGhyZWUuanMgZXRjKSBhcyB3ZWxsIGFzXG4gICAgICAgICAqIHByb3ZpZGluZyBhIHdheSBvZiByZW5kZXJpbmcgdG8gdGhlc2UgQVBJcyBvdXRzaWRlIG9mIHRoZSBSZWFjdCByZW5kZXIgbG9vcFxuICAgICAgICAgKiBmb3IgbW9yZSBwZXJmb3JtYW50IGFuaW1hdGlvbnMgYW5kIGludGVyYWN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHZpc3VhbEVsZW1lbnQgPSB1c2VWaXN1YWxFbGVtZW50KENvbXBvbmVudCwgcHJvcHMsIHBhcmVudENvbnRleHQudmlzdWFsRWxlbWVudCwgaXNTdGF0aWMsIGV4dGVybmFsUmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNjcmFwZSBNb3Rpb25WYWx1ZXMgZnJvbSBwcm9wcyBhbmQgYWRkL3JlbW92ZSB0aGVtIHRvL2Zyb21cbiAgICAgICAgICogdGhlIFZpc3VhbEVsZW1lbnQgYXMgbmVjZXNzYXJ5LlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlTW90aW9uVmFsdWVzKHZpc3VhbEVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZSBhbmltYXRpb24gY29udHJvbHMgZm9yIHRoZSBWaXN1YWxFbGVtZW50LiBJdCBtaWdodCBiZVxuICAgICAgICAgKiBpbnRlcmVzdGluZyB0byB0cnkgYW5kIGNvbWJpbmUgdGhpcyB3aXRoIFZpc3VhbEVsZW1lbnQgaXRzZWxmIGluIGEgZnVydGhlciByZWZhY3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBjb250cm9scyA9IHVzZVZpc3VhbEVsZW1lbnRBbmltYXRpb24odmlzdWFsRWxlbWVudCwgcHJvcHMsIGFuaW1hdGlvbkNvbnRyb2xzQ29uZmlnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkIHRoZSBNb3Rpb25Db250ZXh0IHRvIHBhc3Mgb24gdG8gdGhlIG5leHQgYG1vdGlvbmAgY29tcG9uZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGNvbnRleHQgPSB1c2VNb3Rpb25Db250ZXh0KHBhcmVudENvbnRleHQsIGNvbnRyb2xzLCB2aXN1YWxFbGVtZW50LCBpc1N0YXRpYywgcHJvcHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogTG9hZCBmZWF0dXJlcyBhcyByZW5kZXJsZXNzIGNvbXBvbmVudHMgdW5sZXNzIHRoZSBjb21wb25lbnQgaXNTdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHZhciBmZWF0dXJlcyA9IHVzZUZlYXR1cmVzKGRlZmF1bHRGZWF0dXJlcywgaXNTdGF0aWMsIHZpc3VhbEVsZW1lbnQsIGNvbnRyb2xzLCBwcm9wcywgY29udGV4dCwgcGFyZW50Q29udGV4dCwgc2hvdWxkSW5oZXJpdFZhcmlhbnQpO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gcmVuZGVyKENvbXBvbmVudCwgcHJvcHMsIHZpc3VhbEVsZW1lbnQpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBjb21wb25lbnQgaXMgYSBjaGlsZCBvZiBBbmltYXRlU2hhcmVkTGF5b3V0LCB3ZSBuZWVkIHRvIHNuYXBzaG90IHRoZSBjb21wb25lbnRcbiAgICAgICAgICogYmVmb3JlIGl0J3MgdW5tb3VudGVkLiBUaGlzIGxpdmVzIGhlcmUgcmF0aGVyIHRoYW4gaW4gZmVhdHVyZXMvbGF5b3V0L01lYXN1cmUgYmVjYXVzZVxuICAgICAgICAgKiBhcyBhIGNoaWxkIGNvbXBvbmVudCBpdHMgdW5tb3VudCBlZmZlY3QgcnVucyBhZnRlciB0aGlzIGNvbXBvbmVudCBoYXMgYmVlbiB1bm1vdW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB1c2VTbmFwc2hvdE9uVW5tb3VudCh2aXN1YWxFbGVtZW50KTtcbiAgICAgICAgLy8gVGhlIG1vdW50IG9yZGVyIGFuZCBoaWVyYXJjaHkgaXMgc3BlY2lmaWMgdG8gZW5zdXJlIG91ciBlbGVtZW50IHJlZiBpcyBoeWRyYXRlZCBieSB0aGUgdGltZVxuICAgICAgICAvLyBhbGwgcGx1Z2lucyBhbmQgZmVhdHVyZXMgaGFzIHRvIGV4ZWN1dGUuXG4gICAgICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoTW90aW9uQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dCB9LCBjb21wb25lbnQpLFxuICAgICAgICAgICAgZmVhdHVyZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcndhcmRSZWYoTW90aW9uQ29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jayhuYW1lKSB7XG4gICAgdmFyIGxvY2sgPSBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVuTG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvY2sgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBpZiAobG9jayA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jayA9IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gb3BlbkxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG52YXIgZ2xvYmFsSG9yaXpvbnRhbExvY2sgPSBjcmVhdGVMb2NrKFwiZHJhZ0hvcml6b250YWxcIik7XG52YXIgZ2xvYmFsVmVydGljYWxMb2NrID0gY3JlYXRlTG9jayhcImRyYWdWZXJ0aWNhbFwiKTtcbmZ1bmN0aW9uIGdldEdsb2JhbExvY2soZHJhZykge1xuICAgIHZhciBsb2NrID0gZmFsc2U7XG4gICAgaWYgKGRyYWcgPT09IFwieVwiKSB7XG4gICAgICAgIGxvY2sgPSBnbG9iYWxWZXJ0aWNhbExvY2soKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZHJhZyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgbG9jayA9IGdsb2JhbEhvcml6b250YWxMb2NrKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgb3Blbkhvcml6b250YWxfMSA9IGdsb2JhbEhvcml6b250YWxMb2NrKCk7XG4gICAgICAgIHZhciBvcGVuVmVydGljYWxfMSA9IGdsb2JhbFZlcnRpY2FsTG9jaygpO1xuICAgICAgICBpZiAob3Blbkhvcml6b250YWxfMSAmJiBvcGVuVmVydGljYWxfMSkge1xuICAgICAgICAgICAgbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvcGVuSG9yaXpvbnRhbF8xKCk7XG4gICAgICAgICAgICAgICAgb3BlblZlcnRpY2FsXzEoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWxlYXNlIHRoZSBsb2NrcyBiZWNhdXNlIHdlIGRvbid0IHVzZSB0aGVtXG4gICAgICAgICAgICBpZiAob3Blbkhvcml6b250YWxfMSlcbiAgICAgICAgICAgICAgICBvcGVuSG9yaXpvbnRhbF8xKCk7XG4gICAgICAgICAgICBpZiAob3BlblZlcnRpY2FsXzEpXG4gICAgICAgICAgICAgICAgb3BlblZlcnRpY2FsXzEoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jaztcbn1cblxudmFyIGlzVmlld3BvcnRTY3JvbGxCbG9ja2VkID0gZmFsc2U7XG52YXIgaXNCcm93c2VyJDEgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuaWYgKGlzQnJvd3NlciQxKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGlzVmlld3BvcnRTY3JvbGxCbG9ja2VkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbn1cbnZhciBibG9ja1ZpZXdwb3J0U2Nyb2xsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKGlzVmlld3BvcnRTY3JvbGxCbG9ja2VkID0gdHJ1ZSk7IH07XG52YXIgdW5ibG9ja1ZpZXdwb3J0U2Nyb2xsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKGlzVmlld3BvcnRTY3JvbGxCbG9ja2VkID0gZmFsc2UpOyB9O1xuXG5mdW5jdGlvbiBhZGREb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIGlmICghaGFuZGxlcilcbiAgICAgICAgcmV0dXJuO1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7IH07XG59XG4vKipcbiAqIEF0dGFjaGVzIGFuIGV2ZW50IGxpc3RlbmVyIGRpcmVjdGx5IHRvIHRoZSBwcm92aWRlZCBET00gZWxlbWVudC5cbiAqXG4gKiBCeXBhc3NpbmcgUmVhY3QncyBldmVudCBzeXN0ZW0gY2FuIGJlIGRlc2lyYWJsZSwgZm9yIGluc3RhbmNlIHdoZW4gYXR0YWNoaW5nIG5vbi1wYXNzaXZlXG4gKiBldmVudCBoYW5kbGVycy5cbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuICpcbiAqIHVzZURvbUV2ZW50KHJlZiwgJ3doZWVsJywgb25XaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICpcbiAqIHJldHVybiA8ZGl2IHJlZj17cmVmfSAvPlxuICogYGBgXG4gKlxuICogQHBhcmFtIHJlZiAtIFJlYWN0LlJlZk9iamVjdCB0aGF0J3MgYmVlbiBwcm92aWRlZCB0byB0aGUgZWxlbWVudCB5b3Ugd2FudCB0byBiaW5kIHRoZSBsaXN0ZW5lciB0by5cbiAqIEBwYXJhbSBldmVudE5hbWUgLSBOYW1lIG9mIHRoZSBldmVudCB5b3Ugd2FudCBsaXN0ZW4gZm9yLlxuICogQHBhcmFtIGhhbmRsZXIgLSBGdW5jdGlvbiB0byBmaXJlIHdoZW4gcmVjZWl2aW5nIHRoZSBldmVudC5cbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB0byBwYXNzIHRvIGBFdmVudC5hZGRFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZURvbUV2ZW50KHJlZiwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGhhbmRsZXIgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGFkZERvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9LCBbcmVmLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnNdKTtcbn1cblxuZnVuY3Rpb24gaXNNb3VzZUV2ZW50KGV2ZW50KSB7XG4gICAgLy8gUG9pbnRlckV2ZW50IGluaGVyaXRzIGZyb20gTW91c2VFdmVudCBzbyB3ZSBjYW4ndCB1c2UgYSBzdHJhaWdodCBpbnN0YW5jZW9mIGNoZWNrLlxuICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGV2ZW50IGluc3RhbmNlb2YgUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHJldHVybiAhIShldmVudC5wb2ludGVyVHlwZSA9PT0gXCJtb3VzZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudDtcbn1cbmZ1bmN0aW9uIGlzVG91Y2hFdmVudChldmVudCkge1xuICAgIHZhciBoYXNUb3VjaGVzID0gISFldmVudC50b3VjaGVzO1xuICAgIHJldHVybiBoYXNUb3VjaGVzO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGV2ZW50cyBub3QgYXR0YWNoZWQgdG8gdGhlIHByaW1hcnkgcG9pbnRlciAoY3VycmVudGx5IGxlZnQgbW91c2UgYnV0dG9uKVxuICogQHBhcmFtIGV2ZW50SGFuZGxlclxuICovXG5mdW5jdGlvbiBmaWx0ZXJQcmltYXJ5UG9pbnRlcihldmVudEhhbmRsZXIpIHtcbiAgICBpZiAoIWV2ZW50SGFuZGxlcilcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBpc01vdXNlRXZlbnQgPSBldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQ7XG4gICAgICAgIHZhciBpc1ByaW1hcnlQb2ludGVyID0gIWlzTW91c2VFdmVudCB8fFxuICAgICAgICAgICAgKGlzTW91c2VFdmVudCAmJiBldmVudC5idXR0b24gPT09IDApO1xuICAgICAgICBpZiAoaXNQcmltYXJ5UG9pbnRlcikge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG59XG52YXIgZGVmYXVsdFBhZ2VQb2ludCA9IHsgcGFnZVg6IDAsIHBhZ2VZOiAwIH07XG5mdW5jdGlvbiBwb2ludEZyb21Ub3VjaChlLCBwb2ludFR5cGUpIHtcbiAgICBpZiAocG9pbnRUeXBlID09PSB2b2lkIDApIHsgcG9pbnRUeXBlID0gXCJwYWdlXCI7IH1cbiAgICB2YXIgcHJpbWFyeVRvdWNoID0gZS50b3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgdmFyIHBvaW50ID0gcHJpbWFyeVRvdWNoIHx8IGRlZmF1bHRQYWdlUG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogcG9pbnRbcG9pbnRUeXBlICsgXCJYXCJdLFxuICAgICAgICB5OiBwb2ludFtwb2ludFR5cGUgKyBcIllcIl0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHBvaW50RnJvbU1vdXNlKHBvaW50LCBwb2ludFR5cGUpIHtcbiAgICBpZiAocG9pbnRUeXBlID09PSB2b2lkIDApIHsgcG9pbnRUeXBlID0gXCJwYWdlXCI7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2ludFtwb2ludFR5cGUgKyBcIlhcIl0sXG4gICAgICAgIHk6IHBvaW50W3BvaW50VHlwZSArIFwiWVwiXSxcbiAgICB9O1xufVxuZnVuY3Rpb24gZXh0cmFjdEV2ZW50SW5mbyhldmVudCwgcG9pbnRUeXBlKSB7XG4gICAgaWYgKHBvaW50VHlwZSA9PT0gdm9pZCAwKSB7IHBvaW50VHlwZSA9IFwicGFnZVwiOyB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9pbnQ6IGlzVG91Y2hFdmVudChldmVudClcbiAgICAgICAgICAgID8gcG9pbnRGcm9tVG91Y2goZXZlbnQsIHBvaW50VHlwZSlcbiAgICAgICAgICAgIDogcG9pbnRGcm9tTW91c2UoZXZlbnQsIHBvaW50VHlwZSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFZpZXdwb3J0UG9pbnRGcm9tRXZlbnQoZXZlbnQpIHtcbiAgICByZXR1cm4gZXh0cmFjdEV2ZW50SW5mbyhldmVudCwgXCJjbGllbnRcIik7XG59XG52YXIgd3JhcEhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlciwgc2hvdWxkRmlsdGVyUHJpbWFyeVBvaW50ZXIpIHtcbiAgICBpZiAoc2hvdWxkRmlsdGVyUHJpbWFyeVBvaW50ZXIgPT09IHZvaWQgMCkgeyBzaG91bGRGaWx0ZXJQcmltYXJ5UG9pbnRlciA9IGZhbHNlOyB9XG4gICAgaWYgKCFoYW5kbGVyKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBoYW5kbGVyKGV2ZW50LCBleHRyYWN0RXZlbnRJbmZvKGV2ZW50KSk7IH07XG4gICAgcmV0dXJuIHNob3VsZEZpbHRlclByaW1hcnlQb2ludGVyXG4gICAgICAgID8gZmlsdGVyUHJpbWFyeVBvaW50ZXIobGlzdGVuZXIpXG4gICAgICAgIDogbGlzdGVuZXI7XG59O1xuXG52YXIgaXNCcm93c2VyJDIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xuLy8gV2UgY2hlY2sgZm9yIGV2ZW50IHN1cHBvcnQgdmlhIGZ1bmN0aW9ucyBpbiBjYXNlIHRoZXkndmUgYmVlbiBtb2NrZWQgYnkgYSB0ZXN0aW5nIHN1aXRlLlxudmFyIHN1cHBvcnRzUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXNCcm93c2VyJDIgJiYgd2luZG93Lm9ucG9pbnRlcmRvd24gPT09IG51bGw7XG59O1xudmFyIHN1cHBvcnRzVG91Y2hFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzQnJvd3NlciQyICYmIHdpbmRvdy5vbnRvdWNoc3RhcnQgPT09IG51bGw7XG59O1xudmFyIHN1cHBvcnRzTW91c2VFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzQnJvd3NlciQyICYmIHdpbmRvdy5vbm1vdXNlZG93biA9PT0gbnVsbDtcbn07XG5cbnZhciBtb3VzZUV2ZW50TmFtZXMgPSB7XG4gICAgcG9pbnRlcmRvd246IFwibW91c2Vkb3duXCIsXG4gICAgcG9pbnRlcm1vdmU6IFwibW91c2Vtb3ZlXCIsXG4gICAgcG9pbnRlcnVwOiBcIm1vdXNldXBcIixcbiAgICBwb2ludGVyY2FuY2VsOiBcIm1vdXNlY2FuY2VsXCIsXG4gICAgcG9pbnRlcm92ZXI6IFwibW91c2VvdmVyXCIsXG4gICAgcG9pbnRlcm91dDogXCJtb3VzZW91dFwiLFxuICAgIHBvaW50ZXJlbnRlcjogXCJtb3VzZWVudGVyXCIsXG4gICAgcG9pbnRlcmxlYXZlOiBcIm1vdXNlbGVhdmVcIixcbn07XG52YXIgdG91Y2hFdmVudE5hbWVzID0ge1xuICAgIHBvaW50ZXJkb3duOiBcInRvdWNoc3RhcnRcIixcbiAgICBwb2ludGVybW92ZTogXCJ0b3VjaG1vdmVcIixcbiAgICBwb2ludGVydXA6IFwidG91Y2hlbmRcIixcbiAgICBwb2ludGVyY2FuY2VsOiBcInRvdWNoY2FuY2VsXCIsXG59O1xuZnVuY3Rpb24gZ2V0UG9pbnRlckV2ZW50TmFtZShuYW1lKSB7XG4gICAgaWYgKHN1cHBvcnRzUG9pbnRlckV2ZW50cygpKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdXBwb3J0c1RvdWNoRXZlbnRzKCkpIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoRXZlbnROYW1lc1tuYW1lXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3VwcG9ydHNNb3VzZUV2ZW50cygpKSB7XG4gICAgICAgIHJldHVybiBtb3VzZUV2ZW50TmFtZXNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gYWRkUG9pbnRlckV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGFkZERvbUV2ZW50KHRhcmdldCwgZ2V0UG9pbnRlckV2ZW50TmFtZShldmVudE5hbWUpLCB3cmFwSGFuZGxlcihoYW5kbGVyLCBldmVudE5hbWUgPT09IFwicG9pbnRlcmRvd25cIiksIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gdXNlUG9pbnRlckV2ZW50KHJlZiwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHVzZURvbUV2ZW50KHJlZiwgZ2V0UG9pbnRlckV2ZW50TmFtZShldmVudE5hbWUpLCB3cmFwSGFuZGxlcihoYW5kbGVyLCBldmVudE5hbWUgPT09IFwicG9pbnRlcmRvd25cIiksIG9wdGlvbnMpO1xufVxuXG4vKiogQHB1YmxpYyAqL1xudmFyIFBvaW50O1xuKGZ1bmN0aW9uIChQb2ludCkge1xuICAgIC8qKiBAYmV0YSAqL1xuICAgIFBvaW50LnN1YnRyYWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfTtcbiAgICB9O1xuICAgIC8qKiBAYmV0YSAqL1xuICAgIFBvaW50LnJlbGF0aXZlVG8gPSBmdW5jdGlvbiAoaWRPckVsZW0pIHtcbiAgICAgICAgdmFyIGVsZW07XG4gICAgICAgIHZhciBnZXRFbGVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2FjaGluZyBlbGVtZW50IGhlcmUgY291bGQgYmUgbGVha3kgYmVjYXVzZSBvZiBSZWFjdCBsaWZlY3ljbGVcbiAgICAgICAgICAgIGlmIChlbGVtICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkT3JFbGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkT3JFbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBpZE9yRWxlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgICAgICAgICAgdmFyIGxvY2FsRWxlbSA9IGdldEVsZW0oKTtcbiAgICAgICAgICAgIGlmICghbG9jYWxFbGVtKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGxvY2FsRWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogeCAtIHJlY3QubGVmdCAtIHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgIHk6IHkgLSByZWN0LnRvcCAtIHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xufSkoUG9pbnQgfHwgKFBvaW50ID0ge30pKTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFBhblNlc3Npb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGFuU2Vzc2lvbihldmVudCwgaGFuZGxlcnMsIF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1QYWdlUG9pbnQgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLnRyYW5zZm9ybVBhZ2VQb2ludDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGFydEV2ZW50ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXN0TW92ZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXN0TW92ZUV2ZW50SW5mbyA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy51cGRhdGVQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghKF90aGlzLmxhc3RNb3ZlRXZlbnQgJiYgX3RoaXMubGFzdE1vdmVFdmVudEluZm8pKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBpbmZvID0gZ2V0UGFuSW5mbyhfdGhpcy5sYXN0TW92ZUV2ZW50SW5mbywgX3RoaXMuaGlzdG9yeSk7XG4gICAgICAgICAgICB2YXIgaXNQYW5TdGFydGVkID0gX3RoaXMuc3RhcnRFdmVudCAhPT0gbnVsbDtcbiAgICAgICAgICAgIC8vIE9ubHkgc3RhcnQgcGFubmluZyBpZiB0aGUgb2Zmc2V0IGlzIGxhcmdlciB0aGFuIDMgcGl4ZWxzLiBJZiB3ZSBtYWtlIGl0XG4gICAgICAgICAgICAvLyBhbnkgbGFyZ2VyIHRoYW4gdGhpcyB3ZSdsbCB3YW50IHRvIHJlc2V0IHRoZSBwb2ludGVyIGhpc3RvcnlcbiAgICAgICAgICAgIC8vIG9uIHRoZSBmaXJzdCB1cGRhdGUgdG8gYXZvaWQgdmlzdWFsIHNuYXBwaW5nIHRvIHRoZSBjdXJzb2UuXG4gICAgICAgICAgICB2YXIgaXNEaXN0YW5jZVBhc3RUaHJlc2hvbGQgPSBkaXN0YW5jZShpbmZvLm9mZnNldCwgeyB4OiAwLCB5OiAwIH0pID49IDM7XG4gICAgICAgICAgICBpZiAoIWlzUGFuU3RhcnRlZCAmJiAhaXNEaXN0YW5jZVBhc3RUaHJlc2hvbGQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gaW5mby5wb2ludDtcbiAgICAgICAgICAgIHZhciB0aW1lc3RhbXAgPSBnZXRGcmFtZURhdGEoKS50aW1lc3RhbXA7XG4gICAgICAgICAgICBfdGhpcy5oaXN0b3J5LnB1c2goX19hc3NpZ24oX19hc3NpZ24oe30sIHBvaW50KSwgeyB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9KSk7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5oYW5kbGVycywgb25TdGFydCA9IF9hLm9uU3RhcnQsIG9uTW92ZSA9IF9hLm9uTW92ZTtcbiAgICAgICAgICAgIGlmICghaXNQYW5TdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgb25TdGFydCAmJiBvblN0YXJ0KF90aGlzLmxhc3RNb3ZlRXZlbnQsIGluZm8pO1xuICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0RXZlbnQgPSBfdGhpcy5sYXN0TW92ZUV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25Nb3ZlICYmIG9uTW92ZShfdGhpcy5sYXN0TW92ZUV2ZW50LCBpbmZvKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIHRvdWNoLCBkb24ndCBzdGFydCBkZXRlY3RpbmcgdGhpcyBnZXN0dXJlXG4gICAgICAgIGlmIChpc1RvdWNoRXZlbnQoZXZlbnQpICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVBhZ2VQb2ludCA9IHRyYW5zZm9ybVBhZ2VQb2ludDtcbiAgICAgICAgdmFyIGluZm8gPSBleHRyYWN0RXZlbnRJbmZvKGV2ZW50KTtcbiAgICAgICAgdmFyIGluaXRpYWxJbmZvID0gdHJhbnNmb3JtUG9pbnQoaW5mbywgdGhpcy50cmFuc2Zvcm1QYWdlUG9pbnQpO1xuICAgICAgICB2YXIgcG9pbnQgPSBpbml0aWFsSW5mby5wb2ludDtcbiAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGdldEZyYW1lRGF0YSgpLnRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW19fYXNzaWduKF9fYXNzaWduKHt9LCBwb2ludCksIHsgdGltZXN0YW1wOiB0aW1lc3RhbXAgfSldO1xuICAgICAgICB2YXIgb25TZXNzaW9uU3RhcnQgPSBoYW5kbGVycy5vblNlc3Npb25TdGFydDtcbiAgICAgICAgb25TZXNzaW9uU3RhcnQgJiZcbiAgICAgICAgICAgIG9uU2Vzc2lvblN0YXJ0KGV2ZW50LCBnZXRQYW5JbmZvKGluaXRpYWxJbmZvLCB0aGlzLmhpc3RvcnkpKTtcbiAgICAgICAgdmFyIHJlbW92ZU9uUG9pbnRlck1vdmUgPSBhZGRQb2ludGVyRXZlbnQod2luZG93LCBcInBvaW50ZXJtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCwgaW5mbykgeyByZXR1cm4gX3RoaXMuaGFuZGxlUG9pbnRlck1vdmUoZXZlbnQsIGluZm8pOyB9KTtcbiAgICAgICAgdmFyIHJlbW92ZU9uUG9pbnRlclVwID0gYWRkUG9pbnRlckV2ZW50KHdpbmRvdywgXCJwb2ludGVydXBcIiwgZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7IHJldHVybiBfdGhpcy5oYW5kbGVQb2ludGVyVXAoZXZlbnQsIGluZm8pOyB9KTtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZW1vdmVPblBvaW50ZXJNb3ZlICYmIHJlbW92ZU9uUG9pbnRlck1vdmUoKTtcbiAgICAgICAgICAgIHJlbW92ZU9uUG9pbnRlclVwICYmIHJlbW92ZU9uUG9pbnRlclVwKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFBhblNlc3Npb24ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJNb3ZlID0gZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgIHRoaXMubGFzdE1vdmVFdmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmxhc3RNb3ZlRXZlbnRJbmZvID0gdHJhbnNmb3JtUG9pbnQoaW5mbywgdGhpcy50cmFuc2Zvcm1QYWdlUG9pbnQpO1xuICAgICAgICAvLyBCZWNhdXNlIFNhZmFyaSBkb2Vzbid0IHRyaWdnZXIgbW91c2V1cCBldmVudHMgd2hlbiBpdCdzIGFib3ZlIGEgYDxzZWxlY3Q+YFxuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSAmJiBldmVudC5idXR0b25zID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcChldmVudCwgaW5mbyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhyb3R0bGUgbW91c2UgbW92ZSBldmVudCB0byBvbmNlIHBlciBmcmFtZVxuICAgICAgICBzeW5jLnVwZGF0ZSh0aGlzLnVwZGF0ZVBvaW50LCB0cnVlKTtcbiAgICB9O1xuICAgIFBhblNlc3Npb24ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJVcCA9IGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICB2YXIgb25FbmQgPSB0aGlzLmhhbmRsZXJzLm9uRW5kO1xuICAgICAgICBpZiAoIW9uRW5kKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgcGFuSW5mbyA9IGdldFBhbkluZm8odHJhbnNmb3JtUG9pbnQoaW5mbywgdGhpcy50cmFuc2Zvcm1QYWdlUG9pbnQpLCB0aGlzLmhpc3RvcnkpO1xuICAgICAgICBvbkVuZCAmJiBvbkVuZChldmVudCwgcGFuSW5mbyk7XG4gICAgfTtcbiAgICBQYW5TZXNzaW9uLnByb3RvdHlwZS51cGRhdGVIYW5kbGVycyA9IGZ1bmN0aW9uIChoYW5kbGVycykge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgfTtcbiAgICBQYW5TZXNzaW9uLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzICYmIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIGNhbmNlbFN5bmMudXBkYXRlKHRoaXMudXBkYXRlUG9pbnQpO1xuICAgICAgICB1bmJsb2NrVmlld3BvcnRTY3JvbGwoKTtcbiAgICB9O1xuICAgIHJldHVybiBQYW5TZXNzaW9uO1xufSgpKTtcbmZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KGluZm8sIHRyYW5zZm9ybVBhZ2VQb2ludCkge1xuICAgIHJldHVybiB0cmFuc2Zvcm1QYWdlUG9pbnQgPyB7IHBvaW50OiB0cmFuc2Zvcm1QYWdlUG9pbnQoaW5mby5wb2ludCkgfSA6IGluZm87XG59XG5mdW5jdGlvbiBnZXRQYW5JbmZvKF9hLCBoaXN0b3J5KSB7XG4gICAgdmFyIHBvaW50ID0gX2EucG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICBkZWx0YTogUG9pbnQuc3VidHJhY3QocG9pbnQsIGxhc3REZXZpY2VQb2ludChoaXN0b3J5KSksXG4gICAgICAgIG9mZnNldDogUG9pbnQuc3VidHJhY3QocG9pbnQsIHN0YXJ0RGV2aWNlUG9pbnQoaGlzdG9yeSkpLFxuICAgICAgICB2ZWxvY2l0eTogZ2V0VmVsb2NpdHkkMShoaXN0b3J5LCAwLjEpLFxuICAgIH07XG59XG5mdW5jdGlvbiBzdGFydERldmljZVBvaW50KGhpc3RvcnkpIHtcbiAgICByZXR1cm4gaGlzdG9yeVswXTtcbn1cbmZ1bmN0aW9uIGxhc3REZXZpY2VQb2ludChoaXN0b3J5KSB7XG4gICAgcmV0dXJuIGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXTtcbn1cbmZ1bmN0aW9uIGdldFZlbG9jaXR5JDEoaGlzdG9yeSwgdGltZURlbHRhKSB7XG4gICAgaWYgKGhpc3RvcnkubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciBpID0gaGlzdG9yeS5sZW5ndGggLSAxO1xuICAgIHZhciB0aW1lc3RhbXBlZFBvaW50ID0gbnVsbDtcbiAgICB2YXIgbGFzdFBvaW50ID0gbGFzdERldmljZVBvaW50KGhpc3RvcnkpO1xuICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgdGltZXN0YW1wZWRQb2ludCA9IGhpc3RvcnlbaV07XG4gICAgICAgIGlmIChsYXN0UG9pbnQudGltZXN0YW1wIC0gdGltZXN0YW1wZWRQb2ludC50aW1lc3RhbXAgPlxuICAgICAgICAgICAgc2Vjb25kc1RvTWlsbGlzZWNvbmRzKHRpbWVEZWx0YSkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGktLTtcbiAgICB9XG4gICAgaWYgKCF0aW1lc3RhbXBlZFBvaW50KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHRpbWUgPSAobGFzdFBvaW50LnRpbWVzdGFtcCAtIHRpbWVzdGFtcGVkUG9pbnQudGltZXN0YW1wKSAvIDEwMDA7XG4gICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgY3VycmVudFZlbG9jaXR5ID0ge1xuICAgICAgICB4OiAobGFzdFBvaW50LnggLSB0aW1lc3RhbXBlZFBvaW50LngpIC8gdGltZSxcbiAgICAgICAgeTogKGxhc3RQb2ludC55IC0gdGltZXN0YW1wZWRQb2ludC55KSAvIHRpbWUsXG4gICAgfTtcbiAgICBpZiAoY3VycmVudFZlbG9jaXR5LnggPT09IEluZmluaXR5KSB7XG4gICAgICAgIGN1cnJlbnRWZWxvY2l0eS54ID0gMDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWZWxvY2l0eS55ID09PSBJbmZpbml0eSkge1xuICAgICAgICBjdXJyZW50VmVsb2NpdHkueSA9IDA7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VmVsb2NpdHk7XG59XG5cbi8qKlxuICogQXBwbHkgY29uc3RyYWludHMgdG8gYSBwb2ludC4gVGhlc2UgY29uc3RyYWludHMgYXJlIGJvdGggcGh5c2ljYWwgYWxvbmcgYW5cbiAqIGF4aXMsIGFuZCBhbiBlbGFzdGljIGZhY3RvciB0aGF0IGRldGVybWluZXMgaG93IG11Y2ggdG8gY29uc3RyYWluIHRoZSBwb2ludFxuICogYnkgaWYgaXQgZG9lcyBsaWUgb3V0c2lkZSB0aGUgZGVmaW5lZCBwYXJhbWV0ZXJzLlxuICovXG5mdW5jdGlvbiBhcHBseUNvbnN0cmFpbnRzKHBvaW50LCBfYSwgZWxhc3RpYykge1xuICAgIHZhciBtaW4gPSBfYS5taW4sIG1heCA9IF9hLm1heDtcbiAgICBpZiAobWluICE9PSB1bmRlZmluZWQgJiYgcG9pbnQgPCBtaW4pIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIG1pbiBwb2ludCBkZWZpbmVkLCBhbmQgdGhpcyBpcyBvdXRzaWRlIG9mIHRoYXQsIGNvbnN0cmFpblxuICAgICAgICBwb2ludCA9IGVsYXN0aWMgPyBtaXgobWluLCBwb2ludCwgZWxhc3RpYykgOiBNYXRoLm1heChwb2ludCwgbWluKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWF4ICE9PSB1bmRlZmluZWQgJiYgcG9pbnQgPiBtYXgpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIG1heCBwb2ludCBkZWZpbmVkLCBhbmQgdGhpcyBpcyBvdXRzaWRlIG9mIHRoYXQsIGNvbnN0cmFpblxuICAgICAgICBwb2ludCA9IGVsYXN0aWMgPyBtaXgobWF4LCBwb2ludCwgZWxhc3RpYykgOiBNYXRoLm1pbihwb2ludCwgbWF4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgbWluIHByb2plY3Rpb24gcG9pbnQgYmFzZWQgb24gYSBwb2ludGVyLCBwb2ludGVyIHByb2dyZXNzXG4gKiB3aXRoaW4gdGhlIGRyYWcgdGFyZ2V0LCBhbmQgY29uc3RyYWludHMuXG4gKlxuICogRm9yIGluc3RhbmNlIGlmIGFuIGVsZW1lbnQgd2FzIDEwMHB4IHdpZHRoLCB3ZSB3ZXJlIGRyYWdnaW5nIGZyb20gMC4yNVxuICogYWxvbmcgdGhpcyBheGlzLCB0aGUgcG9pbnRlciBpcyBhdCAyMDBweCwgYW5kIHRoZXJlIHdlcmUgbm8gY29uc3RyYWludHMsXG4gKiB3ZSB3b3VsZCBjYWxjdWxhdGUgYSBtaW4gcHJvamVjdGlvbiBwb2ludCBvZiAxNzVweC5cbiAqL1xuZnVuY3Rpb24gY2FsY0NvbnN0cmFpbmVkTWluUG9pbnQocG9pbnQsIGxlbmd0aCwgcHJvZ3Jlc3MsIGNvbnN0cmFpbnRzLCBlbGFzdGljKSB7XG4gICAgLy8gQ2FsY3VsYXRlIGEgbWluIHBvaW50IGZvciB0aGlzIGF4aXMgYW5kIGFwcGx5IGl0IHRvIHRoZSBjdXJyZW50IHBvaW50ZXJcbiAgICB2YXIgbWluID0gcG9pbnQgLSBsZW5ndGggKiBwcm9ncmVzcztcbiAgICByZXR1cm4gY29uc3RyYWludHMgPyBhcHBseUNvbnN0cmFpbnRzKG1pbiwgY29uc3RyYWludHMsIGVsYXN0aWMpIDogbWluO1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgY29uc3RyYWludHMgaW4gdGVybXMgb2YgdGhlIHZpZXdwb3J0IHdoZW4gZGVmaW5lZCByZWxhdGl2ZWx5IHRvIHRoZVxuICogbWVhc3VyZWQgYXhpcy4gVGhpcyBpcyBtZWFzdXJlZCBmcm9tIHRoZSBuZWFyZXN0IGVkZ2UsIHNvIGEgbWF4IGNvbnN0cmFpbnQgb2YgMjAwXG4gKiBvbiBhbiBheGlzIHdpdGggYSBtYXggdmFsdWUgb2YgMzAwIHdvdWxkIHJldHVybiBhIGNvbnN0cmFpbnQgb2YgNTAwIC0gYXhpcyBsZW5ndGhcbiAqL1xuZnVuY3Rpb24gY2FsY1JlbGF0aXZlQXhpc0NvbnN0cmFpbnRzKGF4aXMsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWluOiBtaW4gIT09IHVuZGVmaW5lZCA/IGF4aXMubWluICsgbWluIDogdW5kZWZpbmVkLFxuICAgICAgICBtYXg6IG1heCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGF4aXMubWF4ICsgbWF4IC0gKGF4aXMubWF4IC0gYXhpcy5taW4pXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgY29uc3RyYWludHMgaW4gdGVybXMgb2YgdGhlIHZpZXdwb3J0IHdoZW5cbiAqIGRlZmluZWQgcmVsYXRpdmVseSB0byB0aGUgbWVhc3VyZWQgYm91bmRpbmcgYm94LlxuICovXG5mdW5jdGlvbiBjYWxjUmVsYXRpdmVDb25zdHJhaW50cyhsYXlvdXRCb3gsIF9hKSB7XG4gICAgdmFyIHRvcCA9IF9hLnRvcCwgbGVmdCA9IF9hLmxlZnQsIGJvdHRvbSA9IF9hLmJvdHRvbSwgcmlnaHQgPSBfYS5yaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBjYWxjUmVsYXRpdmVBeGlzQ29uc3RyYWludHMobGF5b3V0Qm94LngsIGxlZnQsIHJpZ2h0KSxcbiAgICAgICAgeTogY2FsY1JlbGF0aXZlQXhpc0NvbnN0cmFpbnRzKGxheW91dEJveC55LCB0b3AsIGJvdHRvbSksXG4gICAgfTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIHZpZXdwb3J0IGNvbnN0cmFpbnRzIHdoZW4gZGVmaW5lZCBhcyBhbm90aGVyIHZpZXdwb3J0LXJlbGF0aXZlIGF4aXNcbiAqL1xuZnVuY3Rpb24gY2FsY1ZpZXdwb3J0QXhpc0NvbnN0cmFpbnRzKGxheW91dEF4aXMsIGNvbnN0cmFpbnRzQXhpcykge1xuICAgIHZhciBfYTtcbiAgICB2YXIgbWluID0gY29uc3RyYWludHNBeGlzLm1pbiAtIGxheW91dEF4aXMubWluO1xuICAgIHZhciBtYXggPSBjb25zdHJhaW50c0F4aXMubWF4IC0gbGF5b3V0QXhpcy5tYXg7XG4gICAgLy8gSWYgdGhlIGNvbnN0cmFpbnRzIGF4aXMgaXMgYWN0dWFsbHkgc21hbGxlciB0aGFuIHRoZSBsYXlvdXQgYXhpcyB0aGVuIHdlIGNhblxuICAgIC8vIGZsaXAgdGhlIGNvbnN0cmFpbnRzXG4gICAgaWYgKGNvbnN0cmFpbnRzQXhpcy5tYXggLSBjb25zdHJhaW50c0F4aXMubWluIDxcbiAgICAgICAgbGF5b3V0QXhpcy5tYXggLSBsYXlvdXRBeGlzLm1pbikge1xuICAgICAgICBfYSA9IF9fcmVhZChbbWF4LCBtaW5dLCAyKSwgbWluID0gX2FbMF0sIG1heCA9IF9hWzFdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBtaW46IGxheW91dEF4aXMubWluICsgbWluLFxuICAgICAgICBtYXg6IGxheW91dEF4aXMubWluICsgbWF4LFxuICAgIH07XG59XG4vKipcbiAqIENhbGN1bGF0ZSB2aWV3cG9ydCBjb25zdHJhaW50cyB3aGVuIGRlZmluZWQgYXMgYW5vdGhlciB2aWV3cG9ydC1yZWxhdGl2ZSBib3hcbiAqL1xuZnVuY3Rpb24gY2FsY1ZpZXdwb3J0Q29uc3RyYWludHMobGF5b3V0Qm94LCBjb25zdHJhaW50c0JveCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNhbGNWaWV3cG9ydEF4aXNDb25zdHJhaW50cyhsYXlvdXRCb3gueCwgY29uc3RyYWludHNCb3gueCksXG4gICAgICAgIHk6IGNhbGNWaWV3cG9ydEF4aXNDb25zdHJhaW50cyhsYXlvdXRCb3gueSwgY29uc3RyYWludHNCb3gueSksXG4gICAgfTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBhbiBheGlzIHBvc2l0aW9uIGJhc2VkIG9uIHR3byBheGVzIGFuZCBhIHByb2dyZXNzIHZhbHVlLlxuICovXG5mdW5jdGlvbiBjYWxjUG9zaXRpb25Gcm9tUHJvZ3Jlc3MoYXhpcywgY29uc3RyYWludHMsIHByb2dyZXNzKSB7XG4gICAgdmFyIGF4aXNMZW5ndGggPSBheGlzLm1heCAtIGF4aXMubWluO1xuICAgIHZhciBtaW4gPSBtaXgoY29uc3RyYWludHMubWluLCBjb25zdHJhaW50cy5tYXggLSBheGlzTGVuZ3RoLCBwcm9ncmVzcyk7XG4gICAgcmV0dXJuIHsgbWluOiBtaW4sIG1heDogbWluICsgYXhpc0xlbmd0aCB9O1xufVxuLyoqXG4gKiBSZWJhc2UgdGhlIGNhbGN1bGF0ZWQgdmlld3BvcnQgY29uc3RyYWludHMgcmVsYXRpdmUgdG8gdGhlIGxheW91dC5taW4gcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHJlYmFzZUF4aXNDb25zdHJhaW50cyhsYXlvdXQsIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIHJlbGF0aXZlQ29uc3RyYWludHMgPSB7fTtcbiAgICBpZiAoY29uc3RyYWludHMubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVsYXRpdmVDb25zdHJhaW50cy5taW4gPSBjb25zdHJhaW50cy5taW4gLSBsYXlvdXQubWluO1xuICAgIH1cbiAgICBpZiAoY29uc3RyYWludHMubWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVsYXRpdmVDb25zdHJhaW50cy5tYXggPSBjb25zdHJhaW50cy5tYXggLSBsYXlvdXQubWluO1xuICAgIH1cbiAgICByZXR1cm4gcmVsYXRpdmVDb25zdHJhaW50cztcbn1cblxudmFyIGVsZW1lbnREcmFnQ29udHJvbHMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKlxuICovXG52YXIgbGFzdFBvaW50ZXJFdmVudDtcbnZhciBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMoX2EpIHtcbiAgICAgICAgdmFyIHZpc3VhbEVsZW1lbnQgPSBfYS52aXN1YWxFbGVtZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhY2sgd2hldGhlciB3ZSdyZSBjdXJyZW50bHkgZHJhZ2dpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBkaXJlY3Rpb24gb2YgZHJhZywgb3IgYG51bGxgIGlmIGJvdGguXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwZXJtaXR0ZWQgYm91bmRhcmllcyBvZiB0cmF2ZWwsIGluIHBpeGVscy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaG9zdCBjb21wb25lbnQncyBsYXRlc3QgcHJvcHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc011dGF0ZWRDb25zdHJhaW50cyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhY2sgdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIGN1cnNvciByZWxhdGl2ZSB0byB0aGUgZHJhZ2dpbmcgZWxlbWVudFxuICAgICAgICAgKiB3aGVuIGRyYWdnaW5nIHN0YXJ0cyBhcyBhIHZhbHVlIG9mIDAtMSBvbiBlYWNoIGF4aXMuIFdlIHRoZW4gdXNlIHRoaXMgdG8gY2FsY3VsYXRlXG4gICAgICAgICAqIGFuIGlkZWFsIGJvdW5kaW5nIGJveCBmb3IgdGhlIFZpc3VhbEVsZW1lbnQgcmVuZGVyZXIgdG8gcHJvamVjdCBpbnRvIGV2ZXJ5IGZyYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3Vyc29yUHJvZ3Jlc3MgPSB7XG4gICAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgICB5OiAwLjUsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFdoZW4gdXBkYXRpbmcgX2RyYWdYLCBvciBfZHJhZ1kgaW5zdGVhZCBvZiB0aGUgVmlzdWFsRWxlbWVudCxcbiAgICAgICAgLy8gcGVyc2lzdCB0aGVpciB2YWx1ZXMgYmV0d2VlbiBkcmFnIGdlc3R1cmVzLlxuICAgICAgICB0aGlzLm9yaWdpblBvaW50ID0ge307XG4gICAgICAgIC8vIFRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBkcmFnIGdlc3R1cmUgbG9jaywgZW5zdXJpbmcgb25seSBvbmUgY29tcG9uZW50XG4gICAgICAgIC8vIGNhbiBcImNhcHR1cmVcIiB0aGUgZHJhZyBvZiBvbmUgb3IgYm90aCBheGVzLlxuICAgICAgICAvLyBUT0RPOiBMb29rIGludG8gbW92aW5nIHRoaXMgaW50byBwYW5zZXNzaW9uP1xuICAgICAgICB0aGlzLm9wZW5HbG9iYWxMb2NrID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wYW5TZXNzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy52aXN1YWxFbGVtZW50ID0gdmlzdWFsRWxlbWVudDtcbiAgICAgICAgdGhpcy52aXN1YWxFbGVtZW50LmVuYWJsZUxheW91dFByb2plY3Rpb24oKTtcbiAgICAgICAgZWxlbWVudERyYWdDb250cm9scy5zZXQodmlzdWFsRWxlbWVudCwgdGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlIGEgUGFuU2Vzc2lvbiBmb3IgdGhlIGRyYWcgZ2VzdHVyZVxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKG9yaWdpbkV2ZW50LCBfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5zbmFwVG9DdXJzb3IsIHNuYXBUb0N1cnNvciA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBjdXJzb3JQcm9ncmVzcyA9IF9iLmN1cnNvclByb2dyZXNzO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBkcmFnIHNlc3Npb24gaGFzIGJlZW4gbWFudWFsbHkgdHJpZ2dlcmVkIGJ5IHRoZSB1c2VyLCBpdCBtaWdodCBiZSBmcm9tIGFuIGV2ZW50XG4gICAgICAgICAqIG91dHNpZGUgdGhlIGRyYWdnYWJsZSBlbGVtZW50LiBJZiBzbmFwVG9DdXJzb3IgaXMgc2V0IHRvIHRydWUsIHdlIG5lZWQgdG8gbWVhc3VyZSB0aGUgcG9zaXRpb25cbiAgICAgICAgICogb2YgdGhlIGVsZW1lbnQgYW5kIHNuYXAgaXQgdG8gdGhlIGN1cnNvci5cbiAgICAgICAgICovXG4gICAgICAgIHNuYXBUb0N1cnNvciAmJiB0aGlzLnNuYXBUb0N1cnNvcihvcmlnaW5FdmVudCk7XG4gICAgICAgIHZhciBvblNlc3Npb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEluaXRpYXRlIHZpZXdwb3J0IHNjcm9sbCBibG9ja2luZyBvbiB0b3VjaCBzdGFydC4gVGhpcyBpcyBhIHZlcnkgYWdncmVzc2l2ZSBhcHByb2FjaFxuICAgICAgICAgICAgLy8gd2hpY2ggaGFzIGNvbWUgb3V0IG9mIHRoZSBkaWZmaWN1bHR5IGluIHVzIGJlaW5nIGFibGUgdG8gZG8gdGhpcyBvbmNlIGEgc2Nyb2xsIGdlc3R1cmVcbiAgICAgICAgICAgIC8vIGhhcyBpbml0aWF0ZWQgaW4gbW9iaWxlIGJyb3dzZXJzLiBUaGlzIG1lYW5zIGlmIHRoZXJlJ3MgYSBob3Jpem9udGFsbHktc2Nyb2xsaW5nIGNhcm91c2VsXG4gICAgICAgICAgICAvLyBvbiBhIHBhZ2Ugd2UgY2FuJ3QgbGV0IGEgdXNlciBzY3JvbGwgdGhlIHBhZ2UgaXRzZWxmIGZyb20gaXQuIElkZWFsbHkgd2hhdCB3ZSdkIGRvIGlzXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoaXMgb25jZSB3ZSd2ZSBnb3QgYSBzY3JvbGwgZGlyZWN0aW9uIGRldGVybWluZWQuIFRoaXMgYXBwcm9hY2ggc29ydC1vZiB3b3JrZWRcbiAgICAgICAgICAgIC8vIGJ1dCBpZiB0aGUgY29tcG9uZW50IHdhcyBkcmFnZ2VkIHRvbyBmYXIgaW4gYSBzaW5nbGUgZnJhbWUgcGFnZSBzY3JvbGxpbmcgd291bGQgaW5pdGlhdGUuXG4gICAgICAgICAgICBibG9ja1ZpZXdwb3J0U2Nyb2xsKCk7XG4gICAgICAgICAgICAvLyBTdG9wIGFueSBhbmltYXRpb25zIG9uIGJvdGggYXhpcyB2YWx1ZXMgaW1tZWRpYXRlbHkuIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIHRocm93IGFuZCBjYXRjaFxuICAgICAgICAgICAgLy8gdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgIF90aGlzLnN0b3BNb3Rpb24oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQsIGluZm8pIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGdyYWIgdGhlIGdsb2JhbCBkcmFnIGdlc3R1cmUgbG9jayAtIG1heWJlIG1ha2UgdGhpcyBwYXJ0IG9mIFBhblNlc3Npb25cbiAgICAgICAgICAgIHZhciBfYyA9IF90aGlzLnByb3BzLCBkcmFnID0gX2MuZHJhZywgZHJhZ1Byb3BhZ2F0aW9uID0gX2MuZHJhZ1Byb3BhZ2F0aW9uO1xuICAgICAgICAgICAgaWYgKGRyYWcgJiYgIWRyYWdQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcGVuR2xvYmFsTG9jaylcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3Blbkdsb2JhbExvY2soKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuR2xvYmFsTG9jayA9IGdldEdsb2JhbExvY2soZHJhZyk7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uICd0IGhhdmUgdGhlIGxvY2ssIGRvbid0IHN0YXJ0IGRyYWdnaW5nXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5vcGVuR2xvYmFsTG9jaylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZWNvcmQgdGhlIHByb2dyZXNzIG9mIHRoZSBtb3VzZSB3aXRoaW4gdGhlIGRyYWdnYWJsZSBlbGVtZW50IG9uIGVhY2ggYXhpcy5cbiAgICAgICAgICAgICAqIG9uUGFuLCB3ZSdyZSBnb2luZyB0byB1c2UgdGhpcyB0byBjYWxjdWxhdGUgYSBuZXcgYm91bmRpbmcgYm94IGZvciB0aGUgZWxlbWVudCB0b1xuICAgICAgICAgICAgICogcHJvamVjdCBpbnRvLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgZXZlbiBpZiB0aGUgRE9NIGVsZW1lbnQgbW92ZXMgdmlhIGEgcmVsYXlvdXQsIGl0J2xsXG4gICAgICAgICAgICAgKiBzdGljayB0byB0aGUgY29ycmVjdCBwbGFjZSB1bmRlciB0aGUgcG9pbnRlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgX3RoaXMucHJlcGFyZUJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICBfdGhpcy52aXN1YWxFbGVtZW50LmxvY2tUYXJnZXRCb3goKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVzb2x2ZSB0aGUgZHJhZyBjb25zdHJhaW50cy4gVGhlc2UgYXJlIGVpdGhlciBzZXQgYXMgdG9wL3JpZ2h0L2JvdHRvbS9sZWZ0IGNvbnN0cmFpbnRzXG4gICAgICAgICAgICAgKiByZWxhdGl2ZSB0byB0aGUgZWxlbWVudCdzIGxheW91dCwgb3IgYSByZWYgdG8gYW5vdGhlciBlbGVtZW50LiBCb3RoIG5lZWQgY29udmVydGluZyB0b1xuICAgICAgICAgICAgICogdmlld3BvcnQgY29vcmRpbmF0ZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIF90aGlzLnJlc29sdmVEcmFnQ29uc3RyYWludHMoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2hlbiBkcmFnZ2luZyBzdGFydHMsIHdlIHdhbnQgdG8gZmluZCB3aGVyZSB0aGUgY3Vyc29yIGlzIHJlbGF0aXZlIHRvIHRoZSBib3VuZGluZyBib3hcbiAgICAgICAgICAgICAqIG9mIHRoZSBlbGVtZW50LiBFdmVyeSBmcmFtZSwgd2UgY2FsY3VsYXRlIGEgbmV3IGJvdW5kaW5nIGJveCB1c2luZyB0aGlzIHJlbGF0aXZlIHBvc2l0aW9uXG4gICAgICAgICAgICAgKiBhbmQgbGV0IHRoZSB2aXN1YWxFbGVtZW50IHJlbmRlcmVyIGZpZ3VyZSBvdXQgaG93IHRvIHJlcHJvamVjdCB0aGUgZWxlbWVudCBpbnRvIHRoaXMgYm91bmRpbmdcbiAgICAgICAgICAgICAqIGJveC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBCeSBkb2luZyBpdCB0aGlzIHdheSwgcmF0aGVyIHRoYW4gYXBwbHlpbmcgYW4geC95IHRyYW5zZm9ybSBkaXJlY3RseSB0byB0aGUgZWxlbWVudCxcbiAgICAgICAgICAgICAqIHdlIGNhbiBlbnN1cmUgdGhlIGNvbXBvbmVudCBhbHdheXMgdmlzdWFsbHkgc3RpY2tzIHRvIHRoZSBjdXJzb3IgYXMgd2UnZCBleHBlY3QsIGV2ZW5cbiAgICAgICAgICAgICAqIGlmIHRoZSBET00gZWxlbWVudCBpdHNlbGYgY2hhbmdlcyBsYXlvdXQgYXMgYSByZXN1bHQgb2YgUmVhY3QgdXBkYXRlcyB0aGUgdXNlciBtaWdodFxuICAgICAgICAgICAgICogbWFrZSBiYXNlZCBvbiB0aGUgZHJhZyBwb3NpdGlvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gZ2V0Vmlld3BvcnRQb2ludEZyb21FdmVudChldmVudCkucG9pbnQ7XG4gICAgICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnZpc3VhbEVsZW1lbnQudGFyZ2V0Qm94W2F4aXNdLCBtaW4gPSBfYS5taW4sIG1heCA9IF9hLm1heDtcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJzb3JQcm9ncmVzc1theGlzXSA9IGN1cnNvclByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgID8gY3Vyc29yUHJvZ3Jlc3NbYXhpc11cbiAgICAgICAgICAgICAgICAgICAgOiBwcm9ncmVzcyhtaW4sIG1heCwgcG9pbnRbYXhpc10pO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElmIHdlIGhhdmUgZXh0ZXJuYWwgZHJhZyBNb3Rpb25WYWx1ZXMsIHJlY29yZCB0aGVpciBvcmlnaW4gcG9pbnQuIE9uIHBvaW50ZXJtb3ZlXG4gICAgICAgICAgICAgICAgICogd2UnbGwgYXBwbHkgdGhlIHBhbiBnZXN0dXJlIG9mZnNldCBkaXJlY3RseSB0byB0aGlzIHZhbHVlLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBheGlzVmFsdWUgPSBfdGhpcy5nZXRBeGlzTW90aW9uVmFsdWUoYXhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGF4aXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vcmlnaW5Qb2ludFtheGlzXSA9IGF4aXNWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IGRyYWcgc3RhdHVzXG4gICAgICAgICAgICBfdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgLy8gRmlyZSBvbkRyYWdTdGFydCBldmVudFxuICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucHJvcHMpLm9uRHJhZ1N0YXJ0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgZXZlbnQsIGluZm8pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25Nb3ZlID0gZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICB2YXIgX2UgPSBfdGhpcy5wcm9wcywgZHJhZ1Byb3BhZ2F0aW9uID0gX2UuZHJhZ1Byb3BhZ2F0aW9uLCBkcmFnRGlyZWN0aW9uTG9jayA9IF9lLmRyYWdEaXJlY3Rpb25Mb2NrO1xuICAgICAgICAgICAgLy8gSWYgd2UgZGlkbid0IHN1Y2Nlc3NmdWxseSByZWNlaXZlIHRoZSBnZXN0dXJlIGxvY2ssIGVhcmx5IHJldHVybi5cbiAgICAgICAgICAgIGlmICghZHJhZ1Byb3BhZ2F0aW9uICYmICFfdGhpcy5vcGVuR2xvYmFsTG9jaylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gaW5mby5vZmZzZXQ7XG4gICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGRldGVjdCBkcmFnIGRpcmVjdGlvbiBpZiBkaXJlY3Rpb25Mb2NrIGlzIHRydWVcbiAgICAgICAgICAgIGlmIChkcmFnRGlyZWN0aW9uTG9jayAmJiBfdGhpcy5jdXJyZW50RGlyZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudERpcmVjdGlvbiA9IGdldEN1cnJlbnREaXJlY3Rpb24ob2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBzdWNjZXNzZnVsbHkgc2V0IGEgZGlyZWN0aW9uLCBub3RpZnkgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY3VycmVudERpcmVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5wcm9wcykub25EaXJlY3Rpb25Mb2NrKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgX3RoaXMuY3VycmVudERpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBlYWNoIHBvaW50IHdpdGggdGhlIGxhdGVzdCBwb3NpdGlvblxuICAgICAgICAgICAgX3RoaXMudXBkYXRlQXhpcyhcInhcIiwgZXZlbnQsIG9mZnNldCk7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBeGlzKFwieVwiLCBldmVudCwgb2Zmc2V0KTtcbiAgICAgICAgICAgIC8vIEZpcmUgb25EcmFnIGV2ZW50XG4gICAgICAgICAgICAoX2QgPSAoX2MgPSBfdGhpcy5wcm9wcykub25EcmFnKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChfYywgZXZlbnQsIGluZm8pO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBsYXN0IHBvaW50ZXIgZXZlbnRcbiAgICAgICAgICAgIGxhc3RQb2ludGVyRXZlbnQgPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uRW5kID0gZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7IHJldHVybiBfdGhpcy5zdG9wKGV2ZW50LCBpbmZvKTsgfTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybVBhZ2VQb2ludCA9IHRoaXMucHJvcHMudHJhbnNmb3JtUGFnZVBvaW50O1xuICAgICAgICB0aGlzLnBhblNlc3Npb24gPSBuZXcgUGFuU2Vzc2lvbihvcmlnaW5FdmVudCwge1xuICAgICAgICAgICAgb25TZXNzaW9uU3RhcnQ6IG9uU2Vzc2lvblN0YXJ0LFxuICAgICAgICAgICAgb25TdGFydDogb25TdGFydCxcbiAgICAgICAgICAgIG9uTW92ZTogb25Nb3ZlLFxuICAgICAgICAgICAgb25FbmQ6IG9uRW5kLFxuICAgICAgICB9LCB7IHRyYW5zZm9ybVBhZ2VQb2ludDogdHJhbnNmb3JtUGFnZVBvaW50IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoZSBjb21wb25lbnQncyBsYXlvdXQgYW5kIHRhcmdldCBib3VuZGluZyBib3hlcyBhcmUgdXAtdG8tZGF0ZS5cbiAgICAgKi9cbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5wcmVwYXJlQm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy52aXN1YWxFbGVtZW50LmdldEluc3RhbmNlKCk7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy52aXN1YWxFbGVtZW50LnJlc2V0VHJhbnNmb3JtKCk7XG4gICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC5tZWFzdXJlTGF5b3V0KCk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB0aGlzLnZpc3VhbEVsZW1lbnQucmViYXNlVGFyZ2V0Qm94KHRydWUpO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUucmVzb2x2ZURyYWdDb25zdHJhaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRyYWdDb25zdHJhaW50cyA9IHRoaXMucHJvcHMuZHJhZ0NvbnN0cmFpbnRzO1xuICAgICAgICBpZiAoZHJhZ0NvbnN0cmFpbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gaXNSZWZPYmplY3QoZHJhZ0NvbnN0cmFpbnRzKVxuICAgICAgICAgICAgICAgID8gdGhpcy5yZXNvbHZlUmVmQ29uc3RyYWludHModGhpcy52aXN1YWxFbGVtZW50LmJveCwgZHJhZ0NvbnN0cmFpbnRzKVxuICAgICAgICAgICAgICAgIDogY2FsY1JlbGF0aXZlQ29uc3RyYWludHModGhpcy52aXN1YWxFbGVtZW50LmJveCwgZHJhZ0NvbnN0cmFpbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RyYWludHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgd2UncmUgb3V0cHV0dGluZyB0byBleHRlcm5hbCBNb3Rpb25WYWx1ZXMsIHdlIHdhbnQgdG8gcmViYXNlIHRoZSBtZWFzdXJlZCBjb25zdHJhaW50c1xuICAgICAgICAgKiBmcm9tIHZpZXdwb3J0LXJlbGF0aXZlIHRvIGNvbXBvbmVudC1yZWxhdGl2ZS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLmNvbnN0cmFpbnRzICYmICF0aGlzLmhhc011dGF0ZWRDb25zdHJhaW50cykge1xuICAgICAgICAgICAgZWFjaEF4aXMoZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZ2V0QXhpc01vdGlvblZhbHVlKGF4aXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnN0cmFpbnRzW2F4aXNdID0gcmViYXNlQXhpc0NvbnN0cmFpbnRzKF90aGlzLnZpc3VhbEVsZW1lbnQuYm94W2F4aXNdLCBfdGhpcy5jb25zdHJhaW50c1theGlzXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLnJlc29sdmVSZWZDb25zdHJhaW50cyA9IGZ1bmN0aW9uIChsYXlvdXRCb3gsIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIG9uTWVhc3VyZURyYWdDb25zdHJhaW50cyA9IF9hLm9uTWVhc3VyZURyYWdDb25zdHJhaW50cywgdHJhbnNmb3JtUGFnZVBvaW50ID0gX2EudHJhbnNmb3JtUGFnZVBvaW50O1xuICAgICAgICB2YXIgY29uc3RyYWludHNFbGVtZW50ID0gY29uc3RyYWludHMuY3VycmVudDtcbiAgICAgICAgaW52YXJpYW50KGNvbnN0cmFpbnRzRWxlbWVudCAhPT0gbnVsbCwgXCJJZiBgZHJhZ0NvbnN0cmFpbnRzYCBpcyBzZXQgYXMgYSBSZWFjdCByZWYsIHRoYXQgcmVmIG11c3QgYmUgcGFzc2VkIHRvIGFub3RoZXIgY29tcG9uZW50J3MgYHJlZmAgcHJvcC5cIik7XG4gICAgICAgIHRoaXMuY29uc3RyYWludHNCb3ggPSBnZXRCb3VuZGluZ0JveChjb25zdHJhaW50c0VsZW1lbnQsIHRyYW5zZm9ybVBhZ2VQb2ludCk7XG4gICAgICAgIHZhciBtZWFzdXJlZENvbnN0cmFpbnRzID0gY2FsY1ZpZXdwb3J0Q29uc3RyYWludHMobGF5b3V0Qm94LCB0aGlzLmNvbnN0cmFpbnRzQm94KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZXJlJ3MgYW4gb25NZWFzdXJlRHJhZ0NvbnN0cmFpbnRzIGxpc3RlbmVyIHdlIGNhbGwgaXQgYW5kXG4gICAgICAgICAqIGlmIGRpZmZlcmVudCBjb25zdHJhaW50cyBhcmUgcmV0dXJuZWQsIHNldCBjb25zdHJhaW50cyB0byB0aGF0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAob25NZWFzdXJlRHJhZ0NvbnN0cmFpbnRzKSB7XG4gICAgICAgICAgICB2YXIgdXNlckNvbnN0cmFpbnRzID0gb25NZWFzdXJlRHJhZ0NvbnN0cmFpbnRzKGNvbnZlcnRBeGlzQm94VG9Cb3VuZGluZ0JveChtZWFzdXJlZENvbnN0cmFpbnRzKSk7XG4gICAgICAgICAgICB0aGlzLmhhc011dGF0ZWRDb25zdHJhaW50cyA9ICEhdXNlckNvbnN0cmFpbnRzO1xuICAgICAgICAgICAgaWYgKHVzZXJDb25zdHJhaW50cykge1xuICAgICAgICAgICAgICAgIG1lYXN1cmVkQ29uc3RyYWludHMgPSBjb252ZXJ0Qm91bmRpbmdCb3hUb0F4aXNCb3godXNlckNvbnN0cmFpbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVhc3VyZWRDb25zdHJhaW50cztcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLmNhbmNlbERyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVuYmxvY2tWaWV3cG9ydFNjcm9sbCgpO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYW5TZXNzaW9uICYmIHRoaXMucGFuU2Vzc2lvbi5lbmQoKTtcbiAgICAgICAgdGhpcy5wYW5TZXNzaW9uID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRyYWdQcm9wYWdhdGlvbiAmJiB0aGlzLm9wZW5HbG9iYWxMb2NrKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5HbG9iYWxMb2NrKCk7XG4gICAgICAgICAgICB0aGlzLm9wZW5HbG9iYWxMb2NrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC51bmxvY2tUYXJnZXRCb3goKTtcbiAgICAgICAgKF9hID0gdGhpcy5wYW5TZXNzaW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW5kKCk7XG4gICAgICAgIHRoaXMucGFuU2Vzc2lvbiA9IG51bGw7XG4gICAgICAgIHZhciBpc0RyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nO1xuICAgICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLnByb3BzLCBkcmFnTW9tZW50dW0gPSBfYi5kcmFnTW9tZW50dW0sIGRyYWdFbGFzdGljID0gX2IuZHJhZ0VsYXN0aWMsIG9uRHJhZ0VuZCA9IF9iLm9uRHJhZ0VuZDtcbiAgICAgICAgaWYgKGRyYWdNb21lbnR1bSB8fCBkcmFnRWxhc3RpYykge1xuICAgICAgICAgICAgdmFyIHZlbG9jaXR5ID0gaW5mby52ZWxvY2l0eTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZURyYWdFbmQodmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgICAgIG9uRHJhZ0VuZCA9PT0gbnVsbCB8fCBvbkRyYWdFbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uRHJhZ0VuZChldmVudCwgaW5mbyk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5zbmFwVG9DdXJzb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmVwYXJlQm91bmRpbmdCb3goKTtcbiAgICAgICAgZWFjaEF4aXMoZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgIHZhciBheGlzVmFsdWUgPSBfdGhpcy5nZXRBeGlzTW90aW9uVmFsdWUoYXhpcyk7XG4gICAgICAgICAgICBpZiAoYXhpc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gZ2V0Vmlld3BvcnRQb2ludEZyb21FdmVudChldmVudCkucG9pbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGJveCA9IF90aGlzLnZpc3VhbEVsZW1lbnQuYm94O1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGhfMSA9IGJveFtheGlzXS5tYXggLSBib3hbYXhpc10ubWluO1xuICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSBib3hbYXhpc10ubWluICsgbGVuZ3RoXzEgLyAyO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwb2ludFtheGlzXSAtIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcmlnaW5Qb2ludFtheGlzXSA9IHBvaW50W2F4aXNdO1xuICAgICAgICAgICAgICAgIGF4aXNWYWx1ZS5zZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnNvclByb2dyZXNzW2F4aXNdID0gMC41O1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZpc3VhbEVsZW1lbnRBeGlzKGF4aXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHNwZWNpZmllZCBheGlzIHdpdGggdGhlIGxhdGVzdCBwb2ludGVyIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLnVwZGF0ZUF4aXMgPSBmdW5jdGlvbiAoYXhpcywgZXZlbnQsIG9mZnNldCkge1xuICAgICAgICB2YXIgZHJhZyA9IHRoaXMucHJvcHMuZHJhZztcbiAgICAgICAgLy8gSWYgd2UncmUgbm90IGRyYWdnaW5nIHRoaXMgYXhpcywgZG8gYW4gZWFybHkgcmV0dXJuLlxuICAgICAgICBpZiAoIXNob3VsZERyYWcoYXhpcywgZHJhZywgdGhpcy5jdXJyZW50RGlyZWN0aW9uKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXhpc01vdGlvblZhbHVlKGF4aXMpXG4gICAgICAgICAgICA/IHRoaXMudXBkYXRlQXhpc01vdGlvblZhbHVlKGF4aXMsIG9mZnNldClcbiAgICAgICAgICAgIDogdGhpcy51cGRhdGVWaXN1YWxFbGVtZW50QXhpcyhheGlzLCBldmVudCk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS51cGRhdGVBeGlzTW90aW9uVmFsdWUgPSBmdW5jdGlvbiAoYXhpcywgb2Zmc2V0KSB7XG4gICAgICAgIHZhciBheGlzVmFsdWUgPSB0aGlzLmdldEF4aXNNb3Rpb25WYWx1ZShheGlzKTtcbiAgICAgICAgaWYgKCFvZmZzZXQgfHwgIWF4aXNWYWx1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGRyYWdFbGFzdGljID0gdGhpcy5wcm9wcy5kcmFnRWxhc3RpYztcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMub3JpZ2luUG9pbnRbYXhpc10gKyBvZmZzZXRbYXhpc107XG4gICAgICAgIHZhciB1cGRhdGUgPSB0aGlzLmNvbnN0cmFpbnRzXG4gICAgICAgICAgICA/IGFwcGx5Q29uc3RyYWludHMobmV4dFZhbHVlLCB0aGlzLmNvbnN0cmFpbnRzW2F4aXNdLCBkcmFnRWxhc3RpYylcbiAgICAgICAgICAgIDogbmV4dFZhbHVlO1xuICAgICAgICBheGlzVmFsdWUuc2V0KHVwZGF0ZSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS51cGRhdGVWaXN1YWxFbGVtZW50QXhpcyA9IGZ1bmN0aW9uIChheGlzLCBldmVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBkcmFnRWxhc3RpYyA9IHRoaXMucHJvcHMuZHJhZ0VsYXN0aWM7XG4gICAgICAgIC8vIEdldCB0aGUgYWN0dWFsIGxheW91dCBib3VuZGluZyBib3ggb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgdmFyIGF4aXNMYXlvdXQgPSB0aGlzLnZpc3VhbEVsZW1lbnQuYm94W2F4aXNdO1xuICAgICAgICAvLyBDYWxjdWxhdGUgaXRzIGN1cnJlbnQgbGVuZ3RoLiBJbiB0aGUgZnV0dXJlIHdlIG1pZ2h0IHdhbnQgdG8gbGVycCB0aGlzIHRvIGFuaW1hdGVcbiAgICAgICAgLy8gYmV0d2VlbiBsZW5ndGhzIGlmIHRoZSBsYXlvdXQgY2hhbmdlcyBhcyB3ZSBjaGFuZ2UgdGhlIERPTVxuICAgICAgICB2YXIgYXhpc0xlbmd0aCA9IGF4aXNMYXlvdXQubWF4IC0gYXhpc0xheW91dC5taW47XG4gICAgICAgIC8vIEdldCB0aGUgaW5pdGlhbCBwcm9ncmVzcyB0aGF0IHRoZSBwb2ludGVyIHNhdCBvbiB0aGlzIGF4aXMgb24gZ2VzdHVyZSBzdGFydC5cbiAgICAgICAgdmFyIGF4aXNQcm9ncmVzcyA9IHRoaXMuY3Vyc29yUHJvZ3Jlc3NbYXhpc107XG4gICAgICAgIHZhciBwb2ludCA9IGdldFZpZXdwb3J0UG9pbnRGcm9tRXZlbnQoZXZlbnQpLnBvaW50O1xuICAgICAgICAvLyBDYWxjdWxhdGUgYSBuZXcgbWluIHBvaW50IGJhc2VkIG9uIHRoZSBsYXRlc3QgcG9pbnRlciBwb3NpdGlvbiwgY29uc3RyYWludHMgYW5kIGVsYXN0aWNcbiAgICAgICAgdmFyIG1pbiA9IGNhbGNDb25zdHJhaW5lZE1pblBvaW50KHBvaW50W2F4aXNdLCBheGlzTGVuZ3RoLCBheGlzUHJvZ3Jlc3MsIChfYSA9IHRoaXMuY29uc3RyYWludHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtheGlzXSwgZHJhZ0VsYXN0aWMpO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGF4aXMgdmlld3BvcnQgdGFyZ2V0IHdpdGggdGhpcyBuZXcgbWluIGFuZCB0aGUgbGVuZ3RoXG4gICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC5zZXRBeGlzVGFyZ2V0KGF4aXMsIG1pbiwgbWluICsgYXhpc0xlbmd0aCk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS51cGRhdGVQcm9wcyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IgPSBfYS5kcmFnLCBkcmFnID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIF9jID0gX2EuZHJhZ0RpcmVjdGlvbkxvY2ssIGRyYWdEaXJlY3Rpb25Mb2NrID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIF9kID0gX2EuZHJhZ1Byb3BhZ2F0aW9uLCBkcmFnUHJvcGFnYXRpb24gPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBfYS5kcmFnQ29uc3RyYWludHMsIGRyYWdDb25zdHJhaW50cyA9IF9lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9lLCBfZiA9IF9hLmRyYWdFbGFzdGljLCBkcmFnRWxhc3RpYyA9IF9mID09PSB2b2lkIDAgPyAwLjM1IDogX2YsIF9nID0gX2EuZHJhZ01vbWVudHVtLCBkcmFnTW9tZW50dW0gPSBfZyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9nLCByZW1haW5pbmdQcm9wcyA9IF9fcmVzdChfYSwgW1wiZHJhZ1wiLCBcImRyYWdEaXJlY3Rpb25Mb2NrXCIsIFwiZHJhZ1Byb3BhZ2F0aW9uXCIsIFwiZHJhZ0NvbnN0cmFpbnRzXCIsIFwiZHJhZ0VsYXN0aWNcIiwgXCJkcmFnTW9tZW50dW1cIl0pO1xuICAgICAgICB0aGlzLnByb3BzID0gX19hc3NpZ24oeyBkcmFnOiBkcmFnLFxuICAgICAgICAgICAgZHJhZ0RpcmVjdGlvbkxvY2s6IGRyYWdEaXJlY3Rpb25Mb2NrLFxuICAgICAgICAgICAgZHJhZ1Byb3BhZ2F0aW9uOiBkcmFnUHJvcGFnYXRpb24sXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM6IGRyYWdDb25zdHJhaW50cyxcbiAgICAgICAgICAgIGRyYWdFbGFzdGljOiBkcmFnRWxhc3RpYyxcbiAgICAgICAgICAgIGRyYWdNb21lbnR1bTogZHJhZ01vbWVudHVtIH0sIHJlbWFpbmluZ1Byb3BzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERyYWcgd29ya3MgZGlmZmVyZW50bHkgZGVwZW5kaW5nIG9uIHdoaWNoIHByb3BzIGFyZSBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIC0gSWYgX2RyYWdYIGFuZCBfZHJhZ1kgYXJlIHByb3ZpZGVkLCB3ZSBvdXRwdXQgdGhlIGdlc3R1cmUgZGVsdGEgZGlyZWN0bHkgdG8gdGhvc2UgbW90aW9uIHZhbHVlcy5cbiAgICAgKiAtIElmIHRoZSBjb21wb25lbnQgd2lsbCBwZXJmb3JtIGxheW91dCBhbmltYXRpb25zLCB3ZSBvdXRwdXQgdGhlIGdlc3R1cmUgdG8gdGhlIGNvbXBvbmVudCdzXG4gICAgICogICAgICB2aXN1YWwgYm91bmRpbmcgYm94XG4gICAgICogLSBPdGhlcndpc2UsIHdlIGFwcGx5IHRoZSBkZWx0YSB0byB0aGUgeC95IG1vdGlvbiB2YWx1ZXMuXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuZ2V0QXhpc01vdGlvblZhbHVlID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbGF5b3V0ID0gX2EubGF5b3V0LCBsYXlvdXRJZCA9IF9hLmxheW91dElkO1xuICAgICAgICB2YXIgZHJhZ0tleSA9IFwiX2RyYWdcIiArIGF4aXMudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHNbZHJhZ0tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW2RyYWdLZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsYXlvdXQgJiYgbGF5b3V0SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlzdWFsRWxlbWVudC5nZXRWYWx1ZShheGlzLCAwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuYW5pbWF0ZURyYWdFbmQgPSBmdW5jdGlvbiAodmVsb2NpdHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgZHJhZyA9IF9hLmRyYWcsIGRyYWdNb21lbnR1bSA9IF9hLmRyYWdNb21lbnR1bSwgZHJhZ0VsYXN0aWMgPSBfYS5kcmFnRWxhc3RpYywgZHJhZ1RyYW5zaXRpb24gPSBfYS5kcmFnVHJhbnNpdGlvbjtcbiAgICAgICAgdmFyIG1vbWVudHVtQW5pbWF0aW9ucyA9IGVhY2hBeGlzKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgICAgICAgICBpZiAoIXNob3VsZERyYWcoYXhpcywgZHJhZywgX3RoaXMuY3VycmVudERpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IF90aGlzLmNvbnN0cmFpbnRzID8gX3RoaXMuY29uc3RyYWludHNbYXhpc10gOiB7fTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3ZlcmRhbXAgdGhlIGJvdW5kYXJ5IHNwcmluZyBpZiBgZHJhZ0VsYXN0aWNgIGlzIGRpc2FibGVkLiBUaGVyZSdzIHN0aWxsIGEgZnJhbWVcbiAgICAgICAgICAgICAqIG9mIHNwcmluZyBhbmltYXRpb25zIHNvIHdlIHNob3VsZCBsb29rIGludG8gYWRkaW5nIGEgZGlzYWJsZSBzcHJpbmcgb3B0aW9uIHRvIGBpbmVydGlhYC5cbiAgICAgICAgICAgICAqIFdlIGNvdWxkIGRvIHNvbWV0aGluZyBoZXJlIHdoZXJlIHdlIGFmZmVjdCB0aGUgYGJvdW5jZVN0aWZmbmVzc2AgYW5kIGBib3VuY2VEYW1waW5nYFxuICAgICAgICAgICAgICogdXNpbmcgdGhlIHZhbHVlIG9mIGBkcmFnRWxhc3RpY2AuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBib3VuY2VTdGlmZm5lc3MgPSBkcmFnRWxhc3RpYyA/IDIwMCA6IDEwMDAwMDA7XG4gICAgICAgICAgICB2YXIgYm91bmNlRGFtcGluZyA9IGRyYWdFbGFzdGljID8gNDAgOiAxMDAwMDAwMDtcbiAgICAgICAgICAgIHZhciBpbmVydGlhID0gX19hc3NpZ24oX19hc3NpZ24oeyB0eXBlOiBcImluZXJ0aWFcIiwgdmVsb2NpdHk6IGRyYWdNb21lbnR1bSA/IHZlbG9jaXR5W2F4aXNdIDogMCwgYm91bmNlU3RpZmZuZXNzOiBib3VuY2VTdGlmZm5lc3MsXG4gICAgICAgICAgICAgICAgYm91bmNlRGFtcGluZzogYm91bmNlRGFtcGluZywgdGltZUNvbnN0YW50OiA3NTAsIHJlc3REZWx0YTogMSwgcmVzdFNwZWVkOiAxMCB9LCBkcmFnVHJhbnNpdGlvbiksIHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgLy8gSWYgd2UncmUgbm90IGFuaW1hdGluZyBvbiBhbiBleHRlcm5hbGx5LXByb3ZpZGVkIGBNb3Rpb25WYWx1ZWAgd2UgY2FuIHVzZSB0aGVcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCdzIGFuaW1hdGlvbiBjb250cm9scyB3aGljaCB3aWxsIGhhbmRsZSBpbnRlcmFjdGlvbnMgd2l0aCB3aGlsZUhvdmVyIChldGMpLFxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIGp1c3QgaGF2ZSB0byBhbmltYXRlIHRoZSBgTW90aW9uVmFsdWVgIGl0c2VsZi5cbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRBeGlzTW90aW9uVmFsdWUoYXhpcylcbiAgICAgICAgICAgICAgICA/IF90aGlzLnN0YXJ0QXhpc1ZhbHVlQW5pbWF0aW9uKGF4aXMsIGluZXJ0aWEpXG4gICAgICAgICAgICAgICAgOiBfdGhpcy52aXN1YWxFbGVtZW50LnN0YXJ0TGF5b3V0QXhpc0FuaW1hdGlvbihheGlzLCBpbmVydGlhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJ1biBhbGwgYW5pbWF0aW9ucyBhbmQgdGhlbiByZXNvbHZlIHRoZSBuZXcgZHJhZyBjb25zdHJhaW50cy5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG1vbWVudHVtQW5pbWF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucHJvcHMpLm9uRHJhZ1RyYW5zaXRpb25FbmQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5zdG9wTW90aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgdmFyIGF4aXNWYWx1ZSA9IF90aGlzLmdldEF4aXNNb3Rpb25WYWx1ZShheGlzKTtcbiAgICAgICAgICAgIGF4aXNWYWx1ZVxuICAgICAgICAgICAgICAgID8gYXhpc1ZhbHVlLnN0b3AoKVxuICAgICAgICAgICAgICAgIDogX3RoaXMudmlzdWFsRWxlbWVudC5zdG9wTGF5b3V0QW5pbWF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuc3RhcnRBeGlzVmFsdWVBbmltYXRpb24gPSBmdW5jdGlvbiAoYXhpcywgdHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgYXhpc1ZhbHVlID0gdGhpcy5nZXRBeGlzTW90aW9uVmFsdWUoYXhpcyk7XG4gICAgICAgIGlmICghYXhpc1ZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gYXhpc1ZhbHVlLmdldCgpO1xuICAgICAgICBheGlzVmFsdWUuc2V0KGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGF4aXNWYWx1ZS5zZXQoY3VycmVudFZhbHVlKTsgLy8gU2V0IHR3aWNlIHRvIGhhcmQtcmVzZXQgdmVsb2NpdHlcbiAgICAgICAgcmV0dXJuIHN0YXJ0QW5pbWF0aW9uKGF4aXMsIGF4aXNWYWx1ZSwgMCwgdHJhbnNpdGlvbik7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5zY2FsZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBkcmFnID0gX2EuZHJhZywgZHJhZ0NvbnN0cmFpbnRzID0gX2EuZHJhZ0NvbnN0cmFpbnRzO1xuICAgICAgICBpZiAoIWlzUmVmT2JqZWN0KGRyYWdDb25zdHJhaW50cykgfHwgIXRoaXMuY29uc3RyYWludHNCb3gpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFN0b3AgYW55IGN1cnJlbnQgYW5pbWF0aW9ucyBhcyB0aGVyZSBjYW4gYmUgc29tZSB2aXN1YWwgZ2xpdGNoaW5nIGlmIHdlIHJlc2l6ZSBtaWQgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMuc3RvcE1vdGlvbigpO1xuICAgICAgICAvLyBSZWNvcmQgdGhlIHJlbGF0aXZlIHByb2dyZXNzIG9mIHRoZSB0YXJnZXRCb3ggcmVsYXRpdmUgdG8gdGhlIGNvbnN0cmFpbnRzQm94XG4gICAgICAgIHZhciBib3hQcm9ncmVzcyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgYm94UHJvZ3Jlc3NbYXhpc10gPSBjYWxjT3JpZ2luKF90aGlzLnZpc3VhbEVsZW1lbnQudGFyZ2V0Qm94W2F4aXNdLCBfdGhpcy5jb25zdHJhaW50c0JveFtheGlzXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yIGVhY2ggYXhpcywgY2FsY3VsYXRlIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBsYXlvdXQgYXhpcyB3aXRoaW4gdGhlIGNvbnN0cmFpbnRzLlxuICAgICAgICAgKiBUaGVuLCB1c2luZyB0aGUgbGF0ZXN0IGxheW91dCBhbmQgY29uc3RyYWludHMgbWVhc3VyZW1lbnRzLCByZXBvc2l0aW9uIHRoZSBuZXcgbGF5b3V0IGF4aXNcbiAgICAgICAgICogcHJvcG9ydGlvbmFsbHkgd2l0aGluIHRoZSBjb25zdHJhaW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJlcGFyZUJvdW5kaW5nQm94KCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZURyYWdDb25zdHJhaW50cygpO1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgaWYgKCFzaG91bGREcmFnKGF4aXMsIGRyYWcsIG51bGwpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRhcmdldEJveCByZWxhdGl2ZSB0byB0aGUgY29uc3RyYWludHNCb3ggdXNpbmcgdGhlXG4gICAgICAgICAgICAvLyBwcmV2aW91c2x5IGNhbGN1bGF0ZWQgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhciBfYSA9IGNhbGNQb3NpdGlvbkZyb21Qcm9ncmVzcyhfdGhpcy52aXN1YWxFbGVtZW50LnRhcmdldEJveFtheGlzXSwgX3RoaXMuY29uc3RyYWludHNCb3hbYXhpc10sIGJveFByb2dyZXNzW2F4aXNdKSwgbWluID0gX2EubWluLCBtYXggPSBfYS5tYXg7XG4gICAgICAgICAgICBfdGhpcy52aXN1YWxFbGVtZW50LnNldEF4aXNUYXJnZXQoYXhpcywgbWluLCBtYXgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB2aXN1YWxFbGVtZW50LmdldEluc3RhbmNlKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRhY2ggYSBwb2ludGVyZG93biBldmVudCBsaXN0ZW5lciBvbiB0aGlzIERPTSBlbGVtZW50IHRvIGluaXRpYXRlIGRyYWcgdHJhY2tpbmcuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc3RvcFBvaW50ZXJMaXN0ZW5lciA9IGFkZFBvaW50ZXJFdmVudChlbGVtZW50LCBcInBvaW50ZXJkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGRyYWcgPSBfYS5kcmFnLCBfYiA9IF9hLmRyYWdMaXN0ZW5lciwgZHJhZ0xpc3RlbmVyID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAgICAgICAgIGRyYWcgJiYgZHJhZ0xpc3RlbmVyICYmIF90aGlzLnN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRhY2ggYSB3aW5kb3cgcmVzaXplIGxpc3RlbmVyIHRvIHNjYWxlIHRoZSBkcmFnZ2FibGUgdGFyZ2V0IHdpdGhpbiBpdHMgZGVmaW5lZFxuICAgICAgICAgKiBjb25zdHJhaW50cyBhcyB0aGUgd2luZG93IHJlc2l6ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc3RvcFJlc2l6ZUxpc3RlbmVyID0gYWRkRG9tRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zY2FsZVBvaW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5zdXJlIGRyYWcgY29uc3RyYWludHMgYXJlIHJlc29sdmVkIGNvcnJlY3RseSByZWxhdGl2ZSB0byB0aGUgZHJhZ2dpbmcgZWxlbWVudFxuICAgICAgICAgKiB3aGVuZXZlciBpdHMgbGF5b3V0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc3RvcExheW91dFVwZGF0ZUxpc3RlbmVyID0gdmlzdWFsRWxlbWVudC5vbkxheW91dFVwZGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNEcmFnZ2luZylcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlRHJhZ0NvbnN0cmFpbnRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIHByZXZpb3VzIGNvbXBvbmVudCB3aXRoIHRoaXMgc2FtZSBsYXlvdXRJZCB3YXMgZHJhZ2dpbmcgYXQgdGhlIHRpbWVcbiAgICAgICAgICogaXQgd2FzIHVubW91bnRlZCwgd2Ugd2FudCB0byBjb250aW51ZSB0aGUgc2FtZSBnZXN0dXJlIG9uIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IHZpc3VhbEVsZW1lbnQucHJldlNuYXBzaG90O1xuICAgICAgICAocHJldlNuYXBzaG90ID09PSBudWxsIHx8IHByZXZTbmFwc2hvdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJldlNuYXBzaG90LmlzRHJhZ2dpbmcpICYmXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KGxhc3RQb2ludGVyRXZlbnQsIHtcbiAgICAgICAgICAgICAgICBjdXJzb3JQcm9ncmVzczogcHJldlNuYXBzaG90LmN1cnNvclByb2dyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgdGVhcmRvd24gdGhlIGRyYWcgZ2VzdHVyZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0b3BQb2ludGVyTGlzdGVuZXIgPT09IG51bGwgfHwgc3RvcFBvaW50ZXJMaXN0ZW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RvcFBvaW50ZXJMaXN0ZW5lcigpO1xuICAgICAgICAgICAgc3RvcFJlc2l6ZUxpc3RlbmVyID09PSBudWxsIHx8IHN0b3BSZXNpemVMaXN0ZW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RvcFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICBzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIgPT09IG51bGwgfHwgc3RvcExheW91dFVwZGF0ZUxpc3RlbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIF90aGlzLmNhbmNlbERyYWcoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzO1xufSgpKTtcbmZ1bmN0aW9uIHNob3VsZERyYWcoZGlyZWN0aW9uLCBkcmFnLCBjdXJyZW50RGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuICgoZHJhZyA9PT0gdHJ1ZSB8fCBkcmFnID09PSBkaXJlY3Rpb24pICYmXG4gICAgICAgIChjdXJyZW50RGlyZWN0aW9uID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3Rpb24gPT09IGRpcmVjdGlvbikpO1xufVxuLyoqXG4gKiBCYXNlZCBvbiBhbiB4L3kgb2Zmc2V0IGRldGVybWluZSB0aGUgY3VycmVudCBkcmFnIGRpcmVjdGlvbi4gSWYgYm90aCBheGlzJyBvZmZzZXRzIGFyZSBsb3dlclxuICogdGhhbiB0aGUgcHJvdmlkZWQgdGhyZXNob2xkLCByZXR1cm4gYG51bGxgLlxuICpcbiAqIEBwYXJhbSBvZmZzZXQgLSBUaGUgeC95IG9mZnNldCBmcm9tIG9yaWdpbi5cbiAqIEBwYXJhbSBsb2NrVGhyZXNob2xkIC0gKE9wdGlvbmFsKSAtIHRoZSBtaW5pbXVtIGFic29sdXRlIG9mZnNldCBiZWZvcmUgd2UgY2FuIGRldGVybWluZSBhIGRyYWcgZGlyZWN0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRDdXJyZW50RGlyZWN0aW9uKG9mZnNldCwgbG9ja1RocmVzaG9sZCkge1xuICAgIGlmIChsb2NrVGhyZXNob2xkID09PSB2b2lkIDApIHsgbG9ja1RocmVzaG9sZCA9IDEwOyB9XG4gICAgdmFyIGRpcmVjdGlvbiA9IG51bGw7XG4gICAgaWYgKE1hdGguYWJzKG9mZnNldC55KSA+IGxvY2tUaHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJ5XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKE1hdGguYWJzKG9mZnNldC54KSA+IGxvY2tUaHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJ4XCI7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3Rpb247XG59XG5cbi8qKlxuICogQSBob29rIHRoYXQgYWxsb3dzIGFuIGVsZW1lbnQgdG8gYmUgZHJhZ2dlZC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdXNlRHJhZyhwcm9wcywgdmlzdWFsRWxlbWVudCkge1xuICAgIHZhciBncm91cERyYWdDb250cm9scyA9IHByb3BzLmRyYWdDb250cm9scztcbiAgICB2YXIgdHJhbnNmb3JtUGFnZVBvaW50ID0gdXNlQ29udGV4dChNb3Rpb25Db25maWdDb250ZXh0KS50cmFuc2Zvcm1QYWdlUG9pbnQ7XG4gICAgdmFyIGRyYWdDb250cm9scyA9IHVzZUNvbnN0YW50KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzKHtcbiAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQ6IHZpc3VhbEVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRyYWdDb250cm9scy51cGRhdGVQcm9wcyhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IHRyYW5zZm9ybVBhZ2VQb2ludDogdHJhbnNmb3JtUGFnZVBvaW50IH0pKTtcbiAgICAvLyBJZiB3ZSd2ZSBiZWVuIHByb3ZpZGVkIGEgRHJhZ0NvbnRyb2xzIGZvciBtYW51YWwgY29udHJvbCBvdmVyIHRoZSBkcmFnIGdlc3R1cmUsXG4gICAgLy8gc3Vic2NyaWJlIHRoaXMgY29tcG9uZW50IHRvIGl0IG9uIG1vdW50LlxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBncm91cERyYWdDb250cm9scyAmJiBncm91cERyYWdDb250cm9scy5zdWJzY3JpYmUoZHJhZ0NvbnRyb2xzKTsgfSwgW2RyYWdDb250cm9sc10pO1xuICAgIC8vIE1vdW50IHRoZSBkcmFnIGNvbnRyb2xzIHdpdGggdGhlIHZpc3VhbEVsZW1lbnRcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gZHJhZ0NvbnRyb2xzLm1vdW50KHZpc3VhbEVsZW1lbnQpOyB9LCBbXSk7XG59XG5cbnZhciBtYWtlUmVuZGVybGVzc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChob29rKSB7IHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBob29rKHByb3BzKTtcbiAgICByZXR1cm4gbnVsbDtcbn07IH07XG5cbnZhciBDb21wb25lbnQgPSBtYWtlUmVuZGVybGVzc0NvbXBvbmVudChmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQsIHByb3BzID0gX19yZXN0KF9hLCBbXCJ2aXN1YWxFbGVtZW50XCJdKTtcbiAgICByZXR1cm4gdXNlRHJhZyhwcm9wcywgdmlzdWFsRWxlbWVudCk7XG59KTtcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgRHJhZyA9IHtcbiAgICBrZXk6IFwiZHJhZ1wiLFxuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAhIXByb3BzLmRyYWc7IH0sXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDb21wb25lbnQ7IH0sXG59O1xuXG5mdW5jdGlvbiB1c2VVbm1vdW50RWZmZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjaygpOyB9OyB9LCBbXSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoYW5kbGVycyAtXG4gKiBAcGFyYW0gcmVmIC1cbiAqXG4gKiBAaW50ZXJuYWxyZW1hcmtzXG4gKiBDdXJyZW50bHkgdGhpcyBzZXRzIG5ldyBwYW4gZ2VzdHVyZSBmdW5jdGlvbnMgZXZlcnkgcmVuZGVyLiBUaGUgbWVtbyByb3V0ZSBoYXMgYmVlbiBleHBsb3JlZFxuICogaW4gdGhlIHBhc3QgYnV0IHVsdGltYXRlbHkgd2UncmUgc3RpbGwgY3JlYXRpbmcgbmV3IGZ1bmN0aW9ucyBldmVyeSByZW5kZXIuIEFuIG9wdGltaXNhdGlvblxuICogdG8gZXhwbG9yZSBpcyBjcmVhdGluZyB0aGUgcGFuIGdlc3R1cmVzIGFuZCBsb2FkaW5nIHRoZW0gaW50byBhIGByZWZgLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VQYW5HZXN0dXJlKF9hLCByZWYpIHtcbiAgICB2YXIgb25QYW4gPSBfYS5vblBhbiwgb25QYW5TdGFydCA9IF9hLm9uUGFuU3RhcnQsIG9uUGFuRW5kID0gX2Eub25QYW5FbmQsIG9uUGFuU2Vzc2lvblN0YXJ0ID0gX2Eub25QYW5TZXNzaW9uU3RhcnQ7XG4gICAgdmFyIGhhc1BhbkV2ZW50cyA9IG9uUGFuIHx8IG9uUGFuU3RhcnQgfHwgb25QYW5FbmQgfHwgb25QYW5TZXNzaW9uU3RhcnQ7XG4gICAgdmFyIHBhblNlc3Npb24gPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHRyYW5zZm9ybVBhZ2VQb2ludCA9IHVzZUNvbnRleHQoTW90aW9uQ29uZmlnQ29udGV4dCkudHJhbnNmb3JtUGFnZVBvaW50O1xuICAgIHZhciBoYW5kbGVycyA9IHtcbiAgICAgICAgb25TZXNzaW9uU3RhcnQ6IG9uUGFuU2Vzc2lvblN0YXJ0LFxuICAgICAgICBvblN0YXJ0OiBvblBhblN0YXJ0LFxuICAgICAgICBvbk1vdmU6IG9uUGFuLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgICAgICBwYW5TZXNzaW9uLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgb25QYW5FbmQgJiYgb25QYW5FbmQoZXZlbnQsIGluZm8pO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBhblNlc3Npb24uY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcGFuU2Vzc2lvbi5jdXJyZW50LnVwZGF0ZUhhbmRsZXJzKGhhbmRsZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgICAgICAgcGFuU2Vzc2lvbi5jdXJyZW50ID0gbmV3IFBhblNlc3Npb24oZXZlbnQsIGhhbmRsZXJzLCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1QYWdlUG9pbnQ6IHRyYW5zZm9ybVBhZ2VQb2ludCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZVBvaW50ZXJFdmVudChyZWYsIFwicG9pbnRlcmRvd25cIiwgaGFzUGFuRXZlbnRzICYmIG9uUG9pbnRlckRvd24pO1xuICAgIHVzZVVubW91bnRFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFuU2Vzc2lvbi5jdXJyZW50ICYmIHBhblNlc3Npb24uY3VycmVudC5lbmQoKTsgfSk7XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgdXAgdGhlIHRyZWUgdG8gY2hlY2sgd2hldGhlciB0aGUgcHJvdmlkZWQgY2hpbGQgbm9kZVxuICogaXMgdGhlIHBhcmVudCBvciBhIGRlc2NlbmRhbnQgb2YgaXQuXG4gKlxuICogQHBhcmFtIHBhcmVudCAtIEVsZW1lbnQgdG8gZmluZFxuICogQHBhcmFtIGNoaWxkIC0gRWxlbWVudCB0byB0ZXN0IGFnYWluc3QgcGFyZW50XG4gKi9cbnZhciBpc05vZGVPckNoaWxkID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyZW50ID09PSBjaGlsZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBpc05vZGVPckNoaWxkKHBhcmVudCwgY2hpbGQucGFyZW50RWxlbWVudCk7XG4gICAgfVxufTtcblxudmFyIG9yZGVyJDEgPSBbXCJ3aGlsZUhvdmVyXCIsIFwid2hpbGVUYXBcIiwgXCJ3aGlsZURyYWdcIl07XG52YXIgZ2V0R2VzdHVyZVByaW9yaXR5ID0gZnVuY3Rpb24gKGdlc3R1cmUpIHtcbiAgICByZXR1cm4gb3JkZXIkMS5pbmRleE9mKGdlc3R1cmUpICsgMTtcbn07XG5cbnZhciB0YXBHZXN0dXJlUHJpb3JpdHkgPSBnZXRHZXN0dXJlUHJpb3JpdHkoXCJ3aGlsZVRhcFwiKTtcbi8qKlxuICogQHBhcmFtIGhhbmRsZXJzIC1cbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VUYXBHZXN0dXJlKF9hLCByZWYpIHtcbiAgICB2YXIgb25UYXAgPSBfYS5vblRhcCwgb25UYXBTdGFydCA9IF9hLm9uVGFwU3RhcnQsIG9uVGFwQ2FuY2VsID0gX2Eub25UYXBDYW5jZWwsIHdoaWxlVGFwID0gX2Eud2hpbGVUYXAsIGNvbnRyb2xzID0gX2EuY29udHJvbHM7XG4gICAgdmFyIGhhc1RhcExpc3RlbmVycyA9IG9uVGFwIHx8IG9uVGFwU3RhcnQgfHwgb25UYXBDYW5jZWwgfHwgd2hpbGVUYXA7XG4gICAgdmFyIGlzVGFwcGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgdmFyIGNhbmNlbFBvaW50ZXJFdmVudExpc3RlbmVyID0gdXNlUmVmKG51bGwpO1xuICAgIGZ1bmN0aW9uIHJlbW92ZVBvaW50ZXJVcCgpIHtcbiAgICAgICAgY2FuY2VsUG9pbnRlckV2ZW50TGlzdGVuZXIuY3VycmVudCAmJlxuICAgICAgICAgICAgY2FuY2VsUG9pbnRlckV2ZW50TGlzdGVuZXIuY3VycmVudCgpO1xuICAgICAgICBjYW5jZWxQb2ludGVyRXZlbnRMaXN0ZW5lci5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHdoaWxlVGFwICYmIGNvbnRyb2xzKSB7XG4gICAgICAgIGNvbnRyb2xzLnNldE92ZXJyaWRlKHdoaWxlVGFwLCB0YXBHZXN0dXJlUHJpb3JpdHkpO1xuICAgIH1cbiAgICAvLyBXZSBsb2FkIHRoaXMgZXZlbnQgaGFuZGxlciBpbnRvIGEgcmVmIHNvIHdlIGNhbiBsYXRlciByZWZlciB0b1xuICAgIC8vIG9uUG9pbnRlclVwLmN1cnJlbnQgd2hpY2ggd2lsbCBhbHdheXMgaGF2ZSByZWZlcmVuY2UgdG8gdGhlIGxhdGVzdCBwcm9wc1xuICAgIHZhciBvblBvaW50ZXJVcCA9IHVzZVJlZihudWxsKTtcbiAgICBvblBvaW50ZXJVcC5jdXJyZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIHJlbW92ZVBvaW50ZXJVcCgpO1xuICAgICAgICBpZiAoIWlzVGFwcGluZy5jdXJyZW50IHx8ICFlbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1RhcHBpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBpZiAoY29udHJvbHMgJiYgd2hpbGVUYXApIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLmNsZWFyT3ZlcnJpZGUodGFwR2VzdHVyZVByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0aGUgZ2VzdHVyZSBsb2NrIC0gaWYgd2UgZ2V0IGl0LCBpdCBtZWFucyBubyBkcmFnIGdlc3R1cmUgaXMgYWN0aXZlXG4gICAgICAgIC8vIGFuZCB3ZSBjYW4gc2FmZWx5IGZpcmUgdGhlIHRhcCBnZXN0dXJlLlxuICAgICAgICB2YXIgb3Blbkdlc3R1cmVMb2NrID0gZ2V0R2xvYmFsTG9jayh0cnVlKTtcbiAgICAgICAgaWYgKCFvcGVuR2VzdHVyZUxvY2spXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG9wZW5HZXN0dXJlTG9jaygpO1xuICAgICAgICBpZiAoIWlzTm9kZU9yQ2hpbGQoZWxlbWVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgb25UYXBDYW5jZWwgJiYgb25UYXBDYW5jZWwoZXZlbnQsIGluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb25UYXAgJiYgb25UYXAoZXZlbnQsIGluZm8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgIHJlbW92ZVBvaW50ZXJVcCgpO1xuICAgICAgICBjYW5jZWxQb2ludGVyRXZlbnRMaXN0ZW5lci5jdXJyZW50ID0gYWRkUG9pbnRlckV2ZW50KHdpbmRvdywgXCJwb2ludGVydXBcIiwgZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7IHJldHVybiBvblBvaW50ZXJVcC5jdXJyZW50KGV2ZW50LCBpbmZvKTsgfSk7XG4gICAgICAgIHZhciBlbGVtZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWxlbWVudCB8fCBpc1RhcHBpbmcuY3VycmVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaXNUYXBwaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBvblRhcFN0YXJ0ICYmIG9uVGFwU3RhcnQoZXZlbnQsIGluZm8pO1xuICAgICAgICBpZiAoY29udHJvbHMgJiYgd2hpbGVUYXApIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0T3ZlcnJpZGUodGFwR2VzdHVyZVByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VQb2ludGVyRXZlbnQocmVmLCBcInBvaW50ZXJkb3duXCIsIGhhc1RhcExpc3RlbmVycyA/IG9uUG9pbnRlckRvd24gOiB1bmRlZmluZWQpO1xuICAgIHVzZVVubW91bnRFZmZlY3QocmVtb3ZlUG9pbnRlclVwKTtcbn1cblxudmFyIGhvdmVyUHJpb3JpdHkgPSBnZXRHZXN0dXJlUHJpb3JpdHkoXCJ3aGlsZUhvdmVyXCIpO1xudmFyIGZpbHRlclRvdWNoID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBmdW5jdGlvbiAoZXZlbnQsIGluZm8pIHtcbiAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSlcbiAgICAgICAgbGlzdGVuZXIoZXZlbnQsIGluZm8pO1xufTsgfTtcbi8qKlxuICpcbiAqIEBwYXJhbSBwcm9wc1xuICogQHBhcmFtIHJlZlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHVzZUhvdmVyR2VzdHVyZShfYSwgcmVmKSB7XG4gICAgdmFyIHdoaWxlSG92ZXIgPSBfYS53aGlsZUhvdmVyLCBvbkhvdmVyU3RhcnQgPSBfYS5vbkhvdmVyU3RhcnQsIG9uSG92ZXJFbmQgPSBfYS5vbkhvdmVyRW5kLCBjb250cm9scyA9IF9hLmNvbnRyb2xzO1xuICAgIGlmICh3aGlsZUhvdmVyICYmIGNvbnRyb2xzKSB7XG4gICAgICAgIGNvbnRyb2xzLnNldE92ZXJyaWRlKHdoaWxlSG92ZXIsIGhvdmVyUHJpb3JpdHkpO1xuICAgIH1cbiAgICB1c2VQb2ludGVyRXZlbnQocmVmLCBcInBvaW50ZXJlbnRlclwiLCBmaWx0ZXJUb3VjaChmdW5jdGlvbiAoZXZlbnQsIGluZm8pIHtcbiAgICAgICAgaWYgKG9uSG92ZXJTdGFydClcbiAgICAgICAgICAgIG9uSG92ZXJTdGFydChldmVudCwgaW5mbyk7XG4gICAgICAgIGlmICh3aGlsZUhvdmVyICYmIGNvbnRyb2xzKSB7XG4gICAgICAgICAgICBjb250cm9scy5zdGFydE92ZXJyaWRlKGhvdmVyUHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIHVzZVBvaW50ZXJFdmVudChyZWYsIFwicG9pbnRlcmxlYXZlXCIsIGZpbHRlclRvdWNoKGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICBpZiAob25Ib3ZlckVuZClcbiAgICAgICAgICAgIG9uSG92ZXJFbmQoZXZlbnQsIGluZm8pO1xuICAgICAgICBpZiAod2hpbGVIb3ZlciAmJiBjb250cm9scykge1xuICAgICAgICAgICAgY29udHJvbHMuY2xlYXJPdmVycmlkZShob3ZlclByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cblxuLyoqXG4gKiBBZGQgcGFuIGFuZCB0YXAgZ2VzdHVyZSByZWNvZ25pdGlvbiB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIEdlc3R1cmUgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSByZWYgLSBSZWFjdCBgcmVmYCBjb250YWluaW5nIGEgRE9NIGBFbGVtZW50YFxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VHZXN0dXJlcyhwcm9wcywgcmVmKSB7XG4gICAgdXNlUGFuR2VzdHVyZShwcm9wcywgcmVmKTtcbiAgICB1c2VUYXBHZXN0dXJlKHByb3BzLCByZWYpO1xuICAgIHVzZUhvdmVyR2VzdHVyZShwcm9wcywgcmVmKTtcbn1cblxudmFyIGdlc3R1cmVQcm9wcyA9IFtcbiAgICBcIm9uUGFuXCIsXG4gICAgXCJvblBhblN0YXJ0XCIsXG4gICAgXCJvblBhbkVuZFwiLFxuICAgIFwib25QYW5TZXNzaW9uU3RhcnRcIixcbiAgICBcIm9uVGFwXCIsXG4gICAgXCJvblRhcFN0YXJ0XCIsXG4gICAgXCJvblRhcENhbmNlbFwiLFxuICAgIFwid2hpbGVUYXBcIixcbiAgICBcIndoaWxlSG92ZXJcIixcbiAgICBcIm9uSG92ZXJTdGFydFwiLFxuICAgIFwib25Ib3ZlckVuZFwiLFxuXTtcbnZhciBHZXN0dXJlQ29tcG9uZW50ID0gbWFrZVJlbmRlcmxlc3NDb21wb25lbnQoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZpc3VhbEVsZW1lbnQgPSBfYS52aXN1YWxFbGVtZW50LCBwcm9wcyA9IF9fcmVzdChfYSwgW1widmlzdWFsRWxlbWVudFwiXSk7XG4gICAgdXNlR2VzdHVyZXMocHJvcHMsIHZpc3VhbEVsZW1lbnQpO1xufSk7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEdlc3R1cmVzID0ge1xuICAgIGtleTogXCJnZXN0dXJlc1wiLFxuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBnZXN0dXJlUHJvcHMuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpOyB9KTtcbiAgICB9LFxuICAgIGdldENvbXBvbmVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR2VzdHVyZUNvbXBvbmVudDsgfSxcbn07XG5cbnZhciBFeGl0Q29tcG9uZW50ID0gbWFrZVJlbmRlcmxlc3NDb21wb25lbnQoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFuaW1hdGUgPSBwcm9wcy5hbmltYXRlLCBjb250cm9scyA9IHByb3BzLmNvbnRyb2xzLCBleGl0ID0gcHJvcHMuZXhpdDtcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlUHJlc2VuY2UoKSwgMiksIGlzUHJlc2VudCA9IF9hWzBdLCBvbkV4aXRDb21wbGV0ZSA9IF9hWzFdO1xuICAgIHZhciBwcmVzZW5jZUNvbnRleHQgPSB1c2VDb250ZXh0KFByZXNlbmNlQ29udGV4dCk7XG4gICAgdmFyIGlzUGxheWluZ0V4aXRBbmltYXRpb24gPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciBjdXN0b20gPSAocHJlc2VuY2VDb250ZXh0ID09PSBudWxsIHx8IHByZXNlbmNlQ29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJlc2VuY2VDb250ZXh0LmN1c3RvbSkgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHByZXNlbmNlQ29udGV4dC5jdXN0b21cbiAgICAgICAgOiBwcm9wcy5jdXN0b207XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1ByZXNlbnQpIHtcbiAgICAgICAgICAgIGlmICghaXNQbGF5aW5nRXhpdEFuaW1hdGlvbi5jdXJyZW50ICYmIGV4aXQpIHtcbiAgICAgICAgICAgICAgICBjb250cm9scy5zdGFydChleGl0LCB7IGN1c3RvbTogY3VzdG9tIH0pLnRoZW4ob25FeGl0Q29tcGxldGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNQbGF5aW5nRXhpdEFuaW1hdGlvbi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1BsYXlpbmdFeGl0QW5pbWF0aW9uLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIGFuaW1hdGUgJiZcbiAgICAgICAgICAgIHR5cGVvZiBhbmltYXRlICE9PSBcImJvb2xlYW5cIiAmJlxuICAgICAgICAgICAgIShhbmltYXRlIGluc3RhbmNlb2YgQW5pbWF0aW9uQ29udHJvbHMpKSB7XG4gICAgICAgICAgICBjb250cm9scy5zdGFydChhbmltYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmVzZW50KSB7XG4gICAgICAgICAgICBpc1BsYXlpbmdFeGl0QW5pbWF0aW9uLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFthbmltYXRlLCBjb250cm9scywgY3VzdG9tLCBleGl0LCBpc1ByZXNlbnQsIG9uRXhpdENvbXBsZXRlLCBwcm9wc10pO1xufSk7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEV4aXQgPSB7XG4gICAga2V5OiBcImV4aXRcIixcbiAgICBzaG91bGRSZW5kZXI6IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gISFwcm9wcy5leGl0ICYmICFjaGVja1Nob3VsZEluaGVyaXRWYXJpYW50KHByb3BzKTsgfSxcbiAgICBnZXRDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEV4aXRDb21wb25lbnQ7IH0sXG59O1xuXG52YXIgQW5pbWF0ZVByb3BUeXBlO1xuKGZ1bmN0aW9uIChBbmltYXRlUHJvcFR5cGUpIHtcbiAgICBBbmltYXRlUHJvcFR5cGVbXCJUYXJnZXRcIl0gPSBcIlRhcmdldFwiO1xuICAgIEFuaW1hdGVQcm9wVHlwZVtcIlZhcmlhbnRMYWJlbFwiXSA9IFwiVmFyaWFudExhYmVsXCI7XG4gICAgQW5pbWF0ZVByb3BUeXBlW1wiQW5pbWF0aW9uU3Vic2NyaXB0aW9uXCJdID0gXCJBbmltYXRpb25TdWJzY3JpcHRpb25cIjtcbn0pKEFuaW1hdGVQcm9wVHlwZSB8fCAoQW5pbWF0ZVByb3BUeXBlID0ge30pKTtcblxuZnVuY3Rpb24gc2hhbGxvd0NvbXBhcmUobmV4dCwgcHJldikge1xuICAgIGlmIChwcmV2ID09PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHByZXZMZW5ndGggPSBwcmV2Lmxlbmd0aDtcbiAgICBpZiAocHJldkxlbmd0aCAhPT0gbmV4dC5sZW5ndGgpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXZMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJldltpXSAhPT0gbmV4dFtpXSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBoYXNVcGRhdGVkID0gZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICByZXR1cm4gKG5leHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAoQXJyYXkuaXNBcnJheShwcmV2KSAmJiBBcnJheS5pc0FycmF5KG5leHQpXG4gICAgICAgICAgICA/ICFzaGFsbG93Q29tcGFyZShuZXh0LCBwcmV2KVxuICAgICAgICAgICAgOiBwcmV2ICE9PSBuZXh0KSk7XG59O1xuZnVuY3Rpb24gdGFyZ2V0V2l0aG91dFRyYW5zaXRpb24oX2EsIG1lcmdlVHJhbnNpdGlvbkVuZCkge1xuICAgIGlmIChtZXJnZVRyYW5zaXRpb25FbmQgPT09IHZvaWQgMCkgeyBtZXJnZVRyYW5zaXRpb25FbmQgPSBmYWxzZTsgfVxuICAgIHZhciB0cmFuc2l0aW9uID0gX2EudHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCA9IF9hLnRyYW5zaXRpb25FbmQsIHRhcmdldCA9IF9fcmVzdChfYSwgW1widHJhbnNpdGlvblwiLCBcInRyYW5zaXRpb25FbmRcIl0pO1xuICAgIHJldHVybiBtZXJnZVRyYW5zaXRpb25FbmRcbiAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGFyZ2V0KSwgdHJhbnNpdGlvbkVuZClcbiAgICAgICAgOiB0YXJnZXQ7XG59XG4vKipcbiAqIEhhbmRsZSB0aGUgYGFuaW1hdGVgIHByb3Agd2hlbiBpdHMgYW4gb2JqZWN0IG9mIHZhbHVlcywgaWU6XG4gKlxuICogYGBganN4XG4gKiA8bW90aW9uLmRpdiBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0gLz5cbiAqIGBgYFxuICpcbiAqIEBpbnRlcm5hbHJlbWFya3NcbiAqIEl0IG1pZ2h0IGJlIHdvcnRoIGNvbnNvbGlkYXRpbmcgdGhpcyB3aXRoIGB1c2UtdmFyaWFudHNgXG4gKlxuICogYGBganN4XG4gKiA8bW90aW9uLmRpdiBhbmltYXRlPVwidmlzaWJsZVwiIC8+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gY29udHJvbHNcbiAqIEBwYXJhbSB2YWx1ZXNcbiAqIEBwYXJhbSB0cmFuc2l0aW9uXG4gKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHVzZUFuaW1hdGVQcm9wKHRhcmdldEFuZFRyYW5zaXRpb24sIGNvbnRyb2xzLCB2aXN1YWxFbGVtZW50LCBkZWZhdWx0VHJhbnNpdGlvbikge1xuICAgIHZhciBpc0luaXRpYWxSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdmFyIHByZXZWYWx1ZXMgPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKCFwcmV2VmFsdWVzLmN1cnJlbnQpIHtcbiAgICAgICAgcHJldlZhbHVlcy5jdXJyZW50ID0gdGFyZ2V0V2l0aG91dFRyYW5zaXRpb24odGFyZ2V0QW5kVHJhbnNpdGlvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YXJnZXRUb0FuaW1hdGUgPSB7fTtcbiAgICAgICAgLy8gVGhlc2UgYXJlIHRoZSB2YWx1ZXMgd2UncmUgYWN0dWFsbHkgYW5pbWF0aW5nXG4gICAgICAgIHZhciBhbmltYXRpbmdUYXJnZXQgPSB0YXJnZXRXaXRob3V0VHJhbnNpdGlvbih0YXJnZXRBbmRUcmFuc2l0aW9uKTtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgdGFyZ2V0IGFzIGl0J2xsIGJlIG9uY2UgdHJhbnNpdGlvbkVuZCB2YWx1ZXMgYXJlIGFwcGxpZWRcbiAgICAgICAgdmFyIGZpbmFsVGFyZ2V0ID0gdGFyZ2V0V2l0aG91dFRyYW5zaXRpb24odGFyZ2V0QW5kVHJhbnNpdGlvbiwgdHJ1ZSk7XG4gICAgICAgIC8vIERldGVjdCB3aGljaCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIGJldHdlZW4gcmVuZGVyc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYW5pbWF0aW5nVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBUaGlzIHZhbHVlIHNob3VsZCBhbmltYXRlIG9uIG1vdW50IGlmIHRoaXMgdmFsdWUgZG9lc24ndCBhbHJlYWR5IGV4aXN0ICh3YXNuJ3RcbiAgICAgICAgICAgIC8vIGRlZmluZWQgaW4gYHN0eWxlYCBvciBgaW5pdGlhbGApIG9yIGlmIGl0IGRvZXMgZXhpc3QgYW5kIGl0J3MgYWxyZWFkeSBjaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHNob3VsZEFuaW1hdGVPbk1vdW50ID0gaXNJbml0aWFsUmVuZGVyLmN1cnJlbnQgJiZcbiAgICAgICAgICAgICAgICAoIXZpc3VhbEVsZW1lbnQuaGFzVmFsdWUoa2V5KSB8fFxuICAgICAgICAgICAgICAgICAgICB2aXN1YWxFbGVtZW50LmdldFZhbHVlKGtleSkuZ2V0KCkgIT09IGZpbmFsVGFyZ2V0W2tleV0pO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgdXBkYXRlZCBiZXR3ZWVuIHJlbmRlcnMgb3IgaXQncyB3ZSdyZSBhbmltYXRpbmcgdGhpcyB2YWx1ZSBvbiBtb3VudCxcbiAgICAgICAgICAgIC8vIGFkZCBpdCB0byB0aGUgYW5pbWF0ZSB0YXJnZXQuXG4gICAgICAgICAgICB2YXIgaXNWYWxpZFZhbHVlID0gZmluYWxUYXJnZXRba2V5XSAhPT0gbnVsbDtcbiAgICAgICAgICAgIHZhciB2YWx1ZUhhc1VwZGF0ZWQgPSBoYXNVcGRhdGVkKHByZXZWYWx1ZXMuY3VycmVudFtrZXldLCBmaW5hbFRhcmdldFtrZXldKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkVmFsdWUgJiYgKHZhbHVlSGFzVXBkYXRlZCB8fCBzaG91bGRBbmltYXRlT25Nb3VudCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRUb0FuaW1hdGVba2V5XSA9IGFuaW1hdGluZ1RhcmdldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlzSW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHByZXZWYWx1ZXMuY3VycmVudCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2VmFsdWVzLmN1cnJlbnQpLCBmaW5hbFRhcmdldCk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0YXJnZXRUb0FuaW1hdGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgY29udHJvbHMuc3RhcnQoX19hc3NpZ24oX19hc3NpZ24oe30sIHRhcmdldFRvQW5pbWF0ZSksIHsgdHJhbnNpdGlvbjogdGFyZ2V0QW5kVHJhbnNpdGlvbi50cmFuc2l0aW9uIHx8IGRlZmF1bHRUcmFuc2l0aW9uLCB0cmFuc2l0aW9uRW5kOiB0YXJnZXRBbmRUcmFuc2l0aW9uLnRyYW5zaXRpb25FbmQgfSkpO1xuICAgICAgICB9XG4gICAgfSwgW3RhcmdldEFuZFRyYW5zaXRpb25dKTtcbn1cblxudmFyIGxhYmVsc1RvQXJyYXkgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGFiZWwpKSB7XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIFtsYWJlbF07XG59O1xudmFyIHJlc29sdmVWYXJpYW50TGFiZWxzID0gZnVuY3Rpb24gKHZhcmlhbnQpIHtcbiAgICB2YXIgdW5yZXNvbHZlZFZhcmlhbnQgPSB2YXJpYW50IGluc3RhbmNlb2YgTW90aW9uVmFsdWUgPyB2YXJpYW50LmdldCgpIDogdmFyaWFudDtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGxhYmVsc1RvQXJyYXkodW5yZXNvbHZlZFZhcmlhbnQpKSk7XG59O1xuLyoqXG4gKiBIb29rcyBpbiBSZWFjdCBzb21ldGltZXMgYWNjZXB0IGEgZGVwZW5kZW5jeSBhcnJheSBhcyB0aGVpciBmaW5hbCBhcmd1bWVudC4gKGllIHVzZUVmZmVjdC91c2VNZW1vKVxuICogV2hlbiB2YWx1ZXMgaW4gdGhpcyBhcnJheSBjaGFuZ2UsIFJlYWN0IHJlLXJ1bnMgdGhlIGRlcGVuZGVuY3kuIEhvd2V2ZXIgaWYgdGhlIGFycmF5XG4gKiBjb250YWlucyBhIHZhcmlhYmxlIG51bWJlciBvZiBpdGVtcywgUmVhY3QgdGhyb3dzIGFuIGVycm9yLlxuICovXG52YXIgYXNEZXBlbmRlbmN5TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7IHJldHVybiBbXG4gICAgbGlzdC5qb2luKFwiLFwiKSxcbl07IH07XG5cbnZhciBoYXNWYXJpYW50Q2hhbmdlZCA9IGZ1bmN0aW9uIChvbGRWYXJpYW50LCBuZXdWYXJpYW50KSB7XG4gICAgcmV0dXJuIG9sZFZhcmlhbnQuam9pbihcIixcIikgIT09IG5ld1ZhcmlhbnQuam9pbihcIixcIik7XG59O1xuLyoqXG4gKiBIYW5kbGUgdmFyaWFudHMgYW5kIHRoZSBgYW5pbWF0ZWAgcHJvcCB3aGVuIGl0cyBzZXQgYXMgdmFyaWFudCBsYWJlbHMuXG4gKlxuICogQHBhcmFtIGluaXRpYWwgLSBJbml0aWFsIHZhcmlhbnQocylcbiAqIEBwYXJhbSBhbmltYXRlIC0gVmFyaWFudChzKSB0byBhbmltYXRlIHRvXG4gKiBAcGFyYW0gaW5oZXJpdCAtIGB0cnVlYCBpcyBpbmhlcml0aW5nIGFuaW1hdGlvbnMgZnJvbSBwYXJlbnRcbiAqIEBwYXJhbSBjb250cm9scyAtIEFuaW1hdGlvbiBjb250cm9sc1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VWYXJpYW50cyhpbml0aWFsLCBhbmltYXRlLCBpbmhlcml0LCBjb250cm9scykge1xuICAgIHZhciB0YXJnZXRWYXJpYW50cyA9IHJlc29sdmVWYXJpYW50TGFiZWxzKGFuaW1hdGUpO1xuICAgIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChNb3Rpb25Db250ZXh0KTtcbiAgICB2YXIgcGFyZW50QWxyZWFkeU1vdW50ZWQgPSBjb250ZXh0Lmhhc01vdW50ZWQgJiYgY29udGV4dC5oYXNNb3VudGVkLmN1cnJlbnQ7XG4gICAgdmFyIGhhc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaG91bGRBbmltYXRlID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmhlcml0KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBpbmhlcml0aW5nIHZhcmlhbnQgY2hhbmdlcyBhbmQgdGhlIHBhcmVudCBoYXMgYWxyZWFkeVxuICAgICAgICAgICAgLy8gbW91bnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGxvYWRzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHRyaWdnZXJcbiAgICAgICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uLlxuICAgICAgICAgICAgc2hvdWxkQW5pbWF0ZSA9ICEhcGFyZW50QWxyZWFkeU1vdW50ZWQ7XG4gICAgICAgICAgICB0YXJnZXRWYXJpYW50cyA9IHJlc29sdmVWYXJpYW50TGFiZWxzKGNvbnRleHQuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG91bGRBbmltYXRlID1cbiAgICAgICAgICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgfHxcbiAgICAgICAgICAgICAgICAgICAgaGFzVmFyaWFudENoYW5nZWQocmVzb2x2ZVZhcmlhbnRMYWJlbHMoaW5pdGlhbCksIHRhcmdldFZhcmlhbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBzaG91bGRBbmltYXRlICYmIGNvbnRyb2xzLnN0YXJ0KHRhcmdldFZhcmlhbnRzKTtcbiAgICAgICAgaGFzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9LCBhc0RlcGVuZGVuY3lMaXN0KHRhcmdldFZhcmlhbnRzKSk7XG59XG5cbi8qKlxuICogYHVzZUFuaW1hdGlvbkdyb3VwU3Vic2NyaXB0aW9uYCBhbGxvd3MgYSBjb21wb25lbnQgdG8gc3Vic2NyaWJlIHRvIGFuXG4gKiBleHRlcm5hbGx5LWNyZWF0ZWQgYEFuaW1hdGlvbkNvbnRyb2xzYCwgY3JlYXRlZCBieSB0aGUgYHVzZUFuaW1hdGlvbmAgaG9vay5cbiAqXG4gKiBAcGFyYW0gYW5pbWF0aW9uXG4gKiBAcGFyYW0gY29udHJvbHNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdXNlQW5pbWF0aW9uR3JvdXBTdWJzY3JpcHRpb24oYW5pbWF0aW9uLCBjb250cm9scykge1xuICAgIHZhciB1bnN1YnNjcmliZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gYW5pbWF0aW9uLnN1YnNjcmliZShjb250cm9scyk7IH0sIFtcbiAgICAgICAgYW5pbWF0aW9uLFxuICAgIF0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlICYmIHVuc3Vic2NyaWJlKCk7XG4gICAgfTsgfSwgW3Vuc3Vic2NyaWJlXSk7XG59XG5cbnZhciBfYSwgX2I7XG52YXIgQW5pbWF0ZVByb3BDb21wb25lbnRzID0gKF9hID0ge30sXG4gICAgX2FbQW5pbWF0ZVByb3BUeXBlLlRhcmdldF0gPSBtYWtlUmVuZGVybGVzc0NvbXBvbmVudChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBfYS5hbmltYXRlLCBjb250cm9scyA9IF9hLmNvbnRyb2xzLCB2aXN1YWxFbGVtZW50ID0gX2EudmlzdWFsRWxlbWVudCwgdHJhbnNpdGlvbiA9IF9hLnRyYW5zaXRpb247XG4gICAgICAgIHJldHVybiB1c2VBbmltYXRlUHJvcChhbmltYXRlLCBjb250cm9scywgdmlzdWFsRWxlbWVudCwgdHJhbnNpdGlvbik7XG4gICAgfSksXG4gICAgX2FbQW5pbWF0ZVByb3BUeXBlLlZhcmlhbnRMYWJlbF0gPSBtYWtlUmVuZGVybGVzc0NvbXBvbmVudChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBfYS5hbmltYXRlLCBfYiA9IF9hLmluaGVyaXQsIGluaGVyaXQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBjb250cm9scyA9IF9hLmNvbnRyb2xzLCBpbml0aWFsID0gX2EuaW5pdGlhbDtcbiAgICAgICAgcmV0dXJuIHVzZVZhcmlhbnRzKGluaXRpYWwsIGFuaW1hdGUsIGluaGVyaXQsIGNvbnRyb2xzKTtcbiAgICB9KSxcbiAgICBfYVtBbmltYXRlUHJvcFR5cGUuQW5pbWF0aW9uU3Vic2NyaXB0aW9uXSA9IG1ha2VSZW5kZXJsZXNzQ29tcG9uZW50KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgYW5pbWF0ZSA9IF9hLmFuaW1hdGUsIGNvbnRyb2xzID0gX2EuY29udHJvbHM7XG4gICAgICAgIHJldHVybiB1c2VBbmltYXRpb25Hcm91cFN1YnNjcmlwdGlvbihhbmltYXRlLCBjb250cm9scyk7XG4gICAgfSksXG4gICAgX2EpO1xudmFyIGlzVmFyaWFudExhYmVsJDEgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHByb3ApIHx8IHR5cGVvZiBwcm9wID09PSBcInN0cmluZ1wiO1xufTtcbnZhciBpc0FuaW1hdGlvblN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBhbmltYXRlID0gX2EuYW5pbWF0ZTtcbiAgICByZXR1cm4gYW5pbWF0ZSBpbnN0YW5jZW9mIEFuaW1hdGlvbkNvbnRyb2xzO1xufTtcbnZhciBhbmltYXRpb25Qcm9wcyA9IFtcImluaXRpYWxcIiwgXCJhbmltYXRlXCIsIFwid2hpbGVUYXBcIiwgXCJ3aGlsZUhvdmVyXCJdO1xudmFyIGFuaW1hdGVQcm9wVHlwZVRlc3RzID0gKF9iID0ge30sXG4gICAgX2JbQW5pbWF0ZVByb3BUeXBlLlRhcmdldF0gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIChwcm9wcy5hbmltYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICFpc1ZhcmlhbnRMYWJlbCQxKHByb3BzLmFuaW1hdGUpICYmXG4gICAgICAgICAgICAhaXNBbmltYXRpb25TdWJzY3JpcHRpb24ocHJvcHMpKTtcbiAgICB9LFxuICAgIF9iW0FuaW1hdGVQcm9wVHlwZS5WYXJpYW50TGFiZWxdID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiAocHJvcHMudmFyaWFudHMgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYW5pbWF0aW9uUHJvcHMuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0eXBlb2YgcHJvcHNba2V5XSA9PT0gXCJzdHJpbmdcIjsgfSkpO1xuICAgIH0sXG4gICAgX2JbQW5pbWF0ZVByb3BUeXBlLkFuaW1hdGlvblN1YnNjcmlwdGlvbl0gPSBpc0FuaW1hdGlvblN1YnNjcmlwdGlvbixcbiAgICBfYik7XG52YXIgZ2V0QW5pbWF0aW9uQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFuaW1hdGVQcm9wVHlwZSA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKHZhciBrZXkgaW4gQW5pbWF0ZVByb3BUeXBlKSB7XG4gICAgICAgIGlmIChhbmltYXRlUHJvcFR5cGVUZXN0c1trZXldKHByb3BzKSkge1xuICAgICAgICAgICAgYW5pbWF0ZVByb3BUeXBlID0ga2V5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbmltYXRlUHJvcFR5cGUgPyBBbmltYXRlUHJvcENvbXBvbmVudHNbYW5pbWF0ZVByb3BUeXBlXSA6IHVuZGVmaW5lZDtcbn07XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFuaW1hdGlvbiA9IHtcbiAgICBrZXk6IFwiYW5pbWF0aW9uXCIsXG4gICAgc2hvdWxkUmVuZGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgIGdldENvbXBvbmVudDogZ2V0QW5pbWF0aW9uQ29tcG9uZW50LFxufTtcblxuZnVuY3Rpb24gdHdlZW5BeGlzKHRhcmdldCwgcHJldiwgbmV4dCwgcCkge1xuICAgIHRhcmdldC5taW4gPSBtaXgocHJldi5taW4sIG5leHQubWluLCBwKTtcbiAgICB0YXJnZXQubWF4ID0gbWl4KHByZXYubWF4LCBuZXh0Lm1heCwgcCk7XG59XG5cbnZhciBwcm9ncmVzc1RhcmdldCA9IDEwMDA7XG52YXIgQW5pbWF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbmltYXRlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZnJhbWVUYXJnZXQgPSB7XG4gICAgICAgICAgICB4OiB7IG1pbjogMCwgbWF4OiAwIH0sXG4gICAgICAgICAgICB5OiB7IG1pbjogMCwgbWF4OiAwIH0sXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0b3BBeGlzQW5pbWF0aW9uID0ge1xuICAgICAgICAgICAgeDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgeTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hbmltYXRlID0gZnVuY3Rpb24gKHRhcmdldCwgb3JpZ2luLCBfYSkge1xuICAgICAgICAgICAgaWYgKF9hID09PSB2b2lkIDApIHsgX2EgPSB7fTsgfVxuICAgICAgICAgICAgdmFyIG9yaWdpbkJveCA9IF9hLm9yaWdpbkJveCwgdGFyZ2V0Qm94ID0gX2EudGFyZ2V0Qm94LCB2aXNpYmlsaXR5QWN0aW9uID0gX2EudmlzaWJpbGl0eUFjdGlvbiwgc2hvdWxkU3RhY2tBbmltYXRlID0gX2Euc2hvdWxkU3RhY2tBbmltYXRlLCBjb25maWcgPSBfX3Jlc3QoX2EsIFtcIm9yaWdpbkJveFwiLCBcInRhcmdldEJveFwiLCBcInZpc2liaWxpdHlBY3Rpb25cIiwgXCJzaG91bGRTdGFja0FuaW1hdGVcIl0pO1xuICAgICAgICAgICAgdmFyIF9iID0gX3RoaXMucHJvcHMsIHZpc3VhbEVsZW1lbnQgPSBfYi52aXN1YWxFbGVtZW50LCBsYXlvdXQgPSBfYi5sYXlvdXQ7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVhcmx5IHJldHVybiBpZiB3ZSd2ZSBiZWVuIGluc3RydWN0ZWQgbm90IHRvIGFuaW1hdGUgdGhpcyByZW5kZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFja0FuaW1hdGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zYWZlVG9SZW1vdmUoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWxsb3cgdGhlIG1lYXN1cmVkIG9yaWdpbiAocHJldiBib3VuZGluZyBib3gpIGFuZCB0YXJnZXQgKGFjdHVhbCBsYXlvdXQpIHRvIGJlXG4gICAgICAgICAgICAgKiBvdmVycmlkZGVuIGJ5IHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9yaWdpbiA9IG9yaWdpbkJveCB8fCBvcmlnaW47XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRCb3ggfHwgdGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGJveEhhc01vdmVkID0gaGFzTW92ZWQob3JpZ2luLCB0YXJnZXQpO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElmIGxheW91dCBpcyBzZXQgdG8gXCJwb3NpdGlvblwiLCB3ZSBjYW4gcmVzaXplIHRoZSBvcmlnaW4gYm94IGJhc2VkIG9uIHRoZSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgKiBib3ggYW5kIG9ubHkgYW5pbWF0ZSBpdHMgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gXCJwb3NpdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRMZW5ndGggPSB0YXJnZXRbYXhpc10ubWF4IC0gdGFyZ2V0W2F4aXNdLm1pbjtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luW2F4aXNdLm1heCA9IG9yaWdpbltheGlzXS5taW4gKyB0YXJnZXRMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2aXN1YWxFbGVtZW50LmlzVGFyZ2V0Qm94TG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmlzaWJpbGl0eUFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIG1lYW50IHRvIHNob3cvaGlkZSB0aGUgdmlzdWFsRWxlbWVudCwgZG8gc29cbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUFjdGlvbiA9PT0gVmlzaWJpbGl0eUFjdGlvbi5IaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZpc3VhbEVsZW1lbnQuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZpc3VhbEVsZW1lbnQuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChib3hIYXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYm94IGhhcyBtb3ZlZCwgYW5pbWF0ZSBiZXR3ZWVuIGl0J3MgY3VycmVudCB2aXN1YWwgc3RhdGUgYW5kIGl0c1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5hbCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuYW5pbWF0ZUF4aXMoYXhpcywgdGFyZ2V0W2F4aXNdLCBvcmlnaW5bYXhpc10sIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYm94IGhhcyByZW1haW5lZCBpbiB0aGUgc2FtZSBwbGFjZSwgaW1tZWRpYXRlbHkgc2V0IHRoZSBheGlzIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAvLyB0byB0aGUgZmluYWwgZGVzaXJlZCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlzdWFsRWxlbWVudC5zZXRBeGlzVGFyZ2V0KGF4aXMsIHRhcmdldFtheGlzXS5taW4sIHRhcmdldFtheGlzXS5tYXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gRm9yY2UgYSByZW5kZXIgdG8gZW5zdXJlIHRoZXJlJ3Mgbm8gZmxhc2ggb2YgdW5jb3JyZWN0ZWQgYm91bmRpbmcgYm94LlxuICAgICAgICAgICAgdmlzdWFsRWxlbWVudC5yZW5kZXIoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgdGhpcyB2aXN1YWxFbGVtZW50IGlzbid0IHByZXNlbnQgKGllIGl0J3MgYmVlbiByZW1vdmVkIGZyb20gdGhlIHRyZWUgYnkgdGhlIHVzZXIgYnV0XG4gICAgICAgICAgICAgKiBrZXB0IGluIGJ5IHRoZSB0cmVlIGJ5IEFuaW1hdGVQcmVzZW5jZSkgdGhlbiBjYWxsIHNhZmVUb1JlbW92ZSB3aGVuIGFsbCBheGlzIGFuaW1hdGlvbnNcbiAgICAgICAgICAgICAqIGhhdmUgc3VjY2Vzc2Z1bGx5IGZpbmlzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYW5pbWF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSBfdGhpcy5wcm9wcykub25MYXlvdXRBbmltYXRpb25Db21wbGV0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgICAgICAgICAgICAgIGlmICh2aXN1YWxFbGVtZW50LmlzUHJlc2VudCkge1xuICAgICAgICAgICAgICAgICAgICB2aXN1YWxFbGVtZW50LnByZXNlbmNlID0gUHJlc2VuY2UuUHJlc2VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNhZmVUb1JlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFuaW1hdGUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmlzdWFsRWxlbWVudCA9IHRoaXMucHJvcHMudmlzdWFsRWxlbWVudDtcbiAgICAgICAgdmlzdWFsRWxlbWVudC5lbmFibGVMYXlvdXRQcm9qZWN0aW9uKCk7XG4gICAgICAgIHRoaXMudW5zdWJMYXlvdXRSZWFkeSA9IHZpc3VhbEVsZW1lbnQub25MYXlvdXRVcGRhdGUodGhpcy5hbmltYXRlKTtcbiAgICB9O1xuICAgIEFuaW1hdGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnVuc3ViTGF5b3V0UmVhZHkoKTtcbiAgICAgICAgZWFjaEF4aXMoZnVuY3Rpb24gKGF4aXMpIHsgdmFyIF9hLCBfYjsgcmV0dXJuIChfYiA9IChfYSA9IF90aGlzLnN0b3BBeGlzQW5pbWF0aW9uKVtheGlzXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRPRE86IFRoaXMgbWFudWFsbHkgcGVyZm9ybXMgYW5pbWF0aW9ucyBvbiB0aGUgdmlzdWFsRWxlbWVudCdzIGxheW91dCBwcm9ncmVzc1xuICAgICAqIHZhbHVlcy4gSXQnZCBiZSBwcmVmZXJhYmxlIHRvIGFtZW5kIHRoZSBIVE1MVmlzdWFsRWxlbWVudC5zdGFydExheW91dEF4aXNBbmltYXRpb25cbiAgICAgKiBBUEkgdG8gYWNjZXB0IG1vcmUgY3VzdG9tIGFuaW1hdGlvbnMgbGlrZSB0aGlzLlxuICAgICAqL1xuICAgIEFuaW1hdGUucHJvdG90eXBlLmFuaW1hdGVBeGlzID0gZnVuY3Rpb24gKGF4aXMsIHRhcmdldCwgb3JpZ2luLCBfYSkge1xuICAgICAgICB2YXIgX2IsIF9jO1xuICAgICAgICB2YXIgX2QgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgdHJhbnNpdGlvbiA9IF9kLnRyYW5zaXRpb24sIGNyb3NzZmFkZU9wYWNpdHkgPSBfZC5jcm9zc2ZhZGVPcGFjaXR5O1xuICAgICAgICAoX2MgPSAoX2IgPSB0aGlzLnN0b3BBeGlzQW5pbWF0aW9uKVtheGlzXSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwoX2IpO1xuICAgICAgICB2YXIgdmlzdWFsRWxlbWVudCA9IHRoaXMucHJvcHMudmlzdWFsRWxlbWVudDtcbiAgICAgICAgdmFyIGZyYW1lVGFyZ2V0ID0gdGhpcy5mcmFtZVRhcmdldFtheGlzXTtcbiAgICAgICAgdmFyIGxheW91dFByb2dyZXNzID0gdmlzdWFsRWxlbWVudC5heGlzUHJvZ3Jlc3NbYXhpc107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgbGF5b3V0IHByb2dyZXNzIGJhY2sgdG8gMC4gV2Ugc2V0IGl0IHR3aWNlIHRvIGhhcmQtcmVzZXQgYW55IHZlbG9jaXR5IHRoYXQgbWlnaHRcbiAgICAgICAgICogYmUgcmUtaW5jb3BvcmF0ZWQgaW50byBhIHN1YnNlcXVlbnQgc3ByaW5nIGFuaW1hdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dFByb2dyZXNzLmNsZWFyTGlzdGVuZXJzKCk7XG4gICAgICAgIGxheW91dFByb2dyZXNzLnNldCgwKTtcbiAgICAgICAgbGF5b3V0UHJvZ3Jlc3Muc2V0KDApO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBpcyBhIGNyb3NzZmFkZSBhbmltYXRpb24sIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBib3RoIHRoZSBvcGFjaXR5IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICAgICAqIGFuZCB0aGUgb25lIGJlaW5nIGNyb3NzZmFkZWQgb3V0LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGNyb3NzZmFkZTtcbiAgICAgICAgaWYgKGNyb3NzZmFkZU9wYWNpdHkpIHtcbiAgICAgICAgICAgIGNyb3NzZmFkZSA9IHRoaXMuY3JlYXRlQ3Jvc3NmYWRlQW5pbWF0aW9uKGNyb3NzZmFkZU9wYWNpdHkpO1xuICAgICAgICAgICAgdmlzdWFsRWxlbWVudC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZSBhbiBhbmltYXRpb24gZnVuY3Rpb24gdG8gcnVuIG9uY2UgcGVyIGZyYW1lLiBUaGlzIHdpbGwgdHdlZW4gdGhlIHZpc3VhbCBib3VuZGluZyBib3ggZnJvbVxuICAgICAgICAgKiBvcmlnaW4gdG8gdGFyZ2V0IHVzaW5nIHRoZSBsYXRlc3QgcHJvZ3Jlc3MgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBsYXRlc3QgbGF5b3V0UHJvZ3Jlc3MsIHdoaWNoIGlzIGEgdmFsdWUgZnJvbSAwLTEwMDAsIGludG8gYSAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhciBwID0gbGF5b3V0UHJvZ3Jlc3MuZ2V0KCkgLyBwcm9ncmVzc1RhcmdldDtcbiAgICAgICAgICAgIC8vIFR3ZWVuIHRoZSBheGlzIGFuZCB1cGRhdGUgdGhlIHZpc3VhbEVsZW1lbnQgd2l0aCB0aGUgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgICAgdHdlZW5BeGlzKGZyYW1lVGFyZ2V0LCBvcmlnaW4sIHRhcmdldCwgcCk7XG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50LnNldEF4aXNUYXJnZXQoYXhpcywgZnJhbWVUYXJnZXQubWluLCBmcmFtZVRhcmdldC5tYXgpO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGNyb3NzZmFkZSBhbmltYXRpb24sIHVwZGF0ZSBib3RoIGVsZW1lbnRzLlxuICAgICAgICAgICAgY3Jvc3NmYWRlID09PSBudWxsIHx8IGNyb3NzZmFkZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3Jvc3NmYWRlKHApO1xuICAgICAgICB9O1xuICAgICAgICAvLyBTeW5jaHJvbm91c2x5IHJ1biBhIGZyYW1lIHRvIGVuc3VyZSB0aGVyZSdzIG5vIGZsYXNoIG9mIHRoZSB1bmNvcnJlY3RlZCBib3VuZGluZyBib3guXG4gICAgICAgIGZyYW1lKCk7XG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBsYXlvdXQgZGVsdGEgaXMgdXBkYXRlZCBmb3IgdGhpcyBmcmFtZS5cbiAgICAgICAgdmlzdWFsRWxlbWVudC51cGRhdGVMYXlvdXREZWx0YSgpO1xuICAgICAgICAvLyBDcmVhdGUgYSBmdW5jdGlvbiB0byBzdG9wIGFuaW1hdGlvbiBvbiB0aGlzIHNwZWNpZmljIGF4aXNcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlUHJvZ3Jlc3MgPSBsYXlvdXRQcm9ncmVzcy5vbkNoYW5nZShmcmFtZSk7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24gb24gdGhpcyBheGlzXG4gICAgICAgIHZhciBhbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbihheGlzID09PSBcInhcIiA/IFwibGF5b3V0WFwiIDogXCJsYXlvdXRZXCIsIGxheW91dFByb2dyZXNzLCBwcm9ncmVzc1RhcmdldCwgdHJhbnNpdGlvbiB8fCB0aGlzLnByb3BzLnRyYW5zaXRpb24gfHwgZGVmYXVsdFRyYW5zaXRpb24pLnRoZW4odW5zdWJzY3JpYmVQcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuc3RvcEF4aXNBbmltYXRpb25bYXhpc10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsYXlvdXRQcm9ncmVzcy5zdG9wKCk7XG4gICAgICAgICAgICB1bnN1YnNjcmliZVByb2dyZXNzKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgfTtcbiAgICBBbmltYXRlLnByb3RvdHlwZS5jcmVhdGVDcm9zc2ZhZGVBbmltYXRpb24gPSBmdW5jdGlvbiAoY3Jvc3NmYWRlT3BhY2l0eSkge1xuICAgICAgICB2YXIgdmlzdWFsRWxlbWVudCA9IHRoaXMucHJvcHMudmlzdWFsRWxlbWVudDtcbiAgICAgICAgdmFyIG9wYWNpdHkgPSB2aXN1YWxFbGVtZW50LmdldFZhbHVlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBvcGFjaXR5LnNldChlYXNlQ3Jvc3NmYWRlSW4obWl4KDAsIDEsIHApKSk7XG4gICAgICAgICAgICBjcm9zc2ZhZGVPcGFjaXR5LnNldChlYXNlQ3Jvc3NmYWRlT3V0KG1peCgxLCAwLCBwKSkpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgQW5pbWF0ZS5wcm90b3R5cGUuc2FmZVRvUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLnByb3BzKS5zYWZlVG9SZW1vdmUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICB9O1xuICAgIEFuaW1hdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0ZTtcbn0oQ29tcG9uZW50JDEpKTtcbmZ1bmN0aW9uIEFuaW1hdGVMYXlvdXRDb250ZXh0UHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlUHJlc2VuY2UoKSwgMiksIHNhZmVUb1JlbW92ZSA9IF9hWzFdO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEFuaW1hdGUsIF9fYXNzaWduKHt9LCBwcm9wcywgeyBzYWZlVG9SZW1vdmU6IHNhZmVUb1JlbW92ZSB9KSk7XG59XG5mdW5jdGlvbiBoYXNNb3ZlZChhLCBiKSB7XG4gICAgcmV0dXJuIGhhc0F4aXNNb3ZlZChhLngsIGIueCkgfHwgaGFzQXhpc01vdmVkKGEueSwgYi55KTtcbn1cbmZ1bmN0aW9uIGhhc0F4aXNNb3ZlZChhLCBiKSB7XG4gICAgcmV0dXJuIGEubWluICE9PSBiLm1pbiB8fCBhLm1heCAhPT0gYi5tYXg7XG59XG52YXIgZGVmYXVsdFRyYW5zaXRpb24gPSB7XG4gICAgZHVyYXRpb246IDAuNDUsXG4gICAgZWFzZTogWzAuNCwgMCwgMC4xLCAxXSxcbn07XG5mdW5jdGlvbiBjb21wcmVzcyhtaW4sIG1heCwgZWFzaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIC8vIENvdWxkIHJlcGxhY2UgaWZzIHdpdGggY2xhbXBcbiAgICAgICAgaWYgKHAgPCBtaW4pXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgaWYgKHAgPiBtYXgpXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIGVhc2luZyhwcm9ncmVzcyhtaW4sIG1heCwgcCkpO1xuICAgIH07XG59XG52YXIgZWFzZUNyb3NzZmFkZUluID0gY29tcHJlc3MoMCwgMC41LCBjaXJjT3V0KTtcbnZhciBlYXNlQ3Jvc3NmYWRlT3V0ID0gY29tcHJlc3MoMC41LCAwLjk1LCBsaW5lYXIpO1xuLyoqXG4gKiBAcHVibGljXG4gKi9cbnZhciBBbmltYXRlTGF5b3V0ID0ge1xuICAgIGtleTogXCJhbmltYXRlLWxheW91dFwiLFxuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAhIXByb3BzLmxheW91dCB8fCAhIXByb3BzLmxheW91dElkOyB9LFxuICAgIGdldENvbXBvbmVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQW5pbWF0ZUxheW91dENvbnRleHRQcm92aWRlcjsgfSxcbn07XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIHNjaGVkdWxpbmcgdGhlIG1lYXN1cmluZyBvZiB0aGUgbW90aW9uIGNvbXBvbmVudFxuICovXG52YXIgTWVhc3VyZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWVhc3VyZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZWFzdXJlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgYSBjaGlsZCBvZiBhIFN5bmNDb250ZXh0LCByZWdpc3RlciB0aGUgVmlzdWFsRWxlbWVudCB3aXRoIGl0IG9uIG1vdW50LlxuICAgICAqL1xuICAgIE1lYXN1cmUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBzeW5jTGF5b3V0ID0gX2Euc3luY0xheW91dCwgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQ7XG4gICAgICAgIGlzU2hhcmVkTGF5b3V0KHN5bmNMYXlvdXQpICYmIHN5bmNMYXlvdXQucmVnaXN0ZXIodmlzdWFsRWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGlzIGEgY2hpbGQgb2YgYSBTeW5jQ29udGV4dCwgbm90aWZ5IGl0IHRoYXQgaXQgbmVlZHMgdG8gcmUtcmVuZGVyLiBJdCB3aWxsIHRoZW5cbiAgICAgKiBoYW5kbGUgdGhlIHNuYXBzaG90dGluZy5cbiAgICAgKlxuICAgICAqIElmIGl0IGlzIHN0YW5kLWFsb25lIGNvbXBvbmVudCwgYWRkIGl0IHRvIHRoZSBiYXRjaGVyLlxuICAgICAqL1xuICAgIE1lYXN1cmUucHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBzeW5jTGF5b3V0ID0gX2Euc3luY0xheW91dCwgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQ7XG4gICAgICAgIGlmIChpc1NoYXJlZExheW91dChzeW5jTGF5b3V0KSkge1xuICAgICAgICAgICAgc3luY0xheW91dC5zeW5jVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50LnNuYXBzaG90Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgIHN5bmNMYXlvdXQuYWRkKHZpc3VhbEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgTWVhc3VyZS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBzeW5jTGF5b3V0ID0gX2Euc3luY0xheW91dCwgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQ7XG4gICAgICAgIGlmICghaXNTaGFyZWRMYXlvdXQoc3luY0xheW91dCkpXG4gICAgICAgICAgICBzeW5jTGF5b3V0LmZsdXNoKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGlzIGF4aXMgaXNuJ3QgYW5pbWF0aW5nIGFzIGEgcmVzdWx0IG9mIHRoaXMgcmVuZGVyIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHRhcmdldEJveFxuICAgICAgICAgKiB0byB0aGUgbWVhc3VyZWQgYm94XG4gICAgICAgICAqL1xuICAgICAgICB2aXN1YWxFbGVtZW50LnJlYmFzZVRhcmdldEJveCgpO1xuICAgIH07XG4gICAgTWVhc3VyZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBNZWFzdXJlO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmZ1bmN0aW9uIE1lYXN1cmVDb250ZXh0UHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgc3luY0xheW91dCA9IHVzZUNvbnRleHQoU2hhcmVkTGF5b3V0Q29udGV4dCk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVhc3VyZSwgX19hc3NpZ24oe30sIHByb3BzLCB7IHN5bmNMYXlvdXQ6IHN5bmNMYXlvdXQgfSkpO1xufVxudmFyIE1lYXN1cmVMYXlvdXQgPSB7XG4gICAga2V5OiBcIm1lYXN1cmUtbGF5b3V0XCIsXG4gICAgc2hvdWxkUmVuZGVyOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICEhcHJvcHMuZHJhZyB8fCAhIXByb3BzLmxheW91dCB8fCAhIXByb3BzLmxheW91dElkO1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNZWFzdXJlQ29udGV4dFByb3ZpZGVyOyB9LFxufTtcblxuLyoqXG4gKiBDb252ZXJ0IGFueSBSZWFjdCBjb21wb25lbnQgaW50byBhIGBtb3Rpb25gIGNvbXBvbmVudC4gVGhlIHByb3ZpZGVkIGNvbXBvbmVudFxuICogKiptdXN0KiogdXNlIGBSZWFjdC5mb3J3YXJkUmVmYCB0byB0aGUgdW5kZXJseWluZyBET00gY29tcG9uZW50IHlvdSB3YW50IHRvIGFuaW1hdGUuXG4gKlxuICogYGBganN4XG4gKiBjb25zdCBDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSAvPlxuICogfSlcbiAqXG4gKiBjb25zdCBNb3Rpb25Db21wb25lbnQgPSBtb3Rpb24uY3VzdG9tKENvbXBvbmVudClcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTW90aW9uUHJveHkoZGVmYXVsdEZlYXR1cmVzKSB7XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgZGVmYXVsdEZlYXR1cmVzOiBkZWZhdWx0RmVhdHVyZXMsXG4gICAgICAgIHVzZVZpc3VhbEVsZW1lbnQ6IHVzZURvbVZpc3VhbEVsZW1lbnQsXG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBhbmltYXRpb25Db250cm9sc0NvbmZpZzoge1xuICAgICAgICAgICAgbWFrZVRhcmdldEFuaW1hdGFibGU6IHBhcnNlRG9tVmFyaWFudCxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGN1c3RvbShDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU1vdGlvbkNvbXBvbmVudChDb21wb25lbnQsIGNvbmZpZyk7XG4gICAgfVxuICAgIHZhciBjb21wb25lbnRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJjdXN0b21cIilcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuY3VzdG9tO1xuICAgICAgICBpZiAoIWNvbXBvbmVudENhY2hlLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRDYWNoZS5zZXQoa2V5LCBjcmVhdGVNb3Rpb25Db21wb25lbnQoa2V5LCBjb25maWcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50Q2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJveHkoeyBjdXN0b206IGN1c3RvbSB9LCB7IGdldDogZ2V0IH0pO1xufVxuLyoqXG4gKiBIVE1MICYgU1ZHIGNvbXBvbmVudHMsIG9wdGltaXNlZCBmb3IgdXNlIHdpdGggZ2VzdHVyZXMgYW5kIGFuaW1hdGlvbi4gVGhlc2UgY2FuIGJlIHVzZWQgYXNcbiAqIGRyb3AtaW4gcmVwbGFjZW1lbnRzIGZvciBhbnkgSFRNTCAmIFNWRyBjb21wb25lbnQsIGFsbCBDU1MgJiBTVkcgcHJvcGVydGllcyBhcmUgc3VwcG9ydGVkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIG1vdGlvbiA9IC8qQF9fUFVSRV9fKi8gY3JlYXRlTW90aW9uUHJveHkoW1xuICAgIE1lYXN1cmVMYXlvdXQsXG4gICAgQW5pbWF0aW9uLFxuICAgIERyYWcsXG4gICAgR2VzdHVyZXMsXG4gICAgRXhpdCxcbiAgICBBbmltYXRlTGF5b3V0LFxuXSk7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIG0gPSAvKkBfX1BVUkVfXyovIGNyZWF0ZU1vdGlvblByb3h5KFtNZWFzdXJlTGF5b3V0XSk7XG5cbmZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBfYSA9IF9fcmVhZCh1c2VTdGF0ZSgwKSwgMiksIGZvcmNlZFJlbmRlckNvdW50ID0gX2FbMF0sIHNldEZvcmNlZFJlbmRlckNvdW50ID0gX2FbMV07XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldEZvcmNlZFJlbmRlckNvdW50KGZvcmNlZFJlbmRlckNvdW50ICsgMSk7IH0sIFtcbiAgICAgICAgZm9yY2VkUmVuZGVyQ291bnQsXG4gICAgXSk7XG59XG5cbnZhciBwcmVzZW5jZUlkID0gMDtcbmZ1bmN0aW9uIGdldFByZXNlbmNlSWQoKSB7XG4gICAgdmFyIGlkID0gcHJlc2VuY2VJZDtcbiAgICBwcmVzZW5jZUlkKys7XG4gICAgcmV0dXJuIGlkO1xufVxudmFyIFByZXNlbmNlQ2hpbGQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgaW5pdGlhbCA9IF9hLmluaXRpYWwsIGlzUHJlc2VudCA9IF9hLmlzUHJlc2VudCwgb25FeGl0Q29tcGxldGUgPSBfYS5vbkV4aXRDb21wbGV0ZSwgY3VzdG9tID0gX2EuY3VzdG9tLCBwcmVzZW5jZUFmZmVjdHNMYXlvdXQgPSBfYS5wcmVzZW5jZUFmZmVjdHNMYXlvdXQ7XG4gICAgdmFyIHByZXNlbmNlQ2hpbGRyZW4gPSB1c2VDb25zdGFudChuZXdDaGlsZHJlbk1hcCk7XG4gICAgdmFyIGlkID0gdXNlQ29uc3RhbnQoZ2V0UHJlc2VuY2VJZCk7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGluaXRpYWw6IGluaXRpYWwsXG4gICAgICAgICAgICBpc1ByZXNlbnQ6IGlzUHJlc2VudCxcbiAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tLFxuICAgICAgICAgICAgb25FeGl0Q29tcGxldGU6IGZ1bmN0aW9uIChjaGlsZElkKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VDaGlsZHJlbi5zZXQoY2hpbGRJZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIGFsbENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0NvbXBsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhbGxDb21wbGV0ZSAmJiAob25FeGl0Q29tcGxldGUgPT09IG51bGwgfHwgb25FeGl0Q29tcGxldGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uRXhpdENvbXBsZXRlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAoY2hpbGRJZCkge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlQ2hpbGRyZW4uc2V0KGNoaWxkSWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJlc2VuY2VDaGlsZHJlbi5kZWxldGUoY2hpbGRJZCk7IH07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sIFxuICAgIC8qKlxuICAgICAqIElmIHRoZSBwcmVzZW5jZSBvZiBhIGNoaWxkIGFmZmVjdHMgdGhlIGxheW91dCBvZiB0aGUgY29tcG9uZW50cyBhcm91bmQgaXQsXG4gICAgICogd2Ugd2FudCB0byBtYWtlIGEgbmV3IGNvbnRleHQgdmFsdWUgdG8gZW5zdXJlIHRoZXkgZ2V0IHJlLXJlbmRlcmVkXG4gICAgICogc28gdGhleSBjYW4gZGV0ZWN0IHRoYXQgbGF5b3V0IGNoYW5nZS5cbiAgICAgKi9cbiAgICBwcmVzZW5jZUFmZmVjdHNMYXlvdXQgPyB1bmRlZmluZWQgOiBbaXNQcmVzZW50XSk7XG4gICAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByZXNlbmNlQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoXywga2V5KSB7IHJldHVybiBwcmVzZW5jZUNoaWxkcmVuLnNldChrZXksIGZhbHNlKTsgfSk7XG4gICAgfSwgW2lzUHJlc2VudF0pO1xuICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChQcmVzZW5jZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHQgfSwgY2hpbGRyZW4pKTtcbn07XG5mdW5jdGlvbiBuZXdDaGlsZHJlbk1hcCgpIHtcbiAgICByZXR1cm4gbmV3IE1hcCgpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZEtleShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC5rZXkgfHwgXCJcIjtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkTG9va3VwKGNoaWxkcmVuLCBhbGxDaGlsZHJlbikge1xuICAgIHZhciBzZWVuQ2hpbGRyZW4gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgU2V0KCkgOiBudWxsO1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBrZXkgPSBnZXRDaGlsZEtleShjaGlsZCk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgc2VlbkNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoc2VlbkNoaWxkcmVuLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2hpbGRyZW4gb2YgQW5pbWF0ZVByZXNlbmNlIHJlcXVpcmUgdW5pcXVlIGtleXMuIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhIGR1cGxpY2F0ZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWVuQ2hpbGRyZW4uYWRkKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgYWxsQ2hpbGRyZW4uc2V0KGtleSwgY2hpbGQpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gb25seUVsZW1lbnRzKGNoaWxkcmVuKSB7XG4gICAgdmFyIGZpbHRlcmVkID0gW107XG4gICAgLy8gV2UgdXNlIGZvckVhY2ggaGVyZSBpbnN0ZWFkIG9mIG1hcCBhcyBtYXAgbXV0YXRlcyB0aGUgY29tcG9uZW50IGtleSBieSBwcmVwcmVuZGluZyBgLiRgXG4gICAgQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpXG4gICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGNoaWxkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWQ7XG59XG4vKipcbiAqIGBBbmltYXRlUHJlc2VuY2VgIGVuYWJsZXMgdGhlIGFuaW1hdGlvbiBvZiBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgdHJlZS5cbiAqXG4gKiBXaGVuIGFkZGluZy9yZW1vdmluZyBtb3JlIHRoYW4gYSBzaW5nbGUgY2hpbGQsIGV2ZXJ5IGNoaWxkICoqbXVzdCoqIGJlIGdpdmVuIGEgdW5pcXVlIGBrZXlgIHByb3AuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBBbnkgYEZyYW1lYCBjb21wb25lbnRzIHRoYXQgaGF2ZSBhbiBgZXhpdGAgcHJvcGVydHkgZGVmaW5lZCB3aWxsIGFuaW1hdGUgb3V0IHdoZW4gcmVtb3ZlZCBmcm9tXG4gKiB0aGUgdHJlZS5cbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB7IEZyYW1lLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXInXG4gKlxuICogLy8gQXMgaXRlbXMgYXJlIGFkZGVkIGFuZCByZW1vdmVkIGZyb20gYGl0ZW1zYFxuICogZXhwb3J0IGZ1bmN0aW9uIEl0ZW1zKHsgaXRlbXMgfSkge1xuICogICByZXR1cm4gKFxuICogICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gKiAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICogICAgICAgICA8RnJhbWVcbiAqICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gKiAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gKiAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gKiAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gKiAgICAgICAgIC8+XG4gKiAgICAgICApKX1cbiAqICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogWW91IGNhbiBzZXF1ZW5jZSBleGl0IGFuaW1hdGlvbnMgdGhyb3VnaG91dCBhIHRyZWUgdXNpbmcgdmFyaWFudHMuXG4gKlxuICogQG1vdGlvblxuICpcbiAqIEFueSBgbW90aW9uYCBjb21wb25lbnRzIHRoYXQgaGF2ZSBhbiBgZXhpdGAgcHJvcGVydHkgZGVmaW5lZCB3aWxsIGFuaW1hdGUgb3V0IHdoZW4gcmVtb3ZlZCBmcm9tXG4gKiB0aGUgdHJlZS5cbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbiAqXG4gKiBleHBvcnQgY29uc3QgSXRlbXMgPSAoeyBpdGVtcyB9KSA9PiAoXG4gKiAgIDxBbmltYXRlUHJlc2VuY2U+XG4gKiAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAqICAgICAgIDxtb3Rpb24uZGl2XG4gKiAgICAgICAgIGtleT17aXRlbS5pZH1cbiAqICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gKiAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICogICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAqICAgICAgIC8+XG4gKiAgICAgKSl9XG4gKiAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICogKVxuICogYGBgXG4gKlxuICogWW91IGNhbiBzZXF1ZW5jZSBleGl0IGFuaW1hdGlvbnMgdGhyb3VnaG91dCBhIHRyZWUgdXNpbmcgdmFyaWFudHMuXG4gKlxuICogSWYgYSBjaGlsZCBjb250YWlucyBtdWx0aXBsZSBgbW90aW9uYCBjb21wb25lbnRzIHdpdGggYGV4aXRgIHByb3BzLCBpdCB3aWxsIG9ubHkgdW5tb3VudCB0aGUgY2hpbGRcbiAqIG9uY2UgYWxsIGBtb3Rpb25gIGNvbXBvbmVudHMgaGF2ZSBmaW5pc2hlZCBhbmltYXRpbmcgb3V0LiBMaWtld2lzZSwgYW55IGNvbXBvbmVudHMgdXNpbmdcbiAqIGB1c2VQcmVzZW5jZWAgYWxsIG5lZWQgdG8gY2FsbCBgc2FmZVRvUmVtb3ZlYC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBBbmltYXRlUHJlc2VuY2UgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgY3VzdG9tID0gX2EuY3VzdG9tLCBfYiA9IF9hLmluaXRpYWwsIGluaXRpYWwgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBvbkV4aXRDb21wbGV0ZSA9IF9hLm9uRXhpdENvbXBsZXRlLCBleGl0QmVmb3JlRW50ZXIgPSBfYS5leGl0QmVmb3JlRW50ZXIsIF9jID0gX2EucHJlc2VuY2VBZmZlY3RzTGF5b3V0LCBwcmVzZW5jZUFmZmVjdHNMYXlvdXQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jO1xuICAgIC8vIFdlIHdhbnQgdG8gZm9yY2UgYSByZS1yZW5kZXIgb25jZSBhbGwgZXhpdGluZyBhbmltYXRpb25zIGhhdmUgZmluaXNoZWQuIFdlXG4gICAgLy8gZWl0aGVyIHVzZSBhIGxvY2FsIGZvcmNlUmVuZGVyIGZ1bmN0aW9uLCBvciBvbmUgZnJvbSBhIHBhcmVudCBjb250ZXh0IGlmIGl0IGV4aXN0cy5cbiAgICB2YXIgZm9yY2VSZW5kZXIgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICAgIHZhciBsYXlvdXRDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRMYXlvdXRDb250ZXh0KTtcbiAgICBpZiAoaXNTaGFyZWRMYXlvdXQobGF5b3V0Q29udGV4dCkpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIgPSBsYXlvdXRDb250ZXh0LmZvcmNlVXBkYXRlO1xuICAgIH1cbiAgICB2YXIgaXNJbml0aWFsUmVuZGVyID0gdXNlUmVmKHRydWUpO1xuICAgIC8vIEZpbHRlciBvdXQgYW55IGNoaWxkcmVuIHRoYXQgYXJlbid0IFJlYWN0RWxlbWVudHMuIFdlIGNhbiBvbmx5IHRyYWNrIFJlYWN0RWxlbWVudHMgd2l0aCBhIHByb3BzLmtleVxuICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gb25seUVsZW1lbnRzKGNoaWxkcmVuKTtcbiAgICAvLyBLZWVwIGEgbGl2aW5nIHJlY29yZCBvZiB0aGUgY2hpbGRyZW4gd2UncmUgYWN0dWFsbHkgcmVuZGVyaW5nIHNvIHdlXG4gICAgLy8gY2FuIGRpZmYgdG8gZmlndXJlIG91dCB3aGljaCBhcmUgZW50ZXJpbmcgYW5kIGV4aXRpbmdcbiAgICB2YXIgcHJlc2VudENoaWxkcmVuID0gdXNlUmVmKGZpbHRlcmVkQ2hpbGRyZW4pO1xuICAgIC8vIEEgbG9va3VwIHRhYmxlIHRvIHF1aWNrbHkgcmVmZXJlbmNlIGNvbXBvbmVudHMgYnkga2V5XG4gICAgdmFyIGFsbENoaWxkcmVuID0gdXNlUmVmKG5ldyBNYXAoKSlcbiAgICAgICAgLmN1cnJlbnQ7XG4gICAgLy8gQSBsaXZpbmcgcmVjb3JkIG9mIGFsbCBjdXJyZW50bHkgZXhpdGluZyBjb21wb25lbnRzLlxuICAgIHZhciBleGl0aW5nID0gdXNlUmVmKG5ldyBTZXQoKSkuY3VycmVudDtcbiAgICB1cGRhdGVDaGlsZExvb2t1cChmaWx0ZXJlZENoaWxkcmVuLCBhbGxDaGlsZHJlbik7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgaW5pdGlhbCBjb21wb25lbnQgcmVuZGVyLCBqdXN0IGRlYWwgd2l0aCBsb2dpYyBzdXJyb3VuZGluZyB3aGV0aGVyXG4gICAgLy8gd2UgcGxheSBvbk1vdW50IGFuaW1hdGlvbnMgb3Igbm90LlxuICAgIGlmIChpc0luaXRpYWxSZW5kZXIuY3VycmVudCkge1xuICAgICAgICBpc0luaXRpYWxSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGZpbHRlcmVkQ2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoUHJlc2VuY2VDaGlsZCwgeyBrZXk6IGdldENoaWxkS2V5KGNoaWxkKSwgaXNQcmVzZW50OiB0cnVlLCBpbml0aWFsOiBpbml0aWFsID8gdW5kZWZpbmVkIDogZmFsc2UsIHByZXNlbmNlQWZmZWN0c0xheW91dDogcHJlc2VuY2VBZmZlY3RzTGF5b3V0IH0sIGNoaWxkKSk7IH0pKSk7XG4gICAgfVxuICAgIC8vIElmIHRoaXMgaXMgYSBzdWJzZXF1ZW50IHJlbmRlciwgZGVhbCB3aXRoIGVudGVyaW5nIGFuZCBleGl0aW5nIGNoaWxkcmVuXG4gICAgdmFyIGNoaWxkcmVuVG9SZW5kZXIgPSBfX3NwcmVhZChmaWx0ZXJlZENoaWxkcmVuKTtcbiAgICAvLyBEaWZmIHRoZSBrZXlzIG9mIHRoZSBjdXJyZW50bHktcHJlc2VudCBhbmQgdGFyZ2V0IGNoaWxkcmVuIHRvIHVwZGF0ZSBvdXJcbiAgICAvLyBleGl0aW5nIGxpc3QuXG4gICAgdmFyIHByZXNlbnRLZXlzID0gcHJlc2VudENoaWxkcmVuLmN1cnJlbnQubWFwKGdldENoaWxkS2V5KTtcbiAgICB2YXIgdGFyZ2V0S2V5cyA9IGZpbHRlcmVkQ2hpbGRyZW4ubWFwKGdldENoaWxkS2V5KTtcbiAgICAvLyBEaWZmIHRoZSBwcmVzZW50IGNoaWxkcmVuIHdpdGggb3VyIHRhcmdldCBjaGlsZHJlbiBhbmQgbWFyayB0aG9zZSB0aGF0IGFyZSBleGl0aW5nXG4gICAgdmFyIG51bVByZXNlbnQgPSBwcmVzZW50S2V5cy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVzZW50OyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHByZXNlbnRLZXlzW2ldO1xuICAgICAgICBpZiAodGFyZ2V0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBleGl0aW5nLmFkZChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gY2FzZSB0aGlzIGtleSBoYXMgcmUtZW50ZXJlZCwgcmVtb3ZlIGZyb20gdGhlIGV4aXRpbmcgbGlzdFxuICAgICAgICAgICAgZXhpdGluZy5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB3ZSBjdXJyZW50bHkgaGF2ZSBleGl0aW5nIGNoaWxkcmVuLCBhbmQgd2UncmUgZGVmZXJyaW5nIHJlbmRlcmluZyBpbmNvbWluZyBjaGlsZHJlblxuICAgIC8vIHVudGlsIGFmdGVyIGFsbCBjdXJyZW50IGNoaWxkcmVuIGhhdmUgZXhpdGluZywgZW1wdHkgdGhlIGNoaWxkcmVuVG9SZW5kZXIgYXJyYXlcbiAgICBpZiAoZXhpdEJlZm9yZUVudGVyICYmIGV4aXRpbmcuc2l6ZSkge1xuICAgICAgICBjaGlsZHJlblRvUmVuZGVyID0gW107XG4gICAgfVxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgY3VycmVudGx5IGV4aXRpbmcgY29tcG9uZW50cyBhbmQgY2xvbmUgdGhlbSB0byBvdmVyd3JpdGUgYGFuaW1hdGVgXG4gICAgLy8gd2l0aCBhbnkgYGV4aXRgIHByb3AgdGhleSBtaWdodCBoYXZlIGRlZmluZWQuXG4gICAgZXhpdGluZy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaXMgYWN0dWFsbHkgZW50ZXJpbmcgYWdhaW4sIGVhcmx5IHJldHVyblxuICAgICAgICBpZiAodGFyZ2V0S2V5cy5pbmRleE9mKGtleSkgIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgY2hpbGQgPSBhbGxDaGlsZHJlbi5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFjaGlsZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGluc2VydGlvbkluZGV4ID0gcHJlc2VudEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICB2YXIgb25FeGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxsQ2hpbGRyZW4uZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBleGl0aW5nLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoaXMgY2hpbGQgZnJvbSB0aGUgcHJlc2VudCBjaGlsZHJlblxuICAgICAgICAgICAgdmFyIHJlbW92ZUluZGV4ID0gcHJlc2VudENoaWxkcmVuLmN1cnJlbnQuZmluZEluZGV4KGZ1bmN0aW9uIChwcmVzZW50Q2hpbGQpIHsgcmV0dXJuIHByZXNlbnRDaGlsZC5rZXkgPT09IGtleTsgfSk7XG4gICAgICAgICAgICBwcmVzZW50Q2hpbGRyZW4uY3VycmVudC5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgICAgICAgLy8gRGVmZXIgcmUtcmVuZGVyaW5nIHVudGlsIGFsbCBleGl0aW5nIGNoaWxkcmVuIGhhdmUgaW5kZWVkIGxlZnRcbiAgICAgICAgICAgIGlmICghZXhpdGluZy5zaXplKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VudENoaWxkcmVuLmN1cnJlbnQgPSBmaWx0ZXJlZENoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgb25FeGl0Q29tcGxldGUgJiYgb25FeGl0Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2hpbGRyZW5Ub1JlbmRlci5zcGxpY2UoaW5zZXJ0aW9uSW5kZXgsIDAsIGNyZWF0ZUVsZW1lbnQoUHJlc2VuY2VDaGlsZCwgeyBrZXk6IGdldENoaWxkS2V5KGNoaWxkKSwgaXNQcmVzZW50OiBmYWxzZSwgb25FeGl0Q29tcGxldGU6IG9uRXhpdCwgY3VzdG9tOiBjdXN0b20sIHByZXNlbmNlQWZmZWN0c0xheW91dDogcHJlc2VuY2VBZmZlY3RzTGF5b3V0IH0sIGNoaWxkKSk7XG4gICAgfSk7XG4gICAgLy8gQWRkIGBNb3Rpb25Db250ZXh0YCBldmVuIHRvIGNoaWxkcmVuIHRoYXQgZG9uJ3QgbmVlZCBpdCB0byBlbnN1cmUgd2UncmUgcmVuZGVyaW5nXG4gICAgLy8gdGhlIHNhbWUgdHJlZSBiZXR3ZWVuIHJlbmRlcnNcbiAgICBjaGlsZHJlblRvUmVuZGVyID0gY2hpbGRyZW5Ub1JlbmRlci5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBrZXkgPSBjaGlsZC5rZXk7XG4gICAgICAgIHJldHVybiBleGl0aW5nLmhhcyhrZXkpID8gKGNoaWxkKSA6IChjcmVhdGVFbGVtZW50KFByZXNlbmNlQ2hpbGQsIHsga2V5OiBnZXRDaGlsZEtleShjaGlsZCksIGlzUHJlc2VudDogdHJ1ZSwgcHJlc2VuY2VBZmZlY3RzTGF5b3V0OiBwcmVzZW5jZUFmZmVjdHNMYXlvdXQgfSwgY2hpbGQpKTtcbiAgICB9KTtcbiAgICBwcmVzZW50Q2hpbGRyZW4uY3VycmVudCA9IGNoaWxkcmVuVG9SZW5kZXI7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICBleGl0QmVmb3JlRW50ZXIgJiZcbiAgICAgICAgY2hpbGRyZW5Ub1JlbmRlci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIllvdSdyZSBhdHRlbXB0aW5nIHRvIGFuaW1hdGUgbXVsdGlwbGUgY2hpbGRyZW4gd2l0aGluIEFuaW1hdGVQcmVzZW5jZSwgYnV0IGl0cyBleGl0QmVmb3JlRW50ZXIgcHJvcCBpcyBzZXQgdG8gdHJ1ZS4gVGhpcyB3aWxsIGxlYWQgdG8gb2RkIHZpc3VhbCBiZWhhdmlvdXIuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGV4aXRpbmcuc2l6ZVxuICAgICAgICA/IGNoaWxkcmVuVG9SZW5kZXJcbiAgICAgICAgOiBjaGlsZHJlblRvUmVuZGVyLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCk7IH0pKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTd2l0Y2hBbmltYXRpb24oY2hpbGQsIHN0YWNrKSB7XG4gICAgaWYgKHN0YWNrICYmIGNoaWxkICE9PSBzdGFjay5sZWFkKSB7XG4gICAgICAgIHJldHVybiB7IHZpc2liaWxpdHlBY3Rpb246IFZpc2liaWxpdHlBY3Rpb24uSGlkZSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGFjayAmJlxuICAgICAgICBjaGlsZC5wcmVzZW5jZSAhPT0gUHJlc2VuY2UuRW50ZXJpbmcgJiZcbiAgICAgICAgY2hpbGQgPT09IHN0YWNrLmxlYWQgJiZcbiAgICAgICAgc3RhY2subGVhZCAhPT0gc3RhY2sucHJldkxlYWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdmlzaWJpbGl0eUFjdGlvbjogVmlzaWJpbGl0eUFjdGlvbi5TaG93IH07XG4gICAgfVxuICAgIHZhciBvcmlnaW5Cb3g7XG4gICAgdmFyIHRhcmdldEJveDtcbiAgICBpZiAoY2hpbGQucHJlc2VuY2UgPT09IFByZXNlbmNlLkVudGVyaW5nKSB7XG4gICAgICAgIG9yaWdpbkJveCA9IHN0YWNrID09PSBudWxsIHx8IHN0YWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFjay5nZXRGb2xsb3dPcmlnaW4oKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hpbGQucHJlc2VuY2UgPT09IFByZXNlbmNlLkV4aXRpbmcpIHtcbiAgICAgICAgdGFyZ2V0Qm94ID0gc3RhY2sgPT09IG51bGwgfHwgc3RhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YWNrLmdldEZvbGxvd1RhcmdldCgpO1xuICAgIH1cbiAgICByZXR1cm4geyBvcmlnaW5Cb3g6IG9yaWdpbkJveCwgdGFyZ2V0Qm94OiB0YXJnZXRCb3ggfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNyb3NzZmFkZUFuaW1hdGlvbihjaGlsZCwgc3RhY2spIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB2YXIgY29uZmlnID0ge307XG4gICAgdmFyIHN0YWNrTGVhZCA9IHN0YWNrICYmIHN0YWNrLmxlYWQ7XG4gICAgdmFyIHN0YWNrTGVhZFByZXNlbmNlID0gc3RhY2tMZWFkID09PSBudWxsIHx8IHN0YWNrTGVhZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhY2tMZWFkLnByZXNlbmNlO1xuICAgIGlmIChzdGFjayAmJiBjaGlsZCA9PT0gc3RhY2tMZWFkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmVzZW5jZSA9PT0gUHJlc2VuY2UuRW50ZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5vcmlnaW5Cb3ggPSBzdGFjay5nZXRGb2xsb3dPcmlnaW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5wcmVzZW5jZSA9PT0gUHJlc2VuY2UuRXhpdGluZykge1xuICAgICAgICAgICAgY29uZmlnLnRhcmdldEJveCA9IHN0YWNrLmdldEZvbGxvd1RhcmdldCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YWNrICYmIGNoaWxkID09PSBzdGFjay5mb2xsb3cpIHtcbiAgICAgICAgY29uZmlnLnRyYW5zaXRpb24gPSBzdGFjay5nZXRMZWFkVHJhbnNpdGlvbigpO1xuICAgICAgICBpZiAoc3RhY2tMZWFkUHJlc2VuY2UgPT09IFByZXNlbmNlLkVudGVyaW5nKSB7XG4gICAgICAgICAgICBjb25maWcudGFyZ2V0Qm94ID0gc3RhY2suZ2V0TGVhZFRhcmdldCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YWNrTGVhZFByZXNlbmNlID09PSBQcmVzZW5jZS5FeGl0aW5nKSB7XG4gICAgICAgICAgICBjb25maWcub3JpZ2luQm94ID0gc3RhY2suZ2V0TGVhZE9yaWdpbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5laXRoZXIgdGhlIGxlYWQgb3IgZm9sbG93IGNvbXBvbmVudCBpcyB0aGUgcm9vdCBjaGlsZCBvZiBBbmltYXRlUHJlc2VuY2UsXG4gICAgLy8gZG9uJ3QgaGFuZGxlIGNyb3NzZmFkZSBhbmltYXRpb25zXG4gICAgaWYgKCEoKF9hID0gc3RhY2sgPT09IG51bGwgfHwgc3RhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YWNrLmZvbGxvdykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzUHJlc2VuY2VSb290KSAmJiAhKHN0YWNrTGVhZCA9PT0gbnVsbCB8fCBzdGFja0xlYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YWNrTGVhZC5pc1ByZXNlbmNlUm9vdCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICAgaWYgKCFzdGFjayB8fCBjaGlsZCA9PT0gc3RhY2tMZWFkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmVzZW5jZSA9PT0gUHJlc2VuY2UuRW50ZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5jcm9zc2ZhZGVPcGFjaXR5ID0gKF9iID0gc3RhY2sgPT09IG51bGwgfHwgc3RhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YWNrLmZvbGxvdykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldFZhbHVlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzdGFjayAmJiBjaGlsZCA9PT0gc3RhY2suZm9sbG93KSB7XG4gICAgICAgIGlmICghc3RhY2tMZWFkIHx8IHN0YWNrTGVhZFByZXNlbmNlID09PSBQcmVzZW5jZS5FbnRlcmluZykgO1xuICAgICAgICBlbHNlIGlmIChzdGFja0xlYWRQcmVzZW5jZSA9PT0gUHJlc2VuY2UuRXhpdGluZykge1xuICAgICAgICAgICAgY29uZmlnLmNyb3NzZmFkZU9wYWNpdHkgPSAoX2MgPSBzdGFjayA9PT0gbnVsbCB8fCBzdGFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhY2subGVhZCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldFZhbHVlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uZmlnLnZpc2liaWxpdHlBY3Rpb24gPSBWaXNpYmlsaXR5QWN0aW9uLkhpZGU7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59XG5cbi8qKlxuICogRm9yIGVhY2ggbGF5b3V0IGFuaW1hdGlvbiwgd2Ugd2FudCB0byBpZGVudGlmeSB0d28gY29tcG9uZW50c1xuICogd2l0aGluIGEgc3RhY2sgdGhhdCB3aWxsIHNlcnZlIGFzIHRoZSBcImxlYWRcIiBhbmQgXCJmb2xsb3dcIiBjb21wb25lbnRzLlxuICpcbiAqIEluIHRoZSBzd2l0Y2ggYW5pbWF0aW9uLCB0aGUgbGVhZCBjb21wb25lbnQgcGVyZm9ybXMgdGhlIGVudGlyZSBhbmltYXRpb24uXG4gKiBJdCB1c2VzIHRoZSBmb2xsb3cgYm91bmRpbmcgYm94IHRvIGFuaW1hdGUgb3V0IGZyb20gYW5kIGJhY2sgdG8uIFRoZSBmb2xsb3dcbiAqIGNvbXBvbmVudCBpcyBoaWRkZW4uXG4gKlxuICogSW4gdGhlIGNyb3NzZmFkZSBhbmltYXRpb24sIGJvdGggdGhlIGxlYWQgYW5kIGZvbGxvdyBjb21wb25lbnRzIHBlcmZvcm1cbiAqIHRoZSBlbnRpcmUgYW5pbWF0aW9uLCBhbmltYXRpbmcgZnJvbSB0aGUgZm9sbG93IG9yaWdpbiBib3VuZGluZyBib3ggdG8gdGhlIGxlYWRcbiAqIHRhcmdldCBib3VuZGluZyBib3guXG4gKlxuICogR2VuZXJhbGlzaW5nIGEgc3RhY2sgYXMgRmlyc3QgSW4gTGFzdCBPdXQsICpzZWFyY2hpbmcgZnJvbSB0aGUgZW5kKiB3ZSBjYW5cbiAqIGdlbmVyYWxseSBjb25zaWRlciB0aGUgbGVhZCBjb21wb25lbnQgdG8gYmU6XG4gKiAgLSBJZiB0aGUgbGFzdCBjaGlsZCBpcyBwcmVzZW50LCB0aGUgbGFzdCBjaGlsZFxuICogIC0gSWYgdGhlIGxhc3QgY2hpbGQgaXMgZXhpdGluZywgdGhlIGxhc3QgKmVuY291bnRlcmVkKiBleGl0aW5nIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBmaW5kTGVhZEFuZEZvbGxvdyhzdGFjaywgX2EpIHtcbiAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDIpLCBwcmV2TGVhZCA9IF9iWzBdLCBwcmV2Rm9sbG93ID0gX2JbMV07XG4gICAgdmFyIGxlYWQgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGxlYWRJbmRleCA9IDA7XG4gICAgdmFyIGZvbGxvdyA9IHVuZGVmaW5lZDtcbiAgICAvLyBGaW5kIHRoZSBsZWFkIGNoaWxkIGZpcnN0XG4gICAgdmFyIG51bUluU3RhY2sgPSBzdGFjay5sZW5ndGg7XG4gICAgdmFyIGxhc3RJc1ByZXNlbnQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gbnVtSW5TdGFjayAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHN0YWNrW2ldO1xuICAgICAgICB2YXIgaXNMYXN0SW5TdGFjayA9IGkgPT09IG51bUluU3RhY2sgLSAxO1xuICAgICAgICBpZiAoaXNMYXN0SW5TdGFjaylcbiAgICAgICAgICAgIGxhc3RJc1ByZXNlbnQgPSBjaGlsZC5pc1ByZXNlbnQ7XG4gICAgICAgIGlmIChsYXN0SXNQcmVzZW50KSB7XG4gICAgICAgICAgICBsZWFkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgY2hpbGQgYmVmb3JlIHRoaXMgd2lsbCBiZSBwcmVzZW50LCBtYWtlIHRoaXMgdGhlXG4gICAgICAgICAgICAvLyBsZWFkLlxuICAgICAgICAgICAgdmFyIHByZXYgPSBzdGFja1tpIC0gMV07XG4gICAgICAgICAgICBpZiAocHJldiAmJiBwcmV2LmlzUHJlc2VudClcbiAgICAgICAgICAgICAgICBsZWFkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlYWQpIHtcbiAgICAgICAgICAgIGxlYWRJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWxlYWQpXG4gICAgICAgIGxlYWQgPSBzdGFja1swXTtcbiAgICAvLyBGaW5kIHRoZSBmb2xsb3cgY2hpbGRcbiAgICBmb2xsb3cgPSBzdGFja1tsZWFkSW5kZXggLSAxXTtcbiAgICAvLyBJZiB0aGUgbGVhZCBjb21wb25lbnQgaXMgZXhpdGluZywgZmluZCB0aGUgY2xvc2VzdCBmb2xsb3dcbiAgICAvLyBwcmVzZW50IGNvbXBvbmVudFxuICAgIGlmIChsZWFkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBsZWFkSW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gc3RhY2tbaV07XG4gICAgICAgICAgICBpZiAoY2hpbGQuaXNQcmVzZW50KSB7XG4gICAgICAgICAgICAgICAgZm9sbG93ID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgdGhlIGxlYWQgaGFzIGNoYW5nZWQgYW5kIHRoZSBwcmV2aW91cyBsZWFkIHN0aWxsIGV4aXN0cyBpbiB0aGVcbiAgICAvLyBzdGFjaywgc2V0IGl0IHRvIHRoZSBwcmV2aW91cyBsZWFkLiBUaGlzIGFsbG93cyB1cyB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW5cbiAgICAvLyBhLCBiLCBjKGV4aXQpIC0+IGEsIGIoZXhpdCksIGMoZXhpdClcbiAgICAvLyBhbmRcbiAgICAvLyBhLCBiKGV4aXQpLCBjIC0+IGEsIGIoZXhpdCksIGMoZXhpdClcbiAgICBpZiAobGVhZCAhPT0gcHJldkxlYWQgJiZcbiAgICAgICAgIWxhc3RJc1ByZXNlbnQgJiZcbiAgICAgICAgZm9sbG93ID09PSBwcmV2Rm9sbG93ICYmXG4gICAgICAgIHN0YWNrLmZpbmQoZnVuY3Rpb24gKHN0YWNrQ2hpbGQpIHsgcmV0dXJuIHN0YWNrQ2hpbGQgPT09IHByZXZMZWFkOyB9KSkge1xuICAgICAgICBsZWFkID0gcHJldkxlYWQ7XG4gICAgfVxuICAgIHJldHVybiBbbGVhZCwgZm9sbG93XTtcbn1cbnZhciBMYXlvdXRTdGFjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMYXlvdXRTdGFjaygpIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFtdO1xuICAgICAgICAvLyBUcmFjayB3aGV0aGVyIHdlJ3ZlIGV2ZXIgaGFkIGEgY2hpbGRcbiAgICAgICAgdGhpcy5oYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBMYXlvdXRTdGFjay5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5vcmRlci5wdXNoKGNoaWxkKTtcbiAgICAgICAgLy8gTG9hZCBwcmV2aW91cyB2YWx1ZXMgZnJvbSBzbmFwc2hvdCBpbnRvIHRoaXMgY2hpbGRcbiAgICAgICAgLy8gVE9ETyBOZWF0ZW4gdXBcbiAgICAgICAgLy8gVE9ETyBEb3VibGUgY2hlY2sgd2hlbiByZWltcGxlbWVudGluZyBtb3ZlXG4gICAgICAgIC8vIFRPRE8gQWRkIGlzRHJhZ2dpbmcgc3RhdHVzIGFuZFxuICAgICAgICBpZiAodGhpcy5zbmFwc2hvdCkge1xuICAgICAgICAgICAgY2hpbGQucHJldlNuYXBzaG90ID0gdGhpcy5zbmFwc2hvdDtcbiAgICAgICAgICAgIC8vIFRPRE8gUmVtb3ZlIGluIGZhdm91ciBvZiBhYm92ZVxuICAgICAgICAgICAgY2hpbGQucHJldlZpZXdwb3J0Qm94ID0gdGhpcy5zbmFwc2hvdC5ib3VuZGluZ0JveDtcbiAgICAgICAgICAgIHZhciBsYXRlc3QgPSB0aGlzLnNuYXBzaG90LmxhdGVzdE1vdGlvblZhbHVlcztcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLmhhc1ZhbHVlKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWRkVmFsdWUoa2V5LCBtb3Rpb25WYWx1ZShsYXRlc3Rba2V5XSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2hpbGQuZ2V0VmFsdWUoa2V5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldChsYXRlc3Rba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgIH07XG4gICAgTGF5b3V0U3RhY2sucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm9yZGVyLmZpbmRJbmRleChmdW5jdGlvbiAoc3RhY2tDaGlsZCkgeyByZXR1cm4gY2hpbGQgPT09IHN0YWNrQ2hpbGQ7IH0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgdGhpcy5vcmRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgTGF5b3V0U3RhY2sucHJvdG90eXBlLnVwZGF0ZUxlYWRBbmRGb2xsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldkxlYWQgPSB0aGlzLmxlYWQ7XG4gICAgICAgIHRoaXMucHJldkZvbGxvdyA9IHRoaXMuZm9sbG93O1xuICAgICAgICB2YXIgX2EgPSBfX3JlYWQoZmluZExlYWRBbmRGb2xsb3codGhpcy5vcmRlciwgW1xuICAgICAgICAgICAgdGhpcy5sZWFkLFxuICAgICAgICAgICAgdGhpcy5mb2xsb3csXG4gICAgICAgIF0pLCAyKSwgbGVhZCA9IF9hWzBdLCBmb2xsb3cgPSBfYVsxXTtcbiAgICAgICAgdGhpcy5sZWFkID0gbGVhZDtcbiAgICAgICAgdGhpcy5mb2xsb3cgPSBmb2xsb3c7XG4gICAgfTtcbiAgICBMYXlvdXRTdGFjay5wcm90b3R5cGUudXBkYXRlU25hcHNob3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sZWFkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgc25hcHNob3QgPSB7XG4gICAgICAgICAgICBib3VuZGluZ0JveDogdGhpcy5sZWFkLnByZXZWaWV3cG9ydEJveCxcbiAgICAgICAgICAgIGxhdGVzdE1vdGlvblZhbHVlczoge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGVhZC5mb3JFYWNoVmFsdWUoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBsYXRlc3QgPSB2YWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmICghaXNUcmFuc2Zvcm1Qcm9wKGxhdGVzdCkpIHtcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5sYXRlc3RNb3Rpb25WYWx1ZXNba2V5XSA9IGxhdGVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkcmFnQ29udHJvbHMgPSBlbGVtZW50RHJhZ0NvbnRyb2xzLmdldCh0aGlzLmxlYWQpO1xuICAgICAgICBpZiAoZHJhZ0NvbnRyb2xzICYmIGRyYWdDb250cm9scy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICBzbmFwc2hvdC5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHNuYXBzaG90LmN1cnNvclByb2dyZXNzID0gZHJhZ0NvbnRyb2xzLmN1cnNvclByb2dyZXNzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc25hcHNob3QgPSBzbmFwc2hvdDtcbiAgICB9O1xuICAgIExheW91dFN0YWNrLnByb3RvdHlwZS5pc0xlYWRQcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiB0aGlzLmxlYWQgJiYgKChfYSA9IHRoaXMubGVhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByZXNlbmNlKSAhPT0gUHJlc2VuY2UuRXhpdGluZztcbiAgICB9O1xuICAgIExheW91dFN0YWNrLnByb3RvdHlwZS5nZXRGb2xsb3dPcmlnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9sbG93XG4gICAgICAgICAgICA/IHRoaXMuZm9sbG93LnByZXZWaWV3cG9ydEJveFxuICAgICAgICAgICAgOiAoX2EgPSB0aGlzLnNuYXBzaG90KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYm91bmRpbmdCb3g7XG4gICAgfTtcbiAgICBMYXlvdXRTdGFjay5wcm90b3R5cGUuZ2V0Rm9sbG93VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLmZvbGxvdykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJveDtcbiAgICB9O1xuICAgIExheW91dFN0YWNrLnByb3RvdHlwZS5nZXRMZWFkT3JpZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLmxlYWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcmV2Vmlld3BvcnRCb3g7XG4gICAgfTtcbiAgICBMYXlvdXRTdGFjay5wcm90b3R5cGUuZ2V0TGVhZFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5sZWFkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYm94O1xuICAgIH07XG4gICAgTGF5b3V0U3RhY2sucHJvdG90eXBlLmdldExlYWRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLmxlYWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb25maWcudHJhbnNpdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBMYXlvdXRTdGFjaztcbn0oKSk7XG5cbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgQW5pbWF0ZVNoYXJlZExheW91dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0ZVNoYXJlZExheW91dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbmltYXRlU2hhcmVkTGF5b3V0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgbGlzdCBvZiBhbGwgdGhlIGNoaWxkcmVuIGluIHRoZSBzaGFyZWQgbGF5b3V0XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzIGFuaW1hdGUgY29tcG9uZW50cyB3aXRoIGEgZGVmaW5lZCBgbGF5b3V0SWRgIGFyZSBhZGRlZC9yZW1vdmVkIHRvIHRoZSB0cmVlLFxuICAgICAgICAgKiB3ZSBzdG9yZSB0aGVtIGluIG9yZGVyLiBXaGVuIG9uZSBpcyBhZGRlZCwgaXQgd2lsbCBhbmltYXRlIG91dCBmcm9tIHRoZVxuICAgICAgICAgKiBwcmV2aW91cyBvbmUsIGFuZCB3aGVuIGl0J3MgcmVtb3ZlZCwgaXQnbGwgYW5pbWF0ZSB0byB0aGUgcHJldmlvdXMgb25lLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuc3RhY2tzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhY2sgd2hldGhlciB0aGUgY29tcG9uZW50IGhhcyBtb3VudGVkLiBJZiBpdCBoYXNuJ3QsIHRoZSBwcmVzZW5jZSBvZiBhZGRlZCBjaGlsZHJlblxuICAgICAgICAgKiBhcmUgc2V0IHRvIFByZXNlbnQsIHdoZXJlYXMgaWYgaXQgaGFzIHRoZXkncmUgY29uc2lkZXJlZCBFbnRlcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaGFzTW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgYW4gdXBkYXRlIHNjaGVkdWxlZC4gSWYgd2UgZG9uJ3QsIHdlJ2xsIHJ1biBzbmFwc2hvdHNcbiAgICAgICAgICogYW5kIHNjaGVkdWxlIG9uZS5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhY2tzIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIGEgcmVuZGVyIHNjaGVkdWxlZC4gSWYgd2UgZG9uJ3QsIHdlJ2xsIGZvcmNlIG9uZSB3aXRoIHRoaXMuZm9yY2VSZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnJlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1ldGhvZHMgcHJvdmlkZWQgdG8gYWxsIGNoaWxkcmVuIGluIHRoZSBzaGFyZWQgbGF5b3V0IHRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5zeW5jQ29udGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjcmVhdGVCYXRjaGVyKCkpLCB7IHN5bmNVcGRhdGU6IGZ1bmN0aW9uIChmb3JjZSkgeyByZXR1cm4gX3RoaXMuc2NoZWR1bGVVcGRhdGUoZm9yY2UpOyB9LCBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIEJ5IGNvcHlpbmcgc3luY0NvbnRleHQgdG8gaXRzZWxmLCB3aGVuIHRoaXMgY29tcG9uZW50IHJlLXJlbmRlcnMgaXQnbGwgYWxzbyByZS1yZW5kZXJcbiAgICAgICAgICAgICAgICAvLyBhbGwgY2hpbGRyZW4gc3Vic2NyaWJlZCB0byB0aGUgU2hhcmVkTGF5b3V0IGNvbnRleHQuXG4gICAgICAgICAgICAgICAgX3RoaXMuc3luY0NvbnRleHQgPSBfX2Fzc2lnbih7fSwgX3RoaXMuc3luY0NvbnRleHQpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNjaGVkdWxlVXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVnaXN0ZXI6IGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gX3RoaXMuYWRkQ2hpbGQoY2hpbGQpOyB9LCByZW1vdmU6IGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gX3RoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpOyB9IH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YWNrcygpO1xuICAgIH07XG4gICAgQW5pbWF0ZVNoYXJlZExheW91dC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXJ0TGF5b3V0QW5pbWF0aW9uKCk7XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5zdGFydExheW91dEFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc2V0IHVwZGF0ZSBhbmQgcmVuZGVyIHNjaGVkdWxlZCBzdGF0dXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyU2NoZWR1bGVkID0gdGhpcy51cGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLnByb3BzLnR5cGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgcHJlc2VuY2UgbWV0YWRhdGEgYmFzZWQgb24gdGhlIGxhdGVzdCBBbmltYXRlUHJlc2VuY2Ugc3RhdHVzLlxuICAgICAgICAgKiBUaGlzIGlzIGEga2luZCBvZiBnb29meSB3YXkgb2YgZGVhbGluZyB3aXRoIHRoaXMsIHBlcmhhcHMgdGhlcmUncyBhIGJldHRlciBtb2RlbCB0byBmaW5kLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pc1ByZXNlbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcmVzZW5jZSA9IFByZXNlbmNlLkV4aXRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5wcmVzZW5jZSAhPT0gUHJlc2VuY2UuRW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcmVzZW5jZSA9XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXNlbmNlID09PSBQcmVzZW5jZS5FeGl0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFByZXNlbmNlLkVudGVyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFByZXNlbmNlLlByZXNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW4gZXZlcnkgbGF5b3V0SWQgc3RhY2ssIG5vbWluYXRlIGEgY29tcG9uZW50IHRvIGxlYWQgdGhlIGFuaW1hdGlvbiBhbmQgYW5vdGhlclxuICAgICAgICAgKiB0byBmb2xsb3dcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXBkYXRlU3RhY2tzKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNpZGUgd2hpY2ggYW5pbWF0aW9uIHRvIHVzZSBiZXR3ZWVuIHNoYXJlZCBsYXlvdXRJZCBjb21wb25lbnRzXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgY3JlYXRlQW5pbWF0aW9uID0gdHlwZSA9PT0gXCJjcm9zc2ZhZGVcIlxuICAgICAgICAgICAgPyBjcmVhdGVDcm9zc2ZhZGVBbmltYXRpb25cbiAgICAgICAgICAgIDogY3JlYXRlU3dpdGNoQW5pbWF0aW9uO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgaGFuZGxlciB3aGljaCB3ZSBjYW4gdXNlIHRvIGZsdXNoIHRoZSBjaGlsZHJlbiBhbmltYXRpb25zXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaGFuZGxlciA9IHtcbiAgICAgICAgICAgIG1lYXN1cmVMYXlvdXQ6IGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQubWVhc3VyZUxheW91dCgpOyB9LFxuICAgICAgICAgICAgbGF5b3V0UmVhZHk6IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHZhciBsYXlvdXRJZCA9IGNoaWxkLmxheW91dElkO1xuICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFJlYWR5KGNyZWF0ZUFuaW1hdGlvbihjaGlsZCwgX3RoaXMuZ2V0U3RhY2sobGF5b3V0SWQpKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hhcmVkIGxheW91dCBhbmltYXRpb25zIGNhbiBiZSB1c2VkIHdpdGhvdXQgdGhlIEFuaW1hdGVTaGFyZWRMYXlvdXQgd3JhcHBpbmcgY29tcG9uZW50LlxuICAgICAgICAgKiBUaGlzIHJlcXVpcmVzIHNvbWUgY28tb3JkaW5hdGlvbiBhY3Jvc3MgY29tcG9uZW50cyB0byBzdG9wIGxheW91dCB0aHJhc2hpbmdcbiAgICAgICAgICogYW5kIGVuc3VyZSBtZWFzdXJlbWVudHMgYXJlIHRha2VuIGF0IHRoZSBjb3JyZWN0IHRpbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEhlcmUgd2UgdXNlIHRoYXQgc2FtZSBtZWNoYW5pc20gb2Ygc2NoZWR1bGUvZmx1c2guXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBfdGhpcy5zeW5jQ29udGV4dC5hZGQoY2hpbGQpOyB9KTtcbiAgICAgICAgdGhpcy5zeW5jQ29udGV4dC5mbHVzaChoYW5kbGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFyIHNuYXBzaG90cyBzbyBzdWJzZXF1ZW50IHJlcmVuZGVycyBkb24ndCByZXRhaW4gbWVtb3J5IG9mIG91dGdvaW5nIGNvbXBvbmVudHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhY2tzLmZvckVhY2goZnVuY3Rpb24gKHN0YWNrKSB7IHJldHVybiAoc3RhY2suc25hcHNob3QgPSB1bmRlZmluZWQpOyB9KTtcbiAgICB9O1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLnVwZGF0ZVN0YWNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGFja3MuZm9yRWFjaChmdW5jdGlvbiAoc3RhY2spIHsgcmV0dXJuIHN0YWNrLnVwZGF0ZUxlYWRBbmRGb2xsb3coKTsgfSk7XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uIChmb3JjZSkge1xuICAgICAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkgeyBmb3JjZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmICghKGZvcmNlIHx8ICF0aGlzLnVwZGF0ZVNjaGVkdWxlZCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIHdlJ3ZlIHNjaGVkdWxlZCBhbiB1cGRhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXBkYXRlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQ6IFNuYXBzaG90IGNoaWxkcmVuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5zbmFwc2hvdEJvdW5kaW5nQm94KCk7IH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXZlcnkgY2hpbGQga2VlcHMgYSBsb2NhbCBzbmFwc2hvdCwgYnV0IHdlIGFsc28gd2FudCB0byByZWNvcmRcbiAgICAgICAgICogc25hcHNob3RzIG9mIHRoZSB2aXNpYmxlIGNoaWxkcmVuIGFzLCBpZiB0aGV5J3JlIGFyZSBiZWluZyByZW1vdmVkXG4gICAgICAgICAqIGluIHRoaXMgcmVuZGVyLCB3ZSBjYW4gc3RpbGwgYWNjZXNzIHRoZW0uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFjaykgeyByZXR1cm4gc3RhY2sudXBkYXRlU25hcHNob3QoKTsgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhIHJlcmVuZGVyIGJ5IHNldHRpbmcgc3RhdGUgaWYgd2UgYXJlbid0IGFscmVhZHkgZ29pbmcgdG8gcmVuZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGZvcmNlIHx8ICF0aGlzLnJlbmRlclNjaGVkdWxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmFkZChjaGlsZCk7XG4gICAgICAgIHRoaXMuYWRkVG9TdGFjayhjaGlsZCk7XG4gICAgICAgIGNoaWxkLnByZXNlbmNlID0gdGhpcy5oYXNNb3VudGVkID8gUHJlc2VuY2UuRW50ZXJpbmcgOiBQcmVzZW5jZS5QcmVzZW50O1xuICAgIH07XG4gICAgQW5pbWF0ZVNoYXJlZExheW91dC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZShjaGlsZCk7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVN0YWNrKGNoaWxkKTtcbiAgICB9O1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLmFkZFRvU3RhY2sgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5nZXRTdGFjayhjaGlsZC5sYXlvdXRJZCk7XG4gICAgICAgIHN0YWNrID09PSBudWxsIHx8IHN0YWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFjay5hZGQoY2hpbGQpO1xuICAgIH07XG4gICAgQW5pbWF0ZVNoYXJlZExheW91dC5wcm90b3R5cGUucmVtb3ZlRnJvbVN0YWNrID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMuZ2V0U3RhY2soY2hpbGQubGF5b3V0SWQpO1xuICAgICAgICBzdGFjayA9PT0gbnVsbCB8fCBzdGFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhY2sucmVtb3ZlKGNoaWxkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhIHN0YWNrIG9mIGFuaW1hdGUgY2hpbGRyZW4gYmFzZWQgb24gdGhlIHByb3ZpZGVkIGxheW91dElkLlxuICAgICAqIFdpbGwgY3JlYXRlIGEgc3RhY2sgaWYgbm9uZSBjdXJyZW50bHkgZXhpc3RzIHdpdGggdGhhdCBsYXlvdXRJZC5cbiAgICAgKi9cbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5nZXRTdGFjayA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gQ3JlYXRlIHN0YWNrIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgICAgICAhdGhpcy5zdGFja3MuaGFzKGlkKSAmJiB0aGlzLnN0YWNrcy5zZXQoaWQsIG5ldyBMYXlvdXRTdGFjaygpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tzLmdldChpZCk7XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChTaGFyZWRMYXlvdXRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB0aGlzLnN5bmNDb250ZXh0IH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRlU2hhcmVkTGF5b3V0O1xufShDb21wb25lbnQkMSkpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgTW90aW9uVmFsdWVgIHRvIHRyYWNrIHRoZSBzdGF0ZSBhbmQgdmVsb2NpdHkgb2YgYSB2YWx1ZS5cbiAqXG4gKiBVc3VhbGx5LCB0aGVzZSBhcmUgY3JlYXRlZCBhdXRvbWF0aWNhbGx5LiBGb3IgYWR2YW5jZWQgdXNlLWNhc2VzLCBsaWtlIHVzZSB3aXRoIGB1c2VUcmFuc2Zvcm1gLCB5b3UgY2FuIGNyZWF0ZSBgTW90aW9uVmFsdWVgcyBleHRlcm5hbGx5IGFuZCBwYXNzIHRoZW0gaW50byB0aGUgYW5pbWF0ZWQgY29tcG9uZW50IHZpYSB0aGUgYHN0eWxlYCBwcm9wLlxuICpcbiAqIEBsaWJyYXJ5XG4gKlxuICogYGBganN4XG4gKiBleHBvcnQgZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7XG4gKiAgIGNvbnN0IHNjYWxlID0gdXNlTW90aW9uVmFsdWUoMSlcbiAqXG4gKiAgIHJldHVybiA8RnJhbWUgc2NhbGU9e3NjYWxlfSAvPlxuICogfVxuICogYGBgXG4gKlxuICogQG1vdGlvblxuICpcbiAqIGBgYGpzeFxuICogZXhwb3J0IGNvbnN0IE15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBzY2FsZSA9IHVzZU1vdGlvblZhbHVlKDEpXG4gKlxuICogICByZXR1cm4gPG1vdGlvbi5kaXYgc3R5bGU9e3sgc2NhbGUgfX0gLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBpbml0aWFsIC0gVGhlIGluaXRpYWwgc3RhdGUuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VNb3Rpb25WYWx1ZShpbml0aWFsKSB7XG4gICAgcmV0dXJuIHVzZUNvbnN0YW50KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdGlvblZhbHVlKGluaXRpYWwpOyB9KTtcbn1cblxuZnVuY3Rpb24gdXNlT25DaGFuZ2UodmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGlzTW90aW9uVmFsdWUodmFsdWUpID8gdmFsdWUub25DaGFuZ2UoY2FsbGJhY2spIDogdW5kZWZpbmVkO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdXNlTXVsdGlPbkNoYW5nZSh2YWx1ZXMsIGhhbmRsZXIpIHtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZS5vbkNoYW5nZShoYW5kbGVyKTsgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHVuc3Vic2NyaWJlKSB7IHJldHVybiB1bnN1YnNjcmliZSgpOyB9KTsgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlQ29tYmluZU1vdGlvblZhbHVlcyh2YWx1ZXMsIGNvbWJpbmVWYWx1ZXMpIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSByZXR1cm5lZCBtb3Rpb24gdmFsdWUuIFRoaXMgcmVtYWlucyB0aGUgc2FtZSBiZXR3ZWVuIHJlbmRlcnMuXG4gICAgICovXG4gICAgdmFyIHZhbHVlID0gdXNlTW90aW9uVmFsdWUoY29tYmluZVZhbHVlcygpKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBmdW5jdGlvbiB0aGF0IHdpbGwgdXBkYXRlIHRoZSB0ZW1wbGF0ZSBtb3Rpb24gdmFsdWUgd2l0aCB0aGUgbGF0ZXN0IHZhbHVlcy5cbiAgICAgKiBUaGlzIGlzIHByZS1ib3VuZCBzbyB3aGVuZXZlciBhIG1vdGlvbiB2YWx1ZSB1cGRhdGVzIGl0IGNhbiBzY2hlZHVsZSBpdHNcbiAgICAgKiBleGVjdXRpb24gaW4gRnJhbWVzeW5jLiBJZiBpdCdzIGFscmVhZHkgYmVlbiBzY2hlZHVsZWQgaXQgd29uJ3QgYmUgZmlyZWQgdHdpY2VcbiAgICAgKiBpbiBhIHNpbmdsZSBmcmFtZS5cbiAgICAgKi9cbiAgICB2YXIgdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB2YWx1ZS5zZXQoY29tYmluZVZhbHVlcygpKTsgfTtcbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbm91c2x5IHVwZGF0ZSB0aGUgbW90aW9uIHZhbHVlIHdpdGggdGhlIGxhdGVzdCB2YWx1ZXMgZHVyaW5nIHRoZSByZW5kZXIuXG4gICAgICogVGhpcyBlbnN1cmVzIHRoYXQgd2l0aGluIGEgUmVhY3QgcmVuZGVyLCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIERPTSBhcmUgdXAtdG8tZGF0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVWYWx1ZSgpO1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhbGwgbW90aW9uIHZhbHVlcyBmb3VuZCB3aXRoaW4gdGhlIHRlbXBsYXRlLiBXaGVuZXZlciBhbnkgb2YgdGhlbSBjaGFuZ2UsXG4gICAgICogc2NoZWR1bGUgYW4gdXBkYXRlLlxuICAgICAqL1xuICAgIHVzZU11bHRpT25DaGFuZ2UodmFsdWVzLCBmdW5jdGlvbiAoKSB7IHJldHVybiBzeW5jLnVwZGF0ZSh1cGRhdGVWYWx1ZSwgZmFsc2UsIHRydWUpOyB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQ29tYmluZSBtdWx0aXBsZSBtb3Rpb24gdmFsdWVzIGludG8gYSBuZXcgb25lIHVzaW5nIGEgc3RyaW5nIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQge1xuICogICBtb3Rpb24sXG4gKiAgIHVzZVNwcmluZyxcbiAqICAgdXNlTW90aW9uVmFsdWUsXG4gKiAgIHVzZU1vdGlvblRlbXBsYXRlXG4gKiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbiAqXG4gKiBmdW5jdGlvbiBDb21wb25lbnQoKSB7XG4gKiAgIGNvbnN0IHNoYWRvd1ggPSB1c2VTcHJpbmcoMClcbiAqICAgY29uc3Qgc2hhZG93WSA9IHVzZU1vdGlvblZhbHVlKDApXG4gKiAgIGNvbnN0IHNoYWRvdyA9IHVzZU1vdGlvblRlbXBsYXRlYGRyb3Atc2hhZG93KCR7c2hhZG93WH1weCAke3NoYWRvd1l9cHggMjBweCByZ2JhKDAsMCwwLDAuMykpYFxuICpcbiAqICAgcmV0dXJuIDxtb3Rpb24uZGl2IHN0eWxlPXt7IGZpbHRlcjogc2hhZG93IH19IC8+XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZU1vdGlvblRlbXBsYXRlKGZyYWdtZW50cykge1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YWx1ZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBidWlsZCBhIHN0cmluZyBmcm9tIHRoZSBsYXRlc3QgbW90aW9uIHZhbHVlcy5cbiAgICAgKi9cbiAgICB2YXIgbnVtRnJhZ21lbnRzID0gZnJhZ21lbnRzLmxlbmd0aDtcbiAgICBmdW5jdGlvbiBidWlsZFZhbHVlKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1GcmFnbWVudHM7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGZyYWdtZW50c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdmFsdWVzW2ldLmdldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIHJldHVybiB1c2VDb21iaW5lTW90aW9uVmFsdWVzKHZhbHVlcywgYnVpbGRWYWx1ZSk7XG59XG5cbi8qKlxuICogSWYgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGEgTW90aW9uVmFsdWUsIHRoaXMgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlLCBvdGhlcndpc2UganVzdCB0aGUgdmFsdWUgaXRzZWxmXG4gKlxuICogVE9ETzogUmVtb3ZlIGFuZCBtb3ZlIHRvIGxpYnJhcnlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZU1vdGlvblZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIHVud3JhcHBlZFZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBNb3Rpb25WYWx1ZSA/IHZhbHVlLmdldCgpIDogdmFsdWU7XG4gICAgcmV0dXJuIGlzQ3VzdG9tVmFsdWUodW53cmFwcGVkVmFsdWUpXG4gICAgICAgID8gdW53cmFwcGVkVmFsdWUudG9WYWx1ZSgpXG4gICAgICAgIDogdW53cmFwcGVkVmFsdWU7XG59XG5cbnZhciBpc0N1c3RvbVZhbHVlVHlwZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYubWl4O1xufTtcbnZhciBnZXRNaXhlciA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiAoaXNDdXN0b21WYWx1ZVR5cGUodikgPyB2Lm1peCA6IHVuZGVmaW5lZCk7IH07XG5mdW5jdGlvbiB0cmFuc2Zvcm0oKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciB1c2VJbW1lZGlhdGUgPSAhQXJyYXkuaXNBcnJheShhcmdzWzBdKTtcbiAgICB2YXIgYXJnT2Zmc2V0ID0gdXNlSW1tZWRpYXRlID8gMCA6IC0xO1xuICAgIHZhciBpbnB1dFZhbHVlID0gYXJnc1swICsgYXJnT2Zmc2V0XTtcbiAgICB2YXIgaW5wdXRSYW5nZSA9IGFyZ3NbMSArIGFyZ09mZnNldF07XG4gICAgdmFyIG91dHB1dFJhbmdlID0gYXJnc1syICsgYXJnT2Zmc2V0XTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3NbMyArIGFyZ09mZnNldF07XG4gICAgdmFyIGludGVycG9sYXRvciA9IGludGVycG9sYXRlKGlucHV0UmFuZ2UsIG91dHB1dFJhbmdlLCBfX2Fzc2lnbih7IG1peGVyOiBnZXRNaXhlcihvdXRwdXRSYW5nZVswXSkgfSwgb3B0aW9ucykpO1xuICAgIHJldHVybiB1c2VJbW1lZGlhdGUgPyBpbnRlcnBvbGF0b3IoaW5wdXRWYWx1ZSkgOiBpbnRlcnBvbGF0b3I7XG59XG5cbmZ1bmN0aW9uIHVzZVRyYW5zZm9ybShpbnB1dCwgaW5wdXRSYW5nZU9yVHJhbnNmb3JtZXIsIG91dHB1dFJhbmdlLCBvcHRpb25zKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVyID0gdHlwZW9mIGlucHV0UmFuZ2VPclRyYW5zZm9ybWVyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lclxuICAgICAgICA6IHRyYW5zZm9ybShpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lciwgb3V0cHV0UmFuZ2UsIG9wdGlvbnMpO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KVxuICAgICAgICA/IHVzZUxpc3RUcmFuc2Zvcm0oaW5wdXQsIHRyYW5zZm9ybWVyKVxuICAgICAgICA6IHVzZUxpc3RUcmFuc2Zvcm0oW2lucHV0XSwgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDEpLCBsYXRlc3QgPSBfYlswXTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1lcihsYXRlc3QpO1xuICAgICAgICB9KTtcbn1cbmZ1bmN0aW9uIHVzZUxpc3RUcmFuc2Zvcm0odmFsdWVzLCB0cmFuc2Zvcm1lcikge1xuICAgIHZhciBsYXRlc3QgPSB1c2VDb25zdGFudChmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSk7XG4gICAgcmV0dXJuIHVzZUNvbWJpbmVNb3Rpb25WYWx1ZXModmFsdWVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxhdGVzdC5sZW5ndGggPSAwO1xuICAgICAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgbGF0ZXN0W2ldID0gdmFsdWVzW2ldLmdldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1lcihsYXRlc3QpO1xuICAgIH0pO1xufVxuXG4vLyBLZWVwIHRoaW5ncyByZWFzb25hYmxlIGFuZCBhdm9pZCBzY2FsZTogSW5maW5pdHkuIEluIHByYWN0aXNlIHdlIG1pZ2h0IG5lZWRcbi8vIHRvIGFkZCBhbm90aGVyIHZhbHVlLCBvcGFjaXR5LCB0aGF0IGNvdWxkIGludGVycG9sYXRlIHNjYWxlWC9ZIFswLDAuMDFdID0+IFswLDFdXG4vLyB0byBzaW1wbHkgaGlkZSBjb250ZW50IGF0IHVucmVhc29uYWJsZSBzY2FsZXMuXG52YXIgbWF4U2NhbGUgPSAxMDAwMDA7XG52YXIgaW52ZXJ0U2NhbGUgPSBmdW5jdGlvbiAoc2NhbGUpIHtcbiAgICByZXR1cm4gc2NhbGUgPiAwLjAwMSA/IDEgLyBzY2FsZSA6IG1heFNjYWxlO1xufTtcbi8qKlxuICogUmV0dXJucyBhIGBNb3Rpb25WYWx1ZWAgZWFjaCBmb3IgYHNjYWxlWGAgYW5kIGBzY2FsZVlgIHRoYXQgdXBkYXRlIHdpdGggdGhlIGludmVyc2VcbiAqIG9mIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IHNjYWxlcy5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgdW5kb2luZyB0aGUgZGlzdG9ydGlvbiBvZiBjb250ZW50IHdoZW4gc2NhbGluZyBhIHBhcmVudCBjb21wb25lbnQuXG4gKlxuICogQnkgZGVmYXVsdCwgYHVzZUludmVydGVkU2NhbGVgIHdpbGwgYXV0b21hdGljYWxseSBmZXRjaCBgc2NhbGVYYCBhbmQgYHNjYWxlWWAgZnJvbSB0aGUgbmVhcmVzdCBwYXJlbnQuXG4gKiBCeSBwYXNzaW5nIG90aGVyIGBNb3Rpb25WYWx1ZWBzIGluIGFzIGB1c2VJbnZlcnRlZFNjYWxlKHsgc2NhbGVYLCBzY2FsZVkgfSlgLCBpdCB3aWxsIGludmVydCB0aGUgb3V0cHV0XG4gKiBvZiB0aG9zZSBpbnN0ZWFkLlxuICpcbiAqIEBtb3Rpb25cbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IE15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCB7IHNjYWxlWCwgc2NhbGVZIH0gPSB1c2VJbnZlcnRlZFNjYWxlKClcbiAqICAgcmV0dXJuIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHNjYWxlWCwgc2NhbGVZIH19IC8+XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbGlicmFyeVxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7XG4gKiAgIGNvbnN0IHsgc2NhbGVYLCBzY2FsZVkgfSA9IHVzZUludmVydGVkU2NhbGUoKVxuICogICByZXR1cm4gPEZyYW1lIHNjYWxlWD17c2NhbGVYfSBzY2FsZVk9e3NjYWxlWX0gLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBkZXByZWNhdGVkXG4gKi9cbnZhciBoYXNXYXJuZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHVzZUludmVydGVkU2NhbGUoc2NhbGUpIHtcbiAgICB2YXIgcGFyZW50U2NhbGVYID0gdXNlTW90aW9uVmFsdWUoMSk7XG4gICAgdmFyIHBhcmVudFNjYWxlWSA9IHVzZU1vdGlvblZhbHVlKDEpO1xuICAgIHZhciB2aXN1YWxFbGVtZW50ID0gdXNlQ29udGV4dChNb3Rpb25Db250ZXh0KS52aXN1YWxFbGVtZW50O1xuICAgIGludmFyaWFudCghIShzY2FsZSB8fCB2aXN1YWxFbGVtZW50KSwgXCJJZiBubyBzY2FsZSB2YWx1ZXMgYXJlIHByb3ZpZGVkLCB1c2VJbnZlcnRlZFNjYWxlIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBjaGlsZCBvZiBhbm90aGVyIG1vdGlvbiBjb21wb25lbnQuXCIpO1xuICAgIHdhcm5pbmcoaGFzV2FybmVkLCBcInVzZUludmVydGVkU2NhbGUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDMuMC4gVXNlIHRoZSBsYXlvdXQgcHJvcCBpbnN0ZWFkLlwiKTtcbiAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgIGlmIChzY2FsZSkge1xuICAgICAgICBwYXJlbnRTY2FsZVggPSBzY2FsZS5zY2FsZVggfHwgcGFyZW50U2NhbGVYO1xuICAgICAgICBwYXJlbnRTY2FsZVkgPSBzY2FsZS5zY2FsZVkgfHwgcGFyZW50U2NhbGVZO1xuICAgIH1cbiAgICBlbHNlIGlmICh2aXN1YWxFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudFNjYWxlWCA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoXCJzY2FsZVhcIiwgMSk7XG4gICAgICAgIHBhcmVudFNjYWxlWSA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoXCJzY2FsZVlcIiwgMSk7XG4gICAgfVxuICAgIHZhciBzY2FsZVggPSB1c2VUcmFuc2Zvcm0ocGFyZW50U2NhbGVYLCBpbnZlcnRTY2FsZSk7XG4gICAgdmFyIHNjYWxlWSA9IHVzZVRyYW5zZm9ybShwYXJlbnRTY2FsZVksIGludmVydFNjYWxlKTtcbiAgICByZXR1cm4geyBzY2FsZVg6IHNjYWxlWCwgc2NhbGVZOiBzY2FsZVkgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYE1vdGlvblZhbHVlYCB0aGF0LCB3aGVuIGBzZXRgLCB3aWxsIHVzZSBhIHNwcmluZyBhbmltYXRpb24gdG8gYW5pbWF0ZSB0byBpdHMgbmV3IHN0YXRlLlxuICpcbiAqIEl0IGNhbiBlaXRoZXIgd29yayBhcyBhIHN0YW5kLWFsb25lIGBNb3Rpb25WYWx1ZWAgYnkgaW5pdGlhbGlzaW5nIGl0IHdpdGggYSB2YWx1ZSwgb3IgYXMgYSBzdWJzY3JpYmVyXG4gKiB0byBhbm90aGVyIGBNb3Rpb25WYWx1ZWAuXG4gKlxuICogQHJlbWFya3NcbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IHggPSB1c2VTcHJpbmcoMCwgeyBzdGlmZm5lc3M6IDMwMCB9KVxuICogY29uc3QgeSA9IHVzZVNwcmluZyh4LCB7IGRhbXBpbmc6IDEwIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gaW5wdXRWYWx1ZSAtIGBNb3Rpb25WYWx1ZWAgb3IgbnVtYmVyLiBJZiBwcm92aWRlZCBhIGBNb3Rpb25WYWx1ZWAsIHdoZW4gdGhlIGlucHV0IGBNb3Rpb25WYWx1ZWAgY2hhbmdlcywgdGhlIGNyZWF0ZWQgYE1vdGlvblZhbHVlYCB3aWxsIHNwcmluZyB0b3dhcmRzIHRoYXQgdmFsdWUuXG4gKiBAcGFyYW0gc3ByaW5nQ29uZmlnIC0gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgc3ByaW5nLlxuICogQHJldHVybnMgYE1vdGlvblZhbHVlYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlU3ByaW5nKHNvdXJjZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgdmFyIGFjdGl2ZVNwcmluZ0FuaW1hdGlvbiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgdmFsdWUgPSB1c2VNb3Rpb25WYWx1ZShpc01vdGlvblZhbHVlKHNvdXJjZSkgPyBzb3VyY2UuZ2V0KCkgOiBzb3VyY2UpO1xuICAgIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuYXR0YWNoKGZ1bmN0aW9uICh2LCBzZXQpIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVTcHJpbmdBbmltYXRpb24uY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNwcmluZ0FuaW1hdGlvbi5jdXJyZW50LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZVNwcmluZ0FuaW1hdGlvbi5jdXJyZW50ID0gYW5pbWF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7IGZyb206IHZhbHVlLmdldCgpLCB0bzogdiwgdmVsb2NpdHk6IHZhbHVlLmdldFZlbG9jaXR5KCkgfSwgY29uZmlnKSwgeyBvblVwZGF0ZTogc2V0IH0pKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5nZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgT2JqZWN0LnZhbHVlcyhjb25maWcpKTtcbiAgICB1c2VPbkNoYW5nZShzb3VyY2UsIGZ1bmN0aW9uICh2KSB7IHJldHVybiB2YWx1ZS5zZXQocGFyc2VGbG9hdCh2KSk7IH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2Nyb2xsTW90aW9uVmFsdWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjcm9sbFg6IG1vdGlvblZhbHVlKDApLFxuICAgICAgICBzY3JvbGxZOiBtb3Rpb25WYWx1ZSgwKSxcbiAgICAgICAgc2Nyb2xsWFByb2dyZXNzOiBtb3Rpb25WYWx1ZSgwKSxcbiAgICAgICAgc2Nyb2xsWVByb2dyZXNzOiBtb3Rpb25WYWx1ZSgwKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gc2V0UHJvZ3Jlc3Mob2Zmc2V0LCBtYXhPZmZzZXQsIHZhbHVlKSB7XG4gICAgdmFsdWUuc2V0KCFvZmZzZXQgfHwgIW1heE9mZnNldCA/IDAgOiBvZmZzZXQgLyBtYXhPZmZzZXQpO1xufVxuZnVuY3Rpb24gY3JlYXRlU2Nyb2xsVXBkYXRlcih2YWx1ZXMsIGdldE9mZnNldHMpIHtcbiAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBnZXRPZmZzZXRzKCksIHhPZmZzZXQgPSBfYS54T2Zmc2V0LCB5T2Zmc2V0ID0gX2EueU9mZnNldCwgeE1heE9mZnNldCA9IF9hLnhNYXhPZmZzZXQsIHlNYXhPZmZzZXQgPSBfYS55TWF4T2Zmc2V0O1xuICAgICAgICAvLyBTZXQgYWJzb2x1dGUgcG9zaXRpb25zXG4gICAgICAgIHZhbHVlcy5zY3JvbGxYLnNldCh4T2Zmc2V0KTtcbiAgICAgICAgdmFsdWVzLnNjcm9sbFkuc2V0KHlPZmZzZXQpO1xuICAgICAgICAvLyBTZXQgMC0xIHByb2dyZXNzXG4gICAgICAgIHNldFByb2dyZXNzKHhPZmZzZXQsIHhNYXhPZmZzZXQsIHZhbHVlcy5zY3JvbGxYUHJvZ3Jlc3MpO1xuICAgICAgICBzZXRQcm9ncmVzcyh5T2Zmc2V0LCB5TWF4T2Zmc2V0LCB2YWx1ZXMuc2Nyb2xsWVByb2dyZXNzKTtcbiAgICB9O1xuICAgIHVwZGF0ZSgpO1xuICAgIHJldHVybiB1cGRhdGU7XG59XG5cbnZhciBnZXRFbGVtZW50U2Nyb2xsT2Zmc2V0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeE9mZnNldDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICB5T2Zmc2V0OiBlbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgeE1heE9mZnNldDogZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgIHlNYXhPZmZzZXQ6IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgfTtcbn07IH07XG4vKipcbiAqIFJldHVybnMgTW90aW9uVmFsdWVzIHRoYXQgdXBkYXRlIHdoZW4gdGhlIHByb3ZpZGVkIGVsZW1lbnQgc2Nyb2xsczpcbiAqXG4gKiAtIGBzY3JvbGxYYCDigJQgSG9yaXpvbnRhbCBzY3JvbGwgZGlzdGFuY2UgaW4gcGl4ZWxzLlxuICogLSBgc2Nyb2xsWWAg4oCUIFZlcnRpY2FsIHNjcm9sbCBkaXN0YW5jZSBpbiBwaXhlbHMuXG4gKiAtIGBzY3JvbGxYUHJvZ3Jlc3NgIOKAlCBIb3Jpem9udGFsIHNjcm9sbCBwcm9ncmVzcyBiZXR3ZWVuIGAwYCBhbmQgYDFgLlxuICogLSBgc2Nyb2xsWVByb2dyZXNzYCDigJQgVmVydGljYWwgc2Nyb2xsIHByb2dyZXNzIGJldHdlZW4gYDBgIGFuZCBgMWAuXG4gKlxuICogVGhpcyBlbGVtZW50IG11c3QgYmUgc2V0IHRvIGBvdmVyZmxvdzogc2Nyb2xsYCBvbiBlaXRoZXIgb3IgYm90aCBheGVzIHRvIHJlcG9ydCBzY3JvbGwgb2Zmc2V0LlxuICpcbiAqIEBsaWJyYXJ5XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuICogaW1wb3J0IHtcbiAqICAgRnJhbWUsXG4gKiAgIHVzZUVsZW1lbnRTY3JvbGwsXG4gKiAgIHVzZVRyYW5zZm9ybVxuICogfSBmcm9tIFwiZnJhbWVyXCJcbiAqXG4gKiBleHBvcnQgZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7XG4gKiAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZigpXG4gKiAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VFbGVtZW50U2Nyb2xsKHJlZilcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEZyYW1lIHJlZj17cmVmfT5cbiAqICAgICAgIDxGcmFtZSBzY2FsZVg9e3Njcm9sbFlQcm9ncmVzc30gLz5cbiAqICAgICA8L0ZyYW1lPlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbW90aW9uXG4gKlxuICogYGBganN4XG4gKiBleHBvcnQgY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gKiAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VFbGVtZW50U2Nyb2xsKHJlZilcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdiByZWY9e3JlZn0+XG4gKiAgICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBzY2FsZVg6IHNjcm9sbFlQcm9ncmVzcyB9fSAvPlxuICogICAgIDwvZGl2PlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZUVsZW1lbnRTY3JvbGwocmVmKSB7XG4gICAgdmFyIHZhbHVlcyA9IHVzZUNvbnN0YW50KGNyZWF0ZVNjcm9sbE1vdGlvblZhbHVlcyk7XG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGludmFyaWFudCghIWVsZW1lbnQsIFwicmVmIHByb3ZpZGVkIHRvIHVzZVNjcm9sbCBtdXN0IGJlIHBhc3NlZCBpbnRvIGEgSFRNTCBlbGVtZW50LlwiKTtcbiAgICAgICAgaWYgKCFlbGVtZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdXBkYXRlU2Nyb2xsVmFsdWVzID0gY3JlYXRlU2Nyb2xsVXBkYXRlcih2YWx1ZXMsIGdldEVsZW1lbnRTY3JvbGxPZmZzZXRzKGVsZW1lbnQpKTtcbiAgICAgICAgdmFyIHNjcm9sbExpc3RlbmVyID0gYWRkRG9tRXZlbnQoZWxlbWVudCwgXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsVmFsdWVzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIHZhciByZXNpemVMaXN0ZW5lciA9IGFkZERvbUV2ZW50KGVsZW1lbnQsIFwicmVzaXplXCIsIHVwZGF0ZVNjcm9sbFZhbHVlcyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JvbGxMaXN0ZW5lciAmJiBzY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgcmVzaXplTGlzdGVuZXIgJiYgcmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxudmFyIHZpZXdwb3J0U2Nyb2xsVmFsdWVzID0gY3JlYXRlU2Nyb2xsTW90aW9uVmFsdWVzKCk7XG5mdW5jdGlvbiBnZXRWaWV3cG9ydFNjcm9sbE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeE9mZnNldDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB5T2Zmc2V0OiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHhNYXhPZmZzZXQ6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgeU1heE9mZnNldDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgfTtcbn1cbnZhciBoYXNMaXN0ZW5lcnMgPSBmYWxzZTtcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGhhc0xpc3RlbmVycyA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgdXBkYXRlU2Nyb2xsVmFsdWVzID0gY3JlYXRlU2Nyb2xsVXBkYXRlcih2aWV3cG9ydFNjcm9sbFZhbHVlcywgZ2V0Vmlld3BvcnRTY3JvbGxPZmZzZXRzKTtcbiAgICBhZGREb21FdmVudCh3aW5kb3csIFwic2Nyb2xsXCIsIHVwZGF0ZVNjcm9sbFZhbHVlcywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIGFkZERvbUV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgdXBkYXRlU2Nyb2xsVmFsdWVzKTtcbn1cbi8qKlxuICogUmV0dXJucyBNb3Rpb25WYWx1ZXMgdGhhdCB1cGRhdGUgd2hlbiB0aGUgdmlld3BvcnQgc2Nyb2xsczpcbiAqXG4gKiAtIGBzY3JvbGxYYCDigJQgSG9yaXpvbnRhbCBzY3JvbGwgZGlzdGFuY2UgaW4gcGl4ZWxzLlxuICogLSBgc2Nyb2xsWWAg4oCUIFZlcnRpY2FsIHNjcm9sbCBkaXN0YW5jZSBpbiBwaXhlbHMuXG4gKiAtIGBzY3JvbGxYUHJvZ3Jlc3NgIOKAlCBIb3Jpem9udGFsIHNjcm9sbCBwcm9ncmVzcyBiZXR3ZWVuIGAwYCBhbmQgYDFgLlxuICogLSBgc2Nyb2xsWVByb2dyZXNzYCDigJQgVmVydGljYWwgc2Nyb2xsIHByb2dyZXNzIGJldHdlZW4gYDBgIGFuZCBgMWAuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4gKiBpbXBvcnQge1xuICogICBGcmFtZSxcbiAqICAgdXNlVmlld3BvcnRTY3JvbGwsXG4gKiAgIHVzZVRyYW5zZm9ybVxuICogfSBmcm9tIFwiZnJhbWVyXCJcbiAqXG4gKiBleHBvcnQgZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7XG4gKiAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpXG4gKiAgIHJldHVybiA8RnJhbWUgc2NhbGVYPXtzY3JvbGxZUHJvZ3Jlc3N9IC8+XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbW90aW9uXG4gKlxuICogYGBganN4XG4gKiBleHBvcnQgY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpXG4gKiAgIHJldHVybiA8bW90aW9uLmRpdiBzdHlsZT17eyBzY2FsZVg6IHNjcm9sbFlQcm9ncmVzcyB9fSAvPlxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VWaWV3cG9ydFNjcm9sbCgpIHtcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIWhhc0xpc3RlbmVycyAmJiBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdmlld3BvcnRTY3JvbGxWYWx1ZXM7XG59XG5cbi8vIERvZXMgdGhpcyBkZXZpY2UgcHJlZmVyIHJlZHVjZWQgbW90aW9uPyBSZXR1cm5zIGBudWxsYCBzZXJ2ZXItc2lkZS5cbnZhciBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IG1vdGlvblZhbHVlKG51bGwpO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgdmFyIG1vdGlvbk1lZGlhUXVlcnlfMSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pXCIpO1xuICAgICAgICB2YXIgc2V0UmVkdWNlZE1vdGlvblByZWZlcmVuY2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZlcnNSZWR1Y2VkTW90aW9uLnNldChtb3Rpb25NZWRpYVF1ZXJ5XzEubWF0Y2hlcyk7XG4gICAgICAgIH07XG4gICAgICAgIG1vdGlvbk1lZGlhUXVlcnlfMS5hZGRMaXN0ZW5lcihzZXRSZWR1Y2VkTW90aW9uUHJlZmVyZW5jZXMpO1xuICAgICAgICBzZXRSZWR1Y2VkTW90aW9uUHJlZmVyZW5jZXMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZWZlcnNSZWR1Y2VkTW90aW9uLnNldChmYWxzZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0ZXJtaW5lU2hvdWxkUmVkdWNlTW90aW9uKHByZWZlcnNSZWR1Y2VkLCBpc1JlZHVjZWRNb3Rpb24pIHtcbiAgICByZXR1cm4gdHlwZW9mIGlzUmVkdWNlZE1vdGlvbiA9PT0gXCJib29sZWFuXCJcbiAgICAgICAgPyBpc1JlZHVjZWRNb3Rpb25cbiAgICAgICAgOiBCb29sZWFuKHByZWZlcnNSZWR1Y2VkKTtcbn1cbi8qKlxuICogQSBob29rIHRoYXQgcmV0dXJucyBgdHJ1ZWAgaWYgd2Ugc2hvdWxkIGJlIHVzaW5nIHJlZHVjZWQgbW90aW9uIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRldmljZSdzIFJlZHVjZWQgTW90aW9uIHNldHRpbmcuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgY2hhbmdlcyB0byB5b3VyIFVJIGJhc2VkIG9uIFJlZHVjZWQgTW90aW9uLiBGb3IgaW5zdGFuY2UsIHJlcGxhY2luZyBtb3Rpb24tc2lja25lc3MgaW5kdWNpbmdcbiAqIGB4YC9geWAgYW5pbWF0aW9ucyB3aXRoIGBvcGFjaXR5YCwgZGlzYWJsaW5nIHRoZSBhdXRvcGxheSBvZiBiYWNrZ3JvdW5kIHZpZGVvcywgb3IgdHVybmluZyBvZmYgcGFyYWxsYXggbW90aW9uLlxuICpcbiAqIEl0IHdpbGwgYWN0aXZlbHkgcmVzcG9uZCB0byBjaGFuZ2VzIGFuZCByZS1yZW5kZXIgeW91ciBjb21wb25lbnRzIHdpdGggdGhlIGxhdGVzdCBzZXR0aW5nLlxuICpcbiAqIGBgYGpzeFxuICogZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXIoeyBpc09wZW4gfSkge1xuICogICBjb25zdCBzaG91bGRSZWR1Y2VNb3Rpb24gPSB1c2VSZWR1Y2VkTW90aW9uKClcbiAqICAgY29uc3QgY2xvc2VkWCA9IHNob3VsZFJlZHVjZU1vdGlvbiA/IDAgOiBcIi0xMDAlXCJcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17e1xuICogICAgICAgb3BhY2l0eTogaXNPcGVuID8gMSA6IDAsXG4gKiAgICAgICB4OiBpc09wZW4gPyAwIDogY2xvc2VkWFxuICogICAgIH19IC8+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEByZXR1cm4gYm9vbGVhblxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlUmVkdWNlZE1vdGlvbigpIHtcbiAgICB2YXIgaXNSZWR1Y2VkTW90aW9uID0gdXNlQ29udGV4dChNb3Rpb25Db250ZXh0KS5pc1JlZHVjZWRNb3Rpb247XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKGRldGVybWluZVNob3VsZFJlZHVjZU1vdGlvbihwcmVmZXJzUmVkdWNlZE1vdGlvbi5nZXQoKSwgaXNSZWR1Y2VkTW90aW9uKSksIDIpLCBzaG91bGRSZWR1Y2VNb3Rpb24gPSBfYVswXSwgc2V0U2hvdWxkUmVkdWNlTW90aW9uID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZlcnNSZWR1Y2VkTW90aW9uLm9uQ2hhbmdlKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBzZXRTaG91bGRSZWR1Y2VNb3Rpb24oZGV0ZXJtaW5lU2hvdWxkUmVkdWNlTW90aW9uKHYsIGlzUmVkdWNlZE1vdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9LCBbc2V0U2hvdWxkUmVkdWNlTW90aW9uLCBpc1JlZHVjZWRNb3Rpb25dKTtcbiAgICByZXR1cm4gc2hvdWxkUmVkdWNlTW90aW9uO1xufVxuXG4vKipcbiAqIERlZmluZSBhY2Nlc3NpYmlsaXR5IG9wdGlvbnMgZm9yIGEgdHJlZS4gQ2FuIGJlIHVzZWQgdG8gZm9yY2UgdGhlIHRyZWUgaW50byBSZWR1Y2VkIE1vdGlvbiBtb2RlLFxuICogb3IgZGlzYWJsZSBkZXZpY2UgZGV0ZWN0aW9uLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBSZWR1Y2VkTW90aW9uKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIGVuYWJsZWQgPSBfYS5lbmFibGVkO1xuICAgIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChNb3Rpb25Db250ZXh0KTtcbiAgICBjb250ZXh0ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHQpLCB7IGlzUmVkdWNlZE1vdGlvbjogZW5hYmxlZCB9KSk7IH0sIFtlbmFibGVkXSk7XG4gICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KE1vdGlvbkNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHQgfSwgY2hpbGRyZW4pKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGBBbmltYXRpb25Db250cm9sc2AsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIG1hbnVhbGx5IHN0YXJ0LCBzdG9wXG4gKiBhbmQgc2VxdWVuY2UgYW5pbWF0aW9ucyBvbiBvbmUgb3IgbW9yZSBjb21wb25lbnRzLlxuICpcbiAqIFRoZSByZXR1cm5lZCBgQW5pbWF0aW9uQ29udHJvbHNgIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGBhbmltYXRlYCBwcm9wZXJ0eVxuICogb2YgdGhlIGNvbXBvbmVudHMgeW91IHdhbnQgdG8gYW5pbWF0ZS5cbiAqXG4gKiBUaGVzZSBjb21wb25lbnRzIGNhbiB0aGVuIGJlIGFuaW1hdGVkIHdpdGggdGhlIGBzdGFydGAgbWV0aG9kLlxuICpcbiAqIEBsaWJyYXJ5XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbiAqIGltcG9ydCB7IEZyYW1lLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXInXG4gKlxuICogZXhwb3J0IGZ1bmN0aW9uIE15Q29tcG9uZW50KHByb3BzKSB7XG4gKiAgICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpXG4gKlxuICogICAgY29udHJvbHMuc3RhcnQoe1xuICogICAgICAgIHg6IDEwMCxcbiAqICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUgfSxcbiAqICAgIH0pXG4gKlxuICogICAgcmV0dXJuIDxGcmFtZSBhbmltYXRlPXtjb250cm9sc30gLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtb3Rpb25cbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuICpcbiAqIGV4cG9ydCBmdW5jdGlvbiBNeUNvbXBvbmVudChwcm9wcykge1xuICogICAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxuICpcbiAqICAgIGNvbnRyb2xzLnN0YXJ0KHtcbiAqICAgICAgICB4OiAxMDAsXG4gKiAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41IH0sXG4gKiAgICB9KVxuICpcbiAqICAgIHJldHVybiA8bW90aW9uLmRpdiBhbmltYXRlPXtjb250cm9sc30gLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEByZXR1cm5zIEFuaW1hdGlvbiBjb250cm9sbGVyIHdpdGggYHN0YXJ0YCBhbmQgYHN0b3BgIG1ldGhvZHNcbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgYW5pbWF0aW9uQ29udHJvbHMgPSB1c2VDb25zdGFudChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgQW5pbWF0aW9uQ29udHJvbHMoKTsgfSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0aW9uQ29udHJvbHMubW91bnQoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFuaW1hdGlvbkNvbnRyb2xzLnVubW91bnQoKTsgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGFuaW1hdGlvbkNvbnRyb2xzO1xufVxuXG4vKipcbiAqIEN5Y2xlcyB0aHJvdWdoIGEgc2VyaWVzIG9mIHZpc3VhbCBwcm9wZXJ0aWVzLiBDYW4gYmUgdXNlZCB0byB0b2dnbGUgYmV0d2VlbiBvciBjeWNsZSB0aHJvdWdoIGFuaW1hdGlvbnMuIEl0IHdvcmtzIHNpbWlsYXIgdG8gYHVzZVN0YXRlYCBpbiBSZWFjdC4gSXQgaXMgcHJvdmlkZWQgYW4gaW5pdGlhbCBhcnJheSBvZiBwb3NzaWJsZSBzdGF0ZXMsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHR3byBhcmd1bWVudHMuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4gKiBpbXBvcnQgeyBGcmFtZSwgdXNlQ3ljbGUgfSBmcm9tIFwiZnJhbWVyXCJcbiAqXG4gKiBleHBvcnQgZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7XG4gKiAgIGNvbnN0IFt4LCBjeWNsZVhdID0gdXNlQ3ljbGUoMCwgNTAsIDEwMClcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEZyYW1lXG4gKiAgICAgICBhbmltYXRlPXt7IHg6IHggfX1cbiAqICAgICAgIG9uVGFwPXsoKSA9PiBjeWNsZVgoKX1cbiAqICAgICAgLz5cbiAqICAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtb3Rpb25cbiAqXG4gKiBBbiBpbmRleCB2YWx1ZSBjYW4gYmUgcGFzc2VkIHRvIHRoZSByZXR1cm5lZCBgY3ljbGVgIGZ1bmN0aW9uIHRvIGN5Y2xlIHRvIGEgc3BlY2lmaWMgaW5kZXguXG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuICogaW1wb3J0IHsgbW90aW9uLCB1c2VDeWNsZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbiAqXG4gKiBleHBvcnQgY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IFt4LCBjeWNsZVhdID0gdXNlQ3ljbGUoMCwgNTAsIDEwMClcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPG1vdGlvbi5kaXZcbiAqICAgICAgIGFuaW1hdGU9e3sgeDogeCB9fVxuICogICAgICAgb25UYXA9eygpID0+IGN5Y2xlWCgpfVxuICogICAgICAvPlxuICogICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGl0ZW1zIC0gaXRlbXMgdG8gY3ljbGUgdGhyb3VnaFxuICogQHJldHVybnMgW2N1cnJlbnRTdGF0ZSwgY3ljbGVTdGF0ZV1cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZUN5Y2xlKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIC8vIFRPRE86IEFmdGVyIEZyYW1lciBYIGJldGEsIHJlbW92ZSB0aGlzIHdhcm5pbmdcbiAgICB3YXJuaW5nKGl0ZW1zLmxlbmd0aCA+IDEsIFwidXNlQ3ljbGUgc3ludGF4IGhhcyBjaGFuZ2VkLiBgdXNlQ3ljbGUoWzAsIDEsIDJdKWAgYmVjb21lcyBgdXNlQ3ljbGUoMCwgMSwgMilgXCIpO1xuICAgIHZhciBpbmRleCA9IHVzZVJlZigwKTtcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUoaXRlbXNbaW5kZXguY3VycmVudF0pLCAyKSwgaXRlbSA9IF9hWzBdLCBzZXRJdGVtID0gX2FbMV07XG4gICAgcmV0dXJuIFtcbiAgICAgICAgaXRlbSxcbiAgICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICAgIGluZGV4LmN1cnJlbnQgPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBuZXh0ICE9PSBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgID8gd3JhcCgwLCBpdGVtcy5sZW5ndGgsIGluZGV4LmN1cnJlbnQgKyAxKVxuICAgICAgICAgICAgICAgICAgICA6IG5leHQ7XG4gICAgICAgICAgICBzZXRJdGVtKGl0ZW1zW2luZGV4LmN1cnJlbnRdKTtcbiAgICAgICAgfSxcbiAgICBdO1xufVxuXG4vKipcbiAqIENhbiBtYW51YWxseSB0cmlnZ2VyIGEgZHJhZyBnZXN0dXJlIG9uIG9uZSBvciBtb3JlIGBkcmFnYC1lbmFibGVkIGBtb3Rpb25gIGNvbXBvbmVudHMuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IGRyYWdDb250cm9scyA9IHVzZURyYWdDb250cm9scygpXG4gKlxuICogZnVuY3Rpb24gc3RhcnREcmFnKGV2ZW50KSB7XG4gKiAgIGRyYWdDb250cm9scy5zdGFydChldmVudCwgeyBzbmFwVG9DdXJzb3I6IHRydWUgfSlcbiAqIH1cbiAqXG4gKiByZXR1cm4gKFxuICogICA8PlxuICogICAgIDxGcmFtZSBvblRhcFN0YXJ0PXtzdGFydERyYWd9IC8+XG4gKiAgICAgPEZyYW1lIGRyYWc9XCJ4XCIgZHJhZ0NvbnRyb2xzPXtkcmFnQ29udHJvbHN9IC8+XG4gKiAgIDwvPlxuICogKVxuICogYGBgXG4gKlxuICogQG1vdGlvblxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgZHJhZ0NvbnRyb2xzID0gdXNlRHJhZ0NvbnRyb2xzKClcbiAqXG4gKiBmdW5jdGlvbiBzdGFydERyYWcoZXZlbnQpIHtcbiAqICAgZHJhZ0NvbnRyb2xzLnN0YXJ0KGV2ZW50LCB7IHNuYXBUb0N1cnNvcjogdHJ1ZSB9KVxuICogfVxuICpcbiAqIHJldHVybiAoXG4gKiAgIDw+XG4gKiAgICAgPGRpdiBvblBvaW50ZXJEb3duPXtzdGFydERyYWd9IC8+XG4gKiAgICAgPG1vdGlvbi5kaXYgZHJhZz1cInhcIiBkcmFnQ29udHJvbHM9e2RyYWdDb250cm9sc30gLz5cbiAqICAgPC8+XG4gKiApXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBEcmFnQ29udHJvbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRHJhZ0NvbnRyb2xzKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudENvbnRyb2xzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgYSBjb21wb25lbnQncyBpbnRlcm5hbCBgVmlzdWFsRWxlbWVudERyYWdDb250cm9sc2AgdG8gdGhlIHVzZXItZmFjaW5nIEFQSS5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIERyYWdDb250cm9scy5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNvbnRyb2xzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Q29udHJvbHMuYWRkKGNvbnRyb2xzKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNvbXBvbmVudENvbnRyb2xzLmRlbGV0ZShjb250cm9scyk7IH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdGFydCBhIGRyYWcgZ2VzdHVyZSBvbiBldmVyeSBgbW90aW9uYCBjb21wb25lbnQgdGhhdCBoYXMgdGhpcyBzZXQgb2YgZHJhZyBjb250cm9sc1xuICAgICAqIHBhc3NlZCBpbnRvIGl0IHZpYSB0aGUgYGRyYWdDb250cm9sc2AgcHJvcC5cbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqIGRyYWdDb250cm9scy5zdGFydChlLCB7XG4gICAgICogICBzbmFwVG9DdXJzb3I6IHRydWVcbiAgICAgKiB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IC0gQSBtb3VzZS90b3VjaC9wb2ludGVyIGV2ZW50LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIERyYWdDb250cm9scy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRDb250cm9scy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9scykge1xuICAgICAgICAgICAgY29udHJvbHMuc3RhcnQoZXZlbnQubmF0aXZlRXZlbnQgfHwgZXZlbnQsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEcmFnQ29udHJvbHM7XG59KCkpO1xudmFyIGNyZWF0ZURyYWdDb250cm9scyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBEcmFnQ29udHJvbHMoKTsgfTtcbi8qKlxuICogVXN1YWxseSwgZHJhZ2dpbmcgaXMgaW5pdGlhdGVkIGJ5IHByZXNzaW5nIGRvd24gb24gYSBgbW90aW9uYCBjb21wb25lbnQgd2l0aCBhIGBkcmFnYCBwcm9wXG4gKiBhbmQgbW92aW5nIGl0LiBGb3Igc29tZSB1c2UtY2FzZXMsIGZvciBpbnN0YW5jZSBjbGlja2luZyBhdCBhbiBhcmJpdHJhcnkgcG9pbnQgb24gYSB2aWRlbyBzY3J1YmJlciwgd2VcbiAqIG1pZ2h0IHdhbnQgdG8gaW5pdGlhdGUgdGhhdCBkcmFnZ2luZyBmcm9tIGEgZGlmZmVyZW50IGNvbXBvbmVudCB0aGFuIHRoZSBkcmFnZ2FibGUgb25lLlxuICpcbiAqIEJ5IGNyZWF0aW5nIGEgYGRyYWdDb250cm9sc2AgdXNpbmcgdGhlIGB1c2VEcmFnQ29udHJvbHNgIGhvb2ssIHdlIGNhbiBwYXNzIHRoaXMgaW50b1xuICogdGhlIGRyYWdnYWJsZSBjb21wb25lbnQncyBgZHJhZ0NvbnRyb2xzYCBwcm9wLiBJdCBleHBvc2VzIGEgYHN0YXJ0YCBtZXRob2RcbiAqIHRoYXQgY2FuIHN0YXJ0IGRyYWdnaW5nIGZyb20gcG9pbnRlciBldmVudHMgb24gb3RoZXIgY29tcG9uZW50cy5cbiAqXG4gKiBAbGlicmFyeVxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgZHJhZ0NvbnRyb2xzID0gdXNlRHJhZ0NvbnRyb2xzKClcbiAqXG4gKiBmdW5jdGlvbiBzdGFydERyYWcoZXZlbnQpIHtcbiAqICAgZHJhZ0NvbnRyb2xzLnN0YXJ0KGV2ZW50LCB7IHNuYXBUb0N1cnNvcjogdHJ1ZSB9KVxuICogfVxuICpcbiAqIHJldHVybiAoXG4gKiAgIDw+XG4gKiAgICAgPEZyYW1lIG9uVGFwU3RhcnQ9e3N0YXJ0RHJhZ30gLz5cbiAqICAgICA8RnJhbWUgZHJhZz1cInhcIiBkcmFnQ29udHJvbHM9e2RyYWdDb250cm9sc30gLz5cbiAqICAgPC8+XG4gKiApXG4gKiBgYGBcbiAqXG4gKiBAbW90aW9uXG4gKlxuICogYGBganN4XG4gKiBjb25zdCBkcmFnQ29udHJvbHMgPSB1c2VEcmFnQ29udHJvbHMoKVxuICpcbiAqIGZ1bmN0aW9uIHN0YXJ0RHJhZyhldmVudCkge1xuICogICBkcmFnQ29udHJvbHMuc3RhcnQoZXZlbnQsIHsgc25hcFRvQ3Vyc29yOiB0cnVlIH0pXG4gKiB9XG4gKlxuICogcmV0dXJuIChcbiAqICAgPD5cbiAqICAgICA8ZGl2IG9uUG9pbnRlckRvd249e3N0YXJ0RHJhZ30gLz5cbiAqICAgICA8bW90aW9uLmRpdiBkcmFnPVwieFwiIGRyYWdDb250cm9scz17ZHJhZ0NvbnRyb2xzfSAvPlxuICogICA8Lz5cbiAqIClcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlRHJhZ0NvbnRyb2xzKCkge1xuICAgIHJldHVybiB1c2VDb25zdGFudChjcmVhdGVEcmFnQ29udHJvbHMpO1xufVxuXG4vKipcbiAqIFVzZXMgdGhlIHJlZiB0aGF0IGlzIHBhc3NlZCBpbiwgb3IgY3JlYXRlcyBhIG5ldyBvbmVcbiAqIEBwYXJhbSBleHRlcm5hbCAtIEV4dGVybmFsIHJlZlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHVzZUV4dGVybmFsUmVmKGV4dGVybmFsUmVmKSB7XG4gICAgLy8gV2UncmUgY29uZGl0aW9uYWxseSBjYWxsaW5nIGB1c2VSZWZgIGhlcmUgd2hpY2ggaXMgc29ydCBvZiBuYXVnaHR5IGFzIGhvb2tzXG4gICAgLy8gc2hvdWxkbid0IGJlIGNhbGxlZCBjb25kaXRpb25hbGx5LiBIb3dldmVyLCBGcmFtZXIgTW90aW9uIHdpbGwgYnJlYWsgaWYgdGhpc1xuICAgIC8vIGNvbmRpdGlvbiBjaGFuZ2VzIGFueXdheS4gSXQgbWlnaHQgYmUgcG9zc2libGUgdG8gdXNlIGFuIGludmFyaWFudCBoZXJlIHRvXG4gICAgLy8gbWFrZSBpdCBleHBsaWNpdCwgYnV0IEkgZXhwZWN0IGNoYW5naW5nIGByZWZgIGlzIG5vdCBub3JtYWwgYmVoYXZpb3VyLlxuICAgIHZhciByZWYgPSAhZXh0ZXJuYWxSZWYgfHwgdHlwZW9mIGV4dGVybmFsUmVmID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyB1c2VSZWYobnVsbClcbiAgICAgICAgOiBleHRlcm5hbFJlZjtcbiAgICAvLyBIYW5kbGUgYHJlZmAgZnVuY3Rpb25zLiBBZ2FpbiwgY2FsbGluZyB0aGUgaG9vayBjb25kaXRpb25hbGx5IGlzIGtpbmQgb2YgbmF1Z2h0eVxuICAgIC8vIGJ1dCBgcmVmYCB0eXBlcyBjaGFuZ2luZyBiZXR3ZWVuIHJlbmRlcnMgd291bGQgYnJlYWsgTW90aW9uIGFueXdheS4gSWYgd2UgcmVjZWl2ZVxuICAgIC8vIGJ1ZyByZXBvcnRzIGFib3V0IHRoaXMsIHdlIHNob3VsZCB0cmFjayB0aGUgcHJvdmlkZWQgcmVmIGFuZCB0aHJvdyBhbiBpbnZhcmlhbnRcbiAgICAvLyByYXRoZXIgdGhhbiBtb3ZlIHRoZSBjb25kaXRpb25hbCB0byBpbnNpZGUgdGhlIHVzZUVmZmVjdCBhcyB0aGlzIHdpbGwgYmUgZmlyZWRcbiAgICAvLyBmb3IgZXZlcnkgRnJhbWUgY29tcG9uZW50IHdpdGhpbiBGcmFtZXIuXG4gICAgaWYgKGV4dGVybmFsUmVmICYmIHR5cGVvZiBleHRlcm5hbFJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleHRlcm5hbFJlZihyZWYuY3VycmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gZXh0ZXJuYWxSZWYobnVsbCk7IH07XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZjtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGp1c3QgYSB2ZXJ5IGJhc2ljIFZpc3VhbEVsZW1lbnQsIG1vcmUgb2YgYSBoYWNrIHRvIGtlZXAgc3VwcG9ydGluZyB1c2VBbmltYXRlZFN0YXRlIHdpdGhcbiAqIHRoZSBsYXRlc3QgQVBJcy5cbiAqL1xudmFyIFN0YXRlVmlzdWFsRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3RhdGVWaXN1YWxFbGVtZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN0YXRlVmlzdWFsRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmluaXRpYWxTdGF0ZSA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN0YXRlVmlzdWFsRWxlbWVudC5wcm90b3R5cGUudXBkYXRlTGF5b3V0RGVsdGEgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgU3RhdGVWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBTdGF0ZVZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmNsZWFuID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIFN0YXRlVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuZ2V0Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHsgbWluOiAwLCBtYXg6IDAgfSwgeTogeyBtaW46IDAsIG1heDogMCB9IH07XG4gICAgfTtcbiAgICBTdGF0ZVZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnJlYWROYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbFN0YXRlW2tleV0gfHwgMDtcbiAgICB9O1xuICAgIFN0YXRlVmlzdWFsRWxlbWVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RhdGVWaXN1YWxFbGVtZW50O1xufShWaXN1YWxFbGVtZW50KSk7XG4vKipcbiAqIFRoaXMgaXMgbm90IGFuIG9mZmljaWFsbHkgc3VwcG9ydGVkIEFQSSBhbmQgbWF5IGJlIHJlbW92ZWRcbiAqIG9uIGFueSB2ZXJzaW9uLlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHVzZUFuaW1hdGVkU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksIDIpLCBhbmltYXRpb25TdGF0ZSA9IF9hWzBdLCBzZXRBbmltYXRpb25TdGF0ZSA9IF9hWzFdO1xuICAgIHZhciB2aXN1YWxFbGVtZW50ID0gdXNlQ29uc3RhbnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFN0YXRlVmlzdWFsRWxlbWVudCgpOyB9KTtcbiAgICB2aXN1YWxFbGVtZW50LnVwZGF0ZUNvbmZpZyh7XG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAodikgeyByZXR1cm4gc2V0QW5pbWF0aW9uU3RhdGUoX19hc3NpZ24oe30sIHYpKTsgfSxcbiAgICB9KTtcbiAgICB2aXN1YWxFbGVtZW50LmluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB2YXIgY29udHJvbHMgPSB1c2VWaXN1YWxFbGVtZW50QW5pbWF0aW9uKHZpc3VhbEVsZW1lbnQsIHt9LCB7fSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmlzdWFsRWxlbWVudC5tb3VudCh7fSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB2aXN1YWxFbGVtZW50LnVubW91bnQoKTsgfTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHN0YXJ0QW5pbWF0aW9uID0gdXNlQ29uc3RhbnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKGFuaW1hdGlvbkRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzLnN0YXJ0KGFuaW1hdGlvbkRlZmluaXRpb24pO1xuICAgIH07IH0pO1xuICAgIHJldHVybiBbYW5pbWF0aW9uU3RhdGUsIHN0YXJ0QW5pbWF0aW9uXTtcbn1cblxuZXhwb3J0IHsgQW5pbWF0ZUxheW91dCBhcyBBbmltYXRlTGF5b3V0RmVhdHVyZSwgQW5pbWF0ZVByZXNlbmNlLCBBbmltYXRlU2hhcmVkTGF5b3V0LCBBbmltYXRpb25Db250cm9scywgQW5pbWF0aW9uIGFzIEFuaW1hdGlvbkZlYXR1cmUsIERyYWdDb250cm9scywgRHJhZyBhcyBEcmFnRmVhdHVyZSwgRXhpdCBhcyBFeGl0RmVhdHVyZSwgR2VzdHVyZXMgYXMgR2VzdHVyZXNGZWF0dXJlLCBIVE1MVmlzdWFsRWxlbWVudCwgTW90aW9uQ29uZmlnLCBNb3Rpb25Db25maWdDb250ZXh0LCBNb3Rpb25Db250ZXh0LCBNb3Rpb25WYWx1ZSwgUHJlc2VuY2VDb250ZXh0LCBSZWR1Y2VkTW90aW9uLCBTaGFyZWRMYXlvdXRDb250ZXh0LCBWaXNpYmlsaXR5QWN0aW9uLCBWaXN1YWxFbGVtZW50QW5pbWF0aW9uQ29udHJvbHMsIGFkZFNjYWxlQ29ycmVjdGlvbiwgYW5pbWF0aW9uQ29udHJvbHMsIGNyZWF0ZUJhdGNoZXIsIGNyZWF0ZU1vdGlvbkNvbXBvbmVudCwgaXNWYWxpZE1vdGlvblByb3AsIG0sIG1vdGlvbiwgbW90aW9uVmFsdWUsIHJlc29sdmVNb3Rpb25WYWx1ZSwgc3RhcnRBbmltYXRpb24sIHRyYW5zZm9ybSwgdXNlQW5pbWF0ZWRTdGF0ZSwgdXNlQW5pbWF0aW9uLCB1c2VDeWNsZSwgdXNlRG9tRXZlbnQsIHVzZURyYWdDb250cm9scywgdXNlRWxlbWVudFNjcm9sbCwgdXNlRXh0ZXJuYWxSZWYsIHVzZUdlc3R1cmVzLCB1c2VJbnZlcnRlZFNjYWxlLCB1c2VJc1ByZXNlbnQsIHVzZU1vdGlvblRlbXBsYXRlLCB1c2VNb3Rpb25WYWx1ZSwgdXNlUGFuR2VzdHVyZSwgdXNlUHJlc2VuY2UsIHVzZVJlZHVjZWRNb3Rpb24sIHVzZVNwcmluZywgdXNlVGFwR2VzdHVyZSwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCB9O1xuIiwiaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnaGV5LWxpc3Rlbic7XG5cbnZhciBwcmV2VGltZSA9IDA7XG52YXIgb25OZXh0RnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG59IDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKHRpbWVzdGFtcCAtIHByZXZUaW1lKSk7XG4gICAgcHJldlRpbWUgPSB0aW1lc3RhbXAgKyB0aW1lVG9DYWxsO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2socHJldlRpbWUpO1xuICAgIH0sIHRpbWVUb0NhbGwpO1xufTtcblxudmFyIGNyZWF0ZVN0ZXAgPSBmdW5jdGlvbiAoc2V0UnVuTmV4dEZyYW1lKSB7XG4gICAgdmFyIHByb2Nlc3NUb1J1biA9IFtdO1xuICAgIHZhciBwcm9jZXNzVG9SdW5OZXh0RnJhbWUgPSBbXTtcbiAgICB2YXIgbnVtVGhpc0ZyYW1lID0gMDtcbiAgICB2YXIgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjYW5jZWxsZWQgPSBuZXcgV2Vha1NldCgpO1xuICAgIHZhciB0b0tlZXBBbGl2ZSA9IG5ldyBXZWFrU2V0KCk7XG4gICAgdmFyIHJlbmRlclN0ZXAgPSB7XG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKHByb2Nlc3MpIHtcbiAgICAgICAgICAgIHZhciBpbmRleE9mQ2FsbGJhY2sgPSBwcm9jZXNzVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihwcm9jZXNzKTtcbiAgICAgICAgICAgIGNhbmNlbGxlZC5hZGQocHJvY2Vzcyk7XG4gICAgICAgICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgX2EgPSBbcHJvY2Vzc1RvUnVuTmV4dEZyYW1lLCBwcm9jZXNzVG9SdW5dLCBwcm9jZXNzVG9SdW4gPSBfYVswXSwgcHJvY2Vzc1RvUnVuTmV4dEZyYW1lID0gX2FbMV07XG4gICAgICAgICAgICBwcm9jZXNzVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIG51bVRoaXNGcmFtZSA9IHByb2Nlc3NUb1J1bi5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobnVtVGhpc0ZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NfMTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVGhpc0ZyYW1lOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc18xID0gcHJvY2Vzc1RvUnVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzXzEoZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwQWxpdmUuaGFzKHByb2Nlc3NfMSkgPT09IHRydWUgJiYgIWNhbmNlbGxlZC5oYXMocHJvY2Vzc18xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyU3RlcC5zY2hlZHVsZShwcm9jZXNzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UnVuTmV4dEZyYW1lKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNjaGVkdWxlOiBmdW5jdGlvbiAocHJvY2Vzcywga2VlcEFsaXZlLCBpbW1lZGlhdGUpIHtcbiAgICAgICAgICAgIGlmIChrZWVwQWxpdmUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGtlZXBBbGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGltbWVkaWF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHByb2Nlc3MgPT09IFwiZnVuY3Rpb25cIiwgXCJBcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB2YXIgYWRkVG9DdXJyZW50QnVmZmVyID0gaW1tZWRpYXRlICYmIGlzUHJvY2Vzc2luZztcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSBhZGRUb0N1cnJlbnRCdWZmZXIgPyBwcm9jZXNzVG9SdW4gOiBwcm9jZXNzVG9SdW5OZXh0RnJhbWU7XG4gICAgICAgICAgICBjYW5jZWxsZWQuZGVsZXRlKHByb2Nlc3MpO1xuICAgICAgICAgICAgaWYgKGtlZXBBbGl2ZSkgdG9LZWVwQWxpdmUuYWRkKHByb2Nlc3MpO1xuICAgICAgICAgICAgaWYgKGJ1ZmZlci5pbmRleE9mKHByb2Nlc3MpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoKHByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIGlmIChhZGRUb0N1cnJlbnRCdWZmZXIpIG51bVRoaXNGcmFtZSA9IHByb2Nlc3NUb1J1bi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiByZW5kZXJTdGVwO1xufTtcblxudmFyIG1heEVsYXBzZWQgPSA0MDtcbnZhciBkZWZhdWx0RWxhcHNlZCA9IDEgLyA2MCAqIDEwMDA7XG52YXIgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xudmFyIHdpbGxSdW5OZXh0RnJhbWUgPSBmYWxzZTtcbnZhciBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbnZhciBmcmFtZSA9IHtcbiAgICBkZWx0YTogMCxcbiAgICB0aW1lc3RhbXA6IDBcbn07XG52YXIgc3RlcHNPcmRlciA9IFtcInJlYWRcIiwgXCJ1cGRhdGVcIiwgXCJwcmVSZW5kZXJcIiwgXCJyZW5kZXJcIiwgXCJwb3N0UmVuZGVyXCJdO1xudmFyIHNldFdpbGxSdW5OZXh0RnJhbWUgPSBmdW5jdGlvbiAod2lsbFJ1bikge1xuICAgIHJldHVybiB3aWxsUnVuTmV4dEZyYW1lID0gd2lsbFJ1bjtcbn07XG52YXIgc3RlcHMgPSAvKiNfX1BVUkVfXyovc3RlcHNPcmRlci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgYWNjW2tleV0gPSBjcmVhdGVTdGVwKHNldFdpbGxSdW5OZXh0RnJhbWUpO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG52YXIgc3luYyA9IC8qI19fUFVSRV9fKi9zdGVwc09yZGVyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgc3RlcCA9IHN0ZXBzW2tleV07XG4gICAgYWNjW2tleV0gPSBmdW5jdGlvbiAocHJvY2Vzcywga2VlcEFsaXZlLCBpbW1lZGlhdGUpIHtcbiAgICAgICAgaWYgKGtlZXBBbGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBrZWVwQWxpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1tZWRpYXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGltbWVkaWF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2lsbFJ1bk5leHRGcmFtZSkgc3RhcnRMb29wKCk7XG4gICAgICAgIHN0ZXAuc2NoZWR1bGUocHJvY2Vzcywga2VlcEFsaXZlLCBpbW1lZGlhdGUpO1xuICAgICAgICByZXR1cm4gcHJvY2VzcztcbiAgICB9O1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG52YXIgY2FuY2VsU3luYyA9IC8qI19fUFVSRV9fKi9zdGVwc09yZGVyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBhY2Nba2V5XSA9IHN0ZXBzW2tleV0uY2FuY2VsO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG52YXIgcHJvY2Vzc1N0ZXAgPSBmdW5jdGlvbiAoc3RlcElkKSB7XG4gICAgcmV0dXJuIHN0ZXBzW3N0ZXBJZF0ucHJvY2VzcyhmcmFtZSk7XG59O1xudmFyIHByb2Nlc3NGcmFtZSA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICB3aWxsUnVuTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgZnJhbWUuZGVsdGEgPSB1c2VEZWZhdWx0RWxhcHNlZCA/IGRlZmF1bHRFbGFwc2VkIDogTWF0aC5tYXgoTWF0aC5taW4odGltZXN0YW1wIC0gZnJhbWUudGltZXN0YW1wLCBtYXhFbGFwc2VkKSwgMSk7XG4gICAgaWYgKCF1c2VEZWZhdWx0RWxhcHNlZCkgZGVmYXVsdEVsYXBzZWQgPSBmcmFtZS5kZWx0YTtcbiAgICBmcmFtZS50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBzdGVwc09yZGVyLmZvckVhY2gocHJvY2Vzc1N0ZXApO1xuICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGlmICh3aWxsUnVuTmV4dEZyYW1lKSB7XG4gICAgICAgIHVzZURlZmF1bHRFbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gICAgfVxufTtcbnZhciBzdGFydExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2lsbFJ1bk5leHRGcmFtZSA9IHRydWU7XG4gICAgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xuICAgIGlmICghaXNQcm9jZXNzaW5nKSBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xufTtcbnZhciBnZXRGcmFtZURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZyYW1lO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3luYztcbmV4cG9ydCB7IGNhbmNlbFN5bmMsIGdldEZyYW1lRGF0YSB9O1xuIiwidmFyIHdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7IH07XHJcbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbiAoKSB7IH07XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICB3YXJuaW5nID0gZnVuY3Rpb24gKGNoZWNrLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKCFjaGVjayAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbnZhcmlhbnQgPSBmdW5jdGlvbiAoY2hlY2ssIG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoIWNoZWNrKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cbmV4cG9ydCB7IGludmFyaWFudCwgd2FybmluZyB9O1xuIiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fc3ByZWFkQXJyYXlzLCBfX3Jlc3QgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBoZXgsIHJnYmEsIGhzbGEsIGNvbXBsZXgsIGNvbG9yIH0gZnJvbSAnc3R5bGUtdmFsdWUtdHlwZXMnO1xuaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnaGV5LWxpc3Rlbic7XG5pbXBvcnQgc3luYywgeyBjYW5jZWxTeW5jLCBnZXRGcmFtZURhdGEgfSBmcm9tICdmcmFtZXN5bmMnO1xuXG5mdW5jdGlvbiBzcHJpbmcoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5mcm9tLFxuICAgICAgICBmcm9tID0gX2IgPT09IHZvaWQgMCA/IDAuMCA6IF9iLFxuICAgICAgICBfYyA9IF9hLnRvLFxuICAgICAgICB0byA9IF9jID09PSB2b2lkIDAgPyAwLjAgOiBfYyxcbiAgICAgICAgX2QgPSBfYS52ZWxvY2l0eSxcbiAgICAgICAgdmVsb2NpdHkgPSBfZCA9PT0gdm9pZCAwID8gMC4wIDogX2QsXG4gICAgICAgIF9lID0gX2Euc3RpZmZuZXNzLFxuICAgICAgICBzdGlmZm5lc3MgPSBfZSA9PT0gdm9pZCAwID8gMTAwIDogX2UsXG4gICAgICAgIF9mID0gX2EuZGFtcGluZyxcbiAgICAgICAgZGFtcGluZyA9IF9mID09PSB2b2lkIDAgPyAxMCA6IF9mLFxuICAgICAgICBfZyA9IF9hLm1hc3MsXG4gICAgICAgIG1hc3MgPSBfZyA9PT0gdm9pZCAwID8gMS4wIDogX2csXG4gICAgICAgIF9oID0gX2EucmVzdFNwZWVkLFxuICAgICAgICByZXN0U3BlZWQgPSBfaCA9PT0gdm9pZCAwID8gMiA6IF9oLFxuICAgICAgICByZXN0RGVsdGEgPSBfYS5yZXN0RGVsdGE7XG4gICAgdmFyIHN0YXRlID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IGZyb20gfTtcbiAgICB2YXIgcmVzb2x2ZVNwcmluZyA9IHplcm87XG4gICAgdmFyIHJlc29sdmVWZWxvY2l0eSA9IHplcm87XG4gICAgZnVuY3Rpb24gY3JlYXRlU3ByaW5nKCkge1xuICAgICAgICB2YXIgaW5pdGlhbFZlbG9jaXR5ID0gdmVsb2NpdHkgPyAtKHZlbG9jaXR5IC8gMTAwMCkgOiAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsRGVsdGEgPSB0byAtIGZyb207XG4gICAgICAgIHZhciBkYW1waW5nUmF0aW8gPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xuICAgICAgICB2YXIgYW5ndWxhckZyZXEgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcykgLyAxMDAwO1xuICAgICAgICByZXN0RGVsdGEgIT09IG51bGwgJiYgcmVzdERlbHRhICE9PSB2b2lkIDAgPyByZXN0RGVsdGEgOiByZXN0RGVsdGEgPSBNYXRoLmFicyh0byAtIGZyb20pIDw9IDEgPyAwLjAxIDogMC40O1xuICAgICAgICBpZiAoZGFtcGluZ1JhdGlvIDwgMSkge1xuICAgICAgICAgICAgcmVzb2x2ZVNwcmluZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogdCk7XG4gICAgICAgICAgICAgICAgdmFyIGV4cG9EZWNheSA9IGFuZ3VsYXJGcmVxICogTWF0aC5zcXJ0KDEuMCAtIGRhbXBpbmdSYXRpbyAqIGRhbXBpbmdSYXRpbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvIC0gZW52ZWxvcGUgKiAoKGluaXRpYWxWZWxvY2l0eSArIGRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogaW5pdGlhbERlbHRhKSAvIGV4cG9EZWNheSAqIE1hdGguc2luKGV4cG9EZWNheSAqIHQpICsgaW5pdGlhbERlbHRhICogTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdmVWZWxvY2l0eSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogdCk7XG4gICAgICAgICAgICAgICAgdmFyIGV4cG9EZWNheSA9IGFuZ3VsYXJGcmVxICogTWF0aC5zcXJ0KDEuMCAtIGRhbXBpbmdSYXRpbyAqIGRhbXBpbmdSYXRpbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogZW52ZWxvcGUgKiAoTWF0aC5zaW4oZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiBpbml0aWFsRGVsdGEpIC8gZXhwb0RlY2F5ICsgaW5pdGlhbERlbHRhICogTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkpIC0gZW52ZWxvcGUgKiAoTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiBpbml0aWFsRGVsdGEpIC0gZXhwb0RlY2F5ICogaW5pdGlhbERlbHRhICogTWF0aC5zaW4oZXhwb0RlY2F5ICogdCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkYW1waW5nUmF0aW8gPT09IDEpIHtcbiAgICAgICAgICAgIHJlc29sdmVTcHJpbmcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBlbnZlbG9wZSA9IE1hdGguZXhwKC1hbmd1bGFyRnJlcSAqIHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0byAtIGVudmVsb3BlICogKGluaXRpYWxEZWx0YSArIChpbml0aWFsVmVsb2NpdHkgKyBhbmd1bGFyRnJlcSAqIGluaXRpYWxEZWx0YSkgKiB0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGFtcGVkQW5ndWxhckZyZXFfMSA9IGFuZ3VsYXJGcmVxICogTWF0aC5zcXJ0KGRhbXBpbmdSYXRpbyAqIGRhbXBpbmdSYXRpbyAtIDEpO1xuICAgICAgICAgICAgcmVzb2x2ZVNwcmluZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogdCk7XG4gICAgICAgICAgICAgICAgdmFyIGZyZXFGb3JUID0gTWF0aC5taW4oZGFtcGVkQW5ndWxhckZyZXFfMSAqIHQsIDMwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvIC0gZW52ZWxvcGUgKiAoKGluaXRpYWxWZWxvY2l0eSArIGRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogaW5pdGlhbERlbHRhKSAqIE1hdGguc2luaChmcmVxRm9yVCkgKyBkYW1wZWRBbmd1bGFyRnJlcV8xICogaW5pdGlhbERlbHRhICogTWF0aC5jb3NoKGZyZXFGb3JUKSkgLyBkYW1wZWRBbmd1bGFyRnJlcV8xO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVTcHJpbmcoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSByZXNvbHZlU3ByaW5nKHQpO1xuICAgICAgICAgICAgdmFyIHZlbG9jaXR5ID0gcmVzb2x2ZVZlbG9jaXR5KHQpICogMTAwMDtcbiAgICAgICAgICAgIHZhciBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgPSBNYXRoLmFicyh2ZWxvY2l0eSkgPD0gcmVzdFNwZWVkO1xuICAgICAgICAgICAgdmFyIGlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQgPSBNYXRoLmFicyh0byAtIGN1cnJlbnQpIDw9IHJlc3REZWx0YTtcbiAgICAgICAgICAgIHN0YXRlLmRvbmUgPSBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgJiYgaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZDtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gc3RhdGUuZG9uZSA/IHRvIDogY3VycmVudDtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZmxpcFRhcmdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmVsb2NpdHkgPSAtdmVsb2NpdHk7XG4gICAgICAgICAgICBfYSA9IFt0bywgZnJvbV0sIGZyb20gPSBfYVswXSwgdG8gPSBfYVsxXTtcbiAgICAgICAgICAgIGNyZWF0ZVNwcmluZygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbnNwcmluZy5uZWVkc0ludGVycG9sYXRpb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIjtcbn07XG52YXIgemVybyA9IGZ1bmN0aW9uIChfdCkge1xuICAgIHJldHVybiAwO1xufTtcblxudmFyIHByb2dyZXNzID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICAgIHZhciB0b0Zyb21EaWZmZXJlbmNlID0gdG8gLSBmcm9tO1xuICAgIHJldHVybiB0b0Zyb21EaWZmZXJlbmNlID09PSAwID8gMSA6ICh2YWx1ZSAtIGZyb20pIC8gdG9Gcm9tRGlmZmVyZW5jZTtcbn07XG5cbnZhciBtaXggPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbnZhciBtaXhMaW5lYXJDb2xvciA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdikge1xuICAgIHZhciBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICAgIHZhciB0b0V4cG8gPSB0byAqIHRvO1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5tYXgoMCwgdiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbykpO1xufTtcbnZhciBjb2xvclR5cGVzID0gW2hleCwgcmdiYSwgaHNsYV07XG52YXIgZ2V0Q29sb3JUeXBlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gY29sb3JUeXBlcy5maW5kKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlLnRlc3Qodik7XG4gICAgfSk7XG59O1xudmFyIG5vdEFuaW1hdGFibGUgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICByZXR1cm4gXCInXCIgKyBjb2xvciArIFwiJyBpcyBub3QgYW4gYW5pbWF0YWJsZSBjb2xvci4gVXNlIHRoZSBlcXVpdmFsZW50IGNvbG9yIGNvZGUgaW5zdGVhZC5cIjtcbn07XG52YXIgbWl4Q29sb3IgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgZnJvbUNvbG9yVHlwZSA9IGdldENvbG9yVHlwZShmcm9tKTtcbiAgICB2YXIgdG9Db2xvclR5cGUgPSBnZXRDb2xvclR5cGUodG8pO1xuICAgIGludmFyaWFudCghIWZyb21Db2xvclR5cGUsIG5vdEFuaW1hdGFibGUoZnJvbSkpO1xuICAgIGludmFyaWFudCghIXRvQ29sb3JUeXBlLCBub3RBbmltYXRhYmxlKHRvKSk7XG4gICAgaW52YXJpYW50KGZyb21Db2xvclR5cGUudHJhbnNmb3JtID09PSB0b0NvbG9yVHlwZS50cmFuc2Zvcm0sICdCb3RoIGNvbG9ycyBtdXN0IGJlIGhleC9SR0JBLCBPUiBib3RoIG11c3QgYmUgSFNMQS4nKTtcbiAgICB2YXIgZnJvbUNvbG9yID0gZnJvbUNvbG9yVHlwZS5wYXJzZShmcm9tKTtcbiAgICB2YXIgdG9Db2xvciA9IHRvQ29sb3JUeXBlLnBhcnNlKHRvKTtcbiAgICB2YXIgYmxlbmRlZCA9IF9fYXNzaWduKHt9LCBmcm9tQ29sb3IpO1xuICAgIHZhciBtaXhGdW5jID0gZnJvbUNvbG9yVHlwZSA9PT0gaHNsYSA/IG1peCA6IG1peExpbmVhckNvbG9yO1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2FscGhhJykge1xuICAgICAgICAgICAgICAgIGJsZW5kZWRba2V5XSA9IG1peEZ1bmMoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmxlbmRlZC5hbHBoYSA9IG1peChmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgICAgICByZXR1cm4gZnJvbUNvbG9yVHlwZS50cmFuc2Zvcm0oYmxlbmRlZCk7XG4gICAgfTtcbn07XG5cbnZhciB6ZXJvUG9pbnQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG52YXIgaXNOdW0gPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcic7XG59O1xuXG52YXIgY29tYmluZUZ1bmN0aW9ucyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBiKGEodikpO1xuICAgIH07XG59O1xudmFyIHBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVycyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRyYW5zZm9ybWVyc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmb3JtZXJzLnJlZHVjZShjb21iaW5lRnVuY3Rpb25zKTtcbn07XG5cbmZ1bmN0aW9uIGdldE1peGVyKG9yaWdpbiwgdGFyZ2V0KSB7XG4gICAgaWYgKGlzTnVtKG9yaWdpbikpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gbWl4KG9yaWdpbiwgdGFyZ2V0LCB2KTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGNvbG9yLnRlc3Qob3JpZ2luKSkge1xuICAgICAgICByZXR1cm4gbWl4Q29sb3Iob3JpZ2luLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtaXhDb21wbGV4KG9yaWdpbiwgdGFyZ2V0KTtcbiAgICB9XG59XG52YXIgbWl4QXJyYXkgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgb3V0cHV0ID0gX19zcHJlYWRBcnJheXMoZnJvbSk7XG4gICAgdmFyIG51bVZhbHVlcyA9IG91dHB1dC5sZW5ndGg7XG4gICAgdmFyIGJsZW5kVmFsdWUgPSBmcm9tLm1hcChmdW5jdGlvbiAoZnJvbVRoaXMsIGkpIHtcbiAgICAgICAgcmV0dXJuIGdldE1peGVyKGZyb21UaGlzLCB0b1tpXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dFtpXSA9IGJsZW5kVmFsdWVbaV0odik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufTtcbnZhciBtaXhPYmplY3QgPSBmdW5jdGlvbiAob3JpZ2luLCB0YXJnZXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9yaWdpbiksIHRhcmdldCk7XG4gICAgdmFyIGJsZW5kVmFsdWUgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb3V0cHV0KSB7XG4gICAgICAgIGlmIChvcmlnaW5ba2V5XSAhPT0gdW5kZWZpbmVkICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJsZW5kVmFsdWVba2V5XSA9IGdldE1peGVyKG9yaWdpbltrZXldLCB0YXJnZXRba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBibGVuZFZhbHVlKSB7XG4gICAgICAgICAgICBvdXRwdXRba2V5XSA9IGJsZW5kVmFsdWVba2V5XSh2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59O1xuZnVuY3Rpb24gYW5hbHlzZSh2YWx1ZSkge1xuICAgIHZhciBwYXJzZWQgPSBjb21wbGV4LnBhcnNlKHZhbHVlKTtcbiAgICB2YXIgbnVtVmFsdWVzID0gcGFyc2VkLmxlbmd0aDtcbiAgICB2YXIgbnVtTnVtYmVycyA9IDA7XG4gICAgdmFyIG51bVJHQiA9IDA7XG4gICAgdmFyIG51bUhTTCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAobnVtTnVtYmVycyB8fCB0eXBlb2YgcGFyc2VkW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbnVtTnVtYmVycysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhcnNlZFtpXS5odWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG51bUhTTCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBudW1SR0IrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBwYXJzZWQ6IHBhcnNlZCwgbnVtTnVtYmVyczogbnVtTnVtYmVycywgbnVtUkdCOiBudW1SR0IsIG51bUhTTDogbnVtSFNMIH07XG59XG52YXIgbWl4Q29tcGxleCA9IGZ1bmN0aW9uIChvcmlnaW4sIHRhcmdldCkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IGNvbXBsZXguY3JlYXRlVHJhbnNmb3JtZXIodGFyZ2V0KTtcbiAgICB2YXIgb3JpZ2luU3RhdHMgPSBhbmFseXNlKG9yaWdpbik7XG4gICAgdmFyIHRhcmdldFN0YXRzID0gYW5hbHlzZSh0YXJnZXQpO1xuICAgIGludmFyaWFudChvcmlnaW5TdGF0cy5udW1IU0wgPT09IHRhcmdldFN0YXRzLm51bUhTTCAmJiBvcmlnaW5TdGF0cy5udW1SR0IgPT09IHRhcmdldFN0YXRzLm51bVJHQiAmJiBvcmlnaW5TdGF0cy5udW1OdW1iZXJzID49IHRhcmdldFN0YXRzLm51bU51bWJlcnMsIFwiQ29tcGxleCB2YWx1ZXMgJ1wiICsgb3JpZ2luICsgXCInIGFuZCAnXCIgKyB0YXJnZXQgKyBcIicgdG9vIGRpZmZlcmVudCB0byBtaXguIEVuc3VyZSBhbGwgY29sb3JzIGFyZSBvZiB0aGUgc2FtZSB0eXBlLlwiKTtcbiAgICByZXR1cm4gcGlwZShtaXhBcnJheShvcmlnaW5TdGF0cy5wYXJzZWQsIHRhcmdldFN0YXRzLnBhcnNlZCksIHRlbXBsYXRlKTtcbn07XG5cbnZhciBjbGFtcCA9IGZ1bmN0aW9uIChtaW4sIG1heCwgdikge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2LCBtaW4pLCBtYXgpO1xufTtcblxudmFyIG1peE51bWJlciA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gbWl4KGZyb20sIHRvLCBwKTtcbiAgICB9O1xufTtcbmZ1bmN0aW9uIGRldGVjdE1peGVyRmFjdG9yeSh2KSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbWl4TnVtYmVyO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChjb2xvci50ZXN0KHYpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWl4Q29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWl4Q29tcGxleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICByZXR1cm4gbWl4QXJyYXk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG1peE9iamVjdDtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVNaXhlcnMob3V0cHV0LCBlYXNlLCBjdXN0b21NaXhlcikge1xuICAgIHZhciBtaXhlcnMgPSBbXTtcbiAgICB2YXIgbWl4ZXJGYWN0b3J5ID0gY3VzdG9tTWl4ZXIgfHwgZGV0ZWN0TWl4ZXJGYWN0b3J5KG91dHB1dFswXSk7XG4gICAgdmFyIG51bU1peGVycyA9IG91dHB1dC5sZW5ndGggLSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtTWl4ZXJzOyBpKyspIHtcbiAgICAgICAgdmFyIG1peGVyID0gbWl4ZXJGYWN0b3J5KG91dHB1dFtpXSwgb3V0cHV0W2kgKyAxXSk7XG4gICAgICAgIGlmIChlYXNlKSB7XG4gICAgICAgICAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBBcnJheS5pc0FycmF5KGVhc2UpID8gZWFzZVtpXSA6IGVhc2U7XG4gICAgICAgICAgICBtaXhlciA9IHBpcGUoZWFzaW5nRnVuY3Rpb24sIG1peGVyKTtcbiAgICAgICAgfVxuICAgICAgICBtaXhlcnMucHVzaChtaXhlcik7XG4gICAgfVxuICAgIHJldHVybiBtaXhlcnM7XG59XG5mdW5jdGlvbiBmYXN0SW50ZXJwb2xhdGUoX2EsIF9iKSB7XG4gICAgdmFyIGZyb20gPSBfYVswXSxcbiAgICAgICAgdG8gPSBfYVsxXTtcbiAgICB2YXIgbWl4ZXIgPSBfYlswXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIG1peGVyKHByb2dyZXNzKGZyb20sIHRvLCB2KSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsb3dJbnRlcnBvbGF0ZShpbnB1dCwgbWl4ZXJzKSB7XG4gICAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHZhciBsYXN0SW5wdXRJbmRleCA9IGlucHV0TGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIG1peGVySW5kZXggPSAwO1xuICAgICAgICB2YXIgZm91bmRNaXhlckluZGV4ID0gZmFsc2U7XG4gICAgICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICAgICAgICBmb3VuZE1peGVySW5kZXggPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHYgPj0gaW5wdXRbbGFzdElucHV0SW5kZXhdKSB7XG4gICAgICAgICAgICBtaXhlckluZGV4ID0gbGFzdElucHV0SW5kZXggLSAxO1xuICAgICAgICAgICAgZm91bmRNaXhlckluZGV4ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvdW5kTWl4ZXJJbmRleCkge1xuICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBpbnB1dExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBsYXN0SW5wdXRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaXhlckluZGV4ID0gaSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9IHByb2dyZXNzKGlucHV0W21peGVySW5kZXhdLCBpbnB1dFttaXhlckluZGV4ICsgMV0sIHYpO1xuICAgICAgICByZXR1cm4gbWl4ZXJzW21peGVySW5kZXhdKHByb2dyZXNzSW5SYW5nZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlKGlucHV0LCBvdXRwdXQsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsXG4gICAgICAgIF9jID0gX2IuY2xhbXAsXG4gICAgICAgIGlzQ2xhbXAgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLFxuICAgICAgICBlYXNlID0gX2IuZWFzZSxcbiAgICAgICAgbWl4ZXIgPSBfYi5taXhlcjtcbiAgICB2YXIgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgaW52YXJpYW50KGlucHV0TGVuZ3RoID09PSBvdXRwdXQubGVuZ3RoLCAnQm90aCBpbnB1dCBhbmQgb3V0cHV0IHJhbmdlcyBtdXN0IGJlIHRoZSBzYW1lIGxlbmd0aCcpO1xuICAgIGludmFyaWFudCghZWFzZSB8fCAhQXJyYXkuaXNBcnJheShlYXNlKSB8fCBlYXNlLmxlbmd0aCA9PT0gaW5wdXRMZW5ndGggLSAxLCAnQXJyYXkgb2YgZWFzaW5nIGZ1bmN0aW9ucyBtdXN0IGJlIG9mIGxlbmd0aCBgaW5wdXQubGVuZ3RoIC0gMWAsIGFzIGl0IGFwcGxpZXMgdG8gdGhlIHRyYW5zaXRpb25zICoqYmV0d2VlbioqIHRoZSBkZWZpbmVkIHZhbHVlcy4nKTtcbiAgICBpZiAoaW5wdXRbMF0gPiBpbnB1dFtpbnB1dExlbmd0aCAtIDFdKSB7XG4gICAgICAgIGlucHV0ID0gW10uY29uY2F0KGlucHV0KTtcbiAgICAgICAgb3V0cHV0ID0gW10uY29uY2F0KG91dHB1dCk7XG4gICAgICAgIGlucHV0LnJldmVyc2UoKTtcbiAgICAgICAgb3V0cHV0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgdmFyIG1peGVycyA9IGNyZWF0ZU1peGVycyhvdXRwdXQsIGVhc2UsIG1peGVyKTtcbiAgICB2YXIgaW50ZXJwb2xhdG9yID0gaW5wdXRMZW5ndGggPT09IDIgPyBmYXN0SW50ZXJwb2xhdGUoaW5wdXQsIG1peGVycykgOiBzbG93SW50ZXJwb2xhdGUoaW5wdXQsIG1peGVycyk7XG4gICAgcmV0dXJuIGlzQ2xhbXAgPyBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yKGNsYW1wKGlucHV0WzBdLCBpbnB1dFtpbnB1dExlbmd0aCAtIDFdLCB2KSk7XG4gICAgfSA6IGludGVycG9sYXRvcjtcbn1cblxudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgICB9O1xufTtcbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBwIDw9IDAuNSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlRXhwb0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlQmFja0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBwICogcCAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlQW50aWNpcGF0ZSA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgICB9O1xufTtcblxudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG52YXIgQk9VTkNFX0ZJUlNUX1RIUkVTSE9MRCA9IDQuMCAvIDExLjA7XG52YXIgQk9VTkNFX1NFQ09ORF9USFJFU0hPTEQgPSA4LjAgLyAxMS4wO1xudmFyIEJPVU5DRV9USElSRF9USFJFU0hPTEQgPSA5LjAgLyAxMC4wO1xudmFyIGxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHA7XG59O1xudmFyIGVhc2VJbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVFeHBvSW4oMik7XG52YXIgZWFzZU91dCA9IC8qI19fUFVSRV9fKi9yZXZlcnNlRWFzaW5nKGVhc2VJbik7XG52YXIgZWFzZUluT3V0ID0gLyojX19QVVJFX18qL21pcnJvckVhc2luZyhlYXNlSW4pO1xudmFyIGNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gLyojX19QVVJFX18qL3JldmVyc2VFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSAvKiNfX1BVUkVfXyovbWlycm9yRWFzaW5nKGNpcmNPdXQpO1xudmFyIGJhY2tJbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSAvKiNfX1BVUkVfXyovcmV2ZXJzZUVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IC8qI19fUFVSRV9fKi9taXJyb3JFYXNpbmcoYmFja0luKTtcbnZhciBhbnRpY2lwYXRlID0gLyojX19QVVJFX18qL2NyZWF0ZUFudGljaXBhdGUoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGNhID0gNDM1Ni4wIC8gMzYxLjA7XG52YXIgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wO1xudmFyIGNjID0gMTYwNjEuMCAvIDE4MDUuMDtcbnZhciBib3VuY2VPdXQgPSBmdW5jdGlvbiAocCkge1xuICAgIGlmIChwID09PSAxIHx8IHAgPT09IDApIHJldHVybiBwO1xuICAgIHZhciBwMiA9IHAgKiBwO1xuICAgIHJldHVybiBwIDwgQk9VTkNFX0ZJUlNUX1RIUkVTSE9MRCA/IDcuNTYyNSAqIHAyIDogcCA8IEJPVU5DRV9TRUNPTkRfVEhSRVNIT0xEID8gOS4wNzUgKiBwMiAtIDkuOSAqIHAgKyAzLjQgOiBwIDwgQk9VTkNFX1RISVJEX1RIUkVTSE9MRCA/IGNhICogcDIgLSBjYiAqIHAgKyBjYyA6IDEwLjggKiBwICogcCAtIDIwLjUyICogcCArIDEwLjcyO1xufTtcbnZhciBib3VuY2VJbiA9IC8qI19fUFVSRV9fKi9yZXZlcnNlRWFzaW5nKGJvdW5jZU91dCk7XG52YXIgYm91bmNlSW5PdXQgPSBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgMC41ID8gMC41ICogKDEuMCAtIGJvdW5jZU91dCgxLjAgLSBwICogMi4wKSkgOiAwLjUgKiBib3VuY2VPdXQocCAqIDIuMCAtIDEuMCkgKyAwLjU7XG59O1xuXG5mdW5jdGlvbiBkZWZhdWx0RWFzaW5nKHZhbHVlcywgZWFzaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWFzaW5nIHx8IGVhc2VJbk91dDtcbiAgICB9KS5zcGxpY2UoMCwgdmFsdWVzLmxlbmd0aCAtIDEpO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9mZnNldCh2YWx1ZXMpIHtcbiAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWVzLmxlbmd0aDtcbiAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAoX3ZhbHVlLCBpKSB7XG4gICAgICAgIHJldHVybiBpICE9PSAwID8gaSAvIChudW1WYWx1ZXMgLSAxKSA6IDA7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0VG9UaW1lcyhvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIG9mZnNldC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIG8gKiBkdXJhdGlvbjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGtleWZyYW1lcyhfYSkge1xuICAgIHZhciBfYiA9IF9hLmZyb20sXG4gICAgICAgIGZyb20gPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLFxuICAgICAgICBfYyA9IF9hLnRvLFxuICAgICAgICB0byA9IF9jID09PSB2b2lkIDAgPyAxIDogX2MsXG4gICAgICAgIGVhc2UgPSBfYS5lYXNlLFxuICAgICAgICBvZmZzZXQgPSBfYS5vZmZzZXQsXG4gICAgICAgIF9kID0gX2EuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uID0gX2QgPT09IHZvaWQgMCA/IDMwMCA6IF9kO1xuICAgIHZhciBzdGF0ZSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiBmcm9tIH07XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5LmlzQXJyYXkodG8pID8gdG8gOiBbZnJvbSwgdG9dO1xuICAgIHZhciB0aW1lcyA9IGNvbnZlcnRPZmZzZXRUb1RpbWVzKG9mZnNldCAhPT0gbnVsbCAmJiBvZmZzZXQgIT09IHZvaWQgMCA/IG9mZnNldCA6IGRlZmF1bHRPZmZzZXQodmFsdWVzKSwgZHVyYXRpb24pO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUludGVycG9sYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlKHRpbWVzLCB2YWx1ZXMsIHtcbiAgICAgICAgICAgIGVhc2U6IEFycmF5LmlzQXJyYXkoZWFzZSkgPyBlYXNlIDogZGVmYXVsdEVhc2luZyh2YWx1ZXMsIGVhc2UpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgaW50ZXJwb2xhdG9yID0gY3JlYXRlSW50ZXJwb2xhdG9yKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gaW50ZXJwb2xhdG9yKHQpO1xuICAgICAgICAgICAgc3RhdGUuZG9uZSA9IHQgPj0gZHVyYXRpb247XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIGZsaXBUYXJnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbHVlcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICBpbnRlcnBvbGF0b3IgPSBjcmVhdGVJbnRlcnBvbGF0b3IoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRlY2F5KF9hKSB7XG4gICAgdmFyIF9iID0gX2EudmVsb2NpdHksXG4gICAgICAgIHZlbG9jaXR5ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYixcbiAgICAgICAgX2MgPSBfYS5mcm9tLFxuICAgICAgICBmcm9tID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYyxcbiAgICAgICAgX2QgPSBfYS5wb3dlcixcbiAgICAgICAgcG93ZXIgPSBfZCA9PT0gdm9pZCAwID8gMC44IDogX2QsXG4gICAgICAgIF9lID0gX2EudGltZUNvbnN0YW50LFxuICAgICAgICB0aW1lQ29uc3RhbnQgPSBfZSA9PT0gdm9pZCAwID8gMzUwIDogX2UsXG4gICAgICAgIF9mID0gX2EucmVzdERlbHRhLFxuICAgICAgICByZXN0RGVsdGEgPSBfZiA9PT0gdm9pZCAwID8gMC41IDogX2YsXG4gICAgICAgIG1vZGlmeVRhcmdldCA9IF9hLm1vZGlmeVRhcmdldDtcbiAgICB2YXIgc3RhdGUgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZnJvbSB9O1xuICAgIHZhciBhbXBsaXR1ZGUgPSBwb3dlciAqIHZlbG9jaXR5O1xuICAgIHZhciBpZGVhbCA9IGZyb20gKyBhbXBsaXR1ZGU7XG4gICAgdmFyIHRhcmdldCA9IG1vZGlmeVRhcmdldCA9PT0gdW5kZWZpbmVkID8gaWRlYWwgOiBtb2RpZnlUYXJnZXQoaWRlYWwpO1xuICAgIGlmICh0YXJnZXQgIT09IGlkZWFsKSBhbXBsaXR1ZGUgPSB0YXJnZXQgLSBmcm9tO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZGVsdGEgPSAtYW1wbGl0dWRlICogTWF0aC5leHAoLXQgLyB0aW1lQ29uc3RhbnQpO1xuICAgICAgICAgICAgc3RhdGUuZG9uZSA9ICEoZGVsdGEgPiByZXN0RGVsdGEgfHwgZGVsdGEgPCAtcmVzdERlbHRhKTtcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gc3RhdGUuZG9uZSA/IHRhcmdldCA6IHRhcmdldCArIGRlbHRhO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBmbGlwVGFyZ2V0OiBmdW5jdGlvbiAoKSB7fVxuICAgIH07XG59XG5cbnZhciB0eXBlcyA9IHsga2V5ZnJhbWVzOiBrZXlmcmFtZXMsIHNwcmluZzogc3ByaW5nLCBkZWNheTogZGVjYXkgfTtcbmZ1bmN0aW9uIGRldGVjdEFuaW1hdGlvbkZyb21PcHRpb25zKGNvbmZpZykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy50bykpIHtcbiAgICAgICAgcmV0dXJuIGtleWZyYW1lcztcbiAgICB9IGVsc2UgaWYgKHR5cGVzW2NvbmZpZy50eXBlXSkge1xuICAgICAgICByZXR1cm4gdHlwZXNbY29uZmlnLnR5cGVdO1xuICAgIH1cbiAgICB2YXIga2V5cyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoY29uZmlnKSk7XG4gICAgaWYgKGtleXMuaGFzKFwiZWFzZVwiKSB8fCBrZXlzLmhhcyhcImR1cmF0aW9uXCIpKSB7XG4gICAgICAgIHJldHVybiBrZXlmcmFtZXM7XG4gICAgfSBlbHNlIGlmIChrZXlzLmhhcyhcInN0aWZmbmVzc1wiKSB8fCBrZXlzLmhhcyhcIm1hc3NcIikgfHwga2V5cy5oYXMoXCJkYW1waW5nXCIpIHx8IGtleXMuaGFzKFwicmVzdFNwZWVkXCIpIHx8IGtleXMuaGFzKFwicmVzdERlbHRhXCIpKSB7XG4gICAgICAgIHJldHVybiBzcHJpbmc7XG4gICAgfVxuICAgIHJldHVybiBrZXlmcmFtZXM7XG59XG5cbmZ1bmN0aW9uIGxvb3BFbGFwc2VkKGVsYXBzZWQsIGR1cmF0aW9uLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGVsYXBzZWQgLSBkdXJhdGlvbiAtIGRlbGF5O1xufVxuZnVuY3Rpb24gcmV2ZXJzZUVsYXBzZWQoZWxhcHNlZCwgZHVyYXRpb24sIGRlbGF5LCBpc0ZvcndhcmRQbGF5YmFjaykge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgaWYgKGlzRm9yd2FyZFBsYXliYWNrID09PSB2b2lkIDApIHtcbiAgICAgICAgaXNGb3J3YXJkUGxheWJhY2sgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaXNGb3J3YXJkUGxheWJhY2sgPyBsb29wRWxhcHNlZChkdXJhdGlvbiArIC1lbGFwc2VkLCBkdXJhdGlvbiwgZGVsYXkpIDogZHVyYXRpb24gLSAoZWxhcHNlZCAtIGR1cmF0aW9uKSArIGRlbGF5O1xufVxuZnVuY3Rpb24gaGFzUmVwZWF0RGVsYXlFbGFwc2VkKGVsYXBzZWQsIGR1cmF0aW9uLCBkZWxheSwgaXNGb3J3YXJkUGxheWJhY2spIHtcbiAgICByZXR1cm4gaXNGb3J3YXJkUGxheWJhY2sgPyBlbGFwc2VkID49IGR1cmF0aW9uICsgZGVsYXkgOiBlbGFwc2VkIDw9IC1kZWxheTtcbn1cblxudmFyIGZyYW1lc3luYyA9IGZ1bmN0aW9uICh1cGRhdGUpIHtcbiAgICB2YXIgcGFzc1RpbWVzdGFtcCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZGVsdGEgPSBfYS5kZWx0YTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZShkZWx0YSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN5bmMudXBkYXRlKHBhc3NUaW1lc3RhbXAsIHRydWUsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FuY2VsU3luYy51cGRhdGUocGFzc1RpbWVzdGFtcCk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmZ1bmN0aW9uIGFuaW1hdGUoX2EpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHZhciBmcm9tID0gX2EuZnJvbSxcbiAgICAgICAgX2QgPSBfYS5hdXRvcGxheSxcbiAgICAgICAgYXV0b3BsYXkgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLFxuICAgICAgICBfZSA9IF9hLmRyaXZlcixcbiAgICAgICAgZHJpdmVyID0gX2UgPT09IHZvaWQgMCA/IGZyYW1lc3luYyA6IF9lLFxuICAgICAgICBfZiA9IF9hLmVsYXBzZWQsXG4gICAgICAgIGVsYXBzZWQgPSBfZiA9PT0gdm9pZCAwID8gMCA6IF9mLFxuICAgICAgICBfZyA9IF9hLnJlcGVhdCxcbiAgICAgICAgcmVwZWF0TWF4ID0gX2cgPT09IHZvaWQgMCA/IDAgOiBfZyxcbiAgICAgICAgX2ggPSBfYS5yZXBlYXRUeXBlLFxuICAgICAgICByZXBlYXRUeXBlID0gX2ggPT09IHZvaWQgMCA/IFwibG9vcFwiIDogX2gsXG4gICAgICAgIF9qID0gX2EucmVwZWF0RGVsYXksXG4gICAgICAgIHJlcGVhdERlbGF5ID0gX2ogPT09IHZvaWQgMCA/IDAgOiBfaixcbiAgICAgICAgb25QbGF5ID0gX2Eub25QbGF5LFxuICAgICAgICBvblN0b3AgPSBfYS5vblN0b3AsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfYS5vbkNvbXBsZXRlLFxuICAgICAgICBvblJlcGVhdCA9IF9hLm9uUmVwZWF0LFxuICAgICAgICBvblVwZGF0ZSA9IF9hLm9uVXBkYXRlLFxuICAgICAgICBvcHRpb25zID0gX19yZXN0KF9hLCBbXCJmcm9tXCIsIFwiYXV0b3BsYXlcIiwgXCJkcml2ZXJcIiwgXCJlbGFwc2VkXCIsIFwicmVwZWF0XCIsIFwicmVwZWF0VHlwZVwiLCBcInJlcGVhdERlbGF5XCIsIFwib25QbGF5XCIsIFwib25TdG9wXCIsIFwib25Db21wbGV0ZVwiLCBcIm9uUmVwZWF0XCIsIFwib25VcGRhdGVcIl0pO1xuICAgIHZhciB0byA9IG9wdGlvbnMudG87XG4gICAgdmFyIGRyaXZlckNvbnRyb2xzO1xuICAgIHZhciByZXBlYXRDb3VudCA9IDA7XG4gICAgdmFyIGNvbXB1dGVkRHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgIHZhciBsYXRlc3Q7XG4gICAgdmFyIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB2YXIgaXNGb3J3YXJkUGxheWJhY2sgPSB0cnVlO1xuICAgIHZhciBpbnRlcnBvbGF0ZUZyb21OdW1iZXI7XG4gICAgdmFyIGFuaW1hdG9yID0gZGV0ZWN0QW5pbWF0aW9uRnJvbU9wdGlvbnMob3B0aW9ucyk7XG4gICAgaWYgKChfYyA9IChfYiA9IGFuaW1hdG9yKS5uZWVkc0ludGVycG9sYXRpb24pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKF9iLCBmcm9tLCB0bykpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVGcm9tTnVtYmVyID0gaW50ZXJwb2xhdGUoWzAsIDEwMF0sIFtmcm9tLCB0b10sIHtcbiAgICAgICAgICAgIGNsYW1wOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgZnJvbSA9IDA7XG4gICAgICAgIHRvID0gMTAwO1xuICAgIH1cbiAgICB2YXIgYW5pbWF0aW9uID0gYW5pbWF0b3IoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGZyb206IGZyb20sIHRvOiB0byB9KSk7XG4gICAgZnVuY3Rpb24gcmVwZWF0KCkge1xuICAgICAgICByZXBlYXRDb3VudCsrO1xuICAgICAgICBpZiAocmVwZWF0VHlwZSA9PT0gXCJyZXZlcnNlXCIpIHtcbiAgICAgICAgICAgIGlzRm9yd2FyZFBsYXliYWNrID0gcmVwZWF0Q291bnQgJSAyID09PSAwO1xuICAgICAgICAgICAgZWxhcHNlZCA9IHJldmVyc2VFbGFwc2VkKGVsYXBzZWQsIGNvbXB1dGVkRHVyYXRpb24sIHJlcGVhdERlbGF5LCBpc0ZvcndhcmRQbGF5YmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGFwc2VkID0gbG9vcEVsYXBzZWQoZWxhcHNlZCwgY29tcHV0ZWREdXJhdGlvbiwgcmVwZWF0RGVsYXkpO1xuICAgICAgICAgICAgaWYgKHJlcGVhdFR5cGUgPT09IFwibWlycm9yXCIpIGFuaW1hdGlvbi5mbGlwVGFyZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBvblJlcGVhdCAmJiBvblJlcGVhdCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgZHJpdmVyQ29udHJvbHMuc3RvcCgpO1xuICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGRlbHRhKSB7XG4gICAgICAgIGlmICghaXNGb3J3YXJkUGxheWJhY2spIGRlbHRhID0gLWRlbHRhO1xuICAgICAgICBlbGFwc2VkICs9IGRlbHRhO1xuICAgICAgICBpZiAoIWlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGFuaW1hdGlvbi5uZXh0KE1hdGgubWF4KDAsIGVsYXBzZWQpKTtcbiAgICAgICAgICAgIGxhdGVzdCA9IHN0YXRlLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGludGVycG9sYXRlRnJvbU51bWJlcikgbGF0ZXN0ID0gaW50ZXJwb2xhdGVGcm9tTnVtYmVyKGxhdGVzdCk7XG4gICAgICAgICAgICBpc0NvbXBsZXRlID0gaXNGb3J3YXJkUGxheWJhY2sgPyBzdGF0ZS5kb25lIDogZWxhcHNlZCA8PSAwO1xuICAgICAgICB9XG4gICAgICAgIG9uVXBkYXRlID09PSBudWxsIHx8IG9uVXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblVwZGF0ZShsYXRlc3QpO1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgaWYgKHJlcGVhdENvdW50ID09PSAwKSBjb21wdXRlZER1cmF0aW9uICE9PSBudWxsICYmIGNvbXB1dGVkRHVyYXRpb24gIT09IHZvaWQgMCA/IGNvbXB1dGVkRHVyYXRpb24gOiBjb21wdXRlZER1cmF0aW9uID0gZWxhcHNlZDtcbiAgICAgICAgICAgIGlmIChyZXBlYXRDb3VudCA8IHJlcGVhdE1heCkge1xuICAgICAgICAgICAgICAgIGhhc1JlcGVhdERlbGF5RWxhcHNlZChlbGFwc2VkLCBjb21wdXRlZER1cmF0aW9uLCByZXBlYXREZWxheSwgaXNGb3J3YXJkUGxheWJhY2spICYmIHJlcGVhdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgIG9uUGxheSA9PT0gbnVsbCB8fCBvblBsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUGxheSgpO1xuICAgICAgICBkcml2ZXJDb250cm9scyA9IGRyaXZlcih1cGRhdGUpO1xuICAgICAgICBkcml2ZXJDb250cm9scy5zdGFydCgpO1xuICAgIH1cbiAgICBhdXRvcGxheSAmJiBwbGF5KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb25TdG9wID09PSBudWxsIHx8IG9uU3RvcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25TdG9wKCk7XG4gICAgICAgICAgICBkcml2ZXJDb250cm9scy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiB2ZWxvY2l0eVBlclNlY29uZCh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiBmcmFtZUR1cmF0aW9uID8gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn1cblxuZnVuY3Rpb24gaW5lcnRpYShfYSkge1xuICAgIHZhciBfYiA9IF9hLmZyb20sXG4gICAgICAgIGZyb20gPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLFxuICAgICAgICBfYyA9IF9hLnZlbG9jaXR5LFxuICAgICAgICB2ZWxvY2l0eSA9IF9jID09PSB2b2lkIDAgPyAwIDogX2MsXG4gICAgICAgIG1pbiA9IF9hLm1pbixcbiAgICAgICAgbWF4ID0gX2EubWF4LFxuICAgICAgICBfZCA9IF9hLnBvd2VyLFxuICAgICAgICBwb3dlciA9IF9kID09PSB2b2lkIDAgPyAwLjggOiBfZCxcbiAgICAgICAgX2UgPSBfYS50aW1lQ29uc3RhbnQsXG4gICAgICAgIHRpbWVDb25zdGFudCA9IF9lID09PSB2b2lkIDAgPyA3NTAgOiBfZSxcbiAgICAgICAgX2YgPSBfYS5ib3VuY2VTdGlmZm5lc3MsXG4gICAgICAgIGJvdW5jZVN0aWZmbmVzcyA9IF9mID09PSB2b2lkIDAgPyA1MDAgOiBfZixcbiAgICAgICAgX2cgPSBfYS5ib3VuY2VEYW1waW5nLFxuICAgICAgICBib3VuY2VEYW1waW5nID0gX2cgPT09IHZvaWQgMCA/IDEwIDogX2csXG4gICAgICAgIF9oID0gX2EucmVzdERlbHRhLFxuICAgICAgICByZXN0RGVsdGEgPSBfaCA9PT0gdm9pZCAwID8gMSA6IF9oLFxuICAgICAgICBtb2RpZnlUYXJnZXQgPSBfYS5tb2RpZnlUYXJnZXQsXG4gICAgICAgIGRyaXZlciA9IF9hLmRyaXZlcixcbiAgICAgICAgb25VcGRhdGUgPSBfYS5vblVwZGF0ZSxcbiAgICAgICAgb25Db21wbGV0ZSA9IF9hLm9uQ29tcGxldGU7XG4gICAgdmFyIGN1cnJlbnRBbmltYXRpb247XG4gICAgZnVuY3Rpb24gaXNPdXRPZkJvdW5kcyh2KSB7XG4gICAgICAgIHJldHVybiBtaW4gIT09IHVuZGVmaW5lZCAmJiB2IDwgbWluIHx8IG1heCAhPT0gdW5kZWZpbmVkICYmIHYgPiBtYXg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJvdW5kYXJ5TmVhcmVzdCh2KSB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG1heDtcbiAgICAgICAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbWluO1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMobWluIC0gdikgPCBNYXRoLmFicyhtYXggLSB2KSA/IG1pbiA6IG1heDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24ob3B0aW9ucykge1xuICAgICAgICBjdXJyZW50QW5pbWF0aW9uID09PSBudWxsIHx8IGN1cnJlbnRBbmltYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRBbmltYXRpb24uc3RvcCgpO1xuICAgICAgICBjdXJyZW50QW5pbWF0aW9uID0gYW5pbWF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZHJpdmVyOiBkcml2ZXIsIG9uVXBkYXRlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBvblVwZGF0ZSA9PT0gbnVsbCB8fCBvblVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25VcGRhdGUodik7XG4gICAgICAgICAgICAgICAgKF9hID0gb3B0aW9ucy5vblVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwob3B0aW9ucywgdik7XG4gICAgICAgICAgICB9LCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnRTcHJpbmcob3B0aW9ucykge1xuICAgICAgICBzdGFydEFuaW1hdGlvbihfX2Fzc2lnbih7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogYm91bmNlU3RpZmZuZXNzLCBkYW1waW5nOiBib3VuY2VEYW1waW5nLCByZXN0RGVsdGE6IHJlc3REZWx0YSB9LCBvcHRpb25zKSk7XG4gICAgfVxuICAgIGlmIChpc091dE9mQm91bmRzKGZyb20pKSB7XG4gICAgICAgIHN0YXJ0U3ByaW5nKHsgZnJvbTogZnJvbSwgdmVsb2NpdHk6IHZlbG9jaXR5LCB0bzogYm91bmRhcnlOZWFyZXN0KGZyb20pIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBwb3dlciAqIHZlbG9jaXR5ICsgZnJvbTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2RpZnlUYXJnZXQgIT09IFwidW5kZWZpbmVkXCIpIHRhcmdldCA9IG1vZGlmeVRhcmdldCh0YXJnZXQpO1xuICAgICAgICB2YXIgYm91bmRhcnlfMSA9IGJvdW5kYXJ5TmVhcmVzdCh0YXJnZXQpO1xuICAgICAgICB2YXIgaGVhZGluZ18xID0gYm91bmRhcnlfMSA9PT0gbWluID8gLTEgOiAxO1xuICAgICAgICB2YXIgcHJldl8xO1xuICAgICAgICB2YXIgY3VycmVudF8xO1xuICAgICAgICB2YXIgY2hlY2tCb3VuZGFyeSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBwcmV2XzEgPSBjdXJyZW50XzE7XG4gICAgICAgICAgICBjdXJyZW50XzEgPSB2O1xuICAgICAgICAgICAgdmVsb2NpdHkgPSB2ZWxvY2l0eVBlclNlY29uZCh2IC0gcHJldl8xLCBnZXRGcmFtZURhdGEoKS5kZWx0YSk7XG4gICAgICAgICAgICBpZiAoaGVhZGluZ18xID09PSAxICYmIHYgPiBib3VuZGFyeV8xIHx8IGhlYWRpbmdfMSA9PT0gLTEgJiYgdiA8IGJvdW5kYXJ5XzEpIHtcbiAgICAgICAgICAgICAgICBzdGFydFNwcmluZyh7IGZyb206IHYsIHRvOiBib3VuZGFyeV8xLCB2ZWxvY2l0eTogdmVsb2NpdHkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uKHtcbiAgICAgICAgICAgIHR5cGU6IFwiZGVjYXlcIixcbiAgICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgICB2ZWxvY2l0eTogdmVsb2NpdHksXG4gICAgICAgICAgICB0aW1lQ29uc3RhbnQ6IHRpbWVDb25zdGFudCxcbiAgICAgICAgICAgIHBvd2VyOiBwb3dlcixcbiAgICAgICAgICAgIHJlc3REZWx0YTogcmVzdERlbHRhLFxuICAgICAgICAgICAgbW9kaWZ5VGFyZ2V0OiBtb2RpZnlUYXJnZXQsXG4gICAgICAgICAgICBvblVwZGF0ZTogaXNPdXRPZkJvdW5kcyh0YXJnZXQpID8gY2hlY2tCb3VuZGFyeSA6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRBbmltYXRpb24gPT09IG51bGwgfHwgY3VycmVudEFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxudmFyIGFuZ2xlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGIgPSB6ZXJvUG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYi55IC0gYS55LCBiLnggLSBhLngpKTtcbn07XG5cbnZhciBhcHBseU9mZnNldCA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgIHZhciBoYXNSZWNlaXZlZEZyb20gPSB0cnVlO1xuICAgIGlmICh0byA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgICAgaGFzUmVjZWl2ZWRGcm9tID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAoaGFzUmVjZWl2ZWRGcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdiAtIGZyb20gKyB0bztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb20gPSB2O1xuICAgICAgICAgICAgaGFzUmVjZWl2ZWRGcm9tID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2O1xufTtcbnZhciBjcmVhdGVBdHRyYWN0b3IgPSBmdW5jdGlvbiAoYWx0ZXJEaXNwbGFjZW1lbnQpIHtcbiAgICBpZiAoYWx0ZXJEaXNwbGFjZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgICBhbHRlckRpc3BsYWNlbWVudCA9IGlkZW50aXR5O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0YW50LCBvcmlnaW4sIHYpIHtcbiAgICAgICAgdmFyIGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gICAgICAgIHZhciBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA9IC0oMCAtIGNvbnN0YW50ICsgMSkgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgICAgICAgcmV0dXJuIGRpc3BsYWNlbWVudCA8PSAwID8gb3JpZ2luICsgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgOiBvcmlnaW4gLSBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudDtcbiAgICB9O1xufTtcbnZhciBhdHRyYWN0ID0gLyojX19QVVJFX18qL2NyZWF0ZUF0dHJhY3RvcigpO1xudmFyIGF0dHJhY3RFeHBvID0gLyojX19QVVJFX18qL2NyZWF0ZUF0dHJhY3RvcihNYXRoLnNxcnQpO1xuXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxudmFyIGlzUG9pbnQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gcG9pbnQuaGFzT3duUHJvcGVydHkoJ3gnKSAmJiBwb2ludC5oYXNPd25Qcm9wZXJ0eSgneScpO1xufTtcblxudmFyIGlzUG9pbnQzRCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHJldHVybiBpc1BvaW50KHBvaW50KSAmJiBwb2ludC5oYXNPd25Qcm9wZXJ0eSgneicpO1xufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIGlmIChpc051bShhKSAmJiBpc051bShiKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcbiAgICB9IGVsc2UgaWYgKGlzUG9pbnQoYSkgJiYgaXNQb2ludChiKSkge1xuICAgICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgdmFyIHpEZWx0YSA9IGlzUG9pbnQzRChhKSAmJiBpc1BvaW50M0QoYikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgICB9XG59XG5cbnZhciBwb2ludEZyb21WZWN0b3IgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0sIHByZWNpc2lvbikge1xuICAgIGlmIChwcmVjaXNpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBwcmVjaXNpb24gPSAyO1xuICAgIH1cbiAgICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcblxudmFyIHNtb290aEZyYW1lID0gZnVuY3Rpb24gKHByZXZWYWx1ZSwgbmV4dFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nKSB7XG4gICAgaWYgKHNtb290aGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNtb290aGluZyA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0b0RlY2ltYWwocHJldlZhbHVlICsgZHVyYXRpb24gKiAobmV4dFZhbHVlIC0gcHJldlZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbnZhciBzbW9vdGggPSBmdW5jdGlvbiAoc3RyZW5ndGgpIHtcbiAgICBpZiAoc3RyZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgICBzdHJlbmd0aCA9IDUwO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IDA7XG4gICAgdmFyIGxhc3RVcGRhdGVkID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gZ2V0RnJhbWVEYXRhKCkudGltZXN0YW1wO1xuICAgICAgICB2YXIgdGltZURlbHRhID0gY3VycmVudEZyYW1lc3RhbXAgIT09IGxhc3RVcGRhdGVkID8gY3VycmVudEZyYW1lc3RhbXAgLSBsYXN0VXBkYXRlZCA6IDA7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRpbWVEZWx0YSA/IHNtb290aEZyYW1lKHByZXZpb3VzVmFsdWUsIHYsIHRpbWVEZWx0YSwgc3RyZW5ndGgpIDogcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgbGFzdFVwZGF0ZWQgPSBjdXJyZW50RnJhbWVzdGFtcDtcbiAgICAgICAgcHJldmlvdXNWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcbn07XG5cbnZhciBzbmFwID0gZnVuY3Rpb24gKHBvaW50cykge1xuICAgIGlmICh0eXBlb2YgcG9pbnRzID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHYgLyBwb2ludHMpICogcG9pbnRzO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpXzEgPSAwO1xuICAgICAgICB2YXIgbnVtUG9pbnRzXzEgPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHZhciBsYXN0RGlzdGFuY2UgPSBNYXRoLmFicyhwb2ludHNbMF0gLSB2KTtcbiAgICAgICAgICAgIGZvciAoaV8xID0gMTsgaV8xIDwgbnVtUG9pbnRzXzE7IGlfMSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2lfMV07XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMocG9pbnQgLSB2KTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDApIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiBsYXN0RGlzdGFuY2UpIHJldHVybiBwb2ludHNbaV8xIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKGlfMSA9PT0gbnVtUG9pbnRzXzEgLSAxKSByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICAgICAgbGFzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZnVuY3Rpb24gdmVsb2NpdHlQZXJGcmFtZSh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn1cblxudmFyIHdyYXAgPSBmdW5jdGlvbiAobWluLCBtYXgsIHYpIHtcbiAgICB2YXIgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICAgIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbn07XG5cbnZhciBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xufTtcbnZhciBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xufTtcbnZhciBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgcmV0dXJuIDMuMCAqIGExO1xufTtcbnZhciBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG59O1xudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn07XG52YXIgc3ViZGl2aXNpb25QcmVjaXNpb24gPSAwLjAwMDAwMDE7XG52YXIgc3ViZGl2aXNpb25NYXhJdGVyYXRpb25zID0gMTA7XG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgICB2YXIgY3VycmVudFg7XG4gICAgdmFyIGN1cnJlbnRUO1xuICAgIHZhciBpID0gMDtcbiAgICBkbyB7XG4gICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgIH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBzdWJkaXZpc2lvblByZWNpc2lvbiAmJiArK2kgPCBzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMpO1xuICAgIHJldHVybiBjdXJyZW50VDtcbn1cbnZhciBuZXd0b25JdGVyYXRpb25zID0gODtcbnZhciBuZXd0b25NaW5TbG9wZSA9IDAuMDAxO1xuZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXd0b25JdGVyYXRpb25zOyArK2kpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgIH1cbiAgICByZXR1cm4gYUd1ZXNzVDtcbn1cbnZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG52YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSByZXR1cm4gbGluZWFyO1xuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IG5ld3Rvbk1pblNsb3BlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCA9PT0gMCB8fCB0ID09PSAxID8gdCA6IGNhbGNCZXppZXIoZ2V0VEZvclgodCksIG1ZMSwgbVkyKTtcbiAgICB9O1xufVxuXG52YXIgc3RlcHMgPSBmdW5jdGlvbiAoc3RlcHMsIGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnZW5kJztcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICBwcm9ncmVzcyA9IGRpcmVjdGlvbiA9PT0gJ2VuZCcgPyBNYXRoLm1pbihwcm9ncmVzcywgMC45OTkpIDogTWF0aC5tYXgocHJvZ3Jlc3MsIDAuMDAxKTtcbiAgICAgICAgdmFyIGV4cGFuZGVkID0gcHJvZ3Jlc3MgKiBzdGVwcztcbiAgICAgICAgdmFyIHJvdW5kZWQgPSBkaXJlY3Rpb24gPT09ICdlbmQnID8gTWF0aC5mbG9vcihleHBhbmRlZCkgOiBNYXRoLmNlaWwoZXhwYW5kZWQpO1xuICAgICAgICByZXR1cm4gY2xhbXAoMCwgMSwgcm91bmRlZCAvIHN0ZXBzKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgYW5nbGUsIGFuaW1hdGUsIGFudGljaXBhdGUsIGFwcGx5T2Zmc2V0LCBhdHRyYWN0LCBhdHRyYWN0RXhwbywgYmFja0luLCBiYWNrSW5PdXQsIGJhY2tPdXQsIGJvdW5jZUluLCBib3VuY2VJbk91dCwgYm91bmNlT3V0LCBjaXJjSW4sIGNpcmNJbk91dCwgY2lyY091dCwgY2xhbXAsIGNyZWF0ZUFudGljaXBhdGUsIGNyZWF0ZUF0dHJhY3RvciwgY3JlYXRlQmFja0luLCBjcmVhdGVFeHBvSW4sIGN1YmljQmV6aWVyLCBkZWNheSwgZGVncmVlc1RvUmFkaWFucywgZGlzdGFuY2UsIGVhc2VJbiwgZWFzZUluT3V0LCBlYXNlT3V0LCBpbmVydGlhLCBpbnRlcnBvbGF0ZSwgaXNQb2ludCwgaXNQb2ludDNELCBrZXlmcmFtZXMsIGxpbmVhciwgbWlycm9yRWFzaW5nLCBtaXgsIG1peENvbG9yLCBtaXhDb21wbGV4LCBwaXBlLCBwb2ludEZyb21WZWN0b3IsIHByb2dyZXNzLCByYWRpYW5zVG9EZWdyZWVzLCByZXZlcnNlRWFzaW5nLCBzbW9vdGgsIHNtb290aEZyYW1lLCBzbmFwLCBzcHJpbmcsIHN0ZXBzLCB0b0RlY2ltYWwsIHZlbG9jaXR5UGVyRnJhbWUsIHZlbG9jaXR5UGVyU2Vjb25kLCB3cmFwIH07XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcblxudmFyIGNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7IHJldHVybiBmdW5jdGlvbiAodikge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHYsIG1heCksIG1pbik7XHJcbn07IH07XHJcbnZhciBzYW5pdGl6ZSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiAodiAlIDEgPyBOdW1iZXIodi50b0ZpeGVkKDUpKSA6IHYpOyB9O1xyXG52YXIgZmxvYXRSZWdleCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcclxudmFyIGNvbG9yUmVnZXggPSAvKCNbMC05YS1mXXs2fXwjWzAtOWEtZl17M318Iyg/OlswLTlhLWZdezJ9KXsyLDR9fChyZ2J8aHNsKWE/XFwoKC0/W1xcZFxcLl0rJT9bLFxcc10rKXsyLDN9XFxzKlxcLypcXHMqW1xcZFxcLl0rJT9cXCkpL2dpO1xyXG52YXIgc2luZ2xlQ29sb3JSZWdleCA9IC9eKCNbMC05YS1mXXszfXwjKD86WzAtOWEtZl17Mn0pezIsNH18KHJnYnxoc2wpYT9cXCgoLT9bXFxkXFwuXSslP1ssXFxzXSspezIsM31cXHMqXFwvKlxccypbXFxkXFwuXSslP1xcKSkkL2k7XG5cbnZhciBudW1iZXIgPSB7XHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInOyB9LFxyXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2OyB9XHJcbn07XHJcbnZhciBhbHBoYSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBudW1iZXIpLCB7IHRyYW5zZm9ybTogY2xhbXAoMCwgMSkgfSk7XHJcbnZhciBzY2FsZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBudW1iZXIpLCB7IGRlZmF1bHQ6IDEgfSk7XG5cbnZhciBjcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uICh1bml0KSB7IHJldHVybiAoe1xyXG4gICAgdGVzdDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHYuZW5kc1dpdGgodW5pdCkgJiYgdi5zcGxpdCgnICcpLmxlbmd0aCA9PT0gMTtcclxuICAgIH0sXHJcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFwiXCIgKyB2ICsgdW5pdDsgfVxyXG59KTsgfTtcclxudmFyIGRlZ3JlZXMgPSBjcmVhdGVVbml0VHlwZSgnZGVnJyk7XHJcbnZhciBwZXJjZW50ID0gY3JlYXRlVW5pdFR5cGUoJyUnKTtcclxudmFyIHB4ID0gY3JlYXRlVW5pdFR5cGUoJ3B4Jyk7XHJcbnZhciB2aCA9IGNyZWF0ZVVuaXRUeXBlKCd2aCcpO1xyXG52YXIgdncgPSBjcmVhdGVVbml0VHlwZSgndncnKTtcclxudmFyIHByb2dyZXNzUGVyY2VudGFnZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwZXJjZW50KSwgeyBwYXJzZTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHBlcmNlbnQucGFyc2UodikgLyAxMDA7IH0sIHRyYW5zZm9ybTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHBlcmNlbnQudHJhbnNmb3JtKHYgKiAxMDApOyB9IH0pO1xuXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XHJcbn07XHJcbnZhciBjbGFtcFJnYlVuaXQgPSBjbGFtcCgwLCAyNTUpO1xyXG52YXIgaXNSZ2JhID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYucmVkICE9PSB1bmRlZmluZWQ7IH07XHJcbnZhciBpc0hzbGEgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdi5odWUgIT09IHVuZGVmaW5lZDsgfTtcclxuZnVuY3Rpb24gZ2V0VmFsdWVzQXNBcnJheSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKVxyXG4gICAgICAgIC5yZXBsYWNlKC8oLHxcXC8pL2csICcgJylcclxuICAgICAgICAuc3BsaXQoLyBcXHMqLyk7XHJcbn1cclxudmFyIHNwbGl0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodGVybXMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcclxuICAgICAgICB2YXIgdmFsdWVzQXJyYXkgPSBnZXRWYWx1ZXNBc0FycmF5KHYpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlc1t0ZXJtc1tpXV0gPVxyXG4gICAgICAgICAgICAgICAgdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH07XHJcbn07XHJcbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciByZWQgPSBfYS5yZWQsIGdyZWVuID0gX2EuZ3JlZW4sIGJsdWUgPSBfYS5ibHVlLCBfYiA9IF9hLmFscGhhLCBhbHBoYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmVkICsgXCIsIFwiICsgZ3JlZW4gKyBcIiwgXCIgKyBibHVlICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcclxufTtcclxudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGh1ZSA9IF9hLmh1ZSwgc2F0dXJhdGlvbiA9IF9hLnNhdHVyYXRpb24sIGxpZ2h0bmVzcyA9IF9hLmxpZ2h0bmVzcywgX2IgPSBfYS5hbHBoYSwgYWxwaGEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xyXG4gICAgcmV0dXJuIFwiaHNsYShcIiArIGh1ZSArIFwiLCBcIiArIHNhdHVyYXRpb24gKyBcIiwgXCIgKyBsaWdodG5lc3MgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG59O1xyXG52YXIgcmdiVW5pdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBudW1iZXIpLCB7IHRyYW5zZm9ybTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIE1hdGgucm91bmQoY2xhbXBSZ2JVbml0KHYpKTsgfSB9KTtcclxuZnVuY3Rpb24gaXNDb2xvclN0cmluZyhjb2xvciwgY29sb3JUeXBlKSB7XHJcbiAgICByZXR1cm4gY29sb3Iuc3RhcnRzV2l0aChjb2xvclR5cGUpICYmIHNpbmdsZUNvbG9yUmVnZXgudGVzdChjb2xvcik7XHJcbn1cclxudmFyIHJnYmEgPSB7XHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IGlzQ29sb3JTdHJpbmcodiwgJ3JnYicpIDogaXNSZ2JhKHYpKTsgfSxcclxuICAgIHBhcnNlOiBzcGxpdENvbG9yVmFsdWVzKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSksXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciByZWQgPSBfYS5yZWQsIGdyZWVuID0gX2EuZ3JlZW4sIGJsdWUgPSBfYS5ibHVlLCBfYiA9IF9hLmFscGhhLCBhbHBoYSQxID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcclxuICAgICAgICByZXR1cm4gcmdiYVRlbXBsYXRlKHtcclxuICAgICAgICAgICAgcmVkOiByZ2JVbml0LnRyYW5zZm9ybShyZWQpLFxyXG4gICAgICAgICAgICBncmVlbjogcmdiVW5pdC50cmFuc2Zvcm0oZ3JlZW4pLFxyXG4gICAgICAgICAgICBibHVlOiByZ2JVbml0LnRyYW5zZm9ybShibHVlKSxcclxuICAgICAgICAgICAgYWxwaGE6IHNhbml0aXplKGFscGhhLnRyYW5zZm9ybShhbHBoYSQxKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxudmFyIGhzbGEgPSB7XHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IGlzQ29sb3JTdHJpbmcodiwgJ2hzbCcpIDogaXNIc2xhKHYpKTsgfSxcclxuICAgIHBhcnNlOiBzcGxpdENvbG9yVmFsdWVzKFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJywgJ2FscGhhJ10pLFxyXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgaHVlID0gX2EuaHVlLCBzYXR1cmF0aW9uID0gX2Euc2F0dXJhdGlvbiwgbGlnaHRuZXNzID0gX2EubGlnaHRuZXNzLCBfYiA9IF9hLmFscGhhLCBhbHBoYSQxID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcclxuICAgICAgICByZXR1cm4gaHNsYVRlbXBsYXRlKHtcclxuICAgICAgICAgICAgaHVlOiBNYXRoLnJvdW5kKGh1ZSksXHJcbiAgICAgICAgICAgIHNhdHVyYXRpb246IHBlcmNlbnQudHJhbnNmb3JtKHNhbml0aXplKHNhdHVyYXRpb24pKSxcclxuICAgICAgICAgICAgbGlnaHRuZXNzOiBwZXJjZW50LnRyYW5zZm9ybShzYW5pdGl6ZShsaWdodG5lc3MpKSxcclxuICAgICAgICAgICAgYWxwaGE6IHNhbml0aXplKGFscGhhLnRyYW5zZm9ybShhbHBoYSQxKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxudmFyIGhleCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZ2JhKSwgeyB0ZXN0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIGlzQ29sb3JTdHJpbmcodiwgJyMnKTsgfSwgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIHIgPSAnJztcclxuICAgICAgICB2YXIgZyA9ICcnO1xyXG4gICAgICAgIHZhciBiID0gJyc7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICByID0gdi5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcclxuICAgICAgICAgICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgciA9IHYuc3Vic3RyKDEsIDEpO1xyXG4gICAgICAgICAgICBnID0gdi5zdWJzdHIoMiwgMSk7XHJcbiAgICAgICAgICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcclxuICAgICAgICAgICAgciArPSByO1xyXG4gICAgICAgICAgICBnICs9IGc7XHJcbiAgICAgICAgICAgIGIgKz0gYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkOiBwYXJzZUludChyLCAxNiksXHJcbiAgICAgICAgICAgIGdyZWVuOiBwYXJzZUludChnLCAxNiksXHJcbiAgICAgICAgICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcclxuICAgICAgICAgICAgYWxwaGE6IDFcclxuICAgICAgICB9O1xyXG4gICAgfSB9KTtcclxudmFyIGNvbG9yID0ge1xyXG4gICAgdGVzdDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiBzaW5nbGVDb2xvclJlZ2V4LnRlc3QodikpIHx8XHJcbiAgICAgICAgICAgIGlzUmdiYSh2KSB8fFxyXG4gICAgICAgICAgICBpc0hzbGEodik7XHJcbiAgICB9LFxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHJnYmEudGVzdCh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmdiYS5wYXJzZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaHNsYS50ZXN0KHYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoc2xhLnBhcnNlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChoZXgudGVzdCh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGV4LnBhcnNlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH0sXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKGlzUmdiYSh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmdiYS50cmFuc2Zvcm0odik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzSHNsYSh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaHNsYS50cmFuc2Zvcm0odik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfVxyXG59O1xuXG52YXIgQ09MT1JfVE9LRU4gPSAnJHtjfSc7XHJcbnZhciBOVU1CRVJfVE9LRU4gPSAnJHtufSc7XHJcbnZhciBjb252ZXJ0TnVtYmVyc1RvWmVybyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInID8gMCA6IHY7XHJcbn07XHJcbnZhciBjb21wbGV4ID0ge1xyXG4gICAgdGVzdDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnIHx8ICFpc05hTih2KSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBudW1WYWx1ZXMgPSAwO1xyXG4gICAgICAgIHZhciBmb3VuZE51bWJlcnMgPSB2Lm1hdGNoKGZsb2F0UmVnZXgpO1xyXG4gICAgICAgIHZhciBmb3VuZENvbG9ycyA9IHYubWF0Y2goY29sb3JSZWdleCk7XHJcbiAgICAgICAgaWYgKGZvdW5kTnVtYmVycylcclxuICAgICAgICAgICAgbnVtVmFsdWVzICs9IGZvdW5kTnVtYmVycy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGZvdW5kQ29sb3JzKVxyXG4gICAgICAgICAgICBudW1WYWx1ZXMgKz0gZm91bmRDb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBudW1WYWx1ZXMgPiAwO1xyXG4gICAgfSxcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IHY7XHJcbiAgICAgICAgdmFyIHBhcnNlZCA9IFtdO1xyXG4gICAgICAgIHZhciBmb3VuZENvbG9ycyA9IGlucHV0Lm1hdGNoKGNvbG9yUmVnZXgpO1xyXG4gICAgICAgIGlmIChmb3VuZENvbG9ycykge1xyXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoY29sb3JSZWdleCwgQ09MT1JfVE9LRU4pO1xyXG4gICAgICAgICAgICBwYXJzZWQucHVzaC5hcHBseShwYXJzZWQsIGZvdW5kQ29sb3JzLm1hcChjb2xvci5wYXJzZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZm91bmROdW1iZXJzID0gaW5wdXQubWF0Y2goZmxvYXRSZWdleCk7XHJcbiAgICAgICAgaWYgKGZvdW5kTnVtYmVycykge1xyXG4gICAgICAgICAgICBwYXJzZWQucHVzaC5hcHBseShwYXJzZWQsIGZvdW5kTnVtYmVycy5tYXAobnVtYmVyLnBhcnNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVHJhbnNmb3JtZXI6IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gcHJvcDtcclxuICAgICAgICB2YXIgdG9rZW4gPSAwO1xyXG4gICAgICAgIHZhciBmb3VuZENvbG9ycyA9IHByb3AubWF0Y2goY29sb3JSZWdleCk7XHJcbiAgICAgICAgdmFyIG51bUNvbG9ycyA9IGZvdW5kQ29sb3JzID8gZm91bmRDb2xvcnMubGVuZ3RoIDogMDtcclxuICAgICAgICBpZiAoZm91bmRDb2xvcnMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGZvdW5kQ29sb3JzW2ldLCBDT0xPUl9UT0tFTik7XHJcbiAgICAgICAgICAgICAgICB0b2tlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmb3VuZE51bWJlcnMgPSB0ZW1wbGF0ZS5tYXRjaChmbG9hdFJlZ2V4KTtcclxuICAgICAgICB2YXIgbnVtTnVtYmVycyA9IGZvdW5kTnVtYmVycyA/IGZvdW5kTnVtYmVycy5sZW5ndGggOiAwO1xyXG4gICAgICAgIGlmIChmb3VuZE51bWJlcnMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1OdW1iZXJzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShmb3VuZE51bWJlcnNbaV0sIE5VTUJFUl9UT0tFTik7XHJcbiAgICAgICAgICAgICAgICB0b2tlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGVtcGxhdGU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoaSA8IG51bUNvbG9ycyA/IENPTE9SX1RPS0VOIDogTlVNQkVSX1RPS0VOLCBpIDwgbnVtQ29sb3JzID8gY29sb3IudHJhbnNmb3JtKHZbaV0pIDogc2FuaXRpemUodltpXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBnZXRBbmltYXRhYmxlTm9uZTogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBwYXJzZWRUYXJnZXQgPSBjb21wbGV4LnBhcnNlKHRhcmdldCk7XHJcbiAgICAgICAgdmFyIHRhcmdldFRyYW5zZm9ybWVyID0gY29tcGxleC5jcmVhdGVUcmFuc2Zvcm1lcih0YXJnZXQpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRUcmFuc2Zvcm1lcihwYXJzZWRUYXJnZXQubWFwKGNvbnZlcnROdW1iZXJzVG9aZXJvKSk7XHJcbiAgICB9XHJcbn07XG5cbmV4cG9ydCB7IGFscGhhLCBjb2xvciwgY29tcGxleCwgZGVncmVlcywgaGV4LCBoc2xhLCBudW1iZXIsIHBlcmNlbnQsIHByb2dyZXNzUGVyY2VudGFnZSwgcHgsIHJnYlVuaXQsIHJnYmEsIHNjYWxlLCB2aCwgdncgfTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NyZWF0ZUJpbmRpbmcobywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=