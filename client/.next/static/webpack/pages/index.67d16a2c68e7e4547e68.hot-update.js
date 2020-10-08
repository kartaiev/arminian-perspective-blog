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

  var initialData = posts && [posts];
  console.log(posts);

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_4__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : (_paginatedPosts$ = paginatedPosts[0]) === null || _paginatedPosts$ === void 0 ? void 0 : _paginatedPosts$.length) === 0;
  var isReachingEnd = isEmpty || paginatedPosts && ((_paginatedPosts = paginatedPosts[paginatedPosts[0].length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_5__["PAGE_SIZE"]; // console.log(paginatedPosts[0]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiZ2V0QWxsUG9zdHMiLCJwb3N0cyIsInByb3BzIiwiUHJldmlld3MiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsImlzTGlzdFZpZXciLCJzd2l0Y2hWaWV3IiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiaW5pdGlhbERhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlR2V0UG9zdHMiLCJwYWdpbmF0ZWRQb3N0cyIsImRhdGEiLCJzaXplIiwic2V0U2l6ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlYWNoaW5nRW5kIiwiUEFHRV9TSVpFIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsInByZXZpZXdDbGFzcyIsInNjYWxlIiwiQnNHcmlkIiwiRmlMaXN0IiwiY29sb3IiLCJib3JkZXJDb2xvciIsIm91dGxpbmUiLCJkb3duQ2hldnJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBZUEsY0FBdEI7QUFBQTtBQUFBOzs7cU1BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZUMsNkRBQVcsQ0FBQyxDQUFELENBRDFCOztBQUFBO0FBQ0NDLGlCQUREO0FBQUEsNkNBRUU7QUFDTEMsbUJBQUssRUFBRTtBQUNMRCxxQkFBSyxFQUFMQTtBQURLO0FBREYsYUFGRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBU1AsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFB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WEYsRUFvQkU7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxZQUFRLEVBQUVGLGFBRFo7QUFFRSxRQUFJLEVBQUMsSUFGUDtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTSxDQUFDQSxhQUFELElBQWtCSCxPQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQS9CO0FBQUEsS0FKWDtBQUtFLFdBQU8sRUFBQyxTQUxWO0FBTUUsZUFBVyxFQUFFb0IseURBQVcsQ0FBQzNCLFNBQUQsQ0FOMUI7QUFPRSxVQUFNLEVBQUU7QUFBRTRCLGFBQU8sRUFBRTtBQUFYLEtBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHQywrREFBVyxDQUFDbEIsYUFBRCxDQVRkLENBREYsQ0FwQkYsQ0FERjtBQW9DRCxDQTVFRDs7R0FBTWpCLFE7VUFHa0JLLDRELEVBSzBCSyxvRDs7O0tBUjVDVixRO0FBOEVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42N2QxNmEyYzY4ZTdlNDU0N2U2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi9Qb3N0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlR2V0UG9zdHMgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgUEFHRV9TSVpFIH0gZnJvbSBcIi4uLy4uL2xpYi92YXJzXCI7XG5pbXBvcnQgSWNvbnNCdG4gZnJvbSBcIi4uL3NoYXJlZC9JY29uc0J0blwiO1xuaW1wb3J0IHsgQnNHcmlkIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBGaUxpc3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IFNrZWxldG9uLCB1c2VDb2xvck1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcbmltcG9ydCB7IGJvcmRlckNvbG9yLCBjb2xvciB9IGZyb20gXCIuLi8uLi9jdXN0b21UaGVtZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGNoYWtyYS11aS9jb3JlL2Rpc3QvQnV0dG9uXCI7XG5pbXBvcnQgeyBkb3duQ2hldnJvbiB9IGZyb20gXCIuLi8uLi9saWIvaWNvbnNcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9nbG9iYWwuY29udGV4dFwiO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoMCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IFByZXZpZXdzID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7IGlzTGlzdFZpZXcsIHN3aXRjaFZpZXcgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gcG9zdHMgJiYgW3Bvc3RzXTtcbiAgY29uc29sZS5sb2cocG9zdHMpO1xuXG4gIGNvbnN0IHsgZGF0YTogcGFnaW5hdGVkUG9zdHMsIHNpemUsIHNldFNpemUgfSA9IHVzZUdldFBvc3RzKGluaXRpYWxEYXRhKTtcblxuICBpZiAoIXBhZ2luYXRlZFBvc3RzKSByZXR1cm4gXCJsb2FkaW5nXCI7XG5cbiAgY29uc3QgaXNFbXB0eSA9IHBhZ2luYXRlZFBvc3RzPy5bMF0/Lmxlbmd0aCA9PT0gMDtcblxuICBjb25zdCBpc1JlYWNoaW5nRW5kID1cbiAgICBpc0VtcHR5IHx8XG4gICAgKHBhZ2luYXRlZFBvc3RzICYmXG4gICAgICBwYWdpbmF0ZWRQb3N0c1twYWdpbmF0ZWRQb3N0c1swXS5sZW5ndGggLSAxXT8ubGVuZ3RoIDwgUEFHRV9TSVpFKTtcblxuICAvLyBjb25zb2xlLmxvZyhwYWdpbmF0ZWRQb3N0c1swXSk7XG5cbiAgY29uc3QgcHJldmlld3MgPSBwYWdpbmF0ZWRQb3N0c1swXS5tYXAoXG4gICAgKHsgX2lkLCB0aXRsZSwgc3VidGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgcHVibGlzaGVkQXQsIGJvZHkgfSkgPT5cbiAgICAgIHNsdWcgJiYgKFxuICAgICAgICA8UG9zdENhcmRcbiAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxuICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgbWFpbkltYWdlPXttYWluSW1hZ2V9XG4gICAgICAgICAgcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fVxuICAgICAgICAgIGJvZHk9e2JvZHl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICk7XG5cbiAgY29uc3QgcHJldmlld0NsYXNzID0gaXNMaXN0Vmlld1xuICAgID8gXCJtZDpteC0xNiBpcDptbC00OFwiXG4gICAgOiBcImxnOmdyaWQtY29scy0yIGxnOm10LTIgaXA6Z3JpZC1jb2xzLTMgeGw6Z2FwLTEyXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEljb25zQnRuXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgZmlyc3RJY29uPXtCc0dyaWR9XG4gICAgICAgICAgc2Vjb25kSWNvbj17RmlMaXN0fVxuICAgICAgICAgIHRvZ2dsZT17c3dpdGNoVmlld31cbiAgICAgICAgICBpc1RvZ2dsZWQ9e2lzTGlzdFZpZXd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZWFzZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTa2VsZXRvbiBpc0xvYWRlZD17cGFnaW5hdGVkUG9zdHN9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHJldmlldy1jb250YWluZXIgJHtwcmV2aWV3Q2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIGhlbGxvXG4gICAgICAgICAge3ByZXZpZXdzfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2tlbGV0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzUmVhY2hpbmdFbmR9XG4gICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICByb3VuZGVkPVwiZnVsbFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gIWlzUmVhY2hpbmdFbmQgJiYgc2V0U2l6ZShzaXplICsgMSl9XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIF9mb2N1cz17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge2Rvd25DaGV2cm9uKGlzUmVhY2hpbmdFbmQpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlld3M7XG4iXSwic291cmNlUm9vdCI6IiJ9