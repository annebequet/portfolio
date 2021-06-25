
import Journey from "../views/components/Journey";
import Skills from "../views/components/Skills";
import { parallaxAbout } from "./parallax.js";

export const changeTemplate = {
    init: function () {
        const aboutLinks = document.querySelectorAll(".about-nav--link");
        aboutLinks.forEach((link) => {
            link.addEventListener('click', this.changeTemplate)
        })
    },

    changeTemplate: async function (event) {
        // navbar active change style
        document.querySelectorAll(".about-nav-link-click").forEach((navItem) => {
            navItem.classList.remove("about-nav-link-active");
        })
        event.target.classList.add("about-nav-link-active");

        //display correct template
        if(event.target.innerText === "Skills") {

            //change navbar style           
            event.target.classList.toggle("active-skills");

            //load template
            const template = new Skills
            const view = await template.getHtml();

            const container = document.querySelector("#render-template");
            container.innerHTML = view;
            parallaxAbout();
        }

        if(event.target.innerText === "Journey") {
            const template = new Journey
            const view = await template.getHtml();

            const container = document.querySelector("#render-template");
            container.innerHTML = view;
            parallaxAbout();
        }
    }
}