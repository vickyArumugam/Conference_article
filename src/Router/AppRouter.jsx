import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Core/Home/Home";
import Main from "../Core/Main/Main";
import About from "../Components/About/About";
import Journal from "../Components/Journal/Journal";
import PeerView from "../Components/Review/peerView";
import ContactForm from "../Components/Contact/Contact";
import PaperSubmissionForm from "../Components/Registerform/paper";



function AppRouter() {
  return (
    <BrowserRouter>
     {/* <ScrollToTop/> */}
          <Routes> 
          <Route element={<Main/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/review" element={<PeerView/>} />
            <Route path="/Journal" element={<Journal/>} /> 
            <Route path="/contact" element={<ContactForm/>} /> 
            <Route path="/register" element={<PaperSubmissionForm/>} /> 
          </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
