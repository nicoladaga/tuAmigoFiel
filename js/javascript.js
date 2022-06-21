


//Función que permite agregar productos al carrito si hay stock suficiente

function agregarAlCarrito(producto){
    
    if(almacen.consultarStock(producto) > 0){

        carrito.push(producto);
        almacen.quitarStock(producto, 1);
        
        const liNuevoProducto = document.createElement("li");
                liNuevoProducto.className = "border-bottom border-light border-3 fs-5";
                liNuevoProducto.innerHTML = `<strong>Producto: </strong> ${producto.nombre} <strong>Precio: </strong> ${producto.precio}`;
                liNuevoProducto.id = producto.nombre + "EnCarrito";
                liNuevoProducto.addEventListener("dblclick", ()=> quitarDelCarrito(producto));
                listadoCarrito.append(liNuevoProducto);

    } else{
        alert("no hay stock del producto seleccionado")
    }
    
}

//función que permite quitar un producto del carrito usando su índice

function quitarDelCarrito(producto){

    if(carrito.includes(producto)){

        carrito.splice(carrito.indexOf(producto), 1);
        almacen.agregarStock(producto, 1);

        const productoARemoverId = producto.nombre + "EnCarrito";
        const productoARemover = document.getElementById(productoARemoverId);
        productoARemover.remove()
        console.warn(`${producto.nombre} ha sido eliminado del carrito.`)
        

    }else{
        alert("el producto no se encuentra en el carrito")
    }
}

function verTotalCarrito(){

    const valoresCarrito = [];
    carrito.forEach( (producto) => {
        valoresCarrito.push(producto.precio);
    } )
    const total = valoresCarrito.reduce((acumulador, valor) => acumulador + valor, 0)

    console.log("el total del carrito es de", total);
    return total;
}

function listarCarrito(){
    console.table(carrito)
}

//la función "finaliza" la compra y vacía el carrito 

botonComprar.addEventListener("click", finalizarCompra);

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

botonVaciar.addEventListener("click", vaciarCarrito);

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