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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/category.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getAllPosts, getPostsByCategory, getSinglePost, getAllSlugs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsByCategory\", function() { return getPostsByCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSinglePost\", function() { return getSinglePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllSlugs\", function() { return getAllSlugs; });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"./lib/client.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars */ \"./lib/vars.js\");\n\n\n\n\nconst queryAll = offset => groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\"][${offset}...${offset + _vars__WEBPACK_IMPORTED_MODULE_2__[\"PAGE_SIZE\"]}]  | order(publishedAt desc) {\n  _id,\n  title,\n  subtitle,\n  publishedAt,\n  _updatedAt,\n  slug,\n  mainImage,\n  \"categories\": categories[]->title,\n}`;\n\nconst getAllPosts = async offset => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryAll(offset));\n};\n\nconst queryByCategory = (offset, category) => groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\" && ${category} in categories][${offset}...${offset + _vars__WEBPACK_IMPORTED_MODULE_2__[\"PAGE_SIZE\"]}]  | order(publishedAt desc) {\n  _id,\n  title,\n  subtitle,\n  publishedAt,\n  _updatedAt,\n  slug,\n  mainImage,\n}`;\n\nconst getPostsByCategory = async (offset, category) => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryByCategory(offset, category));\n};\nconst queryBySlug = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  subtitle,\n  publishedAt,\n  _updatedAt,\n  \"name\": author->name,\n  mainImage,\n  \"categories\": categories[]->title,\n  body\n}`;\nconst getSinglePost = async slug => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryBySlug, {\n    slug\n  });\n};\nconst queryAllSLugs = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\"] {slug}`;\nconst getAllSlugs = async () => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryAllSLugs);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLmpzP2FhODUiXSwibmFtZXMiOlsicXVlcnlBbGwiLCJvZmZzZXQiLCJncm9xIiwiUEFHRV9TSVpFIiwiZ2V0QWxsUG9zdHMiLCJjbGllbnQiLCJmZXRjaCIsInF1ZXJ5QnlDYXRlZ29yeSIsImNhdGVnb3J5IiwiZ2V0UG9zdHNCeUNhdGVnb3J5IiwicXVlcnlCeVNsdWciLCJnZXRTaW5nbGVQb3N0Iiwic2x1ZyIsInF1ZXJ5QWxsU0x1Z3MiLCJnZXRBbGxTbHVncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBSUMsTUFBRCxJQUFZQywyQ0FBSyxzQkFBcUJELE1BQU8sTUFDNURBLE1BQU0sR0FBR0UsK0NBQ1Y7Ozs7Ozs7OztFQUZEOztBQWFPLE1BQU1DLFdBQVcsR0FBRyxNQUFPSCxNQUFQLElBQWtCO0FBQzNDLFNBQU8sTUFBTUksK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhTixRQUFRLENBQUNDLE1BQUQsQ0FBckIsQ0FBYjtBQUNELENBRk07O0FBSVAsTUFBTU0sZUFBZSxHQUFHLENBQ3RCTixNQURzQixFQUV0Qk8sUUFGc0IsS0FHbkJOLDJDQUFLLHdCQUF1Qk0sUUFBUyxtQkFBa0JQLE1BQU8sTUFDakVBLE1BQU0sR0FBR0UsK0NBQ1Y7Ozs7Ozs7O0VBTEQ7O0FBZU8sTUFBTU0sa0JBQWtCLEdBQUcsT0FBT1IsTUFBUCxFQUFlTyxRQUFmLEtBQTRCO0FBQzVELFNBQU8sTUFBTUgsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxlQUFlLENBQUNOLE1BQUQsRUFBU08sUUFBVCxDQUE1QixDQUFiO0FBQ0QsQ0FGTTtBQUlQLE1BQU1FLFdBQVcsR0FBR1IsMkNBQUs7Ozs7Ozs7OztFQUF6QjtBQVdPLE1BQU1TLGFBQWEsR0FBRyxNQUFPQyxJQUFQLElBQWdCO0FBQzNDLFNBQU8sTUFBTVAsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhSSxXQUFiLEVBQTBCO0FBQUVFO0FBQUYsR0FBMUIsQ0FBYjtBQUNELENBRk07QUFJUCxNQUFNQyxhQUFhLEdBQUdYLDJDQUFLLDJCQUEzQjtBQUVPLE1BQU1ZLFdBQVcsR0FBRyxZQUFZO0FBQ3JDLFNBQU8sTUFBTVQsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhTyxhQUFiLENBQWI7QUFDRCxDQUZNIiwiZmlsZSI6Ii4vbGliL2FwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSBcIi4vY2xpZW50XCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHsgUEFHRV9TSVpFIH0gZnJvbSBcIi4vdmFyc1wiO1xuXG5jb25zdCBxdWVyeUFsbCA9IChvZmZzZXQpID0+IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIl1bJHtvZmZzZXR9Li4uJHtcbiAgb2Zmc2V0ICsgUEFHRV9TSVpFXG59XSAgfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKSB7XG4gIF9pZCxcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgX3VwZGF0ZWRBdCxcbiAgc2x1ZyxcbiAgbWFpbkltYWdlLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbn1gO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSBhc3luYyAob2Zmc2V0KSA9PiB7XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnlBbGwob2Zmc2V0KSk7XG59O1xuXG5jb25zdCBxdWVyeUJ5Q2F0ZWdvcnkgPSAoXG4gIG9mZnNldCxcbiAgY2F0ZWdvcnlcbikgPT4gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmICR7Y2F0ZWdvcnl9IGluIGNhdGVnb3JpZXNdWyR7b2Zmc2V0fS4uLiR7XG4gIG9mZnNldCArIFBBR0VfU0laRVxufV0gIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYykge1xuICBfaWQsXG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgcHVibGlzaGVkQXQsXG4gIF91cGRhdGVkQXQsXG4gIHNsdWcsXG4gIG1haW5JbWFnZSxcbn1gO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNCeUNhdGVnb3J5ID0gYXN5bmMgKG9mZnNldCwgY2F0ZWdvcnkpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeUJ5Q2F0ZWdvcnkob2Zmc2V0LCBjYXRlZ29yeSkpO1xufTtcblxuY29uc3QgcXVlcnlCeVNsdWcgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBwdWJsaXNoZWRBdCxcbiAgX3VwZGF0ZWRBdCxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgbWFpbkltYWdlLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbiAgYm9keVxufWA7XG5cbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVQb3N0ID0gYXN5bmMgKHNsdWcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeUJ5U2x1ZywgeyBzbHVnIH0pO1xufTtcblxuY29uc3QgcXVlcnlBbGxTTHVncyA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIl0ge3NsdWd9YDtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFNsdWdzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5QWxsU0x1Z3MpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: \"oxjvnq6h\",\n  dataset: \"production\",\n  useCdn: true\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50LmpzP2RjNTgiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsb0hBQVksQ0FBQztBQUMxQkMsV0FBUyxFQUFFLFVBRGU7QUFFMUJDLFNBQU8sRUFBRSxZQUZpQjtBQUcxQkMsUUFBTSxFQUFFO0FBSGtCLENBQUQsQ0FBM0IiLCJmaWxlIjoiLi9saWIvY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiQHNhbml0eS9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiBcIm94anZucTZoXCIsXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxuICB1c2VDZG46IHRydWUsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client.js\n");

/***/ }),

/***/ "./lib/vars.js":
/*!*********************!*\
  !*** ./lib/vars.js ***!
  \*********************/
/*! exports provided: MAIN_TITLE, PAGE_SIZE, ABOUT_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAIN_TITLE\", function() { return MAIN_TITLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAGE_SIZE\", function() { return PAGE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABOUT_TEXT\", function() { return ABOUT_TEXT; });\nconst MAIN_TITLE = \"Арминианская перспектива\";\nconst PAGE_SIZE = 6;\nconst ABOUT_TEXT = \"В данном блоге публикуются статьи об арминианстве. Цель - обсуждение в богословских рамках арминианства таких важных тем, как сотериология (учение о спасении), провидение, уверенность в спасении и т.п. C одной стороны, представленные здесь статьи имеют апологетический характер - они призваны объяснять и защищать арминианскую доктрину. С другой стороны, хотя мы и не считаем кальвинизм ересью, здесь также присутствует полемика против учения кальвинизма. Надеемся, что статьи, опубликованные здесь, помогут Вам в поиске истины. Да благословит Вас в этих поисках Бог (Иоанна 17:17).\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdmFycy5qcz9iZDBmIl0sIm5hbWVzIjpbIk1BSU5fVElUTEUiLCJQQUdFX1NJWkUiLCJBQk9VVF9URVhUIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLFVBQVUsR0FBRywwQkFBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQ3JCLHdrQkFESyIsImZpbGUiOiIuL2xpYi92YXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1BSU5fVElUTEUgPSBcItCQ0YDQvNC40L3QuNCw0L3RgdC60LDRjyDQv9C10YDRgdC/0LXQutGC0LjQstCwXCI7XG5leHBvcnQgY29uc3QgUEFHRV9TSVpFID0gNjtcbmV4cG9ydCBjb25zdCBBQk9VVF9URVhUID1cbiAgXCLQkiDQtNCw0L3QvdC+0Lwg0LHQu9C+0LPQtSDQv9GD0LHQu9C40LrRg9GO0YLRgdGPINGB0YLQsNGC0YzQuCDQvtCxINCw0YDQvNC40L3QuNCw0L3RgdGC0LLQtS4g0KbQtdC70YwgLSDQvtCx0YHRg9C20LTQtdC90LjQtSDQsiDQsdC+0LPQvtGB0LvQvtCy0YHQutC40YUg0YDQsNC80LrQsNGFINCw0YDQvNC40L3QuNCw0L3RgdGC0LLQsCDRgtCw0LrQuNGFINCy0LDQttC90YvRhSDRgtC10LwsINC60LDQuiDRgdC+0YLQtdGA0LjQvtC70L7Qs9C40Y8gKNGD0YfQtdC90LjQtSDQviDRgdC/0LDRgdC10L3QuNC4KSwg0L/RgNC+0LLQuNC00LXQvdC40LUsINGD0LLQtdGA0LXQvdC90L7RgdGC0Ywg0LIg0YHQv9Cw0YHQtdC90LjQuCDQuCDRgi7Qvy4gQyDQvtC00L3QvtC5INGB0YLQvtGA0L7QvdGLLCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90L3Ri9C1INC30LTQtdGB0Ywg0YHRgtCw0YLRjNC4INC40LzQtdGO0YIg0LDQv9C+0LvQvtCz0LXRgtC40YfQtdGB0LrQuNC5INGF0LDRgNCw0LrRgtC10YAgLSDQvtC90Lgg0L/RgNC40LfQstCw0L3RiyDQvtCx0YrRj9GB0L3Rj9GC0Ywg0Lgg0LfQsNGJ0LjRidCw0YLRjCDQsNGA0LzQuNC90LjQsNC90YHQutGD0Y4g0LTQvtC60YLRgNC40L3Rgy4g0KEg0LTRgNGD0LPQvtC5INGB0YLQvtGA0L7QvdGLLCDRhdC+0YLRjyDQvNGLINC4INC90LUg0YHRh9C40YLQsNC10Lwg0LrQsNC70YzQstC40L3QuNC30Lwg0LXRgNC10YHRjNGOLCDQt9C00LXRgdGMINGC0LDQutC20LUg0L/RgNC40YHRg9GC0YHRgtCy0YPQtdGCINC/0L7Qu9C10LzQuNC60LAg0L/RgNC+0YLQuNCyINGD0YfQtdC90LjRjyDQutCw0LvRjNCy0LjQvdC40LfQvNCwLiDQndCw0LTQtdC10LzRgdGPLCDRh9GC0L4g0YHRgtCw0YLRjNC4LCDQvtC/0YPQsdC70LjQutC+0LLQsNC90L3Ri9C1INC30LTQtdGB0YwsINC/0L7QvNC+0LPRg9GCINCS0LDQvCDQsiDQv9C+0LjRgdC60LUg0LjRgdGC0LjQvdGLLiDQlNCwINCx0LvQsNCz0L7RgdC70L7QstC40YIg0JLQsNGBINCyINGN0YLQuNGFINC/0L7QuNGB0LrQsNGFINCR0L7QsyAo0JjQvtCw0L3QvdCwIDE3OjE3KS5cIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/vars.js\n");

/***/ }),

/***/ "./pages/api/category.js":
/*!*******************************!*\
  !*** ./pages/api/category.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/api */ \"./lib/api.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const offset = +req.query.offset;\n  const category = req.query.category;\n  console.log(category);\n  const posts = await Object(_lib_api__WEBPACK_IMPORTED_MODULE_0__[\"getPostsByCategory\"])(offset, category);\n  res.status(200).json(posts);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2F0ZWdvcnkuanM/N2JmMCJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJvZmZzZXQiLCJxdWVyeSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwiZ2V0UG9zdHNCeUNhdGVnb3J5Iiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNQyxNQUFNLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxLQUFKLENBQVVELE1BQTFCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHSixHQUFHLENBQUNHLEtBQUosQ0FBVUMsUUFBM0I7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxRQUFNRyxLQUFLLEdBQUcsTUFBTUMsbUVBQWtCLENBQUNOLE1BQUQsRUFBU0UsUUFBVCxDQUF0QztBQUNBSCxLQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsS0FBckI7QUFDRCxDQU5EIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdHNCeUNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG9mZnNldCA9ICtyZXEucXVlcnkub2Zmc2V0O1xuICBjb25zdCBjYXRlZ29yeSA9IHJlcS5xdWVyeS5jYXRlZ29yeTtcbiAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzQnlDYXRlZ29yeShvZmZzZXQsIGNhdGVnb3J5KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdHMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/category.js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"groq\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncm9xXCI/ZTYzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncm9xLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///groq\n");

/***/ })

/******/ });