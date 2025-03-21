import React from "react";
import { useNavigate } from "react-router-dom";

const FindJournalHome = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full mx-auto min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-fixed bg-cover bg-center px-6 sm:px-8 lg:px-12"
      style={{
        backgroundImage:
          "url('/images/vecteezy_businesspeople-manage-corporate-document-databases-through_10727504.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative text-white text-center max-w-4xl px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] mb-3">
          Touch hearts, inspire change, and
          <span className="text-blue-600"> Evoke emotions.</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Search over 450 journals by keyword, title, or ISSN, and use our new
          filter, sort, and compare options to find publications relevant to
          your needs. Stay updated with our latest calls for papers and special
          issues.
        </p>
        <button
          onClick={() => navigate("/Journal")}
          className="mt-10 px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-md text-sm sm:text-base md:text-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Find a Journal <span className="ml-1">↗</span>
        </button>
      </div>
    </div>
  );
};

export default FindJournalHome;
