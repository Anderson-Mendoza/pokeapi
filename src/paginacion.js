import { mostrarPokemon } from "./mostrarPokemon.js"
import { pokemonList } from "./api.js";

const elementosPorPagina = 10;
export let paginaActual = 1;

export function avanzarPagina() {
    paginaActual = paginaActual + 1;
    seccionarPokemons();
}

export function retrocederPagina() {
    paginaActual = paginaActual - 1;
    seccionarPokemons();
}

export function seccionarPokemons() {
    const corteDeInicio = (paginaActual - 1) * elementosPorPagina;
    const corteDeFinal = corteDeInicio + elementosPorPagina;
    mostrarPokemon(pokemonList.slice(corteDeInicio, corteDeFinal));

}

export function obtenerPaginasTotales() {
    return Math.ceil(pokemonList.length / elementosPorPagina);
}

