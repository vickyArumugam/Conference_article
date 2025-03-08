import React from 'react'
import CompanyDetails from '../../Shared/Components/About/CompanyDetails'
import WritersResponsibilities from '../Response/Response'
import ButtonLeft from '../../Core/RegisterButtons/ButtonLeft'
import Sponsors from '../../Shared/Components/About/Sponsors'
import WhyUs from '../../Shared/Components/About/WhyUs'


const About = () => {
  return (
   <>
   <CompanyDetails/>
   <WritersResponsibilities/>
   <WhyUs/>
   {/* <PricingPlans/> */}
   <ButtonLeft/>
   <Sponsors/>

   {/* <ReviewBanner/> */}

   
   </>
  )
}

export default About
