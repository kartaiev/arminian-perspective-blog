webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Nav */ "./components/layout/Nav.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons */ "./lib/icons.js");
/* harmony import */ var _shared_IconsBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/vars */ "./lib/vars.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchInput */ "./components/layout/SearchInput.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Header = function Header() {
  _s();

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__["useToggle"])(),
      isThemeChanged = _useToggle.isToggled,
      changeTheme = _useToggle.toggle;

  var _useToggle2 = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__["useToggle"])(),
      isSearchInput = _useToggle2.isToggled,
      switchToSearchInput = _useToggle2.toggle;

  var headerTitleClass = isSearchInput && "ml-300px hidden";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_2__["sunIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_2__["moonIcon"],
    toggle: changeTheme,
    isToggled: isThemeChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: "header-title ".concat(headerTitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_4__["MAIN_TITLE"]), isSearchInput ? __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    switchToSearchInput: switchToSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }) : __jsx("button", {
    onClick: switchToSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_2__["searchIcon"])), __jsx(components_layout_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

_s(Header, "yj/TPsDbVJXNjV8IdM+AlAFNVYc=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__["useToggle"], _hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__["useToggle"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVRvZ2dsZSIsImlzVGhlbWVDaGFuZ2VkIiwiaXNUb2dnbGVkIiwiY2hhbmdlVGhlbWUiLCJ0b2dnbGUiLCJpc1NlYXJjaElucHV0Iiwic3dpdGNoVG9TZWFyY2hJbnB1dCIsImhlYWRlclRpdGxlQ2xhc3MiLCJzdW5JY29uIiwibW9vbkljb24iLCJNQUlOX1RJVExFIiwic2VhcmNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG1CQUN3Q0Msa0VBQVMsRUFEakQ7QUFBQSxNQUNBQyxjQURBLGNBQ1hDLFNBRFc7QUFBQSxNQUN3QkMsV0FEeEIsY0FDZ0JDLE1BRGhCOztBQUFBLG9CQUUrQ0osa0VBQVMsRUFGeEQ7QUFBQSxNQUVBSyxhQUZBLGVBRVhILFNBRlc7QUFBQSxNQUV1QkksbUJBRnZCLGVBRWVGLE1BRmY7O0FBSW5CLE1BQU1HLGdCQUFnQixHQUFHRixhQUFhLElBQUksaUJBQTFDO0FBRUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBRUcsa0RBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsVUFBTSxFQUFFTixXQUhWO0FBSUUsYUFBUyxFQUFFRixjQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FO0FBQUksYUFBUyx5QkFBa0JNLGdCQUFsQixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0RHLG9EQUFwRCxDQVBGLEVBU0dMLGFBQWEsR0FDWixNQUFDLG9EQUFEO0FBQWEsdUJBQW1CLEVBQUVDLG1CQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFksR0FHWjtBQUFRLFdBQU8sRUFBRUEsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNLLHFEQUF2QyxDQVpKLENBREYsRUFnQkUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBREY7QUFvQkQsQ0ExQkQ7O0dBQU1aLE07VUFDdURDLDBELEVBQ09BLDBEOzs7S0FGOURELE07QUE0QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3MDhkYTBkZGE0NmZmOWNmNDNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9OYXZcIjtcbmltcG9ydCB7IG1vb25JY29uLCBzZWFyY2hJY29uLCBzdW5JY29uIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9zaGFyZWQvSWNvbnNCdG5cIjtcbmltcG9ydCB7IE1BSU5fVElUTEUgfSBmcm9tIFwiLi4vLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkOiBpc1RoZW1lQ2hhbmdlZCwgdG9nZ2xlOiBjaGFuZ2VUaGVtZSB9ID0gdXNlVG9nZ2xlKCk7XG4gIGNvbnN0IHsgaXNUb2dnbGVkOiBpc1NlYXJjaElucHV0LCB0b2dnbGU6IHN3aXRjaFRvU2VhcmNoSW5wdXQgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlQ2xhc3MgPSBpc1NlYXJjaElucHV0ICYmIFwibWwtMzAwcHggaGlkZGVuXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17c3VuSWNvbn1cbiAgICAgICAgICBzZWNvbmRJY29uPXttb29uSWNvbn1cbiAgICAgICAgICB0b2dnbGU9e2NoYW5nZVRoZW1lfVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUaGVtZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BoZWFkZXItdGl0bGUgJHtoZWFkZXJUaXRsZUNsYXNzfWB9PntNQUlOX1RJVExFfTwvaDE+XG5cbiAgICAgICAge2lzU2VhcmNoSW5wdXQgPyAoXG4gICAgICAgICAgPFNlYXJjaElucHV0IHN3aXRjaFRvU2VhcmNoSW5wdXQ9e3N3aXRjaFRvU2VhcmNoSW5wdXR9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzd2l0Y2hUb1NlYXJjaElucHV0fT57c2VhcmNoSWNvbn08L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPE5hdiAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==