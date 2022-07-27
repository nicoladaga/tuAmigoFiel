
class Almacen{
    
    constructor(){
        
    }
    // metodo que agrega stock a un producto existente, si no existe, lo agrega al array de productos. los array de stock y productos siempre se editan juntos para que mantengan el mismo índice y el array de stock se consulta a partir del índice donde se encuentra el producto seleccionado
    agregarStock(producto, cantidad){

        let incluido;
        let indice;
        for (let elemento of productos){
            if(elemento.nombre == producto.nombre){
                incluido = true;
                indice = productos.indexOf(elemento);
                break;
            }else{
                incluido = false;
            }
        }

        if (incluido){

            stock[indice] += cantidad;
        } else{
            productos.push(producto);
            stock.push(cantidad);
        }

    }

    //permite consultar la existencia de un producto determinado, valida si este existe en el almacen
    consultarStock(producto){
        
        let incluido;
        let indice;
        for (let elemento of productos){
            if(elemento.nombre == producto.nombre){
                incluido = true;
                indice = productos.indexOf(elemento);
                break;
            }else{
                incluido = false;
            }
        }
        
        
        if(incluido){

            return stock[indice];
        } else{
            //este error se da cuando por algún motivo el producto que el usuario clickeó para agregar al carrito no existe en el almacen (no es que no hay stock sino que es nulo). No debería darse, pero si se da, es necesariamente un error en el código.
            errorInterno();

        }
        
        
    }
    


    //permite quitar stock del almacen a partir de un producto y la cantidad a quitar, si no hay suficiente no permite hacerlo.
    quitarStock(producto, cantidad){
        let incluido;
        let indice;

        for (let elemento of productos){
            if(elemento.nombre == producto.nombre){
                incluido = true;
                indice = productos.indexOf(elemento);
                break;
            }else{
                incluido = false;
            }
        }
        
        if(incluido){
            
            this.consultarStock(producto) < cantidad ? 
            //por el momento el usuario solo puede sumar de a 1 producto a la vez así que este mensaje no va a surgir, si se agrega la posibilidad de agregar multiple stock mediante input esto se volverá funcional.
            noHayStockSuficiente(stock[indice]): 
            stock[indice] -= cantidad;

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
almacen.agregarStock(correaNegra, 5);
almacen.agregarStock(huesoGoma, 6);
almacen.agregarStock(sogaYPelota, 3);
almacen.agregarStock(palitaParaGato, 1);
almacen.agregarStock(panioPet, 9);
almacen.agregarStock(jugueteHelado, 8);
almacen.agregarStock(collarElastizado, 10);
almacen.agregarStock(catChowAd, 3);
almacen.agregarStock(transportadoraAzul, 4);
almacen.agregarStock(sogaRosa, 3);
almacen.agregarStock(camaCelesteCorazon, 5);
almacen.agregarStock(balancedGatoAd, 10);
almacen.agregarStock(proplanPerroAd, 5);
almacen.agregarStock(premiumPerroAd, 2);
almacen.agregarStock(jaulaChica, 3);
almacen.agregarStock(balancedPerroAd, 8);
almacen.agregarStock(pretalChicoColor, 5);
almacen.agregarStock(camaChicaCorazones, 3);
almacen.agregarStock(pretalGranDeColor, 5);
almacen.agregarStock(camaMilitar, 5);
