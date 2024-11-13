import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface CardProps {
  id?: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="relative h-[25em] w-[17em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] 
      bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito 
      p-[1em] flex flex-col justify-center items-left gap-[1.8rem] backdrop-blur-[26px] 
      transform transition-transform duration-500 hover:shadow-xl hover:scale-105 perspective-1000 
      hover:transform-3d hover:rotate-x-6 hover:rotate-y-6">

      <div className="transform transition-transform duration-500 hover:transform-3d">
        <h1 className="text-[1.7em] font-medium">{title}</h1>
        <p className="text-[0.8em]">{description}</p>

        <div className="relative w-full h-[14em]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
