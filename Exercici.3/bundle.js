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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/product */ \"./src/modulos/product.js\");\n\n\nsave.addEventListener(\"click\", function (e) {\n  var registreForm = formulari;\n  var inputName = registreForm.elements.Name.value;\n  var inputPrice = registreForm.elements.Price.value;\n  var inputYear = registreForm.elements.Year.value;\n  var producte = new _modulos_product__WEBPACK_IMPORTED_MODULE_0__.Product(inputName, inputPrice, inputYear);\n  producte.repetido();\n\n  if (Name.value == \"\" && Price.value == \"\" && Year.value == \"\") {\n    producte.alert();\n  } else if (_modulos_product__WEBPACK_IMPORTED_MODULE_0__.productos.includes(Name.value)) {\n    producte.alert();\n  } else {\n    console.log(producte.mostrarConsola());\n    producte.mostrarTabla(tabla);\n    producte.eliminarFila();\n    producte.alert();\n  }\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modulos/product.js":
/*!********************************!*\
  !*** ./src/modulos/product.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productos\": () => (/* binding */ productos),\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar productos = new Array();\nvar Product = /*#__PURE__*/function () {\n  function Product(name, price, year) {\n    _classCallCheck(this, Product);\n\n    this.name = name, this.price = price, this.year = year;\n  }\n\n  _createClass(Product, [{\n    key: \"repetido\",\n    value: function repetido() {\n      productos.length = 0;\n      var cells = document.querySelectorAll('td:nth-child(2)');\n      cells.forEach(function (cell) {\n        productos.push(cell.innerHTML);\n      });\n      console.log(productos.includes(Name.value));\n    }\n  }, {\n    key: \"mostrarConsola\",\n    value: function mostrarConsola() {\n      return \"\\n            Name: \".concat(this.name, \"\\n            Price: \").concat(this.price, \"\\n            Year: \").concat(this.year, \"\\n            \");\n    }\n  }, {\n    key: \"mostrarTabla\",\n    value: function mostrarTabla(tabla) {\n      tabla.innerHTML += \"<tr> <td> <b> Product Name:  </b> </td> <td>\".concat(this.name, \" </td>\\n                                    <td> <b> Product Price: </b> </td> <td>\").concat(this.price, \"</td>\\n                                    <td> <b> Product Year:  </b> </td> <td>\").concat(this.year, \" </td>\\n                                    <td> <button id=\\\"delete\\\" type=\\\"button\\\" class=\\\"btn btn-danger btn-sm rounded-pill\\\"> Delete </button> </td> </tr> \");\n    }\n  }, {\n    key: \"eliminarFila\",\n    value: function eliminarFila() {\n      tabla.addEventListener(\"click\", function (e) {\n        if (e.target.id == \"delete\") {\n          e.target.parentNode.parentNode.remove();\n        }\n      });\n    }\n  }, {\n    key: \"alert\",\n    value: function alert() {\n      function alertas(color, texto) {\n        $(\"#alerta\").removeClass('d-none');\n        $(\"#alerta\").addClass(color);\n        setTimeout(function () {\n          $(\"#alerta\").addClass('d-none');\n          $(\"#alerta\").removeClass(color);\n        }, 2000);\n        $(\"#alerta\").text(texto);\n      }\n\n      var message = {\n        error: \"Complete fields please\",\n        exists: \"Product already exists\",\n        add: \"Product Added Succesfully\",\n        remove: \"Product Deleted Succesfully\"\n      };\n      contenedor.addEventListener(\"click\", function (e) {\n        if (e.target.id == \"save\" && Name.value == \"\" && Price.value == \"\" && Year.value == \"\") {\n          alertas('alert-danger', message.error);\n        }\n\n        if (e.target.id == \"save\" && productos.includes(Name.value)) {\n          alertas('alert-danger', message.exists);\n        }\n\n        if (e.target.id == \"save\" && Name.value != \"\" && Price.value != \"\" && Year.value != \"\" && !productos.includes(Name.value)) {\n          alertas('alert-success', message.add);\n        }\n\n        if (e.target.id == \"delete\") {\n          alertas('alert-danger', message.remove);\n        }\n      });\n    }\n  }]);\n\n  return Product;\n}();\n\n//# sourceURL=webpack:///./src/modulos/product.js?");

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