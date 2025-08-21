const express = require("express") // busca meu modulo express no node_modules, que cria o express (ficará alocado na variavel)
const server = express() // A variável server está recebendo a dunção express, que vem do modulo express() (Cria uma cópia interira do express dentro desse sever)
// 127.0.0.1
// localhost
// 3000

// Query params = nome?Miguel&idade=18

// Route params =  /hello/:nome

server.get("/", (req, res) =>{
    res.send("hello")
})

server.get("/hello", (req, res) =>{
    const {nome, idade} = req.query
    return res.json(
        { 
            title: "Hello World",
            message: `Olá ${nome}, vai uma picanha?`,
            idade: idade
        }
    )
})

//Rota diferente da anterior
server.get("/hello/:nome", (req, res)=>{
    const nome = req.params.nome
    return res.json(
        { 
            title: "Hello World",
            message: `Olá ${nome}, vai uma picanha? Tá no precinho`,
        }
    )
})

server.listen(3000)
//3000
// 5000
// 8000
// 8080