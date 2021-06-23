
//import Rellax from "rellax";
import Parallax from 'parallax-js'

export const parallax = () => {    
    //var rellax = new Rellax('.rellax'); 
    var scene = document.getElementById('scene');
    console.log(scene)
    var parallaxInstance = new Parallax(scene);
}