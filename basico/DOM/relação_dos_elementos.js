const caixa_01 = document.querySelector("#caixa_01");
const cursos = [...document.querySelectorAll(".curso")];

console.log(caixa_01.hasChildNodes());
console.log(cursos[1].hasChildNodes());
console.log(cursos[1].childNodes);

// console.log(document.getRootNode()); //Nó Raiz

// console.log(caixa_01.firstElementChild);
// console.log(caixa_01.lastElementChild);
// console.log(caixa_01.children);
