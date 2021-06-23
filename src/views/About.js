import AbstractView from "./AbstractView.js";
import whale from "../assets/img/whale.png";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <div id="about">
                <div class="about-section">Anne who ?</div>
                <div class="about-section">Cacahuète</div>
                <div class="about-section">Blue sparkle</div>
                <div class="about-section">Some like it hot</div>
                <div class="about-section">Dance like a kitty</div>
            </div>
        `;
    }
}