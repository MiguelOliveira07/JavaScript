import { contatos } from "./modulo_pratica";

let c = {
  getTododContatos: function () {
    return contatos;
  },
  getContato: function (i_cont) {
    return contatos[i_cont];
  },
  addContato: function (new_cont, destino_DOM) {
    contatos.push(new_cont)
    const div = document.createElement("div");
    div.setAttribute("class", "contato");
    const p_nome = document.createElement("p");
    p_nome.innerHTML = new_cont.nome;
    const p_telefone = document.createElement("p");
    p_telefone.innerHTML = new_cont.telefone;
    const p_email = document.createElement("p");
    p_email.innerHTML = new_cont.email;

    div.appendChild(p_nome);
    div.appendChild(p_telefone);
    div.appendChild(p_email);

    destino_DOM.appendChild(div);
  },
};
