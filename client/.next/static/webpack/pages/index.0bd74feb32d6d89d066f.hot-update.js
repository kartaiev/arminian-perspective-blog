webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/Previews.js":
/*!**********************************************!*\
  !*** ./components/posts-preview/Previews.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/vars */ "./lib/vars.js");
/* harmony import */ var _shared_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/core/dist/Button */ "./node_modules/@chakra-ui/core/dist/es/Button/index.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/icons */ "./lib/icons.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../context/global.context */ "./context/global.context.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\posts-preview\\Previews.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var Previews = function Previews(_ref) {
  _s();

  var _paginatedPosts$, _paginatedPosts;

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_12__["GlobalContext"]),
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var initialData = posts && [posts];
  console.log(posts);

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_2__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : (_paginatedPosts$ = paginatedPosts[0]) === null || _paginatedPosts$ === void 0 ? void 0 : _paginatedPosts$.length) === 0;
  var isReachingEnd = isEmpty || paginatedPosts && ((_paginatedPosts = paginatedPosts[paginatedPosts[0].length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_3__["PAGE_SIZE"]; // console.log(paginatedPosts[0]);

  var previews = paginatedPosts[0].map(function (_ref2) {
    var _id = _ref2._id,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        slug = _ref2.slug,
        mainImage = _ref2.mainImage,
        publishedAt = _ref2.publishedAt,
        body = _ref2.body;
    return slug && __jsx(_PostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        lineNumber: 40,
        columnNumber: 9
      }
    });
  });
  var previewClass = isListView ? "md:mx-16 ip:ml-48" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "view-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    whileHover: {
      scale: 1.2
    },
    firstIcon: react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsGrid"],
    secondIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiList"],
    toggle: switchView,
    isToggled: isListView,
    className: "ease",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_9__["color"][colorMode],
    className: "preview-container ".concat(previewClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "hello", previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: isReachingEnd,
    size: "lg",
    rounded: "full",
    onClick: function onClick() {
      return !isReachingEnd && setSize(size + 1);
    },
    variant: "outline",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_9__["borderColor"][colorMode],
    _focus: {
      outline: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, Object(_lib_icons__WEBPACK_IMPORTED_MODULE_11__["downChevron"])(isReachingEnd))));
};

_s(Previews, "g/tR9pTjfxLpNRPuhmpaBJ8sSuA=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["useColorMode"], _actions__WEBPACK_IMPORTED_MODULE_2__["useGetPosts"]];
});

_c = Previews;
/* harmony default export */ __webpack_exports__["default"] = (Previews);

var _c;

$RefreshReg$(_c, "Previews");

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
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/global.context */ "./context/global.context.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core/dist/Grid */ "./node_modules/@chakra-ui/core/dist/es/Grid/index.js");
/* harmony import */ var _chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Divider */ "./node_modules/@chakra-ui/core/dist/es/Divider/index.js");
/* harmony import */ var _components_aside_Aside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/aside/Aside */ "./components/aside/Aside.js");
/* harmony import */ var _components_posts_preview_Previews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/posts-preview/Previews */ "./components/posts-preview/Previews.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var App = function App(_ref) {
  _s();

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]),
      setListView = _useContext.setListView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_2__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width <= 768 && setListView(false);
  }, [width]); // const increaseSize = () => !isReachingEnd && setSize((prev) => prev + 1);
  //
  // useEffect(() => {
  //   window.addEventListener("scroll", () => handleScroll(increaseSize));
  //   return () =>
  //     window.removeEventListener("scroll", () => handleScroll(increaseSize));
  // }, []);

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    templateColumns: "5fr auto 1fr",
    gap: 6,
    color: _customTheme__WEBPACK_IMPORTED_MODULE_5__["color"][colorMode],
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_components_posts_preview_Previews__WEBPACK_IMPORTED_MODULE_9__["default"], {
    posts: posts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_5__["borderColor"][colorMode],
    orientation: "vertical",
    my: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(_components_aside_Aside__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })));
};

_s(App, "S/adZ5/hdl/S5J95lugy/ZLz9oA=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useColorMode"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_2__["useWindowWidth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1ByZXZpZXdzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcmV2aWV3cyIsInBvc3RzIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJpc0xpc3RWaWV3Iiwic3dpdGNoVmlldyIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImluaXRpYWxEYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUdldFBvc3RzIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwic2l6ZSIsInNldFNpemUiLCJpc0VtcHR5IiwibGVuZ3RoIiwiaXNSZWFjaGluZ0VuZCIsIlBBR0VfU0laRSIsInByZXZpZXdzIiwibWFwIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJwcmV2aWV3Q2xhc3MiLCJzY2FsZSIsIkJzR3JpZCIsIkZpTGlzdCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJvdXRsaW5lIiwiZG93bkNoZXZyb24iLCJBcHAiLCJzZXRMaXN0VmlldyIsIndpZHRoIiwidXNlV2luZG93V2lkdGgiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWU7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNDLHNFQUFELENBRGY7QUFBQSxNQUN0QkMsVUFEc0IsZUFDdEJBLFVBRHNCO0FBQUEsTUFDVkMsVUFEVSxlQUNWQSxVQURVOztBQUFBLHNCQUdSQyxvRUFBWSxFQUhKO0FBQUEsTUFH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O0FBQ0UsbUJBQWUsRUFBQyxjQURsQjtBQUVFLE9BQUcsRUFBRSxDQUZQO0FBR0UsU0FBSyxFQUFFTixrREFBSyxDQUFDMUIsU0FBRCxDQUhkO0FBSUUsYUFBUyxFQUFDLHdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDBFQUFEO0FBQVUsU0FBSyxFQUFFTixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLG9FQUFEO0FBQ0UsZUFBVyxFQUFFaUMsd0RBQVcsQ0FBQzNCLFNBQUQsQ0FEMUI7QUFFRSxlQUFXLEVBQUMsVUFGZDtBQUdFLE1BQUUsRUFBQyxHQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVlFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREYsQ0FERjtBQWtCRCxDQXJDRDs7R0FBTThCLEc7VUFHa0IvQiw0RCxFQUVSa0Msb0U7OztLQUxWSCxHOztBQXVDU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGJkNzRmZWIzMmQ2ZDg5ZDA2NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4vUG9zdENhcmRcIjtcbmltcG9ydCB7IHVzZUdldFBvc3RzIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IFBBR0VfU0laRSB9IGZyb20gXCIuLi8uLi9saWIvdmFyc1wiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9zaGFyZWQvSWNvbnNCdG5cIjtcbmltcG9ydCB7IEJzR3JpZCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgRmlMaXN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiwgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0J1dHRvblwiO1xuaW1wb3J0IHsgZG93bkNoZXZyb24gfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcblxuY29uc3QgUHJldmlld3MgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHsgaXNMaXN0Vmlldywgc3dpdGNoVmlldyB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgY29uc3QgaW5pdGlhbERhdGEgPSBwb3N0cyAmJiBbcG9zdHNdO1xuICBjb25zb2xlLmxvZyhwb3N0cyk7XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdpbmF0ZWRQb3N0cywgc2l6ZSwgc2V0U2l6ZSB9ID0gdXNlR2V0UG9zdHMoaW5pdGlhbERhdGEpO1xuXG4gIGlmICghcGFnaW5hdGVkUG9zdHMpIHJldHVybiBcImxvYWRpbmdcIjtcblxuICBjb25zdCBpc0VtcHR5ID0gcGFnaW5hdGVkUG9zdHM/LlswXT8ubGVuZ3RoID09PSAwO1xuXG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPVxuICAgIGlzRW1wdHkgfHxcbiAgICAocGFnaW5hdGVkUG9zdHMgJiZcbiAgICAgIHBhZ2luYXRlZFBvc3RzW3BhZ2luYXRlZFBvc3RzWzBdLmxlbmd0aCAtIDFdPy5sZW5ndGggPCBQQUdFX1NJWkUpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHBhZ2luYXRlZFBvc3RzWzBdKTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBhZ2luYXRlZFBvc3RzWzBdLm1hcChcbiAgICAoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgc2x1ZywgbWFpbkltYWdlLCBwdWJsaXNoZWRBdCwgYm9keSB9KSA9PlxuICAgICAgc2x1ZyAmJiAoXG4gICAgICAgIDxQb3N0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgKTtcblxuICBjb25zdCBwcmV2aWV3Q2xhc3MgPSBpc0xpc3RWaWV3XG4gICAgPyBcIm1kOm14LTE2IGlwOm1sLTQ4XCJcbiAgICA6IFwibGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBpcDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIjtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICBmaXJzdEljb249e0JzR3JpZH1cbiAgICAgICAgICBzZWNvbmRJY29uPXtGaUxpc3R9XG4gICAgICAgICAgdG9nZ2xlPXtzd2l0Y2hWaWV3fVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNMaXN0Vmlld31cbiAgICAgICAgICBjbGFzc05hbWU9XCJlYXNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNrZWxldG9uIGlzTG9hZGVkPXtwYWdpbmF0ZWRQb3N0c30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BwcmV2aWV3LWNvbnRhaW5lciAke3ByZXZpZXdDbGFzc31gfVxuICAgICAgICA+XG4gICAgICAgICAgaGVsbG9cbiAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNSZWFjaGluZ0VuZH1cbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNSZWFjaGluZ0VuZCAmJiBzZXRTaXplKHNpemUgKyAxKX1cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZG93bkNoZXZyb24oaXNSZWFjaGluZ0VuZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3cztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IHsgYm9yZGVyQ29sb3IsIGNvbG9yIH0gZnJvbSBcIi4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvR3JpZFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0RpdmlkZXJcIjtcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi4vY29tcG9uZW50cy9hc2lkZS9Bc2lkZVwiO1xuaW1wb3J0IFByZXZpZXdzIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUHJldmlld3NcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKDApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHsgc2V0TGlzdFZpZXcgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIC8vIGNvbnN0IGluY3JlYXNlU2l6ZSA9ICgpID0+ICFpc1JlYWNoaW5nRW5kICYmIHNldFNpemUoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgLy9cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwoaW5jcmVhc2VTaXplKSk7XG4gIC8vICAgcmV0dXJuICgpID0+XG4gIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwoaW5jcmVhc2VTaXplKSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8R3JpZFxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCI1ZnIgYXV0byAxZnJcIlxuICAgICAgICBnYXA9ezZ9XG4gICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlLWJvZHktY29udGFpbmVyXCJcbiAgICAgID5cbiAgICAgICAgPFByZXZpZXdzIHBvc3RzPXtwb3N0c30gLz5cbiAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICBteT1cIjZcIlxuICAgICAgICAvPlxuICAgICAgICA8QXNpZGUgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=