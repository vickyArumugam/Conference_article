import React from "react";

const PeerReviewHero = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-24 text-gray-900">
      <div className="max-w-[100%] mx-auto lg:max-w-[80%]">
        {/* Role of Editor & Reviewer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 px-4">
          {[{
            title: "Role of the Journal Editor",
            description:
              "The editor decides whether your paper fits the aims and scope of the journal, then selects the reviewers and guides the paper through several revision stages."
          }, {
            title: "Role of the Reviewer",
            description:
              "Your reviewers will read your paper or case study and teaching note and provide the journal editor with detailed and useful comments."
          }].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-full">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-3 text-lg text-gray-700 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Review Process */}
        <div className="mt-12 lg:mt-32 text-center px-4">
          <h2 className="text-2xl font-bold text-blue-500 lg:text-5xl">
            The Journal Review Process
          </h2>
        </div>

        {/* Reviewers' Expectations */}
        <div className="mt-12 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 px-4">
          {[{
            title: "What Do Reviewers Look For?",
            description:
              "This will vary from title to title, for example a journal with a strong research focus will put more emphasis on research methodology, while journals publishing case studies will focus on the quality of the case and accompanying teaching note."
          }, {
            title: "The Questions Editors Ask Reviewers",
            list: [
              "Does the article contribute original insights?",
              "If a case study, is this its first use?",
              "Are research design and methodology sound?",
              "Are results well-presented and rigorously analyzed?",
              "Is the submission contextualized within the literature?"
            ]
          }].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-full">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              {item.description ? (
                <p className="mt-3 text-lg text-gray-700 text-justify">
                  {item.description}
                </p>
              ) : (
                <ul className="mt-3 text-lg text-gray-700 list-disc pl-6 space-y-3">
                  {item.list.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeerReviewHero;
