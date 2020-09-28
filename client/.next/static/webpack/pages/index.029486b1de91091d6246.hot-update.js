webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/IconsBtn */ "./components/IconsBtn.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/icons */ "./lib/icons.js");
/* harmony import */ var _components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/posts-preview/PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _chakra_ui_core_dist_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core/dist/Spinner */ "./node_modules/@chakra-ui/core/dist/es/Spinner/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var App = function App(_ref) {
  _s();

  var _jsx;

  var posts = _ref.posts;

  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(),
      isListView = _useToggle.isToggled,
      setListView = _useToggle.setToggle,
      switchView = _useToggle.toggle;

  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__["useWindowWidth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    width <= 768 && setListView(false);
  }, [width]);

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_8__["useGetPosts"])(),
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
    return __jsx(_components_posts_preview_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, __jsx(_chakra_ui_core_dist_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], (_jsx = {
    size: "xl",
    thickness: "4px",
    speed: "0.65s",
    emptyColor: "gray.200",
    color: "blue.500"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "size", "xl"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 11
  }), _jsx))), __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    firstIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["gridIcon"],
    secondIcon: _lib_icons__WEBPACK_IMPORTED_MODULE_5__["listIcon"],
    isListView: isListView,
    switchView: switchView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, previews));
};

_s(App, "SohDm3njkPXH17V1IiCOTssDwIY=", false, function () {
  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["useToggle"], _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_7__["useWindowWidth"], _actions__WEBPACK_IMPORTED_MODULE_8__["useGetPosts"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwb3N0cyIsInVzZVRvZ2dsZSIsImlzTGlzdFZpZXciLCJpc1RvZ2dsZWQiLCJzZXRMaXN0VmlldyIsInNldFRvZ2dsZSIsInN3aXRjaFZpZXciLCJ0b2dnbGUiLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwidXNlR2V0UG9zdHMiLCJkYXRhIiwiZXJyb3IiLCJwcmV2aWV3cyIsIm1hcCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiLCJib2R5IiwiZ3JpZENsYXNzIiwiZ3JpZEljb24iLCJsaXN0SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWU7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsbUJBS3JCQyxrRUFBUyxFQUxZO0FBQUEsTUFFWkMsVUFGWSxjQUV2QkMsU0FGdUI7QUFBQSxNQUdaQyxXQUhZLGNBR3ZCQyxTQUh1QjtBQUFBLE1BSWZDLFVBSmUsY0FJdkJDLE1BSnVCOztBQU96QixNQUFNQyxLQUFLLEdBQUdDLDRFQUFjLEVBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixTQUFLLElBQUksR0FBVCxJQUFnQkosV0FBVyxDQUFDLEtBQUQsQ0FBM0I7QUFDRCxHQUZRLEVBRU4sQ0FBQ0ksS0FBRCxDQUZNLENBQVQ7O0FBVHlCLHFCQWFERyw0REFBVyxFQWJWO0FBQUEsTUFhakJDLElBYmlCLGdCQWFqQkEsSUFiaUI7QUFBQSxNQWFYQyxLQWJXLGdCQWFYQSxLQWJXOztBQWV6QixNQUFNQyxRQUFRLEdBQUdkLEtBQUssQ0FBQ2UsR0FBTixDQUNmO0FBQUEsUUFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsUUFBUUMsS0FBUixTQUFRQSxLQUFSO0FBQUEsUUFBZUMsUUFBZixTQUFlQSxRQUFmO0FBQUEsUUFBeUJDLElBQXpCLFNBQXlCQSxJQUF6QjtBQUFBLFFBQStCQyxTQUEvQixTQUErQkEsU0FBL0I7QUFBQSxRQUEwQ0MsV0FBMUMsU0FBMENBLFdBQTFDO0FBQUEsUUFBdURDLElBQXZELFNBQXVEQSxJQUF2RDtBQUFBLFdBQ0UsTUFBQywwRUFBRDtBQUNFLFNBQUcsRUFBRU4sR0FEUDtBQUVFLFdBQUssRUFBRUMsS0FGVDtBQUdFLGNBQVEsRUFBRUMsUUFIWjtBQUlFLFVBQUksRUFBRUMsSUFKUjtBQUtFLGVBQVMsRUFBRUMsU0FMYjtBQU1FLGlCQUFXLEVBQUVDLFdBTmY7QUFPRSxVQUFJLEVBQUVDLElBUFI7QUFRRSxnQkFBVSxFQUFFcEIsVUFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFBQSxHQURlLENBQWpCO0FBZUEsTUFBTXFCLFNBQVMsR0FBR3JCLFVBQVUsR0FDeEIsVUFEd0IsR0FFeEIsaURBRko7QUFJQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNVLElBQUQsSUFDQztBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFFBQUksRUFBQyxJQURQO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLGNBQVUsRUFBQyxVQUpiO0FBS0UsU0FBSyxFQUFDO0FBTFIsNkdBTU8sSUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FGSixFQWFFO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFWSxtREFEYjtBQUVFLGNBQVUsRUFBRUMsbURBRmQ7QUFHRSxjQUFVLEVBQUV2QixVQUhkO0FBSUUsY0FBVSxFQUFFSSxVQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWJGLEVBcUJFO0FBQ0UsYUFBUywwREFBbURpQixTQUFuRCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR1QsUUFISCxDQXJCRixDQURGO0FBNkJELENBL0REOztHQUFNZixHO1VBS0FFLDBELEVBRVVRLG9FLEVBTVVFLG9EOzs7S0FicEJaLEc7O0FBMEVTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjk0ODZiMWRlOTEwOTFkNjI0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL2NvbXBvbmVudHMvSWNvbnNCdG5cIjtcbmltcG9ydCB7IGdyaWRJY29uLCBsaXN0SWNvbiB9IGZyb20gXCIuLi9saWIvaWNvbnNcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IHsgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L1NwaW5uZXJcIjtcblxuY29uc3QgQXBwID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaXNUb2dnbGVkOiBpc0xpc3RWaWV3LFxuICAgIHNldFRvZ2dsZTogc2V0TGlzdFZpZXcsXG4gICAgdG9nZ2xlOiBzd2l0Y2hWaWV3LFxuICB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2lkdGggPD0gNzY4ICYmIHNldExpc3RWaWV3KGZhbHNlKTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlR2V0UG9zdHMoKTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBvc3RzLm1hcChcbiAgICAoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgc2x1ZywgbWFpbkltYWdlLCBwdWJsaXNoZWRBdCwgYm9keSB9KSA9PiAoXG4gICAgICA8UG9zdENhcmRcbiAgICAgICAga2V5PXtfaWR9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICBpc0xpc3RWaWV3PXtpc0xpc3RWaWV3fVxuICAgICAgLz5cbiAgICApXG4gICk7XG5cbiAgY29uc3QgZ3JpZENsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNlwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFkYXRhICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICB0aGlja25lc3M9XCI0cHhcIlxuICAgICAgICAgICAgc3BlZWQ9XCIwLjY1c1wiXG4gICAgICAgICAgICBlbXB0eUNvbG9yPVwiZ3JheS4yMDBcIlxuICAgICAgICAgICAgY29sb3I9XCJibHVlLjUwMFwiXG4gICAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbXQtNiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpmbGV4IG1kOnB4LTE2IHhsOnB4LTE2IGlwOnB4LTY0XCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17Z3JpZEljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bGlzdEljb259XG4gICAgICAgICAgaXNMaXN0Vmlldz17aXNMaXN0Vmlld31cbiAgICAgICAgICBzd2l0Y2hWaWV3PXtzd2l0Y2hWaWV3fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBsZzpteC0xNiBpcDpteC02NCAke2dyaWRDbGFzc31gfVxuICAgICAgPlxuICAgICAgICB7cHJldmlld3N9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9