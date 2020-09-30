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
    console.log(window.scrollY);
    width <= 768 && setListView(false);
  }, [width]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5pdGlhbERhdGEiLCJ1c2VHZXRQb3N0cyIsInBhZ2luYXRlZFBvc3RzIiwiZGF0YSIsInNpemUiLCJzZXRTaXplIiwicHJldmlld3MiLCJtYXAiLCJlbCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiLCJib2R5IiwiZ3JpZENsYXNzIiwiZ3JpZEljb24iLCJsaXN0SWNvbiIsImRvd25DaGV2cm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsbUJBS3JCQyxrRUFBUyxFQUxZO0FBQUEsTUFFWkMsVUFGWSxjQUV2QkMsU0FGdUI7QUFBQSxNQUdaQyxXQUhZLGNBR3ZCQyxTQUh1QjtBQUFBLE1BSWZDLFVBSmUsY0FJdkJDLE1BSnVCOztBQU96QixNQUFNQyxLQUFLLEdBQUdDLDRFQUFjLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5CO0FBQ0FOLFNBQUssSUFBSSxHQUFULElBQWdCSixXQUFXLENBQUMsS0FBRCxDQUEzQjtBQUNELEdBUFEsRUFPTixDQUFDSSxLQUFELENBUE0sQ0FBVDtBQVNBLE1BQU1PLFdBQVcsR0FBRyxDQUFDZixLQUFELENBQXBCOztBQWxCeUIscUJBb0J1QmdCLDREQUFXLENBQUNELFdBQUQsQ0FwQmxDO0FBQUEsTUFvQlhFLGNBcEJXLGdCQW9CakJDLElBcEJpQjtBQUFBLE1Bb0JLQyxJQXBCTCxnQkFvQktBLElBcEJMO0FBQUEsTUFvQldDLE9BcEJYLGdCQW9CV0EsT0FwQlg7O0FBc0J6QixNQUFJLENBQUNILGNBQUwsRUFBcUIsT0FBTyxTQUFQO0FBRXJCLE1BQU1JLFFBQVEsR0FDWkosY0FBYyxJQUNkQSxjQUFjLENBQUNLLEdBQWYsQ0FBbUIsVUFBQ0MsRUFBRDtBQUFBLFdBQ2pCQSxFQUFFLENBQUNELEdBQUgsQ0FBTztBQUFBLFVBQUdFLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFVBQVFDLEtBQVIsU0FBUUEsS0FBUjtBQUFBLFVBQWVDLFFBQWYsU0FBZUEsUUFBZjtBQUFBLFVBQXlCQyxJQUF6QixTQUF5QkEsSUFBekI7QUFBQSxVQUErQkMsU0FBL0IsU0FBK0JBLFNBQS9CO0FBQUEsVUFBMENDLFdBQTFDLFNBQTBDQSxXQUExQztBQUFBLFVBQXVEQyxJQUF2RCxTQUF1REEsSUFBdkQ7QUFBQSxhQUNMLE1BQUMsMEVBQUQ7QUFDRSxXQUFHLEVBQUVOLEdBRFA7QUFFRSxhQUFLLEVBQUVDLEtBRlQ7QUFHRSxnQkFBUSxFQUFFQyxRQUhaO0FBSUUsWUFBSSxFQUFFQyxJQUpSO0FBS0UsaUJBQVMsRUFBRUMsU0FMYjtBQU1FLG1CQUFXLEVBQUVDLFdBTmY7QUFPRSxZQUFJLEVBQUVDLElBUFI7QUFRRSxrQkFBVSxFQUFFNUIsVUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREs7QUFBQSxLQUFQLENBRGlCO0FBQUEsR0FBbkIsQ0FGRjtBQWlCQSxNQUFNNkIsU0FBUyxHQUFHN0IsVUFBVSxHQUN4QixVQUR3QixHQUV4QixpREFGSjtBQUlBLFNBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ2UsY0FBRCxJQUNDO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosRUFNRTtBQUFLLGFBQVMsRUFBQyxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBRWUsbURBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsY0FBVSxFQUFFL0IsVUFIZDtBQUlFLGNBQVUsRUFBRUksVUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixFQWNFO0FBQ0UsYUFBUywwREFBbUR5QixTQUFuRCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR1YsUUFISCxDQWRGLEVBbUJFO0FBQUssYUFBUyxFQUFDLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyw4R0FEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBYjtBQUFBLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHZSxzREFKSCxDQURGLENBbkJGLENBREY7QUE4QkQsQ0EzRUQ7O0dBQU1uQyxHO1VBS0FFLDBELEVBRVVRLG9FLEVBYWtDTyxvRDs7O0tBcEI1Q2pCLEc7O0FBc0ZTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZTA3YmY1MmM1NDBmZDRmYTQyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24sIGRvd25DaGV2cm9uIH0gZnJvbSBcIi4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdENhcmRcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd1dpZHRoXCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgdXNlV2luZG93U2Nyb2xsUG9zaXRpb24gZnJvbSBcIkByZWhvb2tzL3dpbmRvdy1zY3JvbGwtcG9zaXRpb25cIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaXNUb2dnbGVkOiBpc0xpc3RWaWV3LFxuICAgIHNldFRvZ2dsZTogc2V0TGlzdFZpZXcsXG4gICAgdG9nZ2xlOiBzd2l0Y2hWaWV3LFxuICB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbGV0IHsgeSB9ID0gdXNlV2luZG93U2Nyb2xsUG9zaXRpb24oe1xuICAgIC8vICAgdGhyb3R0bGU6IDUwMCxcbiAgICAvLyB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh5KTtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSk7XG4gICAgd2lkdGggPD0gNzY4ICYmIHNldExpc3RWaWV3KGZhbHNlKTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgY29uc3QgaW5pdGlhbERhdGEgPSBbcG9zdHNdO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICBpZiAoIXBhZ2luYXRlZFBvc3RzKSByZXR1cm4gXCJsb2FkaW5nXCI7XG5cbiAgY29uc3QgcHJldmlld3MgPVxuICAgIHBhZ2luYXRlZFBvc3RzICYmXG4gICAgcGFnaW5hdGVkUG9zdHMubWFwKChlbCkgPT5cbiAgICAgIGVsLm1hcCgoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgc2x1ZywgbWFpbkltYWdlLCBwdWJsaXNoZWRBdCwgYm9keSB9KSA9PiAoXG4gICAgICAgIDxQb3N0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgICBpc0xpc3RWaWV3PXtpc0xpc3RWaWV3fVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICApO1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTZcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshcGFnaW5hdGVkUG9zdHMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICBsb2FkaW5nLi4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbXQtNiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpmbGV4IG1kOnB4LTE2IHhsOnB4LTE2IGlwOnB4LTY0XCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17Z3JpZEljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bGlzdEljb259XG4gICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgICBzd2l0Y2hWaWV3PXtzd2l0Y2hWaWV3fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBsZzpteC0xNiBpcDpteC02NCAke2dyaWRDbGFzc31gfVxuICAgICAgPlxuICAgICAgICB7cHJldmlld3N9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LTYgbGc6bXktMTIgbGc6bXgtMTYgaXA6bXgtNjRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItZ3JheS00MDAgIHB4LTQgcHktMiByb3VuZGVkLWxnIGhvdmVyOmJvcmRlci1ncmF5LTgwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2l6ZShzaXplICsgMSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZG93bkNoZXZyb259XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=