import { projectsAnimation } from "./projects.js";
import { rellax } from "./parallax.js";

// Switch that will select scripts to execute once a certain DOM part is loaded.

export const helper = (view) => {
    switch (view) {
        case 'Projects':
            projectsAnimation.init();
            rellax();            
            break;
        case 'About':
            //parallax();
            break;
        case 'Project':
            break;
        default:
            return;
      }
}