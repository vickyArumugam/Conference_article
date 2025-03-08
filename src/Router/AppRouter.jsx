import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Core/Home/Home";
import Main from "../Core/Main/Main";
import About from "../Components/About/About";
import Journal from "../Components/Journal/Journal";
import PeerView from "../Components/Review/peerView";
import PaperSubmissionForm from "../Components/Registerform/paper";
import Contactus from "../Components/Contact/Contact";
import FindJournal from "../Components/FindJournal/FindJournals";
import PricingPlans from "../Shared/Components/About/PricingPlans";




function AppRouter() {
  return (
    <BrowserRouter>
     {/* <ScrollToTop/> */}
          <Routes> 
          <Route element={<Main/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/pricing" element={<PricingPlans/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/publish" element={<Journal/>} />
            <Route path="/review" element={<PeerView/>} />
            <Route path="/Journal" element={<FindJournal/>} /> 
            <Route path="/contact" element={<Contactus/>} /> 
            <Route path="/register" element={<PaperSubmissionForm/>} /> 
          </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
