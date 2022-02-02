// var cards = [
//     new Card('Dillom - Post Mortem', 'Primer disco de Dillom, artista emergente, que pasa por varios generos como el hip hop y el rock', 'Primer disco de Dillom, con varios generos', '../img/bandas/dillom_post-mortem.jpg', 'https://www.youtube.com/watch?v=rd5YDHcTcEk', '1337')
// ]

// var cardsB = [
//     new Card('Dillom - Post Mortem', 'Primer disco de Dillom, artista emergente, que pasa por varios generos como el hip hop y el rock', 'Primer disco de Dillom, con varios generos', '../img/bandas/dillom_post-mortem.jpg', 'https://www.youtube.com/watch?v=rd5YDHcTcEk', '1337')
// ]

function renderCards(productos) {
    fetch('vistas/inicio.hbs')
    .then(r => r.text())
    .then( plantilla => {
        console.log(productos)
        //compile the template
        var template = Handlebars.compile(plantilla);
        //execute the compiled template and print the output to the console
        let html = template({ productos: productos });
        document.querySelector('.cards-container').innerHTML = html
    })
}

function agregarAlCarrito(id) {
    //console.log('agregarAlCarrito', id)

    let producto = productosModel.obtener(id)
    //console.log(producto)
    carritoController.agregarAlCarrito(producto)
}

async function initInicio() {
    console.warn('initInicio')

    productosModel.inicializar(await productosController.obtenerProductos())
    let productos = productosModel.obtener()
    renderCards(productos)

    let lg = productos.length
    document.querySelector('.section-cards__header p').innerHTML = lg? `Se encontraron ${lg} productos` : ''
    // var elemCardsContainer = document.getElementsByClassName('cards-container')[0]
    // var elemCardsContainerB = document.getElementsByClassName('cards-container')[1]
    
    
    
    // for (var card of cards) {
    //     card.appendTo(elemCardsContainer)
    // }
    
    
    // for (var cardB of cardsB) {
    //     cardB.appendTo(elemCardsContainerB)
    // }

}