const pos_x = document.querySelector("#pos_x");
const pos_y = document.querySelector("#pos_y");
const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const altura = document.querySelector("#altura");
const largura = document.querySelector("#largura");

// console.log(q1.getBoundingClientRect()) //informações da tela

const info = (el) => {
  let DOMrect_q = el.getBoundingClientRect()
  pos_x.innerHTML = `Pos_x: ${Math.round(DOMrect_q.x)}px`
  pos_y.innerHTML = `Pos_y: ${Math.round(DOMrect_q.y)}px`
  largura.innerHTML = `largura: ${Math.round(DOMrect_q.width)}px`
  altura.innerHTML = `altura: ${Math.round(DOMrect_q.height)}px`
};
q1.addEventListener("click", (evt) => {
  info(q1);
});
q2.addEventListener("click", (evt) => {
  info(evt.target);
});
