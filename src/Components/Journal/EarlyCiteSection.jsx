import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function EarlyCiteSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto  rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900">
          EarlyCite & Accepted Articles
        </h2>
        <div className="w-12 h-1 bg-blue-600 ml-32  mt-4 mb-10"></div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed">
          If your article is accepted, we ensure its early availability on{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Emerald Insight
          </a>
          , allowing immediate citations and downloads.If you receive the good
          news that your article has been accepted, we always make sure it is
          available on Emerald Insight well ahead of the publication date of the
          volume and issue it appears in. This ensures your work can start
          gathering citations and downloads as soon as possible.
        </p>

        {/* Features Section */}
        <div className="  p-6 ">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Your article will be:
          </h3>
          <ul className="space-y-3">
            {[
              "Typeset",
              "Proofed",
              "Published online as a Version of Record",
              "Available for citing and downloading",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-gray-800"
              >
                <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info */}
        <p className="mt-6 text-gray-700">
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
