import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Journey");
    }    

    async getHtml() {
        return `
            <div id="journey">
                
                <div id="journey-timeline-container">
                    <h2>Travel through time</h2>
                    
                    <div class="work-experience">
                        <p class="work-time-frame">
                            April-May 2021
                        </p>
                        <p class="work-position">
                            Frontend developer freelance
                        </p>
                        <p class="work-technology">
                            ReactJS - Redux - Stripe
                        </p>
                        <p class="work-company">
                            CeosTech
                        </p>
                    </div>                     
                    
                    <div class="work-experience">
                        <p class="work-time-frame">
                            December 2020 - March 2021
                        </p>
                        <p class="work-position">
                            Frontend developer Internship
                        </p>
                        <p class="work-technology">
                            React Native - Django
                        </p>
                        <p class="work-company">
                            CeosTech
                        </p>
                    </div>

                    <div class="work-experience">
                        <p class="work-time-frame">
                            2020
                        </p>
                        <p class="work-position">
                            Fullstack developer training
                        </p>
                        <p class="work-technology">
                            PHP / JS (ReactJS-Redux)
                        </p>
                        <p class="work-technology">
                            Web Quality Exam (Opquast)
                        </p>
                        <p class="work-technology">
                            Professional title - Web and mobile web developer
                        </p>
                        <p class="work-company">
                            O'Clock
                        </p>
                    </div>

                    <div class="work-experience">
                        <p class="work-time-frame">
                            2015-2018
                        </p>
                        <p class="work-position">
                            French teacher
                        </p>
                        <p class="work-company">
                            Schools / freelance
                        </p>
                    </div>                     
                </div>

                
                <div id="about-section-info">
                    <p class="about-section--title">
                        Journey
                    </p>
                </div>

                <div id="journey-text-container">
                    <h1>Anne Bequet</h1>
                    <h2>Frontend developer</h2>
                    <p class="journey-text">
                        Passionnate about languages, any kind of language, I started in the litterature department to take a turn towards the coding universe.
                    </p>
                    <p class="journey-text">
                        I am a happy and curious developer, testing out my creativity while learning to build robust, clean, and maintanable code.
                    </p>
                    <p class="journey-text">This is my first portfolio, feel free to explore and don't hesitate to drop me a line</p>
                </div>

            </div>
        `;
    }
}