const palco = document.querySelector('#palco')
const numero_objs = document.querySelector('#num_objetos')
const quant_obj_adc = document.querySelector('#quant_obj')
const btn_add = document.querySelector('#btn_add')
const btn_remove = document.querySelector('#remover_objs')

let largura_palco = palco.clientWidth
let altura_palco = palco.clientHeight
let bolas = []
let num_bolas = 0

class Bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 20) + 10
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        this.px = Math.floor(Math.random() * (largura_palco - this.tam))
        this.py = Math.floor(Math.random() * (altura_palco - this.tam))
        this.velx = Math.floor(Math.random() * 3) + 0.5
        this.vely = Math.floor(Math.random() * 3) + 0.5
        this.dirx = (Math.random() * 10) > 5 ? 1 : -1
        this.diry = (Math.random() * 10) > 5 ? 1 : -1
        this.arrayBolas = arrayBolas
        this.palco = palco
        this.id = Date.now() + '+_+' + Math.floor(Math.random() * 999999999999999)
        this.desenhar()
        this.controle = setInterval(() => this.controlar(), 10)
        this.eu = document.getElementById(this.id)
        num_bolas++
        numero_objs.innerHTML = num_bolas
    }
    minhaPos = () => {
        return this.arrayBolas.indexOf(this)
    }

    removerBolinhas = () => {
        clearInterval(this.controle)
        bolas = bolas.filter((b) => b.id !== this.id)
        this.eu.remove()
        num_bolas--
        numero_objs.innerHTML = num_bolas
    }

    desenhar = () => {
        const div = document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style', `left:${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }

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

    controlar = () => {
        this.controle_bordas()
        this.px += this.dirx * this.velx
        this.py += this.diry * this.vely
        this.eu.setAttribute('style', `left:${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b})`)
        if ((this.px > largura_palco) || (this.py > altura_palco)) {
            this.removerBolinhas()
        }
    }
}

window.addEventListener("resize", (evt) => {
    // console.log('teste de redirecionar')
    let largura_palco = palco.clientWidth
    let altura_palco = palco.clientHeight

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