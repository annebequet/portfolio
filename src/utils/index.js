import { projectsAnimation } from "./projects.js";
import { parallaxProjects } from "./parallax.js";
import { parallaxAbout } from "./parallax.js";
import { changeTemplate } from "./aboutTemplates";

// Switch that will select scripts to execute once a certain DOM part is loaded.

export const helper = (view) => {
    switch (view) {
        case 'Projects':
            projectsAnimation.init();
            parallaxProjects();            
            break;
        case 'About':
            parallaxAbout();
            changeTemplate.init();
            break;
        case 'Project':
            break;
        default:
            return;
      }
}