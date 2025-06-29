// const filterMaior=(valor, posição, array)=>{}
// const filterMaior = (valor) => {
//     if (valor > 18) return valor;
//   };

const idades = [15, 17, 20, 43, 49];
const maior_18 = idades.filter((valor) => {
  if (valor >= 18) return valor;
});
const menor_18 = idades.filter((valor) => {
  if (valor < 18) return valor;
});

console.log(idades);
console.log(maior_18);
console.log(menor_18);
