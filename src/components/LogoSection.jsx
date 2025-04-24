import React, { useEffect, useState, useRef } from 'react';
import Tm from '../assets/logos/7tm.png';
import Canser from '../assets/logos/canser.png';
import Cc from '../assets/logos/cc.png';
import Curtain from '../assets/logos/curtain.png';
import Dollar from '../assets/logos/dollar.png';
import Dream11 from '../assets/logos/dream11.png';
import Tech from '../assets/logos/tech.png';
import West from '../assets/logos/westren.png';
import Rychiger from '../assets/logos/rychiger.png';
import Byjus from '../assets/logos/byjus.png';
import gsap from 'gsap';
import { TweenMax } from 'gsap/gsap-core';

const logos = [
  { src: Tm, alt: "7tm" },
  { src: Canser, alt: "National Breast Cancer Foundation" },
  { src: Curtain, alt: "Curtin University" },
  { src: Dream11, alt: "Dream11" },
  { src: Rychiger, alt: "Rychiger" },
  { src: Cc, alt: "CC" },
  { src: Dollar, alt: "Dollar" },
  { src: Tech, alt: "Tech" },
  { src: West, alt: "Western" },
  { src: Byjus, alt: "Byjus" },
];

const LogoSection = () => {
  const [currentLogos, setCurrentLogos] = useState(logos.slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos((prevLogos) => {
        const nextStartIndex = (logos.indexOf(prevLogos[0]) + 5) % logos.length;
        return logos.slice(nextStartIndex, nextStartIndex + 5);
      });
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  let h1=useRef(null);

  useEffect(() => {
    TweenMax.to(h1.current, {
      visibility: "visible",
      duration: 2.2,
      opacity: 1,
      y:-80,
      ease: "power3.easOut"
    });
  }, []); 





  return (
    <div className="bg-[#b488f1] h-screen flex flex-col items-center justify-center px-10 py-16 text-center">
      <h1 
        ref={h1}
      className="text-6xl md:text-8xl sm:text-3xl font-bold md:mt-60 text-white mb-16">
        We design, build and ship world-class digital products for forward-thinking brands.
      </h1>
      <div className="grid grid-cols-2 pt-20 lg:grid-cols-5  sm:grid-cols-3 sm:grid-rows-1 gap-15 relative transition-all duration-500 ">
        {currentLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-20 object-contain transform opacity-0 transition-all duration-1000 ease-in-out "
            style={{
              animation: `fadeInOut 5.97s ease-in-out ${index * .03}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          50% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}

export default LogoSection;
