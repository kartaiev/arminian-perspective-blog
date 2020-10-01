webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getAllPosts, getSinglePost, getAllSlugs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSinglePost", function() { return getSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSlugs", function() { return getAllSlugs; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client */ "./lib/client.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vars */ "./lib/vars.js");




function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["*[_type == \"post\"] {slug}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  subtitle,\n  publishedAt,\n  _createdAt,\n  \"name\": author->name,\n  mainImage,\n  \"categories\": categories[]->title,\n  body\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["*[_type == \"post\"][", "...", "]  | order(_updatedAt desc) {\n  _id,\n  title,\n  subtitle,\n  publishedAt,\n  _createdAt,\n  slug,\n  mainImage,\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var queryAll = function queryAll(offset) {
  return groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject(), offset, offset + _vars__WEBPACK_IMPORTED_MODULE_5__["PAGE_SIZE"]);
};

var getAllPosts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(offset) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch(queryAll(offset));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllPosts(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryBySlug = groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject2());
var getSinglePost = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(slug) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch(queryBySlug, {
              slug: slug
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSinglePost(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var queryAllSLugs = groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject3());
var getAllSlugs = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _client__WEBPACK_IMPORTED_MODULE_3__["default"].fetch(queryAllSLugs);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAllSlugs() {
    return _ref3.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJxdWVyeUFsbCIsIm9mZnNldCIsImdyb3EiLCJQQUdFX1NJWkUiLCJnZXRBbGxQb3N0cyIsImNsaWVudCIsImZldGNoIiwicXVlcnlCeVNsdWciLCJnZXRTaW5nbGVQb3N0Iiwic2x1ZyIsInF1ZXJ5QWxsU0x1Z3MiLCJnZXRBbGxTbHVncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRDtBQUFBLFNBQVlDLDJDQUFaLG9CQUFzQ0QsTUFBdEMsRUFDZkEsTUFBTSxHQUFHRSwrQ0FETTtBQUFBLENBQWpCOztBQVlPLElBQU1DLFdBQVc7QUFBQSw4TEFBRyxpQkFBT0gsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWkksK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhTixRQUFRLENBQUNDLE1BQUQsQ0FBckIsQ0FEWTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhHLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakI7QUFJUCxJQUFNRyxXQUFXLEdBQUdMLDJDQUFILG9CQUFqQjtBQVdPLElBQU1NLGFBQWE7QUFBQSwrTEFBRyxrQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZEosK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxXQUFiLEVBQTBCO0FBQUVFLGtCQUFJLEVBQUpBO0FBQUYsYUFBMUIsQ0FEYzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJELGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7QUFJUCxJQUFNRSxhQUFhLEdBQUdSLDJDQUFILG9CQUFuQjtBQUVPLElBQU1TLFdBQVc7QUFBQSwrTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWk4sK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhSSxhQUFiLENBRFk7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYQyxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjFiNTRkZDZkMWFiOWU5OGE4YmU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgeyBQQUdFX1NJWkUgfSBmcm9tIFwiLi92YXJzXCI7XHJcblxyXG5jb25zdCBxdWVyeUFsbCA9IChvZmZzZXQpID0+IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIl1bJHtvZmZzZXR9Li4uJHtcclxuICBvZmZzZXQgKyBQQUdFX1NJWkVcclxufV0gIHwgb3JkZXIoX3VwZGF0ZWRBdCBkZXNjKSB7XHJcbiAgX2lkLFxyXG4gIHRpdGxlLFxyXG4gIHN1YnRpdGxlLFxyXG4gIHB1Ymxpc2hlZEF0LFxyXG4gIF9jcmVhdGVkQXQsXHJcbiAgc2x1ZyxcclxuICBtYWluSW1hZ2UsXHJcbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gYXN5bmMgKG9mZnNldCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnlBbGwob2Zmc2V0KSk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeUJ5U2x1ZyA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIHN1YnRpdGxlLFxyXG4gIHB1Ymxpc2hlZEF0LFxyXG4gIF9jcmVhdGVkQXQsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBtYWluSW1hZ2UsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgYm9keVxyXG59YDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVQb3N0ID0gYXN5bmMgKHNsdWcpID0+IHtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5QnlTbHVnLCB7IHNsdWcgfSk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeUFsbFNMdWdzID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiXSB7c2x1Z31gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFNsdWdzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnlBbGxTTHVncyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=