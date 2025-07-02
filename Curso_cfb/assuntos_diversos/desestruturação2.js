let numeros = [];

for (let i = 10; i < 100; i += 10) {
  // console.log(i)
  numeros.push(i);
}
let obj = { nome: "miguel", idade: 18 };

let [a, b, c, d, ...e] = numeros;
console.log(a, b, c, d, e);
let { nome, idade } = obj;
console.log(nome, idade);



const cores = () => {
  return ['verde', 'roxo', 'green', 'blue', 'red']
}

let [c1, c2, , c3] = cores();
console.log(c1, c2, c3);



let text = 'Curso de JavaScript'
console.log(text.split(' '))
let [...t] = text.split(' ')
console.log(t)