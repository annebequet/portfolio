import dataProjects from "../data/data-projects";

export const getProjectById = (projectId) => {
    const project = dataProjects.find((dataProject) => dataProject.id === projectId);
    return project;   
}