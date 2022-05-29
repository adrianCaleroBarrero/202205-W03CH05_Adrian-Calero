import { detailPokemon } from './addAndRemove.js';
import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
const detailApp = async () => {
    new Header('slot.header');
    new Footer('slot.footer');
    document
        .querySelectorAll('.detailpokemons')
        .forEach((item) => item.addEventListener('click', detailPokemon));
};
(() => document.addEventListener('DOMContentLoaded', detailApp))();
