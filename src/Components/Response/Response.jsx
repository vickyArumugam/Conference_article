import { CheckCircle } from "lucide-react";

export default function WritersResponsibilities() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Content Section (Swapped) */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">Writer’s Responsibilities</h2>
          <p className="text-lg text-gray-600 text-justify">
            Our writers are expected to meet the following responsibilities to ensure quality and customer satisfaction:
       
            Since our writers' performance directly impacts our reputation and repeat customers, we expect timely delivery of plagiarism-free papers.
          </p>

          <div className="space-y-5">
            {[
              "Carefully adhere to paper requirements, customer’s instructions,  guidelines.",
              "Follow the correct sentence, paragraph, and overall paper structure.",
              "Develop a smooth flow of thoughts, achieving coherence in ideas."
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="text-blue-600 w-7 h-7" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>

       
        </div>

        {/* Right: Image Section (Swapped) */}
        <div className="md:w-1/2 flex justify-center ">
          <img
            src="/images/vecteezy_inspiration-writer-writing-creative-recreation-for_18973930.jpg"
            alt="Writer Responsibilities Illustration"
            className="w-96 md:w-[600px] h-auto rounded-lg shadow-xl mt-10"
          />
        </div>
      </div>
    </section>
  );
}
