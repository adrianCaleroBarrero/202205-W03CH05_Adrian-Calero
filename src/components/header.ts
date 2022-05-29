import { iComponent } from '../interface/pokes.js';
import { Component } from './component.js';

export class Header extends Component implements iComponent {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        return `
        <header>
            <a href="index.html">Home</a>
            <img src="../pngwing.com.png" alt="Pokemon" />
            <a href="myPokemons.html">My Pokemons </a>
        </header>
        `;
    }
}
