import React from 'react';

function ArticleSectionHeading() {
  return (
    <div className="w-full max-w-[1300px] mt-[100px] sm:mt-[242px] lg:mt-[90px] mx-auto">
      <h2 className="text-[36px] sm:text-[48px] lg:text-[72px] leading-[40px] sm:leading-[56px] lg:leading-[72px] font-manrope tracking-[-0.03em] text-black text-left">
        <span className="block">
          <span className="font-normal mr-2">Author’s</span>
          <span className="font-bold">Most Popular</span>
        </span>
        <span className="block font-normal">Articles</span>
      </h2>
    </div>
  );
}

export default ArticleSectionHeading;