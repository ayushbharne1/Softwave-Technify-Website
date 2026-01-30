import React from "react";
import { Link2, Megaphone, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

const Joinus = () => {
  const steps = [
    {
      id: 1,
      title: "Choose a Brand",
      desc: "Select trusted and high-converting brands to promote",
      icon: <ShoppingBag className="w-10 h-10 text-sky-600" />,
    },
    {
      id: 2,
      title: "Generate Links",
      desc: "Create your unique affiliate links instantly",
      icon: <Link2 className="w-10 h-10 text-indigo-600" />,
    },
    {
      id: 3,
      title: "Promote & Earn",
      desc: "Share links and earn commissions effortlessly",
      icon: <Megaphone className="w-10 h-10 text-purple-600" />,
    },
  ];

  return (
    <section className="relative min-h-screen max-w-full overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-24 px-6">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-16">
          <span className="inline-block mb-5 px-5 py-1.5 text-sm font-semibold rounded-full bg-sky-100 text-sky-700">
            Simple • Fast • Profitable
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Start Earning with{" "}
            <span className="relative inline-block">
              <span className="relative z-10">SoftWave Technify</span>
              <span className="absolute left-0 bottom-2 w-full h-3 bg-sky-200 -z-0 rounded-md"></span>
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Join SoftWave and launch your affiliate journey in just three
            simple steps. No experience required.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="w-28 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"></span>
          </div>
        </div>

        {/* Steps (Full Width, Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative group bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full"
            >
              {/* Step Badge */}
              <div className="absolute -top-5 -right-5 w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <NavLink
            to="/login"
            className="inline-flex items-center justify-center bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-16 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Join Now
          </NavLink>

          <p className="text-gray-500 text-sm mt-4">
            Start your journey today 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Joinus;
