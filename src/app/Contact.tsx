'use client';

import React, { useState } from 'react';
import ContentBox from './ContentBox';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4 bg-[#121212] font-press-start-2p">
      <ContentBox>
        <h1 className="text-3xl font-bold mb-4 text-teal-400">📬 Contact Us</h1>
        {!submitted ? (
          <>
            <p className="text-md text-gray-300 mb-6">
              We'd love to hear from you. Send us a message below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 text-white placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 text-white placeholder-gray-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 text-white placeholder-gray-500"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="bg-teal-400 text-black px-6 py-2 rounded text-sm font-bold hover:bg-teal-300 transition"
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          <p className="text-teal-400 text-lg">Thanks! Your message has been sent.</p>
        )}
      </ContentBox>
    </section>
  );
};

export default Contact;
