import { removePokemon } from './addAndRemove.js';
import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { MyPokeClass } from './models/myPokeClass.js';
import { fetchMyPoke } from './server/myCollection.js';
const appPoke = async () => {
    new Header('slot.header');
    new Footer('slot.footer');
    const list = await fetchMyPoke();
    let pokemons = Promise.all(list);
    (await pokemons).forEach((item) => {
        new MyPokeClass('.pokedex', item);
    });
    document
        .querySelectorAll('.removePokemons')
        .forEach((item) => item.addEventListener('click', removePokemon));
};
(() => document.addEventListener('DOMContentLoaded', appPoke))();
