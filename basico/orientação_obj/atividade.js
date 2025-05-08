const Pessoa = {
    nome: null,
    idade: 0,

    getNome: function() {
        return this.nome;
    },

    getIdade: function() {
        return this.idade;
    },

    setNome: function(nome) {
        this.nome = nome;
    },

    setIdade: function(idade) {
        this.idade = idade;
    }
};

// Array de pessoas
let pessoas = [];

// Seletores
const btn_adicionar = document.querySelector('#btn_adc');
const res = document.querySelector('.rest');
const Nome = document.querySelector('#nome');
const Idade = document.querySelector('#idade');

// Função para criar uma nova pessoa
function criarPessoa(nome, idade) {
    const novaPessoa = Object.create(Pessoa);
    novaPessoa.setNome(nome);
    novaPessoa.setIdade(Number(idade));
    return novaPessoa;
}

// Atualiza a tela com as pessoas
function addPessoas() {
    res.innerHTML = ''; // Limpa antes de adicionar
    pessoas.forEach((p) => {
        const div = document.createElement("div");
        div.setAttribute('class', 'pessoa');
        div.innerHTML = `Nome: ${p.getNome()}, Idade: ${p.getIdade()}`;
        res.appendChild(div);
    });
}

// Evento de clique
btn_adicionar.addEventListener('click', () => {
    const nome = Nome.value.trim();
    const idade = Idade.value.trim();

    if (nome && idade) {
        const p = criarPessoa(nome, idade);
        pessoas.push(p);
        Nome.value = '';
        Idade.value = '';
        Nome.focus();
        addPessoas(); // Atualiza a visualização
    }
});