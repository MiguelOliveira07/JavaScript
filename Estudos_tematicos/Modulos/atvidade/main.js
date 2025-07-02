import c from "./contatos.js";

const listaContatos = document.getElementById("listaContatos");
const btn_enviar = document.getElementById("btn_enviar");

btn_enviar.addEventListener("click", () => {
  console.log("Botão clicado!");

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  console.log("Valores:", nome, telefone, email);

  const contato = {
    nome,
    telefone,
    email,
  };

  c.addContato(contato, listaContatos);
});
