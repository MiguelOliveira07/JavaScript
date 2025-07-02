const character = document.querySelector("#characterId");
const btn_go = document.querySelector("#btn_go");
const content = document.querySelector("#content");
const imagem = document.querySelector("#img");

const fechAPI = (value) => {
  const res = fetch(`https://rickandmortyapi.com/api/character/${value}`)
  .then((res) =>res.json()
    .then((data) => {
        console.log(data);
        return data
      })
  );
//   console.log(res); // É o resultado da API seco, sem filtro de resposta JSON
    return res; // Toda vez que eu chamar a função, vai retronar os dados do character
};

// fechAPI(106); //Teste

btn_go.addEventListener("click", async (evt) => {
    evt.preventDefault();
    const result = await fechAPI(character.value);
    // content.innerHTML = result.name; // Não funciona, pois o retorno da Api nao é um texto, é um conteudo extenso e não somente do tipo String
    content.innerHTML = `${JSON.stringify(result, undefined, 2)}`;
    imagem.src = `${result.image}`
});
