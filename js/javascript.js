


//Función que permite agregar productos al carrito si hay stock suficiente

function agregarAlCarrito(producto){

    if(producto.stock > 0){
        carrito.push(producto);
        producto.quitarStock(1);
        console.log("se agrego el producto", producto.nombre, "al carrito")
    } else{
        alert("no hay stock del producto seleccionado")
    }
    
}


//función que permite quitar un producto del carrito usando su índice

function quitarDelCarrito(producto){

    if(carrito.includes(producto)){

        carrito.splice(carrito.indexOf(producto), 1);
        producto.agregarStock(1);

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

function finalizarCompra(){
   
    if(verTotalCarrito() == 0){
        alert("el carrito se encuentra vacío")
    } else{
        if(confirm("¿Desea abonar?")){
            
           //este while limpia el carrito quitando el producto que se encuentra primero en la lista de manera sucesiva hasta que el carrito se encuentre vacío. uso específicamente la función quitar del carrito para que me restaure el stock y se "resetee".
           while(carrito.length > 0){
               quitarDelCarrito(carrito[0]);
           }

            console.log("se completó la transacción");
        } else{
            console.log("puede continuar comprando");
        }
    }
   
}