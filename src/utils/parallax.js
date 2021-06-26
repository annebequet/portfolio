
//import Rellax from "rellax";
import Parallax from 'parallax-js'

export const parallax = () => {    
    const aboutContainer = document.querySelector("#container-parallax"); 
    const parallaxInstance2 = new Parallax(aboutContainer);


    const projectArrowContainer = document.querySelector("#parallax1"); 
    const parallaxInstance1 = new Parallax(projectArrowContainer);

    const mountainImgContainer = document.querySelector("#img-container-introduction"); 
    const parallaxInstance3 = new Parallax(mountainImgContainer);
}

