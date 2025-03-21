import { CheckCircle } from "lucide-react";

export default function WritersResponsibilities() {
  return (
    <section className="bg-white py-12 px-9 md:py-16 md:px-12 lg:py-22 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ">
        {/* Left: Content Section */}
        <div className="space-y-6 lg:space-y-8 md:order-1 md:w-[80%]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            Writer’s Responsibilities
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            Our writers are expected to meet the following responsibilities to ensure quality and customer satisfaction:
            Since our writers' performance directly impacts our reputation and repeat customers, we expect timely delivery of plagiarism-free papers.
          </p>

          <div className="space-y-4 md:space-y-5">
            {[
              "Carefully adhere to paper requirements, customer’s instructions, guidelines.",
              "Follow the correct sentence, paragraph, and overall paper structure.",
              "Develop a smooth flow of thoughts, achieving coherence in ideas.",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-4">
                <CheckCircle className="text-blue-600 w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <p className="text-base md:text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="flex justify-center mt-8 md:mt-0 md:order-2 md:w-[80%]">
          <img
            src="/images/vecteezy_inspiration-writer-writing-creative-recreation-for_18973930.jpg"
            alt="Writer Responsibilities Illustration"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}