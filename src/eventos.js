import { INPUT_BUSCAR, BTN_ADELANTE, BTN_ATRAS, BTN_BUSCAR } from "./constantes.js";
import { buscarPokemon } from "./buscarPokemon.js";
import { retrocederPagina, avanzarPagina } from "./paginacion.js";


export function eventoInput() {
    INPUT_BUSCAR.addEventListener("input", buscarPokemon);
}

export function eventoBtnBuscar() {
    BTN_BUSCAR.addEventListener("click", buscarPokemon);
}

export function eventoBtnAtras() {
    BTN_ATRAS.addEventListener("click", retrocederPagina);
}

export function eventoBtnAdelante() {
    BTN_ADELANTE.addEventListener("click", avanzarPagina);
}