const numero = document.querySelector(".numero");
const btn_promise = document.querySelector(".btn_promise");

numero.innerHTML = "Aguardando.";

btn_promise.addEventListener("click", () => {
  numero.innerHTML = "Processando...";
  //   console.log(promessa());
  promessa()
    .then((retorno) => {
      numero.innerHTML = retorno;
      numero.classList.remove("erro");
      numero.classList.add("ok");
    })
    .catch((retorno) => {
      numero.innerHTML = retorno;
      numero.classList.add("erro");
      numero.classList.remove("ok");
    });
});

const promessa = () => {
  //  return new Promise((res_ok, res_no_ok) => {
  const p = new Promise((res_ok, res_no_ok) => {
    let resultado = true;
    let tempo = 3000;

    setTimeout(() => {
      if (resultado) {
        res_ok("Deu tudo ok");
      } else {
        res_no_ok("Deu algum erro");
      }
    }, tempo);
  });
  return p;
};
