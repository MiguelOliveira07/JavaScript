/*
function* perguntas(){
   nome = yield'Qual seu nome?'
   idade = yield 'Qual sua idade?'
   return 'Seu nome é : ' + nome + ', sua idade é: ' + idade
}

const itc=perguntas()
console.log(itc.next().value)
console.log(itc.next('Miguel').value)
console.log(itc.next('17').value)

*/

function* contador(){
    let i=0
    while(true){
        yield i++
        if(i>10){
            break
        }
    }
}

const itc=contador()

for (c of itc){
    console.log(c)
}
