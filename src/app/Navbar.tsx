'use client';

import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to track the mobile menu's open/close status

  // Function to toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center p-4 bg-teal-900 text-white">
      {/* Logo or brand */}
      <div className="text-lg font-bold">Sortify</div>

      {/* Desktop and mobile menu container */}
      <div className="flex items-center space-x-6">
        {/* Desktop menu: visible on all screen sizes (no hidden class) */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="#"
            className="hover:text-gray-400 font-bold transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-400 font-bold transition-colors duration-300"
          >
            Shop
          </a>
          <a
            href="#"
            className="hover:text-gray-400 font-bold transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-gray-400 font-bold transition-colors duration-300"
          >
            About
          </a>
        </div>

        {/* Hamburger icon and Dark Mode Toggle for mobile */}
        <div className="lg: flex items-center space-x-4">
          {/* Hamburger icon */}
          <button
            className="flex items-center justify-center p-2"
            onClick={toggleMenu}  // Toggles the mobile menu state
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 hover:text-gray-400 transition-colors duration-300"
            >
              <path
                strokeLinecap="round"  // Corrected to camelCase
                strokeLinejoin="round" // Corrected to camelCase
                strokeWidth="2"        // Corrected to camelCase
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* DarkModeToggle for Mobile */}
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile menu: only visible if `isOpen` is true and on mobile (lg:hidden removed) */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 right-0 bg-gray-800 p-4 space-y-4`}>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          Shop
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          About
        </a>
        <DarkModeToggle /> {/* Dark Mode Toggle for Mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
