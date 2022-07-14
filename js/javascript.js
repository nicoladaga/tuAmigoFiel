


//función que guarda el carrito en local Storage
function guardarCarritoEnLocalStorage(){
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
}



function descargarCarritoDeLocalStorage(){
    localStorage.getItem("carrito") ?? localStorage.setItem('carrito', '[]');
    
    let carritoJson = JSON.parse(localStorage.getItem('carrito'))

    for(let producto of carritoJson){
        agregarAlCarrito(new Producto(producto.nombre, producto.precio));
    }
}


//Función que permite agregar productos al carrito si hay stock suficiente

function agregarAlCarrito(producto){
    
    let agregado;
    if(almacen.consultarStock(producto) > 0){

        carrito.push(producto);
        almacen.quitarStock(producto, 1);
        guardarCarritoEnLocalStorage();
        agregado = true;
    } else{
        //alert("no hay stock del producto seleccionado")
        noHayStock();
        agregado = false;
    }
    return agregado;
}

function agregarAlCarritoYNotificar(producto){
    
    agregarAlCarrito(producto) && agregadoAlCarrito(producto.nombre);

}



//función que carga los productos del carrito al HTML de carrito.html

function cargarCarrito(producto){

        const liNuevoProducto = document.createElement("li");
                liNuevoProducto.className = "border-bottom border-light border-3 fs-5";
                liNuevoProducto.innerHTML = `<strong>Producto: </strong> ${producto.nombre} <strong>Precio: </strong> ${producto.precio}`;
                liNuevoProducto.id = producto.nombre + "EnCarrito";
                liNuevoProducto.addEventListener("dblclick", ()=> quitarDelCarrito(producto));
                listadoCarrito.append(liNuevoProducto);

    }


//función que permite quitar un producto del carrito usando su índice

function quitarDelCarrito(producto){

        carrito.splice(carrito.indexOf(producto), 1);
        almacen.agregarStock(producto, 1);
        guardarCarritoEnLocalStorage();

        const productoARemoverId = producto.nombre + "EnCarrito";
        const productoARemover = document.getElementById(productoARemoverId);
        productoARemover.remove();
        console.warn(`${producto.nombre} ha sido eliminado del carrito.`)
        textoTotalCarrito.innerText = "Total: " + verTotalCarrito() || "carrito vacío"

}

function verTotalCarrito(){

    const valoresCarrito = [];
    carrito.forEach( (producto) => {
        valoresCarrito.push(producto.precio);
    } )
    const total = valoresCarrito.reduce((acumulador, valor) => acumulador + valor, 0)
    total.toFixed(2);
    return total;
}

function listarCarrito(){
    console.table(carrito)
}

//la función "finaliza" la compra y vacía el carrito 


function finalizarCompra(){


    if(verTotalCarrito() == 0){
        carritoVacio();
    } 
    else{

        const confirmarCompra = ()=> {
   
            Swal.fire({
                
                title: "el total es de $" + verTotalCarrito() + " ¿Desea abonar?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Pagar',
                cancelButtonText: 'Continuar comprando',
                
            }).then((result) => {

                if (result.isConfirmed) {
                    //este while limpia el carrito quitando el producto que se encuentra primero en la lista de manera sucesiva hasta que el carrito se encuentre vacío. uso específicamente la función quitar del carrito para que me restaure el stock y se "resetee".
                    while(carrito.length > 0){
                        quitarDelCarrito(carrito[0]);
                    }
                    Swal.fire({
                        title: 'Se completó la compra!',
                        icon: 'success',
                        toast: true,
                        timer: 2000,
                        timerProgressBar: true
                    })
                } else{
                    continuarComprando()

                }
            })

        }

        confirmarCompra();
        
        

    }

}



function vaciarCarrito(){
    
    if(verTotalCarrito() == 0){
        carritoVacio();
    } 
    else{

        const vaciarCarrito = ()=> {

            Swal.fire({
                
                title: "¿Está seguro que desea vaciar el carrito?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, estoy seguro',
                cancelButtonText: 'Continuar comprando',
                
            }).then((result) => {

                if (result.isConfirmed) {
                    //este while limpia el carrito quitando el producto que se encuentra primero en la lista de manera sucesiva hasta que el carrito se encuentre vacío. uso específicamente la función quitar del carrito para que me restaure el stock y se "resetee".
                    while(carrito.length > 0){
                        quitarDelCarrito(carrito[0]);
                    }
                    Swal.fire({
                        title: 'Se vació el carrito',
                        icon: 'success',
                        toast: true,
                        timer: 2000,
                        timerProgressBar: true
                    })
                } else{
                    continuarComprando()

                }
            })

        }

        vaciarCarrito();

    }

}