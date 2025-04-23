import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { sliderImages } from '../data/cardData';

// Image array


const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Duplicate the images visually for seamless looping
    const totalScroll = slider.scrollWidth / 2;

    // GSAP infinite animation
    const animation = gsap.fromTo(
      slider,
      { x: 0 },
      {
        x: -totalScroll,
        duration: 20,
        ease: "linear",
        repeat: -1,
      }
    );

    return () => animation.kill(); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full overflow-hidden mt-24">
      <div
        ref={sliderRef}
        className="flex gap-10 w-max"
      >
        {[...sliderImages, ...sliderImages].map((pic, idx) => (
          <img
            key={idx}
            src={pic}
            alt={`slider-${idx}`}
            className="w-[300px] h-[200px] object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
