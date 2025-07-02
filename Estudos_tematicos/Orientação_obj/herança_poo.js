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
    // this.setCor('bege')
  }
  atirar=function(){
    if(this.municao>0){
        this.municao--
    }
  }
}

class Utilitario extends Carro{
    constructor(nome,portas, lugares){
        super(nome,portas)
        this.lugares=lugares
    }
}

const c1 = new Carro("Strada", 4);
c1.ligar();
c1.setCor("preto");

const c2 = new Militar('Cão de guerra',2,102, 275);
c2.setCor('Bege')

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Ligado: ${c1.ligado}`);
console.log(`Cor: ${c1.cor}`);
console.log(`=========================`);

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Ligado: ${c2.ligado}`);
console.log(`Cor: ${c2.cor}`);
console.log(`=========================`);
