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
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "h-full mb-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, post.mainImage && __jsx("div", {
    className: "mainImage-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "w-full h-full block object-cover top-0 left-0 align-top",
    src: Object(lib_helpers__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(post.mainImage).auto("format").url(),
    alt: post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "max-w-4xl  mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "font-bold text-2xl my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, post.title), __jsx("span", {
    className: "my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, post.name), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "my-4",
    blocks: post.content
  }, _lib_client__WEBPACK_IMPORTED_MODULE_5__["default"].config(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJtYWluSW1hZ2UiLCJ1cmxGb3IiLCJhdXRvIiwidXJsIiwidGl0bGUiLCJuYW1lIiwiY29udGVudCIsImNsaWVudCIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsU0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLGFBQVMsRUFBQyxjQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ0MsU0FBTCxJQUNDO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyx5REFEWjtBQUVFLE9BQUcsRUFBRUMsMERBQU0sQ0FBQ0YsSUFBSSxDQUFDQyxTQUFOLENBQU4sQ0FBdUJFLElBQXZCLENBQTRCLFFBQTVCLEVBQXNDQyxHQUF0QyxFQUZQO0FBR0UsT0FBRyxFQUFFSixJQUFJLENBQUNLLEtBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosRUFVRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q0wsSUFBSSxDQUFDSyxLQUE5QyxDQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkwsSUFBSSxDQUFDTSxJQUE3QixDQUZGLEVBR0UsTUFBQyxxRUFBRDtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsVUFBTSxFQUFFTixJQUFJLENBQUNPO0FBRmYsS0FHTUMsbURBQU0sQ0FBQ0MsTUFBUCxFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRixDQVZGLENBREYsQ0FERjtBQStCRCxDQWhDRDs7S0FBTVYsSTs7QUFzRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLmMyMWY1NTk4OTgyYWJiY2JlOGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcImxpYi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBnZXRTaW5nbGVQb3N0LCBnZXRBbGxQb3N0cyB9IGZyb20gXCJsaWIvYXBpXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9saWIvY2xpZW50XCI7XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaC1mdWxsIG1iLTIwXCI+XG4gICAgICAgIHtwb3N0Lm1haW5JbWFnZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluSW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmxvY2sgb2JqZWN0LWNvdmVyIHRvcC0wIGxlZnQtMCBhbGlnbi10b3BcIlxuICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0Lm1haW5JbWFnZSkuYXV0byhcImZvcm1hdFwiKS51cmwoKX1cbiAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgIG14LWF1dG9cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIG15LTRcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm15LTRcIj57cG9zdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteS00XCJcbiAgICAgICAgICAgIGJsb2Nrcz17cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKntwb3N0LmNhdGVnb3JpZXMgJiYgKCovfVxuICAgICAgICAgIHsvKiAgPHVsPiovfVxuICAgICAgICAgIHsvKiAgICB7cG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+ICgqL31cbiAgICAgICAgICB7LyogICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+Ki99XG4gICAgICAgICAgey8qICAgICkpfSovfVxuICAgICAgICAgIHsvKiAgPC91bD4qL31cbiAgICAgICAgICB7LyopfSovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRTaW5nbGVQb3N0KHBhcmFtcy5zbHVnKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnQgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==