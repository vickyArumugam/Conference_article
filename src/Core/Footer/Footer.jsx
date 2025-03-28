// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center sm:text-left px-2">
          {/* Company Info Section */}
          <div className="space-y-4">
            <img
              src="/images/Artboard.webp"
              alt="Company Logo"
              className="w-24 mx-auto sm:mx-0"
            />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We are committed to delivering high-quality solutions for our customers, ensuring innovation and excellence in every project.
            </p>
          </div>

          {/* Policies Section */}
          <div className="space-y-4">
            <p className="font-semibold text-gray-300 text-base md:text-lg">Policies</p>
            <ul className="space-y-2 text-sm md:text-base">
              {["Privacy Policy", "Cookie Policy", "Terms of Use", "Refunds Policy"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <p className="font-semibold text-gray-300 text-base md:text-lg">Quick Links</p>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/" className="hover:text-gray-200 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-gray-200 transition-colors duration-300">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <p className="font-semibold text-gray-300 text-base md:text-lg">Contact</p>
            <ul className="space-y-2 text-sm md:text-base">
              <li>Email: contact@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <p className="font-semibold text-gray-300 text-base md:text-lg">Follow Us</p>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-500 hover:text-blue-600 text-xl md:text-2xl transition-transform transform hover:scale-110 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-500 hover:text-blue-400 text-xl md:text-2xl transition-transform transform hover:scale-110 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-500 hover:text-pink-500 text-xl md:text-2xl transition-transform transform hover:scale-110 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-gray-500 hover:text-blue-700 text-xl md:text-2xl transition-transform transform hover:scale-110 duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Copyright Notice) */}
      <div className="border-t border-gray-700 py-4 text-center text-sm md:text-base">
        <p className="px-4">
          © 2008 - {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;