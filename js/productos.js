// Se descarga el carrito del localStorage para mantener actualizado el stock de los productos.
descargarCarritoDeLocalStorage();

//función que genera el HTML del contenido de productos.json para proder cargarlo en productos.html
const retornoCardContenido = (contenido) => {
    const { imagen, nombre, precio, boton, segmento } = contenido 

    let retorno = {
        nombre: nombre,
        precio: precio,
        botonContenido: boton,
        categoria: segmento,
        codigoHtml: `
        <div class="card m-2 p-1">
            <img src="${imagen}" class="card-img-top imgCard"
                      alt="${nombre}">
            <div class="card-body">
                      <h5 class="card-title">${nombre}</h5>
                      <p class="card-text"><strong>$${precio}</strong></p>
                      <a href="#" class="btn btn-warning textoBoton" id="${boton}">Agregar al carrito</a>
            </div>
        </div>
        `
    }

    return retorno;
}

//constantes y funciones encargadas de ordenar y dar formato al contenido HTML a cargar en productos.html. La constante listeners permite almacenar todos los botones que podrá utilizar el usuario para agregar un producto al carrito.
const registros = [];
const listeners = [];
const obtenerContenido = (URL) =>{
    
    let cardsAlimentos = "";
    let cardsCamas = "";
    let cardsCollaresYPret = "";
    let cardsHigiene = "";
    let cardsJuguetes = "";
    let cardsTranspYjau = "";

    fetch(URL)
    .then((response)=> response.json() )
    .then( (data)=> {
        for(contenido of data){
            let registro = retornoCardContenido(contenido)
            
            switch(registro.categoria){
                case "Alimentos":
                    cardsAlimentos += registro.codigoHtml
                    break;
                case "Juguetes":
                    cardsJuguetes += registro.codigoHtml
                    break;
                case "CollaresYPretales":
                    cardsCollaresYPret += registro.codigoHtml
                    break;
                case "Higiene":
                    cardsHigiene += registro.codigoHtml
                    break;
                case "Camas":
                    cardsCamas += registro.codigoHtml
                    break;
                case "TranspYJaulas":
                    cardsTranspYjau += registro.codigoHtml
                    break;
                default:
                    break;

            }
            
            registros.push(registro) 
            
            
        }

        AlimentosDOM.innerHTML = cardsAlimentos
        CamasDOM.innerHTML = cardsCamas
        CollaresYPretalesDOM.innerHTML = cardsCollaresYPret
        HigieneDOM.innerHTML = cardsHigiene
        JuguetesDOM.innerHTML = cardsJuguetes
        TranspYJaulasDOM.innerHTML = cardsTranspYjau
        
        
        
        for(let i = 0; i < registros.length; i++){
            let btn = document.getElementById(registros[i].botonContenido)
            listeners.push(btn)
        }
        for(let i = 0; i < registros.length ; i++){
        
            let botonProducto = listeners[i];
            let nombreProducto = registros[i].nombre;
            let precioProducto = registros[i].precio;
        
        
            botonProducto.addEventListener("click", () => agregarAlCarritoYNotificar(new Producto(nombreProducto, precioProducto)));
        }

    })

}

obtenerContenido(URL)



