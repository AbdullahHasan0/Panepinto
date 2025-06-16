import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';

function Hero() {
  return (
    <section className="w-full mt-[142px] bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px]">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 min-h-[200px] h-[300px] sm:h-[400px] lg:h-full">
          <img
            src={heroImage}
            alt="Therapist comforting a client"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start relative p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* WE CARE */}
          <div className="flex items-center text-gray-500 font-manrope text-base sm:text-lg font-light tracking-normal">
            <div className="flex-grow max-w-[80%] border-t border-gray-500 mr-3"></div>
            <span className="font-semibold">WE CARE</span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug text-black font-manrope tracking-[-0.03em]">
            <span className="font-thin">You are </span>
            <span className="font-semibold">not alone,</span><br />
            we are always<br />
            <span className="font-semibold">together</span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-black font-manrope tracking-[-0.03em]">
            Let’s find a time to talk and support each other.
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-black text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-manrope tracking-[-0.04em] hover:bg-gray-800 transition-colors">
                Book an Appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="w-full sm:w-auto bg-white border border-black text-black rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-manrope tracking-[-0.04em] hover:bg-gray-100 transition-colors">
                Explore Services
              </button>
            </Link>
          </div>

          {/* Ratings Box */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-gray-200 rounded-lg flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-3 sm:px-6 py-3 sm:py-6 w-full min-w-[200px]">
            {/* Avatars */}
            <div className="flex items-center justify-center sm:justify-start flex-shrink-0">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=62&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=62&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=62&q=80',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Happy client ${i + 1}`}
                  className={`rounded-full border-2 border-white w-8 h-8 sm:w-10 sm:h-10 ${i !== 0 ? 'ml-[-8px] sm:ml-[-10px]' : ''}`}
                />
              ))}
            </div>

            {/* Rating Text */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start items-center space-x-2">
                <span className="text-sm sm:text-base md:text-lg font-semibold text-black">4.9</span>
                <div className="flex space-x-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#FFD700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.788 1.402 8.168L12 18.896l-7.336 3.861 1.402-8.168L.132 9.211l8.2-1.193z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-black font-manrope tracking-tight">
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