import AbstractView from "./AbstractView.js";
import Journey from "./components/Journey";
import whale from "../assets/img/whale.png";
import mountain from "../assets/img/mountain1.png";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }    

    async getHtml() {
        const view = new Journey;
        const template = await view.getHtml();

        return `
            <div id="about-container">  
                <div id="render-template">
                    ${template}
               </div>    
               
                <navbar id="navbar-about">
                    <p class="about-nav--link" id="journey-link"> 
                        <a data-text="Journey" class=" about-nav-link-click about-nav-link-active">
                            Journey
                        </a>
                    </p>
                    <p class="about-nav--link" id="skills-link">
                        <a data-text="Skills" class="about-nav-link-click">
                            Skills
                        </a>
                    </p>
                </navbar>
               
            </div>
        `;
    }
}