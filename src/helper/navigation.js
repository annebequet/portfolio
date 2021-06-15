// regex that will convert the route 
export const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// getParams of the url
export const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};


export const getParamFromUrl = () => {
    const url = window.location.href;
    const projectId = url.slice(url.length -1);
    return parseInt(projectId);
}