const carro = document.querySelector("#carro");
const seta_esquerda = document.querySelector("#btn_left");
const seta_direita = document.querySelector("#btn_right");
const parar = document.querySelector("#btn_stop");

const init = () => {
  //   carro.style.position = "absolute";
  //   carro.style.left = '0px';
  carro.style = "position:absolute;left:0px";
};

let anima = null;

const mover_carro = (dir) => {
  carro.style.left = parseInt(carro.style.left) + 5 * dir + "px";
};

parar.addEventListener("click", () => {
  clearInterval(anima);
});

seta_esquerda.addEventListener("click", () => {
  clearInterval(anima);
  anima = setInterval(mover_carro, 20, -1);
  //   console.log(pos);
});

seta_direita.addEventListener("click", () => {
  //   let pos = parseInt(carro.style.left);
  //   pos += 50;
  //   carro.style = `position:absolute;left:${pos}px`;
  //   console.log(pos);
  clearInterval(anima);
  anima = setInterval(mover_carro, 20, +1);
  //   console.log(pos);
});

window.onload = init;
// window.addEventListener('load', init())
