import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Box,
  FileText,
  Users,
  ArrowRight,
  Check,
  Megaphone,
  Code2,
  Lightbulb,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import web from "../../../assets/web.png";
import mobile from "../../../assets/mobile.png";
import ecommerce from "../../../assets/ecommerce.png";
import erp from "../../../assets/erp.png";
import cms from "../../../assets/cms.png";
import crm from "../../../assets/crm.png";
import digitalMarketing from "../../../assets/digital.png";
import customSoftware from "../../../assets/custom.png";
import productDev from "../../../assets/product.png";
import digitalTransform from "../../../assets/transform.png";

const services = [
  {
    id: "website",
    label: "Website Development",
    heading: "Professional Website Development",
    tag: "Premium IT Services",
    subtitle: "Build fast, modern & scalable websites",
    description:
      "We create responsive, SEO-friendly, and high-performance websites tailored to your business needs. Our expert team delivers cutting-edge solutions that drive results.",
    image: web,
    icon: <Monitor className="w-7 h-7" />,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Secure & Scalable",
    ],
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    heading: "Mobile App Development",
    tag: "Premium IT Services",
    subtitle: "Powerful mobile apps for Android & iOS",
    description:
      "From idea to launch, we develop secure and scalable mobile applications with exceptional UI/UX. Transform your business with innovative mobile solutions.",
    image: mobile,
    icon: <Smartphone className="w-7 h-7" />,
    features: [
      "Cross-Platform",
      "Native Performance",
      "User-Centric Design",
      "Cloud Integration",
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce Development",
    heading: "E-commerce Solutions",
    tag: "Premium IT Services",
    subtitle: "Sell smarter with powerful online stores",
    description:
      "We build conversion-focused e-commerce platforms with secure payment gateways, intuitive admin panels, and advanced analytics to boost your online sales.",
    image: ecommerce,
    icon: <ShoppingCart className="w-7 h-7" />,
    features: [
      "Payment Gateway",
      "Inventory Management",
      "Analytics Dashboard",
      "Mobile Commerce",
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    heading: "Digital Marketing Services",
    tag: "Growth & Marketing",
    subtitle: "Grow your brand with data-driven strategies",
    description:
      "Comprehensive digital marketing solutions including SEO, social media marketing, PPC campaigns, and content marketing to maximize your online presence and ROI.",
    image: digitalMarketing,
    icon: <Megaphone className="w-7 h-7" />,
    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Strategy",
      "Performance Analytics",
    ],
  },
  {
    id: "custom-software",
    label: "Custom Software Development",
    heading: "Custom Software Solutions",
    tag: "Enterprise Solutions",
    subtitle: "Tailored software for unique business needs",
    description:
      "Build custom software solutions perfectly aligned with your business processes. From concept to deployment, we create scalable applications that solve your specific challenges.",
    image: customSoftware,
    icon: <Code2 className="w-7 h-7" />,
    features: [
      "Bespoke Solutions",
      "Scalable Architecture",
      "API Integration",
      "Ongoing Support",
    ],
  },
  {
    id: "product-development",
    label: "Product Development",
    heading: "Product Development & Innovation",
    tag: "Innovation Lab",
    subtitle: "Turn your ideas into market-ready products",
    description:
      "End-to-end product development from ideation to launch. We help startups and enterprises build innovative digital products with cutting-edge technology and design.",
    image: productDev,
    icon: <Lightbulb className="w-7 h-7" />,
    features: [
      "MVP Development",
      "UX/UI Design",
      "Market Research",
      "Iterative Development",
    ],
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    heading: "Digital Transformation Services",
    tag: "Enterprise Modernization",
    subtitle: "Modernize your business for the digital age",
    description:
      "Transform your legacy systems and processes with modern technology. We help organizations embrace digital innovation to improve efficiency and stay competitive.",
    image: digitalTransform,
    icon: <Zap className="w-7 h-7" />,
    features: [
      "Process Automation",
      "Cloud Migration",
      "Legacy Modernization",
      "Change Management",
    ],
  },
  {
    id: "erp",
    label: "ERP Development",
    heading: "Enterprise ERP Solutions",
    tag: "Enterprise Solutions",
    subtitle: "Manage business operations efficiently",
    description:
      "Custom ERP solutions to streamline finance, HR, inventory, and operations in one unified system. Enhance productivity and drive business growth.",
    image: erp,
    icon: <Box className="w-7 h-7" />,
    features: [
      "Integrated Modules",
      "Real-time Data",
      "Automated Workflows",
      "Custom Reports",
    ],
  },
  {
    id: "cms",
    label: "CMS Development",
    heading: "Content Management Systems",
    tag: "Content Management",
    subtitle: "Control your content with ease",
    description:
      "User-friendly CMS solutions that empower you to update and manage content effortlessly without technical knowledge. Full control at your fingertips.",
    image: cms,
    icon: <FileText className="w-7 h-7" />,
    features: [
      "Easy Content Updates",
      "Multi-user Access",
      "Media Management",
      "SEO Tools",
    ],
  },
  {
    id: "crm",
    label: "CRM Development",
    heading: "Customer Relationship Management",
    tag: "Customer Management",
    subtitle: "Build better customer relationships",
    description:
      "Custom CRM systems designed to track leads, manage customer interactions, and boost sales productivity. Transform your customer relationships.",
    image: crm,
    icon: <Users className="w-7 h-7" />,
    features: [
      "Lead Tracking",
      "Sales Pipeline",
      "Customer Insights",
      "Automation",
    ],
  },
];

const AllServices = () => {
  const [active, setActive] = useState(services[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleServiceChange = (service) => {
    if (service.id !== active.id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive(service);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const handleViewDetails = () => {
    navigate("/detailsproject");
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-6 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive IT Solutions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering excellence across all dimensions of digital
            transformation
          </p>
        </div>

        {/* Tabs Container */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-10 border border-gray-100">
          <div className="flex justify-start md:justify-center gap-3 md:gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(service)}
                className={`flex flex-col items-center gap-3 min-w-[110px] md:min-w-[130px] p-3 rounded-xl transition-all duration-300 ${
                  active.id === service.id
                    ? "text-indigo-600 scale-105"
                    : "text-gray-500 hover:text-indigo-500 hover:scale-102"
                }`}
              >
                <div
                  className={`p-3 md:p-4 rounded-xl transition-all duration-300 ${
                    active.id === service.id
                      ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "bg-gray-50 hover:bg-indigo-50"
                  }`}
                >
                  {service.icon}
                </div>
                <span className="text-xs md:text-sm font-semibold text-center leading-tight px-2">
                  {service.label}
                </span>
                {active.id === service.id && (
                  <div className="w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full shadow-sm"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl  overflow-hidden border border-gray-100">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 text-xs md:text-sm font-bold px-5 py-2 rounded-full mb-6 border border-indigo-200">
                    {active.tag}
                  </span>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {active.heading}
                  </h2>

                  <p className="text-indigo-600 font-bold text-lg md:text-xl mb-6">
                    {active.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {active.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {active.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0">
                        <Check className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleViewDetails}
                    className="group bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    View More Details
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Decorative Background Elements */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-xl">
                  <img
                    src={active.image}
                    alt={active.heading}
                    className="relative w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-t border-gray-100 px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                  98%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                  50+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Expert Developers
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AllServices;