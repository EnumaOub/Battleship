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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/background/bckgMicrosoftGen.jpeg */ "./assets/background/bckgMicrosoftGen.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    height: 100%
}

body {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center fixed;
    background-size: cover;
    position: relative;
    color: #fff;
    font-family: 'Arial', sans-serif;
    min-height: 100%;
}

body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 50, 0.5);
    z-index: -1;
}

h1, h2, h3 {
    font-family: 'Bungee', cursive; /* Nautical font example */
    color: #ffeb3b; /* Bright yellow for contrast */
}
  
p, button {
    font-family: 'Arial', sans-serif;
}
  
main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
    min-height: 80%;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI;AACJ;;AAEA;IACI,iFAA8F;IAC9F,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,+BAA+B;IAC/B,WAAW;AACf;;AAEA;IACI,8BAA8B,EAAE,0BAA0B;IAC1D,cAAc,EAAE,+BAA+B;AACnD;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,eAAe;AACnB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%\n}\n\nbody {\n    background: url('../../assets/background/bckgMicrosoftGen.jpeg') no-repeat center center fixed;\n    background-size: cover;\n    position: relative;\n    color: #fff;\n    font-family: 'Arial', sans-serif;\n    min-height: 100%;\n}\n\nbody::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 50, 0.5);\n    z-index: -1;\n}\n\nh1, h2, h3 {\n    font-family: 'Bungee', cursive; /* Nautical font example */\n    color: #ffeb3b; /* Bright yellow for contrast */\n}\n  \np, button {\n    font-family: 'Arial', sans-serif;\n}\n  \nmain {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    gap: 2rem;\n    margin-top: 1rem;\n    min-height: 80%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/playerInfos.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/playerInfos.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#gen-param {
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

`, "",{"version":3,"sources":["webpack://./src/styles/playerInfos.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,qCAAqC;IACrC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,4CAA4C;AAChD","sourcesContent":["#gen-param {\n    overflow: auto;\n    width: 40%;\n}\n\n#game {\n    overflow: auto;\n    width: 40%;\n}\n\n.player {\n    display: flex;\n    gap: 1rem;\n}\n\n.player1, .player2 {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.player1 label, .player2 label {\n    align-self: center;\n}\n\n.player1 input, .player2 input {\n    padding: 0.5rem;\n    border: 1px solid black;\n    border-radius: 2rem;\n    font-size: 1.2rem;\n}\n\n.player1 input:focus, .player2 input:focus {\n    outline: 2px solid black;\n}\n\n.info-board input {\n    max-width: 3rem;\n}\n\n.parameters {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.board-size {\n    display: flex;\n    flex-direction: row;\n    gap: .5rem;\n}\n\n#run-game {\n    border-radius: 2rem;\n    border: 1px solid ;\n    box-shadow: 0.05rem 0 0.05rem 0.05rem;\n    width: 20rem;\n    cursor: pointer;\n    font-size: 1.5rem;\n    background-color: rgba(117, 117, 248, 0.705);\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/playerInfos.css":
/*!************************************!*\
  !*** ./src/styles/playerInfos.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./playerInfos.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/playerInfos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_playerInfos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_playerInfos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/playerInfos.css */ "./src/styles/playerInfos.css");
/* harmony import */ var _modules_ui_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ui/ui */ "./src/modules/ui/ui.js");









(0,_modules_ui_ui__WEBPACK_IMPORTED_MODULE_6__.UI)();


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
            target.style["background-color"] = "rgba(255,0,0,.8)"
            if (nbShip === player.board.shipAlive) {
                containerInfo.textContent = `: ${playerActive} Touched`
            }
            else {
                containerInfo.textContent = `: ${playerActive} has sunk a boat`
            }
        }
        else {
            target.style["background-color"] = "rgba(0,0,255,.8)"
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

/***/ }),

/***/ "./assets/background/bckgMicrosoftGen.jpeg":
/*!*************************************************!*\
  !*** ./assets/background/bckgMicrosoftGen.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3149c3a93916c28b132b.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8uL3NyYy9zdHlsZXMvZGlhbG9nLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGxheWVySW5mb3MuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RpYWxvZy5jc3M/NzY5NCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3M/N2U5MiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3M/MjE4NyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hlYWRlci5jc3M/ZTY4YiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wbGF5ZXJJbmZvcy5jc3M/YmNhNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbnRlcm5hbC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvaW50ZXJuYWwvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ludGVybmFsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ29udHJvbEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvdWkvQ3JlYXRlR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91aS91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogMzAlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFjay1zaGVsdmVzKTtcbn1cblxuXG5kaWFsb2cgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC43ODEpO1xufVxuZGlhbG9nIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5kaWFsb2cgI3Jlc3VsdC1nYW1lIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixxQ0FBcUM7QUFDekM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2stc2hlbHZlcyk7XFxufVxcblxcblxcbmRpYWxvZyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC43ODEpO1xcbn1cXG5kaWFsb2cgYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuZGlhbG9nICNyZXN1bHQtZ2FtZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbmZvb3RlciAuZmEge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgb3BhY2l0eTogLjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG5mb290ZXIgLmZhIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2FtZWJvYXJkICovXG4jZ2FtZWJvYXJkLWxvYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmdyaWRfcC5hY3RpdmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1MSwgMjU1LCAwKTtcbn1cblxuLmdyaWQgZGl2LCAjYm9hcmQtc2hpcDEsICNib2FyZC1zaGlwMiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA1cmVtKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA1cmVtKTtcbn1cblxuLmdyaWQgZGl2IGRpdiwgI2JvYXJkLXNoaXAxIGRpdiwgI2JvYXJkLXNoaXAyIGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4uZ3JpZF9lbGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdyaWRfZWxlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmlkX2VsZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xufVxuXG4uZ3JpZF9lbGVtLndvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuNCk7XG59XG5cbiNpbmZvLWdhbWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jaW5mby1yIHtcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHYW1lYm9hcmQgKi9cXG4jZ2FtZWJvYXJkLWxvYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmdyaWRfcC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTEsIDI1NSwgMCk7XFxufVxcblxcbi5ncmlkIGRpdiwgI2JvYXJkLXNoaXAxLCAjYm9hcmQtc2hpcDIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCA1cmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNXJlbSk7XFxufVxcblxcbi5ncmlkIGRpdiBkaXYsICNib2FyZC1zaGlwMSBkaXYsICNib2FyZC1zaGlwMiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5ncmlkX2VsZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpZF9lbGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWRfZWxlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xcbn1cXG5cXG4uZ3JpZF9lbGVtLndvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjQpO1xcbn1cXG5cXG4jaW5mby1nYW1le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jaW5mby1yIHtcXG4gICAgbWFyZ2luLXRvcDogLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZC9iY2tnTWljcm9zb2Z0R2VuLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJVxufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuYm9keTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgNTAsIDAuNSk7XG4gICAgei1pbmRleDogLTE7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsgLyogTmF1dGljYWwgZm9udCBleGFtcGxlICovXG4gICAgY29sb3I6ICNmZmViM2I7IC8qIEJyaWdodCB5ZWxsb3cgZm9yIGNvbnRyYXN0ICovXG59XG4gIFxucCwgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbn1cbiAgXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtaW4taGVpZ2h0OiA4MCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpRkFBOEY7SUFDOUYsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSwwQkFBMEI7SUFDMUQsY0FBYyxFQUFFLCtCQUErQjtBQUNuRDs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC9iY2tnTWljcm9zb2Z0R2VuLmpwZWcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCA1MCwgMC41KTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbmgxLCBoMiwgaDMge1xcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZScsIGN1cnNpdmU7IC8qIE5hdXRpY2FsIGZvbnQgZXhhbXBsZSAqL1xcbiAgICBjb2xvcjogI2ZmZWIzYjsgLyogQnJpZ2h0IHllbGxvdyBmb3IgY29udHJhc3QgKi9cXG59XFxuICBcXG5wLCBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG59XFxuICBcXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWluLWhlaWdodDogODAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNnZW4tcGFyYW0ge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbiNnYW1lIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogNDAlO1xufVxuXG4ucGxheWVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnBsYXllcjEsIC5wbGF5ZXIyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5wbGF5ZXIxIGxhYmVsLCAucGxheWVyMiBsYWJlbCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucGxheWVyMSBpbnB1dCwgLnBsYXllcjIgaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucGxheWVyMSBpbnB1dDpmb2N1cywgLnBsYXllcjIgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmluZm8tYm9hcmQgaW5wdXQge1xuICAgIG1heC13aWR0aDogM3JlbTtcbn1cblxuLnBhcmFtZXRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmJvYXJkLXNpemUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IC41cmVtO1xufVxuXG4jcnVuLWdhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xuICAgIGJveC1zaGFkb3c6IDAuMDVyZW0gMCAwLjA1cmVtIDAuMDVyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNywgMTE3LCAyNDgsIDAuNzA1KTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BsYXllckluZm9zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRDQUE0QztBQUNoRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZ2VuLXBhcmFtIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbiNnYW1lIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wbGF5ZXIxLCAucGxheWVyMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucGxheWVyMSBsYWJlbCwgLnBsYXllcjIgbGFiZWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXIxIGlucHV0LCAucGxheWVyMiBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucGxheWVyMSBpbnB1dDpmb2N1cywgLnBsYXllcjIgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5pbmZvLWJvYXJkIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzcmVtO1xcbn1cXG5cXG4ucGFyYW1ldGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5ib2FyZC1zaXplIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuI3J1bi1nYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xcbiAgICBib3gtc2hhZG93OiAwLjA1cmVtIDAgMC4wNXJlbSAwLjA1cmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE3LCAxMTcsIDI0OCwgMC43MDUpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGF5ZXJJbmZvcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGF5ZXJJbmZvcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvaGVhZGVyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2Zvb3Rlci5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2RpYWxvZy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvcGxheWVySW5mb3MuY3NzJztcblxuaW1wb3J0IHsgVUkgfSBmcm9tICcuL21vZHVsZXMvdWkvdWknO1xuXG5VSSgpO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHhTaXplLCB5U2l6ZSkge1xuICAgICAgICAvLyBTaXplIG9mIGdhbWVib2FyZFxuICAgICAgICB0aGlzLnhTaXplID0geFNpemU7XG4gICAgICAgIHRoaXMueVNpemUgPSB5U2l6ZTtcbiAgICAgICAgLy8gQXJyYXkgd2l0aCBhbGwgc2hpcCBvZiBnYW1lYm9hcmRcbiAgICAgICAgdGhpcy5zaGlwQXJyID0gW107XG4gICAgICAgIC8vIEluaXRpYWxpc2l6ZSB0aGUgbnVtYmVyIG9mIGF0dGFja1xuICAgICAgICB0aGlzLmF0dGFja05iID0gMDtcbiAgICAgICAgLy8gSW5pdGlhbGlzaXplIHRoZSBudW1iZXIgb2YgbWlzc2VkIGF0dGFja1xuICAgICAgICB0aGlzLmF0dGFja01pc3NlZCA9IDA7XG4gICAgICAgIC8vIEluaXRpYWxpc3plIHRoZSBudW1iZXIgb2Ygc2hpcCBzdGlsbCBhbGl2ZVxuICAgICAgICB0aGlzLnNoaXBBbGl2ZSA9IDA7XG4gICAgICAgIC8vIEFycmF5IHdpdGggYWxsIHBvc3NpYmxlIG1vdmVzXG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlID0gW11cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBCb2FyZFQgd2ljaCB3aWxsIGNvbnRhaW4gdGhlIHNoaXBzXG4gICAgICAgIHRoaXMuYm9hcmRUID0gdGhpcy5pbml0Qm9hcmQoXCIuXCIpO1xuICAgICAgICAvLyBJbml0aWFsaXNlIEJvYXJkRyB0aGUgYm9hcmQgZm9yIHRoZSBnYW1lIHZpcmdpblxuICAgICAgICB0aGlzLmJvYXJkRyA9IHRoaXMuaW5pdEJvYXJkKFwiXCIpO1xuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXNlIHRoZSAyIGJvYXJkcyBhcnJheSBhbmQgdGhlIHBvc3NpYmxlIG1vdmVzXG4gICAgaW5pdEJvYXJkKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NzaWJsZU1vdmUgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueFNpemU7IGkrKykge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy55U2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV1bal0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVNb3ZlLnB1c2goW2ksIGpdKSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIGJvYXJkIHVzZWQgZm9yIG5ldyBnYW1lIG9yIHRvIHJlaW5pdGlhbGlzZSB0aGUgc2hpcHNcbiAgICByZXNldEJvYXJkKCkge1xuICAgICAgICB0aGlzLnNoaXBBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5hdHRhY2tOYiA9IDA7XG4gICAgICAgIHRoaXMuYXR0YWNrTWlzc2VkID0gMDtcbiAgICAgICAgdGhpcy5zaGlwQWxpdmUgPSAwO1xuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZSA9IFtdXG4gICAgICAgIHRoaXMuYm9hcmRUID0gdGhpcy5pbml0Qm9hcmQoXCIuXCIpO1xuICAgICAgICB0aGlzLmJvYXJkRyA9IHRoaXMuaW5pdEJvYXJkKFwiXCIpO1xuICAgIH07XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgY29vcmRpbmF0ZSBnaXZlbiBpcyBvbiB0aGUgcGF0aCBvZiBhIHNoaXBcbiAgICBjaGVja1NoaXBDb29yZChjb29yZCkge1xuICAgICAgICBsZXQgY2hlY2tTaGlwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaGlwQXJyLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIkhPUklaT05UQUxcIiAmJiBjb29yZFsxXSA9PT0gc2hpcC5jb29yZEluaXRbMV0pIHtcbiAgICAgICAgICAgICAgICBjaGVja1NoaXAgPSBjb29yZFswXSA8IHNoaXAuY29vcmRJbml0WzBdIHx8IGNvb3JkWzBdID4gc2hpcC5jb29yZEZpblswXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJWRVJUSUNBTFwiICYmIGNvb3JkWzBdID09PSBzaGlwLmNvb3JkSW5pdFswXSkge1xuICAgICAgICAgICAgICAgIGNoZWNrU2hpcCA9IGNvb3JkWzFdIDwgc2hpcC5jb29yZEluaXRbMV0gfHwgY29vcmRbMV0gPiBzaGlwLmNvb3JkRmluWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjaGVja1NoaXA7XG4gICAgfVxuXG4gICAgY2hlY2tDb29yZGluYXRlKGNvb3JkKSB7XG4gICAgICAgIHJldHVybiBjb29yZFswXSA8IHRoaXMueFNpemUgJiYgY29vcmRbMV0gPCB0aGlzLnlTaXplXG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gYWRkIGEgc2hpcCByYW5kb21seSBvbiB0aGUgYm9hcmRcbiAgICBhZGRSYW5kb21TaGlwKGxlbmd0aD0zKSB7XG4gICAgICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKCFzaGlwKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZEluaXQgPSB0aGlzLnBvc3NpYmxlTW92ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5wb3NzaWJsZU1vdmUubGVuZ3RoKV07XG4gICAgICAgICAgICAvLyBmb3IgdGhlIGluaXRpYWwgY29vcmRpbmF0ZSB3ZSBjaGVjayBpZiBpdCBpcyBpbiB0aGUgYm9hcmQgYW5kIGlmIGl0IGlzIG5vdCBvbiBhbm90aGVyIHNoaXBcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ29vcmRpbmF0ZShjb29yZEluaXQpICYmIHRoaXMuY2hlY2tTaGlwQ29vcmQoY29vcmRJbml0KSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBzaGlwcyBhcmUgYmV0d2VlbiBhIGxlbmd0aCBvZiAyIGFuZCA0XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkRmluO1xuICAgICAgICAgICAgICAgIC8vIFdlIHJhbmRvbWx5IGNyZWF0ZSBhIHNoaXAgaG96aXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkRmluID0gW2Nvb3JkSW5pdFswXSwgY29vcmRJbml0WzFdICsgbGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkRmluID0gW2Nvb3JkSW5pdFswXSArIGxlbmd0aCwgY29vcmRJbml0WzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIHRoZSBlbmRpbmcgY29vcmRpbmF0ZSB3ZSBjaGVjayBpZiBpdCBpcyBpbiB0aGUgYm9hcmQgYW5kIGlmIGl0IGlzIG5vdCBvbiBhbm90aGVyIHNoaXBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0Nvb3JkaW5hdGUoY29vcmRGaW4pICYmIHRoaXMuY2hlY2tTaGlwQ29vcmQoY29vcmRGaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2hpcChjb29yZEluaXQsIGNvb3JkRmluKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gQWRkIHNoaXAgd2l0aCB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAgICBhZGRTaGlwKGNvb3JkSW5pdCwgY29vcmRGaW4pIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tDb29yZGluYXRlKGNvb3JkSW5pdCkgJiYgdGhpcy5jaGVja0Nvb3JkaW5hdGUoY29vcmRGaW4pKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY29vcmRJbml0LCBjb29yZEZpbilcbiAgICAgICAgICAgIHRoaXMuc2hpcEFyci5wdXNoKHNoaXApO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVNoaXAoc2hpcCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBBbGl2ZSsrO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBcblxuICAgIC8vIEFkZCBzaGlwIHRvIGJvYXJkIEJhcmRUIGVhY2ggdGltZSBhIGJvYXJkIGlzIGFkZGVkXG4gICAgcG9wdWxhdGVTaGlwKHNoaXApIHtcbiAgICAgICAgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiSE9SSVpPTlRBTFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtzaGlwLmNvb3JkSW5pdFswXV1bc2hpcC5jb29yZEluaXRbMV1dID0gJ3wnO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEZpblswXV1bc2hpcC5jb29yZEluaXRbMV1dID0gJz4nO1xuICAgICAgICAgICAgZm9yIChsZXQgaT1zaGlwLmNvb3JkSW5pdFswXSsxOyBpPD1zaGlwLmNvb3JkRmluWzBdLTE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRUW2ldW3NoaXAuY29vcmRJbml0WzFdXSA9ICctLSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcC5wb3NpdGlvbiA9PT0gXCJWRVJUSUNBTFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtzaGlwLmNvb3JkSW5pdFswXV1bc2hpcC5jb29yZEluaXRbMV1dID0gJ14nO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFRbc2hpcC5jb29yZEluaXRbMF1dW3NoaXAuY29vcmRGaW5bMV1dID0gJ19fJztcbiAgICAgICAgICAgIGZvciAobGV0IGk9c2hpcC5jb29yZEluaXRbMV0rMTsgaTw9c2hpcC5jb29yZEZpblsxXS0xOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkVFtzaGlwLmNvb3JkSW5pdFswXV1baV0gPSAnfCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVHJhbnNwb3NlIGFycmF5IGZvciBzaG93aW5nIGJvYXJkXG4gICAgdHJhbnNwb3NlKGFycikge1xuICAgICAgICBsZXQgW3Jvd10gPSBhcnJcbiAgICAgICAgcmV0dXJuIHJvdy5tYXAoKHZhbHVlLCBjb2x1bW4pID0+IGFyci5tYXAocm93ID0+IHJvd1tjb2x1bW5dKSlcbiAgICB9XG5cbiAgICAvLyBTaG93IHRydWUgYm9hcmQgd2l0aCBzaGlwcyBpbiBjb25zb2xlXG4gICAgc2hvd0JvYXJkKCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvbnN0IGJvYXJkViA9IHRoaXMudHJhbnNwb3NlKFsuLi50aGlzLmJvYXJkVF0pXG4gICAgICAgIGNvbnNvbGUubG9nKFsnICddLmNvbmNhdChBcnJheS5mcm9tKEFycmF5KDgpLmtleXMoKSkpLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCcgJykpO1xuICAgICAgICBib2FyZFYuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0gJHtsaW5lLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCcgJyl9YClcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlIHRvdWNoIHRoZSBzaGlwXG4gICAgY2hlY2tTaGlwQXR0YWNrKHNoaXAsIGNvb3JkKSB7XG4gICAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcIkhPUklaT05UQUxcIiAmJiBjb29yZFsxXSA9PT0gc2hpcC5jb29yZEluaXRbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb29yZFswXSA+PSBzaGlwLmNvb3JkSW5pdFswXSAmJiBjb29yZFswXSA8PSBzaGlwLmNvb3JkRmluWzBdIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiVkVSVElDQUxcIiAmJiBjb29yZFswXSA9PT0gc2hpcC5jb29yZEluaXRbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb29yZFsxXSA+PSBzaGlwLmNvb3JkSW5pdFsxXSAmJiBjb29yZFsxXSA8PSBzaGlwLmNvb3JkRmluWzFdIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB3aGVyZSBvcHBvbmVudCBhdHRhY2sgYSBjb29yZGluYXRlIG9mIHRoZSBib2FyZFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgaWYodGhpcy5jaGVja0Nvb3JkaW5hdGUoY29vcmQpKSB7XG4gICAgICAgICAgICBsZXQgdG91Y2hlZCA9IFtdO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYSBzaGlwIGlzIHRvdWNoZWQgIFxuICAgICAgICAgICAgLy8gaWYgaXQgaXMgdGhlIGNhc2UgdGhlIGluZGV4IGlzIHN0b3JlZCBpbiB2YXJpYWJsZSBcInRvdWNoZWRcIlxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuc2hpcEFsaXZlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1NoaXBBdHRhY2sodGhpcy5zaGlwQXJyW2ldLCBjb29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFkZCBvbmUgYXR0YWNrXG4gICAgICAgICAgICB0aGlzLmF0dGFja05iKys7XG4gICAgICAgICAgICAvLyBBZGQgYXR0YWNrIG9uIGJvYXJkXG4gICAgICAgICAgICB0aGlzLmJvYXJkVFtjb29yZFswXV1bY29vcmRbMV1dID0gXCJ4XCI7XG4gICAgICAgICAgICAvLyBkZWxldGUgbW92ZSBmcm9tIHBvc3NpYmxlIG1vdmVzIGFycmF5XG4gICAgICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZSA9IHRoaXMucG9zc2libGVNb3ZlLmZpbHRlcihjb29yZGQgPT4gY29vcmRkLnRvU3RyaW5nKCkgIT09IGNvb3JkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKHRvdWNoZWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0b3VjaCBvZiB0b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGEgc2hpcCBpcyB0b3VjaGVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRHW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBcIm9cIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQXJyW3RvdWNoXS5oaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcEFyclt0b3VjaF0uc3Vuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIHNoaXAgaWYgaXRzIHN1bmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEFyci5zcGxpY2UodG91Y2gsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQWxpdmUtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkR1tjb29yZFswXV1bY29vcmRbMV1dID0gXCJ4XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNaXNzZWQrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHJlYWxQLCB4U2l6ZSwgeVNpemUpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzaXplIGlmIHRoZSBwbGF5ZXIgaXMgYSByZWFsIG9uZVxuICAgICAgICB0aGlzLnJlYWxQID0gcmVhbFA7XG4gICAgICAgIC8vIE5hbWUgZ2l2ZW4gdG8gdGhlIHBsYXllclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyBJcyBpdCB0aGUgY3VycmVudCBwbGF5ZXJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gYm9hcmQgb2YgdGhlIHBsYXllclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCh4U2l6ZSwgeVNpemUpO1xuICAgIH07XG5cbiAgICAvLyBtb2RpZml5IG5hbWUgb2YgdGhlIHBsYXllclxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH07XG5cbiAgICAvLyB0b2dnbGUgdGhlIGJvb2xlZW4gaWYgaXRzIHRoZSBvbmUgcGxheWluZ1xuICAgIHRvZ2dsZUFjdGl2ZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmU9ICF0aGlzLmFjdGl2ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3Rvcihjb29yZEluaXQsIGNvb3JkRmluKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2Ugb2YgdGltZXMgdGhlIHNoaXAgd2VyZSBoaXRcbiAgICAgICAgdGhpcy5oaXROYiA9IDA7XG4gICAgICAgIC8vIEJvb2xlYW4gc2hvd2luZyBpZiB0aGUgc2hpcCB3YXMgaGl0IGluIGFsbCBpdHMgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjb29kaW5hdGVzIGluaXRpYWwgYW5kIGZpbmFsIG9mIHRoZSBzaGlwIGdpdmVuIGZvcm0gYSB2ZXJ0aWNhbCBzaGlwXG4gICAgICAgIGlmIChjb29yZEluaXRbMF0gPT09IGNvb3JkRmluWzBdICYmIGNvb3JkSW5pdFsxXSAhPT0gY29vcmRGaW5bMV0pIHtcbiAgICAgICAgICAgIC8vIGluaXQgbGVuZ3RoIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IE1hdGguYWJzKGNvb3JkSW5pdFsxXS1jb29yZEZpblsxXSkgKyAxXG4gICAgICAgICAgICAvLyBpbml0IHBvc2lzaW9uIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgLy8gc3RvcmUgaW5pdGlhbCBhbmQgZmluYWwgY29vcmRpbmF0ZSBpbiBmdW5jdGlvbiBvZiBpdHMgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuY29vcmRJbml0ID0gY29vcmRJbml0WzFdIDwgY29vcmRGaW5bMV0gPyBjb29yZEluaXQ6IGNvb3JkRmluO1xuICAgICAgICAgICAgdGhpcy5jb29yZEZpbiA9IGNvb3JkSW5pdFsxXSA+IGNvb3JkRmluWzFdID8gY29vcmRJbml0OiBjb29yZEZpbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb29yZEluaXRbMV0gPT09IGNvb3JkRmluWzFdICYmIGNvb3JkSW5pdFswXSAhPT0gY29vcmRGaW5bMF0pIHtcbiAgICAgICAgICAgIC8vIGluaXQgbGVuZ3RoIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IE1hdGguYWJzKGNvb3JkSW5pdFswXS1jb29yZEZpblswXSkgKyAxXG4gICAgICAgICAgICAvLyBpbml0IHBvc2lzaW9uIG9mIHRoZSBzaGlwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICAvLyBzdG9yZSBpbml0aWFsIGFuZCBmaW5hbCBjb29yZGluYXRlIGluIGZ1bmN0aW9uIG9mIGl0cyBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5jb29yZEluaXQgPSBjb29yZEluaXRbMF0gPCBjb29yZEZpblswXSA/IGNvb3JkSW5pdDogY29vcmRGaW47XG4gICAgICAgICAgICB0aGlzLmNvb3JkRmluID0gY29vcmRJbml0WzBdID4gY29vcmRGaW5bMF0gPyBjb29yZEluaXQ6IGNvb3JkRmluO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY29vcmRpbmF0ZSBnaXZlbiAke2Nvb3JkSW5pdH0gYW5kICR7Y29vcmRGaW59IGRvZXNuJ3QgYWxsb3cgdGhlIGNyZWF0aW9uIG9mIGEgc2hpcGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgc2hpcCBoYXMgc3Vua1xuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0TmIgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGlmIHNoaXAgaXMgaGl0IGl0ZXJhdGUgdGhlIG51bWJlciBvZiBoaXQgYW5kIGNoZWNrIGlmIHNoaXAgaGFzIHN1bmtcbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0TmIrKztcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG59O1xuIiwiXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGRlYWxpbmcgd2l0aCB0aGUgY29udHJvbCBvZiB0aGUgcGxheWVyIGFuZCB0aGUgY29tcHV0ZXJcbmV4cG9ydCBjb25zdCBDb250cm9sR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIEdpdmUgcmVzdWx0cyB0byB0aGUgcm91bmQgYWN0dWFsbHkgcGxheWVkXG4gICAgY29uc3QgZGVhbFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCwgbmJTaGlwLCB0YXJnZXQsIHBsYXllcikge1xuICAgICAgICBjb25zdCBjb250YWluZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckFjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyR1wiKS50ZXh0Q29udGVudFxuICAgICAgICAvLyBDaGVjayBpZiBvbmUgc2hpcCB3YXMgaGl0XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcInJnYmEoMjU1LDAsMCwuOClcIlxuICAgICAgICAgICAgaWYgKG5iU2hpcCA9PT0gcGxheWVyLmJvYXJkLnNoaXBBbGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lckluZm8udGV4dENvbnRlbnQgPSBgOiAke3BsYXllckFjdGl2ZX0gVG91Y2hlZGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lckluZm8udGV4dENvbnRlbnQgPSBgOiAke3BsYXllckFjdGl2ZX0gaGFzIHN1bmsgYSBib2F0YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwicmdiYSgwLDAsMjU1LC44KVwiXG4gICAgICAgICAgICBjb250YWluZXJJbmZvLnRleHRDb250ZW50ID0gYDogJHtwbGF5ZXJBY3RpdmV9IE1pc3NlZGBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gYXR0YWNrIG9mIGEgaHVtYW4gcGxheWVyXG4gICAgY29uc3QgYXR0YWNrQyA9IGZ1bmN0aW9uKGV2ZW50LCBwbGF5ZXIpIHtcbiAgICAgICAgLy8gR2V0IGFsbCBjdXJyZW50IHNoaXAgaW4gb3JkZXIgdG8gY29tcGFyZSBhZnRlciB0aGUgYXR0YWNrXG4gICAgICAgIGNvbnN0IG5iU2hpcCA9IHBsYXllci5ib2FyZC5zaGlwQWxpdmU7XG4gICAgICAgIC8vIEdldCBwb3NpdGlvbiBvbiBmcm9udCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvb3JkaW5hdGUgY2xpY2tlZCBieSBwbGF5ZXJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgY29vcmRpbmF0ZSBjbGlja2VkIGlzIG9uIHRoZSBncmlkXG4gICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgZ3JpZF9lbGVtXyR7cGxheWVyLm5hbWV9YCkpIHJldHVyblxuICAgICAgICAvLyBFeHRyYWN0IHRoZSBjb29yZGluYXRlIGZyb20gdGhlIGlkIG9mIHRoZSBncmlkIGVsZW1lbnRcbiAgICAgICAgbGV0IFt5Q29vcmQsIHhDb29yZF0gPSB0YXJnZXQuaWQubWF0Y2goL1xcZCsvZyk7XG4gICAgICAgIC8vIEF0dGFjayB0aGUgcGxheWVyJ3MgYm9hcmQgZ2l2ZW5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soW051bWJlcih4Q29vcmQpLCBOdW1iZXIoeUNvb3JkKV0pO1xuICAgICAgICAvLyBBcHBseSB0aGUgcmVzdWx0c1xuICAgICAgICBkZWFsUmVzdWx0KHJlc3VsdCwgbmJTaGlwLCB0YXJnZXQsIHBsYXllcik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIGF0dGFjayBvZiBhIGNvbXB1dGVyXG4gICAgY29uc3QgYXR0YWNrUmFuZG9tID0gZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgICAgIC8vIEdldCBhbGwgY3VycmVudCBzaGlwIGluIG9yZGVyIHRvIGNvbXBhcmUgYWZ0ZXIgdGhlIGF0dGFja1xuICAgICAgICBjb25zdCBuYlNoaXAgPSBwbGF5ZXIuYm9hcmQuc2hpcEFsaXZlO1xuICAgICAgICAvLyBHZXQgYWxsIHBvc3NpYmxlIG1vdmVzIG9uIHRoZSBib2FyZFxuICAgICAgICBjb25zdCBwb3NzaWJsZU1vdmUgPSBwbGF5ZXIuYm9hcmQucG9zc2libGVNb3ZlO1xuICAgICAgICAvLyBnZXQgb25lIHJhbmRvbSBjb29yZGluYXRlIGluIGFsbCBwb3NzaWJsZSBtb3Zlc1xuICAgICAgICBjb25zdCBjb29yZCA9IHBvc3NpYmxlTW92ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmUubGVuZ3RoKV07XG4gICAgICAgIC8vIEdldCBwb3NpdGlvbiBvbiBmcm9udCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvb3JkaW5hdGUgb2J0YWluZWRcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3JfJHtjb29yZFsxXX1fY18ke2Nvb3JkWzBdfS5ncmlkX2VsZW1fJHtwbGF5ZXIubmFtZX1gKTtcbiAgICAgICAgLy8gQXR0YWNrIHRoZSBwbGF5ZXIncyBib2FyZCBnaXZlblxuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbTnVtYmVyKGNvb3JkWzBdKSwgTnVtYmVyKGNvb3JkWzFdKV0pO1xuICAgICAgICAvLyBBcHBseSB0aGUgcmVzdWx0c1xuICAgICAgICBkZWFsUmVzdWx0KHJlc3VsdCwgbmJTaGlwLCB0YXJnZXQsIHBsYXllcik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFja0MsXG4gICAgICAgIGF0dGFja1JhbmRvbVxuICAgIH07XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2ludGVybmFsL1BsYXllclwiXG5pbXBvcnQgeyBDb250cm9sR2FtZSB9IGZyb20gXCIuL0NvbnRyb2xHYW1lXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgY29udHJvbCB0aGUgZ2FtZVxuZXhwb3J0IGNvbnN0IENyZWF0ZUdhbWUgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vIEluaXRpYWxpc2UgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBwbGF5ZXJzXG4gICAgbGV0IHBsYXllcnMgPSB7XG4gICAgICAgIHBsYXllcjE6IFwiXCIsXG4gICAgICAgIHBsYXllcjI6IFwiXCIsXG4gICAgfTtcblxuICAgIC8vIENyZWF0aW9uIHRvIGNvbnRyb2wgb2JqZWN0IHRvIGF0dGFjayBhbmQgZ2V0IHJlc3VsdHNcbiAgICBjb25zdCBjb250cm9sbGVyID0gQ29udHJvbEdhbWUoKTtcblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBwbGF5ZXIgYW5kIHNob3cgaXRzIG5hbWUgb24gdGhlIGZyb250XG4gICAgY29uc3Qgc2hvd1BsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyR1wiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwbGF5ZXJzW2dldEFjdGl2ZVBsYXllcigpXS5uYW1lO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIDMgcmFuZG9tIHNoaXBzIG9mIGxlbmd0aCAyIHRvIDVcbiAgICBjb25zdCByYW5kb21TaGlwID0gZnVuY3Rpb24ocGxheWVyLCBuYlNoaXA9Myl7XG4gICAgICAgIHBsYXllci5ib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxuYlNoaXA7IGkrKyl7XG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYWRkUmFuZG9tU2hpcChpKzIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBhIHBsYXllciB1c2luZyB0aGUgdGhlIGlucHV0cyBpbiB0aGUgZnJvbnRcbiAgICBjb25zdCBjcmVhdGVQbGF5ZXIgPSBmdW5jdGlvbihuYW1lLCBhY3RpdmU9ZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LW5hbWVgKS52YWx1ZSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LW5hbWVgKS52YWx1ZTogbmFtZTtcbiAgICAgICAgY29uc3Qgc2l6ZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29vcmRYJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHNpemVZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb3JkWScpLnZhbHVlO1xuICAgICAgICBjb25zdCByZWFsUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25hbWV9LXJlYWxwYCkuY2hlY2tlZDtcbiAgICAgICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lLCByZWFsUCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgcGxheWVyLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJhbmRvbVNoaXAocGxheWVyKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIDIgcGxheWVycyBoYXZlIHRoZSBzYW1lIG5hbWVzIGFuZCB1cGRhdGUgdGhlbSBpZiBpdCBpcyB0aGUgY2FzZVxuICAgIC8vIFByZXZlbnQgaWQgY29saXNpdGlvbiBpbiB0aGUgYm9hcmRzXG4gICAgY29uc3QgY2hlY2tQbGF5ZXJzTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocGxheWVycy5wbGF5ZXIxLm5hbWUgPT09IHBsYXllcnMucGxheWVyMi5uYW1lKSB7XG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjEuc2V0TmFtZShwbGF5ZXJzLnBsYXllcjEubmFtZSArIFwiLTFcIik7XG4gICAgICAgICAgICBwbGF5ZXJzLnBsYXllcjIuc2V0TmFtZShwbGF5ZXJzLnBsYXllcjIubmFtZSArIFwiLTJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU3RvcmUgcGxheWVycyBpbmZvcm1hdGlvbiB1c2VkIGluIGdhbWVcbiAgICBwbGF5ZXJzID0ge1xuICAgICAgICBwbGF5ZXIxOiBjcmVhdGVQbGF5ZXIoXCJwbGF5ZXIxXCIsIHRydWUpLFxuICAgICAgICBwbGF5ZXIyOiBjcmVhdGVQbGF5ZXIoXCJwbGF5ZXIyXCIpLFxuICAgIH07XG5cbiAgICAvLyBHZXQgdGhlIHBsYXllciB3aGljaCBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyc1twbGF5ZXJdLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8vIEdldCB0aGUgcGxheWVyIHdoaWNoIGlzIG5vdCBjdXJyZW50bHkgcGxheWluZ1xuICAgIGNvbnN0IGdldE5vbkFjdGl2ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBpbiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAoIXBsYXllcnNbcGxheWVyXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBbHRlcm5hdGUgYWN0aXZlIGFuZCBub24gYWN0aXZlIHBsYXllciBhcyB3ZWxsIGFzIHVwZGF0ZSB0aGUgYWN0aXZlIGJvYXJkXG4gICAgY29uc3QgY2hhbmdlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckFjdGl2ZSA9IGdldEFjdGl2ZVBsYXllcigpO1xuICAgICAgICBjb25zdCBwbGF5ZXJOb25BY3RpdmUgPSBnZXROb25BY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgcGxheWVyc1twbGF5ZXJBY3RpdmVdLnRvZ2dsZUFjdGl2ZSgpO1xuICAgICAgICBwbGF5ZXJzW3BsYXllck5vbkFjdGl2ZV0udG9nZ2xlQWN0aXZlKCk7XG4gICAgICAgIGNvbnN0IGJvYXJkUDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBncmlkXyR7cGxheWVyc1twbGF5ZXJBY3RpdmVdLm5hbWV9YClbMF07XG4gICAgICAgIGNvbnN0IGJvYXJkUDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBncmlkXyR7cGxheWVyc1twbGF5ZXJOb25BY3RpdmVdLm5hbWV9YClbMF07XG4gICAgICAgIGJvYXJkUDEuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYm9hcmRQMi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICAvLyBBdHRhY2sgZnJvbSB0aGUgY29tcHV0ZXJcbiAgICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFwbGF5ZXJzW2dldEFjdGl2ZVBsYXllcigpXS5yZWFsUCkge1xuICAgICAgICAgICAgY29uc3QgcmVzQXR0YWNrID0gY29udHJvbGxlci5hdHRhY2tSYW5kb20ocGxheWVyc1tnZXROb25BY3RpdmVQbGF5ZXIoKV0pO1xuICAgICAgICAgICAgY2hlY2tSZXNBdHRhY2socmVzQXR0YWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBPbmNlIGEgcGxheWVyIGF0dGFjayB3ZWNoZWNrIGlmIGNoZWNrIGlmIGl0IHdhcyBhIHN1Y2Nlc2Z1bCBhdHRhY2sgYW5kIGNoZWNrIGlmIHRoZSBnYW1lIGVuZFxuICAgIGNvbnN0IGNoZWNrUmVzQXR0YWNrID0gZnVuY3Rpb24ocmVzQXR0YWNrKSB7XG4gICAgICAgIGlmICghcmVzQXR0YWNrKSB7XG4gICAgICAgICAgICBjaGFuZ2VQbGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBzaG93UGxheWVyKCk7XG4gICAgICAgIGlmIChwbGF5ZXJzW2dldE5vbkFjdGl2ZVBsYXllcigpXS5ib2FyZC5zaGlwQWxpdmUgPT09IDApe1xuICAgICAgICAgICAgZW5kR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlIHRpbWVvdXQgaW4gb3JkZXIgdG8gc2hvdyB0aGUgY29tcHV0ZXIgcGxheWluZ1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2F0dGFjaygpO30sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRnVuY3Rpb24gd2hpY2ggY3JlYXRlIGEgYm9hcmRcbiAgICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gZnVuY3Rpb24ocGxheWVyTmFtZSwgYm9hcmQsIG5hbWUsIHBsYXlpbmc9dHJ1ZSkge1xuICAgICAgICAvLyBHZXQgQm9hcmQgc2l6ZSBcbiAgICAgICAgY29uc3Qgcm93cyA9IGJvYXJkWzBdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29scyA9IGJvYXJkLmxlbmd0aDtcbiAgICAgICAgLy8gR2V0IGRpdiBlbGVtZW50cyB3aGVyZSBib2FyZCBpcyBsb2NhdGVkXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgICAgICAvLyBSZXNldCB0aGUgYm9hcmRcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIC8vIEFkZCBjbGFzcyB0byB0aGlzIGVsZW1lbnQgaW4gb3JkZXIgdG8gZGlmZmVyZW50aWF0ZSB0aGUgZGlmZmVyZW50IGJvYXJkcyBjcmVhdGVkXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBncmlkX3BgKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGdyaWRfJHtwbGF5ZXJOYW1lfWApO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGdyaWRcbiAgICAgICAgY29udGFpbmVyLnN0eWxlW1wiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCJdID0gYHJlcGVhdCgke2NvbHN9LCAycmVtKWBcbiAgICAgICAgY29udGFpbmVyLnN0eWxlW1wiZ3JpZC10ZW1wbGF0ZS1yb3dzXCJdID0gYHJlcGVhdCgke3Jvd3N9LCAycmVtKWBcbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGJvYXJkXG4gICAgICAgIGZvciAobGV0IHJvdz0wOyByb3c8cm93czsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbD0wOyBjb2w8Y29sczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGdyaWRfZWxlbS5jbGFzc05hbWUgPSBgZ3JpZF9lbGVtIGdyaWRfZWxlbV8ke3BsYXllck5hbWV9YDtcbiAgICAgICAgICAgICAgICBncmlkX2VsZW0uaWQgPSBgcl8ke3Jvd31fY18ke2NvbH1gO1xuICAgICAgICAgICAgICAgIGdyaWRfZWxlbS50ZXh0Q29udGVudCA9IGJvYXJkW2NvbF1bcm93XTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZF9lbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZXZlbnQgdG8gdGhlIGJvYXJkIGZvciB3aGVuIHRoZSBwbGF5ZXIgaXMgY2xpY2tpbmcgXG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICBjb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkaW5hdGUgY2xpY2tlZCB3YXMgYWxyZWFkeSB1c2VkIGJlZm9yIGF0dGFja2luZyB0aGUgY29vcmRpbmF0ZVxuICAgICAgICAgICAgICAgIGxldCBbeUNvb3JkLCB4Q29vcmRdID0gZXZlbnQudGFyZ2V0LmlkLm1hdGNoKC9cXGQrL2cpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrTW92ZSA9IHBsYXllcnNbZ2V0Tm9uQWN0aXZlUGxheWVyKCldLmJvYXJkLnBvc3NpYmxlTW92ZS5tYXAoKGVsZW0pID0+IGVsZW0udG9TdHJpbmcoKSkuaW5kZXhPZihbeENvb3JkLCB5Q29vcmRdLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIC8vIE1vcmV2ZXIgd2UgYWxzbyBjaGVjayBpZiB0aGUgYm9hcmQgc2VsZWN0ZWQgaXMgdGhlIGFjdGl2ZSBvbmVcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmIGNoZWNrTW92ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzQXR0YWNrID0gY29udHJvbGxlci5hdHRhY2tDKGV2ZW50LCBwbGF5ZXJzW2dldE5vbkFjdGl2ZVBsYXllcigpXSk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmVzQXR0YWNrKHJlc0F0dGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IHRoZSBHYW1lIGJ5IGJ1aWxkaW5nIHRoZSBib2FyZHMgYW5kIGlmIG5lY2Vzc2FyeSBleGVjdXRpbmcgdGhlIGZpcnN0IGF0dGFja1xuICAgIGNvbnN0IHJ1bkdhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2hvd1BsYXllcigpXG4gICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIxLm5hbWUsIHBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZEcsIFwicGxheWVyMS1ncmlkXCIpXG4gICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIyLm5hbWUsIHBsYXllcnMucGxheWVyMi5ib2FyZC5ib2FyZEcsIFwicGxheWVyMi1ncmlkXCIpXG4gICAgICAgIGNvbnN0IGJvYXJkUCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGdyaWRfJHtwbGF5ZXJzLnBsYXllcjIubmFtZX1gKVswXVxuICAgICAgICBib2FyZFAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKCFwbGF5ZXJzLnBsYXllcjEucmVhbFApe1xuICAgICAgICAgICAgYXR0YWNrKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uIHNlbGVjdGluZyB0aGUgc2hpcCBmb3IgdGhlIGh1bWFuIHBsYXllcnNcbiAgICBjb25zdCBnZXRHYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLWdhbWUtbmFtZVwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyMk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjItZ2FtZS1uYW1lXCIpO1xuICAgICAgICBjaGVja1BsYXllcnNOYW1lKCk7XG4gICAgICAgIHBsYXllcjFOYW1lLnRleHRDb250ZW50ID0gcGxheWVycy5wbGF5ZXIxLm5hbWU7XG4gICAgICAgIHBsYXllcjJOYW1lLnRleHRDb250ZW50ID0gcGxheWVycy5wbGF5ZXIyLm5hbWU7XG4gICAgICAgIGlmIChwbGF5ZXJzLnBsYXllcjEucmVhbFAgJiYgcGxheWVycy5wbGF5ZXIyLnJlYWxQKSB7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dQMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1zaGlwXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUmFuZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmQtc2hpcDFcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25QbGF5MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheTEtZ2FtZVwiKTtcbiAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIxLm5hbWUsIHBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDFcIiwgZmFsc2UpXG4gICAgICAgICAgICBidXR0b25QbGF5MS50ZXh0Q29udGVudCA9IGBHbyB0byAke3BsYXllcnMucGxheWVyMi5uYW1lfSBCb2FyZGBcbiAgICAgICAgICAgIGRpYWxvZ1AxLnNob3dNb2RhbCgpO1xuICAgIFxuICAgICAgICAgICAgYnV0dG9uUmFuZDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMS5uYW1lLCBwbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAxXCIsIGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnV0dG9uUGxheTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyLXNoaXBcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uUmFuZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmQtc2hpcDJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uUGxheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkyLWdhbWVcIik7XG4gICAgICAgICAgICAgICAgZGlhbG9nUDEuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjIubmFtZSwgcGxheWVycy5wbGF5ZXIyLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMlwiLCBmYWxzZSlcbiAgICAgICAgICAgICAgICBkaWFsb2dQMi5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBidXR0b25SYW5kMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjIubmFtZSwgcGxheWVycy5wbGF5ZXIyLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMlwiLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJ1dHRvblBsYXkyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUDIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcnVuR2FtZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBsYXllcnMucGxheWVyMS5yZWFsUCkge1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjEtc2hpcFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblJhbmQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kLXNoaXAxXCIpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uUGxheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkxLWdhbWVcIik7XG4gICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMS5uYW1lLCBwbGF5ZXJzLnBsYXllcjEuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAxXCIsIGZhbHNlKVxuICAgICAgICAgICAgYnV0dG9uUGxheTEudGV4dENvbnRlbnQgPSBgUGxheSBHYW1lYFxuICAgICAgICAgICAgZGlhbG9nUDEuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBidXR0b25SYW5kMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQm9hcmQocGxheWVycy5wbGF5ZXIxLm5hbWUsIHBsYXllcnMucGxheWVyMS5ib2FyZC5ib2FyZFQsIFwiYm9hcmQtc2hpcDFcIiwgZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnV0dG9uUGxheTEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpYWxvZ1AxLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcnVuR2FtZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwbGF5ZXJzLnBsYXllcjIucmVhbFApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1AyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyLXNoaXBcIik7XG4gICAgICAgICAgICBjb25zdCBidXR0b25SYW5kMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZC1zaGlwMlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblBsYXkyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5Mi1nYW1lXCIpO1xuICAgICAgICAgICAgcmFuZG9tU2hpcChwbGF5ZXJzLnBsYXllcjEpO1xuICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZChwbGF5ZXJzLnBsYXllcjIubmFtZSwgcGxheWVycy5wbGF5ZXIyLmJvYXJkLmJvYXJkVCwgXCJib2FyZC1zaGlwMlwiLCBmYWxzZSlcbiAgICAgICAgICAgIGRpYWxvZ1AyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgYnV0dG9uUmFuZDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXAocGxheWVycy5wbGF5ZXIyKTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUJvYXJkKHBsYXllcnMucGxheWVyMi5uYW1lLCBwbGF5ZXJzLnBsYXllcjIuYm9hcmQuYm9hcmRULCBcImJvYXJkLXNoaXAyXCIsIGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ1dHRvblBsYXkyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBkaWFsb2dQMi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJ1bkdhbWUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMSk7XG4gICAgICAgICAgICByYW5kb21TaGlwKHBsYXllcnMucGxheWVyMik7XG4gICAgICAgICAgICBydW5HYW1lKCk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgLy8gRnVuY3Rpb24gRW5kaW5nIHRoZSBnYW1lXG4gICAgY29uc3QgZW5kR2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXJQMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1ncmlkXCIpO1xuICAgICAgICBjb25zdCBjb250YWluZXJQMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMi1ncmlkXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJXaW4gPSBwbGF5ZXJzW2dldEFjdGl2ZVBsYXllcigpXTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGdyaWRfJHtwbGF5ZXJzW1wicGxheWVyMVwiXS5uYW1lfWApWzBdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGdyaWRfJHtwbGF5ZXJzW1wicGxheWVyMlwiXS5uYW1lfWApWzBdLmNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLXJcIikudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJXaW4ubmFtZX0gd2luICEhIWBcbiAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGdldEdhbWVcbiAgICB9O1xufTsiLCJpbXBvcnQgeyBDcmVhdGVHYW1lIH0gZnJvbSBcIi4vQ3JlYXRlR2FtZVwiXG5cblxuZXhwb3J0IGNvbnN0IFVJID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYnV0dG9uUnVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJydW4tZ2FtZVwiKTtcblxuICAgIGJ1dHRvblJ1bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSBcInJlc3RhcnRcIikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBcIlJFU0VUXCI7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lID0gXCJyZXN0YXJ0XCI7XG4gICAgICAgICAgICBjb25zdCBnYW1lID0gQ3JlYXRlR2FtZSgpO1xuICAgICAgICAgICAgZ2FtZS5nZXRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==