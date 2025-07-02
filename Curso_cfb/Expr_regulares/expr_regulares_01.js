let nome = new String('Miguel Oliveira')

console.log(nome)

console.log(nome.search(/oliveira/i))

console.log(nome.match(/o/i))
console.log(nome.match(/i/ig))

console.log(nome.replace(/o/i, 'Teste'))
console.log(nome.replace(/i/ig, 'Trocando'))