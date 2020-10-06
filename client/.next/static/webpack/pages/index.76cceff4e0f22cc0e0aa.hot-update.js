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
/* harmony import */ var _shared_IconsBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/vars */ "./lib/vars.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchInput */ "./components/layout/SearchInput.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _chakra_ui_core_dist_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/IconButton */ "./node_modules/@chakra-ui/core/dist/es/IconButton/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Header = function Header() {
  _s();

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"])(),
      isThemeChanged = _useToggle.isToggled,
      changeTheme = _useToggle.toggle;

  var _useToggle2 = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"])(),
      isSearchInput = _useToggle2.isToggled,
      switchToSearchInput = _useToggle2.toggle;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  var MotionIconBtn = framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].custom(_chakra_ui_core_dist_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var MotionBox = framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].custom(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_11__["default"]);
  var MotionHeading = framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].custom(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Heading"]);
  var headerTitleClass = isSearchInput && "";

  var switchTheme = function switchTheme() {
    changeTheme();
    toggleColorMode();
    console.log(colorMode);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "header-container",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_10__["color"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    firstIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiSun"],
    secondIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiMoon"],
    toggle: switchTheme,
    isToggled: isThemeChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(MotionHeading, {
    layout: true,
    as: "h1",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_10__["color"][colorMode],
    fontSize: "4xl",
    className: "header-title ".concat(headerTitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_3__["MAIN_TITLE"]), isSearchInput ? __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    switchToSearchInput: switchToSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }) : __jsx(MotionIconBtn, {
    whileHover: {
      scale: 1.2
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    textAlign: "center",
    "aria-label": "Call Sage",
    variant: "unstyled",
    onClick: switchToSearchInput,
    fontSize: "30px",
    icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiSearch"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })), __jsx(components_layout_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }));
};

_s(Header, "UEICIo0IGmfvzePs9DX2omGAdHg=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"], _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"], _chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["useColorMode"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVRvZ2dsZSIsImlzVGhlbWVDaGFuZ2VkIiwiaXNUb2dnbGVkIiwiY2hhbmdlVGhlbWUiLCJ0b2dnbGUiLCJpc1NlYXJjaElucHV0Iiwic3dpdGNoVG9TZWFyY2hJbnB1dCIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsIk1vdGlvbkljb25CdG4iLCJtb3Rpb24iLCJjdXN0b20iLCJJY29uQnV0dG9uIiwiTW90aW9uQm94IiwiQm94IiwiTW90aW9uSGVhZGluZyIsIkhlYWRpbmciLCJoZWFkZXJUaXRsZUNsYXNzIiwic3dpdGNoVGhlbWUiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJGaVN1biIsIkZpTW9vbiIsIk1BSU5fVElUTEUiLCJzY2FsZSIsIkZpU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsbUJBQ3dDQyxrRUFBUyxFQURqRDtBQUFBLE1BQ0FDLGNBREEsY0FDWEMsU0FEVztBQUFBLE1BQ3dCQyxXQUR4QixjQUNnQkMsTUFEaEI7O0FBQUEsb0JBRStDSixrRUFBUyxFQUZ4RDtBQUFBLE1BRUFLLGFBRkEsZUFFWEgsU0FGVztBQUFBLE1BRXVCSSxtQkFGdkIsZUFFZUYsTUFGZjs7QUFBQSxzQkFJb0JHLG9FQUFZLEVBSmhDO0FBQUEsTUFJWEMsU0FKVyxpQkFJWEEsU0FKVztBQUFBLE1BSUFDLGVBSkEsaUJBSUFBLGVBSkE7O0FBTW5CLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyx1RUFBZCxDQUF0QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRyxpRUFBZCxDQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0wsb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjSyx1REFBZCxDQUF0QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHYixhQUFhLElBQUksRUFBMUM7O0FBRUEsTUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QmhCLGVBQVc7QUFDWE0sbUJBQWU7QUFDZlcsV0FBTyxDQUFDQyxHQUFSLENBQVliLFNBQVo7QUFDRCxHQUpEOztBQU1BLFNBQ0UsbUVBQ0UsTUFBQyxpRUFBRDtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFrQyxTQUFLLEVBQUVjLG1EQUFLLENBQUNkLFNBQUQsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUVlLG9EQURiO0FBRUUsY0FBVSxFQUFFQyxxREFGZDtBQUdFLFVBQU0sRUFBRUwsV0FIVjtBQUlFLGFBQVMsRUFBRWxCLGNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyxhQUFEO0FBQ0UsVUFBTSxNQURSO0FBRUUsTUFBRSxFQUFDLElBRkw7QUFHRSxTQUFLLEVBQUVxQixtREFBSyxDQUFDZCxTQUFELENBSGQ7QUFJRSxZQUFRLEVBQUMsS0FKWDtBQUtFLGFBQVMseUJBQWtCVSxnQkFBbEIsQ0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dPLG9EQVBILENBUEYsRUFpQkdwQixhQUFhLEdBQ1osTUFBQyxvREFBRDtBQUFhLHVCQUFtQixFQUFFQyxtQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURZLEdBR1osTUFBQyxhQUFEO0FBQ0UsY0FBVSxFQUFFO0FBQUVvQixXQUFLLEVBQUU7QUFBVCxLQURkO0FBRUUsV0FBTyxFQUFDLE1BRlY7QUFHRSxjQUFVLEVBQUMsUUFIYjtBQUlFLGtCQUFjLEVBQUMsS0FKakI7QUFLRSxhQUFTLEVBQUMsUUFMWjtBQU1FLGtCQUFXLFdBTmI7QUFPRSxXQUFPLEVBQUMsVUFQVjtBQVFFLFdBQU8sRUFBRXBCLG1CQVJYO0FBU0UsWUFBUSxFQUFDLE1BVFg7QUFVRSxRQUFJLEVBQUVxQix1REFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJKLENBREYsRUFtQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNGLENBREY7QUF1Q0QsQ0F6REQ7O0dBQU01QixNO1VBQ3VEQywwRCxFQUNPQSwwRCxFQUUzQk8sNEQ7OztLQUpuQ1IsTTtBQTJEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzZjY2VmZjRlMGYyMmNjMGUwYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L05hdlwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9zaGFyZWQvSWNvbnNCdG5cIjtcbmltcG9ydCB7IE1BSU5fVElUTEUgfSBmcm9tIFwiLi4vLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biwgRmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9JY29uQnV0dG9uXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBIZWFkaW5nLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBiZ0NvbG9yLCBjb2xvciB9IGZyb20gXCIuLi8uLi9jdXN0b21UaGVtZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQ6IGlzVGhlbWVDaGFuZ2VkLCB0b2dnbGU6IGNoYW5nZVRoZW1lIH0gPSB1c2VUb2dnbGUoKTtcbiAgY29uc3QgeyBpc1RvZ2dsZWQ6IGlzU2VhcmNoSW5wdXQsIHRvZ2dsZTogc3dpdGNoVG9TZWFyY2hJbnB1dCB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgY29uc3QgTW90aW9uSWNvbkJ0biA9IG1vdGlvbi5jdXN0b20oSWNvbkJ1dHRvbik7XG4gIGNvbnN0IE1vdGlvbkJveCA9IG1vdGlvbi5jdXN0b20oQm94KTtcbiAgY29uc3QgTW90aW9uSGVhZGluZyA9IG1vdGlvbi5jdXN0b20oSGVhZGluZyk7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGVDbGFzcyA9IGlzU2VhcmNoSW5wdXQgJiYgXCJcIjtcblxuICBjb25zdCBzd2l0Y2hUaGVtZSA9ICgpID0+IHtcbiAgICBjaGFuZ2VUaGVtZSgpO1xuICAgIHRvZ2dsZUNvbG9yTW9kZSgpO1xuICAgIGNvbnNvbGUubG9nKGNvbG9yTW9kZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCIgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19PlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e0ZpU3VufVxuICAgICAgICAgIHNlY29uZEljb249e0ZpTW9vbn1cbiAgICAgICAgICB0b2dnbGU9e3N3aXRjaFRoZW1lfVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUaGVtZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb3Rpb25IZWFkaW5nXG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgZm9udFNpemU9XCI0eGxcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci10aXRsZSAke2hlYWRlclRpdGxlQ2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtNQUlOX1RJVExFfVxuICAgICAgICA8L01vdGlvbkhlYWRpbmc+XG5cbiAgICAgICAge2lzU2VhcmNoSW5wdXQgPyAoXG4gICAgICAgICAgPFNlYXJjaElucHV0IHN3aXRjaFRvU2VhcmNoSW5wdXQ9e3N3aXRjaFRvU2VhcmNoSW5wdXR9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE1vdGlvbkljb25CdG5cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImVuZFwiXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNhbGwgU2FnZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoVG9TZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIGZvbnRTaXplPVwiMzBweFwiXG4gICAgICAgICAgICBpY29uPXtGaVNlYXJjaH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgICA8TmF2IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9