// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Websites to explore more</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700 mb-4">GFG(geeks for geeks)</p>
              <p className="text-gray-500">gfg.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700 mb-4">Freecode camp</p>
              <p className="text-gray-500"> freecodecamp.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
