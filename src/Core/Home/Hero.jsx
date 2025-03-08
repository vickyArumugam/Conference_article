import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-left">
          <h3 className="text-blue-500 italic text-lg">Premium Services</h3>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mt-2">
            Your Source for Insightful Articles & Unfiltered Perspectives
          </h1>
          <p className="text-gray-600 text-base mt-4">
            Driven to publish research that inspires action. Join us in making a positive impact — are you ready?
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Register now
          </button>
        </div>
        <div
          className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 bg-contain bg-no-repeat p-6"
          style={{
            backgroundImage:
              "url('/images/vecteezy_organic-blob-shapes-hand-drawn-illustration_9668662.png')",
          }}
        >
          <img
            src="/images/vecteezy_a-cheerful-asian-woman-student-stands-confidently-holding-a_55794185.png"
            alt="Person with laptop"
            className="w-full max-w-xs md:max-w-md lg:max-w-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[
          { icon: "📄", title: "Copywriter & SEO Expert", content: "Crafting compelling content that ranks high and converts better" },
          { icon: "✍️", title: "Creative & Content Writer", content: "Bringing ideas to life with captivating words and impactful storytelling" },
          { icon: "📢", title: "Advertisement & Promotions", content: "Creating bold campaigns that amplify your brand and drive results" },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
          >
            <div className="bg-blue-500 p-4 rounded-full text-white">
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


