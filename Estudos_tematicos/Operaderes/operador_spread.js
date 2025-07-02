//spread é espalhar os arrays e esses obejtos, para retonar valores especificos

/*
let n1=[10,20,30]
let n2=[52,2,120,15]
let n3= [...n1,...n2]

console.log("n1: " + n1)
console.log("n3: " + n3)
console.log("o tipo do n3: " + typeof(n3))*/


/*
const jogador1={nome:'Bruno', energia:100, vidas: 3, fome:6}
const jogador2={nome:'Miguel', energia:100, vidas: 5, sede:60}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)*/


/*const soma = (v1,v2,v3)=>{
    return v1 + v2 + v3;
}

let valores = [1, 5, 9]

console.log(soma(...valores));
*/


const objs1=document.getElementsByTagName('div')
const objs2=[...document.getElementsByTagName('div')]
console.log(objs1);
console.log(objs2);

