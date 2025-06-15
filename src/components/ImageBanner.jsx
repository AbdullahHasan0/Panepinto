import React from 'react';
import bannerImage from '../assets/banner.jpg';

function ImageBanner() {
  return (
    <div className="w-full mt-[100px]">
      <div className="relative w-full">
        <img
          src={bannerImage}
          alt="Therapy session banner showing a calming environment"
          className="w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ImageBanner;
