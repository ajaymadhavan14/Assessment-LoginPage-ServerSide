// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[600px]  bg-gray-200">
      {/* Your hero section content */}
      <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg text-gray-800">This is a simple landing page built with React and Tailwind CSS.</p>
    </section>
  );
};

export default HeroSection;
