class CarroPopular {
  constructor() {
    if (this.constructor === CarroPopular) {
      throw new TypeError("Essa classe não pode ser instanciada");
    }
    if (this.ligar === undefined) {
      throw new TypeError("É obrigatório implementar o método ligar");
    }
    if (this.desligar === undefined) {
      throw new TypeError("É obrigatório implementar o método desligar");
    }
    this.portas = 4;
    this.rodas = 4;
    this.ligado = false;
  }
}

class Carro extends CarroPopular {
  constructor(tipo, estagioTurbo) {
    super();
    this.turbo = new Turbo(estagioTurbo);
    if (tipo == 1) {
      this.velmax = 120;
      this.nome = "Normal";
    } else if (tipo == 2) {
      this.velmax = 160;
      this.nome = "Esportivo";
    } else if (tipo == 3) {
      this.velmax = 200;
      this.nome = "Super_esportivo";
    }
    this.velmax += this.turbo.pot;
  }
  info() {
    console.log(this.nome);
    console.log(this.velmax);
    console.log(this.turbo);
    console.log(this.portas);
    console.log(this.rodas);
    console.log(this.ligado);

    this.rodas = 4;
    console.log(`====================`);
  }
  ligar() {
    this.ligado = true
  }
  desligar() {
    this.ligado= false
  }
}

class Turbo {
  constructor(e) {
    if (e == 0) {
      this.pot = 10;
    } else if (e == 1) {
      this.pot = 50;
    } else if (e == 2) {
      this.pot = 75;
    } else if (e == 3) {
      this.pot = 100;
    }
  }
}

class CarroEspecial extends Carro {
  constructor(estagioTurbo) {
    super(3, estagioTurbo);
    this.tipoInfo = 2;
    this.velmax = 300 + this.turbo.pot;
    this.nome = "Carro especial";
  }
  info() {
    if (this.tipoInfo == 1) {
      super.info();
    } else {
      console.log(`Nome: ${this.nome}`);
      console.log(`Vel.Max.: ${this.velmax}Km/h`);
      console.log(`Turbo: ${this.turbo}`);
      console.log(`Nº de portas: ${this.portas}`);
      console.log(`Nº de rodas: ${this.rodas}`);
      console.log(`Está ligado? ${this.ligado}`);
      console.log(`====================`);
    }
  }
}

const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(3);
// const c4 = new CarroPopular();

c1.info();
c2.info();
c3.info();
