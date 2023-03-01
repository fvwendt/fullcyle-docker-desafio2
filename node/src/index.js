const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))`
connection.query(sqlCreateTable)

const sqlInsert = `INSERT INTO people (name) VALUES ('Fabricio')`
connection.query(sqlInsert)

let registros = null;
const sqlSelect = `SELECT id, name FROM people ORDER BY id`
connection.query(sqlSelect, function (err, result) {
    if (err) throw err
    registros = result
});

connection.end()

app.get('/', (req,res) => {
    let resposta = '<h1>Full Cycle Rocks!</h1>'
    if (resposta !== null && resposta.length) {
        resposta += registros.map((item) => `<b>${item.name} ${item.id}</b>`).join('<br>')
    }
    res.send(resposta)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})