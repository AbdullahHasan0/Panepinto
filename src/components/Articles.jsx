import React from 'react';
import articleImg from '../assets/articles.jpg'; // adjust path as needed

function Articles() {
  return (
    <section className="relative bg-white mx-auto w-full max-w-[1300px] pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-10 md:pb-20 px-4 sm:px-6 md:px-10 mt-4 sm:mt-6 md:mt-8 box-border">
      {/* Heading */}
      <h2 className="font-manrope text-black text-center font-normal text-2xl sm:text-3xl md:text-5xl leading-tight sm:leading-snug md:leading-[60px] tracking-[-0.03em] max-w-[602px] mx-auto mb-4 sm:mb-6 md:mb-10">
        We create and agile tests for Experience Management
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {Array.from({ length: 9 }).map((_, index) => (
          <article
            key={index}
            className="flex flex-col bg-white rounded-md overflow-hidden w-full max-w-[375px] mx-auto box-border p-2"
            style={{ minHeight: '580px' }}
          >
            {/* Image Holder */}
            <div className="w-full h-[300px] sm:h-[440px] bg-gray-300 overflow-hidden rounded-t-md">
              <img src={articleImg} alt="Article" className="w-full h-full object-cover" />
            </div>

            {/* Title + Button */}
            <div className="flex items-center justify-between mt-4 sm:mt-6">
              <h3 className="font-manrope text-[#333] font-normal text-lg sm:text-2xl md:text-[34px] leading-6 sm:leading-8 md:leading-9 tracking-[-0.03em] max-w-[260px]">
                Supervision
              </h3>

              <button
                aria-label="Read more"
                className="bg-[#AAF4D3] rounded-full flex items-center justify-center w-11 h-11 hover:bg-[#90eec1] transition"
              >
                <span
                  className="text-[#36454F] text-2xl sm:text-3xl transform -rotate-45 select-none"
                  style={{ lineHeight: '25px' }}
                >
                  →
                </span>
              </button>
            </div>

            {/* Description */}
            <p className="font-manrope text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base leading-5 sm:leading-6 tracking-[-0.03em] max-w-[331px]">
              Relax, none of this is your fault. Don’t stop — what you’re afraid of won’t happen.
            </p>

            {/* Gray Line */}
            <div className="w-full mt-4 border-t-2 border-gray-300" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles;
