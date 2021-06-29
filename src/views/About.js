import AbstractView from "./AbstractView.js";
import Journey from "./components/Journey";
import whale from "../assets/img/whale.png";

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
                    <a class="about-nav-link about-nav-link-active effect-button">
                        Journey                            
                        <span class="animation-button"></span>
                    </a>
                    <a class="about-nav-link effect-button">
                        Skills                            
                        <span class="animation-button"></span>
                    </a>
                </navbar>
               
            </div>
        `;
    }
}