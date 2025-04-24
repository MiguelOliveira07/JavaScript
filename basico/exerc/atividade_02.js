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

btn_selecionar.addEventListener("click", (evt) => {
    const todos_radios = [...document.querySelectorAll('input[type=radio] ')]
    const radio_selecionado = todos_radios.filter((ele)=>{
        return ele.checked
    })
    console.log(radio_selecionado.parentNode)
});

