const latitude = document.querySelector("#lat");
const longitude = document.querySelector("#log");

// console.log(navigator.geolocation.getCurrentPosition())
// Erro, pois não passou nenhuma função, ele quer metodos caso o resultado seja positivo ou não

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    mostrar_localizacao,
    erro_localizacao
  );
} else {
  console.log("Geolocalização não ativada!");
}

function mostrar_localizacao(posicao) {
  console.log(posicao);
  latitude.innerHTML = `A Latitude é: ${posicao.coords.latitude}`
  longitude.innerHTML = `A longitude é: ${posicao.coords.longitude}`
}

function erro_localizacao(err) {
  console.log("Erro ao obter a localização!");
  console.log("Código do erro:", err.code);
  console.log("Mensagem:", err.message);
}
