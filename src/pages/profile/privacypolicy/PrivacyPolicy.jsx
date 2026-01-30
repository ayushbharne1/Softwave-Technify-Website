import React from "react";
import { ArrowLeft } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const PrivacyPolicy = () => {
  /* ✅ SAFE CONTEXT (error-proof) */
  const outletContext = useOutletContext() || {};
  const openSidebar = outletContext.openSidebar;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <div className="px-4 py-3 flex items-center gap-3 mt-10 sticky top-0 bg-gray-50 z-10">
        
        {/* Arrow → only small devices */}
        <button
          onClick={() => openSidebar && openSidebar()}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 active:scale-95"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-xl font-bold text-gray-800">
          Privacy Policy
        </h1>
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 md:p-8 space-y-6">
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h2>

          <p className="text-gray-700 text-sm md:text-base">
            M/S SoftWave Technify PRIVATE LIMITED (SoftWave Technify) <br />
            TERMS & CONDITIONS cum USER AGREEMENT
          </p>

          <h3 className="text-xl font-semibold mt-4">Introduction</h3>
          <p className="text-gray-700">
            Today, almost all organizations face challenges in handling Channel
            Partner Firms and Freelancers. SoftWave Technify is a mobile app-based
            platform that provides a one-stop solution for efficiently managing
            channel partner firms and freelancers nationwide.
          </p>

          <p className="text-gray-700">
            SoftWave Technify provides customer lead management, follow-up management,
            agent offerings, commission-based work, agent earnings, dashboards,
            and reports for both B2C and B2B projects.
          </p>

          <p className="text-gray-700">
            By registering and using the App, you agree to this Privacy Policy.
            Effective as of January 14, 2026.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Responsible Use and Conduct
          </h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
            <li>Provide accurate information during registration.</li>
            <li>Maintain confidentiality of login credentials.</li>
            <li>Do not access the App through unauthorized means.</li>
            <li>Avoid disrupting or interfering with services.</li>
            <li>No resale or misuse of services.</li>
            <li>Third-party links are accessed at your own risk.</li>
            <li>No illegal, abusive, or infringing content.</li>
            <li>Accounts violating policy may be removed.</li>
            <li>
              You indemnify SoftWave Technify from losses due to violations.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Privacy</h3>
          <p className="text-gray-700">
            Your privacy matters. We collect, process, and store information
            securely as outlined in this policy.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Limitation of Warranties
          </h3>
          <p className="text-gray-700">
            Services are provided on an “as-is” basis without guarantees of
            uninterrupted availability.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Limitation of Liability
          </h3>
          <p className="text-gray-700">
            SoftWave Technify is a facilitator and is not liable for indirect or
            consequential losses.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Copyrights / Trademarks
          </h3>
          <p className="text-gray-700">
            All content is the intellectual property of M/s SoftWave Technify PRIVATE
            LIMITED.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Termination of Use
          </h3>
          <p className="text-gray-700">
            Access may be suspended or terminated for violations or illegal
            activities.
          </p>

          <h3 className="text-xl font-semibold mt-4">Governing Law</h3>
          <p className="text-gray-700">
            Governed by the laws of Delhi, India.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Cancellation and Refund
          </h3>
          <p className="text-gray-700">
            All sales are final. Refunds only apply to failed transactions within
            24 hours.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Contact Information
          </h3>
          <p className="text-gray-700">
            M/s SoftWave Technify PRIVATE LIMITED
          </p>

          <p className="text-gray-500 mt-8 text-sm">
            © {new Date().getFullYear()} SoftWave Technify. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
