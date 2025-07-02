const caixa_01 = document.querySelector("#caixa_01");
const cursos = [...document.querySelectorAll(".curso")];
// const btn_c1 = document.querySelector(".c1");

caixa_01.addEventListener("click", (evento_caixa) => {
  console.log("Clicou na caixa_01");
});

cursos.map((elemento) => {
  elemento.addEventListener("click", (evt) => {
    evt.stopPropagation();
    console.log('Não estão conectados com o evento de cliclar na caixa_01')
  });
});

// btn_c1.addEventListener("click", (evento) => {
//   evento.stopPropagation();
// });
