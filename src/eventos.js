import { avanzarPagina, retrocederPagina, obtenerPaginasTotales } from './paginacion.js';
import { BTN_BUSCAR, INPUT_BUSCAR, BTN_ATRAS, BTN_ADELANTE } from './constantes.js';
import { buscarPokemon } from './buscarPokemon.js';


export function gestionarBotones() {
    // Comprobar que no se pueda retroceder
    if (paginaActual === 1) {
        BTN_ATRAS.setAttribute("disabled", true);
    } else {
        BTN_ATRAS.removeAttribute("disabled");
    }

    // Comprobar que no se pueda avanzar
    if (paginaActual === obtenerPaginasTotales()) {
        BTN_ADELANTE.setAttribute("disabled", true);
    } else {
        BTN_ADELANTE.removeAttribute("disabled");
    }
}


// Eventos
INPUT_BUSCAR.addEventListener("input", buscarPokemon);
BTN_BUSCAR.addEventListener("click", buscarPokemon);

BTN_ATRAS.addEventListener("click", retrocederPagina);
BTN_ADELANTE.addEventListener("click", avanzarPagina);
