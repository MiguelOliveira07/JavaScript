const olhos = [...document.querySelectorAll('.olho')]
// console.log(olhos)

let pos_x = 0
let pos_y = 0

window.addEventListener('mousemove', (evento) => {
    pos_x = evento.clientX
    pos_y = evento.clientY

    // console.log(pos_x + ',' + pos_y)

    const rotacao = Math.atan2(pos_y, pos_x) * 180 / Math.PI

    olhos.forEach((o) => {
        o.style.transform = 'rotate(' + rotacao + 'deg)'
    })
})
