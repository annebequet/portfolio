// JS entry point that handles our router
import About from "./views/About.js";
import Project from "./views/Project.js";
import Contact from "./views/Contact.js";

// regex that will convert the route 
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

// ************************ router ***********************

const router = async () => {
    const routes = [
        { 
            path: "/",
            view: About,
        },
        { 
            path: "/project/:id",
            view: Project,
        },
        { 
            path: "/contact",
            view: Contact,
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
}

window.addEventListener('popstate', router)

// *********************** Navigation *************************

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    /* Document has loaded -  run the router! */
    router();
});




