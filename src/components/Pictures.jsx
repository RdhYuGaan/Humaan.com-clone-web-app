import React from 'react'
import sample02 from '../assets/videos/sample02.mp4'
import Pic1 from '../assets/pictures/pic1.jpg'
import Pic2 from '../assets/pictures/pic2.jpeg'
import Pic3 from '../assets/pictures/pic3.jpeg'
import Pic4 from '../assets/pictures/pic4.jpeg'

const Pictures = () => {
    return (
        <div className='bg-[#b488f1] min-h-screen flex flex-col items-center px-10 py-16 space-y-16'>
            
            {/* Pic1 with video inside */}
            <div className='relative w-[1600px] h-[1000px] rounded-3xl shadow-xl overflow-hidden'>
                <img
                    src={Pic1}
                    alt="icon"
                    className='absolute top-0 left-0 w-full h-full object-cover'
                />
                <div className='relative w-full h-full p-10'>
                    <div className='w-full h-full rounded-3xl overflow-hidden'>
                        <video
                            className='w-full h-full object-cover rounded-3xl'
                            src={sample02}
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                </div>
            </div>

            {/* Grid Section */}
            <div className='w-[1600px] h-[950px]'>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full">
                    <img
                        src={Pic2}
                        alt="Slim laptop"
                        className="w-full h-full object-cover rounded-3xl shadow-lg"
                    />
                    <img
                        src={Pic3}
                        alt="Futuristic car"
                        className="w-full h-full object-cover rounded-3xl shadow-lg"
                    />
                </section>
            </div>

            {/* Bottom Picture (Pic4) */}
            <div className='w-[1600px] h-[1000px] rounded-3xl shadow-xl overflow-hidden'>
                <img
                    src={Pic4}
                    alt="icon"
                    className='w-full h-full object-cover rounded-3xl'
                />
            </div>
        </div>
    )
}

export default Pictures