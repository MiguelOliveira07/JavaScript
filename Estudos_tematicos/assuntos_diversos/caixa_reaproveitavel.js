const config = {
  titulo: "Teste",
  texto: "Estudo de JAVASCRPIT",
  cor: "#45b",
};

const Caixa = new Caixa_reaproveitavel(config);

const btn = document.getElementById("message_box");

btn.addEventListener("click", () => {
  Caixa.mostrar();
});
