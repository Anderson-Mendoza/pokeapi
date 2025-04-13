import { INPUT_BUSCAR, BTN_ADELANTE, BTN_ATRAS, BTN_BUSCAR } from "./constantes.js";
import { buscarPokemon } from "./buscarPokemon.js";
import { retrocederPagina, avanzarPagina } from "./paginacion.js";


INPUT_BUSCAR.addEventListener("input", () => {

    buscarPokemon()
}
);
BTN_BUSCAR.addEventListener("click", () => {
    buscarPokemon()
    console.log("haz hecho click")
}

);

BTN_ATRAS.addEventListener("click", retrocederPagina);
BTN_ADELANTE.addEventListener("click", avanzarPagina);

