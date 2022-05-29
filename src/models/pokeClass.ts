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
        <p>${this.item.id} - ${this.item.name}</p>
        <div class="buttons">
        <button class="addPokemons" id="${this.item.id}">➕</button>
        <button class="detailpokemons" id="${this.item.name}">👁️</button>
        </div>
        </li>`;

        return html;
    }
}
