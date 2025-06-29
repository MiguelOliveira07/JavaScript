const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso", "JavaCript");
mapa.set(10, "CSS");
mapa.set(1, 100);
mapa.set("curso_java", 34);

console.log(mapa);
mapa.delete(1)

let pes = 'curso';
let res = "";

if (mapa.has(pes)) {
  caixa.innerHTML = "A chave existe na coleção: " + mapa.get(pes);
} else {
  caixa.innerHTML = "A chave NÃO está na coleção";
}


mapa.forEach((el)=>{
    console.log(el)
})