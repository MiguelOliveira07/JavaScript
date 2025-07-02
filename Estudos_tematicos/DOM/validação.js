const f_nome = document.querySelector("#nome");
const f_nota = document.querySelector("#nota");
const f_mens = document.querySelector("#mensagem");

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
  //   let mesg = null;
  //   if (!f_nota.reportValidity()) {
  //     mesg = f_nota.validationMessage;
  //   }
  //   f_mens.innerHTML = mesg;
  // Validação geral 

  let estado_validacao = f_nota.validity;

  if (estado_validacao.valueMissing) {
    f_nota.setCustomValidity("Este campo é obrigatório!");
    f_nota.reportValidity();
    // f_mens.innerHTML = f_nota.validationMessage;
} else if (estado_validacao.rangeOverflow) {
    f_nota.setCustomValidity("Essa nota é muito alta!");
    f_nota.reportValidity();
    // f_mens.innerHTML = f_nota.validationMessage;
} else if (estado_validacao.rangeUnderflow) {
    f_nota.setCustomValidity("Essa nota é muito baixa!");
    f_nota.reportValidity();
    // f_mens.innerHTML = f_nota.validationMessage;
  }

  evt.preventDefault(); // faz com  que o submit não seja executado
});

// Não está associado a nenhuma variavel pois não estou a chamando muitas vezes, se fosse usa-la mais vezes é bom estar como uma variável
