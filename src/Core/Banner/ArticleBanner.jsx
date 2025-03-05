import React from 'react';
import { FaBookOpen, FaPenNib, FaNewspaper, FaAward } from 'react-icons/fa';

const ArticleBanner = () => {
  const stats = [
    { icon: <FaBookOpen />, value: '1000+', label: 'Articles Published' },
    { icon: <FaPenNib />, value: '500+', label: 'Writers Contributed' },
    { icon: <FaNewspaper />, value: '50+', label: 'Topics Covered' },
    { icon: <FaAward />, value: '10+', label: 'Industry Awards' },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-12 px-6 rounded-lg shadow-2xl mx-4 md:mx-20 lg:mx-40">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center animate-fade-in">Our Publication Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white text-blue-500 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-4xl font-extrabold mb-2">{item.value}</h3>
            <p className="text-lg font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ArticleBanner;

// I updated the section to showcase article publication stats with relevant icons and content. Let me know if you’d like me to refine anything further! 🚀
