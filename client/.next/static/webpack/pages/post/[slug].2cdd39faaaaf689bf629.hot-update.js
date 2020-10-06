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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/api */ "./lib/api.js");
/* harmony import */ var _components_shared_PostCover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/PostCover */ "./components/shared/PostCover.js");
/* harmony import */ var _components_single_post_PostBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/single-post/PostBody */ "./components/single-post/PostBody.js");
/* harmony import */ var _components_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/AuthorDate */ "./components/shared/AuthorDate.js");
/* harmony import */ var _components_single_post_PostCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/single-post/PostCategories */ "./components/single-post/PostCategories.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\pages\\post\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Post = function Post(_ref) {
  var _ref$post = _ref.post,
      mainImage = _ref$post.mainImage,
      title = _ref$post.title,
      subtitle = _ref$post.subtitle,
      publishedAt = _ref$post.publishedAt,
      name = _ref$post.name,
      body = _ref$post.body,
      categories = _ref$post.categories;
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
    as: "article",
    className: "article-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, mainImage && __jsx(_components_shared_PostCover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mainImage: mainImage,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  }), __jsx(_components_single_post_PostBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    subtitle: subtitle,
    body: body,
    publishedAt: publishedAt,
    name: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), categories && __jsx(_components_single_post_PostCategories__WEBPACK_IMPORTED_MODULE_6__["default"], {
    categories: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 24
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwiYm9keSIsImNhdGVnb3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQXFCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUVQO0FBQUEsdUJBREpDLElBQ0k7QUFBQSxNQURJQyxTQUNKLGFBRElBLFNBQ0o7QUFBQSxNQURlQyxLQUNmLGFBRGVBLEtBQ2Y7QUFBQSxNQURzQkMsUUFDdEIsYUFEc0JBLFFBQ3RCO0FBQUEsTUFEZ0NDLFdBQ2hDLGFBRGdDQSxXQUNoQztBQUFBLE1BRDZDQyxJQUM3QyxhQUQ2Q0EsSUFDN0M7QUFBQSxNQURtREMsSUFDbkQsYUFEbURBLElBQ25EO0FBQUEsTUFEeURDLFVBQ3pELGFBRHlEQSxVQUN6RDtBQUNKLFNBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQyxtQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixTQUFTLElBQUksTUFBQyxvRUFBRDtBQUFXLGFBQVMsRUFBRUEsU0FBdEI7QUFBaUMsU0FBSyxFQUFFQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGhCLEVBRUUsTUFBQyx3RUFBRDtBQUNFLFNBQUssRUFBRUEsS0FEVDtBQUVFLFlBQVEsRUFBRUMsUUFGWjtBQUdFLFFBQUksRUFBRUcsSUFIUjtBQUlFLGVBQVcsRUFBRUYsV0FKZjtBQUtFLFFBQUksRUFBRUMsSUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFTR0UsVUFBVSxJQUFJLE1BQUMsOEVBQUQ7QUFBZ0IsY0FBVSxFQUFFQSxVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVGpCLENBREYsQ0FERjtBQWVELENBbEJEOztLQUFNUixJOztBQW9CU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uMmNkZDM5ZmFhYWFmNjg5YmY2MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0U2luZ2xlUG9zdCwgZ2V0QWxsUG9zdHMgfSBmcm9tIFwibGliL2FwaVwiO1xuaW1wb3J0IFBvc3RDb3ZlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvUG9zdENvdmVyXCI7XG5pbXBvcnQgUG9zdEJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2luZ2xlLXBvc3QvUG9zdEJvZHlcIjtcbmltcG9ydCBBdXRob3JEYXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9BdXRob3JEYXRlXCI7XG5pbXBvcnQgUG9zdENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2luZ2xlLXBvc3QvUG9zdENhdGVnb3JpZXNcIjtcbmltcG9ydCB7IGdldEFsbFNsdWdzIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0JveFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0U2luZ2xlUG9zdChwYXJhbXMuc2x1Zyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFNsdWdzKCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBvc3RzLm1hcCgoeyBzbHVnIH0pID0+ICh7XG4gICAgICBwYXJhbXM6IHsgc2x1Zzogc2x1Zy5jdXJyZW50IH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuY29uc3QgUG9zdCA9ICh7XG4gIHBvc3Q6IHsgbWFpbkltYWdlLCB0aXRsZSwgc3VidGl0bGUsIHB1Ymxpc2hlZEF0LCBuYW1lLCBib2R5LCBjYXRlZ29yaWVzIH0sXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxCb3ggYXM9XCJhcnRpY2xlXCIgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250YWluZXJcIj5cbiAgICAgICAge21haW5JbWFnZSAmJiA8UG9zdENvdmVyIG1haW5JbWFnZT17bWFpbkltYWdlfSB0aXRsZT17dGl0bGV9IC8+fVxuICAgICAgICA8UG9zdEJvZHlcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtjYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn1cbiAgICAgIDwvQm94PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=