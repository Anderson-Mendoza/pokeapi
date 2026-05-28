import { FILTRO_TIPO } from "./constantes.js";
import { pokemonList } from "./api.js";
import { mostrarPokemon } from "./mostrarPokemon.js";
import { INPUT_BUSCAR } from "./constantes.js";

// Obtener todos los tipos únicos de pokemones
export function obtenerTipos() {
    const tipos = new Set();
    pokemonList.forEach(pokemon => {
        pokemon.types.forEach(type => {
            tipos.add(type.type.name);
        });
    });
    return Array.from(tipos).sort();
}

// Llenar el selector de tipos
export function llenarSelectorTipos() {
    const tipos = obtenerTipos();
    tipos.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
        FILTRO_TIPO.appendChild(option);
    });
}

// Filtrar pokemones por nombre y tipo
export function filtrarPokemones() {
    const tipoSeleccionado = FILTRO_TIPO.value;
    const textoBusqueda = INPUT_BUSCAR.value.toLowerCase();

    let pokemonesFiltrados = pokemonList;

    // Filtrar por tipo
    if (tipoSeleccionado) {
        pokemonesFiltrados = pokemonesFiltrados.filter(pokemon => 
            pokemon.types.some(type => type.type.name === tipoSeleccionado)
        );
    }

    // Filtrar por nombre
    if (textoBusqueda) {
        pokemonesFiltrados = pokemonesFiltrados.filter(pokemon =>
            pokemon.name.toLowerCase().includes(textoBusqueda)
        );
    }

    mostrarPokemon(pokemonesFiltrados);
}
