webpackHotUpdate_N_E("pages/index",{

/***/ "./context/global.context.js":
/*!***********************************!*\
  !*** ./context/global.context.js ***!
  \***********************************/
/*! exports provided: GlobalContext, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\context\\global.context.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var GlobalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined, undefined);
var GlobalProvider = function GlobalProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpened = _useState[0],
      setOpen = _useState[1];

  var open = function open() {
    setOpen(!isOpened);
    console.log(isOpened);
  };

  var pages = {
    blog: "блог",
    about: "об этом блоге",
    statement: "утверждение веры",
    give: "поддержи проект"
  };
  var links = Object.keys(pages).map(function (link) {
    return __jsx("li", {
      className: "pb-12 lg:pl-4 ",
      key: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link === "blog" ? "/" : "/".concat(link),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, pages[link])));
  });
  return __jsx(GlobalContext.Provider, {
    value: {
      links: links,
      open: open,
      isOpened: isOpened
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, children);
};

_s(GlobalProvider, "Ya9zRvr0/lHS3gewCrO9QM8eSdw=");

_c = GlobalProvider;

var _c;

$RefreshReg$(_c, "GlobalProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9nbG9iYWwuY29udGV4dC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImlzT3BlbmVkIiwic2V0T3BlbiIsIm9wZW4iLCJjb25zb2xlIiwibG9nIiwicGFnZXMiLCJibG9nIiwiYWJvdXQiLCJzdGF0ZW1lbnQiLCJnaXZlIiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELEVBQVlBLFNBQVosQ0FBbkM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNsQkMsc0RBQVEsQ0FBQyxLQUFELENBRFU7QUFBQSxNQUN2Q0MsUUFEdUM7QUFBQSxNQUM3QkMsT0FENkI7O0FBRzlDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakJELFdBQU8sQ0FBQyxDQUFDRCxRQUFGLENBQVA7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1LLEtBQUssR0FBRztBQUNaQyxRQUFJLEVBQUUsTUFETTtBQUVaQyxTQUFLLEVBQUUsZUFGSztBQUdaQyxhQUFTLEVBQUUsa0JBSEM7QUFJWkMsUUFBSSxFQUFFO0FBSk0sR0FBZDtBQU9BLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLEtBQVosRUFBbUJRLEdBQW5CLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUM3QyxXQUNFO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQStCLFNBQUcsRUFBRUEsSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQUksS0FBSyxNQUFULEdBQWtCLEdBQWxCLGNBQTRCQSxJQUE1QixDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlULEtBQUssQ0FBQ1MsSUFBRCxDQUFULENBREYsQ0FERixDQURGO0FBT0QsR0FSYSxDQUFkO0FBVUEsU0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFSixXQUFLLEVBQUxBLEtBQUY7QUFBU1IsVUFBSSxFQUFKQSxJQUFUO0FBQWVGLGNBQVEsRUFBUkE7QUFBZixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBREgsQ0FERjtBQUtELENBOUJNOztHQUFNRCxjOztLQUFBQSxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQzN2YyOGMxODkzOTY5NjdiYzRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuZWQsIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgc2V0T3BlbighaXNPcGVuZWQpO1xuICAgIGNvbnNvbGUubG9nKGlzT3BlbmVkKTtcbiAgfTtcblxuICBjb25zdCBwYWdlcyA9IHtcbiAgICBibG9nOiBcItCx0LvQvtCzXCIsXG4gICAgYWJvdXQ6IFwi0L7QsSDRjdGC0L7QvCDQsdC70L7Qs9C1XCIsXG4gICAgc3RhdGVtZW50OiBcItGD0YLQstC10YDQttC00LXQvdC40LUg0LLQtdGA0YtcIixcbiAgICBnaXZlOiBcItC/0L7QtNC00LXRgNC20Lgg0L/RgNC+0LXQutGCXCIsXG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBPYmplY3Qua2V5cyhwYWdlcykubWFwKChsaW5rKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0xMiBsZzpwbC00IFwiIGtleT17bGlua30+XG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmsgPT09IFwiYmxvZ1wiID8gXCIvXCIgOiBgLyR7bGlua31gfT5cbiAgICAgICAgICA8YT57cGFnZXNbbGlua119PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGlua3MsIG9wZW4sIGlzT3BlbmVkIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9