class Carro {
  constructor(pnome, ptipo) {
    this.nome = pnome;
    if (ptipo ==1){
        this.tipo = 'esportivo'
        this.velmax = 300
    } else if (ptipo ==2){
      this.tipo = 'utilitário'
      this.velmax = 110
    } else if (ptipo == 3){
      this.tipo = 'Passeio'
      this.velmax = 110
    } else if (ptipo ==4){
      this.tipo = 'Militar'
      this.velmax = 100
    }
  }
  getNome(){
      return this.nome
    }
  gettipo(){
      return this.tipo
    }
  getVelcidade_max(){
      return this.velmax
    }
  getInfo(){
    return [this.nome, this.tipo, this.velmax]
  }
  setNome(nome){
    this.nome = nome
  }
  info(){
    console.log(`Nome: ${this.nome}`)
    console.log(`Tipo: ${this.tipo}`)
    console.log(`V.Max: ${this.velmax}`)
    console.log("======================")
  }
}

let c1 =new Carro('meu_caro', 1);
let c2 =new Carro('Anti_tanque', 4);
let c3 =new Carro('Aluga_carro', 3);

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax )

// c1.info()
// c2.info()
// c3.info()

// console.log(c1.getNome())
console.log(c1.getInfo())
 
c1.setNome('Super veloz')
console.log(c1.getInfo())
