import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonRight = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-8 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/img3.png" // Use forward slashes for correct path
            alt="Conference"
            className="w-full max-w-xs lg:max-w-sm h-auto object-cover mt-6 lg:mt-0"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Register now to start earning!
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            ArticlesPublication is a freelance academic writing agency, which
            could offer you the perfect job!
          </p>
          <button 
            onClick={() => navigate("/register")} 
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Start Registration
          </button>
        </div>
      </div>
    </section>
  );
};

export default ButtonRight;
