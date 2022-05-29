import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
const appPoke = async () => {
    new Header('slot.header');
    new Footer('slot.footer');
};
(() => document.addEventListener('DOMContentLoaded', appPoke))();
