import React, { useState, useRef, useEffect } from "react";
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Box,
  FileText,
  Users,
  Megaphone,
  Code2,
  Lightbulb,
  Zap,
  Search,
  ArrowLeft,
  Rocket,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Website",
    subtitle: "Modern & Scalable Solutions",
    icon: <Monitor className="w-7 h-7" />,
    bgColor: "bg-blue-500",
    status: "Active",
    benefits: [
      "Responsive & Mobile-First Design",
      "SEO Optimized Architecture",
      "Lightning Fast Performance",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 2500",
    liveCount: 15,
  },
  {
    id: 2,
    title: "Mobile",
    subtitle: "iOS & Android Apps",
    icon: <Smartphone className="w-7 h-7" />,
    bgColor: "bg-purple-500",
    status: "Active",
    benefits: [
      "Cross-Platform Development",
      "Native Performance & Features",
      "Seamless User Experience",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 3200",
    liveCount: 12,
  },
  {
    id: 3,
    title: "E-commerce",
    subtitle: "Complete Online Store Solutions",
    icon: <ShoppingCart className="w-7 h-7" />,
    bgColor: "bg-green-500",
    status: "Active",
    benefits: [
      "Secure Payment Integration",
      "Inventory Management System",
      "Advanced Analytics Dashboard",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 4500",
    liveCount: 18,
  },
  {
    id: 4,
    title: "ERP",
    subtitle: "Enterprise Resource Planning",
    icon: <Box className="w-7 h-7" />,
    bgColor: "bg-orange-500",
    status: "Active",
    benefits: [
      "Integrated Business Modules",
      "Real-time Data Synchronization",
      "Custom Workflow Automation",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 5000",
    liveCount: 8,
  },
  {
    id: 5,
    title: "CMS",
    subtitle: "Content Management Systems",
    icon: <FileText className="w-7 h-7" />,
    bgColor: "bg-indigo-500",
    status: "Active",
    benefits: [
      "Easy Content Updates",
      "Multi-user Access Control",
      "SEO-Friendly Structure",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 2800",
    liveCount: 10,
  },
  {
    id: 6,
    title: "CRM",
    subtitle: "Customer Relationship Management",
    icon: <Users className="w-7 h-7" />,
    bgColor: "bg-pink-500",
    status: "Active",
    benefits: [
      "Lead Tracking & Management",
      "Sales Pipeline Automation",
      "Customer Analytics & Reports",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 3500",
    liveCount: 14,
  },
  {
    id: 7,
    title: "Digital",
    subtitle: "Growth & Marketing Solutions",
    icon: <Megaphone className="w-7 h-7" />,
    bgColor: "bg-red-500",
    status: "Active",
    benefits: [
      "SEO & SEM Strategies",
      "Social Media Campaign Management",
      "Performance Analytics & ROI",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 3800",
    liveCount: 20,
  },
  {
    id: 8,
    title: "Custom",
    subtitle: "Tailored Business Solutions",
    icon: <Code2 className="w-7 h-7" />,
    bgColor: "bg-teal-500",
    status: "Active",
    benefits: [
      "Bespoke Software Solutions",
      "Scalable Architecture Design",
      "API Integration & Development",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 6000",
    liveCount: 9,
  },
  {
    id: 9,
    title: "Product",
    subtitle: "Innovation & MVP Creation",
    icon: <Lightbulb className="w-7 h-7" />,
    bgColor: "bg-yellow-500",
    status: "Active",
    benefits: [
      "MVP Development & Launch",
      "User Research & Testing",
      "Iterative Product Enhancement",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 4800",
    liveCount: 11,
  },
  {
    id: 10,
    title: "Digital",
    subtitle: "Enterprise Modernization",
    icon: <Zap className="w-7 h-7" />,
    bgColor: "bg-cyan-500",
    status: "Active",
    benefits: [
      "Legacy System Modernization",
      "Cloud Migration Services",
      "Process Automation & AI",
    ],
    goals: "Dispatch & Transaction",
    earnings: "₹ 7500",
    liveCount: 6,
  },
];

const DetailsProject = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const totalLiveProjects = projectsData.reduce(
    (acc, project) => acc + project.liveCount,
    0,
  );

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleShare = (project) => {
    const safeProject = {
      id: project.id,
      title: project.title,
      subtitle: project.subtitle,
      earnings: project.earnings,
      goals: project.goals,
      liveCount: project.liveCount,
      benefits: project.benefits,
    };

    navigate("/detailsform", {
      state: safeProject,
    });
  };

  // Infinite Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let isPaused = false;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5; // Adjust speed here (lower = slower, higher = faster)

        // Reset scroll position for infinite loop
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Duplicate items for infinite scroll effect
  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="
    inline-flex items-center gap-2
    px-4 py-2
    mb-6
    rounded-xl
    border border-gray-200
    bg-white
    text-gray-700 font-semibold
    shadow-sm
    hover:bg-indigo-50
    hover:text-indigo-600
    hover:border-indigo-200
    transition-all duration-300
    active:scale-95
  "
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Live Projects Header */}
        <div className="bg-gray-200 rounded-xl py-4 px-6 mb-8 text-center">
          <span className="text-gray-900 font-semibold text-lg">
            Live Projects: {totalLiveProjects}
          </span>
        </div>

        {/* Project Category Pills - Infinite Auto Scrolling Carousel */}
        <div className="bg-white rounded-2xl shadow-md py-8 px-6 mb-8 overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden">
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex flex-col items-center min-w-[90px] flex-shrink-0 cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 ${project.bgColor} rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {project.icon}
                </div>
                <span className="text-sm font-medium text-gray-800 text-center whitespace-nowrap">
                  {project.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter project name to check details..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-gray-700 bg-white shadow-md"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="p-6">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-xl ${project.bgColor} text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                    {project.status}
                  </span>
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {project.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Goals & Earnings Section */}
                <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Goals</p>
                      <div className="flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-gray-800">
                          {project.goals}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 mb-1">Price</p>
                      <span className="text-xl font-bold text-indigo-600">
                        {project.earnings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Projects Count */}
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600">
                    Live Projects:{" "}
                    <span className="font-bold text-indigo-600">
                      {project.liveCount}
                    </span>
                  </span>
                </div>

                {/* Share Button */}
                <button
                  onClick={() => handleShare(project)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition-all"
                >
                  
                  <span className="font-semibold">Submit</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsProject;
