webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/layout/navLinks.js":
/*!***************************************!*\
  !*** ./components/layout/navLinks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_navPages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/navPages */ "./lib/navPages.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\navLinks.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var navLinks = function navLinks() {
  _s();

  var pathName = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().pathname;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  return _lib_navPages__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (_ref) {
    var label = _ref.label,
        path = _ref.path;
    var border = pathName === path ? _customTheme__WEBPACK_IMPORTED_MODULE_5__["borderColor"][colorMode] : "transparent";
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["PseudoBox"], {
      border: "1px",
      borderColor: border,
      as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"],
      key: path,
      className: "link",
      _hover: {
        border: "1px",
        borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_5__["borderColor"][colorMode]
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "border-none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, label)));
  });
};

_s(navLinks, "h0QIUuF0mB4UlsLzsySrGddnARE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useColorMode"]];
});

/* harmony default export */ __webpack_exports__["default"] = (navLinks);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbmF2TGlua3MuanMiXSwibmFtZXMiOlsibmF2TGlua3MiLCJwYXRoTmFtZSIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwibmF2UGFnZXMiLCJtYXAiLCJsYWJlbCIsInBhdGgiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsIkxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLDZEQUFTLEdBQUdDLFFBQTdCOztBQURxQixzQkFHa0JDLG9FQUFZLEVBSDlCO0FBQUEsTUFHYkMsU0FIYSxpQkFHYkEsU0FIYTtBQUFBLE1BR0ZDLGVBSEUsaUJBR0ZBLGVBSEU7O0FBS3JCLFNBQU9DLHFEQUFRLENBQUNDLEdBQVQsQ0FBYSxnQkFBcUI7QUFBQSxRQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsUUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDLFFBQU1DLE1BQU0sR0FBR1YsUUFBUSxLQUFLUyxJQUFiLEdBQW9CRSx3REFBVyxDQUFDUCxTQUFELENBQS9CLEdBQTZDLGFBQTVEO0FBRUEsV0FDRSxNQUFDLHlEQUFEO0FBQ0UsWUFBTSxFQUFDLEtBRFQ7QUFFRSxpQkFBVyxFQUFFTSxNQUZmO0FBR0UsUUFBRSxFQUFFRSx3REFITjtBQUlFLFNBQUcsRUFBRUgsSUFKUDtBQUtFLGVBQVMsRUFBQyxNQUxaO0FBTUUsWUFBTSxFQUFFO0FBQUVDLGNBQU0sRUFBRSxLQUFWO0FBQWlCQyxtQkFBVyxFQUFFQSx3REFBVyxDQUFDUCxTQUFEO0FBQXpDLE9BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVLLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0QkQsS0FBNUIsQ0FERixDQVJGLENBREY7QUFjRCxHQWpCTSxDQUFQO0FBa0JELENBdkJEOztHQUFNVCxRO1VBQ2FFLHFELEVBRXNCRSw0RDs7O0FBc0IxQkosdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uNzlmMDFiYjE1ZmVlYzQ0Yzk2ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYXZQYWdlcyBmcm9tIFwiLi4vLi4vbGliL25hdlBhZ2VzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBQc2V1ZG9Cb3gsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGJvcmRlckNvbG9yIH0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5cbmNvbnN0IG5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBwYXRoTmFtZSA9IHVzZVJvdXRlcigpLnBhdGhuYW1lO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIHJldHVybiBuYXZQYWdlcy5tYXAoKHsgbGFiZWwsIHBhdGggfSkgPT4ge1xuICAgIGNvbnN0IGJvcmRlciA9IHBhdGhOYW1lID09PSBwYXRoID8gYm9yZGVyQ29sb3JbY29sb3JNb2RlXSA6IFwidHJhbnNwYXJlbnRcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8UHNldWRvQm94XG4gICAgICAgIGJvcmRlcj1cIjFweFwiXG4gICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJ9XG4gICAgICAgIGFzPXtMaXN0SXRlbX1cbiAgICAgICAga2V5PXtwYXRofVxuICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcbiAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogXCIxcHhcIiwgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yW2NvbG9yTW9kZV0gfX1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmVcIj57bGFiZWx9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BzZXVkb0JveD5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkxpbmtzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==