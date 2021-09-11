 function configurarCarousel(){
    $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
        items: 1,
        },
        600: {
        items: 3,
        },
        1000: {
        items: 5,
        },
    },
    });
}

async function getSeries() {
    try {
        const response = await fetch('http://localhost:3003/listaPrincipal')
        const data = await response.json()
        console.log(data)
        for (let serie of data) {
            $("#carousel-itens").prepend(
                '<div class="item"><a href="detalhes.html?serieid='+serie.id+'"><img class="box-serie" src="http://image.tmdb.org/t/p/w342'+serie.foto+'" alt="" srcset=""></a></div>'
              );
        }
        configurarCarousel();
    } catch (error) {
        console.log('falha' + error)
    }
}

getSeries()