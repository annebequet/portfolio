import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    async getHtml() {
        return `
            <div class="projects">
                <h1>Detailed project</h1>
            </div>
        `;
    }
}