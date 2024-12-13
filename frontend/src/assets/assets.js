import hero_profile from "../assets/hero_profile.jpg";

import worksol from "../assets/Worksol.png";
import codingcloud from "../assets/CodingCloud.jpg";

import project1 from '../assets/Projects/project-1.jpg'
import project2 from '../assets/Projects/project-2.jpg'
import project3 from '../assets/Projects/project-3.jpg'
import project4 from '../assets/Projects/project-4.jpg'
import project5 from '../assets/Projects/project-5.jpeg'
import project6 from '../assets/Projects/project-6.png'

// export const url = 'http://localhost:1000'
export const url = 'https://my-portfolio-deepa-backend.onrender.com'

export const assets = {
  hero_profile,
  worksol,
  codingcloud
};

export const HERO_CONTENT = `I am passionate about frontend and backend development, specializing in ReactJS and the MERN Stack. With two years of hands-on experience, I have strong skills in HTML, CSS, JavaScript, React JS, Node.js, Express, and MongoDB. I love building innovative solutions that drive business growth and enhance user experiences.`;

export const ABOUT_TEXT = `As a dedicated and adaptable MERN stack developer, I'm passionate about crafting efficient and user-centric web applications. With over two years of experience, I've mastered a diverse array of technologies, including HTML, CSS, JavaScript, React JS, Node.js, and MongoDB.

My journey in web development began with a relentless curiosity for technology, evolving into a career where I embrace challenges and constantly expand my knowledge. Thriving in collaborative environments, I leverage my problem-solving skills to deliver high-quality solutions that exceed expectations.

Beyond coding, I remain actively engaged in exploring emerging technologies and contributing to open-source projects, fueling my passion for innovation and community-driven initiatives.`;

export const EXPERIENCES = [
  {
    img: worksol,
    year: "2023",
    role: "Frontend Developer Intern",
    company: "Worksol",
    description: "Learned coding and created designs using templates.",
    technologies: ["HTML", "CSS", "JavaScript", "WIX"],
  },
  {
    img: codingcloud,
    year: "2023 - 2024",
    role: "MERN Stack Developer",
    company: "Coding Cloud Institute",
    description: `Learned coding from the basics to an advanced beginner level with hands-on project experience. Passionate about CSS and ReactJS libraries. Explored backend development to connect frontend components using Node.js APIs and MongoDB, specializing in the MERN stack. Designed responsive layouts and optimized website performance.`,
    technologies: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "MongoDB", "Express"],
  },
];

// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Corporate Website",
//     image: project2,
//     description: "A website showcasing a company's introduction, services, and career opportunities.",
//     technologies: ["React JS", "Node JS", "MongoDB"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description: "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React JS", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Food Delivery Website",
//     image: project3,
//     description: "A website displaying food items, allowing for ordering and delivery.",
//     technologies: ["HTML", "CSS", "React JS", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Authentication System",
//     image: project4,
//     description: "A system for login and sending emails to users and admins simultaneously.",
//     technologies: ["HTML", "CSS", "React JS", "Node.js", "MongoDB"],
//   },
// ];


export const PROJECTS = [
  {
    title: "Portfolio",
    description: "A personal portfolio website that showcases my projects, skills, and contact information, with smooth animations using Framer Motion for an interactive experience.",
    image: project1,
    technologies: ["HTML", "CSS", "React JS"],
    link: "https://portfolio-y7rp.vercel.app/"
  },
  {
    title: "Feane Simple Ecommerce",
    description: "A simple e-commerce website featuring product listings, a shopping cart, user authentication, and table booking functionality.",
    image: project2,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://feane-black.vercel.app/"
  },
  {
    title: "Corporate Website",
    description: "A website that introduces a company, highlights its services and career opportunities, and includes email functionality for contact.",
    image: project4,
    technologies: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
    link: "https://deepa-worksol-frontend.onrender.com/"
  },
  {
    title: "Quiz App",
    description: "An fun quiz app built with ReactJS that lets users test their knowledge with multiple-choice questions and track their real-time scores.",
    image: project3,
    technologies: ["HTML", "CSS", "React"],
    link: "https://quiz-app-chi-blond.vercel.app/"
  },
  {
    title: "CRUD",
    description: "A simple CRUD (Create, Read, Update, Delete) application that allows users to manage data by adding, viewing, editing, and deleting records.",
    image: project5,
    technologies: ["HTML", "CSS", "React", "NodeJS", "MongoDB"],
    link: "https://crud-frontend-kzj6.onrender.com"
  },
  {
    title: "Food Delivery Ecommerce",
    description: "A fully functional e-commerce website with product listings, a shopping cart, user authentication, and delivery features. An admin panel enables the owner to manage the website.",
    image: project6,
    technologies: ["HTML", "CSS", "MongoDB", "ExpressJS", "React", "NodeJS"],
    link: "https://food-delivery-frontend-pusy.onrender.com",
    adminLink: "https://food-delivery-admin-di0y.onrender.com" 
  }
];


export const CONTACT = {
  name: "Deepa Sharma",
  phoneNo: "+91 6359156158",
  email: "deesharma2504@gmail.com",
  github: "https://github.com/dipa2504",
  // linkedin: "https://linkedin.com/in/deepa-sharma-a62028261"
  linkedin: "https://linkedin.com/in/deepa-sharma-289104318"
};
