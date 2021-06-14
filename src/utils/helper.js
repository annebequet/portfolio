import { projectsAnimation } from "./projects.js";

export const helper = (view) => {
    switch (view) {
        case 'About':
            projectsAnimation.init();
            break;
        case 'Project':
            break;
        case 'Contact':
            break;
        default:
            return;
      }
}