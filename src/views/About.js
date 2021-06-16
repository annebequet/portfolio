import AbstractView from "./AbstractView.js";
import Projects from "./components/ProjectImage.js";
import dataProjects from "../data/data-projects.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async createProjectList(){
        // mapping over an array of promises : Promise.all() allow to wait for all of those promises to be completed
        const projectsList = await Promise.all(
            dataProjects.map(data =>  {
                // Create a new object for each project 
                const project = new Projects(data)
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
            <div id="about">
                
                <div id="about-me">
                    <h1>Hi, it's Anne</h1>
                    <p>A front-end developer</p>
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