import React from "react";
import PeerReviewHero from "./ReviewHero";
import DoubleReview from "./DoubleReview";
import Timeline from "./ReviewTimeline";
import TipsSection from "./TipsSection";
import ExperienceSection from "./ExperienceSection";

const reviews = [
  {
    id: 1,
    reviewer: "Dr. Emily Carter",
    paperTitle: "Advancements in AI for Research Publications",
    review:
      "This journal provided a detailed and insightful peer review. The suggestions significantly improved my research paper.",
    rating: 5,
  },
  {
    id: 2,
    reviewer: "Prof. David Wilson",
    paperTitle: "The Future of Open-Access Journals",
    review:
      "A rigorous yet fair review process. The feedback helped enhance the clarity and impact of my article.",
    rating: 4,
  },
  {
    id: 3,
    reviewer: "Dr. Sophia Patel",
    paperTitle: "Ethical Considerations in Scientific Publishing",
    review:
      "Excellent editorial team! The publication process was smooth, and the article was published promptly.",
    rating: 5,
  },

];

const ReviewSection = () => {
  return (
    <>
    
    <ExperienceSection/>
    <PeerReviewHero/>
    <DoubleReview/>
    <TipsSection/>
    <Timeline/>
    

    </>
    
  );
};

export default ReviewSection;
