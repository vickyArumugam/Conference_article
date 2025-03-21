import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react"; // Close icon

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white shadow-md ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[90%] mx-auto flex justify-between items-center h-20 lg:max-w-[80%] ">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src="/images/logoArtboard 1 (1).png"
              className="w-[100px] sm:w-[60px] md:w-[90px] lg:w-[150px] cursor-pointer"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="text-3xl">☰</span>
        </button>

        {/* Mobile Menu with White Background */}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col mt-10 space-y-4 px-6 text-base bg-white">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/publish", label: "Journal Publish" },
              { path: "/review", label: "Review Process" },
              { path: "/Journal", label: "Find a Journal" },
              { path: "/register", label: "Register" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`py-2 px-4 rounded transition-all ${
                  location.pathname === path
                    ? "text-blue-600 font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-sm md:text-base">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/publish", label: "Journal Publish" },
            { path: "/review", label: "Review Process" },
            { path: "/Journal", label: "Find a Journal" },
            { path: "/register", label: "Register" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative pb-1 transition-all ${
                location.pathname === path
                  ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                  : "text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
