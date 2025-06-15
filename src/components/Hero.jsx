import React from 'react';
import heroImage from '../assets/hero.jpg'; // Adjust the path as needed

function Hero() {
  return (
    <section className="w-full mt-[142px] bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px]">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-full">
          <img
            src={heroImage}
            alt="Therapist comforting a client"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start relative p-6 md:p-8 lg:p-[100px]">
          
          {/* WE CARE line */}
          <div className="flex items-center text-gray-500 font-manrope text-lg font-light tracking-normal">
            <div className="flex-grow border-t border-gray-500 mr-3"></div>
            <span className="font-semibold">WE CARE</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 text-[36px] sm:text-[48px] lg:text-[64px] leading-[44px] sm:leading-[60px] lg:leading-[72px] text-black font-manrope tracking-[-0.03em]">
            <span className="font-thin">You are </span>
            <span className="font-semibold">not alone,</span><br />
            we are always<br />
            <span className="font-semibold">together</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-lg sm:text-2xl text-black font-manrope tracking-[-0.03em]">
            Let’s find a time to talk and support each other.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="/contact">
            <button className="bg-black text-white rounded-full px-6 py-3 text-sm font-manrope font-normal tracking-[-0.04em] hover:bg-gray-800 transition-colors">
              Book an Appointment
            </button>
            </a>
            <a href="/services">
            <button className="bg-white border border-black text-black rounded-full px-6 py-3 text-sm font-manrope font-normal tracking-[-0.04em] hover:bg-gray-100 transition-colors">
              Explore Services
            </button>
            </a>
          </div>

          {/* Ratings Box */}
          <div className="mt-8 sm:mt-12 bg-gray-200 rounded-lg flex items-center px-4 sm:px-6 py-4 sm:py-6 w-full max-w-[760px]">
            
            {/* Overlapping Images */}
            <div className="flex items-center -space-x-4">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=62&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=62&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=62&q=80'
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Happy client ${i + 1}`}
                  className="w-[48px] sm:w-[62px] h-[48px] sm:h-[62px] rounded-full border-2 border-white"
                />
              ))}
            </div>

            {/* Rating & Text */}
            <div className="ml-4 sm:ml-6">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-black">4.9</span>
                <div className="flex space-x-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFD700"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.788 1.402 8.168L12 18.896l-7.336 3.861 1.402-8.168L.132 9.211l8.2-1.193z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-1 text-sm text-black font-manrope tracking-tight">
                Rating reviews from 12k+ people
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
