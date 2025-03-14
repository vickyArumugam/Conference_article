import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Award, BarChart } from 'lucide-react';
import journals from '../../Data/findjournalDetails';

const JournalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const journal = journals.find(j => j.id === parseInt(id || ''));

  if (!journal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Journal not found</h2>
          <button
            onClick={() => navigate('/Journal')}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Journals
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/Journal')}
          className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Journals
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 relative">
            <img 
              src={journal.coverImage} 
              alt={journal.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{journal.name}</h1>
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full inline-block mb-6">
              {journal.category}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Acceptance Rate</p>
                  <p className="font-semibold text-gray-900">{journal.acceptanceRate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Time to First Decision</p>
                  <p className="font-semibold text-gray-900">{journal.timeToFirstDecision}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <BarChart className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Impact Factor</p>
                  <p className="font-semibold text-gray-900">{journal.impactFactor}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <BookOpen className="h-5 w-5 mr-2" />
                Submit Manuscript
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetails;
