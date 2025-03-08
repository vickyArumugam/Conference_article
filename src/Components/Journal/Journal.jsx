import React from "react";
import { motion } from "framer-motion";
import PublishSection from "./PublishSection";
import PublishingTimeline from "./PublishingTimeline";
import EarlyCiteSection from "./EarlyCiteSection";

const Journal = () => {
  return (
    <>
      <section
        className="relative text-white py-24 px-6 lg:px-16 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('public/images/publishImg.jpg')", // Update with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better readability */}
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
          <motion.p
            className="text-lg md:text-xl font-light opacity-90 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Follow our guide to publishing your paper in an Emerald journal and
            find resources to support you. Our journal publishing infographic
            will help you understand each step, from submission to publication.
          </motion.p>
          <motion.a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Guide
          </motion.a>
        </motion.div>
      </section>

      <PublishSection />
      <PublishingTimeline />
      <EarlyCiteSection />
    </>
  );
};

export default Journal;
