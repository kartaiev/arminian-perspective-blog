webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/Previews.js":
/*!**********************************************!*\
  !*** ./components/posts-preview/Previews.js ***!
  \**********************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/vars */ "./lib/vars.js");
/* harmony import */ var _shared_IconsBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/core/dist/Button */ "./node_modules/@chakra-ui/core/dist/es/Button/index.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/icons */ "./lib/icons.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../context/global.context */ "./context/global.context.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\posts-preview\\Previews.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














function getStaticProps() {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var posts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_lib_api__WEBPACK_IMPORTED_MODULE_15__["getAllPosts"])(0);

          case 2:
            posts = _context.sent;
            return _context.abrupt("return", {
              props: {
                posts: posts
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

var Previews = function Previews(_ref) {
  _s();

  var _paginatedPosts$, _paginatedPosts;

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_14__["GlobalContext"]),
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var initialData = posts && posts;
  console.log(initialData);

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_4__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : (_paginatedPosts$ = paginatedPosts[0]) === null || _paginatedPosts$ === void 0 ? void 0 : _paginatedPosts$.length) === 0;
  var isReachingEnd = isEmpty || paginatedPosts && ((_paginatedPosts = paginatedPosts[paginatedPosts[0].length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_5__["PAGE_SIZE"];
  console.log(paginatedPosts[0]);
  var previews = paginatedPosts[0].map(function (_ref2) {
    var _id = _ref2._id,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        slug = _ref2.slug,
        mainImage = _ref2.mainImage,
        publishedAt = _ref2.publishedAt,
        body = _ref2.body;
    return slug && __jsx(_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        lineNumber: 49,
        columnNumber: 9
      }
    });
  });
  var previewClass = isListView ? "md:mx-16 ip:ml-48" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "view-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
    whileHover: {
      scale: 1.2
    },
    firstIcon: react_icons_bs__WEBPACK_IMPORTED_MODULE_7__["BsGrid"],
    secondIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_8__["FiList"],
    toggle: switchView,
    isToggled: isListView,
    className: "ease",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_11__["color"][colorMode],
    className: "preview-container ".concat(previewClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "hello", previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: isReachingEnd,
    size: "lg",
    rounded: "full",
    onClick: function onClick() {
      return !isReachingEnd && setSize(size + 1);
    },
    variant: "outline",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_11__["borderColor"][colorMode],
    _focus: {
      outline: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, Object(_lib_icons__WEBPACK_IMPORTED_MODULE_13__["downChevron"])(isReachingEnd))));
};

_s(Previews, "g/tR9pTjfxLpNRPuhmpaBJ8sSuA=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["useColorMode"], _actions__WEBPACK_IMPORTED_MODULE_4__["useGetPosts"]];
});

_c = Previews;
/* harmony default export */ __webpack_exports__["default"] = (Previews);

var _c;

$RefreshReg$(_c, "Previews");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiZ2V0QWxsUG9zdHMiLCJwb3N0cyIsInByb3BzIiwiUHJldmlld3MiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsImlzTGlzdFZpZXciLCJzd2l0Y2hWaWV3IiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiaW5pdGlhbERhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlR2V0UG9zdHMiLCJwYWdpbmF0ZWRQb3N0cyIsImRhdGEiLCJzaXplIiwic2V0U2l6ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlYWNoaW5nRW5kIiwiUEFHRV9TSVpFIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsInByZXZpZXdDbGFzcyIsInNjYWxlIiwiQnNHcmlkIiwiRmlMaXN0IiwiY29sb3IiLCJib3JkZXJDb2xvciIsIm91dGxpbmUiLCJkb3duQ2hldnJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBZUEsY0FBdEI7QUFBQTtBQUFBOzs7cU1BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZUMsNkRBQVcsQ0FBQyxDQUFELENBRDFCOztBQUFBO0FBQ0NDLGlCQUREO0FBQUEsNkNBRUU7QUFDTEMsbUJBQUssRUFBRTtBQUNMRCxxQkFBSyxFQUFMQTtBQURLO0FBREYsYUFGRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBU1AsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFB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QTtBQUFBLGNBS0dULFFBTEgsQ0FERixDQVhGLEVBb0JFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsWUFBUSxFQUFFRixhQURaO0FBRUUsUUFBSSxFQUFDLElBRlA7QUFHRSxXQUFPLEVBQUMsTUFIVjtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU0sQ0FBQ0EsYUFBRCxJQUFrQkgsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUEvQjtBQUFBLEtBSlg7QUFLRSxXQUFPLEVBQUMsU0FMVjtBQU1FLGVBQVcsRUFBRW9CLHlEQUFXLENBQUMzQixTQUFELENBTjFCO0FBT0UsVUFBTSxFQUFFO0FBQUU0QixhQUFPLEVBQUU7QUFBWCxLQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR0MsK0RBQVcsQ0FBQ2xCLGFBQUQsQ0FUZCxDQURGLENBcEJGLENBREY7QUFvQ0QsQ0E1RUQ7O0dBQU1qQixRO1VBR2tCSyw0RCxFQUswQkssb0Q7OztLQVI1Q1YsUTtBQThFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWQ1NGFlMWI1NGM2ZjAxOTk0NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4vUG9zdENhcmRcIjtcbmltcG9ydCB7IHVzZUdldFBvc3RzIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IFBBR0VfU0laRSB9IGZyb20gXCIuLi8uLi9saWIvdmFyc1wiO1xuaW1wb3J0IEljb25zQnRuIGZyb20gXCIuLi9zaGFyZWQvSWNvbnNCdG5cIjtcbmltcG9ydCB7IEJzR3JpZCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgRmlMaXN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiwgdXNlQ29sb3JNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQm94XCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0J1dHRvblwiO1xuaW1wb3J0IHsgZG93bkNoZXZyb24gfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zXCI7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvZ2xvYmFsLmNvbnRleHRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKDApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBQcmV2aWV3cyA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3QgeyBpc0xpc3RWaWV3LCBzd2l0Y2hWaWV3IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IHBvc3RzICYmIHBvc3RzO1xuICBjb25zb2xlLmxvZyhpbml0aWFsRGF0YSk7XG5cbiAgY29uc3QgeyBkYXRhOiBwYWdpbmF0ZWRQb3N0cywgc2l6ZSwgc2V0U2l6ZSB9ID0gdXNlR2V0UG9zdHMoaW5pdGlhbERhdGEpO1xuXG4gIGlmICghcGFnaW5hdGVkUG9zdHMpIHJldHVybiBcImxvYWRpbmdcIjtcblxuICBjb25zdCBpc0VtcHR5ID0gcGFnaW5hdGVkUG9zdHM/LlswXT8ubGVuZ3RoID09PSAwO1xuXG4gIGNvbnN0IGlzUmVhY2hpbmdFbmQgPVxuICAgIGlzRW1wdHkgfHxcbiAgICAocGFnaW5hdGVkUG9zdHMgJiZcbiAgICAgIHBhZ2luYXRlZFBvc3RzW3BhZ2luYXRlZFBvc3RzWzBdLmxlbmd0aCAtIDFdPy5sZW5ndGggPCBQQUdFX1NJWkUpO1xuXG4gIGNvbnNvbGUubG9nKHBhZ2luYXRlZFBvc3RzWzBdKTtcblxuICBjb25zdCBwcmV2aWV3cyA9IHBhZ2luYXRlZFBvc3RzWzBdLm1hcChcbiAgICAoeyBfaWQsIHRpdGxlLCBzdWJ0aXRsZSwgc2x1ZywgbWFpbkltYWdlLCBwdWJsaXNoZWRBdCwgYm9keSB9KSA9PlxuICAgICAgc2x1ZyAmJiAoXG4gICAgICAgIDxQb3N0Q2FyZFxuICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICBtYWluSW1hZ2U9e21haW5JbWFnZX1cbiAgICAgICAgICBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9XG4gICAgICAgICAgYm9keT17Ym9keX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgKTtcblxuICBjb25zdCBwcmV2aWV3Q2xhc3MgPSBpc0xpc3RWaWV3XG4gICAgPyBcIm1kOm14LTE2IGlwOm1sLTQ4XCJcbiAgICA6IFwibGc6Z3JpZC1jb2xzLTIgbGc6bXQtMiBpcDpncmlkLWNvbHMtMyB4bDpnYXAtMTJcIjtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8SWNvbnNCdG5cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICBmaXJzdEljb249e0JzR3JpZH1cbiAgICAgICAgICBzZWNvbmRJY29uPXtGaUxpc3R9XG4gICAgICAgICAgdG9nZ2xlPXtzd2l0Y2hWaWV3fVxuICAgICAgICAgIGlzVG9nZ2xlZD17aXNMaXN0Vmlld31cbiAgICAgICAgICBjbGFzc05hbWU9XCJlYXNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNrZWxldG9uIGlzTG9hZGVkPXtwYWdpbmF0ZWRQb3N0c30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjb2xvcj17Y29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BwcmV2aWV3LWNvbnRhaW5lciAke3ByZXZpZXdDbGFzc31gfVxuICAgICAgICA+XG4gICAgICAgICAgaGVsbG9cbiAgICAgICAgICB7cHJldmlld3N9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17aXNSZWFjaGluZ0VuZH1cbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNSZWFjaGluZ0VuZCAmJiBzZXRTaXplKHNpemUgKyAxKX1cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgYm9yZGVyQ29sb3I9e2JvcmRlckNvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgX2ZvY3VzPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZG93bkNoZXZyb24oaXNSZWFjaGluZ0VuZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3cztcbiJdLCJzb3VyY2VSb290IjoiIn0=