const caixa = document.querySelector("#caixa");

const carros = ["chevett", "fusca", "fiat", "celta"];

let ul = `<ul>`;
carros.map((el) => {
  ul += `<li>${el}</li>`;
});

ul + `</ul>`;
caixa.innerHTML = ul;

// const curso = "javaScript";
// const canal = "CBF cursos _ YouTube";
// const frase = 'Este é o curso de' + curso + ', do canal: ' + canal + '.'
// const frase = `Este é o curso de
//  \n${curso},
//  \ndo canal ${canal}.
//  \nFaz 1 mês que estou
// estudando.`;
// console.log(frase);
// caixa.innerHTML = frase;
