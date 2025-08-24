// busca meu modulo express no node_modules, que cria o express (ficará alocado na variavel)
const express = require("express") 
// A variável server está recebendo a dunção express, que vem do modulo express() (Cria uma cópia interira do express dentro desse sever)
const server = express() 

server.get("/", (req, res) =>{
    res.send("hello")
})

server.get("/hello", (req, res) =>{
    const {nome, idade} = req.query
    return res.json(
        { 
            title: "Hello World",
            message: `Olá ${nome}, qual o Hello World do Back-end?`,
            idade: idade
        }
    )
})

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
