class Caixa_reaproveitavel {
  titulo = null;
  texto = null;
  cor = null;
  destino = null;
  div = null;
  constructor(config) {
    this.titulo = config.titulo;
    this.texto = config.texto;
    this.cor = config.cor;
    this.destino = document.body;
    this.div = config.div;
  }
  mostrar = () => {
    this.div = document.createElement("div")
    const estilo =
      "display:flex;" +
      "justify-content: center;" +
      "align-items: center;" +
      "position: absolute;" +
      "top: 0px;" +
      "left: 0px;" +
      "width: 100%;" +
      "height: 100vh;" +
      "background-color: rgba(0,0,0,0.7);"
    this.div.setAttribute("id", "divmensg")
    this.div.setAttribute("style", estilo)
    this.destino.prepend(this.div)

    const estilo_area =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "flex: column ;" +
      "width: 300px;"
    const area_message = document.createElement('pre')
    area_message.setAttribute('style', estilo_area)
    this.div.appendChild(area_message)

    const estilo_titulo =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "width: 50%;" +
      "background-color:" + this.cor + ";" +
      "color: #fff;" +
      "padding: 5px;" +
      "border-radius: 5px 5px 0px 0px;"

    const area_titulo = document.createElement('pre')
    area_titulo.setAttribute('style', estilo_titulo)
    area_titulo.innerHTML = this.titulo
    area_message.appendChild(area_titulo)
  }
  ocultar = () => { };
}
