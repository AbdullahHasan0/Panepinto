import React from 'react';
import janeImg from '/src/assets/jane.jpg';
import johnImg from '/src/assets/john.jpg';
import aliceImg from '/src/assets/alice.jpg';
import michealImg from '/src/assets/micheal.jpg';

const reviews = [
  {
    id: 1,
    text: 'This service changed my life! Highly recommended.',
    author: 'Jane Doe',
    image: janeImg,
  },
  {
    id: 2,
    text: 'Professional and efficient. I felt heard and supported.',
    author: 'John Smith',
    image: johnImg,
  },
  {
    id: 3,
    text: 'Amazing experience with this team. Will use again!',
    author: 'Alice Johnson',
    image: aliceImg,
  },
  {
    id: 4,
    text: 'Friendly and understanding professionals. Loved it!',
    author: 'Michael Brown',
    image: michealImg,
  },
];

function ClientReviews() {
  return (
    <section className="w-full bg-white" aria-label="Client Testimonials">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
        {reviews.map(({ id, text, author, image }, index) => {
          const isTopRow = index < 2;
          const reverse = !isTopRow;

          return (
            <div
              key={id}
              className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-[#062327]`}
            >
              {/* Image */}
              <div className="w-1/2 h-full">
                <img
                  src={image}
                  alt={`Photo of ${author}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Review Text */}
              <div className="w-1/2 h-full flex flex-col justify-center p-6 text-white font-manrope">
                <p className="text-[18px] sm:text-[20px] leading-[28px] tracking-[-0.03em] mb-4">
                  {text}
                </p>
                <p className="mt-auto text-[18px] sm:text-[20px] font-medium tracking-[-0.03em] text-white/90">
                  — {author}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ClientReviews;
