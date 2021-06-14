import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }
    
    async getHtml() {
        return `
            <div id="pictures-to-move__${this.params.id}" class="pictures-to-move__collection" >
            <a href="/project/${this.params.id}" class="nav__link" data-link>
                <img src= "${this.params.img}" alt="${this.params.name}"/>
             </a>
        `;
    }
}