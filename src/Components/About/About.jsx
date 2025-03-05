import React from 'react'
import CompanyDetails from '../../Shared/Components/About/CompanyDetails'
import WritersResponsibilities from '../Response/Response'
import ContactBanner from '../../Core/Banner/ContactBanner'
import ButtonLeft from '../../Core/RegisterButtons/ButtonLeft'
import ButtonRight from '../../Core/RegisterButtons/ButtonRight'
import Sponsors from '../../Shared/Components/About/Sponsors'
import ReviewBanner from '../../Core/Banner/ReviewBanner'
import WhyUs from '../../Shared/Components/About/WhyUs'
import PricingPlans from '../../Shared/Components/About/PricingPlans'

const About = () => {
  return (
   <>
   <CompanyDetails/>
   <Sponsors/>
   <WritersResponsibilities/>
   <WhyUs/>
   <PricingPlans/>

   <ButtonLeft/>
   {/* <ReviewBanner/> */}

   
   </>
  )
}

export default About
