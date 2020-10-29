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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/category.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/*! exports provided: getAllPosts, getPostsByCategory, getSinglePost, getAllSlugs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostsByCategory\", function() { return getPostsByCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSinglePost\", function() { return getSinglePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllSlugs\", function() { return getAllSlugs; });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"./lib/client.ts\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars */ \"./lib/vars.ts\");\n\n\n\n\nconst queryAll = offset => groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\"][${offset}...${offset + _vars__WEBPACK_IMPORTED_MODULE_2__[\"PAGE_SIZE\"]}]  | order(publishedAt desc) {\n  _id,\n  title,\n  subtitle,\n  publishedAt,\n  _updatedAt,\n  slug,\n  'mainImage': mainImage.asset->url,\n  \"categories\": categories[]->title,\n  \"name\": author->name,\n}`;\n\nconst getAllPosts = async offset => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryAll(offset));\n};\n\nconst queryByCategory = (offset, category) => groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\" && ${category} in categories][${offset}...${offset + _vars__WEBPACK_IMPORTED_MODULE_2__[\"PAGE_SIZE\"]}]  | order(publishedAt desc) {\n  _id,\n  title,\n  subtitle,\n  publishedAt,\n  _updatedAt,\n  slug,\n  'mainImage': mainImage.asset->url,\n  \"name\": author->name,\n}`;\n\nconst getPostsByCategory = async (offset, category) => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryByCategory(offset, category));\n};\nconst queryBySlug = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  subtitle,\n  publishedAt,\n  _updatedAt,\n  \"name\": author->name,\n  'mainImage': mainImage.asset->url,\n  \"categories\": categories[]->title,\n  body\n}`;\nconst getSinglePost = async slug => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryBySlug, {\n    slug\n  });\n};\nconst queryAllSLugs = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"post\"] {slug}`;\nconst getAllSlugs = async () => {\n  return await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(queryAllSLugs);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLnRzPzVhOGEiXSwibmFtZXMiOlsicXVlcnlBbGwiLCJvZmZzZXQiLCJncm9xIiwiUEFHRV9TSVpFIiwiZ2V0QWxsUG9zdHMiLCJjbGllbnQiLCJmZXRjaCIsInF1ZXJ5QnlDYXRlZ29yeSIsImNhdGVnb3J5IiwiZ2V0UG9zdHNCeUNhdGVnb3J5IiwicXVlcnlCeVNsdWciLCJnZXRTaW5nbGVQb3N0Iiwic2x1ZyIsInF1ZXJ5QWxsU0x1Z3MiLCJnZXRBbGxTbHVncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1BLFFBQVEsR0FBSUMsTUFBRCxJQUFvQkMsMkNBQUssc0JBQXFCRCxNQUFPLE1BQ3BFQSxNQUFNLEdBQUdFLCtDQUNWO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFaQTs7QUFjTyxNQUFNQyxXQUFXLEdBQUcsTUFBT0gsTUFBUCxJQUE0QztBQUNyRSxTQUFPLE1BQU1JLCtDQUFNLENBQUNDLEtBQVAsQ0FBYU4sUUFBUSxDQUFDQyxNQUFELENBQXJCLENBQWI7QUFDRCxDQUZNOztBQUlQLE1BQU1NLGVBQWUsR0FBRyxDQUN0Qk4sTUFEc0IsRUFFdEJPLFFBRnNCLEtBR25CTiwyQ0FBSyx3QkFBdUJNLFFBQVMsbUJBQWtCUCxNQUFPLE1BQ2pFQSxNQUFNLEdBQUdFLCtDQUNWO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBZEE7O0FBZ0JPLE1BQU1NLGtCQUFrQixHQUFHLE9BQU9SLE1BQVAsRUFBZU8sUUFBZixLQUE0QjtBQUM1RCxTQUFPLE1BQU1ILCtDQUFNLENBQUNDLEtBQVAsQ0FBYUMsZUFBZSxDQUFDTixNQUFELEVBQVNPLFFBQVQsQ0FBNUIsQ0FBYjtBQUNELENBRk07QUFJUCxNQUFNRSxXQUFXLEdBQUdSLDJDQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQVRBO0FBV08sTUFBTVMsYUFBYSxHQUFHLE1BQU9DLElBQVAsSUFBd0M7QUFDbkUsU0FBTyxNQUFNUCwrQ0FBTSxDQUFDQyxLQUFQLENBQWFJLFdBQWIsRUFBMEI7QUFBRUU7QUFBRixHQUExQixDQUFiO0FBQ0QsQ0FGTTtBQUlQLE1BQU1DLGFBQWEsR0FBR1gsMkNBQUssMkJBQTNCO0FBRU8sTUFBTVksV0FBVyxHQUFHLFlBQThCO0FBQ3ZELFNBQU8sTUFBTVQsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFhTyxhQUFiLENBQWI7QUFDRCxDQUZNIiwiZmlsZSI6Ii4vbGliL2FwaS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSBcIi4vY2xpZW50XCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHsgUEFHRV9TSVpFIH0gZnJvbSBcIi4vdmFyc1wiO1xuaW1wb3J0IHsgSVBvc3QgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JUG9zdFwiO1xuXG5jb25zdCBxdWVyeUFsbCA9IChvZmZzZXQ6IG51bWJlcikgPT4gZ3JvcWAqW190eXBlID09IFwicG9zdFwiXVske29mZnNldH0uLi4ke1xuICBvZmZzZXQgKyBQQUdFX1NJWkVcbn1dICB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpIHtcbiAgX2lkLFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIHB1Ymxpc2hlZEF0LFxuICBfdXBkYXRlZEF0LFxuICBzbHVnLFxuICAnbWFpbkltYWdlJzogbWFpbkltYWdlLmFzc2V0LT51cmwsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxufWA7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQb3N0cyA9IGFzeW5jIChvZmZzZXQ6IG51bWJlcik6IFByb21pc2U8SVBvc3RbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5QWxsKG9mZnNldCkpO1xufTtcblxuY29uc3QgcXVlcnlCeUNhdGVnb3J5ID0gKFxuICBvZmZzZXQsXG4gIGNhdGVnb3J5XG4pID0+IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiAke2NhdGVnb3J5fSBpbiBjYXRlZ29yaWVzXVske29mZnNldH0uLi4ke1xuICBvZmZzZXQgKyBQQUdFX1NJWkVcbn1dICB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpIHtcbiAgX2lkLFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIHB1Ymxpc2hlZEF0LFxuICBfdXBkYXRlZEF0LFxuICBzbHVnLFxuICAnbWFpbkltYWdlJzogbWFpbkltYWdlLmFzc2V0LT51cmwsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG59YDtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzQnlDYXRlZ29yeSA9IGFzeW5jIChvZmZzZXQsIGNhdGVnb3J5KSA9PiB7XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnlCeUNhdGVnb3J5KG9mZnNldCwgY2F0ZWdvcnkpKTtcbn07XG5cbmNvbnN0IHF1ZXJ5QnlTbHVnID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgcHVibGlzaGVkQXQsXG4gIF91cGRhdGVkQXQsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gICdtYWluSW1hZ2UnOiBtYWluSW1hZ2UuYXNzZXQtPnVybCxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIGJvZHlcbn1gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUG9zdCA9IGFzeW5jIChzbHVnOiBzdHJpbmcpOiBQcm9taXNlPElQb3N0PiA9PiB7XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnlCeVNsdWcsIHsgc2x1ZyB9KTtcbn07XG5cbmNvbnN0IHF1ZXJ5QWxsU0x1Z3MgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCJdIHtzbHVnfWA7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxTbHVncyA9IGFzeW5jICgpOiBQcm9taXNlPElQb3N0W10+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeUFsbFNMdWdzKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.ts\n");

/***/ }),

/***/ "./lib/client.ts":
/*!***********************!*\
  !*** ./lib/client.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: process.env.SANITY_PROJECT_ID,\n  dataset: process.env.SANITY_DATASET_NAME,\n  useCdn: true\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2xpZW50LnRzP2EzZWYiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIlNBTklUWV9QUk9KRUNUX0lEIiwiZGF0YXNldCIsIlNBTklUWV9EQVRBU0VUX05BTUUiLCJ1c2VDZG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLG9IQUFZLENBQUM7QUFDMUJDLFdBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQURHO0FBRTFCQyxTQUFPLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxtQkFGSztBQUcxQkMsUUFBTSxFQUFFO0FBSGtCLENBQUQsQ0FBM0IiLCJmaWxlIjoiLi9saWIvY2xpZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiQHNhbml0eS9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TQU5JVFlfUFJPSkVDVF9JRCxcbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuU0FOSVRZX0RBVEFTRVRfTkFNRSxcbiAgdXNlQ2RuOiB0cnVlLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client.ts\n");

/***/ }),

/***/ "./lib/vars.ts":
/*!*********************!*\
  !*** ./lib/vars.ts ***!
  \*********************/
/*! exports provided: MAIN_TITLE, PAGE_SIZE, ABOUT_TEXT, IPAD_BREAKPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAIN_TITLE\", function() { return MAIN_TITLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAGE_SIZE\", function() { return PAGE_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABOUT_TEXT\", function() { return ABOUT_TEXT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IPAD_BREAKPOINT\", function() { return IPAD_BREAKPOINT; });\nconst MAIN_TITLE = \"Арминианская перспектива\";\nconst PAGE_SIZE = 6;\nconst ABOUT_TEXT = \"В данном блоге публикуются статьи об арминианстве. Цель - обсуждение в богословских рамках арминианства таких важных тем, как сотериология (учение о спасении), провидение, уверенность в спасении и т.п. C одной стороны, представленные здесь статьи имеют апологетический характер - они призваны объяснять и защищать арминианскую доктрину. С другой стороны, хотя мы и не считаем кальвинизм ересью, здесь также присутствует полемика против учения кальвинизма. Надеемся, что статьи, опубликованные здесь, помогут Вам в поиске истины. Да благословит Вас в этих поисках Бог (Иоанна 17:17).\";\nconst IPAD_BREAKPOINT = 1024;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdmFycy50cz9hYmE5Il0sIm5hbWVzIjpbIk1BSU5fVElUTEUiLCJQQUdFX1NJWkUiLCJBQk9VVF9URVhUIiwiSVBBRF9CUkVBS1BPSU5UIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFHLDBCQUFuQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxDQUFsQjtBQUNBLE1BQU1DLFVBQVUsR0FDckIsd2tCQURLO0FBRUEsTUFBTUMsZUFBZSxHQUFHLElBQXhCIiwiZmlsZSI6Ii4vbGliL3ZhcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTUFJTl9USVRMRSA9IFwi0JDRgNC80LjQvdC40LDQvdGB0LrQsNGPINC/0LXRgNGB0L/QtdC60YLQuNCy0LBcIjtcbmV4cG9ydCBjb25zdCBQQUdFX1NJWkUgPSA2O1xuZXhwb3J0IGNvbnN0IEFCT1VUX1RFWFQgPVxuICBcItCSINC00LDQvdC90L7QvCDQsdC70L7Qs9C1INC/0YPQsdC70LjQutGD0Y7RgtGB0Y8g0YHRgtCw0YLRjNC4INC+0LEg0LDRgNC80LjQvdC40LDQvdGB0YLQstC1LiDQptC10LvRjCAtINC+0LHRgdGD0LbQtNC10L3QuNC1INCyINCx0L7Qs9C+0YHQu9C+0LLRgdC60LjRhSDRgNCw0LzQutCw0YUg0LDRgNC80LjQvdC40LDQvdGB0YLQstCwINGC0LDQutC40YUg0LLQsNC20L3Ri9GFINGC0LXQvCwg0LrQsNC6INGB0L7RgtC10YDQuNC+0LvQvtCz0LjRjyAo0YPRh9C10L3QuNC1INC+INGB0L/QsNGB0LXQvdC40LgpLCDQv9GA0L7QstC40LTQtdC90LjQtSwg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDRgdC/0LDRgdC10L3QuNC4INC4INGCLtC/LiBDINC+0LTQvdC+0Lkg0YHRgtC+0YDQvtC90YssINC/0YDQtdC00YHRgtCw0LLQu9C10L3QvdGL0LUg0LfQtNC10YHRjCDRgdGC0LDRgtGM0Lgg0LjQvNC10Y7RgiDQsNC/0L7Qu9C+0LPQtdGC0LjRh9C10YHQutC40Lkg0YXQsNGA0LDQutGC0LXRgCAtINC+0L3QuCDQv9GA0LjQt9Cy0LDQvdGLINC+0LHRitGP0YHQvdGP0YLRjCDQuCDQt9Cw0YnQuNGJ0LDRgtGMINCw0YDQvNC40L3QuNCw0L3RgdC60YPRjiDQtNC+0LrRgtGA0LjQvdGDLiDQoSDQtNGA0YPQs9C+0Lkg0YHRgtC+0YDQvtC90YssINGF0L7RgtGPINC80Ysg0Lgg0L3QtSDRgdGH0LjRgtCw0LXQvCDQutCw0LvRjNCy0LjQvdC40LfQvCDQtdGA0LXRgdGM0Y4sINC30LTQtdGB0Ywg0YLQsNC60LbQtSDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIg0L/QvtC70LXQvNC40LrQsCDQv9GA0L7RgtC40LIg0YPRh9C10L3QuNGPINC60LDQu9GM0LLQuNC90LjQt9C80LAuINCd0LDQtNC10LXQvNGB0Y8sINGH0YLQviDRgdGC0LDRgtGM0LgsINC+0L/Rg9Cx0LvQuNC60L7QstCw0L3QvdGL0LUg0LfQtNC10YHRjCwg0L/QvtC80L7Qs9GD0YIg0JLQsNC8INCyINC/0L7QuNGB0LrQtSDQuNGB0YLQuNC90YsuINCU0LAg0LHQu9Cw0LPQvtGB0LvQvtCy0LjRgiDQktCw0YEg0LIg0Y3RgtC40YUg0L/QvtC40YHQutCw0YUg0JHQvtCzICjQmNC+0LDQvdC90LAgMTc6MTcpLlwiO1xuZXhwb3J0IGNvbnN0IElQQURfQlJFQUtQT0lOVCA9IDEwMjQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/vars.ts\n");

/***/ }),

/***/ "./pages/api/category.ts":
/*!*******************************!*\
  !*** ./pages/api/category.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/api */ \"./lib/api.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const offset = +req.query.offset;\n  const category = req.query.category;\n  console.log(category);\n  const posts = await Object(_lib_api__WEBPACK_IMPORTED_MODULE_0__[\"getPostsByCategory\"])(offset, category);\n  res.status(200).json(posts);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2F0ZWdvcnkudHM/ZTIxMSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJvZmZzZXQiLCJxdWVyeSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwiZ2V0UG9zdHNCeUNhdGVnb3J5Iiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNQyxNQUFNLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxLQUFKLENBQVVELE1BQTFCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHSixHQUFHLENBQUNHLEtBQUosQ0FBVUMsUUFBM0I7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxRQUFNRyxLQUFLLEdBQUcsTUFBTUMsbUVBQWtCLENBQUNOLE1BQUQsRUFBU0UsUUFBVCxDQUF0QztBQUNBSCxLQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsS0FBckI7QUFDRCxDQU5EIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NhdGVnb3J5LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdHNCeUNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG9mZnNldCA9ICtyZXEucXVlcnkub2Zmc2V0O1xuICBjb25zdCBjYXRlZ29yeSA9IHJlcS5xdWVyeS5jYXRlZ29yeTtcbiAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzQnlDYXRlZ29yeShvZmZzZXQsIGNhdGVnb3J5KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdHMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/category.ts\n");

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