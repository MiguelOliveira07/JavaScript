const endpoint = "produtos.json";

const configdgv = {
  endpoint: "produtos.json",
  idDestino: "dgv_Dados",
};
const dgv = (configdgv) => {
  const dgv_Dados = document.getElementById(configdgv.idDestino);
  dgv_Dados.innerHTML = "";
  fetch(endpoint)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((el) => {
        const dgv_Linha = document.createElement("div");
        dgv_Linha.setAttribute("class", "dgv_Linha");

        const c1 = document.createElement("div");
        c1.setAttribute("class", "coluna c1");
        c1.innerHTML = el.id;
        dgv_Linha.appendChild(c1);

        const c2 = document.createElement("div");
        c2.setAttribute("class", "coluna c2");
        c2.innerHTML = el.produto;
        dgv_Linha.appendChild(c2);

        const c3 = document.createElement("div");
        c3.setAttribute("class", "coluna c3");
        c3.innerHTML = el.marca;
        dgv_Linha.appendChild(c3);

        const c4 = document.createElement("div");
        c4.setAttribute("class", "coluna c4");
        c4.innerHTML = el.modelo;
        dgv_Linha.appendChild(c4);

        const c5 = document.createElement("div");
        c5.setAttribute("class", "coluna c5");
        dgv_Linha.appendChild(c5);

        const dgv_delete = document.createElement("img");
        dgv_delete.setAttribute("class", "dgv_icon");
        dgv_delete.setAttribute("src", "lixeira.svg");
        c5.appendChild(dgv_delete);

        const dgv_editar = document.createElement("img");
        dgv_editar.setAttribute("class", "dgv_icon");
        dgv_editar.setAttribute("src", "editar.svg");
        c5.appendChild(dgv_editar);

        const dgv_exibir = document.createElement("img");
        dgv_exibir.setAttribute("class", "dgv_icon");
        dgv_exibir.setAttribute("src", "exibir.svg");
        c5.appendChild(dgv_exibir);

        dgv_Dados.appendChild(dgv_Linha)
      });
    });
};

dgv(configdgv);
