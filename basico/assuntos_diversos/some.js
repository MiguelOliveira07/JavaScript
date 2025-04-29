const p_array = document.getElementById("array");
const p_pesquisa = document.getElementById("pesquisa");
const btn_Verificar = document.getElementById("btnVerificar");
const p_Resultado = document.getElementById("Resultado");

const elementos_teste_array = [12, 2, 2, 4, 5, 8, 19];

p_array.innerHTML = "[" + elementos_teste_array + "]";

btn_Verificar.addEventListener("click", (evt) => {
  const retorno = elementos_teste_array.some((e, i) => {
    if (e < 18) {
      p_Resultado.innerHTML = "Array não conforme, na posição: " + i;
    }
    return e >= 18;
  });
  if (retorno) {
    p_Resultado.innerHTML = "OK";
  }
});
