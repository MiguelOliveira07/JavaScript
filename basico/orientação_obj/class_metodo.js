const Pessoa={
    nome:'Miguel',
    getNome: function(){
        return this.nome
    },
    setNome: function(nome){
        return this.nome=nome
    }
}

const p1 = Pessoa
const p2 = Pessoa


p2.nome='Claudio'
p1['nome']='Teste de mudança'
Pessoa.setNome('Dener')

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p1.nome)