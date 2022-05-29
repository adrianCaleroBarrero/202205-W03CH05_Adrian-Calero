import { Component } from './component.js';
export class Footer extends Component {
    constructor(selector) {
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
