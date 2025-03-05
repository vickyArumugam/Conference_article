import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-base py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {/* Policies Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Policies</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-200">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-gray-200">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gray-200">Refunds Policy</a></li>
          </ul>
        </div>

        {/* Writing Jobs Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Writing Jobs</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Freelance writing jobs</a></li>
            <li><a href="#" className="hover:text-gray-200">Writing jobs from home</a></li>
            <li><a href="#" className="hover:text-gray-200">Online writing jobs</a></li>
            <li><a href="#" className="text-indigo-600 hover:text-indigo-200">♥ Investing in others</a></li>
          </ul>
        </div>

        {/* Job Opportunities Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Job Opportunities</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Get paid to write</a></li>
            <li><a href="#" className="hover:text-gray-200">Work from home online</a></li>
            <li><a href="#" className="hover:text-gray-200">Jobs for writers</a></li>
            <li><a href="#" className="hover:text-gray-200">Sitemap</a></li>
          </ul>
        </div>

        {/* Locations Section */}
        <div>
          <p className="mb-3 font-semibold text-gray-300">Locations</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Europe</a></li>
            <li><a href="#" className="hover:text-gray-200">Pakistan</a></li>
            <li><a href="#" className="hover:text-gray-200">Philippines</a></li>
            <li><a href="#" className="hover:text-gray-200">India</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center sm:text-left">
          <p className="mb-3 font-semibold text-gray-300">Social Media</p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xl">
              <FaTwitter />
            </a>
          </div> 
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 border-t border-gray-700 pt-4 px-6 text-center">
        <p>© 2008 - 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
