import React from "react";
import { useNavigate } from "react-router-dom";

const ContactBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-8 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-center border-t border-b border-gray-300 text-center md:text-left">
      <p className="text-lg sm:text-xl md:text-2xl lg:3xl text-gray-800 md:max-w-3xl max-w-xl ">
        Have inquiries regarding our services?{" "}
        <span className="font-semibold text-blue-600">We're here to assist you!</span>
      </p>
      
      <a
        href="#"
        className="mt-4 md:mt-0 md:ml-6 border border-gray-500 px-6 py-3 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300 text-sm sm:text-base"
        onClick={() => navigate("/contact")}
      >
        Get in Touch
      </a>
    </div>
  );
};

export default ContactBanner;
