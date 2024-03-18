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
const projects_namespaceObject = JSON.parse('[{"id":1,"name":"Alarmicros","image":"https://i.imgur.com/4lZZafv.jpg","description":"Alarme residencial com microcontrolador arduino","tags":["C"],"source_code":"https://github.com/GSNCunha/alarmicros"},{"id":2,"name":"Armetro","image":"https://i.imgur.com/JVtutYO.png","description":"Simulação de funcionamento de um trem com controle de velocidade a partir de um cooler","tags":["C"],"source_code":"https://github.com/GSNCunha/Armetro"},{"id":3,"name":"Laboratório de sistemas digitais","image":"https://i.imgur.com/WUaM2Eg.png","description":"Ligação de uma FPGA a internet, pode ser controlada por um site em qualquer lugar do mundo","tags":["react","node","mongodb","graphQl","typescript"],"source_code":"https://github.com/GSNCunha/lab-sistemas"},{"id":4,"name":"E-commerce","image":"https://i.imgur.com/Cj8wrIj.png","description":"Ecomerce construido para acessibilidade, pode ser navegado apensa a partir de um teclado, sem mouse","tags":["react"],"source_code":"https://github.com/GSNCunha/ecomerce"},{"id":5,"name":"Bow and Arrow","image":"https://i.imgur.com/zwajErh.png","description":"Implementação do jogo bow and arrow feita puramente com ASCII","tags":["C"],"source_code":"https://github.com/GSNCunha/bow-and-arrow"},{"id":6,"name":"Taxi helper","image":"https://i.imgur.com/PhfYYPn.jpg","description":"Implementação que avalia o melhor ponto de taxi a partir da distância de uma pessoa com diferentes pontos de Taxi.","tags":["java"],"source_code":"https://github.com/GSNCunha/taxi-helper"},{"id":7,"name":"Bulma-React-Functional-Calculator","image":"https://i.imgur.com/vtImdTa.jpg","description":"Calculadora construida com o framework Bulma, React e programada com Functional JavaScript(usa apenas uma variável em toda implementação)","tags":["react","node","bulma"],"source_code":"https://github.com/GSNCunha/bulma-react_functional_calculator"},{"id":8,"name":"Accessible Design Library for Web Development","image":"https://i.imgur.com/veaP3Sx.png","description":"Biblioteca de design acessivel, usa aria para a11y ","tags":["react","aria"],"source_code":"https://github.com/GSNCunha/react-scripts-js"},{"id":9,"name":"Portifolio SensorVille","image":"https://i.imgur.com/YsFObd7.jpg","description":"Criado para me apresentar, para completar o processo seletivo da empresa SensorVille","tags":["react","node","typescript"],"source_code":"https://github.com/GSNCunha/vscode-portfolio"}]');
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