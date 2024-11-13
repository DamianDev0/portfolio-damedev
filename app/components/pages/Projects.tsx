import { StaticImageData } from "next/image";
import { projects } from "../../constants/data";
import { CardProject } from "../ui/card-project";

interface Project {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  linkGithub: string;
  deploy_url: string;
  tags: { name: string }[];
}

interface Tags {
  name: string;
}

export const ProjectsComponent = () => {
  return (
    <div className="flex flex-col items-center mt-8 sm:mt-0 px-4 sm:px-8 lg:px-20">
      <div className="max-w-4xl w-full -mx-[200px] mb-11 sm:mr-0 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-left">
          Projects
        </h2>
        <p className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 text-white/70 mt-4 text-sm sm:text-base text-left">
          Throughout these projects, I’ve applied various technical skills that
          have helped me grow as a developer. I’ve built responsive,
          user-friendly interfaces with React, Next.js, and Tailwind CSS, while
          gaining deeper insights into Node.js and Express for full-stack
          development. Version control with Git has been crucial for managing
          codebases and collaborating effectively.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-8">
        {projects.map((project: Project) => (
          <CardProject
            key={project.id}
            id={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            linkGithub={project.linkGithub}
            deploy_url={project.deploy_url}
            tags={project.tags.map((tag: Tags) => tag.name)}
          />
        ))}
      </div>
    </div>
  );
};
