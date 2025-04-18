import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location= useLocation();

  const handleNavigation = (path) => {
   
    navigate(path);
  };
  const selected = location.pathname; // Get the current path

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full px-6 py-2 flex gap-4 ">
      <button
        onClick={() => handleNavigation('/')}
        className={` font-bold cursor-pointer p-2 rounded-2xl 
        ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}
      >
        Home
      </button>
      <button
        onClick={() => handleNavigation('/about')}
        className={`font-bold cursor-pointer p-2 rounded-2xl 
        ${selected === '/about' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}
      >
        About
      </button>
      <button
        onClick={() => handleNavigation('/work')}
        className={` font-bold cursor-pointer p-2 rounded-2xl 
        ${selected === '/work' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}
      >
        Work
      </button>
      <button
        onClick={() => handleNavigation('/expertice')}
        className={` font-bold cursor-pointer p-2 rounded-2xl 
        ${selected === '/expertice' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}
      >
        Expertise
      </button>
      <button
        onClick={() => handleNavigation('/contact')}
        className={` font-bold cursor-pointer p-2 rounded-2xl 
        ${selected === '/contact' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}
      >
        Contact
      </button>
    </div>
  );
};
