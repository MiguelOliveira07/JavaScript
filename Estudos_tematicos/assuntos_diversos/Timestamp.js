const timer = document.getElementById("timer");

const tpmini = Date.now();

const contador = () => {
  const tpmatual = Date.now();
  let cont = tpmatual - tpmini;
  let seg = (tpmatual - tpmini) / 1000;
  console.log(seg);
  timer.innerHTML = converter(seg);
};

const converter = (seg) => {
  const hora = Math.floor(seg/3600);
  const resto = Math.floor(seg%3600);
  const min = Math.floor(resto/60);
  const segundos = Math.floor(resto%60);

  let form = `${hora < 10 ? "0" + hora : hora}:${
    min < 10 ? "0" + min : min
  }:${segundos < 10 ? "0" + segundos : segundos}`;

  return form
};

setInterval(contador, 1000);
