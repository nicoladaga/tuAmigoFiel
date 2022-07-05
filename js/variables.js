const carrito = [];
const stock = [];
const productos = [];

//elementos de Carrito.html
const listadoCarrito = document.getElementById("listadoCarrito")
const botonComprar = document.getElementById("botonComprar")
const botonVaciar = document.getElementById("botonVaciar")
const textoTotalCarrito = document.querySelector("#totalCarrito")

//botones agregar al carrito de Productos.html
const btnCorreaNegra = document.getElementById("correaNegra")
const btnHuesoGoma = document.getElementById("huesoGoma")
const btnSogaYPelota = document.getElementById("sogaYPelota")
const btnPalitaParaGato = document.getElementById("palitaParaGato")
const btnPanioPet = document.getElementById("panioPet")
const btnJugueteHelado = document.getElementById("jugueteHelado")
const btnCollarElastizado = document.getElementById("collarElastizado")
const btnCatChowAd = document.getElementById("catChowAd")
const btnTransportadoraAzul = document.getElementById("transportadoraAzul")
const btnSogaRosa = document.getElementById("sogaRosa")
const btnCamaCelesteCorazon = document.getElementById("camaCelesteCorazon")
const btnBalancedGatoAd = document.getElementById("balancedGatoAd")
const btnProplanPerroAd = document.getElementById("proplanPerroAd")
const btnPremiumPerroAd = document.getElementById("premiumPerroAd")
const btnJaulaChica = document.getElementById("jaulaChica")
const btnBalancedPerroAd = document.getElementById("balancedPerroAd")
const btnPretalChicoColor = document.getElementById("pretalChicoColor")
const btnCamaChicaCorazones = document.getElementById("camaChicaCorazones")
const btnPretalGranDeColor = document.getElementById("pretalGranDeColor")
const btnCamaMilitar = document.getElementById("camaMilitar")

//Mensajes al usuario.
const noHayStock = ()=>{
    Swal.fire({
        text: "no hay stock del producto seleccionado",
        icon: "error",
    }) 
}

const agregadoAlCarrito = (nombreProducto)=> {
    Swal.fire({
        text: "Se agregó " + nombreProducto + " al carrito",
        icon: "success",
        toast: true,
        timer: 1000,
        timerProgressBar: true,
    }) 
}

const carritoVacio = ()=> {
    Swal.fire({
        title: "El carrito se encuentra vacío",
        icon: "info",
        showConfirmButton: false,
        toast: true,
        timer: 1000,
        timerProgressBar: true
    })
}

const continuarComprando = ()=> {
    Swal.fire({
        title: '¡Puede continuar comprando!',
        icon: 'info',
        toast: true,
        timer: 2000,
        timerProgressBar: true
    })
}

