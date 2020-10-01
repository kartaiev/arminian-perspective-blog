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

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_8__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  var increaseSize = function increaseSize() {
    return setSize(size + 1);
  };

  console.log(size);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", function () {
      return Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_6__["handleScroll"])(increaseSize);
    });
    return function () {
      return window.removeEventListener("scroll", function () {
        return Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_6__["handleScroll"])(increaseSize);
      });
    };
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
          lineNumber: 44,
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
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hidden h-10 mt-6 justify-start items-center lg:flex md:px-16 xl:px-16 ip:px-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_10__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mb-6 grid grid-cols-1 gap-6 lg:mx-16 ip:mx-64 ".concat(gridClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, previews)), __jsx("div", {
    className: "flex  items-center justify-center my-6 lg:my-12 lg:mx-16 ip:mx-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInNldExpc3RWaWV3IiwiaXNMaXN0VmlldyIsInN3aXRjaFZpZXciLCJ3aWR0aCIsInVzZVdpbmRvd1dpZHRoIiwidXNlRWZmZWN0IiwiaW5pdGlhbERhdGEiLCJ1c2VHZXRQb3N0cyIsInBhZ2luYXRlZFBvc3RzIiwiZGF0YSIsInNpemUiLCJzZXRTaXplIiwiaW5jcmVhc2VTaXplIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldmlld3MiLCJtYXAiLCJlbCIsIl9pZCIsInRpdGxlIiwic3VidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiLCJib2R5IiwiZ3JpZENsYXNzIiwiZ3JpZEljb24iLCJsaXN0SWNvbiIsImRvd25DaGV2cm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxvQkFDdUJDLHdEQUFVLENBQUNDLHFFQUFELENBRGpDO0FBQUEsTUFDakJDLFdBRGlCLGVBQ2pCQSxXQURpQjtBQUFBLE1BQ0pDLFVBREksZUFDSkEsVUFESTtBQUFBLE1BQ1FDLFVBRFIsZUFDUUEsVUFEUjs7QUFHekIsTUFBTUMsS0FBSyxHQUFHQyw0RUFBYyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsU0FBSyxJQUFJLEdBQVQsSUFBZ0JILFdBQVcsQ0FBQyxLQUFELENBQTNCO0FBQ0QsR0FGUSxFQUVOLENBQUNHLEtBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTUcsV0FBVyxHQUFHVCxLQUFLLElBQUksQ0FBQ0EsS0FBRCxDQUE3Qjs7QUFUeUIscUJBV3VCVSw0REFBVyxDQUFDRCxXQUFELENBWGxDO0FBQUEsTUFXWEUsY0FYVyxnQkFXakJDLElBWGlCO0FBQUEsTUFXS0MsSUFYTCxnQkFXS0EsSUFYTDtBQUFBLE1BV1dDLE9BWFgsZ0JBV1dBLE9BWFg7O0FBYXpCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUQsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFiO0FBQUEsR0FBckI7O0FBRUFHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBRUFMLHlEQUFTLENBQUMsWUFBTTtBQUNkVSxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQUEsYUFBTUMsaUVBQVksQ0FBQ0wsWUFBRCxDQUFsQjtBQUFBLEtBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQ0xHLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUM7QUFBQSxlQUFNRCxpRUFBWSxDQUFDTCxZQUFELENBQWxCO0FBQUEsT0FBckMsQ0FESztBQUFBLEtBQVA7QUFFRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsTUFBSSxDQUFDSixjQUFMLEVBQXFCLE9BQU8sU0FBUDtBQUVyQixNQUFNVyxRQUFRLEdBQ1pYLGNBQWMsSUFDZEEsY0FBYyxDQUFDWSxHQUFmLENBQW1CLFVBQUNDLEVBQUQ7QUFBQSxXQUNqQkEsRUFBRSxDQUFDRCxHQUFILENBQU87QUFBQSxVQUFHRSxHQUFILFNBQUdBLEdBQUg7QUFBQSxVQUFRQyxLQUFSLFNBQVFBLEtBQVI7QUFBQSxVQUFlQyxRQUFmLFNBQWVBLFFBQWY7QUFBQSxVQUF5QkMsSUFBekIsU0FBeUJBLElBQXpCO0FBQUEsVUFBK0JDLFNBQS9CLFNBQStCQSxTQUEvQjtBQUFBLFVBQTBDQyxXQUExQyxTQUEwQ0EsV0FBMUM7QUFBQSxVQUF1REMsSUFBdkQsU0FBdURBLElBQXZEO0FBQUEsYUFDTCxNQUFDLDBFQUFEO0FBQ0UsV0FBRyxFQUFFTixHQURQO0FBRUUsYUFBSyxFQUFFQyxLQUZUO0FBR0UsZ0JBQVEsRUFBRUMsUUFIWjtBQUlFLFlBQUksRUFBRUMsSUFKUjtBQUtFLGlCQUFTLEVBQUVDLFNBTGI7QUFNRSxtQkFBVyxFQUFFQyxXQU5mO0FBT0UsWUFBSSxFQUFFQyxJQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESztBQUFBLEtBQVAsQ0FEaUI7QUFBQSxHQUFuQixDQUZGO0FBZ0JBLE1BQU1DLFNBQVMsR0FBRzVCLFVBQVUsR0FDeEIsVUFEd0IsR0FFeEIsaURBRko7QUFJQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFNkIsbURBRGI7QUFFRSxjQUFVLEVBQUVDLG1EQUZkO0FBR0UsVUFBTSxFQUFFN0IsVUFIVjtBQUlFLGFBQVMsRUFBRUQsVUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVNFLE1BQUMseURBQUQ7QUFBVSxZQUFRLEVBQUVPLGNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsMERBQW1EcUIsU0FBbkQsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0dWLFFBSEgsQ0FERixDQVRGLEVBZ0JFO0FBQUssYUFBUyxFQUFDLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFELENBQ0U7QUFERjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1SLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBYjtBQUFBLEtBRlg7QUFHRSxXQUFPLEVBQUMsU0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dzQixzREFMSCxDQURGLENBaEJGLENBREY7QUE0QkQsQ0F6RUQ7O0dBQU1wQyxHO1VBR1VRLG9FLEVBUWtDRyxvRDs7O0tBWDVDWCxHOztBQW9GU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWNlYzU1NDlhNzFiM2FiZTVjMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9jb21wb25lbnRzL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBkb3duQ2hldnJvbiwgZ3JpZEljb24sIGxpc3RJY29uIH0gZnJvbSBcIi4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RzLXByZXZpZXcvUG9zdENhcmRcIjtcbmltcG9ydCB7IHVzZVdpbmRvd1dpZHRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd1dpZHRoXCI7XG5pbXBvcnQgeyBoYW5kbGVTY3JvbGwgfSBmcm9tIFwiLi4vbGliL2hlbHBlcnNcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuXG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9CdXR0b25cIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuXG5jb25zdCBBcHAgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHsgc2V0TGlzdFZpZXcsIGlzTGlzdFZpZXcsIHN3aXRjaFZpZXcgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2lkdGggPD0gNzY4ICYmIHNldExpc3RWaWV3KGZhbHNlKTtcbiAgfSwgW3dpZHRoXSk7XG5cbiAgY29uc3QgaW5pdGlhbERhdGEgPSBwb3N0cyAmJiBbcG9zdHNdO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICBjb25zdCBpbmNyZWFzZVNpemUgPSAoKSA9PiBzZXRTaXplKHNpemUgKyAxKTtcblxuICBjb25zb2xlLmxvZyhzaXplKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbChpbmNyZWFzZVNpemUpKTtcbiAgICByZXR1cm4gKCkgPT5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbChpbmNyZWFzZVNpemUpKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcGFnaW5hdGVkUG9zdHMpIHJldHVybiBcImxvYWRpbmdcIjtcblxuICBjb25zdCBwcmV2aWV3cyA9XG4gICAgcGFnaW5hdGVkUG9zdHMgJiZcbiAgICBwYWdpbmF0ZWRQb3N0cy5tYXAoKGVsKSA9PlxuICAgICAgZWwubWFwKCh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+IChcbiAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICApO1xuXG4gIGNvbnN0IGdyaWRDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTZcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtMTAgbXQtNiBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpmbGV4IG1kOnB4LTE2IHhsOnB4LTE2IGlwOnB4LTY0XCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIGZpcnN0SWNvbj17Z3JpZEljb259XG4gICAgICAgICAgc2Vjb25kSWNvbj17bGlzdEljb259XG4gICAgICAgICAgdG9nZ2xlPXtzd2l0Y2hWaWV3fVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNMaXN0Vmlld31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNrZWxldG9uIGlzTG9hZGVkPXtwYWdpbmF0ZWRQb3N0c30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BtYi02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6bXgtMTYgaXA6bXgtNjQgJHtncmlkQ2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NrZWxldG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktNiBsZzpteS0xMiBsZzpteC0xNiBpcDpteC02NFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPVwiYm9yZGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci1ncmF5LTQwMCAgcHgtNCBweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ym9yZGVyLWdyYXktODAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaXplKHNpemUgKyAxKX1cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7ZG93bkNoZXZyb259XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=