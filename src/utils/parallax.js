
//import Rellax from "rellax";
import Parallax from 'parallax-js'

export const parallaxProjects = () => {    
   const imgContainer = document.querySelector("#about-img-container");   
    const parallaxInstance = new Parallax(imgContainer);

    const projectArrowContainer = document.querySelector("#project-arrow"); 
    const parallaxInstance1 = new Parallax(projectArrowContainer);
}

export const parallaxAbout = () => {    
    const aboutContainer = document.querySelector("#about-container-parallax"); 
    const parallaxInstance2 = new Parallax(aboutContainer);
}
