import { INPUT_BUSCAR } from "./constantes.js";
import { pokemonList } from "./api.js";
import { mostrarPokemon } from "./mostrarPokemon.js";
import { filtrarPokemones } from "./filtroTipo.js";

export function buscarPokemon() {
    filtrarPokemones();
}

