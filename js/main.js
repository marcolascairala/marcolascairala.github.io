//function ajax(url, metodo='get') {   // ---> valor en argumentos por default
function ajax(url, metodo) {
    let xhr = new XMLHttpRequest
    xhr.open(metodo||'get',url)         // ---> valor en método con short circuit operator
    xhr.send()

    return xhr
}

function getNombreArchivo(id) {
    //return 'plantillas/' + id + '.html'  // ---> con error en el caso de hash vacío
    //return 'plantillas/' + (id? id : 'home') + '.html'     //solución con Operador ternario
    return 'plantillas/' + id + '.html'     //solución con Short circuit operator
}

function marcarLink(id) {
    let links = document.querySelectorAll('a')
    links.forEach( link => {
        if(link.id == id) {
            link.classList.add('active')
        }
        else {
            link.classList.remove('active')
        }
    })
}

function initJS(id) {

    switch(id) {
        case 'inicio': 
            initInicio()
            break
        case 'alta':
            initAlta()
            break
        case 'contacto':
            initContacto()
            break
        case 'nosotros':
            initNosotros()
            break
        default:
            initInicio()
    }
}

function cargarPlantilla(id) {
    let main = document.querySelector('main')
    let archivo = getNombreArchivo(id)
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status = 200) {
            main.innerHTML = xhr.response
            initJS(id)
        }
    })
}

/* ----------------------------------------------------------------------------- */
/*     Carga de las vistas/plantillas de navegación dentro del elemento main     */
/* ----------------------------------------------------------------------------- */

function iniPlantillas() {
    let links = document.querySelectorAll('a')
    //console.log(links)

    /* --------------------------------------------- */
    /*           Carga de la vista inicial           */
    /* --------------------------------------------- */
    let id = location.hash.slice(1) || 'inicio'
    marcarLink(id)
    cargarPlantilla(id) 

    /* --------------------------------------------- */
    /*       Carga de la vista de navegación         */
    /* --------------------------------------------- */
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            let id = link.id
            //console.log(id)
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {
        //console.log('La url cambió')

        let id = location.hash.slice(1) || 'inicio'
        marcarLink(id)
        cargarPlantilla(id)
    })
}

function start() {
    console.warn('start...')
    iniPlantillas()
}

start()