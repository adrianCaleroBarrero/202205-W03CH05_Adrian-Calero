import { Component } from '../components/component.js';
import { iPokemons } from '../interface/pokes.js';

export class PokeClass extends Component {
    constructor(selector: string, public item: iPokemons) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let html = ``;
        html += `<li>
        <img src="${this.item.sprites.other.home.front_default}" alt="${this.item.name}">
        <p>${this.item.order} - ${this.item.name}</p>
        <div class="buttons">
        <button id="${this.item.order}">➕</button>
        <button id="${this.item.name}">👁️</button>
        </div>
        </li>`;
        return html;
    }
}
