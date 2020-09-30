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
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/posts-preview/PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _rehooks_window_scroll_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rehooks/window-scroll-position */ "./node_modules/@rehooks/window-scroll-position/index.js");
/* harmony import */ var _rehooks_window_scroll_position__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_rehooks_window_scroll_position__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var App = function App(_ref) {
  _s();

  var posts = _ref.posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"])(),
      isListView = _useToggle.isToggled,
      setListView = _useToggle.setToggle,
      switchView = _useToggle.toggle;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // let { y } = useWindowScrollPosition({
    //   throttle: 500,
    // });
    // console.log(y);
    var pageHeight = window.innerHeight + window.width <= 768 && setListView(false);
  }, [width, window.scrollY]);
  var initialData = [posts];

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

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
      return __jsx(_components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: _id,
        title: title,
        subtitle: subtitle,
        slug: slug,
        mainImage: mainImage,
        publishedAt: publishedAt,
        body: body,
        isListView: isListView,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      });
    });
  });
  var gridClass = isListView ? "md:mx-16" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, !paginatedPosts && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "loading..."), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_4__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_4__["listIcon"],
    isListView: isListView,
    switchView: switchView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, previews), __jsx("div", {
    className: "flex  items-center justify-center my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "border flex flex-col items-center justify-center border-gray-400  px-4 py-2 rounded-lg hover:border-gray-800",
    onClick: function onClick() {
      return setSize(size + 1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_4__["downChevron"])));
};

_s(App, "mdJn/bszz7weF8h4AKbdWQ7piqo=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"], _actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsInBhZ2VIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbFkiLCJpbml0aWFsRGF0YSIsInVzZUdldFBvc3RzIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwic2l6ZSIsInNldFNpemUiLCJwcmV2aWV3cyIsIm1hcCIsImVsIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJncmlkQ2xhc3MiLCJncmlkSWNvbiIsImxpc3RJY29uIiwiZG93bkNoZXZyb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxtQkFLckJDLGtFQUFTLEVBTFk7QUFBQSxNQUVaQyxVQUZZLGNBRXZCQyxTQUZ1QjtBQUFBLE1BR1pDLFdBSFksY0FHdkJDLFNBSHVCO0FBQUEsTUFJZkMsVUFKZSxjQUl2QkMsTUFKdUI7O0FBT3pCLE1BQU1DLEtBQUssR0FBR0MsNEVBQWMsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFNQyxVQUFVLEdBQ2RDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQkQsTUFBTSxDQUFDSixLQUE1QixJQUFxQyxHQUFyQyxJQUE0Q0osV0FBVyxDQUFDLEtBQUQsQ0FEekQ7QUFFRCxHQVBRLEVBT04sQ0FBQ0ksS0FBRCxFQUFRSSxNQUFNLENBQUNFLE9BQWYsQ0FQTSxDQUFUO0FBU0EsTUFBTUMsV0FBVyxHQUFHLENBQUNmLEtBQUQsQ0FBcEI7O0FBbEJ5QixxQkFvQnVCZ0IsNERBQVcsQ0FBQ0QsV0FBRCxDQXBCbEM7QUFBQSxNQW9CWEUsY0FwQlcsZ0JBb0JqQkMsSUFwQmlCO0FBQUEsTUFvQktDLElBcEJMLGdCQW9CS0EsSUFwQkw7QUFBQSxNQW9CV0MsT0FwQlgsZ0JBb0JXQSxPQXBCWDs7QUFzQnpCLE1BQUksQ0FBQ0gsY0FBTCxFQUFxQixPQUFPLFNBQVA7QUFFckIsTUFBTUksUUFBUSxHQUNaSixjQUFjLElBQ2RBLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQixVQUFDQyxFQUFEO0FBQUEsV0FDakJBLEVBQUUsQ0FBQ0QsR0FBSCxDQUFPO0FBQUEsVUFBR0UsR0FBSCxTQUFHQSxHQUFIO0FBQUEsVUFBUUMsS0FBUixTQUFRQSxLQUFSO0FBQUEsVUFBZUMsUUFBZixTQUFlQSxRQUFmO0FBQUEsVUFBeUJDLElBQXpCLFNBQXlCQSxJQUF6QjtBQUFBLFVBQStCQyxTQUEvQixTQUErQkEsU0FBL0I7QUFBQSxVQUEwQ0MsV0FBMUMsU0FBMENBLFdBQTFDO0FBQUEsVUFBdURDLElBQXZELFNBQXVEQSxJQUF2RDtBQUFBLGFBQ0wsTUFBQywwRUFBRDtBQUNFLFdBQUcsRUFBRU4sR0FEUDtBQUVFLGFBQUssRUFBRUMsS0FGVDtBQUdFLGdCQUFRLEVBQUVDLFFBSFo7QUFJRSxZQUFJLEVBQUVDLElBSlI7QUFLRSxpQkFBUyxFQUFFQyxTQUxiO0FBTUUsbUJBQVcsRUFBRUMsV0FOZjtBQU9FLFlBQUksRUFBRUMsSUFQUjtBQVFFLGtCQUFVLEVBQUU1QixVQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESztBQUFBLEtBQVAsQ0FEaUI7QUFBQSxHQUFuQixDQUZGO0FBaUJBLE1BQU02QixTQUFTLEdBQUc3QixVQUFVLEdBQ3hCLFVBRHdCLEdBRXhCLGlEQUZKO0FBSUEsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDZSxjQUFELElBQ0M7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQU1FO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFZSxtREFEYjtBQUVFLGNBQVUsRUFBRUMsbURBRmQ7QUFHRSxjQUFVLEVBQUUvQixVQUhkO0FBSUUsY0FBVSxFQUFFSSxVQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLEVBY0U7QUFDRSxhQUFTLDBEQUFtRHlCLFNBQW5ELENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdHVixRQUhILENBZEYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDhHQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTUQsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFiO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdlLHNEQUpILENBREYsQ0FuQkYsQ0FERjtBQThCRCxDQTNFRDs7R0FBTW5DLEc7VUFLQUUsMEQsRUFFVVEsb0UsRUFha0NPLG9EOzs7S0FwQjVDakIsRzs7QUFzRlNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiY2I0MzQ2MmNkMWMwMDgwNTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvSWNvbnNCdG5cIjtcbmltcG9ydCB7IGdyaWRJY29uLCBsaXN0SWNvbiwgZG93bkNoZXZyb24gfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IHVzZUdldFBvc3RzIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB1c2VXaW5kb3dTY3JvbGxQb3NpdGlvbiBmcm9tIFwiQHJlaG9va3Mvd2luZG93LXNjcm9sbC1wb3NpdGlvblwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpc1RvZ2dsZWQ6IGlzTGlzdFZpZXcsXG4gICAgc2V0VG9nZ2xlOiBzZXRMaXN0VmlldyxcbiAgICB0b2dnbGU6IHN3aXRjaFZpZXcsXG4gIH0gPSB1c2VUb2dnbGUoKTtcblxuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBsZXQgeyB5IH0gPSB1c2VXaW5kb3dTY3JvbGxQb3NpdGlvbih7XG4gICAgLy8gICB0aHJvdHRsZTogNTAwLFxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHkpO1xuICAgIGNvbnN0IHBhZ2VIZWlnaHQgPVxuICAgICAgd2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LndpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aCwgd2luZG93LnNjcm9sbFldKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IFtwb3N0c107XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdpbmF0ZWRQb3N0cywgc2l6ZSwgc2V0U2l6ZSB9ID0gdXNlR2V0UG9zdHMoaW5pdGlhbERhdGEpO1xuXG4gIGlmICghcGFnaW5hdGVkUG9zdHMpIHJldHVybiBcImxvYWRpbmdcIjtcblxuICBjb25zdCBwcmV2aWV3cyA9XG4gICAgcGFnaW5hdGVkUG9zdHMgJiZcbiAgICBwYWdpbmF0ZWRQb3N0cy5tYXAoKGVsKSA9PlxuICAgICAgZWwubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICAgIGlzTGlzdFZpZXc9e2lzTGlzdFZpZXd9XG4gICAgICAgIC8+XG4gICAgICApKVxuICAgICk7XG5cbiAgY29uc3QgZ3JpZENsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNlwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFwYWdpbmF0ZWRQb3N0cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIGxvYWRpbmcuLi5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC0xMCBtdC02IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGxnOmZsZXggbWQ6cHgtMTYgeGw6cHgtMTYgaXA6cHgtNjRcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgZmlyc3RJY29uPXtncmlkSWNvbn1cbiAgICAgICAgICBzZWNvbmRJY29uPXtsaXN0SWNvbn1cbiAgICAgICAgICBpc0xpc3RWaWV3PXtpc0xpc3RWaWV3fVxuICAgICAgICAgIHN3aXRjaFZpZXc9e3N3aXRjaFZpZXd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOm14LTE2IGlwOm14LTY0ICR7Z3JpZENsYXNzfWB9XG4gICAgICA+XG4gICAgICAgIHtwcmV2aWV3c31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktNiBsZzpteS0xMiBsZzpteC0xNiBpcDpteC02NFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci1ncmF5LTQwMCAgcHgtNCBweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaXplKHNpemUgKyAxKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3duQ2hldnJvbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygwKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==