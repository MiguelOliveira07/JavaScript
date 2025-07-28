import express from "express";

const app = express() // acessar  o express e criar uma reta

const users = []
app.post('/users', (req, res)=>{
    
})

// Estou fazendo uma requisição no meu front-end, e o back respondeu, acessando um servidor local no pc
app. get('/users', (req, res) =>{ //vai me listar os usuários, dentro do users
    res.send('Ok, tudo certo')
}) 

app.listen(3000)

// 1 . tipo de rota
// 2 . endereço


/*
    Criar a API de Usuários
    1.criar um usuario
    2.listar os usuarios
    3.atualizar um usuario
    4.deletar um usuario
    
*/



