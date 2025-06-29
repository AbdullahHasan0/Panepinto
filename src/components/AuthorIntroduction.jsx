import React from 'react';
import pinto from '../assets/pinto.jpg';
import chinese from '../assets/chinese.jpg';
import withDog from '../assets/with_dog.jpg';

function AuthorIntroduction() {
  return (
    <section className="w-full flex justify-center mt-[40px] sm:mt-[60px] md:mt-[100px] px-4">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Div */}
        <div className="flex flex-col max-w-[610px] w-full">
          <div className="text-black font-manrope text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[28px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] font-semibold tracking-tight mb-4 sm:mb-6">
            Meet with your Dr. John Panepinto.
          </div>

          <div className="w-full h-[100px] sm:h-[120px] bg-gray-100 flex items-center justify-between px-4 sm:px-6 rounded-md mb-4 sm:mb-6">
            <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] text-black font-medium font-manrope leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px]">
              A Licensed Professional Nationally
              <br className="hidden sm:block" /> Certified Counsellor
            </p>
            <button 
              className="w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] rounded-full bg-black text-white flex items-center justify-center text-[22px] sm:text-[28px] hover:bg-gray-800 transition"
              aria-label="Learn more about Dr. John Panepinto"
            >
              ➜
            </button>
          </div>

          <div className="text-black font-manrope space-y-3 sm:space-y-4 mt-2">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px]">
              ✓ Personalized 1-on-1 sessions with certified therapists
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px]">
              ✓ Track your progress and goals with our mobile app
            </p>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px]">
              ✓ 24/7 support from our online community
            </p>
          </div>
        </div>

        {/* Right Div */}
        <div className="relative flex w-full max-w-[650px] gap-3 sm:gap-4">
          <img
            src={pinto}
            alt="Vertical"
            className="w-[45%] lg:w-[240px] md:w-[220px] h-auto object-cover rounded-lg"
          />

          <div className="flex flex-col gap-3 sm:gap-4 w-[55%]">
            <img
              src={chinese}
              alt="Top Right"
              className="w-full h-[150px] sm:h-[200px] md:h-[240px] lg:h-[260px] object-cover rounded-lg"
            />
            <img
              src={withDog}
              alt="Bottom Right"
              className="w-full h-[150px] sm:h-[200px] md:h-[240px] lg:h-[260px] object-cover rounded-lg"
            />
          </div>

          <div
            className="absolute flex flex-col items-center justify-center text-white text-center border-[4px] border-white rounded-[15px]"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '90px',
              backgroundColor: '#1FB271BF',
              fontFamily: 'Manrope',
            }}
          >
            <span className="font-medium text-[20px] sm:text-[24px] md:text-[28px]" style={{ letterSpacing: '-0.03em' }}>
              12k+
            </span>
            <span className="font-normal text-[12px] sm:text-[14px]" style={{ letterSpacing: '-0.03em' }}>
              cases handled
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AuthorIntroduction;
