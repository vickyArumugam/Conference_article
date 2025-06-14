import React, { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    mobile: "",
    message: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.institution.trim())
      newErrors.institution = "Institution / Organization is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please fill all required fields correctly");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch(
        "https://articlespublication.com/contactmail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success) {
        setSubmissionStatus("success");
        setSubmissionMessage("Your message has been sent successfully to Articles Publication!");
        setFormData({
          name: "",
          email: "",
          institution: "",
          mobile: "",
          message: "",
          location: "",
        });
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
      setSubmissionMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form or find our contact
          details below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300 w-full">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
              Send Us a Message
            </h2>

            {/* Submission Status Message */}
            {submissionStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submissionStatus === "success" 
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  maxLength="10"
                  className={`w-full px-4 py-3 border rounded-lg ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your mobile"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              {["institution", "location", "message"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {field === "institution"
                      ? "Institution / Organization"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      rows={5}
                      required
                      className={`w-full px-4 py-3 border rounded-lg ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={`Enter your ${field}`}
                    />
                  ) : (
                    <input
                      id={field}
                      name={field}
                      type="text"
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder={`Enter your ${field}`}
                    />
                  )}
                  {errors[field] && (
                    <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all disabled:bg-blue-400"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md w-[100%] max-w-2xl flex flex-col justify-between items-center h-full">
            <h2 className="text-2xl font-bold text-gray-800 my-4 text-center">
              Contact Information
            </h2>

            <div className="flex flex-col items-start space-y-4 text-left w-full">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600 text-3xl" />
                <p className="text-gray-700">+91 8072733287</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-600 text-3xl" />
                <p className="text-gray-700">Chennai</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 text-3xl" />
                <p className="text-gray-700">thearticlespublication@gmail.com</p>
              </div>
            </div>

            <div className="w-full flex flex-col flex-1 justify-between">
              <h2 className="text-xl font-semibold my-4 text-center"></h2>
              <iframe
                title="Conference Venue"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.79476706282!2d80.04386385016383!3d13.047807806714815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1746541413344!5m2!1sen!2sin"
                width="100%"
                height="220"
                allowFullScreen=""
                loading="lazy"
                className="rounded-md shadow-md flex-1"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;