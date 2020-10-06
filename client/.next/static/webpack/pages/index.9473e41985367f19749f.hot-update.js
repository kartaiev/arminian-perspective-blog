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
    borderColor: borderColor[colorMode],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNldExpc3RWaWV3IiwiaXNMaXN0VmlldyIsInN3aXRjaFZpZXciLCJ1c2VDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJ0b2dnbGVDb2xvck1vZGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiaW5pdGlhbERhdGEiLCJ1c2VHZXRQb3N0cyIsInBhZ2luYXRlZFBvc3RzIiwiZGF0YSIsInNpemUiLCJzZXRTaXplIiwiaXNFbXB0eSIsImxlbmd0aCIsImlzUmVhY2hpbmdFbmQiLCJQQUdFX1NJWkUiLCJwcmV2aWV3cyIsIm1hcCIsImVsIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJwcmV2aWV3Q2xhc3MiLCJzY2FsZSIsIkJzR3JpZCIsIkZpTGlzdCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJvdXRsaW5lIiwiZG93bkNoZXZyb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLG9CQUN1QkMsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FEakM7QUFBQSxNQUNqQkMsV0FEaUIsZUFDakJBLFdBRGlCO0FBQUEsTUFDSkMsVUFESSxlQUNKQSxVQURJO0FBQUEsTUFDUUMsVUFEUixlQUNRQSxVQURSOztBQUFBLHNCQUdjQyxxRUFBWSxFQUgxQjtBQUFBLE1BR2pCQyxTQUhpQixpQkFHakJB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REYsQ0FYRixFQW1CRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFlBQVEsRUFBRUYsYUFEWjtBQUVFLFFBQUksRUFBQyxJQUZQO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNLENBQUNBLGFBQUQsSUFBa0JILE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBL0I7QUFBQSxLQUpYO0FBS0UsV0FBTyxFQUFDLFNBTFY7QUFNRSxlQUFXLEVBQUVxQixXQUFXLENBQUM5QixTQUFELENBTjFCO0FBT0UsVUFBTSxFQUFFO0FBQUUrQixhQUFPLEVBQUU7QUFBWCxLQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR0MsOERBQVcsQ0FBQ25CLGFBQUQsQ0FUZCxDQURGLENBbkJGLENBREY7QUFtQ0QsQ0F0RkQ7O0dBQU1yQixHO1VBR21DTyw2RCxFQUV6Qkksb0UsRUFRa0NHLG9EOzs7S0FiNUNkLEc7O0FBaUdTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NDczZTQxOTg1MzY3ZjE5NzQ5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBkb3duQ2hldnJvbiwgZ3JpZEljb24sIGxpc3RJY29uIH0gZnJvbSBcIi4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdENhcmRcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd1dpZHRoXCI7XG5pbXBvcnQgeyBoYW5kbGVTY3JvbGwgfSBmcm9tIFwiLi4vbGliL2hlbHBlcnNcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuaW1wb3J0IHsgRmlMaXN0LCBGaUdyaWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IHVzZUdldFBvc3RzIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0J1dHRvblwiO1xuaW1wb3J0IHsgU2tlbGV0b24sIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCB7IFBBR0VfU0laRSB9IGZyb20gXCIuLi9saWIvdmFyc1wiO1xuaW1wb3J0IHsgQnNHcmlkIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSBcIi4uL2N1c3RvbVRoZW1lXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3QgeyBzZXRMaXN0VmlldywgaXNMaXN0Vmlldywgc3dpdGNoVmlldyB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aWR0aCA8PSA3NjggJiYgc2V0TGlzdFZpZXcoZmFsc2UpO1xuICB9LCBbd2lkdGhdKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IHBvc3RzICYmIFtwb3N0c107XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdpbmF0ZWRQb3N0cywgc2l6ZSwgc2V0U2l6ZSB9ID0gdXNlR2V0UG9zdHMoaW5pdGlhbERhdGEpO1xuXG4gIGNvbnN0IGlzRW1wdHkgPSBwYWdpbmF0ZWRQb3N0cz8uWzBdPy5sZW5ndGggPT09IDA7XG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPVxuICAgIGlzRW1wdHkgfHxcbiAgICAocGFnaW5hdGVkUG9zdHMgJiZcbiAgICAgIHBhZ2luYXRlZFBvc3RzW3BhZ2luYXRlZFBvc3RzLmxlbmd0aCAtIDFdPy5sZW5ndGggPCBQQUdFX1NJWkUpO1xuXG4gIC8vIGNvbnN0IGluY3JlYXNlU2l6ZSA9ICgpID0+ICFpc1JlYWNoaW5nRW5kICYmIHNldFNpemUoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgLy9cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwoaW5jcmVhc2VTaXplKSk7XG4gIC8vICAgcmV0dXJuICgpID0+XG4gIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwoaW5jcmVhc2VTaXplKSk7XG4gIC8vIH0sIFtdKTtcblxuICBpZiAoIXBhZ2luYXRlZFBvc3RzKSByZXR1cm4gXCJsb2FkaW5nXCI7XG5cbiAgY29uc3QgcHJldmlld3MgPVxuICAgIHBhZ2luYXRlZFBvc3RzICYmXG4gICAgcGFnaW5hdGVkUG9zdHMubWFwKChlbCkgPT5cbiAgICAgIGVsLm1hcCgoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgc2x1ZywgbWFpbkltYWdlLCBwdWJsaXNoZWRBdCwgYm9keSB9KSA9PiAoXG4gICAgICAgIDxQb3N0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgKTtcblxuICBjb25zdCBwcmV2aWV3Q2xhc3MgPSBpc0xpc3RWaWV3XG4gICAgPyBcIm1kOm14LTE2IGlwOm14LTY0XCJcbiAgICA6IFwibGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBpcDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIjtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICBmaXJzdEljb249e0JzR3JpZH1cbiAgICAgICAgICBzZWNvbmRJY29uPXtGaUxpc3R9XG4gICAgICAgICAgdG9nZ2xlPXtzd2l0Y2hWaWV3fVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNMaXN0Vmlld31cbiAgICAgICAgICBjbGFzc05hbWU9XCJlYXNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNrZWxldG9uIGlzTG9hZGVkPXtwYWdpbmF0ZWRQb3N0c30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BwcmV2aWV3LWNvbnRhaW5lciAke3ByZXZpZXdDbGFzc31gfVxuICAgICAgICA+XG4gICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2tlbGV0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzUmVhY2hpbmdFbmR9XG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gIWlzUmVhY2hpbmdFbmQgJiYgc2V0U2l6ZShzaXplICsgMSl9XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge2Rvd25DaGV2cm9uKGlzUmVhY2hpbmdFbmQpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKDApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9