import { seccionarPokemons } from "./paginacion.js";
import { llenarSelectorTipos } from "./filtroTipo.js";

export const URL = "https://pokeapi.co/api/v2/pokemon/?limit=1025";

export let pokemonList = [];

export async function fetchPokemon() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        pokemonList = await Promise.all(data.results.map(async (poke) => {
            const response = await fetch(poke.url)
            return response.json()
        })
        );

        llenarSelectorTipos();
        seccionarPokemons();

    } catch (error) {
        console.error("No se han cargado los recursos de la API", error);

    }
}


