"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/index.js\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"./node_modules/@tanstack/react-query-devtools/build/modern/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst client = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n    defaultOptions: {\n        queries: {\n            retry: false,\n            gcTime: 60 * 60 * 1000,\n            staleTime: 90 * 60 * 1000\n        }\n    }\n});\nasync function fetchTodos() {\n    console.info(\"FETCH TODOS\");\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/data\");\n    return res.data;\n}\nconst todoListOptions = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.queryOptions)({\n    queryKey: [\n        \"todos\",\n        {\n            number1: 1,\n            number2: 2,\n            string1: \"test\"\n        }\n    ],\n    queryFn: fetchTodos\n});\nfunction Example() {\n    _s();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();\n    const [text, setText] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\");\n    const { isFetching, ...queryInfo } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useSuspenseQuery)(todoListOptions);\n    const addTodoMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({\n        mutationFn: (newTodo)=>axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/data\", {\n                text: newTodo\n            }),\n        // When mutate is called:\n        onMutate: async (newTodo)=>{\n            setText(\"\");\n            // Cancel any outgoing refetches\n            // (so they don't overwrite our optimistic update)\n            await queryClient.cancelQueries(todoListOptions);\n            // Snapshot the previous value\n            const previousTodos = queryClient.getQueryData(todoListOptions.queryKey);\n            // Optimistically update to the new value\n            if (previousTodos) {\n                queryClient.setQueryData(todoListOptions.queryKey, {\n                    ...previousTodos,\n                    items: [\n                        ...previousTodos.items,\n                        {\n                            id: Math.random().toString(),\n                            text: newTodo\n                        }\n                    ]\n                });\n            }\n            return {\n                previousTodos\n            };\n        },\n        // If the mutation fails,\n        // use the context returned from onMutate to roll back\n        onError: (err, variables, context)=>{\n            if (context === null || context === void 0 ? void 0 : context.previousTodos) {\n                queryClient.setQueryData([\n                    \"todos\"\n                ], context.previousTodos);\n            }\n        },\n        // Always refetch after error or success:\n        onSettled: ()=>{\n        //queryClient.invalidateQueries({ queryKey: [\"todos\"] });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"In this example, new items can be created using a mutation. The new item will be optimistically added to the list in hopes that the server accepts the item. If it does, the list is refetched with the true items from the list. Every now and then, the mutation may fail though. When that happens, the previous list of items is restored and the list is again refetched from the server.\"\n            }, void 0, false, {\n                fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    addTodoMutation.mutate(text);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: (event)=>setText(event.target.value),\n                        value: text\n                    }, void 0, false, {\n                        fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: addTodoMutation.isPending,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            queryInfo.isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Updated At: \",\n                            new Date(queryInfo.data.ts).toLocaleTimeString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: queryInfo.data.items.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: todo.text\n                            }, todo.id, false, {\n                                fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    isFetching && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Updating in background...\"\n                    }, void 0, false, {\n                        fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true),\n            queryInfo.isLoading && \"Loading\",\n            queryInfo.error instanceof Error && queryInfo.error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Example, \"v8pF3n5/Nhb1EDhNGGL04Rt5yeY=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useSuspenseQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation\n    ];\n});\n_c = Example;\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: client,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Example, {}, void 0, false, {\n                fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__.ReactQueryDevtools, {\n                initialIsOpen: true\n            }, void 0, false, {\n                fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/home/mrwwalmsley/workspace/src/pages/index.tsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, this);\n}\n_c1 = App;\nvar _c, _c1;\n$RefreshReg$(_c, \"Example\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW5CK0MsS0FBS2hDLEVBQUU7Ozs7Ozs7Ozs7b0JBR25CWiw0QkFBYyw4REFBQ3FCO2tDQUFJOzs7Ozs7OztZQUd2QnBCLFVBQVU2QyxTQUFTLElBQUk7WUFDdkI3QyxVQUFVOEMsS0FBSyxZQUFZQyxTQUFTL0MsVUFBVThDLEtBQUssQ0FBQ0UsT0FBTzs7Ozs7OztBQUdsRTtHQXJGU3REOztRQUNhdkIsaUVBQWNBO1FBRUdELG1FQUFnQkE7UUFFN0JFLDhEQUFXQTs7O0tBTDVCc0I7QUF1Rk0sU0FBU3VEO0lBQ3RCLHFCQUNFLDhEQUFDM0Usc0VBQW1CQTtRQUFDRSxRQUFRQTs7MEJBQzNCLDhEQUFDa0I7Ozs7OzBCQUNELDhEQUFDbkIsOEVBQWtCQTtnQkFBQzJFLGFBQWE7Ozs7Ozs7Ozs7OztBQUd2QztNQVB3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQge1xuICBxdWVyeU9wdGlvbnMsXG4gIHVzZVN1c3BlbnNlUXVlcnksXG4gIHVzZVF1ZXJ5Q2xpZW50LFxuICB1c2VNdXRhdGlvbixcbiAgUXVlcnlDbGllbnQsXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXG59IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHNcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICByZXRyeTogZmFsc2UsXG4gICAgICBnY1RpbWU6IDYwICogNjAgKiAxMDAwLFxuICAgICAgc3RhbGVUaW1lOiA5MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICB9LFxufSk7XG5cbnR5cGUgVG9kb3MgPSB7XG4gIGl0ZW1zOiByZWFkb25seSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gIH1bXTtcbiAgdHM6IG51bWJlcjtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoVG9kb3MoKTogUHJvbWlzZTxUb2Rvcz4ge1xuICBjb25zb2xlLmluZm8oXCJGRVRDSCBUT0RPU1wiKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9kYXRhXCIpO1xuICByZXR1cm4gcmVzLmRhdGE7XG59XG5cbmNvbnN0IHRvZG9MaXN0T3B0aW9ucyA9IHF1ZXJ5T3B0aW9ucyh7XG4gIHF1ZXJ5S2V5OiBbXCJ0b2Rvc1wiLCB7IG51bWJlcjE6IDEsIG51bWJlcjI6IDIsIHN0cmluZzE6IFwidGVzdFwiIH1dLFxuICBxdWVyeUZuOiBmZXRjaFRvZG9zLFxufSk7XG5cbmZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgaXNGZXRjaGluZywgLi4ucXVlcnlJbmZvIH0gPSB1c2VTdXNwZW5zZVF1ZXJ5KHRvZG9MaXN0T3B0aW9ucyk7XG5cbiAgY29uc3QgYWRkVG9kb011dGF0aW9uID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IChuZXdUb2RvKSA9PiBheGlvcy5wb3N0KFwiL2FwaS9kYXRhXCIsIHsgdGV4dDogbmV3VG9kbyB9KSxcbiAgICAvLyBXaGVuIG11dGF0ZSBpcyBjYWxsZWQ6XG4gICAgb25NdXRhdGU6IGFzeW5jIChuZXdUb2RvOiBzdHJpbmcpID0+IHtcbiAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICAvLyBDYW5jZWwgYW55IG91dGdvaW5nIHJlZmV0Y2hlc1xuICAgICAgLy8gKHNvIHRoZXkgZG9uJ3Qgb3ZlcndyaXRlIG91ciBvcHRpbWlzdGljIHVwZGF0ZSlcbiAgICAgIGF3YWl0IHF1ZXJ5Q2xpZW50LmNhbmNlbFF1ZXJpZXModG9kb0xpc3RPcHRpb25zKTtcblxuICAgICAgLy8gU25hcHNob3QgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICBjb25zdCBwcmV2aW91c1RvZG9zID0gcXVlcnlDbGllbnQuZ2V0UXVlcnlEYXRhKHRvZG9MaXN0T3B0aW9ucy5xdWVyeUtleSk7XG5cbiAgICAgIC8vIE9wdGltaXN0aWNhbGx5IHVwZGF0ZSB0byB0aGUgbmV3IHZhbHVlXG4gICAgICBpZiAocHJldmlvdXNUb2Rvcykge1xuICAgICAgICBxdWVyeUNsaWVudC5zZXRRdWVyeURhdGEodG9kb0xpc3RPcHRpb25zLnF1ZXJ5S2V5LCB7XG4gICAgICAgICAgLi4ucHJldmlvdXNUb2RvcyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgLi4ucHJldmlvdXNUb2Rvcy5pdGVtcyxcbiAgICAgICAgICAgIHsgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSwgdGV4dDogbmV3VG9kbyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBwcmV2aW91c1RvZG9zIH07XG4gICAgfSxcbiAgICAvLyBJZiB0aGUgbXV0YXRpb24gZmFpbHMsXG4gICAgLy8gdXNlIHRoZSBjb250ZXh0IHJldHVybmVkIGZyb20gb25NdXRhdGUgdG8gcm9sbCBiYWNrXG4gICAgb25FcnJvcjogKGVyciwgdmFyaWFibGVzLCBjb250ZXh0KSA9PiB7XG4gICAgICBpZiAoY29udGV4dD8ucHJldmlvdXNUb2Rvcykge1xuICAgICAgICBxdWVyeUNsaWVudC5zZXRRdWVyeURhdGE8VG9kb3M+KFtcInRvZG9zXCJdLCBjb250ZXh0LnByZXZpb3VzVG9kb3MpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gQWx3YXlzIHJlZmV0Y2ggYWZ0ZXIgZXJyb3Igb3Igc3VjY2VzczpcbiAgICBvblNldHRsZWQ6ICgpID0+IHtcbiAgICAgIC8vcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoeyBxdWVyeUtleTogW1widG9kb3NcIl0gfSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIEluIHRoaXMgZXhhbXBsZSwgbmV3IGl0ZW1zIGNhbiBiZSBjcmVhdGVkIHVzaW5nIGEgbXV0YXRpb24uIFRoZSBuZXcgaXRlbVxuICAgICAgICB3aWxsIGJlIG9wdGltaXN0aWNhbGx5IGFkZGVkIHRvIHRoZSBsaXN0IGluIGhvcGVzIHRoYXQgdGhlIHNlcnZlclxuICAgICAgICBhY2NlcHRzIHRoZSBpdGVtLiBJZiBpdCBkb2VzLCB0aGUgbGlzdCBpcyByZWZldGNoZWQgd2l0aCB0aGUgdHJ1ZSBpdGVtc1xuICAgICAgICBmcm9tIHRoZSBsaXN0LiBFdmVyeSBub3cgYW5kIHRoZW4sIHRoZSBtdXRhdGlvbiBtYXkgZmFpbCB0aG91Z2guIFdoZW5cbiAgICAgICAgdGhhdCBoYXBwZW5zLCB0aGUgcHJldmlvdXMgbGlzdCBvZiBpdGVtcyBpcyByZXN0b3JlZCBhbmQgdGhlIGxpc3QgaXNcbiAgICAgICAgYWdhaW4gcmVmZXRjaGVkIGZyb20gdGhlIHNlcnZlci5cbiAgICAgIDwvcD5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBhZGRUb2RvTXV0YXRpb24ubXV0YXRlKHRleHQpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VGV4dChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXthZGRUb2RvTXV0YXRpb24uaXNQZW5kaW5nfT5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxiciAvPlxuICAgICAge3F1ZXJ5SW5mby5pc1N1Y2Nlc3MgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogVGhlIHR5cGUgb2YgcXVlcnlJbmZvLmRhdGEgd2lsbCBiZSBuYXJyb3dlZCBiZWNhdXNlIHdlIGNoZWNrIGZvciBpc1N1Y2Nlc3MgZmlyc3QgKi99XG4gICAgICAgICAgICBVcGRhdGVkIEF0OiB7bmV3IERhdGUocXVlcnlJbmZvLmRhdGEudHMpLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtxdWVyeUluZm8uZGF0YS5pdGVtcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+e3RvZG8udGV4dH08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7aXNGZXRjaGluZyAmJiA8ZGl2PlVwZGF0aW5nIGluIGJhY2tncm91bmQuLi48L2Rpdj59XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtxdWVyeUluZm8uaXNMb2FkaW5nICYmIFwiTG9hZGluZ1wifVxuICAgICAge3F1ZXJ5SW5mby5lcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIHF1ZXJ5SW5mby5lcnJvci5tZXNzYWdlfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPEV4YW1wbGUgLz5cbiAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3BlbiAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwicXVlcnlPcHRpb25zIiwidXNlU3VzcGVuc2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlTXV0YXRpb24iLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJjbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZXRyeSIsImdjVGltZSIsInN0YWxlVGltZSIsImZldGNoVG9kb3MiLCJjb25zb2xlIiwiaW5mbyIsInJlcyIsImdldCIsImRhdGEiLCJ0b2RvTGlzdE9wdGlvbnMiLCJxdWVyeUtleSIsIm51bWJlcjEiLCJudW1iZXIyIiwic3RyaW5nMSIsInF1ZXJ5Rm4iLCJFeGFtcGxlIiwicXVlcnlDbGllbnQiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwiaXNGZXRjaGluZyIsInF1ZXJ5SW5mbyIsImFkZFRvZG9NdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJuZXdUb2RvIiwicG9zdCIsIm9uTXV0YXRlIiwiY2FuY2VsUXVlcmllcyIsInByZXZpb3VzVG9kb3MiLCJnZXRRdWVyeURhdGEiLCJzZXRRdWVyeURhdGEiLCJpdGVtcyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwib25FcnJvciIsImVyciIsInZhcmlhYmxlcyIsImNvbnRleHQiLCJvblNldHRsZWQiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibXV0YXRlIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJpc1BlbmRpbmciLCJiciIsImlzU3VjY2VzcyIsIkRhdGUiLCJ0cyIsInRvTG9jYWxlVGltZVN0cmluZyIsInVsIiwibWFwIiwidG9kbyIsImxpIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJBcHAiLCJpbml0aWFsSXNPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});