import { pokeCollect } from './urlPokes.js';
let counter = 15;
let currentPage = 0;
export const nextPokes = () => {
    currentPage += 15;
    counter += 15;
    fetchPoke();
};
document.querySelector('#next')?.addEventListener('click', () => {
    nextPokes();
});
export const fetchPoke = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${currentPage}&limit=${counter}`);
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
