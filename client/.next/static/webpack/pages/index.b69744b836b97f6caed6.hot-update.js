webpackHotUpdate_N_E("pages/index",{

/***/ "./components/posts-preview/PostListCard.js":
/*!**************************************************!*\
  !*** ./components/posts-preview/PostListCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../single-post/PostAuthorDate */ "./components/single-post/PostAuthorDate.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowWidth */ "./hooks/useWindowWidth.js");
/* harmony import */ var _PostCover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostCover */ "./components/PostCover.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\posts-preview\\PostListCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostListCard = function PostListCard(_ref) {
  _s();

  var slug = _ref.slug,
      mainImage = _ref.mainImage,
      subtitle = _ref.subtitle,
      publishedAt = _ref.publishedAt,
      title = _ref.title,
      body = _ref.body,
      isToggled = _ref.isToggled;
  console.log(isToggled);
  var variants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 5px 10px rgba(0,0,0,.5)",
      transition: {
        ease: "easeOut"
      }
    },
    off: {
      scale: 1
    }
  };
  var width = Object(_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"])();
  return slug && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[slug]",
    as: "/post/".concat(slug.current),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].a, {
    whileHover: "hover",
    variants: variants,
    className: "mt-6 h-64 border border-gray-400 rounded-lg overflow-hidden flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, mainImage && __jsx("div", {
    className: "w-1/2 relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    className: "w-full h-full block object-cover top-0 left-0 align-top absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: " w-full p-6 flex flex-col justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-bold text-gray-800 text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, title), __jsx("h2", {
    className: "font-semibold text-xl text-gray-800 my-6 pr-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, subtitle)), __jsx(_single_post_PostAuthorDate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    secondProp: "",
    publishedAt: publishedAt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))));
};

_s(PostListCard, "RmdmpLM5vD+sMcc5h/DlP7pfrWU=", false, function () {
  return [_hooks_useWindowWidth__WEBPACK_IMPORTED_MODULE_5__["useWindowWidth"]];
});

_c = PostListCard;
/* harmony default export */ __webpack_exports__["default"] = (PostListCard);

var _c;

$RefreshReg$(_c, "PostListCard");

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

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/internals.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/internals.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js":
false,

/***/ "./node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js":
false,

/***/ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js":
false,

/***/ "./node_modules/@sanity/block-content-to-react/lib/targets/dom.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy1wcmV2aWV3L1Bvc3RMaXN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdENhcmQiLCJzbHVnIiwibWFpbkltYWdlIiwic3VidGl0bGUiLCJwdWJsaXNoZWRBdCIsInRpdGxlIiwiYm9keSIsImlzVG9nZ2xlZCIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50cyIsImhvdmVyIiwic2NhbGUiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiZWFzZSIsIm9mZiIsIndpZHRoIiwidXNlV2luZG93V2lkdGgiLCJjdXJyZW50IiwidXJsRm9yIiwiYXV0byIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BUWY7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxTQU1JLFFBTkpBLFNBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxJQUVJLFFBRkpBLElBRUk7QUFBQSxNQURKQyxTQUNJLFFBREpBLFNBQ0k7QUFDSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFFQSxNQUFNRyxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxJQURGO0FBRUxDLGVBQVMsRUFBRSwyQkFGTjtBQUdMQyxnQkFBVSxFQUFFO0FBQUVDLFlBQUksRUFBRTtBQUFSO0FBSFAsS0FEUTtBQU1mQyxPQUFHLEVBQUU7QUFBRUosV0FBSyxFQUFFO0FBQVQ7QUFOVSxHQUFqQjtBQVNBLE1BQU1LLEtBQUssR0FBR0MsNEVBQWMsRUFBNUI7QUFFQSxTQUNFakIsSUFBSSxJQUNGLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixNQUFFLGtCQUFXQSxJQUFJLENBQUNrQixPQUFoQixDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLENBQVI7QUFDRSxjQUFVLEVBQUMsT0FEYjtBQUVFLFlBQVEsRUFBRVQsUUFGWjtBQUdFLGFBQVMsRUFBQyxrRUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dSLFNBQVMsSUFDUjtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVrQiwyREFBTSxDQUFDbEIsU0FBRCxDQUFOLENBQWtCbUIsSUFBbEIsQ0FBdUIsUUFBdkIsRUFBaUNDLEdBQWpDLEVBRFA7QUFFRSxPQUFHLEVBQUVqQixLQUZQO0FBR0UsYUFBUyxFQUFDLGtFQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5KLEVBY0U7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtEQSxLQUFsRCxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixRQURILENBRkYsQ0FERixFQVFFLE1BQUMsbUVBQUQ7QUFBZ0IsY0FBVSxFQUFFLEVBQTVCO0FBQWdDLGVBQVcsRUFBRUMsV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBZEYsQ0FERixDQUZKO0FBK0JELENBckREOztHQUFNSixZO1VBb0JVa0Isb0U7OztLQXBCVmxCLFk7QUF1RFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2OTc0NGI4MzZiOTdmNmNhZWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFBvc3RBdXRob3JEYXRlIGZyb20gXCIuLi9zaW5nbGUtcG9zdC9Qb3N0QXV0aG9yRGF0ZVwiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3dXaWR0aCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dXaWR0aFwiO1xuaW1wb3J0IFBvc3RDb3ZlciBmcm9tIFwiLi4vUG9zdENvdmVyXCI7XG5cbmNvbnN0IFBvc3RMaXN0Q2FyZCA9ICh7XG4gIHNsdWcsXG4gIG1haW5JbWFnZSxcbiAgc3VidGl0bGUsXG4gIHB1Ymxpc2hlZEF0LFxuICB0aXRsZSxcbiAgYm9keSxcbiAgaXNUb2dnbGVkLFxufSkgPT4ge1xuICBjb25zb2xlLmxvZyhpc1RvZ2dsZWQpO1xuXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGhvdmVyOiB7XG4gICAgICBzY2FsZTogMS4wMyxcbiAgICAgIGJveFNoYWRvdzogXCIwIDVweCAxMHB4IHJnYmEoMCwwLDAsLjUpXCIsXG4gICAgICB0cmFuc2l0aW9uOiB7IGVhc2U6IFwiZWFzZU91dFwiIH0sXG4gICAgfSxcbiAgICBvZmY6IHsgc2NhbGU6IDEgfSxcbiAgfTtcblxuICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XG5cbiAgcmV0dXJuIChcbiAgICBzbHVnICYmIChcbiAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICB3aGlsZUhvdmVyPVwiaG92ZXJcIlxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IGgtNjQgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIHttYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKS5hdXRvKFwiZm9ybWF0XCIpLnVybCgpfVxuICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBibG9jayBvYmplY3QtY292ZXIgdG9wLTAgbGVmdC0wIGFsaWduLXRvcCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMCB0ZXh0LTJ4bFwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbXktNiBwci0yNFwiPlxuICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgey8qe3dpZHRoID4gMTI4MCAmJiA8QmxvY2tDb250ZW50IGJsb2Nrcz17Ym9keX0gLz59Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQb3N0QXV0aG9yRGF0ZSBzZWNvbmRQcm9wPXtcIlwifSBwdWJsaXNoZWRBdD17cHVibGlzaGVkQXR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3RDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==