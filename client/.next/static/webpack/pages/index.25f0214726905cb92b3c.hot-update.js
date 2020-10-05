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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var components_layout_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/Nav */ "./components/layout/Nav.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/icons */ "./lib/icons.js");
/* harmony import */ var _shared_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/vars */ "./lib/vars.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchInput */ "./components/layout/SearchInput.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
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
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 9
    }
  }), width >= 1024 ? __jsx("h1", {
    className: "header-title ".concat(headerTitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_5__["MAIN_TITLE"]) : !isSearchInput && __jsx("h1", {
    className: "header-title ".concat(headerTitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_5__["MAIN_TITLE"]), isSearchInput ? __jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    switchToSearchInput: switchToSearchInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 38,
      columnNumber: 11
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_3__["searchIcon"])), __jsx(components_layout_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVRvZ2dsZSIsImlzVGhlbWVDaGFuZ2VkIiwiaXNUb2dnbGVkIiwiY2hhbmdlVGhlbWUiLCJ0b2dnbGUiLCJpc1NlYXJjaElucHV0Iiwic3dpdGNoVG9TZWFyY2hJbnB1dCIsIndpZHRoIiwidXNlV2luZG93V2lkdGgiLCJoZWFkZXJUaXRsZUNsYXNzIiwic3VuSWNvbiIsIm1vb25JY29uIiwiTUFJTl9USVRMRSIsInNjYWxlIiwic2VhcmNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG1CQUN3Q0Msa0VBQVMsRUFEakQ7QUFBQSxNQUNBQyxjQURBLGNBQ1hDLFNBRFc7QUFBQSxNQUN3QkMsV0FEeEIsY0FDZ0JDLE1BRGhCOztBQUFBLG9CQUUrQ0osa0VBQVMsRUFGeEQ7QUFBQSxNQUVBSyxhQUZBLGVBRVhILFNBRlc7QUFBQSxNQUV1QkksbUJBRnZCLGVBRWVGLE1BRmY7O0FBR25CLE1BQU1HLEtBQUssR0FBR0MsNEVBQWMsRUFBNUI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBR0osYUFBYSxJQUFJLFVBQTFDO0FBRUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBRUssa0RBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsVUFBTSxFQUFFUixXQUhWO0FBSUUsYUFBUyxFQUFFRixjQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9HTSxLQUFLLElBQUksSUFBVCxHQUNDO0FBQUksYUFBUyx5QkFBa0JFLGdCQUFsQixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0RHLG9EQUFwRCxDQURELEdBR0MsQ0FBQ1AsYUFBRCxJQUNFO0FBQUksYUFBUyx5QkFBa0JJLGdCQUFsQixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0RHLG9EQUFwRCxDQVhOLEVBZUdQLGFBQWEsR0FDWixNQUFDLG9EQUFEO0FBQWEsdUJBQW1CLEVBQUVDLG1CQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFksR0FHWixNQUFDLG9EQUFELENBQVEsTUFBUjtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsY0FBVSxFQUFFO0FBQUVPLFdBQUssRUFBRTtBQUFULEtBRmQ7QUFHRSxXQUFPLEVBQUVQLG1CQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR1EscURBTEgsQ0FsQkosQ0FERixFQTRCRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsQ0FERjtBQWdDRCxDQXZDRDs7R0FBTWYsTTtVQUN1REMsMEQsRUFDT0EsMEQsRUFDcERRLG9FOzs7S0FIVlQsTTtBQXlDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjVmMDIxNDcyNjkwNWNiOTJiM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9OYXZcIjtcbmltcG9ydCB7IG1vb25JY29uLCBzZWFyY2hJY29uLCBzdW5JY29uIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9zaGFyZWQvSWNvbnNCdG5cIjtcbmltcG9ydCB7IE1BSU5fVElUTEUgfSBmcm9tIFwiLi4vLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGlzVG9nZ2xlZDogaXNUaGVtZUNoYW5nZWQsIHRvZ2dsZTogY2hhbmdlVGhlbWUgfSA9IHVzZVRvZ2dsZSgpO1xuICBjb25zdCB7IGlzVG9nZ2xlZDogaXNTZWFyY2hJbnB1dCwgdG9nZ2xlOiBzd2l0Y2hUb1NlYXJjaElucHV0IH0gPSB1c2VUb2dnbGUoKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlQ2xhc3MgPSBpc1NlYXJjaElucHV0ICYmIFwibWwtMzAwcHhcIjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgZmlyc3RJY29uPXtzdW5JY29ufVxuICAgICAgICAgIHNlY29uZEljb249e21vb25JY29ufVxuICAgICAgICAgIHRvZ2dsZT17Y2hhbmdlVGhlbWV9XG4gICAgICAgICAgaXNUb2dnbGVkPXtpc1RoZW1lQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgICAge3dpZHRoID49IDEwMjQgPyAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17YGhlYWRlci10aXRsZSAke2hlYWRlclRpdGxlQ2xhc3N9YH0+e01BSU5fVElUTEV9PC9oMT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAhaXNTZWFyY2hJbnB1dCAmJiAoXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgaGVhZGVyLXRpdGxlICR7aGVhZGVyVGl0bGVDbGFzc31gfT57TUFJTl9USVRMRX08L2gxPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cblxuICAgICAgICB7aXNTZWFyY2hJbnB1dCA/IChcbiAgICAgICAgICA8U2VhcmNoSW5wdXQgc3dpdGNoVG9TZWFyY2hJbnB1dD17c3dpdGNoVG9TZWFyY2hJbnB1dH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWFzZVwiXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaFRvU2VhcmNoSW5wdXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlYXJjaEljb259XG4gICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8TmF2IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9