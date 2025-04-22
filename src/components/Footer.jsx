import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

import { TfiWorld } from "react-icons/tfi";
import FooterLinks from './FooterLinks';



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

    const box = useRef();

    return (
        <div className="flex flex-col justify-between bg-white text-black">
            <div className="w-full px-20 pb-30 pt-12">
                <h1 className="text-[64px] leading-tight cursor-pointer items-center justify-center font-semibold max-w-5xl group hover:text-[#24ef0e] transition-colors duration-300">
                    Let’s make{" "}
                    <span className="text-[#24ef0e] inline-block align-middle">
                        <FaArrowRight />
                    </span>
                    <br />
                    something{" "}
                    <span
                        className={`inline-block transition-all duration-500 ease-in-out  ${fade ? "opacity-100" : "opacity-0"
                            } group-hover:text-[#24ef0e]`}
                    >
                        {words[currentWordIndex]}
                    </span>
                </h1>
            </div>

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
            <FooterLinks />
            
        </div>
    );
}

export default Footer;
