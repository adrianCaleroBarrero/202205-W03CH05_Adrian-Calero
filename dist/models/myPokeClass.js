import { Component } from '../components/component.js';
export class MyPokeClass extends Component {
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
