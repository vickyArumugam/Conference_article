import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonLeft = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 px-6 md:px-8 lg:px-24 flex justify-center">
      <div className="w-[70%] flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left Side - Text Content */}
        <div className="lg:w-5/6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Register now to start earning!
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            ArticlesPublication is a freelance academic writing agency that offers
            you the opportunity to publish and earn from your research.
          </p>
          <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 mt-10  bg-blue-600 text-white rounded-lg text-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center cursor-pointer ml-10 md:ml-44 lg:ml-0  "
            >
              Register now <span className="ml-2">↗</span>
            </button>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/3892670.jpg" // Ensure correct path
            alt="Article Publication"
            className="w-full max-w-xs lg:max-w-sm h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ButtonLeft;
