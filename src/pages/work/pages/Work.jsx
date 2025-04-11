import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Pictures from '../../../components/Pictures';
import SubNav from '../components/SubNav';
import HeroContent from '../components/HeroContent';

const Work = () => {



    return (
        <div className='bg-[#f8f8ed] '>
            <Header />
            <div className="bg-[#f3f3ea] min-h-screen flex flex-col items-start justify-start px-6 py-12">
                <HeroContent />
                <SubNav />
            </div>
            {/* Call Pictures component with background override */}
            <Pictures backgroundColor="#f3f3e9" />
            <Footer />
        </div>
    );
};

export default Work;
