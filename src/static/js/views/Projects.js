import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }
    
    async getHtml() {
        return `
            <a href="/project/${this.params.id}" class="nav__link" data-link class="pictures-to-move__collection" id="pictures-to-move__${this.params.id}">
                <img src= "${this.params.img}" alt="${this.params.name}"/>
             </a>
        `;
    }
}