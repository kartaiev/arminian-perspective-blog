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
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/global.context */ "./context/global.context.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/core/dist/Button */ "./node_modules/@chakra-ui/core/dist/es/Button/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/vars */ "./lib/vars.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../customTheme */ "./customTheme.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var App = function App(_ref) {
  _s();

  var _paginatedPosts$, _paginatedPosts;

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_7__["GlobalContext"]),
      setListView = _useContext.setListView,
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width <= 768 && setListView(false);
  }, [width]);
  var initialData = posts && [posts];

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_9__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : (_paginatedPosts$ = paginatedPosts[0]) === null || _paginatedPosts$ === void 0 ? void 0 : _paginatedPosts$.length) === 0;
  var isReachingEnd = isEmpty || paginatedPosts && ((_paginatedPosts = paginatedPosts[paginatedPosts.length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_12__["PAGE_SIZE"]; // const increaseSize = () => !isReachingEnd && setSize((prev) => prev + 1);
  //
  // useEffect(() => {
  //   window.addEventListener("scroll", () => handleScroll(increaseSize));
  //   return () =>
  //     window.removeEventListener("scroll", () => handleScroll(increaseSize));
  // }, []);

  if (!paginatedPosts) return "loading";
  var previews = paginatedPosts && paginatedPosts.map(function (el) {
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
          lineNumber: 54,
          columnNumber: 9
        }
      });
    });
  });
  var previewClass = isListView ? "md:mx-16 ip:mx-64" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "view-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_components_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    whileHover: {
      scale: 1.2
    },
    firstIcon: react_icons_bs__WEBPACK_IMPORTED_MODULE_13__["BsGrid"],
    secondIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_8__["FiList"],
    toggle: switchView,
    isToggled: isListView,
    className: "ease",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_15__["color"][colorMode],
    className: "preview-container ".concat(previewClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_15__["borderColor"][colorMode],
    _focus: {
      outline: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, Object(_lib_icons__WEBPACK_IMPORTED_MODULE_3__["downChevron"])(isReachingEnd))));
};

_s(App, "stxrgdAOLBrHvjgpMNAc4QcweUY=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_11__["useColorMode"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"], _actions__WEBPACK_IMPORTED_MODULE_9__["useGetPosts"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNldExpc3RWaWV3IiwiaXNMaXN0VmlldyIsInN3aXRjaFZpZXciLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ0b2dnbGVDb2xvck1vZGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiaW5pdGlhbERhdGEiLCJ1c2VHZXRQb3N0cyIsInBhZ2luYXRlZFBvc3RzIiwiZGF0YSIsInNpemUiLCJzZXRTaXplIiwiaXNFbXB0eSIsImxlbmd0aCIsImlzUmVhY2hpbmdFbmQiLCJQQUdFX1NJWkUiLCJwcmV2aWV3cyIsIm1hcCIsImVsIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJwcmV2aWV3Q2xhc3MiLCJzY2FsZSIsIkJzR3JpZCIsIkZpTGlzdCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJvdXRsaW5lIiwiZG93bkNoZXZyb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLG9CQUN1QkMsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FEakM7QUFBQSxNQUNqQkMsV0FEaUIsZUFDakJBLFdBRGlCO0FBQUEsTUFDSkMsVUFESSxlQUNKQSxVQURJO0FBQUEsTUFDUUMsVUFEUixlQUNRQSxVQURSOztBQUFBLHNCQUdjQyxxRUFBWSxFQUgxQjtBQUFBLE1BR2pCQyxTQUhpQixpQkFHakJB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REYsQ0FYRixFQW1CRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFlBQVEsRUFBRUYsYUFEWjtBQUVFLFFBQUksRUFBQyxJQUZQO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNLENBQUNBLGFBQUQsSUFBa0JILE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBL0I7QUFBQSxLQUpYO0FBS0UsV0FBTyxFQUFDLFNBTFY7QUFNRSxlQUFXLEVBQUVxQix5REFBVyxDQUFDOUIsU0FBRCxDQU4xQjtBQU9FLFVBQU0sRUFBRTtBQUFFK0IsYUFBTyxFQUFFO0FBQVgsS0FQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0dDLDhEQUFXLENBQUNuQixhQUFELENBVGQsQ0FERixDQW5CRixDQURGO0FBbUNELENBdEZEOztHQUFNckIsRztVQUdtQ08sNkQsRUFFekJJLG9FLEVBUWtDRyxvRDs7O0tBYjVDZCxHOztBQWlHU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWNhNTk0NTUyMTI2NDYxMzgxYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9JY29uc0J0blwiO1xuaW1wb3J0IHsgZG93bkNoZXZyb24sIGdyaWRJY29uLCBsaXN0SWNvbiB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IHsgaGFuZGxlU2Nyb2xsIH0gZnJvbSBcIi4uL2xpYi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcbmltcG9ydCB7IEZpTGlzdCwgRmlHcmlkIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9CdXR0b25cIjtcbmltcG9ydCB7IFNrZWxldG9uLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vbGliL3ZhcnNcIjtcbmltcG9ydCB7IEJzR3JpZCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vY3VzdG9tVGhlbWVcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7IHNldExpc3RWaWV3LCBpc0xpc3RWaWV3LCBzd2l0Y2hWaWV3IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gcG9zdHMgJiYgW3Bvc3RzXTtcblxuICBjb25zdCB7IGRhdGE6IHBhZ2luYXRlZFBvc3RzLCBzaXplLCBzZXRTaXplIH0gPSB1c2VHZXRQb3N0cyhpbml0aWFsRGF0YSk7XG5cbiAgY29uc3QgaXNFbXB0eSA9IHBhZ2luYXRlZFBvc3RzPy5bMF0/Lmxlbmd0aCA9PT0gMDtcbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9XG4gICAgaXNFbXB0eSB8fFxuICAgIChwYWdpbmF0ZWRQb3N0cyAmJlxuICAgICAgcGFnaW5hdGVkUG9zdHNbcGFnaW5hdGVkUG9zdHMubGVuZ3RoIC0gMV0/Lmxlbmd0aCA8IFBBR0VfU0laRSk7XG5cbiAgLy8gY29uc3QgaW5jcmVhc2VTaXplID0gKCkgPT4gIWlzUmVhY2hpbmdFbmQgJiYgc2V0U2l6ZSgocHJldikgPT4gcHJldiArIDEpO1xuICAvL1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbChpbmNyZWFzZVNpemUpKTtcbiAgLy8gICByZXR1cm4gKCkgPT5cbiAgLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbChpbmNyZWFzZVNpemUpKTtcbiAgLy8gfSwgW10pO1xuXG4gIGlmICghcGFnaW5hdGVkUG9zdHMpIHJldHVybiBcImxvYWRpbmdcIjtcblxuICBjb25zdCBwcmV2aWV3cyA9XG4gICAgcGFnaW5hdGVkUG9zdHMgJiZcbiAgICBwYWdpbmF0ZWRQb3N0cy5tYXAoKGVsKSA9PlxuICAgICAgZWwubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICApO1xuXG4gIGNvbnN0IHByZXZpZXdDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTYgaXA6bXgtNjRcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgICAgIGZpcnN0SWNvbj17QnNHcmlkfVxuICAgICAgICAgIHNlY29uZEljb249e0ZpTGlzdH1cbiAgICAgICAgICB0b2dnbGU9e3N3aXRjaFZpZXd9XG4gICAgICAgICAgaXNUb2dnbGVkPXtpc0xpc3RWaWV3fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImVhc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2tlbGV0b24gaXNMb2FkZWQ9e3BhZ2luYXRlZFBvc3RzfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHByZXZpZXctY29udGFpbmVyICR7cHJldmlld0NsYXNzfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNSZWFjaGluZ0VuZH1cbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNSZWFjaGluZ0VuZCAmJiBzZXRTaXplKHNpemUgKyAxKX1cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZG93bkNoZXZyb24oaXNSZWFjaGluZ0VuZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=