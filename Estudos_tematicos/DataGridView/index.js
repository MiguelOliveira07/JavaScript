const endpoint = "produtos.json";

const configdgv = {
    endpoint:"produtos.json",

}
const dgv = (configdgv) => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
