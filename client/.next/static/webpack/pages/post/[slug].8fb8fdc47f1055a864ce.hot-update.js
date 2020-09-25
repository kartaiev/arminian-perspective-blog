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
      whileHover: {
        scale: 1.1
      },
      key: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: pathName === path ? "active" : "inactive hover:border-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, label)));
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "h-10 lg:h-16 w-full border-b border-gray-300 flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "hidden md:text-lg lg:text-xl xl:w-3/4 xl:px-12  h-full lg:flex lg:items-center lg:justify-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, links), __jsx("button", {
    onClick: toggle,
    className: "lg:hidden  focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "\u043C\u0435\u043D\u044E")), isToggled && __jsx("ul", {
    className: "h-26 py-2 flex items-center justify-center flex-wrap border-b border-gray-300",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdiIsInBhdGhOYW1lIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJ0b2dnbGUiLCJwYWdlcyIsImxhYmVsIiwicGF0aCIsImxpbmtzIiwibWFwIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLDZEQUFTLEdBQUdDLFFBQTdCOztBQURnQixtQkFHY0Msa0VBQVMsRUFIdkI7QUFBQSxNQUdSQyxTQUhRLGNBR1JBLFNBSFE7QUFBQSxNQUdHQyxNQUhILGNBR0dBLE1BSEg7O0FBS2hCLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQUVDLFNBQUssRUFBRSxRQUFUO0FBQW1CQyxRQUFJLEVBQUU7QUFBekIsR0FEWSxFQUVaO0FBQUVELFNBQUssRUFBRSxlQUFUO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FGWSxFQUdaO0FBQUVELFNBQUssRUFBRSxrQkFBVDtBQUE2QkMsUUFBSSxFQUFFO0FBQW5DLEdBSFksRUFJWjtBQUFFRCxTQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLFFBQUksRUFBRTtBQUFsQyxHQUpZLENBQWQ7QUFPQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVLGdCQUFxQjtBQUFBLFFBQWxCSCxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0MsV0FDRSxNQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLGdCQUFVLEVBQUU7QUFBRUcsYUFBSyxFQUFFO0FBQVQsT0FBdkI7QUFBdUMsU0FBRyxFQUFFSCxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUEsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxlQUFTLEVBQ1BSLFFBQVEsS0FBS1EsSUFBYixHQUFvQixRQUFwQixHQUErQixnQ0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHRCxLQUxILENBREYsQ0FERixDQURGO0FBYUQsR0FkYSxDQUFkO0FBZ0JBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLCtFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxrR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLEtBREgsQ0FERixFQUlFO0FBQVEsV0FBTyxFQUFFSixNQUFqQjtBQUF5QixhQUFTLEVBQUMsK0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSkYsQ0FERixFQVNHRCxTQUFTLElBQ1I7QUFBSSxhQUFTLEVBQUMsK0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSyxLQURILENBVkosQ0FERjtBQWlCRCxDQTdDRDs7R0FBTVYsRztVQUNhRSxxRCxFQUVhRSwwRDs7O0tBSDFCSixHO0FBK0NTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS44ZmI4ZmRjNDdmMTA1NWE4NjRjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgcGF0aE5hbWUgPSB1c2VSb3V0ZXIoKS5wYXRobmFtZTtcblxuICBjb25zdCB7IGlzVG9nZ2xlZCwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCBwYWdlcyA9IFtcbiAgICB7IGxhYmVsOiBcItGB0YLQsNGC0YzQuFwiLCBwYXRoOiBcIi9cIiB9LFxuICAgIHsgbGFiZWw6IFwi0L7QsSDRjdGC0L7QvCDRgdCw0LnRgtC1XCIsIHBhdGg6IFwiL2Fib3V0XCIgfSxcbiAgICB7IGxhYmVsOiBcItGD0YLQstC10YDQttC00LXQvdC40LUg0LLQtdGA0YtcIiwgcGF0aDogXCIvc3RhdGVtZW50XCIgfSxcbiAgICB7IGxhYmVsOiBcItC/0L7QtNC00LXRgNC20Lgg0L/RgNC+0LXQutGCXCIsIHBhdGg6IFwiL2dpdmVcIiB9LFxuICBdO1xuXG4gIGNvbnN0IGxpbmtzID0gcGFnZXMubWFwKCh7IGxhYmVsLCBwYXRoIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX0ga2V5PXtwYXRofT5cbiAgICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIHBhdGhOYW1lID09PSBwYXRoID8gXCJhY3RpdmVcIiA6IFwiaW5hY3RpdmUgaG92ZXI6Ym9yZGVyLWdyYXktMzAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L21vdGlvbi5saT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAgbGc6aC0xNiB3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6dGV4dC1sZyBsZzp0ZXh0LXhsIHhsOnctMy80IHhsOnB4LTEyICBoLWZ1bGwgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICB7bGlua3N9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlfSBjbGFzc05hbWU9XCJsZzpoaWRkZW4gIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgINC80LXQvdGOXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNUb2dnbGVkICYmIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImgtMjYgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAge2xpbmtzfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=