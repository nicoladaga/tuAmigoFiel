
// Creación del Carrito de compras
let carrito = {
    total: 0,
    cantidadElementos: 0,
    vacio: true

}

//Definición de los objetos de tipo Producto

function Producto(nombre, precio){

    this.nombre = nombre;
    this.precio = precio;
    this.agregadoAlCarrito = false;
}

//Instanciación de algunos productos para utilizar de prueba

let balancedGatoAd = new Producto("Balanced Gato Adulto", 5000);
let catChowAd = new Producto("CatChow Gato Adulto", 4000);
let balancedPerroAd = new Producto("Balanced perro Adulto", 3500);
let premiumPerroAd  = new Producto("Premium Perro Adulto", 3200);
let proplanPerroAd = new Producto("Proplan Perro Adulto", 4300);

//Función que permite agregar productos al carrito valida si el producto ya se encuentra agregado o no (aún no manejo stocks)

function agregarAlCarrito(Producto){

    if(Producto.agregadoAlCarrito){
        alert("El producto ya está en el carrito, no puede agregarlo 2 veces");
    }else{
        carrito.total = carrito.total + Producto.precio;
        carrito.cantidadElementos++;
        carrito.vacio = false;
        Producto.agregadoAlCarrito = true;
        return console.log("Se agrego", Producto.nombre, "al carrito");
    }
}

//función que permite quitar un producto del carrito

function quitarDelCarrito(Producto){

    if(Producto.agregadoAlCarrito == true){
        Producto.agregadoAlCarrito = false;
        carrito.total = carrito.total - Producto.precio;
        carrito.cantidadElementos--;
        console.log("el total del carrito es ahora de", carrito.total)
        if(carrito.cantidadElementos == 0){
            carrito.vacio = true;
            alert("El carrito ahora se encuentra vacío")
        }
    } else{
        console.log("El producto no está en el carrito")
    }

}

//la función "finaliza" la compra y vacía el carrito 

function finalizarCompra(){
   
    if(carrito.vacio){
        alert("No hay nada agregado en el carrito")
    } else if(confirm("¿Desea realizar el pago?")){
        alert("Se abonó el valor total del carrito")
        carrito.total = 0;
        carrito.cantidadElementos = 0;
        carrito.vacio= true;
    } else {
        alert("Puede continuar comprando")
    }
   
}