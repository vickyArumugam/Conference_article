import React from "react";
import FindJournal from "./FindJournals";

const FindJournalHome = () => {
  return (
    <div className="relative w-full mx-auto min-h-[600px] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
         style={{ backgroundImage: "url('/images/vecteezy_businesspeople-manage-corporate-document-databases-through_10727504.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-white text-center max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
          Touch hearts, inspire change, <br /> and evoke emotions.
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
          We craft compelling content that resonates with your audience. 
          Let your words leave a lasting impact and inspire the world.
        </p>
        <button className="mt-8 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-lg text-lg md:text-xl shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center ">
          Find a Journal <span className="ml-2">↗</span>
        </button>
      </div>
    </div>
  );
};

export default FindJournalHome;
