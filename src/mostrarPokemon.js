import { LISTA_POKE, INFO_PAGINA } from "./constantes.js";
import { gestionarBotones } from "./gestionarBotones.js";
import { obtenerPaginasTotales, paginaActual } from "./paginacion.js";

// Mostrar elementos en el DOM
export function mostrarPokemon(pokemons) {

    LISTA_POKE.innerHTML = "";
    gestionarBotones();
    INFO_PAGINA.textContent = `${paginaActual}/${obtenerPaginasTotales()}`;

    pokemons.forEach(pokemon => {
        const container = document.createElement("div");
        container.classList.add("container-card-pokemon");

        const img = document.createElement("img");
        img.src = pokemon.sprites.other["official-artwork"].front_default;
        img.alt = pokemon.name;
        img.classList.add("container-img");

        const nombrePokemon = document.createElement("p");
        nombrePokemon.textContent = pokemon.name;
        nombrePokemon.classList.add("nombre-pokemon");

        const numberId = document.createElement("p");
        numberId.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
        numberId.classList.add("number-id");

        container.appendChild(img);
        container.appendChild(nombrePokemon);
        container.appendChild(numberId);

        LISTA_POKE.appendChild(container);

    });
}
