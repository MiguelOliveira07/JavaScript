class Carro {
  constructor(tipo, estagioTurbo) {
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
    console.log(`====================`);
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
    this.tipoInfo = 1;
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
      console.log(`====================`);
    }
  }
}

const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(3);

c1.info();
c2.info();
c3.info();
