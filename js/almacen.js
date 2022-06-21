
class Almacen{
    
    constructor(){
        
    }
    // metodo que agrega stock a un producto existente, si no existe, lo agrega al array de productos. los array de stock y productos siempre se editan juntos para que mantengan el mismo índice y el array de stock se consulta a partir del índice donde se encuentra el producto seleccionado
    agregarStock(producto, cantidad){

        this.producto = producto;
        this.cantidad = cantidad;

        if (productos.includes(producto)){

            stock[productos.indexOf(producto)] += cantidad;
        } else{
            productos.push(producto);
            stock.push(cantidad);
        }

    }

    //permite consultar la existencia de un producto determinado, valida si este existe en el almacen
    consultarStock(producto){
        if(productos.includes(producto)){

            return stock[productos.indexOf(producto)];
        } else{
            alert("el producto", producto, "no existe en el almacen");

        }

    }

    //permite quitar stock del almacen a partir de un producto y la cantidad a quitar, si no hay suficiente no permite hacerlo.
    quitarStock(producto, cantidad){
        
        if(productos.includes(producto)){

            if(this.consultarStock(producto) < cantidad ){
                alert("no hay suficiente stock, el stock actual es de " + stock[productos.indexOf(producto)] + " unidades");
            } else
            stock[productos.indexOf(producto)] -= cantidad;
        } 
    }

    //permite ver la existencia actual del almacen completa por consola.
    verAlmacen(){
        const almacen = [];
        
        //el objeto linea representa cada fila que se quiere cargar en la tabla, almacena, el nombre del producto el precio y la cantidad actual
        class Fila{
            constructor(producto){
                this.producto = producto.nombre;
                this.precio = producto.precio;
                this.stock = stock[productos.indexOf(producto)];
            }
            
        }
        // se recorre el array de productos cargados en el almacen y se agrega una fila al array por cada producto 
        for(let producto of productos){

            const nuevaFila = new Fila(producto);
            almacen.push(nuevaFila);
        }
        // se devuelve el nuevo array como tabla por consola.
        return console.table(almacen);
        
    }

}

//instancio el almacen y le agrego productos para las pruebas.
const almacen = new Almacen();
almacen.agregarStock(balancedGatoAd, 3);
almacen.agregarStock(catChowAd, 2);
almacen.agregarStock(balancedPerroAd, 7);
almacen.agregarStock(premiumPerroAd, 8);
almacen.agregarStock(proplanPerroAd, 4);
almacen.agregarStock(jugueteHelado, 2);
almacen.agregarStock(sogaYPelota, 10);
almacen.agregarStock(huesoGoma, 2);
almacen.agregarStock(sogaRosa, 6);
