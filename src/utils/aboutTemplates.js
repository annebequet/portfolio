
import Journey from "../views/components/Journey";
import Skills from "../views/components/Skills";

export const changeTemplate = {
    init: function () {
        const aboutLinks = document.querySelectorAll(".about-nav-link");
        aboutLinks.forEach((link) => {
            link.addEventListener('click', this.changeTemplate)
        })
    },

    changeTemplate: async function (event) {
        // navbar active change style
        document.querySelectorAll(".about-nav-link").forEach((navItem) => {
            navItem.classList.remove("about-nav-link-active");
        })
        event.target.classList.add("about-nav-link-active");

        //display correct template
        if(event.target.innerText === "SKILLS") {

            //change navbar style           
            event.target.classList.toggle("active-skills");

            //load template
            const template = new Skills
            const view = await template.getHtml();

            const container = document.querySelector("#render-template");
            container.innerHTML = view;
        }

        if(event.target.innerText === "JOURNEY") {
            const template = new Journey
            const view = await template.getHtml();

            const container = document.querySelector("#render-template");
            container.innerHTML = view;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        
    }
}