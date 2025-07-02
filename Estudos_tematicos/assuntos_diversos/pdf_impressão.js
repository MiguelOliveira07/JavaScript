const btn_imprimir = document.querySelector('#btn_imprimir')

const tabela = document.querySelector('#tabela')
console.log(tabela.innerHTML)

btn_imprimir.addEventListener('click', (evt) => {
    const tabela = document.querySelector('#tabela').innerHTML

    const win = window.open('', '', 'height=700; width=700')

    const estilo = `
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        td, th {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }
    </style>
`;


    win.document.write('<html>')
    win.document.write('<head>')
    win.document.write('<title> teste de impresão</title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(tabela)
    win.document.write('</body>')
    win.document.write('</html>')

    win.print()
    win.close()
})
