webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/PostCard.js":
/*!**********************************************!*\
  !*** ./components/posts-preview/PostCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _shared_AuthorDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/AuthorDate */ "./components/shared/AuthorDate.js");
/* harmony import */ var _shared_PostCover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/PostCover */ "./components/shared/PostCover.js");
/* harmony import */ var _context_global_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/global.context */ "./context/global.context.js");
/* harmony import */ var _chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core/dist/Box */ "./node_modules/@chakra-ui/core/dist/es/Box/index.js");
/* harmony import */ var _chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core/dist/Heading */ "./node_modules/@chakra-ui/core/dist/es/Heading/index.js");
/* harmony import */ var _customTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../customTheme */ "./customTheme.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\blog\\arminian-perspective-blog\\client\\components\\posts-preview\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var PostCard = function PostCard(_ref) {
  _s();

  var slug = _ref.slug,
      mainImage = _ref.mainImage,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      title = _ref.title;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global_context__WEBPACK_IMPORTED_MODULE_5__["GlobalContext"]),
      isListView = _useContext.isListView;

  var MotionBox = framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].custom(_chakra_ui_core_dist_Box__WEBPACK_IMPORTED_MODULE_6__["default"]);

  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  var variants = {
    hover: {
      scale: 1.02
    },
    off: {
      scale: 1
    }
  };
  var cardClass = isListView && "h-64 flex";
  var subtitleClass = isListView && " pr-24";
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(MotionBox, {
    as: "a",
    mt: "3",
    shadow: "sm",
    whileHover: "hover",
    variants: variants,
    borderWidth: "1px",
    borderColor: _customTheme__WEBPACK_IMPORTED_MODULE_8__["borderColor"][colorMode],
    rounded: "lg",
    overflow: "hidden",
    className: "card-container ".concat(cardClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_shared_PostCover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mainImage: mainImage,
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core_dist_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: _customTheme__WEBPACK_IMPORTED_MODULE_8__["color"][colorMode],
    fontSize: "2xl",
    as: "h1",
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    className: "card-subtitle ".concat(subtitleClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, subtitle)), __jsx(_shared_AuthorDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    secondProp: "",
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }))));
};

_s(PostCard, "UGKV9mSK2ZXKn9ZpqZDABclw1Vs=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_9__["useColorMode"]];
});

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwic2x1ZyIsIm1haW5JbWFnZSIsInN1YnRpdGxlIiwicHVibGlzaGVkQXQiLCJ0aXRsZSIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiaXNMaXN0VmlldyIsIk1vdGlvbkJveCIsIm1vdGlvbiIsImN1c3RvbSIsIkJveCIsInVzZUNvbG9yTW9kZSIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsInZhcmlhbnRzIiwiaG92ZXIiLCJzY2FsZSIsIm9mZiIsImNhcmRDbGFzcyIsInN1YnRpdGxlQ2xhc3MiLCJjdXJyZW50IiwiYm9yZGVyQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXVEO0FBQUE7O0FBQUEsTUFBcERDLElBQW9ELFFBQXBEQSxJQUFvRDtBQUFBLE1BQTlDQyxTQUE4QyxRQUE5Q0EsU0FBOEM7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxvQkFDL0NDLHdEQUFVLENBQUNDLHFFQUFELENBRHFDO0FBQUEsTUFDOURDLFVBRDhELGVBQzlEQSxVQUQ4RDs7QUFHdEUsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDQyxNQUFQLENBQWNDLGdFQUFkLENBQWxCOztBQUhzRSxzQkFLL0JDLG9FQUFZLEVBTG1CO0FBQUEsTUFLOURDLFNBTDhELGlCQUs5REEsU0FMOEQ7QUFBQSxNQUtuREMsZUFMbUQsaUJBS25EQSxlQUxtRDs7QUFPdEUsTUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUU7QUFERixLQURRO0FBSWZDLE9BQUcsRUFBRTtBQUFFRCxXQUFLLEVBQUU7QUFBVDtBQUpVLEdBQWpCO0FBT0EsTUFBTUUsU0FBUyxHQUFHWixVQUFVLElBQUksV0FBaEM7QUFFQSxNQUFNYSxhQUFhLEdBQUdiLFVBQVUsSUFBSSxRQUFwQztBQUVBLFNBQ0VQLElBQUksSUFDRixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsTUFBRSxrQkFBV0EsSUFBSSxDQUFDcUIsT0FBaEIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUNFLE1BQUUsRUFBQyxHQURMO0FBRUUsTUFBRSxFQUFDLEdBRkw7QUFHRSxVQUFNLEVBQUMsSUFIVDtBQUlFLGNBQVUsRUFBQyxPQUpiO0FBS0UsWUFBUSxFQUFFTixRQUxaO0FBTUUsZUFBVyxFQUFDLEtBTmQ7QUFPRSxlQUFXLEVBQUVPLHdEQUFXLENBQUNULFNBQUQsQ0FQMUI7QUFRRSxXQUFPLEVBQUMsSUFSVjtBQVNFLFlBQVEsRUFBQyxRQVRYO0FBVUUsYUFBUywyQkFBb0JNLFNBQXBCLENBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUVsQixTQUF0QjtBQUFpQyxTQUFLLEVBQUVHLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsU0FBSyxFQUFFbUIsa0RBQUssQ0FBQ1YsU0FBRCxDQURkO0FBRUUsWUFBUSxFQUFDLEtBRlg7QUFHRSxNQUFFLEVBQUMsSUFITDtBQUlFLGFBQVMsRUFBQyxZQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR1QsS0FOSCxDQURGLEVBU0U7QUFBSSxhQUFTLDBCQUFtQmdCLGFBQW5CLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrRGxCLFFBQWxELENBVEYsQ0FERixFQVlFLE1BQUMsMERBQUQ7QUFBWSxjQUFVLEVBQUUsRUFBeEI7QUFBNEIsZUFBVyxFQUFFQyxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FiRixDQURGLENBRko7QUFrQ0QsQ0FwREQ7O0dBQU1KLFE7VUFLbUNhLDREOzs7S0FMbkNiLFE7QUFzRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjNmNhMzE5YzVhNzk2Y2ExMzk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBBdXRob3JEYXRlIGZyb20gXCIuLi9zaGFyZWQvQXV0aG9yRGF0ZVwiO1xuaW1wb3J0IFBvc3RDb3ZlciBmcm9tIFwiLi4vc2hhcmVkL1Bvc3RDb3ZlclwiO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2dsb2JhbC5jb250ZXh0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9Cb3hcIjtcbmltcG9ydCBIZWFkaW5nIGZyb20gXCJAY2hha3JhLXVpL2NvcmUvZGlzdC9IZWFkaW5nXCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvciwgY29sb3IgfSBmcm9tIFwiLi4vLi4vY3VzdG9tVGhlbWVcIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgUG9zdENhcmQgPSAoeyBzbHVnLCBtYWluSW1hZ2UsIHN1YnRpdGxlLCBwdWJsaXNoZWRBdCwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCB7IGlzTGlzdFZpZXcgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgTW90aW9uQm94ID0gbW90aW9uLmN1c3RvbShCb3gpO1xuXG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGhvdmVyOiB7XG4gICAgICBzY2FsZTogMS4wMixcbiAgICB9LFxuICAgIG9mZjogeyBzY2FsZTogMSB9LFxuICB9O1xuXG4gIGNvbnN0IGNhcmRDbGFzcyA9IGlzTGlzdFZpZXcgJiYgXCJoLTY0IGZsZXhcIjtcblxuICBjb25zdCBzdWJ0aXRsZUNsYXNzID0gaXNMaXN0VmlldyAmJiBcIiBwci0yNFwiO1xuXG4gIHJldHVybiAoXG4gICAgc2x1ZyAmJiAoXG4gICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgPE1vdGlvbkJveFxuICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgbXQ9XCIzXCJcbiAgICAgICAgICBzaGFkb3c9XCJzbVwiXG4gICAgICAgICAgd2hpbGVIb3Zlcj1cImhvdmVyXCJcbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcltjb2xvck1vZGVdfVxuICAgICAgICAgIHJvdW5kZWQ9XCJsZ1wiXG4gICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGNhcmQtY29udGFpbmVyICR7Y2FyZENsYXNzfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8UG9zdENvdmVyIG1haW5JbWFnZT17bWFpbkltYWdlfSB0aXRsZT17dGl0bGV9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCIyeGxcIlxuICAgICAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BjYXJkLXN1YnRpdGxlICR7c3VidGl0bGVDbGFzc31gfT57c3VidGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEF1dGhvckRhdGUgc2Vjb25kUHJvcD17XCJcIn0gcHVibGlzaGVkQXQ9e3B1Ymxpc2hlZEF0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vdGlvbkJveD5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=