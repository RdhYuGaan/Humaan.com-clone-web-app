import React from 'react'
import { members } from '../../data/cardData'

const Members = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-40 bg-[#edf2f7]">
            {members.map((members, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl">
                    <img
                        src={members.image}
                        alt={members.name}
                        className="w-full h-100 object-cover"
                    />
                    <div className=" absolute bottom-4 ml-20 transform  flex items-center gap-2 bg-white text-black px-3 py-2 rounded-full shadow-md">
                        <span className="bg-[#070035] text-[#82d7ff] text-sm font-semibold px-3 py-1 rounded-full">
                            {members.name}
                        </span>
                        <span className="text-sm text-black font-medium ">
                            {members.roll}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Members