import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-400 h-14 to-cyan-600 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Heading */}
          <h1 className="text-2xl font-bold text-white">taiyo.ai</h1>

          {/* Navbar Links */}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

