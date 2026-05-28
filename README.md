# PokeAPI

Una pequeña app web que muestra una lista de Pokémon usando la API pública de PokéAPI.

## Funcionalidades

- Carga un listado de Pokémon desde la API
- Busca Pokémon por nombre
- Filtra Pokémon por tipo
- Pagina el resultado para mostrar varios pokémon por página

## Estructura del proyecto

- `index.html` — página principal
- `style.css` — estilos básicos
- `src/` — código JavaScript
  - `api.js` — carga los datos desde la API
  - `buscarPokemon.js` — filtra por nombre
  - `filtroTipo.js` — filtra por tipo
  - `mostrarPokemon.js` — renderiza los Pokémon en el DOM
  - `paginacion.js` — controla la paginación
  - `eventos.js` — asocia eventos de usuario
  - `constantes.js` — referencias DOM
- `tests/` — pruebas unitarias con Jest

## Instalación

```bash
git clone https://github.com/Anderson-Mendoza/pokeapi.git
cd pokeapi
npm install
```

## Uso

Abre el archivo `index.html` en tu navegador o sirve el proyecto con un servidor local. Por ejemplo:

```bash
npx serve .
```

Luego visita `http://localhost:3000` (o el puerto que indique el servidor).

> Nota: el script `npm start` en `package.json` ejecuta `node src/index.js`, pero la aplicación está pensada para correr en el navegador desde `index.html`.

## Ejecutar pruebas

```bash
npm test
```

## Licencia

ISC
