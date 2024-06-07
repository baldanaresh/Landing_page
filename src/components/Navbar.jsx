
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cyan-500 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Upgrade</Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <Link to="/" className="block lg:inline-block text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/pricing" className="block lg:inline-block text-gray-700 hover:text-gray-900">Pricing</Link>
          <Link to="/contact" className="block lg:inline-block text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


