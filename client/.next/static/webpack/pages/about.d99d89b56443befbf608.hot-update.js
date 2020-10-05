webpackHotUpdate_N_E("pages/about",{

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var components_layout_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/Nav */ "./components/layout/Nav.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/icons */ "./lib/icons.js");
/* harmony import */ var _shared_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/vars */ "./lib/vars.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchInput */ "./components/layout/SearchInput.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _chakra_ui_core_dist_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core/dist/Icon */ "./node_modules/@chakra-ui/core/dist/es/Icon/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Header = function Header() {
  _s();

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__["useToggle"])(),
      isThemeChanged = _useToggle.isToggled,
      changeTheme = _useToggle.toggle;

  var _useToggle2 = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__["useToggle"])(),
      isSearchInput = _useToggle2.isToggled,
      switchToSearchInput = _useToggle2.toggle;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_8__["useWindowWidth"])();
  var headerTitleClass = isSearchInput && "ml-300px";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_3__["sunIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_3__["moonIcon"],
    toggle: changeTheme,
    isToggled: isThemeChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), width >= 768 ? __jsx("h1", {
    className: "header-title ".concat(headerTitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_5__["MAIN_TITLE"]) : !isSearchInput && __jsx("h1", {
    className: "header-title ".concat(headerTitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_5__["MAIN_TITLE"]), isSearchInput ? __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    switchToSearchInput: switchToSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }) : __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].button, {
    className: "ease",
    whileHover: {
      scale: 1.2
    },
    onClick: switchToSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core_dist_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "search-2",
    size: "24px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }))), __jsx(components_layout_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
};

_s(Header, "ohNhqKoZs1TTaYoMpyIU5dGFQLg=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__["useToggle"], _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_8__["useWindowWidth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVRvZ2dsZSIsImlzVGhlbWVDaGFuZ2VkIiwiaXNUb2dnbGVkIiwiY2hhbmdlVGhlbWUiLCJ0b2dnbGUiLCJpc1NlYXJjaElucHV0Iiwic3dpdGNoVG9TZWFyY2hJbnB1dCIsIndpZHRoIiwidXNlV2luZG93V2lkdGgiLCJoZWFkZXJUaXRsZUNsYXNzIiwic3VuSWNvbiIsIm1vb25JY29uIiwiTUFJTl9USVRMRSIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsbUJBQ3dDQyxrRUFBUyxFQURqRDtBQUFBLE1BQ0FDLGNBREEsY0FDWEMsU0FEVztBQUFBLE1BQ3dCQyxXQUR4QixjQUNnQkMsTUFEaEI7O0FBQUEsb0JBRStDSixrRUFBUyxFQUZ4RDtBQUFBLE1BRUFLLGFBRkEsZUFFWEgsU0FGVztBQUFBLE1BRXVCSSxtQkFGdkIsZUFFZUYsTUFGZjs7QUFHbkIsTUFBTUcsS0FBSyxHQUFHQyw0RUFBYyxFQUE1QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHSixhQUFhLElBQUksVUFBMUM7QUFFQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFFSyxrREFEYjtBQUVFLGNBQVUsRUFBRUMsbURBRmQ7QUFHRSxVQUFNLEVBQUVSLFdBSFY7QUFJRSxhQUFTLEVBQUVGLGNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0dNLEtBQUssSUFBSSxHQUFULEdBQ0M7QUFBSSxhQUFTLHlCQUFrQkUsZ0JBQWxCLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvREcsb0RBQXBELENBREQsR0FHQyxDQUFDUCxhQUFELElBQ0U7QUFBSSxhQUFTLHlCQUFrQkksZ0JBQWxCLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvREcsb0RBQXBELENBWE4sRUFlR1AsYUFBYSxHQUNaLE1BQUMsb0RBQUQ7QUFBYSx1QkFBbUIsRUFBRUMsbUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEWSxHQUdaLE1BQUMsb0RBQUQsQ0FBUSxNQUFSO0FBQ0UsYUFBUyxFQUFDLE1BRFo7QUFFRSxjQUFVLEVBQUU7QUFBRU8sV0FBSyxFQUFFO0FBQVQsS0FGZDtBQUdFLFdBQU8sRUFBRVAsbUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsaUVBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixRQUFJLEVBQUUsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBbEJKLENBREYsRUE0QkUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBREY7QUFnQ0QsQ0F2Q0Q7O0dBQU1QLE07VUFDdURDLDBELEVBQ09BLDBELEVBQ3BEUSxvRTs7O0tBSFZULE07QUF5Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmQ5OWQ4OWI1NjQ0M2JlZmJmNjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2XCI7XG5pbXBvcnQgeyBtb29uSWNvbiwgc2VhcmNoSWNvbiwgc3VuSWNvbiB9IGZyb20gXCIuLi8uLi9saWIvaWNvbnNcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vc2hhcmVkL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBNQUlOX1RJVExFIH0gZnJvbSBcIi4uLy4uL2xpYi92YXJzXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4vU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd1dpZHRoXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvSWNvblwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkOiBpc1RoZW1lQ2hhbmdlZCwgdG9nZ2xlOiBjaGFuZ2VUaGVtZSB9ID0gdXNlVG9nZ2xlKCk7XG4gIGNvbnN0IHsgaXNUb2dnbGVkOiBpc1NlYXJjaElucHV0LCB0b2dnbGU6IHN3aXRjaFRvU2VhcmNoSW5wdXQgfSA9IHVzZVRvZ2dsZSgpO1xuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGVDbGFzcyA9IGlzU2VhcmNoSW5wdXQgJiYgXCJtbC0zMDBweFwiO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e3N1bkljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bW9vbkljb259XG4gICAgICAgICAgdG9nZ2xlPXtjaGFuZ2VUaGVtZX1cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzVGhlbWVDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgICB7d2lkdGggPj0gNzY4ID8gKFxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2BoZWFkZXItdGl0bGUgJHtoZWFkZXJUaXRsZUNsYXNzfWB9PntNQUlOX1RJVExFfTwvaDE+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgIWlzU2VhcmNoSW5wdXQgJiYgKFxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YGhlYWRlci10aXRsZSAke2hlYWRlclRpdGxlQ2xhc3N9YH0+e01BSU5fVElUTEV9PC9oMT5cbiAgICAgICAgICApXG4gICAgICAgICl9XG5cbiAgICAgICAge2lzU2VhcmNoSW5wdXQgPyAoXG4gICAgICAgICAgPFNlYXJjaElucHV0IHN3aXRjaFRvU2VhcmNoSW5wdXQ9e3N3aXRjaFRvU2VhcmNoSW5wdXR9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVhc2VcIlxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hUb1NlYXJjaElucHV0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzZWFyY2gtMlwiIHNpemU9e1wiMjRweFwifSAvPlxuICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPE5hdiAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==