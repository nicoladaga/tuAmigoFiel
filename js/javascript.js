
//función que guarda el carrito en local Storage
function guardarCarritoEnLocalStorage(){
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
}

function descargarCarritoDeLocalStorage(){
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
        alert("no hay stock del producto seleccionado")
        agregado = false;
    }
    return agregado;
}

function agregarAlCarritoYNotificar(producto){
    
    //no era necesaria realmente la utilización del &&, no ahorra nada, pero se demuestra la aplicación 

    let agregado = agregarAlCarrito(producto);
    agregado && alert("Se agregó " + producto.nombre + " al carrito");
    /*
    if(agregarAlCarrito(producto)){
        alert("Se agregó " + producto.nombre + " al carrito");
    }
    */
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
        alert("el carrito se encuentra vacío")
    } 
    else{


        if(confirm("el total es de " + verTotalCarrito() + " ¿Desea abonar?")){
            
           //este while limpia el carrito quitando el producto que se encuentra primero en la lista de manera sucesiva hasta que el carrito se encuentre vacío. uso específicamente la función quitar del carrito para que me restaure el stock y se "resetee".
           while(carrito.length > 0){
               quitarDelCarrito(carrito[0]);
           }

            console.log("se completó la transacción");
        } 
        else{
            console.log("puede continuar comprando");
        }

    }

}



function vaciarCarrito(){
    if(verTotalCarrito() == 0){
        alert("el carrito se encuentra vacío")
    } 
    else{


        if(confirm("¿Está seguro que desea vaciar el carrito?")){
            
           //este while limpia el carrito quitando el producto que se encuentra primero en la lista de manera sucesiva hasta que el carrito se encuentre vacío. uso específicamente la función quitar del carrito para que me restaure el stock y se "resetee".
           while(carrito.length > 0){
               quitarDelCarrito(carrito[0]);
           }
           
            console.log("El carrito se encuentra ahora vacío, puede continuar comprando");
        } 
        else{
            console.log("puede continuar comprando");
        }

    }

}