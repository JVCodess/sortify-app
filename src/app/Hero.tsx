'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const artistImages = [
  '/public/sza.png',
  '/public/xxx-2.png',
  '/public/lil-baby.png',
  '/public/mac-miller.jpg',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artistImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generateStars = (count: number) => {
    return Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: Math.random() * 3,
    }));
  };

  const stars = generateStars(80);

  return (
    <section className="relative min-h-[90vh] px-8 md:px-16 py-10 overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#121212] z-0" />

      {/* Stars layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-full absolute"
            style={{
              width: star.size,
              height: star.size,
              left: star.left,
              top: star.top,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center md:items-start justify-center min-h-[90vh] gap-12">
        {/* Left: Text moved lower */}
        <div className="md:w-1/2 w-full space-y-6 mt-20 md:mt-32">
          <motion.div
            className="text-5xl font-extrabold"
            animate={{ color: ['#ffffff', '#14b8a6', '#ffffff'] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            Sortify Organizer
          </motion.div>

          <div className="w-16 h-1 bg-teal-400 mb-4" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-xl font-medium text-teal-400 mb-2">
              AI-Powered Music Management.
            </p>
            <p className="text-md text-white max-w-md">
              Discover, organize, and enjoy your music collection like never before —
              powered by intelligent sorting and a sleek, customizable interface.
            </p>
          </motion.div>
        </div>

        {/* Right: Image box */}
        <div className="md:w-1/2 w-full flex justify-center items-start mt-16">
          <div className="w-[350px] h-[350px] bg-white dark:bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-teal-900">
            <motion.img
              key={currentImageIndex}
              src={artistImages[currentImageIndex]}
              alt="Artist"
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
