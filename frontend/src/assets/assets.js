import hero_profile from "../assets/hero_profile.jpg";

import worksol from "../assets/Worksol.png";
import codingcloud from "../assets/CodingCloud.jpg";

import project1 from '../assets/Projects/project-1.jpg'
import project2 from '../assets/Projects/project-2.jpg'
import project3 from '../assets/Projects/project-3.jpg'
import project4 from '../assets/Projects/project-4.jpg'

export const assets = {
  hero_profile,
  worksol,
  codingcloud
};

export const HERO_CONTENT = `I am passionate about both frontend and backend development, specializing in the MERN Stack. With two years of hands-on experience, I excel in technologies like HTML, CSS, JavaScript, React JS, Node.js, Express, and MongoDB. Driven by the thrill of crafting innovative solutions, my goal is to leverage this passion to drive business growth and deliver exceptional user experiences through technology.`;

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
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
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
    description: "A personal portfolio website displaying my projects, skills, and contact info, with smooth animations using Framer Motion for an interactive experience.",
    image: project1,
    technologies: ["HTML", "CSS", "React JS",],
    link: "https://portfolio-y7rp.vercel.app/" // Live link to your portfolio
  },
  {
    title: "Feane",
    description: "A fully functional e-commerce website with product listings, shopping cart, user authentication, and table booking features.",
    image: project2,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://feane-black.vercel.app/" // Live link to your Feane project
  },
  {
    title: "Quiz App",
    description: "A fun and interactive quiz app built with ReactJS. Test your knowledge with multiple-choice questions and track your score in real time. .",
    image: project3,
    technologies: ["HTML", "CSS", "React"],
    link: "https://quiz-app-chi-blond.vercel.app/" // Live link to your quiz app
  }
];


export const CONTACT = {
  name: "Deepa Sharma",
  phoneNo: "+91 6359156158",
  email: "deesharma2504@gmail.com",
  github: "https://github.com/dipa2504",
  // linkedin: "https://linkedin.com/in/deepa-sharma-a62028261"
  linkedin: "https://www.linkedin.com/in/deepa-sharma-289104318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
};
