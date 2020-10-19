webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/header/navLinks.js":
/*!**********************************************!*\
  !*** ./components/layout/header/navLinks.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_navPages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/navPages */ \"./lib/navPages.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../customTheme */ \"./customTheme.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/earth/WebstormProjects/arminian-perspective-blog/client/components/layout/header/navLinks.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar navLinks = function navLinks() {\n  _s();\n\n  var pathName = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])().pathname;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  return _lib_navPages__WEBPACK_IMPORTED_MODULE_1__[\"fullNavPages\"].map(function (_ref) {\n    var label = _ref.label,\n        path = _ref.path;\n    var border = pathName === path ? _customTheme__WEBPACK_IMPORTED_MODULE_5__[\"borderColor\"][colorMode] : \"transparent\";\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"PseudoBox\"], {\n      border: \"1px\",\n      borderColor: border,\n      as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"],\n      key: path,\n      className: \"link\",\n      _hover: {\n        border: \"1px\",\n        borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_5__[\"borderColor\"][colorMode]\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      className: \"border-none\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }\n    }, label)));\n  });\n};\n\n_s(navLinks, \"evPE/DUeGHrr/OgsGwtKVHEcqbM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"useColorMode\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navLinks);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL25hdkxpbmtzLmpzP2Y1MTciXSwibmFtZXMiOlsibmF2TGlua3MiLCJwYXRoTmFtZSIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiZnVsbE5hdlBhZ2VzIiwibWFwIiwibGFiZWwiLCJwYXRoIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJMaXN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLDZEQUFTLEdBQUdDLFFBQTdCOztBQURxQixzQkFHQ0Msb0VBQVksRUFIYjtBQUFBLE1BR2JDLFNBSGEsaUJBR2JBLFNBSGE7O0FBS3JCLFNBQU9DLDBEQUFZLENBQUNDLEdBQWIsQ0FBaUIsZ0JBQXFCO0FBQUEsUUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLFFBQVhDLElBQVcsUUFBWEEsSUFBVztBQUMzQyxRQUFNQyxNQUFNLEdBQUdULFFBQVEsS0FBS1EsSUFBYixHQUFvQkUsd0RBQVcsQ0FBQ04sU0FBRCxDQUEvQixHQUE2QyxhQUE1RDtBQUVBLFdBQ0UsTUFBQyx5REFBRDtBQUNFLFlBQU0sRUFBQyxLQURUO0FBRUUsaUJBQVcsRUFBRUssTUFGZjtBQUdFLFFBQUUsRUFBRUUsd0RBSE47QUFJRSxTQUFHLEVBQUVILElBSlA7QUFLRSxlQUFTLEVBQUMsTUFMWjtBQU1FLFlBQU0sRUFBRTtBQUFFQyxjQUFNLEVBQUUsS0FBVjtBQUFpQkMsbUJBQVcsRUFBRUEsd0RBQVcsQ0FBQ04sU0FBRDtBQUF6QyxPQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFSSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEJELEtBQTVCLENBREYsQ0FSRixDQURGO0FBY0QsR0FqQk0sQ0FBUDtBQWtCRCxDQXZCRDs7R0FBTVIsUTtVQUNhRSxxRCxFQUVLRSw0RDs7O0FBc0JUSix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9uYXZMaW5rcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYXZQYWdlcywgeyBmdWxsTmF2UGFnZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL25hdlBhZ2VzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBQc2V1ZG9Cb3gsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGJvcmRlckNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uL2N1c3RvbVRoZW1lXCI7XG5cbmNvbnN0IG5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBwYXRoTmFtZSA9IHVzZVJvdXRlcigpLnBhdGhuYW1lO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gZnVsbE5hdlBhZ2VzLm1hcCgoeyBsYWJlbCwgcGF0aCB9KSA9PiB7XG4gICAgY29uc3QgYm9yZGVyID0gcGF0aE5hbWUgPT09IHBhdGggPyBib3JkZXJDb2xvcltjb2xvck1vZGVdIDogXCJ0cmFuc3BhcmVudFwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQc2V1ZG9Cb3hcbiAgICAgICAgYm9yZGVyPVwiMXB4XCJcbiAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlcn1cbiAgICAgICAgYXM9e0xpc3RJdGVtfVxuICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgIGNsYXNzTmFtZT1cImxpbmtcIlxuICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiBcIjFweFwiLCBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JbY29sb3JNb2RlXSB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPXtwYXRofT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3JkZXItbm9uZVwiPntsYWJlbH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvUHNldWRvQm94PlxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2TGlua3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/header/navLinks.js\n");

/***/ }),

/***/ "./lib/navPages.js":
/*!*************************!*\
  !*** ./lib/navPages.js ***!
  \*************************/
/*! exports provided: fullNavPages, shortNavPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fullNavPages\", function() { return fullNavPages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortNavPages\", function() { return shortNavPages; });\nvar fullNavPages = [{\n  label: \"статьи\",\n  path: \"/\"\n}, {\n  label: \"утверждение веры\",\n  path: \"/statement\"\n}, {\n  label: \"поддержи проект\",\n  path: \"/give\"\n}, {\n  label: \"о сайте\",\n  path: \"/about\"\n}, {\n  label: \"категории\",\n  path: \"/categories\"\n}];\nvar shortNavPages = [{\n  label: \"статьи\",\n  path: \"/\"\n}, {\n  label: \"утверждение веры\",\n  path: \"/statement\"\n}, {\n  label: \"поддержи проект\",\n  path: \"/give\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL25hdlBhZ2VzLmpzPzJhOWUiXSwibmFtZXMiOlsiZnVsbE5hdlBhZ2VzIiwibGFiZWwiLCJwYXRoIiwic2hvcnROYXZQYWdlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE9BQUssRUFBRSxRQUFUO0FBQW1CQyxNQUFJLEVBQUU7QUFBekIsQ0FEMEIsRUFFMUI7QUFBRUQsT0FBSyxFQUFFLGtCQUFUO0FBQTZCQyxNQUFJLEVBQUU7QUFBbkMsQ0FGMEIsRUFHMUI7QUFBRUQsT0FBSyxFQUFFLGlCQUFUO0FBQTRCQyxNQUFJLEVBQUU7QUFBbEMsQ0FIMEIsRUFJMUI7QUFBRUQsT0FBSyxFQUFFLFNBQVQ7QUFBb0JDLE1BQUksRUFBRTtBQUExQixDQUowQixFQUsxQjtBQUFFRCxPQUFLLEVBQUUsV0FBVDtBQUFzQkMsTUFBSSxFQUFFO0FBQTVCLENBTDBCLENBQXJCO0FBUUEsSUFBTUMsYUFBYSxHQUFHLENBQzNCO0FBQUVGLE9BQUssRUFBRSxRQUFUO0FBQW1CQyxNQUFJLEVBQUU7QUFBekIsQ0FEMkIsRUFFM0I7QUFBRUQsT0FBSyxFQUFFLGtCQUFUO0FBQTZCQyxNQUFJLEVBQUU7QUFBbkMsQ0FGMkIsRUFHM0I7QUFBRUQsT0FBSyxFQUFFLGlCQUFUO0FBQTRCQyxNQUFJLEVBQUU7QUFBbEMsQ0FIMkIsQ0FBdEIiLCJmaWxlIjoiLi9saWIvbmF2UGFnZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZnVsbE5hdlBhZ2VzID0gW1xuICB7IGxhYmVsOiBcItGB0YLQsNGC0YzQuFwiLCBwYXRoOiBcIi9cIiB9LFxuICB7IGxhYmVsOiBcItGD0YLQstC10YDQttC00LXQvdC40LUg0LLQtdGA0YtcIiwgcGF0aDogXCIvc3RhdGVtZW50XCIgfSxcbiAgeyBsYWJlbDogXCLQv9C+0LTQtNC10YDQttC4INC/0YDQvtC10LrRglwiLCBwYXRoOiBcIi9naXZlXCIgfSxcbiAgeyBsYWJlbDogXCLQviDRgdCw0LnRgtC1XCIsIHBhdGg6IFwiL2Fib3V0XCIgfSxcbiAgeyBsYWJlbDogXCLQutCw0YLQtdCz0L7RgNC40LhcIiwgcGF0aDogXCIvY2F0ZWdvcmllc1wiIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2hvcnROYXZQYWdlcyA9IFtcbiAgeyBsYWJlbDogXCLRgdGC0LDRgtGM0LhcIiwgcGF0aDogXCIvXCIgfSxcbiAgeyBsYWJlbDogXCLRg9GC0LLQtdGA0LbQtNC10L3QuNC1INCy0LXRgNGLXCIsIHBhdGg6IFwiL3N0YXRlbWVudFwiIH0sXG4gIHsgbGFiZWw6IFwi0L/QvtC00LTQtdGA0LbQuCDQv9GA0L7QtdC60YJcIiwgcGF0aDogXCIvZ2l2ZVwiIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/navPages.js\n");

/***/ })

})