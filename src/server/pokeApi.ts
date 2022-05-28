import { pokeCollect } from './urlPokes.js';

export const fetchPoke = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokeData = await response.json();
    return pokeData;
};

export const onePokemon = async (urls: Promise<string[]>) => {
    const response = await urls;
    console.log(response);
};

onePokemon(pokeCollect(fetchPoke()));
