"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Form errors state
  const [errors, setErrors] = useState({});
  
  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  // Map loading state
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Handle input changes
  const handleChange =  () => {
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

 

  // Handle form submission
  const handleSubmit = async () => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            {submitStatus.type && (
              <div className={`p-4 mb-6 rounded-md ${submitStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject", "message"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium mb-1 capitalize">
                    {field}
                  </label>
                  {field === "message" ? (
                    <textarea id={field} name={field} value={formData[field]} onChange={handleChange} rows={5} className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${errors[field] ? "border-red-500" : "border-gray-300"}`} placeholder={`Enter your ${field}`} />
                  ) : (
                    <input id={field} name={field} type={field === "email" ? "email" : "text"} value={formData[field]} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${errors[field] ? "border-red-500" : "border-gray-300"}`} placeholder={`Enter your ${field}`} />
                  )}
                  {errors[field] && <p className="mt-1 text-sm text-red-600">{errors[field]}</p>}
                </div>
              ))}
              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center py-2 px-4 border rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50">
                {isSubmitting ? "Processing..." : (<><Send className="ml-2 h-4 w-4" /> Send Message</>)}
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Visit our office</h2>
            <div className="space-y-4 mb-6">
              {[{ icon: MapPin, label: "Address", value: "123 Business Avenue, NY" }, { icon: Clock, label: "Hours", value: "Mon-Fri: 9am - 6pm" }, { icon: Phone, label: "Phone", value: "(123) 456-7890" }, { icon: Mail, label: "Email", value: "contact@yourcompany.com" }].map((info, idx) => (
                <div key={idx} className="flex items-start">
                  <info.icon className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">{info.label}:</p>
                    <p className="text-gray-500">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-[300px] rounded-lg overflow-hidden border border-gray-300 relative">
              {!isMapLoaded && <div className="absolute inset-0 flex items-center justify-center bg-gray-100">Loading map...</div>}
              <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" className={`${isMapLoaded ? "opacity-100" : "opacity-0"} transition-opacity`} onLoad={() => setIsMapLoaded(true)}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
