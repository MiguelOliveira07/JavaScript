const objetos = document.getElementById("objetos")

const computador={
    cpu:'i9',
    ram:'64GB',
    hd:'2T',
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

const computadores=[
    {     
        cpu:"i9",
        ram:"64GB",
        hd:"2T"
    },
    {     
        cpu:"i8",
        ram:"32GB",
        hd:"2T"
    },
    {     
        cpu:"i7",
        ram:"46GB",
        hd:"2T"
    },
    {     
        cpu:"i5",
        ram:"46GB",
        hd:"1T"
    },
]

computadores.forEach((c)=>{
    // console.log(c)
    const div = document.createElement("div")
    div.setAttribute('class', 'card')
    div.innerHTML=c.cpu+'<br/>'+c.ram+'<br/>'+c.hd
    objetos.appendChild(div)
})

// computador.info()
// console.log(computadores)
// objetos.innerHTML=computadores