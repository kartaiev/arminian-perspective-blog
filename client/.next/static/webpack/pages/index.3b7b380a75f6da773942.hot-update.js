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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\PostCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostCard = function PostCard(_ref) {
  var slug = _ref.slug,
      updatedAt = _ref.updatedAt,
      mainImage = _ref.mainImage,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "mt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, mainImage && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "w-full h-56 block object-cover top-0 left-0 align-top",
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "pt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, subtitle), __jsx("div", {
    className: "py-2 flex justify-between text-sm text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(updatedAt), "d MMM yyyy", {
    locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__["ru"]
  })), __jsx("p", {
    className: "hover:text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInNsdWciLCJ1cGRhdGVkQXQiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY3VycmVudCIsInVybEZvciIsImF1dG8iLCJ1cmwiLCJmb3JtYXQiLCJEYXRlIiwibG9jYWxlIiwicnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXFEO0FBQUEsTUFBbERDLElBQWtELFFBQWxEQSxJQUFrRDtBQUFBLE1BQTVDQyxTQUE0QyxRQUE1Q0EsU0FBNEM7QUFBQSxNQUFqQ0MsU0FBaUMsUUFBakNBLFNBQWlDO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNwRSxTQUNFSixJQUFJLElBQ0YsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsa0JBQVdBLElBQUksQ0FBQ0ssT0FBaEIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsU0FBUyxJQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyx1REFEWjtBQUVFLE9BQUcsRUFBRUksMkRBQU0sQ0FBQ0osU0FBRCxDQUFOLENBQWtCSyxJQUFsQixDQUF1QixRQUF2QixFQUFpQ0MsR0FBakMsRUFGUDtBQUdFLE9BQUcsRUFBRUwsS0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGSixFQVVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNBLEtBQXpDLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLFFBQUosQ0FGRixFQUdFO0FBQUssYUFBUyxFQUFDLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLHVEQUFNLENBQUMsSUFBSUMsSUFBSixDQUFTVCxTQUFULENBQUQsRUFBc0IsWUFBdEIsRUFBb0M7QUFBRVUsVUFBTSxFQUFFQyxrREFBRUE7QUFBWixHQUFwQyxDQURULENBREYsRUFJRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUpGLENBSEYsQ0FWRixDQURGLENBREYsQ0FGSjtBQTZCRCxDQTlCRDs7S0FBTWIsUTtBQWdDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2I3YjM4MGE3NWY2ZGE3NzM5NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBydSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBzbHVnLCB1cGRhdGVkQXQsIG1haW5JbWFnZSwgdGl0bGUsIHN1YnRpdGxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBzbHVnICYmIChcbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIHttYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTU2IGJsb2NrIG9iamVjdC1jb3ZlciB0b3AtMCBsZWZ0LTAgYWxpZ24tdG9wXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSkuYXV0byhcImZvcm1hdFwiKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8cD57c3VidGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKHVwZGF0ZWRBdCksIFwiZCBNTU0geXl5eVwiLCB7IGxvY2FsZTogcnUgfSl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS04MDBcIj7Rh9C40YLQsNGC0Yw8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=