import React, { useRef, useState, useEffect } from 'react';
import sample01 from '../assets/videos/sample01.mp4';
import gsap from 'gsap';

const MainVideo = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);  
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [bgColor, setBgColor] = useState('#f3f3e9');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.99) {
          setBgColor('#b488f1');
        } else {
          setBgColor('#f3f3e9');
        }
      },
      {
        threshold: 0.99,
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
  const toAnim = gsap.to(videoRef.current, {
    scale: 1.2,
    scrollTrigger: {
      trigger: videoRef.current,
      start: "top 80%",
      end: "top 20%",
      markers: true,
      scrub: true,
    },
  });

  const fromAnim = gsap.from(videoRef.current, {
    scale: 0.8,
    scrollTrigger: {
      trigger: videoRef.current,
      start: "top -60%",
      end: "top -80%",
      markers: true,
      scrub: true,
    },
  });

  return () => {
    // ✅ Clean up the animations when component unmounts
    toAnim.scrollTrigger.kill();
    fromAnim.scrollTrigger.kill();
  };
}, []);

  


  return (
    <div
      
      className="p-20 md:p-20 relative transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-full">
        <video
          ref={videoRef}          
          className=" rounded-3xl shadow-lg transition-transform duration-500"
          src={sample01}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />

        {/* Video Controls */}
        <div className="absolute bottom-10  right-10 flex z-10">
          <button
            onClick={togglePlay}
            className="bg-black/50 text-white px-4 py-2 rounded-tl-full rounded-bl-full shadow hover:bg-black/20"
          >
            {isPaused ? '▶️' : '⏸️'}
          </button>
          <button
            onClick={toggleMute}
            className="bg-black/50 text-white px-4 py-2 rounded-tr-full rounded-br-full shadow hover:bg-black/20"
          >
            {isMuted ? '🔊' : '🔇'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
