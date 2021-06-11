// JS entry point that handles our router

// regex that will convert the route 
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// ************************ router ***********************

const router = async () => {
    const routes = [
        { path: "/" },
        { path: "/about" },
        { path: "/projects" },
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

    console.log(match)
}

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

window.addEventListener('popstate', router)



