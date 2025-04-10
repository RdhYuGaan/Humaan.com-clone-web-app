import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { GiPolarStar } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";



const Footer = () => {
    const words = ["great", "amazing", "awesome", "fantastic", "incredible", "delightful",
        "wonderful", "epic", "original", "engaging", "click"
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade(true); // Start fading in
            }, 500); // Duration of fade-out effect
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const box=useRef();

    return (
        <div className="flex flex-col justify-between bg-white text-black">
            <section className="w-full px-20 pb-30 pt-12">
                <h1 className="text-[64px] leading-tight hover:text-[#24ef0e] cursor-pointer items-center justify-center font-semibold max-w-5xl">
                    Let’s make{" "}
                    <span className="text-[#24ef0e] inline-block align-middle"><FaArrowRight /></span>
                    <br />
                    something{" "}
                    <span
                        className={`inline-block transition-opacity duration-500 ease-in-out ${
                            fade ? "opacity-100" : "opacity-0"
                        } text-black hover:text-[#24ef0e]`}
                    >
                        {words[currentWordIndex]}
                    </span>
                </h1>
            </section>

            {/* Bottom Contact Info */}
            <div className="space-y-2 pb-20 px-20">
                <div className="flex items-center font-bold gap-2 ">
                    <span className="text-lg"><TfiWorld /></span> We work globally
                </div>
                <div>
                    <a href="#" className="font-semibold flex gap-2 items-center ">
                        Submit a brief <FaArrowRight />
                    </a>
                </div>
                <div>
                    <a href="mailto:contact@humaan.com" className="font-bold hover:underline">
                        contact@humaan.com
                    </a>
                </div>                    
            </div>
            

            {/* Footer Links */}
            <footer className="w-full px-6 pb-30 border-t border-[#A2F89C] mt-16">
                <div className="flex flex-col md:flex-row font-bold pt-14 justify-between items-start text-sm text-black space-y-6 md:space-y-0">
                    <div className="space-y-2">
                        <div className="text-xs text-neutral-500">
                            <div className="font-bold text-md text-black">
                                HUMAAAN ©2025{" "}
                                <a href="#" className="underline font-semibold">
                                    Privacy
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex  flex-col items-end space-y-4 text-right">
                        <div className="flex space-x-4 items-center">
                            <div className='hover:bg-black hover:text-white rounded-3xl px-2 py-1 gap-2'>
                                <button className="line-through cursor-pointer">
                                    Twitter X
                                </button>
                            </div>
                            <div className='hover:bg-black hover:text-white rounded-3xl px-2 py-1 gap-2'>
                                <button className="text-[#A2F89C]"><GiPolarStar /></button>
                                <a href="#">
                                    Instagram
                                </a>
                            </div>
                            <div className='hover:bg-black hover:text-white rounded-3xl px-2 py-1 gap-2'>
                                <button className="text-[#A2F89C]"><GiPolarStar /></button>
                                <a href="#">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
