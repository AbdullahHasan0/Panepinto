import React from 'react';

function BlogsCard({ imageSrc, title, description }) {
  return (
    <div className="w-full max-w-[340px] min-h-[478px] rounded-[5px] overflow-hidden bg-white flex flex-col mx-auto sm:mx-0 shadow-sm hover:shadow-md transition-shadow">
      
      {/* Image */}
      <div className="w-full h-[240px] sm:h-[340px]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex flex-col gap-2">
        
        {/* Title */}
        <h3 className="font-manrope font-normal text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px]
                       leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[36px]
                       tracking-[-0.03em] text-black truncate">
          {title}
        </h3>

        {/* Description */}
        <p className="font-manrope font-normal text-[12px] sm:text-[14px] md:text-[16px]
                      leading-[14px] sm:leading-[16px] md:leading-[20px]
                      tracking-[-0.03em] text-gray-700 line-clamp-3">
          {description}
        </p>

      </div>
    </div>
  );
}

export default BlogsCard;
