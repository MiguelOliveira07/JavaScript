document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#head_js').insertAdjacentHTML('beforebegin', `
        <header>
            <h1>Miguel Oliveira</h1>
            <ul id="menu">
                <li class="menus" id="home">Home</li>
                <li class="menus" id="educação">Educação</li>
                <li class="menus" id="serviços">Serviços</li>
                <li class="menus" id="contato">Contato</li>
            </ul>
        </header> 
    `)
})