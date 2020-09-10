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
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\context\\global.context.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var GlobalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined, undefined);
var GlobalProvider = function GlobalProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"])(),
      isOpened = _useToggle.isToggled,
      setOpen = _useToggle.setToggle,
      open = _useToggle.toggle;

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
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link === "blog" ? "/" : "/".concat(link),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, pages[link])));
  });
  return __jsx(GlobalContext.Provider, {
    value: {
      links: links,
      isOpened: isOpened,
      setOpen: setOpen,
      open: open
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, children);
};

_s(GlobalProvider, "r3EBLkATD/IJmdnKttH7O+9+q34=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9nbG9iYWwuY29udGV4dC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VUb2dnbGUiLCJpc09wZW5lZCIsImlzVG9nZ2xlZCIsInNldE9wZW4iLCJzZXRUb2dnbGUiLCJvcGVuIiwidG9nZ2xlIiwicGFnZXMiLCJibG9nIiwiYWJvdXQiLCJzdGF0ZW1lbnQiLCJnaXZlIiwibGlua3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDQyxTQUFELEVBQVlBLFNBQVosQ0FBbkM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG1CQUNvQkMsa0VBQVMsRUFEN0I7QUFBQSxNQUMzQkMsUUFEMkIsY0FDdENDLFNBRHNDO0FBQUEsTUFDTkMsT0FETSxjQUNqQkMsU0FEaUI7QUFBQSxNQUNXQyxJQURYLGNBQ0dDLE1BREg7O0FBRzlDLE1BQU1DLEtBQUssR0FBRztBQUNaQyxRQUFJLEVBQUUsTUFETTtBQUVaQyxTQUFLLEVBQUUsZUFGSztBQUdaQyxhQUFTLEVBQUUsa0JBSEM7QUFJWkMsUUFBSSxFQUFFO0FBSk0sR0FBZDtBQU9BLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLEtBQVosRUFBbUJRLEdBQW5CLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUM3QyxXQUNFO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQStCLFNBQUcsRUFBRUEsSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQUksS0FBSyxNQUFULEdBQWtCLEdBQWxCLGNBQTRCQSxJQUE1QixDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlULEtBQUssQ0FBQ1MsSUFBRCxDQUFULENBREYsQ0FERixDQURGO0FBT0QsR0FSYSxDQUFkO0FBVUEsU0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFSixXQUFLLEVBQUxBLEtBQUY7QUFBU1gsY0FBUSxFQUFSQSxRQUFUO0FBQW1CRSxhQUFPLEVBQVBBLE9BQW5CO0FBQTRCRSxVQUFJLEVBQUpBO0FBQTVCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sUUFESCxDQURGO0FBS0QsQ0F6Qk07O0dBQU1ELGM7VUFDdURFLDBEOzs7S0FEdkRGLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTgxMGU1MmNmMmQxNDUzOGM3NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQ6IGlzT3BlbmVkLCBzZXRUb2dnbGU6IHNldE9wZW4sIHRvZ2dsZTogb3BlbiB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgcGFnZXMgPSB7XG4gICAgYmxvZzogXCLQsdC70L7Qs1wiLFxuICAgIGFib3V0OiBcItC+0LEg0Y3RgtC+0Lwg0LHQu9C+0LPQtVwiLFxuICAgIHN0YXRlbWVudDogXCLRg9GC0LLQtdGA0LbQtNC10L3QuNC1INCy0LXRgNGLXCIsXG4gICAgZ2l2ZTogXCLQv9C+0LTQtNC10YDQttC4INC/0YDQvtC10LrRglwiLFxuICB9O1xuXG4gIGNvbnN0IGxpbmtzID0gT2JqZWN0LmtleXMocGFnZXMpLm1hcCgobGluaykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicGItMTIgbGc6cGwtNCBcIiBrZXk9e2xpbmt9PlxuICAgICAgICA8TGluayBocmVmPXtsaW5rID09PSBcImJsb2dcIiA/IFwiL1wiIDogYC8ke2xpbmt9YH0+XG4gICAgICAgICAgPGE+e3BhZ2VzW2xpbmtdfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxpbmtzLCBpc09wZW5lZCwgc2V0T3Blbiwgb3BlbiB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==