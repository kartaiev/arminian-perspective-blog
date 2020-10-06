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
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\single-post\\PostBody.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostBody = function PostBody(_ref) {
  _s();

  var body = _ref.body,
      title = _ref.title,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      name = _ref.name;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  return __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    publishedAt: publishedAt,
    secondProp: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h1",
    fontSize: "4xl",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["color"][colorMode],
    className: "article-body-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, title), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h2",
    fontSize: "2xl",
    className: "article-body-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "my-6",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

_s(PostBody, "2Uu86IH3do63pkN3s1ysdRMmJuc=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useColorMode"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keS5qcyJdLCJuYW1lcyI6WyJQb3N0Qm9keSIsImJvZHkiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJuYW1lIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrRDtBQUFBOztBQUFBLE1BQS9DQyxJQUErQyxRQUEvQ0EsSUFBK0M7QUFBQSxNQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsc0JBQzNDQyxvRUFBWSxFQUQrQjtBQUFBLE1BQ3pEQyxTQUR5RCxpQkFDekRBLFNBRHlEOztBQUdqRSxTQUNFLE1BQUMsZ0VBQUQ7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBWSxlQUFXLEVBQUVILFdBQXpCO0FBQXNDLGNBQVUsRUFBRUMsSUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvRUFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsWUFBUSxFQUFDLEtBRlg7QUFHRSxTQUFLLEVBQUVHLGtEQUFLLENBQUNELFNBQUQsQ0FIZDtBQUlFLGFBQVMsRUFBQyxvQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdMLEtBTkgsQ0FGRixFQVVFLE1BQUMsb0VBQUQ7QUFBUyxNQUFFLEVBQUMsSUFBWjtBQUFpQixZQUFRLEVBQUMsS0FBMUI7QUFBZ0MsYUFBUyxFQUFDLHVCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBREgsQ0FWRixFQWFFLE1BQUMscUVBQUQ7QUFBYyxhQUFTLEVBQUMsTUFBeEI7QUFBK0IsVUFBTSxFQUFFRixJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsQ0FERjtBQWlCRCxDQXBCRDs7R0FBTUQsUTtVQUNrQk0sNEQ7OztLQURsQk4sUTtBQXNCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYjE1YWVhZjcwOGUwOGRjNWQ5NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuaW1wb3J0IEF1dGhvckRhdGUgZnJvbSBcIi4uL3NoYXJlZC9BdXRob3JEYXRlXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9IZWFkaW5nXCI7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQge1xuICBiZ0NvbG9yLFxuICBiZ0NvbG9yUmV2ZXJzZWQsXG4gIGJvcmRlckNvbG9yLFxuICBjb2xvcixcbiAgY29sb3JSZXZlcnNlZCxcbn0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5cbmNvbnN0IFBvc3RCb2R5ID0gKHsgYm9keSwgdGl0bGUsIHN1YnRpdGxlLCBwdWJsaXNoZWRBdCwgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LWNvbnRhaW5lclwiPlxuICAgICAgPEF1dGhvckRhdGUgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSBzZWNvbmRQcm9wPXtuYW1lfSAvPlxuICAgICAgPEhlYWRpbmdcbiAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgIGZvbnRTaXplPVwiNHhsXCJcbiAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS10aXRsZVwiXG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBmb250U2l6ZT1cIjJ4bFwiIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS1zdWJ0aXRsZVwiPlxuICAgICAgICB7c3VidGl0bGV9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8QmxvY2tDb250ZW50IGNsYXNzTmFtZT1cIm15LTZcIiBibG9ja3M9e2JvZHl9IC8+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Qm9keTtcbiJdLCJzb3VyY2VSb290IjoiIn0=