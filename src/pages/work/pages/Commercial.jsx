import React from 'react';

import Header from '../../../components/Header';
import SubNav from '../components/SubNav';
import HeroContent from '../components/HeroContent';
import Pictures from '../../../components/Pictures';
import Footer from '../../../components/Footer';
const Commercial = () => {



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

export default Commercial;
