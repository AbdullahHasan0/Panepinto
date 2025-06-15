import React from 'react';

function BookCard({ imageSrc, description, buttonText }) {
  const altText = description ? description.slice(0, 50) : 'Book cover';

  return (
    <div className="flex flex-col items-center rounded-md overflow-hidden w-full max-w-[412px] mx-auto">
      
      {/* Image */}
      <div className="w-full h-[400px] sm:h-[650px] rounded-md overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          title={altText}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Description + Button */}
      <div className="flex flex-col items-center w-full mt-8 space-y-4 px-4 text-center">
        <p className="font-manrope text-[20px] leading-[28px] tracking-[-0.03em] text-black line-clamp-3">
          {description}
        </p>
        <button
          className="w-full h-[74px] rounded-md border border-black text-black font-manrope font-medium text-[26px] leading-[30px] tracking-[-0.03em] bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition"
          aria-label={`Read more about book: ${altText}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BookCard;
