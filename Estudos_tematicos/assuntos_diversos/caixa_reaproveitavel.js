import { Caixa_reaproveitavel } from "./cxmensg.js";

const config = {
  cor: "#45b",
  tipo: "sn", //tipo sim ou não (os, on)
  textos: ['SIM', 'NÃO'],
  comando_sn: () => { }
};

const f_sim = () => {
  console.log('Botão sim, precionado')
}

const btn_ = document.getElementById("message_box");
const btn_2 = document.getElementById("message_box2");
const btn_3 = document.getElementById("message_box3");

btn_.addEventListener("click", () => {
  config.tipo = "ok"
  Caixa_reaproveitavel.mostrar(config, "Este é o título personalizado", "Este é meu texto personalizado");
});

btn_2.addEventListener("click", () => {
  config.tipo = "sn"
  config.comando_sn = () => { f_sim() }
  config.textos = ["Gostei", "Não Gostei"]
  Caixa_reaproveitavel.mostrar(config, "Título personalidado 2", "Texto personalizado 2");
});

btn_3.addEventListener("click", () => {
  config.tipo = "ok"
  Caixa_reaproveitavel.mostrar(config, "Voce gostou do programa?", "Verificação para saber se você gostou do programa...");
});