'use client';
import { motion } from 'framer-motion'; // Import motion from framer-motion for animations
import React from 'react';

const Hero = () => {
  return (
    <section className="hero p-16 text-left relative">
      {/* Main Content */}
      <motion.h1
        className="text-4xl font-bold mb-4 z-10 text-gray-900 dark:text-white" // Text will be black in light mode and white in dark mode
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }}    // Animate to this state
        transition={{ duration: 1 }}      // Animation duration
      >
        Sortify
      </motion.h1>

      <motion.p
        className="text-4xl font-bold mb-4 z-10 text-gray-900 dark:text-white" // Text will be black in light mode and white in dark mode
        initial={{ opacity: 0, x: -50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }}    // Animate to this state
        transition={{ duration: 1.2 }}     // Animation duration
      >
        Organizer
      </motion.p>

      <motion.button
        className="px-6 py-2 bg-teal-900 rounded-lg hover:bg-gray-300 z-10"
        initial={{ opacity: 0, scale: 0.8 }}  // Initial animation state
        animate={{ opacity: 1, scale: 1 }}    // Animate to this state
        transition={{ duration: 1.5 }}        // Animation duration
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default Hero;
