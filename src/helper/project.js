import dataProjects from "../data/data-projects";

export const getProjectById = (projectId) => {
    const project = dataProjects.find((dataProject) => dataProject.id === projectId);
    return project;   
}

export const getIdNumber = (id) => {
    if (id.toString().length === 1) {
        return `0${id}`;
    }
    else {
        return id;
    }
}