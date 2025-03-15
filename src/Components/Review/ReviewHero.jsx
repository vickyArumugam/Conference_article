import React from "react";

const PeerReviewHero = () => {
  return (
    <section className="bg-gray-100 py-16 px-0  lg:px-8 md:px-16 lg:px-24 text-gray-900">
      <div className="max-w-[72%] mx-auto">
        {/* Role of Editor & Reviewer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold ">Role of the Journal Editor</h2>
            
            <p className="mt-3 text-lg text-gray-700 text-justify w-full lg:w-[80%] ">
              The editor decides whether your paper fits the aims and scope of
              the journal, then selects the reviewers and guides the paper
              through several revision stages.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Role of the Reviewer</h2>
            <p className="mt-3 text-lg text-gray-700 text-justify w-full lg:w-[80%]">
              Your reviewers will read your paper or case study and teaching
              note and provide the journal editor with detailed and useful
              comments.
            </p>
          </div>
        </div>

        {/* Review Process */}
        <div className="mt-12 lg:mt-32 text-center">
          <h2 className="text-2xl font-bold text-blue-500 lg:text-5xl">The Journal Review Process</h2>
         
        </div>

        {/* Reviewers' Expectations */}
        <div className="mt-12 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold">What Do Reviewers Look For?</h2>
            <p className="mt-3 text-lg text-gray-700 text-justify w-full lg:w-[80%]">
              This will vary from title to title, for example a journal with a
              strong research focus will put more emphasis on research
              methodology, while journals publishing case studies will focus on
              the quality of the case and accompanying teaching note.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              The Questions Editors Ask Reviewers
            </h2>
            <ul className="mt-3 text-lg text-gray-700 list-disc pl-6 space-y-3 text-justify w-full lg:w-[80%]">
              <li>Does the article contribute original insights?</li>
              <li>If a case study, is this its first use?</li>
              <li>Are research design and methodology sound?</li>
              <li>Are results well-presented and rigorously analyzed?</li>
              <li>Is the submission contextualized within the literature?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeerReviewHero;
