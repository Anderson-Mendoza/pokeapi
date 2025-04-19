import { fetchPokemon } from "./api.js";
import { eventoBtnAdelante, eventoBtnAtras, eventoBtnBuscar, eventoInput } from "./eventos.js";

fetchPokemon();

document.addEventListener("DOMContentLoaded", eventoInput);
document.addEventListener("DOMContentLoaded", eventoBtnBuscar);
document.addEventListener("DOMContentLoaded", eventoBtnAtras);
document.addEventListener("DOMContentLoaded", eventoBtnAdelante);
