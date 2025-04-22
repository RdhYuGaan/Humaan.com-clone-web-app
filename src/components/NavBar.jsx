import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showExpertise, setShowExpertise] = useState(false);
  const selected = location.pathname;

  const handleNavigation = (path) => {
    setShowExpertise(false); // Close expertise panel if navigating
    navigate(path);
  };

  const toggleExpertise = () => {
    setShowExpertise(!showExpertise);
  };

  return (
    <>
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full px-6 py-2 flex gap-4 ">
        <button
          onClick={() => handleNavigation('/')}
          className={`font-bold cursor-pointer p-2 rounded-2xl 
          ${selected === '/' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300'}`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation('/about')}
          className={`font-bold cursor-pointer p-2 rounded-2xl 
          ${selected === '/about' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300'}`}
        >
          About
        </button>
        <button
          onClick={() => handleNavigation('/work')}
          className={`font-bold cursor-pointer p-2 rounded-2xl 
          ${selected === '/work' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300'}`}
        >
          Work
        </button>
        <button
          onClick={toggleExpertise}
          className={`font-bold cursor-pointer p-2 rounded-2xl 
          ${showExpertise ? 'bg-gray-200 text-black' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300'}`}
        >
          Expertise
        </button>
        <button
          onClick={() => handleNavigation('/contact')}
          className={`font-bold cursor-pointer p-2 rounded-2xl 
          ${selected === '/contact' ? 'bg-black text-[#24ef0e]' : 'hover:bg-gray-200 hover:text-[#24ef0e] transition-all duration-300'}`}
        >
          Contact
        </button>
      </div>

      {/* Expertise Box */}
      {showExpertise && (
        <div className=" fixed top-10 p-3 left-1/2  transform -translate-x-1/2 z-40 bg-white rounded-xl w-[60%] max-w-6xl">
          <div className="grid grid-cols-4 pt-12">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-4">What We Do</h3>
              <div className="space-y-4 text-sm">
                <button className="w-full text-left hover:bg-blue-100 px-2 py-1 rounded">🌐 Websites</button>
                <button className="w-full text-left hover:bg-green-100 px-2 py-1 rounded">💻 Web Apps</button>
                <button className="w-full text-left hover:bg-yellow-100 px-2 py-1 rounded">📱 Mobile Apps</button>
                <button className="w-full text-left hover:bg-pink-100 px-2 py-1 rounded">🛒 eCommerce</button>
                <button className="w-full text-left hover:bg-purple-100 px-2 py-1 rounded">📊 Data Vis</button>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-4">Design & UX</h3>
              <div className="space-y-4 text-sm">
                <button className="w-full text-left hover:bg-indigo-100 px-2 py-1 rounded">🔍 User Research</button>
                <button className="w-full text-left hover:bg-red-100 px-2 py-1 rounded">🎨 UX Design</button>
                <button className="w-full text-left hover:bg-orange-100 px-2 py-1 rounded">🧩 UI Design</button>
                <button className="w-full text-left hover:bg-yellow-100 px-2 py-1 rounded">🛠️ Prototyping</button>
                <button className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded">🧱 Design Systems</button>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-4">Technology</h3>
              <div className="space-y-4 text-sm">
                <button className="w-full text-left hover:bg-gray-200 px-2 py-1 rounded">🧠 Headless</button>
                <button className="w-full text-left hover:bg-blue-200 px-2 py-1 rounded">⚛️ React.js</button>
                <button className="w-full text-left hover:bg-yellow-200 px-2 py-1 rounded">📦 Payload CMS</button>
                <button className="w-full text-left hover:bg-red-200 px-2 py-1 rounded">🔥 Laravel</button>
                <button className="w-full text-left hover:bg-green-200 px-2 py-1 rounded">🌍 WordPress</button>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold mb-4">Experience</h3>
              <div className="space-y-4 text-sm">
                <button className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded">🏢 Commercial</button>
                <button className="w-full text-left hover:bg-pink-100 px-2 py-1 rounded">❤️ Not for Profit</button>
                <button className="w-full text-left hover:bg-yellow-100 px-2 py-1 rounded">💡 Innovation</button>
                <button className="w-full text-left hover:bg-blue-100 px-2 py-1 rounded">🎓 Education</button>
                <button className="w-full text-left hover:bg-green-100 px-2 py-1 rounded">🌐 Community</button>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
