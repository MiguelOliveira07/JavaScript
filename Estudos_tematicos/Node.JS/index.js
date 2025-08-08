const express = require("express") // busca meu modulo express no node_modules, que cria o express (ficará alocado na variavel)
const server = express() // A variável server está recebendo a dunção express, que vem do modulo express() (Cria uma cópia interira do express dentro desse sever)
// 127.0.0.1
// localhost
// 3000

server.get("/hello", (req, res) =>{
    return res.json(
        { 
            title: "Hello World",
            message: "Olá comapanheiro, vai uma picanha?"
        }
    )
})

server.listen(3000)
//3000
// 5000
// 8000
// 8080