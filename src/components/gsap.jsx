import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const middleRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 600,
      y: 200,
      duration: 3,
      delay: 1,
      rotate: 180,
      backgroundColor: 'yellow',
      borderRadius: '80%',
      scale: 0.5,
      repeat: 1,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    gsap.to(textRef.current.children, {
      y: -100,
      duration: 2,
      stagger: 0.5,
      
    });
  }, []);

  useEffect(() => {
    gsap.to(middleRef.current, {
      y: 20,
      rotate: 360,
      duration: 2,
      scale: 1,
      scrollTrigger: {
        trigger: middleRef.current,  // <- Also add the trigger element
        start: "top 80%",
        end:"top 20%",
        markers: true,
        scrub:true,
        
      },
    });
  }, []);

  return (
    <div className="bg-amber-950 p-10 ">
      <div
        ref={boxRef}
        className="text-black bg-amber-300 h-40 w-40"
      ></div>

      <div ref={textRef} className="h-screen">
        <h1 className="text-white font-bold text-6xl">Hello my name is Yugan</h1>
        <h1 className="text-white font-bold text-6xl">Hello my name is Yuga</h1>
        <h1 className="text-white font-bold text-6xl">Hello my name is Yug</h1>
      </div>

      <div
        ref={middleRef}
        className="flex items-center justify-center h-full"
      >
        <h1 className="text-white h-screen font-bold text-8xl">
          Hello my practical
        </h1>
      </div>
    </div>
  );
};

export default Gsap;
