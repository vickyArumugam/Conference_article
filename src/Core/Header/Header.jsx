import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:border-slate-800 ${
        isScrolled
          ? "bg-gray-100 backdrop-blur-sm h-20 shadow-md fixed top-0 w-full z-50"
          : "bg-gray-100 h-20"
      }`}
    >
      <div className="max-w-[90%] mx-auto flex justify-between items-center px-6 h-full lg:max-w-[80%]">
        <div className="text-2xl font-bold">
          <img
            src="/images/logoArtboard 1 (1).png"
            className="w-[100px] sm:w-[60px] md:w-[90px] lg:w-[150px]"
            alt="Logo"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-3xl">☰</span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 transition-all ease-in-out duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/review", label: "Review Process" },
              { path: "/Journal", label: "Find a Journal" },
              { path: "/register", label: "Register" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="relative text-black hover:text-blue-500 pb-2 hover:border-b-2 hover:border-blue-500 transition-all"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
