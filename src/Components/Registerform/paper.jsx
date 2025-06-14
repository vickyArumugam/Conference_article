import React, { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, Check } from "lucide-react";

const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
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
  const [category, setCategory] = useState("Academicians");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
  const [submissionMessage, setSubmissionMessage] = useState("");

  const allowedFileTypes = ['pdf', 'docx', 'pptx'];

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (allowedFileTypes.includes(fileExtension)) {
        setSelectedFile(file);
        setFileName(file.name);
      } else {
        alert("Invalid file type. Please upload a PDF, DOCX, or PPTX file.");
        event.target.value = ""; // Reset file input
      }
    }
  };

  const resetForm = () => {
    setFileName(null);
    setSelectedFile(null);
    setPaperTitle("");
    setAuthorName("");
    setMobileNo("");
    setEmail("");
    setCategory("Academicians");
    const fileInput = document.getElementById("fileInput");
    if (fileInput) fileInput.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("paperTitle", paperTitle);
    formData.append("authorName", authorName);
    formData.append("mobileNo", mobileNo);
    formData.append("email", email);
    formData.append("category", category);

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("https://articlespublication.com/mail.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setSubmissionStatus("success");
        setSubmissionMessage("Article submitted successfully to Articles Publication!");
        resetForm();
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(data.message || `Submission failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
      setSubmissionMessage("An error occurred during submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const guidelines = [
    "Article must be written in English",
    "Maximum length: 8 pages including figures and references",
    "Use the IEEE conference format",
    "Submit in PDF, Docx, PPTX format",
    "Include abstract (max 250 words)",
    "Blind all author information for review",
  ];

  const notes = [
    "All Article undergo a double-blind peer review process",
    "At least one author must register for the conference",
    "Plagiarism checks will be performed",
    "Multiple submissions are not allowed",
    "Authors must present accepted Article at the publication",
    "Article will be published in the conference proceedings",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="order-2 lg:order-1">
          <form
            className="bg-white shadow-xl rounded-2xl p-8 space-y-10 backdrop-blur-lg backdrop-filter"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Submit Your Article
            </h2>

            {/* Submission Status Message */}
            {submissionStatus && (
              <div className={`p-4 rounded-lg ${submissionStatus === "success" 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"}`}>
                <div className="flex items-center">
                  {submissionStatus === "success" ? (
                    <Check className="w-5 h-5 mr-2 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                  )}
                  <span>{submissionMessage}</span>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <FormInput
                label="Article Title"
                name="paperTitle"
                value={paperTitle}
                onChange={(e) => setPaperTitle(e.target.value)}
                placeholder="Enter your Article title"
                required={true}
              />

              <FormInput
                label="Author Name"
                name="authorName"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Enter first author name"
                required={true}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Mobile Number"
                  type="text"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,10}$/.test(value)) {
                      setMobileNo(value);
                    }
                  }}
                  placeholder="Enter mobile number"
                  maxLength={10}
                  required={true}
                />

                <FormInput
                  label="Email Address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required={true}
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required={true}
                >
                  <option value="">Select a category</option>
                  <option value="Academicians">Academicians</option>
                  <option value="Students & PG/Ph.D Scholar">
                    Students & PG/Ph.D Scholar
                  </option>
                  <option value="Industry Delegates">Industry Delegates</option>
                  <option value="Overseas Delegates">Overseas Delegates</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700">
                  Upload Paper
                </label>
                <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-8 bg-gray-50">
                  <span className="text-gray-700 truncate max-w-[200px]">
                    {fileName || "No file chosen"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    id="fileInput"
                    accept=".pdf,.docx,.pptx"
                    onChange={handleFileChange}
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
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Paper"
              )}
            </button>
          </form>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-lg backdrop-filter">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Submission Guidelines
            </h2>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <GuidelineItem key={index} text={guideline} />
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-lg backdrop-filter">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Important Notes
            </h2>
            <ul className="space-y-6 mb-1">
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