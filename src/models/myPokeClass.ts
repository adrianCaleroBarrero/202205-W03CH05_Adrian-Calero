import { Component } from '../components/component.js';
import { iPokemons } from '../interface/pokes.js';

export class MyPokeClass extends Component {
    constructor(selector: string, public item: iPokemons) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let html = ``;
        html += `<li>
        <img src="${this.item.sprites}" alt="${this.item.name}">
        <p>${this.item.id} - ${this.item.name}</p>
        <div class="buttons">
        <button class="removePokemons" id="${this.item.id}">➖</button>
        <button id="${this.item.name}">👁️</button>
        </div>
        </li>`;

        return html;
    }
}
