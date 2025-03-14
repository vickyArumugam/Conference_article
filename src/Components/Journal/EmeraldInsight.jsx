import React from "react";

const EmeraldInsight = () => {
  return (
    <section className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center bg-white py-12 px-6 md:px-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/vecteezy_man-using-laptop-computer-with-education-icon-concept_3656056.jpg" // Replace with your image path
          alt="Emerald Insight"
          className="rounded-xl shadow-lg w-full md:max-w-lg"
        />
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4 leading-snug w-[80%]">
          <span className="text-blue-600"> Explore our journals on</span>{" "}
          Emerald Insight
        </h2>
        <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          Search over 255,000 articles, paper, and case studies across business,
          management, economics, engineering, computing, technology, and social
          sciences.
        </p>
      </div>
    </section>
  );
};

export default EmeraldInsight;
