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
            "Node.js, Express.js, templating, view engines, MongoDB, Mongoose (CRUD and querying), sessions, authentication, JWT, validation, error handling, REST APIs, test automation."
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

const testimonials = [
    {
        testimonial:
            "Great professional , who always deliver his best.",
        name: "Jamie Scott",
        designation: "Manager",
        company: "Europcar Mobility Group",
        image: "",
    },
    {
        testimonial:
            "Some text",
        name: "Someone...",
        designation: "COO",
        company: "DEF Corp",
        image: "",
    },
    {
        testimonial:
            "Some text...",
        name: "Kristina Ivanova",
        designation: "Customer Service Team Lead",
        company: "St. James Quarter",
        image: "",
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
    info: "I was born in Bulgaria and have resided in Edinburgh UK since 2015, which has been a transformative journey for me. Throughout the past decade, I have actively engaged in the car rental industry, finding it to be an intriguing field. However, my recent endeavors have led me to immerse myself deeply in the realm of web development during my leisure hours. As part of this pursuit, I have participated in the comprehensive Softuni end-to-end professional Web Developer program, specializing in JavaScript. This experience has been highly valuable and enriching for my professional growth. The subsequent cards feature my preferred development tools, which I enthusiastically engage with to enhance my proficiency."
}

export { services, technologies, education as experiences, testimonials, projects, about };