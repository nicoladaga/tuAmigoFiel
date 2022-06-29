descargarCarritoDeLocalStorage();

//carga los elementos del carrito al HTML
for(let i = 0; i < carrito.length; i++){

    cargarCarrito(carrito[i]);
}


//calcula el total del carrito al entrar en la pestaña
textoTotalCarrito.innerText = "Total: $" + verTotalCarrito();



botonComprar.addEventListener("click", ()=> finalizarCompra());
botonVaciar.addEventListener("click", vaciarCarrito);