import mostrarPokemon from "../script";
import pokemonList from "./api";
import INPUT_BUSCAR from "./constantes";

let pokemonsFinded = null;

export function buscarPokemon() {
    const input = INPUT_BUSCAR.value;

    pokemonsFinded = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(input));
    paginaActual = 1
    mostrarPokemon();
}

