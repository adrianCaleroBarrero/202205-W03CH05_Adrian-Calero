import { pokeCollect } from './urlPokes.js';
export const fetchPoke = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokeData = await response.json();
    return pokeData;
};
export const onePokemon = async () => {
    const https = await pokeCollect();
    const pokemonInfo = https.map(async (url) => {
        const response = await fetch(url);
        const pokemon = await response.json();
        return pokemon;
    });
    return pokemonInfo;
};
