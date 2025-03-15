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
      const allowedExtensions = ["pdf", "docx", "pptx"];
      const fileExtension = file.name.split(".").pop().toLowerCase();

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
  
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 p-4 md:p-8 ">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {/* Left Side - Guidelines & Notes */}
        {/* <form className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="text-2xl font-semibold text-center text-blue-600">Submit Your Paper</h2>

          <input type="text" placeholder="Enter Paper Title" required value={paperTitle} onChange={(e) => setPaperTitle(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Enter First Author Name" required value={authorName} onChange={(e) => setAuthorName(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Enter Mobile Number" required value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Enter Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Enter Institution Name" required value={institution} onChange={(e) => setInstitution(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          
          <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Academicians">Academicians</option>
            <option value="Students & PG/Ph.D Scholar">Students & PG/Ph.D Scholar</option>
            <option value="Industry Delegates">Industry Delegates</option>
            <option value="Overseas Delegates">Overseas Delegates</option>
          </select>
          
          <div className="flex items-center">
            <div className="flex-grow px-4 py-2 border rounded-lg text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">
              {fileName || "No file chosen"}
            </div>
            <input type="file" required className="hidden" id="fileInput" onChange={handleFileChange} />
            <label htmlFor="fileInput" className="ml-4 px-4 py-2 rounded-lg cursor-pointer bg-amber-200">Choose File</label>
          </div>

          <button type="submit" className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Submit Paper</button>
          {successMessage && <p className="text-center text-green-600 font-medium mt-4">{successMessage}</p>}
        </form> */}
              <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
        <h2 className="text-3xl font-bold text-center text-blue-700">Submit Your Paper</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Paper Title"
            required
            value={paperTitle}
            onChange={(e) => setPaperTitle(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Enter First Author Name"
            required
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Enter Mobile Number"
            required
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="Enter Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Enter Institution Name"
            required
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Academicians">Academicians</option>
            <option value="Students & PG/Ph.D Scholar">Students & PG/Ph.D Scholar</option>
            <option value="Industry Delegates">Industry Delegates</option>
            <option value="Overseas Delegates">Overseas Delegates</option>
          </select>

          {/* File Upload */}
          <div className="flex items-center justify-between border rounded-xl px-4 py-3 bg-gray-100">
            <span className="text-gray-700 truncate">{fileName || "No file chosen"}</span>
            <input type="file" className="hidden" id="fileInput" onChange={handleFileChange} />
            <label htmlFor="fileInput" className="px-4 py-2 rounded-lg cursor-pointer bg-blue-500 text-white font-semibold">
              Choose File
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all"
          >
            Submit Paper
          </button>

          {successMessage && <p className="text-center text-green-600 font-medium mt-4">{successMessage}</p>}
        </div>
      </form>
       

        {/* Right Side - Form */}

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Guidelines</h2>
            <ul className="space-y-3">
              {["Papers must be written in English", "Maximum length: 8 pages including figures and references", "Use the IEEE conference format", "Submit in PDF, Docx, PPTX format", "Include abstract (max 250 words)", "Blind all author information for review"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h2>
            <ul className="space-y-3">
              {["All papers undergo a double-blind peer review process", "At least one author must register for the conference", "Plagiarism checks will be performed", "Multiple submissions are not allowed", "Authors must present accepted papers at the conference", "Papers will be published in the conference proceedings"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default PaperSubmissionForm;
