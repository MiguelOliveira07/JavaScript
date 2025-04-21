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

curso.map((el,chave) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c"+chave);
    novoElemento.setAttribute("class", "curso c1");
    
    novoElemento.innerHTML = el;
    
    caixa.appendChild(novoElemento);

});

