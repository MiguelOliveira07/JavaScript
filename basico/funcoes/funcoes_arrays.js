let valores = [1, 2,24];

const op = [
  (val) => {
    let soma = 0;
    for (v of val) {
      soma += v;
    }
    return soma;
  },
  (val) => {
    let mult = 4;
    for (v of val) {
      mult *= v;
    }
    return mult;
  },
  (val) => {
    let soma = 1;
    for (v of val) {
      console.log(v);
    }
  },
];

op[2](valores)
