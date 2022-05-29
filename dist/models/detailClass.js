import { Component } from '../components/component.js';
export class DetailClass extends Component {
    item;
    constructor(selector, item) {
        super();
        this.item = item;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let html = ``;
        html += `
        <li class="retro">
        <img class="image__detail" src="${this.item.sprites}" alt="${this.item.name}">
        <div class="details">
            <p>Number: ${this.item.id}</p>
            <p>Name: ${this.item.name}</p>
            <p>Height: ${this.item.height}</p>
            <p>Weight: ${this.item.weight}</p>
            
        </div>
        
        
        </li>`;
        return html;
    }
}
