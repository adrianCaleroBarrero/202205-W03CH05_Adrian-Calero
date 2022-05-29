import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
const detailApp = async () => {
    new Header('slot.header');
    new Footer('slot.footer');
};
(() => document.addEventListener('DOMContentLoaded', detailApp))();
