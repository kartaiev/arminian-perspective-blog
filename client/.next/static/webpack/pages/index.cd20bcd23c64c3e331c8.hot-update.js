webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hamburger */ "./components/layout/Hamburger.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drawer */ "./components/layout/Drawer.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\layout\\Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var pages = {
  blog: "блог",
  about: "об этом блоге",
  statement: "утверждение веры"
};
var links = Object.keys(pages).map(function (link) {
  return __jsx("li", {
    className: "pb-6 lg:pl-4 ",
    key: link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link === "blog" ? "/" : "/".concat(link),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, pages[link])));
});

var Nav = function Nav() {
  return __jsx("nav", {
    className: "uppercase tracking-wide font-menu text-gray-700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "hidden lg:flex text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, links), __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    links: links,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2LmpzIl0sIm5hbWVzIjpbInBhZ2VzIiwiYmxvZyIsImFib3V0Iiwic3RhdGVtZW50IiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibGluayIsIk5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNaQyxNQUFJLEVBQUUsTUFETTtBQUVaQyxPQUFLLEVBQUUsZUFGSztBQUdaQyxXQUFTLEVBQUU7QUFIQyxDQUFkO0FBTUEsSUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sS0FBWixFQUFtQk8sR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzdDLFNBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUE4QixPQUFHLEVBQUVBLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFJLEtBQUssTUFBVCxHQUFrQixHQUFsQixjQUE0QkEsSUFBNUIsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUixLQUFLLENBQUNRLElBQUQsQ0FBVCxDQURGLENBREYsQ0FERjtBQU9ELENBUmEsQ0FBZDs7QUFVQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2hCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NMLEtBQXhDLENBREYsRUFFRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsK0NBQUQ7QUFBUSxTQUFLLEVBQUVBLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRCxDQVJEOztLQUFNSyxHO0FBVVNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkMjBiY2QyM2M2NGMzZTMzMWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCIuL0hhbWJ1cmdlclwiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiLi9EcmF3ZXJcIjtcblxuY29uc3QgcGFnZXMgPSB7XG4gIGJsb2c6IFwi0LHQu9C+0LNcIixcbiAgYWJvdXQ6IFwi0L7QsSDRjdGC0L7QvCDQsdC70L7Qs9C1XCIsXG4gIHN0YXRlbWVudDogXCLRg9GC0LLQtdGA0LbQtNC10L3QuNC1INCy0LXRgNGLXCIsXG59O1xuXG5jb25zdCBsaW5rcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5tYXAoKGxpbmspID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwicGItNiBsZzpwbC00IFwiIGtleT17bGlua30+XG4gICAgICA8TGluayBocmVmPXtsaW5rID09PSBcImJsb2dcIiA/IFwiL1wiIDogYC8ke2xpbmt9YH0+XG4gICAgICAgIDxhPntwYWdlc1tsaW5rXX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKTtcbn0pO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBmb250LW1lbnUgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IHRleHQteGxcIj57bGlua3N9PC91bD5cbiAgICAgIDxIYW1idXJnZXIgLz5cbiAgICAgIDxEcmF3ZXIgbGlua3M9e2xpbmtzfSAvPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==