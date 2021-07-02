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
        description: 'Qui sit enim veniam et nisi reprehenderit proident. Exercitation sit qui quis sit labore sint aute ipsum mollit. Qui cupidatat do quis sint et minim dolore ipsum amet deserunt deserunt ad quis sunt. Duis fugiat proident ex adipisicing amet dolore esse.',
        links: [
            {
                name: 'Site',
                link: 'https://www.markus-app.com/',
            },

        ],
        technologies: ['ReactJ Native', 'Django'],
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
        description: 'Qui sit enim veniam et nisi reprehenderit proident. Exercitation sit qui quis sit labore sint aute ipsum mollit. Qui cupidatat do quis sint et minim dolore ipsum amet deserunt deserunt ad quis sunt. Duis fugiat proident ex adipisicing amet dolore esse.',
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
        subtitle:'A grandiose perspective into the nothingness',
        imgFrontPage: olokosoHome,
        imgDetailsBackgroundColor: 'transparent',
        imgDetailsPage: [
            {
                image: olokosoProject,
                height:'auto',
                width: '100%',
            }
        ],
        description: 'Qui sit enim veniam et nisi reprehenderit proident. Exercitation sit qui quis sit labore sint aute ipsum mollit. Qui cupidatat do quis sint et minim dolore ipsum amet deserunt deserunt ad quis sunt. Duis fugiat proident ex adipisicing amet dolore esse.',
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
        date: 'June 2020 - August 2020'
    }
];

export default dataProjects;