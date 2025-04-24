import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Pic5 from '../assets/pictures/Pic5.png';
import ImageSlider from '../components/aboutcompnents/ImageSlider';
import ClientLogo from '../components/aboutcompnents/Clientlogo';
import Capabilities from '../components/aboutcompnents/Capabilities';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textItem = useRef(null);
  const containerRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    // Text animation
    gsap.to(textItem.current, {
      duration: 2.2,
      opacity: 1,
      y: -80,
      ease: 'power3.out',
    });

    // Scroll text animation
    gsap.to(textItem.current, {
      scrollTrigger: {
        trigger: textItem.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
      y: -300,
    });

    // Background color change
    ScrollTrigger.create({
      trigger: quoteRef.current,
      start: 'top center',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(containerRef.current, {
          backgroundColor: '#2563EB', // Tailwind's blue-600
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(containerRef.current, {
          backgroundColor: '#d8e4e6', // Original background color
          duration: 0.5,
        });
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="transition-colors duration-700 bg-[#d8e4e6] px-10 pt-0 py-16 relative overflow-hidden"
    >
      <Header />

      <div className="mt-80 relative z-10">
        <h1
          ref={textItem}
          className="text-9xl lg:text-[12rem] font-bold text-white"
        >
          Digital<br /> Products.<br /> Human<br /> Experiences.
        </h1>
      </div>

      <div className="w-full h-[400px] md:h-[700px] mx-auto relative z-20">
        <img
          src={Pic5}
          alt="pic5"
          className="w-full h-full object-cover mx-auto"
        />
      </div>

      <div className="font-semibold text-7xl p-10 mt-20 text-left">
        <span className="text-purple-600">Human experiences</span> are the foundation of everything we do – client relationships, team collaboration and an unwavering focus on the end user. This philosophy is in our name, our core values and underpins our approach to every engagement.
      </div>

      <ImageSlider />

      <div className="text-black text-6xl text-justify font-semibold p-10 mt-20 max-w-[60%] mr-auto">
        Since 2010 we’ve been working with amazing <span className="text-purple-600">clients</span> to create meaningful impact and compelling experiences.
      </div>

      <ClientLogo />

      <div className="text-black text-6xl text-left font-semibold ml-20 p-10 mt-20 max-w-[80%] mr-auto">
        Our <span className="text-purple-600">capabilities</span> are centred around our ability to deliver world-class websites and apps. We’re 100% in-house and work end-to-end, ensuring each project is delivered to the highest standard.
      </div>

      {/* This is the quote that triggers bg change */}
      <div
        ref={quoteRef}
        className="text-white text-8xl ml-20 text-justify font-semibold p-10 mt-80 max-w-[80%] mr-auto"
      >
        “It was one of the most extraordinary experiences we have had in 24 years of business. Why? Because you challenged us and helped us articulate something very special.”
      </div>
      <div
        ref={quoteRef}
        className="text-white text-8xl ml-20 text-justify font-semibold p-10 mt-80 max-w-[80%] mr-auto"
      >
        We're a team of makers, thinkers, explorers and theatre singers. We approach work and play with curiosity and experimentation, using what we learn to create meaningful digital products that connect with people, just like you.      </div>
    </div>
  );
};

export default About;
