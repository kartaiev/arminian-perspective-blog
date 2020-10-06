webpackHotUpdate_N_E("pages/post/[slug]",{

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
    py: "2",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_4__["borderColor"][colorMode],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdiIsInVzZVRvZ2dsZSIsImlzVG9nZ2xlZCIsInRvZ2dsZSIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJuYXZMaW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLG1CQUNjQyxrRUFBUyxFQUR2QjtBQUFBLE1BQ1JDLFNBRFEsY0FDUkEsU0FEUTtBQUFBLE1BQ0dDLE1BREgsY0FDR0EsTUFESDs7QUFBQSxzQkFFTUMsb0VBQVksRUFGbEI7QUFBQSxNQUVSQyxTQUZRLGlCQUVSQSxTQUZROztBQUloQixTQUNFLE1BQUMsZ0VBQUQ7QUFBSyxTQUFLLEVBQUVDLGtEQUFLLENBQUNELFNBQUQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxnQkFBWSxFQUFDLEtBRGY7QUFFRSxlQUFXLEVBQUVFLHdEQUFXLENBQUNGLFNBQUQsQ0FGMUI7QUFHRSxhQUFTLEVBQUMsZUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0cseURBQVEsRUFBOUMsQ0FMRixFQU1FO0FBQVEsV0FBTyxFQUFFTCxNQUFqQjtBQUF5QixhQUFTLEVBQUMsYUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FORixDQURGLEVBV0dELFNBQVMsSUFDUixNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFDLEdBREw7QUFFRSxlQUFXLEVBQUVLLHdEQUFXLENBQUNGLFNBQUQsQ0FGMUI7QUFHRSxhQUFTLEVBQUMsMkJBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHRyx5REFBUSxFQUxYLENBWkosQ0FERjtBQXVCRCxDQTNCRDs7R0FBTVIsRztVQUMwQkMsMEQsRUFDUkcsNEQ7OztLQUZsQkosRztBQTZCU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYWI1MWI0YTA0NDliNzFiYjM1ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBuYXZMaW5rcyBmcm9tIFwiLi9uYXZMaW5rc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCB7IExpc3QsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZCwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX0+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlckJvdHRvbT1cIjFweFwiXG4gICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCJcbiAgICAgID5cbiAgICAgICAgPExpc3QgY2xhc3NOYW1lPVwibmF2LWxpc3QtY29udGFpbmVyXCI+e25hdkxpbmtzKCl9PC9MaXN0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPVwibWVudS1idXR0b25cIj5cbiAgICAgICAgICDQvNC10L3RjlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgICAge2lzVG9nZ2xlZCAmJiAoXG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgcHk9XCIyXCJcbiAgICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlzdC1jb250YWluZXItbW9iaWxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtuYXZMaW5rcygpfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==