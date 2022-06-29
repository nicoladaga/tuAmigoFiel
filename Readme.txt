Cambios de la última versión:
1. Se actualizó el simulador
2. Se modificó el archivo almacen.js para llevar el stock por nombre del producto y no por el objeto porque al traer el carrito de local storage se perdía la referencia de la instanciación original del objeto.
3. Se crearon los archivos carrito.js y productos.js que manejan el código javascript particular del html que le corresponde
4. Se actualizaron los distintos métodos de javascript.js para trabajar con localStorage cargando y descargando de allí el carrito para que esté actualizado en ambos html de productos y carrito.
5. Se agregaron Ids a todos los botones de agregar al carrito de los productos listados hasta el momento y se instanciaron en el documento de variables para poder utilizarlos. también se agregaron los eventListener al documento de productos.js para poder utilizarlos.
6. Hoy por hoy ya se puede agregar productos al carrito desde la página de producto según el stock que haya en el almacen haciendo click en el botón correspondiente, se puede remover un elemento del carrito desde la página de carrito haciendo doble click, se agregó que se pueda ver el total actualizado en todo momento, finalizar la compra o vaciar el carrito y restaurar los elementos al almacen.

