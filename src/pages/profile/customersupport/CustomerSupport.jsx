import { ArrowLeft, Send, AlertCircle } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const CustomerSupport = () => {
  /* ✅ SAFE CONTEXT */
  const outletContext = useOutletContext() || {};
  const openSidebar = outletContext.openSidebar;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* HEADER */}
      <div className="px-4 py-3 flex items-center gap-3 mt-10 bg-gray-50 sticky top-0 z-10">
        {/* Arrow → only small device */}
        <button
          onClick={() => openSidebar && openSidebar()}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 active:scale-95"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-xl font-bold text-black">Awaiting your details</h1>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 max-w-3xl mx-auto w-full">
        {/* DATE */}
        <div className="flex justify-center">
          <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
            Yesterday
          </span>
        </div>

        {/* USER MESSAGE */}
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[75%] text-sm">
            Hello! I need help..
            <div className="text-[10px] text-blue-100 text-right mt-1">
              12:37 PM ✓
            </div>
          </div>
        </div>

        {/* OPERATOR MESSAGE */}
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xs">👤</span>
          </div>

          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[75%] text-sm">
            How would you like to be addressed?
            <div className="text-[10px] text-gray-500 mt-1">12:37 PM</div>
          </div>
        </div>

        {/* FAILED MESSAGE */}
        <div className="flex justify-end items-center gap-2">
          <AlertCircle className="text-red-500 w-5 h-5" />
          <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-[75%] text-sm">
            -
            <div className="text-[10px] text-blue-100 text-right mt-1">
              03:19 PM
            </div>
          </div>
        </div>
      </div>

      {/* INPUT BAR */}
      <div className="px-3 py-2 border-t bg-white flex items-center gap-2 sticky bottom-0">
        <input
          type="text"
          placeholder="Please wait..."
          className="flex-1 px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="text-blue-600 p-2 hover:bg-gray-100 rounded-full">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CustomerSupport;
