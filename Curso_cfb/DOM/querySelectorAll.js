// const divCursos = [...document.getElementsByTagName('div')]
// const todosCursos = [...document.getElementsByClassName('cursos')]
// const todosc1 = [...document.getElementsByClassName('c2')]
// const todosc2 = [...document.getElementsByClassName('c3')]
// const todosID = document.getElementById('c1')


const query_divs = [...document.querySelectorAll('div[class]')]
const query_p_in_div= [...document.querySelectorAll('div>p')]
const query_cursos = [...document.querySelectorAll('.cursos')]
const query_c1 = [...document.querySelectorAll('.c1')]
const query_c2 = [...document.querySelectorAll('.c2')]

console.log(query_divs)
console.log(query_p_in_div)
console.log(query_cursos)
console.log(query_c1)
console.log(query_c2)


// console.log(divCursos)
// console.log(todosCursos)
// console.log(todosc1)
// console.log(todosc2)
// console.log(todosID)

// todosc1.map((el)=>{
//     el.classList.add('destaque')
// })