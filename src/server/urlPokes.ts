import { iCollect, iPoke } from '../interface/pokes.js';

export const pokeCollect = async (poke: Promise<iCollect>) => {
    const urlPokes = await poke;
    const urls = urlPokes.results.map((item: iPoke) => {
        return item.url;
    });
    return urls;
};
