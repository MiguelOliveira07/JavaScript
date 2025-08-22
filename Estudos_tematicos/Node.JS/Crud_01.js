const express = require("express")
const server = express()

server.use(express.json());

let customers = [
    { id : 1 , name: "GitHub", site:"https://github.com/MiguelOliveira07"},
    { id : 2 , name: "YoutTube", site:"https://www.youtube.com/watch?v=5UgIxA32Q5I&t=1430s"},
    { id : 3 , name: "UOL", site:"https://www.uol.com.br/"}
]

server.get("/customers", (req, res)=>{
     return res.json(customers)
})
server.get("/customers/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const customer = customers.find(item=>item.id === id)
    const status = customer ? 200 : 404
     return res.status(status).json(customer)
})

server.listen(3000);