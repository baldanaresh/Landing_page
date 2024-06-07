// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-slate-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome Upgrade</h1>
        <p className="text-lg mb-8">This is awesome page where you can learn.</p>
        <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800 rounded-md">Let's go</button>
      </div>
    </section>
  );
};

export default HeroSection;
