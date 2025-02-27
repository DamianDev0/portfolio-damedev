import Card, { CardProps } from "../ui/card-overview";
import { services } from "../../constants/data";

export const OverviewComponent = () => {
  return (
    <div className="relative flex flex-col h-full md:h-screen mt-8 sm:mt-12">
      <div className="flex flex-col sm:mx-10 md:mx-20 ml-4 sm:ml-6"> 
        <p className="font-extralight text-white/40 mb-2 sm:mb-3 text-sm sm:text-base">INTRODUCTION</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About me</h2>
        <p className="w-full sm:w-3/4 md:w-1/2 mt-4 text-[0.9em] sm:text-base text-white/70">
          DamianDev is a creative and passionate full-stack developer with a background
          in web development and graphic design. I specialize in building dynamic
          and engaging websites using modern technologies like React, Node.js,
          and Nest js. My goal is to help clients create visually stunning and
          user-friendly experiences for their businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
       lg:grid-cols-4 gap-6 sm:gap-6 mx-auto mt-14 md:mt-10 max-w-screen-[960px] 
       justify-center">
        {services.map((service: CardProps) => (
          <Card 
            key={service.id}
            title={service.title} 
            description={service.description} 
            image={service.image} 
          />
        ))}
      </div>
    </div>
  );
}
