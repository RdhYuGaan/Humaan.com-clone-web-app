import React from 'react'
import sample02 from '../assets/videos/sample02.mp4'
import Pic1 from '../assets/pictures/pic1.jpg'

const Pictures = () => {
  return (
    <div className='bg-[#b488f1] h-screen p-20 flex items-center justify-center px-10 py-16'>
                <div className='relative w-[1600px] max-h-[120vh] rounded-3xl shadow-xl overflow-hidden'>

                    {/* Background Image */}
                    <img
                        src={Pic1}
                        alt="icon"
                        className='absolute top-0 left-0 w-full h-full object-cover'
                    />

                    {/* Video inside with rounded corners */}
                    <div className='relative w-full h-full p-20'>
                        <div className='w-full h-full rounded-3xl overflow-hidden'>
                            <video
                                className='w-full h-full object-cover'
                                src={sample02}
                                autoPlay
                                loop
                                muted
                            />
                        </div>
                    </div>

                </div>
            </div>
  )
}

export default Pictures
