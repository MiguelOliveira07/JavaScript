class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.id = Symbol();
  }
}

let jogadores = [
  new Jogador("J1"),
  new Jogador("J2"),
  new Jogador("J3"),
  new Jogador("J4"),
  new Jogador("J5"),
  new Jogador("J2"),
  new Jogador("J1"),
  new Jogador("J5"),
];

let s1 = jogadores[2].id;

// jogadores = jogadores.filter((j) => {
//   return j.id != s1;
// });

jogadores = jogadores.filter((j) => {
  return j.nome != 'J1';
});

console.log(jogadores);
console.log(s1);
