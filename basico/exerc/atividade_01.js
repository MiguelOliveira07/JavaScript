const caixa_01 = document.getElementById("caixa1");
const btn_copiar = document.getElementById("btn_copy");
const btn_voltar = document.getElementById("btn_back");
const btn_limpar = document.getElementById("btn_limpar");
const caixa_02 = document.getElementById("caixa2");
const todos_cursos = [...document.querySelectorAll(".curso")];

todos_cursos.map((el) => {
  el.addEventListener("click", (evento) => {
    const curso_selc = evento.target;
    curso_selc.classList.toggle("curso_selecionado");
  });
});

btn_copiar.addEventListener("click", () => {
  const os_selecionados = [...document.querySelectorAll(".curso_selecionado")];
  //   console.log(os_selecionados)
  os_selecionados.map((elemento) => {
    caixa_02.appendChild(elemento);
  });
});

btn_voltar.addEventListener("click", () => {
  const os_selecionados = [...document.querySelectorAll(".curso_selecionado")];
  //   console.log(os_selecionados)
  os_selecionados.map((elemento) => {
    caixa_01.appendChild(elemento);
  });
});

