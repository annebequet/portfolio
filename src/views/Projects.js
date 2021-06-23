import AbstractView from "./AbstractView.js";
import ProjectImage from "./components/ProjectImage.js";
import dataProjects from "../data/data-projects.js";
import mountain from "../assets/img/mountain2.png";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    async createProjectList(){
        // mapping over an array of promises : Promise.all() allow to wait for all of those promises to be completed
        const projectsList = await Promise.all(
            dataProjects.map(data =>  {
                // Create a new object for each project 
                const project = new ProjectImage(data)
                // Return the html template
                const view =project.getHtml();
                return view;
            })
        )
        return projectsList;
    }

    async getHtml() {     
        
       const projectsList = await this.createProjectList();

        return `
            <div id="projects-container">
                
                <div id="about-me">   
                
                    <div id="about-img-container">
                        <div data-depth="0.7" id="about-circle"></div>
                        <img src=${mountain} alt="mountain" id="about-img" data-depth="0.2">
                    </div>
                   
                    <div id="about-introduction" data-depth="0.6">
                        <h1>Hi, I'm Anne</h1>
                        <p>Nice to meet you.</p>
                        <p>I am a front-end developer, currently working as a freelance,
                        <p>and experiencing with creative coding (as well as pumpkin soup).</p>
                        <p>This is my first portfolio, feel free to explore and don't hesitate to drop me a line</p>
                        <p>I'm open to job offers or any kind of feedback !</p>
                    </div>

                    <div id="about-guide">
                        <h2 id="pictures-to-move__title">Projects</h2>                        
                        <div id="arrow-bottom"></div>
                    </div>

                    <div id="square-div">                   
                    </div>
                </div>

                <div id="pictures-to-move">
                    ${projectsList.map((projectInfos) => {
                        // return the html of each project, minus the coma at the end (from the array)
                        return projectInfos;
                    }).join('')
                    }
                </div>
            </div>
        `;
    }
    
}