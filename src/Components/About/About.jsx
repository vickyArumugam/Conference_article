import React from "react";
import CompanyDetails from "../../Shared/Components/About/CompanyDetails";
import WritersResponsibilities from "../Response/Response";
import ButtonLeft from "../../Core/RegisterButtons/ButtonLeft";
import Sponsors from "../../Shared/Components/About/Sponsors";
import WhyUs from "../../Shared/Components/About/WhyUs";
import ContactBanner from "../../Core/Banner/ContactBanner";

const About = () => {
  return (
    <>
      <CompanyDetails />
      <WritersResponsibilities />
      <WhyUs />
      <ButtonLeft />
      <ContactBanner/>
      <Sponsors />
    </>
  );
};

export default About;
