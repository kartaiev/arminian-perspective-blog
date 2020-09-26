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
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\PostListCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostListCard = function PostListCard(_ref) {
  var slug = _ref.slug,
      mainImage = _ref.mainImage,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      title = _ref.title,
      body = _ref.body;
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
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a, {
    whileHover: "hover",
    variants: variants,
    className: "mt-6 border border-gray-400 rounded-lg overflow-hidden flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, mainImage && __jsx("img", {
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    className: "w-1/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: " w-full p-4 lg:p-6 flex flex-col justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800 text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    className: "font-semibold text-xl text-gray-800 my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, subtitle), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "hidden lg:block my-4 text-lg",
    blocks: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx(_single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    secondProp: "",
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }))));
};

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

/***/ "./hooks/useWindowWidth.js":
/*!*********************************!*\
  !*** ./hooks/useWindowWidth.js ***!
  \*********************************/
/*! exports provided: useWindowWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowWidth", function() { return useWindowWidth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var useWindowWidth = function useWindowWidth() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth),
      windowWidth = _useState[0],
      setWindowWidth = _useState[1];

  var handleWindowResize = function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("resize", handleWindowResize);
    return function () {
      return window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return windowWidth;
};

_s(useWindowWidth, "XPjwYFA2mnyOQTDQkTW889KQ99c=");

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
/* harmony import */ var _components_posts_preview_PostGridCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/posts-preview/PostGridCard */ "./components/posts-preview/PostGridCard.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/posts-preview/PostListCard */ "./components/posts-preview/PostListCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var App = function App(_ref) {
  _s();

  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"])(),
      isToggled = _useToggle.isToggled,
      setToggle = _useToggle.setToggle,
      toggle = _useToggle.toggle;

  Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_9__["useWindowWidth"])() <= 1024 && setToggle(false);
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
        lineNumber: 25,
        columnNumber: 9
      }
    }) : __jsx(_components_posts_preview_PostListCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: _id,
      title: title,
      subtitle: subtitle,
      slug: slug,
      mainImage: mainImage,
      publishedAt: publishedAt,
      body: body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    });
  });
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hidden h-10 lg:px-16 xl:px-64 mt-6 lg:flex justify-start items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_7__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_7__["listIcon"],
    isToggled: isToggled,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, previews));
};

_s(App, "WTWeQe+sbVMXMpu4lsEa/850VaE=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_9__["useWindowWidth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RMaXN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2luZG93V2lkdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RMaXN0Q2FyZCIsInNsdWciLCJtYWluSW1hZ2UiLCJzdWJ0aXRsZSIsInB1Ymxpc2hlZEF0IiwidGl0bGUiLCJib2R5IiwidmFyaWFudHMiLCJob3ZlciIsInNjYWxlIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImVhc2UiLCJvZmYiLCJjdXJyZW50IiwidXJsRm9yIiwiYXV0byIsInVybCIsInVzZVdpbmRvd1dpZHRoIiwidXNlU3RhdGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc1RvZ2dsZWQiLCJzZXRUb2dnbGUiLCJ0b2dnbGUiLCJncmlkQ2xhc3MiLCJwcmV2aWV3cyIsIm1hcCIsIl9pZCIsImdyaWRJY29uIiwibGlzdEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQU9mO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsU0FLSSxRQUxKQSxTQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsS0FFSSxRQUZKQSxLQUVJO0FBQUEsTUFESkMsSUFDSSxRQURKQSxJQUNJO0FBQ0osTUFBTUMsUUFB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QUFBO0FBQUE7QUFBQSxNQVhKO0FBQUEsR0FEZSxDQUFqQjtBQXdCQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFZ0MsbURBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsYUFBUyxFQUFFUixTQUhiO0FBSUUsVUFBTSxFQUFFRSxNQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBU0U7QUFBSyxhQUFTLHdDQUFpQ0MsU0FBakMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBREgsQ0FURixDQURGO0FBZUQsQ0FoREQ7O0dBQU1QLEc7VUFDcUNFLDBELEVBRXpDWixvRTs7O0tBSElVLEc7O0FBMkRTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZTk1YWNmNjRkMzZkNWYwZGJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBQb3N0QXV0aG9yRGF0ZSBmcm9tIFwiLi4vc2luZ2xlLXBvc3QvUG9zdEF1dGhvckRhdGVcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuXG5jb25zdCBQb3N0TGlzdENhcmQgPSAoe1xuICBzbHVnLFxuICBtYWluSW1hZ2UsXG4gIHN1YnRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgdGl0bGUsXG4gIGJvZHksXG59KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGhvdmVyOiB7XG4gICAgICBzY2FsZTogMS4wMyxcbiAgICAgIGJveFNoYWRvdzogXCIwIDVweCAxMHB4IHJnYmEoMCwwLDAsLjUpXCIsXG4gICAgICB0cmFuc2l0aW9uOiB7IGVhc2U6IFwiZWFzZU91dFwiIH0sXG4gICAgfSxcbiAgICBvZmY6IHsgc2NhbGU6IDEgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIHNsdWcgJiYgKFxuICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIHdoaWxlSG92ZXI9XCJob3ZlclwiXG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIHttYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpLmF1dG8oXCJmb3JtYXRcIikudXJsKCl9XG4gICAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8zXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgcC00IGxnOnAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHRleHQtMnhsXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBteS02XCI+XG4gICAgICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIG15LTQgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgICAgYmxvY2tzPXtib2R5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UG9zdEF1dGhvckRhdGUgc2Vjb25kUHJvcD17XCJcIn0gcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0Q2FyZDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVdpbmRvd1dpZHRoID0gKCkgPT4ge1xuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB3aW5kb3dXaWR0aDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBQb3N0R3JpZENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0R3JpZENhcmRcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24gfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdExpc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdExpc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyA9IFtdIH0pID0+IHtcbiAgY29uc3QgeyBpc1RvZ2dsZWQsIHNldFRvZ2dsZSwgdG9nZ2xlIH0gPSB1c2VUb2dnbGUoKTtcblxuICB1c2VXaW5kb3dXaWR0aCgpIDw9IDEwMjQgJiYgc2V0VG9nZ2xlKGZhbHNlKTtcblxuICBjb25zdCBncmlkQ2xhc3MgPSBpc1RvZ2dsZWRcbiAgICA/IFwieGw6bXgtNjRcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGxnOm14LTE2IHhsOm14LTY0IHhsOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIGNvbnN0IHByZXZpZXdzID0gcG9zdHMubWFwKFxuICAgICh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+XG4gICAgICAhaXNUb2dnbGVkID8gKFxuICAgICAgICA8UG9zdEdyaWRDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQb3N0TGlzdENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC0xMCBsZzpweC0xNiB4bDpweC02NCBtdC02IGxnOmZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgZmlyc3RJY29uPXtncmlkSWNvbn1cbiAgICAgICAgICBzZWNvbmRJY29uPXtsaXN0SWNvbn1cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzVG9nZ2xlZH1cbiAgICAgICAgICB0b2dnbGU9e3RvZ2dsZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BtYi02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgJHtncmlkQ2xhc3N9YH0+XG4gICAgICAgIHtwcmV2aWV3c31cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=