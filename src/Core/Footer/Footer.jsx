import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm md:text-base">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 md:px-12 py-12 text-center sm:text-left">
        {/* Policies Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Policies</p>
          <ul className="space-y-2">
            {["Privacy Policy", "Cookie Policy", "Terms of Use", "Refunds Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-200 transition-colors duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Writing Jobs Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Writing Jobs</p>
          <ul className="space-y-2">
            {[
              "Freelance writing jobs",
              "Writing jobs from home",
              "Online writing jobs",
              "♥ Investing in others",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className={item.includes("♥") ? "text-indigo-600 hover:text-indigo-400 transition-colors duration-300" : "hover:text-gray-200 transition-colors duration-300"}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Opportunities Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Job Opportunities</p>
          <ul className="space-y-2">
            {["Get paid to write", "Work from home online", "Jobs for writers", "Sitemap"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-200 transition-colors duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Locations</p>
          <ul className="space-y-2">
            {["Europe", "Pakistan", "Philippines", "India"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-200 transition-colors duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Follow Us</p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="https://www.facebook.com" className="text-gray-500 hover:text-gray-300 text-2xl transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-gray-500 hover:text-gray-300 text-2xl transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Copyright Notice) */}
      <div className="border-t border-gray-700 px-6 text-center py-4 text-sm md:text-base">
        <p>© 2008 - {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
