import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Pic5 from "../assets/pictures/Pic5.png"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textItem = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.to(textItem.current, {
      duration: 2.2,
      opacity: 10,
      y: -80,
      ease: "power3.out"
    });

    // Scroll animation
    gsap.to(textItem.current, {
      scrollTrigger: {
        trigger: textItem.current,
        start: "top center",
        end: "bottom top",
        scrub: true
      },
      y: -300, // move upward
    });
  }, []);

  return (
    <div className="bg-[#98c4bc] px-10 pt-0 py-16 relative overflow-hidden">
      <Header />
      
      {/* Reduced the margin-top from mt-20 to mt-8 to minimize gap */}
      <div className='mt-20 relative z-10'>
        <h1
          ref={textItem}
          className="text-9xl lg:text-[12rem] font-bold text-white"
        >
          Digital<br /> Products.<br /> Human<br /> Experiences.
        </h1>
      </div>

      <div className='w-full max-w-[1400px] h-[400px] md:h-[700px]  mx-auto relative z-20'>
        <img
          src={Pic5}
          alt="pic5"
          className='w-full h-full object-cover mx-auto'
        />
      </div>
    </div>
  );
}

export default About;
