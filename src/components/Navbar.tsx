import React from 'react';

const Navbar = () => (
  <nav className="w-full flex justify-between items-center py-4 px-8 shadow">
    <div className="font-bold text-xl">My Portfolio</div>
    <div className="space-x-4">
      <a href="/" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/projects" className="hover:underline">Projects</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </div>
  </nav>
);

export default Navbar;
