var parametros= location.search.substring(1);
var idSerie = parametros.split('=')[1];

async function getDetalhe(id) {
    try {
        const response = await fetch('http://localhost:3003/detalheSerie/'+id)
        const data = await response.json()
        $("#imagem").prepend('<img src="'+data.urlFoto+'">');
        $("#nome-serie").prepend(data.nome)
        $("#ano").prepend(data.ano)
        $("#avaliacoes").prepend(data.avaliacoes)
        $("#classificacao").prepend(data.classificacao)
        $("#sinopse").prepend(data.sinopse)
        $("#input_idserie").attr('value',id)
    } catch (error) {
        console.log('falha' + error)
    }
}

async function getComentario(id) {
    try {
        const response = await fetch('http://localhost:3003/comentarios/'+id)
        const data = await response.json()
        for(let c of data){
            let dataCom = new Date(c.data_comentario)
            let dataFormatada = (dataCom.getDate()) + "/" + (dataCom.getMonth()) + "/" + (dataCom.getFullYear());
            let comHtml = '<section>'
                            + '<div>Nome: ' + c.nome + '</div>'
                            + '<div>Data: ' + dataFormatada + '</div>'
                            + '<div>Comentário: ' + c.comentario + '</div>'
                        + '</section>'
            $("#comentario_back").append(comHtml)
        }    
    } catch (error) {
        console.log('falha'+ error)
    }
}

getDetalhe(idSerie);

getComentario(idSerie);

$(function(){
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3003/comentar',
            data: {
                input_idserie: e.target.input_idserie.value,
                nome: e.target.nome.value,
                comentario: e.target.comentario.value
            },
            success: function() {
                getComentario(idSerie);
                e.target.reset();
            }
        });
    })
})