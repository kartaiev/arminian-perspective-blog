webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/layout/Nav.js":
/*!**********************************!*\
  !*** ./components/layout/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\layout\\Nav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Nav = function Nav() {
  _s();

  var pathName = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])().pathname;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      toggle = _useToggle.toggle;

  var pages = [{
    label: "статьи",
    path: "/"
  }, {
    label: "об этом сайте",
    path: "/about"
  }, {
    label: "утверждение веры",
    path: "/statement"
  }, {
    label: "поддержи проект",
    path: "/give"
  }];
  var links = pages.map(function (_ref) {
    var label = _ref.label,
        path = _ref.path;
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].li, {
      key: path,
      className: pathName === path ? "active" : "inactive hover:border-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].Link, {
      whileHover: {
        scale: 1.1
      },
      className: pathName === path ? "active" : "inactive hover:border-gray-300",
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "border-none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, label)));
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "h-10 lg:h-16 w-full border-b border-gray-300 flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "hidden md:text-lg lg:text-xl xl:w-3/4 xl:px-12  h-full lg:flex lg:items-center lg:justify-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, links), __jsx("button", {
    onClick: toggle,
    className: "lg:hidden  focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "\u043C\u0435\u043D\u044E")), isToggled && __jsx("ul", {
    className: "h-26 py-2 flex items-center justify-center flex-wrap border-b border-gray-300",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, links));
};

_s(Nav, "UNIae50URlm5D6DrdDt8Dw/E24o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdiIsInBhdGhOYW1lIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJ0b2dnbGUiLCJwYWdlcyIsImxhYmVsIiwicGF0aCIsImxpbmtzIiwibWFwIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLDZEQUFTLEdBQUdDLFFBQTdCOztBQURnQixtQkFHY0Msa0VBQVMsRUFIdkI7QUFBQSxNQUdSQyxTQUhRLGNBR1JBLFNBSFE7QUFBQSxNQUdHQyxNQUhILGNBR0dBLE1BSEg7O0FBS2hCLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQUVDLFNBQUssRUFBRSxRQUFUO0FBQW1CQyxRQUFJLEVBQUU7QUFBekIsR0FEWSxFQUVaO0FBQUVELFNBQUssRUFBRSxlQUFUO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FGWSxFQUdaO0FBQUVELFNBQUssRUFBRSxrQkFBVDtBQUE2QkMsUUFBSSxFQUFFO0FBQW5DLEdBSFksRUFJWjtBQUFFRCxTQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLFFBQUksRUFBRTtBQUFsQyxHQUpZLENBQWQ7QUFPQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVLGdCQUFxQjtBQUFBLFFBQWxCSCxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0MsV0FDRSxNQUFDLG9EQUFELENBQVEsRUFBUjtBQUNFLFNBQUcsRUFBRUEsSUFEUDtBQUVFLGVBQVMsRUFDUFIsUUFBUSxLQUFLUSxJQUFiLEdBQW9CLFFBQXBCLEdBQStCLGdDQUhuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFDRSxnQkFBVSxFQUFFO0FBQUVHLGFBQUssRUFBRTtBQUFULE9BRGQ7QUFFRSxlQUFTLEVBQ1BYLFFBQVEsS0FBS1EsSUFBYixHQUFvQixRQUFwQixHQUErQixnQ0FIbkM7QUFLRSxVQUFJLEVBQUVBLElBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0QkQsS0FBNUIsQ0FQRixDQU5GLENBREY7QUFrQkQsR0FuQmEsQ0FBZDtBQXFCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywrRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsa0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxLQURILENBREYsRUFJRTtBQUFRLFdBQU8sRUFBRUosTUFBakI7QUFBeUIsYUFBUyxFQUFDLCtCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLENBREYsRUFTR0QsU0FBUyxJQUNSO0FBQUksYUFBUyxFQUFDLCtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ssS0FESCxDQVZKLENBREY7QUFpQkQsQ0FsREQ7O0dBQU1WLEc7VUFDYUUscUQsRUFFYUUsMEQ7OztLQUgxQkosRztBQW9EU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uMzY4NzAyMzI1MjY0NDE0YWQ2MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUm91dGVyKCkucGF0aG5hbWU7XG5cbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHRvZ2dsZSB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgcGFnZXMgPSBbXG4gICAgeyBsYWJlbDogXCLRgdGC0LDRgtGM0LhcIiwgcGF0aDogXCIvXCIgfSxcbiAgICB7IGxhYmVsOiBcItC+0LEg0Y3RgtC+0Lwg0YHQsNC50YLQtVwiLCBwYXRoOiBcIi9hYm91dFwiIH0sXG4gICAgeyBsYWJlbDogXCLRg9GC0LLQtdGA0LbQtNC10L3QuNC1INCy0LXRgNGLXCIsIHBhdGg6IFwiL3N0YXRlbWVudFwiIH0sXG4gICAgeyBsYWJlbDogXCLQv9C+0LTQtNC10YDQttC4INC/0YDQvtC10LrRglwiLCBwYXRoOiBcIi9naXZlXCIgfSxcbiAgXTtcblxuICBjb25zdCBsaW5rcyA9IHBhZ2VzLm1hcCgoeyBsYWJlbCwgcGF0aCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAga2V5PXtwYXRofVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHBhdGhOYW1lID09PSBwYXRoID8gXCJhY3RpdmVcIiA6IFwiaW5hY3RpdmUgaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8bW90aW9uLkxpbmtcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgcGF0aE5hbWUgPT09IHBhdGggPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZSBob3Zlcjpib3JkZXItZ3JheS0zMDBcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBocmVmPXtwYXRofVxuICAgICAgICA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmVcIj57bGFiZWx9PC9hPlxuICAgICAgICA8L21vdGlvbi5MaW5rPlxuICAgICAgPC9tb3Rpb24ubGk+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwIGxnOmgtMTYgdy1mdWxsIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOnRleHQtbGcgbGc6dGV4dC14bCB4bDp3LTMvNCB4bDpweC0xMiAgaC1mdWxsIGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOmp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAge2xpbmtzfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZX0gY2xhc3NOYW1lPVwibGc6aGlkZGVuICBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICDQvNC10L3RjlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzVG9nZ2xlZCAmJiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoLTI2IHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9