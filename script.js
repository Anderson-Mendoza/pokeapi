const URL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
const LISTA_POKE = document.getElementById("todos");
const BTN_BUSCAR = document.getElementById("btn-buscar");
const INPUT_BUSCAR = document.getElementById("input-buscar");


let pokemonList = [];


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

        mostrarPokemon(pokemonList)

    } catch (error) {
        console.error("No se han cargado los recursos de la API", error);

    }
}


function mostrarPokemon(pokemonArray) {

    pokemonArray.forEach(pokemon => {
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

fetchPokemon()





