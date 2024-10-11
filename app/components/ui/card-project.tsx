import Image, { StaticImageData } from "next/image";
import Button from "../ui/button.project";

interface CardProjectProps {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  linkGithub: string;
  deploy_url: string;
  tags: string[];
}

export const CardProject = ({ image, name, description, linkGithub, deploy_url, tags }: CardProjectProps) => {
  return (
    <div className="w-[370px] h-[560px] backdrop-blur-3xl bg-black/30 backdrop-opacity-80
     rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-8
     hover:shadow-2xl hover:shadow-purple-500 transition-shadow duration-300">
      <div className="w-full h-[400px] relative">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover rounded-2xl" 
        />
      </div>
      <div className="flex-1">
        <p className="font-extrabold text-2xl mb-2">{name}</p> 
        <p className="text-sm text-gray-400">{description}</p> 
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-purple-500 bg-opacity-20 rounded-md capitalize">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-3 justify-around w-full">
        <Button 
          title="View Code" 
          src={linkGithub} 
        />
        <Button 
          title="Deploy" 
          src={deploy_url}
        />
      </div>
    </div>
  );
};
