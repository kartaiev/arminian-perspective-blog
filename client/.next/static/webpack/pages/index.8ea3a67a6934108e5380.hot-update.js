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
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/posts-preview/PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/global.context */ "./context/global.context.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core/dist/Button */ "./node_modules/@chakra-ui/core/dist/es/Button/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var App = function App(_ref) {
  _s();

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_7__["GlobalContext"]),
      setListView = _useContext.setListView,
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    width <= 768 && setListView(false);
  }, [width]);
  var initialData = posts && [posts];

  var increaseSize = function increaseSize() {
    return setSize(size + 1);
  };

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_8__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", function () {
      return Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_6__["handleScroll"])(increaseSize);
    }); // return () =>
    //   window.removeEventListener("scroll", () => handleScroll(increaseSize));
  }, []);
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
          lineNumber: 42,
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
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_3__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_3__["listIcon"],
    toggle: switchView,
    isToggled: isListView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, previews)), __jsx("div", {
    className: "flex  items-center justify-center my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_9__["default"] // className="border flex flex-col items-center justify-center border-gray-400  px-4 py-2 rounded-lg hover:border-gray-800"
  , {
    onClick: function onClick() {
      return setSize(size + 1);
    },
    variant: "outline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_3__["downChevron"])));
};

_s(App, "OZ8pKkzDCjeocX2FEd4Vne2vZgk=", false, function () {
  return [_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"], _actions__WEBPACK_IMPORTED_MODULE_8__["useGetPosts"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNldExpc3RWaWV3IiwiaXNMaXN0VmlldyIsInN3aXRjaFZpZXciLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiaW5pdGlhbERhdGEiLCJpbmNyZWFzZVNpemUiLCJzZXRTaXplIiwic2l6ZSIsInVzZUdldFBvc3RzIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInByZXZpZXdzIiwibWFwIiwiZWwiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsImdyaWRDbGFzcyIsImdyaWRJY29uIiwibGlzdEljb24iLCJkb3duQ2hldnJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsb0JBQ3VCQyx3REFBVSxDQUFDQyxxRUFBRCxDQURqQztBQUFBLE1BQ2pCQyxXQURpQixlQUNqQkEsV0FEaUI7QUFBQSxNQUNKQyxVQURJLGVBQ0pBLFVBREk7QUFBQSxNQUNRQyxVQURSLGVBQ1FBLFVBRFI7O0FBR3pCLE1BQU1DLEtBQUssR0FBR0MsNEVBQWMsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLFNBQUssSUFBSSxHQUFULElBQWdCSCxXQUFXLENBQUMsS0FBRCxDQUEzQjtBQUNELEdBRlEsRUFFTixDQUFDRyxLQUFELENBRk0sQ0FBVDtBQUlBLE1BQU1HLFdBQVcs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LjhlYTNhNjdhNjkzNDEwOGU1MzgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uc0J0blwiO1xuaW1wb3J0IHsgZG93bkNoZXZyb24sIGdyaWRJY29uLCBsaXN0SWNvbiB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IHsgaGFuZGxlU2Nyb2xsIH0gZnJvbSBcIi4uL2xpYi9oZWxwZXJzXCI7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcblxuaW1wb3J0IHsgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQnV0dG9uXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7IHNldExpc3RWaWV3LCBpc0xpc3RWaWV3LCBzd2l0Y2hWaWV3IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpZHRoIDw9IDc2OCAmJiBzZXRMaXN0VmlldyhmYWxzZSk7XG4gIH0sIFt3aWR0aF0pO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gcG9zdHMgJiYgW3Bvc3RzXTtcblxuICBjb25zdCBpbmNyZWFzZVNpemUgPSAoKSA9PiBzZXRTaXplKHNpemUgKyAxKTtcblxuICBjb25zdCB7IGRhdGE6IHBhZ2luYXRlZFBvc3RzLCBzaXplLCBzZXRTaXplIH0gPSB1c2VHZXRQb3N0cyhpbml0aWFsRGF0YSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwoaW5jcmVhc2VTaXplKSk7XG4gICAgLy8gcmV0dXJuICgpID0+XG4gICAgLy8gICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwoaW5jcmVhc2VTaXplKSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXBhZ2luYXRlZFBvc3RzKSByZXR1cm4gXCJsb2FkaW5nXCI7XG5cbiAgY29uc3QgcHJldmlld3MgPVxuICAgIHBhZ2luYXRlZFBvc3RzICYmXG4gICAgcGFnaW5hdGVkUG9zdHMubWFwKChlbCkgPT5cbiAgICAgIGVsLm1hcCgoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgc2x1ZywgbWFpbkltYWdlLCBwdWJsaXNoZWRBdCwgYm9keSB9KSA9PiAoXG4gICAgICAgIDxQb3N0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgKTtcblxuICBjb25zdCBncmlkQ2xhc3MgPSBpc0xpc3RWaWV3XG4gICAgPyBcIm1kOm14LTE2XCJcbiAgICA6IFwibGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBpcDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIjtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBoLTEwIG10LTYganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbGc6ZmxleCBtZDpweC0xNiB4bDpweC0xNiBpcDpweC02NFwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICBmaXJzdEljb249e2dyaWRJY29ufVxuICAgICAgICAgIHNlY29uZEljb249e2xpc3RJY29ufVxuICAgICAgICAgIHRvZ2dsZT17c3dpdGNoVmlld31cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzTGlzdFZpZXd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTa2VsZXRvbiBpc0xvYWRlZD17cGFnaW5hdGVkUG9zdHN9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOm14LTE2IGlwOm14LTY0ICR7Z3JpZENsYXNzfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG15LTYgbGc6bXktMTIgbGc6bXgtMTYgaXA6bXgtNjRcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImJvcmRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItZ3JheS00MDAgIHB4LTQgcHktMiByb3VuZGVkLWxnIGhvdmVyOmJvcmRlci1ncmF5LTgwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2l6ZShzaXplICsgMSl9XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAge2Rvd25DaGV2cm9ufVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKDApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9