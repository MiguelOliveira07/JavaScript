const cursos = ['JavaScript', 'Html', 'CSS', 'Python', 'C++', 'Java']
const cores = ['azul', 'amarelo', 'vermelho', 'verde']

// const getTodosCursos =()=>{
//     return cursos
// }

export default function getTodosCursos (){
    return cursos
}

function getCurso(curso){
    return cursos[curso]
}

export{cursos, getCurso}

// export default getTodosCursos