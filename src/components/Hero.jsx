import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Hero = () => {
  const textItem = useRef(null);

  useEffect(() => {
    gsap.to(textItem.current, {
      duration: 2.2,
      opacity: 10,
      
      y:-80,
      ease: "power3.easOut"
    });
  }, []);

  return (
    <div className="bg-[#f3f3e9] px-10 pt-20 py-16">
      <h1
        ref={textItem}
        className="text-6xl lg:text-9xl  font-bold text-green-900 mb-8"
      >
        Extraordinary <br /> Digital Experiences
      </h1>
    </div>
  );
};

export default Hero;
