import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Contact = () => {

    const textItem = useRef(null);

    useEffect(() => {
      gsap.to(textItem.current, {
        duration: 2.2,
        opacity: 10,
        
        y:-80,
        ease: "power3.easOut"
      });
    }, []);
  
    return (
        <div className='max-w-screen  bg-purple-300 bg-gradient-to-b '>
            <Header/>
            <h1
                ref={textItem}
                className="text-9xl  font-bold text-white "
            >
                We've got a <br/> great feeling about <br/> this
            </h1>
            <Footer />
        </div>
    )
}

export default Contact