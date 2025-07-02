const carro = document.querySelector("#carro");
const seta_esquerda = document.querySelector("#btn_left");
const seta_direita = document.querySelector("#btn_right");
const parar = document.querySelector("#btn_stop");

const init = () => {
  //   carro.style.position = "absolute";
  //   carro.style.left = '0px';
  carro.style.position = "absolute";
  carro.style.left = "0px";
  carro.style.width = "100px";

  tam_max = window.innerWidth - parseInt(carro.style.width);
};

let anima = null;
let tam_max = null;

const mover_carro = (dir) => {
  const pos = parseInt(carro.style.left); // posição atual do carro

  if (dir > 0 && pos < tam_max) {
    carro.style.left = (pos + 10) + "px";
    anima = setTimeout(() => mover_carro(dir), 20);
  } else if (dir < 0 && pos > 0) {
    carro.style.left = (pos - 10) + "px";
    anima = setTimeout(() => mover_carro(dir), 20);
  } else{
    clearTimeout(anima)
    console.log('limite atingido.')
    console.log(tam_max)
  }
};


parar.addEventListener("click", () => {
  clearTimeout(anima);
  // clearInterval(anima);
});

seta_esquerda.addEventListener("click", () => {
  clearTimeout(anima);
  mover_carro(-1);
  // clearInterval(anima);
  // anima = setInterval(mover_carro, 20, -1);
  //   console.log(pos);
});

seta_direita.addEventListener("click", () => {
  clearTimeout(anima);
  mover_carro(1);
  //   let pos = parseInt(carro.style.left);
  //   pos += 50;
  //   carro.style = `position:absolute;left:${pos}px`;
  //   console.log(pos);
  // clearInterval(anima);
  // anima = setInterval(mover_carro, 20, +1);
  //   console.log(pos);
});

// window.onload = init;
window.addEventListener("load", init);
window.addEventListener("resize", () => {
  tam_max = window.innerWidth - parseInt(carro.style.width);
});
