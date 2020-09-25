webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCover.js":
/*!*********************************!*\
  !*** ./components/PostCover.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Volodymyr_Kartaiev\\WebstormProjects\\arminian-perspective-blog\\client\\components\\PostCover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostCover = function PostCover(_ref) {
  var mainImage = _ref.mainImage,
      title = _ref.title;
  var variants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 20px -4px rgba(0,0,0,.5)"
    },
    off: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(0,0,0,0)"
    }
  };
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    onHover: "hover",
    variants: variants,
    className: "mainImage-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "w-full h-full block object-cover top-0 left-0 align-top absolute",
    src: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_1__["urlFor"])(mainImage).auto("format").url(),
    alt: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

_c = PostCover;
/* harmony default export */ __webpack_exports__["default"] = (PostCover);

var _c;

$RefreshReg$(_c, "PostCover");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q292ZXIuanMiXSwibmFtZXMiOlsiUG9zdENvdmVyIiwibWFpbkltYWdlIiwidGl0bGUiLCJ2YXJpYW50cyIsImhvdmVyIiwic2NhbGUiLCJib3hTaGFkb3ciLCJvZmYiLCJ1cmxGb3IiLCJhdXRvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTBCO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQyxNQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxHQUFUO0FBQWNDLGVBQVMsRUFBRTtBQUF6QixLQURRO0FBRWZDLE9BQUcsRUFBRTtBQUFFRixXQUFLLEVBQUUsQ0FBVDtBQUFZQyxlQUFTLEVBQUU7QUFBdkI7QUFGVSxHQUFqQjtBQUtBLFNBQ0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxXQUFPLEVBQUMsT0FEVjtBQUVFLFlBQVEsRUFBRUgsUUFGWjtBQUdFLGFBQVMsRUFBQyxxQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLEVBQUMsa0VBRFo7QUFFRSxPQUFHLEVBQUVLLDJEQUFNLENBQUNQLFNBQUQsQ0FBTixDQUFrQlEsSUFBbEIsQ0FBdUIsUUFBdkIsRUFBaUNDLEdBQWpDLEVBRlA7QUFHRSxPQUFHLEVBQUVSLEtBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREY7QUFhRCxDQW5CRDs7S0FBTUYsUztBQXFCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBkYjAwN2QxZjk0NzAyN2I3ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgUG9zdENvdmVyID0gKHsgbWFpbkltYWdlLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIGhvdmVyOiB7IHNjYWxlOiAxLjEsIGJveFNoYWRvdzogXCIwIDEwcHggMjBweCAtNHB4IHJnYmEoMCwwLDAsLjUpXCIgfSxcbiAgICBvZmY6IHsgc2NhbGU6IDEsIGJveFNoYWRvdzogXCIwIDAgMCAwIHJnYmEoMCwwLDAsMClcIiB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIG9uSG92ZXI9XCJob3ZlclwiXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICBjbGFzc05hbWU9XCJtYWluSW1hZ2UtY29udGFpbmVyXCJcbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmxvY2sgb2JqZWN0LWNvdmVyIHRvcC0wIGxlZnQtMCBhbGlnbi10b3AgYWJzb2x1dGVcIlxuICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpLmF1dG8oXCJmb3JtYXRcIikudXJsKCl9XG4gICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDb3ZlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=