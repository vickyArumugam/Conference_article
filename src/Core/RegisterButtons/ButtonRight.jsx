import React from "react";

const ButtonRight = () => {
  return (
    <div className="w-full bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Right Side - Content */}
        <div className="flex-1">
          <img
            src="\images\3892670.jpg" // Replace with your actual image path
            alt="Conference"
            className="w-full max-w-lg mx-auto lg:mx-0 h-[50%] rounded-lg "
          />
        </div>

        {/* Left Side - Image */}
        <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Register now to start earning!
          </h2>
          {/* <h1 className="text-3xl sm:text-4xl lg:text-[32px] font-bold text-gray-700 leading-tight ">
            Register now to start earning!
          </h1> */}
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            articlespublication is a freelance academic writing agency, which
            could offer you the perfect job!
          </p>
          <button className="mt-6 px-10 py-3 bg-blue-600 text-white text-xl rounded-3xl shadow-md hover:bg-blue-700 transition duration-300">
            Start Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonRight;
