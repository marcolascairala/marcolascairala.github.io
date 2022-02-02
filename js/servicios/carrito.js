class CarritoService {

URL_CARRITO = 'https://61dd849bf60e8f0017668893.mockapi.io/carrito/'

    async guardarCarrito(carrito) {
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()