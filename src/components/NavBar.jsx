import React from 'react';

export const NavBar = () => {
 
  return (
    <div 
    
    className="bg-white fixed rounded-full px-6 py-2  flex gap-4">
      <button className="text-black font-bold hover:bg-black hover:text-[#24ef0e] cursor-pointer p-2 rounded-2xl">Home</button>
      <button className="text-black font-bold hover:bg-black hover:text-[#24ef0e] cursor-pointer p-2 rounded-2xl">About</button>
      <button className="text-black font-bold hover:bg-black hover:text-[#24ef0e] cursor-pointer p-2 rounded-2xl">Work</button>
      <button className="text-black font-bold hover:bg-black hover:text-[#24ef0e] cursor-pointer p-2 rounded-2xl">Expertice</button>
      <button className="text-black font-bold hover:bg-black hover:text-[#24ef0e] cursor-pointer p-2 rounded-2xl">Contact</button>
    </div>
  );
};
