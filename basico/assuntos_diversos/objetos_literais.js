const objetos = document.getElementById("objetos");

const computador = {
  cpu: "i9",
  ram: "64GB",
  hd: "2T",
  info: function () {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`HD: ${this.hd}`);
  },
};

const computadores = [
  {
    cpu: "i9",
    ram: "64GB",
    hd: "2T",
  },
  {
    cpu: "i8",
    ram: "32GB",
    hd: "2T",
  },
  {
    cpu: "i7",
    ram: "46GB",
    hd: "2T",
  },
  {
    cpu: "i5",
    ram: "46GB",
    hd: "1T",
  },
];

computador["monitor"] = "22pol";
computador.placaVideo = "rtx";


const c1 = Object.assign({}, computador);
const c2 = Object.create(computador)

c1.ram='64GB'
c1.cpu='128GB'
c1.hd='3T'

c1.info();
c2.info()

delete(computador.hd)

const o1 = {obj1 : '1'}
const o2 = {obj2 : '2'}
const o3 = {obj3 : '3'}
const o4 = Object.assign(o1,o2,o3)

console.log(o4)
console.log(computador)
console.log(computador.hd)

computadores.forEach((c) => {
  // console.log(c)
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd;
  objetos.appendChild(div);
});

// computador.info()
// console.log(computadores)
// objetos.innerHTML=computadores
