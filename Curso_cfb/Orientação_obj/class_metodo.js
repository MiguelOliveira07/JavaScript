const Pessoa={
    nome,
    idade,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        return this.nome=nome
    },
    setIdade: function(idade){
        return this.idade=idade
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