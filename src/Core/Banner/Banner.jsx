import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToPricing) {
      setTimeout(() => {
        const pricingSection = document.getElementById("pricing-plans");
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Ensures DOM is ready
    }
  }, [location]);

  const handleViewPricing = () => {
    if (location.pathname === "/") {
      setTimeout(() => {
        const pricingSection = document.getElementById("pricing-plans");
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    } else {
      navigate("/", { state: { scrollToPricing: true } });
    }
  };

  return (
    <div className="bg-blue-200 sm:bg-gradient-to-r from-white via-blue-500 to-white text-black py-10 px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-center items-center text-center md:text-left text-4xl">
      <p className="text-lg sm:text-lg md:text-xl font-medium">
        There is no other company that offers{" "}
        <span className="font-bold text-xl sm:text-2xl">$15</span>/page written by an{" "}
        <span className="text-xl sm:text-2xl">ESL</span> writer and{" "}
        <span className="font-bold text-xl sm:text-2xl">$26</span>/page completed by an{" "}
        <span className="text-xl sm:text-2xl">ENL</span> writer.
      </p>

      <button
        onClick={handleViewPricing}
        className="mt-4 md:mt-0 md:ml-6 border-2 border-black px-4 py-2 rounded-full flex items-center hover:bg-black hover:text-white transition duration-300 text-xl cursor-pointer md:w-[40%] sm:w-[50%] lg:w-auto"
      >
        View Pricing →
      </button>
    </div>
  );
};

export default Banner;
