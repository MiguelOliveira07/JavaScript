const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql= require('mysql2/promise')
    const con=mysql.createConnection("mysql://root:#SenhaMySQL25@localhost:3306/aula01")
    console.log('conectado')
    global.conexao=con
    return con
}
conectar()

module.exports = { }