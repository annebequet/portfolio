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
                <h1>Detailed project ${project.id}</h1>
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