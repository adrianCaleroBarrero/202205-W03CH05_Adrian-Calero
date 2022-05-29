import { Component } from '../components/component.js';
export class PokeClass extends Component {
    item;
    constructor(selector, item) {
        super();
        this.item = item;
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
        <button id="${this.item.name}">👁️</button>
        </div>
        </li>`;
        return html;
    }
}
