import React from 'react';

function AuthorIntroduction() {
  return (
    <section className="w-full flex flex-col lg:flex-row mt-[40px] sm:mt-[60px] md:mt-[100px] px-4 sm:px-6 md:px-10 lg:px-[150px] gap-8 lg:gap-12">
      
      {/* Left Div */}
      <div className="flex flex-col max-w-[610px] w-full">
        {/* Main Heading */}
        <div className="text-black font-manrope text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[28px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] font-semibold tracking-tight mb-4 sm:mb-6">
          Meet with your Dr. John Panepinto.
        </div>

        {/* Gray Box with Button */}
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

        {/* 3 Light Text Lines */}
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
      <div className="relative flex justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-[650px]">
        {/* Vertical Image on Left */}
        <img
          src="src/assets/pinto.jpg"
          alt="Vertical"
          className="w-[240px] sm:w-[280px] md:w-[300px] h-auto object-cover rounded-lg flex-shrink-0"
        />

        {/* Two stacked images on the right */}
        <div className="flex flex-col justify-between space-y-3 sm:space-y-4">
          <img
            src="src/assets/chinese.jpg"
            alt="Top Right"
            className="w-[240px] sm:w-[280px] md:w-[300px] h-[100px] sm:h-[200px] md:h-[260px] object-cover rounded-lg"
          />
          <img
            src="src/assets/with_dog.jpg"
            alt="Bottom Right"
            className="w-[240px] sm:w-[280px] md:w-[300px] h-[100px] sm:h-[200px] md:h-[260px] object-cover rounded-lg"
          />
        </div>

        {/* Transparent overlay box */}
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
    </section>
  );
}

export default AuthorIntroduction;
