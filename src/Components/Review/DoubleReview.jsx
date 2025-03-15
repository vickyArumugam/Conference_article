import React from "react";

const DoubleReview = () => {
  return (
    <div className="relative lg:w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm brightness-75"
        style={{
          backgroundImage: "url('/images/photo-1522202176988-66273c2fd55f.avif')",
        }}
      ></div>
      
      {/* Content Container */}
      <div className="relative w-[80%]  lg:max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-8 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Double Anonymous Peer Review
        </h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          The most common form of peer review for our journals and case studies is 'double anonymous',
          which keeps the process as objective as possible. Reviewers are not aware of the author’s identity,
          and you will not know the identity of the reviewers.
        </p>
      </div>
    </div>
  );
};

export default DoubleReview;
