const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener('click', (evt)=>{
    // window.location.reload()
    // window.location.assign('https://chatgpt.com/')
    // window.history.forward()
    console.log(window.history.length)
})

// Propriedade	
// location.href	    URL completa da página atual (pode ser lida ou alterada para redirecionar).
// location.protocol	Protocolo usado (http:, https:, etc).
// location.host	    Hostname e porta (exemplo.com:3000).
// location.hostname	Apenas o hostname (exemplo.com).
// location.port	    Porta usada (3000).
// location.pathname	Caminho da URL (/pagina/teste).
// location.search	    Query string da URL (?id=1&nome=joao).
// location.hash	    Fragmento/âncora da URL (#secao1).
// location.origin	    Origem da URL (https://exemplo.com).

// Métodos:
// Método	Descrição
// location.assign(url)	    Redireciona para a nova URL (mantém no histórico do navegador).
// location.replace(url)	Redireciona para nova URL (substitui a entrada atual no histórico).
// location.reload(force)	Recarrega a página. Se force for true, força reload do servidor.

// window.history – Controle de histórico (navegação por URL)
// Métodos:
// Método	Descrição
// history.back()	    Volta uma página no histórico (equivale ao botão "voltar").
// history.forward()	Avança uma página no histórico (equivale ao botão "avançar").
// history.go(n)	    Navega para um ponto específico: -1 para voltar uma, 1 para avançar uma.
// history.pushState(state, title, url)	    Adiciona uma nova entrada no histórico (sem recarregar).
// history.replaceState(state, title, url)	Substitui a entrada atual do histórico.

// window.open(url, target, specs, replace);
// Parâmetro	
// url	    URL a ser aberta.
// target	Onde abrir (_blank, _self, _parent, _top).
// specs	String com configurações da nova janela (largura, altura, scroll, etc.).
// replace	Se true, substitui entrada no histórico.

// Outros métodos úteis
// Método	
// window.location.toString()	Retorna a URL atual como string (equivalente a location.href).
// new URL(url)	                Cria um objeto URL com métodos úteis de parsing e manipulação.