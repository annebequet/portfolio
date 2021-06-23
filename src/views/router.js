// JS entry point that handles our router
import About from "./About.js";
import Project from "./Project.js";
import Projects from "./Projects.js";
import Footer from "./Footer.js";

//helpers

import { helper } from "../utils/index.js";
import { pathToRegex } from "../helper/navigation.js";
import { getParams } from "../helper/navigation.js";
import { activeNavBar} from "../helper/navigation.js";



// ************************ router ***********************

export const router = async () => {
    const routes = [
        { 
            path: "/",
            view: Projects,
            name:'Projects',
        },
        { 
            path: "/about",
            view: About,
            name:'About',
        },
        { 
            path: "/project/:id",
            view: Project,
            name:'Project',
        },
    ];
    
    // test each route to find a match, stored in the variale 'result'. 
    const potentialMatches = routes.map(route => {
        return {
            route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    // Route not found - return first route 
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    //Append the correct view to the div 'app'.
    
    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    // When the modules are loaded, we load the helpers needed for that view
    helper(match.route.name);

    // scroll to the top of the page
    window.scrollTo(0,0);
    
    // Bold style on the active link of the navbar
    activeNavBar();      
}


// *********************** Navigation *************************

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

export const navigate = () => {
    //using bubbling by attaching to the node parent the event listener, so that if a nav element is added later, the event will still apply
    document.body.addEventListener("click", function(e) {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })    
    /* Document has loaded -  run the router! */
    router();
}



// ************************ footer ***********************

export const getFooter = async () => {
    //Append Footer
    const footerView = new Footer;
    const footerContainer= document.querySelector('#footer-container');
    footerContainer. innerHTML = await footerView.getHtml();
}






