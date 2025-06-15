import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services'; // Renamed for consistency
import Resources from './pages/Resources';
import ContactUs from './pages/ContactUs'
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          {/* <Route path="/articles/:id" element={<ArticlePage />} /> */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;