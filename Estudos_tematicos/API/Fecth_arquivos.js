const texto =document.getElementById('texto');

const endpoint = 'Fecth_arquivos.txt'

fetch(endpoint)
.then(res=>res.text())
.then(res=>{
    res=JSON.parse(res);
    // console.log(res);
    console.log(res.canal);
    console.log(res.curso);
})

