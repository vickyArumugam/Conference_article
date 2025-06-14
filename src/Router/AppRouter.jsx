import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Core/Home/Home";
import Main from "../Core/Main/Main";
import About from "../Components/About/About";
import Journal from "../Components/Journal/Journal";
import PeerView from "../Components/Review/peerView";
import PaperSubmissionForm from "../Components/Registerform/paper";
import Contactus from "../Components/Contact/Contact";
import PricingPlans from "../Shared/Components/About/PricingPlans";
import FindJournal from "../Components/FindJournal/FindJournals";
import JournalDetails from "../Components/FindJournal/JournalDetails";
import ScrollToTop from "../Core/ScrollToTop";
import NotFound from "../Core/NotFound";
import MetaTags from "../Core/SEO/MetaTag";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../Components/PrivacyPolicy/CookiePolicy";
import TermsOfUse from "../Components/PrivacyPolicy/TermsOfUse";
import RefundsPolicy from "../Components/PrivacyPolicy/RefundsPolicy";

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <MetaTags />
      <Routes>
        {/* Main Layout Wrapper */}
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/about" element={<About />} />
          <Route path="/publish" element={<Journal />} />
          <Route path="/review" element={<PeerView />} />
          <Route path="/Journal" element={<FindJournal />} />
          <Route path="/journal/:id" element={<JournalDetails />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/register" element={<PaperSubmissionForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/refunds-policy" element={<RefundsPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
