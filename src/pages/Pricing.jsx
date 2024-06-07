
// src/pages/Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="flex flex-wrap justify-center">
          {/* Free Plan */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
              <p className="text-lg mb-6">Perfect for individuals or small teams just getting started.</p>
              <div className="text-4xl font-bold mb-4">$0<span className="text-lg">/month</span></div>
              <ul className="mb-6">
                <li className="mb-2">✔️ Basic Features</li>
                <li className="mb-2">✔️ 5 Projects</li>
                <li className="mb-2">✔️ Community Support</li>
              </ul>
              <a href="#" className="bg-blue-500 hover:bg-violet-700 text-white py-2 px-4 rounded">Get Started</a>
            </div>
          </div>
          {/* Basic Plan */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
              <p className="text-lg mb-6">Ideal for growing teams looking to collaborate.</p>
              <div className="text-4xl font-bold mb-4">$29<span className="text-lg">/month</span></div>
              <ul className="mb-6">
                <li className="mb-2">✔️ All Free Plan Features</li>
                <li className="mb-2">✔️ 50 Projects</li>
                <li className="mb-2">✔️ Email Support</li>
              </ul>
              <a href="#" className="bg-blue-500 hover:bg-violet-700 text-white py-2 px-4 rounded">Get Started</a>
            </div>
          </div>
          {/* Pro Plan */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
              <p className="text-lg mb-6">Best for larger teams and organizations.</p>
              <div className="text-4xl font-bold mb-4">$89<span className="text-lg">/month</span></div>
              <ul className="mb-14">
                <li className="mb-2">✔️ All Basic Plan Features</li>
                <li className="mb-2">✔️ Unlimited Projects</li>
                <li className="mb-2">✔️ Priority Support</li>
              </ul>
              <a href="#" className="bg-blue-500 hover:bg-violet-700 text-white py-2 px-4 rounded ">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

