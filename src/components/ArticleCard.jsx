import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ id, title, description }) {
  return (
    <div
      role="article"
      className="relative bg-white p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col w-full max-w-[400px] min-h-[200px] mx-auto"
    >
      {/* Circle Cluster */}
      <div className="absolute top-6 left-2 w-6 h-6">
        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mb-1" />
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-black rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Title + Button container */}
      <div className="flex items-start justify-between gap-2 pl-8 sm:pl-10 md:pl-12 pr-2">
        <h3 className="font-manrope font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-4 sm:leading-5 md:leading-6 lg:leading-tight text-black tracking-[-0.03em]">
          {title}
        </h3>
        <Link
          to={`/articles/${id}`}
          className="bg-emerald-200 rounded-full font-semibold text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400 shrink-0"
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
      <div className="pl-8 sm:pl-10 md:pl-12 pr-2">
        <p className="mt-1 sm:mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm lg:text-base leading-4 sm:leading-5 md:leading-snug tracking-[-0.03em] text-black font-manrope line-clamp-3">
          {description}
        </p>
        <div className="mt-1 sm:mt-2 md:mt-3 w-full h-0.5 bg-gray-300"></div>
      </div>
    </div>
  );
}

export default ArticleCard;
