import React from "react";

const CompanyDetails = () => {
  return (
    // <div className="lg:w-max-7xl flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12 md:py-16 bg-gray-50 min-h-[500px] lg:min-h-[600px] ">
    //   {/* Right: Text Section (Appears first on mobile) */}
    //   <div className="w-full lg:w-4/12 flex justify-center">
    //     <img
    //       src="/images/startup-business.webp"
    //       alt="Illustration"
    //       className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto drop-shadow-lg rounded-lg mt-10 lg:mt-0"
    //     />
    //   </div>

    //   {/* Left: Image Section */}
    //   <div className="w-full lg:w-[70%] text-center lg:text-left px-6 md:px-10 lg:px-16">
    //     <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4 mb-4">
    //       <span className="text-blue-600">Articles Publication</span> is an
    //       academic writing assistance company.
    //     </h2>
    //     <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
    //       We provide our help to numerous clients looking for a professional
    //       writing service. Articles Publication was established in 2025, during
    //       the early stages of academic writing platforms. Over time, it has
    //       evolved from a small venture into a reputable enterprise. Our
    //       dedication to writers, commitment to excellence, and focus on building
    //       lasting relationships make Articles Publication a top choice for
    //       freelance writers worldwide.
    //     </p>
    //   </div>
    // </div>

   <section className="bg-white py-12 px-9 md:py-16 md:px-12 lg:py-22 lg:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
    
    {/* Left: Image Section */}
    <div className="flex justify-center mt-8 md:mt-0 md:order-1 md:w-[80%]">
      <img
        src="/images/startup-business.webp"
        alt="Illustration"
        className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto drop-shadow-lg rounded-lg mt-10 lg:mt-0"
      />
    </div>

    {/* Right: Content Section */}
    <div className="space-y-6 lg:space-y-8 md:order-2 md:w-[80%]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
        Writer’s Responsibilities
      </h2>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
        We provide our help to numerous clients looking for a professional
        writing service. Articles Publication was established in 2025, during
        the early stages of academic writing platforms. Over time, it has
        evolved from a small venture into a reputable enterprise. Our dedication
        to writers, commitment to excellence, and focus on building lasting
        relationships make Articles Publication a top choice for freelance
        writers worldwide.
      </p>
    </div>
  </div>
</section>

  );
};

export default CompanyDetails;
