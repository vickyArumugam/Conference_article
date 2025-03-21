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
import ContactBanner from "../Banner/ContactBanner";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();


  return (
    <>
      <Hero />
      <AboutMain />
      <Banner />
      <Services />
      <FindJournalHome />
      <AboutSec2 />
      <TestimonialCarousel />
      <div id="pricing-plans">
        <PricingPlans />
      </div>
      <ContactBanner />
      <ButtonRight />
    </>
  );
};

export default Home;