import { useNavigate } from "react-router-dom";

const JournalFindBooks = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredJournals.map((journal) => (
        <div key={journal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          
          <img src={journal.coverImage} alt={journal.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{journal.name}</h3>
            <button
              className="w-full mt-4 px-4 py-2 text-white bg-teal-600 rounded-md"
              onClick={() => navigate(`/journal/${journal.id}`)}
            >
              View Journal
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalFindBooks;