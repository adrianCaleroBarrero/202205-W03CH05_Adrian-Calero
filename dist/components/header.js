import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        return `
        <header>
            <a href="index.html">Home</a>
            <img src="pngwing.com.png" alt="Pokemon" />
            <a href="">My Pokemons </a>
        </header>
        `;
    }
}
