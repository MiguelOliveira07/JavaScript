class Caixa_reaproveitavel {
  static cor = '#888';
  static destino = null;
  static div = null;
  static tipo = null;
  static comando_sn = null;
  static textos = null;


  static mostrar = (config, titulo, texto) => {
    this.cor = config.cor
    this.tipo = config.tipo
    this.comando_sn = () => {config.comando_sn()}
    this.textos = config.textos
    this.destino = document.body
    this.titulo = titulo;
    this.texto = texto;
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
      "flex-direction: column ;" +
      "width: 300px;"
    const area_message = document.createElement('section')
    area_message.setAttribute('style', estilo_area)
    this.div.appendChild(area_message)

    const estilo_titulo =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color:" + this.cor + ";" +
      "color: #fff;" +
      "padding: 5px;" +
      "margin: 0px;" +
      "border-radius: 5px 5px 0px 0px;"

    const area_titulo = document.createElement('header')
    area_titulo.setAttribute('style', estilo_titulo)
    area_titulo.innerHTML = this.titulo
    area_message.appendChild(area_titulo)

    const estilo_corpo =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color: #eee;" +
      "color: #000;" +
      "margin: 0px;" +
      "padding: 45px 5px;"

    const area_corpo = document.createElement('p')
    area_corpo.setAttribute('style', estilo_corpo)
    area_corpo.innerHTML = this.texto
    area_message.appendChild(area_corpo)

    const estilo_footer =
      "display: flex;" +
      "justify-content: center;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color: #8FC1B5;" +
      "color: #000;" +
      "margin: 0px;" +
      "padding: 5px 5px;" +
      "border-radius: 0px 0px 5px 5px;"

    const area_footer = document.createElement('footer')
    area_footer.setAttribute('style', estilo_footer)
    area_message.appendChild(area_footer)

    const estilo_btn =
      "text-trasnform: uppercase;" +
      "cursor: pointer;" +
      "background-color:" + this.cor + ";" +
      "color: #fff;" +
      "text-aling: center;" +
      "padding: 10px 50px;" +
      "border:none;" +
      "margin-left: 10px;" +
      "border-radius: 5px;"
    if (this.tipo == "ok") {
      const btn_ok = document.createElement('button')
      btn_ok.setAttribute('style', estilo_btn)
      btn_ok.innerHTML = 'OK'
      btn_ok.addEventListener('click', (evt) => {
        this.ocultar()
      })
      area_footer.appendChild(btn_ok)
    } else if (this.tipo == "sn") {
      const btn_os = document.createElement('button')
      btn_os.setAttribute('style', estilo_btn)
      btn_os.innerHTML = this.textos[0]
      btn_os.addEventListener('click', (evt) => {
        this.comando_sn()
        this.ocultar()
      })
      area_footer.appendChild(btn_os)

      const btn_on = document.createElement('button')
      btn_on.setAttribute('style', estilo_btn)
      btn_on.innerHTML = this.textos[1]
      btn_on.addEventListener('click', (evt) => {
        this.ocultar()
      })
      area_footer.appendChild(btn_on)
    }

  }
  static ocultar = () => {
    this.div.remove()
  };
}

export { Caixa_reaproveitavel }
