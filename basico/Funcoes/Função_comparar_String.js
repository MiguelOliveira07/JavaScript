const nome = new String("Miguel Oliveira")
const nome2 = new String("Miguel Oliveira")
const canal_curso = new String("CFB Cursos")

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charAt(1))

console.log(nome.charCodeAt(0))

console.log(nome.concat(canal_curso))

console.log(nome.indexOf('i'))

console.log(nome.lastIndexOf('i'))

console.log(nome.replace('i', 'I'))

console.log(nome.slice(0, 11))

let arr_nome = nome.split(' ')
console.log(arr_nome)

// console.log(nome==nome2) // Não vai comparar as Strings da maneira correta
console.log(nome.localeCompare(nome2)) // Faz a comparação do jeito certo

// let n1 = 'nome1'
// let n2 = 'nome1'
// console.log(n1==n2)
// Vai dar True