const teclas_num = [...document.querySelectorAll(".num")];
const teclas_op = [...document.querySelectorAll(".tecla_op")];
const resultado = document.querySelector(".rest");
const t_copy = document.querySelector("#t_copy");
const limpar = document.querySelector("#t_limpar");
const teste = document.getElementById("teste");
const aba = document.querySelector(".calc_aba");
const calc = document.querySelector(".calc");

const display = document.querySelector("#p_display");

console.log(teste);

let sinal = false;
let decimal = false;

teclas_num.forEach((el) => {
  el.addEventListener("click", (evt) => {
    sinal = false;
    if (evt.target.innerHTML == ",") {
      if (!decimal) {
        decimal = true;
        if (display.innerHTML == "0") {
          display.innerHTML = "0,";
        } else {
          display.innerHTML += evt.target.innerHTML;
        }
      }
    } else {
      if (display.innerHTML == "0") {
        display.innerHTML = "";
      }
      display.innerHTML += evt.target.innerHTML;
    }
  });
});
teclas_op.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (!sinal) {
      sinal = true;
      if (display.innerHTML == "0") {
        display.innerHTML = "";
      }
      if (evt.target.innerHTML == "X") {
        display.innerHTML += "*";
      } else {
        display.innerHTML += evt.target.innerHTML;
      }
    }
  });
});

limpar.addEventListener("click", (evt) => {
  display.innerHTML = "0";
  sinal = false;
  decimal = false;
});

t_copy.addEventListener("click", (evt) => {
  navigator.clipboard.writeText(display.innerHTML);
  // teste.select();
  // teste.setSelectionRange;(0,99999)
  // navigator.clipboard.writeText(teste.value);
});

aba.addEventListener("click", (evt) => {
  calc.classList.toggle("calc_exibir");
});
