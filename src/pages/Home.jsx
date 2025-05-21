import React, { useRef,  useEffect } from 'react';
import Header from '../components/Header';
import MainVideo from '../components/MainVideo';
import LogoSection from '../components/LogoSection';
import Pictures from '../components/Pictures';
import HeroAbout from '../components/HeroAbout';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Gsap from '../components/gsap';
function Home() {
    return (
        <div className='bg-[#f3f3e9]'>
            {/* <Gsap /> */}
            <Header />
            {/* Hero Section */}
            <Hero />
            {/* main video section */}
            <MainVideo />
            {/* Logo Section */}
            <LogoSection />
            {/* Pictures Section */}
            <Pictures />
            {/* Hero About Section */}
            <HeroAbout />
            {/* Cards Section */}
            <Cards />
            {/* footer */}
            <Footer />
            

        </div>
    );
}

export default Home;
