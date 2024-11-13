import { Linkedin, Github, } from "lucide-react";
import frontend from '../assets/backend.png'
import team from '../assets/team.png'
import javascript from '../assets/tech/javascript.png'
import reactjs from '../assets/tech/reactjs.png'
import typescript from '../assets/tech/typescript.png'
import tailwind from '../assets/tech/tailwind.png'
import docker from '../assets/tech/docker.png'
import nodejs from '../assets/tech/nodejs.png'
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import git from '../assets/tech/git.png'
import figma from '../assets/tech/figma.png'
import mongodb from '../assets/tech/mongodb.png'
import vortextream from '../assets/project/vortextream.png'
import closeToYou from '../assets/project/closetoyou.png'
import weather from '../assets/project/weather.png'
import backend from  '../assets/frontend.png'
import mobile from '../assets/mobile.png'



export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/DamianDev0",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/damian-garcia-b0881327a/",
    },
];



export const services = [
    {
        id: 1,
        title: "Web Developer",
        description: "Creating responsive and dynamic websites.",
        image: frontend,
    },
    {
        id: 2,
        title: "Backend Developer",
        description: "Building secure and efficient server-side logic.",
        image: backend,
    },
    {
        id: 3,
        title: "Team Worker",
        description: "Producing engaging and creative content.",
        image: team,
    },
    {
        id: 4,
        title: "Mobile Developer",
        description: "Development of mobile applications in react native",
        image: mobile,
    },
];



export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "Vortextream",
        description: "Collaborate with a dynamic team to design and develop visually engaging, responsive, and functional user interfaces that drive success for our streaming platform. As a part of Vortextream, you'll work on interfaces for movies, anime, live streams, and more, providing users with seamless and immersive entertainment experiences.",
        date: "Sep 2024",
    },
    {
        id: 2,
        title: "Backend Developer",
        subtitle: "Vortextream",
        description: "Work on exciting projects that push the boundaries of creativity and technology in the streaming industry. Join us as we build captivating and scalable backend systems that power movies, anime, and live streams. Help shape the future of digital entertainment by creating solutions that inspire and engage our users worldwide.",
        date: "Sep 2024",
    },
    {
        id: 3,
        title: "Frontend Developer",
        subtitle: "Health Hub",
        description: "As a frontend developer at Health Hub, you'll collaborate on diverse and challenging health-related projects, developing intuitive and accessible user interfaces that improve the healthcare experience. Join a mission-driven team to create impactful digital solutions that enhance patient care and drive innovation in the healthcare industry.",
        date: "Jul 2024",
    },
    {
        id: 4,
        title: "Frontend Developer",
        subtitle: "Close to you",
        description: "Effortlessly manage and organize your contacts with our intuitive mobile app. Designed for seamless usability, it allows users to quickly add, update, and search contacts while ensuring secure and easy access. The app also integrates maps for location-based contact management and real-time weather updates, offering a comprehensive and efficient experience with a clean, modern interface.",
        date: "Oct 2024",
    },

]


export const technologies = [
    {
        id: 1,
        name: "HTML 5",
        icon: html,
    },
    {
        id: 2,
        name: "CSS 3",
        icon: css,
    },
    {
        id: 3,
        name: "JavaScript",
        icon: javascript,
    },
    {
        id: 4,
        name: "TypeScript",
        icon: typescript,
    },
    {
        id: 5,
        name: "React JS",
        icon: reactjs,
    },
    {
        id: 6,
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        id: 7,
        name: "Node JS",
        icon: nodejs,
    },
    {
        id: 8,
        name: "MongoDB",
        icon: mongodb,
    },
    {
        id: 9,
        name: "git",
        icon: git,
    },
    {
        id: 10,
        name: "figma",
        icon: figma,
    },
    {
        id: 11,
        name: "docker",
        icon: docker,
    },
];



export const projects = [
    {
      id: 1,
      name: "Vortextream",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "Nest js",
          color: "pink-text-gradient",
        },
      ],
      image: vortextream,
      linkGithub: "https://github.com/agogo345/vortexStream-Backend-Nestjs.git",
      deploy_url: 'https://vortextreaming.netlify.app/'
    },
    {
      id: 2,
      name: "Close To You",
      description:
        "Modern Contacts Manager app built with React Native, allowing users to easily store, organize, and search contacts with a clean, intuitive design for a seamless experience.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Nest js",
          color: "pink-text-gradient",
        },
      ],
      image: closeToYou,
      linkGithub: "https://github.com/DamianDev0/ContactsReactNative.git",
      deploy_url: ''
    },
    {
      id: 3,
      name: "Weather",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Css",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      linkGithub: "https://github.com/agogo345/climate-and-air-quality.git",
      deploy_url: 'https://weather-and-air-quality.netlify.app/'

    },
  ];
  