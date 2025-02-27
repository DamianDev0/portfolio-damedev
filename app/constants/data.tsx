import { Linkedin, Github, } from "lucide-react";
import frontend from '../assets/Saly-19.png'
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
import rhythm from '../assets/project/rhythm.png'
import weather from '../assets/project/weather.png'
import backend from  '../assets/Saly-10.png'
import mobile from '../assets/Saly-12.png'
import smartCart from '../assets/project/smartCart.png' 



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
        title: "Mobile Developer",
        description: "Development of mobile applications in react native",
        image: mobile,
    },
    {
        id: 4,
        title: "Team Worker",
        description: "Producing engaging and creative content.",
        image: team,
    },
];



export const dataAboutPage = [

    {
        id: 2,
        title: "Frontend Developer",
        subtitle: "Vortextream",
        description: "Develop a robust and scalable REST API for a book management system using NestJS, MongoDB, and Docker. Work with a dynamic team to design efficient database structures, implement secure authentication, and ensure high performance. You'll also write comprehensive tests to maintain code reliability and scalability",
        date: "Sep 2024",
    },
    {
        id: 3,
        title: "Backend Developer",
        subtitle: "Rest-Api library",
        description: "Work on exciting projects that push the boundaries of creativity and technology in the streaming industry. Join us as we build captivating and scalable backend systems that power movies, anime, and live streams. Help shape the future of digital entertainment by creating solutions that inspire and engage our users worldwide.",
        date: "Oct 2024",
    },
    {
        id: 4,
        title: "React native Developer",
        subtitle: "SmartCart",
        description: "SmartCart is an AI-powered shopping management app designed to simplify and enhance your purchasing experience. It automatically sorts your items into categories, making your shopping lists organized and easy to manage. Additionally, SmartCart provides personalized recommendations based on your preferences and past purchases, helping you save time and discover new products you'll love.",
        date: "Dec 2024",
    },
    {
      id: 5,
      title: "React native Developer",
      subtitle: "Rhythm",
      description: "Rhythm is healthy habit management app designed to help you build and maintain positive routines. It allows you to track your streaks, set challenges, and view detailed statistics on your progress. With Rhythm, you can save your habits on your device, load them whenever needed, and receive personalized notifications to keep you motivated",
      date: "Jan 2025",
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
      name: "Rhythm",
      description:
        "Rhythm is healthy habit management app designed to help you build and maintain positive routines. It allows you to track your streaks, set challenges, and view detailed statistics on your progress.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Sql Lite storage",
          color: "green-text-gradient",
        },
        {
          name: "Nest js",
          color: "pink-text-gradient",
        },
      ],
      image: rhythm,
      linkGithub: "https://github.com/DamianDev0/rhythm",
      deploy_url: ''
    },
    {
      id: 3,
      name: "Smart Cart",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Postgresql",
          color: "green-text-gradient",
        },
        {
          name: "Nest js",
          color: "pink-text-gradient",
        },
      ],
      image: smartCart,
      linkGithub: "https://github.com/DamianDev0/SmartCart",
      deploy_url: ''

    },
    {
      id: 4,
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
  