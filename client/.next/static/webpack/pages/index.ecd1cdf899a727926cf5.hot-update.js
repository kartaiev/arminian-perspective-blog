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

  var _paginatedPosts;

  var posts = _ref.posts;
  console.log(posts);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_14__["GlobalContext"]),
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var initialData = posts && posts;

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_4__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : paginatedPosts.length) === 0;
  var isReachingEnd = isEmpty || paginatedPosts && ((_paginatedPosts = paginatedPosts[paginatedPosts.length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_5__["PAGE_SIZE"];
  console.log(size);
  var previews = paginatedPosts.map(function (_ref2) {
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
  }, previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiZ2V0QWxsUG9zdHMiLCJwb3N0cyIsInByb3BzIiwiUHJldmlld3MiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJpc0xpc3RWaWV3Iiwic3dpdGNoVmlldyIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsImluaXRpYWxEYXRhIiwidXNlR2V0UG9zdHMiLCJwYWdpbmF0ZWRQb3N0cyIsImRhdGEiLCJzaXplIiwic2V0U2l6ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlYWNoaW5nRW5kIiwiUEFHRV9TSVpFIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsInByZXZpZXdDbGFzcyIsInNjYWxlIiwiQnNHcmlkIiwiRmlMaXN0IiwiY29sb3IiLCJib3JkZXJDb2xvciIsIm91dGxpbmUiLCJkb3duQ2hldnJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBZUEsY0FBdEI7QUFBQTtBQUFBOzs7cU1BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZUMsNkRBQVcsQ0FBQyxDQUFELENBRDFCOztBQUFBO0FBQ0NDLGlCQUREO0FBQUEsNkNBRUU7QUFDTEMsbUJBQUssRUFBRTtBQUNMRCxxQkFBSyxFQUFMQTtBQURLO0FBREYsYUFGRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBU1AsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFlBQVEsRUFBRUYsYUFEWjtBQUVFLFFBQUksRUFBQyxJQUZQO0FBR0UsV0FBTyxFQUFDLE1BSFY7QUFJRSxXQUFPLEVBQUU7QUFBQSxhQUFNLENBQUNBLGFBQUQsSUFBa0JILE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBL0I7QUFBQSxLQUpYO0FBS0UsV0FBTyxFQUFDLFNBTFY7QUFNRSxlQUFXLEVBQUVvQix5REFBVyxDQUFDekIsU0FBRCxDQU4xQjtBQU9FLFVBQU0sRUFBRTtBQUFFMEIsYUFBTyxFQUFFO0FBQVgsS0FQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0dDLCtEQUFXLENBQUNsQixhQUFELENBVGQsQ0FERixDQW5CRixDQURGO0FBbUNELENBM0VEOztHQUFNakIsUTtVQUlrQk8sNEQsRUFJMEJHLG9EOzs7S0FSNUNWLFE7QUE2RVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjZDFjZGY4OTlhNzI3OTI2Y2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuL1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vLi4vbGliL3ZhcnNcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vc2hhcmVkL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBCc0dyaWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEZpTGlzdCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgU2tlbGV0b24sIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0JveFwiO1xuaW1wb3J0IHsgYm9yZGVyQ29sb3IsIGNvbG9yIH0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9CdXR0b25cIjtcbmltcG9ydCB7IGRvd25DaGV2cm9uIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygwKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgUHJldmlld3MgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcbiAgY29uc3QgeyBpc0xpc3RWaWV3LCBzd2l0Y2hWaWV3IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICBjb25zdCBpbml0aWFsRGF0YSA9IHBvc3RzICYmIHBvc3RzO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICBpZiAoIXBhZ2luYXRlZFBvc3RzKSByZXR1cm4gXCJsb2FkaW5nXCI7XG5cbiAgY29uc3QgaXNFbXB0eSA9IHBhZ2luYXRlZFBvc3RzPy5sZW5ndGggPT09IDA7XG5cbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9XG4gICAgaXNFbXB0eSB8fFxuICAgIChwYWdpbmF0ZWRQb3N0cyAmJlxuICAgICAgcGFnaW5hdGVkUG9zdHNbcGFnaW5hdGVkUG9zdHMubGVuZ3RoIC0gMV0/Lmxlbmd0aCA8IFBBR0VfU0laRSk7XG5cbiAgY29uc29sZS5sb2coc2l6ZSk7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwYWdpbmF0ZWRQb3N0cy5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT5cbiAgICAgIHNsdWcgJiYgKFxuICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICk7XG5cbiAgY29uc3QgcHJldmlld0NsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNiBpcDptbC00OFwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgZmlyc3RJY29uPXtCc0dyaWR9XG4gICAgICAgICAgc2Vjb25kSWNvbj17RmlMaXN0fVxuICAgICAgICAgIHRvZ2dsZT17c3dpdGNoVmlld31cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzTGlzdFZpZXd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZWFzZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTa2VsZXRvbiBpc0xvYWRlZD17cGFnaW5hdGVkUG9zdHN9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHJldmlldy1jb250YWluZXIgJHtwcmV2aWV3Q2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1NrZWxldG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc1JlYWNoaW5nRW5kfVxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc1JlYWNoaW5nRW5kICYmIHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3duQ2hldnJvbihpc1JlYWNoaW5nRW5kKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==