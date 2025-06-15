import React from 'react';

function TextWithVideo() {
  return (
    <section className="w-full max-w-[1300px] mx-auto relative pt-[162px] pb-10 bg-white px-4">
      {/* Container for Text and Video */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
        
        {/* Text Block */}
        <div className="bg-white w-full sm:w-[655px] rounded-[5px] flex flex-col justify-center p-6 sm:p-10">
          <h3 className="font-manrope text-[48px] sm:text-[66px] font-bold leading-[56px] tracking-[-0.02em] mb-4">
            Services.
          </h3>
          <p className="font-manrope font-normal text-[22px] sm:text-[26px] leading-[30px]">
            Assessment, planning, and treatment for individuals <br />
            (providing brief and long-term treatment).
          </p>
        </div>

        {/* Video Block */}
        <div className="w-full sm:w-[557px] rounded-[5px] overflow-hidden h-[300px] sm:h-[368px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default TextWithVideo;
