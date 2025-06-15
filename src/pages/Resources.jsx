import React from 'react';
import Hero from '../components/Hero';
import AuthorIntroduction from '../components/AuthorIntroduction';
import Articles from '../components/Articles';
import ImageBanner from '../components/ImageBanner';
import ClientReviews from '../components/ClientReviews';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BooksSectionHeading from '../components/BookSectionHeading';
import ResourcesDescription from '../components/ResourcesDescription';
import BookResource from '../components/BookResource';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import blog1 from '../assets/chinese.jpg';
import blog2 from '../assets/with_dog.jpg';
import blog3 from '../assets/pinto.jpg';
import ArticleSectionHeading from '../components/ArticleSectionHeading';
import ArticleGrid from '../components/ArticleGrid';
import BlogsSectionHeading from '../components/BlogsSectionHeading';
import BlogsGrid from '../components/BlogsGrid';

const books = [
  {
    imageSrc: book1,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book2,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book3,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book1,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book2,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book3,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book1,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book2,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
  {
    imageSrc: book3,
    description: 'Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxxxxxxxxx3',
    buttonText: 'See More',
  },
];

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
  {
    id: 4,
    title: 'Psychotherapy & Psychology',
    description:
      'Relax, none of this is your fault. Don’t stop—what you’re afraid of won’t happen.',
  },
  {
    id: 5,
    title: 'Supervision',
    description:
      'Discover your strength through adversity and embrace every lesson life offers.',
  },
  {
    id: 6,
    title: 'Psychoeducation',
    description:
      'An inspiring journey through emotion, growth, and purpose—written for anyone seeking meaning.',
  },
  {
    id: 7,
    title: 'Psychotherapy & Psychology',
    description:
      'Relax, none of this is your fault. Don’t stop—what you’re afraid of won’t happen.',
  },
  {
    id: 8,
    title: 'Psychotherapy & Psychology',
    description:
      'Relax, none of this is your fault. Don’t stop—what you’re afraid of won’t happen.',
  },
];

const blogs = [
    {
      id: 1,
      imageSrc: blog1,
      title: 'The Art of Reflection',
      description: 'Explore how reflection can improve clarity and direction in life.',
    },
    {
      id: 2,
      imageSrc: blog2,
      title: 'Emotional Resilience',
      description: 'Learn ways to strengthen your emotional resilience over time.',
    },
    {
      id: 3,
      imageSrc: blog3,
      title: 'Purposeful Living',
      description: 'Tips and insights for living with intentionality and purpose.',
    },
]

function Resources() {
  return (
    <div className="bg-white">
      <Header />

      <BooksSectionHeading/>
      <ResourcesDescription
      text = "Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2...Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2.....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2.......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2.............Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2."
      />

      <BookResource
      books={books}
      />

      <ArticleSectionHeading/>
      
      <ResourcesDescription
      text='Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2...Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2.....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2.......Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2.............Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2....Relax, none of this is your fault, Don’t stop, what you’re afraid of won’t happen.xxxx2.'
      />

      <ArticleGrid
      articles={articles}
      />

      <ImageBanner/>

      <BlogsSectionHeading/>

      <BlogsGrid
      blogs={blogs}
      />
      
      <CTA/>

      {/* {Footer} */}
      <Footer/>
    </div>
  );
}

export default Resources;
