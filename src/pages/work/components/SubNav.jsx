import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
const SubNav = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const handleNavigation = (path) => {
        navigate(path);
    };
    const selected = location.pathname; // Get the current path

  return (
    <div className="flex flex-wrap gap-4  rounded-full  pt-14 px-6 py-1">

                        <button
                            onClick={() => handleNavigation('/work')}
                            className={`font-bold cursor-pointer p-2   rounded-full 
                            ${selected === '/work' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}
                        >
                            Featured
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/commercial')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/work/commercial' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Commercial
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/non-profit')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/work/non-profit' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Not for Profit
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/community')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/work/community' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Community & Purpose
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/innovation')}
                            className={`font-bold cursor-pointer p-2 rounded-2xl 
                            ${selected === '/work/innovation' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            Innovation
                        </button>
                        <button
                            onClick={() => handleNavigation('/work/ui-ux')}
                           className={`font-bold cursor-pointer p-2 rounded-2xl 
                             ${selected === '/work/ui-ux' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300 ease-in-out'}`}                            >
                            UI & UX
                        </button>
                    </div>
  )
}

export default SubNav