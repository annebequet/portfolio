import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <div class="about">
                <h1>Hi, it's Anne</h1>
                <p>A front-end developer</p>

                <div class="pictures-to-move">
                    
                    <a href="/projects/1" class="nav__link" data-link>
                        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LstWy2evcpnrOb-YZ4dH5diX3cQzwQOBGQ&usqp=CAU" alt="mountain photo" class="pictures-to-move__collection" id="pictures-to-move__1" />
                    </a>

                    
                    <a href="/projects/2" class="nav__link" data-link>
                        <img src="https://lh3.googleusercontent.com/proxy/9Nfqnm8qx5b3l5eL2r5IFel9z-Kl14UmI9V5zno0j9Zjlyy4dJ7sxsRXoLIZINwcnVRTzJyzjLnuA4wVccjHlqFyGs7NKP2Th_mQVzGpOlpxNDgj08suBpz3eEkFAsW048CZervIPYF0yBPicoF_9rgTdHge0QdWIWFFXkB3bw" alt="mountain photo" class="pictures-to-move__collection"  id="pictures-to-move__2" />
                    </a>

                    
                    <a href="/projects/3" class="nav__link" data-link>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52ulEMl663AQ5ec_x99_BCKIsC_CzpulP5g&usqp=CAU" alt="mountain photo" class="pictures-to-move__collection"   id="pictures-to-move__4"/>
                    </a>
                </div>
            </div>
        `;
    }
}