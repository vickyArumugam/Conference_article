import React, { useState } from "react";
import { Search, FileText, Filter } from "lucide-react";

const journals = [
  { id: 1, name: "International Journal of AI Research", category: "Artificial Intelligence", impactFactor: "5.2" },
  { id: 2, name: "Journal of Data Science & Analytics", category: "Data Science", impactFactor: "4.8" },
  { id: 3, name: "Advances in Medical Research", category: "Medicine", impactFactor: "6.1" },
  { id: 4, name: "Journal of Environmental Studies", category: "Environmental Science", impactFactor: "4.5" },
  { id: 5, name: "Global Economics Review", category: "Economics", impactFactor: "3.9" },
];

const FindJournal = () => {
  const [search, setSearch] = useState("");

  const filteredJournals = journals.filter((journal) =>
    journal.name.toLowerCase().includes(search.toLowerCase()) ||
    journal.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Find the Right Journal</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 mt-4">
            Discover journals suitable for your research paper and publication needs.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-3 text-gray-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by journal name or category..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Journals List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJournals.length > 0 ? (
            filteredJournals.map((journal) => (
              <div key={journal.id} className="bg-white p-6 shadow-md rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{journal.name}</h3>
                </div>
                <p className="text-gray-600">
                  <strong>Category:</strong> {journal.category}
                </p>
                <p className="text-gray-600">
                  <strong>Impact Factor:</strong> {journal.impactFactor}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Journal
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No journals found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindJournal;
