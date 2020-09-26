webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/PostListCard.js":
/*!**************************************************!*\
  !*** ./components/posts-preview/PostListCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../single-post/PostAuthorDate */ "./components/single-post/PostAuthorDate.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\PostListCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostListCard = function PostListCard(_ref) {
  _s();

  var slug = _ref.slug,
      mainImage = _ref.mainImage,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      title = _ref.title,
      body = _ref.body,
      isToggled = _ref.isToggled;
  var variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 5px 10px rgba(0,0,0,.5)",
      transition: {
        ease: "easeOut"
      }
    },
    off: {
      scale: 1
    }
  };
  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"])();
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a, {
    whileHover: "hover",
    variants: variants,
    className: "mt-6 border border-gray-400 rounded-lg overflow-hidden flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, mainImage && __jsx("img", {
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    className: "w-1/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: " w-full p-4 lg:p-6 flex flex-col justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800 text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    className: "font-semibold text-xl text-gray-800 my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, subtitle), isToggled && __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "hidden lg:block my-4 text-lg",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx(_single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    secondProp: "",
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }))));
};

_s(PostListCard, "RmdmpLM5vD+sMcc5h/DlP7pfrWU=", false, function () {
  return [_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"]];
});

_c = PostListCard;
/* harmony default export */ __webpack_exports__["default"] = (PostListCard);

var _c;

$RefreshReg$(_c, "PostListCard");

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
/* harmony import */ var _components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts-preview/PostGridCard */ "./components/posts-preview/PostGridCard.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/posts-preview/PostListCard */ "./components/posts-preview/PostListCard.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var App = function App(_ref) {
  _s();

  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      toggle = _useToggle.toggle;

  var gridClass = isToggled ? "xl:mx-64" : "lg:grid-cols-2 lg:mt-2 lg:mx-16 xl:mx-64 xl:grid-cols-3 xl:gap-12";
  var previews = posts.map(function (_ref2) {
    var _id = _ref2._id,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        slug = _ref2.slug,
        mainImage = _ref2.mainImage,
        publishedAt = _ref2.publishedAt,
        body = _ref2.body;
    return !isToggled ? __jsx(_components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }) : __jsx(_components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      body: body,
      isToggled: isToggled,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hidden h-10 lg:px-16 xl:px-64 mt-6 lg:flex justify-start items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["listIcon"],
    isToggled: isToggled,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, previews));
};

_s(App, "YnTxiDSHocyVV9znCwOPuyEY9zA=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RMaXN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdExpc3RDYXJkIiwic2x1ZyIsIm1haW5JbWFnZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJ0aXRsZSIsImJvZHkiLCJpc1RvZ2dsZWQiLCJ2YXJpYW50cyIsImhvdmVyIiwic2NhbGUiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIm9mZiIsIndpZHRoIiwidXNlV2luZG93V2lkdGgiLCJjdXJyZW50IiwidXJsRm9yIiwiYXV0byIsInVybCIsIkFwcCIsInBvc3RzIiwidXNlVG9nZ2xlIiwidG9nZ2xlIiwiZ3JpZENsYXNzIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJncmlkSWNvbiIsImxpc3RJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BUWY7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxJQUVJLFFBRkpBLElBRUk7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7QUFDSixNQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxJQURGO0FBRUxDLGVBQVMsRUFBRSwyQkFGTjtBQUdMQyxnQkFBVSxFQUFFO0FBQUVDLFlBQUksRUFBRTtBQUFSO0FBSFAsS0FEUTtBQU1mQyxPQUFHLEVBQUU7QUFBRUosV0FBSyxFQUFFO0FBQVQ7QUFOVSxHQUFqQjtBQVNBLE1BQU1LLEtBQUssR0FBR0MsNEVBQWMsRUFBNUI7QUFFQSxTQUNFZixJQUFJLElBQ0YsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLE1BQUUsa0JBQVdBLElBQUksQ0FBQ2dCLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUNFLGNBQVUsRUFBQyxPQURiO0FBRUUsWUFBUSxFQUFFVCxRQUZaO0FBR0UsYUFBUyxFQUFDLDZEQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR04sU0FBUyxJQUNSO0FBQ0UsT0FBRyxFQUFFZ0IsMkRBQU0sQ0FBQ2hCLFNBQUQsQ0FBTixDQUFrQmlCLElBQWxCLENBQXVCLFFBQXZCLEVBQWlDQyxHQUFqQyxFQURQO0FBRUUsT0FBRyxFQUFFZixLQUZQO0FBR0UsYUFBUyxFQUFDLE9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBWUU7QUFBSyxhQUFTLEVBQUMsa0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtEQSxLQUFsRCxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixRQURILENBRkYsRUFLR0ksU0FBUyxJQUNSLE1BQUMscUVBQUQ7QUFDRSxhQUFTLEVBQUMsOEJBRFo7QUFFRSxVQUFNLEVBQUVELElBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREYsRUFhRSxNQUFDLG1FQUFEO0FBQWdCLGNBQVUsRUFBRSxFQUE1QjtBQUFnQyxlQUFXLEVBQUVGLFdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQVpGLENBREYsQ0FGSjtBQWtDRCxDQXRERDs7R0FBTUosWTtVQWtCVWdCLG9FOzs7S0FsQlZoQixZO0FBd0RTQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNcUIsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBb0I7QUFBQTs7QUFBQSx3QkFBakJDLEtBQWlCO0FBQUEsTUFBakJBLEtBQWlCLDJCQUFULEVBQVM7O0FBQUEsbUJBQ0FDLGtFQUFTLEVBRFQ7QUFBQSxNQUN0QmhCLFNBRHNCLGNBQ3RCQSxTQURzQjtBQUFBLE1BQ1hpQixNQURXLGNBQ1hBLE1BRFc7O0FBRzlCLE1BQU1DLFNBQVMsR0FBR2xCLFNBQVMsR0FDdkIsVUFEdUIsR0FFdkIsbUVBRko7QUFJQSxNQUFNbUIsUUFBUSxHQUFHSixLQUFLLENBQUNLLEdBQU4sQ0FDZjtBQUFBLFFBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFFBQVF2QixLQUFSLFNBQVFBLEtBQVI7QUFBQSxRQUFlRixRQUFmLFNBQWVBLFFBQWY7QUFBQSxRQUF5QkYsSUFBekIsU0FBeUJBLElBQXpCO0FBQUEsUUFBK0JDLFNBQS9CLFNBQStCQSxTQUEvQjtBQUFBLFFBQTBDRSxXQUExQyxTQUEwQ0EsV0FBMUM7QUFBQSxRQUF1REUsSUFBdkQsU0FBdURBLElBQXZEO0FBQUEsV0FDRSxDQUFDQyxTQUFELEdBQ0UsTUFBQyw4RUFBRDtBQUNFLFNBQUcsRUFBRXFCLEdBRFA7QUFFRSxXQUFLLEVBQUV2QixLQUZUO0FBR0UsY0FBUSxFQUFFRixRQUhaO0FBSUUsVUFBSSxFQUFFRixJQUpSO0FBS0UsZUFBUyxFQUFFQyxTQUxiO0FBTUUsaUJBQVcsRUFBRUUsV0FOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsR0FVRSxNQUFDLDhFQUFEO0FBQ0UsU0FBRyxFQUFFd0IsR0FEUDtBQUVFLFdBQUssRUFBRXZCLEtBRlQ7QUFHRSxjQUFRLEVBQUVGLFFBSFo7QUFJRSxVQUFJLEVBQUVGLElBSlI7QUFLRSxlQUFTLEVBQUVDLFNBTGI7QUFNRSxpQkFBVyxFQUFFRSxXQU5mO0FBT0UsVUFBSSxFQUFFRSxJQVBSO0FBUUUsZUFBUyxFQUFFQyxTQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYSjtBQUFBLEdBRGUsQ0FBakI7QUF5QkEsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBRXNCLG1EQURiO0FBRUUsY0FBVSxFQUFFQyxtREFGZDtBQUdFLGFBQVMsRUFBRXZCLFNBSGI7QUFJRSxVQUFNLEVBQUVpQixNQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0U7QUFBSyxhQUFTLHdDQUFpQ0MsU0FBakMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBREgsQ0FURixDQURGO0FBZUQsQ0EvQ0Q7O0dBQU1MLEc7VUFDMEJFLDBEOzs7S0FEMUJGLEc7O0FBMERTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTliZWVlMjE1Nzc4MGExYTc5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBQb3N0QXV0aG9yRGF0ZSBmcm9tIFwiLi4vc2luZ2xlLXBvc3QvUG9zdEF1dGhvckRhdGVcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuXG5jb25zdCBQb3N0TGlzdENhcmQgPSAoe1xuICBzbHVnLFxuICBtYWluSW1hZ2UsXG4gIHN1YnRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgdGl0bGUsXG4gIGJvZHksXG4gIGlzVG9nZ2xlZCxcbn0pID0+IHtcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaG92ZXI6IHtcbiAgICAgIHNjYWxlOiAxLjAzLFxuICAgICAgYm94U2hhZG93OiBcIjAgNXB4IDEwcHggcmdiYSgwLDAsMCwuNSlcIixcbiAgICAgIHRyYW5zaXRpb246IHsgZWFzZTogXCJlYXNlT3V0XCIgfSxcbiAgICB9LFxuICAgIG9mZjogeyBzY2FsZTogMSB9LFxuICB9O1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICByZXR1cm4gKFxuICAgIHNsdWcgJiYgKFxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIHdoaWxlSG92ZXI9XCJob3ZlclwiXG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIHttYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpLmF1dG8oXCJmb3JtYXRcIikudXJsKCl9XG4gICAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8zXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgcC00IGxnOnAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHRleHQtMnhsXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBteS02XCI+XG4gICAgICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICB7aXNUb2dnbGVkICYmIChcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbXktNCB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UG9zdEF1dGhvckRhdGUgc2Vjb25kUHJvcD17XCJcIn0gcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0Q2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBQb3N0R3JpZENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0R3JpZENhcmRcIjtcblxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuXG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvSWNvbnNCdG5cIjtcbmltcG9ydCB7IGdyaWRJY29uLCBsaXN0SWNvbiB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0TGlzdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0TGlzdENhcmRcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNUb2dnbGVkLCB0b2dnbGUgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzVG9nZ2xlZFxuICAgID8gXCJ4bDpteC02NFwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgbGc6bXgtMTYgeGw6bXgtNjQgeGw6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwb3N0cy5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT5cbiAgICAgICFpc1RvZ2dsZWQgPyAoXG4gICAgICAgIDxQb3N0R3JpZENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFBvc3RMaXN0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzVG9nZ2xlZH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIGxnOnB4LTE2IHhsOnB4LTY0IG10LTYgbGc6ZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e2dyaWRJY29ufVxuICAgICAgICAgIHNlY29uZEljb249e2xpc3RJY29ufVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNUb2dnbGVkfVxuICAgICAgICAgIHRvZ2dsZT17dG9nZ2xlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiAke2dyaWRDbGFzc31gfT5cbiAgICAgICAge3ByZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==