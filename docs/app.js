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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getJSON */ \"./src/getJSON.js\");\n\n// import(\"./app.css\");\n\nconst $class_loading = document.getElementById(\"class-loading\");\nconst $quiz_loading = document.getElementById(\"quiz-loading\");\nconst $classTable = document.getElementById(\"class\");\nconst $quizTable = document.getElementById(\"quiz\");\nconst $classFilter = document.querySelector(\"#class-filter\");\nconst $classBtns = $classFilter.querySelectorAll(\"div.btn-group > button\");\nconst $quizFilter = document.querySelector(\"#quiz-filter\");\nconst $quizBtns = $quizFilter.querySelectorAll(\"div.btn-group > button\");\n\nfunction btnClick(btns, filter, loading, table) {\n  for (let i = 0; i < btns.length; i = i + 1) {\n    btns[i].addEventListener(\"click\", function (event) {\n      let btnId = event.target.id;\n      if (btnId.includes(\"class\")) {\n        (0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`./class.json`, btnId, table);\n      } else {\n        (0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`./quiz.json`, btnId, table);\n      }\n\n      waitLoading(loading);\n      let current = filter.getElementsByClassName(\"active\");\n      current[0].className = current[0].className.replace(\" active\", \"\");\n      this.className += \" active\";\n    });\n  }\n}\n\nwaitLoading($class_loading);\nwaitLoading($quiz_loading);\nsetTimeout((handler) => {\n  (0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`./class.json`, $classBtns[0], $classTable);\n  (0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.fetchData)(`./quiz.json`, $quizBtns[0], $quizTable);\n  // loading.style.display = \"none\";\n}, 500);\n\nbtnClick($classBtns, $classFilter, $class_loading, $classTable); //버튼들을 라디오 버튼화 및 데이터 셋할 수 있도록..\nbtnClick($quizBtns, $quizFilter, $quiz_loading, $quizTable);\n\nfunction waitLoading(loading) {\n  loading.style.display = \"block\";\n  setTimeout((handler) => {\n    loading.style.display = \"none\";\n  }, 500);\n}\n\n\n//# sourceURL=webpack://start-fe_final-exam/./src/app.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setClassData\": () => (/* binding */ setClassData),\n/* harmony export */   \"setQuizData\": () => (/* binding */ setQuizData)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nfunction setClassData(classData, btnId, table) {\n  let str = \"\";\n\n  switch (btnId) {\n    case \"class_help\": {\n      str = (0,_render__WEBPACK_IMPORTED_MODULE_0__.classBaseForm)(classData, str, \"class_help\");\n      break;\n    }\n    case \"class_git\": {\n      str = (0,_render__WEBPACK_IMPORTED_MODULE_0__.classBaseForm)(classData, str, \"class_git\");\n      break;\n    }\n    case \"class_recent\": {\n      classData.sort().reverse();\n      str = (0,_render__WEBPACK_IMPORTED_MODULE_0__.classBaseForm)(classData, str, \"class_recent\");\n      break;\n    }\n    case \"class_all\": {\n      str = (0,_render__WEBPACK_IMPORTED_MODULE_0__.classBaseForm)(classData, str, \"\");\n      break;\n    }\n    default: {\n      str = (0,_render__WEBPACK_IMPORTED_MODULE_0__.classBaseForm)(classData, str, \"\");\n      break;\n    }\n  }\n  table.innerHTML = str;\n}\nfunction setQuizData(quizData, btnId, table) {\n  let str = \"\";\n  let isGit = false;\n  switch (btnId) {\n    case \"quiz_all\":\n      isGit = false;\n      break;\n\n    case \"quiz_git\":\n      isGit = true;\n      break;\n\n    default:\n      isGit = false;\n\n      break;\n  }\n  str = (0,_render__WEBPACK_IMPORTED_MODULE_0__.quizBaseForm)(quizData, str, isGit);\n  table.innerHTML = str;\n}\n\n\n\n\n//# sourceURL=webpack://start-fe_final-exam/./src/filter.js?");

/***/ }),

/***/ "./src/getJSON.js":
/*!************************!*\
  !*** ./src/getJSON.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\n\nfunction fetchData(url, btnId, table) {\n  fetch(url)\n    .then(function (response) {\n      return response.json();\n    })\n    .then(function (data) {\n      if (url.includes(\"class\")) {\n        (0,_filter__WEBPACK_IMPORTED_MODULE_0__.setClassData)(data, btnId, table);\n      } else {\n        (0,_filter__WEBPACK_IMPORTED_MODULE_0__.setQuizData)(data, btnId, table);\n      }\n    });\n}\n\n\n\n\n//# sourceURL=webpack://start-fe_final-exam/./src/getJSON.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"classBaseForm\": () => (/* binding */ classBaseForm),\n/* harmony export */   \"quizBaseForm\": () => (/* binding */ quizBaseForm)\n/* harmony export */ });\nfunction classBaseForm(classData, str, idx) {\n  for (let i = 0; i < classData.length; i = i + 1) {\n    let links = \"\";\n    for (let j = 0; j < classData[i][\"links\"].length; j = j + 1) {\n      links += `<a href=\"${classData[i][\"links\"][j]}\"\n        class=\"badge bg-secondary\">${j + 1}</a>\n        &nbsp;`;\n    }\n    if (idx == \"class_git\" && classData[i][\"gitUrl\"] === \"\") {\n    } else if (idx == \"class_help\" && classData[i][\"links\"].length === 0) {\n    } else {\n      str += `\n        <tr>\n          <th scope=\"row\">${\n            idx == \"class_recent\" ? classData.length - i : i + 1\n          }</th>\n          <td>${classData[i][\"title\"]}</td>\n          <td><a href=\"${\n            classData[i][\"docUrl\"]\n          }\" class=\"badge bg-secondary\">문서</a></td>\n          <td> ${links}</td>\n          <td>${classData[i][\"date\"]}</td>\n          <td><a href=\"${classData[i][\"gitUrl\"]}\">\n          ${classData[i].gitUrl ? \"git\" : \"\"}</a></td>\n        </tr>\n      `;\n    }\n  }\n  return str;\n}\nfunction quizBaseForm(quizData, str, flag) {\n  for (let i = 0; i < quizData.length; i = i + 1) {\n    if (flag && quizData[i][\"gitUrl\"] === \"\") {\n    } else {\n      str += `\n        <tr>\n          <td>${quizData[i][\"title\"]}</td>\n          <td><a class=\"badge bg-secondary\"href=\"${\n            quizData[i].docUrl\n          }\">문서</a></td>\n          <td><a href=\"${quizData[i][\"previewUrl\"]}\">보기</a></td>\n          <td><a href=\"${quizData[i][\"gitUrl\"]}\">${\n        quizData[i].gitUrl ? \"git\" : \"\"\n      }</a></td>\n        </tr>\n      `;\n    }\n  }\n  return str;\n}\n\n\n\n\n//# sourceURL=webpack://start-fe_final-exam/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;