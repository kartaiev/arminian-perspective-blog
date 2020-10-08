module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/posts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getAllPosts, getSinglePost, getAllSlugs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSinglePost", function() { return getSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSlugs", function() { return getAllSlugs; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./lib/client.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ "groq");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars */ "./lib/vars.js");




const queryAll = offset => groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == "post"][${offset}...${offset + _vars__WEBPACK_IMPORTED_MODULE_2__["PAGE_SIZE"]}]  | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  publishedAt,
  _updatedAt,
  slug,
  mainImage,
}`;

const getAllPosts = async offset => {
  return await _client__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(queryAll(offset));
};
const queryBySlug = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == "post" && slug.current == $slug][0]{
  title,
  subtitle,
  publishedAt,
  _updatedAt,
  "name": author->name,
  mainImage,
  "categories": categories[]->title,
  body
}`;
const getSinglePost = async slug => {
  return await _client__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(queryBySlug, {
    slug
  });
};
const queryAllSLugs = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == "post"] {slug}`;
const getAllSlugs = async () => {
  return await _client__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(queryAllSLugs);
};

/***/ }),

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "oxjvnq6h",
  dataset: "production",
  useCdn: true
}));

/***/ }),

/***/ "./lib/vars.js":
/*!*********************!*\
  !*** ./lib/vars.js ***!
  \*********************/
/*! exports provided: MAIN_TITLE, PAGE_SIZE, ABOUT_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_TITLE", function() { return MAIN_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE", function() { return PAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT_TEXT", function() { return ABOUT_TEXT; });
const MAIN_TITLE = "Арминианская перспектива";
const PAGE_SIZE = 6;
const ABOUT_TEXT = "В данном блоге публикуются статьи об арминианстве. Цель - обсуждение в богословских рамках арминианства таких важных тем, как сотериология (учение о спасении), провидение, уверенность в спасении и т.п. C одной стороны, представленные здесь статьи имеют апологетический характер - они призваны объяснять и защищать арминианскую доктрину. С другой стороны, хотя мы и не считаем кальвинизм ересью, здесь также присутствует полемика против учения кальвинизма. Надеемся, что статьи, опубликованные здесь, помогут Вам в поиске истины. Да благословит Вас в этих поисках Бог (Иоанна 17:17).";

/***/ }),

/***/ "./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const offset = +req.query.offset;
  const posts = await Object(_lib_api__WEBPACK_IMPORTED_MODULE_0__["getAllPosts"])(offset);
  res.status(200).json(posts);
});

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("groq");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50LmpzIiwid2VicGFjazovLy8uL2xpYi92YXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyb3FcIiJdLCJuYW1lcyI6WyJxdWVyeUFsbCIsIm9mZnNldCIsImdyb3EiLCJQQUdFX1NJWkUiLCJnZXRBbGxQb3N0cyIsImNsaWVudCIsImZldGNoIiwicXVlcnlCeVNsdWciLCJnZXRTaW5nbGVQb3N0Iiwic2x1ZyIsInF1ZXJ5QWxsU0x1Z3MiLCJnZXRBbGxTbHVncyIsInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJNQUlOX1RJVExFIiwiQUJPVVRfVEVYVCIsInJlcSIsInJlcyIsInF1ZXJ5IiwicG9zdHMiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFJQyxNQUFELElBQVlDLDJDQUFLLHNCQUFxQkQsTUFBTyxNQUM1REEsTUFBTSxHQUFHRSwrQ0FDVjs7Ozs7Ozs7RUFGRDs7QUFZTyxNQUFNQyxXQUFXLEdBQUcsTUFBT0gsTUFBUCxJQUFrQjtBQUMzQyxTQUFPLE1BQU1JLCtDQUFNLENBQUNDLEtBQVAsQ0FBYU4sUUFBUSxDQUFDQyxNQUFELENBQXJCLENBQWI7QUFDRCxDQUZNO0FBSVAsTUFBTU0sV0FBVyxHQUFHTCwyQ0FBSzs7Ozs7Ozs7O0VBQXpCO0FBV08sTUFBTU0sYUFBYSxHQUFHLE1BQU9DLElBQVAsSUFBZ0I7QUFDM0MsU0FBTyxNQUFNSiwrQ0FBTSxDQUFDQyxLQUFQLENBQWFDLFdBQWIsRUFBMEI7QUFBRUU7QUFBRixHQUExQixDQUFiO0FBQ0QsQ0FGTTtBQUlQLE1BQU1DLGFBQWEsR0FBR1IsMkNBQUssMkJBQTNCO0FBRU8sTUFBTVMsV0FBVyxHQUFHLFlBQVk7QUFDckMsU0FBTyxNQUFNTiwrQ0FBTSxDQUFDQyxLQUFQLENBQWFJLGFBQWIsQ0FBYjtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7O0FDckNQO0FBQUE7QUFBQTtBQUFBO0FBRWVFLG9IQUFZLENBQUM7QUFDMUJDLFdBQVMsRUFBRSxVQURlO0FBRTFCQyxTQUFPLEVBQUUsWUFGaUI7QUFHMUJDLFFBQU0sRUFBRTtBQUhrQixDQUFELENBQTNCLEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUMsVUFBVSxHQUFHLDBCQUFuQjtBQUNBLE1BQU1iLFNBQVMsR0FBRyxDQUFsQjtBQUNBLE1BQU1jLFVBQVUsR0FDckIsd2tCQURLLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUVlLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTWxCLE1BQU0sR0FBRyxDQUFDaUIsR0FBRyxDQUFDRSxLQUFKLENBQVVuQixNQUExQjtBQUNBLFFBQU1vQixLQUFLLEdBQUcsTUFBTWpCLDREQUFXLENBQUNILE1BQUQsQ0FBL0I7QUFDQWtCLEtBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixLQUFyQjtBQUNELENBSkQsRTs7Ozs7Ozs7Ozs7QUNGQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9hcGkvcG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wb3N0cy5qc1wiKTtcbiIsImltcG9ydCBjbGllbnQgZnJvbSBcIi4vY2xpZW50XCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHsgUEFHRV9TSVpFIH0gZnJvbSBcIi4vdmFyc1wiO1xuXG5jb25zdCBxdWVyeUFsbCA9IChvZmZzZXQpID0+IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIl1bJHtvZmZzZXR9Li4uJHtcbiAgb2Zmc2V0ICsgUEFHRV9TSVpFXG59XSAgfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKSB7XG4gIF9pZCxcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgX3VwZGF0ZWRBdCxcbiAgc2x1ZyxcbiAgbWFpbkltYWdlLFxufWA7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQb3N0cyA9IGFzeW5jIChvZmZzZXQpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeUFsbChvZmZzZXQpKTtcbn07XG5cbmNvbnN0IHF1ZXJ5QnlTbHVnID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgcHVibGlzaGVkQXQsXG4gIF91cGRhdGVkQXQsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIG1haW5JbWFnZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIGJvZHlcbn1gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUG9zdCA9IGFzeW5jIChzbHVnKSA9PiB7XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnlCeVNsdWcsIHsgc2x1ZyB9KTtcbn07XG5cbmNvbnN0IHF1ZXJ5QWxsU0x1Z3MgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCJdIHtzbHVnfWA7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxTbHVncyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeUFsbFNMdWdzKTtcbn07XG4iLCJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IFwib3hqdm5xNmhcIixcclxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcclxuICB1c2VDZG46IHRydWUsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgTUFJTl9USVRMRSA9IFwi0JDRgNC80LjQvdC40LDQvdGB0LrQsNGPINC/0LXRgNGB0L/QtdC60YLQuNCy0LBcIjtcbmV4cG9ydCBjb25zdCBQQUdFX1NJWkUgPSA2O1xuZXhwb3J0IGNvbnN0IEFCT1VUX1RFWFQgPVxuICBcItCSINC00LDQvdC90L7QvCDQsdC70L7Qs9C1INC/0YPQsdC70LjQutGD0Y7RgtGB0Y8g0YHRgtCw0YLRjNC4INC+0LEg0LDRgNC80LjQvdC40LDQvdGB0YLQstC1LiDQptC10LvRjCAtINC+0LHRgdGD0LbQtNC10L3QuNC1INCyINCx0L7Qs9C+0YHQu9C+0LLRgdC60LjRhSDRgNCw0LzQutCw0YUg0LDRgNC80LjQvdC40LDQvdGB0YLQstCwINGC0LDQutC40YUg0LLQsNC20L3Ri9GFINGC0LXQvCwg0LrQsNC6INGB0L7RgtC10YDQuNC+0LvQvtCz0LjRjyAo0YPRh9C10L3QuNC1INC+INGB0L/QsNGB0LXQvdC40LgpLCDQv9GA0L7QstC40LTQtdC90LjQtSwg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDRgdC/0LDRgdC10L3QuNC4INC4INGCLtC/LiBDINC+0LTQvdC+0Lkg0YHRgtC+0YDQvtC90YssINC/0YDQtdC00YHRgtCw0LLQu9C10L3QvdGL0LUg0LfQtNC10YHRjCDRgdGC0LDRgtGM0Lgg0LjQvNC10Y7RgiDQsNC/0L7Qu9C+0LPQtdGC0LjRh9C10YHQutC40Lkg0YXQsNGA0LDQutGC0LXRgCAtINC+0L3QuCDQv9GA0LjQt9Cy0LDQvdGLINC+0LHRitGP0YHQvdGP0YLRjCDQuCDQt9Cw0YnQuNGJ0LDRgtGMINCw0YDQvNC40L3QuNCw0L3RgdC60YPRjiDQtNC+0LrRgtGA0LjQvdGDLiDQoSDQtNGA0YPQs9C+0Lkg0YHRgtC+0YDQvtC90YssINGF0L7RgtGPINC80Ysg0Lgg0L3QtSDRgdGH0LjRgtCw0LXQvCDQutCw0LvRjNCy0LjQvdC40LfQvCDQtdGA0LXRgdGM0Y4sINC30LTQtdGB0Ywg0YLQsNC60LbQtSDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIg0L/QvtC70LXQvNC40LrQsCDQv9GA0L7RgtC40LIg0YPRh9C10L3QuNGPINC60LDQu9GM0LLQuNC90LjQt9C80LAuINCd0LDQtNC10LXQvNGB0Y8sINGH0YLQviDRgdGC0LDRgtGM0LgsINC+0L/Rg9Cx0LvQuNC60L7QstCw0L3QvdGL0LUg0LfQtNC10YHRjCwg0L/QvtC80L7Qs9GD0YIg0JLQsNC8INCyINC/0L7QuNGB0LrQtSDQuNGB0YLQuNC90YsuINCU0LAg0LHQu9Cw0LPQvtGB0LvQvtCy0LjRgiDQktCw0YEg0LIg0Y3RgtC40YUg0L/QvtC40YHQutCw0YUg0JHQvtCzICjQmNC+0LDQvdC90LAgMTc6MTcpLlwiO1xuIiwiaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgb2Zmc2V0ID0gK3JlcS5xdWVyeS5vZmZzZXQ7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMob2Zmc2V0KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdHMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyb3FcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==