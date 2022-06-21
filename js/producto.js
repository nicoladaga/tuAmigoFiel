//Definición de los objetos de tipo Producto

class Producto{
    constructor(nombre, precio){

    this.nombre = nombre;
    this.precio = parseFloat(precio);
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

const balancedGatoAd = new Producto("Balanced Gato Adulto", 5000);
const catChowAd = new Producto("CatChow Gato Adulto", 4000);
const balancedPerroAd = new Producto("Balanced perro Adulto", 3500);
const premiumPerroAd  = new Producto("Premium Perro Adulto", 3200);
const proplanPerroAd = new Producto("Proplan Perro Adulto", 4300);
const jugueteHelado = new Producto("Helado de Juguete", 650);
const sogaYPelota = new Producto("Pelota con soga", 620);
const huesoGoma = new Producto("Hueso de goma", 420);
const sogaRosa  = new Producto("soga de juguete rosa", 420);
