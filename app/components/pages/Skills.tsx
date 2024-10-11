import { StaticImageData } from "next/image";
import { technologies } from "../../constants/data"
import { textVariant } from "../../utils/motion"
import ScrollAnimation from "../../utils/scroll"
import { ButtonSkills } from "../ui/tech"

interface Skills {
  id: number;
  name: string;
  icon: StaticImageData; 
}

export const SkillsComponent = () => {
  return (
    <div className="h-80 mt-64">
        <div>
            
        </div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
       sm:gap-6 mx-auto mt-6 md:mt-10 ml-12 md:ml-36 max-w-screen-xl">
        {technologies.map((skill: Skills) => (
            <ButtonSkills 
              icon={skill.icon}
            />
        ))}
      </div>
    </div>
  )
}