const todosCursos = [...document.getElementsByClassName('cursos')]
const todosc1 = [...document.getElementsByClassName('c2')]
const todosc2 = [...document.getElementsByClassName('c3')]

console.log(todosCursos)
console.log(todosc1)
console.log(todosc2)

todosc1.map((el)=>{
    el.classList.add('destaque')
})