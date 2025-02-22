const URL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
const LISTA_POKE = document.getElementById("todos");


async function fecthPokemon() {
    try {
        fetch(URL)
            .then(res => res.json())
            .then(data => {

                const arr = data.results
                console.log(arr);

                arr.forEach(async (poke) => {

                    const pokemonDetails = await fetch(poke.url).then(res => res.json());

                    let container = document.createElement("div");
                    container.classList.add("container-card-pokemon");

                    let img = document.createElement("img");
                    img.src = pokemonDetails.sprites.other["official-artwork"].front_default;
                    img.alt = pokemonDetails.name
                    img.classList.add("container-img");

                    let p = document.createElement("p");
                    p.textContent = pokemonDetails.name;

                    let numberId = document.createElement("p");
                    numberId.textContent = `#${pokemonDetails.id.toString().padStart(3, 0)}`;

                    container.appendChild(img);
                    container.appendChild(p);
                    container.appendChild(numberId);

                    LISTA_POKE.appendChild(container);
                });
            })

    } catch {
        console.error("No se han cargado los recursos de la API");
    }
}


fecthPokemon();



