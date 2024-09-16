// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
<nav className="bg-gradient-to-r from-purple-700 to-blue-800 p-5 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center"> {/* Adjusted this container */}
      <img src="favicon.svg" alt="Logo" className="h-10 w-auto" />
      <a href="#home" aria-label="Home" className="ml-4">
        <h1 className="text-3xl font-bold text-white">Avyan</h1>
      </a>
    </div>
    <ul className="flex space-x-6">
      <li>
        <a href="#about" className="text-white hover:text-gray-300">
          About
        </a>
      </li>
      <li>
        <a href="#report-section" className="text-white hover:text-gray-300">
          Report Incident
        </a>
      </li>
      <li>
        <a href="#features" className="text-white hover:text-gray-300">
          Features
        </a>
      </li>
      <li>
        <a href="#safety-drills" className="text-white hover:text-gray-300">
          Safety Drills
        </a>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
