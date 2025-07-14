const timer = document.getElementById("timer");
const btn_iniciar = document.getElementById("btn_iniciar");
const btn_parar = document.getElementById("btn_parar");
const btn_parcial = document.getElementById("btn_parcial");
const btn_zerar = document.getElementById("btn_zerar");
const box_parciais = document.getElementById("box_parciais");

let tpmini = 0;
let intervalo = null;      

btn_iniciar.addEventListener('click', () => {
  tpmini = Date.now();
  intervalo = setInterval(contador, 1000);
});

btn_parar.addEventListener('click', () => {
  clearInterval(intervalo);
});

btn_parcial.addEventListener('click', () => {
  box_parciais.textContent += timer.innerHTML + "\n";
});


btn_zerar.addEventListener('click', () => {
  clearInterval(intervalo);
  timer.innerHTML = "00:00:00";
  box_parciais.innerHTML = "";
  tpmini = 0;
});

const contador = () => {
  const tpmatual = Date.now();
  let seg = (tpmatual - tpmini) / 1000;
  timer.innerHTML = converter(seg);
};

const converter = (seg) => {
  const hora = Math.floor(seg / 3600);
  const resto = Math.floor(seg % 3600);
  const min = Math.floor(resto / 60);
  const segundos = Math.floor(resto % 60);

  return `${hora.toString().padStart(2, '0')}:` +
         `${min.toString().padStart(2, '0')}:` +
         `${segundos.toString().padStart(2, '0')}`;
};
