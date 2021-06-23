
//import Rellax from "rellax";

import simpleParallax from 'simple-parallax-js';

export const rellax = () => {    
    //var rellax = new Rellax('.rellax'); 
    
   const img = document.querySelector("#about-img");
    new simpleParallax(img,{
        orientation: 'right',
    });

    const square = document.querySelector("#square-div");
    new simpleParallax(square,{
        orientation: 'left',
    });
}
