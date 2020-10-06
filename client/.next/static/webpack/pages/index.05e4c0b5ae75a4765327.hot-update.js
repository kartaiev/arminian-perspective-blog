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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MotionBox, {
    borderBottom: "1px",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_10__["borderColor"][colorMode],
    layout: true,
    className: "header-container",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_10__["color"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    firstIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiMoon"],
    secondIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiSun"],
    toggle: switchTheme,
    isToggled: isThemeChanged,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(MotionHeading, {
    layout: true,
    as: "h1",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_10__["color"][colorMode],
    fontSize: ["xl", "2xl", "3xl", "5xl"],
    className: "header-title ".concat(headerTitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_3__["MAIN_TITLE"]), isSearchInput ? __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    switchToSearchInput: switchToSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 60,
      columnNumber: 11
    }
  })), __jsx(components_layout_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVRvZ2dsZSIsImlzVGhlbWVDaGFuZ2VkIiwiaXNUb2dnbGVkIiwiY2hhbmdlVGhlbWUiLCJ0b2dnbGUiLCJpc1NlYXJjaElucHV0Iiwic3dpdGNoVG9TZWFyY2hJbnB1dCIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsIk1vdGlvbkljb25CdG4iLCJtb3Rpb24iLCJjdXN0b20iLCJJY29uQnV0dG9uIiwiTW90aW9uQm94IiwiQm94IiwiTW90aW9uSGVhZGluZyIsIkhlYWRpbmciLCJoZWFkZXJUaXRsZUNsYXNzIiwic3dpdGNoVGhlbWUiLCJjb25zb2xlIiwibG9nIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsIkZpTW9vbiIsIkZpU3VuIiwiTUFJTl9USVRMRSIsInNjYWxlIiwiRmlTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxtQkFDd0NDLGtFQUFTLEVBRGpEO0FBQUEsTUFDQUMsY0FEQSxjQUNYQyxTQURXO0FBQUEsTUFDd0JDLFdBRHhCLGNBQ2dCQyxNQURoQjs7QUFBQSxvQkFFK0NKLGtFQUFTLEVBRnhEO0FBQUEsTUFFQUssYUFGQSxlQUVYSCxTQUZXO0FBQUEsTUFFdUJJLG1CQUZ2QixlQUVlRixNQUZmOztBQUFBLHNCQUlvQkcsb0VBQVksRUFKaEM7QUFBQSxNQUlYQyxTQUpXLGlCQUlYQSxTQUpXO0FBQUEsTUFJQUMsZUFKQSxpQkFJQUEsZUFKQTs7QUFNbkIsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxDQUFDQyxNQUFQLENBQWNDLHVFQUFkLENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSCxvREFBTSxDQUFDQyxNQUFQLENBQWNHLGlFQUFkLENBQWxCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHTCxvREFBTSxDQUFDQyxNQUFQLENBQWNLLHVEQUFkLENBQXRCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUdiLGFBQWEsSUFBSSxFQUExQzs7QUFFQSxNQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCaEIsZUFBVztBQUNYTSxtQkFBZTtBQUNmVyxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsU0FBWjtBQUNELEdBSkQ7O0FBTUEsU0FDRSxtRUFDRSxNQUFDLFNBQUQ7QUFDRSxnQkFBWSxFQUFDLEtBRGY7QUFFRSxlQUFXLEVBQUVjLHlEQUFXLENBQUNkLFNBQUQsQ0FGMUI7QUFHRSxVQUFNLE1BSFI7QUFJRSxhQUFTLEVBQUMsa0JBSlo7QUFLRSxTQUFLLEVBQUVlLG1EQUFLLENBQUNmLFNBQUQsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBRWdCLHFEQURiO0FBRUUsY0FBVSxFQUFFQyxvREFGZDtBQUdFLFVBQU0sRUFBRU4sV0FIVjtBQUlFLGFBQVMsRUFBRWxCLGNBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBYUUsTUFBQyxhQUFEO0FBQ0UsVUFBTSxNQURSO0FBRUUsTUFBRSxFQUFDLElBRkw7QUFHRSxTQUFLLEVBQUVzQixtREFBSyxDQUFDZixTQUFELENBSGQ7QUFJRSxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsRUFBcUIsS0FBckIsQ0FKWjtBQUtFLGFBQVMseUJBQWtCVSxnQkFBbEIsQ0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dRLG9EQVBILENBYkYsRUF1QkdyQixhQUFhLEdBQ1osTUFBQyxvREFBRDtBQUFhLHVCQUFtQixFQUFFQyxtQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURZLEdBR1osTUFBQyxhQUFEO0FBQ0UsY0FBVSxFQUFFO0FBQUVxQixXQUFLLEVBQUU7QUFBVCxLQURkO0FBRUUsV0FBTyxFQUFDLE1BRlY7QUFHRSxjQUFVLEVBQUMsUUFIYjtBQUlFLGtCQUFjLEVBQUMsS0FKakI7QUFLRSxhQUFTLEVBQUMsUUFMWjtBQU1FLGtCQUFXLFdBTmI7QUFPRSxXQUFPLEVBQUMsVUFQVjtBQVFFLFdBQU8sRUFBRXJCLG1CQVJYO0FBU0UsWUFBUSxFQUFDLE1BVFg7QUFVRSxRQUFJLEVBQUVzQix1REFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJKLENBREYsRUF5Q0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNGLENBREY7QUE2Q0QsQ0EvREQ7O0dBQU03QixNO1VBQ3VEQywwRCxFQUNPQSwwRCxFQUUzQk8sNEQ7OztLQUpuQ1IsTTtBQWlFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDVlNGMwYjVhZTc1YTQ3NjUzMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L05hdlwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9zaGFyZWQvSWNvbnNCdG5cIjtcbmltcG9ydCB7IE1BSU5fVElUTEUgfSBmcm9tIFwiLi4vLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biwgRmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9JY29uQnV0dG9uXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBIZWFkaW5nLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBiZ0NvbG9yLCBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0JveFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkOiBpc1RoZW1lQ2hhbmdlZCwgdG9nZ2xlOiBjaGFuZ2VUaGVtZSB9ID0gdXNlVG9nZ2xlKCk7XG4gIGNvbnN0IHsgaXNUb2dnbGVkOiBpc1NlYXJjaElucHV0LCB0b2dnbGU6IHN3aXRjaFRvU2VhcmNoSW5wdXQgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IE1vdGlvbkljb25CdG4gPSBtb3Rpb24uY3VzdG9tKEljb25CdXR0b24pO1xuICBjb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb24uY3VzdG9tKEJveCk7XG4gIGNvbnN0IE1vdGlvbkhlYWRpbmcgPSBtb3Rpb24uY3VzdG9tKEhlYWRpbmcpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlQ2xhc3MgPSBpc1NlYXJjaElucHV0ICYmIFwiXCI7XG5cbiAgY29uc3Qgc3dpdGNoVGhlbWUgPSAoKSA9PiB7XG4gICAgY2hhbmdlVGhlbWUoKTtcbiAgICB0b2dnbGVDb2xvck1vZGUoKTtcbiAgICBjb25zb2xlLmxvZyhjb2xvck1vZGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb3Rpb25Cb3hcbiAgICAgICAgYm9yZGVyQm90dG9tPVwiMXB4XCJcbiAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgIGxheW91dFxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCJcbiAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICA+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17RmlNb29ufVxuICAgICAgICAgIHNlY29uZEljb249e0ZpU3VufVxuICAgICAgICAgIHRvZ2dsZT17c3dpdGNoVGhlbWV9XG4gICAgICAgICAgaXNUb2dnbGVkPXtpc1RoZW1lQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vdGlvbkhlYWRpbmdcbiAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBmb250U2l6ZT17W1wieGxcIiwgXCIyeGxcIiwgXCIzeGxcIiwgXCI1eGxcIl19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyLXRpdGxlICR7aGVhZGVyVGl0bGVDbGFzc31gfVxuICAgICAgICA+XG4gICAgICAgICAge01BSU5fVElUTEV9XG4gICAgICAgIDwvTW90aW9uSGVhZGluZz5cblxuICAgICAgICB7aXNTZWFyY2hJbnB1dCA/IChcbiAgICAgICAgICA8U2VhcmNoSW5wdXQgc3dpdGNoVG9TZWFyY2hJbnB1dD17c3dpdGNoVG9TZWFyY2hJbnB1dH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TW90aW9uSWNvbkJ0blxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZW5kXCJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2FsbCBTYWdlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hUb1NlYXJjaElucHV0fVxuICAgICAgICAgICAgZm9udFNpemU9XCIzMHB4XCJcbiAgICAgICAgICAgIGljb249e0ZpU2VhcmNofVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L01vdGlvbkJveD5cbiAgICAgIDxOYXYgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=