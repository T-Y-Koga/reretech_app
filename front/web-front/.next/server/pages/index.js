"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: todos , 1: setTodo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n            baseURL: 'http://localhost:8080'\n        });\n        try {\n            const response = await instance.get('/api/');\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n            const tododata = response === null || response === void 0 ? void 0 : response.data;\n            setTodo(tododata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hello world\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getAPIData,\n                children: \"click\"\n            }, void 0, false, {\n                fileName: \"/home/app/front/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            todos.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/home/app/front/src/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.body\n                        }, void 0, false, {\n                            fileName: \"/home/app/front/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/home/app/front/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/front/src/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1Y7QUFRNUMsaUVBQWdCLElBQU0sQ0FBQztJQUNuQixLQUFLLE1BQUVHLEtBQUssTUFBRUMsT0FBTyxNQUFJSCwrQ0FBUSxDQUFTLENBQUMsQ0FBQztJQUU1QyxLQUFLLENBQUNJLFVBQVUsYUFBZSxDQUFDO1FBQzVCLEdBQUcsQ0FBQ0MsUUFBUTtRQUVaQSxRQUFRLEdBQUdKLG1EQUFZLENBQUMsQ0FBQztZQUNyQk0sT0FBTyxFQUFFLENBQXVCO1FBQ3BDLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQztZQUNELEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0gsUUFBUSxDQUFDSSxHQUFHLENBQUMsQ0FBTztZQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUksSUFBSTtZQUMxQixLQUFLLENBQUNDLFFBQVEsR0FBR0wsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsUUFBUSxDQUFFSSxJQUFJO1lBQy9CVCxPQUFPLENBQUNVLFFBQVE7UUFDcEIsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7WUFDYkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUs7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLDZFQUNEQyxDQUFHOztZQUFDLENBRUQ7d0ZBQUNDLENBQU07Z0JBQUNDLE9BQU8sRUFBRWIsVUFBVTswQkFBRSxDQUFLOzs7Ozs7WUFDakNGLEtBQUssQ0FBQ2dCLEdBQUcsRUFBRUMsSUFBSSwrRUFDWEosQ0FBRzs7b0dBQ0NLLENBQUU7c0NBQUVELElBQUksQ0FBQ0UsS0FBSzs7Ozs7O29HQUNkQyxDQUFDO3NDQUFFSCxJQUFJLENBQUNJLElBQUk7Ozs7Ozs7bUJBRlBKLElBQUksQ0FBQ0ssRUFBRTs7Ozs7Ozs7Ozs7O0FBT2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJ1xuXG50eXBlIFRvZG8gPSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9dID0gdXNlU3RhdGU8VG9kb1tdPihbXSlcblxuICAgIGNvbnN0IGdldEFQSURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZVxuXG4gICAgICAgIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgICAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGluc3RhbmNlLmdldCgnL2FwaS8nKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgICAgICAgICBjb25zdCB0b2RvZGF0YSA9IHJlc3BvbnNlPy5kYXRhIGFzIFRvZG9bXVxuICAgICAgICAgICAgc2V0VG9kbyh0b2RvZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBoZWxsbyB3b3JsZFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRBUElEYXRhfT5jbGljazwvYnV0dG9uPlxuICAgICAgICAgICAge3RvZG9zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pIGFzIEZDIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInRvZG9zIiwic2V0VG9kbyIsImdldEFQSURhdGEiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG9kb2RhdGEiLCJlcnJvciIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwiaDEiLCJ0aXRsZSIsInAiLCJib2R5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();