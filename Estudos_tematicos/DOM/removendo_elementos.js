const caixa = document.querySelector("#caixa_01");
const cursos = [...document.querySelectorAll("#c1")];
const curso = [
  "Html",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "MySQL",
  "Java",
  "Python",
  "C++",
];

curso.map((el, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  const btn_lixera = document.createElement("img");
  btn_lixera.setAttribute("src", "./icons8-delete-30.png");
  btn_lixera.addEventListener("click", (evt) => {
    const obejeto = evt.target.parentElement
    console.log(obejeto)
    caixa.removeChild(evt.target.parentElement);
  });
  novoElemento.appendChild(btn_lixera);
  caixa.appendChild(novoElemento);
});
