webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PublishedDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PublishedDate */ "./components/PublishedDate.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\PostCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostCard = function PostCard(_ref) {
  var slug = _ref.slug,
      publishedAt = _ref.publishedAt,
      mainImage = _ref.mainImage,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "mt-6 border-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, mainImage && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "w-full h-56 block object-cover top-0 left-0 align-top",
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "pt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, subtitle), __jsx("div", {
    className: "py-2 flex justify-between text-sm text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx(_PublishedDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hover:text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "\u0447\u0438\u0442\u0430\u0442\u044C"))))));
};

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var App = function App(_ref) {
  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;
  var previews = posts.map(function (_ref2) {
    var _id = _ref2._id,
        _ref2$title = _ref2.title,
        title = _ref2$title === void 0 ? "" : _ref2$title,
        _ref2$subtitle = _ref2.subtitle,
        subtitle = _ref2$subtitle === void 0 ? "" : _ref2$subtitle,
        _ref2$slug = _ref2.slug,
        slug = _ref2$slug === void 0 ? "" : _ref2$slug,
        mainImage = _ref2.mainImage,
        _ref2$publishedAt = _ref2.publishedAt,
        publishedAt = _ref2$publishedAt === void 0 ? "" : _ref2$publishedAt;
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, previews));
};

_c = App;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdENhcmQiLCJzbHVnIiwicHVibGlzaGVkQXQiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3VycmVudCIsInVybEZvciIsImF1dG8iLCJ1cmwiLCJBcHAiLCJwb3N0cyIsInByZXZpZXdzIiwibWFwIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF1RDtBQUFBLE1BQXBEQyxJQUFvRCxRQUFwREEsSUFBb0Q7QUFBQSxNQUE5Q0MsV0FBOEMsUUFBOUNBLFdBQThDO0FBQUEsTUFBakNDLFNBQWlDLFFBQWpDQSxTQUFpQztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdEUsU0FDRUosSUFBSSxJQUNGLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixNQUFFLGtCQUFXQSxJQUFJLENBQUNLLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxTQUFTLElBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHVEQURaO0FBRUUsT0FBRyxFQUFFSSwyREFBTSxDQUFDSixTQUFELENBQU4sQ0FBa0JLLElBQWxCLENBQXVCLFFBQXZCLEVBQWlDQyxHQUFqQyxFQUZQO0FBR0UsT0FBRyxFQUFFTCxLQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZKLEVBVUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q0EsS0FBekMsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsUUFBSixDQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBZSxlQUFXLEVBQUVILFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUZGLENBSEYsQ0FWRixDQURGLENBREYsQ0FGSjtBQTJCRCxDQTVCRDs7S0FBTUYsUTtBQThCU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNVSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLHdCQUFqQkMsS0FBaUI7QUFBQSxNQUFqQkEsS0FBaUIsMkJBQVQsRUFBUztBQUM5QixNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUNmO0FBQUEsUUFDRUMsR0FERixTQUNFQSxHQURGO0FBQUEsNEJBRUVWLEtBRkY7QUFBQSxRQUVFQSxLQUZGLDRCQUVVLEVBRlY7QUFBQSwrQkFHRUMsUUFIRjtBQUFBLFFBR0VBLFFBSEYsK0JBR2EsRUFIYjtBQUFBLDJCQUlFSixJQUpGO0FBQUEsUUFJRUEsSUFKRiwyQkFJUyxFQUpUO0FBQUEsUUFLRUUsU0FMRixTQUtFQSxTQUxGO0FBQUEsa0NBTUVELFdBTkY7QUFBQSxRQU1FQSxXQU5GLGtDQU1nQixFQU5oQjtBQUFBLFdBUUUsTUFBQyw0REFBRDtBQUNFLFNBQUcsRUFBRVksR0FEUDtBQUVFLFdBQUssRUFBRVYsS0FGVDtBQUdFLGNBQVEsRUFBRUMsUUFIWjtBQUlFLFVBQUksRUFBRUosSUFKUjtBQUtFLGVBQVMsRUFBRUUsU0FMYjtBQU1FLGlCQUFXLEVBQUVELFdBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGO0FBQUEsR0FEZSxDQUFqQjtBQW9CQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOENVLFFBQTlDLENBREYsQ0FERjtBQUtELENBMUJEOztLQUFNRixHOztBQXFDU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGQ3NGMxY2U5MmUxYTBiNjQ3ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFB1Ymxpc2hlZERhdGUgZnJvbSBcIi4vUHVibGlzaGVkRGF0ZVwiO1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHNsdWcsIHB1Ymxpc2hlZEF0LCBtYWluSW1hZ2UsIHRpdGxlLCBzdWJ0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgc2x1ZyAmJiAoXG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtNiBib3JkZXItbm9uZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICB7bWFpbkltYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC01NiBibG9jayBvYmplY3QtY292ZXIgdG9wLTAgbGVmdC0wIGFsaWduLXRvcFwiXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpLmF1dG8oXCJmb3JtYXRcIikudXJsKCl9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPHA+e3N1YnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDxQdWJsaXNoZWREYXRlIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktODAwXCI+0YfQuNGC0LDRgtGMPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xuXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzID0gW10gfSkgPT4ge1xuICBjb25zdCBwcmV2aWV3cyA9IHBvc3RzLm1hcChcbiAgICAoe1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUgPSBcIlwiLFxuICAgICAgc3VidGl0bGUgPSBcIlwiLFxuICAgICAgc2x1ZyA9IFwiXCIsXG4gICAgICBtYWluSW1hZ2UsXG4gICAgICBwdWJsaXNoZWRBdCA9IFwiXCIsXG4gICAgfSkgPT4gKFxuICAgICAgPFBvc3RDYXJkXG4gICAgICAgIGtleT17X2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgIC8+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02XCI+e3ByZXZpZXdzfTwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=