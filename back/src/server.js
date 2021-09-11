const cors = require('cors');
const express = require ('express')
const app = express()
//const dataBase = require('./database/databaseKnex')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.get ('/listaPrincipal', async(req, res) => {
    const listaSeries = [
        {
            id: 86848,
            foto:"/2gyQRudrRU276fvkXMq4JNq3hzB.jpg"
        },
        {
            id: 46404,
            foto:"/3V0hFx8NgYXVfHfoMOuAXs3rb1J.jpg"
        },
        {
            id: 1622,
            foto: "/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg"
        }
    ] 
    res.send(listaSeries)
})

app.listen(3003)