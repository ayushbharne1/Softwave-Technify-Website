import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/footernextwave.jpeg";
import {
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Home,
  Users,
  BarChart2,
  GraduationCap,
} from "lucide-react";

/* ---------- BRAND ---------- */
const FooterBrand = () => (
  <div>
    <div className="flex items-center gap-2 mb-4">
      {/* WEBSITE LOGO */}
      <img
        src={logo}
        alt="RevenueHub Logo"
        className="w-40 h-16 object-contain rounded"
      />
      {/* <span className="text-xl font-bold">RevenueHub</span> */}
    </div>
    <p className="text-sm text-gray-400 mb-4">
      SoftWave provides provisions as a Indian progressive to select top
      financial products to earn commissions.
    </p>
    <p className="text-xs text-gray-500">
      © dhi's SoftWave. All rights reserved.
    </p>
  </div>
);

/* ---------- COLUMN ---------- */
const FooterColumn = ({ title, items }) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm text-gray-400">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            className="flex items-center gap-2 hover:text-white transition"
          >
            {item.icon}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------- SOCIAL ---------- */
const FooterSocial = () => (
  <div className="flex gap-3 mt-6">
    <a href="https://t.me" target="_blank" rel="noreferrer">
      <Send className="w-5 h-5 hover:text-white" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <Instagram className="w-5 h-5 hover:text-white" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <Facebook className="w-5 h-5 hover:text-white" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <Linkedin className="w-5 h-5 hover:text-white" />
    </a>
  </div>
);

/* ---------- FOOTER ---------- */
const Footer = () => (
  <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-8 rounded-t-3xl mt-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
      <FooterBrand />

      <FooterColumn
        title="Quick links"
        items={[
          { label: "Home", path: "/", icon: <Home size={16} /> },
          { label: "My Team", path: "/team", icon: <Users size={16} /> },
          { label: "Leads", path: "/lead", icon: <BarChart2 size={16} /> },
          {
            label: "Trainings",
            path: "/training",
            icon: <GraduationCap size={16} />,
          },
        ]}
      />

      <FooterColumn
        title="Popular Projects"
        items={[
          { label: "Credit Card", path: "/projects/credit-card" },
          { label: "Demat Account", path: "/projects/demat-account" },
          { label: "Savings Account", path: "/projects/savings-account" },
          { label: "Instant Loan", path: "/projects/instant-loan" },
        ]}
      />

      <div>
        <FooterColumn
          title="Learn More"
          items={[
            { label: "Help", path: "/help" },
            { label: "Privacy Policy", path: "/profile/terms-conditions" },
          ]}
        />
        <FooterSocial />
      </div>
    </div>

    <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-700">
      <p>
        Your header replaces anywhere more as they hesitant model no near
        insurance charges
      </p>
      <p>your choice nghbrs Add incidents</p>
      <p className="mt-2">
        legal manuals be copied+https drug +520 broad count
      </p>
    </div>
  </footer>
);

export default Footer;