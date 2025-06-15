import React from 'react';

function BooksSectionHeading() {
  return (
    <div className="w-full max-w-[701px] mt-[120px] sm:mt-[242px] ml-6 sm:ml-[120px] lg:ml-[120px] md:mx-auto">
      <h2
        className="text-[36px] sm:text-[48px] lg:text-[72px] leading-[40px] sm:leading-[56px] lg:leading-[72px] font-manrope tracking-[-0.03em] text-black"
      >
        <span className="block">
          <span className="font-normal mr-2">Author’s</span>
          <span className="font-bold">Most Popular</span>
        </span>
        <span className="block font-normal">Books</span>
      </h2>
    </div>
  );
}

export default BooksSectionHeading;
