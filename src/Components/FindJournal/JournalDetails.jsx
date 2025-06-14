import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Award,
  BarChart,
  Users,
  FileText,
  Mail,
  Globe,
  Building,
  CalendarDays,
} from "lucide-react";
import journals from "../../Data/findjournalDetails";

const JournalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = journals.find((j) => j.id === parseInt(id || ""));

  if (!journal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center cursor-pointer">
          <h2 className="text-2xl font-bold text-gray-900">
            Journal not found
          </h2>
          <button
            onClick={() => navigate(`/Journal${location.search}`)}
            className=" mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 "
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Journals
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "guidelines", label: "Author Guidelines", icon: FileText },
    { id: "editorial", label: "Editorial Board", icon: Users },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  // Render unique content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            {/* Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-blue-600" />
                <p className="text-sm text-gray-600">Acceptance Rate</p>
                <p className="font-semibold text-gray-900">
                  {journal.acceptanceRate}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <Clock className="h-6 w-6 text-blue-600" />
                <p className="text-sm text-gray-600">Time to First Decision</p>
                <p className="font-semibold text-gray-900">
                  {journal.timeToFirstDecision}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <BarChart className="h-6 w-6 text-blue-600" />
                <p className="text-sm text-gray-600">Impact Factor</p>
                <p className="font-semibold text-gray-900">
                  {journal.impactFactor}
                </p>
              </div>
            </div>

            {/* About the Journal Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">About the Journal</h3>
              <p className="text-gray-600 leading-relaxed">
                {journal.name} is a leading peer-reviewed journal in the field
                of {journal.category}. We publish groundbreaking research,
                comprehensive reviews, and cutting-edge methodologies that
                advance the understanding of {journal.category.toLowerCase()}.
              </p>
            </div>
          </div>
        );

      case "guidelines":
        return (
          <div className="space-y-8">
            {/* Author Guidelines Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Author Guidelines</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Manuscript Preparation
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Manuscripts should be written in clear, concise English.
                    </li>
                    <li>Maximum length: 8,000 words including references.</li>
                    <li>Abstract should not exceed 250 words.</li>
                    <li>Use APA style for citations and references.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Submission Requirements
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Cover letter explaining the significance of your work.
                    </li>
                    <li>Manuscript file in Word or LaTeX format.</li>
                    <li>Figures in high resolution (300 dpi minimum).</li>
                    <li>Completed author disclosure form.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "editorial":
        return (
          <div className="space-y-8">
            {/* Editorial Board Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Editorial Board</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-gray-900">Editor-in-Chief</h4>
                  <p className="text-gray-600">Prof. Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Stanford University</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-gray-900">Managing Editor</h4>
                  <p className="text-gray-600">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-500">MIT</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-8">
            {/* Contact Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Editorial Office
                  </h4>
                  <p className="text-gray-600">
                    Email: editorial@
                    {journal.name.toLowerCase().replace(/\s+/g, "")}.com
                  </p>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Technical Support
                  </h4>
                  <p className="text-gray-600">
                    Email: support@
                    {journal.name.toLowerCase().replace(/\s+/g, "")}.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <button
          onClick={() => navigate(`/Journal${location.search}`)}
          className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-700 cursor-pointer"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {journal.name}
            </h1>
            <p className="text-gray-600 mb-6">{journal.description}</p>
            <nav className="border-b border-gray-200 mb-6 flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center pb-4 px-1 border-b-2 font-medium text-sm cursor-pointer
                    ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                >
                  <tab.icon className="h-5 w-5 mr-2 " />
                  {tab.label}
                </button>
              ))}
            </nav>
            {renderTabContent()}
            <div className="mt-8 flex justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
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
