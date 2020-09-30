webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/fetch.context.js":
/*!**********************************!*\
  !*** ./context/fetch.context.js ***!
  \**********************************/
/*! exports provided: FetchContext, FetchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchContext", function() { return FetchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProvider", function() { return FetchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\context\\fetch.context.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var FetchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var FetchProvider = function FetchProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      initialData = _useState[0],
      setInitialData = _useState[1];

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_1__["useGetPosts"])(initialData),
      data = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  var increaseSize = function increaseSize() {
    return setSize(size + 1);
  };

  return __jsx(FetchContext.Provider, {
    value: {
      setInitialData: setInitialData,
      increaseSize: increaseSize,
      paginatedPosts: data
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, children);
};

_s(FetchProvider, "qGMKqSBHNj8Y3qzaCMqAxr9M+kM=", false, function () {
  return [_actions__WEBPACK_IMPORTED_MODULE_1__["useGetPosts"]];
});

_c = FetchProvider;

var _c;

$RefreshReg$(_c, "FetchProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9mZXRjaC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkZldGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJGZXRjaFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImluaXRpYWxEYXRhIiwic2V0SW5pdGlhbERhdGEiLCJ1c2VHZXRQb3N0cyIsImRhdGEiLCJzaXplIiwic2V0U2l6ZSIsImluY3JlYXNlU2l6ZSIsInBhZ2luYXRlZFBvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsRUFBbEM7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ3RDQyxXQURzQztBQUFBLE1BQ3pCQyxjQUR5Qjs7QUFBQSxxQkFHYkMsNERBQVcsQ0FBQ0YsV0FBRCxDQUhFO0FBQUEsTUFHckNHLElBSHFDLGdCQUdyQ0EsSUFIcUM7QUFBQSxNQUcvQkMsSUFIK0IsZ0JBRy9CQSxJQUgrQjtBQUFBLE1BR3pCQyxPQUh5QixnQkFHekJBLE9BSHlCOztBQUs3QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1ELE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBYjtBQUFBLEdBQXJCOztBQUVBLFNBQ0UsTUFBQyxZQUFELENBQWMsUUFBZDtBQUNFLFNBQUssRUFBRTtBQUFFSCxvQkFBYyxFQUFkQSxjQUFGO0FBQWtCSyxrQkFBWSxFQUFaQSxZQUFsQjtBQUFnQ0Msb0JBQWMsRUFBRUo7QUFBaEQsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0dMLFFBSEgsQ0FERjtBQU9ELENBZE07O0dBQU1ELGE7VUFHcUJLLG9EOzs7S0FIckJMLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYzI2Yjk5N2MzZWM1NDhkMmIwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBGZXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBGZXRjaFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaW5pdGlhbERhdGEsIHNldEluaXRpYWxEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7IGRhdGEsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICBjb25zdCBpbmNyZWFzZVNpemUgPSAoKSA9PiBzZXRTaXplKHNpemUgKyAxKTtcblxuICByZXR1cm4gKFxuICAgIDxGZXRjaENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IHNldEluaXRpYWxEYXRhLCBpbmNyZWFzZVNpemUsIHBhZ2luYXRlZFBvc3RzOiBkYXRhIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRmV0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=