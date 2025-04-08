import { buscarPokemon } from "./buscarPokemon.js";
import { avanzarPagina, retrocederPagina } from "./paginacion.js";

const LISTA_POKE = document.getElementById("todos");
const BTN_BUSCAR = document.getElementById("btn-buscar");
const INPUT_BUSCAR = document.getElementById("input-buscar");
const INFO_PAGINA = document.getElementById('informacion-pagina');
const BTN_ATRAS = document.getElementById("atras");
const BTN_ADELANTE = document.getElementById("siguiente");

// Eventos
INPUT_BUSCAR.addEventListener("input", buscarPokemon);
BTN_BUSCAR.addEventListener("click", buscarPokemon);

BTN_ATRAS.addEventListener("click", retrocederPagina);
BTN_ADELANTE.addEventListener("click", avanzarPagina);

export {
    LISTA_POKE,
    BTN_BUSCAR,
    INPUT_BUSCAR,
    INFO_PAGINA,
    BTN_ATRAS,
    BTN_ADELANTE
};