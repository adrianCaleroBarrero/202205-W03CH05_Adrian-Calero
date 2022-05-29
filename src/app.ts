import { addPokemon } from './add.js';
import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { PokeClass } from './models/pokeClass.js';
import { onePokemon } from './server/pokeApi.js';

const app = async () => {
    new Header('slot.header');
    new Footer('slot.footer');

    const list = await onePokemon();
    let pokemons = Promise.all(list);
    (await pokemons).forEach((item) => {
        new PokeClass('.pokedex', item);
    });

    document
        .querySelectorAll('.addPokemons')
        .forEach((item) => item.addEventListener('click', addPokemon));
};
(() => document.addEventListener('DOMContentLoaded', app))();
