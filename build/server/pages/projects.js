(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 7068:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ProjectCard_card__Ilp8p",
	"content": "ProjectCard_content__SHdnM",
	"tags": "ProjectCard_tags__Atl1P",
	"cta": "ProjectCard_cta__J86_O",
	"underline": "ProjectCard_underline__IoTds"
};


/***/ }),

/***/ 9872:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ProjectsPage_container__f2WwY"
};


/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/ProjectCard.module.css
var ProjectCard_module = __webpack_require__(7068);
var ProjectCard_module_default = /*#__PURE__*/__webpack_require__.n(ProjectCard_module);
;// CONCATENATED MODULE: ./components/ProjectCard.jsx



const ProjectCard = ({ project  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProjectCard_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: project.image,
                alt: project.name,
                style: {
                    borderRadius: "10px",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "165px"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProjectCard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: project.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: project.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectCard_module_default()).tags,
                        children: project.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: tag,
                                children: tag
                            }, tag))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectCard_module_default()).cta,
                        children: project.source_code && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: project.source_code,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: (ProjectCard_module_default()).underline,
                            children: "Source Code"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);

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

// EXTERNAL MODULE: ./styles/ProjectsPage.module.css
var ProjectsPage_module = __webpack_require__(9872);
var ProjectsPage_module_default = /*#__PURE__*/__webpack_require__.n(ProjectsPage_module);
;// CONCATENATED MODULE: ./pages/projects.jsx




const ProjectsPage = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Projetos desenvolvidos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProjectsPage_module_default()).container,
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProjectCard, {
                        project: project
                    }, project.id))
            })
        ]
    });
};
async function getStaticProps() {
    const projects = getProjects();
    return {
        props: {
            title: "Projects",
            projects
        }
    };
}
/* harmony default export */ const pages_projects = (ProjectsPage);


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675], () => (__webpack_exec__(5761)));
module.exports = __webpack_exports__;

})();