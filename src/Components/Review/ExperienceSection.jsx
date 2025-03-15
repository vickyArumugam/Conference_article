import React from "react";
import { useNavigate } from "react-router-dom";

const ExperienceSection = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-[80%] lg:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center pb-16 lg:pt-16 px-0 lg:px-6 md:px-20 bg-white gap-10">
      {/* Left Side - Image & Experience */}
      <div className="md:w-1/2 md:pl-16 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4 leading-snug">
          <span className="text-blue-600">Writing content like you've </span> is
          an never had before.
        </h2>
        <p className="w-full lg:w-[88%] text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify ">
          Donec scelerisque leo justo molestie habitant lobortis turpis si
          congue blandit. Quisque diam ornare vel mi himenaeos lacinia cursus.
          Lobortis nunc morbi eros fringilla per tellus nostra.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Register now
        </button>
      </div>
      {/* Right Side - Content */}
      <div className="relative md:w-1/2">
        <img
          src="/images/vecteezy_young-asian-students-in-casual-wear-do-homework-and-use-a_20808709.jpg"
          alt="Woman writing content"
          className="rounded-lg shadow-lg w-full lg:w-[80%] "
        />
        <div className="absolute top-5 left-5 bg-white p-4 rounded-full shadow-lg border-3 border-blue-500">
          <h3 className="text-4xl font-bold text-blue-600">15+</h3>
          <p className="text-sm font-medium text-gray-600">YEARS EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
