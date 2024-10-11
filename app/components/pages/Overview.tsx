import Card, { CardProps } from "../ui/card-overview";
import ScrollAnimation from "../../utils/scroll";
import { textVariant } from "../../utils/motion";
import { services } from "../../constants/data";

export const OverviewComponent = () => {
  return (
    <div className="relative flex flex-col h-full md:h-screen mt-8 sm:mt-12"> 
      <div className="flex flex-col mx-4 sm:mx-10 md:mx-40"> 
        <p className="font-extralight text-white/40 mb-2 sm:mb-3 text-sm sm:text-base">INTRODUCTION</p> 
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About me</h2> 
        <p className="w-full sm:w-3/4 md:w-1/2 mt-4 text-sm sm:text-base"> 
          DamianDev is a creative and passionate full-stack developer with a background
          in web development and graphic design. I specialize in building dynamic
          and engaging websites using modern technologies like React, Node.js,
          and Nest js. My goal is to help clients create visually stunning and
          user-friendly experiences for their businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mx-auto mt-6 md:mt-10 ml-12 md:ml-36 max-w-screen-xl"> {/* Ajuste de columnas y espaciado */}
        {services.map((service: CardProps) => (
          <ScrollAnimation key={service.id} variants={textVariant()}>
            <Card 
              title={service.title} 
              description={service.description} 
              image={service.image} 
            />
          </ScrollAnimation>
        ))}
      </div>
      
    </div>
  );
};
