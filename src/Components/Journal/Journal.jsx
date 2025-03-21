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

      {/* <section
        className="relative text-white py-24 px-6 lg:px-24 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('public/images/publishImg.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
  
        <div className="absolute inset-0  bg-opacity-90"></div>

        <motion.div
          className="relative max-w-3xl mx-auto p-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Journal Publication
          </motion.h1>
         
        </motion.div>
      </section> */}

      <div className="lg:w-max-7xl flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-4 py-16 bg-white min-h-[500px] ">
      {/* Right: Text Section (Appears first on mobile) */}
      <div className="w-full lg:w-[40%] text-center lg:text-left px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4 leading-snug">
          <span className="text-blue-600">Articles Publication</span> Follow our guide to publishing your paper.
        </h2>
        <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          We provide our help to numerous clients looking for a professional
          writing service. Articles Publication was established in 2006, during
          the early stages of academic writing platforms. Over time, it has
          evolved from a small venture into a reputable enterprise. Our
          dedication to writers, commitment to excellence, and focus on building
          lasting relationships make Articles Publication a top choice for
          freelance writers worldwide.
        </p>
      </div>
  

      {/* Left: Image Section */}
      <div className="w-full lg:w-4/12 flex justify-center">
        <img
          src="/images/vecteezy_asian-woman-with-braces-ordering-food_20463451.JPG"
          alt="Illustration"
          className="w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto drop-shadow-lg rounded-lg mb-6 lg:mb-0"
        />
      </div>

    
    </div>

      <PublishSection />
      <PublishingTimeline />
      <EarlyCiteSection />
      <EmeraldInsight/>
      <ContactBanner/>
    </>
  );
};

export default Journal;
