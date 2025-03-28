// src/app/about.tsx
import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black">About Sortify</h1>
      <p className="text-lg text-gray-700">
        Sortify is a powerful tool designed to help you organize your music playlist.
        It allows you to easily sort your songs by title, artist, or year. With just a few clicks, you can quickly organize your playlist and find your favorite songs with ease.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Our mission is to create an intuitive and seamless experience for music lovers. Sortify is built with the user in mind, aiming to make sorting your playlist as simple and efficient as possible.
      </p>
    </div>
  );
};

export default About;
