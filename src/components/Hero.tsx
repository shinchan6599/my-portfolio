import React from 'react';

const Hero = () => (
  <section className="flex flex-col items-center justify-center py-20">
    <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-6 shadow-lg" />
    <h1 className="text-4xl font-bold mb-2">Hi, I'm Dhyey Bhansali</h1>
    <p className="text-lg text-gray-600 mb-4">Problem solver by passion, software developer by profession, fueled by adventures in travel and the thrill of sports.</p>
    <a href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Contact Me</a>
  </section>
);

export default Hero;
