// src/components/Navbar.js


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          WebTutor
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/tutors" className="text-gray-700 hover:text-blue-600 font-medium">
            Tutors
          </Link>
          <Link to="/book-session" className="text-gray-700 hover:text-blue-600 font-medium">
            Book Session
          </Link>
          <Link to="/create-profile" className="text-gray-700 hover:text-blue-600 font-medium">
            Become a Tutor
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
            login
          </Link>
          
          
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-xl text-blue-600" />
            ) : (
              <FaBars className="text-xl text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/tutors" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">
            Tutors
          </Link>
          <Link to="/book-session" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">
            Book Session
          </Link>
          <Link to="/create-profile" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">
            Become a Tutor
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
