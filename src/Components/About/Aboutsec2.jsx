import React from "react";
import { CheckCircle, Award } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 w-[90%] max-w-7xl mx-auto">
      
      <div className="lg:w-[45%] text-center lg:text-left"> 
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
          We Writing <br />
          <span className="text-blue-600">Amazing Content</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-6">
          We are crafting amazing content that captivates and inspires. Every word is designed to engage, inform, and leave a lasting impact.
        </p>

        <div className="flex flex-col gap-6 mt-8">
          {/* Feature 1 */}
          <div className="flex sm:flex-row flex-col items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="bg-blue-200 p-3 rounded-lg shadow-md flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-blue-600" /> 
            </div>
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Experienced</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Years of expertise in content creation and publication.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex sm:flex-row flex-col items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="bg-blue-200 p-3 rounded-lg shadow-md flex items-center justify-center">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Certified</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Recognized by industry experts and professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Centered & Smaller Button */}
        <div className="flex justify-center lg:justify-start">
          <button 
            onClick={() => navigate("/review")} 
            className="mt-6 px-5 sm:px-6 py-4 sm:py-3 bg-blue-600 text-white rounded-md text-sm sm:text-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Review Process <span className="ml-2">↗</span>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-[50%] flex justify-center mt-12 lg:mt-0 group">
        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-80 h-52 md:w-[500px] md:h-[350px] lg:w-[500px] lg:h-[350px] bg-blue-100 rounded-xl shadow-2xl transition-all duration-500 group-hover:z-10 group-hover:translate-x-10 group-hover:translate-y-10">
          <img
            src="/images/vecteezy_multiethnic-startup-business-team-on-meeting_12108097.jpg"
            alt="Professional Team"
            className="w-full h-full object-cover rounded-xl drop-shadow-xl transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="relative w-80 h-52 md:w-[500px] md:h-[350px] lg:w-[500px] lg:h-[350px] bg-white rounded-xl shadow-2xl transform translate-x-10 translate-y-10 transition-all duration-500 group-hover:-translate-x-10 group-hover:-translate-y-10 group-hover:z-0">
          <img
            src="/images/vecteezy_young-asian-students-in-casual-wear-do-homework-and-use-a_20808709.jpg"
            alt="Team Meeting"
            className="w-full h-full object-cover rounded-xl drop-shadow-xl transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
