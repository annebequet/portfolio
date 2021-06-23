import AbstractView from "./AbstractView.js";

import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import mountain1 from "../assets/img/mountain1.png";
import mountain2 from "../assets/img/mountain2.png";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("footer");
    }

    async getHtml() {
        return `
            <div id="footer">
                <div id="footer-top-part">
                    <h2>Thank you !</h2>
                    <p>For browsing through my website</p>
                    <p>If you like it, drop me a line, I would love to hear from you</p>

                    <div class="social-medias">
                        <a target="_blank" class="social-medias__icons" href="https://www.linkedin.com/in/anne-bequet/">
                            <img src=${linkedin} alt="linkedin"/>
                        </a>
                        <a target="_blank" class="social-medias__icons" href="https://github.com/annebequet">
                            <img src=${github} alt="github"/>
                        </a>
                    </div>
                </div>

                <div id="footer-bottom-part">
                    <a id="my-email" HREF="mailto:a.bequet@live.fr">a.bequet@live.fr</a>                                 

                    <img src=${mountain1} alt="mountain" id="mountain-picture"></img>
                </div>

            </div>
        `;
    }
}