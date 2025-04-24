const caixa_interacao = document.querySelector("#caixa_interações");
const caixa_cursos = document.querySelector("#caixa_cursos");
const cursos_classe = [...document.querySelectorAll(".curso")];

const btn_adicionar = document.querySelector("#btn_adicionar");
const btn_remover = document.querySelector("#btn_remover");
const btn_selecionar = document.querySelector("#btn_selecionado");

const cursos = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "MySQL",
  "ReactNative",
];

cursos.map((elemento, chave) => {
  const novo_elemento = document.createElement("label");
  novo_elemento.setAttribute("id", "c" + chave);
  novo_elemento.setAttribute("class", "curso c1");
  novo_elemento.innerHTML = elemento;

  const comando = document.createElement("div");
  comando.setAttribute("class", "comando");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comando.appendChild(rb);

  novo_elemento.appendChild(comando);

  caixa_cursos.appendChild(novo_elemento);
});

const verificr_curso_selecionado = () => {
  const todos_radios = [...document.querySelectorAll("input[type=radio] ")];
  const radio_selecionado = todos_radios.filter((ele, ind, arr) => {
    return ele.checked;
  });
  return radio_selecionado[0];
};

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
  const rs = verificr_curso_selecionado();
  try {
    const curso_selecionado = rs.parentNode.parentNode;
    curso_selecionado.remove();
    alert("O curso: " + curso_selecionado.textContent + ", foi removido.");
  } catch {
    alert("Selecione um Curso");
  }
});

// parentNode
// childNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
