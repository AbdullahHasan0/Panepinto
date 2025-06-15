import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ id, title, description }) {
  return (
    <div
      role="article"
      className="relative bg-white p-4 flex flex-col justify-between w-full max-w-[375px] min-h-[200px] mx-auto"
    >
      {/* Circle Cluster */}
      <div className="absolute top-6 left-2 w-6 h-6">
        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mb-1" />
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-black rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Title + Button */}
      <div className="relative flex items-center justify-between">
        <h3 className="font-manrope font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-black tracking-[-0.03em] pl-6 sm:pl-11 pr-6 sm:pr-14 max-w-[180px] sm:max-w-none">
          {title}
        </h3>
        <Link
          to={`/articles/${id}`}
          className="absolute right-2 sm:right-0 top-3.5 bg-emerald-200 rounded-full font-semibold text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
          style={{
            width: '44px',
            height: '44px',
            transform: 'rotate(-45deg)',
            color: 'black',
            paddingBottom: '6px',
          }}
          aria-label={`Open article ${id}`}
        >
          →
        </Link>
      </div>

      {/* Description + Line */}
      <div className="pl-6 sm:pl-11">
        <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base leading-snug tracking-[-0.03em] text-black font-manrope line-clamp-3 max-w-[220px] sm:max-w-[260px] md:max-w-[300px]">
          {description}
        </p>
        <div className="mt-2 sm:mt-4 w-[220px] sm:w-[260px] md:w-[300px] h-0.5 bg-gray-300"></div>
      </div>
    </div>
  );
}

export default ArticleCard;
