import React, { useRef, useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import sample01 from '../assets/videos/sample01.mp4';
import icon from '../assets/icons/icon.png';
import LogoSection from './LogoSection';
import Pic1 from '../assets/pictures/pic1.jpg';
import sample02 from '../assets/videos/sample02.mp4';
import Pictures from './Pictures';

function Home() {
    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(true);




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



    const bgColor = scrollY > 1600 ? 'bg-[#590080]' : 'bg-[#f3f3e9]';

    return (
        <div>
            {/* Navbar */}
            <div className="flex items-center justify-between w-full p-4 bg-[#f3f3e9] top-0 z-50">
                <div className="font-bold text-xl  text-black">HUMAAAN</div>
                <div className="flex-grow flex justify-center">
                    <NavBar />
                </div>
                <div className="w-24 h-24 flex  items-center justify-center">
                    <img
                        className=" cursor-pointer"
                        src={icon}
                        alt="icon" />
                </div>
            </div>

            {/* Hero Text */}
            <div className="bg-[#f3f3e9] px-10 pb-75 pt-80 py-16">
                <h1 className="text-9xl md:text-9xl font-bold text-green-900 mb-8">
                    Extraordinary <br /> Digital Experiences
                </h1>
            </div>

            {/* Video Section */}
            <div className={`p-20 md:p-20 relative transition-colors duration-700 `}>
                <div className="relative w-full">
                    <video
                        ref={videoRef}
                        className="w-full rounded-3xl shadow-lg"
                        style={{
                        }}
                        src={sample01}
                        autoPlay
                        loop
                        playsInline
                    />

                    {/* Video Controls */}
                    <div className="absolute bottom-10 right-10 flex z-10">
                        <button
                            onClick={togglePlay}
                            className="bg-black/50 text-white px-4 py-2 rounded-tl-full rounded-bl-full shadow hover:bg-black/20"
                        >
                            {isPaused ? ' ▶️' : ' ⏸️'}
                        </button>
                        <button
                            onClick={toggleMute}
                            className="bg-black/50 text-white px-4 py-2 rounded-tr-full rounded-br-full shadow hover:bg-black/20 "
                        >
                            {isMuted ? ' 🔊' : '🔇'}
                        </button>
                    </div>
                </div>
            </div>

            {/* logo page */}
            <LogoSection />
            {/* pictures page */}
            <Pictures />


        </div>
    );
}

export default Home;
