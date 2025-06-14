export default function CurrentProjects() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 md:flex-row md:space-x-14 gap-20">
      {/* Left: Image Section */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800">
          Current Paper or Article Submissions
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Average submission fee:{" "}
          <span className="text-blue-500 font-semibold">$167.84</span>
        </p>
        <p className="text-gray-600 text-lg">
          Currently available submissions:{" "}
          <span className="text-blue-500 font-semibold">14</span>
        </p>

        {/* View Submissions Link */}
        <a
          href="#"
          className="text-amber-400 font-semibold mt-4 inline-block text-xl hover:underline"
        >
          View all submissions →
        </a>

        {/* Related Content */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Explore Our Article Categories
          </h3>
          <ul className="mt-4 text-lg text-gray-600 space-y-2">
            <li>Research Papers</li>
            <li>Literature Reviews</li>
            <li>Case Studies</li>
            <li>Scientific Articles</li>
            <li>Industry Reports</li>
          </ul>
          <a
            href="#"
            className="text-amber-400 font-semibold mt-4 inline-block text-xl hover:underline"
          >
            Learn more about these categories →
          </a>
        </div>
      </div>

      {/* Right: Submission Details */}
      <div className="max-w-xl md:w-[500px]">
        <img
          src="/images/vecteezy_woman-sitting-at-a-table-with-a-laptop-working-on-her_47790955.jpg"
          alt="Paper or Article Submission"
          className="w-full h-auto "
        />
      </div>
    </div>
  );
}
