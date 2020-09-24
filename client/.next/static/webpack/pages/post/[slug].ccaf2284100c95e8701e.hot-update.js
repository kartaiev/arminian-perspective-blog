webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/PostAuthorDate.js":
/*!**************************************!*\
  !*** ./components/PostAuthorDate.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PublishedDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublishedDate */ "./components/PublishedDate.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\PostAuthorDate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostAuthorDate = function PostAuthorDate(_ref) {
  var name = _ref.name,
      publishedAt = _ref.publishedAt;
  return __jsx("div", {
    className: "py-2 flex justify-between text-sm text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "hover:text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, name), __jsx(_PublishedDate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

_c = PostAuthorDate;
/* harmony default export */ __webpack_exports__["default"] = (PostAuthorDate);

var _c;

$RefreshReg$(_c, "PostAuthorDate");

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
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client */ "./lib/client.js");
/* harmony import */ var _components_PostCover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PostCover */ "./components/PostCover.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _components_PublishedDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PublishedDate */ "./components/PublishedDate.js");
/* harmony import */ var _components_PostBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostBody */ "./components/PostBody.js");
/* harmony import */ var _components_PostAuthorDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PostAuthorDate */ "./components/PostAuthorDate.js");
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
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "h-full mt-6 mb-20 text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, mainImage && __jsx(_components_PostCover__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mainImage: mainImage,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  }), __jsx(_components_PostBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: title,
    subtitle: subtitle,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_components_PostAuthorDate__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: name,
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0QXV0aG9yRGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsiUG9zdEF1dGhvckRhdGUiLCJuYW1lIiwicHVibGlzaGVkQXQiLCJQb3N0IiwicG9zdCIsIm1haW5JbWFnZSIsInRpdGxlIiwic3VidGl0bGUiLCJib2R5IiwiY2F0ZWdvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTJCO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDaEQsU0FDRTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNELElBQXZDLENBREYsRUFFRSxNQUFDLHNEQUFEO0FBQWUsZUFBVyxFQUFFQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBUEQ7O0tBQU1GLGM7QUFTU0EsNkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUVQO0FBQUEsdUJBREpDLElBQ0k7QUFBQSxNQURJQyxTQUNKLGFBRElBLFNBQ0o7QUFBQSxNQURlQyxLQUNmLGFBRGVBLEtBQ2Y7QUFBQSxNQURzQkMsUUFDdEIsYUFEc0JBLFFBQ3RCO0FBQUEsTUFEZ0NMLFdBQ2hDLGFBRGdDQSxXQUNoQztBQUFBLE1BRDZDRCxJQUM3QyxhQUQ2Q0EsSUFDN0M7QUFBQSxNQURtRE8sSUFDbkQsYUFEbURBLElBQ25EO0FBQUEsTUFEeURDLFVBQ3pELGFBRHlEQSxVQUN6RDtBQUNKLFNBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUMsaUNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osU0FBUyxJQUFJLE1BQUMsNkRBQUQ7QUFBVyxhQUFTLEVBQUVBLFNBQXRCO0FBQWlDLFNBQUssRUFBRUMsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURoQixFQUVFLE1BQUMsNERBQUQ7QUFBVSxTQUFLLEVBQUVBLEtBQWpCO0FBQXdCLFlBQVEsRUFBRUMsUUFBbEM7QUFBNEMsUUFBSSxFQUFFQyxJQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG1FQUFEO0FBQWdCLFFBQUksRUFBRVAsSUFBdEI7QUFBNEIsZUFBVyxFQUFFQyxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixDQURGO0FBZ0JELENBbkJEOztLQUFNQyxJOztBQXlDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uY2NhZjIyODQxMDBjOTVlODcwMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQdWJsaXNoZWREYXRlIGZyb20gXCIuL1B1Ymxpc2hlZERhdGVcIjtcblxuY29uc3QgUG9zdEF1dGhvckRhdGUgPSAoeyBuYW1lLCBwdWJsaXNoZWRBdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTgwMFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxQdWJsaXNoZWREYXRlIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RBdXRob3JEYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCJsaWIvaGVscGVyc1wiO1xuaW1wb3J0IHsgZ2V0U2luZ2xlUG9zdCwgZ2V0QWxsUG9zdHMgfSBmcm9tIFwibGliL2FwaVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuaW1wb3J0IFBvc3RDb3ZlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0Q292ZXJcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgcnUgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQgUHVibGlzaGVkRGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QdWJsaXNoZWREYXRlXCI7XG5pbXBvcnQgUG9zdEJvZHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEJvZHlcIjtcbmltcG9ydCBQb3N0QXV0aG9yRGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0QXV0aG9yRGF0ZVwiO1xuXG5jb25zdCBQb3N0ID0gKHtcbiAgcG9zdDogeyBtYWluSW1hZ2UsIHRpdGxlLCBzdWJ0aXRsZSwgcHVibGlzaGVkQXQsIG5hbWUsIGJvZHksIGNhdGVnb3JpZXMgfSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaC1mdWxsIG10LTYgbWItMjAgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICB7bWFpbkltYWdlICYmIDxQb3N0Q292ZXIgbWFpbkltYWdlPXttYWluSW1hZ2V9IHRpdGxlPXt0aXRsZX0gLz59XG4gICAgICAgIDxQb3N0Qm9keSB0aXRsZT17dGl0bGV9IHN1YnRpdGxlPXtzdWJ0aXRsZX0gYm9keT17Ym9keX0gLz5cbiAgICAgICAgPFBvc3RBdXRob3JEYXRlIG5hbWU9e25hbWV9IHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgey8qe2NhdGVnb3JpZXMgJiYgKCovfVxuICAgICAgICB7LyogIDx1bD4qL31cbiAgICAgICAgey8qICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+ICgqL31cbiAgICAgICAgey8qICAgICAgPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPiovfVxuICAgICAgICB7LyogICAgKSl9Ki99XG4gICAgICAgIHsvKiAgPC91bD4qL31cbiAgICAgICAgey8qKX0qL31cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRTaW5nbGVQb3N0KHBhcmFtcy5zbHVnKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnQgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==