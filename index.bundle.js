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
    right: 0;
}

footer .fa {
    color: var(--main-color);
    font-size: 5rem;
    opacity: .7;
    text-decoration: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/footer.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,SAAS;IACT,QAAQ;AACZ;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,WAAW;IACX,qBAAqB;AACzB","sourcesContent":["footer {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n}\n\nfooter .fa {\n    color: var(--main-color);\n    font-size: 5rem;\n    opacity: .7;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Gameboard */
#gameboard-loc {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.grid_p.active {
    border: 1px solid rgb(51, 255, 0);
}

.grid div, #board-ship1, #board-ship2 {
    display: grid;
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(3, 5rem);
}

.grid div div, #board-ship1 div, #board-ship2 div {
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
}`, "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA,cAAc;AACd;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["/* Gameboard */\n#gameboard-loc {\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}\n\n.grid_p.active {\n    border: 1px solid rgb(51, 255, 0);\n}\n\n.grid div, #board-ship1, #board-ship2 {\n    display: grid;\n    grid-template-columns: repeat(3, 5rem);\n    grid-template-rows: repeat(3, 5rem);\n}\n\n.grid div div, #board-ship1 div, #board-ship2 div {\n    border: 1px solid rgba(0, 0, 0, 0.6);\n}\n\n.grid_elem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.grid_elem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.grid_elem:hover {\n    background-color: rgba(0, 0, 255, 0.1);\n}\n\n.grid_elem.won {\n    background-color: rgba(0, 255, 0, 0.4);\n}\n\n#info-game{\n    display: flex;\n    flex-direction: row;\n}\n\n#info-r {\n    margin-top: .2rem;\n}"],"sourceRoot":""}]);
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
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
}

header h1 {
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["header {\n    position: relative;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 3rem;\n}\n\nheader h1 {\n    font-size: 2rem;\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n}"],"sourceRoot":""}]);
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
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
}

#gen-param {
    overflow: auto;
    width: 40%;
}

#game {
    overflow: auto;
    width: 40%;
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

`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,4CAA4C;AAChD","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody {\n    font-family: system-ui, sans-serif; \n}\n\nmain {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 1rem;\n}\n\n#gen-param {\n    overflow: auto;\n    width: 40%;\n}\n\n#game {\n    overflow: auto;\n    width: 40%;\n}\n\n.player {\n    display: flex;\n    gap: 1rem;\n}\n\n.player .active label {\n    font-weight: 800;\n}\n\n.player .active input {\n    background-color: rgba(0, 0, 255, 0.2);\n}\n\n.player1, .player2 {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.player1 label, .player2 label {\n    align-self: center;\n}\n\n.player1 input, .player2 input {\n    padding: 0.5rem;\n    border: 1px solid black;\n    border-radius: 2rem;\n    font-size: 1.2rem;\n}\n\n.player1 input:focus, .player2 input:focus {\n    outline: 2px solid black;\n}\n\n.info-board input {\n    max-width: 3rem;\n}\n\n.parameters {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.board-size {\n    display: flex;\n    flex-direction: row;\n    gap: .5rem;\n}\n\n#run-game {\n    border-radius: 2rem;\n    border: 1px solid ;\n    box-shadow: 0.05rem 0 0.05rem 0.05rem;\n    width: 20rem;\n    cursor: pointer;\n    font-size: 1.5rem;\n    background-color: rgba(117, 117, 248, 0.705);\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/gameboard.css */ "./src/styles/gameboard.css");
/* harmony import */ var _modules_ui_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ui/ui */ "./src/modules/ui/ui.js");








(0,_modules_ui_ui__WEBPACK_IMPORTED_MODULE_5__.UI)();


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
                checkShip = coord[0] < ship.coordInit[0] || coord[0] > ship.coordFin[0]
            }
            else if (ship.position === "VERTICAL" && coord[0] === ship.coordInit[0]) {
                checkShip = coord[1] < ship.coordInit[1] || coord[1] > ship.coordFin[1]
            }
        })
        return checkShip;
    }

    checkCoordinate(coord) {
        return coord[0] < this.xSize && coord[1] < this.ySize
    }

    // Function to add a ship randomly on the board
    addRandomShip(length=3) {
        let ship = null;
        while (!ship) {
            const coordInit = this.possibleMove[Math.floor(Math.random()*this.possibleMove.length)];
            // for the initial coordinate we check if it is in the board and if it is not on another ship
            if (this.checkCoordinate(coordInit) && this.checkShipCoord(coordInit)) {
                // The ships are between a length of 2 and 4
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
            let touched = [];
            // Check if a ship is touched  
            // if it is the case the index is stored in variable "touched"
            for (let i=0; i<this.shipAlive; i++) {
                if (this.checkShipAttack(this.shipArr[i], coord)) {
                    touched.push(i);
                }
            }
            // Add one attack
            this.attackNb++;
            // Add attack on board
            this.boardT[coord[0]][coord[1]] = "x";
            // delete move from possible moves array
            this.possibleMove = this.possibleMove.filter(coordd => coordd.toString() !== coord.toString());
            if (touched.length !== 0) {
                for (const touch of touched) {
                    // If a ship is touched
                    this.boardG[coord[0]][coord[1]] = "o";
                    this.shipArr[touch].hit();
                    if (this.shipArr[touch].sunk) {
                        // Delete ship if its sunk
                        this.shipArr.splice(touch, 1);
                        this.shipAlive--;
                    }
                    return true;
                }
                
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
            target.style["background-color"] = "rgba(0,255,0,.3)"
            if (nbShip === player.board.shipAlive) {
                containerInfo.textContent = `: ${playerActive} Touched`
            }
            else {
                containerInfo.textContent = `: ${playerActive} has sunk a boat`
            }
        }
        else {
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
        if (!target.classList.contains(`grid_elem_${player.name}`)) return
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
        const target = document.querySelector(`#r_${coord[1]}_c_${coord[0]}.grid_elem_${player.name}`);
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



// Function to create and control the game
const CreateGame = function() {

    // Initialise the object containing the players
    let players = {
        player1: "",
        player2: "",
    };

    // Creation to control object to attack and get results
    const controller = (0,_ControlGame__WEBPACK_IMPORTED_MODULE_1__.ControlGame)();

    // Get the current player and show its name on the front
    const showPlayer = function() {
        const title = document.getElementById("playerG");
        title.textContent = players[getActivePlayer()].name;
    }

    // Generate 3 random ships of length 2 to 5
    const randomShip = function(player, nbShip=3){
        player.board.resetBoard();
        for (let i=0; i<nbShip; i++){
            player.board.addRandomShip(i+2);
        }
    };

    // Create a player using the the inputs in the front
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

    // Check if the 2 players have the same names and update them if it is the case
    // Prevent id colisition in the boards
    const checkPlayersName = function() {
        if (players.player1.name === players.player2.name) {
            players.player1.setName(players.player1.name + "-1");
            players.player2.setName(players.player2.name + "-2");
        }
    };

    // Store players information used in game
    players = {
        player1: createPlayer("player1", true),
        player2: createPlayer("player2"),
    };

    // Get the player which is currently playing
    const getActivePlayer = function() {
        for (const player in players) {
            if (players[player].active) {
                return player;
            }
        }
        return null;
    };

    // Get the player which is not currently playing
    const getNonActivePlayer = function() {
        for (const player in players) {
            if (!players[player].active) {
                return player;
            }
        }
        return null;
    };

    // Alternate active and non active player as well as update the active board
    const changePlayer = function() {
        const playerActive = getActivePlayer();
        const playerNonActive = getNonActivePlayer();
        players[playerActive].toggleActive();
        players[playerNonActive].toggleActive();
        const boardP1 = document.getElementsByClassName(`grid_${players[playerActive].name}`)[0];
        const boardP2 = document.getElementsByClassName(`grid_${players[playerNonActive].name}`)[0];
        boardP1.classList.toggle("active");
        boardP2.classList.toggle("active");
    };

    // Attack from the computer
    const attack = function() {
        if (!players[getActivePlayer()].realP) {
            const resAttack = controller.attackRandom(players[getNonActivePlayer()]);
            checkResAttack(resAttack);
        }
    };

    // Once a player attack wecheck if check if it was a succesful attack and check if the game end
    const checkResAttack = function(resAttack) {
        if (!resAttack) {
            changePlayer();
        }
        showPlayer();
        if (players[getNonActivePlayer()].board.shipAlive === 0){
            endGame();
        }
        else {
            // Use timeout in order to show the computer playing
            setTimeout(function(){attack();}, 100);
        }
    };

    // Function which create a board
    const generateBoard = function(playerName, board, name, playing=true) {
        // Get Board size 
        const rows = board[0].length;
        const cols = board.length;
        // Get div elements where board is located
        const container = document.getElementById(name);
        // Reset the board
        container.innerHTML = "";
        // Add class to this element in order to differentiate the different boards created
        container.classList.add(`grid_p`);
        container.classList.add(`grid_${playerName}`);
        // Create the grid
        container.style["grid-template-columns"] = `repeat(${cols}, 2rem)`
        container.style["grid-template-rows"] = `repeat(${rows}, 2rem)`
        // Populate the board
        for (let row=0; row<rows; row++) {
            for (let col=0; col<cols; col++) {
                const grid_elem = document.createElement("div");
                grid_elem.className = `grid_elem grid_elem_${playerName}`;
                grid_elem.id = `r_${row}_c_${col}`;
                grid_elem.textContent = board[col][row];
                container.appendChild(grid_elem);
            }
        }
        // Add event to the board for when the player is clicking 
        if (playing) {
            container.onclick = function(event) {
                // Check if the coordinate clicked was already used befor attacking the coordinate
                let [yCoord, xCoord] = event.target.id.match(/\d+/g);
                const checkMove = players[getNonActivePlayer()].board.possibleMove.map((elem) => elem.toString()).indexOf([xCoord, yCoord].toString());
                // Morever we also check if the board selected is the active one
                if (event.target.parentElement.classList.contains("active") && checkMove !== -1) {
                    const resAttack = controller.attackC(event, players[getNonActivePlayer()]);
                    checkResAttack(resAttack);
                    event.target.style.cursor = "not-allowed";
                }
            }
        }
    };

    // Start the Game by building the boards and if necessary executing the first attack
    const runGame = function() {
        showPlayer()
        generateBoard(players.player1.name, players.player1.board.boardG, "player1-grid")
        generateBoard(players.player2.name, players.player2.board.boardG, "player2-grid")
        const boardP = document.getElementsByClassName(`grid_${players.player2.name}`)[0]
        boardP.classList.toggle("active");
        if (!players.player1.realP){
            attack()
        }
    }
    
    // Main function selecting the ship for the human players
    const getGame = function() {
        const player1Name = document.getElementById("player1-game-name");
        const player2Name = document.getElementById("player2-game-name");
        checkPlayersName();
        player1Name.textContent = players.player1.name;
        player2Name.textContent = players.player2.name;
        if (players.player1.realP && players.player2.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            randomShip(players.player1);
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            buttonPlay1.textContent = `Go to ${players.player2.name} Board`
            dialogP1.showModal();
    
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            })
            
            buttonPlay1.addEventListener("click", (event) => {
                const dialogP2 = document.getElementById("player2-ship");
                const buttonRand2 = document.getElementById("rand-ship2");
                const buttonPlay2 = document.getElementById("play2-game");
                dialogP1.close();
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
                dialogP2.showModal();
                buttonRand2.addEventListener("click", (event) => {
                    randomShip(players.player2);
                    generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
                })
                buttonPlay2.addEventListener("click", (event) => {
                    dialogP2.close();
                    runGame();
                })
            })
        }
        else if (players.player1.realP) {
            const dialogP1 = document.getElementById("player1-ship");
            const buttonRand1 = document.getElementById("rand-ship1");
            const buttonPlay1 = document.getElementById("play1-game");
            randomShip(players.player2);
            generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            buttonPlay1.textContent = `Play Game`
            dialogP1.showModal();
            buttonRand1.addEventListener("click", (event) => {
                randomShip(players.player1);
                generateBoard(players.player1.name, players.player1.board.boardT, "board-ship1", false)
            })
            buttonPlay1.addEventListener("click", (event) => {
                dialogP1.close();
                runGame();
            })
        }
        else if (players.player2.realP) {
            const dialogP2 = document.getElementById("player2-ship");
            const buttonRand2 = document.getElementById("rand-ship2");
            const buttonPlay2 = document.getElementById("play2-game");
            randomShip(players.player1);
            generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
            dialogP2.showModal();
            buttonRand2.addEventListener("click", (event) => {
                randomShip(players.player2);
                generateBoard(players.player2.name, players.player2.board.boardT, "board-ship2", false)
            })
            buttonPlay2.addEventListener("click", (event) => {
                dialogP2.close();
                runGame();
            })
        }
        else {
            randomShip(players.player1);
            randomShip(players.player2);
            runGame();
        }
    } 

    // Function Ending the game
    const endGame = function() {
        const containerP1 = document.getElementById("player1-grid");
        const containerP2 = document.getElementById("player2-grid");
        const playerWin = players[getActivePlayer()];
        
        document.getElementsByClassName(`grid_${players["player1"].name}`)[0].className = "";
        document.getElementsByClassName(`grid_${players["player2"].name}`)[0].className = "";

        document.getElementById("info-r").textContent = `${playerWin.name} win !!!`
    };
    

    return { 
        getGame
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



const UI = function() {
    const buttonRun = document.getElementById("run-game");

    buttonRun.addEventListener("click", (event) => {
        if (event.target.className === "restart") {
            window.location.reload()
        }
        else {
            event.target.textContent = "RESET";
            event.target.className = "restart";
            const game = (0,_CreateGame__WEBPACK_IMPORTED_MODULE_0__.CreateGame)();
            game.getGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELHFCQUFxQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQkFBc0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx3QkFBd0I7QUFDeEUsZ0RBQWdELHdCQUF3Qjs7QUFFeEUsMkRBQTJELGdCQUFnQjtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyUXlDOzs7QUFHbEM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1REFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb290ZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGlhbG9nLmNzcz83Njk0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzcz83ZTkyIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcz9lNjhiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbnRlcm5hbC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW50ZXJuYWwvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ludGVybmFsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ29udHJvbEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ3JlYXRlR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91aS91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogMzAlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1zaGVsdmVzKTtcbn1cblxuXG5kaWFsb2cgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC43ODEpO1xufVxuZGlhbG9nIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5kaWFsb2cgI3Jlc3VsdC1nYW1lIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stc2hlbHZlcyk7XFxufVxcblxcblxcbmRpYWxvZyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC43ODEpO1xcbn1cXG5kaWFsb2cgYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuZGlhbG9nICNyZXN1bHQtZ2FtZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbmZvb3RlciAuZmEge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG5mb290ZXIgLmZhIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2FtZWJvYXJkICovXG4jZ2FtZWJvYXJkLWxvYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmdyaWRfcC5hY3RpdmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1MSwgMjU1LCAwKTtcbn1cblxuLmdyaWQgZGl2LCAjYm9hcmQtc2hpcDEsICNib2FyZC1zaGlwMiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA1cmVtKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA1cmVtKTtcbn1cblxuLmdyaWQgZGl2IGRpdiwgI2JvYXJkLXNoaXAxIGRpdiwgI2JvYXJkLXNoaXAyIGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4uZ3JpZF9lbGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdyaWRfZWxlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmlkX2VsZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xufVxuXG4uZ3JpZF9lbGVtLndvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNCk7XG59XG5cbiNpbmZvLWdhbWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jaW5mby1yIHtcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHYW1lYm9hcmQgKi9cXG4jZ2FtZWJvYXJkLWxvYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmdyaWRfcC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTEsIDI1NSwgMCk7XFxufVxcblxcbi5ncmlkIGRpdiwgI2JvYXJkLXNoaXAxLCAjYm9hcmQtc2hpcDIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA1cmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNXJlbSk7XFxufVxcblxcbi5ncmlkIGRpdiBkaXYsICNib2FyZC1zaGlwMSBkaXYsICNib2FyZC1zaGlwMiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5ncmlkX2VsZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZF9lbGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWRfZWxlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbn1cXG5cXG4uZ3JpZF9lbGVtLndvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG5cXG4jaW5mby1nYW1le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jaW5mby1yIHtcXG4gICAgbWFyZ2luLXRvcDogLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjsgXG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4jZ2VuLXBhcmFtIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogNDAlO1xufVxuXG4jZ2FtZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLnBsYXllciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5wbGF5ZXIgLmFjdGl2ZSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnBsYXllciAuYWN0aXZlIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yKTtcbn1cblxuLnBsYXllcjEsIC5wbGF5ZXIyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5wbGF5ZXIxIGxhYmVsLCAucGxheWVyMiBsYWJlbCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucGxheWVyMSBpbnB1dCwgLnBsYXllcjIgaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucGxheWVyMSBpbnB1dDpmb2N1cywgLnBsYXllcjIgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmluZm8tYm9hcmQgaW5wdXQge1xuICAgIG1heC13aWR0aDogM3JlbTtcbn1cblxuLnBhcmFtZXRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmJvYXJkLXNpemUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IC41cmVtO1xufVxuXG4jcnVuLWdhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xuICAgIGJveC1zaGFkb3c6IDAuMDVyZW0gMCAwLjA1cmVtIDAuMDVyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNywgMTE3LCAyNDgsIDAuNzA1KTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNENBQTRDO0FBQ2hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBzYW5zLXNlcmlmOyBcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbiNnZW4tcGFyYW0ge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuI2dhbWUge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnBsYXllciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnBsYXllciAuYWN0aXZlIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnBsYXllciAuYWN0aXZlIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMik7XFxufVxcblxcbi5wbGF5ZXIxLCAucGxheWVyMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucGxheWVyMSBsYWJlbCwgLnBsYXllcjIgbGFiZWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXIxIGlucHV0LCAucGxheWVyMiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucGxheWVyMSBpbnB1dDpmb2N1cywgLnBsYXllcjIgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5pbmZvLWJvYXJkIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzcmVtO1xcbn1cXG5cXG4ucGFyYW1ldGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5ib2FyZC1zaXplIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuI3J1bi1nYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xcbiAgICBib3gtc2hhZG93OiAwLjA1cmVtIDAgMC4wNXJlbSAwLjA1cmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE3LCAxMTcsIDI0OCwgMC43MDUpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL2hlYWRlci5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9mb290ZXIuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9kaWFsb2cuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZWJvYXJkLmNzcyc7XG5cbmltcG9ydCB7IFVJIH0gZnJvbSAnLi9tb2R1bGVzL3VpL3VpJztcblxuVUkoKTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih4U2l6ZSwgeVNpemUpIHtcbiAgICAgICAgLy8gU2l6ZSBvZiBnYW1lYm9hcmRcbiAgICAgICAgdGhpcy54U2l6ZSA9IHhTaXplO1xuICAgICAgICB0aGlzLnlTaXplID0geVNpemU7XG4gICAgICAgIC8vIEFycmF5IHdpdGggYWxsIHNoaXAgb2YgZ2FtZWJvYXJkXG4gICAgICAgIHRoaXMuc2hpcEFyciA9IFtdO1xuICAgICAgICAvLyBJbml0aWFsaXNpemUgdGhlIG51bWJlciBvZiBhdHRhY2tcbiAgICAgICAgdGhpcy5hdHRhY2tOYiA9IDA7XG4gICAgICAgIC8vIEluaXRpYWxpc2l6ZSB0aGUgbnVtYmVyIG9mIG1pc3NlZCBhdHRhY2tcbiAgICAgICAgdGhpcy5hdHRhY2tNaXNzZWQgPSAwO1xuICAgICAgICAvLyBJbml0aWFsaXN6ZSB0aGUgbnVtYmVyIG9mIHNoaXAgc3RpbGwgYWxpdmVcbiAgICAgICAgdGhpcy5zaGlwQWxpdmUgPSAwO1xuICAgICAgICAvLyBBcnJheSB3aXRoIGFsbCBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZSA9IFtdXG4gICAgICAgIC8vIEluaXRpYWxpc2UgQm9hcmRUIHdpY2ggd2lsbCBjb250YWluIHRoZSBzaGlwc1xuICAgICAgICB0aGlzLmJvYXJkVCA9IHRoaXMuaW5pdEJvYXJkKFwiLlwiKTtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBCb2FyZEcgdGhlIGJvYXJkIGZvciB0aGUgZ2FtZSB2aXJnaW5cbiAgICAgICAgdGhpcy5ib2FyZEcgPSB0aGlzLmluaXRCb2FyZChcIlwiKTtcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGlzZSB0aGUgMiBib2FyZHMgYXJyYXkgYW5kIHRoZSBwb3NzaWJsZSBtb3Zlc1xuICAgIGluaXRCb2FyZChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnhTaXplOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMueVNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldW2pdID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZS5wdXNoKFtpLCBqXSkgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBib2FyZCB1c2VkIGZvciBuZXcgZ2FtZSBvciB0byByZWluaXRpYWxpc2UgdGhlIHNoaXBzXG4gICAgcmVzZXRCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5zaGlwQXJyID0gW107XG4gICAgICAgIHRoaXMuYXR0YWNrTmIgPSAwO1xuICAgICAgICB0aGlzLmF0dGFja01pc3NlZCA9IDA7XG4gICAgICAgIHRoaXMuc2hpcEFsaXZlID0gMDtcbiAgICAgICAgdGhpcy5wb3NzaWJsZU1vdmUgPSBbXVxuICAgICAgICB0aGlzLmJvYXJkVCA9IHRoaXMuaW5pdEJvYXJkKFwiLlwiKTtcbiAgICAgICAgdGhpcy5ib2FyZEcgPSB0aGlzLmluaXRCb2FyZChcIlwiKTtcbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkaW5hdGUgZ2l2ZW4gaXMgb24gdGhlIHBhdGggb2YgYSBzaGlwXG4gICAgY2hlY2tTaGlwQ29vcmQoY29vcmQpIHtcbiAgICAgICAgbGV0IGNoZWNrU2hpcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcEFyci5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIgJiYgY29vcmRbMV0gPT09IHNoaXAuY29vcmRJbml0WzFdKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tTaGlwID0gY29vcmRbMF0gPCBzaGlwLmNvb3JkSW5pdFswXSB8fCBjb29yZFswXSA+IHNoaXAuY29vcmRGaW5bMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiVkVSVElDQUxcIiAmJiBjb29yZFswXSA9PT0gc2hpcC5jb29yZEluaXRbMF0pIHtcbiAgICAgICAgICAgICAgICBjaGVja1NoaXAgPSBjb29yZFsxXSA8IHNoaXAuY29vcmRJbml0WzFdIHx8IGNvb3JkWzFdID4gc2hpcC5jb29yZEZpblsxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY2hlY2tTaGlwO1xuICAgIH1cblxuICAgIGNoZWNrQ29vcmRpbmF0ZShjb29yZCkge1xuICAgICAgICByZXR1cm4gY29vcmRbMF0gPCB0aGlzLnhTaXplICYmIGNvb3JkWzFdIDwgdGhpcy55U2l6ZVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGFkZCBhIHNoaXAgcmFuZG9tbHkgb24gdGhlIGJvYXJkXG4gICAgYWRkUmFuZG9tU2hpcChsZW5ndGg9Mykge1xuICAgICAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgICAgIHdoaWxlICghc2hpcCkge1xuICAgICAgICAgICAgY29uc3QgY29vcmRJbml0ID0gdGhpcy5wb3NzaWJsZU1vdmVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMucG9zc2libGVNb3ZlLmxlbmd0aCldO1xuICAgICAgICAgICAgLy8gZm9yIHRoZSBpbml0aWFsIGNvb3JkaW5hdGUgd2UgY2hlY2sgaWYgaXQgaXMgaW4gdGhlIGJvYXJkIGFuZCBpZiBpdCBpcyBub3Qgb24gYW5vdGhlciBzaGlwXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0Nvb3JkaW5hdGUoY29vcmRJbml0KSAmJiB0aGlzLmNoZWNrU2hpcENvb3JkKGNvb3JkSW5pdCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgc2hpcHMgYXJlIGJldHdlZW4gYSBsZW5ndGggb2YgMiBhbmQgNFxuICAgICAgICAgICAgICAgIGxldCBjb29yZEZpbjtcbiAgICAgICAgICAgICAgICAvLyBXZSByYW5kb21seSBjcmVhdGUgYSBzaGlwIGhveml6b250YWwgb3IgdmVydGljYWxcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICBjb29yZEZpbiA9IFtjb29yZEluaXRbMF0sIGNvb3JkSW5pdFsxXSArIGxlbmd0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb29yZEZpbiA9IFtjb29yZEluaXRbMF0gKyBsZW5ndGgsIGNvb3JkSW5pdFsxXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZvciB0aGUgZW5kaW5nIGNvb3JkaW5hdGUgd2UgY2hlY2sgaWYgaXQgaXMgaW4gdGhlIGJvYXJkIGFuZCBpZiBpdCBpcyBub3Qgb24gYW5vdGhlciBzaGlwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkRmluKSAmJiB0aGlzLmNoZWNrU2hpcENvb3JkKGNvb3JkRmluKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNoaXAoY29vcmRJbml0LCBjb29yZEZpbik7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIEFkZCBzaGlwIHdpdGggdGhlIGdpdmVuIGNvb3JkaW5hdGVzXG4gICAgYWRkU2hpcChjb29yZEluaXQsIGNvb3JkRmluKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZEluaXQpICYmIHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkRmluKSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGNvb3JkSW5pdCwgY29vcmRGaW4pXG4gICAgICAgICAgICB0aGlzLnNoaXBBcnIucHVzaChzaGlwKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVTaGlwKHNoaXApO1xuICAgICAgICAgICAgdGhpcy5zaGlwQWxpdmUrKztcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgXG5cbiAgICAvLyBBZGQgc2hpcCB0byBib2FyZCBCYXJkVCBlYWNoIHRpbWUgYSBib2FyZCBpcyBhZGRlZFxuICAgIHBvcHVsYXRlU2hpcChzaGlwKSB7XG4gICAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIkhPUklaT05UQUxcIikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEluaXRbMF1dW3NoaXAuY29vcmRJbml0WzFdXSA9ICd8JztcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRGaW5bMF1dW3NoaXAuY29vcmRJbml0WzFdXSA9ICc+JztcbiAgICAgICAgICAgIGZvciAobGV0IGk9c2hpcC5jb29yZEluaXRbMF0rMTsgaTw9c2hpcC5jb29yZEZpblswXS0xOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkVFtpXVtzaGlwLmNvb3JkSW5pdFsxXV0gPSAnLS0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiVkVSVElDQUxcIikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEluaXRbMF1dW3NoaXAuY29vcmRJbml0WzFdXSA9ICdeJztcbiAgICAgICAgICAgIHRoaXMuYm9hcmRUW3NoaXAuY29vcmRJbml0WzBdXVtzaGlwLmNvb3JkRmluWzFdXSA9ICdfXyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpPXNoaXAuY29vcmRJbml0WzFdKzE7IGk8PXNoaXAuY29vcmRGaW5bMV0tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEluaXRbMF1dW2ldID0gJ3wnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFRyYW5zcG9zZSBhcnJheSBmb3Igc2hvd2luZyBib2FyZFxuICAgIHRyYW5zcG9zZShhcnIpIHtcbiAgICAgICAgbGV0IFtyb3ddID0gYXJyXG4gICAgICAgIHJldHVybiByb3cubWFwKCh2YWx1ZSwgY29sdW1uKSA9PiBhcnIubWFwKHJvdyA9PiByb3dbY29sdW1uXSkpXG4gICAgfVxuXG4gICAgLy8gU2hvdyB0cnVlIGJvYXJkIHdpdGggc2hpcHMgaW4gY29uc29sZVxuICAgIHNob3dCb2FyZCgpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb25zdCBib2FyZFYgPSB0aGlzLnRyYW5zcG9zZShbLi4udGhpcy5ib2FyZFRdKVxuICAgICAgICBjb25zb2xlLmxvZyhbJyAnXS5jb25jYXQoQXJyYXkuZnJvbShBcnJheSg4KS5rZXlzKCkpKS50b1N0cmluZygpLnJlcGxhY2UoLywvZywnICcpKTtcbiAgICAgICAgYm9hcmRWLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9ICR7bGluZS50b1N0cmluZygpLnJlcGxhY2UoLywvZywnICcpfWApXG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY29vcmRpbmF0ZSB0b3VjaCB0aGUgc2hpcFxuICAgIGNoZWNrU2hpcEF0dGFjayhzaGlwLCBjb29yZCkge1xuICAgICAgICBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJIT1JJWk9OVEFMXCIgJiYgY29vcmRbMV0gPT09IHNoaXAuY29vcmRJbml0WzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRbMF0gPj0gc2hpcC5jb29yZEluaXRbMF0gJiYgY29vcmRbMF0gPD0gc2hpcC5jb29yZEZpblswXSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIlZFUlRJQ0FMXCIgJiYgY29vcmRbMF0gPT09IHNoaXAuY29vcmRJbml0WzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRbMV0gPj0gc2hpcC5jb29yZEluaXRbMV0gJiYgY29vcmRbMV0gPD0gc2hpcC5jb29yZEZpblsxXSBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gd2hlcmUgb3Bwb25lbnQgYXR0YWNrIGEgY29vcmRpbmF0ZSBvZiB0aGUgYm9hcmRcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkKSkge1xuICAgICAgICAgICAgbGV0IHRvdWNoZWQgPSBbXTtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGEgc2hpcCBpcyB0b3VjaGVkICBcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIHRoZSBjYXNlIHRoZSBpbmRleCBpcyBzdG9yZWQgaW4gdmFyaWFibGUgXCJ0b3VjaGVkXCJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnNoaXBBbGl2ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTaGlwQXR0YWNrKHRoaXMuc2hpcEFycltpXSwgY29vcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgb25lIGF0dGFja1xuICAgICAgICAgICAgdGhpcy5hdHRhY2tOYisrO1xuICAgICAgICAgICAgLy8gQWRkIGF0dGFjayBvbiBib2FyZFxuICAgICAgICAgICAgdGhpcy5ib2FyZFRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IFwieFwiO1xuICAgICAgICAgICAgLy8gZGVsZXRlIG1vdmUgZnJvbSBwb3NzaWJsZSBtb3ZlcyBhcnJheVxuICAgICAgICAgICAgdGhpcy5wb3NzaWJsZU1vdmUgPSB0aGlzLnBvc3NpYmxlTW92ZS5maWx0ZXIoY29vcmRkID0+IGNvb3JkZC50b1N0cmluZygpICE9PSBjb29yZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlmICh0b3VjaGVkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdG91Y2ggb2YgdG91Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhIHNoaXAgaXMgdG91Y2hlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkR1tjb29yZFswXV1bY29vcmRbMV1dID0gXCJvXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEFyclt0b3VjaF0uaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBBcnJbdG91Y2hdLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBzaGlwIGlmIGl0cyBzdW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBBcnIuc3BsaWNlKHRvdWNoLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEFsaXZlLS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZEdbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IFwieFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTWlzc2VkKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG59O1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCByZWFsUCwgeFNpemUsIHlTaXplKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2l6ZSBpZiB0aGUgcGxheWVyIGlzIGEgcmVhbCBvbmVcbiAgICAgICAgdGhpcy5yZWFsUCA9IHJlYWxQO1xuICAgICAgICAvLyBOYW1lIGdpdmVuIHRvIHRoZSBwbGF5ZXJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy8gSXMgaXQgdGhlIGN1cnJlbnQgcGxheWVyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIGJvYXJkIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoeFNpemUsIHlTaXplKTtcbiAgICB9O1xuXG4gICAgLy8gbW9kaWZpeSBuYW1lIG9mIHRoZSBwbGF5ZXJcbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9O1xuXG4gICAgLy8gdG9nZ2xlIHRoZSBib29sZWVuIGlmIGl0cyB0aGUgb25lIHBsYXlpbmdcbiAgICB0b2dnbGVBY3RpdmUoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlPSAhdGhpcy5hY3RpdmU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRJbml0LCBjb29yZEZpbikge1xuICAgICAgICAvLyBJbml0aWFsaXNlIG9mIHRpbWVzIHRoZSBzaGlwIHdlcmUgaGl0XG4gICAgICAgIHRoaXMuaGl0TmIgPSAwO1xuICAgICAgICAvLyBCb29sZWFuIHNob3dpbmcgaWYgdGhlIHNoaXAgd2FzIGhpdCBpbiBhbGwgaXRzIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY29vZGluYXRlcyBpbml0aWFsIGFuZCBmaW5hbCBvZiB0aGUgc2hpcCBnaXZlbiBmb3JtIGEgdmVydGljYWwgc2hpcFxuICAgICAgICBpZiAoY29vcmRJbml0WzBdID09PSBjb29yZEZpblswXSAmJiBjb29yZEluaXRbMV0gIT09IGNvb3JkRmluWzFdKSB7XG4gICAgICAgICAgICAvLyBpbml0IGxlbmd0aCBvZiB0aGUgc2hpcFxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBNYXRoLmFicyhjb29yZEluaXRbMV0tY29vcmRGaW5bMV0pICsgMVxuICAgICAgICAgICAgLy8gaW5pdCBwb3Npc2lvbiBvZiB0aGUgc2hpcFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgIC8vIHN0b3JlIGluaXRpYWwgYW5kIGZpbmFsIGNvb3JkaW5hdGUgaW4gZnVuY3Rpb24gb2YgaXRzIHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLmNvb3JkSW5pdCA9IGNvb3JkSW5pdFsxXSA8IGNvb3JkRmluWzFdID8gY29vcmRJbml0OiBjb29yZEZpbjtcbiAgICAgICAgICAgIHRoaXMuY29vcmRGaW4gPSBjb29yZEluaXRbMV0gPiBjb29yZEZpblsxXSA/IGNvb3JkSW5pdDogY29vcmRGaW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29vcmRJbml0WzFdID09PSBjb29yZEZpblsxXSAmJiBjb29yZEluaXRbMF0gIT09IGNvb3JkRmluWzBdKSB7XG4gICAgICAgICAgICAvLyBpbml0IGxlbmd0aCBvZiB0aGUgc2hpcFxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBNYXRoLmFicyhjb29yZEluaXRbMF0tY29vcmRGaW5bMF0pICsgMVxuICAgICAgICAgICAgLy8gaW5pdCBwb3Npc2lvbiBvZiB0aGUgc2hpcFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgLy8gc3RvcmUgaW5pdGlhbCBhbmQgZmluYWwgY29vcmRpbmF0ZSBpbiBmdW5jdGlvbiBvZiBpdHMgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuY29vcmRJbml0ID0gY29vcmRJbml0WzBdIDwgY29vcmRGaW5bMF0gPyBjb29yZEluaXQ6IGNvb3JkRmluO1xuICAgICAgICAgICAgdGhpcy5jb29yZEZpbiA9IGNvb3JkSW5pdFswXSA+IGNvb3JkRmluWzBdID8gY29vcmRJbml0OiBjb29yZEZpbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNvb3JkaW5hdGUgZ2l2ZW4gJHtjb29yZEluaXR9IGFuZCAke2Nvb3JkRmlufSBkb2Vzbid0IGFsbG93IHRoZSBjcmVhdGlvbiBvZiBhIHNoaXBgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHNoaXAgaGFzIHN1bmtcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdE5iID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBpZiBzaGlwIGlzIGhpdCBpdGVyYXRlIHRoZSBudW1iZXIgb2YgaGl0IGFuZCBjaGVjayBpZiBzaGlwIGhhcyBzdW5rXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdE5iKys7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxufTtcbiIsIlxuLy8gRmFjdG9yeSBmdW5jdGlvbiBkZWFsaW5nIHdpdGggdGhlIGNvbnRyb2wgb2YgdGhlIHBsYXllciBhbmQgdGhlIGNvbXB1dGVyXG5leHBvcnQgY29uc3QgQ29udHJvbEdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBHaXZlIHJlc3VsdHMgdG8gdGhlIHJvdW5kIGFjdHVhbGx5IHBsYXllZFxuICAgIGNvbnN0IGRlYWxSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQsIG5iU2hpcCwgdGFyZ2V0LCBwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1yXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJBY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckdcIikudGV4dENvbnRlbnRcbiAgICAgICAgLy8gQ2hlY2sgaWYgb25lIHNoaXAgd2FzIGhpdFxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJyZ2JhKDAsMjU1LDAsLjMpXCJcbiAgICAgICAgICAgIGlmIChuYlNoaXAgPT09IHBsYXllci5ib2FyZC5zaGlwQWxpdmUpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJJbmZvLnRleHRDb250ZW50ID0gYDogJHtwbGF5ZXJBY3RpdmV9IFRvdWNoZWRgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJJbmZvLnRleHRDb250ZW50ID0gYDogJHtwbGF5ZXJBY3RpdmV9IGhhcyBzdW5rIGEgYm9hdGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcInJnYmEoMjU1LDAsMCwuMylcIlxuICAgICAgICAgICAgY29udGFpbmVySW5mby50ZXh0Q29udGVudCA9IGA6ICR7cGxheWVyQWN0aXZlfSBNaXNzZWRgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIGF0dGFjayBvZiBhIGh1bWFuIHBsYXllclxuICAgIGNvbnN0IGF0dGFja0MgPSBmdW5jdGlvbihldmVudCwgcGxheWVyKSB7XG4gICAgICAgIC8vIEdldCBhbGwgY3VycmVudCBzaGlwIGluIG9yZGVyIHRvIGNvbXBhcmUgYWZ0ZXIgdGhlIGF0dGFja1xuICAgICAgICBjb25zdCBuYlNoaXAgPSBwbGF5ZXIuYm9hcmQuc2hpcEFsaXZlO1xuICAgICAgICAvLyBHZXQgcG9zaXRpb24gb24gZnJvbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb29yZGluYXRlIGNsaWNrZWQgYnkgcGxheWVyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGNvb3JkaW5hdGUgY2xpY2tlZCBpcyBvbiB0aGUgZ3JpZFxuICAgICAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYGdyaWRfZWxlbV8ke3BsYXllci5uYW1lfWApKSByZXR1cm5cbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgY29vcmRpbmF0ZSBmcm9tIHRoZSBpZCBvZiB0aGUgZ3JpZCBlbGVtZW50XG4gICAgICAgIGxldCBbeUNvb3JkLCB4Q29vcmRdID0gdGFyZ2V0LmlkLm1hdGNoKC9cXGQrL2cpO1xuICAgICAgICAvLyBBdHRhY2sgdGhlIHBsYXllcidzIGJvYXJkIGdpdmVuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKFtOdW1iZXIoeENvb3JkKSwgTnVtYmVyKHlDb29yZCldKTtcbiAgICAgICAgLy8gQXBwbHkgdGhlIHJlc3VsdHNcbiAgICAgICAgZGVhbFJlc3VsdChyZXN1bHQsIG5iU2hpcCwgdGFyZ2V0LCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiBhdHRhY2sgb2YgYSBjb21wdXRlclxuICAgIGNvbnN0IGF0dGFja1JhbmRvbSA9IGZ1bmN0aW9uKHBsYXllcikge1xuICAgICAgICAvLyBHZXQgYWxsIGN1cnJlbnQgc2hpcCBpbiBvcmRlciB0byBjb21wYXJlIGFmdGVyIHRoZSBhdHRhY2tcbiAgICAgICAgY29uc3QgbmJTaGlwID0gcGxheWVyLmJvYXJkLnNoaXBBbGl2ZTtcbiAgICAgICAgLy8gR2V0IGFsbCBwb3NzaWJsZSBtb3ZlcyBvbiB0aGUgYm9hcmRcbiAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlID0gcGxheWVyLmJvYXJkLnBvc3NpYmxlTW92ZTtcbiAgICAgICAgLy8gZ2V0IG9uZSByYW5kb20gY29vcmRpbmF0ZSBpbiBhbGwgcG9zc2libGUgbW92ZXNcbiAgICAgICAgY29uc3QgY29vcmQgPSBwb3NzaWJsZU1vdmVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3ZlLmxlbmd0aCldO1xuICAgICAgICAvLyBHZXQgcG9zaXRpb24gb24gZnJvbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb29yZGluYXRlIG9idGFpbmVkXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyXyR7Y29vcmRbMV19X2NfJHtjb29yZFswXX0uZ3JpZF9lbGVtXyR7cGxheWVyLm5hbWV9YCk7XG4gICAgICAgIC8vIEF0dGFjayB0aGUgcGxheWVyJ3MgYm9hcmQgZ2l2ZW5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soW051bWJlcihjb29yZFswXSksIE51bWJlcihjb29yZFsxXSldKTtcbiAgICAgICAgLy8gQXBwbHkgdGhlIHJlc3VsdHNcbiAgICAgICAgZGVhbFJlc3VsdChyZXN1bHQsIG5iU2hpcCwgdGFyZ2V0LCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhdHRhY2tDLFxuICAgICAgICBhdHRhY2tSYW5kb21cbiAgICB9O1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9pbnRlcm5hbC9QbGF5ZXJcIlxuaW1wb3J0IHsgQ29udHJvbEdhbWUgfSBmcm9tIFwiLi9Db250cm9sR2FtZVwiO1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIGNvbnRyb2wgdGhlIGdhbWVcbmV4cG9ydCBjb25zdCBDcmVhdGVHYW1lID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBJbml0aWFsaXNlIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgcGxheWVyc1xuICAgIGxldCBwbGF5ZXJzID0ge1xuICAgICAgICBwbGF5ZXIxOiBcIlwiLFxuICAgICAgICBwbGF5ZXIyOiBcIlwiLFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGlvbiB0byBjb250cm9sIG9iamVjdCB0byBhdHRhY2sgYW5kIGdldCByZXN1bHRzXG4gICAgY29uc3QgY29udHJvbGxlciA9IENvbnRyb2xHYW1lKCk7XG5cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGxheWVyIGFuZCBzaG93IGl0cyBuYW1lIG9uIHRoZSBmcm9udFxuICAgIGNvbnN0IHNob3dQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckdcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcGxheWVyc1tnZXRBY3RpdmVQbGF5ZXIoKV0ubmFtZTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSAzIHJhbmRvbSBzaGlwcyBvZiBsZW5ndGggMiB0byA1XG4gICAgY29uc3QgcmFuZG9tU2hpcCA9IGZ1bmN0aW9uKHBsYXllciwgbmJTaGlwPTMpe1xuICAgICAgICBwbGF5ZXIuYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8bmJTaGlwOyBpKyspe1xuICAgICAgICAgICAgcGxheWVyLmJvYXJkLmFkZFJhbmRvbVNoaXAoaSsyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgYSBwbGF5ZXIgdXNpbmcgdGhlIHRoZSBpbnB1dHMgaW4gdGhlIGZyb250XG4gICAgY29uc3QgY3JlYXRlUGxheWVyID0gZnVuY3Rpb24obmFtZSwgYWN0aXZlPWZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfS1uYW1lYCkudmFsdWUgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfS1uYW1lYCkudmFsdWU6IG5hbWU7XG4gICAgICAgIGNvbnN0IHNpemVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb3JkWCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBzaXplWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29yZFknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVhbFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtuYW1lfS1yZWFscGApLmNoZWNrZWQ7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSwgcmVhbFAsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIHBsYXllci50b2dnbGVBY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByYW5kb21TaGlwKHBsYXllcik7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSAyIHBsYXllcnMgaGF2ZSB0aGUgc2FtZSBuYW1lcyBhbmQgdXBkYXRlIHRoZW0gaWYgaXQgaXMgdGhlIGNhc2VcbiAgICAvLyBQcmV2ZW50IGlkIGNvbGlzaXRpb24gaW4gdGhlIGJvYXJkc1xuICAgIGNvbnN0IGNoZWNrUGxheWVyc05hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHBsYXllcnMucGxheWVyMS5uYW1lID09PSBwbGF5ZXJzLnBsYXllcjIubmFtZSkge1xuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIxLnNldE5hbWUocGxheWVycy5wbGF5ZXIxLm5hbWUgKyBcIi0xXCIpO1xuICAgICAgICAgICAgcGxheWVycy5wbGF5ZXIyLnNldE5hbWUocGxheWVycy5wbGF5ZXIyLm5hbWUgKyBcIi0yXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0b3JlIHBsYXllcnMgaW5mb3JtYXRpb24gdXNlZCBpbiBnYW1lXG4gICAgcGxheWVycyA9IHtcbiAgICAgICAgcGxheWVyMTogY3JlYXRlUGxheWVyKFwicGxheWVyMVwiLCB0cnVlKSxcbiAgICAgICAgcGxheWVyMjogY3JlYXRlUGxheWVyKFwicGxheWVyMlwiKSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IHRoZSBwbGF5ZXIgd2hpY2ggaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgaWYgKHBsYXllcnNbcGxheWVyXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBHZXQgdGhlIHBsYXllciB3aGljaCBpcyBub3QgY3VycmVudGx5IHBsYXlpbmdcbiAgICBjb25zdCBnZXROb25BY3RpdmVQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgaW4gcGxheWVycykge1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXJzW3BsYXllcl0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWx0ZXJuYXRlIGFjdGl2ZSBhbmQgbm9uIGFjdGl2ZSBwbGF5ZXIgYXMgd2VsbCBhcyB1cGRhdGUgdGhlIGFjdGl2ZSBib2FyZFxuICAgIGNvbnN0IGNoYW5nZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJBY3RpdmUgPSBnZXRBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgY29uc3QgcGxheWVyTm9uQWN0aXZlID0gZ2V0Tm9uQWN0aXZlUGxheWVyKCk7XG4gICAgICAgIHBsYXllcnNbcGxheWVyQWN0aXZlXS50b2dnbGVBY3RpdmUoKTtcbiAgICAgICAgcGxheWVyc1twbGF5ZXJOb25BY3RpdmVdLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgICBjb25zdCBib2FyZFAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgZ3JpZF8ke3BsYXllcnNbcGxheWVyQWN0aXZlXS5uYW1lfWApWzBdO1xuICAgICAgICBjb25zdCBib2FyZFAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgZ3JpZF8ke3BsYXllcnNbcGxheWVyTm9uQWN0aXZlXS5uYW1lfWApWzBdO1xuICAgICAgICBib2FyZFAxLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGJvYXJkUDIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgLy8gQXR0YWNrIGZyb20gdGhlIGNvbXB1dGVyXG4gICAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghcGxheWVyc1tnZXRBY3RpdmVQbGF5ZXIoKV0ucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc0F0dGFjayA9IGNvbnRyb2xsZXIuYXR0YWNrUmFuZG9tKHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldKTtcbiAgICAgICAgICAgIGNoZWNrUmVzQXR0YWNrKHJlc0F0dGFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gT25jZSBhIHBsYXllciBhdHRhY2sgd2VjaGVjayBpZiBjaGVjayBpZiBpdCB3YXMgYSBzdWNjZXNmdWwgYXR0YWNrIGFuZCBjaGVjayBpZiB0aGUgZ2FtZSBlbmRcbiAgICBjb25zdCBjaGVja1Jlc0F0dGFjayA9IGZ1bmN0aW9uKHJlc0F0dGFjaykge1xuICAgICAgICBpZiAoIXJlc0F0dGFjaykge1xuICAgICAgICAgICAgY2hhbmdlUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd1BsYXllcigpO1xuICAgICAgICBpZiAocGxheWVyc1tnZXROb25BY3RpdmVQbGF5ZXIoKV0uYm9hcmQuc2hpcEFsaXZlID09PSAwKXtcbiAgICAgICAgICAgIGVuZEdhbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aW1lb3V0IGluIG9yZGVyIHRvIHNob3cgdGhlIGNvbXB1dGVyIHBsYXlpbmdcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXthdHRhY2soKTt9LCAxMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHdoaWNoIGNyZWF0ZSBhIGJvYXJkXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIGJvYXJkLCBuYW1lLCBwbGF5aW5nPXRydWUpIHtcbiAgICAgICAgLy8gR2V0IEJvYXJkIHNpemUgXG4gICAgICAgIGNvbnN0IHJvd3MgPSBib2FyZFswXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbHMgPSBib2FyZC5sZW5ndGg7XG4gICAgICAgIC8vIEdldCBkaXYgZWxlbWVudHMgd2hlcmUgYm9hcmQgaXMgbG9jYXRlZFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICAgICAgLy8gUmVzZXQgdGhlIGJvYXJkXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhpcyBlbGVtZW50IGluIG9yZGVyIHRvIGRpZmZlcmVudGlhdGUgdGhlIGRpZmZlcmVudCBib2FyZHMgY3JlYXRlZFxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChgZ3JpZF9wYCk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBncmlkXyR7cGxheWVyTmFtZX1gKTtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBncmlkXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZVtcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiXSA9IGByZXBlYXQoJHtjb2xzfSwgMnJlbSlgXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZVtcImdyaWQtdGVtcGxhdGUtcm93c1wiXSA9IGByZXBlYXQoJHtyb3dzfSwgMnJlbSlgXG4gICAgICAgIC8vIFBvcHVsYXRlIHRoZSBib2FyZFxuICAgICAgICBmb3IgKGxldCByb3c9MDsgcm93PHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2w9MDsgY29sPGNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZF9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkX2VsZW0uY2xhc3NOYW1lID0gYGdyaWRfZWxlbSBncmlkX2VsZW1fJHtwbGF5ZXJOYW1lfWA7XG4gICAgICAgICAgICAgICAgZ3JpZF9lbGVtLmlkID0gYHJfJHtyb3d9X2NfJHtjb2x9YDtcbiAgICAgICAgICAgICAgICBncmlkX2VsZW0udGV4dENvbnRlbnQgPSBib2FyZFtjb2xdW3Jvd107XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRfZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGV2ZW50IHRvIHRoZSBib2FyZCBmb3Igd2hlbiB0aGUgcGxheWVyIGlzIGNsaWNraW5nIFxuICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjb29yZGluYXRlIGNsaWNrZWQgd2FzIGFscmVhZHkgdXNlZCBiZWZvciBhdHRhY2tpbmcgdGhlIGNvb3JkaW5hdGVcbiAgICAgICAgICAgICAgICBsZXQgW3lDb29yZCwgeENvb3JkXSA9IGV2ZW50LnRhcmdldC5pZC5tYXRjaCgvXFxkKy9nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja01vdmUgPSBwbGF5ZXJzW2dldE5vbkFjdGl2ZVBsYXllcigpXS5ib2FyZC5wb3NzaWJsZU1vdmUubWFwKChlbGVtKSA9PiBlbGVtLnRvU3RyaW5nKCkpLmluZGV4T2YoW3hDb29yZCwgeUNvb3JkXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAvLyBNb3JldmVyIHdlIGFsc28gY2hlY2sgaWYgdGhlIGJvYXJkIHNlbGVjdGVkIGlzIHRoZSBhY3RpdmUgb25lXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJiBjaGVja01vdmUgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc0F0dGFjayA9IGNvbnRyb2xsZXIuYXR0YWNrQyhldmVudCwgcGxheWVyc1tnZXROb25BY3RpdmVQbGF5ZXIoKV0pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja1Jlc0F0dGFjayhyZXNBdHRhY2spO1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTdGFydCB0aGUgR2FtZSBieSBidWlsZGluZyB0aGUgYm9hcmRzIGFuZCBpZiBuZWNlc3NhcnkgZXhlY3V0aW5nIHRoZSBmaXJzdCBhdHRhY2tcbiAgICBjb25zdCBydW5HYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNob3dQbGF5ZXIoKVxuICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMS5uYW1lLCBwbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRHLCBcInBsYXllcjEtZ3JpZFwiKVxuICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMi5uYW1lLCBwbGF5ZXJzLnBsYXllcjIuYm9hcmQuYm9hcmRHLCBcInBsYXllcjItZ3JpZFwiKVxuICAgICAgICBjb25zdCBib2FyZFAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBncmlkXyR7cGxheWVycy5wbGF5ZXIyLm5hbWV9YClbMF1cbiAgICAgICAgYm9hcmRQLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmICghcGxheWVycy5wbGF5ZXIxLnJlYWxQKXtcbiAgICAgICAgICAgIGF0dGFjaygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gTWFpbiBmdW5jdGlvbiBzZWxlY3RpbmcgdGhlIHNoaXAgZm9yIHRoZSBodW1hbiBwbGF5ZXJzXG4gICAgY29uc3QgZ2V0R2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIxTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1nYW1lLW5hbWVcIik7XG4gICAgICAgIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyLWdhbWUtbmFtZVwiKTtcbiAgICAgICAgY2hlY2tQbGF5ZXJzTmFtZSgpO1xuICAgICAgICBwbGF5ZXIxTmFtZS50ZXh0Q29udGVudCA9IHBsYXllcnMucGxheWVyMS5uYW1lO1xuICAgICAgICBwbGF5ZXIyTmFtZS50ZXh0Q29udGVudCA9IHBsYXllcnMucGxheWVyMi5uYW1lO1xuICAgICAgICBpZiAocGxheWVycy5wbGF5ZXIxLnJlYWxQICYmIHBsYXllcnMucGxheWVyMi5yZWFsUCkge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjEtc2hpcFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblJhbmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kLXNoaXAxXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUGxheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkxLWdhbWVcIik7XG4gICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMS5uYW1lLCBwbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAxXCIsIGZhbHNlKVxuICAgICAgICAgICAgYnV0dG9uUGxheTEudGV4dENvbnRlbnQgPSBgR28gdG8gJHtwbGF5ZXJzLnBsYXllcjIubmFtZX0gQm9hcmRgXG4gICAgICAgICAgICBkaWFsb2dQMS5zaG93TW9kYWwoKTtcbiAgICBcbiAgICAgICAgICAgIGJ1dHRvblJhbmQxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjEubmFtZSwgcGxheWVycy5wbGF5ZXIxLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMVwiLCBmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dQMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMi1zaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvblJhbmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kLXNoaXAyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5Mi1nYW1lXCIpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ1AxLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIyLm5hbWUsIHBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDJcIiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgZGlhbG9nUDIuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uUmFuZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIyLm5hbWUsIHBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDJcIiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidXR0b25QbGF5Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ1AyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bkdhbWUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwbGF5ZXJzLnBsYXllcjEucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5MS1nYW1lXCIpO1xuICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjEubmFtZSwgcGxheWVycy5wbGF5ZXIxLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMVwiLCBmYWxzZSlcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLnRleHRDb250ZW50ID0gYFBsYXkgR2FtZWBcbiAgICAgICAgICAgIGRpYWxvZ1AxLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgYnV0dG9uUmFuZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMS5uYW1lLCBwbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAxXCIsIGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ1dHRvblBsYXkxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dQMS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJ1bkdhbWUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGxheWVycy5wbGF5ZXIyLnJlYWxQKSB7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dQMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMi1zaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUmFuZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmQtc2hpcDJcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25QbGF5MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheTItZ2FtZVwiKTtcbiAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIyLm5hbWUsIHBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDJcIiwgZmFsc2UpXG4gICAgICAgICAgICBkaWFsb2dQMi5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIGJ1dHRvblJhbmQyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjIubmFtZSwgcGxheWVycy5wbGF5ZXIyLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMlwiLCBmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidXR0b25QbGF5Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9nUDIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBydW5HYW1lKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjIpO1xuICAgICAgICAgICAgcnVuR2FtZSgpO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIC8vIEZ1bmN0aW9uIEVuZGluZyB0aGUgZ2FtZVxuICAgIGNvbnN0IGVuZEdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjEtZ3JpZFwiKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjItZ3JpZFwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyV2luID0gcGxheWVyc1tnZXRBY3RpdmVQbGF5ZXIoKV07XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBncmlkXyR7cGxheWVyc1tcInBsYXllcjFcIl0ubmFtZX1gKVswXS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBncmlkXyR7cGxheWVyc1tcInBsYXllcjJcIl0ubmFtZX1gKVswXS5jbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1yXCIpLnRleHRDb250ZW50ID0gYCR7cGxheWVyV2luLm5hbWV9IHdpbiAhISFgXG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXRHYW1lXG4gICAgfTtcbn07IiwiaW1wb3J0IHsgQ3JlYXRlR2FtZSB9IGZyb20gXCIuL0NyZWF0ZUdhbWVcIlxuXG5cbmV4cG9ydCBjb25zdCBVSSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJ1dHRvblJ1biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVuLWdhbWVcIik7XG5cbiAgICBidXR0b25SdW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJyZXN0YXJ0XCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gXCJSRVNFVFwiO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9IFwicmVzdGFydFwiO1xuICAgICAgICAgICAgY29uc3QgZ2FtZSA9IENyZWF0ZUdhbWUoKTtcbiAgICAgICAgICAgIGdhbWUuZ2V0R2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgICAgXG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=