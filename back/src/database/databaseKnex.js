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
async function listarComentarios(id_serie){
    const result = await databaseConnection('tmdb_table').select('*').where({'id_serie':id_serie})
    return result
}

module.exports = {salvarComentario, listarComentarios}