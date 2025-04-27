const p_array = document.getElementById("array");
const p_pesquisa = document.getElementById("pesquisa");
const btn_pesquisar = document.getElementById("btnPesquisar");
const p_Resultado = document.getElementById("Resultado");

const elementos_teste_array = [10, 20, 432, 234, 45, 78];

p_array.innerHTML = "[" + elementos_teste_array + "]";

btn_pesquisar.addEventListener("click", (evt) => {

    p_Resultado.innerHTML = "Valor não encontrado";
    const valor = Number(p_pesquisa.value);
    const ret = elementos_teste_array.find((e, i) => {
        if (e == valor) {
        p_Resultado.innerHTML = "Pesquisa (" + e + ") encontrado na posição: " + i;
      return true;
    }
  });
});
