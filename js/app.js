/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#verst/test/src/js/app.js":
/*!****************************************!*\
  !*** ../../ #verst/test/src/js/app.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nlet portfolioSlider = new Swiper(\".slider-portfolio\", {\r\n\r\n\twatchOverflow: true,\r\n\tslidesPerView: 'auto',\r\n\tspaceBetween: 15,\r\n\tspeed: 1000,\r\n\tloop: true,\r\n\tbreakpoints: {\r\n\t\t0: {\r\n\t\t\tspaceBetween: 10,\r\n\t\t\tslidesPerView: 1,\r\n\t\t},\r\n\t\t767.989: {\r\n\t\t\tslidesPerView: 'auto',\r\n\t\t\tspaceBetween: 15,\r\n\t\t}\r\n\t},\r\n\t//Arrows\r\n\tnavigation: {\r\n\t\tnextEl: \".slider-arrow slider-arrow_next\",\r\n\t\tprevEl: \".slider-arrow slider-arrow_prev\",\r\n\t},\r\n})\r\n\r\n\r\nconst swiperPrev = document.querySelector('.slider-arrow.slider-arrow_prev');\r\nconst swiperNext = document.querySelector('.slider-arrow.slider-arrow_next');\r\n\r\nswiperPrev.addEventListener('click', () => {\r\n\tportfolioSlider.slidePrev();\r\n});\r\nswiperNext.addEventListener('click', () => {\r\n\tportfolioSlider.slideNext();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://gulp4/../../%00#verst/test/src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../\u0000#verst/test/src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;