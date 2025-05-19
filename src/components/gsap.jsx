import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Gsap = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);

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
      repeat:-1,
      yoyo:true,
    });
  }, []);

  useEffect(() => {
    gsap.to(textRef.current.children, {

      y: -100,
      duration: 2,
      stagger:.5,


    });

  }, []);

  return (
    <div className="bg-amber-950 p-10 h-screen">
      <div
        ref={boxRef}
        className="text-black bg-amber-300 h-40 w-40"
      ></div>
      <div ref={textRef}>
        <h1 className="text-white font-bold text-6xl">Hello my name is Yugan</h1>
        <h1 className="text-white font-bold text-6xl">Hello my name is Yuga</h1>
        <h1 className="text-white font-bold text-6xl"> Hello my name is Yug</h1>
      </div>

    </div>
  );
};

export default Gsap;
