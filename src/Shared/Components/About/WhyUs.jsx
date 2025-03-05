import React, { useEffect, useState, useRef } from "react";

const StatCounter = ({ value, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const interval = setInterval(() => {
          start += Math.ceil(value / 50); // Smooth Increment
          if (start >= value) {
            setCount(value);
            clearInterval(interval);
          } else {
            setCount(start);
          }
        }, 50); // Speed of animation
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Trigger when 50% visible
    });

    if (ref.current) observer.current.observe(ref.current);

    return () => observer.current.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h3 className={`text-4xl font-bold ${color}`}>{count}+</h3>
      <p className="text-gray-200 text-lg mt-2">{
        value === 14000 ? "Article Published" : 
        value === 5000 ? "Happy Client" : 
        value === 4.8 ? "Customer Rating" : 
        "Expert Team"
      }</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-12 lg:px-24 ">
      {/* Bigger Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[150px] md:h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C200,180 400,30 600,100 C800,180 1000,30 1200,100 L1200,200 L0,200 Z"
            className="fill-amber-100"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 mt-10">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src="/images/social-media-illustration.png"
            alt="Social Media"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full lg:mt-36">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            🤔 WHY US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Use the power of social media to get in touch with a wider audience
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Do you want to build brand awareness and a community of relevant
            followers? You can do that with the help of social media and our top
            experts. If you're still not using social media to reach your target
            audience, you're losing opportunities to grow your business.
          </p>
          <p className="text-gray-600 text-lg mt-2">
            Social media is more integrated into our lives, and we can’t ignore
            it. Our experienced social media experts can help you grow your
            audience in no time.
          </p>
          
        </div>
      </div>

      {/* Stats Section with Background */}
      <div className="bg-blue-500 text-white mt-10 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-8">
          <StatCounter value={14000} color="text-yellow-400" />
          <StatCounter value={5000} color="text-green-400" />
          <StatCounter value={4.8} color="text-red-400" />
          <StatCounter value={100} color="text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
