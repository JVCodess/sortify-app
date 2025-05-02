'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center p-4 bg-teal-900 text-white">
      {/* Left side: Just the Sortify title */}
      <div className="text-4xl font-bold">Sortify</div>

      {/* Menu items: Centered and evenly spaced */}
      <div className="flex justify-end mr-10 space-x-10">
        <a href="#" className="hover:text-gray-400 font-bold transition-colors duration-300 text-xl">
          Home
        </a>
        <div className="border-l-2 border-white h-6"></div>
        <a href="#" className="hover:text-gray-400 font-bold transition-colors duration-300 text-xl">
          Shop
        </a>
        <div className="border-l-2 border-white h-6"></div>
        <a href="#" className="hover:text-gray-400 font-bold transition-colors duration-300 text-xl">
          Contact
        </a>
        <div className="border-l-2 border-white h-6"></div>
        <a href="#" className="hover:text-gray-400 font-bold transition-colors duration-300 text-xl">
          About
        </a>
      </div>

      {/* Toggle menu button for mobile (icon retained if needed) */}
      <div className="lg:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="flex items-center justify-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white hover:text-gray-400 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v10.55a4 4 0 1 1-2 0V6H7V4h5V3z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
