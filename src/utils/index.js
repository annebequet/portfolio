import { projectsAnimation } from "./projects.js";
import { scrollingAnimation } from "./about.js";

// Switch that will select scripts to execute once a certain DOM part is loaded.

export const helper = (view) => {
    switch (view) {
        case 'Projects':
            projectsAnimation.init();
            break;
        case 'About':
            scrollingAnimation.init();
            break;
        case 'Project':
            break;
        default:
            return;
      }
}