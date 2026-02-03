import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full bg-[#f9fcff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Let’s Do Great Work Together
          </h2>
          <p className="text-gray-500 mt-2">
            Get in touch with our SEO experts today
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT INFO CARD */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Delhi <span className="text-xs border px-2 py-1 rounded-full ml-2 text-blue-600 border-blue-300">Corporate Office</span>
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  A-24/8, 1st Floor, Rathi Tower, NH-19, Mohan Cooperative Industrial Estate, New Delhi, 110044
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-sm text-gray-500">enquiry@techmagnate.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Sales Enquiry</h4>
                <p className="text-sm text-gray-500">+91-9910308266</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Briefcase className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">HR</h4>
                <p className="text-sm text-gray-500">jobs@techmagnate.com</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition">
                Get Direction <ArrowRight size={16} />
              </button>
              <button className="text-blue-600 text-sm hover:underline">
                View All →
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Info*
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="input"
                />
                <input
                  type="email"
                  placeholder="Email Id *"
                  className="input"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Mobile No *"
                  className="input"
                />
                <select className="input">
                  <option>Choose Services</option>
                  <option>SEO</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                </select>
              </div>

              <textarea
                rows="4"
                placeholder="Type Your Message"
                className="input resize-none"
              ></textarea>

              <div className="flex items-start gap-2 text-sm text-gray-500">
                <input type="checkbox" className="mt-1" />
                <p>
                  By registering here, I agree to Techmagnate’s{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
                Submit Now <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Input */}
      <style>
        {`
          .input {
            width: 100%;
            border: 1px solid #dbeafe;
            padding: 12px 14px;
            border-radius: 8px;
            outline: none;
          }
          .input:focus {
            border-color: #3b82f6;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
