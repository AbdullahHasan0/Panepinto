import React from 'react';

function CTA() {
  return (
    <section className="w-full h-[162px] bg-[#AAF4D3] flex items-center justify-between px-4 sm:px-10 font-manrope">
      
      <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-bold text-black leading-tight tracking-[-0.02em]">
        Tell the problem, Don’t keep it to yourself!
      </h2>

      <a
        href="/contact"
        className="bg-black text-white rounded-full px-6 sm:px-10 py-3 sm:py-4 text-[14px] sm:text-[16px] font-light leading-[22px] tracking-[-0.02em] whitespace-nowrap hover:bg-gray-800 transition-colors duration-200"
      >
        Contact Us
      </a>
      
    </section>
  );
}

export default CTA;
