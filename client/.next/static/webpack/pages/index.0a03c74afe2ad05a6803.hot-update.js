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
/* harmony import */ var _chakra_ui_core_dist_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core/dist/Spinner */ "./node_modules/@chakra-ui/core/dist/es/Spinner/index.js");
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
    width <= 768 && setListView(false);
  }, [width]);

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_7__["useGetPosts"])(),
      data = _useGetPosts.data,
      error = _useGetPosts.error;

  var previews = posts.map(function (_ref2) {
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
        lineNumber: 29,
        columnNumber: 7
      }
    });
  });
  var gridClass = isListView ? "md:mx-16" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, !data && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core_dist_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, previews));
};

_s(App, "SohDm3njkPXH17V1IiCOTssDwIY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VUb2dnbGUiLCJpc0xpc3RWaWV3IiwiaXNUb2dnbGVkIiwic2V0TGlzdFZpZXciLCJzZXRUb2dnbGUiLCJzd2l0Y2hWaWV3IiwidG9nZ2xlIiwid2lkdGgiLCJ1c2VXaW5kb3dXaWR0aCIsInVzZUVmZmVjdCIsInVzZUdldFBvc3RzIiwiZGF0YSIsImVycm9yIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsImdyaWRDbGFzcyIsImdyaWRJY29uIiwibGlzdEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLG1CQUtyQkMsa0VBQVMsRUFMWTtBQUFBLE1BRVpDLFVBRlksY0FFdkJDLFNBRnVCO0FBQUEsTUFHWkMsV0FIWSxjQUd2QkMsU0FIdUI7QUFBQSxNQUlmQyxVQUplLGNBSXZCQyxNQUp1Qjs7QUFPekIsTUFBTUMsS0FBSyxHQUFHQyw0RUFBYyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsU0FBSyxJQUFJLEdBQVQsSUFBZ0JKLFdBQVcsQ0FBQyxLQUFELENBQTNCO0FBQ0QsR0FGUSxFQUVOLENBQUNJLEtBQUQsQ0FGTSxDQUFUOztBQVR5QixxQkFhREcsNERBQVcsRUFiVjtBQUFBLE1BYWpCQyxJQWJpQixnQkFhakJBLElBYmlCO0FBQUEsTUFhWEMsS0FiVyxnQkFhWEEsS0FiVzs7QUFlekIsTUFBTUMsUUFBUSxHQUFHZCxLQUFLLENBQUNlLEdBQU4sQ0FDZjtBQUFBLFFBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFFBQVFDLEtBQVIsU0FBUUEsS0FBUjtBQUFBLFFBQWVDLFFBQWYsU0FBZUEsUUFBZjtBQUFBLFFBQXlCQyxJQUF6QixTQUF5QkEsSUFBekI7QUFBQSxRQUErQkMsU0FBL0IsU0FBK0JBLFNBQS9CO0FBQUEsUUFBMENDLFdBQTFDLFNBQTBDQSxXQUExQztBQUFBLFFBQXVEQyxJQUF2RCxTQUF1REEsSUFBdkQ7QUFBQSxXQUNFLE1BQUMsMEVBQUQ7QUFDRSxTQUFHLEVBQUVOLEdBRFA7QUFFRSxXQUFLLEVBQUVDLEtBRlQ7QUFHRSxjQUFRLEVBQUVDLFFBSFo7QUFJRSxVQUFJLEVBQUVDLElBSlI7QUFLRSxlQUFTLEVBQUVDLFNBTGI7QUFNRSxpQkFBVyxFQUFFQyxXQU5mO0FBT0UsVUFBSSxFQUFFQyxJQVBSO0FBUUUsZ0JBQVUsRUFBRXBCLFVBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBQUEsR0FEZSxDQUFqQjtBQWVBLE1BQU1xQixTQUFTLEdBQUdyQixVQUFVLEdBQ3hCLFVBRHdCLEdBRXhCLGlEQUZKO0FBSUEsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDVSxJQUFELElBQ0M7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBUyxRQUFJLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGSixFQU1FO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFWSxtREFEYjtBQUVFLGNBQVUsRUFBRUMsbURBRmQ7QUFHRSxjQUFVLEVBQUV2QixVQUhkO0FBSUUsY0FBVSxFQUFFSSxVQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLEVBY0U7QUFDRSxhQUFTLDBEQUFtRGlCLFNBQW5ELENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdHVCxRQUhILENBZEYsQ0FERjtBQXNCRCxDQXhERDs7R0FBTWYsRztVQUtBRSwwRCxFQUVVUSxvRSxFQU1VRSxvRDs7O0tBYnBCWixHOztBQW1FU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGEwM2M3NGFmZTJhZDA1YTY4MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24gfSBmcm9tIFwiLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdHMtcHJldmlldy9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlV2luZG93V2lkdGggfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93V2lkdGhcIjtcbmltcG9ydCB7IHVzZUdldFBvc3RzIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9TcGlubmVyXCI7XG5cbmNvbnN0IEFwcCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlzVG9nZ2xlZDogaXNMaXN0VmlldyxcbiAgICBzZXRUb2dnbGU6IHNldExpc3RWaWV3LFxuICAgIHRvZ2dsZTogc3dpdGNoVmlldyxcbiAgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZUdldFBvc3RzKCk7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwb3N0cy5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT4gKFxuICAgICAgPFBvc3RDYXJkXG4gICAgICAgIGtleT17X2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgIC8+XG4gICAgKVxuICApO1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTZcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshZGF0YSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbXQtNiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpmbGV4IG1kOnB4LTE2IHhsOnB4LTE2IGlwOnB4LTY0XCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17Z3JpZEljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bGlzdEljb259XG4gICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgICBzd2l0Y2hWaWV3PXtzd2l0Y2hWaWV3fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBsZzpteC0xNiBpcDpteC02NCAke2dyaWRDbGFzc31gfVxuICAgICAgPlxuICAgICAgICB7cHJldmlld3N9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9