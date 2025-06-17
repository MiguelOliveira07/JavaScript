const carro = document.querySelector("#carro");
const seta_esquerda = document.querySelector("#btn_left");
const seta_direita = document.querySelector("#btn_right");

const init = () => {
  //   carro.style.position = "absolute";
  //   carro.style.left = '0px';
  carro.style = "position:absolute;left:0px";
};

seta_direita.addEventListener("click", () => {
  let pos = parseInt(carro.style.left);
  pos += 50;
  carro.style = `position:absolute;left:${pos}px`;
  console.log(pos);
});
seta_esquerda.addEventListener("click", () => {
    carro.style.left = parseInt(carro.style.left) - 50 + "px";
    console.log(pos);
});

window.onload = init;
// window.addEventListener('load', init())
