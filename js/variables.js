const carrito = [];
const stock = [];
const productos = [];
const URL = '../js/productos.json'

//elementos de Carrito.html
const listadoCarrito = document.getElementById("listadoCarrito")
const botonComprar = document.getElementById("botonComprar")
const botonVaciar = document.getElementById("botonVaciar")
const textoTotalCarrito = document.querySelector("#totalCarrito")

//elementos de Productos.html
const AlimentosDOM = document.querySelector("#Alimentos")
const JuguetesDOM = document.querySelector("#Juguetes")
const CollaresYPretalesDOM = document.querySelector("#CollaresYPretales")
const HigieneDOM = document.querySelector("#Higiene")
const CamasDOM = document.querySelector("#Camas")
const TranspYJaulasDOM = document.querySelector("#TranspYJaulas")


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

