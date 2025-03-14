import React, { useState } from "react";
import { Search, Filter, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import journals from "../../Data/findjournalDetails";

const FindJournal = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Changed from 4 to 6

  // Get unique categories
  const categories = [
    "all",
    ...new Set(journals.map((journal) => journal.category)),
  ];

  // Filter and sort journals
  const filteredJournals = journals
    .filter(
      (journal) =>
        (categoryFilter === "all" || journal.category === categoryFilter) &&
        (journal.name.toLowerCase().includes(search.toLowerCase()) ||
          journal.category.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  // Pagination logic
  const totalPages = Math.ceil(filteredJournals.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJournals = filteredJournals.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Page navigation handlers
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Academic Journals Directory
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Find and compare academic journals for your research publication
          </p>
        </div>
        {/* Search & Filter Controls */}
        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search journals..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md 
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 hover:border-blue-500 hover:ring-blue-500 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="md:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                   hover:border-blue-500 hover:ring-blue-500 hover:bg-blue-50 transition-all"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
              </select>
            </div>
          </div>

          {/* Category Filter Dropdown */}
          <div className="md:w-48">
            <select
              className="w-full px-4 py-2 border border-gray-200 rounded-md 
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 hover:border-blue-500 hover:ring-blue-500 hover:bg-blue-50 transition-all"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Journal List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentJournals.length > 0 ? (
            currentJournals.map((journal) => (
              <div
                key={journal.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div
                  key={journal.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={journal.coverImage}
                      alt={journal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                      {journal.name}
                    </h3>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-grow"></div>

                    <button
                      onClick={() => navigate(`/journal/${journal.id}`)}
                      className="mt-auto w-full px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center"
                    >
                      <BookOpen className="h-5 w-5 mr-2" />
                      View Journal
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">
                No journals found matching your search criteria.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 border rounded-md ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 text-blue-500"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindJournal;

{
  /* Next Page Preview */
}
{
  /* {nextJournals.length > 0 && (
          <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Next Page Preview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nextJournals.map((journal) => (
                <div key={journal.id} className="bg-white rounded-lg shadow-md p-4">
                  <h4 className="text-lg font-medium text-gray-900">{journal.name}</h4>
                  <p className="text-sm text-gray-600">Category: {journal.category}</p>
                </div>
              ))}
            </div>
          </div>
        )} */
}
