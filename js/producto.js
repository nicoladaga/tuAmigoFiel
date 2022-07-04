//Definición de los objetos de tipo Producto

class Producto{
    constructor(nombre, precio){

    this.nombre = nombre;
    this.precio = parseFloat(precio);
    }

}

//Instanciación de algunos productos para utilizar de prueba

const balancedGatoAd        = new Producto("Balanced Gato Adulto", 5000);
const catChowAd             = new Producto("CatChow Gato Adulto", 4000);
const balancedPerroAd       = new Producto("Balanced perro Adulto", 3500);
const premiumPerroAd        = new Producto("Premium Perro Adulto", 3200);
const proplanPerroAd        = new Producto("Proplan Perro Adulto", 4300);
const jugueteHelado         = new Producto("Helado de Juguete", 650);
const sogaYPelota           = new Producto("Pelota con soga", 620);
const huesoGoma             = new Producto("Hueso de goma", 420);
const sogaRosa              = new Producto("soga de juguete rosa", 420);
const collarElastizado      = new Producto("collar Elastizado", 220);
const correaNegra           = new Producto("correa Negra", 320);
const pretalChicoColor      = new Producto("Pretal chico de color", 500);
const pretalGranDeColor     = new Producto("Pretal grande de color", 700);
const palitaParaGato        = new Producto("palita para gato", 150);
const panioPet              = new Producto("Paño Pet pequeño", 800);
const camaCelesteCorazon    = new Producto("Cama celeste corazón", 2800);
const camaMilitar           = new Producto("Cama militar con corazón", 2800);
const camaChicaCorazones    = new Producto("Cama con corazoncitos", 3200);
const jaulaChica            = new Producto("jaula de Pajaro chica", 5200);
const transportadoraAzul    = new Producto("transportadora azul", 4200);