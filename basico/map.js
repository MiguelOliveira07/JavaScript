const cursos = ['Html', 'CSS', 'JavaScript', 'php', 'React']
let c = cursos.map((elemento, indice) => {
  return '<div>'+elemento+'<div>'
})

console.log(c)