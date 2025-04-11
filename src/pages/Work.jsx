import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pictures from '../components/Pictures';

const Work = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const handleNavigation = (path) => {
        navigate(path);
    };
    const selected = location.pathname; // Get the current path


    return (
        <div>
            <Header />
            <div className="bg-[#f3f3ea] min-h-screen flex flex-col items-start justify-start px-6 py-12">
                <div className="mt-20 px-12">
                    <h1 className="text-5xl md:text-8xl font-semibold leading-tight text-[#0d1b06]">
                        World-class digital <br /> products, idea to execution.
                    </h1>

                    <div className="flex flex-wrap gap-4 rounded-full  mt-20 px-6 py-1">

                        <button
                            onClick={() => handleNavigation('/work')}
                            className={`font-bold cursor-pointer p-2  bg-white text-black rounded-full 
                            ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}
                        >
                            Featured
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/commercial')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Commercial
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/non-profit')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Not for Profit
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/community')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Community & Purpose
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/innovation')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Innovation
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/ui-ux')}
                           className={`font-bold cursor-pointer p-2 rounded-2xl 
                             ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            UI & UX
                        </button>
                    </div>

                </div>
            </div>


            {/* Call Pictures component with background override */}
            <Pictures backgroundColor="#f3f3e9" />

            <Footer />
        </div>
    );
};

export default Work;
