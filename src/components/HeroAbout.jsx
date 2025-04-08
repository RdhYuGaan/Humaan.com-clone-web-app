import React from 'react'
import Pic1 from '../assets/pictures/pic1.jpg'
export default function HeroAbout() {
    return (
      <section className="bg-[#f8f8ed] text-[#0f241d] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Great work for <br />
              great <span className="inline-block">😊</span> people.
            </h1>
  
            <p className="mt-6 text-lg max-w-md leading-relaxed">
              We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. <br /><br />
              By empowering users, we’re able to solve unique problems, accelerate progress and unlock potential for our clients.
            </p>
  
            <p className="mt-4 text-lg max-w-md leading-relaxed">
              Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.
            </p>
  
            <button className="mt-6 px-5 py-2 bg-[#0f241d] text-white rounded-full text-sm hover:bg-[#1c3a2d] transition">
              About Us →
            </button>
          </div>
  
          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <img
              src={Pic1}
              alt="Team"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
  
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-lg font-medium">
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="mt-1 text-sm">In-house & independent</p>
              </div>
              <div>
                <p className="text-3xl font-bold">15</p>
                <p className="mt-1 text-sm">Years crafting digital experiences</p>
              </div>
              <div>
                <p className="text-3xl font-bold">80+</p>
                <p className="mt-1 text-sm">Awards from AWA, FWA, and Awwwards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  