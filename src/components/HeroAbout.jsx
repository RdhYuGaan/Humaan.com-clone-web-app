import React from 'react'
import Pic1 from '../assets/pictures/pic1.jpg'
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const stats = [
    {
        number: "100%",
        label: "In-house &  independent",
    },
    {
        number: "15",
        label: "Years crafting digital experiences",
    },
    {
        number: "80+",
        label: "Awards from AWA, FWA, and Awwwards",
    },
];

export default function HeroAbout() {
    return (
        <div className="bg-[#f8f8ed] text-[#0f241d] min-h-screen flex items-center justify-center py-16 px-6 md:px-20">
            <div>
                <h1 className="text-left text-6xl md:text-9xl font-semibold leading-tight">
                    Great work for <br />
                    great{' '}
                    <span className="inline-block align-middle">
                        <RiEmotionHappyLine className="text-6xl md:text-9xl" />
                    </span>{' '}
                    people.
                </h1>

                <div className="max-w-7xl pt-20 grid md:grid-cols-2 gap-12 items-center justify-center ">
                    {/* LEFT SIDE */}
                    <div className="">
                        <p className="mt-6 text-left text-xl max-w-md font-semibold leading-relaxed">
                            We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users,
                            we’re able to solve unique problems, accelerate progress and unlock potential for our clients.
                            <br /><br />
                            Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.
                        </p>
                        <button className="mt-6 flex px-5 py-2 bg-[#0f241d] text-white gap-3 items-center justify-center  rounded-full text-sm hover:bg-[#1c3a2d] transition">
                            About Us <FaArrowRight className='text-[#24ef0e]' />
                        </button>

                        <div className="bg-[#f8f8ed] text-[#0f241d] w-full max-w-md divide-y divide-[#d5d5c9]">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start justify-between py-6"
                                >
                                    <p className="text-2xl font-bold">{item.number}</p>
                                    <p className="text-right text-base leading-snug max-w-[60%]">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">
                        <img
                            src={Pic1}
                            alt="Team"
                            className="rounded-2xl shadow-lg w-[1000px] h-[600px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
