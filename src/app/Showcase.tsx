'use client';
import { motion } from 'framer-motion';
import { FaFileUpload, FaSortAlphaDown, FaMusic } from 'react-icons/fa';

const Showcase = () => {
  const steps = [
    {
      title: 'Step 1: Upload Your Files',
      description: 'Import your local song files directly into Sortify for quick access and organization.',
      icon: <FaFileUpload size={36} className="text-teal-400 mb-4" />,
    },
    {
      title: 'Step 2: Choose a Sorting Method',
      description: 'Sort songs by title, artist, or year with a single click to organize your collection instantly.',
      icon: <FaSortAlphaDown size={36} className="text-teal-400 mb-4" />,
    },
    {
      title: 'Step 3: Explore Your Library',
      description: 'Browse your neatly arranged library — fast, easy, and distraction-free.',
      icon: <FaMusic size={36} className="text-teal-400 mb-4" />,
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-24 px-6">
      {/* Top divider or section label */}
       <div className="w-16 h-1 bg-teal-400 mx-auto mb-8" />

      <p className="text-teal-400 text-sm uppercase tracking-wider text-center mb-3">
        Step-by-Step Guide
      </p>

      <motion.h2
        className="text-4xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        How Sortify Works
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1e1e] border border-teal-900 p-6 rounded-2xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
