const container = document.querySelector("#timer");
const data_div = document.querySelector(".data");
const relogio_div = document.querySelector(".relogio");
const div_alarme_input = document.querySelector("#hora_alarme");
const alarme_mostrar = document.querySelector("#hora_do_alarme");
const btn_ativar = document.querySelector("#ativar_alarme");
const btn_parar = document.querySelector("#parar_alarme");

const som_alrme = new Audio("Mighty to Save - Hillsong Worship_160k.mp3");
som_alrme.loop = 1;

let ts_atual = null;
let ts_alarme = null;
let alarme_ativo = false;
let alarme_tocando = false;
div_alarme_input.addEventListener("click", () => {
  div_alarme_input.value = "";
});

btn_ativar.addEventListener("click", () => {
  ts_atual = Date.now();
  ts_alarme = ts_atual + div_alarme_input.value * 1000;
  alarme_ativo = true;
  alarme_tocando = true;

  const dt_data = new Date(ts_alarme);

  const hora =
    dt_data.getHours() < 10 ? "0" + dt_data.getHours() : dt_data.getHours();
  const min =
    dt_data.getMinutes() < 10
      ? "0" + dt_data.getMinutes()
      : dt_data.getMinutes();
  const seg =
    dt_data.getSeconds() < 10
      ? "0" + dt_data.getSeconds()
      : dt_data.getSeconds();

  alarme_mostrar.innerHTML = "Hora do alarme:" + hora + ":" + min + ":" + seg;
});

btn_parar.addEventListener("click", () => {
  alarme_ativo = false;
  alarme_tocando = false;

  alarme_mostrar.innerHTML = "Hora do Alarme:";
});

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
