import React from "react";

const PeerReviewHero = () => {
  return (
    <section className="bg-gray-100 py-20 px-8 md:px-16 lg:px-32 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Role of Editor & Reviewer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold">Role of the Journal Editor</h2>
            <p className="mt-3 text-lg text-gray-700 text-justify w-[80%]">
              The editor decides whether your paper fits the aims and scope of
              the journal, then selects the reviewers and guides the paper
              through several revision stages.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Role of the Reviewer</h2>
            <p className="mt-3 text-lg text-gray-700 text-justify w-[80%]">
              Your reviewers will read your paper or case study and teaching
              note and provide the journal editor with detailed and useful
              comments.
            </p>
          </div>
        </div>

        {/* Review Process */}
        <div className="mt-32  text-center">
          <h2 className="text-5xl font-bold text-blue-500">The Journal Review Process</h2>
          <p className="mt-6 text-lg text-gray-700">
            Download and keep your step-by-step guide (PDF).
          </p>
          <a
            href="#"
            className="mt-5 inline-block bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full shadow-md hover:bg-green-700 transition"
          >
            Download Infographic →
          </a>
        </div>

        {/* Reviewers' Expectations */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold">What Do Reviewers Look For?</h2>
            <p className="mt-3 text-lg text-gray-700 text-justify w-[80%]">
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
            <ul className="mt-3 text-lg text-gray-700 list-disc pl-6 space-y-3 text-justify w-[80%]">
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
