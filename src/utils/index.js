import { projectsAnimation } from "./projects.js";
import { parallax } from "./parallax.js";
import { changeTemplate } from "./aboutTemplates";

// Switch that will select scripts to execute once a certain DOM part is loaded.

export const helper = (view) => {
    switch (view) {
        case 'Projects':
            projectsAnimation.init();
            parallax();           
            break;
        case 'About':
            changeTemplate.init();
            break;
        case 'Project':
            break;
        default:
            return;
      }
}