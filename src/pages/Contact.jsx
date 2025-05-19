import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Header from '../components/Header';
import { FaArrowRight } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import FooterLinks from '../components/FooterLinks';

const Contact = () => {

    const textItem = useRef(null);

    useEffect(() => {
        gsap.to(textItem.current, {
            duration: 2.2,
            opacity: 10,

            y: -80,
            ease: "power3.easOut"
        });
    }, []);

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-b from-purple-400 to-white'>
            <Header />
            <div className='text-9xl ml-20 mt-20 '>
                <h1
                    ref={textItem}
                    className=" font-bold text-white "
                >
                    We've got a <br /> great feeling <br /> about this
                </h1>
                <button className="mt-6 flex px-5 mb-10 py-2 bg-[#0f241d] text-white gap-3 items-center justify-center  rounded-full text-sm hover:bg-[#afdaab] hover:font-semibold hover:text-black transition">
                    Submit abrief <FaArrowRight className='text-[#24ef0e] hover:text-black' />
                </button>
            </div>
            <div className="space-y-2  px-20">
                <div className="flex items-center font-semibold gap-2 ">
                    <span className="text-lg"><TfiWorld /></span> We work globally
                </div>
                <div>
                    <a href="mailto:contact@humaan.com" className="font-semibold hover:underline">
                        contact@humaan.com
                    </a>
                </div>
            </div>

            <FooterLinks className="border-t border-[#A2F89C]" />
        </div>
    );

}

export default Contact