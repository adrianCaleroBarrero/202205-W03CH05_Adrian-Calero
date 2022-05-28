import { fetchPoke } from './pokeApi.js';
export const pokeCollect = async () => {
    const urlPokes = await fetchPoke();
    const urls = urlPokes.results.map((item) => {
        return item.url;
    });
    return urls;
};
