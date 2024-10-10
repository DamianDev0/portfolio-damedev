import React from "react";
import SplineComponent from "../ui/spline-component";
import SocialNetWork2 from "../ui/social";

export const HeaderComponent = () => {
    return (
        <header className="w-full z-20 p-4 bg-transparent">
            <h1
              className="my-3 text-4xl md:text-5xl font-bold
             text-center md:text-left"
            >
              Damian
              <span className="text-violet-500">Dev</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                <div className="w-full md:w-screen"> 
                    <SplineComponent />
                </div>
                <div className="text-center w-full md:w-1/2 md:mr-8 mb-8"> 
                    <h1 className="text-white text-4xl md:text-5xl mb-2 font-bold">Hi, I’m Dam<span className="text-violet-500">ian</span></h1> {/* Ajustamos el tamaño de texto */}
                    <p className="text-sm md:text-base font-extralight max-w-md mx-auto text-white/55">
                        I am a full-stack web developer with a passion for creating modern sites and dynamic applications.
                    </p>
                </div>
                <div className="absolute left-0 mx-4 md:mx-8"> 
                    <SocialNetWork2 />
                </div>
            </div>
        </header>
    );
};
