import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SocialProofBar from '../components/SocialProofBar';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <Layout
      title="NeverLeaked - Stop Course Piracy in 48 Hours"
      description="Professional anti-piracy service for online course creators. We hunt pirates across Telegram, file-sharing sites, and private groups so you can focus on creating."
      canonical="https://neverleaked.tech"
    >
      <Hero />
      <SocialProofBar />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <Contact />
    </Layout>
  );
};

export default HomePage;