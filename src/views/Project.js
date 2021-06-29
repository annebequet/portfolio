import AbstractView from "./AbstractView.js";

import { getParamFromUrl } from "../helper/navigation.js";
import { getProjectById } from "../helper/project.js";

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
                </div>

                <img src= "${project.img}" alt="${project.name}" />

                <div class="project__subcontainer">                
                    <div class="project__left">
                        <h2>${project.status}<h2>
                        <p>${project.date}</p>
                    </div>                    
                    <div class="project__right>
                        <p class="project__description">${project.description}</p>
                        <div>
                        <ul class="project__technologies">
                            ${project.technologies.map((techno) => `<li>[${techno}]</li>`).join('')}
                        </ul>
                    </div>
                    </div>
                </div>

                <div class="project__links">
                    <a class="effect-button project-button" target="_blank" href="${project.link}">
                        Site                            
                        <span class="animation-button"></span>
                    </a>
                    <a class="effect-button project-button"  target="_blank" href="${project.git}">
                        Git                            
                        <span class="animation-button"></span>
                    </a>          
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