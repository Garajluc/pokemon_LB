export function fetchPokemon(id) {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(response => response.json())
        .then(pokemonDetail => {
            const pokemonUrl = pokemonDetail.results[id].url;
            const pokemonPromises =
                fetch(pokemonUrl)
                    .then(response => response.json());

            return pokemonPromises;
        });
}