import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function EarlyCiteSection() {
  const features = ["Typeset", "Proofed", "Records", "Download"];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto rounded-2xl ">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          EarlyCite & Accepted Articles
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 mb-10"></div>

        {/* Description */}
        <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          If your article is accepted, we ensure its early availability on{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline ">
            Emerald Insight
          </a>
          , allowing immediate citations and downloads. If you receive the good
          news that your article has been accepted, we always make sure it is
          available on Emerald Insight well ahead of the publication date of the
          volume and issue it appears in. This ensures your work can start
          gathering citations and downloads as soon as possible.
        </p>

        {/* Features Section */}
        <div className="p-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 my-4 text-center md:mb-10">
            Your article will be
          </h3>
          <ul className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 md:space-x-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 mb-4 sm:mb-3 md:mb-8"
              >
                <li className="flex items-center text-gray-800 text-lg gap-2 ">
                  <CheckCircleIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="leading-none">{item}</span>
                </li>
                {index !== features.length - 1 && (
                  <span className="text-gray-600 text-5xl font-bold mb-2 md:mb-0 hidden lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </ul>
        </div>


        {/* Additional Info */}
        <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify md:mt-0">
          EarlyCite articles are published as standalone articles and then later
          collated into issues in advance of print publication. At this point,
          the articles move to the table of contents for the compiled issue and
          are assigned pagination information. The DOI provides a persistent
          identifier throughout.
        </p>
      </div>
    </section>
  );
}
