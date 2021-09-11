const express = require ('express')
const app = express()
//const dataBase = require('./database/databaseKnex')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get ('/listaPrincipal', async(req, res) => {
    res.send ("Ola")
})

app.listen(3003)