const tirar_selecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll("._selecionado")];
  cursosSelecionados.map((el) => {
    el.classList.remove("_selecionado");
  });
};

const criar_novo_curso = (curso) => {
  const novo_elemento = document.createElement("label");
  novo_elemento.setAttribute("class", "curso c1");
  novo_elemento.setAttribute("id", "c" + indice);
  novo_elemento.innerHTML = curso;
  novo_elemento.addEventListener("click", (evt) => {
    tirar_selecionado();
    evt.target.classList.toggle("_selecionado");
  });

  return novo_elemento;
};

const CursoSelecionado = () => {
  const curso_Selecionados = [...document.querySelectorAll("._selecionado")];

};

const caixa_interacao = document.querySelector("#caixa_interações");
const caixa_cursos = document.querySelector("#caixa_cursos");
const cursos_classe = [...document.querySelectorAll(".curso")];

const btn_adicionar_antes = document.querySelector("#btn_adicionar_antes");
const btn_adicionar_depois = document.querySelector("#btn_adicionar_depois");
const btn_remover = document.querySelector("#btn_remover");
const btn_selecionar = document.querySelector("#btn_selecionado");
const nome_curso = document.querySelector("#nome_curso");

const cursos = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "MySQL",
  "ReactNative",
];

let indice = 0;

cursos.map((elemento, chave) => {
  novo_elemento = criar_novo_curso(elemento);
  caixa_cursos.appendChild(novo_elemento);
  indice++;
});

btn_selecionar.addEventListener("click", (evt) => {
  const rs = verificr_curso_selecionado();
  if (rs !== undefined) {
    const curso_selecionado = rs.parentNode.parentNode.firstChild.textContent;
    alert("Curso selecionado: " + curso_selecionado);
  } else {
    alert("Selecione um Curso");
  }
});

btn_remover.addEventListener("click", (ele, ind, arr) => {
  const rs = verificar_curso_selecionado();
  try {
    const curso_selecionado = rs.parentNode.parentNode;
    curso_selecionado.remove();
    alert("O curso: " + curso_selecionado.textContent + ", foi removido.");
  } catch {
    alert("Selecione um Curso");
  }
});

btn_adicionar_antes.addEventListener("click", (evt) => {
  const rs = verificr_curso_selecionado();
  if (rs !== undefined) {
    const curso_selecionado = rs.parentNode.parentNode;
    const novo_curso = criar_novo_curso(nome_curso.value);
    caixa_cursos.insertBefore(novo_curso, curso_selecionado);
  } else {
    alert("Selecione um Curso");
  }
});

btn_adicionar_depois.addEventListener("click", (evt) => {
  const rs = verificr_curso_selecionado();
  if (rs !== undefined) {
    const curso_selecionado = rs.parentNode.parentNode;
    const novo_curso = criar_novo_curso(nome_curso.value);
    caixa_cursos.insertBefore(novo_curso, curso_selecionado.nextSibling);
  } else {
    alert("Selecione um Curso");
  }
});

// parentNode
// childNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
