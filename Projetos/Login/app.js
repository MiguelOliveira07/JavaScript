import sqlite3 from 'sqlite3'
import {open} from 'sqlite'


async function criarEPopularTabelaUsuarios(){
   const db = await open({
        filename: 'banco.db',
        driver: sqlite3.Database,
    });

    db.run(`CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT)`)
}

criarEPopularTabelaUsuarios();