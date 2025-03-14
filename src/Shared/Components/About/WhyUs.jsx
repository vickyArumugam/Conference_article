import React, { useEffect, useState, useRef } from "react";

const StatCounter = ({ value, label, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const interval = setInterval(() => {
          start += Math.ceil(value / 50);
          if (start >= value) {
            setCount(value);
            clearInterval(interval);
          } else {
            setCount(start);
          }
        }, 50);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, { threshold: 0.5 });

    if (ref.current) observer.current.observe(ref.current);

    return () => observer.current.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h3 className={`text-4xl font-bold ${color}`}>{count}+</h3>
      <p className="text-black text-lg mt-2">{label}</p> {/* Black color applied to label */}
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-8 md:px-12 lg:px-24 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Side - Image with Gray Background */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="bg-gray-300 p-4 rounded-lg">
            <img
              src="/images/vecteezy_ai-generated-journalist-writing-breaking-news-article_35535356.jpg"
              alt="Journal Publication"
              className="w-full max-w-lg lg:max-w-2xl"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full">
          <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium">
            📖 Why Choose Our Article Publication?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Elevate Your Research with a Trusted Journal Platform
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            Our publication platform ensures rigorous peer review, high-impact visibility, and a seamless submission process.
            Whether you are an aspiring researcher or an established academic, our journal provides the credibility and reach your work deserves.
          </p>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            Join a network of scholars committed to advancing knowledge in their fields. Publish with confidence and
            contribute to a growing body of impactful research.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-8">
          <StatCounter value={14000} label="Articles Published" color="text-blue-500" />
          <StatCounter value={5000} label="Happy Authors" color="text-blue-500" />
          <StatCounter value={4.8} label="Reviewer Rating" color="text-blue-500" />
          <StatCounter value={100} label="Expert Editors" color="text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
