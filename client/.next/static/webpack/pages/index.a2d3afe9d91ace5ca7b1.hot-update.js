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
    fontSize: ["xl", "2xl", "3xl", "4xl"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVRvZ2dsZSIsImlzVGhlbWVDaGFuZ2VkIiwiaXNUb2dnbGVkIiwiY2hhbmdlVGhlbWUiLCJ0b2dnbGUiLCJpc1NlYXJjaElucHV0Iiwic3dpdGNoVG9TZWFyY2hJbnB1dCIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsIk1vdGlvbkljb25CdG4iLCJtb3Rpb24iLCJjdXN0b20iLCJJY29uQnV0dG9uIiwiTW90aW9uQm94IiwiQm94IiwiTW90aW9uSGVhZGluZyIsIkhlYWRpbmciLCJoZWFkZXJUaXRsZUNsYXNzIiwic3dpdGNoVGhlbWUiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJGaVN1biIsIkZpTW9vbiIsIk1BSU5fVElUTEUiLCJzY2FsZSIsIkZpU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsbUJBQ3dDQyxrRUFBUyxFQURqRDtBQUFBLE1BQ0FDLGNBREEsY0FDWEMsU0FEVztBQUFBLE1BQ3dCQyxXQUR4QixjQUNnQkMsTUFEaEI7O0FBQUEsb0JBRStDSixrRUFBUyxFQUZ4RDtBQUFBLE1BRUFLLGFBRkEsZUFFWEgsU0FGVztBQUFBLE1BRXVCSSxtQkFGdkIsZUFFZUYsTUFGZjs7QUFBQSxzQkFJb0JHLG9FQUFZLEVBSmhDO0FBQUEsTUFJWEMsU0FKVyxpQkFJWEEsU0FKVztBQUFBLE1BSUFDLGVBSkEsaUJBSUFBLGVBSkE7O0FBTW5CLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyx1RUFBZCxDQUF0QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRyxpRUFBZCxDQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0wsb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjSyx1REFBZCxDQUF0QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHYixhQUFhLElBQUksRUFBMUM7O0FBRUEsTUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QmhCLGVBQVc7QUFDWE0sbUJBQWU7QUFDZlcsV0FBTyxDQUFDQyxHQUFSLENBQVliLFNBQVo7QUFDRCxHQUpEOztBQU1BLFNBQ0UsbUVBQ0UsTUFBQyxTQUFEO0FBQVcsVUFBTSxNQUFqQjtBQUFrQixhQUFTLEVBQUMsa0JBQTVCO0FBQStDLFNBQUssRUFBRWMsbURBQUssQ0FBQ2QsU0FBRCxDQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBRWUsb0RBRGI7QUFFRSxjQUFVLEVBQUVDLHFEQUZkO0FBR0UsVUFBTSxFQUFFTCxXQUhWO0FBSUUsYUFBUyxFQUFFbEIsY0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxNQUFDLGFBQUQ7QUFDRSxVQUFNLE1BRFI7QUFFRSxNQUFFLEVBQUMsSUFGTDtBQUdFLFNBQUssRUFBRXFCLG1EQUFLLENBQUNkLFNBQUQsQ0FIZDtBQUlFLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZCxFQUFxQixLQUFyQixDQUpaO0FBS0UsYUFBUyx5QkFBa0JVLGdCQUFsQixDQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR08sb0RBUEgsQ0FQRixFQWlCR3BCLGFBQWEsR0FDWixNQUFDLG9EQUFEO0FBQWEsdUJBQW1CLEVBQUVDLG1CQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFksR0FHWixNQUFDLGFBQUQ7QUFDRSxjQUFVLEVBQUU7QUFBRW9CLFdBQUssRUFBRTtBQUFULEtBRGQ7QUFFRSxXQUFPLEVBQUMsTUFGVjtBQUdFLGNBQVUsRUFBQyxRQUhiO0FBSUUsa0JBQWMsRUFBQyxLQUpqQjtBQUtFLGFBQVMsRUFBQyxRQUxaO0FBTUUsa0JBQVcsV0FOYjtBQU9FLFdBQU8sRUFBQyxVQVBWO0FBUUUsV0FBTyxFQUFFcEIsbUJBUlg7QUFTRSxZQUFRLEVBQUMsTUFUWDtBQVVFLFFBQUksRUFBRXFCLHVEQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkosQ0FERixFQW1DRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0YsQ0FERjtBQXVDRCxDQXpERDs7R0FBTTVCLE07VUFDdURDLDBELEVBQ09BLDBELEVBRTNCTyw0RDs7O0tBSm5DUixNO0FBMkRTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMmQzYWZlOWQ5MWFjZTVjYTdiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2XCI7XG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL3NoYXJlZC9JY29uc0J0blwiO1xuaW1wb3J0IHsgTUFJTl9USVRMRSB9IGZyb20gXCIuLi8uLi9saWIvdmFyc1wiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuL1NlYXJjaElucHV0XCI7XG5pbXBvcnQgeyBGaU1vb24sIEZpU3VuLCBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0ljb25CdXR0b25cIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEhlYWRpbmcsIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IGJnQ29sb3IsIGNvbG9yIH0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZDogaXNUaGVtZUNoYW5nZWQsIHRvZ2dsZTogY2hhbmdlVGhlbWUgfSA9IHVzZVRvZ2dsZSgpO1xuICBjb25zdCB7IGlzVG9nZ2xlZDogaXNTZWFyY2hJbnB1dCwgdG9nZ2xlOiBzd2l0Y2hUb1NlYXJjaElucHV0IH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICBjb25zdCBNb3Rpb25JY29uQnRuID0gbW90aW9uLmN1c3RvbShJY29uQnV0dG9uKTtcbiAgY29uc3QgTW90aW9uQm94ID0gbW90aW9uLmN1c3RvbShCb3gpO1xuICBjb25zdCBNb3Rpb25IZWFkaW5nID0gbW90aW9uLmN1c3RvbShIZWFkaW5nKTtcblxuICBjb25zdCBoZWFkZXJUaXRsZUNsYXNzID0gaXNTZWFyY2hJbnB1dCAmJiBcIlwiO1xuXG4gIGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xuICAgIGNoYW5nZVRoZW1lKCk7XG4gICAgdG9nZ2xlQ29sb3JNb2RlKCk7XG4gICAgY29uc29sZS5sb2coY29sb3JNb2RlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW90aW9uQm94IGxheW91dCBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCIgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19PlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e0ZpU3VufVxuICAgICAgICAgIHNlY29uZEljb249e0ZpTW9vbn1cbiAgICAgICAgICB0b2dnbGU9e3N3aXRjaFRoZW1lfVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUaGVtZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxNb3Rpb25IZWFkaW5nXG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgZm9udFNpemU9e1tcInhsXCIsIFwiMnhsXCIsIFwiM3hsXCIsIFwiNHhsXCJdfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci10aXRsZSAke2hlYWRlclRpdGxlQ2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtNQUlOX1RJVExFfVxuICAgICAgICA8L01vdGlvbkhlYWRpbmc+XG5cbiAgICAgICAge2lzU2VhcmNoSW5wdXQgPyAoXG4gICAgICAgICAgPFNlYXJjaElucHV0IHN3aXRjaFRvU2VhcmNoSW5wdXQ9e3N3aXRjaFRvU2VhcmNoSW5wdXR9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPE1vdGlvbkljb25CdG5cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImVuZFwiXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNhbGwgU2FnZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwidW5zdHlsZWRcIlxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoVG9TZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIGZvbnRTaXplPVwiMzBweFwiXG4gICAgICAgICAgICBpY29uPXtGaVNlYXJjaH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Nb3Rpb25Cb3g+XG4gICAgICA8TmF2IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9