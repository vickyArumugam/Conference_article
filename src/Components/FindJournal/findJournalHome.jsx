import React from "react";
import FindJournal from "./FindJournals";

const FindJournalHome = () => {
  return (
    <div
      className="relative w-full mx-auto min-h-[600px] flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('/images/vecteezy_businesspeople-manage-corporate-document-databases-through_10727504.jpg')",
        backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative text-white text-center max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mb-2">
          Touch hearts, inspire change, and
          <span className="text-blue-600"> Evoke emotions.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
          Search over 450 journals by keyword, title or ISSN, and use our new
          filter, sort and compare options to find publications relevant to your
          needs. You can also stay updated with our latest calls for papers and
          special issues.
        </p>
        <button className="mt-8 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-lg text-lg md:text-xl shadow-lg hover:bg-blue-700 transition duration-300">
          Find a Journal <span className="ml-2">↗</span>
        </button>
      </div>
    </div>
  );
};

export default FindJournalHome;
