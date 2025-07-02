const caixa_01 = document.getElementById("caixa1");
const caixa_02 = document.getElementById("caixa2");
const btn_transferir = document.getElementById("btn_transferir");
const todos_cursos = [...document.querySelectorAll(".curso")];

todos_cursos.map((el) => {
  el.addEventListener("click", (evento) => {
    const curso_selc = evento.target;
    curso_selc.classList.toggle("curso_selecionado");
  });
});

btn_transferir.addEventListener("click", () => {
  const os_selecionados = [...document.querySelectorAll(".curso_selecionado")];
  const os_não_selecionados = [
    ...document.querySelectorAll(".curso:not(.curso_selecionado)"),
  ];
  //   console.log(os_selecionados)
  os_selecionados.map((elemento) => {
    caixa_02.appendChild(elemento);
  });
  os_não_selecionados.map((elemento) => {
    caixa_01.appendChild(elemento);
  });
});
