// Pega os elementos HTML
const palco = document.querySelector('#palco')
const numero_objs = document.querySelector('#num_objetos')
const quant_obj_adc = document.querySelector('#quant_obj')
const btn_add = document.querySelector('#btn_add')
const btn_remove = document.querySelector('#remover_objs')

// Cria algumas variaveis para usar na classe
let largura_palco = palco.clientWidth
let altura_palco = palco.clientHeight
let bolas = []
let num_bolas = 0
// Classe que define o padrão de criação e comportamento das bolinhas
class Bola {
    constructor(arrayBolas, palco) {
        // Define tamanho aleatório entre 10 e 30 pixels
        this.tam = Math.floor(Math.random() * 20) + 10

        // Define cor RGB aleatória
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)

        // Define posição inicial aleatória dentro do palco
        this.px = Math.floor(Math.random() * (largura_palco - this.tam))
        this.py = Math.floor(Math.random() * (altura_palco - this.tam))

        // Define velocidade entre 0.5 e 3.5 (float)
        this.velx = Math.floor(Math.random() * 3) + 0.5
        this.vely = Math.floor(Math.random() * 3) + 0.5

        // Define direção inicial aleatória (1 ou -1)
        this.dirx = (Math.random() * 10) > 5 ? 1 : -1
        this.diry = (Math.random() * 10) > 5 ? 1 : -1

        // Referências ao array de bolas e ao palco
        this.arrayBolas = arrayBolas
        this.palco = palco

        // Cria um ID único para a bolinha
        this.id = Date.now() + '+_+' + Math.floor(Math.random() * 999999999999999)

        // Chama método que desenha a bolinha no DOM
        this.desenhar()

        // Inicia controle de movimento da bolinha a cada 10ms
        this.controle = setInterval(() => this.controlar(), 10)

        // Armazena referência ao elemento DOM da bolinha
        this.eu = document.getElementById(this.id)

        // Incrementa o número total de bolinhas e atualiza no HTML
        num_bolas++
        numero_objs.innerHTML = num_bolas
    }

    // Retorna a posição da bolinha dentro do array de bolas
    minhaPos = () => {
        return this.arrayBolas.indexOf(this)
    }

    // Remove a bolinha do DOM e do array
    removerBolinhas = () => {
        clearInterval(this.controle) // Para o movimento
        bolas = bolas.filter((b) => b.id !== this.id) // Remove do array
        this.eu.remove() // Remove do DOM
        num_bolas-- // Decrementa contador
        numero_objs.innerHTML = num_bolas // Atualiza HTML
    }

    // Desenha a bolinha no palco (DOM)
    desenhar = () => {
        const div = document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style', `left:${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }

    // Verifica se a bolinha atingiu a borda do palco e inverte a direção
    controle_bordas = () => {
        if (this.px + this.tam >= largura_palco) {
            this.dirx = -1
        } else if (this.px <= 0) {
            this.dirx = 1
        } else if (this.py + this.tam >= altura_palco) {
            this.diry = -1
        } else if (this.py <= 0) {
            this.diry = 1
        }
    }

    // Controla o movimento da bolinha e verifica se está fora do palco
    controlar = () => {
        this.controle_bordas() // Verifica e ajusta bordas
        this.px += this.dirx * this.velx // Move horizontalmente
        this.py += this.diry * this.vely // Move verticalmente

        // Atualiza a posição e aparência da bolinha no DOM
        this.eu.setAttribute('style', `left:${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b})`)

        // Se sair do palco completamente, remove a bolinha
        if ((this.px > largura_palco) || (this.py > altura_palco)) {
            this.removerBolinhas()
        }
    }
}

window.addEventListener("resize", (evt) => {
    // console.log('teste de redirecionar')
    largura_palco = palco.clientWidth
    altura_palco = palco.clientHeight

})

quant_obj_adc.addEventListener('click', () => {
    quant_obj_adc.value = ''
})

btn_add.addEventListener('click', (evt) => {
    const qtde = parseInt(quant_obj_adc.value)
    for (let i = 0; i < qtde; i++) {
        // instanciar novas bolinhas
        bolas.push(new Bola(bolas, palco))

    }
})

btn_remove.addEventListener('click', (evt) => {
    bolas.map((b) => {
        // remover as bolinhas
        b.removerBolinhas()
    })
})