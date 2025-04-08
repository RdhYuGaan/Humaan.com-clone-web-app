import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import sample01 from '../assets/videos/sample01.mp4';

import LogoSection from './LogoSection';
import Pictures from './Pictures';
import HeroAbout from './HeroAbout';

function Home() {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [scale, setScale] = useState(1);
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
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;
    
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            if (rect.top < windowHeight && rect.bottom > 0) {
                const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
                const visibilityRatio = visibleHeight / rect.height;
    
                const newScale = Math.min(1 + Math.min(visibilityRatio - 0.5, 0.5), 1.2);
                setScale(visibilityRatio >= 0.5 ? newScale : 1);
    
                // ✅ Trigger color change if 60%+ visible and has scrolled up a bit
                if (visibilityRatio >= 0.6 && rect.top < windowHeight / 2) {
                    setBgColor('#b488f1');
                } else {
                    setBgColor('#f3f3e9');
                }
            } else {
                setScale(1);
                setBgColor('#f3f3e9');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <div>
            <Header />
            {/* Hero Section */}
            <div className="bg-[#f3f3e9] px-10 pt-80 py-16">
                <h1 className="text-9xl font-bold text-green-900 mb-8">
                    Extraordinary <br /> Digital Experiences
                </h1>
            </div>

            {/* Video Section with Scroll Animation */}
            <div
                ref={sectionRef}
                className="p-20 md:p-20 relative transition-colors duration-700"
                style={{ backgroundColor: bgColor }}
            >
                <div className="relative w-full">
                    <video
                        ref={videoRef}
                        className="w-full rounded-3xl shadow-lg transition-transform duration-500"
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: 'center center',
                        }}
                        src={sample01}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                    />

                    {/* Video Controls */}
                    <div className="absolute bottom-10 right-10 flex z-10">
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

            {/* Logo Section */}
            <LogoSection />

            {/* Pictures Section */}
            <Pictures />

            {/* Hero About Section */}
            <HeroAbout />
        </div>
    );
}

export default Home;
