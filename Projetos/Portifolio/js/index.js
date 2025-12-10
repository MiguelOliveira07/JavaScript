document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#page_body').insertAdjacentHTML('beforebegin', `
        <header>
            <h1 class="menu-nome nome"><a href="../pages/index.html">Miguel Oliveira</a></h1>
            <ul id="menu">
                <li class="menus" id="home"><a href="/pages/index.html">Home</a></li>
                <li class="menus" id="serviços"><a href="../pages/serviços.html">Serviços</a></li>
                <li class="menus" id="educação"><a href="../pages/serviços.html">Formação</a></li>
            </ul>
        </header> 
    `)
})