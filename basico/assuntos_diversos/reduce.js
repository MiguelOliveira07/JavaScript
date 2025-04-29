const p_array = document.getElementById("array");
const btn_Verificar = document.getElementById("btnVerificar");
const p_Resultado = document.getElementById("Resultado");

const elementos_teste_array = [2, 10, 4, 8];
let ant = [];
let atu = [];
let dobro = [];

p_array.innerHTML = "[" + elementos_teste_array + "]";

btn_Verificar.addEventListener("click", (evt) => {
    dobro.push(elementos_teste_array[0]*2);
  p_Resultado.innerHTML = elementos_teste_array.reduce(
    (anterior, atual, posicao) => {
      ant.push(anterior);
      atu.push(atual);
      dobro.push(atual*2);
      return atual + anterior;
    }
  );
  p_Resultado.innerHTML +=
    "<br/> Valor anterior: " + ant + "<br/>Valor Atual: " + atu + "<br/>Valor Atual: " + dobro;
});
