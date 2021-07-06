import markusProject from "../assets/img/markus-project.jpg";
import markusHome from "../assets/img/markus-home.jpg";
import olokosoProject from "../assets/img/olokoso-project.jpg";
import olokosoHome from "../assets/img/olokoso-home.jpg";

const dataProjects = [
    {
        id: 1,
        name: 'Markus',
        subtitle:'The right hand of restaurant owners',
        imgFrontPage: markusHome,
        imgDetailsBackgroundColor: 'transparent',
        imgDetailsPage: [
            {
                image: markusProject,
                height:"auto",
                width:'100%',
            }
        ],
        description: "The Markus application offers a management tool for restaurants: human resources (work contracts, schedules...), and inventory management (inventory, technical sheets, forecasting of future activity...). It can also be accompanied by a custom website made for the restaurant (see project 2). I arrived on this project during the implementation of the V0 and participated in a redesign of the front-end to ensure a more robust and maintainable application.",
        links: [
            {
                name: 'Site',
                link: 'https://www.markus-app.com/',
            },

        ],
        technologies: ['React Native', 'Django'],
        status: 'Internship',
        date: 'December 2020 - March 2021'
    },
    {
        id: 2,
        name: "O'lokoso",
        subtitle:'African restaurant',
        imgFrontPage: olokosoHome,
        imgDetailsBackgroundColor: 'transparent',
        imgDetailsPage: [
            {
                image: olokosoProject,
                height:'auto',
                width: '100%',
            }
        ],
        description: "I realized the front-end part of this website for a restaurant owner, who wanted a new website to take orders. In collaboration with a colleague responsible for the back-end, we managed this project from its implementation to its deployment, while generating from this site templates that can be customized to the taste of other restaurant owners.",
        links: [
            {
                name: 'Site',
                link: 'https://olokososite-48316.web.app/',
            },
        ],
        technologies: ['ReactJs', 'Django'],
        status: 'Freelance',
        date: 'March 2021 - April 2021'
    },
    {
        id: 3,
        name: "Odyssea Quiz",
        subtitle:'In the mood to challenge your knowledge ?',
        imgFrontPage: olokosoHome,
        imgDetailsBackgroundColor: 'transparent',
        imgDetailsPage: [
            {
                image: olokosoProject,
                height:'auto',
                width: '100%',
            }
        ],
        description: "Odyssea Quiz is an end of study project, realized in a team of four developers. We went through all the steps of development, from the design to the deployment. If this website is one of my first realizations, it also has a more personal dimension. As a former teacher, student and user of e-learning platforms, I was able to observe how much a well-designed pedagogy as well as a playful and dynamic approach are essential to learn something well. Most of the time, it is not by reading an encyclopedia that one develops knowledge but by doing, practising, repeating, and having fun. In this context, web applications offer very interesting tools. From these observations Odyssea Quiz was born! The objective of this application is to propose quizzes classified by categories on the marine theme, with and a personal account to keep track of your progresses, and the implementation of a spaced repetition algorithm to better the learning process.",
        links: [
            {
                name: 'Site',
                link: 'https://www.markus-app.com/',
            },
            {
                name: 'Git',
                link: 'https://www.markus-app.com/',
            }
        ],
        technologies: ['ReactJs', 'Symfony'],
        status:'Graduation project',
        date: 'July 2020 - August 2020'
    }
];

export default dataProjects;