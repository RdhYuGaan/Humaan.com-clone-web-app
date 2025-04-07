import React, { useEffect, useState } from 'react';
import Tm from '../assets/images/7tm.png';
import Canser from '../assets/images/canser.png';
import Cc from '../assets/images/cc.png';
import Curtain from '../assets/images/curtain.png';
import Dollar from '../assets/images/dollar.png';
import Dream11 from '../assets/images/dream11.png';
import Tech from '../assets/images/tech.png';
import West from '../assets/images/westren.png';
import Rychiger from '../assets/images/rychiger.png';
import Byjus from '../assets/images/byjus.png';

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
    }, 6970); // Reduced interval to 6.97 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#590080] h-screen flex flex-col items-center justify-center px-10 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">
        We design, build and ship world-class digital products for forward-thinking brands.
      </h1>
      <div className="grid grid-cols-2 pt-20 lg:grid-cols-5 gap-10 relative transition-all duration-500 ease-in-out">
        {currentLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 object-contain transform opacity-0 transition-all duration-500 ease-in-out animate-fade-in"
            style={{
              animation: `fadeInOut 1.97s ease-in-out ${index * .03}s infinite alternate`,
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
