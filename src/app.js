import { router } from "./views/router.js";
import { navigate } from "./views/router.js";

import 'regenerator-runtime/runtime';

import "./styles/home.css";
import "./styles/projectImages.css";

document.addEventListener("DOMContentLoaded", navigate);
// Suscribe router to changes of history
window.addEventListener('popstate', router);

var oldHref = document.location.href;

window.onload = function() {
    console.log('hi');

    var
         bodyList = document.querySelector("body")

        ,observer = new MutationObserver(function(mutations) {

            mutations.forEach(function(mutation) {

                if (oldHref != document.location.href) {

                    oldHref = document.location.href;
                    console.log(oldHref)
                    router();

                    /* Changed ! your code here */

                }

            });

        });

    var config = {
        childList: true,
        subtree: true
    };

    observer.observe(bodyList, config);

};