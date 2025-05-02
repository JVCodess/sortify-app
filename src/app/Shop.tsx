import React from 'react';
import ContentBox from './ContentBox';

const Shop = () => {
  return (
    <section className="py-16 px-4 bg-[#121212] font-press-start-2p">
      <ContentBox className="text-center">
        <h1 className="text-3xl font-bold mb-6 text-white">🛒 Shop</h1>
        <p className="text-lg text-gray-300">
          Discover exclusive features with Sortify Premium. Designed for music lovers who crave perfect organization.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          Upgrade to unlock deeper sorting, larger libraries, and personalized themes.
        </p>
      </ContentBox>

      {/* Product Box */}
      <ContentBox className="mt-10 text-center">
        <h2 className="text-2xl text-teal-400 mb-4">💿 Sortify V1</h2>
        <p className="text-md text-gray-300 mb-6">
          The first release of Sortify Premium. Organize your entire music library with lightning speed and retro-futuristic vibes.
        </p>

        <div className="inline-block bg-[#1e1e1e] border-4 border-teal-400 rounded-lg px-10 py-8 shadow-md">
          <p className="text-xl text-white mb-4">One-time Purchase</p>
          <p className="text-3xl font-bold text-teal-400 mb-6">$19.99</p>
          <button className="bg-teal-400 text-black px-6 py-3 text-sm rounded transition hover:bg-teal-300 font-bold">
            Buy Now
          </button>
        </div>
      </ContentBox>
    </section>
  );
};

export default Shop;
