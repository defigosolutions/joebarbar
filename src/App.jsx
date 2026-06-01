import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
  };

  return (
    <>
      {/* Premium Glassmorphic Navigation Bar */}
      <Navbar onBookClick={openBookingModal} />

      {/* Cinematic Hero Landing Page */}
      <Hero onBookClick={openBookingModal} />

      {/* Brand Heritage & metrics storytelling */}
      <About />

      {/* High-fidelity Services & Combos Pricing Catalog */}
      <Services onBookClick={openBookingModal} />

      {/* Precision Styles and Filterable Cuts Gallery */}
      <Gallery />

      {/* Interactive Barbers Profile Cards */}
      <Barbers />

      {/* Client Testimonials Grid */}
      <Testimonials />

      {/* Business Hours, Interactive contact Form & Custom Geographic Map Card */}
      <Contact />

      {/* Full Quick-scroll Site Map & Newsletter Subscription Footer */}
      <Footer onBookClick={openBookingModal} />

      {/* Interactive multi-step scheduling application */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBookingModal} />
    </>
  );
}

export default App;
