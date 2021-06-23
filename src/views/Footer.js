import AbstractView from "./AbstractView.js";

import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import mountain1 from "../assets/img/mountain2.png";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("footer");
    }

    async getHtml() {
        return `
            <div id="footer">                
                <div id="footer-top-part">
                </div>

                <div id="footer-middle-part">
                    <div>
                        <h2>Thank you -</h2>
                        <p>If you like it, drop me a line, I would love to hear from you</p>
                    </div>

                    <div class="social-medias">
                        <h2>Follow me -</h2>
                        <a target="_blank" class="social-medias__icons" href="https://www.linkedin.com/in/anne-bequet/">
                            <img src=${linkedin} alt="linkedin"/>
                        </a>
                        <a target="_blank" class="social-medias__icons" href="https://github.com/annebequet">
                            <img src=${github} alt="github"/>
                        </a>
                    </div>

                    <div>
                        <h2>Contact me -</h2>
                        <a id="my-email" HREF="mailto:a.bequet@live.fr">a.bequet@live.fr</a>    
                    </div>

                    <a id="arrow-to-top" href="#header">
                        <div class="center-con">
        
                            <div class="round">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>        
                        </div>
                    </a>

                </div>

                <div id="footer-bottom-part">
                    <p>Copyright 2021</p>
                    <p>Coded and designed by Anne Bequet</p>                      
                </div>

            </div>
        `;
    }
}