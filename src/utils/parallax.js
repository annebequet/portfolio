
//import Rellax from "rellax";
import Parallax from 'parallax-js'

import simpleParallax from 'simple-parallax-js';

export const rellax = () => {    
    //var rellax = new Rellax('.rellax'); 
    
   const imgContainer = document.querySelector("#about-img-container");
   
    var parallaxInstance = new Parallax(imgContainer);

    const square = document.querySelector("#square-div");
    new simpleParallax(square,{
        orientation: 'left',
    });
}
