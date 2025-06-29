const valores = [1, 2, 3, 4, 5];
const texto = 'Miguel'

const it_valor = texto[Symbol.iterator](); // certo

console.log(valores); // { value: 1, done: false }
console.log(it_valor.next()); // { value: 1, done: false }
console.log(it_valor.next()); 
console.log(it_valor.next()); 
console.log(it_valor.next()); 
console.log(it_valor.next()); 
console.log(it_valor.next()); 
console.log(it_valor.next()); 
