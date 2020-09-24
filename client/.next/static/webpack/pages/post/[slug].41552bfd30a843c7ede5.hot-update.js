webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/client */ "./lib/client.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\post\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Post = function Post(_ref) {
  var post = _ref.post;
  console.log(post);
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "h-full mb-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, post.mainImage && __jsx("div", {
    className: "mainImage-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "w-full h-full block object-cover top-0 left-0 align-top",
    src: Object(lib_helpers__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(post.mainImage).auto("format").url(),
    alt: post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "max-w-4xl  mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "font-bold text-2xl my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, post.title), __jsx("span", {
    className: "my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, post.name), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "my-4",
    blocks: post.body
  }, _lib_client__WEBPACK_IMPORTED_MODULE_5__["default"].config(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })))));
};

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwibWFpbkltYWdlIiwidXJsRm9yIiwiYXV0byIsInVybCIsInRpdGxlIiwibmFtZSIsImJvZHkiLCJjbGllbnQiLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFNBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUMsY0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLENBQUNHLFNBQUwsSUFDQztBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMseURBRFo7QUFFRSxPQUFHLEVBQUVDLDBEQUFNLENBQUNKLElBQUksQ0FBQ0csU0FBTixDQUFOLENBQXVCRSxJQUF2QixDQUE0QixRQUE1QixFQUFzQ0MsR0FBdEMsRUFGUDtBQUdFLE9BQUcsRUFBRU4sSUFBSSxDQUFDTyxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZKLEVBVUU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNQLElBQUksQ0FBQ08sS0FBOUMsQ0FERixFQUVFO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JQLElBQUksQ0FBQ1EsSUFBN0IsQ0FGRixFQUdFLE1BQUMscUVBQUQ7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFVBQU0sRUFBRVIsSUFBSSxDQUFDUztBQUZmLEtBR01DLG1EQUFNLENBQUNDLE1BQVAsRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEYsQ0FWRixDQURGLENBREY7QUErQkQsQ0FqQ0Q7O0tBQU1aLEk7O0FBdURTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS40MTU1MmJmZDMwYTg0M2M3ZWRlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCJsaWIvaGVscGVyc1wiO1xuaW1wb3J0IHsgZ2V0U2luZ2xlUG9zdCwgZ2V0QWxsUG9zdHMgfSBmcm9tIFwibGliL2FwaVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHBvc3QpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJoLWZ1bGwgbWItMjBcIj5cbiAgICAgICAge3Bvc3QubWFpbkltYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5JbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBibG9jayBvYmplY3QtY292ZXIgdG9wLTAgbGVmdC0wIGFsaWduLXRvcFwiXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS5hdXRvKFwiZm9ybWF0XCIpLnVybCgpfVxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCAgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgbXktNFwiPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXktNFwiPntwb3N0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTRcIlxuICAgICAgICAgICAgYmxvY2tzPXtwb3N0LmJvZHl9XG4gICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qe3Bvc3QuY2F0ZWdvcmllcyAmJiAoKi99XG4gICAgICAgICAgey8qICA8dWw+Ki99XG4gICAgICAgICAgey8qICAgIHtwb3N0LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKCovfVxuICAgICAgICAgIHsvKiAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4qL31cbiAgICAgICAgICB7LyogICAgKSl9Ki99XG4gICAgICAgICAgey8qICA8L3VsPiovfVxuICAgICAgICAgIHsvKil9Ki99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFNpbmdsZVBvc3QocGFyYW1zLnNsdWcpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBvc3RzLm1hcCgocG9zdCkgPT4gKHtcbiAgICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWcuY3VycmVudCB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9