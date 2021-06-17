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

                <div class="picture-container__informations" id="picture-container__informations__${this.params.id}">
                    <h3>${this.params.name}</h3>
                    <p>${this.params.subtitle}</p>
                    <a class="nav__link" href="/project/${this.params.id}" class="nav__link" data-link>
                        Check out more
                    </a>
                </div>
                
            </div>
        `;
    }
}