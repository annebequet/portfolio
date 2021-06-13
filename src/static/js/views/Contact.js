import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
            <div id="contact">
                <h1>Send me a message</h1>
            </div>
        `;
    }
}