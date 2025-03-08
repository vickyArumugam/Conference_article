import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Banner from "../Banner/Banner";
import ButtonRight from "../RegisterButtons/ButtonRight";
import AboutMain from "../../Components/About/AboutMain";
import Services from "../../Components/Services/Services";
import TestimonialCarousel from "../Banner/Carousel";
import AboutSec2 from "../../Components/About/Aboutsec2";
import FindJournalHome from "../../Components/FindJournal/findJournalHome";
import PricingPlans from "../../Shared/Components/About/PricingPlans";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <AboutMain />
      <Banner />
      <Services />
      <FindJournalHome />
      <AboutSec2 />
      <TestimonialCarousel />
      
      {/* Add ID here */}
      <div id="pricing-plans">
        <PricingPlans />
      </div>

      <ButtonRight />
    </>
  );
};

export default Home;
