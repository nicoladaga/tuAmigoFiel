//Definición de los objetos de tipo Producto

class Producto{
    constructor(nombre, precio, stock){

    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    }

    agregarStock(cantidad){
        this.stock += parseInt(cantidad);
    }
    
    quitarStock(cantidad){
        if (this.stock < cantidad){
            alert("no hay suficiente stock, el stock actual es de", this.stock, "unidades");
        }else{
            this.stock -= cantidad;
        }
    }

    cambiarPrecio(precio){
        if(parseFloat(precio) >= 0){
            this.precio = parseFloat(precio);
        } else {
            alert ("El precio no puede ser negativo.");
        }
    }   

}

//Instanciación de algunos productos para utilizar de prueba

const balancedGatoAd = new Producto("Balanced Gato Adulto", 5000, 10);
const catChowAd = new Producto("CatChow Gato Adulto", 4000, 3);
const balancedPerroAd = new Producto("Balanced perro Adulto", 3500, 8);
const premiumPerroAd  = new Producto("Premium Perro Adulto", 3200, 1);
const proplanPerroAd = new Producto("Proplan Perro Adulto", 4300, 4);
