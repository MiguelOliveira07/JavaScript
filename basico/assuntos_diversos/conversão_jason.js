const pessoa ={
    nome:'Miguel',
    canal:'CBF cursos',
    curso:'Java Script',
    aulas:{
        aula01:'básico',
        aula02:'operadore',
        aula03:'obejeto_literal',
    }
}

const s_json=JSON.stringify(pessoa) //converte nosso objeto literal em uma STRING JASON
const o_json=JSON.parse(s_json) //converte nosso objeto literal em uma STRING JASON
console.log(pessoa.nome)
console.log(s_json)
console.log(o_json)