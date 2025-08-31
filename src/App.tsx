import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ReportPiracy from './components/ReportPiracy';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ReportPiracy />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;