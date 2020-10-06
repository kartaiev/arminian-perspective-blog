webpackHotUpdate_N_E("pages/_app",{

/***/ "./customTheme.js":
/*!************************!*\
  !*** ./customTheme.js ***!
  \************************/
/*! exports provided: bgColor, bgColorReversed, color, colorAlt, colorReversed, borderColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColor", function() { return bgColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColorReversed", function() { return bgColorReversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorAlt", function() { return colorAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorReversed", function() { return colorReversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/icons */ "./lib/icons.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var bgColor = {
  light: "white",
  dark: "gray.800"
};
var bgColorReversed = {
  light: "gray.800",
  dark: "gray.300"
};
var color = {
  light: "gray.700",
  dark: "gray.300"
};
var colorAlt = {
  light: "gray.700",
  dark: "gray.300"
};
var colorReversed = {
  light: "gray.300",
  dark: "gray.700"
};
var borderColor = {
  light: "gray.300",
  dark: "gray.500"
};
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["theme"]), {}, {
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Menlo, monospace"
  },
  icons: _objectSpread(_objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["theme"].icons), _lib_icons__WEBPACK_IMPORTED_MODULE_2__["customIcons"])
}));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3VzdG9tVGhlbWUuanMiXSwibmFtZXMiOlsiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsImJnQ29sb3JSZXZlcnNlZCIsImNvbG9yIiwiY29sb3JBbHQiLCJjb2xvclJldmVyc2VkIiwiYm9yZGVyQ29sb3IiLCJ0aGVtZSIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJtb25vIiwiaWNvbnMiLCJjdXN0b21JY29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHO0FBQUVDLE9BQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFJLEVBQUU7QUFBeEIsQ0FBaEI7QUFDQSxJQUFNQyxlQUFlLEdBQUc7QUFBRUYsT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRTtBQUEzQixDQUF4QjtBQUNBLElBQU1FLEtBQUssR0FBRztBQUFFSCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFO0FBQTNCLENBQWQ7QUFDQSxJQUFNRyxRQUFRLEdBQUc7QUFBRUosT0FBSyxFQUFFLFVBQVQ7QUFBcUJDLE1BQUksRUFBRTtBQUEzQixDQUFqQjtBQUNBLElBQU1JLGFBQWEsR0FBRztBQUFFTCxPQUFLLEVBQUUsVUFBVDtBQUFxQkMsTUFBSSxFQUFFO0FBQTNCLENBQXRCO0FBQ0EsSUFBTUssV0FBVyxHQUFHO0FBQUVOLE9BQUssRUFBRSxVQUFUO0FBQXFCQyxNQUFJLEVBQUU7QUFBM0IsQ0FBcEI7QUFFUSwrRkFDVk0scURBREw7QUFFRUMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxtQkFERDtBQUVMQyxXQUFPLEVBQUUsbUJBRko7QUFHTEMsUUFBSSxFQUFFO0FBSEQsR0FGVDtBQU9FQyxPQUFLLGtDQUNBTCxxREFBSyxDQUFDSyxLQUROLEdBRUFDLHNEQUZBO0FBUFAiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZWU3NjU3NmI5YmY4MDg2NDEwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBjdXN0b21JY29ucyB9IGZyb20gXCIuL2xpYi9pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgYmdDb2xvciA9IHsgbGlnaHQ6IFwid2hpdGVcIiwgZGFyazogXCJncmF5LjgwMFwiIH07XG5leHBvcnQgY29uc3QgYmdDb2xvclJldmVyc2VkID0geyBsaWdodDogXCJncmF5LjgwMFwiLCBkYXJrOiBcImdyYXkuMzAwXCIgfTtcbmV4cG9ydCBjb25zdCBjb2xvciA9IHsgbGlnaHQ6IFwiZ3JheS43MDBcIiwgZGFyazogXCJncmF5LjMwMFwiIH07XG5leHBvcnQgY29uc3QgY29sb3JBbHQgPSB7IGxpZ2h0OiBcImdyYXkuNzAwXCIsIGRhcms6IFwiZ3JheS4zMDBcIiB9O1xuZXhwb3J0IGNvbnN0IGNvbG9yUmV2ZXJzZWQgPSB7IGxpZ2h0OiBcImdyYXkuMzAwXCIsIGRhcms6IFwiZ3JheS43MDBcIiB9O1xuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG9yID0geyBsaWdodDogXCJncmF5LjMwMFwiLCBkYXJrOiBcImdyYXkuNTAwXCIgfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi50aGVtZSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBcIkludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgaGVhZGluZzogXCJJbnRlciwgc2Fucy1zZXJpZlwiLFxuICAgIG1vbm86IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxuICB9LFxuICBpY29uczoge1xuICAgIC4uLnRoZW1lLmljb25zLFxuICAgIC4uLmN1c3RvbUljb25zLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=