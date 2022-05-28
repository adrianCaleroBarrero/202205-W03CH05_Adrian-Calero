import { iPoke } from '../interface/pokes.js';
import { fetchPoke } from './pokeApi.js';

export const pokeCollect = async () => {
    const urlPokes = await fetchPoke();
    const urls = urlPokes.results.map((item: iPoke) => {
        return item.url;
    });
    return urls;
};
