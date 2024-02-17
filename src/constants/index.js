import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    p1,
    p2,
    p3,
    nextJs,
    react,
    node,
    js,
    softuni,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "NextJS",
        icon: nextJs,
    },
    {
        title: "React",
        icon: react,
    },
    {
        title: "Node JS",
        icon: node,
    },
    {
        title: "Java Script",
        icon: js,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    }
];

const education = [
    {
        title: "JS Fundamentals",
        company_name: "Softuni",
        icon: softuni,
        iconBg: "#383E56",
        date: "May 2021 - August 2021",
        points: [
            "Basic syntax, control flow, functions, objects, arrays, DOM and DOM interaction, modules, unit testing."
        ],
    },
    {
        title: "JS Apps",
        company_name: "Softuni",
        icon: softuni,
        iconBg: "#383E56",
        date: "September 2021 - December 2021",
        points: [
            "RESTful APIs, AJAX, asynchronous programming, remote databases, Firebase, UI rendering, templating engines, routing and design patterns."
        ],
    },
    {
        title: "HTML & CSS",
        company_name: "Softuni",
        icon: softuni,
        iconBg: "#383E56",
        date: "January 2022 - March 2022",
        points: [
            "HTML, elements, forms, tables, CSS styling, grids and layouts, responsive design."
        ],
    },
    {
        title: "JS Back-End",
        company_name: "Softuni",
        icon: softuni,
        iconBg: "#383E56",
        date: "March 2022 - May 2022",
        points: [
            "Node.js, Express.js, templating, view engines, MongoDB, Mongoose (CRUD and querying), sessions, authentication, JWT, validation, error handling, REST APIs, test automation."
        ],
    },
    {
        title: "React",
        company_name: "Softuni",
        icon: softuni,
        iconBg: "#383E56",
        date: "May 2022 - August 2022",
        points: [
            "JSX components, properties, state, events, lifecycle, fetching server-side data, routing, forms, hooks, unit testing."
        ],
    },

];


const projects = [
    {
        name: "My portfolio",
        description:
            "This is my current portfolio 2.0",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: p1,
        source_code_link: "https://github.com/CyberAorus/MyPortfolio",
    },
    {
        name: "Gallery",
        description:
            "SSR application Softuni course workshop",
        tags: [
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "mongoose",
                color: "green-text-gradient",
            },
            {
                name: "express-handlebars",
                color: "pink-text-gradient",
            },
        ],
        image: p3,
        source_code_link: "https://github.com/CyberAorus/gallery",
    },
    {
        name: "Fitness App",
        description:
            "Fitness app that allows users to browse new exercises",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api-hub",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: p2,
        source_code_link: "https://github.com/CyberAorus/fitness-application",
    },
];

const about = {
    info: "I'm a web developer enthusiast with a burning ambition to make a significant career shift. By day, I've been treading a different professional path, but when the clock strikes 'free time,' I'm consumed by my passion for web development. I've embarked on a journey of self-discovery in the world of coding, design, and everything web-related. Learning web development has become more than just a hobby; it's a fervent pursuit. With each passing day, I eagerly soak up new knowledge, one code snippet at a time. My ultimate goal? To transition from my current profession and become a full-time web developer. The idea of creating engaging websites, solving complex problems, and crafting digital experiences is what drives me forward. While I'm currently navigating two worlds, I'm steadfast in my commitment to make web development my full-time gig. My enthusiasm knows no bounds, and I'm ready to embrace the challenges that lie ahead on this exciting journey. I'm on a path to turn my passion into a profession. "
}

export { services, technologies, education as experiences, testimonials, projects, about };
