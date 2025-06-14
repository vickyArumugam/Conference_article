import React, { useState, useEffect } from "react";
import { Search, Filter, BookOpen } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import journals from "../../Data/findjournalDetails";

const FindJournal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page");
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["all", ...new Set(journals.map((journal) => journal.category))];

  const filteredJournals = journals
    .filter(
      (journal) =>
        (categoryFilter === "all" || journal.category === categoryFilter) &&
        (journal.name.toLowerCase().includes(search.toLowerCase()) ||
          journal.category.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  const totalPages = Math.ceil(filteredJournals.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJournals = filteredJournals.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page) => setCurrentPage(page);

  const handleJournalClick = (journalId) => {
    navigate(`/journal/${journalId}?page=${currentPage}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Academic Journals Directory</h1>
          <p className="mt-3 text-lg text-gray-600">Find and compare academic journals for your research publication</p>
        </div>

        {/* Journal List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentJournals.length > 0 ? (
            currentJournals.map((journal) => (
              <div
                key={journal.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => handleJournalClick(journal.id)}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={journal.coverImage}
                    alt={journal.name}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-semibold text-gray-900 mb-2 text-center cursor-pointer hover:text-blue-600"
                  >
                    {journal.name}
                  </h3>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleJournalClick(journal.id);
                    }}
                    className="mt-auto w-full px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    View Journal
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No journals found matching your search criteria.</p>
            </div>
          )}
        </div>
        {totalPages > 1 && (
           <div className="flex justify-center mt-10 space-x-2">
             <button
               onClick={goToPrevPage}
               disabled={currentPage === 1}
               className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md disabled:opacity-50 "
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
