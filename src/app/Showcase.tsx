// src/app/Showcase.tsx
'use client';

import { motion } from 'framer-motion';  // Import motion from framer-motion

const Showcase = () => {
  return (
    <section className="text-center text-black font-bold py-16 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        How Sortify Works
      </motion.h2>

      <motion.p
        className="text-lg mb-6 px-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Sortify is a tool that allows you to organize your songs based on title, artist, and year. You can easily sort through your playlist with just a few clicks!
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-teal-900 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Sort by Title</h3>
          <p>Arrange your songs in alphabetical order by title.</p>
        </div>
        <div className="bg-teal-900 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Sort by Artist</h3>
          <p>Sort your playlist by the artist's name.</p>
        </div>
        <div className="bg-teal-900 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Sort by Year</h3>
          <p>Organize songs by release year to discover old or new favorites!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Showcase;
