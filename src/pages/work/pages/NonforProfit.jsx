import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Pictures from '../../../components/Pictures';
import SubNav from '../components/SubNav';
import HeroContent from '../components/HeroContent';

const NonforProfit = () => {
  return (
    <div className='bg-[#f3f3e9] '>
      <Header />
      <div className="bg-[#f3f3e9]  flex flex-col items-start justify-start px-6 py-12">
        <HeroContent />
        <SubNav />
      </div>
      {/* Call Pictures component with background override */}
      <Pictures backgroundColor="#f3f3e9" />
      <Footer />
    </div>
  )
}

export default NonforProfit