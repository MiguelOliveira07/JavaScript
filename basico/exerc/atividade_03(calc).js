const resultado = document.querySelector("#resultado_");
const btn_soma = document.querySelector("#soma");
const btn_sub = document.querySelector("#subtracao");
const btn_div = document.querySelector("#divisao");
const btn_mult = document.querySelector("#multiplicacao");

const ope = [
  () => {
    const val = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value=Number(val[0])+Number(val[1])
  },
  () => {
    const val = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value=Number(val[0])-Number(val[1])
  },
  () => {
    const val = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value=Number(val[0])/Number(val[1])
  },
  () => {
    const val = [
      document.querySelector("#num1").value,
      document.querySelector("#num2").value,
    ];
    resultado.value=Number(val[0])*Number(val[1])
  },

];


btn_soma.addEventListener('click', ()=>{ope[0]()})
btn_sub.addEventListener('click', ()=>{ope[1]()})
btn_div.addEventListener('click', ()=>{ope[2]()})
btn_mult.addEventListener('click', ()=>{ope[3]()})

