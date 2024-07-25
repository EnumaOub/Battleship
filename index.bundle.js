"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog {
    position: absolute;
    top: 40%;
    left: 30%;
    width: 40%;
    background-color: var(--back-shelves);
}


dialog div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

dialog::backdrop {
    background-color: rgba(153, 153, 153, 0.781);
}
dialog button {
    margin-top: 1rem;
    border-radius: 2rem;
    border: 1px solid black;
    font-size: 1.2rem;
    padding: 0.5rem;
    cursor: pointer;
}



dialog #result-game {
    font-size: 2rem;
    font-weight: 800;
}`, "",{"version":3,"sources":["webpack://./src/styles/dialog.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,qCAAqC;AACzC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,4CAA4C;AAChD;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,eAAe;AACnB;;;;AAIA;IACI,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["dialog {\n    position: absolute;\n    top: 40%;\n    left: 30%;\n    width: 40%;\n    background-color: var(--back-shelves);\n}\n\n\ndialog div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\ndialog::backdrop {\n    background-color: rgba(153, 153, 153, 0.781);\n}\ndialog button {\n    margin-top: 1rem;\n    border-radius: 2rem;\n    border: 1px solid black;\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    cursor: pointer;\n}\n\n\n\ndialog #result-game {\n    font-size: 2rem;\n    font-weight: 800;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `footer {
    position: fixed;
    bottom: 0;
    background-color: var(--back-header);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem 3rem;
    border-top: 1px solid rgb(0,0,0);
    box-shadow: 1rem 0 1rem var(--shadow-box);

}`, "",{"version":3,"sources":["webpack://./src/styles/footer.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,SAAS;IACT,oCAAoC;IACpC,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC;IAChC,yCAAyC;;AAE7C","sourcesContent":["footer {\n    position: fixed;\n    bottom: 0;\n    background-color: var(--back-header);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    padding: 1rem 3rem;\n    border-top: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/header.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    border-bottom: 1px solid rgb(0,0,0);
    box-shadow: 1rem 0 1rem var(--shadow-box);
    background-color: var(--back-header);
}

header h1 {
    font-size: 3rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,MAAM;IACN,OAAO;IACP,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;IACnC,yCAAyC;IACzC,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["header {\n    position: sticky;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 3rem;\n    border-bottom: 1px solid rgb(0,0,0);\n    box-shadow: 1rem 0 1rem var(--shadow-box);\n    background-color: var(--back-header);\n}\n\nheader h1 {\n    font-size: 3rem;\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
}

body {
    font-family: system-ui, sans-serif; 
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
}

.player {
    display: flex;
    gap: 1rem;
}

.player .active label {
    font-weight: 800;
}

.player .active input {
    background-color: rgba(0, 0, 255, 0.2);
}

.player1, .player2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.player1 label, .player2 label {
    align-self: center;
}

.player1 input, .player2 input {
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 2rem;
    font-size: 1.2rem;
}

.player1 input:focus, .player2 input:focus {
    outline: 2px solid black;
}

.info-board input {
    max-width: 3rem;
}

.parameters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.board-size {
    display: flex;
    flex-direction: row;
    gap: .5rem;
}

#run-game {
    border-radius: 2rem;
    border: 1px solid ;
    box-shadow: 0.05rem 0 0.05rem 0.05rem;
    width: 20rem;
    cursor: pointer;
    font-size: 1.5rem;
    background-color: rgba(117, 117, 248, 0.705);
}

/* Gameboard */

.grid, .board-ship1, .board-ship2 {
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(3, 5rem);
}

.grid div, .board-ship1 div, .board-ship2 div {
    border: 1px solid rgba(0, 0, 0, 0.6);
}

.grid_elem {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

.grid_elem {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

.grid_elem:hover {
    background-color: rgba(0, 0, 255, 0.1);
}

.grid_elem.won {
    background-color: rgba(0, 255, 0, 0.4);
}

#info-game{
    display: flex;
    flex-direction: row;
}

#info-r {
    margin-top: .2rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,4CAA4C;AAChD;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody {\n    font-family: system-ui, sans-serif; \n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 1rem;\n}\n\n.player {\n    display: flex;\n    gap: 1rem;\n}\n\n.player .active label {\n    font-weight: 800;\n}\n\n.player .active input {\n    background-color: rgba(0, 0, 255, 0.2);\n}\n\n.player1, .player2 {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.player1 label, .player2 label {\n    align-self: center;\n}\n\n.player1 input, .player2 input {\n    padding: 0.5rem;\n    border: 1px solid black;\n    border-radius: 2rem;\n    font-size: 1.2rem;\n}\n\n.player1 input:focus, .player2 input:focus {\n    outline: 2px solid black;\n}\n\n.info-board input {\n    max-width: 3rem;\n}\n\n.parameters {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.board-size {\n    display: flex;\n    flex-direction: row;\n    gap: .5rem;\n}\n\n#run-game {\n    border-radius: 2rem;\n    border: 1px solid ;\n    box-shadow: 0.05rem 0 0.05rem 0.05rem;\n    width: 20rem;\n    cursor: pointer;\n    font-size: 1.5rem;\n    background-color: rgba(117, 117, 248, 0.705);\n}\n\n/* Gameboard */\n\n.grid, .board-ship1, .board-ship2 {\n    display: grid;\n    grid-template-columns: repeat(3, 5rem);\n    grid-template-rows: repeat(3, 5rem);\n}\n\n.grid div, .board-ship1 div, .board-ship2 div {\n    border: 1px solid rgba(0, 0, 0, 0.6);\n}\n\n.grid_elem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.grid_elem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.grid_elem:hover {\n    background-color: rgba(0, 0, 255, 0.1);\n}\n\n.grid_elem.won {\n    background-color: rgba(0, 255, 0, 0.4);\n}\n\n#info-game{\n    display: flex;\n    flex-direction: row;\n}\n\n#info-r {\n    margin-top: .2rem;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/dialog.css":
/*!*******************************!*\
  !*** ./src/styles/dialog.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.css":
/*!*******************************!*\
  !*** ./src/styles/footer.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/footer.css */ "./src/styles/footer.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_dialog_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/dialog.css */ "./src/styles/dialog.css");
/* harmony import */ var _modules_ui_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ui/ui */ "./src/modules/ui/ui.js");







console.log("TEST")
;(0,_modules_ui_ui__WEBPACK_IMPORTED_MODULE_4__.UI)();


/***/ }),

/***/ "./src/modules/internal/Gameboard.js":
/*!*******************************************!*\
  !*** ./src/modules/internal/Gameboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/internal/Ship.js");


class Gameboard {
    constructor(xSize, ySize) {
        // Size of gameboard
        this.xSize = xSize;
        this.ySize = ySize;
        // Array with all ship of gameboard
        this.shipArr = [];
        // Initialisize the number of attack
        this.attackNb = 0;
        // Initialisize the number of missed attack
        this.attackMissed = 0;
        // Initialisze the number of ship still alive
        this.shipAlive = 0;
        // Array with all possible moves
        this.possibleMove = []
        // Initialise BoardT wich will contain the ships
        this.boardT = this.initBoard(".");
        // Initialise BoardG the board for the game virgin
        this.boardG = this.initBoard("");
    };

    // Initialise the 2 boards array and the possible moves
    initBoard(data) {
        const array = [];
        this.possibleMove = []
        for (let i = 0; i < this.xSize; i++) {
            array[i] = [];
            for (let j = 0; j < this.ySize; j++) {
                array[i][j] = data;
                this.possibleMove.push([i, j]) 
                
            }
        }
        return array;
    }

    // reset the board used for new game or to reinitialise the ships
    resetBoard() {
        this.shipArr = [];
        this.attackNb = 0;
        this.attackMissed = 0;
        this.shipAlive = 0;
        this.possibleMove = []
        this.boardT = this.initBoard(".");
        this.boardG = this.initBoard("");
    };

    // Check if the coordinate given is on the path of a ship
    checkShipCoord(coord) {
        let checkShip = true;
        this.shipArr.forEach((ship) => {
            if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
                checkShip = !(coord[0] >= ship.coordInit[0] && coord[0] <= ship.coordFin[0]) 
            }
            else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
                checkShip = !(coord[1] >= ship.coordInit[1] && coord[1] <= ship.coordFin[1]) 
            }
        })
        return checkShip;
    }

    checkCoordinate(coord) {
        return coord[0] < this.xSize && coord[1] < this.ySize
    }

    // Function to add a ship randomly on the board
    addRandomShip() {
        let ship = null;
        while (!ship) {
            const coordInit = this.possibleMove[Math.floor(Math.random()*this.possibleMove.length)];
            // for the initial coordinate we check if it is in the board and if it is not on another ship
            if (this.checkCoordinate(coordInit) && this.checkShipCoord(coordInit)) {
                // The ships are between a length of 2 and 4
                const length = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                let coordFin;
                // We randomly create a ship hozizontal or vertical
                if (Math.random() < 0.5) {
                    coordFin = [coordInit[0], coordInit[1] + length];
                }
                else {
                    coordFin = [coordInit[0] + length, coordInit[1]];
                }
                // for the ending coordinate we check if it is in the board and if it is not on another ship
                if (this.checkCoordinate(coordFin) && this.checkShipCoord(coordFin)) {
                    this.addShip(coordInit, coordFin);
                    ship = true;
                }
            }
            
        }
        
    }

    // Add ship with the given coordinates
    addShip(coordInit, coordFin) {
        if (this.checkCoordinate(coordInit) && this.checkCoordinate(coordFin)) {
            const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](coordInit, coordFin)
            this.shipArr.push(ship);
            this.populateShip(ship);
            this.shipAlive++;
        };
    };

    

    // Add ship to board BardT each time a board is added
    populateShip(ship) {
        if (ship.position === "HORIZONTAL") {
            this.boardT[ship.coordInit[0]][ship.coordInit[1]] = '|';
            this.boardT[ship.coordFin[0]][ship.coordInit[1]] = '>';
            for (let i=ship.coordInit[0]+1; i<=ship.coordFin[0]-1; i++) {
                this.boardT[i][ship.coordInit[1]] = '--';
            }
        }
        else if (ship.position === "VERTICAL") {
            this.boardT[ship.coordInit[0]][ship.coordInit[1]] = '^';
            this.boardT[ship.coordInit[0]][ship.coordFin[1]] = '__';
            for (let i=ship.coordInit[1]+1; i<=ship.coordFin[1]-1; i++) {
                this.boardT[ship.coordInit[0]][i] = '|';
            }
        }
    };

    // Transpose array for showing board
    transpose(arr) {
        let [row] = arr
        return row.map((value, column) => arr.map(row => row[column]))
    }

    // Show true board with ships in console
    showBoard() {
        let i = 0;
        const boardV = this.transpose([...this.boardT])
        console.log([' '].concat(Array.from(Array(8).keys())).toString().replace(/,/g,' '));
        boardV.forEach((line) => {
            console.log(`${i} ${line.toString().replace(/,/g,' ')}`)
            i++;
        })
    }

    // Check if coordinate touch the ship
    checkShipAttack(ship, coord) {
        if (ship.position === "HORIZONTAL" && coord[1] === ship.coordInit[1]) {
            return coord[0] >= ship.coordInit[0] && coord[0] <= ship.coordFin[0] 
        }
        else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
            return coord[1] >= ship.coordInit[1] && coord[1] <= ship.coordFin[1] 
        }
        else {
            return false
        }
    }

    // Function where opponent attack a coordinate of the board
    receiveAttack(coord) {
        if(this.checkCoordinate(coord)) {
            let touched = null;
            // Check if a ship is touched  
            // if it is the case the index is stored in variable "touched"
            for (let i=0; i<this.shipAlive; i++) {
                if (this.checkShipAttack(this.shipArr[i], coord)) {
                    touched = i;
                }
            }
            // Add one attack
            this.attackNb++;
            // Add attack on board
            this.boardT[coord[0]][coord[1]] = "x";
            // delete move from possible moves array
            this.possibleMove = this.possibleMove.filter(coordd => coordd.toString() !== coord.toString());
            if (touched !== null) {
                // If a ship is touched
                this.boardG[coord[0]][coord[1]] = "o";
                this.shipArr[touched].hit();
                if (this.shipArr[touched].sunk) {
                    // Delete ship if its sunk
                    this.shipArr.splice(touched, 1);
                    this.shipAlive--;
                }
                return true;
            }
            else {
                this.boardG[coord[0]][coord[1]] = "x";
                this.attackMissed++;
                return false;
            }
        }
        
    };
};


/***/ }),

/***/ "./src/modules/internal/Player.js":
/*!****************************************!*\
  !*** ./src/modules/internal/Player.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/internal/Gameboard.js");


class Player {
    constructor(name, realP, xSize, ySize) {
        // Initialisize if the player is a real one
        this.realP = realP;
        // Name given to the player
        this.name = name;
        // Is it the current player
        this.active = false;
        // board of the player
        this.board = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](xSize, ySize);
    };

    // modifiy name of the player
    setName(name) {
        this.name = name;
    };

    // toggle the booleen if its the one playing
    toggleActive() {
        this.active= !this.active;
    }
}


/***/ }),

/***/ "./src/modules/internal/Ship.js":
/*!**************************************!*\
  !*** ./src/modules/internal/Ship.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(coordInit, coordFin) {
        // Initialise of times the ship were hit
        this.hitNb = 0;
        // Boolean showing if the ship was hit in all its coordinates
        this.sunk = false;
        // Check if the coodinates initial and final of the ship given form a vertical ship
        if (coordInit[0] === coordFin[0] && coordInit[1] !== coordFin[1]) {
            // init length of the ship
            this.length = Math.abs(coordInit[1]-coordFin[1]) + 1
            // init posision of the ship
            this.position = "VERTICAL";
            // store initial and final coordinate in function of its position
            this.coordInit = coordInit[1] < coordFin[1] ? coordInit: coordFin;
            this.coordFin = coordInit[1] > coordFin[1] ? coordInit: coordFin;
        }
        else if (coordInit[1] === coordFin[1] && coordInit[0] !== coordFin[0]) {
            // init length of the ship
            this.length = Math.abs(coordInit[0]-coordFin[0]) + 1
            // init posision of the ship
            this.position = "HORIZONTAL";
            // store initial and final coordinate in function of its position
            this.coordInit = coordInit[0] < coordFin[0] ? coordInit: coordFin;
            this.coordFin = coordInit[0] > coordFin[0] ? coordInit: coordFin;
        }
        else {
            throw new Error(`The coordinate given ${coordInit} and ${coordFin} doesn't allow the creation of a ship`);
        }
    }

    // check if ship has sunk
    isSunk() {
        if (this.hitNb === this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }

    // if ship is hit iterate the number of hit and check if ship has sunk
    hit() {
        this.hitNb++;
        this.isSunk();
    }
};


/***/ }),

/***/ "./src/modules/ui/ControlGame.js":
/*!***************************************!*\
  !*** ./src/modules/ui/ControlGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlGame: () => (/* binding */ ControlGame)
/* harmony export */ });

// Factory function dealing with the control of the player and the computer
const ControlGame = function() {
    // Give results to the round actually played
    const dealResult = function(result, nbShip, target, player) {
        const containerInfo = document.getElementById("info-r");
        const playerActive = document.getElementById("playerG").textContent
        // Check if one ship was hit
        if (result) {
            target.textContent = "O";
            target.style["background-color"] = "rgba(0,255,0,.3)"
            if (nbShip === player.board.shipAlive) {
                containerInfo.textContent = `: ${playerActive} Touched`
            }
            else {
                containerInfo.textContent = `: ${playerActive} has sunk a boat`
            }
        }
        else {
            target.textContent = "X";
            target.style["background-color"] = "rgba(255,0,0,.3)"
            containerInfo.textContent = `: ${playerActive} Missed`
            
        }
    }

    // Function attack of a human player
    const attackC = function(event, player) {
        // Get all current ship in order to compare after the attack
        const nbShip = player.board.shipAlive;
        // Get position on front associated with the coordinate clicked by player
        let target = event.target;
        // Check that the coordinate clicked is on the grid
        if (target.className != "grid_elem") return
        // Extract the coordinate from the id of the grid element
        let [yCoord, xCoord] = target.id.match(/\d+/g);
        // Attack the player's board given
        const result = player.board.receiveAttack([Number(xCoord), Number(yCoord)]);
        // Apply the results
        dealResult(result, nbShip, target, player);
        return result;
    };

    // Function attack of a computer
    const attackRandom = function(player) {
        // Get all current ship in order to compare after the attack
        const nbShip = player.board.shipAlive;
        // Get all possible moves on the board
        const possibleMove = player.board.possibleMove;
        // get one random coordinate in all possible moves
        const coord = possibleMove[Math.floor(Math.random() * possibleMove.length)];
        // Get position on front associated with the coordinate obtained
        const target = document.getElementById(`r_${coord[1]}_c_${coord[0]}`);
        // Attack the player's board given
        const result = player.board.receiveAttack([Number(coord[0]), Number(coord[1])]);
        // Apply the results
        dealResult(result, nbShip, target, player);
        return result;
    };

    return {
        attackC,
        attackRandom
    };
};

/***/ }),

/***/ "./src/modules/ui/CreateGame.js":
/*!**************************************!*\
  !*** ./src/modules/ui/CreateGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateGame: () => (/* binding */ CreateGame)
/* harmony export */ });
/* harmony import */ var _internal_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/Player */ "./src/modules/internal/Player.js");
/* harmony import */ var _ControlGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlGame */ "./src/modules/ui/ControlGame.js");



const CreateGame = function() {

    const controller = (0,_ControlGame__WEBPACK_IMPORTED_MODULE_1__.ControlGame)();

    const randomShip = function(player, nbShip=3){
        console.log(player.board)
        player.board.resetBoard();
        console.log(player.board)
        for (let i=0; i<nbShip; i++){
            player.board.addRandomShip();
        }
        console.log(player.board)
    }

    const createPlayer = function(name, active=false) {
        const playerName = document.getElementById(`${name}-name`).value ? document.getElementById(`${name}-name`).value: name;
        const sizeX = document.getElementById('coordX').value;
        const sizeY = document.getElementById('coordY').value;
        const realP = document.getElementById(`${name}-realp`).checked;
        const player = new _internal_Player__WEBPACK_IMPORTED_MODULE_0__["default"](playerName, realP, sizeX, sizeY);
        if (active) {
            player.toggleActive();
        }
        randomShip(player);
        return player;
    };

    let players = {
        player1: createPlayer("player1", true),
        player2: createPlayer("player2"),
    };

    const getActivePlayer = function() {
        for (const player in players) {
            if (players[player].active) {
                return player;
            }
        }
        return null
    };

    const getNonActivePlayer = function() {
        for (const player in players) {
            if (!players[player].active) {
                return player;
            }
        }
        return null
    }

    const changePlayer = function() {
        const playerActive = getActivePlayer();
        const playerNonActive = getNonActivePlayer();
        players[playerActive].toggleActive();
        players[playerNonActive].toggleActive();
    }

    const attack = function() {
        if (!players[getActivePlayer()].realP) {
            const resAttack = controller.attackRandom(players[getNonActivePlayer()]);
            checkResAttack(resAttack);
            
        }
    }

    const checkResAttack = function(resAttack) {
        if (!resAttack) {
            changePlayer()
        }
        showPlayer()
        generateBoard(players[getNonActivePlayer()].board.boardG, "grid")
        console.log(players)
        if (players[getNonActivePlayer()].board.shipAlive === 0){
            endGame();
        }
        else {
            
            setTimeout(function(){attack();}, 100);
        }
    }


    const generateBoard = function(board, name) {
        const rows = board[0].length;
        const cols = board.length;
        const container = document.getElementsByClassName(name)[0];
        container.innerHTML = "";
        container.style["grid-template-columns"] = `repeat(${cols}, 2rem)`
        container.style["grid-template-rows"] = `repeat(${rows}, 2rem)`
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = "grid_elem";
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
        container.onclick = function(event) {
            const resAttack = controller.attackC(event, players[getNonActivePlayer()]);
            
            checkResAttack(resAttack);
            
        }
    };

    const endGame = function() {
        const container = document.getElementsByClassName("grid")[0];
        const playerWin = players[getActivePlayer()];
        container.innerHTML = "";
        container.textContent = `${playerWin.name} Win the Game`
    }

    const showPlayer = function() {
        const title = document.getElementById("playerG");
        title.textContent = players[getActivePlayer()].name;
    }

    return { 
        players, 
        generateBoard,
        showPlayer,
        getActivePlayer,
        attack,
        randomShip
    };
};

/***/ }),

/***/ "./src/modules/ui/ui.js":
/*!******************************!*\
  !*** ./src/modules/ui/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _CreateGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateGame */ "./src/modules/ui/CreateGame.js");


const runGame = function(game) {
    game.showPlayer()
    game.generateBoard(game.players.player1.board.boardG, "grid")
    if (!game.players.player1.realP){
        game.attack()
    }
}

const UI = function() {
    const buttonRun = document.getElementById("run-game");


    buttonRun.addEventListener("click", (event) => {
        event.target.textContent = "RESTART";
        const game = (0,_CreateGame__WEBPACK_IMPORTED_MODULE_0__.CreateGame)();
        if (game.players.player1.realP && game.players.player2.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            game.randomShip(game.players.player1);
            game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Go to ${game.players.player2.name} Board`
            dialogP1.showModal();

            buttonRand1.addEventListener("click", (event) => {
                game.randomShip(game.players.player1);
                game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            })
            
            buttonPlay1.addEventListener("click", (event) => {
                const dialogP2 = document.getElementById("player2-ship");
                const buttonRand2 = document.getElementById("rand-ship2");
                const buttonPlay2 = document.getElementById("play2-game");
                dialogP1.close();
                game.randomShip(game.players.player2);
                game.generateBoard(game.players.player2.board.boardT, "board-ship2")
                dialogP2.showModal();
                buttonRand2.addEventListener("click", (event) => {
                    game.randomShip(game.players.player2);
                    game.generateBoard(game.players.player2.board.boardT, "board-ship2")
                })
                buttonPlay2.addEventListener("click", (event) => {
                    dialogP2.close();
                    runGame(game);
                })
            })
        }
        else if (game.players.player1.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            game.randomShip(game.players.player2);
            game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            buttonPlay1.textContent = `Play Game`
            dialogP1.showModal();
            buttonRand1.addEventListener("click", (event) => {
                game.randomShip(game.players.player1);
                game.generateBoard(game.players.player1.board.boardT, "board-ship1")
            })
            buttonPlay1.addEventListener("click", (event) => {
                dialogP1.close();
                runGame(game);
            })
        }
        else if (game.players.player2.realP) {
            const dialogP2 = document.getElementById("player2-ship");
            const buttonRand2 = document.getElementById("rand-ship2");
            const buttonPlay2 = document.getElementById("play2-game");
            game.randomShip(game.players.player1);
            game.generateBoard(game.players.player2.board.boardT, "board-ship2")
            dialogP2.showModal();
            buttonRand2.addEventListener("click", (event) => {
                game.randomShip(game.players.player2);
                game.generateBoard(game.players.player2.board.boardT, "board-ship2")
            })
            buttonPlay2.addEventListener("click", (event) => {
                dialogP2.close();
                runGame(game);
            })
        }
        else {
            game.randomShip(game.players.player1);
            game.randomShip(game.players.player2);
            runGame(game);
        }
        
    })

    
    
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqSXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGlhbG9nLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3M/NzY5NCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3M/N2U5MiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hlYWRlci5jc3M/ZTY4YiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW50ZXJuYWwvR2FtZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ludGVybmFsL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbnRlcm5hbC9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VpL0NvbnRyb2xHYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VpL0NyZWF0ZUdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stc2hlbHZlcyk7XG59XG5cblxuZGlhbG9nIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNzgxKTtcbn1cbmRpYWxvZyBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuZGlhbG9nICNyZXN1bHQtZ2FtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUNBQXFDO0FBQ3pDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrLXNoZWx2ZXMpO1xcbn1cXG5cXG5cXG5kaWFsb2cgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNzgxKTtcXG59XFxuZGlhbG9nIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbmRpYWxvZyAjcmVzdWx0LWdhbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2staGVhZGVyKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCwwLDApO1xuICAgIGJveC1zaGFkb3c6IDFyZW0gMCAxcmVtIHZhcigtLXNoYWRvdy1ib3gpO1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMseUNBQXlDOztBQUU3Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmb290ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1oZWFkZXIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCwwLDApO1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLDAsMCk7XG4gICAgYm94LXNoYWRvdzogMXJlbSAwIDFyZW0gdmFyKC0tc2hhZG93LWJveCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1oZWFkZXIpO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUNBQXlDO0lBQ3pDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwwLDApO1xcbiAgICBib3gtc2hhZG93OiAxcmVtIDAgMXJlbSB2YXIoLS1zaGFkb3ctYm94KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1oZWFkZXIpO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjsgXG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ucGxheWVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnBsYXllciAuYWN0aXZlIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucGxheWVyIC5hY3RpdmUgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xufVxuXG4ucGxheWVyMSwgLnBsYXllcjIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLnBsYXllcjEgbGFiZWwsIC5wbGF5ZXIyIGxhYmVsIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXIxIGlucHV0LCAucGxheWVyMiBpbnB1dCB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5wbGF5ZXIxIGlucHV0OmZvY3VzLCAucGxheWVyMiBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5mby1ib2FyZCBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAzcmVtO1xufVxuXG4ucGFyYW1ldGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYm9hcmQtc2l6ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogLjVyZW07XG59XG5cbiNydW4tZ2FtZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XG4gICAgYm94LXNoYWRvdzogMC4wNXJlbSAwIDAuMDVyZW0gMC4wNXJlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE3LCAxMTcsIDI0OCwgMC43MDUpO1xufVxuXG4vKiBHYW1lYm9hcmQgKi9cblxuLmdyaWQsIC5ib2FyZC1zaGlwMSwgLmJvYXJkLXNoaXAyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDVyZW0pO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDVyZW0pO1xufVxuXG4uZ3JpZCBkaXYsIC5ib2FyZC1zaGlwMSBkaXYsIC5ib2FyZC1zaGlwMiBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmdyaWRfZWxlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmlkX2VsZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ3JpZF9lbGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbn1cblxuLmdyaWRfZWxlbS53b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xufVxuXG4jaW5mby1nYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuI2luZm8tciB7XG4gICAgbWFyZ2luLXRvcDogLjJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRDQUE0QztBQUNoRDs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBzYW5zLXNlcmlmOyBcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5ZXIgLmFjdGl2ZSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5wbGF5ZXIgLmFjdGl2ZSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjIpO1xcbn1cXG5cXG4ucGxheWVyMSwgLnBsYXllcjIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnBsYXllcjEgbGFiZWwsIC5wbGF5ZXIyIGxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyMSBpbnB1dCwgLnBsYXllcjIgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBsYXllcjEgaW5wdXQ6Zm9jdXMsIC5wbGF5ZXIyIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaW5mby1ib2FyZCBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogM3JlbTtcXG59XFxuXFxuLnBhcmFtZXRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmQtc2l6ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbiNydW4tZ2FtZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXG4gICAgYm94LXNoYWRvdzogMC4wNXJlbSAwIDAuMDVyZW0gMC4wNXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNywgMTE3LCAyNDgsIDAuNzA1KTtcXG59XFxuXFxuLyogR2FtZWJvYXJkICovXFxuXFxuLmdyaWQsIC5ib2FyZC1zaGlwMSwgLmJvYXJkLXNoaXAyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNXJlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDVyZW0pO1xcbn1cXG5cXG4uZ3JpZCBkaXYsIC5ib2FyZC1zaGlwMSBkaXYsIC5ib2FyZC1zaGlwMiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5ncmlkX2VsZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZF9lbGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWRfZWxlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbn1cXG5cXG4uZ3JpZF9lbGVtLndvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG5cXG4jaW5mby1nYW1le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jaW5mby1yIHtcXG4gICAgbWFyZ2luLXRvcDogLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Zvb3Rlci5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2RpYWxvZy5jc3MnO1xuXG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vbW9kdWxlcy91aS91aSc7XG5cbmNvbnNvbGUubG9nKFwiVEVTVFwiKVxuVUkoKTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih4U2l6ZSwgeVNpemUpIHtcbiAgICAgICAgLy8gU2l6ZSBvZiBnYW1lYm9hcmRcbiAgICAgICAgdGhpcy54U2l6ZSA9IHhTaXplO1xuICAgICAgICB0aGlzLnlTaXplID0geVNpemU7XG4gICAgICAgIC8vIEFycmF5IHdpdGggYWxsIHNoaXAgb2YgZ2FtZWJvYXJkXG4gICAgICAgIHRoaXMuc2hpcEFyciA9IFtdO1xuICAgICAgICAvLyBJbml0aWFsaXNpemUgdGhlIG51bWJlciBvZiBhdHRhY2tcbiAgICAgICAgdGhpcy5hdHRhY2tOYiA9IDA7XG4gICAgICAgIC8vIEluaXRpYWxpc2l6ZSB0aGUgbnVtYmVyIG9mIG1pc3NlZCBhdHRhY2tcbiAgICAgICAgdGhpcy5hdHRhY2tNaXNzZWQgPSAwO1xuICAgICAgICAvLyBJbml0aWFsaXN6ZSB0aGUgbnVtYmVyIG9mIHNoaXAgc3RpbGwgYWxpdmVcbiAgICAgICAgdGhpcy5zaGlwQWxpdmUgPSAwO1xuICAgICAgICAvLyBBcnJheSB3aXRoIGFsbCBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZSA9IFtdXG4gICAgICAgIC8vIEluaXRpYWxpc2UgQm9hcmRUIHdpY2ggd2lsbCBjb250YWluIHRoZSBzaGlwc1xuICAgICAgICB0aGlzLmJvYXJkVCA9IHRoaXMuaW5pdEJvYXJkKFwiLlwiKTtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBCb2FyZEcgdGhlIGJvYXJkIGZvciB0aGUgZ2FtZSB2aXJnaW5cbiAgICAgICAgdGhpcy5ib2FyZEcgPSB0aGlzLmluaXRCb2FyZChcIlwiKTtcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGlzZSB0aGUgMiBib2FyZHMgYXJyYXkgYW5kIHRoZSBwb3NzaWJsZSBtb3Zlc1xuICAgIGluaXRCb2FyZChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnhTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMueVNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldW2pdID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZS5wdXNoKFtpLCBqXSkgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBib2FyZCB1c2VkIGZvciBuZXcgZ2FtZSBvciB0byByZWluaXRpYWxpc2UgdGhlIHNoaXBzXG4gICAgcmVzZXRCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5zaGlwQXJyID0gW107XG4gICAgICAgIHRoaXMuYXR0YWNrTmIgPSAwO1xuICAgICAgICB0aGlzLmF0dGFja01pc3NlZCA9IDA7XG4gICAgICAgIHRoaXMuc2hpcEFsaXZlID0gMDtcbiAgICAgICAgdGhpcy5wb3NzaWJsZU1vdmUgPSBbXVxuICAgICAgICB0aGlzLmJvYXJkVCA9IHRoaXMuaW5pdEJvYXJkKFwiLlwiKTtcbiAgICAgICAgdGhpcy5ib2FyZEcgPSB0aGlzLmluaXRCb2FyZChcIlwiKTtcbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkaW5hdGUgZ2l2ZW4gaXMgb24gdGhlIHBhdGggb2YgYSBzaGlwXG4gICAgY2hlY2tTaGlwQ29vcmQoY29vcmQpIHtcbiAgICAgICAgbGV0IGNoZWNrU2hpcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcEFyci5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIgJiYgY29vcmRbMV0gPT09IHNoaXAuY29vcmRJbml0WzFdKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tTaGlwID0gIShjb29yZFswXSA+PSBzaGlwLmNvb3JkSW5pdFswXSAmJiBjb29yZFswXSA8PSBzaGlwLmNvb3JkRmluWzBdKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiVkVSVElDQUxcIiAmJiBjb29yZFswXSA9PT0gc2hpcC5jb29yZEluaXRbMF0pIHtcbiAgICAgICAgICAgICAgICBjaGVja1NoaXAgPSAhKGNvb3JkWzFdID49IHNoaXAuY29vcmRJbml0WzFdICYmIGNvb3JkWzFdIDw9IHNoaXAuY29vcmRGaW5bMV0pIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY2hlY2tTaGlwO1xuICAgIH1cblxuICAgIGNoZWNrQ29vcmRpbmF0ZShjb29yZCkge1xuICAgICAgICByZXR1cm4gY29vcmRbMF0gPCB0aGlzLnhTaXplICYmIGNvb3JkWzFdIDwgdGhpcy55U2l6ZVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIHNoaXAgcmFuZG9tbHkgb24gdGhlIGJvYXJkXG4gICAgYWRkUmFuZG9tU2hpcCgpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBudWxsO1xuICAgICAgICB3aGlsZSAoIXNoaXApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkSW5pdCA9IHRoaXMucG9zc2libGVNb3ZlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnBvc3NpYmxlTW92ZS5sZW5ndGgpXTtcbiAgICAgICAgICAgIC8vIGZvciB0aGUgaW5pdGlhbCBjb29yZGluYXRlIHdlIGNoZWNrIGlmIGl0IGlzIGluIHRoZSBib2FyZCBhbmQgaWYgaXQgaXMgbm90IG9uIGFub3RoZXIgc2hpcFxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkSW5pdCkgJiYgdGhpcy5jaGVja1NoaXBDb29yZChjb29yZEluaXQpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHNoaXBzIGFyZSBiZXR3ZWVuIGEgbGVuZ3RoIG9mIDIgYW5kIDRcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNCAtIDEgKyAxKSkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZEZpbjtcbiAgICAgICAgICAgICAgICAvLyBXZSByYW5kb21seSBjcmVhdGUgYSBzaGlwIGhveml6b250YWwgb3IgdmVydGljYWxcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICBjb29yZEZpbiA9IFtjb29yZEluaXRbMF0sIGNvb3JkSW5pdFsxXSArIGxlbmd0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb29yZEZpbiA9IFtjb29yZEluaXRbMF0gKyBsZW5ndGgsIGNvb3JkSW5pdFsxXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZvciB0aGUgZW5kaW5nIGNvb3JkaW5hdGUgd2UgY2hlY2sgaWYgaXQgaXMgaW4gdGhlIGJvYXJkIGFuZCBpZiBpdCBpcyBub3Qgb24gYW5vdGhlciBzaGlwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkRmluKSAmJiB0aGlzLmNoZWNrU2hpcENvb3JkKGNvb3JkRmluKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNoaXAoY29vcmRJbml0LCBjb29yZEZpbik7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIEFkZCBzaGlwIHdpdGggdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gICAgYWRkU2hpcChjb29yZEluaXQsIGNvb3JkRmluKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZEluaXQpICYmIHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkRmluKSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGNvb3JkSW5pdCwgY29vcmRGaW4pXG4gICAgICAgICAgICB0aGlzLnNoaXBBcnIucHVzaChzaGlwKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVTaGlwKHNoaXApO1xuICAgICAgICAgICAgdGhpcy5zaGlwQWxpdmUrKztcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgXG5cbiAgICAvLyBBZGQgc2hpcCB0byBib2FyZCBCYXJkVCBlYWNoIHRpbWUgYSBib2FyZCBpcyBhZGRlZFxuICAgIHBvcHVsYXRlU2hpcChzaGlwKSB7XG4gICAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEluaXRbMF1dW3NoaXAuY29vcmRJbml0WzFdXSA9ICd8JztcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRGaW5bMF1dW3NoaXAuY29vcmRJbml0WzFdXSA9ICc+JztcbiAgICAgICAgICAgIGZvciAobGV0IGk9c2hpcC5jb29yZEluaXRbMF0rMTsgaTw9c2hpcC5jb29yZEZpblswXS0xOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkVFtpXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnLS0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiVkVSVElDQUxcIikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEluaXRbMF1dW3NoaXAuY29vcmRJbml0WzFdXSA9ICdeJztcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtzaGlwLmNvb3JkRmluWzFdXSA9ICdfXyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpPXNoaXAuY29vcmRJbml0WzFdKzE7IGk8PXNoaXAuY29vcmRGaW5bMV0tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEluaXRbMF1dW2ldID0gJ3wnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFRyYW5zcG9zZSBhcnJheSBmb3Igc2hvd2luZyBib2FyZFxuICAgIHRyYW5zcG9zZShhcnIpIHtcbiAgICAgICAgbGV0IFtyb3ddID0gYXJyXG4gICAgICAgIHJldHVybiByb3cubWFwKCh2YWx1ZSwgY29sdW1uKSA9PiBhcnIubWFwKHJvdyA9PiByb3dbY29sdW1uXSkpXG4gICAgfVxuXG4gICAgLy8gU2hvdyB0cnVlIGJvYXJkIHdpdGggc2hpcHMgaW4gY29uc29sZVxuICAgIHNob3dCb2FyZCgpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBib2FyZFYgPSB0aGlzLnRyYW5zcG9zZShbLi4udGhpcy5ib2FyZFRdKVxuICAgICAgICBjb25zb2xlLmxvZyhbJyAnXS5jb25jYXQoQXJyYXkuZnJvbShBcnJheSg4KS5rZXlzKCkpKS50b1N0cmluZygpLnJlcGxhY2UoLywvZywnICcpKTtcbiAgICAgICAgYm9hcmRWLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9ICR7bGluZS50b1N0cmluZygpLnJlcGxhY2UoLywvZywnICcpfWApXG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY29vcmRpbmF0ZSB0b3VjaCB0aGUgc2hpcFxuICAgIGNoZWNrU2hpcEF0dGFjayhzaGlwLCBjb29yZCkge1xuICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIgJiYgY29vcmRbMV0gPT09IHNoaXAuY29vcmRJbml0WzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRbMF0gPj0gc2hpcC5jb29yZEluaXRbMF0gJiYgY29vcmRbMF0gPD0gc2hpcC5jb29yZEZpblswXSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIlZFUlRJQ0FMXCIgJiYgY29vcmRbMF0gPT09IHNoaXAuY29vcmRJbml0WzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRbMV0gPj0gc2hpcC5jb29yZEluaXRbMV0gJiYgY29vcmRbMV0gPD0gc2hpcC5jb29yZEZpblsxXSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gd2hlcmUgb3Bwb25lbnQgYXR0YWNrIGEgY29vcmRpbmF0ZSBvZiB0aGUgYm9hcmRcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkKSkge1xuICAgICAgICAgICAgbGV0IHRvdWNoZWQgPSBudWxsO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYSBzaGlwIGlzIHRvdWNoZWQgIFxuICAgICAgICAgICAgLy8gaWYgaXQgaXMgdGhlIGNhc2UgdGhlIGluZGV4IGlzIHN0b3JlZCBpbiB2YXJpYWJsZSBcInRvdWNoZWRcIlxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuc2hpcEFsaXZlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NoaXBBdHRhY2sodGhpcy5zaGlwQXJyW2ldLCBjb29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIG9uZSBhdHRhY2tcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrTmIrKztcbiAgICAgICAgICAgIC8vIEFkZCBhdHRhY2sgb24gYm9hcmRcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBcInhcIjtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBtb3ZlIGZyb20gcG9zc2libGUgbW92ZXMgYXJyYXlcbiAgICAgICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gdGhpcy5wb3NzaWJsZU1vdmUuZmlsdGVyKGNvb3JkZCA9PiBjb29yZGQudG9TdHJpbmcoKSAhPT0gY29vcmQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBpZiAodG91Y2hlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgc2hpcCBpcyB0b3VjaGVkXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZEdbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IFwib1wiO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcEFyclt0b3VjaGVkXS5oaXQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwQXJyW3RvdWNoZWRdLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIHNoaXAgaWYgaXRzIHN1bmtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQXJyLnNwbGljZSh0b3VjaGVkLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQWxpdmUtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkR1tjb29yZFswXV1bY29vcmRbMV1dID0gXCJ4XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNaXNzZWQrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHJlYWxQLCB4U2l6ZSwgeVNpemUpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzaXplIGlmIHRoZSBwbGF5ZXIgaXMgYSByZWFsIG9uZVxuICAgICAgICB0aGlzLnJlYWxQID0gcmVhbFA7XG4gICAgICAgIC8vIE5hbWUgZ2l2ZW4gdG8gdGhlIHBsYXllclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyBJcyBpdCB0aGUgY3VycmVudCBwbGF5ZXJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gYm9hcmQgb2YgdGhlIHBsYXllclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCh4U2l6ZSwgeVNpemUpO1xuICAgIH07XG5cbiAgICAvLyBtb2RpZml5IG5hbWUgb2YgdGhlIHBsYXllclxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH07XG5cbiAgICAvLyB0b2dnbGUgdGhlIGJvb2xlZW4gaWYgaXRzIHRoZSBvbmUgcGxheWluZ1xuICAgIHRvZ2dsZUFjdGl2ZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmU9ICF0aGlzLmFjdGl2ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcihjb29yZEluaXQsIGNvb3JkRmluKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugb2YgdGltZXMgdGhlIHNoaXAgd2VyZSBoaXRcbiAgICAgICAgdGhpcy5oaXROYiA9IDA7XG4gICAgICAgIC8vIEJvb2xlYW4gc2hvd2luZyBpZiB0aGUgc2hpcCB3YXMgaGl0IGluIGFsbCBpdHMgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjb29kaW5hdGVzIGluaXRpYWwgYW5kIGZpbmFsIG9mIHRoZSBzaGlwIGdpdmVuIGZvcm0gYSB2ZXJ0aWNhbCBzaGlwXG4gICAgICAgIGlmIChjb29yZEluaXRbMF0gPT09IGNvb3JkRmluWzBdICYmIGNvb3JkSW5pdFsxXSAhPT0gY29vcmRGaW5bMV0pIHtcbiAgICAgICAgICAgIC8vIGluaXQgbGVuZ3RoIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IE1hdGguYWJzKGNvb3JkSW5pdFsxXS1jb29yZEZpblsxXSkgKyAxXG4gICAgICAgICAgICAvLyBpbml0IHBvc2lzaW9uIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgLy8gc3RvcmUgaW5pdGlhbCBhbmQgZmluYWwgY29vcmRpbmF0ZSBpbiBmdW5jdGlvbiBvZiBpdHMgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuY29vcmRJbml0ID0gY29vcmRJbml0WzFdIDwgY29vcmRGaW5bMV0gPyBjb29yZEluaXQ6IGNvb3JkRmluO1xuICAgICAgICAgICAgdGhpcy5jb29yZEZpbiA9IGNvb3JkSW5pdFsxXSA+IGNvb3JkRmluWzFdID8gY29vcmRJbml0OiBjb29yZEZpbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb29yZEluaXRbMV0gPT09IGNvb3JkRmluWzFdICYmIGNvb3JkSW5pdFswXSAhPT0gY29vcmRGaW5bMF0pIHtcbiAgICAgICAgICAgIC8vIGluaXQgbGVuZ3RoIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IE1hdGguYWJzKGNvb3JkSW5pdFswXS1jb29yZEZpblswXSkgKyAxXG4gICAgICAgICAgICAvLyBpbml0IHBvc2lzaW9uIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICAvLyBzdG9yZSBpbml0aWFsIGFuZCBmaW5hbCBjb29yZGluYXRlIGluIGZ1bmN0aW9uIG9mIGl0cyBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5jb29yZEluaXQgPSBjb29yZEluaXRbMF0gPCBjb29yZEZpblswXSA/IGNvb3JkSW5pdDogY29vcmRGaW47XG4gICAgICAgICAgICB0aGlzLmNvb3JkRmluID0gY29vcmRJbml0WzBdID4gY29vcmRGaW5bMF0gPyBjb29yZEluaXQ6IGNvb3JkRmluO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29vcmRpbmF0ZSBnaXZlbiAke2Nvb3JkSW5pdH0gYW5kICR7Y29vcmRGaW59IGRvZXNuJ3QgYWxsb3cgdGhlIGNyZWF0aW9uIG9mIGEgc2hpcGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgc2hpcCBoYXMgc3Vua1xuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0TmIgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGlmIHNoaXAgaXMgaGl0IGl0ZXJhdGUgdGhlIG51bWJlciBvZiBoaXQgYW5kIGNoZWNrIGlmIHNoaXAgaGFzIHN1bmtcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0TmIrKztcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG59O1xuIiwiXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGRlYWxpbmcgd2l0aCB0aGUgY29udHJvbCBvZiB0aGUgcGxheWVyIGFuZCB0aGUgY29tcHV0ZXJcbmV4cG9ydCBjb25zdCBDb250cm9sR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIEdpdmUgcmVzdWx0cyB0byB0aGUgcm91bmQgYWN0dWFsbHkgcGxheWVkXG4gICAgY29uc3QgZGVhbFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCwgbmJTaGlwLCB0YXJnZXQsIHBsYXllcikge1xuICAgICAgICBjb25zdCBjb250YWluZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckFjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyR1wiKS50ZXh0Q29udGVudFxuICAgICAgICAvLyBDaGVjayBpZiBvbmUgc2hpcCB3YXMgaGl0XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiT1wiO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwicmdiYSgwLDI1NSwwLC4zKVwiXG4gICAgICAgICAgICBpZiAobmJTaGlwID09PSBwbGF5ZXIuYm9hcmQuc2hpcEFsaXZlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVySW5mby50ZXh0Q29udGVudCA9IGA6ICR7cGxheWVyQWN0aXZlfSBUb3VjaGVkYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVySW5mby50ZXh0Q29udGVudCA9IGA6ICR7cGxheWVyQWN0aXZlfSBoYXMgc3VuayBhIGJvYXRgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcInJnYmEoMjU1LDAsMCwuMylcIlxuICAgICAgICAgICAgY29udGFpbmVySW5mby50ZXh0Q29udGVudCA9IGA6ICR7cGxheWVyQWN0aXZlfSBNaXNzZWRgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIGF0dGFjayBvZiBhIGh1bWFuIHBsYXllclxuICAgIGNvbnN0IGF0dGFja0MgPSBmdW5jdGlvbihldmVudCwgcGxheWVyKSB7XG4gICAgICAgIC8vIEdldCBhbGwgY3VycmVudCBzaGlwIGluIG9yZGVyIHRvIGNvbXBhcmUgYWZ0ZXIgdGhlIGF0dGFja1xuICAgICAgICBjb25zdCBuYlNoaXAgPSBwbGF5ZXIuYm9hcmQuc2hpcEFsaXZlO1xuICAgICAgICAvLyBHZXQgcG9zaXRpb24gb24gZnJvbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb29yZGluYXRlIGNsaWNrZWQgYnkgcGxheWVyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGNvb3JkaW5hdGUgY2xpY2tlZCBpcyBvbiB0aGUgZ3JpZFxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSAhPSBcImdyaWRfZWxlbVwiKSByZXR1cm5cbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgY29vcmRpbmF0ZSBmcm9tIHRoZSBpZCBvZiB0aGUgZ3JpZCBlbGVtZW50XG4gICAgICAgIGxldCBbeUNvb3JkLCB4Q29vcmRdID0gdGFyZ2V0LmlkLm1hdGNoKC9cXGQrL2cpO1xuICAgICAgICAvLyBBdHRhY2sgdGhlIHBsYXllcidzIGJvYXJkIGdpdmVuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKFtOdW1iZXIoeENvb3JkKSwgTnVtYmVyKHlDb29yZCldKTtcbiAgICAgICAgLy8gQXBwbHkgdGhlIHJlc3VsdHNcbiAgICAgICAgZGVhbFJlc3VsdChyZXN1bHQsIG5iU2hpcCwgdGFyZ2V0LCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiBhdHRhY2sgb2YgYSBjb21wdXRlclxuICAgIGNvbnN0IGF0dGFja1JhbmRvbSA9IGZ1bmN0aW9uKHBsYXllcikge1xuICAgICAgICAvLyBHZXQgYWxsIGN1cnJlbnQgc2hpcCBpbiBvcmRlciB0byBjb21wYXJlIGFmdGVyIHRoZSBhdHRhY2tcbiAgICAgICAgY29uc3QgbmJTaGlwID0gcGxheWVyLmJvYXJkLnNoaXBBbGl2ZTtcbiAgICAgICAgLy8gR2V0IGFsbCBwb3NzaWJsZSBtb3ZlcyBvbiB0aGUgYm9hcmRcbiAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlID0gcGxheWVyLmJvYXJkLnBvc3NpYmxlTW92ZTtcbiAgICAgICAgLy8gZ2V0IG9uZSByYW5kb20gY29vcmRpbmF0ZSBpbiBhbGwgcG9zc2libGUgbW92ZXNcbiAgICAgICAgY29uc3QgY29vcmQgPSBwb3NzaWJsZU1vdmVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3ZlLmxlbmd0aCldO1xuICAgICAgICAvLyBHZXQgcG9zaXRpb24gb24gZnJvbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb29yZGluYXRlIG9idGFpbmVkXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByXyR7Y29vcmRbMV19X2NfJHtjb29yZFswXX1gKTtcbiAgICAgICAgLy8gQXR0YWNrIHRoZSBwbGF5ZXIncyBib2FyZCBnaXZlblxuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbTnVtYmVyKGNvb3JkWzBdKSwgTnVtYmVyKGNvb3JkWzFdKV0pO1xuICAgICAgICAvLyBBcHBseSB0aGUgcmVzdWx0c1xuICAgICAgICBkZWFsUmVzdWx0KHJlc3VsdCwgbmJTaGlwLCB0YXJnZXQsIHBsYXllcik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFja0MsXG4gICAgICAgIGF0dGFja1JhbmRvbVxuICAgIH07XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2ludGVybmFsL1BsYXllclwiXG5pbXBvcnQgeyBDb250cm9sR2FtZSB9IGZyb20gXCIuL0NvbnRyb2xHYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVHYW1lID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gQ29udHJvbEdhbWUoKTtcblxuICAgIGNvbnN0IHJhbmRvbVNoaXAgPSBmdW5jdGlvbihwbGF5ZXIsIG5iU2hpcD0zKXtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkKVxuICAgICAgICBwbGF5ZXIuYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQpXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxuYlNoaXA7IGkrKyl7XG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYWRkUmFuZG9tU2hpcCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZClcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBhY3RpdmU9ZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LW5hbWVgKS52YWx1ZSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LW5hbWVgKS52YWx1ZTogbmFtZTtcbiAgICAgICAgY29uc3Qgc2l6ZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29vcmRYJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHNpemVZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb3JkWScpLnZhbHVlO1xuICAgICAgICBjb25zdCByZWFsUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LXJlYWxwYCkuY2hlY2tlZDtcbiAgICAgICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lLCByZWFsUCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgcGxheWVyLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJhbmRvbVNoaXAocGxheWVyKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuXG4gICAgbGV0IHBsYXllcnMgPSB7XG4gICAgICAgIHBsYXllcjE6IGNyZWF0ZVBsYXllcihcInBsYXllcjFcIiwgdHJ1ZSksXG4gICAgICAgIHBsYXllcjI6IGNyZWF0ZVBsYXllcihcInBsYXllcjJcIiksXG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyc1twbGF5ZXJdLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm9uQWN0aXZlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGxheWVyIGluIHBsYXllcnMpIHtcbiAgICAgICAgICAgIGlmICghcGxheWVyc1twbGF5ZXJdLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQWN0aXZlID0gZ2V0QWN0aXZlUGxheWVyKCk7XG4gICAgICAgIGNvbnN0IHBsYXllck5vbkFjdGl2ZSA9IGdldE5vbkFjdGl2ZVBsYXllcigpO1xuICAgICAgICBwbGF5ZXJzW3BsYXllckFjdGl2ZV0udG9nZ2xlQWN0aXZlKCk7XG4gICAgICAgIHBsYXllcnNbcGxheWVyTm9uQWN0aXZlXS50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFwbGF5ZXJzW2dldEFjdGl2ZVBsYXllcigpXS5yZWFsUCkge1xuICAgICAgICAgICAgY29uc3QgcmVzQXR0YWNrID0gY29udHJvbGxlci5hdHRhY2tSYW5kb20ocGxheWVyc1tnZXROb25BY3RpdmVQbGF5ZXIoKV0pO1xuICAgICAgICAgICAgY2hlY2tSZXNBdHRhY2socmVzQXR0YWNrKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tSZXNBdHRhY2sgPSBmdW5jdGlvbihyZXNBdHRhY2spIHtcbiAgICAgICAgaWYgKCFyZXNBdHRhY2spIHtcbiAgICAgICAgICAgIGNoYW5nZVBsYXllcigpXG4gICAgICAgIH1cbiAgICAgICAgc2hvd1BsYXllcigpXG4gICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVyc1tnZXROb25BY3RpdmVQbGF5ZXIoKV0uYm9hcmQuYm9hcmRHLCBcImdyaWRcIilcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVycylcbiAgICAgICAgaWYgKHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldLmJvYXJkLnNoaXBBbGl2ZSA9PT0gMCl7XG4gICAgICAgICAgICBlbmRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthdHRhY2soKTt9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gZnVuY3Rpb24oYm9hcmQsIG5hbWUpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IGJvYXJkWzBdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29scyA9IGJvYXJkLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lKVswXTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZVtcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiXSA9IGByZXBlYXQoJHtjb2xzfSwgMnJlbSlgXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZVtcImdyaWQtdGVtcGxhdGUtcm93c1wiXSA9IGByZXBlYXQoJHtyb3dzfSwgMnJlbSlgXG4gICAgICAgIGZvciAobGV0IHJvdz0wOyByb3c8cm93czsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbD0wOyBjb2w8Y29sczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGdyaWRfZWxlbS5jbGFzc05hbWUgPSBcImdyaWRfZWxlbVwiO1xuICAgICAgICAgICAgICAgIGdyaWRfZWxlbS5pZCA9IGByXyR7cm93fV9jXyR7Y29sfWA7XG4gICAgICAgICAgICAgICAgZ3JpZF9lbGVtLnRleHRDb250ZW50ID0gYm9hcmRbY29sXVtyb3ddO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkX2VsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc0F0dGFjayA9IGNvbnRyb2xsZXIuYXR0YWNrQyhldmVudCwgcGxheWVyc1tnZXROb25BY3RpdmVQbGF5ZXIoKV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjaGVja1Jlc0F0dGFjayhyZXNBdHRhY2spO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZW5kR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZFwiKVswXTtcbiAgICAgICAgY29uc3QgcGxheWVyV2luID0gcGxheWVyc1tnZXRBY3RpdmVQbGF5ZXIoKV07XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJXaW4ubmFtZX0gV2luIHRoZSBHYW1lYFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckdcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcGxheWVyc1tnZXRBY3RpdmVQbGF5ZXIoKV0ubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgcGxheWVycywgXG4gICAgICAgIGdlbmVyYXRlQm9hcmQsXG4gICAgICAgIHNob3dQbGF5ZXIsXG4gICAgICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICByYW5kb21TaGlwXG4gICAgfTtcbn07IiwiaW1wb3J0IHsgQ3JlYXRlR2FtZSB9IGZyb20gXCIuL0NyZWF0ZUdhbWVcIlxuXG5jb25zdCBydW5HYW1lID0gZnVuY3Rpb24oZ2FtZSkge1xuICAgIGdhbWUuc2hvd1BsYXllcigpXG4gICAgZ2FtZS5nZW5lcmF0ZUJvYXJkKGdhbWUucGxheWVycy5wbGF5ZXIxLmJvYXJkLmJvYXJkRywgXCJncmlkXCIpXG4gICAgaWYgKCFnYW1lLnBsYXllcnMucGxheWVyMS5yZWFsUCl7XG4gICAgICAgIGdhbWUuYXR0YWNrKClcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBVSSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJ1dHRvblJ1biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVuLWdhbWVcIik7XG5cblxuICAgIGJ1dHRvblJ1bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9IFwiUkVTVEFSVFwiO1xuICAgICAgICBjb25zdCBnYW1lID0gQ3JlYXRlR2FtZSgpO1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJzLnBsYXllcjEucmVhbFAgJiYgZ2FtZS5wbGF5ZXJzLnBsYXllcjIucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5MS1nYW1lXCIpO1xuICAgICAgICAgICAgZ2FtZS5yYW5kb21TaGlwKGdhbWUucGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDFcIilcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLnRleHRDb250ZW50ID0gYEdvIHRvICR7Z2FtZS5wbGF5ZXJzLnBsYXllcjIubmFtZX0gQm9hcmRgXG4gICAgICAgICAgICBkaWFsb2dQMS5zaG93TW9kYWwoKTtcblxuICAgICAgICAgICAgYnV0dG9uUmFuZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgZ2FtZS5nZW5lcmF0ZUJvYXJkKGdhbWUucGxheWVycy5wbGF5ZXIxLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnV0dG9uUGxheTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyLXNoaXBcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uUmFuZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmQtc2hpcDJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uUGxheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkyLWdhbWVcIik7XG4gICAgICAgICAgICAgICAgZGlhbG9nUDEuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBnYW1lLnJhbmRvbVNoaXAoZ2FtZS5wbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDJcIilcbiAgICAgICAgICAgICAgICBkaWFsb2dQMi5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBidXR0b25SYW5kMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDJcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJ1dHRvblBsYXkyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUDIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcnVuR2FtZShnYW1lKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lLnBsYXllcnMucGxheWVyMS5yZWFsUCkge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjEtc2hpcFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblJhbmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kLXNoaXAxXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUGxheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkxLWdhbWVcIik7XG4gICAgICAgICAgICBnYW1lLnJhbmRvbVNoaXAoZ2FtZS5wbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgZ2FtZS5nZW5lcmF0ZUJvYXJkKGdhbWUucGxheWVycy5wbGF5ZXIxLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMVwiKVxuICAgICAgICAgICAgYnV0dG9uUGxheTEudGV4dENvbnRlbnQgPSBgUGxheSBHYW1lYFxuICAgICAgICAgICAgZGlhbG9nUDEuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBidXR0b25SYW5kMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZS5yYW5kb21TaGlwKGdhbWUucGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICBnYW1lLmdlbmVyYXRlQm9hcmQoZ2FtZS5wbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAxXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnV0dG9uUGxheTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpYWxvZ1AxLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcnVuR2FtZShnYW1lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2FtZS5wbGF5ZXJzLnBsYXllcjIucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5Mi1nYW1lXCIpO1xuICAgICAgICAgICAgZ2FtZS5yYW5kb21TaGlwKGdhbWUucGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgIGdhbWUuZ2VuZXJhdGVCb2FyZChnYW1lLnBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDJcIilcbiAgICAgICAgICAgIGRpYWxvZ1AyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgYnV0dG9uUmFuZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgZ2FtZS5nZW5lcmF0ZUJvYXJkKGdhbWUucGxheWVycy5wbGF5ZXIyLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMlwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ1dHRvblBsYXkyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dQMi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJ1bkdhbWUoZ2FtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2FtZS5yYW5kb21TaGlwKGdhbWUucGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgIGdhbWUucmFuZG9tU2hpcChnYW1lLnBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICBydW5HYW1lKGdhbWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=