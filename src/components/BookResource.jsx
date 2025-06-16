import React from 'react';
import BookCard from './BookCard';

function BookResource({ books = [] }) {
  // Filter out invalid book data
  const validBooks = books.filter(
    (book) => book?.imageSrc && book?.description && book?.buttonText
  );

  // Determine responsive grid column layout
  const columnClass =
    validBooks.length === 1
      ? 'grid-cols-1'
      : validBooks.length === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="bg-white w-full pt-[50px] pb-10">
      <div className="w-full max-w-[1300px]  mx-auto">
        {validBooks.length > 0 ? (
          <div className={`grid ${columnClass} gap-10 justify-center`}>
            {validBooks.map((book, index) => (
              <BookCard
                key={book.id || index}
                imageSrc={book.imageSrc}
                description={book.description}
                buttonText={book.buttonText}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 font-manrope text-lg">
            No books available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}

export default BookResource;
