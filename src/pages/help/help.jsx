import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How do I get started with the website?",
    answer: "Register using your mobile number, verify OTP, and complete your profile with name, DOB, and location. Once registered, you can explore features."
  },
  {
    question: "How does earning work?",
    answer: "Earnings are tracked in 'My Earnings' where you can see self-earn, team earn, and referral earnings."
  },
  {
    question: "How do I update my profile?",
    answer: "Go to your profile page, click edit, and update your information. Make sure to save changes before leaving."
  },
  {
    question: "What is this website for?",
    answer: "This website provides a platform for users to participate in training programs, earn rewards, and track their progress efficiently."
  },
  {
    question: "Who can I contact for support?",
    answer: "Use the contact form below to submit your queries or issues. Our team will respond as soon as possible."
  }
];

const Help = () => {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <h1 
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-800"
        data-aos="fade-down"
      >
        Help & Support
      </h1>

      <div 
        className="max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search help topics..."
          className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        {filteredFaqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md mb-4 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={150 + (i * 50)}
          >
            <button
              className="w-full text-left p-6 flex justify-between items-center font-semibold text-gray-800 focus:outline-none"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              {faq.question}
              <span className="text-xl">{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && (
              <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <h2 
        className="text-3xl font-bold mb-6 text-center text-gray-800"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        About This Website
      </h2>
      
      <h2 
        className="text-3xl font-bold mb-6 text-center text-gray-800"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        Contact Support
      </h2>
      
      <form 
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md grid gap-6"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <input 
          type="text" 
          placeholder="Your Name" 
          className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea 
          placeholder="Describe your issue..." 
          className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Help;