import React from "react";
import CompanyDetails from "../../Shared/Components/About/CompanyDetails";
import WritersResponsibilities from "../Response/Response";
import ButtonLeft from "../../Core/RegisterButtons/ButtonLeft";
import Sponsors from "../../Shared/Components/About/Sponsors";
import WhyUs from "../../Shared/Components/About/WhyUs";
import ContactBanner from "../../Core/Banner/ContactBanner";
import Banner from "../../Core/Banner/Banner";

const About = () => {
  return (
    <>
      <CompanyDetails />
      <WritersResponsibilities />
      <Banner />

      <WhyUs />
      <ButtonLeft />
      <ContactBanner/>
      <Sponsors />
    </>
  );
};

export default About;
