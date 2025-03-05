import React from "react";

const ContactBanner = () => {
  return (
    <div className="bg-gray-100 py-6 px-8 flex justify-center items-center border-t border-b border-gray-300">
      <p className="text-xl text-gray-800">
        You are an applicant and have questions? <span className="font-semibold">We will help you!</span>
      </p>
      <a
        href="#"
        className="ml-6 border border-gray-500 px-5 py-2 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300"
      >
        Contact Us
      </a>
    </div>
  );
};

export default ContactBanner;
