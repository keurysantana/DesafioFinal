var parametros= location.search.substring(1);
var idSerie = parametros.split('=')[1];

async function getDetalhe(id) {
    try {
        const response = await fetch('http://localhost:3003/detalheSerie/'+id)
        const data = await response.json()
        console.log(data)
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

getDetalhe(idSerie)