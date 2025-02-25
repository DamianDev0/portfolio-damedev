import Image, { StaticImageData } from "next/image"

interface ButtonSkillsProps {
  icon: StaticImageData
}

export const ButtonSkills = ({ icon }: ButtonSkillsProps) => {
  return (
    <div className="w-full flex justify-center">
      <button className="">
        {icon && (
          <Image
            src={icon}
            alt="Technology icon"
            width={50}
            height={50}
            className="mt-4 rounded-lg object-cover"
          />
        )}
      </button>
    </div>
  )
}