webpackHotUpdate_N_E("pages/index",{

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
    var linkClass = pathName === path ? "link-active" : "link-inactive";
    var border = pathName === path ? _customTheme__WEBPACK_IMPORTED_MODULE_5__["borderColor"][colorMode] : "transparent";
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["PseudoBox"], {
      border: "1px",
      borderColor: border,
      as: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"],
      key: path,
      className: "link ".concat(linkClass),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbmF2TGlua3MuanMiXSwibmFtZXMiOlsibmF2TGlua3MiLCJwYXRoTmFtZSIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidG9nZ2xlQ29sb3JNb2RlIiwibmF2UGFnZXMiLCJtYXAiLCJsYWJlbCIsInBhdGgiLCJsaW5rQ2xhc3MiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsIkxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxRQUFRLEdBQUdDLDZEQUFTLEdBQUdDLFFBQTdCOztBQURxQixzQkFHa0JDLG9FQUFZLEVBSDlCO0FBQUEsTUFHYkMsU0FIYSxpQkFHYkEsU0FIYTtBQUFBLE1BR0ZDLGVBSEUsaUJBR0ZBLGVBSEU7O0FBS3JCLFNBQU9DLHFEQUFRLENBQUNDLEdBQVQsQ0FBYSxnQkFBcUI7QUFBQSxRQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsUUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR1YsUUFBUSxLQUFLUyxJQUFiLEdBQW9CLGFBQXBCLEdBQW9DLGVBQXREO0FBQ0EsUUFBTUUsTUFBTSxHQUFHWCxRQUFRLEtBQUtTLElBQWIsR0FBb0JHLHdEQUFXLENBQUNSLFNBQUQsQ0FBL0IsR0FBNkMsYUFBNUQ7QUFFQSxXQUNFLE1BQUMseURBQUQ7QUFDRSxZQUFNLEVBQUMsS0FEVDtBQUVFLGlCQUFXLEVBQUVPLE1BRmY7QUFHRSxRQUFFLEVBQUVFLHdEQUhOO0FBSUUsU0FBRyxFQUFFSixJQUpQO0FBS0UsZUFBUyxpQkFBVUMsU0FBVixDQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEJELEtBQTVCLENBREYsQ0FQRixDQURGO0FBYUQsR0FqQk0sQ0FBUDtBQWtCRCxDQXZCRDs7R0FBTVQsUTtVQUNhRSxxRCxFQUVzQkUsNEQ7OztBQXNCMUJKLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4MTdkNDQ1NDM3NzMyY2JlOTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmF2UGFnZXMgZnJvbSBcIi4uLy4uL2xpYi9uYXZQYWdlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSwgUHNldWRvQm94LCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciB9IGZyb20gXCIuLi8uLi9jdXN0b21UaGVtZVwiO1xuXG5jb25zdCBuYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgcGF0aE5hbWUgPSB1c2VSb3V0ZXIoKS5wYXRobmFtZTtcblxuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gbmF2UGFnZXMubWFwKCh7IGxhYmVsLCBwYXRoIH0pID0+IHtcbiAgICBjb25zdCBsaW5rQ2xhc3MgPSBwYXRoTmFtZSA9PT0gcGF0aCA/IFwibGluay1hY3RpdmVcIiA6IFwibGluay1pbmFjdGl2ZVwiO1xuICAgIGNvbnN0IGJvcmRlciA9IHBhdGhOYW1lID09PSBwYXRoID8gYm9yZGVyQ29sb3JbY29sb3JNb2RlXSA6IFwidHJhbnNwYXJlbnRcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8UHNldWRvQm94XG4gICAgICAgIGJvcmRlcj1cIjFweFwiXG4gICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJ9XG4gICAgICAgIGFzPXtMaXN0SXRlbX1cbiAgICAgICAga2V5PXtwYXRofVxuICAgICAgICBjbGFzc05hbWU9e2BsaW5rICR7bGlua0NsYXNzfWB9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJvcmRlci1ub25lXCI+e2xhYmVsfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Qc2V1ZG9Cb3g+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXZMaW5rcztcbiJdLCJzb3VyY2VSb290IjoiIn0=