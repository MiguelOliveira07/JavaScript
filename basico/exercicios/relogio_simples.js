const data_div = document.querySelector(".data");
const relogio_div = document.querySelector(".relogio");

const data = new Date();

let dia_m = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
let mes_m = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
const data_r = dia_m + "/" + mes_m + "/" + data.getFullYear();

data_div.innerHTML = data_r;
