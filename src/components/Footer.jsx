import React from 'react'

const Footer = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white text-black">
            {/* Hero Section */}
            <section className="w-full px-20 pt-12">
                <h1 className="text-[64px] leading-tight font-semibold max-w-5xl">
                    Let’s make{" "}
                    <span className="text-[#A2F89C] inline-block ">→</span>
                    <br />
                    something beautiful
                </h1>
            </section>
            <div className="space-y-2  px-20">
                <div className="flex items-center text-bold gap-2 font-medium">
                    <span className="text-lg">🌐</span> We work globally
                </div>
                <div>
                    <a href="#" className="text-semibold inline-block">
                        Submit a brief →
                    </a>
                </div>
                <div>
                    <a href="mailto:contact@humaan.com" className="text-bold hover:underline">
                        contact@humaan.com
                    </a>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="w-full px-6 pt-10 pb-6 border-t border-[#A2F89C] mt-16">
                <div className="flex flex-col md:flex-row justify-between items-start text-sm text-black space-y-6 md:space-y-0">
                    {/* Left Block */}
                    <div className="space-y-2">
                        <div className="text-xs text-neutral-500">
                            <span className="font-bold">humaan</span> © 2025{" "}
                            <a href="#" className="underline">
                                Privacy
                            </a>
                        </div>

                    </div>

                    {/* Right Block */}
                    <div className="flex flex-col items-end space-y-4 text-right">
                        <div className="flex space-x-4 items-center">
                            <span className="line-through hover:underline cursor-pointer">
                                Twitter X
                            </span>
                            <span className="text-[#A2F89C]">✴</span>
                            <a href="#" className="hover:underline">
                                Instagram
                            </a>
                            <span className="text-[#A2F89C]">✴</span>
                            <a href="#" className="hover:underline">
                                LinkedIn
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer