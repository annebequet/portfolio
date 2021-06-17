import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <div id="contact">
                <h1>Anne who ?</h1>
            </div>
        `;
    }
}