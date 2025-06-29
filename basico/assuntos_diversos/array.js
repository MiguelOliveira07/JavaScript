const caixa = document.querySelector("#caixa");

let cores = ["red", "blue", "green", "white", "black",['escuro','claro','medio']];
const cursos = ["CSS", "HMTL", "JavaScript", cores];

// cursos[0]=2
// cursos.push('C++')
// cursos.push('Python')
// cursos.pop()
// console.log(cursos[0]);

console.log(cursos[3][5][2]);

cursos.map((el) => {
  let p = document.createElement("p");
  p.innerHTML = el;
  caixa.appendChild(p);
});
