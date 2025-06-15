import React, { useMemo } from 'react';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';

function AuthorBooks() {
  const items = useMemo(
    () => [
      {
        id: 1,
        imageSrc: book1,
        description:
          'Relax, none of this is your fault. Don’t stop—what you’re afraid of won’t happen. Keep pushing forward with courage and calm.',
        buttonText: 'Read More',
      },
      {
        id: 2,
        imageSrc: book2,
        description:
          'Discover your strength through adversity and embrace every lesson life offers along the way.',
        buttonText: 'Read More',
      },
      {
        id: 3,
        imageSrc: book3,
        description:
          'An inspiring journey through emotion, growth, and purpose—written for anyone seeking meaning.',
        buttonText: 'Read More',
      },
    ],
    []
  );

  return (
    <section className="bg-white w-full py-6 sm:py-10 md:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="font-manrope text-2xl sm:text-3xl md:text-5xl leading-tight sm:leading-snug md:leading-[60px] tracking-[-0.03em] text-black">
            Author's <span className="font-semibold">Most Popular</span> Books
          </h2>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map(({ id, imageSrc, description, buttonText }) => (
            <div
              key={id}
              className="flex flex-col items-center rounded-md overflow-hidden w-full"
            >
              {/* Image */}
              <div className="w-full h-72 sm:h-96 md:h-[550px] lg:h-[650px] rounded-md overflow-hidden">
                <img
                  src={imageSrc}
                  alt={`Book ${id} cover`}
                  title={`Book ${id} cover`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Description + Button */}
              <div className="flex flex-col items-center w-full mt-4 sm:mt-6 space-y-4">
                <p className="font-manrope text-base sm:text-lg md:text-xl leading-snug sm:leading-relaxed text-black text-center line-clamp-3">
                  {description}
                </p>
                <button
                  className="w-full h-16 rounded-md border border-black text-black font-manrope font-medium text-lg sm:text-xl bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
                  aria-label={`Read more about book ${id}`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AuthorBooks;
