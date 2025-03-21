import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-blue-500 italic text-lg">Premium Services</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Your Source for Insightful Articles & Unfiltered Perspectives
          </h1>
          <p className="text-gray-600 text-base mt-4 max-w-lg mx-auto lg:mx-0">
            Driven to publish research that inspires action. Join us in making a positive impact — are you ready?
          </p>

          {/* Button - Left on large screens, centered on small screens */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 mt-6 bg-blue-600 text-white rounded-lg text-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center cursor-pointer"
            >
              Register now <span className="ml-2">↗</span>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="lg:w-1/2 flex justify-center bg-contain bg-no-repeat p-6"
          style={{
            backgroundImage:
              "url('/images/vecteezy_organic-blob-shapes-hand-drawn-illustration_9668662.png')",
          }}
        >
          <img
            src="/images/woman-student.webp"
            alt="Person with laptop"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[
          { icon: "📄", title: "Copywriter & SEO Expert", content: "Crafting compelling content that ranks high and converts better" },
          { icon: "✍️", title: "Creative & Content Writer", content: "Bringing ideas to life with captivating words and impactful storytelling" },
          { icon: "📢", title: "Advertisement & Promotions", content: "Creating bold campaigns that amplify your brand and drive results" },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 hover:shadow-xl transition"
          >
            <div className="bg-blue-500 p-4 rounded-full text-white text-2xl">
              {service.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-base">
                {service.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
