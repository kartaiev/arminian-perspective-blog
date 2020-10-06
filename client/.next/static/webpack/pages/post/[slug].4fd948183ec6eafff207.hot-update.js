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
    categories: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwiYm9keSIsImNhdGVnb3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQXFCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUVQO0FBQUEsdUJBREpDLElBQ0k7QUFBQSxNQURJQyxTQUNKLGFBRElBLFNBQ0o7QUFBQSxNQURlQyxLQUNmLGFBRGVBLEtBQ2Y7QUFBQSxNQURzQkMsUUFDdEIsYUFEc0JBLFFBQ3RCO0FBQUEsTUFEZ0NDLFdBQ2hDLGFBRGdDQSxXQUNoQztBQUFBLE1BRDZDQyxJQUM3QyxhQUQ2Q0EsSUFDN0M7QUFBQSxNQURtREMsSUFDbkQsYUFEbURBLElBQ25EO0FBQUEsTUFEeURDLFVBQ3pELGFBRHlEQSxVQUN6RDtBQUNKLFNBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQyxtQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixTQUFTLElBQUksTUFBQyxvRUFBRDtBQUFXLGFBQVMsRUFBRUEsU0FBdEI7QUFBaUMsU0FBSyxFQUFFQyxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGhCLEVBRUUsTUFBQyx3RUFBRDtBQUNFLFNBQUssRUFBRUEsS0FEVDtBQUVFLFlBQVEsRUFBRUMsUUFGWjtBQUdFLFFBQUksRUFBRUcsSUFIUjtBQUlFLGVBQVcsRUFBRUYsV0FKZjtBQUtFLFFBQUksRUFBRUMsSUFMUjtBQU1FLGNBQVUsRUFBRUUsVUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGO0FBZUQsQ0FsQkQ7O0tBQU1SLEk7O0FBb0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS40ZmQ5NDgxODNlYzZlYWZmZjIwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRTaW5nbGVQb3N0LCBnZXRBbGxQb3N0cyB9IGZyb20gXCJsaWIvYXBpXCI7XG5pbXBvcnQgUG9zdENvdmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Qb3N0Q292ZXJcIjtcbmltcG9ydCBQb3N0Qm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keVwiO1xuaW1wb3J0IEF1dGhvckRhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL0F1dGhvckRhdGVcIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Q2F0ZWdvcmllc1wiO1xuaW1wb3J0IHsgZ2V0QWxsU2x1Z3MgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRTaW5nbGVQb3N0KHBhcmFtcy5zbHVnKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsU2x1Z3MoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKCh7IHNsdWcgfSkgPT4gKHtcbiAgICAgIHBhcmFtczogeyBzbHVnOiBzbHVnLmN1cnJlbnQgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5jb25zdCBQb3N0ID0gKHtcbiAgcG9zdDogeyBtYWluSW1hZ2UsIHRpdGxlLCBzdWJ0aXRsZSwgcHVibGlzaGVkQXQsIG5hbWUsIGJvZHksIGNhdGVnb3JpZXMgfSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEJveCBhcz1cImFydGljbGVcIiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRhaW5lclwiPlxuICAgICAgICB7bWFpbkltYWdlICYmIDxQb3N0Q292ZXIgbWFpbkltYWdlPXttYWluSW1hZ2V9IHRpdGxlPXt0aXRsZX0gLz59XG4gICAgICAgIDxQb3N0Qm9keVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==