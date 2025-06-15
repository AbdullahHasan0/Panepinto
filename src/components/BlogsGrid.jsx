import React from 'react';
import BlogsCard from './BlogsCard';

function BlogsGrid({ blogs = [] }) {
  return (
    <section className="w-full py-[40px] sm:py-[60px] md:py-[80px] bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {blogs.length > 0 ? (
          blogs.map(({ id, imageSrc, title, description }) => (
            <BlogsCard
              key={id}
              imageSrc={imageSrc}
              title={title}
              description={description}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 font-manrope">
            No blogs available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}

export default BlogsGrid;
