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

                <div id="front-page-introduction">

                    <div id="about-introduction">
                        <div>
                            <h1>Hi, I'm Anne</h1>
                            <p>Nice to meet you.</p>
                            <p>I am a curious and creative front-end developer</p>
                        </div>
                    </div>

                    <div id="about-me">   

                        <div id="container-parallax">    
                            <div id="parallax1">            
                                <div class="square-div" data-depth="-0.5" >
                                </div>

                                <div id="parallax-circle" data-depth="-0.8">
                                </div> 
                            </div>

                            <div id="img-container-introduction">
                                <img data-depth="0.2" src=${mountain} id="parallax-img" />
                            </div>
                        </div> 
                        
                        
                        <div id="text-line-container">
                            <p id="text-line"> 
                                Projects
                            </p>
                        </div>
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