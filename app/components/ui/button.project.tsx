import React from "react";

interface ButtonProps {
  title: string;
  src: string;
  className?: string;
}

const Button = ({ title, src, className }: ButtonProps) => {
  return (
    <div className={className}>
      <a href={src} target="_blank" rel="noopener noreferrer">
        <button className="relative w-[100px] h-[40px] flex justify-center items-center cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
          <span className="w-full h-full flex justify-center items-center text-center bg-black text-white rounded-[14px] text-sm">
            {title}
          </span>
        </button>
      </a>
    </div>

  );
};

export default Button;
