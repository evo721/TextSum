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
exports.id = "pages/api/summarize";
exports.ids = ["pages/api/summarize"];
exports.modules = {

/***/ "langchain/chains":
/*!***********************************!*\
  !*** external "langchain/chains" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ "langchain/llms/openai":
/*!****************************************!*\
  !*** external "langchain/llms/openai" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("langchain/llms/openai");;

/***/ }),

/***/ "langchain/text_splitter":
/*!******************************************!*\
  !*** external "langchain/text_splitter" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("langchain/text_splitter");;

/***/ }),

/***/ "(api)/./pages/api/summarize.js":
/*!********************************!*\
  !*** ./pages/api/summarize.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/llms/openai */ \"langchain/llms/openai\");\n/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/chains */ \"langchain/chains\");\n/* harmony import */ var langchain_text_splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! langchain/text_splitter */ \"langchain/text_splitter\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_text_splitter__WEBPACK_IMPORTED_MODULE_2__]);\n([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__, langchain_text_splitter__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/api/summarize.js\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const text = req.body.text;\n            const model = new langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n                openAIApiKey: process.env.OPENAI_API_KEY,\n                temperature: 0\n            });\n            const textSplitter = new langchain_text_splitter__WEBPACK_IMPORTED_MODULE_2__.RecursiveCharacterTextSplitter({\n                chunkSize: 1000\n            });\n            const docs = await textSplitter.createDocuments([\n                text\n            ]);\n            const chain = (0,langchain_chains__WEBPACK_IMPORTED_MODULE_1__.loadSummarizationChain)(model);\n            const response = await chain.call({\n                input_documents: docs\n            });\n            res.status(200).json({\n                summary: response.text\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: error.message\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Invalid request method\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VtbWFyaXplLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFBeUI7QUFFc0I7QUFDVztBQUNlO0FBRTFELGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxPQUFPSCxJQUFJSSxJQUFJLENBQUNELElBQUk7WUFDMUIsTUFBTUUsUUFBUSxJQUFJVCx5REFBTUEsQ0FBQztnQkFBQ1UsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO2dCQUFFQyxhQUFhO1lBQUM7WUFDbEYsTUFBTUMsZUFBZSxJQUFJYixtRkFBOEJBLENBQUM7Z0JBQUVjLFdBQVc7WUFBSztZQUMxRSxNQUFNQyxPQUFPLE1BQU1GLGFBQWFHLGVBQWUsQ0FBQztnQkFBQ1g7YUFBSztZQUV0RCxNQUFNWSxRQUFRbEIsd0VBQXNCQSxDQUFDUTtZQUNyQyxNQUFNVyxXQUFXLE1BQU1ELE1BQU1FLElBQUksQ0FBQztnQkFDaENDLGlCQUFpQkw7WUFDbkI7WUFFQVosSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVNMLFNBQVNiLElBQUk7WUFBQztRQUNoRCxFQUFFLE9BQU9tQixPQUFPO1lBQ2RyQixJQUFJa0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsT0FBT0EsTUFBTUMsT0FBTztZQUFDO1FBQzlDO0lBQ0YsT0FBTztRQUNMdEIsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF5QjtJQUN6RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zdW1tYXJpemUuanM/NzRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvc3VtbWFyaXplLmpzXG5cbmltcG9ydCB7IE9wZW5BSSB9IGZyb20gXCJsYW5nY2hhaW4vbGxtcy9vcGVuYWlcIjtcbmltcG9ydCB7IGxvYWRTdW1tYXJpemF0aW9uQ2hhaW4gfSBmcm9tIFwibGFuZ2NoYWluL2NoYWluc1wiO1xuaW1wb3J0IHsgUmVjdXJzaXZlQ2hhcmFjdGVyVGV4dFNwbGl0dGVyIH0gZnJvbSBcImxhbmdjaGFpbi90ZXh0X3NwbGl0dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRleHQgPSByZXEuYm9keS50ZXh0O1xuICAgICAgY29uc3QgbW9kZWwgPSBuZXcgT3BlbkFJKHtvcGVuQUlBcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLCB0ZW1wZXJhdHVyZTogMH0pO1xuICAgICAgY29uc3QgdGV4dFNwbGl0dGVyID0gbmV3IFJlY3Vyc2l2ZUNoYXJhY3RlclRleHRTcGxpdHRlcih7IGNodW5rU2l6ZTogMTAwMCB9KTtcbiAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCB0ZXh0U3BsaXR0ZXIuY3JlYXRlRG9jdW1lbnRzKFt0ZXh0XSk7XG5cbiAgICAgIGNvbnN0IGNoYWluID0gbG9hZFN1bW1hcml6YXRpb25DaGFpbihtb2RlbCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNoYWluLmNhbGwoe1xuICAgICAgICBpbnB1dF9kb2N1bWVudHM6IGRvY3MsXG4gICAgICB9KTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdW1tYXJ5OiByZXNwb25zZS50ZXh0IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIkludmFsaWQgcmVxdWVzdCBtZXRob2RcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9wZW5BSSIsImxvYWRTdW1tYXJpemF0aW9uQ2hhaW4iLCJSZWN1cnNpdmVDaGFyYWN0ZXJUZXh0U3BsaXR0ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidGV4dCIsImJvZHkiLCJtb2RlbCIsIm9wZW5BSUFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsInRlbXBlcmF0dXJlIiwidGV4dFNwbGl0dGVyIiwiY2h1bmtTaXplIiwiZG9jcyIsImNyZWF0ZURvY3VtZW50cyIsImNoYWluIiwicmVzcG9uc2UiLCJjYWxsIiwiaW5wdXRfZG9jdW1lbnRzIiwic3RhdHVzIiwianNvbiIsInN1bW1hcnkiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/summarize.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/summarize.js"));
module.exports = __webpack_exports__;

})();