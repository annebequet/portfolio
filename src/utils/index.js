import { projectsAnimation } from "./projects.js";

// Switch that will select scripts to execute once a certain DOM part is loaded.

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