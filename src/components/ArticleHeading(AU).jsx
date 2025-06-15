import React from 'react';

function ArticleHeading() {
  return (
    <div className="w-full max-w-[503px] mx-auto text-center mb-4 sm:mb-8 md:mb-18 mt-10 sm:mt-14 md:mt-24 px-4 sm:px-6">
      <h2 className="font-manrope text-2xl sm:text-3xl md:text-5xl leading-tight sm:leading-snug md:leading-[60px] tracking-[-0.03em] text-black">
        Author's <span className="font-semibold">Most Readable</span> Articles
      </h2>
    </div>
  );
}

export default ArticleHeading;
