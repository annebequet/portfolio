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
                    <div id="hard-skills-container">
                        <h2>Hard skills</h2>
                        <ul>Frontend</ul>
                        <li>Figma</li>
                        <li>HTML5</li>
                        <li>CSS3 - Sass - Bootstrap</li>
                        <li>Javascript</li>
                        <li>ReactJs - React Native - Redux</li>
                        <ul>Backend (work in progress)</ul>
                        <li>PHP5</li>
                        <li>SQL</li>
                        <ul>Programming paradigms</ul>
                        <li>OOP - functionnal programming</li>
                        <ul>Tools</ul>
                        <li>Git</li>
                        <li>Linux - Windows</li>
                        <li>VSC</li>
                        <ul>Approach</ul>
                        <li>I'm really passionate and eager to learn.</li>
                        <li>I'm really passionate and eager to learn.</li>
                        <li>I'm really passionate and eager to learn.</li>
                        <li>I
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