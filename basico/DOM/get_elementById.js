const dc1=document.getElementById('c1')
const dc2=document.getElementById('c2')
const arrrayElementos = [dc1, dc2]
console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)

console.log(arrrayElementos)
console.log(arrrayElementos)

// dc1.innerHTML='Teste de modificação de ID'


// for (d of arrrayElementos)
//     d.innerHTML='Mudando todos os elementos do arraay'

arrrayElementos.map((e)=>{
    console.log(e.innerHTML)
})