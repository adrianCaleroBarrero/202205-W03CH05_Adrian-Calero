import { PokeClass } from './models/pokeClass.js';
import { onePokemon } from './server/pokeApi.js';
export const turnBack = async () => {
    const list = await onePokemon();
    let pokemons = Promise.all(list);
    (await pokemons).forEach((item) => {
        new PokeClass('.pokedex', item);
    });
};
