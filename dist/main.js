/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\nnav {\n    background-color: rgb(219, 152, 202);\n    display: flex;\n    justify-content: space-between;\n}\n\n#addtodobtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projectsbtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projecttitle {\n    text-align: center;\n    align-self: center;\n}\n\n.checkmark {\n    background-color: rgb(236, 40, 138);\n    color: rgb(250, 250, 250);\n}\n\n.showtodotable {\n    border-collapse: collapse;\n    \n}\n\n.showtodotable2 {\n    border-collapse: collapse;\n}\n\ntd {\n    border: none;\n}\n\ntr td:last-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:first-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:nth-child(2) {\n    max-width: 98%;\n    padding: 0 5px;\n}\n\n.descriptionrow {\n    display: none;\n}\n\n.descriptionrowopen {\n    white-space: inherit;\n}\n\n.collapsible {\n    background-color: transparent;\n    border: transparent;\n}\n\n.collapsible:after {\n    content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n    font-size: 13px;\n    margin-left: 5px;\n  }\n  \n  .active:after {\n    content: \"\\2796\"; /* Unicode character for \"minus\" sign (-) */\n  }\n\n.priority1 {\n    background-color: rgb(222, 247, 253);\n    border: none;\n}\n\n.priority2 {\n    background-color: rgb(210, 246, 255);\n}\n\n.priority3 {\n    background-color: rgb(198, 244, 255);\n}\n\n.priority4 {\n    background-color: rgb(172, 238, 255);\n}\n\n.priority5 {\n    background-color: rgb(138, 232, 255);\n}\n\n#createtodo {\n    background-color: rgb(241, 213, 234);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#projectscontainer {\n    background-color: palevioletred;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n}\n\n/* For mobile phones: */\n@media only screen and (max-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 50px;\n    }\n    \n    #projectsbtn {\n        font-size: 1.5em;\n    }\n    \n    #projecttitle {\n        font-size: 1.2em;\n    }\n    \n    .checkmark {\n        width: 25px;\n        height: 25px;\n    }\n    \n    td {\n        padding: 5px 15px;\n    }\n    \n    #createtodo {\n        width: 80vw;\n        height: 60vh;\n        margin-left: 10vw;\n        margin-top: 10vh;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 5em;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 768px) {\n    /* For desktop: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 70px;\n        line-height: 20px;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 25%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 75%;\n    }\n  } ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;;AAE7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB,EAAE,0CAA0C;IAC7D,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,gBAAgB,EAAE,2CAA2C;EAC/D;;AAEF;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,4EAA4E;AAChF;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,QAAQ;AACZ;;AAEA,uBAAuB;AACvB;IACI,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,UAAU;IACd;IACA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF;;EAEA;IACE,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF;;EAEA;IACE,iBAAiB;IACjB;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,UAAU;IACd;EACF","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\nnav {\n    background-color: rgb(219, 152, 202);\n    display: flex;\n    justify-content: space-between;\n}\n\n#addtodobtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projectsbtn {\n    background-color: rgb(219, 129, 197);\n    border: transparent;\n    align-self: center;\n    height: 100%;\n    padding: 0 10px;\n}\n\n#projecttitle {\n    text-align: center;\n    align-self: center;\n}\n\n.checkmark {\n    background-color: rgb(236, 40, 138);\n    color: rgb(250, 250, 250);\n}\n\n.showtodotable {\n    border-collapse: collapse;\n    \n}\n\n.showtodotable2 {\n    border-collapse: collapse;\n}\n\ntd {\n    border: none;\n}\n\ntr td:last-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:first-child {\n    width: 1%;\n    white-space: nowrap;\n    padding: 0 5px;\n}\n\ntr td:nth-child(2) {\n    max-width: 98%;\n    padding: 0 5px;\n}\n\n.descriptionrow {\n    display: none;\n}\n\n.descriptionrowopen {\n    white-space: inherit;\n}\n\n.collapsible {\n    background-color: transparent;\n    border: transparent;\n}\n\n.collapsible:after {\n    content: '\\02795'; /* Unicode character for \"plus\" sign (+) */\n    font-size: 13px;\n    margin-left: 5px;\n  }\n  \n  .active:after {\n    content: \"\\2796\"; /* Unicode character for \"minus\" sign (-) */\n  }\n\n.priority1 {\n    background-color: rgb(222, 247, 253);\n    border: none;\n}\n\n.priority2 {\n    background-color: rgb(210, 246, 255);\n}\n\n.priority3 {\n    background-color: rgb(198, 244, 255);\n}\n\n.priority4 {\n    background-color: rgb(172, 238, 255);\n}\n\n.priority5 {\n    background-color: rgb(138, 232, 255);\n}\n\n#createtodo {\n    background-color: rgb(241, 213, 234);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#projectscontainer {\n    background-color: palevioletred;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n}\n\n/* For mobile phones: */\n@media only screen and (max-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 50px;\n    }\n    \n    #projectsbtn {\n        font-size: 1.5em;\n    }\n    \n    #projecttitle {\n        font-size: 1.2em;\n    }\n    \n    .checkmark {\n        width: 25px;\n        height: 25px;\n    }\n    \n    td {\n        padding: 5px 15px;\n    }\n    \n    #createtodo {\n        width: 80vw;\n        height: 60vh;\n        margin-left: 10vw;\n        margin-top: 10vh;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 600px) {\n    /* For tablets: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 5em;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 33%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 67%;\n    }\n  }\n  \n  @media only screen and (min-width: 768px) {\n    /* For desktop: */\n    nav {\n        width: 100vw;\n        height: 10vh;\n    }\n    \n    #createtodo {\n        width: 30vw;\n        height: 60vh;\n        margin-left: 35vw;\n        margin-top: 10vh;\n    }\n    \n    #addtodobtn {\n        font-size: 70px;\n        line-height: 20px;\n    }\n\n    #projectsbtn {\n        font-size: 2em;\n    }\n    \n    #projecttitle {\n        font-size: 2em;\n    }\n\n    #projectscontainer {\n        width: 25%;\n    }\n\n    .showtodotable {\n        width: 100%;\n    }\n    \n    .showtodotable2 {\n        width: 75%;\n    }\n  } "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domnewtodo.js":
/*!***************************!*\
  !*** ./src/domnewtodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoEvent": () => (/* binding */ toDoEvent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _newtodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newtodo */ "./src/newtodo.js");
/* harmony import */ var _domshowtodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domshowtodos */ "./src/domshowtodos.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");





const contentDiv = document.getElementById('content');
let formHere = 'no';

// create todo form
const domToDo = () => {
    const toDoForm = document.createElement('form');
    toDoForm.setAttribute('id', 'createtodo');
    const toDoTable = document.createElement('table');
    const titleRow = document.createElement('tr');
    const titleTd1 = document.createElement('td');
    const titleTd2 = document.createElement('td');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titlein');
    titleLabel.innerText = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titlein');
    titleInput.setAttribute('name', 'titlein');
    titleInput.setAttribute('type', 'text');
    const descriptionRow = document.createElement('tr');
    const descriptionTd1 = document.createElement('td');
    const descriptionTd2 = document.createElement('td');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'descriptionin');
    descriptionLabel.innerText = 'Description';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('id', 'descriptionin');
    descriptionInput.setAttribute('name', 'descriptionin');
    const dateRow = document.createElement('tr');
    const dateTd1 = document.createElement('td');
    const dateTd2 = document.createElement('td');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'datein');
    dateLabel.innerText = 'Due Date';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'datein');
    dateInput.setAttribute('type', 'date');
    const priorityRow = document.createElement('tr');
    const priorityTd1 = document.createElement('td');
    const priorityTd2 = document.createElement('td');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priorityin');
    priorityLabel.innerText = 'Priority';
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('id', 'priorityin');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('min', '1');
    priorityInput.setAttribute('max', '5');
    priorityInput.setAttribute('value', '1');
    const projectsInput = document.createElement('select');
    projectsInput.setAttribute('id', 'projectsin');
    _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      const selectOption = document.createElement('option');
      selectOption.setAttribute('value', `${_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getTitle}`);
      selectOption.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getTitle}`;

      if(___WEBPACK_IMPORTED_MODULE_3__.projectTitle.innerText == selectOption.innerText) {
        selectOption.selected = 'true';
      }

      projectsInput.appendChild(selectOption);
    }
    
    const submitInput = document.createElement('input');
    submitInput.setAttribute('id', 'submitin');
    submitInput.setAttribute('type', 'button');
    submitInput.setAttribute('value', 'submit');
    
    titleTd1.appendChild(titleLabel);
    titleTd2.appendChild(titleInput);
    titleRow.appendChild(titleTd1);
    titleRow.appendChild(titleTd2);
    descriptionTd1.appendChild(descriptionLabel);
    descriptionTd2.appendChild(descriptionInput);
    descriptionRow.appendChild(descriptionTd1);
    descriptionRow.appendChild(descriptionTd2);
    dateTd1.appendChild(dateLabel);
    dateTd2.appendChild(dateInput);
    dateRow.appendChild(dateTd1);
    dateRow.appendChild(dateTd2);
    priorityTd1.appendChild(priorityLabel);
    priorityTd2.appendChild(priorityInput);
    priorityRow.appendChild(priorityTd1);
    priorityRow.appendChild(priorityTd2);

    toDoTable.appendChild(titleRow);
    toDoTable.appendChild(descriptionRow);
    toDoTable.appendChild(dateRow);
    toDoTable.appendChild(priorityRow);
    toDoForm.appendChild(toDoTable);
    toDoForm.appendChild(projectsInput);
    toDoForm.appendChild(submitInput);
    contentDiv.appendChild(toDoForm);
}

// when to do button is clicked
const toDoEvent = () => {
  let newToDoForm = document.getElementById('createtodo');
  const projectsBanner = document.getElementById('projectscontainer');
  if(!contentDiv.contains(newToDoForm)) {
      domToDo();
      formHere = 'yes';
      submitToDo();

      if(projectsBanner == null) {
          console.log("no projecstfolder");
      } else {
          console.log("removing the projectsfolder");
          projectsBanner.innerHTML = "";
          ___WEBPACK_IMPORTED_MODULE_3__.toDoDiv.removeChild(projectsBanner);
      }
  } else {
      contentDiv.removeChild(newToDoForm);
      formHere = 'no';
  }
}

// submit the new todo
function submitToDo() {
  const submitBtn = document.getElementById('submitin');

  submitBtn.addEventListener('click' , () => {
      if(formHere == 'yes') {
      const titleText = document.getElementById('titlein');
      const descriptionText = document.getElementById('descriptionin');
      const dueDateText = document.getElementById('datein');
      const priorityText = document.getElementById('priorityin');
      const projectChoice = document.getElementById('projectsin').value;

      _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(pushToDo);

      function pushToDo(_project, index) {
          if(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].getTitle == projectChoice) {
              console.log("we have a match");
              console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].TheArray);
              _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[index].TheArray.push((0,_newtodo__WEBPACK_IMPORTED_MODULE_1__.toDoFactory)(titleText.value, descriptionText.value, dueDateText.value, priorityText.value));
              console.log(_projects__WEBPACK_IMPORTED_MODULE_0__.allProjects);
          }
      };

      contentDiv.removeChild(document.getElementById('createtodo'));
      formHere = 'no';
      (0,_domshowtodos__WEBPACK_IMPORTED_MODULE_2__.addToDoToList)(___WEBPACK_IMPORTED_MODULE_3__.currentProject);
      } else { return}
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domToDo);

/***/ }),

/***/ "./src/domshowprojects.js":
/*!********************************!*\
  !*** ./src/domshowprojects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "projectEvent": () => (/* binding */ projectEvent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _domshowtodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domshowtodos */ "./src/domshowtodos.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




// general variables
const projectsContainer = document.createElement('div');
projectsContainer.setAttribute('id', 'projectscontainer');

// showing the projects in the project folder + adding new projects
const showProjects = () => {
  const DivToDo = document.getElementById('tododiv');
  const addNewProject = document.createElement('h2');
  addNewProject.setAttribute('id', 'addnewproject');
  addNewProject.innerText = '+ New Project';
  projectsContainer.appendChild(addNewProject);

  _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.forEach(getProjectName);
    function getProjectName(_project, index) {
      const projectOption = document.createElement('h2');
      projectOption.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[index].getTitle}`;
      projectsContainer.appendChild(projectOption);
      projectOption.addEventListener('click', () => {
        const toDoTable = document.getElementById("showtdtab");
        let projectArray = _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[index].TheArray;
        if(toDoTable == null) {
          console.log('geen tabel');
        } else {
          DivToDo.removeChild(toDoTable);
          console.log('tabel weghalen');
        }
        (0,_domshowtodos__WEBPACK_IMPORTED_MODULE_1__.showToDos)(projectArray);
        ___WEBPACK_IMPORTED_MODULE_0__.projectTitle.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[index].getTitle}`;
      })
    }

    DivToDo.appendChild(projectsContainer);

    // creates input for new project
    addNewProject.addEventListener('click', () => {
      const inputNewProject = document.createElement('input');
      inputNewProject.setAttribute('type', 'text');
      inputNewProject.setAttribute('value', 'new project');
      inputNewProject.setAttribute('id', 'newprojectinput');
      projectsContainer.appendChild(inputNewProject);
      const btnNewProject = document.createElement('button');
      btnNewProject.setAttribute('id', 'newprojectbtn');
      btnNewProject.innerText = 'Go';
      projectsContainer.appendChild(btnNewProject);

      inputNewProject.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
         event.preventDefault();
         btnNewProject.click();
        }
      });

      // adds new project to list in project folder
      btnNewProject.addEventListener('click', () => {
        const newProjectTitle = inputNewProject.value;
        const newProjectTxt = document.createElement('h2');
        newProjectTxt.innerText = newProjectTitle;
        projectsContainer.appendChild(newProjectTxt);
        projectsContainer.removeChild(inputNewProject);
        projectsContainer.removeChild(btnNewProject);
        window[newProjectTitle] = [];
        
        _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.push((0,_projects__WEBPACK_IMPORTED_MODULE_2__.projectFactory)(newProjectTitle, window[newProjectTitle] = []));

        // open the new project
        newProjectTxt.addEventListener('click', () => {
          const toDoTable = document.getElementById("showtdtab");
          let projectArray = _projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.length - 1].TheArray;
          if(toDoTable == null) {
            console.log('geen tabel');
          } else {
            toDoTable.innerHTML = '';
            console.log('tabel weghalen');
          }
          // currentProject = projectArray;
          console.log(projectArray);
          (0,_domshowtodos__WEBPACK_IMPORTED_MODULE_1__.showToDos)(projectArray);
          ___WEBPACK_IMPORTED_MODULE_0__.projectTitle.innerText = `${_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects[_projects__WEBPACK_IMPORTED_MODULE_2__.allProjects.length - 1].getTitle}`;
        })
      })
    })
}

// clicking the projects button
const projectEvent = () => {
  const showToDoTable = document.getElementById('showtdtab');
  const formNewToDO = document.getElementById('createtodo');
  if(___WEBPACK_IMPORTED_MODULE_0__.toDoDiv.contains(projectsContainer)) {
    projectsContainer.innerHTML = "";
      ___WEBPACK_IMPORTED_MODULE_0__.toDoDiv.removeChild(projectsContainer);
      console.log("projects folder is there");
      if(!showToDoTable == null){
          showToDoTable.classList.add('showtodotable');
          showToDoTable.classList.remove('showtodotable2');
      }
  } else {
      showProjects();
      console.log("projectfolder is not there");
      console.log(formNewToDO);
      if(!showToDoTable == null){
          showToDoTable.classList.add('showtodotable2');
          showToDoTable.classList.remove('showtodotable');
      } else {
          console.log('no table');
      };

      if(formNewToDO == null) {
          console.log('form no');
          
      } else {
          console.log('yes form');
          ___WEBPACK_IMPORTED_MODULE_0__.contentDiv.removeChild(formNewToDO);
      };
      
  }
}

/***/ }),

/***/ "./src/domshowtodos.js":
/*!*****************************!*\
  !*** ./src/domshowtodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showToDos": () => (/* binding */ showToDos),
/* harmony export */   "addToDoToList": () => (/* binding */ addToDoToList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


// shows all to do items in a project
function showToDos (project) {
    //const tableToDo = document.getElementById('showtdtab');

    for (let i = 0; i < project.length; i++) {
        const tableRow = document.createElement('tr');
        const td1 = document.createElement('td');
        const checkToDo = document.createElement('input');
        checkToDo.setAttribute('type', 'checkbox');
        checkToDo.classList.add('checkmark');
        const td2 = document.createElement('td');
        const titleToDo = document.createElement('p');
        titleToDo.classList.add('todotitle');
        titleToDo.innerText = project[i].getTitle;
        const td3 = document.createElement('td');
        const dueDateToDo = document.createElement('p');
        dueDateToDo.innerText = project[i].getDueDate;
        const td5 = document.createElement('td');
        const collapseBtn = document.createElement('button');
        collapseBtn.classList.add('collapsible');
        const tableRow2 = document.createElement('tr');
        tableRow2.classList.add('descriptionrow');
        const td4 = document.createElement('td');
        td4.setAttribute('colspan', '3');
        const descriptionToDo = document.createElement('p');
        descriptionToDo.innerText = project[i].getDescription;
        const emptyTd = document.createElement('td');

        if(project[i].getPriority == 1) {
          tableRow.classList.add('priority1');
          tableRow2.classList.add('priority1');
        } else if(project[i].getPriority == 2) {
          tableRow.classList.add('priority2');
          tableRow2.classList.add('priority2');
        } else if(project[i].getPriority == 3) {
          tableRow.classList.add('priority3');
          tableRow2.classList.add('priority3');
        } else if(project[i].getPriority == 4) {
          tableRow.classList.add('priority4');
          tableRow2.classList.add('priority4');
        } else if(project[i].getPriority == 5) {
          tableRow.classList.add('priority5');
          tableRow2.classList.add('priority5');
        } else {
          tableRow.classList.add('priority1');
          tableRow2.classList.add('priority1');
        }
        
        td1.appendChild(checkToDo);
        td2.appendChild(titleToDo);
        td3.appendChild(dueDateToDo);
        td4.appendChild(descriptionToDo);
        td5.appendChild(collapseBtn);
        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(td3);
        tableRow.appendChild(td5);
        tableRow2.appendChild(emptyTd);
        tableRow2.appendChild(td4);
        ___WEBPACK_IMPORTED_MODULE_0__.tableToDo.appendChild(tableRow);
        ___WEBPACK_IMPORTED_MODULE_0__.tableToDo.appendChild(tableRow2);

    } 
      
      let coll = document.getElementsByClassName("collapsible");
      let i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.parentNode.parentNode.nextElementSibling;
          if (content.classList.contains("descriptionrowopen") ) {
            content.classList.add("descriptionrow");
            content.classList.remove("descriptionrowopen");
          } else {
            content.classList.add("descriptionrowopen");
            content.classList.remove("descriptionrow");
          }
        });
      }
}

// adds to do to current open to do
function addToDoToList (project) {
  const tableToDo = document.getElementById('showtdtab');
  const todoTitles = document.getElementsByClassName('todotitle');
  const tableTitlesArray = [];
  if(tableToDo.length > 0) {
    for (let i = 0; i < todoTitles.length; i++) {
      tableTitlesArray.push(todoTitles[i].innerHTML);
    }
    console.log("todoTitles:");
    console.log(todoTitles);
    console.log("todoTitlesArray:");
    console.log(tableTitlesArray); 
  }
   
  for (let i = project.length - 1; i < project.length; i++) {
    if(project[i].getTitle != tableTitlesArray[i]) {
      const tableRow = document.createElement('tr');
      const td1 = document.createElement('td');
      const checkToDo = document.createElement('input');
      checkToDo.setAttribute('type', 'checkbox');
      checkToDo.classList.add('checkmark');
      const td2 = document.createElement('td');
      const titleToDo = document.createElement('p');
      titleToDo.classList.add('todotitle');
      titleToDo.innerText = project[i].getTitle;
      const td3 = document.createElement('td');
      const dueDateToDo = document.createElement('p');
      dueDateToDo.innerText = project[i].getDueDate;
      const td5 = document.createElement('td');
      const collapseBtn = document.createElement('button');
      collapseBtn.classList.add('collapsible');
      const tableRow2 = document.createElement('tr');
      tableRow2.classList.add('descriptionrow');
      const td4 = document.createElement('td');
      td4.setAttribute('colspan', '3');
      const descriptionToDo = document.createElement('p');
      descriptionToDo.innerText = project[i].getDescription;
      const emptyTd = document.createElement('td');

      if(project[i].getPriority == 1) {
        tableRow.classList.add('priority1');
        tableRow2.classList.add('priority1');
      } else if(project[i].getPriority == 2) {
        tableRow.classList.add('priority2');
        tableRow2.classList.add('priority2');
      } else if(project[i].getPriority == 3) {
        tableRow.classList.add('priority3');
        tableRow2.classList.add('priority3');
      } else if(project[i].getPriority == 4) {
        tableRow.classList.add('priority4');
        tableRow2.classList.add('priority4');
      } else if(project[i].getPriority == 5) {
        tableRow.classList.add('priority5');
        tableRow2.classList.add('priority5');
      } else {
        tableRow.classList.add('priority1');
        tableRow2.classList.add('priority1');
      }
      
      td1.appendChild(checkToDo);
      td2.appendChild(titleToDo);
      td3.appendChild(dueDateToDo);
      td4.appendChild(descriptionToDo);
      td5.appendChild(collapseBtn);
      tableRow.appendChild(td1);
      tableRow.appendChild(td2);
      tableRow.appendChild(td3);
      tableRow.appendChild(td5);
      tableRow2.appendChild(emptyTd);
      tableRow2.appendChild(td4);
      tableToDo.appendChild(tableRow);
      tableToDo.appendChild(tableRow2);

     } 
  } 
    
    let coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.parentNode.parentNode.nextElementSibling;
        if (content.classList.contains("descriptionrowopen") ) {
          content.classList.add("descriptionrow");
          content.classList.remove("descriptionrowopen");
        } else {
          content.classList.add("descriptionrowopen");
          content.classList.remove("descriptionrow");
        }
      });
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "toDoDiv": () => (/* binding */ toDoDiv),
/* harmony export */   "projectTitle": () => (/* binding */ projectTitle),
/* harmony export */   "tableToDo": () => (/* binding */ tableToDo)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domnewtodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domnewtodo */ "./src/domnewtodo.js");
/* harmony import */ var _domshowprojects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domshowprojects */ "./src/domshowprojects.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





// general layout and variables

// currentProject holds which project is shown
let currentProject = _projects__WEBPACK_IMPORTED_MODULE_3__.generalProject;

const contentDiv = document.getElementById('content');

const navBar = document.createElement('nav');

const toDoDiv = document.createElement('div');
toDoDiv.setAttribute('id', 'tododiv');

const addToDoBtn = document.createElement('button');
addToDoBtn.innerText = '+';
addToDoBtn.setAttribute('id', 'addtodobtn');

const projectTitle = document.createElement('h1');
projectTitle.innerText = 'General Project';
projectTitle.setAttribute('id', 'projecttitle');

const projectsBtn = document.createElement('button');
projectsBtn.innerText = 'Projects';
projectsBtn.setAttribute('id', 'projectsbtn');

navBar.appendChild(addToDoBtn);
navBar.appendChild(projectTitle);
navBar.appendChild(projectsBtn);

contentDiv.appendChild(navBar);
contentDiv.appendChild(toDoDiv);

const tableToDo = document.createElement('table');
tableToDo.classList.add("showtodotable");
tableToDo.setAttribute('id', 'showtdtab');

toDoDiv.appendChild(tableToDo);

// eventlisteners

//add to do +
addToDoBtn.addEventListener('click', _domnewtodo__WEBPACK_IMPORTED_MODULE_1__.toDoEvent);

// show projects list
projectsBtn.addEventListener('click', _domshowprojects__WEBPACK_IMPORTED_MODULE_2__.projectEvent);





/***/ }),

/***/ "./src/newtodo.js":
/*!************************!*\
  !*** ./src/newtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoFactory": () => (/* binding */ toDoFactory)
/* harmony export */ });
const toDoFactory = (title, description, duedate, priority) => {
    const getTitle = title;
    const getDescription = description;
    const getDueDate = duedate;
    const getPriority = priority;
    let Checked = 'no';
    return {getTitle, getDescription, getDueDate, getPriority, Checked}
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "generalProject": () => (/* binding */ generalProject),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const generalProject = [];
const allProjects = [];

const projectFactory = (title, array) => {
    const getTitle = title;
    const TheArray = array;
    return {getTitle, TheArray}
}

const generalPrObject = projectFactory('General Project', generalProject);

allProjects.push(generalPrObject);



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21uZXd0b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbXNob3dwcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kb21zaG93dG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmV3dG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIseUJBQXlCLEdBQUcsU0FBUywyQ0FBMkMsb0JBQW9CLHFDQUFxQyxHQUFHLGlCQUFpQiwyQ0FBMkMsMEJBQTBCLHlCQUF5QixtQkFBbUIsc0JBQXNCLEdBQUcsa0JBQWtCLDJDQUEyQywwQkFBMEIseUJBQXlCLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIseUJBQXlCLHlCQUF5QixHQUFHLGdCQUFnQiwwQ0FBMEMsZ0NBQWdDLEdBQUcsb0JBQW9CLGdDQUFnQyxTQUFTLHFCQUFxQixnQ0FBZ0MsR0FBRyxRQUFRLG1CQUFtQixHQUFHLHNCQUFzQixnQkFBZ0IsMEJBQTBCLHFCQUFxQixHQUFHLHVCQUF1QixnQkFBZ0IsMEJBQTBCLHFCQUFxQixHQUFHLHdCQUF3QixxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyxrQkFBa0Isb0NBQW9DLDBCQUEwQixHQUFHLHdCQUF3Qix5QkFBeUIsb0VBQW9FLHVCQUF1QixLQUFLLHVCQUF1QiwwQkFBMEIsb0RBQW9ELGdCQUFnQiwyQ0FBMkMsbUJBQW1CLEdBQUcsZ0JBQWdCLDJDQUEyQyxHQUFHLGdCQUFnQiwyQ0FBMkMsR0FBRyxnQkFBZ0IsMkNBQTJDLEdBQUcsZ0JBQWdCLDJDQUEyQyxHQUFHLGlCQUFpQiwyQ0FBMkMsbUZBQW1GLEdBQUcsd0JBQXdCLHNDQUFzQyxtQkFBbUIseUJBQXlCLGVBQWUsZUFBZSxHQUFHLHlFQUF5RSxtQ0FBbUMsdUJBQXVCLHVCQUF1QixPQUFPLHlCQUF5QiwwQkFBMEIsT0FBTywwQkFBMEIsMkJBQTJCLE9BQU8sMkJBQTJCLDJCQUEyQixPQUFPLHdCQUF3QixzQkFBc0IsdUJBQXVCLE9BQU8sZ0JBQWdCLDRCQUE0QixPQUFPLHlCQUF5QixzQkFBc0IsdUJBQXVCLDRCQUE0QiwyQkFBMkIsT0FBTyw0QkFBNEIscUJBQXFCLE9BQU8sc0JBQXNCLHNCQUFzQixPQUFPLDZCQUE2QixxQkFBcUIsT0FBTyxLQUFLLG1EQUFtRCxtQ0FBbUMsdUJBQXVCLHVCQUF1QixPQUFPLHlCQUF5QixzQkFBc0IsdUJBQXVCLDRCQUE0QiwyQkFBMkIsT0FBTyx5QkFBeUIseUJBQXlCLE9BQU8sc0JBQXNCLHlCQUF5QixPQUFPLDJCQUEyQix5QkFBeUIsT0FBTyw0QkFBNEIscUJBQXFCLE9BQU8sd0JBQXdCLHNCQUFzQixPQUFPLDZCQUE2QixxQkFBcUIsT0FBTyxLQUFLLG1EQUFtRCxtQ0FBbUMsdUJBQXVCLHVCQUF1QixPQUFPLHlCQUF5QixzQkFBc0IsdUJBQXVCLDRCQUE0QiwyQkFBMkIsT0FBTyx5QkFBeUIsMEJBQTBCLDRCQUE0QixPQUFPLHNCQUFzQix5QkFBeUIsT0FBTywyQkFBMkIseUJBQXlCLE9BQU8sNEJBQTRCLHFCQUFxQixPQUFPLHdCQUF3QixzQkFBc0IsT0FBTyw2QkFBNkIscUJBQXFCLE9BQU8sS0FBSyxRQUFRLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxL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QTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTUyLCAyMDIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhZGR0b2RvYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTI5LCAxOTcpO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHNidG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAxMjksIDE5Nyk7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbiNwcm9qZWN0dGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDQwLCAxMzgpO1xcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4uc2hvd3RvZG90YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIFxcbn1cXG5cXG4uc2hvd3RvZG90YWJsZTIge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudHIgdGQ6bGFzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbnRyIHRkOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDElO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxudHIgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25yb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25yb3dvcGVuIHtcXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XFxufVxcblxcbi5jb2xsYXBzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29sbGFwc2libGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcXDAyNzk1JzsgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFxcXCJwbHVzXFxcIiBzaWduICgrKSAqL1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB9XFxuICBcXG4gIC5hY3RpdmU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI3OTZcXFwiOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXFxcIm1pbnVzXFxcIiBzaWduICgtKSAqL1xcbiAgfVxcblxcbi5wcmlvcml0eTEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyNDcsIDI1Myk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5MiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDI0NiwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5MyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDI0NCwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5NCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDIzOCwgMjU1KTtcXG59XFxuXFxuLnByaW9yaXR5NSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDIzMiwgMjU1KTtcXG59XFxuXFxuI2NyZWF0ZXRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMTMsIDIzNCk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbiNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMCU7XFxufVxcblxcbi8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLyogRm9yIHRhYmxldHM6ICovXFxuICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0dGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNoZWNrbWFyayB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgdGQge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNjcmVhdGV0b2RvIHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICB9XFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDY3JTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHRvZG9idG4ge1xcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMzMlO1xcbiAgICB9XFxuXFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDY3JTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIEZvciBkZXNrdG9wOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2FkZHRvZG9idG4ge1xcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgI3Byb2plY3RzYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2NvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5zaG93dG9kb3RhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc2hvd3RvZG90YWJsZTIge1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgfVxcbiAgfSBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQixFQUFFLDBDQUEwQztJQUM3RCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCLEVBQUUsMkNBQTJDO0VBQy9EOztBQUVGO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7QUFDWjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxpQkFBaUI7SUFDakI7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakI7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtFQUNGOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDE1MiwgMjAyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkdG9kb2J0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDEyOSwgMTk3KTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuXFxuI3Byb2plY3RzYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMTI5LCAxOTcpO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCA0MCwgMTM4KTtcXG4gICAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG59XFxuXFxuLnNob3d0b2RvdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBcXG59XFxuXFxuLnNob3d0b2RvdGFibGUyIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxudGQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRyIHRkOmxhc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG50ciB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbnRyIHRkOm50aC1jaGlsZCgyKSB7XFxuICAgIG1heC13aWR0aDogOTglO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9ucm93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9ucm93b3BlbiB7XFxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcbn1cXG5cXG4uY29sbGFwc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXFwwMjc5NSc7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBcXFwicGx1c1xcXCIgc2lnbiAoKykgKi9cXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgfVxcbiAgXFxuICAuYWN0aXZlOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNzk2XFxcIjsgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFxcXCJtaW51c1xcXCIgc2lnbiAoLSkgKi9cXG4gIH1cXG5cXG4ucHJpb3JpdHkxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMjQ3LCAyNTMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eTIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyNDYsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyNDQsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyMzgsIDI1NSk7XFxufVxcblxcbi5wcmlvcml0eTUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAyMzIsIDI1NSk7XFxufVxcblxcbiNjcmVhdGV0b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjEzLCAyMzQpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4jcHJvamVjdHNjb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAlO1xcbn1cXG5cXG4vKiBGb3IgbW9iaWxlIHBob25lczogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xcbiAgICBuYXYge1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB9XFxuICAgIFxcbiAgICAjYWRkdG9kb2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHJvamVjdHRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5jaGVja21hcmsge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIHRkIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAjY3JlYXRldG9kbyB7XFxuICAgICAgICB3aWR0aDogODB2dztcXG4gICAgICAgIGhlaWdodDogNjB2aDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAvKiBGb3IgdGFibGV0czogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDMzJTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA2NyU7XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBGb3IgZGVza3RvcDogKi9cXG4gICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgfVxcbiAgICBcXG4gICAgI2NyZWF0ZXRvZG8ge1xcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICBoZWlnaHQ6IDYwdmg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIH1cXG4gICAgXFxuICAgICNhZGR0b2RvYnRuIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICNwcm9qZWN0c2J0biB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3Byb2plY3R0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgfVxcblxcbiAgICAjcHJvamVjdHNjb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDI1JTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3RvZG90YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNob3d0b2RvdGFibGUyIHtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgIH1cXG4gIH0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFByb2plY3RzfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdG9Eb0ZhY3RvcnkgfSBmcm9tIFwiLi9uZXd0b2RvXCI7XG5pbXBvcnQgeyBhZGRUb0RvVG9MaXN0IH0gZnJvbSBcIi4vZG9tc2hvd3RvZG9zXCI7XG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgcHJvamVjdFRpdGxlLCB0b0RvRGl2IH0gZnJvbSBcIi5cIjtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5sZXQgZm9ybUhlcmUgPSAnbm8nO1xuXG4vLyBjcmVhdGUgdG9kbyBmb3JtXG5jb25zdCBkb21Ub0RvID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvRG9Gb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRldG9kbycpO1xuICAgIGNvbnN0IHRvRG9UYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgY29uc3QgdGl0bGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHRpdGxlVGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCB0aXRsZVRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZWluJyk7XG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGUnO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZWluJyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGVpbicpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uaW4nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uaW4nKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbmluJyk7XG4gICAgY29uc3QgZGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgZGF0ZVRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0ZVRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZWluJyk7XG4gICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSc7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlaW4nKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBjb25zdCBwcmlvcml0eVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgcHJpb3JpdHlUZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IHByaW9yaXR5VGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5aW4nKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5aW4nKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgJzUnKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMScpO1xuICAgIGNvbnN0IHByb2plY3RzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcm9qZWN0c0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNpbicpO1xuICAgIGFsbFByb2plY3RzLmZvckVhY2goZ2V0UHJvamVjdE5hbWUpO1xuICAgIGZ1bmN0aW9uIGdldFByb2plY3ROYW1lKF9wcm9qZWN0LCBpbmRleCkge1xuICAgICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBzZWxlY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke2FsbFByb2plY3RzW2luZGV4XS5nZXRUaXRsZX1gKTtcbiAgICAgIHNlbGVjdE9wdGlvbi5pbm5lclRleHQgPSBgJHthbGxQcm9qZWN0c1tpbmRleF0uZ2V0VGl0bGV9YDtcblxuICAgICAgaWYocHJvamVjdFRpdGxlLmlubmVyVGV4dCA9PSBzZWxlY3RPcHRpb24uaW5uZXJUZXh0KSB7XG4gICAgICAgIHNlbGVjdE9wdGlvbi5zZWxlY3RlZCA9ICd0cnVlJztcbiAgICAgIH1cblxuICAgICAgcHJvamVjdHNJbnB1dC5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb24pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRpbicpO1xuICAgIHN1Ym1pdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBzdWJtaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3N1Ym1pdCcpO1xuICAgIFxuICAgIHRpdGxlVGQxLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlVGQyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlVGQxKTtcbiAgICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZVRkMik7XG4gICAgZGVzY3JpcHRpb25UZDEuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25UZDIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZGVzY3JpcHRpb25Sb3cuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZDEpO1xuICAgIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGQyKTtcbiAgICBkYXRlVGQxLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZVRkMi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGRhdGVSb3cuYXBwZW5kQ2hpbGQoZGF0ZVRkMSk7XG4gICAgZGF0ZVJvdy5hcHBlbmRDaGlsZChkYXRlVGQyKTtcbiAgICBwcmlvcml0eVRkMS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBwcmlvcml0eVRkMi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBwcmlvcml0eVJvdy5hcHBlbmRDaGlsZChwcmlvcml0eVRkMSk7XG4gICAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZDIpO1xuXG4gICAgdG9Eb1RhYmxlLmFwcGVuZENoaWxkKHRpdGxlUm93KTtcbiAgICB0b0RvVGFibGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Sb3cpO1xuICAgIHRvRG9UYWJsZS5hcHBlbmRDaGlsZChkYXRlUm93KTtcbiAgICB0b0RvVGFibGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlSb3cpO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHRvRG9UYWJsZSk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdHNJbnB1dCk7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xufVxuXG4vLyB3aGVuIHRvIGRvIGJ1dHRvbiBpcyBjbGlja2VkXG5leHBvcnQgY29uc3QgdG9Eb0V2ZW50ID0gKCkgPT4ge1xuICBsZXQgbmV3VG9Eb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRldG9kbycpO1xuICBjb25zdCBwcm9qZWN0c0Jhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c2NvbnRhaW5lcicpO1xuICBpZighY29udGVudERpdi5jb250YWlucyhuZXdUb0RvRm9ybSkpIHtcbiAgICAgIGRvbVRvRG8oKTtcbiAgICAgIGZvcm1IZXJlID0gJ3llcyc7XG4gICAgICBzdWJtaXRUb0RvKCk7XG5cbiAgICAgIGlmKHByb2plY3RzQmFubmVyID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHByb2plY3N0Zm9sZGVyXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIHRoZSBwcm9qZWN0c2ZvbGRlclwiKTtcbiAgICAgICAgICBwcm9qZWN0c0Jhbm5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIHRvRG9EaXYucmVtb3ZlQ2hpbGQocHJvamVjdHNCYW5uZXIpO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChuZXdUb0RvRm9ybSk7XG4gICAgICBmb3JtSGVyZSA9ICdubyc7XG4gIH1cbn1cblxuLy8gc3VibWl0IHRoZSBuZXcgdG9kb1xuZnVuY3Rpb24gc3VibWl0VG9EbygpIHtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdGluJyk7XG5cbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsICgpID0+IHtcbiAgICAgIGlmKGZvcm1IZXJlID09ICd5ZXMnKSB7XG4gICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVpbicpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uaW4nKTtcbiAgICAgIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVpbicpO1xuICAgICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5aW4nKTtcbiAgICAgIGNvbnN0IHByb2plY3RDaG9pY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNpbicpLnZhbHVlO1xuXG4gICAgICBhbGxQcm9qZWN0cy5maW5kKHB1c2hUb0RvKTtcblxuICAgICAgZnVuY3Rpb24gcHVzaFRvRG8oX3Byb2plY3QsIGluZGV4KSB7XG4gICAgICAgICAgaWYoYWxsUHJvamVjdHNbaW5kZXhdLmdldFRpdGxlID09IHByb2plY3RDaG9pY2UpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZSBoYXZlIGEgbWF0Y2hcIik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzW2luZGV4XS5UaGVBcnJheSk7XG4gICAgICAgICAgICAgIGFsbFByb2plY3RzW2luZGV4XS5UaGVBcnJheS5wdXNoKHRvRG9GYWN0b3J5KHRpdGxlVGV4dC52YWx1ZSwgZGVzY3JpcHRpb25UZXh0LnZhbHVlLCBkdWVEYXRlVGV4dC52YWx1ZSwgcHJpb3JpdHlUZXh0LnZhbHVlKSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGV0b2RvJykpO1xuICAgICAgZm9ybUhlcmUgPSAnbm8nO1xuICAgICAgYWRkVG9Eb1RvTGlzdChjdXJyZW50UHJvamVjdCk7XG4gICAgICB9IGVsc2UgeyByZXR1cm59XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVRvRG87IiwiaW1wb3J0IHsgY29udGVudERpdiwgY3VycmVudFByb2plY3QsIHByb2plY3RUaXRsZSwgdG9Eb0RpdiB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBzaG93VG9Eb3MgfSBmcm9tIFwiLi9kb21zaG93dG9kb3NcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzLCBwcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbi8vIGdlbmVyYWwgdmFyaWFibGVzXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdHNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0c2NvbnRhaW5lcicpO1xuXG4vLyBzaG93aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgcHJvamVjdCBmb2xkZXIgKyBhZGRpbmcgbmV3IHByb2plY3RzXG5leHBvcnQgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBEaXZUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9kaXYnKTtcbiAgY29uc3QgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFkZE5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdhZGRuZXdwcm9qZWN0Jyk7XG4gIGFkZE5ld1Byb2plY3QuaW5uZXJUZXh0ID0gJysgTmV3IFByb2plY3QnO1xuICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0KTtcblxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKGdldFByb2plY3ROYW1lKTtcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0TmFtZShfcHJvamVjdCwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgcHJvamVjdE9wdGlvbi5pbm5lclRleHQgPSBgJHthbGxQcm9qZWN0c1tpbmRleF0uZ2V0VGl0bGV9YDtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgICAgcHJvamVjdE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93dGR0YWJcIik7XG4gICAgICAgIGxldCBwcm9qZWN0QXJyYXkgPSBhbGxQcm9qZWN0c1tpbmRleF0uVGhlQXJyYXk7XG4gICAgICAgIGlmKHRvRG9UYWJsZSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2dlZW4gdGFiZWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBEaXZUb0RvLnJlbW92ZUNoaWxkKHRvRG9UYWJsZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RhYmVsIHdlZ2hhbGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd1RvRG9zKHByb2plY3RBcnJheSk7XG4gICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBgJHthbGxQcm9qZWN0c1tpbmRleF0uZ2V0VGl0bGV9YDtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgRGl2VG9Eby5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICAvLyBjcmVhdGVzIGlucHV0IGZvciBuZXcgcHJvamVjdFxuICAgIGFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICBpbnB1dE5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsICduZXcgcHJvamVjdCcpO1xuICAgICAgaW5wdXROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3cHJvamVjdGlucHV0Jyk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dE5ld1Byb2plY3QpO1xuICAgICAgY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnRuTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3Byb2plY3RidG4nKTtcbiAgICAgIGJ0bk5ld1Byb2plY3QuaW5uZXJUZXh0ID0gJ0dvJztcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bk5ld1Byb2plY3QpO1xuXG4gICAgICBpbnB1dE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgYnRuTmV3UHJvamVjdC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gYWRkcyBuZXcgcHJvamVjdCB0byBsaXN0IGluIHByb2plY3QgZm9sZGVyXG4gICAgICBidG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBpbnB1dE5ld1Byb2plY3QudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBuZXdQcm9qZWN0VHh0LmlubmVyVGV4dCA9IG5ld1Byb2plY3RUaXRsZTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFR4dCk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGlucHV0TmV3UHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJ0bk5ld1Byb2plY3QpO1xuICAgICAgICB3aW5kb3dbbmV3UHJvamVjdFRpdGxlXSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeShuZXdQcm9qZWN0VGl0bGUsIHdpbmRvd1tuZXdQcm9qZWN0VGl0bGVdID0gW10pKTtcblxuICAgICAgICAvLyBvcGVuIHRoZSBuZXcgcHJvamVjdFxuICAgICAgICBuZXdQcm9qZWN0VHh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvRG9UYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd3RkdGFiXCIpO1xuICAgICAgICAgIGxldCBwcm9qZWN0QXJyYXkgPSBhbGxQcm9qZWN0c1thbGxQcm9qZWN0cy5sZW5ndGggLSAxXS5UaGVBcnJheTtcbiAgICAgICAgICBpZih0b0RvVGFibGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dlZW4gdGFiZWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9Eb1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhYmVsIHdlZ2hhbGVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEFycmF5O1xuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgICAgICAgc2hvd1RvRG9zKHByb2plY3RBcnJheSk7XG4gICAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGAke2FsbFByb2plY3RzW2FsbFByb2plY3RzLmxlbmd0aCAtIDFdLmdldFRpdGxlfWA7XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG59XG5cbi8vIGNsaWNraW5nIHRoZSBwcm9qZWN0cyBidXR0b25cbmV4cG9ydCBjb25zdCBwcm9qZWN0RXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNob3dUb0RvVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd3RkdGFiJyk7XG4gIGNvbnN0IGZvcm1OZXdUb0RPID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZXRvZG8nKTtcbiAgaWYodG9Eb0Rpdi5jb250YWlucyhwcm9qZWN0c0NvbnRhaW5lcikpIHtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdG9Eb0Rpdi5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICBjb25zb2xlLmxvZyhcInByb2plY3RzIGZvbGRlciBpcyB0aGVyZVwiKTtcbiAgICAgIGlmKCFzaG93VG9Eb1RhYmxlID09IG51bGwpe1xuICAgICAgICAgIHNob3dUb0RvVGFibGUuY2xhc3NMaXN0LmFkZCgnc2hvd3RvZG90YWJsZScpO1xuICAgICAgICAgIHNob3dUb0RvVGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd3RvZG90YWJsZTInKTtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0Zm9sZGVyIGlzIG5vdCB0aGVyZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1OZXdUb0RPKTtcbiAgICAgIGlmKCFzaG93VG9Eb1RhYmxlID09IG51bGwpe1xuICAgICAgICAgIHNob3dUb0RvVGFibGUuY2xhc3NMaXN0LmFkZCgnc2hvd3RvZG90YWJsZTInKTtcbiAgICAgICAgICBzaG93VG9Eb1RhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3d0b2RvdGFibGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIHRhYmxlJyk7XG4gICAgICB9O1xuXG4gICAgICBpZihmb3JtTmV3VG9ETyA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gbm8nKTtcbiAgICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3llcyBmb3JtJyk7XG4gICAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChmb3JtTmV3VG9ETyk7XG4gICAgICB9O1xuICAgICAgXG4gIH1cbn0iLCJpbXBvcnQgeyB0YWJsZVRvRG8gfSBmcm9tIFwiLlwiO1xuXG4vLyBzaG93cyBhbGwgdG8gZG8gaXRlbXMgaW4gYSBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gc2hvd1RvRG9zIChwcm9qZWN0KSB7XG4gICAgLy9jb25zdCB0YWJsZVRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd3RkdGFiJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBjaGVja1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja1RvRG8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrVG9Eby5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcbiAgICAgICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29uc3QgdGl0bGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZVRvRG8uY2xhc3NMaXN0LmFkZCgndG9kb3RpdGxlJyk7XG4gICAgICAgIHRpdGxlVG9Eby5pbm5lclRleHQgPSBwcm9qZWN0W2ldLmdldFRpdGxlO1xuICAgICAgICBjb25zdCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZVRvRG8uaW5uZXJUZXh0ID0gcHJvamVjdFtpXS5nZXREdWVEYXRlO1xuICAgICAgICBjb25zdCB0ZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb2xsYXBzZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaWJsZScpO1xuICAgICAgICBjb25zdCB0YWJsZVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25yb3cnKTtcbiAgICAgICAgY29uc3QgdGQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGQ0LnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICczJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb25Ub0RvLmlubmVyVGV4dCA9IHByb2plY3RbaV0uZ2V0RGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGVtcHR5VGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICAgIGlmKHByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gMSkge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MScpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgICAgfSBlbHNlIGlmKHByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gMikge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MicpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTInKTtcbiAgICAgICAgfSBlbHNlIGlmKHByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gMykge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MycpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTMnKTtcbiAgICAgICAgfSBlbHNlIGlmKHByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gNCkge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5NCcpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTQnKTtcbiAgICAgICAgfSBlbHNlIGlmKHByb2plY3RbaV0uZ2V0UHJpb3JpdHkgPT0gNSkge1xuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5NScpO1xuICAgICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkxJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRkMS5hcHBlbmRDaGlsZChjaGVja1RvRG8pO1xuICAgICAgICB0ZDIuYXBwZW5kQ2hpbGQodGl0bGVUb0RvKTtcbiAgICAgICAgdGQzLmFwcGVuZENoaWxkKGR1ZURhdGVUb0RvKTtcbiAgICAgICAgdGQ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVG9Ebyk7XG4gICAgICAgIHRkNS5hcHBlbmRDaGlsZChjb2xsYXBzZUJ0bik7XG4gICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRkMSk7XG4gICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRkMyk7XG4gICAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRkNSk7XG4gICAgICAgIHRhYmxlUm93Mi5hcHBlbmRDaGlsZChlbXB0eVRkKTtcbiAgICAgICAgdGFibGVSb3cyLmFwcGVuZENoaWxkKHRkNCk7XG4gICAgICAgIHRhYmxlVG9Eby5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gICAgICAgIHRhYmxlVG9Eby5hcHBlbmRDaGlsZCh0YWJsZVJvdzIpO1xuXG4gICAgfSBcbiAgICAgIFxuICAgICAgbGV0IGNvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sbGFwc2libGVcIik7XG4gICAgICBsZXQgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb2xsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXNjcmlwdGlvbnJvd29wZW5cIikgKSB7XG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbnJvd1wiKTtcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImRlc2NyaXB0aW9ucm93b3BlblwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25yb3dvcGVuXCIpO1xuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb25yb3dcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbn1cblxuLy8gYWRkcyB0byBkbyB0byBjdXJyZW50IG9wZW4gdG8gZG9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvVG9MaXN0IChwcm9qZWN0KSB7XG4gIGNvbnN0IHRhYmxlVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93dGR0YWInKTtcbiAgY29uc3QgdG9kb1RpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG90aXRsZScpO1xuICBjb25zdCB0YWJsZVRpdGxlc0FycmF5ID0gW107XG4gIGlmKHRhYmxlVG9Eby5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvVGl0bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YWJsZVRpdGxlc0FycmF5LnB1c2godG9kb1RpdGxlc1tpXS5pbm5lckhUTUwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInRvZG9UaXRsZXM6XCIpO1xuICAgIGNvbnNvbGUubG9nKHRvZG9UaXRsZXMpO1xuICAgIGNvbnNvbGUubG9nKFwidG9kb1RpdGxlc0FycmF5OlwiKTtcbiAgICBjb25zb2xlLmxvZyh0YWJsZVRpdGxlc0FycmF5KTsgXG4gIH1cbiAgIFxuICBmb3IgKGxldCBpID0gcHJvamVjdC5sZW5ndGggLSAxOyBpIDwgcHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgIGlmKHByb2plY3RbaV0uZ2V0VGl0bGUgIT0gdGFibGVUaXRsZXNBcnJheVtpXSkge1xuICAgICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIGNvbnN0IGNoZWNrVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjaGVja1RvRG8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICBjaGVja1RvRG8uY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG4gICAgICBjb25zdCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgY29uc3QgdGl0bGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGl0bGVUb0RvLmNsYXNzTGlzdC5hZGQoJ3RvZG90aXRsZScpO1xuICAgICAgdGl0bGVUb0RvLmlubmVyVGV4dCA9IHByb2plY3RbaV0uZ2V0VGl0bGU7XG4gICAgICBjb25zdCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgY29uc3QgZHVlRGF0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkdWVEYXRlVG9Eby5pbm5lclRleHQgPSBwcm9qZWN0W2ldLmdldER1ZURhdGU7XG4gICAgICBjb25zdCB0ZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbGxhcHNlQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpYmxlJyk7XG4gICAgICBjb25zdCB0YWJsZVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgdGFibGVSb3cyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9ucm93Jyk7XG4gICAgICBjb25zdCB0ZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGQ0LnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICczJyk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvblRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjcmlwdGlvblRvRG8uaW5uZXJUZXh0ID0gcHJvamVjdFtpXS5nZXREZXNjcmlwdGlvbjtcbiAgICAgIGNvbnN0IGVtcHR5VGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgICBpZihwcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkxJyk7XG4gICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTEnKTtcbiAgICAgIH0gZWxzZSBpZihwcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkyJyk7XG4gICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTInKTtcbiAgICAgIH0gZWxzZSBpZihwcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDMpIHtcbiAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkzJyk7XG4gICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTMnKTtcbiAgICAgIH0gZWxzZSBpZihwcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDQpIHtcbiAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHk0Jyk7XG4gICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTQnKTtcbiAgICAgIH0gZWxzZSBpZihwcm9qZWN0W2ldLmdldFByaW9yaXR5ID09IDUpIHtcbiAgICAgICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHk1Jyk7XG4gICAgICAgIHRhYmxlUm93Mi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eTUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5MScpO1xuICAgICAgICB0YWJsZVJvdzIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHkxJyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRkMS5hcHBlbmRDaGlsZChjaGVja1RvRG8pO1xuICAgICAgdGQyLmFwcGVuZENoaWxkKHRpdGxlVG9Ebyk7XG4gICAgICB0ZDMuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRvRG8pO1xuICAgICAgdGQ0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVG9Ebyk7XG4gICAgICB0ZDUuYXBwZW5kQ2hpbGQoY29sbGFwc2VCdG4pO1xuICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRkMik7XG4gICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0ZDMpO1xuICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGQ1KTtcbiAgICAgIHRhYmxlUm93Mi5hcHBlbmRDaGlsZChlbXB0eVRkKTtcbiAgICAgIHRhYmxlUm93Mi5hcHBlbmRDaGlsZCh0ZDQpO1xuICAgICAgdGFibGVUb0RvLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICAgIHRhYmxlVG9Eby5hcHBlbmRDaGlsZCh0YWJsZVJvdzIpO1xuXG4gICAgIH0gXG4gIH0gXG4gICAgXG4gICAgbGV0IGNvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sbGFwc2libGVcIik7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGNvbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXNjcmlwdGlvbnJvd29wZW5cIikgKSB7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25yb3dcIik7XG4gICAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzY3JpcHRpb25yb3dvcGVuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9ucm93b3BlblwiKTtcbiAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNjcmlwdGlvbnJvd1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdG9Eb0V2ZW50IH0gZnJvbSAnLi9kb21uZXd0b2RvJztcbmltcG9ydCB7IHByb2plY3RFdmVudH0gZnJvbSAnLi9kb21zaG93cHJvamVjdHMnO1xuaW1wb3J0IHsgZ2VuZXJhbFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJztcblxuLy8gZ2VuZXJhbCBsYXlvdXQgYW5kIHZhcmlhYmxlc1xuXG4vLyBjdXJyZW50UHJvamVjdCBob2xkcyB3aGljaCBwcm9qZWN0IGlzIHNob3duXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2VuZXJhbFByb2plY3Q7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbmV4cG9ydCBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b0RvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2RpdicpO1xuXG5jb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUb0RvQnRuLmlubmVyVGV4dCA9ICcrJztcbmFkZFRvRG9CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGR0b2RvYnRuJyk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xucHJvamVjdFRpdGxlLmlubmVyVGV4dCA9ICdHZW5lcmFsIFByb2plY3QnO1xucHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHRpdGxlJyk7XG5cbmNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5wcm9qZWN0c0J0bi5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xucHJvamVjdHNCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0c2J0bicpO1xuXG5uYXZCYXIuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7XG5uYXZCYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbm5hdkJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG5cbmV4cG9ydCBjb25zdCB0YWJsZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xudGFibGVUb0RvLmNsYXNzTGlzdC5hZGQoXCJzaG93dG9kb3RhYmxlXCIpO1xudGFibGVUb0RvLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd3RkdGFiJyk7XG5cbnRvRG9EaXYuYXBwZW5kQ2hpbGQodGFibGVUb0RvKTtcblxuLy8gZXZlbnRsaXN0ZW5lcnNcblxuLy9hZGQgdG8gZG8gK1xuYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvRG9FdmVudCk7XG5cbi8vIHNob3cgcHJvamVjdHMgbGlzdFxucHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RXZlbnQpO1xuXG5cblxuIiwiZXhwb3J0IGNvbnN0IHRvRG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IGR1ZWRhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgQ2hlY2tlZCA9ICdubyc7XG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBDaGVja2VkfVxufVxuIiwiY29uc3QgZ2VuZXJhbFByb2plY3QgPSBbXTtcbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IGdldFRpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgVGhlQXJyYXkgPSBhcnJheTtcbiAgICByZXR1cm4ge2dldFRpdGxlLCBUaGVBcnJheX1cbn1cblxuY29uc3QgZ2VuZXJhbFByT2JqZWN0ID0gcHJvamVjdEZhY3RvcnkoJ0dlbmVyYWwgUHJvamVjdCcsIGdlbmVyYWxQcm9qZWN0KTtcblxuYWxsUHJvamVjdHMucHVzaChnZW5lcmFsUHJPYmplY3QpO1xuXG5leHBvcnQge1xuICAgIGFsbFByb2plY3RzLFxuICAgIGdlbmVyYWxQcm9qZWN0LFxuICAgIHByb2plY3RGYWN0b3J5XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==