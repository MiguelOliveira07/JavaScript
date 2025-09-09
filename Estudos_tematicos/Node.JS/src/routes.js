const { Router } = require("express")
const route = new Router()

route.get("/", (req, res)=>{
    return res.json({message: "Hello"})
})

module.exports = route
