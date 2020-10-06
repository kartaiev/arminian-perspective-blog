webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/single-post/PostBody.js":
/*!********************************************!*\
  !*** ./components/single-post/PostBody.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/AuthorDate */ "./components/shared/AuthorDate.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core/dist/Heading */ "./node_modules/@chakra-ui/core/dist/es/Heading/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\single-post\\PostBody.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostBody = function PostBody(_ref) {
  var body = _ref.body,
      title = _ref.title,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      name = _ref.name;
  return __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    publishedAt: publishedAt,
    secondProp: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h1",
    fontSize: "4xl",
    className: "article-body-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, title), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h2",
    fontSize: "2xl",
    className: "article-body-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "my-6",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

_c = PostBody;
/* harmony default export */ __webpack_exports__["default"] = (PostBody);

var _c;

$RefreshReg$(_c, "PostBody");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keS5qcyJdLCJuYW1lcyI6WyJQb3N0Qm9keSIsImJvZHkiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrRDtBQUFBLE1BQS9DQyxJQUErQyxRQUEvQ0EsSUFBK0M7QUFBQSxNQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDakUsU0FDRSxNQUFDLGdFQUFEO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVksZUFBVyxFQUFFRCxXQUF6QjtBQUFzQyxjQUFVLEVBQUVDLElBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0VBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsS0FBMUI7QUFBZ0MsYUFBUyxFQUFDLG9CQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILEtBREgsQ0FGRixFQUtFLE1BQUMsb0VBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsS0FBMUI7QUFBZ0MsYUFBUyxFQUFDLHVCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBREgsQ0FMRixFQVFFLE1BQUMscUVBQUQ7QUFBYyxhQUFTLEVBQUMsTUFBeEI7QUFBK0IsVUFBTSxFQUFFRixJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERjtBQVlELENBYkQ7O0tBQU1ELFE7QUFlU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uZjM0ZGRjYTcyNzE5Y2UwYzliN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuaW1wb3J0IEF1dGhvckRhdGUgZnJvbSBcIi4uL3NoYXJlZC9BdXRob3JEYXRlXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9IZWFkaW5nXCI7XG5cbmNvbnN0IFBvc3RCb2R5ID0gKHsgYm9keSwgdGl0bGUsIHN1YnRpdGxlLCBwdWJsaXNoZWRBdCwgbmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9XCJhcnRpY2xlLWJvZHktY29udGFpbmVyXCI+XG4gICAgICA8QXV0aG9yRGF0ZSBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9IHNlY29uZFByb3A9e25hbWV9IC8+XG4gICAgICA8SGVhZGluZyBhcz1cImgxXCIgZm9udFNpemU9XCI0eGxcIiBjbGFzc05hbWU9XCJhcnRpY2xlLWJvZHktdGl0bGVcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIGZvbnRTaXplPVwiMnhsXCIgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LXN1YnRpdGxlXCI+XG4gICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxCbG9ja0NvbnRlbnQgY2xhc3NOYW1lPVwibXktNlwiIGJsb2Nrcz17Ym9keX0gLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RCb2R5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==