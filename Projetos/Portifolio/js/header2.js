document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#page_body').insertAdjacentHTML('beforebegin', `
        <header>
            <h1 class="menu-nome nome"><a href="../pages/index.html">Miguel Oliveira</a></h1>
            <ul id="menu">
                <li class="menus" id="home"><a href="./index.html">Home</a></li>
                <li class="menus" id="servicos"><a href="./servicos.html">Serviços</a></li>
                <li class="menus" id="educacao"><a href="./educacao.html">Formação</a></li>
            </ul>
        </header> 
    `)
})