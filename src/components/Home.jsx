import React, { useRef,  useEffect } from 'react';
import Header from './Header';
import MainVideo from './MainVideo';
import LogoSection from './LogoSection';
import Pictures from './Pictures';
import HeroAbout from './HeroAbout';
import Hero from './Hero';
import Cards from './Cards';
import Footer from './Footer';
function Home() {
    return (
        <div>
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
