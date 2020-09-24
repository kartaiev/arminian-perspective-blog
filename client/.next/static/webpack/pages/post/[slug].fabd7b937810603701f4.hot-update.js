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
/* harmony import */ var _components_PostCover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostCover */ "./components/PostCover.js");
/* harmony import */ var _components_PostBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PostBody */ "./components/PostBody.js");
/* harmony import */ var _components_PostAuthorDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostAuthorDate */ "./components/PostAuthorDate.js");
/* harmony import */ var _components_layout_PostCatigories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/PostCatigories */ "./components/layout/PostCatigories.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\post\\[slug].js";

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
  console.log(categories);
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "h-full mt-6 mb-20 text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, mainImage && __jsx(_components_PostCover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mainImage: mainImage,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }), __jsx(_components_PostBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    subtitle: subtitle,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_components_PostAuthorDate__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: name,
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwiYm9keSIsImNhdGVnb3JpZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUF1QkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FFUDtBQUFBLHVCQURKQyxJQUNJO0FBQUEsTUFESUMsU0FDSixhQURJQSxTQUNKO0FBQUEsTUFEZUMsS0FDZixhQURlQSxLQUNmO0FBQUEsTUFEc0JDLFFBQ3RCLGFBRHNCQSxRQUN0QjtBQUFBLE1BRGdDQyxXQUNoQyxhQURnQ0EsV0FDaEM7QUFBQSxNQUQ2Q0MsSUFDN0MsYUFENkNBLElBQzdDO0FBQUEsTUFEbURDLElBQ25ELGFBRG1EQSxJQUNuRDtBQUFBLE1BRHlEQyxVQUN6RCxhQUR5REEsVUFDekQ7QUFDSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFDQSxTQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsYUFBUyxFQUFDLGlDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFNBQVMsSUFBSSxNQUFDLDZEQUFEO0FBQVcsYUFBUyxFQUFFQSxTQUF0QjtBQUFpQyxTQUFLLEVBQUVDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEIsRUFFRSxNQUFDLDREQUFEO0FBQVUsU0FBSyxFQUFFQSxLQUFqQjtBQUF3QixZQUFRLEVBQUVDLFFBQWxDO0FBQTRDLFFBQUksRUFBRUcsSUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxrRUFBRDtBQUFnQixRQUFJLEVBQUVELElBQXRCO0FBQTRCLGVBQVcsRUFBRUQsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERjtBQVVELENBZEQ7O0tBQU1MLEk7O0FBZ0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5mYWJkN2I5Mzc4MTA2MDM3MDFmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRTaW5nbGVQb3N0LCBnZXRBbGxQb3N0cyB9IGZyb20gXCJsaWIvYXBpXCI7XG5pbXBvcnQgUG9zdENvdmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDb3ZlclwiO1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RCb2R5XCI7XG5pbXBvcnQgUG9zdEF1dGhvckRhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEF1dGhvckRhdGVcIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvUG9zdENhdGlnb3JpZXNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFNpbmdsZVBvc3QocGFyYW1zLnNsdWcpO1xuICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnQgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5jb25zdCBQb3N0ID0gKHtcbiAgcG9zdDogeyBtYWluSW1hZ2UsIHRpdGxlLCBzdWJ0aXRsZSwgcHVibGlzaGVkQXQsIG5hbWUsIGJvZHksIGNhdGVnb3JpZXMgfSxcbn0pID0+IHtcbiAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImgtZnVsbCBtdC02IG1iLTIwIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAge21haW5JbWFnZSAmJiA8UG9zdENvdmVyIG1haW5JbWFnZT17bWFpbkltYWdlfSB0aXRsZT17dGl0bGV9IC8+fVxuICAgICAgICA8UG9zdEJvZHkgdGl0bGU9e3RpdGxlfSBzdWJ0aXRsZT17c3VidGl0bGV9IGJvZHk9e2JvZHl9IC8+XG4gICAgICAgIDxQb3N0QXV0aG9yRGF0ZSBuYW1lPXtuYW1lfSBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9IC8+XG4gICAgICAgIHsvKntjYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn0qL31cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9