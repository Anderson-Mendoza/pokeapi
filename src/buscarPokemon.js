import { INPUT_BUSCAR } from "./constantes.js";
import { pokemonList } from "./api.js";
import { mostrarPokemon } from "./mostrarPokemon.js";

export function buscarPokemon() {
    const input = INPUT_BUSCAR.value;

    const pokemonsFinded = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(input));
    mostrarPokemon(pokemonsFinded)
}

