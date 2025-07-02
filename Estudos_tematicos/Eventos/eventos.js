// const _c1 = document.getElementById('c1')
// const _c1 = document.querySelector('#c1')
const _todos_cursos = [...document.querySelectorAll(".cursos")];

// const msg=()=>{
//     alert('Clicou')
// }

_todos_cursos.map((el) => {
  el.addEventListener("click", (evt,i) => {
    const event = evt.target
    el.classList.add("destaque");
    console.log('O elemento de id: ' + el.innerHTML + ' foi clicado.')
  });
});

// _c1.addEventListener('click', (evt)=>{
//     // alert('Função anonima')
//     // msg()
//     const evento = evt.target
//     evento.classList.add('destaque')
// })
