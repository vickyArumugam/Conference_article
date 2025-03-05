import React, { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

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
    const file = event.target.files[0];
  
    if (file) {
      const allowedExtensions = ["pdf", "docx", "pptx"]; // Include PPTX
      const fileExtension = file.name.split(".").pop().toLowerCase();
  
      if (!allowedExtensions.includes(fileExtension)) {
        alert("Invalid file type! Please select a PDF, DOCX, or PPTX file.");
        event.target.value = ""; // Reset file input
        setFileName(null);
        setSelectedFile(null);
        return;
      }
  
      if (file.size > 3 * 1024 * 1024) { // Corrected to check 5MB
        alert("File size exceeds 5MB. Please upload a smaller file.");
        event.target.value = ""; // Reset file input
        setFileName(null);
        setSelectedFile(null);
        return;
      }
  
      // If both checks pass, set file state
      setSelectedFile(file);
      setFileName(file.name);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("paper_title", paperTitle);
    formData.append("author_name", authorName);
    formData.append("mobile_no", mobileNo);
    formData.append("email", email);
    formData.append("institution", institution);
    formData.append("category", category);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const response = await fetch("http://localhost/mailapp/mail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");

        // Reset form fields
        setPaperTitle("");
        setAuthorName("");
        setMobileNo("");
        setEmail("");
        setInstitution("");
        setCategory("Academicians");
        setSelectedFile(null);
        setFileName(null);

        // Clear file input field
        document.getElementById("fileInput").value = "";
      } else {
        setSuccessMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-gray-100 p-4 md:p-8">
      <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Submit Your Paper
            </h1>
            <p className="text-xl text-gray-600">
              Follow these guidelines to submit your research paper
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Submission Guidelines
              </h2>
              <ul className="space-y-4">
                {[
                  "Papers must be written in English",
                  "Maximum length: 8 pages including figures and references",
                  "Use the IEEE conference format",
                  "Submit in PDF, Docx, PPTX format",
                  "Include abstract (max 250 words)",
                  "Blind all author information for review",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Important Notes
              </h2>
              <ul className="space-y-4">
                {[
                  "All papers undergo a double-blind peer review process",
                  "At least one author must register for the conference",
                  "Plagiarism checks will be performed",
                  "Multiple submissions are not allowed",
                  "Authors must present accepted papers at the conference",
                  "Papers will be published in the conference proceedings",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <form
            className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg md:max-w-2xl w-full space-y-6 my-10 md:my-20 lg:ml-36"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-600">
              Submit Your Paper
            </h2>

            <div>
              <label className="block font-medium">
                Enter Paper Title<span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="text"
                required
                value={paperTitle}
                onChange={(e) => setPaperTitle(e.target.value)}
                className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">
                Enter First Author Full Name
                {/* <span className="text-red-500 text-xl">*</span> */}
              </label>
              <input
                type="text"
                required
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium">
                Enter First Author Mobile Number
                <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="text"
                required
                value={mobileNo}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only numbers and special characters (+, -, (), and space)
                  if (/^[0-9+()\-*? ]*$/.test(value)) {
                    setMobileNo(value);
                  }
                }}
                className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">
                Enter First Author Email Address
                <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">
                Enter First Author Institution Name
                {/* <span className="text-red-500 text-xl">*</span> */}
              </label>
              <input
                type="text"
                required
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">
                Select First Author Category
                <span className="text-red-500 text-xl">*</span>
              </label>
              <select
                className="appearance-none mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Academicians">Academicians</option>
                <option value="Students & PG/Ph.D Scholar">
                  Students & PG/Ph.D Scholar
                </option>
                <option value="Industry Delegates">Industry Delegates</option>
                <option value="Overseas Delegates">Overseas Delegates</option>
              </select>
            </div>

            {/* File Upload */}
            <div>
              <label className="block font-medium">
                Upload Paper <span className="text-red-500 text-xl">*</span>
              </label>
              <div className="flex items-center mt-1 min-w-0">
                {/* File Name Container (Shorter on Mobile, Longer on Larger Screens) */}
                <div className="flex-grow max-w-[150px] sm:max-w-[500px] px-4 py-2 border border-gray-300 rounded-lg text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">
                  {fileName
                    ? fileName.length > 20
                      ? fileName.substring(0, 17) + "..."
                      : fileName
                    : "No file chosen"}
                </div>

                {/* Hidden File Input */}
                <input
                  type="file"
                  required
                  className="hidden"
                  id="fileInput"
                  onChange={handleFileChange}
                />

                {/* Choose File Button */}
                <label
                  htmlFor="fileInput"
                  className="ml-4 px-4 py-2 rounded-lg cursor-pointer bg-amber-200 flex-shrink-0"
                >
                  Choose File
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg transition cursor-pointer duration-200 bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit Paper
            </button>

            {/* Success Message */}
            {successMessage && (
              <p className="text-center text-green-600 font-medium mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmissionForm;
