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
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Start Registration
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/img2.png" // Ensure correct path
            alt="Article Publication"
            className="w-full max-w-xs lg:max-w-sm h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ButtonLeft;
