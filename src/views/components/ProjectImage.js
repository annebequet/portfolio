import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }
    
    async getHtml() {
        return `
            <div class="picture-container" id="picture-container__${this.params.id}">
                <img src= "${this.params.img}" alt="${this.params.name}" id="pictures-to-move__${this.params.id}" class="pictures-to-move__collection"/>
                <a href="/project/${this.params.id}" class="nav__link" data-link>
                    ${this.params.name}
                </a>
            </div>
        `;
    }
}