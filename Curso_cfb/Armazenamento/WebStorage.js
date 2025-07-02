const f_nome = document.querySelector("#nome");
const f_nota = document.querySelector("#nota");
const f_mens = document.querySelector("#mensagem");

document.querySelector("#btn_validar").addEventListener("click", (evt) => {});

let num = 10;
let curso = "JavaScript";

// window.localStorage.setItem("numero", num);
// window.localStorage.setItem("Numero2", num1);

localStorage.setItem("nome", "Miguel");
localStorage.setItem("idade", 18);
localStorage.setItem("curso", curso);
alert(localStorage.getItem(localStorage.key(0)));

// localStorage.setItem("Numero", 245);
// alert(localStorage.getItem("Numero2", num1));
// localStorage.clear()
