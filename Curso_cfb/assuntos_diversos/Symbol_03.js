const nome = Symbol('MIGUEL')

const jogador ={
    [nome]:'Miguel',
    idade:18,
    posicao:'ala'
}

for(p in jogador){
    console.log(p)
}

// console.log(nome.description)
console.log(jogador[nome])