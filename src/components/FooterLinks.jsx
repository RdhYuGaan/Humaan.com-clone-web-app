import React from 'react'
import { GiPolarStar } from "react-icons/gi";

const FooterLinks = () => {
    return (
        <footer className="w-full px-6 pb-30 border-t border-[#A2F89C] mt-16">
            <div className="flex flex-col md:flex-row font-bold pt-14 justify-between items-center md:items-start text-sm text-black text-center md:text-left space-y-6 md:space-y-0">
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
                <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
                    <div className="flex space-x-4 items-center">
                        <div className='hover:bg-black hover:text-white rounded-3xl px-2 py-1 gap-2'>
                            <button className="line-through cursor-pointer">
                                Twitter X
                            </button>
                        </div>
                        <div className='hover:bg-black hover:text-white rounded-3xl px-2 py-1 gap-2'>
                            <button className="text-[#A2F89C]"><GiPolarStar /></button>
                            <a href="#">Instagram</a>
                        </div>
                        <div className='hover:bg-black hover:text-white rounded-3xl px-2 py-1 gap-2'>
                            <button className="text-[#A2F89C]"><GiPolarStar /></button>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterLinks