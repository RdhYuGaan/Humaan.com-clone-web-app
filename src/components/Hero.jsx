import React from 'react';
import { NavBar } from './NavBar';

function Hero() {
    return (
        <div>
            {/* Fixed Nav */}
            <div className="flex items-center justify-between w-full p-4 bg-[#f3f3e9]  top-0 z-50">
                {/* Left: Logo */}
                <div className="font-bold text-xl text-black">HUMAAAN</div>

                {/* Center: Nav Links */}
                <div className='p-1'>
                    <NavBar />
                </div>




                {/* Right: Icon */}
                <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                    😊
                </div>
            </div>

            {/* Hero Content */}
            <div className="pt-50 flex justify-start items-start h-screen bg-[#f3f3e9]">
                <h1 className="text-9xl font-bold text-green-900 text-left leading-tight">
                    Extraordinary <br /> Digital Experiences
                </h1>
            </div>
            <div className="p-20 bg-[#f3f3e9]">
                <video
                    className="w-full rounded-lg shadow-lg"
                    controls
                >
                    <source src="/your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    );
}

export default Hero;
