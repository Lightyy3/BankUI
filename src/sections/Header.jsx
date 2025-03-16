"use client";

import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Import icons for hamburger and close
// import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility on mobile

  return (
    <header className="bg-[#0A0427] text-white py-4 px-6 fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/logo.svg" className="h-8" alt="Logo" />
          <span className="text-3xl font-bold text-white">
            Bank <span className="text-[#8C3BFF]">UI</span>
          </span>
        </a>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoClose size={30} className="text-white" />
            ) : (
              <IoMenu size={30} className="text-white" />
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <a href="/about" className="hover:text-[#8C3BFF]">
            About us
          </a>
          <a href="/faq" className="hover:text-[#8C3BFF]">
            Benefits
          </a>
          <a href="/contact" className="hover:text-[#8C3BFF]">
            Contact
          </a>
        </nav>

        {/* Login & Join Us Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/login" className="hover:text-[#8C3BFF]">
            LOGIN
          </a>
          <a
            href="/join"
            className="inline-block px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md hover:bg-[#8C3BFF] hover:text-white z-20 transition"
          >
            JOIN US
          </a>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 mt-6 bg-[#0A0427] p-6">
          <a href="/about" className="hover:text-[#8C3BFF]">
            About us
          </a>
          <a href="/faq" className="hover:text-[#8C3BFF]">
            Benefits
          </a>
          <a href="/contact" className="hover:text-[#8C3BFF]">
            Contact
          </a>

          {/* Login & Join Us Buttons (Mobile) */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <a href="/login" className="hover:text-[#8C3BFF]">
              LOGIN
            </a>
            <a
              href="/join"
              className="inline-block px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md hover:bg-[#8C3BFF] hover:text-white z-20 transition"
            >
              JOIN US
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
