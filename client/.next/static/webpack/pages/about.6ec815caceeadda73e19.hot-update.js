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

  var headerTitleClass = isSearchInput && "ml-300px";
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

/***/ }),

/***/ "./components/layout/SearchInput.js":
/*!******************************************!*\
  !*** ./components/layout/SearchInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core_dist_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core/dist/Input */ "./node_modules/@chakra-ui/core/dist/es/Input/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\layout\\SearchInput.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SearchInput = function SearchInput() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placeholder: "\u043F\u043E\u0438\u0441\u043A",
    width: "300px",
    variant: "outline",
    rounded: "full",
    _focus: {
      bg: "white",
      borderColor: "gray.900"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputRightElement"], {
    roundedRight: "full",
    _focus: {
      bg: "white",
      borderColor: "gray.900"
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "search",
      color: "gray.900",
      size: "24px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};

_c = SearchInput;
/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

var _c;

$RefreshReg$(_c, "SearchInput");

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

/***/ }),

/***/ "./components/shared/IconsBtn.js":
/*!***************************************!*\
  !*** ./components/shared/IconsBtn.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\shared\\IconsBtn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var IconsBtn = function IconsBtn(_ref) {
  var firstIcon = _ref.firstIcon,
      secondIcon = _ref.secondIcon,
      toggle = _ref.toggle,
      isToggled = _ref.isToggled;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].button, {
    whileHover: {
      scale: 1.2
    },
    onClick: toggle,
    className: "focus:outline-none ease",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, isToggled ? firstIcon : secondIcon);
};

_c = IconsBtn;
/* harmony default export */ __webpack_exports__["default"] = (IconsBtn);

var _c;

$RefreshReg$(_c, "IconsBtn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9TZWFyY2hJbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvSWNvbnNCdG4uanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlVG9nZ2xlIiwiaXNUaGVtZUNoYW5nZWQiLCJpc1RvZ2dsZWQiLCJjaGFuZ2VUaGVtZSIsInRvZ2dsZSIsImlzU2VhcmNoSW5wdXQiLCJzd2l0Y2hUb1NlYXJjaElucHV0IiwiaGVhZGVyVGl0bGVDbGFzcyIsInN1bkljb24iLCJtb29uSWNvbiIsIk1BSU5fVElUTEUiLCJzZWFyY2hJY29uIiwiU2VhcmNoSW5wdXQiLCJiZyIsImJvcmRlckNvbG9yIiwiSWNvbnNCdG4iLCJmaXJzdEljb24iLCJzZWNvbmRJY29uIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxtQkFDd0NDLGtFQUFTLEVBRGpEO0FBQUEsTUFDQUMsY0FEQSxjQUNYQyxTQURXO0FBQUEsTUFDd0JDLFdBRHhCLGNBQ2dCQyxNQURoQjs7QUFBQSxvQkFFK0NKLGtFQUFTLEVBRnhEO0FBQUEsTUFFQUssYUFGQSxlQUVYSCxTQUZXO0FBQUEsTUFFdUJJLG1CQUZ2QixlQUVlRixNQUZmOztBQUluQixNQUFNRyxnQkFBZ0IsR0FBR0YsYUFBYSxJQUFJLFVBQTFDO0FBRUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBRUcsa0RBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsVUFBTSxFQUFFTixXQUhWO0FBSUUsYUFBUyxFQUFFRixjQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FO0FBQUksYUFBUyx5QkFBa0JNLGdCQUFsQixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0RHLG9EQUFwRCxDQVBGLEVBU0dMLGFBQWEsR0FDWixNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEWSxHQUdaO0FBQVEsV0FBTyxFQUFFQyxtQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q0sscURBQXZDLENBWkosQ0FERixFQWdCRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQW9CRCxDQTFCRDs7R0FBTVosTTtVQUN1REMsMEQsRUFDT0EsMEQ7OztLQUY5REQsTTtBQTRCU0EscUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQ0UsZUFBVyxFQUFDLGdDQURkO0FBRUUsU0FBSyxFQUFDLE9BRlI7QUFHRSxXQUFPLEVBQUMsU0FIVjtBQUlFLFdBQU8sRUFBQyxNQUpWO0FBS0UsVUFBTSxFQUFFO0FBQUVDLFFBQUUsRUFBRSxPQUFOO0FBQWVDLGlCQUFXLEVBQUU7QUFBNUIsS0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRSxNQUFDLGlFQUFEO0FBQ0UsZ0JBQVksRUFBQyxNQURmO0FBRUUsVUFBTSxFQUFFO0FBQUVELFFBQUUsRUFBRSxPQUFOO0FBQWVDLGlCQUFXLEVBQUU7QUFBNUIsS0FGVjtBQUdFLFlBQVEsRUFBRSxNQUFDLG9EQUFEO0FBQU0sVUFBSSxFQUFDLFFBQVg7QUFBb0IsV0FBSyxFQUFDLFVBQTFCO0FBQXFDLFVBQUksRUFBQyxNQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFnQkQsQ0FqQkQ7O0tBQU1GLFc7QUFtQlNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrRDtBQUFBLE1BQS9DQyxTQUErQyxRQUEvQ0EsU0FBK0M7QUFBQSxNQUFwQ0MsVUFBb0MsUUFBcENBLFVBQW9DO0FBQUEsTUFBeEJiLE1BQXdCLFFBQXhCQSxNQUF3QjtBQUFBLE1BQWhCRixTQUFnQixRQUFoQkEsU0FBZ0I7QUFDakUsU0FDRSxNQUFDLG9EQUFELENBQVEsTUFBUjtBQUNFLGNBQVUsRUFBRTtBQUFFZ0IsV0FBSyxFQUFFO0FBQVQsS0FEZDtBQUVFLFdBQU8sRUFBRWQsTUFGWDtBQUdFLGFBQVMsRUFBQyx5QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dGLFNBQVMsR0FBR2MsU0FBSCxHQUFlQyxVQUwzQixDQURGO0FBU0QsQ0FWRDs7S0FBTUYsUTtBQVlTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC42ZWM4MTVjYWNlZWFkZGE3M2UxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2XCI7XG5pbXBvcnQgeyBtb29uSWNvbiwgc2VhcmNoSWNvbiwgc3VuSWNvbiB9IGZyb20gXCIuLi8uLi9saWIvaWNvbnNcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vc2hhcmVkL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBNQUlOX1RJVExFIH0gZnJvbSBcIi4uLy4uL2xpYi92YXJzXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4vU2VhcmNoSW5wdXRcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZDogaXNUaGVtZUNoYW5nZWQsIHRvZ2dsZTogY2hhbmdlVGhlbWUgfSA9IHVzZVRvZ2dsZSgpO1xuICBjb25zdCB7IGlzVG9nZ2xlZDogaXNTZWFyY2hJbnB1dCwgdG9nZ2xlOiBzd2l0Y2hUb1NlYXJjaElucHV0IH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBoZWFkZXJUaXRsZUNsYXNzID0gaXNTZWFyY2hJbnB1dCAmJiBcIm1sLTMwMHB4XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17c3VuSWNvbn1cbiAgICAgICAgICBzZWNvbmRJY29uPXttb29uSWNvbn1cbiAgICAgICAgICB0b2dnbGU9e2NoYW5nZVRoZW1lfVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUaGVtZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BoZWFkZXItdGl0bGUgJHtoZWFkZXJUaXRsZUNsYXNzfWB9PntNQUlOX1RJVExFfTwvaDE+XG5cbiAgICAgICAge2lzU2VhcmNoSW5wdXQgPyAoXG4gICAgICAgICAgPFNlYXJjaElucHV0IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzd2l0Y2hUb1NlYXJjaElucHV0fT57c2VhcmNoSWNvbn08L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPE5hdiAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9JbnB1dFwiO1xuaW1wb3J0IHsgSW5wdXRSaWdodEVsZW1lbnQsIEljb24sIElucHV0R3JvdXAgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5cbmNvbnN0IFNlYXJjaElucHV0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxJbnB1dEdyb3VwPlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0L/QvtC40YHQulwiXG4gICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgX2ZvY3VzPXt7IGJnOiBcIndoaXRlXCIsIGJvcmRlckNvbG9yOiBcImdyYXkuOTAwXCIgfX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRSaWdodEVsZW1lbnRcbiAgICAgICAgcm91bmRlZFJpZ2h0PVwiZnVsbFwiXG4gICAgICAgIF9mb2N1cz17eyBiZzogXCJ3aGl0ZVwiLCBib3JkZXJDb2xvcjogXCJncmF5LjkwMFwiIH19XG4gICAgICAgIGNoaWxkcmVuPXs8SWNvbiBuYW1lPVwic2VhcmNoXCIgY29sb3I9XCJncmF5LjkwMFwiIHNpemU9XCIyNHB4XCIgLz59XG4gICAgICAvPlxuICAgIDwvSW5wdXRHcm91cD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgSWNvbnNCdG4gPSAoeyBmaXJzdEljb24sIHNlY29uZEljb24sIHRvZ2dsZSwgaXNUb2dnbGVkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgZWFzZVwiXG4gICAgPlxuICAgICAge2lzVG9nZ2xlZCA/IGZpcnN0SWNvbiA6IHNlY29uZEljb259XG4gICAgPC9tb3Rpb24uYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnNCdG47XG4iXSwic291cmNlUm9vdCI6IiJ9