"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  variants?: Variants; // Agregar variants como una propiedad opcional
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, variants }) => {
  const controls = useAnimation();

  const handleScroll = () => {
    const offset = window.scrollY + window.innerHeight;
    const element = document.querySelector("#scroll-animation");

    if (element) {
      const elementOffset = element.getBoundingClientRect().top + window.scrollY;

      if (offset > elementOffset) {
        controls.start("show");
      } else {
        controls.start("hidden"); 
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      id="scroll-animation"
      initial="hidden" 
      animate={controls}
      variants={variants || { 
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5  } },
      }}
    >
      {children} 
    </motion.div>
  );
};

export default ScrollAnimation;
