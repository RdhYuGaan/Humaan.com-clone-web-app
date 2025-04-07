import React, { useRef, useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import sample01 from '../assets/videos/sample01.mp4';

function Home() {
    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [videoHeight, setVideoHeight] = useState(0);

    useEffect(() => {
        // Get video height to ensure smooth scaling
        if (videoRef.current) {
            setVideoHeight(videoRef.current.clientHeight);
        }

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    // Adjust the scale based on how much of the video is in the viewport
    const scale = Math.min(1 + scrollY / 1500, 2);

    const bgColor = scrollY > 1600 ? 'bg-[#590080]' : 'bg-[#f3f3e9]';

    return (
        <div>
            {/* Navbar */}
            <div className="flex items-center justify-between w-full p-4 bg-[#f3f3e9] top-0 z-50">
                <div className="font-bold text-xl text-black">HUMAAAN</div>
                <div className="pr-140">
                    <NavBar />
                </div>
                <div className="w-8 h-8 rounded-tl-full rounded-bl-full flex items-center justify-center">
                    😊
                </div>
            </div>

            {/* Hero Text */}
            <div className="bg-[#f3f3e9] px-10 pb-75 pt-80 py-16">
                <h1 className="text-9xl md:text-9xl font-bold text-green-900 mb-8">
                    Extraordinary <br /> Digital Experiences
                </h1>
            </div>

            {/* Video Section */}
            <div className={`p-20 md:p-20 relative transition-colors duration-700 ${bgColor}`}>
                <video
                    ref={videoRef}
                    className="w-full rounded-3xl shadow-lg"
                    style={{
                        transform: `scale(${scale})`,
                        transition: 'transform 0.6s ease-out',
                        objectFit: 'cover', // Make sure video covers the area smoothly
                    }}
                    src={sample01}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                />

                {/* Video Controls */}
                <div className="absolute bottom-10 right-10 flex">
                    <button
                        onClick={togglePlay}
                        className="bg-black/50 text-white px-4 py-2 rounded-tl-full rounded-bl-full shadow hover:bg-black/20"
                    >
                        {isPaused ? ' ▶️' : ' ⏸️'}
                    </button>
                    <button
                        onClick={toggleMute}
                        className="bg-black/50 text-white px-4 py-2 rounded-tr-full rounded-br-full shadow hover:bg-black/20"
                    >
                        {isMuted ? ' 🔊' : '🔇'}
                    </button>
                </div>
            </div>

            {/* Purple Section After Video */}
            <div className="bg-[#590080] h-screen flex items-center justify-center pt-150 px-10 py-24 text-center">
                <h1 className="text-9xl md:text-9xl font-bold text-white ">
                    We design, build and ship world-class digital products for forward-thinking brands.
                </h1>
            </div>

        </div>
    );
}

export default Home;
