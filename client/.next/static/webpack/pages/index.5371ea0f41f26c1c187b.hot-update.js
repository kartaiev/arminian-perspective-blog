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
  console.log(paginatedPosts);
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : (_paginatedPosts$ = paginatedPosts[0]) === null || _paginatedPosts$ === void 0 ? void 0 : _paginatedPosts$.length) === 0;
  var isReachingEnd = isEmpty || ((_paginatedPosts = paginatedPosts[paginatedPosts.length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_11__["PAGE_SIZE"];
  var previews = paginatedPosts[0].map(function (_ref2) {
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
        lineNumber: 47,
        columnNumber: 7
      }
    });
  });
  var previewClass = isListView ? "md:mx-16 ip:ml-48" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "view-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_14__["color"][colorMode],
    className: "preview-container ".concat(previewClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 13
    }
  }, Object(_lib_icons__WEBPACK_IMPORTED_MODULE_3__["downChevron"])(isReachingEnd)))), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_16__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_14__["borderColor"][colorMode],
    orientation: "vertical",
    my: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    mt: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_14__["color"][colorMode],
    as: "h1",
    fontSize: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, "\u041E \u0441\u0430\u0439\u0442\u0435"), __jsx(_chakra_ui_core_dist_Text__WEBPACK_IMPORTED_MODULE_17__["default"], {
    pb: "6",
    color: _customTheme__WEBPACK_IMPORTED_MODULE_14__["colorAlt"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, _lib_vars__WEBPACK_IMPORTED_MODULE_11__["ABOUT_TEXT"]), __jsx(_chakra_ui_core_dist_Divider__WEBPACK_IMPORTED_MODULE_16__["default"], {
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_14__["borderColor"][colorMode],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNldExpc3RWaWV3IiwiaXNMaXN0VmlldyIsInN3aXRjaFZpZXciLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiaW5pdGlhbERhdGEiLCJ1c2VHZXRQb3N0cyIsInBhZ2luYXRlZFBvc3RzIiwiZGF0YSIsInNpemUiLCJzZXRTaXplIiwiY29uc29sZSIsImxvZyIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlYWNoaW5nRW5kIiwiUEFHRV9TSVpFIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsInByZXZpZXdDbGFzcyIsImNvbG9yIiwic2NhbGUiLCJCc0dyaWQiLCJGaUxpc3QiLCJib3JkZXJDb2xvciIsIm91dGxpbmUiLCJkb3duQ2hldnJvbiIsImNvbG9yQWx0IiwiQUJPVVRfVEVYVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWU7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsb0JBQ3VCQyx3REFBVSxDQUFDQyxxRUFBRCxDQURqQztBQUFBLE1BQ2pCQyxXQURpQixlQUNqQkEsV0FEaUI7QUFBQSxNQUNKQyxVQURJLGVBQ0pBLFVBREk7QUFBQSxNQUNRQyxVQURSLGVBQ1FBLFVBRFI7O0FBQUEsc0JBR0hDLHFF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SUUsTUFBQyxrRUFBRDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsU0FBSyxFQUFFaUMsc0RBQVEsQ0FBQ2pDLFNBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHa0MscURBREgsQ0FKRixFQU9FLE1BQUMscUVBQUQ7QUFBUyxlQUFXLEVBQUVKLHlEQUFXLENBQUM5QixTQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQTVDRixDQURGLENBREY7QUEwREQsQ0FuR0Q7O0dBQU1SLEc7VUFHa0JPLDZELEVBRVJHLG9FLEVBUWtDRyxvRDs7O0tBYjVDYixHOztBQThHU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTM3MWVhMGY0MWYyNmMxYzE4N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9JY29uc0J0blwiO1xuaW1wb3J0IHsgZG93bkNoZXZyb24gfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuaW1wb3J0IHsgRmlMaXN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9CdXR0b25cIjtcbmltcG9ydCB7IFNrZWxldG9uLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBBQk9VVF9URVhULCBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IEJzR3JpZCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IsIGNvbG9yQWx0IH0gZnJvbSBcIi4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvR3JpZFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0RpdmlkZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9UZXh0XCI7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvSGVhZGluZ1wiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHsgc2V0TGlzdFZpZXcsIGlzTGlzdFZpZXcsIHN3aXRjaFZpZXcgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gcG9zdHMgJiYgW3Bvc3RzXTtcblxuICBjb25zdCB7IGRhdGE6IHBhZ2luYXRlZFBvc3RzLCBzaXplLCBzZXRTaXplIH0gPSB1c2VHZXRQb3N0cyhpbml0aWFsRGF0YSk7XG5cbiAgaWYgKCFwYWdpbmF0ZWRQb3N0cykgcmV0dXJuIFwibG9hZGluZ1wiO1xuXG4gIGNvbnNvbGUubG9nKHBhZ2luYXRlZFBvc3RzKTtcblxuICBjb25zdCBpc0VtcHR5ID0gcGFnaW5hdGVkUG9zdHM/LlswXT8ubGVuZ3RoID09PSAwO1xuICBjb25zdCBpc1JlYWNoaW5nRW5kID1cbiAgICBpc0VtcHR5IHx8IHBhZ2luYXRlZFBvc3RzW3BhZ2luYXRlZFBvc3RzLmxlbmd0aCAtIDFdPy5sZW5ndGggPCBQQUdFX1NJWkU7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwYWdpbmF0ZWRQb3N0c1swXS5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT4gKFxuICAgICAgPFBvc3RDYXJkXG4gICAgICAgIGtleT17X2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgYm9keT17Ym9keX1cbiAgICAgIC8+XG4gICAgKVxuICApO1xuXG4gIGNvbnN0IHByZXZpZXdDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTYgaXA6bWwtNDhcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxHcmlkXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cIjVmciBhdXRvIDFmclwiXG4gICAgICAgIGdhcD17Nn1cbiAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgIGNsYXNzTmFtZT1cImFydGljbGUtYm9keS1jb250YWluZXJcIlxuICAgICAgPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICAgIGZpcnN0SWNvbj17QnNHcmlkfVxuICAgICAgICAgICAgICBzZWNvbmRJY29uPXtGaUxpc3R9XG4gICAgICAgICAgICAgIHRvZ2dsZT17c3dpdGNoVmlld31cbiAgICAgICAgICAgICAgaXNUb2dnbGVkPXtpc0xpc3RWaWV3fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlYXNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNrZWxldG9uIGlzTG9hZGVkPXtwYWdpbmF0ZWRQb3N0c30+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwcmV2aWV3LWNvbnRhaW5lciAke3ByZXZpZXdDbGFzc31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1JlYWNoaW5nRW5kfVxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc1JlYWNoaW5nRW5kICYmIHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogXCJub25lXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rvd25DaGV2cm9uKGlzUmVhY2hpbmdFbmQpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgIG15PVwiNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggbXQ9XCI0XCI+XG4gICAgICAgICAgPEhlYWRpbmcgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19IGFzPVwiaDFcIiBmb250U2l6ZT1cIjJ4bFwiPlxuICAgICAgICAgICAg0J4g0YHQsNC50YLQtVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBwYj1cIjZcIiBjb2xvcj17Y29sb3JBbHRbY29sb3JNb2RlXX0+XG4gICAgICAgICAgICB7QUJPVVRfVEVYVH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPERpdmlkZXIgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9HcmlkPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKDApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9