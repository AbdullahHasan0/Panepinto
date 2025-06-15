import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Adjust the path as needed

function ImageBanner() {
  return (
    <div className="w-full h-[300px] md:h-[430px] relative mt-[100px]">
      <img
        src={bannerImage}
        alt="Therapy session banner showing a calming environment"
        className="w-full h-full object-cover"
        loading="lazy" // Improves performance
      />
      
      {/* Optional overlay for future text or shading */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <p className="text-white text-2xl font-manrope">Your text here</p>
      </div> */}
    </div>
  );
}

export default ImageBanner;
