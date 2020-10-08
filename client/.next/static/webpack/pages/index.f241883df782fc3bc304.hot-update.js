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
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\posts-preview\\Previews.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var Previews = function Previews(_ref) {
  _s();

  var _paginatedPosts;

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_12__["GlobalContext"]),
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var initialData = posts && posts;

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_2__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : paginatedPosts.length) === 0;
  var isReachingEnd = isEmpty || paginatedPosts && ((_paginatedPosts = paginatedPosts[paginatedPosts.length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_3__["PAGE_SIZE"];
  console.log(size);
  var previews = paginatedPosts.map(function (_ref2) {
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
        lineNumber: 38,
        columnNumber: 9
      }
    });
  });
  var previewClass = isListView ? "md:mx-16 ip:ml-48" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "view-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_9__["color"][colorMode],
    className: "preview-container ".concat(previewClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
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

/***/ "./lib/api.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/groq/lib/groq.js":
false,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1ByZXZpZXdzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcmV2aWV3cyIsInBvc3RzIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJpc0xpc3RWaWV3Iiwic3dpdGNoVmlldyIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImluaXRpYWxEYXRhIiwidXNlR2V0UG9zdHMiLCJwYWdpbmF0ZWRQb3N0cyIsImRhdGEiLCJzaXplIiwic2V0U2l6ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlYWNoaW5nRW5kIiwiUEFHRV9TSVpFIiwiY29uc29sZSIsImxvZyIsInByZXZpZXdzIiwibWFwIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJwcmV2aWV3Q2xhc3MiLCJzY2FsZSIsIkJzR3JpZCIsIkZpTGlzdCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJvdXRsaW5lIiwiZG93bkNoZXZyb24iLCJBcHAiLCJzZXRMaXN0VmlldyIsIndpZHRoIiwidXNlV2luZG93V2lkdGgiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWU7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQUNDLHNFQUFELENBRGY7QUFBQSxNQUN0QkMsVUFEc0IsZUFDdEJBLFVBRHNCO0FBQUEsTUFDVkMsVUFEVSxlQUNWQSxVQURVOztBQUFBLHNCQUdSQyxvRUFBWSxFQUhKO0FBQUEsTUFHdEJDLFNB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QixTQUFELENBSGQ7QUFJRSxhQUFTLEVBQUMsd0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsMEVBQUQ7QUFBVSxTQUFLLEVBQUVOLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FLE1BQUMsb0VBQUQ7QUFDRSxlQUFXLEVBQUVpQyx3REFBVyxDQUFDM0IsU0FBRCxDQUQxQjtBQUVFLGVBQVcsRUFBQyxVQUZkO0FBR0UsTUFBRSxFQUFDLEdBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBWUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERixDQURGO0FBa0JELENBckNEOztHQUFNOEIsRztVQUdrQi9CLDRELEVBRVJrQyxvRTs7O0tBTFZILEc7O0FBdUNTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMjQxODgzZGY3ODJmYzNiYzMwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgUEFHRV9TSVpFIH0gZnJvbSBcIi4uLy4uL2xpYi92YXJzXCI7XG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL3NoYXJlZC9JY29uc0J0blwiO1xuaW1wb3J0IHsgQnNHcmlkIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBGaUxpc3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IFNrZWxldG9uLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcbmltcG9ydCB7IGJvcmRlckNvbG9yLCBjb2xvciB9IGZyb20gXCIuLi8uLi9jdXN0b21UaGVtZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQnV0dG9uXCI7XG5pbXBvcnQgeyBkb3duQ2hldnJvbiB9IGZyb20gXCIuLi8uLi9saWIvaWNvbnNcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuXG5jb25zdCBQcmV2aWV3cyA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3QgeyBpc0xpc3RWaWV3LCBzd2l0Y2hWaWV3IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IHBvc3RzICYmIHBvc3RzO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICBpZiAoIXBhZ2luYXRlZFBvc3RzKSByZXR1cm4gXCJsb2FkaW5nXCI7XG5cbiAgY29uc3QgaXNFbXB0eSA9IHBhZ2luYXRlZFBvc3RzPy5sZW5ndGggPT09IDA7XG5cbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9XG4gICAgaXNFbXB0eSB8fFxuICAgIChwYWdpbmF0ZWRQb3N0cyAmJlxuICAgICAgcGFnaW5hdGVkUG9zdHNbcGFnaW5hdGVkUG9zdHMubGVuZ3RoIC0gMV0/Lmxlbmd0aCA8IFBBR0VfU0laRSk7XG5cbiAgY29uc29sZS5sb2coc2l6ZSk7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwYWdpbmF0ZWRQb3N0cy5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT5cbiAgICAgIHNsdWcgJiYgKFxuICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICk7XG5cbiAgY29uc3QgcHJldmlld0NsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNiBpcDptbC00OFwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgZmlyc3RJY29uPXtCc0dyaWR9XG4gICAgICAgICAgc2Vjb25kSWNvbj17RmlMaXN0fVxuICAgICAgICAgIHRvZ2dsZT17c3dpdGNoVmlld31cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzTGlzdFZpZXd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZWFzZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTa2VsZXRvbiBpc0xvYWRlZD17cGFnaW5hdGVkUG9zdHN9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHJldmlldy1jb250YWluZXIgJHtwcmV2aWV3Q2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1NrZWxldG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc1JlYWNoaW5nRW5kfVxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc1JlYWNoaW5nRW5kICYmIHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3duQ2hldnJvbihpc1JlYWNoaW5nRW5kKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9HcmlkXCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvRGl2aWRlclwiO1xuaW1wb3J0IEFzaWRlIGZyb20gXCIuLi9jb21wb25lbnRzL2FzaWRlL0FzaWRlXCI7XG5pbXBvcnQgUHJldmlld3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9QcmV2aWV3c1wiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3QgeyBzZXRMaXN0VmlldyB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2lkdGggPD0gNzY4ICYmIHNldExpc3RWaWV3KGZhbHNlKTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgLy8gY29uc3QgaW5jcmVhc2VTaXplID0gKCkgPT4gIWlzUmVhY2hpbmdFbmQgJiYgc2V0U2l6ZSgocHJldikgPT4gcHJldiArIDEpO1xuICAvL1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbChpbmNyZWFzZVNpemUpKTtcbiAgLy8gICByZXR1cm4gKCkgPT5cbiAgLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbChpbmNyZWFzZVNpemUpKTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxHcmlkXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cIjVmciBhdXRvIDFmclwiXG4gICAgICAgIGdhcD17Nn1cbiAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS1jb250YWluZXJcIlxuICAgICAgPlxuICAgICAgICA8UHJldmlld3MgcG9zdHM9e3Bvc3RzfSAvPlxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgIG15PVwiNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxBc2lkZSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==