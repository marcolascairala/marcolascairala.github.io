class CarritoController {

    constructor() {
        try {
            carritoModel.inicializar( JSON.parse( localStorage.getItem('carrito') ) || [] )
        }
        catch {
            carritoModel.inicializar([])
            localStorage.setItem('carrito', carritoModel.obtener())
        }
    }

    agregarAlCarrito(producto) {

        if(!carritoModel.productoExiste(producto)) {
            producto.cantidad = 1
            carritoModel.guardar(producto)
        }
        else {
            let productoDeCarrito = carritoModel.obtenerProducto(producto)
            productoDeCarrito.cantidad++
        }

        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))
    }

    async borrarProducto(id) {
        console.log('borrarProducto', id)

        carritoModel.borrar(id)
        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))

        await renderCarrito(carritoModel.obtener())
    }

    async enviarCarrito() {
        var elemSectionCarrito = document.querySelector('.section-carrito')

        elemSectionCarrito.innerHTML = '<h2>Enviando carrito....</h2>'
        
        //console.log('Enviando carrito')
        await carritoService.guardarCarrito(carritoModel.obtener())
        //console.log('Listo')

        elemSectionCarrito.innerHTML = '<h2>Enviando carrito....<b>Listo</b></h2>'

        //borro carrito del modelo y del localstorage
        carritoModel.inicializar([])
        localStorage.setItem('carrito', carritoModel.obtener())

        setTimeout(() => {
            elemSectionCarrito.classList.remove('section-carrito--visible')
            mostrarCarrito = false
        },1500)
    }
}


const carritoController = new CarritoController()