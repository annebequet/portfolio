import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Project");
    }

    async getHtml() {
        return `
            <div id
            ="project">
                <h1>Detailed project</h1>
            </div>
        `;
    }
}