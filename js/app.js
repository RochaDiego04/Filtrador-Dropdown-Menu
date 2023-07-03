// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

// Rango de fechas que se añaden en el select
const max = new Date().getFullYear();
const min = max - 13;

// Generar objeto con la búsqueda
const ObjDatosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}

// Eventos
document.addEventListener('DOMContentLoaded', function(){
    mostrarAutos(autos);

    // Llena las opciones de años
    llenarSelect();
});

// Event listener para los select de búsqueda
marca.addEventListener('change',e => {
    ObjDatosBusqueda.marca = e.target.value;
    
    filtrarAutomoviles();
});

year.addEventListener('change',e => {
    ObjDatosBusqueda.year = parseInt(e.target.value);

    filtrarAutomoviles();
});

minimo.addEventListener('change',e => {
    ObjDatosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change',e => {
    ObjDatosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change',e => {
    ObjDatosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change',e => {
    ObjDatosBusqueda.transmision = e.target.value;
});

color.addEventListener('change',e => {
    ObjDatosBusqueda.color = e.target.value;
});

// Funciones
function mostrarAutos(autos) {

    LimpiarHTML();

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');
        
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// Limpiar HTML
function LimpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

// Genera los años del select
function llenarSelect() {
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agregar las opciones al select
    }
}

// Funcion que filtra en base a la búsqueda
function filtrarAutomoviles() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear )
    
    // console.log(resultado);
    mostrarAutos(resultado)
}

function filtrarMarca(auto) {
    const { marca } = ObjDatosBusqueda;
    if(marca) {
        return auto.marca === marca;
    }
    return auto
}

function filtrarYear(auto) {
    const { year } = ObjDatosBusqueda;

    if(year) {
        return auto.year === year;
    }
    return auto
}