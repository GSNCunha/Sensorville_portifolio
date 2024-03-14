"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getProjects": () => (/* binding */ getProjects)
});

;// CONCATENATED MODULE: ./pages/api/projects.json
const projects_namespaceObject = JSON.parse('[{"id":1,"name":"Driwwwle","image":"https://imgur.com/kbGs6zH.png","description":"A platform for web developers to showcase their projects","tags":["next","node","mongodb","tailwind","react-query"],"source_code":"https://github.com/itsnitinr/driwwwle-v2","demo":"https://driwwwle.com/"},{"id":2,"name":"PCB Cupid","image":"https://imgur.com/tAZotn3.png","description":"E-commerce website for a PCB manufacturing company","tags":["react","node","mongodb","redux","razorpay","material-ui"],"demo":"https://www.pcbcupid.com/"},{"id":3,"name":"HealthyWays","image":"https://imgur.com/8FFqaX8.png","description":"A food ordering platform for healthy and home-cooked meals","tags":["react","node","mongodb","redux","razorpay","material-ui"],"source_code":"https://github.com/itsnitinr/healthyways","demo":"https://healthyways.herokuapp.com/"},{"id":4,"name":"VSCode Portfolio","image":"https://imgur.com/mKkz0iz.png","description":"A themeable and developer-centric portfolio based on the VSCode","tags":["next","css-modules"],"source_code":"https://github.com/itsnitinr/vscode-portfolio","demo":"http://vscode-portfolio.vercel.app/"}]');
;// CONCATENATED MODULE: ./pages/api/projects.js

const getProjects = ()=>{
    return projects_namespaceObject;
};
/* harmony default export */ const projects = ((req, res)=>{
    const projects = getProjects();
    res.json(projects);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7678));
module.exports = __webpack_exports__;

})();