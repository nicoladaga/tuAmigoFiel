descargarCarritoDeLocalStorage();

const retornoCardContenido = (contenido) => {
    const { imagen, nombre, precio, boton, segmento } = contenido 

    let retorno = {
        nombre: nombre,
        precio: precio,
        botonContenido: boton,
        categoria: segmento,
        codigoHtml: `
        <div class="card m-2 p-1">
            <img src="${imagen}" class="card-img-top imgCard"
                      alt="${nombre}">
            <div class="card-body">
                      <h5 class="card-title">${nombre}</h5>
                      <p class="card-text"><strong>$${precio}</strong></p>
                      <a href="#" class="btn btn-warning textoBoton" id="${boton}">Agregar al carrito</a>
            </div>
        </div>
        `
    }

    return retorno;
}

const registros = [];
const listeners = [];
const obtenerContenido = (URL) =>{
    
    let cardsAlimentos = "";
    let cardsCamas = "";
    let cardsCollaresYPret = "";
    let cardsHigiene = "";
    let cardsJuguetes = "";
    let cardsTranspYjau = "";

    fetch(URL)
    .then((response)=> response.json() )
    .then( (data)=> {
        for(contenido of data){
            let registro = retornoCardContenido(contenido)
            
            switch(registro.categoria){
                case "Alimentos":
                    cardsAlimentos += registro.codigoHtml
                    break;
                case "Juguetes":
                    cardsJuguetes += registro.codigoHtml
                    break;
                case "CollaresYPretales":
                    cardsCollaresYPret += registro.codigoHtml
                    break;
                case "Higiene":
                    cardsHigiene += registro.codigoHtml
                    break;
                case "Camas":
                    cardsCamas += registro.codigoHtml
                    break;
                case "TranspYJaulas":
                    cardsTranspYjau += registro.codigoHtml
                    break;
                default:
                    break;

            }
            
            registros.push(registro) 
            
            
        }

        AlimentosDOM.innerHTML = cardsAlimentos
        CamasDOM.innerHTML = cardsCamas
        CollaresYPretalesDOM.innerHTML = cardsCollaresYPret
        HigieneDOM.innerHTML = cardsHigiene
        JuguetesDOM.innerHTML = cardsJuguetes
        TranspYJaulasDOM.innerHTML = cardsTranspYjau
        
        
        
        for(let i = 0; i < registros.length; i++){
            let btn = document.getElementById(registros[i].botonContenido)
            listeners.push(btn)
        }
        for(let i = 0; i < registros.length ; i++){
        
            let botonProducto = listeners[i];
            let nombreProducto = registros[i].nombre;
            let precioProducto = registros[i].precio;
        
        
            botonProducto.addEventListener("click", () => agregarAlCarritoYNotificar(new Producto(nombreProducto, precioProducto)));
        }

    })

}

obtenerContenido(URL)



/*
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


btnCorreaNegra.addEventListener("click", () => agregarAlCarritoYNotificar(correaNegra));
btnHuesoGoma.addEventListener("click", () => agregarAlCarritoYNotificar(huesoGoma));
btnSogaYPelota.addEventListener("click", () => agregarAlCarritoYNotificar(sogaYPelota));
btnPalitaParaGato.addEventListener("click", () => agregarAlCarritoYNotificar(palitaParaGato));
btnPanioPet.addEventListener("click", () => agregarAlCarritoYNotificar(panioPet));
btnJugueteHelado.addEventListener("click", () => agregarAlCarritoYNotificar(jugueteHelado));
btnCollarElastizado.addEventListener("click", () => agregarAlCarritoYNotificar(collarElastizado));
btnCatChowAd.addEventListener("click", () => agregarAlCarritoYNotificar(catChowAd));
btnTransportadoraAzul.addEventListener("click", () => agregarAlCarritoYNotificar(transportadoraAzul));
btnSogaRosa.addEventListener("click", () => agregarAlCarritoYNotificar(sogaRosa));
btnCamaCelesteCorazon.addEventListener("click", () => agregarAlCarritoYNotificar(camaCelesteCorazon));
btnBalancedGatoAd.addEventListener("click", () => agregarAlCarritoYNotificar(balancedGatoAd));
btnProplanPerroAd.addEventListener("click", () => agregarAlCarritoYNotificar(proplanPerroAd));
btnPremiumPerroAd.addEventListener("click", () => agregarAlCarritoYNotificar(premiumPerroAd));
btnJaulaChica.addEventListener("click", () => agregarAlCarritoYNotificar(jaulaChica));
btnBalancedPerroAd.addEventListener("click", () => agregarAlCarritoYNotificar(balancedPerroAd));
btnPretalChicoColor.addEventListener("click", () => agregarAlCarritoYNotificar(pretalChicoColor));
btnCamaChicaCorazones.addEventListener("click", () => agregarAlCarritoYNotificar(camaChicaCorazones));
btnPretalGranDeColor.addEventListener("click", () => agregarAlCarritoYNotificar(pretalGranDeColor));
btnCamaMilitar.addEventListener("click", () => agregarAlCarritoYNotificar(camaMilitar));

*/