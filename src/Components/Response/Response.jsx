import { CheckCircle } from "lucide-react";

export default function WritersResponsibilities() {
  return (
    <section className="bg-white py-12 px-10 md:py-22 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Content Section (Swapped) */}
        <div className="md:w-1/2 space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Writer’s Responsibilities
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            Our writers are expected to meet the following responsibilities to ensure quality and customer satisfaction:
            Since our writers' performance directly impacts our reputation and repeat customers, we expect timely delivery of plagiarism-free papers.
          </p>

          <div className="space-y-4 md:space-y-5">
            {["Carefully adhere to paper requirements, customer’s instructions, guidelines.",
              "Follow the correct sentence, paragraph, and overall paper structure.",
              "Develop a smooth flow of thoughts, achieving coherence in ideas."]
            .map((item, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
                <p className="text-base md:text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image Section (Swapped) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/vecteezy_inspiration-writer-writing-creative-recreation-for_18973930.jpg"
            alt="Writer Responsibilities Illustration"
            className="w-[350px] sm:w-[400px] md:w-[650px] h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
