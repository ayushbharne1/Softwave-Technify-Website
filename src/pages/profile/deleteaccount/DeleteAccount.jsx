import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const DeleteAccount = () => {
  const [checked, setChecked] = useState(false);

  const outletContext = useOutletContext() || {};
  const openSidebar = outletContext.openSidebar;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <div className="flex items-center gap-3 px-6 py-5 mt-8 md:mt-6">
        {/* Mobile Arrow */}
        <button
          onClick={() => openSidebar && openSidebar()}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-xl md:text-2xl font-semibold text-black">
          Delete Account
        </h1>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="px-6 pb-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
          
          {/* TEXT CONTENT */}
          <div className="text-gray-700 text-sm md:text-[15px] leading-relaxed space-y-4">
            <p>
              Upon receiving delete request, you can continue using the ARYO app
              without any interruptions for 15 working days.
            </p>

            <p>
              If your decision to delete your account remains final, after the
              15 working days period, your account will be permanently deleted
              from our end.
            </p>

            <div>
              <p className="font-medium mb-2">
                Deleting your account will result in the following actions:
              </p>

              <ol className="list-decimal ml-5 space-y-2">
                <li>You will be logged out from all the devices.</li>
                <li>
                  Following information will be deleted:
                  <div className="ml-4 mt-2 space-y-1">
                    <p>a) Your registered name, mobile, email and pincode</p>
                    <p>b) Your KYC details along with Bank account information</p>
                    <p>c) Any other information taken during association</p>
                    <p>d) Team related information will be deleted</p>
                    <p>e) Customer leads will be retained</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="flex items-start gap-3 mt-8">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-1 h-5 w-5 border-gray-300 rounded cursor-pointer"
            />
            <p className="text-sm text-gray-700">
              Delete my ARYO advisor account and the data associated with my
              account
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-8">
            <button
              disabled={!checked}
              className={`w-full py-3 rounded-xl font-semibold transition
                ${
                  checked
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              OK, DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
