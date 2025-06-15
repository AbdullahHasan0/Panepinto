import React from 'react';
import Header from '../components/Header';
import AuthorVideo from '../components/AuthorVideo';
import AuthorIntroduction from '../components/AuthorIntroduction';
import ImageBanner from '../components/ImageBanner';
import AuthorBooks from '../components/AuthorBooks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ArticleGrid from '../components/ArticleGrid';
import ArticleHeading from '../components/ArticleHeading(AU)';

const articles = [
  {
    id: 1,
    title: 'Psychotherapy & Psychology',
    description:
      'Relax, none of this is your fault. Don’t stop—what you’re afraid of won’t happen.',
  },
  {
    id: 2,
    title: 'Supervision',
    description:
      'Discover your strength through adversity and embrace every lesson life offers.',
  },
  {
    id: 3,
    title: 'Psychoeducation',
    description:
      'An inspiring journey through emotion, growth, and purpose—written for anyone seeking meaning.',
  },
];

function AboutUs() {
  return (
    <div className="bg-white min-h-screen pt-[130px]">
      <Header />
      <AuthorVideo />
      <AuthorIntroduction />
      <ImageBanner />
      <AuthorBooks />
      <ArticleHeading/>
      <ArticleGrid
       articles={articles}/>

      <CTA />
      <Footer />
    </div>
  );
}

export default AboutUs;