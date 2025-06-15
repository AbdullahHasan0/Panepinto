import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleGrid({ articles }) {
  const columnClass =
    articles.length === 1
      ? 'grid-cols-1'
      : articles.length === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

  return (
    <section className="bg-white w-full pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 md:pb-10 mt-10 sm:mt-14 md:mt-20">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className={`grid ${columnClass} gap-6 sm:gap-8 md:gap-10 w-full`}>
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleGrid;
