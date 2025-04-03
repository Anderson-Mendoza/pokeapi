import { seccionarPokemons } from "./paginacion";
const URL = "https://pokeapi.co/api/v2/pokemon/?limit=150";

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

        seccionarPokemons();

    } catch (error) {
        console.error("No se han cargado los recursos de la API", error);

    }
}

fetchPokemon()

