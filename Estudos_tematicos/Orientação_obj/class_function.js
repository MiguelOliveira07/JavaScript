function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  getNome = function () {
    return this.nome;
  };
  getidade = function () {
    return this.idade;
  };
  setNome = function (nome) {
    return this.nome;
  };
  setidade = function (idade) {
    return this.idade;
  };
  info = function () {
    console.log(`Nome: ${this.nome}`);
    console.log(`Tipo: ${this.idade}`);
    console.log("======================");
  };
}

let pessoas = [];

const btn_adicionar = document.querySelector("#btn_adc");
const res = document.querySelector(".rest");
const Nome = document.querySelector("#nome");
const Idade = document.querySelector("#idade");

const addPessoas = () => {
  pessoas.map((p) => {
    const div = document.createElement("#f_nome");
    div.setAttribute("class", "pessoa");
    div.innerHTML = ` Nome : ${p.getNome}, idade: ${p.getidade}`;
  });
};

btn_adicionar.addEventListener("click", (evt) => {
  const p = new Pessoa(Nome.value, Idade.value);
  pessoas.push(p);
  Nome.value = "";
  Idade.value = "";
  Nome.focus();
  console.log(pessoas);
});
