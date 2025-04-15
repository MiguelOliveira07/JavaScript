/*
let n=10
let fat=1

while(n>=1){
    fat*= n
    n--
}
console.log(fat)
*/

/*
let n=10

do{
    console.log('CBF Cursos')
    n++
}while( n < 10)
console.log('CBF cursos')
n++


console.log('fim do programa')
*/

let n=0
let max=1000000
let pares=0

for(i=n;i<max;i++){
    if (i%2!=0){
        console.log(i)
    }
     pares++
}

console.log('Fim do programa')
console.log('QUantidade de números pares: ' + pares)