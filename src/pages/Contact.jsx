// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 bg-opacity-50 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-8">Have any questions? We'd love to hear from you.</p>
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-gray-300 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-gray-300 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left text-gray-300 mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full px-3 py-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

