import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    tsw,
    enterprise,
    europcar,
    threejs,
    p1,
    p2,
    p3,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React",
        icon: mobile,
    },
    {
        title: "Node JS",
        icon: backend,
    },
    {
        title: "Java Script",
        icon: creator,
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

const experiences = [
    {
        title: "Tennis Coach",
        company_name: "Tennis Shule Willi",
        icon: tsw,
        iconBg: "#383E56",
        date: "March 2014 - September 2015",
        points: [
            "Develop and implement comprehensive training programs",
            "Provide coaching and instruction",
            "Plan and organize practice sessions",
            "Assess and evaluate player performance",
        ],
    },
    {
        title: "Customer Service Representative",
        company_name: "Enterprise",
        icon: enterprise,
        iconBg: "#E6DEDD",
        date: "Jan 2016 - Sep 2016",
        points: [
            "Greet and welcome customers in a friendly and professional manner.",
            "Provide accurate information about rental policies, rates, and additional services.",
            "Address customer inquiries, concerns, and complaints in a timely and satisfactory manner.",
            "Complete rental agreements accurately, ensuring all required documentation is collected and signed.",
            "Conduct vehicle inspections before and after rentals, documenting any existing damages and reporting maintenance or repair needs."
        ],
    },
    {
        title: "Multi-skilled Agent",
        company_name: "Europcar",
        icon: europcar,
        iconBg: "#383E56",
        date: "Sep 2016 - current ",
        points: [
            "Providing employee training",
            "Collaborating with cross-functional teams including managers, and other professionals.",
            "Collaborate with team members and management to improve processes and customer service standards.",
            "Team lead",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "Some text...",
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
            "Basic web application build during my js backend course at Softuni",
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
    info: "I was born in Bulgaria and have resided in Edinburgh since 2015, which has been a transformative journey for me. Throughout the past decade, I have actively engaged in the car rental industry, finding it to be an intriguing field. However, my recent endeavors have led me to immerse myself deeply in the realm of web development during my leisure hours. As part of this pursuit, I have participated in the comprehensive Softuni end-to-end professional Web Developer program, specializing in JavaScript. This experience has been highly valuable and enriching for my professional growth."
}

export { services, technologies, experiences, testimonials, projects, about };