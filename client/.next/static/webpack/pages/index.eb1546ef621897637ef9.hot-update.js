webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/posts-preview/PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/global.context */ "./context/global.context.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core/dist/Button */ "./node_modules/@chakra-ui/core/dist/es/Button/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/vars */ "./lib/vars.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/core/dist/Grid */ "./node_modules/@chakra-ui/core/dist/es/Grid/index.js");
/* harmony import */ var _chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/core/dist/Divider */ "./node_modules/@chakra-ui/core/dist/es/Divider/index.js");
/* harmony import */ var _chakra_ui_core_dist_Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/core/dist/Text */ "./node_modules/@chakra-ui/core/dist/es/Text/index.js");
/* harmony import */ var _chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/core/dist/Heading */ "./node_modules/@chakra-ui/core/dist/es/Heading/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















var App = function App(_ref) {
  _s();

  var _paginatedPosts$, _paginatedPosts;

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_6__["GlobalContext"]),
      setListView = _useContext.setListView,
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width <= 768 && setListView(false);
  }, [width]);
  var initialData = posts && [posts];

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_8__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : (_paginatedPosts$ = paginatedPosts[0]) === null || _paginatedPosts$ === void 0 ? void 0 : _paginatedPosts$.length) === 0;
  var isReachingEnd = isEmpty || ((_paginatedPosts = paginatedPosts[paginatedPosts.length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_11__["PAGE_SIZE"];
  var previews = paginatedPosts.map(function (el) {
    return el.map(function (_ref2) {
      var _id = _ref2._id,
          title = _ref2.title,
          subtitle = _ref2.subtitle,
          slug = _ref2.slug,
          mainImage = _ref2.mainImage,
          publishedAt = _ref2.publishedAt,
          body = _ref2.body;
      return __jsx(_components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
          lineNumber: 45,
          columnNumber: 7
        }
      });
    });
  });
  var previewClass = isListView ? "md:mx-16 ip:ml-48" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core_dist_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    templateColumns: "5fr auto 1fr",
    gap: 6,
    color: _customTheme__WEBPACK_IMPORTED_MODULE_14__["color"][colorMode],
    className: "article-body-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "view-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_components_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    whileHover: {
      scale: 1.2
    },
    firstIcon: react_icons_bs__WEBPACK_IMPORTED_MODULE_12__["BsGrid"],
    secondIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiList"],
    toggle: switchView,
    isToggled: isListView,
    className: "ease",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_14__["color"][colorMode],
    className: "preview-container ".concat(previewClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    disabled: isReachingEnd,
    size: "lg",
    rounded: "full",
    onClick: function onClick() {
      return !isReachingEnd && setSize(size + 1);
    },
    variant: "outline",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_14__["borderColor"][colorMode],
    _focus: {
      outline: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, Object(_lib_icons__WEBPACK_IMPORTED_MODULE_3__["downChevron"])(isReachingEnd)))), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_16__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_14__["borderColor"][colorMode],
    orientation: "vertical",
    my: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    mt: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_14__["color"][colorMode],
    as: "h1",
    fontSize: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "\u041E \u0441\u0430\u0439\u0442\u0435"), __jsx(_chakra_ui_core_dist_Text__WEBPACK_IMPORTED_MODULE_17__["default"], {
    pb: "6",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_14__["colorAlt"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_11__["ABOUT_TEXT"]), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_16__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_14__["borderColor"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }))));
};

_s(App, "5NwTAq0uQG3XUeTY6Tad6ro/bAI=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__["useColorMode"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"], _actions__WEBPACK_IMPORTED_MODULE_8__["useGetPosts"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNldExpc3RWaWV3IiwiaXNMaXN0VmlldyIsInN3aXRjaFZpZXciLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiaW5pdGlhbERhdGEiLCJ1c2VHZXRQb3N0cyIsInBhZ2luYXRlZFBvc3RzIiwiZGF0YSIsInNpemUiLCJzZXRTaXplIiwiaXNFbXB0eSIsImxlbmd0aCIsImlzUmVhY2hpbmdFbmQiLCJQQUdFX1NJWkUiLCJwcmV2aWV3cyIsIm1hcCIsImVsIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJwcmV2aWV3Q2xhc3MiLCJjb2xvciIsInNjYWxlIiwiQnNHcmlkIiwiRmlMaXN0IiwiYm9yZGVyQ29sb3IiLCJvdXRsaW5lIiwiZG93bkNoZXZyb24iLCJjb2xvckFsdCIsIkFCT1VUX1RFWFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLG9CQUN1QkMsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FEakM7QUFBQSxNQUNqQkMsV0FEaUIsZUFDakJBLFdBRGlCO0FBQUEsTUFDSkMsVUFESSxlQUNKQSxVQURJO0FBQUEsTUFDUUMsVUFEUixlQUNRQSxVQURSOztBQUFBLHNCQUdIQyxxRUFBWSxFQUhUO0FB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LEVBSUUsTUFBQyxrRUFBRDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsU0FBSyxFQUFFZ0Msc0RBQVEsQ0FBQ2hDLFNBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaUMscURBREgsQ0FKRixFQU9FLE1BQUMscUVBQUQ7QUFBUyxlQUFXLEVBQUVKLHlEQUFXLENBQUM3QixTQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQTVDRixDQURGLENBREY7QUEwREQsQ0FqR0Q7O0dBQU1SLEc7VUFHa0JPLDZELEVBRVJHLG9FLEVBUWtDRyxvRDs7O0tBYjVDYixHOztBQTRHU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWIxNTQ2ZWY2MjE4OTc2MzdlZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9JY29uc0J0blwiO1xuaW1wb3J0IHsgZG93bkNoZXZyb24gfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuaW1wb3J0IHsgRmlMaXN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9CdXR0b25cIjtcbmltcG9ydCB7IFNrZWxldG9uLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBBQk9VVF9URVhULCBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IEJzR3JpZCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IsIGNvbG9yQWx0IH0gZnJvbSBcIi4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvR3JpZFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0RpdmlkZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9UZXh0XCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvSGVhZGluZ1wiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHsgc2V0TGlzdFZpZXcsIGlzTGlzdFZpZXcsIHN3aXRjaFZpZXcgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gcG9zdHMgJiYgW3Bvc3RzXTtcblxuICBjb25zdCB7IGRhdGE6IHBhZ2luYXRlZFBvc3RzLCBzaXplLCBzZXRTaXplIH0gPSB1c2VHZXRQb3N0cyhpbml0aWFsRGF0YSk7XG5cbiAgaWYgKCFwYWdpbmF0ZWRQb3N0cykgcmV0dXJuIFwibG9hZGluZ1wiO1xuXG4gIGNvbnN0IGlzRW1wdHkgPSBwYWdpbmF0ZWRQb3N0cz8uWzBdPy5sZW5ndGggPT09IDA7XG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPVxuICAgIGlzRW1wdHkgfHwgcGFnaW5hdGVkUG9zdHNbcGFnaW5hdGVkUG9zdHMubGVuZ3RoIC0gMV0/Lmxlbmd0aCA8IFBBR0VfU0laRTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBhZ2luYXRlZFBvc3RzLm1hcCgoZWwpID0+XG4gICAgZWwubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgICAgIDxQb3N0Q2FyZFxuICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAvPlxuICAgICkpXG4gICk7XG5cbiAgY29uc3QgcHJldmlld0NsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNiBpcDptbC00OFwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEdyaWRcbiAgICAgICAgdGVtcGxhdGVDb2x1bW5zPVwiNWZyIGF1dG8gMWZyXCJcbiAgICAgICAgZ2FwPXs2fVxuICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1ib2R5LWNvbnRhaW5lclwiXG4gICAgICA+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxJY29uc0J0blxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgZmlyc3RJY29uPXtCc0dyaWR9XG4gICAgICAgICAgICAgIHNlY29uZEljb249e0ZpTGlzdH1cbiAgICAgICAgICAgICAgdG9nZ2xlPXtzd2l0Y2hWaWV3fVxuICAgICAgICAgICAgICBpc1RvZ2dsZWQ9e2lzTGlzdFZpZXd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVhc2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2tlbGV0b24gaXNMb2FkZWQ9e3BhZ2luYXRlZFBvc3RzfT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByZXZpZXctY29udGFpbmVyICR7cHJldmlld0NsYXNzfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUmVhY2hpbmdFbmR9XG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gIWlzUmVhY2hpbmdFbmQgJiYgc2V0U2l6ZShzaXplICsgMSl9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZG93bkNoZXZyb24oaXNSZWFjaGluZ0VuZCl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgbXk9XCI2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBtdD1cIjRcIj5cbiAgICAgICAgICA8SGVhZGluZyBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX0gYXM9XCJoMVwiIGZvbnRTaXplPVwiMnhsXCI+XG4gICAgICAgICAgICDQniDRgdCw0LnRgtC1XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IHBiPVwiNlwiIGNvbG9yPXtjb2xvckFsdFtjb2xvck1vZGVdfT5cbiAgICAgICAgICAgIHtBQk9VVF9URVhUfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8RGl2aWRlciBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=