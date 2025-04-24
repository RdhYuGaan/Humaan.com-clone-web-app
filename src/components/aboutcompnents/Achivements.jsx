import React from 'react'
import { achievements } from '../../data/cardData'
import { FaPlus } from "react-icons/fa";

const Achivements = () => {
    return (
        <div className='min-h-screen py-10 px-5 '>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {achievements.map((achievement, index) => (
                    <div key={index}
                        className='bg-[#e4eef3] rounded-2xl p-6 flex items-center shadow-md h-80 w-80 justify-center'>
                        <img src={achievement.logo} alt={achievement.name} className='max-h-16 object-contain' />

                    </div>
                ))}
            </div>
            <button className="flex items-center space-x-2 mt-10 cursor-pointer hover:bg-blue-300 bg-white text-black font-medium px-4 py-2 rounded-full shadow">
                <div className="bg-[#070035] text-[#82d7ff] rounded-full p-1">
                <FaPlus />
                </div>
                <span>See all awards</span>
            </button>

        </div>
    )
}

export default Achivements