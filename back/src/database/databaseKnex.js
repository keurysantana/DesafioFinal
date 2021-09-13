const { default: knex } = require('knex')
const { databaseConnection} = require('./connection')

async function salvarComentario(comentario){
    const insertComentario = {
        nome: comentario.nome,
        comentario: comentario.comentario,
        id_serie: comentario.id_serie,
    }
    
    const result = await databaseConnection('tmdb_table').insert(insertComentario)

    if(result) {
        console.log(result)
        return{
            ...comentario,
            id: result[0]
        }
    } else{
        console.error("Error!")
        return{
            error:"Error"
        }
    }
}
module.exports = {salvarComentario}