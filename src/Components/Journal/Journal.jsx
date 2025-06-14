import React from "react";
import { motion } from "framer-motion";
import PublishSection from "./PublishSection";
import PublishingTimeline from "./PublishingTimeline";
import EarlyCiteSection from "./EarlyCiteSection";
import EmeraldInsight from "./EmeraldInsight";
import ContactBanner from "../../Core/Banner/ContactBanner";

const Journal = () => {
  return (
    <>
      {/* <div className="lg:w-max-7xl flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-4 py-16 bg-white min-h-[500px] ">
      
        <div className="w-full lg:w-[40%] text-center lg:text-left px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4 leading-snug">
            <span className="text-blue-600">Articles Publication</span> Follow
            our guide to publishing your paper.
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            We invite authors to submit original, unpublished research papers
            following our conference guidelines. Ensure your manuscript is
            properly formatted, free of plagiarism, and ready for peer review.
            Accepted papers will be published in the official conference
            proceedings and may be indexed in academic databases. Follow our
            step-by-step submission guide to complete your paper submission
            successfully.
          </p>
        </div>

     
        <div className="w-full lg:w-4/12 flex justify-center">
          <img
            src="/images/asian-woman-with-braces.webp"
            alt="Illustration"
            className="w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto drop-shadow-lg rounded-lg mb-6 lg:mb-0"
          />
        </div>
      </div> */}
      <section className="bg-white py-12 px-9 md:py-16 md:px-12 lg:py-22 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ">
          {/* Left: Content Section */}
          <div className="space-y-6 lg:space-y-8 md:order-1 md:w-[80%]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              Writer’s Responsibilities
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              We invite authors to submit original, unpublished research papers
              following our conference guidelines. Ensure your manuscript is
              properly formatted, free of plagiarism, and ready for peer review.
              Accepted papers will be published in the official conference
              proceedings and may be indexed in academic databases. Follow our
              step-by-step submission guide to complete your paper submission
              successfully.
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="flex justify-center mt-8 md:mt-0 md:order-2 md:w-[80%]">
            <img
              src="/images/asian-woman-with-braces.webp"
              alt="Illustration"
              className="w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto drop-shadow-lg rounded-lg mb-6 lg:mb-0"
            />
          </div>
        </div>
      </section>

      <PublishSection />
      <PublishingTimeline />
      <EarlyCiteSection />
      <EmeraldInsight />
      <ContactBanner />
    </>
  );
};

export default Journal;
