import React from 'react'
import icon from '../assets/icons/icon.png';
import { NavBar } from './NavBar';

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full p-4 bg-[#f3f3e9] top-0 z-50">
            {/* Logo */}
            <div className="font-bold text-xl text-black">HUMAAAN</div>

            {/* Navigation */}
            <div className="flex-grow flex justify-center">
                <NavBar />
            </div>

            {/* Icon */}
            <div className="w-24 h-24 flex items-center justify-center">
                <img className="cursor-pointer" src={icon} alt="icon" />
            </div>
        </div>
    );
};

export default Header;