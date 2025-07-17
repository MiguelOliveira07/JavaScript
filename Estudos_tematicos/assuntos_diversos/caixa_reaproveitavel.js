import { Caixa_reaproveitavel } from "./cxmensg.js";

Caixa_reaproveitavel.config({ cor: "#45b" });

const btn = document.getElementById("message_box");

btn.addEventListener("click", () => {
  Caixa_reaproveitavel.mostrar("Este é o título personalizado", "Este é meu texto personalizado");
});