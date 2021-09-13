const cors = require('cors');
const express = require ('express')
const app = express()
const dataBase = require('./database/databaseKnex')
const bodyParser = require('body-parser')
const axios = require('axios');

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

app.get('/detalheSerie/:id', async(req, res) => {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/tv/'+req.params.id+'?api_key=7bd965a9aa82c3b1f149fb83984aa103&language=pt-PT',
        headers: { }
    };

    axios(config)
    .then(function (response) {
        let genreName=[]
        for(let genre of response.data.genres){
            genreName.push(genre.name)
        }
        const detalheSerie ={
            urlFoto:"http://image.tmdb.org/t/p/w185/"+response.data.poster_path,
            nome: response.data.original_name,
            ano: response.data.first_air_date,
            avaliacoes: response.data.vote_average,
            classificacao: genreName.join(', '),
            sinopse: response.data.overview,
            id: response.data.id
        }
        res.send(detalheSerie)
    })
    .catch(function (error) {
        console.log(error);
    });
})
app.post ('/comentar', async(req, res) => {
    console.log(req.body)
    const comentario = await dataBase.salvarComentario({
        nome: req.body.nome,
        comentario: req.body.comentario,
        id_serie: req.body.input_idserie,
    })
    res.send(comentario)
})

app.listen(3003)