// /types/index.ts
import { StaticImageData } from "next/image";

// Interface para los servicios
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

// Interface para los proyectos
export interface Project {
  id: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string | StaticImageData;
  linkGithub: string;
  deploy_url: string;
}

// Interface para las redes sociales
export interface SocialNetwork {
  id: number;
  logo: JSX.Element;
  src: string;
}


export interface Technology {
  id: number;
  name: string;
  icon: StaticImageData;
}


export interface DataAbout {
    id: number;
    title: string;
    data: string
    subtitle: string
    description: string;
    image: StaticImageData;

}