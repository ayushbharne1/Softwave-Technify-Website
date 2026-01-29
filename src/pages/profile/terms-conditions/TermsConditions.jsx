import React from "react";
import { ArrowLeft } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const TermsConditions = () => {
  /* ✅ SAFE CONTEXT */
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
          Terms & Conditions
        </h1>
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 md:p-8 space-y-6">
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Terms & Conditions
          </h2>

          <p className="text-gray-700 text-sm md:text-base">
            M/S REVENUE HUB PRIVATE LIMITED (Revenue Hub) <br />
            TERMS & CONDITIONS cum USER AGREEMENT
          </p>

          <h3 className="text-xl font-semibold mt-4">Introduction</h3>
          <p className="text-gray-700">
            Today, almost all organizations face challenges in handling Channel
            Partner Firms and Freelancers, including scaling or quality issues.
            Revenue Hub ("Revenue Hub," "our," "we," or "us") is a mobile
            app-based platform that provides a one-stop solution for efficiently
            managing channel partner firms and freelancers nationwide.
          </p>

          <p className="text-gray-700">
            Revenue Hub provides: Customer lead management, follow-up management,
            agent offerings, commission-based work, agent earnings, and dashboards
            & reports. Our services are useful for B2C and B2B projects including
            Loans, Credit Cards, Savings Accounts, Insurance, Lead Generation,
            Merchant onboarding, and more.
          </p>

          <p className="text-gray-700">
            By registering and using the App, you agree to these terms along with
            our Privacy Policy. Effective January 14, 2026.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Responsible Use and Conduct
          </h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
            <li>Provide accurate information during registration.</li>
            <li>Maintain confidentiality of login credentials.</li>
            <li>Do not access the App via unauthorized means.</li>
            <li>Avoid actions disrupting our services.</li>
            <li>No copying, reselling, or misuse of services.</li>
            <li>Third-party links are used at your own risk.</li>
            <li>No illegal, abusive, or infringing content.</li>
            <li>Violations may lead to account termination.</li>
            <li>
              You indemnify Revenue Hub against losses caused by violations.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Privacy</h3>
          <p className="text-gray-700">
            Your privacy matters. Please review our Privacy Policy to understand
            data collection and protection practices.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Limitation of Warranties
          </h3>
          <p className="text-gray-700">
            Services are provided “as-is” without guarantees of uninterrupted or
            error-free operation.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Limitation of Liability
          </h3>
          <p className="text-gray-700">
            Revenue Hub is a facilitator and is not liable for indirect or
            consequential losses.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Copyrights / Trademarks
          </h3>
          <p className="text-gray-700">
            All content is the intellectual property of M/s REVENUE HUB PRIVATE
            LIMITED.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Termination of Use
          </h3>
          <p className="text-gray-700">
            We may suspend or terminate access for violations or illegal activity.
          </p>

          <h3 className="text-xl font-semibold mt-4">Governing Law</h3>
          <p className="text-gray-700">
            Governed by the laws of Delhi, India.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Cancellation and Refund
          </h3>
          <p className="text-gray-700">
            All sales are final. Refunds only for failed services within 24 hours.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Contact Information
          </h3>
          <p className="text-gray-700">
            M/s REVENUE HUB PRIVATE LIMITED
          </p>

          <p className="text-gray-500 mt-8 text-sm">
            © {new Date().getFullYear()} Revenue Hub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
