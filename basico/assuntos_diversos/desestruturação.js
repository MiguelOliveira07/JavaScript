let a, b, c, d;
let i, j, k, l;
let numeros = [10, 20, 30, 40];
let m = 7;
let n = 23;
let numbers = () => {
    return [12, 13, 14, 15];
};
let o, p, q, r, s;

// [a, b, c, d] = [10, 20, 30, 40];

({ a, b, c, d } = { a: "verde", b: "azul", c: "vermelho", d: "preto" });
[i, j, k, l] = [10];
let [e, f = 0, g = 0, h] = numeros;
[m, n] = [m, n];
[o, p, q, r, s] = numbers();

console.log(a, b, c, d);
console.log(e, f, g, h);
console.log(i, j, k, l);
console.log(m, n);
console.log(o,p,q,r,s);
