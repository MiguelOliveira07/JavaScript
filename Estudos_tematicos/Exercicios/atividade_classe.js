const input_nome = document.querySelector("#nome");
const input_portas = document.querySelector("#portas");
const input_bindagem = document.querySelector("#blindagem");
const input_municao = document.querySelector("#municao");

const escolha_militar = document.querySelector("#escolha_militar");
const escolha_utilitario = document.querySelector("#escolha_utilitario");

const btn_adicionar = document.querySelector("#btn_adc");
const div_carros = document.querySelector("#carros");

let a_carros = [];

const reset = () => {
  input_nome.value = "";
  input_portas.value = "";
  input_bindagem.value = "";
  input_municao.value = "";
};

escolha_militar.addEventListener("change", () => {
  input_bindagem.disabled = false;
  input_municao.disabled = false;
});

escolha_utilitario.addEventListener("change", () => {
  input_bindagem.disabled = true;
  input_municao.disabled = true;
  input_bindagem.value = "";
  input_municao.value = "";
});

btn_adicionar.addEventListener("click", (e) => {
  e.preventDefault(); // impede o reload da página ao clicar no botão
  if (escolha_utilitario.checked) {
    const c = new Carro(input_nome.value, input_portas.value);
    a_carros.push(c);
    reset();
  } else {
    const c = new Militar(input_nome.value, input_portas.value,input_bindagem.value,input_municao.value);
    a_carros.push(c);
    reset();
  }
  gerenciarExibicaoCarros();
});

const gerenciarExibicaoCarros = () => {
  div_carros.innerHTML = "";
  a_carros.forEach((c) => {
    const div = document.createElement("div");
    div.setAttribute("class", "carro");
    div.innerHTML = `Nome: ${c.nome}<br/>`;
    div.innerHTML+= `Portas: ${c.portas}<br/>`;
    div.innerHTML+= `Blindagem: ${c.blindagem}<br/>`;
    div.innerHTML+= `Munição: ${c.munição}<br/>`;
    div_carros.appendChild(div);
  });
};

class Carro {
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.vel = 0;
    this.cor = undefined;
  }

  ligar = function () {
    this.ligado = true;
  };

  desligar = function () {
    this.ligado = false;
  };

  setCor = function (cor) {
    this.cor = cor;
  };
}

class Militar extends Carro {
  //classe filho
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor('bege')
  }
  atirar = function () {
    if (this.municao > 0) {
      this.municao--;
    }
  };
}
