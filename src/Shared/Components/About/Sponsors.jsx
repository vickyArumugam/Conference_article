import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-white py-6 flex justify-center">
      <div className="overflow-hidden whitespace-nowrap w-4/5 relative">
        <div className="flex space-x-16 animate-scroll">
          {[...Array(2)].map((_, index) => (
            <>
              <img key={`logo1-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (6).jpg" alt="Sponsor 1" className="h-16" />
              <img key={`logo2-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (5).jpg" alt="Sponsor 2" className="h-16" />
              <img key={`logo3-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (4).jpg" alt="Sponsor 3" className="h-16" />
              <img key={`logo4-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (3).jpg" alt="Sponsor 4" className="h-16" />
              <img key={`logo5-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (2).jpg" alt="Sponsor 5" className="h-16" />
              <img key={`logo6-${index}`} src="\images\Indexing-banner-JoE-2024-1024x439 (5).jpg" alt="Sponsor 6" className="h-16" />
            </>
          ))}
        </div>
      </div>

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
