import React from 'react';
import { BookOpen, Newspaper, FileText, PenTool, Archive, Users } from 'lucide-react';

const Services = () => {
  const services = [
    { id: 1, icon: <BookOpen className="h-12 w-12 text-blue-600 mb-4" />, title: "Scholarly Articles", description: "High-quality, peer-reviewed articles covering various academic and professional topics." },
    { id: 2, icon: <Newspaper className="h-12 w-12 text-blue-600 mb-4" />, title: "Editorial Review", description: "Comprehensive editing and proofreading services to ensure accuracy, clarity, and coherence in publications." },
    { id: 3, icon: <FileText className="h-12 w-12 text-blue-600 mb-4" />, title: "Manuscript Submission", description: "A streamlined process for authors to submit and track their articles through our publishing platform." },
    { id: 4, icon: <PenTool className="h-12 w-12 text-blue-600 mb-4" />, title: "Content Formatting", description: "Professional formatting to meet journal and publication standards, ensuring structured and well-presented articles." },
    { id: 5, icon: <Archive className="h-12 w-12 text-blue-600 mb-4" />, title: "Digital Archiving", description: "Long-term preservation of published articles in digital repositories for easy access and citation." },
    { id: 6, icon: <Users className="h-12 w-12 text-blue-600 mb-4" />, title: "Author Collaboration", description: "A platform for researchers and writers to collaborate, exchange ideas, and enhance their work." },
  ];

  return (
    <section id="services" className="bg-white py-16 px-6 md:px-8 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Publication Services</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive services designed to support authors, researchers, and publishers in delivering high-quality publications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-50 rounded-lg p-8 text-center shadow-md">
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
