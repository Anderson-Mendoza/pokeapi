import { mostrarPokemon } from "script.js";

let elementosPorPagina = 10;
let paginaActual = 1;

function avanzarPagina() {
    paginaActual = paginaActual + 1;
    seccionarPokemons();
}

function retrocederPagina() {
    paginaActual = paginaActual - 1;
    seccionarPokemons();
}

function seccionarPokemons() {
    const corteDeInicio = (paginaActual - 1) * elementosPorPagina;
    const corteDeFinal = corteDeInicio + elementosPorPagina;
    mostrarPokemon(pokemonList.slice(corteDeInicio, corteDeFinal));

}

function obtenerPaginasTotales() {
    return Math.ceil(pokemonList.length / elementosPorPagina);
}

export { avanzarPagina, retrocederPagina, seccionarPokemons, obtenerPaginasTotales, paginaActual }