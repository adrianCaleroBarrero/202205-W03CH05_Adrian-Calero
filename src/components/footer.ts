import { iComponent } from '../interface/pokes';
import { Component } from './component.js';

export class Footer extends Component implements iComponent {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        return `
        <footer>
            <p>®️ISDI Coders</p>
            <p>Github: https://github.com/adrianCaleroBarrero</p>
        </footer>
        `;
    }
}
