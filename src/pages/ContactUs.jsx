import React from 'react';
import Hero from '../components/Hero';
import AuthorIntroduction from '../components/AuthorIntroduction';
import Articles from '../components/Articles';
import ImageBanner from '../components/ImageBanner';
import ClientReviews from '../components/ClientReviews';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';

function LandingPage() {
  return (
    <div className="bg-white">
      <Header />
      
      {/* ContactSection */}
      <ContactSection/>

      {/* {Image banner} */}
      <ImageBanner/>

      {/* {Footer} */}
      <Footer/>
    </div>
  );
}

export default LandingPage;
