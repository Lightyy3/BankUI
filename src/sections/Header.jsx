"use client";

const Header = () => {
  return (
    <header className="bg-[#0A0427] text-white py-4 px-6 fixed top-0 w-full shadow-md z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="../public/images/logo.svg"
            alt="BankUI Logo"
            className="h-8"
          />
          <span className="text-3xl font-bold text-white">
            Bank <span className="text-[#8C3BFF]">UI</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 uppercase">
          <a href="/about" className="hover:text-[#8C3BFF]">
            About us
          </a>
          <a href="/blogs" className="hover:text-[#8C3BFF]">
            Blogs
          </a>
          <a href="/faq" className="hover:text-[#8C3BFF]">
            FAQ
          </a>
          <a href="/contact" className="hover:text-[#8C3BFF]">
            Contact
          </a>
        </nav>

        {/* Login & Join Us Buttons */}
        <div className="flex items-center space-x-6">
          <a href="/login" className="hover:text-[#8C3BFF]">
            LOGIN
          </a>
          <a
            href="/join"
            className="inline-block  px-6 py-3 border-2 border-[#8C3BFF] text-[#8C3BFF] font-semibold rounded-md  hover:bg-[#8C3BFF] hover:text-white z-20 transition"
          >
            JOIN US
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
