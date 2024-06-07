// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Info from '../components/Info';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features/>
      <Info/>
      <Testimonials/>
    </div>
  );
};

export default Home;
