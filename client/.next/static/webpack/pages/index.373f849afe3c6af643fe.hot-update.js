webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/Previews.js":
/*!**********************************************!*\
  !*** ./components/posts-preview/Previews.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCard */ "./components/posts-preview/PostCard.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _lib_vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/vars */ "./lib/vars.js");
/* harmony import */ var _shared_IconsBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/IconsBtn */ "./components/shared/IconsBtn.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/core/dist/Button */ "./node_modules/@chakra-ui/core/dist/es/Button/index.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/icons */ "./lib/icons.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../context/global.context */ "./context/global.context.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\posts-preview\\Previews.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var Previews = function Previews(_ref) {
  _s();

  var _paginatedPosts$, _paginatedPosts;

  var posts = _ref.posts;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_12__["GlobalContext"]),
      isListView = _useContext.isListView,
      switchView = _useContext.switchView;

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["useColorMode"])(),
      colorMode = _useColorMode.colorMode;

  var initialData = posts && posts;
  console.log(initialData);

  var _useGetPosts = Object(_actions__WEBPACK_IMPORTED_MODULE_2__["useGetPosts"])(initialData),
      paginatedPosts = _useGetPosts.data,
      size = _useGetPosts.size,
      setSize = _useGetPosts.setSize;

  if (!paginatedPosts) return "loading";
  var isEmpty = (paginatedPosts === null || paginatedPosts === void 0 ? void 0 : (_paginatedPosts$ = paginatedPosts[0]) === null || _paginatedPosts$ === void 0 ? void 0 : _paginatedPosts$.length) === 0;
  var isReachingEnd = isEmpty || paginatedPosts && ((_paginatedPosts = paginatedPosts[paginatedPosts[0].length - 1]) === null || _paginatedPosts === void 0 ? void 0 : _paginatedPosts.length) < _lib_vars__WEBPACK_IMPORTED_MODULE_3__["PAGE_SIZE"]; // console.log(paginatedPosts[0]);

  var previews = paginatedPosts[0].map(function (_ref2) {
    var _id = _ref2._id,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        slug = _ref2.slug,
        mainImage = _ref2.mainImage,
        publishedAt = _ref2.publishedAt,
        body = _ref2.body;
    return slug && __jsx(_PostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        lineNumber: 39,
        columnNumber: 9
      }
    });
  });
  var previewClass = isListView ? "md:mx-16 ip:ml-48" : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";
  return __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "view-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_shared_IconsBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    whileHover: {
      scale: 1.2
    },
    firstIcon: react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsGrid"],
    secondIcon: react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiList"],
    toggle: switchView,
    isToggled: isListView,
    className: "ease",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    isLoaded: paginatedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_9__["color"][colorMode],
    className: "preview-container ".concat(previewClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "hello", previews)), __jsx("div", {
    className: "preview-button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core_dist_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: isReachingEnd,
    size: "lg",
    rounded: "full",
    onClick: function onClick() {
      return !isReachingEnd && setSize(size + 1);
    },
    variant: "outline",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_9__["borderColor"][colorMode],
    _focus: {
      outline: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, Object(_lib_icons__WEBPACK_IMPORTED_MODULE_11__["downChevron"])(isReachingEnd))));
};

_s(Previews, "g/tR9pTjfxLpNRPuhmpaBJ8sSuA=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["useColorMode"], _actions__WEBPACK_IMPORTED_MODULE_2__["useGetPosts"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbIlByZXZpZXdzIiwicG9zdHMiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsImlzTGlzdFZpZXciLCJzd2l0Y2hWaWV3IiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwiaW5pdGlhbERhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlR2V0UG9zdHMiLCJwYWdpbmF0ZWRQb3N0cyIsImRhdGEiLCJzaXplIiwic2V0U2l6ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJpc1JlYWNoaW5nRW5kIiwiUEFHRV9TSVpFIiwicHJldmlld3MiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsInB1Ymxpc2hlZEF0IiwiYm9keSIsInByZXZpZXdDbGFzcyIsInNjYWxlIiwiQnNHcmlkIiwiRmlMaXN0IiwiY29sb3IiLCJib3JkZXJDb2xvciIsIm91dGxpbmUiLCJkb3duQ2hldnJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBOztBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxvQkFDS0Msd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FEZjtBQUFBLE1BQ3RCQyxVQURzQixlQUN0QkEsVUFEc0I7QUFBQSxNQUNWQyxVQURVLGVBQ1ZBLFVBRFU7O0FBQUEsc0JBR1JDLG9FQUFZLEVBSEo7QUFBQSxNQUd0QkMsU0FIc0IsaUJBR3RCQSxTQUhzQjs7QUFLOUIsTUFBTUMsV0FBVyxHQUFHUCxLQUFLLElBQUlBLEtBQTdCO0FBQ0FRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFa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RCxDQU4xQjtBQU9FLFVBQU0sRUFBRTtBQUFFNEIsYUFBTyxFQUFFO0FBQVgsS0FQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0dDLCtEQUFXLENBQUNsQixhQUFELENBVGQsQ0FERixDQXBCRixDQURGO0FBb0NELENBNUVEOztHQUFNbEIsUTtVQUdrQk0sNEQsRUFLMEJLLG9EOzs7S0FSNUNYLFE7QUE4RVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3M2Y4NDlhZmUzYzZhZjY0M2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuL1Bvc3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VHZXRQb3N0cyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi4vLi4vbGliL3ZhcnNcIjtcbmltcG9ydCBJY29uc0J0biBmcm9tIFwiLi4vc2hhcmVkL0ljb25zQnRuXCI7XG5pbXBvcnQgeyBCc0dyaWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEZpTGlzdCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IHsgU2tlbGV0b24sIHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBjaGFrcmEtdWkvY29yZS9kaXN0L0JveFwiO1xuaW1wb3J0IHsgYm9yZGVyQ29sb3IsIGNvbG9yIH0gZnJvbSBcIi4uLy4uL2N1c3RvbVRoZW1lXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9CdXR0b25cIjtcbmltcG9ydCB7IGRvd25DaGV2cm9uIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29uc1wiO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0XCI7XG5cbmNvbnN0IFByZXZpZXdzID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7IGlzTGlzdFZpZXcsIHN3aXRjaFZpZXcgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gcG9zdHMgJiYgcG9zdHM7XG4gIGNvbnNvbGUubG9nKGluaXRpYWxEYXRhKTtcblxuICBjb25zdCB7IGRhdGE6IHBhZ2luYXRlZFBvc3RzLCBzaXplLCBzZXRTaXplIH0gPSB1c2VHZXRQb3N0cyhpbml0aWFsRGF0YSk7XG5cbiAgaWYgKCFwYWdpbmF0ZWRQb3N0cykgcmV0dXJuIFwibG9hZGluZ1wiO1xuXG4gIGNvbnN0IGlzRW1wdHkgPSBwYWdpbmF0ZWRQb3N0cz8uWzBdPy5sZW5ndGggPT09IDA7XG5cbiAgY29uc3QgaXNSZWFjaGluZ0VuZCA9XG4gICAgaXNFbXB0eSB8fFxuICAgIChwYWdpbmF0ZWRQb3N0cyAmJlxuICAgICAgcGFnaW5hdGVkUG9zdHNbcGFnaW5hdGVkUG9zdHNbMF0ubGVuZ3RoIC0gMV0/Lmxlbmd0aCA8IFBBR0VfU0laRSk7XG5cbiAgLy8gY29uc29sZS5sb2cocGFnaW5hdGVkUG9zdHNbMF0pO1xuXG4gIGNvbnN0IHByZXZpZXdzID0gcGFnaW5hdGVkUG9zdHNbMF0ubWFwKFxuICAgICh7IF9pZCwgdGl0bGUsIHN1YnRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0LCBib2R5IH0pID0+XG4gICAgICBzbHVnICYmIChcbiAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgIG1haW5JbWFnZT17bWFpbkltYWdlfVxuICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwdWJsaXNoZWRBdH1cbiAgICAgICAgICBib2R5PXtib2R5fVxuICAgICAgICAvPlxuICAgICAgKVxuICApO1xuXG4gIGNvbnN0IHByZXZpZXdDbGFzcyA9IGlzTGlzdFZpZXdcbiAgICA/IFwibWQ6bXgtMTYgaXA6bWwtNDhcIlxuICAgIDogXCJsZzpncmlkLWNvbHMtMiBsZzptdC0yIGlwOmdyaWQtY29scy0zIHhsOmdhcC0xMlwiO1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxJY29uc0J0blxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgICAgIGZpcnN0SWNvbj17QnNHcmlkfVxuICAgICAgICAgIHNlY29uZEljb249e0ZpTGlzdH1cbiAgICAgICAgICB0b2dnbGU9e3N3aXRjaFZpZXd9XG4gICAgICAgICAgaXNUb2dnbGVkPXtpc0xpc3RWaWV3fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImVhc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2tlbGV0b24gaXNMb2FkZWQ9e3BhZ2luYXRlZFBvc3RzfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHByZXZpZXctY29udGFpbmVyICR7cHJldmlld0NsYXNzfWB9XG4gICAgICAgID5cbiAgICAgICAgICBoZWxsb1xuICAgICAgICAgIHtwcmV2aWV3c31cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1NrZWxldG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtpc1JlYWNoaW5nRW5kfVxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc1JlYWNoaW5nRW5kICYmIHNldFNpemUoc2l6ZSArIDEpfVxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgICAgICBfZm9jdXM9e3sgb3V0bGluZTogXCJub25lXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3duQ2hldnJvbihpc1JlYWNoaW5nRW5kKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==