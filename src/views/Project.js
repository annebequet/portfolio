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
            <div id="project">
                <h1>${project.name}</h1>
                <img src= "${project.img}" alt="${project.name}" />
                <div class="project__subcontainer">                
                    <div class="project__left">
                        <h2>About</h2>
                        <p class="project__description">${project.description}</p>
                    </div>
                    <div class="project__links">
                        <h2>Links</h2>
                        <div class="project__links-subcontainer">
                            <a class="nav__link" target="_blank" href="${project.link}">Site</a>
                            <p class="animated-arrow">→</p>
                        </div>
                        <div class="project__links-subcontainer">
                            <a class="nav__link" target="_blank" href="${project.git}">Git</a>
                            <p class="animated-arrow">→</p>
                        </div>
                    </div>
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