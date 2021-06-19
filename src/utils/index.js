import { projectsAnimation } from "./projects.js";
import { scrollingAnimation } from "./about.js";
import { setFooterHeaderColor } from "./footerColor.js";

// Switch that will select scripts to execute once a certain DOM part is loaded.

export const helper = (view) => {
    switch (view) {
        case 'Projects':
            projectsAnimation.init();
            setFooterHeaderColor('white');
            break;
        case 'About':
            scrollingAnimation.init();
            setFooterHeaderColor('white');
            break;
        case 'Project':
            setFooterHeaderColor('white');
            break;
        case 'Contact':
            setFooterHeaderColor('var(--background-color)');
            break;
        default:
            return;
      }
}