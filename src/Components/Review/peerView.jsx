
import React from "react";
import { Star, FileText, User } from "lucide-react";
import PeerReviewHero from "./ReviewHero";
import Banner from "../../Core/Banner/Banner";
import BusinessInfographic from "./BusinessInfographic";

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
     <PeerReviewHero/>
    <Banner/>
    <BusinessInfographic/>

     <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
       
       

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 shadow-md rounded-lg text-center"
            >
              {/* Paper Title */}
              <div className="flex items-center justify-center mb-2 text-blue-600">
                <FileText className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-semibold">{review.paperTitle}</h3>
              </div>

              {/* Star Ratings */}
              <div className="flex justify-center mb-3">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg italic">"{review.review}"</p>

              {/* Reviewer Name */}
              <div className="flex items-center justify-center mt-4 text-gray-900 font-semibold">
                <User className="h-5 w-5 mr-2" />
                {review.reviewer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <JournalSubmissionInfographic/> */}

    </>
    
  );
};

export default ReviewSection;
