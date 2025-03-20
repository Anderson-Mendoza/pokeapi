const URL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
const LISTA_POKE = document.getElementById("todos");
const BTN_BUSCAR = document.getElementById("btn-buscar");
const INPUT_BUSCAR = document.getElementById("input-buscar");
const INFO_PAGINA = document.getElementById('informacion-pagina');
const BTN_ATRAS = document.getElementById("atras");
const BTN_ADELANTE = document.getElementById("siguiente");

let pokemonList = [];
let filtrarPokemon = [];

// LLamar a la API
async function fetchPokemon() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        const pokemonDetails = await Promise.all(data.results.map(async (poke) => {
            const response = await fetch(poke.url)
            return response.json()
        })
        );

        pokemonList = pokemonDetails
        filtrarPokemon = pokemonList

        mostrarPokemon(pokemonList);

    } catch (error) {
        console.error("No se han cargado los recursos de la API", error);

    }
}

//Filtrar pokemones
function buscarPokemon() {
    const input = INPUT_BUSCAR.value;

    filtrarPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(input));
    paginaActual = 1
    mostrarPokemon();
}


// variables paginador
let elementosPorPagina = 10;
let paginaActual = 1;



function avanzarPagina() {
    paginaActual = paginaActual + 1;

    mostrarPokemon();
}

function retrocederPagina() {
    paginaActual = paginaActual - 1;

    mostrarPokemon();
}

function obtenerRebanadaDeBaseDeDatos() {
    const corteDeInicio = (paginaActual - 1) * elementosPorPagina;
    const corteDeFinal = corteDeInicio + elementosPorPagina;
    return filtrarPokemon.slice(corteDeInicio, corteDeFinal);

}

function obtenerPaginasTotales() {
    return Math.ceil(filtrarPokemon.length / elementosPorPagina);
}


function gestionarBotones() {
    // Comprobar que no se pueda retroceder
    if (paginaActual === 1) {
        BTN_ATRAS.setAttribute("disabled", true);
    } else {
        BTN_ATRAS.removeAttribute("disabled");
    }

    // Comprobar que no se pueda avanzar
    if (paginaActual === obtenerPaginasTotales()) {
        BTN_ADELANTE.setAttribute("disabled", true);
    } else {
        BTN_ADELANTE.removeAttribute("disabled");
    }
}





// Mostrar elementos en el DOM
function mostrarPokemon() {

    LISTA_POKE.innerHTML = "";
    const rebanadaDeDatos = obtenerRebanadaDeBaseDeDatos();
    gestionarBotones();
    INFO_PAGINA.textContent = `${paginaActual}/${obtenerPaginasTotales()}`;

    rebanadaDeDatos.forEach(pokemon => {
        const container = document.createElement("div");
        container.classList.add("container-card-pokemon");

        const img = document.createElement("img");
        img.src = pokemon.sprites.other["official-artwork"].front_default;
        img.alt = pokemon.name;
        img.classList.add("container-img");

        const p = document.createElement("p");
        p.textContent = pokemon.name;
        p.classList.add("p");

        const numberId = document.createElement("p");
        numberId.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

        container.appendChild(img);
        container.appendChild(p);
        container.appendChild(numberId);

        LISTA_POKE.appendChild(container);



    });


}



// Eventos
INPUT_BUSCAR.addEventListener("input", buscarPokemon);
BTN_BUSCAR.addEventListener("click", buscarPokemon);

BTN_ATRAS.addEventListener("click", retrocederPagina);
BTN_ADELANTE.addEventListener("click", avanzarPagina);


fetchPokemon()

