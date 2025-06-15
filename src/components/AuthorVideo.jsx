import React from 'react';

function AuthorVideo() {
  return (
    <section className="bg-white pt-10 sm:pt-14 md:pt-24 px-4 sm:px-6 lg:px-16 pb-8 sm:pb-12 md:pb-20">
      
      {/* Heading */}
      <div className="max-w-[444px] mx-auto text-center">
        <h2 className="font-manrope font-semibold tracking-[-0.03em] text-black
                       text-2xl sm:text-3xl md:text-5xl lg:text-7xl
                       leading-7 sm:leading-10 md:leading-[50px] lg:leading-[60px]">
          About Author
        </h2>
      </div>

      {/* Video Box */}
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 w-full max-w-[1300px] aspect-video rounded-lg overflow-hidden mx-auto">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

    </section>
  );
}

export default AuthorVideo;
