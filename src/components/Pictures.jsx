import React from 'react'
import sample03 from '../assets/videos/sample03.mp4'
import Pic1 from '../assets/pictures/pic1.jpg'
import Pic2 from '../assets/pictures/pic2.jpeg'
import Pic3 from '../assets/pictures/pic3.jpeg'
import Pic4 from '../assets/pictures/pic4.jpeg'

const Pictures = ({backgroundColor="#b488f1"}) => {
    return (
        <div 
    style={{ backgroundColor }}
    className='min-h-screen flex flex-col items-center px-4 md:px-10 py-8 md:py-16 space-y-8 md:space-y-16'
>

    {/* Pic1 with video inside */}
    <div className='relative w-full max-w-[1600px] h-[500px] md:h-[1000px] rounded-3xl shadow-xl overflow-hidden'>
        <img
            src={Pic1}
            alt="icon"
            className='absolute top-0 left-0 w-full h-full object-cover'
        />
        <div className='absolute flex items-center justify-center w-full h-full p-4 md:p-10'>
            <div className='w-full max-w-[1100px] h-[300px] md:h-[700px] rounded-3xl overflow-hidden'>
                <video
                    className='w-full h-full object-cover rounded-3xl'
                    src={sample03}
                    autoPlay
                    loop
                    muted
                />
            </div>
        </div>
    </div>

    {/* Grid Section */}
    <div className='w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
        <div className='h-[500px] md:h-[950px]'>
            <img
                src={Pic2}
                alt="Slim laptop"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
        </div>
        <div className='h-[500px] md:h-[950px]'>
            <img
                src={Pic3}
                alt="Futuristic car"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
        </div>
    </div>

    {/* Bottom Picture (Pic4) */}
    <div className='w-full max-w-[1600px] h-[500px] md:h-[1000px] rounded-3xl shadow-xl'>
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
