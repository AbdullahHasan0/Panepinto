import React from 'react';
import Hero from '../components/Hero';
import AuthorIntroduction from '../components/AuthorIntroduction';
import Articles from '../components/Articles';
import ImageBanner from '../components/ImageBanner';
import ClientReviews from '../components/ClientReviews';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';

function LandingPage() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      {/* Author Introduction Section */}
      <AuthorIntroduction />
      {/* <ImageBanner/> */}
      <ImageBanner/>
      {/* Author Articles Section */}
      <Articles />
      {/* {Clients Review} */}
      <ClientReviews/>
      {/* {CTA} */}
      <CTA/>

      {/* {Footer} */}
      <Footer/>
    </div>
  );
}

export default LandingPage;
