
//import Rellax from "rellax";
import Parallax from 'parallax-js'

import simpleParallax from 'simple-parallax-js';

export const rellax = () => {    
    //var rellax = new Rellax('.rellax'); 
    
   const imgContainer = document.querySelector("#about-img-container");   
    const parallaxInstance = new Parallax(imgContainer);

    const projectArrowContainer = document.querySelector("#project-arrow"); 
    const parallaxInstance1 = new Parallax(projectArrowContainer);

    /*const square = document.querySelector("#square-div");
    new simpleParallax(square,{
        orientation: 'left',
    });*/
}
