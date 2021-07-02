import AbstractView from "./AbstractView.js";

import { getParamFromUrl } from "../helper/navigation.js";
import { getProjectById } from "../helper/project.js";
import { getIdNumber } from "../helper/project.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Project");
    }

    async getHtml() {
        const projectId = getParamFromUrl();
        const project = getProjectById(projectId);

        if (project !== undefined)
        return `
            <div class="project">

                <div class="project__header">
                    <h1>${project.name}</h1>
                    <h3>${project.subtitle}</h3>  
                    <p class="picture-id" id="project-id">
                        ${getIdNumber(project.id)}
                    </p>                  
                </div>

                <div 
                    id="project-img__container"
                    style="
                        background-color:${project.imgDetailsBackgroundColor};
                    "
                >
                    ${project.imgDetailsPage.map((img) => 
                        `<img 
                            src= "${img.image}" 
                            alt="${project.name}" 
                            style="
                                height:${img.height};
                                width:${img.width};
                            "
                        />`
                    ).join('')}                               
                </div>

                <div class="project__subcontainer">                
                    <div class="project__left">
                        <h2>${project.status}</h2>
                        <p>${project.date}</p>
                        <h2 id="technologies-list-container">Technologies</h2>
                        <ul class="project__technologies">
                            ${project.technologies.map((techno) => `<li>[${techno}]</li>`).join('')}
                        </ul>
                    </div>                    
                    <div class="project__right">
                        <p class="project__description">${project.description}</p>
                    </div>
                </div>

                <div class="project__links">
                    ${project.links.map((item) => 
                        `<a 
                            class="effect-button project-button" 
                            target="_blank" 
                            href="${item.link}"
                        >
                            ${item.name}                          
                            <span class="animation-button"></span>
                        </a>`
                    ).join('')} 
                </div>
            </div>        
        `;
        else
        return `
            <div id="project">
                <h1>A bit ahead of time ? This project does not exist yet.</h1>
            </div>
        `;

    }
}