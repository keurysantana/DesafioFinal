require('dotenv').config();

const cors = require('cors');
const express = require ('express')
const app = express()
const dataBase = require('./database/databaseKnex')
const bodyParser = require('body-parser')
const axios = require('axios');

const api_key = process.env.apikey;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.get ('/listaPrincipal', async(req, res) => {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/tv?api_key=' + api_key + '&query=love&language=pt-PT',
        headers: { }
    };

    axios(config)
    .then(function (response){
        let listaSeries = []
        for(let serie of response.data.results){
            listaSeries.push({
                id: serie.id,
                foto: serie.poster_path
            }) 
        }
        res.send(listaSeries)
    })
    .catch(function (error) {
        console.log(error);
    });
})

app.get('/detalheSerie/:id', async(req, res) => {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/tv/'+req.params.id+'?api_key=' + api_key + '&language=pt-PT',
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
            avaliacoes: response.data.vote_average ? response.data.vote_average : 'Esta série não tem avaliação no TMDB',
            classificacao: genreName.join(', '),
            sinopse: response.data.overview ? response.data.overview : 'Esta série não tem sinopse no TMDB',
            id: response.data.id
        }
        res.send(detalheSerie)
    })
    .catch(function (error) {
        console.log(error);
    });
})
app.post ('/comentar', async(req, res) => {
    const comentario = await dataBase.salvarComentario({
        nome: req.body.nome,
        comentario: req.body.comentario,
        id_serie: req.body.input_idserie,
        avaliacao: req.body.avaliacao
    })
    res.send(comentario)
})
app.get ('/comentarios/:id', async(req, res) => {
    const comentarios = await dataBase.listarComentarios(req.params.id)
    res.send(comentarios)
})

app.listen(3003)