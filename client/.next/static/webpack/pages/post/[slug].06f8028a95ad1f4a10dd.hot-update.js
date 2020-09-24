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
/* harmony import */ var _components_PostCover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PostCover */ "./components/PostCover.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _components_PublishedDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PublishedDate */ "./components/PublishedDate.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\post\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Post = function Post(_ref) {
  var _ref$post = _ref.post,
      mainImage = _ref$post.mainImage,
      title = _ref$post.title,
      subtitle = _ref$post.subtitle,
      publishedAt = _ref$post.publishedAt,
      name = _ref$post.name,
      body = _ref$post.body;
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "h-full mt-6 mb-20 text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, mainImage && __jsx(_components_PostCover__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mainImage: mainImage,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 23
    }
  }), __jsx("div", {
    className: "max-w-4xl  mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "font-bold text-2xl mt-6 mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, title), __jsx("h2", {
    className: "font-semibold text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "my-6",
    blocks: body
  }, _lib_client__WEBPACK_IMPORTED_MODULE_5__["default"].config(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "py-2 flex justify-between text-sm text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "hover:text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, name), __jsx(_components_PublishedDate__WEBPACK_IMPORTED_MODULE_9__["default"], {
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwiYm9keSIsImNsaWVudCIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BRVA7QUFBQSx1QkFESkMsSUFDSTtBQUFBLE1BRElDLFNBQ0osYUFESUEsU0FDSjtBQUFBLE1BRGVDLEtBQ2YsYUFEZUEsS0FDZjtBQUFBLE1BRHNCQyxRQUN0QixhQURzQkEsUUFDdEI7QUFBQSxNQURnQ0MsV0FDaEMsYUFEZ0NBLFdBQ2hDO0FBQUEsTUFENkNDLElBQzdDLGFBRDZDQSxJQUM3QztBQUFBLE1BRG1EQyxJQUNuRCxhQURtREEsSUFDbkQ7QUFDSixTQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsYUFBUyxFQUFDLGlDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFNBQVMsSUFBSSxNQUFDLDZEQUFEO0FBQVcsYUFBUyxFQUFFQSxTQUF0QjtBQUFpQyxTQUFLLEVBQUVDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEIsRUFFRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsOEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4Q0EsS0FBOUMsQ0FERixFQUVFO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNDLFFBQTdDLENBRkYsRUFJRSxNQUFDLHFFQUFEO0FBQWMsYUFBUyxFQUFDLE1BQXhCO0FBQStCLFVBQU0sRUFBRUc7QUFBdkMsS0FBaURDLG1EQUFNLENBQUNDLE1BQVAsRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpGLENBRkYsRUFRRTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNILElBQXZDLENBREYsRUFFRSxNQUFDLGlFQUFEO0FBQWUsZUFBVyxFQUFFRCxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FSRixDQURGLENBREY7QUF3QkQsQ0EzQkQ7O0tBQU1MLEk7O0FBaURTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4wNmY4MDI4YTk1YWQxZjRhMTBkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCJsaWIvaGVscGVyc1wiO1xuaW1wb3J0IHsgZ2V0U2luZ2xlUG9zdCwgZ2V0QWxsUG9zdHMgfSBmcm9tIFwibGliL2FwaVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuaW1wb3J0IFBvc3RDb3ZlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0Q292ZXJcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgcnUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgUHVibGlzaGVkRGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdWJsaXNoZWREYXRlXCI7XG5cbmNvbnN0IFBvc3QgPSAoe1xuICBwb3N0OiB7IG1haW5JbWFnZSwgdGl0bGUsIHN1YnRpdGxlLCBwdWJsaXNoZWRBdCwgbmFtZSwgYm9keSB9LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJoLWZ1bGwgbXQtNiBtYi0yMCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgIHttYWluSW1hZ2UgJiYgPFBvc3RDb3ZlciBtYWluSW1hZ2U9e21haW5JbWFnZX0gdGl0bGU9e3RpdGxlfSAvPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIG10LTYgbWItMlwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj57c3VidGl0bGV9PC9oMj5cblxuICAgICAgICAgIDxCbG9ja0NvbnRlbnQgY2xhc3NOYW1lPVwibXktNlwiIGJsb2Nrcz17Ym9keX0gey4uLmNsaWVudC5jb25maWcoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktODAwXCI+e25hbWV9PC9zcGFuPlxuICAgICAgICAgIDxQdWJsaXNoZWREYXRlIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKntwb3N0LmNhdGVnb3JpZXMgJiYgKCovfVxuICAgICAgICB7LyogIDx1bD4qL31cbiAgICAgICAgey8qICAgIHtwb3N0LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKCovfVxuICAgICAgICB7LyogICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+Ki99XG4gICAgICAgIHsvKiAgICApKX0qL31cbiAgICAgICAgey8qICA8L3VsPiovfVxuICAgICAgICB7LyopfSovfVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFNpbmdsZVBvc3QocGFyYW1zLnNsdWcpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBvc3RzLm1hcCgocG9zdCkgPT4gKHtcbiAgICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWcuY3VycmVudCB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9