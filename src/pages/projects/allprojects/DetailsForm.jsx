import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "react-toastify";
import contact from "../../../assets/contact.png"

const DetailsForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const project = state?.project;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success("Form submitted successfully! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 4000,
    });
    
    setTimeout(() => {
      e.target.reset();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-gray-700 font-semibold shadow-sm hover:shadow-md hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left Side Info - With Image */}
          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-3 leading-tight">
                  Get in Touch
                </h2>
                <div className="w-20 h-1.5 bg-white rounded-full"></div>
              </div>

              {/* Image Section */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={contact}
                  alt="Contact Us"
                  className="w-full h-60 object-cover"
                />
              </div>

              {project && (
                <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-indigo-100 text-sm mb-1">Regarding:</p>
                  <p className="font-semibold text-lg">{project.title}</p>
                </div>
              )}

              <p className="text-indigo-50 mb-8 text-lg leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-indigo-100 text-sm">Mumbai, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-indigo-100 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-indigo-100 text-sm">support@company.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Working Hours</p>
                    <p className="text-indigo-100 text-sm">Mon - Fri: 10AM - 7PM</p>
                    <p className="text-indigo-100 text-sm">Sat: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form - Enhanced */}
          <div className="lg:col-span-3 p-10">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-500 mb-8">
                We'd love to hear from you. Fill out the form below.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    defaultValue={project?.title || ""}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all duration-300 bg-white cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option>Website Development</option>
                    <option>Mobile App Development</option>
                    <option>E-commerce</option>
                    <option>Custom Project</option>
                    <option>Support & Maintenance</option>
                    <option>Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none resize-none transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm text-indigo-700 text-center">
                  🔒 Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;