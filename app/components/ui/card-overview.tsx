import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="relative h-[25em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] 
    bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)]
     text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[26px]
     transform transition-transform duration-500 hover:rotateX-10 hover:rotateY-10 hover:shadow-xl
     hover:scale-105 perspective-1000 hover:transform-3d hover:rotate-x-6 hover:rotate-y-6">
      <div className="transform transition-transform duration-500 hover:transform-3d">
        <h1 className="text-[2em] font-medium">{title}</h1>
        <p className="text-[0.85em]">{description}</p>
        
        <Image
          src={image}
          alt={title}
          width={200} 
          height={200} 
          className="mt-4 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
