import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DetailsForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const project = state?.project;

  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha API / backend connect kar sakte ho
    alert("Form submitted successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      
      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-white text-gray-700 font-semibold shadow-sm hover:bg-indigo-50 hover:text-indigo-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Side Info */}
          <div className="bg-indigo-600 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-3">
              Get in Touch
            </h2>

            {project && (
              <p className="text-indigo-200 mb-4 text-sm">
                Regarding: <span className="font-semibold">{project.title}</span>
              </p>
            )}

            <p className="text-indigo-100 mb-6">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-3 text-sm">
              <p>📍 Address: Mumbai, India</p>
              <p>📞 Phone: +91 98765 43210</p>
              <p>✉ Email: support@company.com</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Form
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Subject
                </label>
                <select
                  defaultValue={project?.title || ""}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>E-commerce</option>
                  <option>Custom Project</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 active:scale-95"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
