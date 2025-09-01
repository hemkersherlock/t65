import React from 'react';
import Header from './components/Header';
import Problem from './components/Problem';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import SocialProofBar from './components/SocialProofBar';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Problem />
      <Hero />
      <StatsBar />
      <SocialProofBar />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;