import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Hero = () => {
  const textRef = useRef(null);

    useEffect(() => {
    gsap.to(textRef.current.children, {
      y: -60,
      duration: 1.5,
      stagger: 0.5,
      
    });
  }, []);

  return (
    <div
    ref={textRef}
       className=" px-10 bg-[#f3f3e9] pt-20 py-16">
      <h1
        className="text-6xl lg:text-9xl  font-bold text-green-900 "
      >
        Extraordinary
      </h1>
      <h1
        className="text-6xl lg:text-9xl  font-bold text-green-900 mb-8"
      >
        Digital Experiences
      </h1>
      
    </div>
  );
};

export default Hero;
