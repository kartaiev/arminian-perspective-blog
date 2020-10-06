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
/* harmony import */ var _chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Grid */ "./node_modules/@chakra-ui/core/dist/es/Grid/index.js");
/* harmony import */ var _chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core/dist/Divider */ "./node_modules/@chakra-ui/core/dist/es/Divider/index.js");
/* harmony import */ var _PostCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCategories */ "./components/single-post/PostCategories.js");
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

  return __jsx(_chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    templateColumns: "3fr auto 1fr",
    gap: 6,
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["color"][colorMode],
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    publishedAt: publishedAt,
    secondProp: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h1",
    my: "6",
    fontSize: "4xl",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["color"][colorMode],
    className: "article-body-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, title), __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    as: "h2",
    fontSize: "2xl",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_6__["colorAlt"][colorMode],
    className: "article-body-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "my-6",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_6__["borderColor"][colorMode],
    orientation: "vertical",
    my: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, categories && __jsx(_PostCategories__WEBPACK_IMPORTED_MODULE_9__["default"], {
    categories: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 27
    }
  })));
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

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW5nbGUtcG9zdC9Qb3N0Qm9keS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdEJvZHkiLCJib2R5IiwidGl0bGUiLCJzdWJ0aXRsZSIsInB1Ymxpc2hlZEF0IiwibmFtZSIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImNvbG9yIiwiY29sb3JBbHQiLCJib3JkZXJDb2xvciIsImNhdGVnb3JpZXMiLCJQb3N0IiwicG9zdCIsIm1haW5JbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtEO0FBQUE7O0FBQUEsTUFBL0NDLElBQStDLFFBQS9DQSxJQUErQztBQUFBLE1BQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxzQkFDM0NDLG9FQUFZLEVBRCtCO0FBQUEsTUFDekRDLFNBRHlELGlCQUN6REEsU0FEeUQ7O0FBR2pFLFNBQ0UsTUFBQyxpRUFBRDtBQUNFLG1CQUFlLEVBQUMsY0FEbEI7QUFFRSxPQUFHLEVBQUUsQ0FGUDtBQUdFLFNBQUssRUFBRUMsa0RBQUssQ0FBQ0QsU0FBRCxDQUhkO0FBSUUsYUFBUyxFQUFDLHdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVksZUFBVyxFQUFFSCxXQUF6QjtBQUFzQyxjQUFVLEVBQUVDLElBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0VBQUQ7QUFDRSxNQUFFLEVBQUMsSUFETDtBQUVFLE1BQUUsRUFBQyxHQUZMO0FBR0UsWUFBUSxFQUFDLEtBSFg7QUFJRSxTQUFLLEVBQUVHLGtEQUFLLENBQUNELFNBQUQsQ0FKZDtBQUtFLGFBQVMsRUFBQyxvQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dMLEtBUEgsQ0FGRixFQVdFLE1BQUMsb0VBQUQ7QUFDRSxNQUFFLEVBQUMsSUFETDtBQUVFLFlBQVEsRUFBQyxLQUZYO0FBR0UsU0FBSyxFQUFFTyxxREFBUSxDQUFDRixTQUFELENBSGpCO0FBSUUsYUFBUyxFQUFDLHVCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0osUUFOSCxDQVhGLEVBbUJFLE1BQUMscUVBQUQ7QUFBYyxhQUFTLEVBQUMsTUFBeEI7QUFBK0IsVUFBTSxFQUFFRixJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLENBTkYsRUEyQkUsTUFBQyxvRUFBRDtBQUNFLGVBQVcsRUFBRVMsd0RBQVcsQ0FBQ0gsU0FBRCxDQUQxQjtBQUVFLGVBQVcsRUFBQyxVQUZkO0FBR0UsTUFBRSxFQUFDLEdBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixFQWdDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUksVUFBVSxJQUFJLE1BQUMsdURBQUQ7QUFBZ0IsY0FBVSxFQUFFQSxVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBCLENBaENGLENBREY7QUFvQ0QsQ0F2Q0Q7O0dBQU1YLFE7VUFDa0JNLDREOzs7S0FEbEJOLFE7QUF5Q1NBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBcUJBLElBQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BRVA7QUFBQSx1QkFESkMsSUFDSTtBQUFBLE1BRElDLFNBQ0osYUFESUEsU0FDSjtBQUFBLE1BRGVaLEtBQ2YsYUFEZUEsS0FDZjtBQUFBLE1BRHNCQyxRQUN0QixhQURzQkEsUUFDdEI7QUFBQSxNQURnQ0MsV0FDaEMsYUFEZ0NBLFdBQ2hDO0FBQUEsTUFENkNDLElBQzdDLGFBRDZDQSxJQUM3QztBQUFBLE1BRG1ESixJQUNuRCxhQURtREEsSUFDbkQ7QUFBQSxNQUR5RFUsVUFDekQsYUFEeURBLFVBQ3pEO0FBQ0osU0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBa0IsYUFBUyxFQUFDLG1CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLFNBQVMsSUFBSSxNQUFDLG9FQUFEO0FBQVcsYUFBUyxFQUFFQSxTQUF0QjtBQUFpQyxTQUFLLEVBQUVaLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEIsRUFFRSxNQUFDLHdFQUFEO0FBQ0UsU0FBSyxFQUFFQSxLQURUO0FBRUUsWUFBUSxFQUFFQyxRQUZaO0FBR0UsUUFBSSxFQUFFRixJQUhSO0FBSUUsZUFBVyxFQUFFRyxXQUpmO0FBS0UsUUFBSSxFQUFFQyxJQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREY7QUFjRCxDQWpCRDs7S0FBTU8sSTs7QUFtQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjc4YWZkYzVhNTI4NGYyZThlNzU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcbmltcG9ydCBBdXRob3JEYXRlIGZyb20gXCIuLi9zaGFyZWQvQXV0aG9yRGF0ZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvSGVhZGluZ1wiO1xuaW1wb3J0IHsgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IHsgY29sb3IsIGNvbG9yQWx0LCBib3JkZXJDb2xvciB9IGZyb20gXCIuLi8uLi9jdXN0b21UaGVtZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0dyaWRcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9EaXZpZGVyXCI7XG5pbXBvcnQgUG9zdENhdGVnb3JpZXMgZnJvbSBcIi4vUG9zdENhdGVnb3JpZXNcIjtcblxuY29uc3QgUG9zdEJvZHkgPSAoeyBib2R5LCB0aXRsZSwgc3VidGl0bGUsIHB1Ymxpc2hlZEF0LCBuYW1lIH0pID0+IHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cIjNmciBhdXRvIDFmclwiXG4gICAgICBnYXA9ezZ9XG4gICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS1jb250YWluZXJcIlxuICAgID5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxBdXRob3JEYXRlIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gc2Vjb25kUHJvcD17bmFtZX0gLz5cbiAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICBteT1cIjZcIlxuICAgICAgICAgIGZvbnRTaXplPVwiNHhsXCJcbiAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlLWJvZHktdGl0bGVcIlxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgYXM9XCJoMlwiXG4gICAgICAgICAgZm9udFNpemU9XCIyeGxcIlxuICAgICAgICAgIGNvbG9yPXtjb2xvckFsdFtjb2xvck1vZGVdfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS1zdWJ0aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEJsb2NrQ29udGVudCBjbGFzc05hbWU9XCJteS02XCIgYmxvY2tzPXtib2R5fSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8RGl2aWRlclxuICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgIG15PVwiNlwiXG4gICAgICAvPlxuICAgICAgPEJveD57Y2F0ZWdvcmllcyAmJiA8UG9zdENhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz59PC9Cb3g+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEJvZHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IGdldFNpbmdsZVBvc3QsIGdldEFsbFBvc3RzIH0gZnJvbSBcImxpYi9hcGlcIjtcbmltcG9ydCBQb3N0Q292ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL1Bvc3RDb3ZlclwiO1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpbmdsZS1wb3N0L1Bvc3RCb2R5XCI7XG5pbXBvcnQgQXV0aG9yRGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvQXV0aG9yRGF0ZVwiO1xuaW1wb3J0IFBvc3RDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpbmdsZS1wb3N0L1Bvc3RDYXRlZ29yaWVzXCI7XG5pbXBvcnQgeyBnZXRBbGxTbHVncyB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFNpbmdsZVBvc3QocGFyYW1zLnNsdWcpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxTbHVncygpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHsgc2x1ZyB9KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHNsdWc6IHNsdWcuY3VycmVudCB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmNvbnN0IFBvc3QgPSAoe1xuICBwb3N0OiB7IG1haW5JbWFnZSwgdGl0bGUsIHN1YnRpdGxlLCBwdWJsaXNoZWRBdCwgbmFtZSwgYm9keSwgY2F0ZWdvcmllcyB9LFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Qm94IGFzPVwiYXJ0aWNsZVwiIGNsYXNzTmFtZT1cImFydGljbGUtY29udGFpbmVyXCI+XG4gICAgICAgIHttYWluSW1hZ2UgJiYgPFBvc3RDb3ZlciBtYWluSW1hZ2U9e21haW5JbWFnZX0gdGl0bGU9e3RpdGxlfSAvPn1cbiAgICAgICAgPFBvc3RCb2R5XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==