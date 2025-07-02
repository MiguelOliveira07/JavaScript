const data_div = document.querySelector(".data");
const relogio_div = document.querySelector(".relogio");

const data = new Date();

let dia_m = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
let mes_m = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
const data_r = dia_m + "/" + mes_m + "/" + data.getFullYear();

data_div.innerHTML = data_r;

const relogio = () => {
  const data = new Date();
  let hora = data.getHours();
  hora = hora < 10 ? "0" + hora : hora;
  let min = data.getMinutes();
  min = min < 10 ? "0" + min : min;
  let segundos = data.getSeconds();
  segundos = segundos < 10 ? "0" + segundos : segundos;

  //   console.log(hora);
  //   console.log(min);
  //   console.log(segundos);

  hora_completa = hora + ":" + min + ":" + segundos;
  relogio_div.innerHTML = hora_completa;
};

const intervalo = setInterval(relogio, 1000);
// relogio();
