webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Nav.js":
/*!**********************************!*\
  !*** ./components/layout/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _navLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navLinks */ "./components/layout/navLinks.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\Nav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Nav = function Nav() {
  _s();

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_0__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      toggle = _useToggle.toggle;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  return __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_4__["color"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderBottom: "1px",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_4__["borderColor"][colorMode],
    className: "nav-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["List"], {
    className: "nav-list-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Object(_navLinks__WEBPACK_IMPORTED_MODULE_1__["default"])()), __jsx("button", {
    onClick: toggle,
    className: "menu-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "\u043C\u0435\u043D\u044E")), isToggled && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["List"], {
    className: "nav-list-container-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, Object(_navLinks__WEBPACK_IMPORTED_MODULE_1__["default"])()));
};

_s(Nav, "9AMqtsqqEx6IPfuH2MZWmiEXBOM=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_0__["useToggle"], _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useColorMode"]];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdiIsInVzZVRvZ2dsZSIsImlzVG9nZ2xlZCIsInRvZ2dsZSIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJuYXZMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLG1CQUNjQyxrRUFBUyxFQUR2QjtBQUFBLE1BQ1JDLFNBRFEsY0FDUkEsU0FEUTtBQUFBLE1BQ0dDLE1BREgsY0FDR0EsTUFESDs7QUFBQSxzQkFFTUMsb0VBQVksRUFGbEI7QUFBQSxNQUVSQyxTQUZRLGlCQUVSQSxTQUZROztBQUloQixTQUNFLE1BQUMsZ0VBQUQ7QUFBSyxTQUFLLEVBQUVDLGtEQUFLLENBQUNELFNBQUQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxnQkFBWSxFQUFDLEtBRGY7QUFFRSxlQUFXLEVBQUVFLHdEQUFXLENBQUNGLFNBQUQsQ0FGMUI7QUFHRSxhQUFTLEVBQUMsZUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0cseURBQVEsRUFBOUMsQ0FMRixFQU1FO0FBQVEsV0FBTyxFQUFFTCxNQUFqQjtBQUF5QixhQUFTLEVBQUMsYUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FORixDQURGLEVBV0dELFNBQVMsSUFDUixNQUFDLG9EQUFEO0FBQU0sYUFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDTSx5REFBUSxFQUFyRCxDQVpKLENBREY7QUFpQkQsQ0FyQkQ7O0dBQU1SLEc7VUFDMEJDLDBELEVBQ1JHLDREOzs7S0FGbEJKLEc7QUF1QlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhMDRmNjI1Mzk4YjBlOGMzZDdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgbmF2TGlua3MgZnJvbSBcIi4vbmF2TGlua3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0JveFwiO1xuaW1wb3J0IHsgYm9yZGVyQ29sb3IsIGNvbG9yIH0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgeyBMaXN0LCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHRvZ2dsZSB9ID0gdXNlVG9nZ2xlKCk7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19PlxuICAgICAgPEJveFxuICAgICAgICBib3JkZXJCb3R0b209XCIxcHhcIlxuICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiXG4gICAgICA+XG4gICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cIm5hdi1saXN0LWNvbnRhaW5lclwiPntuYXZMaW5rcygpfTwvTGlzdD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9IGNsYXNzTmFtZT1cIm1lbnUtYnV0dG9uXCI+XG4gICAgICAgICAg0LzQtdC90Y5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIHtpc1RvZ2dsZWQgJiYgKFxuICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJuYXYtbGlzdC1jb250YWluZXItbW9iaWxlXCI+e25hdkxpbmtzKCl9PC9MaXN0PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=