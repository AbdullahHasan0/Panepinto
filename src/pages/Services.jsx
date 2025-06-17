import React from 'react';
import Hero from '../components/Hero';
import AuthorIntroduction from '../components/AuthorIntroduction';
import Articles from '../components/Articles';
import ImageBanner from '../components/ImageBanner';
import ClientReviews from '../components/ClientReviews';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TextWithVideo from '../components/TextWithVideo';
import AboutServices from '../components/AboutServices';
import LeftImageRightText from '../components/LeftImageRightText';
import LeftTextRightImage from '../components/LeftTextRightImage';


function Services() {
  return (
    <div className="bg-white">
      <Header />

      <TextWithVideo/>

      <AboutServices/>

      <LeftImageRightText
      title="Developmental Coaching"
      description={`Helping individuals clarify, align, develop, and execute 
      based on a personally defined plan. Employing a 
      unique developmental coaching model created by 
      Dr.Panepinto. Face-to-face or virtual options are 
      available. This service is available to residents in all US 
      states (and outside).`}
      image="../assets/articles.jpg"
      />

      <LeftTextRightImage
      title="Clinical Supervision"
      description={`For current practitioners and those seeking licensure. 
      Face-to-face or virtual supervision options are 
      available`}
      image="../assets/chinese.jpg"
      reverseOnLarge = {true}
      />

      <LeftImageRightText
      title="Consultation"
      description={`Creating the conditions for optimal performance, mental 
      toughness, and re-entry into sports. Dr. Panepinto has 
      worked with elite and competitive athletes inseveral sports from amateur to professional. He has 
      also worked with performers in the arts to improve 
      mental states for optimal performance.`}
      image="../assets/articles.jpg"
      />

      <LeftTextRightImage
      title="Sports and Performance Psychology"
      description={`Creating the conditions for optimal performance, mental 
      toughness, and re-entry into sports. Dr. Panepinto has 
      worked with elite and competitive athletes in several 
      sports from amateur to professional. He has also worked 
      with performers in the arts to improve mental states for 
      optimal performance.`}
      image="../assets/jane.jpg"
      reverseOnLarge = {true}
      />

      <LeftImageRightText
      title="Consultation"
      description={`Creating the conditions for optimal performance, mental 
      toughness, and re-entry into sports. Dr. Panepinto has 
      worked with elite and competitive athletes inseveral sports from amateur to professional. He has 
      also worked with performers in the arts to improve 
      mental states for optimal performance.`}
      image="../assets/articles.jpg"
      />

      <LeftTextRightImage
      title="Service 06"
      description={`I am an out-of-network provider for insurance carriers. 
      Please inquire from your insurance company regarding 
      out-of-network benefits and claim submissions from 
      out-of-network providers. This may need to be cleared 
      with your insurance prior to your first visit. 

      As a Licensed Professional Counselor, I will provide you 
      with a billing statement to submit to your insurance 
      provider. Fees are to be paid at time of service.`}
      image="../assets/with_dog.jpg"
      reverseOnLarge = {true}
      />

      <LeftImageRightText
      title="Service 07"
      description={`I am an out-of-network provider for insurance carriers. 
      Please inquire from your insurance company regarding 
      out-of-network benefits and claim submissions from 
      out-of-network providers. This may need to be cleared 
      with your insurance prior to your first visit. 

      As a Licensed Professional Counselor, I will provide you 
      with a billing statement to submit to your insurance 
      provider. Fees are to be paid at time of service.`}
      image="../assets/articles.jpg"
      
      />

      <LeftTextRightImage
      title="Service 08"
      description={`I am an out-of-network provider for insurance carriers. 
      Please inquire from your insurance company regarding 
      out-of-network benefits and claim submissions from 
      out-of-network providers. This may need to be cleared 
      with your insurance prior to your first visit. 

      As a Licensed Professional Counselor, I will provide you 
      with a billing statement to submit to your insurance 
      provider. Fees are to be paid at time of service.`}
      image="../assets/alice.jpg"
      reverseOnLarge = {true}
      />
      <ImageBanner/>
      <CTA/>

      {/* {Footer} */}
      <Footer/>
    </div>
  );
}

export default Services;
