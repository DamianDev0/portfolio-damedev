"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ButtonSkillsProps {
  icon: StaticImageData;
}

export const ButtonSkills = ({ icon }: ButtonSkillsProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.95 }} 
      className="w-full flex justify-center"
    >
      <button className="relative group p-3 rounded-xl transition-all duration-300 hover:shadow-2xl">
        {icon && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Image
              src={icon}
              alt="Technology icon"
              width={50}
              height={50}
              className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        )}
      </button>
    </motion.div>
  );
};
