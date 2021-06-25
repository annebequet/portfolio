import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Skills");
    }    

    async getHtml() {        

        return `
            <div id="skills">
                <div id="skills-left-container">                
                    <div  class="skills-subcontainer" id="hard-skills-container">
                        <h2>Hard skills</h2>
                        <p>Javascript - ReactJs - React Native - PHP</p>
                        <p>HTML5 - CSS3 - Sass</p>
                        <p>Architecture POO, MVC</p>
                    </div>
                    <div class="skills-subcontainer" id="plus-skills-container">
                        <div></div>
                    </div>
                </div>

                <div id="about-section-info">
                    <p class="about-section--title">
                        Skills
                    </p>
                </div>

                
                <div id="skills-right-container">
                    <div class="skills-subcontainer" id="goals-skills-container">
                        <div></div>
                    </div>

                    <div class="skills-subcontainer" id="random-skills-container">
                        <h2>Random stuff</h2>
                        <p>Whales</p>
                        <p>Languages</p>
                        <p>Weird Halloween obsession</p>
                        <p>Reading</p>
                    </div>
                </div>

                
            </div>
        `;
    }
}