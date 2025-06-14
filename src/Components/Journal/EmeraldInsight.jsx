import React from "react";

const EmeraldInsight = () => {
  return (
    <section className="w-full min-h-[500px] lg:max-w-7xl mx-auto flex flex-col lg:flex-row md:flex-row items-center justify-center bg-white py-14 px-6 md:gap-10
    

     lg:px-6 lg:py-16 md:min-h-[380px]">
      {/* Left Content (Image) */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/images/laptop-computer.webp" // Replace with your image path
          alt="Emerald Insight"
          className="rounded-xl shadow-lg w-full md:max-w-lg"
        />
      </div>

      {/* Right Content (Text) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-2xl md:text-3xl md:mt-10 font-bold text-gray-900 border-l-4 border-blue-500 pl-4 leading-snug w-full md:w-[80%] mx-auto md:mx-0">
          <span className="text-blue-600">Explore our journals on</span> Emerald Insight
        </h2>
        <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          Search over 255,000 articles, papers, and case studies across business,
          management, economics, engineering, computing, technology, and social
          sciences.
        </p>
      </div>
    </section>
  );
};

export default EmeraldInsight;
