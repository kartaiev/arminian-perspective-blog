webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@rehooks/window-scroll-position/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@rehooks/window-scroll-position/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

let { useState, useEffect } = __webpack_require__(/*! react */ "./node_modules/react/index.js")
let _throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js")

let supportsPassive = false
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true
    },
  })
  window.addEventListener('testPassive', null, opts)
  window.removeEventListener('testPassive', null, opts)
} catch (e) {}

let getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
})

let defaultOptions = {
  throttle: 100,
}

function useWindowScrollPosition(options) {
  let opts = Object.assign({}, defaultOptions, options)

  let [position, setPosition] = useState(getPosition())

  useEffect(() => {
    let handleScroll = _throttle(() => {
      setPosition(getPosition())
    }, opts.throttle)

    window.addEventListener(
      'scroll',
      handleScroll,
      supportsPassive ? { passive: true } : false
    )

    return () => {
      handleScroll.cancel()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}

module.exports = useWindowScrollPosition


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Button.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Element.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Link.js":
false,

/***/ "./node_modules/react-scroll/modules/index.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_6__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
          lineNumber: 37,
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
      lineNumber: 55,
      columnNumber: 5
    }
  }, !paginatedPosts && __jsx("div", {
    className: "h-full w-full flex items-center justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "loading..."), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, previews), __jsx("div", {
    className: "flex  items-center justify-center my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 9
    }
  }, _lib_icons__WEBPACK_IMPORTED_MODULE_4__["downChevron"])));
};

_s(App, "DLxKuMPFRwujZ/naATP8dhvGdHo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWhvb2tzL3dpbmRvdy1zY3JvbGwtcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInBvc3RzIiwidXNlVG9nZ2xlIiwiaXNMaXN0VmlldyIsImlzVG9nZ2xlZCIsInNldExpc3RWaWV3Iiwic2V0VG9nZ2xlIiwic3dpdGNoVmlldyIsInRvZ2dsZSIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsIndpZHRoIiwidXNlV2luZG93V2lkdGgiLCJ1c2VFZmZlY3QiLCJpbml0aWFsRGF0YSIsInVzZUdldFBvc3RzIiwicGFnaW5hdGVkUG9zdHMiLCJkYXRhIiwic2l6ZSIsInNldFNpemUiLCJwcmV2aWV3cyIsIm1hcCIsImVsIiwiX2lkIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJncmlkQ2xhc3MiLCJncmlkSWNvbiIsImxpc3RJY29uIiwiZG93bkNoZXZyb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBWTtBQUNaLEtBQUssc0JBQXNCLEdBQUcsbUJBQU8sQ0FBQyw0Q0FBTztBQUM3QyxnQkFBZ0IsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRXpDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyw4R0FEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1ELE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBYjtBQUFBLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHZSxzREFKSCxDQURGLENBbkJGLENBREY7QUE4QkQsQ0F4RUQ7O0dBQU1sQyxHO1VBS0FFLDBELEVBSVVXLG9FLEVBUWtDRyxvRDs7O0tBakI1Q2hCLEc7O0FBbUZTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYzA5YmVmYTI4ZjcxNDc5ZWJkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5sZXQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSByZXF1aXJlKCdyZWFjdCcpXG5sZXQgX3Rocm90dGxlID0gcmVxdWlyZSgnbG9kYXNoLnRocm90dGxlJylcblxubGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlXG50cnkge1xuICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWVcbiAgICB9LFxuICB9KVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKVxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKVxufSBjYXRjaCAoZSkge31cblxubGV0IGdldFBvc2l0aW9uID0gKCkgPT4gKHtcbiAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICB5OiB3aW5kb3cucGFnZVlPZmZzZXQsXG59KVxuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHRocm90dGxlOiAxMDAsXG59XG5cbmZ1bmN0aW9uIHVzZVdpbmRvd1Njcm9sbFBvc2l0aW9uKG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcblxuICBsZXQgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZShnZXRQb3NpdGlvbigpKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGhhbmRsZVNjcm9sbCA9IF90aHJvdHRsZSgoKSA9PiB7XG4gICAgICBzZXRQb3NpdGlvbihnZXRQb3NpdGlvbigpKVxuICAgIH0sIG9wdHMudGhyb3R0bGUpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdzY3JvbGwnLFxuICAgICAgaGFuZGxlU2Nyb2xsLFxuICAgICAgc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBoYW5kbGVTY3JvbGwuY2FuY2VsKClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gcG9zaXRpb25cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1c2VXaW5kb3dTY3JvbGxQb3NpdGlvblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlVG9nZ2xlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBncmlkSWNvbiwgbGlzdEljb24sIGRvd25DaGV2cm9uIH0gZnJvbSBcIi4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdENhcmRcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd1dpZHRoXCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgdXNlV2luZG93U2Nyb2xsUG9zaXRpb24gZnJvbSBcIkByZWhvb2tzL3dpbmRvdy1zY3JvbGwtcG9zaXRpb25cIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaXNUb2dnbGVkOiBpc0xpc3RWaWV3LFxuICAgIHNldFRvZ2dsZTogc2V0TGlzdFZpZXcsXG4gICAgdG9nZ2xlOiBzd2l0Y2hWaWV3LFxuICB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aWR0aCA8PSA3NjggJiYgc2V0TGlzdFZpZXcoZmFsc2UpO1xuICB9LCBbd2lkdGhdKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IFtwb3N0c107XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdpbmF0ZWRQb3N0cywgc2l6ZSwgc2V0U2l6ZSB9ID0gdXNlR2V0UG9zdHMoaW5pdGlhbERhdGEpO1xuXG4gIGlmICghcGFnaW5hdGVkUG9zdHMpIHJldHVybiBcImxvYWRpbmdcIjtcblxuICBjb25zdCBwcmV2aWV3cyA9XG4gICAgcGFnaW5hdGVkUG9zdHMgJiZcbiAgICBwYWdpbmF0ZWRQb3N0cy5tYXAoKGVsKSA9PlxuICAgICAgZWwubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICAgIGlzTGlzdFZpZXc9e2lzTGlzdFZpZXd9XG4gICAgICAgIC8+XG4gICAgICApKVxuICAgICk7XG5cbiAgY29uc3QgZ3JpZENsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNlwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFwYWdpbmF0ZWRQb3N0cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIGxvYWRpbmcuLi5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC0xMCBtdC02IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGxnOmZsZXggbWQ6cHgtMTYgeGw6cHgtMTYgaXA6cHgtNjRcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgZmlyc3RJY29uPXtncmlkSWNvbn1cbiAgICAgICAgICBzZWNvbmRJY29uPXtsaXN0SWNvbn1cbiAgICAgICAgICBpc0xpc3RWaWV3PXtpc0xpc3RWaWV3fVxuICAgICAgICAgIHN3aXRjaFZpZXc9e3N3aXRjaFZpZXd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbWItNiBncmlkIGdyaWQtY29scy0xIGdhcC02IGxnOm14LTE2IGlwOm14LTY0ICR7Z3JpZENsYXNzfWB9XG4gICAgICA+XG4gICAgICAgIHtwcmV2aWV3c31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktNiBsZzpteS0xMiBsZzpteC0xNiBpcDpteC02NFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci1ncmF5LTQwMCAgcHgtNCBweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaXplKHNpemUgKyAxKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3duQ2hldnJvbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygwKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==