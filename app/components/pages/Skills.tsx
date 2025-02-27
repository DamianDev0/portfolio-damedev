import { StaticImageData } from "next/image";
import { technologies } from "../../constants/data";
import { ButtonSkills } from "../ui/tech";

interface Skills {
  id: number;
  name: string;
  icon: StaticImageData;
}

export const SkillsComponent = () => {
  return (
    <div className="h-auto mt-16 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mx-auto mt-6 md:mt-10">
        {technologies.map((skill: Skills) => (
          <ButtonSkills 
            key={skill.id}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};
