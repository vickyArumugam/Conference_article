import React, { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

const FormInput = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
    />
  </div>
);

const GuidelineItem = ({ text }) => (
  <li className="flex items-start group">
    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 group-hover:scale-110 transition-transform" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const NoteItem = ({ text }) => (
  <li className="flex items-start group">
    <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const PaperSubmissionForm = () => {
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [paperTitle, setPaperTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [category, setCategory] = useState("Academicians");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedExtensions = ["pdf", "docx", "pptx"];
      const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";

      if (!allowedExtensions.includes(fileExtension)) {
        alert("Invalid file type! Please select a PDF, DOCX, or PPTX file.");
        event.target.value = "";
        setFileName(null);
        setSelectedFile(null);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB. Please upload a smaller file.");
        event.target.value = "";
        setFileName(null);
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("paperTitle", paperTitle);
    formData.append("authorName", authorName);
    formData.append("mobileNo", mobileNo);
    formData.append("email", email);
    formData.append("institution", institution);
    formData.append("category", category);
  
    try {
      const response = await fetch("http://localhost:5000/submit-paper", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      
      if (data.success) {
        setSuccessMessage("Paper submitted successfully!");
        setFileName(null);
        setSelectedFile(null);
        setPaperTitle("");
        setAuthorName("");
        setMobileNo("");
        setEmail("");
        setInstitution("");
        setCategory("Academicians");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit paper. Try again.");
    }
  };

  const guidelines = [
    "Papers must be written in English",
    "Maximum length: 8 pages including figures and references",
    "Use the IEEE conference format",
    "Submit in PDF, Docx, PPTX format",
    "Include abstract (max 250 words)",
    "Blind all author information for review"
  ];

  const notes = [
    "All papers undergo a double-blind peer review process",
    "At least one author must register for the conference",
    "Plagiarism checks will be performed",
    "Multiple submissions are not allowed",
    "Authors must present accepted papers at the conference",
    "Papers will be published in the conference proceedings"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="order-2 lg:order-1">
          <form 
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6 backdrop-blur-lg backdrop-filter"
            onSubmit={handleSubmit} 
            encType="multipart/form-data"
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Submit Your Paper
            </h2>

            <div className="space-y-4">
              <FormInput
                label="Paper Title"
                value={paperTitle}
                onChange={(e) => setPaperTitle(e.target.value)}
                placeholder="Enter your paper title"
              />

              <FormInput
                label="Author Name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Enter first author name"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Mobile Number"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  placeholder="Enter mobile number"
                />

                <FormInput
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                />
              </div>

              <FormInput
                label="Institution"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="Enter institution name"
              />

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Academicians">Academicians</option>
                  <option value="Students & PG/Ph.D Scholar">Students & PG/Ph.D Scholar</option>
                  <option value="Industry Delegates">Industry Delegates</option>
                  <option value="Overseas Delegates">Overseas Delegates</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Upload Paper</label>
                <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                  <span className="text-gray-700 truncate max-w-[200px]">
                    {fileName || "No file chosen"}
                  </span>
                  <input 
                    type="file" 
                    className="hidden" 
                    id="fileInput" 
                    onChange={handleFileChange}
                    required 
                  />
                  <label
                    htmlFor="fileInput"
                    className="px-4 py-2 rounded-lg cursor-pointer bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Submit Paper
            </button>

            {successMessage && (
              <div className="flex items-center justify-center space-x-2 text-green-600 font-medium bg-green-50 p-4 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                <p>{successMessage}</p>
              </div>
            )}
          </form>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-lg backdrop-filter">
            <h2 className="text-2xl font-bold  mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Submission Guidelines
            </h2>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <GuidelineItem key={index} text={guideline} />
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-lg backdrop-filter">
            <h2 className="text-2xl font-bold  mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Important Notes
            </h2>
            <ul className="space-y-5 mb-1">
              {notes.map((note, index) => (
                <NoteItem key={index} text={note} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmissionForm;