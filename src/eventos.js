import { BTN_ADELANTE, BTN_ATRAS } from "./constantes.js";
import { paginaActual, obtenerPaginasTotales } from "./paginacion.js";

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
