"use client"

import {  useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 


export const CoverParticles = () => {
    const [ init, setInit ] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
         
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    return(
       init &&
       <div className="w-[0px]"> 
       <Particles
            id="tsparticles"
            
            options={{

                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                      
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.0,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1 ,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                           
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
     </div>
 )
}

export default CoverParticles;