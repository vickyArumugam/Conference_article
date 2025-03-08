import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-white py-6 flex flex-col items-center">
      {/* Section heading */}
      <h2 className="text-3xl font-bold mb-4">Sponsors</h2>
      <p className="text-lg text-gray-600 mb-6">
        Our valued partners and supporters
      </p>

      {/* Sponsor section wrapper */}
      <div className="overflow-hidden whitespace-nowrap w-4/5 relative">
        <div className="flex space-x-16 animate-scroll">
          {/* Duplicating logos for smooth infinite scrolling */}
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
             <img key={`logo1-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (6).jpg" alt="Sponsor 1" className="h-16" />
              <img key={`logo2-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (5).jpg" alt="Sponsor 2" className="h-16" />
              <img key={`logo3-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (4).jpg" alt="Sponsor 3" className="h-16" />
              <img key={`logo4-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (3).jpg" alt="Sponsor 4" className="h-16" />
              <img key={`logo5-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (2).jpg" alt="Sponsor 5" className="h-16" />
              <img key={`logo6-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (5).jpg" alt="Sponsor 6" className="h-16" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scrolling animation style */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
            will-change: transform;
          }
        `}
      </style>
    </div>
  );
};

export default Sponsors;

// This component is a dedicated sponsor section with auto-scrolling logos.
// Now includes a heading and subheading to highlight the sponsor section! 🚀
